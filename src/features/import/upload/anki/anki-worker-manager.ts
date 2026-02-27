/**
 * Anki Worker Manager
 * Handles communication with the Anki extraction worker thread
 */

import type { AnkiExtractedData } from "./anki-types"
import AnkiWorker from "./anki-worker?worker"

interface PendingRequest {
  resolve: (result: AnkiExtractedData) => void
  reject: (error: Error) => void
}

type WorkerMessage =
  | { type: "ready" }
  | { type: "extract-result"; id: number; extractedData: any }
  | { type: "extract-error"; id: number; message: string }
  | { type: "error"; message: string }

export class AnkiWorkerManager {
  private worker: Worker
  private ready = false
  private readyPromise: Promise<void>
  private resolveReady!: () => void
  private pendingRequests = new Map<number, PendingRequest>()
  private nextRequestId = 1

  constructor() {
    // Create worker that runs off-thread to keep main thread responsive
    // Vite bundles the worker and its dependencies automatically with ?worker syntax
    this.worker = new AnkiWorker()

    // Setup message handler
    this.worker.onmessage = (event) => {
      this.handleWorkerMessage(event.data)
    }

    this.worker.onerror = (error) => {
      console.error("[AnkiWorkerManager] Worker error:", error)
    }

    // Promise that resolves when worker is ready
    this.readyPromise = new Promise((resolve) => {
      this.resolveReady = resolve
    })

    // Worker initializes automatically when created
  }

  private handleWorkerMessage(data: WorkerMessage) {
    if (data.type === "ready") {
      this.ready = true
      this.resolveReady()
    } else if (data.type === "extract-result") {
      const { id, extractedData } = data
      const request = this.pendingRequests.get(id)
      if (request) {
        this.pendingRequests.delete(id)
        // Convert serialized data back to proper structure
        // Note: Object.entries() converts keys to strings, so convert back to numbers
        const result: AnkiExtractedData = {
          ...extractedData,
          cards: new Map(
            Object.entries(extractedData.cards).map(([k, v]) => [
              Number(k),
              v,
            ]),
          ),
          reviews: new Map(
            Object.entries(extractedData.reviews).map(([k, v]) => [
              Number(k),
              v,
            ]),
          ),
        }
        request.resolve(result)
      }
    } else if (data.type === "extract-error") {
      const { id, message } = data
      const request = this.pendingRequests.get(id)
      if (request) {
        this.pendingRequests.delete(id)
        request.reject(new Error(message))
      }
    } else if (data.type === "error") {
      console.error("[AnkiWorkerManager] Worker error:", data.message)
    }
  }

  async waitForReady(): Promise<void> {
    return this.readyPromise
  }

  isReady(): boolean {
    return this.ready
  }

  async extractAnkiData(file: File): Promise<AnkiExtractedData> {
    // Ensure worker is ready before extracting
    await this.readyPromise

    return new Promise((resolve, reject) => {
      const id = this.nextRequestId++

      this.pendingRequests.set(id, { resolve, reject })

      try {
        // Convert File to ArrayBuffer for transfer to worker
        const reader = new FileReader()

        reader.onload = () => {
          try {
            const fileBuffer = reader.result as ArrayBuffer

            // Transfer the buffer to the worker (ownership transfer for performance)
            this.worker.postMessage(
              {
                type: "extract",
                id,
                fileBuffer,
              },
              [fileBuffer], // Transferable objects - worker gets ownership
            )
          } catch (error) {
            this.pendingRequests.delete(id)
            reject(error)
          }
        }

        reader.onerror = () => {
          this.pendingRequests.delete(id)
          reject(new Error("Failed to read file"))
        }

        reader.readAsArrayBuffer(file)
      } catch (error) {
        this.pendingRequests.delete(id)
        reject(error)
      }
    })
  }

  terminate() {
    this.worker.terminate()
  }
}

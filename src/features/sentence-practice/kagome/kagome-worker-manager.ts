/**
 * Kagome Worker Manager
 * Handles communication with the Kagome WASM worker thread
 */

import type { KagomeToken } from "./types/kagome"

interface PendingRequest {
  resolve: (tokens: KagomeToken[]) => void
  reject: (error: Error) => void
}

export class KagomeWorkerManager {
  private worker: Worker
  private ready = false
  private readyPromise: Promise<void>
  private resolveReady!: () => void
  private pendingRequests = new Map<number, PendingRequest>()
  private nextRequestId = 1

  constructor() {
    // Create worker that runs off-thread to keep main thread responsive
    this.worker = new Worker("/kagome/kagome-worker.js")

    // Setup message handler
    this.worker.onmessage = (event) => {
      this.handleWorkerMessage(event.data)
    }

    this.worker.onerror = (error) => {
      console.error("[Kagome Worker Manager] Worker error:", error)
    }

    // Promise that resolves when worker is ready
    this.readyPromise = new Promise((resolve) => {
      this.resolveReady = resolve
    })

    // Worker initializes automatically when created
  }

  private handleWorkerMessage(data: any) {
    if (data.type === "ready") {
      this.ready = true
      this.resolveReady()
    } else if (data.type === "tokenize-result") {
      const { id, tokens } = data
      const request = this.pendingRequests.get(id)
      if (request) {
        this.pendingRequests.delete(id)
        request.resolve(tokens)
      }
    } else if (data.type === "tokenize-error") {
      const { id, message } = data
      const request = this.pendingRequests.get(id)
      if (request) {
        this.pendingRequests.delete(id)
        request.reject(new Error(message))
      }
    } else if (data.type === "error") {
      console.error("[Kagome Worker Manager] Worker error:", data.message)
    }
  }

  async waitForReady(): Promise<void> {
    return this.readyPromise
  }

  isReady(): boolean {
    return this.ready
  }

  async tokenize(text: string): Promise<KagomeToken[]> {
    // Ensure worker is ready before tokenizing
    await this.readyPromise

    return new Promise((resolve, reject) => {
      const id = this.nextRequestId++
      this.pendingRequests.set(id, { resolve, reject })

      try {
        this.worker.postMessage({
          type: "tokenize",
          id,
          text,
        })
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

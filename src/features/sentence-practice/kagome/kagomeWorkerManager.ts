// Kagome Worker Manager - handles communication with Kagome WASM worker

import type {
  KagomeToken,
  TokenizationResult,
  PatternMatch,
  CompoundSpan,
} from "./types"

interface PendingRequest {
  resolve: (result: TokenizationResult) => void
  reject: (error: Error) => void
}

class KagomeWorkerManager {
  private worker: Worker
  private ready = false
  private readyPromise: Promise<void>
  private resolveReady!: () => void
  private pendingRequests = new Map<number, PendingRequest>()
  private nextRequestId = 1

  constructor() {
    this.worker = new Worker("/kagome/kagome-worker.js", { type: "module" })

    this.worker.onmessage = (event) => {
      this.handleWorkerMessage(event.data)
    }

    this.worker.onerror = (error) => {
      console.error("[Kagome Worker Manager] Worker error:", error)
    }

    this.readyPromise = new Promise((resolve) => {
      this.resolveReady = resolve
    })
  }

  private handleWorkerMessage(data: {
    type: string
    id?: number
    tokens?: KagomeToken[]
    grammarMatches?: unknown[]
    compoundSpans?: unknown[]
    message?: string
  }) {
    if (data.type === "ready") {
      this.ready = true
      this.resolveReady()
    } else if (data.type === "tokenize-result") {
      const { id, tokens, grammarMatches, compoundSpans } = data
      const request =
        id !== undefined ? this.pendingRequests.get(id) : undefined
      if (request) {
        this.pendingRequests.delete(id!)
        request.resolve({
          tokens: tokens ?? [],
          grammarMatches: (grammarMatches ?? []) as PatternMatch[],
          compoundSpans: (compoundSpans ?? []) as CompoundSpan[],
        })
      }
    } else if (data.type === "tokenize-error") {
      const { id, message } = data
      const request =
        id !== undefined ? this.pendingRequests.get(id) : undefined
      if (request) {
        this.pendingRequests.delete(id!)
        request.reject(new Error(message || "Tokenization failed"))
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

  async tokenize(text: string, timeoutMs = 10000): Promise<TokenizationResult> {
    await this.readyPromise

    return new Promise((resolve, reject) => {
      const id = this.nextRequestId++

      // Timeout cleanup
      const timeout = setTimeout(() => {
        this.pendingRequests.delete(id)
        reject(new Error(`Tokenization timeout after ${timeoutMs}ms`))
      }, timeoutMs)

      this.pendingRequests.set(id, {
        resolve: (result) => {
          clearTimeout(timeout)
          resolve(result)
        },
        reject: (error) => {
          clearTimeout(timeout)
          reject(error)
        },
      })

      try {
        this.worker.postMessage({ type: "tokenize", id, text })
      } catch (error) {
        clearTimeout(timeout)
        this.pendingRequests.delete(id)
        reject(error)
      }
    })
  }

  terminate() {
    this.worker.terminate()
  }
}

// Singleton instance
let instance: KagomeWorkerManager | null = null

export function getKagomeWorker(): KagomeWorkerManager {
  if (!instance) {
    instance = new KagomeWorkerManager()
  }
  return instance
}

export type { KagomeWorkerManager }

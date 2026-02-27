import Bottleneck from "bottleneck"

// Bottleneck configuration for AniList API
// AniList allows 90 requests per minute
export const ANILIST_RATE_LIMIT_CONFIG = {
  reservoir: 90, // 90 requests per minute
  reservoirRefreshAmount: 90,
  reservoirRefreshInterval: 60 * 1000, // 60 seconds
  maxConcurrent: 3, // Max 3 concurrent requests
  minTime: 200, // Min 200ms between requests
}

// Retry configuration for failed requests
export const RETRY_CONFIG = {
  maxRetries: 8,
  networkErrorWait: 60000, // 60 seconds for network errors
  serverErrorWait: 1000, // 1 second for 500 errors
  rateLimitBuffer: 1000, // 1 second buffer for retry-after
}

// Custom error class for fetch errors
export class FetchError extends Error {
  constructor(
    public res: Response,
    message?: string,
  ) {
    super(message || `Fetch failed with status ${res.status}`)
    this.name = "FetchError"
  }
}

// Parse retry-after header from rate limit responses
export function parseRetryAfter(retryAfter: string | null): number {
  if (!retryAfter) return RETRY_CONFIG.serverErrorWait
  const seconds = parseInt(retryAfter)
  return isNaN(seconds) ? RETRY_CONFIG.serverErrorWait : seconds * 1000
}

// Singleton Bottleneck instance for browser
let limiter: Bottleneck | null = null

export function getAniListLimiter(): Bottleneck {
  if (!limiter) {
    limiter = new Bottleneck(ANILIST_RATE_LIMIT_CONFIG)

    // Configure retry logic
    limiter.on("failed", async (error, jobInfo) => {
      if (error instanceof FetchError) {
        const status = error.res.status

        // Rate limit - respect retry-after header
        if (status === 429) {
          const retryAfter = error.res.headers.get("retry-after")
          const wait =
            parseRetryAfter(retryAfter) + RETRY_CONFIG.rateLimitBuffer
          console.log(`[RateLimit] AniList rate limited, retrying in ${wait}ms`)
          if (jobInfo.retryCount < RETRY_CONFIG.maxRetries) {
            return wait
          }
        }

        // Server error - retry after 1 second
        if (status === 500) {
          console.log(
            `[RateLimit] AniList server error, retrying in ${RETRY_CONFIG.serverErrorWait}ms`,
          )
          if (jobInfo.retryCount < RETRY_CONFIG.maxRetries) {
            return RETRY_CONFIG.serverErrorWait
          }
        }
      }

      // Network error - wait longer before retry
      if (error instanceof TypeError) {
        console.log(
          `[RateLimit] Network error, retrying in ${RETRY_CONFIG.networkErrorWait}ms`,
        )
        if (jobInfo.retryCount < RETRY_CONFIG.maxRetries) {
          return RETRY_CONFIG.networkErrorWait
        }
      }

      // Don't retry
      return undefined
    })
  }

  return limiter
}

// Rate-limited fetch wrapper for AniList API
export async function rateLimitedAniListFetch(
  url: string,
  options: RequestInit,
): Promise<Response> {
  const limiter = getAniListLimiter()

  return limiter.schedule(async () => {
    const res = await fetch(url, options)

    // Throw FetchError for retryable errors
    if (!res.ok && (res.status === 429 || res.status === 500)) {
      throw new FetchError(res)
    }

    return res
  })
}

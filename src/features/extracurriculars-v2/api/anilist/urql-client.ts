import { Client, cacheExchange, fetchExchange, ssrExchange } from "@urql/core"
import Bottleneck from "bottleneck"

class FetchError extends Error {
  constructor(
    public res: Response,
    message?: string,
  ) {
    super(message)
    this.name = "FetchError"
  }
}

export function createUrqlClient(isServer: boolean) {
  // Create instance-level limiter for this client
  const limiter = new Bottleneck({
    reservoir: 90,
    reservoirRefreshAmount: 90,
    reservoirRefreshInterval: 60 * 1000,
    maxConcurrent: 3,
    minTime: 200,
  })

  let rateLimitPromise: Promise<void> | null = null

  const handleRequest = limiter.wrap(
    async (req: RequestInfo | URL, opts?: RequestInit) => {
      // Wait if globally rate limited
      await rateLimitPromise

      const res = await fetch(req, opts)

      // Detect rate limit and server errors
      if (!res.ok && (res.status === 429 || res.status === 500)) {
        throw new FetchError(res)
      }

      return res
    },
  )

  // Handle failed requests with retry logic
  limiter.on("failed", async (error: FetchError | Error, jobInfo) => {
    // Skip AbortErrors
    if (error.name === "AbortError") return undefined

    // Give up after 8 retries
    if (jobInfo.retryCount > 8) return undefined

    // Network failure: wait 60 seconds
    if (error.message === "Failed to fetch") {
      return setRateLimit(60000)
    }

    // Only handle FetchError for HTTP status codes
    if (!(error instanceof FetchError)) return 0

    // Server error: wait 1 second
    if (error.res.status === 500) return 1000

    // Rate limit error: use Retry-After header or default to 60 seconds
    const delay =
      (parseInt(error.res.headers.get("retry-after") ?? "60") + 1) * 1000

    return setRateLimit(delay)
  })

  function setRateLimit(ms: number) {
    // Create promise that pauses all requests until rate limit expires
    rateLimitPromise ??= new Promise((resolve) => {
      setTimeout(() => {
        rateLimitPromise = null
        resolve()
      }, ms)
    })
    return ms
  }

  const ssr = ssrExchange({
    isClient: !isServer,
  })

  const client = new Client({
    url: "https://graphql.anilist.co",
    preferGetMethod: false,
    fetch: handleRequest,
    exchanges: [ssr, cacheExchange, fetchExchange],
  })

  return { client, ssr }
}

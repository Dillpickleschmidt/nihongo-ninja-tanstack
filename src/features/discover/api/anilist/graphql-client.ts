import Bottleneck from 'bottleneck'
import { print } from 'graphql'

class FetchError extends Error {
  constructor(
    public res: Response,
    message?: string,
  ) {
    super(message)
    this.name = 'FetchError'
  }
}

// Rate limiter: 90 req/60s, max 3 concurrent (same as old urql-client)
const limiter = new Bottleneck({
  reservoir: 90,
  reservoirRefreshAmount: 90,
  reservoirRefreshInterval: 60 * 1000,
  maxConcurrent: 3,
  minTime: 200,
})

let rateLimitPromise: Promise<void> | null = null

export const rateLimitedFetch = limiter.wrap(
  async (url: string, options: RequestInit) => {
    await rateLimitPromise

    const res = await fetch(url, options)

    if (!res.ok && (res.status === 429 || res.status === 500)) {
      throw new FetchError(res)
    }

    return res
  },
)

// Handle failed requests with retry logic
limiter.on('failed', async (error: FetchError | Error, jobInfo) => {
  // Skip AbortErrors
  if (error.name === 'AbortError') return undefined

  // Give up after 8 retries
  if (jobInfo.retryCount > 8) {
    console.error(`[AniList] Failed after ${jobInfo.retryCount} retries`)
    return undefined
  }

  // Network failure: wait 60 seconds
  if (error.message === 'Failed to fetch') {
    console.warn(
      `[AniList] Network error (retry ${jobInfo.retryCount}/8, waiting 60s)`,
    )
    return setRateLimit(60000)
  }

  // Only handle FetchError for HTTP status codes
  if (!(error instanceof FetchError)) return 0

  // Server error: wait 1 second
  if (error.res.status === 500) {
    console.warn(
      `[AniList] Server error 500 (retry ${jobInfo.retryCount}/8, waiting 1s)`,
    )
    return 1000
  }

  // Rate limit error: use Retry-After header or default to 60 seconds
  // Add +1 second as buffer to ensure rate limit window passes
  const retryAfter = parseInt(error.res.headers.get('retry-after') ?? '60')
  const delay = (retryAfter + 1) * 1000
  console.warn(
    `[AniList] Rate limited (retry ${jobInfo.retryCount}/8, waiting ${retryAfter}s)`,
  )

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

// Public query function (no auth required)
export async function queryAniListPublic(query: any, variables: any = {}) {
  const queryString = print(query)
  const response = await rateLimitedFetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: queryString, variables }),
  })

  if (!response.ok) {
    throw new Error(`AniList API error: ${response.status}`)
  }

  return response.json()
}

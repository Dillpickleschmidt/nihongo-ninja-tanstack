import type { QueryCtx, MutationCtx } from "../_generated/server"
import type { Doc } from "../_generated/dataModel"
import { print } from "graphql"
import Bottleneck from "bottleneck"
import {
  ANILIST_RATE_LIMIT_CONFIG,
  FetchError,
  RETRY_CONFIG,
} from "../../src/features/discover/api/anilist/anilist-rate-limiter"

export const CACHE_DURATION_MS = 6 * 60 * 60 * 1000 // 6 hours

export function generateCacheKey(
  type: string,
  params: Record<string, any> = {},
): string {
  switch (type) {
    case "trending":
      return `trending:${params.season}:${params.year}`
    case "popular-season":
      return `popular-season:${params.season}:${params.year}`
    case "all-time-popular":
      return "all-time-popular"
    case "genre":
      return `genre:${params.genre}`
    default:
      throw new Error(`Unknown cache type: ${type}`)
  }
}

export async function getCachedAnime(ctx: QueryCtx, cacheKey: string) {
  return ctx.db
    .query("cachedAnime")
    .withIndex("by_cache_key", (q) => q.eq("cacheKey", cacheKey))
    .first()
}

// Lightweight check that only accesses metadata, avoiding the massive data field
export async function checkCacheStaleness(
  ctx: QueryCtx,
  cacheKey: string,
): Promise<boolean> {
  const cached = await ctx.db
    .query("cachedAnime")
    .withIndex("by_cache_key", (q) => q.eq("cacheKey", cacheKey))
    .first()

  // Only access expiresAt field (Convex should optimize to not load data field)
  return !cached || cached.expiresAt < Date.now()
}

export async function storeCachedAnime(
  ctx: MutationCtx,
  args: {
    cacheKey: string
    data: any
    hqImages?: Record<string, string>
    fetchedAt: number
    expiresAt: number
  },
) {
  const existing = await ctx.db
    .query("cachedAnime")
    .withIndex("by_cache_key", (q) => q.eq("cacheKey", args.cacheKey))
    .first()

  if (existing) {
    await ctx.db.patch(existing._id, args)
  } else {
    await ctx.db.insert("cachedAnime", args)
  }
}

export function isCacheStale(cached: Doc<"cachedAnime"> | null): boolean {
  return !cached || cached.expiresAt < Date.now()
}

// Selects 5 random anime with banners/trailers
export function generateBannerIndices(pageData: any): number[] {
  const media = pageData?.media
  if (!media) return []

  const validIndices: number[] = []
  media.forEach((item: any, index: number) => {
    if (item && (item.bannerImage || item.trailer?.id)) {
      validIndices.push(index)
    }
  })

  for (let i = validIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[validIndices[i], validIndices[j]] = [validIndices[j], validIndices[i]]
  }

  return validIndices.slice(0, 5)
}

/**
 * Extracts HQ image URL from anizip data
 * Priority: Fanart (landscape) > Poster (portrait)
 */
export function extractHqImageUrl(anizipData: any): string | null {
  const images = anizipData?.images || []
  const fanart = images.find((i: any) => i.coverType === "Fanart")?.url
  const poster = images.find((i: any) => i.coverType === "Poster")?.url
  return fanart || poster || null
}

export async function fetchFromAniList(
  query: any,
  variables: Record<string, any>,
): Promise<any> {
  const queryString = print(query)
  const response = await rateLimitedFetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: queryString, variables }),
  })

  if (!response.ok) {
    throw new Error(`AniList API error: ${response.status}`)
  }

  return await response.json()
}

export async function fetchAnizipData(anilistId: number): Promise<any | null> {
  try {
    const res = await fetch(
      `https://api.ani.zip/mappings?anilist_id=${anilistId}`,
      {
        headers: { "User-Agent": "nihongo-ninja/1.0" },
      },
    )

    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function processTrendingData(data: any): Promise<{
  hqImages: Record<string, string>
}> {
  const animeIds =
    data.data?.Page?.media?.filter((m: any) => m?.id).map((m: any) => m.id) ||
    []

  const anizipResults = await Promise.all(
    animeIds.map(async (anilistId: number) => {
      const anizipData = await fetchAnizipData(anilistId)
      const imageUrl = anizipData ? extractHqImageUrl(anizipData) : null
      return { anilistId, imageUrl }
    }),
  )

  const hqImages: Record<string, string> = {}
  for (const { anilistId, imageUrl } of anizipResults) {
    if (imageUrl) {
      hqImages[anilistId.toString()] = imageUrl
    }
  }

  return { hqImages }
}

// Rate Limiting (Private)
// Note: FetchError is now imported from shared lib

let limiter: Bottleneck | null = null
let rateLimitPromise: Promise<void> | null = null

function getLimiter(): Bottleneck {
  if (!limiter) {
    limiter = new Bottleneck(ANILIST_RATE_LIMIT_CONFIG)

    limiter.on("failed", async (error: FetchError | Error, jobInfo) => {
      if (error.name === "AbortError") return undefined

      if (jobInfo.retryCount > RETRY_CONFIG.maxRetries) {
        console.error(`[AniList] Failed after ${jobInfo.retryCount} retries`)
        return undefined
      }

      if (error.message === "Failed to fetch") {
        console.warn(
          `[AniList] Network error (retry ${jobInfo.retryCount}/${RETRY_CONFIG.maxRetries}, waiting 60s)`,
        )
        return setRateLimit(RETRY_CONFIG.networkErrorWait)
      }

      if (!(error instanceof FetchError)) return 0

      if (error.res.status === 500) {
        console.warn(
          `[AniList] Server error 500 (retry ${jobInfo.retryCount}/${RETRY_CONFIG.maxRetries}, waiting 1s)`,
        )
        return RETRY_CONFIG.serverErrorWait
      }

      const retryAfter = parseInt(error.res.headers.get("retry-after") ?? "60")
      const delay = (retryAfter + RETRY_CONFIG.rateLimitBuffer / 1000) * 1000
      console.warn(
        `[AniList] Rate limited (retry ${jobInfo.retryCount}/${RETRY_CONFIG.maxRetries}, waiting ${retryAfter}s)`,
      )

      return setRateLimit(delay)
    })
  }

  return limiter
}

function setRateLimit(ms: number) {
  rateLimitPromise ??= new Promise((resolve) => {
    setTimeout(() => {
      rateLimitPromise = null
      resolve()
    }, ms)
  })
  return ms
}

async function rateLimitedFetch(url: string, options: RequestInit) {
  const limiter = getLimiter()

  return limiter.schedule(async () => {
    await rateLimitPromise

    const res = await fetch(url, options)

    if (!res.ok && (res.status === 429 || res.status === 500)) {
      throw new FetchError(res)
    }

    return res
  })
}

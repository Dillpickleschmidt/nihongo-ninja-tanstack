import type { QueryCtx, MutationCtx, ActionCtx } from '../_generated/server'
import type { Doc } from '../_generated/dataModel'
import { print } from 'graphql'

export const CACHE_DURATION_MS = 6 * 60 * 60 * 1000 // 6 hours

export async function fetchAnizipData(anilistId: number): Promise<any | null> {
  try {
    const res = await fetch(
      `https://api.ani.zip/mappings?anilist_id=${anilistId}`,
      {
        headers: { 'User-Agent': 'nihongo-ninja/1.0' },
      },
    )

    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

/**
 * Extracts HQ image URL from anizip data
 * Priority: Fanart (landscape) > Poster (portrait)
 */
export function extractHqImageUrl(anizipData: any): string | null {
  const images = anizipData?.images || []
  const fanart = images.find((i: any) => i.coverType === 'Fanart')?.url
  const poster = images.find((i: any) => i.coverType === 'Poster')?.url
  return fanart || poster || null
}

/**
 * Generates shuffled banner indices from Page data
 * Filters for items with banner/trailer, shuffles, returns first 5 indices
 */
export function generateBannerIndices(pageData: any): number[] {
  const media = pageData?.media
  if (!media) return []

  // Find indices of items with banner or trailer
  const validIndices: number[] = []
  media.forEach((item: any, index: number) => {
    if (item && (item.bannerImage || item.trailer?.id)) {
      validIndices.push(index)
    }
  })

  // Shuffle indices
  for (let i = validIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[validIndices[i], validIndices[j]] = [validIndices[j], validIndices[i]]
  }

  // Return first 5
  return validIndices.slice(0, 5)
}

export function generateCacheKey(type: string, params: Record<string, any> = {}): string {
  switch (type) {
    case 'trending':
      return `trending:${params.season}:${params.year}`
    case 'popular-season':
      return `popular-season:${params.season}:${params.year}`
    case 'all-time-popular':
      return 'all-time-popular'
    case 'genre':
      return `genre:${params.genre}`
    default:
      throw new Error(`Unknown cache type: ${type}`)
  }
}

export async function getCachedAnime(ctx: QueryCtx, cacheKey: string) {
  return ctx.db
    .query('cachedAnime')
    .withIndex('by_cache_key', (q) => q.eq('cacheKey', cacheKey))
    .first()
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
    .query('cachedAnime')
    .withIndex('by_cache_key', (q) => q.eq('cacheKey', args.cacheKey))
    .first()

  if (existing) {
    await ctx.db.patch(existing._id, args)
  } else {
    await ctx.db.insert('cachedAnime', args)
  }
}

export function isCacheStale(cached: Doc<'cachedAnime'> | null): boolean {
  return !cached || cached.expiresAt < Date.now()
}

export async function fetchFromAniList(
  query: any,
  variables: Record<string, any>
): Promise<any> {
  const queryString = print(query)
  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: queryString, variables }),
  })

  if (!response.ok) {
    throw new Error(`AniList API error: ${response.status}`)
  }

  return await response.json()
}

/**
 * Processes trending anime data: fetches HQ images for all anime
 */
export async function processTrendingData(data: any): Promise<{
  hqImages: Record<string, string>
}> {
  // Extract anime IDs
  const animeIds = data.data?.Page?.media
    ?.filter((m: any) => m?.id)
    .map((m: any) => m.id) || []

  // Fetch HQ images from anizip
  const anizipResults = await Promise.all(
    animeIds.map(async (anilistId: number) => {
      const anizipData = await fetchAnizipData(anilistId)
      const imageUrl = anizipData ? extractHqImageUrl(anizipData) : null
      return { anilistId, imageUrl }
    })
  )

  // Build hqImages map
  const hqImages: Record<string, string> = {}
  for (const { anilistId, imageUrl } of anizipResults) {
    if (imageUrl) {
      hqImages[anilistId.toString()] = imageUrl
    }
  }

  return { hqImages }
}

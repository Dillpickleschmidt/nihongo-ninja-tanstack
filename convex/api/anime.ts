import { internalAction, mutation, internalMutation, query } from '../_generated/server'
import { internal } from '../_generated/api'
import { v } from 'convex/values'
import { DiscoverSearch } from '../../src/features/discover/api/anilist/queries'
import * as animeModel from '../model/anime'

// Unified query for all anime sections (trending, popular, genre, etc.)
export const getSectionAnime = query({
  args: {
    sectionType: v.union(
      v.literal('trending'),
      v.literal('popular-season'),
      v.literal('all-time-popular'),
      v.literal('genre')
    ),
    season: v.optional(v.string()),
    year: v.optional(v.number()),
    genre: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey(args.sectionType, {
      season: args.season,
      year: args.year,
      genre: args.genre,
    })

    const cached = await animeModel.getCachedAnime(ctx, cacheKey)
    const isStale = animeModel.isCacheStale(cached)

    // For trending sections, include banner indices and HQ images
    if (args.sectionType === 'trending') {
      const bannerIndices = cached?.data
        ? animeModel.generateBannerIndices(cached.data)
        : []

      return {
        data: cached?.data,
        bannerIndices,
        hqImages: cached?.hqImages,
        isStale,
      }
    }

    return {
      data: cached?.data,
      isStale,
    }
  },
})

// Checks staleness and schedules fetches for stale sections
export const ensureAllSections = mutation({
  args: {
    sections: v.array(v.object({
      type: v.string(),
      params: v.optional(v.any()),
      queryVars: v.any(),
    })),
  },
  handler: async (ctx, args) => {
    const sectionsToFetch: Array<{ type: string, params: any, queryVars: any }> = []

    for (const section of args.sections) {
      const cacheKey = animeModel.generateCacheKey(section.type, section.params || {})
      const isStale = await animeModel.checkCacheStaleness(ctx, cacheKey)

      if (isStale) {
        sectionsToFetch.push({
          type: section.type,
          params: section.params || {},
          queryVars: section.queryVars,
        })
      }
    }

    if (sectionsToFetch.length > 0) {
      await ctx.scheduler.runAfter(0, internal.api.anime.fetchAllSections, {
        sections: sectionsToFetch,
      })
    }

    return { scheduledFetches: sectionsToFetch.length }
  },
})

// Stores fetched section data in cache
export const storeSectionData = internalMutation({
  args: {
    type: v.string(),
    params: v.any(),
    data: v.any(),
    hqImages: v.optional(v.record(v.string(), v.string())),
    fetchedAt: v.number(),
    expiresAt: v.number(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey(args.type, args.params)

    await animeModel.storeCachedAnime(ctx, {
      cacheKey,
      data: args.data,
      hqImages: args.hqImages,
      fetchedAt: args.fetchedAt,
      expiresAt: args.expiresAt,
    })
  },
})

// Fetches stale sections from AniList in parallel
export const fetchAllSections = internalAction({
  args: {
    sections: v.array(v.object({
      type: v.string(),
      params: v.any(),
      queryVars: v.any(),
    })),
  },
  handler: async (ctx, args) => {
    const now = Date.now()
    const expiresAt = now + animeModel.CACHE_DURATION_MS

    await Promise.all(
      args.sections.map(async (section) => {
        const data = await animeModel.fetchFromAniList(DiscoverSearch, section.queryVars)

        let hqImages: Record<string, string> | undefined
        if (section.type === 'trending') {
          const processed = await animeModel.processTrendingData(data)
          hqImages = processed.hqImages
        }

        await ctx.scheduler.runAfter(0, internal.api.anime.storeSectionData, {
          type: section.type,
          params: section.params,
          data: data.data.Page,
          hqImages,
          fetchedAt: now,
          expiresAt,
        })
      })
    )
  },
})

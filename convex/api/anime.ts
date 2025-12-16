import { action, internalAction, mutation, internalMutation, internalQuery, query } from '../_generated/server'
import { internal } from '../_generated/api'
import { v } from 'convex/values'
import { Search } from '../../src/features/discover/api/anilist/queries'
import type { ResultOf } from 'gql.tada'
import * as animeModel from '../model/anime'

/**
 * Ensures trending anime cache is populated
 * Returns current cached data immediately, schedules refresh if stale
 */
export const ensureTrendingAnime = mutation({
  args: {
    season: v.string(),
    year: v.number(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('trending', args)
    const cached = await animeModel.getCachedAnime(ctx, cacheKey)
    const isStale = animeModel.isCacheStale(cached)

    if (isStale) {
      await ctx.scheduler.runAfter(0, internal.api.anime.fetchTrendingAnime, args)
    }

    return {
      data: cached?.data,
      isStale,
    }
  },
})

/**
 * Fetch trending anime from AniList API and cache in Convex
 * Scheduled by ensureTrendingAnime mutation when cache is stale
 */
export const fetchTrendingAnime = internalAction({
  args: {
    season: v.string(),
    year: v.number(),
  },
  handler: async (ctx, args) => {
    const data = await animeModel.fetchFromAniList(Search, {
      page: 1,
      perPage: 15,
      sort: ['POPULARITY_DESC'],
      season: args.season,
      seasonYear: args.year,
      statusNot: ['NOT_YET_RELEASED'],
    })

    const { hqImages } = await animeModel.processTrendingData(data)

    const now = Date.now()
    await ctx.scheduler.runAfter(0, internal.api.anime.storeTrendingAnime, {
      ...args,
      data: data.data.Page,
      hqImages,
      fetchedAt: now,
      expiresAt: now + animeModel.CACHE_DURATION_MS,
    })

    return data
  },
})

export const storeTrendingAnime = internalMutation({
  args: {
    season: v.string(),
    year: v.number(),
    data: v.any(),
    hqImages: v.record(v.string(), v.string()),
    fetchedAt: v.number(),
    expiresAt: v.number(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('trending', { season: args.season, year: args.year })
    await animeModel.storeCachedAnime(ctx, {
      cacheKey,
      data: args.data,
      hqImages: args.hqImages,
      fetchedAt: args.fetchedAt,
      expiresAt: args.expiresAt,
    })
  },
})

/**
 * Query to get trending anime from cache
 * Returns data, staleness flag, and freshly randomized banner indices
 */
export const getTrendingAnime = query({
  args: {
    season: v.string(),
    year: v.number(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('trending', args)
    const cached = await animeModel.getCachedAnime(ctx, cacheKey)
    const isStale = animeModel.isCacheStale(cached)

    // Generate fresh random banner indices on every query
    const bannerIndices = cached?.data
      ? animeModel.generateBannerIndices(cached.data)
      : []

    return {
      data: cached?.data,
      bannerIndices,
      hqImages: cached?.hqImages,
      isStale,
    }
  },
})

// ============================================================================
// Popular Season Anime Endpoints
// ============================================================================

export const ensurePopularSeasonAnime = mutation({
  args: {
    season: v.string(),
    year: v.number(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('popular-season', args)
    const cached = await animeModel.getCachedAnime(ctx, cacheKey)
    const isStale = animeModel.isCacheStale(cached)

    if (isStale) {
      await ctx.scheduler.runAfter(0, internal.api.anime.fetchPopularSeasonAnime, args)
    }

    return { data: cached?.data, isStale }
  },
})

export const fetchPopularSeasonAnime = internalAction({
  args: {
    season: v.string(),
    year: v.number(),
  },
  handler: async (ctx, args) => {
    const data = await animeModel.fetchFromAniList(Search, {
      page: 1,
      perPage: 10,
      sort: ['POPULARITY_DESC'],
      season: args.season,
      seasonYear: args.year,
    })

    const now = Date.now()
    await ctx.scheduler.runAfter(0, internal.api.anime.storePopularSeasonAnime, {
      ...args,
      data: data.data.Page,
      fetchedAt: now,
      expiresAt: now + animeModel.CACHE_DURATION_MS,
    })

    return data
  },
})

export const storePopularSeasonAnime = internalMutation({
  args: {
    season: v.string(),
    year: v.number(),
    data: v.any(),
    fetchedAt: v.number(),
    expiresAt: v.number(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('popular-season', { season: args.season, year: args.year })
    await animeModel.storeCachedAnime(ctx, {
      cacheKey,
      data: args.data,
      fetchedAt: args.fetchedAt,
      expiresAt: args.expiresAt,
    })
  },
})

export const getPopularSeasonAnime = query({
  args: {
    season: v.string(),
    year: v.number(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('popular-season', args)
    const cached = await animeModel.getCachedAnime(ctx, cacheKey)
    const isStale = animeModel.isCacheStale(cached)

    return {
      data: cached?.data,
      isStale,
    }
  },
})

// ============================================================================
// All Time Popular Anime Endpoints
// ============================================================================

export const ensureAllTimePopularAnime = mutation({
  args: {},
  handler: async (ctx) => {
    const cacheKey = animeModel.generateCacheKey('all-time-popular')
    const cached = await animeModel.getCachedAnime(ctx, cacheKey)
    const isStale = animeModel.isCacheStale(cached)

    if (isStale) {
      await ctx.scheduler.runAfter(0, internal.api.anime.fetchAllTimePopularAnime, {})
    }

    return { data: cached?.data, isStale }
  },
})

export const fetchAllTimePopularAnime = internalAction({
  args: {},
  handler: async (ctx) => {
    const data = await animeModel.fetchFromAniList(Search, {
      page: 1,
      perPage: 10,
      sort: ['POPULARITY_DESC'],
    })

    const now = Date.now()
    await ctx.scheduler.runAfter(0, internal.api.anime.storeAllTimePopularAnime, {
      data: data.data.Page,
      fetchedAt: now,
      expiresAt: now + animeModel.CACHE_DURATION_MS,
    })

    return data
  },
})

export const storeAllTimePopularAnime = internalMutation({
  args: {
    data: v.any(),
    fetchedAt: v.number(),
    expiresAt: v.number(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('all-time-popular')
    await animeModel.storeCachedAnime(ctx, {
      cacheKey,
      data: args.data,
      fetchedAt: args.fetchedAt,
      expiresAt: args.expiresAt,
    })
  },
})

export const getAllTimePopularAnime = query({
  args: {},
  handler: async (ctx) => {
    const cacheKey = animeModel.generateCacheKey('all-time-popular')
    const cached = await animeModel.getCachedAnime(ctx, cacheKey)
    const isStale = animeModel.isCacheStale(cached)

    return {
      data: cached?.data,
      isStale,
    }
  },
})

// ============================================================================
// Genre Anime Endpoints
// ============================================================================

export const ensureGenreAnime = mutation({
  args: {
    genre: v.string(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('genre', args)
    const cached = await animeModel.getCachedAnime(ctx, cacheKey)
    const isStale = animeModel.isCacheStale(cached)

    if (isStale) {
      await ctx.scheduler.runAfter(0, internal.api.anime.fetchGenreAnime, args)
    }

    return { data: cached?.data, isStale }
  },
})

export const fetchGenreAnime = internalAction({
  args: {
    genre: v.string(),
  },
  handler: async (ctx, args) => {
    const data = await animeModel.fetchFromAniList(Search, {
      page: 1,
      perPage: 10,
      genre: [args.genre],
      sort: ['TRENDING_DESC'],
    })

    const now = Date.now()
    await ctx.scheduler.runAfter(0, internal.api.anime.storeGenreAnime, {
      genre: args.genre,
      data: data.data.Page,
      fetchedAt: now,
      expiresAt: now + animeModel.CACHE_DURATION_MS,
    })

    return data
  },
})

export const storeGenreAnime = internalMutation({
  args: {
    genre: v.string(),
    data: v.any(),
    fetchedAt: v.number(),
    expiresAt: v.number(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('genre', { genre: args.genre })
    await animeModel.storeCachedAnime(ctx, {
      cacheKey,
      data: args.data,
      fetchedAt: args.fetchedAt,
      expiresAt: args.expiresAt,
    })
  },
})

export const getGenreAnime = query({
  args: {
    genre: v.string(),
  },
  handler: async (ctx, args) => {
    const cacheKey = animeModel.generateCacheKey('genre', args)
    const cached = await animeModel.getCachedAnime(ctx, cacheKey)
    const isStale = animeModel.isCacheStale(cached)

    return {
      data: cached?.data,
      isStale,
    }
  },
})

import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import * as Profiles from '../model/profiles'

/**
 * Gets the current user's profile
 */
export const getProfile = query({
  args: {},
  handler: (ctx) => Profiles.getProfile(ctx),
})

/**
 * Updates a single preference field
 */
export const updatePreferenceField = mutation({
  args: {
    field: v.string(),
    value: v.any(),
  },
  handler: (ctx, { field, value }) => Profiles.updatePreference(ctx, field, value),
})

/**
 * Ensures a profile exists for the authenticated user.
 * Creates one with default preferences if it doesn't exist.
 */
export const ensureProfile = mutation({
  args: {},
  handler: (ctx) => Profiles.ensureProfileExists(ctx),
})

/**
 * Gets a service token (AniList, Kitsu, MAL) for the authenticated user
 */
export const getServiceToken = query({
  args: {
    service: v.union(v.literal('anilist'), v.literal('kitsu'), v.literal('mal')),
  },
  handler: async (ctx, { service }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return null

    return await ctx.db
      .query('userServiceTokens')
      .withIndex('by_user_service', (q) =>
        q.eq('userId', identity.subject).eq('service', service),
      )
      .first()
  },
})

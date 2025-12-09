import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import * as Profiles from '../model/profiles'

/**
 * Gets the current user's profile
 */
export const getProfile = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return null
    return Profiles.getProfileByUserId(ctx, identity.subject)
  },
})

/**
 * Updates a single preference field
 */
export const updatePreferenceField = mutation({
  args: {
    field: v.string(),
    value: v.any(),
  },
  handler: async (ctx, { field, value }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Unauthenticated')
    return Profiles.updatePreference(ctx, identity.subject, field, value)
  },
})

/**
 * Ensures a profile exists for the authenticated user.
 * Creates one with default preferences if it doesn't exist.
 */
export const ensureProfile = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return null
    return Profiles.ensureProfileExists(ctx, identity.subject)
  },
})

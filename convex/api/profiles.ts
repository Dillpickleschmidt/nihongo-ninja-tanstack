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

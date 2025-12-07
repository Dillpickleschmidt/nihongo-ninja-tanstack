import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { requireAuth } from '../auth'
import { userPreferencesValidator } from '../validators'

/**
 * Gets the current user's preferences
 */
export const getUserPreferences = query({
  args: {},
  handler: async (ctx) => {
    const user = await requireAuth(ctx)

    const profile = await ctx.db
      .query('profiles')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .first()

    return profile?.userPreferences ?? null
  },
})

/**
 * Gets the current user's profile
 */
export const getProfile = query({
  args: {},
  handler: async (ctx) => {
    const user = await requireAuth(ctx)

    const profile = await ctx.db
      .query('profiles')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .first()

    return profile ?? null
  },
})

/**
 * Updates the current user's preferences
 */
export const updateUserPreferences = mutation({
  args: {
    preferences: userPreferencesValidator,
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const profile = await ctx.db
      .query('profiles')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .first()

    if (profile) {
      await ctx.db.patch(profile._id, {
        userPreferences: args.preferences,
      })
    } else {
      await ctx.db.insert('profiles', {
        userId: user._id,
        userPreferences: args.preferences,
      })
    }

    return { success: true }
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
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const profile = await ctx.db
      .query('profiles')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .first()

    const currentPrefs = profile?.userPreferences ?? {}
    const updatedPrefs = {
      ...currentPrefs,
      [args.field]: args.value,
      timestamp: Date.now(),
    }

    if (profile) {
      await ctx.db.patch(profile._id, {
        userPreferences: updatedPrefs,
      })
    } else {
      await ctx.db.insert('profiles', {
        userId: user._id,
        userPreferences: updatedPrefs,
      })
    }

    return { success: true }
  },
})

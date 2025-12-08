import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { DEFAULT_USER_PREFERENCES } from '../validators'

/**
 * Gets the current user's profile
 */
export const getProfile = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return null

    const profile = await ctx.db
      .query('profiles')
      .withIndex('by_user', (q) => q.eq('userId', identity.subject))
      .first()

    return profile ?? null
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
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Unauthenticated')

    const profile = await ctx.db
      .query('profiles')
      .withIndex('by_user', (q) => q.eq('userId', identity.subject))
      .first()

    if (!profile) throw new Error('Profile not found')

    await ctx.db.patch(profile._id, {
      userPreferences: {
        ...profile.userPreferences,
        [args.field]: args.value,
        timestamp: Date.now(),
      },
    })

    return { success: true }
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

    let profile = await ctx.db
      .query('profiles')
      .withIndex('by_user', (q) => q.eq('userId', identity.subject))
      .first()

    if (!profile) {
      const id = await ctx.db.insert('profiles', {
        userId: identity.subject as any,
        userPreferences: DEFAULT_USER_PREFERENCES,
      })
      profile = await ctx.db.get(id)
    }

    return profile
  },
})

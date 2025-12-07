import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { requireAuth } from '../auth'

const serviceValidator = v.union(v.literal('anilist'), v.literal('kitsu'), v.literal('mal'))

/**
 * Store a service token for the current user
 */
export const store = mutation({
  args: {
    service: serviceValidator,
    accessToken: v.string(),
    refreshToken: v.optional(v.string()),
    expiresAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    // Check if token already exists for this service
    const existing = await ctx.db
      .query('userServiceTokens')
      .withIndex('by_user_service', (q) => q.eq('userId', user._id).eq('service', args.service))
      .first()

    if (existing) {
      // Update existing token
      await ctx.db.patch(existing._id, {
        accessToken: args.accessToken,
        refreshToken: args.refreshToken,
        expiresAt: args.expiresAt,
      })
    } else {
      // Insert new token
      await ctx.db.insert('userServiceTokens', {
        userId: user._id,
        service: args.service,
        accessToken: args.accessToken,
        refreshToken: args.refreshToken,
        expiresAt: args.expiresAt,
      })
    }

    return { success: true }
  },
})

/**
 * Get a service token for the current user
 */
export const get = query({
  args: { service: serviceValidator },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const token = await ctx.db
      .query('userServiceTokens')
      .withIndex('by_user_service', (q) => q.eq('userId', user._id).eq('service', args.service))
      .first()

    if (!token) return null

    return {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
      expiresAt: token.expiresAt,
    }
  },
})

/**
 * Get all service tokens for the current user
 */
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const user = await requireAuth(ctx)

    const tokens = await ctx.db
      .query('userServiceTokens')
      .withIndex('by_user_service', (q) => q.eq('userId', user._id))
      .collect()

    return tokens.map((t) => ({
      service: t.service,
      accessToken: t.accessToken,
      refreshToken: t.refreshToken,
      expiresAt: t.expiresAt,
    }))
  },
})

/**
 * Delete a service token for the current user
 */
export const remove = mutation({
  args: { service: serviceValidator },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const token = await ctx.db
      .query('userServiceTokens')
      .withIndex('by_user_service', (q) => q.eq('userId', user._id).eq('service', args.service))
      .first()

    if (token) {
      await ctx.db.delete(token._id)
    }

    return { success: true }
  },
})

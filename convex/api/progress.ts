import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { requireAuth, authComponent } from '../auth'

/**
 * Get progress for a specific module
 */
export const getModuleProgress = query({
  args: { modulePath: v.string() },
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx)
    if (!user) return null

    const progress = await ctx.db
      .query('userCompletedModules')
      .withIndex('by_user_module', (q) =>
        q.eq('userId', user._id).eq('modulePath', args.modulePath),
      )
      .first()

    return progress
  },
})

/**
 * Get all completed modules for a user
 */
export const getUserModuleCompletions = query({
  args: {
    ascending: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const completions = await ctx.db
      .query('userCompletedModules')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .collect()

    // Sort by completedAt
    return completions.sort((a, b) => {
      const diff = a.completedAt - b.completedAt
      return args.ascending ? diff : -diff
    })
  },
})

/**
 * Mark a module as completed
 */
export const markComplete = mutation({
  args: { modulePath: v.string() },
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx)
    if (!user) return null

    // Check if already completed
    const existing = await ctx.db
      .query('userCompletedModules')
      .withIndex('by_user_module', (q) =>
        q.eq('userId', user._id).eq('modulePath', args.modulePath),
      )
      .first()

    const now = Date.now()

    if (existing) {
      await ctx.db.patch(existing._id, { completedAt: now })
      return existing
    }

    const id = await ctx.db.insert('userCompletedModules', {
      userId: user._id,
      modulePath: args.modulePath,
      completedAt: now,
    })

    return { _id: id, userId: user._id, modulePath: args.modulePath, completedAt: now }
  },
})

/**
 * Create a new practice session
 */
export const createSession = mutation({
  args: {
    modulePath: v.string(),
    moduleType: v.string(),
    durationSeconds: v.optional(v.number()),
    questionsAnswered: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx)
    if (!user) return null

    const now = Date.now()

    const id = await ctx.db.insert('userPracticeSessions', {
      userId: user._id,
      modulePath: args.modulePath,
      moduleType: args.moduleType,
      durationSeconds: args.durationSeconds || 0,
      questionsAnswered: args.questionsAnswered || 0,
      lastUpdatedAt: now,
    })

    return { _id: id }
  },
})

/**
 * Update an existing session
 */
export const updateSession = mutation({
  args: {
    sessionId: v.id('userPracticeSessions'),
    durationSeconds: v.number(),
    questionsAnswered: v.number(),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId)
    if (!session) {
      throw new Error('Session not found')
    }

    await ctx.db.patch(args.sessionId, {
      durationSeconds: args.durationSeconds,
      questionsAnswered: args.questionsAnswered,
      lastUpdatedAt: Date.now(),
    })

    return { success: true }
  },
})

/**
 * Get daily practice aggregates for a user
 * Returns a record mapping dates (YYYY-MM-DD) to total seconds practiced
 */
export const getDailyAggregates = query({
  args: { timezone: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)
    const tz = args.timezone || 'UTC'

    const sessions = await ctx.db
      .query('userPracticeSessions')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .collect()

    const aggregates: Record<string, number> = {}

    for (const session of sessions) {
      // Convert timestamp to date string in user's timezone
      const date = new Date(session.lastUpdatedAt)
      const dateStr = date.toLocaleDateString('en-CA', { timeZone: tz }) // YYYY-MM-DD format

      aggregates[dateStr] = (aggregates[dateStr] || 0) + session.durationSeconds
    }

    return aggregates
  },
})

/**
 * Get paginated practice sessions for a user
 */
export const getSessionsPaginated = query({
  args: {
    offset: v.number(),
    limit: v.number(),
    moduleType: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    let sessions = await ctx.db
      .query('userPracticeSessions')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .collect()

    // Filter by module type if specified
    if (args.moduleType) {
      sessions = sessions.filter((s) => s.moduleType === args.moduleType)
    }

    // Sort by lastUpdatedAt descending
    sessions.sort((a, b) => b.lastUpdatedAt - a.lastUpdatedAt)

    // Apply pagination
    return sessions.slice(args.offset, args.offset + args.limit)
  },
})

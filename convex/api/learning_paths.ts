import { v } from 'convex/values'
import { query } from '../_generated/server'
import * as LearningPaths from '../model/learning_paths'

/**
 * Get all learning paths (built-in textbooks + user-created)
 * Returns unified LearningPath objects with isUserCreated flag
 */
export const getAllLearningPaths = query({
  args: {},
  handler: async (ctx) => {
    const builtInPaths = LearningPaths.getBuiltInPaths()

    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return builtInPaths

    const userPaths = await LearningPaths.getUserPaths(ctx, identity.subject)
    return [...builtInPaths, ...userPaths]
  },
})

/**
 * Get chapters for a learning path (built-in textbook or user-created)
 */
export const getPathChapters = query({
  args: { pathId: v.string() },
  handler: async (ctx, { pathId }) => {
    return LearningPaths.getChaptersForPath(ctx, pathId)
  },
})

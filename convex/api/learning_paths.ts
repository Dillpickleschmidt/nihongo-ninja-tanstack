import { v } from "convex/values"
import { query } from "../_generated/server"
import * as LearningPaths from "../model/learning_paths"
import * as Completions from "../model/completions"

/**
 * Get all learning paths (built-in textbooks + user-created)
 * Returns unified LearningPath objects with isUserCreated flag
 */
export const getAllLearningPaths = query({
  args: {},
  handler: (ctx) => LearningPaths.getAllLearningPaths(ctx),
})

/**
 * Get chapters for a learning path (built-in textbook or user-created)
 */
export const getPathChapters = query({
  args: { pathId: v.string() },
  handler: (ctx, { pathId }) => LearningPaths.getChaptersForPath(ctx, pathId),
})

/**
 * Get chapters + completed modules in a single query (dashboard use)
 */
export const getPathWithProgress = query({
  args: { pathId: v.string() },
  handler: async (ctx, { pathId }) => {
    const chapters = await LearningPaths.getChaptersForPath(ctx, pathId)
    const completedModules = await Completions.getCompletedModules(ctx)
    return { chapters, completedModules: completedModules ?? [] }
  },
})

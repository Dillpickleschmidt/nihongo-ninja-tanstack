import { v } from "convex/values"
import { mutation, query } from "../_generated/server"
import * as LearningPaths from "../model/learning_paths"
import * as Completions from "../model/completions"
import { transcriptLineValidator } from "../validators"

/**
 * All dashboard learning path data in one query: paths list, chapters, completions
 */
export const getDashboardData = query({
  args: { pathId: v.string() },
  handler: async (ctx, { pathId }) => {
    const [paths, chapters, completedModules] = await Promise.all([
      LearningPaths.getAllLearningPaths(ctx),
      LearningPaths.getResolvedChaptersForPath(ctx, pathId),
      Completions.getCompletedModules(ctx),
    ])
    return { pathId, paths, chapters, completedModules: completedModules ?? [] }
  },
})

/**
 * Get detail data for a module in a custom learning path
 */
export const getModuleDetail = query({
  args: {
    pathId: v.string(),
    moduleId: v.string(),
  },
  handler: (ctx, { pathId, moduleId }) =>
    LearningPaths.getModuleDetail(ctx, pathId, moduleId),
})

/**
 * Create a custom learning path from subtitle-derived selections
 */
export const createCustomLearningPath = mutation({
  args: {
    transcript: v.object({
      name: v.string(),
      showName: v.optional(v.string()),
      episodeName: v.optional(v.string()),
      transcriptData: v.array(transcriptLineValidator),
    }),
    selectedGrammarModules: v.array(
      v.object({
        moduleId: v.string(),
        transcriptLineIds: v.array(v.array(v.number())),
        orderIndex: v.number(),
      }),
    ),
    selectedVocabDecks: v.array(
      v.object({
        isVerbDeck: v.boolean(),
        words: v.array(
          v.object({
            word: v.string(),
            furigana: v.optional(v.string()),
            english: v.optional(v.string()),
          }),
        ),
        transcriptLineIds: v.array(v.array(v.number())),
        orderIndex: v.number(),
      }),
    ),
  },
  handler: (ctx, args) => LearningPaths.createCustomLearningPath(ctx, args),
})

/**
 * Delete a user-created learning path and generated resources
 */
export const deleteCustomLearningPath = mutation({
  args: { pathId: v.string() },
  handler: (ctx, { pathId }) =>
    LearningPaths.deleteCustomLearningPath(ctx, pathId),
})

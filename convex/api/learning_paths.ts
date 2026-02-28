import { v } from "convex/values"
import { mutation, query } from "../_generated/server"
import * as LearningPaths from "../model/learning_paths"
import * as Completions from "../model/completions"
import { transcriptLineValidator } from "../validators"

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
    const chapters = await LearningPaths.getResolvedChaptersForPath(ctx, pathId)
    const completedModules = await Completions.getCompletedModules(ctx)
    return { chapters, completedModules: completedModules ?? [] }
  },
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

import { v } from "convex/values"
import { mutation, query } from "../_generated/server"
import {
  sentenceAnswerTokenValidator,
  sentenceAnswerValidator,
} from "../validators"

/**
 * Get sentence practice questions for a given set ID
 * Returns questions sorted by order
 */
export const getQuestionsBySetId = query({
  args: { setId: v.string() },
  handler: async (ctx, { setId }) => {
    const questions = await ctx.db
      .query("sentencePracticeQuestions")
      .withIndex("by_setId", (q) => q.eq("setId", setId))
      .collect()

    return questions.sort((a, b) => a.order - b.order)
  },
})

const sentencePracticeQuestionInputValidator = v.object({
  setId: v.string(),
  order: v.number(),
  english: v.string(),
  hint: v.optional(v.string()),
  answers: v.array(sentenceAnswerValidator),
  canonicalAnswerTokens: v.array(v.array(sentenceAnswerTokenValidator)),
})

export const deleteQuestionsBySetId = mutation({
  args: { setId: v.string() },
  handler: async (ctx, { setId }) => {
    const existing = await ctx.db
      .query("sentencePracticeQuestions")
      .withIndex("by_setId", (q) => q.eq("setId", setId))
      .collect()

    for (const question of existing) {
      await ctx.db.delete(question._id)
    }

    return { deleted: existing.length }
  },
})

export const insertQuestionsForSet = mutation({
  args: {
    setId: v.string(),
    questions: v.array(sentencePracticeQuestionInputValidator),
  },
  handler: async (ctx, { setId, questions }) => {
    for (const question of questions) {
      if (question.setId !== setId) {
        throw new Error(
          `Question setId ${question.setId} does not match ${setId}`,
        )
      }
      await ctx.db.insert("sentencePracticeQuestions", question)
    }

    return { inserted: questions.length }
  },
})

import { v } from 'convex/values'
import { query } from '../_generated/server'

/**
 * Get sentence practice questions for a given set ID
 * Returns questions sorted by order
 */
export const getQuestionsBySetId = query({
  args: { setId: v.string() },
  handler: async (ctx, { setId }) => {
    const questions = await ctx.db
      .query('sentencePracticeQuestions')
      .withIndex('by_setId', (q) => q.eq('setId', setId))
      .collect()

    return questions.sort((a, b) => a.order - b.order)
  },
})

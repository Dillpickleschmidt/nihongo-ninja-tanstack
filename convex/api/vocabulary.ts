import { v } from 'convex/values'
import { query } from '../_generated/server'
import * as Vocabulary from '../model/vocabulary'

/**
 * Get vocabulary items for given set IDs
 * Results are segmented by set ID
 */
export const getBySets = query({
  args: { setIds: v.array(v.string()) },
  handler: async (ctx, { setIds }) => {
    return Vocabulary.fetchVocabBySets(ctx, setIds)
  },
})

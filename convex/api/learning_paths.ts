import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { requireAuth } from '../auth'

const MODULES_PER_CHAPTER = 30

/**
 * Upload a learning path with transcripts, vocab decks, and module sources
 */
export const upload = mutation({
  args: {
    transcript: v.object({
      name: v.string(),
      showName: v.optional(v.string()),
      episodeName: v.optional(v.string()),
      transcriptData: v.any(),
    }),
    selectedGrammarModules: v.array(
      v.object({
        moduleId: v.string(),
        transcriptLineIds: v.any(),
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
        transcriptLineIds: v.any(),
        orderIndex: v.number(),
      }),
    ),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    // Create the learning path transcript
    const pathId = await ctx.db.insert('learningPathTranscripts', {
      userId: user._id,
      name: args.transcript.name,
      showName: args.transcript.showName,
      episodeName: args.transcript.episodeName,
      transcriptData: args.transcript.transcriptData,
    })

    // Create grammar module sources
    for (const module of args.selectedGrammarModules) {
      await ctx.db.insert('learningPathModuleSources', {
        pathId,
        moduleId: module.moduleId,
        sourceType: 'grammar',
        transcriptLineIds: module.transcriptLineIds,
        orderIndex: module.orderIndex,
      })
    }

    // Create vocabulary decks and their module sources
    for (let i = 0; i < args.selectedVocabDecks.length; i++) {
      const deck = args.selectedVocabDecks[i]
      const posLabel = deck.isVerbDeck ? 'Verbs' : 'Non-Verbs'
      const deckName = `${posLabel} - Part ${i + 1}`
      const deckDescription = `Vocabulary from ${args.transcript.name}`

      // Create the deck
      const deckId = crypto.randomUUID()

      await ctx.db.insert('userDecks', {
        userId: user._id,
        deckId,
        deckName,
        deckDescription,
        source: 'learning_path',
        allowedPracticeModes: ['meanings', 'spellings'],
      })

      // Insert vocabulary items
      for (const word of deck.words) {
        await ctx.db.insert('deckVocabularyItems', {
          deckId,
          word: word.word,
          furigana: word.furigana,
          english: word.english ? [word.english] : [],
        })
      }

      // Create module source for the vocab deck
      await ctx.db.insert('learningPathModuleSources', {
        pathId,
        moduleId: deckId,
        sourceType: 'vocabulary',
        transcriptLineIds: deck.transcriptLineIds,
        orderIndex: deck.orderIndex,
      })
    }

    return { pathId }
  },
})

/**
 * Get all learning paths for a user
 */
export const getUserPaths = query({
  args: {},
  handler: async (ctx) => {
    const user = await requireAuth(ctx)

    const paths = await ctx.db
      .query('learningPathTranscripts')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .collect()

    return paths
  },
})

/**
 * Get chapters for a learning path
 */
export const getPathChapters = query({
  args: { pathId: v.id('learningPathTranscripts') },
  handler: async (ctx, args) => {
    const moduleSources = await ctx.db
      .query('learningPathModuleSources')
      .withIndex('by_path', (q) => q.eq('pathId', args.pathId))
      .collect()

    // Sort by orderIndex
    moduleSources.sort((a, b) => a.orderIndex - b.orderIndex)

    const moduleIds = moduleSources.map((m) => m.moduleId)
    const chapters = []

    for (let i = 0; i < moduleIds.length; i += MODULES_PER_CHAPTER) {
      const chapterNum = Math.floor(i / MODULES_PER_CHAPTER) + 1
      chapters.push({
        slug: `chapter-${chapterNum}`,
        title: `Chapter ${chapterNum}`,
        learningPathItemIds: moduleIds.slice(i, i + MODULES_PER_CHAPTER),
      })
    }

    return chapters
  },
})

/**
 * Get modules for a specific chapter
 */
export const getChapterModules = query({
  args: {
    pathId: v.id('learningPathTranscripts'),
    chapterSlug: v.string(),
  },
  handler: async (ctx, args) => {
    // Get all module sources for this path
    const moduleSources = await ctx.db
      .query('learningPathModuleSources')
      .withIndex('by_path', (q) => q.eq('pathId', args.pathId))
      .collect()

    moduleSources.sort((a, b) => a.orderIndex - b.orderIndex)

    // Calculate which modules belong to this chapter
    const chapterNum = parseInt(args.chapterSlug.replace('chapter-', ''))
    const startIdx = (chapterNum - 1) * MODULES_PER_CHAPTER
    const endIdx = startIdx + MODULES_PER_CHAPTER
    const chapterModules = moduleSources.slice(startIdx, endIdx)

    // Get deck info for vocabulary modules
    const vocabModuleIds = chapterModules
      .filter((m) => m.sourceType === 'vocabulary')
      .map((m) => m.moduleId)

    const userDecksMap: Record<string, any> = {}
    for (const deckId of vocabModuleIds) {
      const deck = await ctx.db
        .query('userDecks')
        .withIndex('by_deckId', (q) => q.eq('deckId', deckId))
        .first()

      if (deck) {
        userDecksMap[deckId] = deck
      }
    }

    // Build resolved modules
    const resolvedModules = chapterModules.map((source) => {
      if (source.sourceType === 'vocabulary') {
        const deck = userDecksMap[source.moduleId]
        if (deck) {
          return {
            key: source.moduleId,
            sourceType: 'vocabulary',
            title: deck.deckName,
            allowedPracticeModes: deck.allowedPracticeModes,
          }
        }
      }

      // Grammar module - return just the ID, frontend will resolve
      return {
        key: source.moduleId,
        sourceType: 'grammar',
      }
    })

    return resolvedModules
  },
})

/**
 * Get transcript data for a learning path
 */
export const getTranscriptData = query({
  args: { pathId: v.id('learningPathTranscripts') },
  handler: async (ctx, args) => {
    const path = await ctx.db.get(args.pathId)
    if (!path) {
      throw new Error('Learning path not found')
    }

    return path.transcriptData || []
  },
})

/**
 * Get metadata for a specific module in a learning path
 */
export const getModuleMetadata = query({
  args: {
    pathId: v.id('learningPathTranscripts'),
    moduleId: v.string(),
  },
  handler: async (ctx, args) => {
    const moduleSource = await ctx.db
      .query('learningPathModuleSources')
      .withIndex('by_path', (q) => q.eq('pathId', args.pathId))
      .filter((q) => q.eq(q.field('moduleId'), args.moduleId))
      .first()

    if (!moduleSource) {
      throw new Error(`Module ${args.moduleId} not found in path`)
    }

    const result: {
      sourceType: 'grammar' | 'vocabulary'
      transcriptLineIds: any
      vocabularyItems?: Array<{
        word: string
        furigana?: string
        english?: string
      }>
    } = {
      sourceType: moduleSource.sourceType,
      transcriptLineIds: moduleSource.transcriptLineIds || [],
    }

    // For vocabulary modules, fetch vocabulary items
    if (moduleSource.sourceType === 'vocabulary') {
      const vocabItems = await ctx.db
        .query('deckVocabularyItems')
        .withIndex('by_deck', (q) => q.eq('deckId', args.moduleId))
        .collect()

      result.vocabularyItems = vocabItems.map((item) => ({
        word: item.word,
        furigana: item.furigana,
        english: item.english && item.english.length > 0 ? item.english[0] : undefined,
      }))
    }

    return result
  },
})

/**
 * Delete a learning path and its associated data
 */
export const deletePath = mutation({
  args: { pathId: v.id('learningPathTranscripts') },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const path = await ctx.db.get(args.pathId)
    if (!path || path.userId !== user._id) {
      throw new Error('Learning path not found or not owned by user')
    }

    // Get all module sources
    const moduleSources = await ctx.db
      .query('learningPathModuleSources')
      .withIndex('by_path', (q) => q.eq('pathId', args.pathId))
      .collect()

    // Delete vocabulary decks and their items
    for (const source of moduleSources) {
      if (source.sourceType === 'vocabulary') {
        // Delete vocab items
        const vocabItems = await ctx.db
          .query('deckVocabularyItems')
          .withIndex('by_deck', (q) => q.eq('deckId', source.moduleId))
          .collect()

        for (const item of vocabItems) {
          await ctx.db.delete(item._id)
        }

        // Delete the deck
        const deck = await ctx.db
          .query('userDecks')
          .withIndex('by_deckId', (q) => q.eq('deckId', source.moduleId))
          .first()

        if (deck) {
          await ctx.db.delete(deck._id)
        }
      }

      // Delete the module source
      await ctx.db.delete(source._id)
    }

    // Delete the path itself
    await ctx.db.delete(args.pathId)

    return { success: true }
  },
})

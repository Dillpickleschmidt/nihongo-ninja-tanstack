import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { requireAuth } from '../auth'
import {
  getAllTextbooks,
  isBuiltInTextbook,
} from '../../src/data/utils/textbooks'
import { getChaptersByTextbook, getTextbookChapterBySlug } from '../../src/data/utils/chapters'
import { getModulesFromChapter } from '../../src/data/utils/modules'

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
 * Get all learning paths (built-in textbooks + user-created)
 * Returns unified LearningPath objects with isUserCreated flag
 */
export const getAllLearningPaths = query({
  args: {},
  handler: async (ctx) => {
    // Built-in textbooks from code (no DB query)
    const builtInPaths = getAllTextbooks().map((tb) => ({
      id: tb.id,
      name: tb.name,
      shortName: tb.short_name,
      isUserCreated: false as const,
    }))

    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return builtInPaths

    // User-created learning paths from DB
    const userPaths = await ctx.db
      .query('learningPathTranscripts')
      .withIndex('by_user', (q) => q.eq('userId', identity.subject))
      .collect()

    const userLearningPaths = userPaths.map((path) => ({
      id: String(path._id),
      name: path.name,
      shortName: path.name,
      isUserCreated: true as const,
    }))

    return [...builtInPaths, ...userLearningPaths]
  },
})

/**
 * Get chapters for a learning path (built-in textbook or user-created)
 */
export const getPathChapters = query({
  args: { pathId: v.string() },
  handler: async (ctx, { pathId }) => {
    // Built-in textbook - get chapters from code
    if (isBuiltInTextbook(pathId)) {
      return getChaptersByTextbook(pathId)
    }

    // User path - generate chapters from modules
    const moduleSources = await ctx.db
      .query('learningPathModuleSources')
      .withIndex('by_path', (q) => q.eq('pathId', pathId as any))
      .collect()

    moduleSources.sort((a, b) => a.orderIndex - b.orderIndex)

    const moduleIds = moduleSources.map((m) => m.moduleId)
    return chunkIntoChapters(moduleIds)
  },
})

function chunkIntoChapters(moduleIds: string[]) {
  const chapters = []
  for (let i = 0; i < moduleIds.length; i += MODULES_PER_CHAPTER) {
    const chapterNum = Math.floor(i / MODULES_PER_CHAPTER) + 1
    chapters.push({
      slug: `chapter-${chapterNum}`,
      title: `Part ${chapterNum}`,
      learning_path_item_ids: moduleIds.slice(i, i + MODULES_PER_CHAPTER),
    })
  }
  return chapters
}

/**
 * Get modules for a chapter (built-in textbook or user-created path)
 */
export const getChapterModules = query({
  args: {
    pathId: v.string(),
    chapterSlug: v.string(),
  },
  handler: async (ctx, { pathId, chapterSlug }) => {
    // Built-in textbook - get modules from code
    if (isBuiltInTextbook(pathId)) {
      const chapter = getTextbookChapterBySlug(pathId, chapterSlug)
      if (!chapter) return []
      return getModulesFromChapter(chapter)
    }

    // User path - fetch from DB
    const moduleSources = await ctx.db
      .query('learningPathModuleSources')
      .withIndex('by_path', (q) => q.eq('pathId', pathId as any))
      .collect()

    moduleSources.sort((a, b) => a.orderIndex - b.orderIndex)

    const chapterModules = getModulesForChapter(moduleSources, chapterSlug)

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

    return chapterModules.map((source) => {
      if (source.sourceType === 'vocabulary') {
        return buildVocabModule(source.moduleId, userDecksMap[source.moduleId])
      }
      return buildGrammarModule(source.moduleId)
    })
  },
})

function getModulesForChapter<T>(items: T[], chapterSlug: string): T[] {
  const chapterNum = parseInt(chapterSlug.replace('chapter-', ''))
  const startIdx = (chapterNum - 1) * MODULES_PER_CHAPTER
  return items.slice(startIdx, startIdx + MODULES_PER_CHAPTER)
}

function buildVocabModule(moduleId: string, deck: any) {
  return {
    key: moduleId,
    module: deck
      ? {
        title: deck.deckName,
        module_type: 'vocab-practice' as const,
        vocab_set_ids: [moduleId],
        allowed_practice_modes: deck.allowedPracticeModes,
      }
      : null,
    disabled: false,
  }
}

function buildGrammarModule(moduleId: string) {
  return {
    key: moduleId,
    module: null,
    disabled: false,
    sourceType: 'grammar' as const,
  }
}

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

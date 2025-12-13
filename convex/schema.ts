import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'
import {
  mnemonicsValidator,
  exampleSentenceValidator,
  videoValidator,
  particleValidator,
  fsrsCardValidator,
  fsrsReviewLogValidator,
  transcriptLineValidator,
  metaDataValidator,
  userPreferencesValidator,
  practiceModeValidator,
  practiceItemTypeValidator,
  vocabularyItemValidator,
  sentenceAnswerValidator,
} from './validators'

export default defineSchema({
  // ===== User-Related Tables =====

  // Profiles (linked to BetterAuth user)
  profiles: defineTable({
    userId: v.string(),
    displayName: v.optional(v.string()),
    userPreferences: userPreferencesValidator,
  }).index('by_user', ['userId']),

  // User Deck Folders
  userDeckFolders: defineTable({
    userId: v.string(),
    folderName: v.string(),
    parentFolderId: v.optional(v.id('userDeckFolders')),
  }).index('by_user', ['userId']),

  // User Decks
  userDecks: defineTable({
    userId: v.string(),
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id('userDeckFolders')),
    source: v.union(
      v.literal('built-in'),
      v.literal('anki'),
      v.literal('wanikani'),
      v.literal('jpdb'),
      v.literal('user'),
      v.literal('shared'),
      v.literal('learning_path'),
    ),
    originalDeckId: v.optional(v.id('userDecks')),
    allowedPracticeModes: v.array(practiceModeValidator),
  }).index('by_user', ['userId']),

  // Deck Vocabulary Items
  deckVocabularyItems: defineTable({
    deckId: v.id('userDecks'),
    word: v.string(),
    furigana: v.optional(v.string()),
    english: v.array(v.string()),
    info: v.optional(v.array(v.string())),
    mnemonics: v.optional(mnemonicsValidator),
    exampleSentences: v.optional(v.array(exampleSentenceValidator)),
    videos: v.optional(v.array(videoValidator)),
    particles: v.optional(v.array(particleValidator)),
    isVerb: v.optional(v.boolean()),
  }).index('by_deck', ['deckId']),

  // FSRS Cards (Spaced Repetition)
  userFsrsCards: defineTable({
    userId: v.string(),
    practiceItemKey: v.string(),
    fsrsCard: fsrsCardValidator,
    fsrsLogs: v.array(fsrsReviewLogValidator),
    dueAt: v.number(), // timestamp
    stability: v.float64(),
    mode: practiceModeValidator,
    type: practiceItemTypeValidator,
  })
    .index('by_user_key_mode_type', ['userId', 'practiceItemKey', 'mode', 'type'])
    .index('by_user_key_mode', ['userId', 'practiceItemKey', 'mode'])
    .index('by_user_mode_due', ['userId', 'mode', 'dueAt']),

  // User Completed Modules
  userCompletedModules: defineTable({
    userId: v.string(),
    modulePath: v.string(),
    completedAt: v.number(),
  })
    .index('by_user', ['userId'])
    .index('by_user_module', ['userId', 'modulePath']),

  // User Practice Sessions
  userPracticeSessions: defineTable({
    userId: v.string(),
    modulePath: v.string(),
    moduleType: v.string(),
    durationSeconds: v.number(),
    questionsAnswered: v.optional(v.number()),
    lastUpdatedAt: v.number(),
  }).index('by_user', ['userId']),

  // User Service Tokens (Anilist, etc.)
  userServiceTokens: defineTable({
    userId: v.string(),
    service: v.union(v.literal('anilist'), v.literal('kitsu'), v.literal('mal')),
    accessToken: v.string(),
    refreshToken: v.optional(v.string()),
    expiresAt: v.optional(v.number()),
  }).index('by_user_service', ['userId', 'service']),

  // ===== Deck Sharing Tables =====

  // Public Deck Shares
  publicDeckShares: defineTable({
    deckId: v.id('userDecks'),
    sharedBy: v.string(), // userId
    importCount: v.number(),
  }).index('by_deck', ['deckId']),

  // ===== Learning Path Tables =====

  // Learning Path Transcripts
  learningPathTranscripts: defineTable({
    userId: v.string(),
    name: v.string(),
    showName: v.optional(v.string()),
    episodeName: v.optional(v.string()),
    transcriptData: v.array(transcriptLineValidator),
  }).index('by_user', ['userId']),

  // Learning Path Module Sources
  learningPathModuleSources: defineTable({
    pathId: v.id('learningPathTranscripts'),
    moduleId: v.string(),
    sourceType: v.union(v.literal('grammar'), v.literal('vocabulary')),
    transcriptLineIds: v.array(v.array(v.number())), // Array of line ID arrays per pattern
    orderIndex: v.number(),
  }).index('by_path', ['pathId']),

  // ===== Reference/Seed Data Tables =====

  // Core Vocabulary Items
  coreVocabularyItems: defineTable(vocabularyItemValidator.fields).index(
    'by_key',
    ['key'],
  ),

  // Core Vocabulary Sets
  coreVocabularySets: defineTable({
    setId: v.string(),
    vocabularyKeys: v.array(v.string()),
  }).index('by_setId', ['setId']),

  // WaniKani Items
  wanikaniItems: defineTable({
    wanikaniId: v.number(), // Original WK ID
    characters: v.optional(v.string()),
    characterType: v.union(v.literal('radical'), v.literal('kanji')),
    meanings: v.array(v.string()),
    readingMnemonic: v.optional(v.string()),
    meaningMnemonic: v.string(),
    componentIds: v.array(v.number()),
    characterImageUrl: v.optional(v.string()),
  })
    .index('by_wanikaniId', ['wanikaniId'])
    .index('by_character', ['characters']),

  // Dictionary Tables
  dictionaries: defineTable({
    title: v.string(),
    revision: v.string(),
    format: v.number(),
    sequenced: v.boolean(),
    author: v.optional(v.string()),
    url: v.optional(v.string()),
    description: v.optional(v.string()),
    attribution: v.optional(v.string()),
    sourceLanguage: v.optional(v.string()),
    targetLanguage: v.optional(v.string()),
  }).index('by_title', ['title']),

  terms: defineTable({
    dictionary: v.string(),
    expression: v.string(),
    reading: v.string(),
    definitionTags: v.optional(v.string()),
    rules: v.optional(v.string()),
    score: v.number(),
    glossary: v.any(), // TermGlossary[] - recursive structured content, too complex to type
    sequence: v.number(),
    termTags: v.optional(v.string()),
  })
    .index('by_expression', ['expression'])
    .index('by_dictionary_expression', ['dictionary', 'expression']),

  termMeta: defineTable({
    dictionary: v.string(),
    expression: v.string(),
    mode: v.string(), // freq, pitch, or ipa
    data: metaDataValidator, // Frequency, pitch accent, or IPA data
  }).index('by_expression', ['expression']),

  tagMeta: defineTable({
    dictionary: v.string(),
    name: v.string(),
    category: v.optional(v.string()),
    sortOrder: v.number(),
    description: v.optional(v.string()),
    score: v.number(),
  }).index('by_dictionary_name', ['dictionary', 'name']),

  kanji: defineTable({
    dictionary: v.string(),
    character: v.string(),
    onyomi: v.optional(v.string()),
    kunyomi: v.optional(v.string()),
    tags: v.optional(v.string()),
    meanings: v.array(v.string()),
    stats: v.optional(v.record(v.string(), v.string())), // {[statName]: value}
  }).index('by_character', ['character']),

  kanjiMeta: defineTable({
    dictionary: v.string(),
    character: v.string(),
    mode: v.string(), // freq, pitch, or ipa
    data: metaDataValidator, // Frequency data (kanji only uses freq mode)
  }).index('by_character', ['character']),

  // Sentence Practice Questions
  sentencePracticeQuestions: defineTable({
    setId: v.string(),
    order: v.number(),
    english: v.string(),
    hint: v.optional(v.string()),
    answers: v.array(sentenceAnswerValidator),
    modelAnswerPOS: v.array(v.array(v.string())),
  }).index('by_setId', ['setId']),
})

import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"
import {
  mnemonicsValidator,
  exampleSentenceValidator,
  videoValidator,
  particleValidator,
  transcriptLineValidator,
  metaDataValidator,
  userPreferencesValidator,
  animeServiceValidator,
  practiceModeValidator,
  practiceItemTypeValidator,
  vocabularyItemValidator,
  sentenceAnswerValidator,
} from "./validators"

export default defineSchema({
  // ===== User-Related Tables =====

  // Profiles (linked to BetterAuth user)
  profiles: defineTable({
    userId: v.string(),
    displayName: v.optional(v.string()),
    userPreferences: userPreferencesValidator,
  }).index("by_user", ["userId"]),

  // User Deck Folders
  userDeckFolders: defineTable({
    userId: v.string(),
    folderName: v.string(),
    parentFolderId: v.optional(v.id("userDeckFolders")),
    learningPathId: v.optional(v.id("learningPathTranscripts")),
  }).index("by_user", ["userId"]),

  // User Decks
  userDecks: defineTable({
    userId: v.string(),
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id("userDeckFolders")),
    source: v.union(
      v.literal("built-in"),
      v.literal("anki"),
      v.literal("wanikani"),
      v.literal("jpdb"),
      v.literal("user"),
      v.literal("shared"),
      v.literal("learning_path"),
    ),
    originalDeckId: v.optional(v.id("userDecks")),
    allowedPracticeModes: v.array(practiceModeValidator),
  }).index("by_user", ["userId"]),

  // Deck Vocabulary Items
  deckVocabularyItems: defineTable({
    deckId: v.id("userDecks"),
    word: v.string(),
    furigana: v.optional(v.string()),
    english: v.array(v.string()),
    info: v.optional(v.array(v.string())),
    mnemonics: v.optional(mnemonicsValidator),
    exampleSentences: v.optional(v.array(exampleSentenceValidator)),
    videos: v.optional(v.array(videoValidator)),
    particles: v.optional(v.array(particleValidator)),
    isVerb: v.optional(v.boolean()),
  }).index("by_deck", ["deckId"]),

  // FSRS Cards (Spaced Repetition) - flat structure for bandwidth efficiency
  userFsrsCards: defineTable({
    userId: v.string(),
    practiceItemKey: v.string(),
    mode: practiceModeValidator,
    type: practiceItemTypeValidator,
    // FSRS card fields (flattened):
    dueAt: v.number(), // timestamp - when card is due for review
    stability: v.float64(),
    difficulty: v.float64(),
    elapsed_days: v.number(),
    scheduled_days: v.number(),
    reps: v.number(),
    lapses: v.number(),
    state: v.union(v.literal(0), v.literal(1), v.literal(2), v.literal(3)), // New, Learning, Review, Relearning
    learning_steps: v.optional(v.number()),
  })
    .index("by_user_key_mode_type", [
      "userId",
      "practiceItemKey",
      "mode",
      "type",
    ])
    .index("by_user_mode_dueAt", ["userId", "mode", "dueAt"]),

  // FSRS Review Logs (separate table for bandwidth efficiency)
  userFsrsCardLogs: defineTable({
    cardId: v.id("userFsrsCards"),
    rating: v.union(
      v.literal(0),
      v.literal(1),
      v.literal(2),
      v.literal(3),
      v.literal(4),
    ),
    state: v.union(v.literal(0), v.literal(1), v.literal(2), v.literal(3)),
    due: v.number(),
    stability: v.float64(),
    difficulty: v.float64(),
    elapsed_days: v.number(),
    last_elapsed_days: v.number(),
    scheduled_days: v.number(),
    learning_steps: v.number(),
    review: v.number(), // timestamp of the review
  }).index("by_card", ["cardId"]),

  // User Completed Modules
  userCompletedModules: defineTable({
    userId: v.string(),
    modulePath: v.string(),
    completedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_module", ["userId", "modulePath"]),

  // User Daily Module Progress Stats
  userDailyModuleStats: defineTable({
    userId: v.string(),
    dateKey: v.string(),
    modulePath: v.string(),
    moduleType: v.string(),
    progressUnits: v.number(),
    questionsAnswered: v.number(),
    lastUpdatedAt: v.number(),
  })
    .index("by_user_date", ["userId", "dateKey"])
    .index("by_user_date_module", ["userId", "dateKey", "modulePath"])
    .index("by_user_lastUpdated", ["userId", "lastUpdatedAt"])
    .index("by_user_date_type", ["userId", "dateKey", "moduleType"]),

  // User Service Tokens (Anilist, etc.)
  userServiceTokens: defineTable({
    userId: v.string(),
    service: animeServiceValidator,
    accessToken: v.string(),
    refreshToken: v.optional(v.string()),
    expiresAt: v.optional(v.number()),
  }).index("by_user_service", ["userId", "service"]),

  imageAssets: defineTable({
    imageId: v.string(),
    ownerUserId: v.string(),
    storageKey: v.string(),
    contentType: v.string(),
    sourceWidth: v.number(),
    objectEtag: v.string(),
    createdAt: v.number(),
  })
    .index("by_imageId", ["imageId"])
    .index("by_owner_createdAt", ["ownerUserId", "createdAt"]),

  // ===== Deck Sharing Tables =====

  // Public Deck Shares
  publicDeckShares: defineTable({
    deckId: v.id("userDecks"),
    sharedBy: v.string(), // userId
    importCount: v.number(),
  }).index("by_deck", ["deckId"]),

  // ===== Learning Path Tables =====

  // Learning Path Transcripts
  learningPathTranscripts: defineTable({
    userId: v.string(),
    name: v.string(),
    rootFolderId: v.id("userDeckFolders"),
    showName: v.optional(v.string()),
    episodeName: v.optional(v.string()),
    transcriptData: v.array(transcriptLineValidator),
  }).index("by_user", ["userId"]),

  // Learning Path Module Sources
  learningPathModuleSources: defineTable({
    pathId: v.id("learningPathTranscripts"),
    moduleId: v.string(),
    sourceType: v.union(v.literal("grammar"), v.literal("vocabulary")),
    transcriptLineIds: v.array(v.array(v.number())), // Array of line ID arrays per pattern
    orderIndex: v.number(),
  })
    .index("by_path", ["pathId"])
    .index("by_path_module", ["pathId", "moduleId"]),

  // ===== Reference/Seed Data Tables =====

  // Core Vocabulary Items
  coreVocabularyItems: defineTable(vocabularyItemValidator.fields).index(
    "by_key",
    ["key"],
  ),

  // Core Vocabulary Sets
  coreVocabularySets: defineTable({
    setId: v.string(),
    vocabularyKeys: v.array(v.string()),
  }).index("by_setId", ["setId"]),

  // WaniKani Items
  wanikaniItems: defineTable({
    wanikaniId: v.number(), // Original WK ID
    characters: v.optional(v.string()),
    characterType: v.union(v.literal("radical"), v.literal("kanji")),
    meanings: v.array(v.string()),
    readingMnemonic: v.optional(v.string()),
    meaningMnemonic: v.string(),
    componentIds: v.array(v.number()),
    characterImageUrl: v.optional(v.string()),
  })
    .index("by_wanikaniId", ["wanikaniId"])
    .index("by_character", ["characters"]),

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
  }).index("by_title", ["title"]),

  terms: defineTable({
    dictionary: v.string(),
    expression: v.string(),
    reading: v.string(),
    definitionTags: v.optional(v.string()),
    rules: v.optional(v.string()),
    score: v.number(),
    glossary: v.string(), // Stringified JSON - too deeply nested for Convex's 16-level limit
    sequence: v.number(),
    termTags: v.optional(v.string()),
  }).index("by_expression", ["expression"]),

  termMeta: defineTable({
    dictionary: v.string(),
    expression: v.string(),
    mode: v.string(), // freq, pitch, or ipa
    data: metaDataValidator, // Frequency, pitch accent, or IPA data
  }).index("by_expression", ["expression"]),

  tagMeta: defineTable({
    dictionary: v.string(),
    name: v.string(),
    category: v.optional(v.string()),
    sortOrder: v.number(),
    description: v.optional(v.string()),
    score: v.number(),
  }).index("by_dictionary_name", ["dictionary", "name"]),

  kanji: defineTable({
    dictionary: v.string(),
    character: v.string(),
    onyomi: v.optional(v.string()),
    kunyomi: v.optional(v.string()),
    tags: v.optional(v.string()),
    meanings: v.array(v.string()),
    stats: v.optional(v.record(v.string(), v.string())), // {[statName]: value}
  }).index("by_character", ["character"]),

  kanjiMeta: defineTable({
    dictionary: v.string(),
    character: v.string(),
    mode: v.string(), // freq, pitch, or ipa
    data: metaDataValidator, // Frequency data (kanji only uses freq mode)
  }).index("by_character", ["character"]),

  // Sentence Practice Questions
  sentencePracticeQuestions: defineTable({
    setId: v.string(),
    order: v.number(),
    english: v.string(),
    hint: v.optional(v.string()),
    answers: v.array(sentenceAnswerValidator),
    modelAnswerPOS: v.array(v.array(v.string())),
  }).index("by_setId", ["setId"]),

})

import type { TextbookIDEnum } from "@/data/types"
import type { PracticeMode } from "@/features/vocab-practice/types"
import type { AllServicePreferences } from "@/features/main-cookies/schemas/user-settings"

/**
 * Centralized query key definitions
 * Ensures consistency and prevents key typos across the application
 */
export const queryKeys = {
  // UI Settings
  backgroundSettings: () => ["background-settings"] as const,

  // User Settings
  userSettings: (userId: string | null) => ["user-settings", userId] as const,

  // Vocab Practice
  practiceHierarchy: (
    moduleId: string,
    mode: PracticeMode,
    userOverrides: any,
    isLiveService: boolean,
  ) =>
    [
      "practice-hierarchy",
      moduleId,
      mode,
      JSON.stringify(userOverrides),
      isLiveService,
    ] as const,
  moduleVocabulary: (moduleId: string) =>
    ["module-vocabulary", moduleId] as const,
  practiceModuleFSRS: (
    userId: string | null,
    slugs: string[],
    mode: PracticeMode,
  ) => ["practice-module-fsrs", userId, slugs, mode] as const,
  practiceDueFSRS: (userId: string | null) =>
    ["practice-due-fsrs", userId] as const,
  hierarchySvgs: (characters: string[]) =>
    ["hierarchy-svgs", characters] as const,

  // User Decks
  userFoldersAndDecks: (userId: string | null) =>
    ["user-folders-and-decks", userId] as const,
  userDeckInfo: (deckId: string) => ["user-deck-info", deckId] as const,
  userDeckVocabulary: (deckId: string) =>
    ["user-deck-vocabulary", deckId] as const,
  userDeckHierarchy: (
    deckId: string,
    mode: PracticeMode,
    userOverrides: any,
    isLiveService: boolean,
  ) =>
    [
      "user-deck-hierarchy",
      deckId,
      mode,
      JSON.stringify(userOverrides),
      isLiveService,
    ] as const,
  recentlyStudiedDecks: (userId: string | null) =>
    ["recently-studied-decks", userId] as const,

  // Learn Page
  vocabHierarchy: (
    activeTextbook: string,
    deckSlug: string,
    userOverrides: any,
  ) => ["vocab-hierarchy", activeTextbook, deckSlug, userOverrides] as const,
  allLearningPaths: (userId: string | null) =>
    ["all-learning-paths", userId] as const,
  chapterModules: (learningPathId: string, chapterSlug: string) =>
    ["chapter-modules", learningPathId, chapterSlug] as const,
  dueCardsCount: (userId: string | null, preferences: AllServicePreferences) =>
    ["due-cards-count", userId, preferences] as const,
  seenCardsStats: (userId: string | null, preferences: AllServicePreferences) =>
    ["seen-cards-stats", userId, preferences] as const,
  completedModules: (userId: string | null) =>
    ["module-progress", userId, "completed"] as const,
  resourceThumbnail: (resourceId: string) =>
    ["resource-thumbnail", resourceId] as const,
  upcomingModules: (
    userId: string | null,
    textbookId: TextbookIDEnum,
    chapterSlug: string,
  ) => ["upcoming-modules", userId, textbookId, chapterSlug] as const,
  moduleProgress: (userId: string | null, moduleIds: string[] | undefined) =>
    ["module-progress", userId, moduleIds] as const,

  // Time Tracking
  userDailyAggregates: (userId: string | null) =>
    ["user-daily-aggregates", userId] as const,
  userSessionsPaginated: (
    userId: string | null,
    moduleType: string | null,
    offset: number,
    limit: number,
  ) => ["user-sessions-paginated", userId, moduleType, offset, limit] as const,

  // Module Detail Dialog
  transcriptData: (learningPathId: string) =>
    ["transcript-data", learningPathId] as const,
  moduleMetadata: (learningPathId: string, moduleId: string) =>
    ["module-metadata", learningPathId, moduleId] as const,
}

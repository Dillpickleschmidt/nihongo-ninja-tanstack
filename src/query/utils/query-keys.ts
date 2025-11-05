import type { TextbookIDEnum } from "@/data/types"
import type { PracticeMode } from "@/features/vocab-practice/types"
import type { AllServicePreferences } from "@/features/main-cookies/schemas/user-settings"

/**
 * Centralized query key definitions
 * Ensures consistency and prevents key typos across the application
 */
export const queryKeys = {
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
  userDeckInfo: (deckId: number) => ["user-deck-info", deckId] as const,
  userDeckVocabulary: (deckId: number) =>
    ["user-deck-vocabulary", deckId] as const,
  userDeckHierarchy: (
    deckId: number,
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

  // Learn Page
  vocabHierarchy: (
    activeTextbook: string,
    deckSlug: string,
    userOverrides: any,
  ) => ["vocab-hierarchy", activeTextbook, deckSlug, userOverrides] as const,
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
    currentPosition: string | null,
  ) => ["upcoming-modules", userId, textbookId, currentPosition] as const,
  moduleProgress: (userId: string | null, moduleIds: string[] | undefined) =>
    ["module-progress", userId, moduleIds] as const,

  // Time Tracking
  userDailyTime: (userId: string | null, date: Date) =>
    ["user-daily-time", userId, date.toDateString()] as const,
  userSessions: (
    userId: string | null,
    startDate: Date | undefined,
    endDate: Date | undefined,
  ) =>
    [
      "user-sessions",
      userId,
      startDate?.toISOString(),
      endDate?.toISOString(),
    ] as const,
  userWeekTimeData: (userId: string | null) =>
    ["user-week-time-data", userId] as const,
}

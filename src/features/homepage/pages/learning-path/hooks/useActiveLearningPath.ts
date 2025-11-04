import { getDeckBySlug, getChapters } from "@/data/utils/core"
import { getChapterStyles } from "@/data/chapter_colors"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { TextbookIDEnum } from "@/data/types"

/**
 * Derives learning path data from user settings
 * Returns active learning path (textbook), chapter, deck data, and styling
 */
export function useActiveLearningPath(
  settingsQuery: UseQueryResult<UserSettings, Error>,
) {
  const activeLearningPath = () =>
    settingsQuery.data!["active-learning-path"] as TextbookIDEnum
  const activeChapter = () => settingsQuery.data!["active-chapter"]

  const learningPathData = () =>
    getDeckBySlug(activeLearningPath(), activeChapter())
  const availableChapters = () => getChapters(activeLearningPath())
  const chapterStyles = () => getChapterStyles(activeChapter())

  return {
    activeLearningPath,
    activeChapter,
    learningPathData,
    availableChapters,
    chapterStyles,
  }
}

import { getDeckBySlug, getChapters } from "@/data/utils/core"
import { getChapterStyles } from "@/data/chapter_colors"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { TextbookIDEnum } from "@/data/types"

export function useChapterData(
  settingsQuery: UseQueryResult<UserSettings, Error>,
) {
  const activeTextbook = () =>
    settingsQuery.data!["active-learning-path"] as TextbookIDEnum
  const activeChapter = () => settingsQuery.data!["active-chapter"]

  const deck = () => getDeckBySlug(activeTextbook(), activeChapter())
  const chapters = () => getChapters(activeTextbook())
  const styles = () => getChapterStyles(activeChapter())

  return { activeTextbook, activeChapter, deck, chapters, styles }
}

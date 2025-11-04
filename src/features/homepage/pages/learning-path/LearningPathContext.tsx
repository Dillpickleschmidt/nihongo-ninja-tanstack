import { createContext, createMemo, useContext, type Accessor } from "solid-js"
import type { JSX, ParentProps } from "solid-js"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { BuiltInDeck } from "@/data/types"
import type { ChapterStyles } from "@/data/chapter_colors"
import type { EnrichedLearningPathModule } from "@/features/learn-page/utils/loader-helpers"
import { useLessonCompletion } from "./hooks/useLessonCompletion"
import { useScrollToIncomplete } from "./hooks/useScrollToIncomplete"
import { useActiveLearningPath } from "./hooks/useActiveLearningPath"
import { getModules } from "@/data/utils/core"
import { enrichLessons } from "@/features/learn-page/utils/loader-helpers"

// UI Representation of a lesson in the grid
export interface LessonCard {
  title: string
  description?: string
  href: string
  moduleType: string
  iconClasses: string
}

interface LearningPathContextType {
  activeLearningPath: () => string
  activeChapter: () => string

  learningPathData: () => BuiltInDeck | undefined
  lessons: () => LessonCard[]
  availableChapters: () => BuiltInDeck[]

  chapterStyles: () => ChapterStyles

  isLessonCompleted: (href: string) => boolean
  getFirstIncompleteIndex: () => number
  firstIncompleteHref: () => string | undefined

  settingsQuery: UseQueryResult<UserSettings, Error>
  userId: () => string | null

  onBack?: () => void
  onChapterChange?: (chapterSlug: string) => void

  handleLessonRef: (el: HTMLElement, index: number) => void
  handleScrollToNext: () => void
  blinkingLessonIndex: Accessor<number | null>
  shouldShowButton: Accessor<boolean>
}

interface LearningPathProviderProps {
  children: JSX.Element
  settingsQuery: UseQueryResult<UserSettings, Error>
  deck?: BuiltInDeck
  enrichedModules?: EnrichedLearningPathModule[]
  onChapterChange?: (chapterSlug: string) => void
  onBack?: () => void
  userId: string | null
}

const LearningPathContext = createContext<LearningPathContextType>()

export function LearningPathProvider(
  props: ParentProps<LearningPathProviderProps>,
) {
  const {
    activeLearningPath,
    activeChapter,
    learningPathData: deckData,
    availableChapters,
    chapterStyles,
  } = useActiveLearningPath(props.settingsQuery)

  const enrichedModules = createMemo(() => {
    // If enrichedModules provided via props, use them (from route loader)
    if (props.enrichedModules) return props.enrichedModules

    // If deck is provided via props, use it (from route loader)
    if (props.deck) {
      const rawModules = getModules(props.deck)
      return enrichLessons(rawModules)
    }

    // Otherwise, derive and enrich from settings
    const deck = deckData()
    if (!deck) return []
    const rawModules = getModules(deck)
    return enrichLessons(rawModules)
  })

  const lessons = createMemo(
    () =>
      enrichedModules().map((module) => ({
        moduleId: module.moduleId,
        moduleType: module.moduleType,
        title: module.displayTitle,
        description: module.description,
        href: module.linkTo,
        iconClasses: module.iconClasses,
      })) as LessonCard[],
  )

  const { isLessonCompleted, getFirstIncompleteIndex } = useLessonCompletion(
    props.userId,
    lessons,
  )

  const {
    handleLessonRef,
    handleScrollToNext,
    blinkingLessonIndex,
    shouldShowButton,
  } = useScrollToIncomplete(getFirstIncompleteIndex)

  const firstIncompleteHref = () => {
    const index = getFirstIncompleteIndex()
    return index >= 0 ? lessons()[index]?.href : undefined
  }

  const contextValue: LearningPathContextType = {
    activeLearningPath,
    activeChapter,
    learningPathData: deckData,
    lessons,
    availableChapters,
    chapterStyles,
    isLessonCompleted,
    getFirstIncompleteIndex,
    firstIncompleteHref,
    settingsQuery: props.settingsQuery,
    userId: () => props.userId,
    onBack: props.onBack,
    onChapterChange: props.onChapterChange,
    handleLessonRef,
    handleScrollToNext,
    blinkingLessonIndex,
    shouldShowButton,
  }

  return (
    <LearningPathContext.Provider value={contextValue}>
      {props.children}
    </LearningPathContext.Provider>
  )
}

export function useLearningPath(): LearningPathContextType {
  const context = useContext(LearningPathContext)
  if (!context) {
    throw new Error("useLearningPath must be used within LearningPathProvider")
  }
  return context
}

import { createContext, useContext, type Accessor } from "solid-js"
import type { JSX, ParentProps } from "solid-js"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import type {
  LearningPathChapter,
  LearningPath,
  ResolvedModule,
} from "@/data/types"
import type { EnrichedLearningPathModule } from "@/features/learn-page/utils/loader-helpers"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  allLearningPathsQueryOptions,
  chapterModulesQueryOptions,
} from "@/query/query-options"
import { enrichLessons } from "@/features/learn-page/utils/loader-helpers"
import { useLessonCompletion } from "./hooks/useLessonCompletion"
import { useScrollToIncomplete } from "./hooks/useScrollToIncomplete"

interface LearningPathContextType {
  chapters: UseQueryResult<LearningPathChapter[] | undefined, Error>
  modules: UseQueryResult<EnrichedLearningPathModule[] | undefined, Error>

  isLessonCompleted: (href: string) => boolean
  getFirstIncompleteIndex: () => number

  settingsQuery: UseQueryResult<UserSettings, Error>
  userId: () => string | null

  onBack?: () => void
  onChapterChange: (chapterSlug: string) => void

  handleLessonRef: (el: HTMLElement, index: number) => void
  handleScrollToNext: () => void
  blinkingLessonIndex: Accessor<number | null>
  shouldShowButton: Accessor<boolean>
}

interface LearningPathProviderProps {
  children: JSX.Element
  settingsQuery: UseQueryResult<UserSettings, Error>
  onChapterChange: (chapterSlug: string) => void
  onBack?: () => void
  userId: string | null
}

const LearningPathContext = createContext<LearningPathContextType>()

export function LearningPathProvider(
  props: ParentProps<LearningPathProviderProps>,
) {
  const chapters = useCustomQuery(() => {
    const learningPathId = props.settingsQuery.data?.["active-learning-path"]

    return {
      ...allLearningPathsQueryOptions(props.userId),
      select: (data: LearningPath[]) => {
        const path = data.find((p) => p.id === learningPathId)
        return path?.chapters
      },
    } as any
  }) as UseQueryResult<LearningPathChapter[] | undefined, Error>

  const modules = useCustomQuery(() => {
    const learningPathId = props.settingsQuery.data?.["active-learning-path"]
    const chapterSlug = props.settingsQuery.data?.["active-chapter"]

    return {
      ...chapterModulesQueryOptions(learningPathId!, chapterSlug!),
      select: (data: ResolvedModule[]) => {
        return enrichLessons(data)
      },
    } as any
  }) as UseQueryResult<EnrichedLearningPathModule[] | undefined, Error>

  const { isLessonCompleted, getFirstIncompleteIndex } = useLessonCompletion(
    props.userId,
    () => modules.data,
  )

  const {
    handleLessonRef,
    handleScrollToNext,
    blinkingLessonIndex,
    shouldShowButton,
  } = useScrollToIncomplete(getFirstIncompleteIndex)

  const contextValue: LearningPathContextType = {
    chapters,
    modules,
    isLessonCompleted,
    getFirstIncompleteIndex,
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

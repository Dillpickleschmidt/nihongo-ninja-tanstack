import { useCustomQuery } from "@/hooks/useCustomQuery"
import { completedModulesQueryOptions } from "@/query/query-options"
import type { Accessor } from "solid-js"
import type { EnrichedLearningPathModule } from "@/features/learn-page/utils/loader-helpers"

/**
 * Tracks lesson completion status for the user
 * Returns functions to check if a lesson is completed and find first incomplete
 */
export function useLessonCompletion(
  userId: string | null,
  lessons: Accessor<EnrichedLearningPathModule[] | undefined>,
) {
  const completedLessonsQuery = useCustomQuery(() =>
    completedModulesQueryOptions(userId),
  )

  const isLessonCompleted = (lessonHref: string) => {
    const lessonId = lessonHref.split("/").pop()
    return (
      completedLessonsQuery.data?.some(
        (lesson) => lesson.module_path === lessonId,
      ) ?? false
    )
  }

  const getFirstIncompleteIndex = () => {
    const lessonsList = lessons()
    if (!lessonsList) return -1
    return lessonsList.findIndex((lesson) => !isLessonCompleted(lesson.linkTo))
  }

  return { isLessonCompleted, getFirstIncompleteIndex }
}

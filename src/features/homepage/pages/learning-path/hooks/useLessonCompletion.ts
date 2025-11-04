import { useCustomQuery } from "@/hooks/useCustomQuery"
import { completedModulesQueryOptions } from "@/query/query-options"
import type { LessonCard } from "../LearningPathContext"

/**
 * Tracks lesson completion status for the user
 * Returns functions to check if a lesson is completed and find first incomplete
 */
export function useLessonCompletion(
  userId: string | null,
  lessons: () => LessonCard[],
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

  const getFirstIncompleteIndex = () =>
    lessons().findIndex((lesson) => !isLessonCompleted(lesson.href))

  return { isLessonCompleted, getFirstIncompleteIndex }
}

// Learning paths and chapters queries
import { textbooks } from "@/data/textbooks"
import { chapters } from "@/data/chapters"
import {
  getUserPathChaptersAsync,
  getUserPathChapterModules,
  getUserLearningPaths,
} from "@/features/supabase/db/learning-paths"
import type { TextbookIDEnum, LearningPathChapter, ResolvedModule, LearningPath } from "@/data/types"
import { getModulesFromLocalChapter } from "@/data/utils/modules"

/**
 * Gets chapters with modules for a static textbook (internal only).
 * For public access, use getLearningPathChapters() instead.
 */
function getStaticTextbookChapters(
  learningPathId: string,
): LearningPathChapter[] {
  const textbook = textbooks[learningPathId as TextbookIDEnum]

  if (textbook) {
    const textbookChaptersMap = chapters[learningPathId as TextbookIDEnum]
    if (!textbookChaptersMap) return []
    return textbook.chapterSlugs.map((slug) => textbookChaptersMap[slug])
  }

  return []
}

/**
 * Gets all chapters from any learning path with full module details.
 */
async function getLearningPathChapters(
  pathId: string,
): Promise<LearningPathChapter[]> {
  // Try static textbook first
  const staticChapters = getStaticTextbookChapters(pathId)
  if (staticChapters.length > 0) {
    return staticChapters
  }

  // Fall back to user-created learning path from database
  return await getUserPathChaptersAsync(pathId)
}

/**
 * Gets resolved module objects for a specific chapter in any learning path.
 * Routes to the appropriate resolver based on whether it's a static textbook or user path.
 * @param pathId - Textbook ID or learning path ID
 * @param chapterSlug - Chapter slug to retrieve
 * @returns Array of module objects with their keys and disabled status
 */
export async function getLearningPathChapterItems(
  pathId: string,
  chapterSlug: string,
): Promise<ResolvedModule[]> {
  // Check if it's a static textbook
  const textbook = textbooks[pathId as TextbookIDEnum]
  if (textbook) {
    // For static textbooks, resolve modules from local data
    const chapters = await getLearningPathChapters(pathId)
    const chapter = chapters.find((ch) => ch.slug === chapterSlug)
    if (!chapter) return []
    return getModulesFromLocalChapter(chapter)
  }

  // For user-created learning paths, fetch from database
  return await getUserPathChapterModules(pathId, chapterSlug)
}

/**
 * Fetches all learning paths (both static textbooks and user-created paths).
 * Combines static textbooks with user-created learning paths if user is logged in.
 * @param userId - User ID (or null for anonymous users)
 * @returns Array of all learning paths
 */
export async function fetchAllLearningPaths(
  userId: string | null,
): Promise<LearningPath[]> {
  // Get static textbooks
  const staticTextbooks = await Promise.all(
    Object.entries(textbooks).map(async ([textbookId, textbook]) => ({
      id: textbookId as TextbookIDEnum,
      name: textbook.name,
      short_name: textbook.short_name || textbook.name,
      chapters: await getLearningPathChapters(textbookId),
      isUserCreated: false,
    })),
  )

  // Get user-created learning paths if user is logged in
  if (!userId) {
    return staticTextbooks
  }

  try {
    const userPaths = await getUserLearningPaths(userId)

    const userLearningPaths = await Promise.all(
      userPaths.map(async (path) => ({
        id: path.path_id,
        name: path.name,
        short_name: path.name,
        chapters: await getLearningPathChapters(path.path_id),
        isUserCreated: true,
      })),
    )

    return [...staticTextbooks, ...userLearningPaths]
  } catch (error) {
    // If user path fetch fails, fall back to static textbooks only
    console.error("Failed to fetch user learning paths:", error)
    return staticTextbooks
  }
}

import { QueryCtx } from '../_generated/server'
import {
  getAllTextbooks,
  isBuiltInTextbook,
} from '../../src/data/utils/textbooks'
import { getChaptersByTextbook } from '../../src/data/utils/chapters'

const MODULES_PER_CHAPTER = 30

export type LearningPath = {
  id: string
  name: string
  shortName: string
  isUserCreated: boolean
}

/**
 * Gets all built-in textbook learning paths
 */
export function getBuiltInPaths(): LearningPath[] {
  return getAllTextbooks().map((tb) => ({
    id: tb.id,
    name: tb.name,
    shortName: tb.short_name,
    isUserCreated: false,
  }))
}

/**
 * Gets user-created learning paths from DB
 */
export async function getUserPaths(
  ctx: QueryCtx,
  userId: string
): Promise<LearningPath[]> {
  const userPaths = await ctx.db
    .query('learningPathTranscripts')
    .withIndex('by_user', (q) => q.eq('userId', userId))
    .collect()

  return userPaths.map((path) => ({
    id: String(path._id),
    name: path.name,
    shortName: path.name,
    isUserCreated: true,
  }))
}

/**
 * Gets chapters for a learning path (built-in or user-created)
 */
export async function getChaptersForPath(ctx: QueryCtx, pathId: string) {
  // Built-in textbook - get chapters from code
  if (isBuiltInTextbook(pathId)) {
    return getChaptersByTextbook(pathId)
  }

  // User path - generate chapters from modules
  const moduleSources = await ctx.db
    .query('learningPathModuleSources')
    .withIndex('by_path', (q) => q.eq('pathId', pathId as any))
    .collect()

  moduleSources.sort((a, b) => a.orderIndex - b.orderIndex)

  const moduleIds = moduleSources.map((m) => m.moduleId)
  return chunkIntoChapters(moduleIds)
}

function chunkIntoChapters(moduleIds: string[]) {
  const chapters = []
  for (let i = 0; i < moduleIds.length; i += MODULES_PER_CHAPTER) {
    const chapterNum = Math.floor(i / MODULES_PER_CHAPTER) + 1
    chapters.push({
      slug: `chapter-${chapterNum}`,
      title: `Part ${chapterNum}`,
      learning_path_item_ids: moduleIds.slice(i, i + MODULES_PER_CHAPTER),
    })
  }
  return chapters
}

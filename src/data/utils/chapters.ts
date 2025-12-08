import { chapters, type LearningPathChapter } from '../chapters'
import type { TextbookIDEnum } from '../textbooks'

export function getChaptersByTextbook(textbookId: string): LearningPathChapter[] {
  return Object.values(chapters[textbookId as TextbookIDEnum] ?? {})
}

export function getTextbookChapterBySlug(
  textbookId: string,
  slug: string
): LearningPathChapter | undefined {
  return chapters[textbookId as TextbookIDEnum]?.[slug]
}

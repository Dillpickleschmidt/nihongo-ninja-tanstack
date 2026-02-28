import { chapters, type BuiltInChapter } from "../chapters"
import type { TextbookIDEnum } from "../textbooks"

export function getChaptersByTextbook(
  textbookId: string,
): BuiltInChapter[] {
  return Object.values(chapters[textbookId as TextbookIDEnum] ?? {})
}

export function getTextbookChapterBySlug(
  textbookId: string,
  slug: string,
): BuiltInChapter | undefined {
  return chapters[textbookId as TextbookIDEnum]?.[slug]
}

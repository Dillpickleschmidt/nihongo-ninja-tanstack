// Module path and resolution utilities
import { textbooks } from "@/data/textbooks"
import { chapters } from "@/data/chapters"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { external_resources } from "@/data/external_resources"
import type { TextbookIDEnum, LearningPathChapter, ResolvedModule } from "@/data/types"

/**
 * Get module title from path
 */
export function getModuleTitleFromPath(path: string): string | undefined {
  const segments = path.split("/")
  const moduleId = segments[segments.length - 1] || ""
  const module = dynamic_modules[moduleId] || null
  return module?.title
}

/**
 * Gets all module IDs from a static textbook in chapter order.
 * Used for ordering modules in learning path generation.
 * @param textbookId - Textbook ID
 * @returns Array of module IDs across all chapters in order
 */
export function getStaticTextbookModuleIds(
  textbookId: TextbookIDEnum,
): string[] {
  const getStaticTextbookChapters = (
    learningPathId: string,
  ): LearningPathChapter[] => {
    const textbook = textbooks[learningPathId as TextbookIDEnum]

    if (textbook) {
      const textbookChaptersMap = chapters[learningPathId as TextbookIDEnum]
      if (!textbookChaptersMap) return []
      return textbook.chapterSlugs.map((slug) => textbookChaptersMap[slug])
    }

    return []
  }

  const chaptersList = getStaticTextbookChapters(textbookId)
  const moduleIds: string[] = []

  chaptersList.forEach((chapter) => {
    moduleIds.push(...chapter.learning_path_item_ids)
  })

  return moduleIds
}

/**
 * Gets resolved module objects for a local (static) chapter.
 * Converts module IDs to full module objects with disabled status.
 */
export function getModulesFromLocalChapter(
  chapter: LearningPathChapter,
): ResolvedModule[] {
  const modules = {
    ...static_modules,
    ...dynamic_modules,
    ...external_resources,
  }
  const disabledSet = new Set(chapter.disabled_modules || [])

  return chapter.learning_path_item_ids
    .map((moduleId) => ({
      key: moduleId,
      module: modules[moduleId],
      disabled: disabledSet.has(moduleId),
    }))
    .filter((item): item is ResolvedModule => item.module !== undefined)
}

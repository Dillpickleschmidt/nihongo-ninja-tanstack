// Module path and resolution utilities
import { static_modules, type StaticModule } from "../static_modules"
import { dynamic_modules, type DynamicModule } from "../dynamic_modules"
import { chapters, type LearningPathChapter } from "../chapters"
import { getLinkTo, getModuleIconClasses } from "./module-helpers"

// Unified Module type
export type Module = StaticModule | DynamicModule

/**
 * Resolved module with computed properties for rendering
 */
export interface ResolvedModule {
  moduleId: string
  module: Module
  linkTo: string
  iconClasses: string
  disabled: boolean
}

const allModules: Record<string, Module> = {
  ...static_modules,
  ...dynamic_modules,
}

/**
 * Given a moduleId, find the next module in the learning path and return its link.
 */
export function getNextModuleLink(moduleId: string): string | null {
  for (const textbookChapters of Object.values(chapters)) {
    for (const chapter of Object.values(textbookChapters)) {
      const ids = chapter.learning_path_item_ids
      const idx = ids.indexOf(moduleId)
      if (idx === -1 || idx === ids.length - 1) continue

      const nextId = ids[idx + 1]
      const nextModule = allModules[nextId]
      if (nextModule) return getLinkTo(nextModule, nextId)
    }
  }
  return null
}

/**
 * Resolves module IDs from a chapter to full module objects with display properties.
 */
export function getModulesFromChapter(
  chapter: LearningPathChapter,
): ResolvedModule[] {
  const disabledSet = new Set(chapter.disabled_modules || [])

  return chapter.learning_path_item_ids
    .map((moduleId) => {
      const module = allModules[moduleId]
      if (!module) return null

      return {
        moduleId,
        module,
        linkTo: getLinkTo(module, moduleId),
        iconClasses: getModuleIconClasses(module.module_type),
        disabled: disabledSet.has(moduleId),
      }
    })
    .filter((item): item is ResolvedModule => item !== null)
}

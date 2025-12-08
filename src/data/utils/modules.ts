// Module path and resolution utilities
import { static_modules, type StaticModule } from "../static_modules"
import { dynamic_modules, type DynamicModule } from "../dynamic_modules"
import type { LearningPathChapter } from "../chapters"
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
 * Resolves module IDs from a chapter to full module objects with display properties.
 */
export function getModulesFromChapter(
  chapter: LearningPathChapter
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

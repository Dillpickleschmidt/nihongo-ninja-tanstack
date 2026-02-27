import { dynamic_modules } from "@/data/dynamic_modules"
import { static_modules } from "@/data/static_modules"

export const DAILY_PROGRESS_TARGET_UNITS = 1800

export const PROGRESS_WEIGHTS = {
  vocab: {
    multipleChoiceAnswer: 5,
    writeAnswer: 10,
    flashcardAnswer: 5,
    introductionComplete: 10,
    reviewContinue: 5,
    finishReturn: 10,
  },
  sentence: {
    easyAnswer: 15,
    hardAnswer: 30,
  },
  completions: {
    vocabTest: 900,
  },
} as const

export function getCompletionProgressUnits(moduleId: string): number {
  const staticModule = static_modules[moduleId]
  if (staticModule) {
    return (staticModule.daily_prog_amount ?? 10) * 60
  }

  const dynamicModule = dynamic_modules[moduleId]
  if (!dynamicModule) return 0

  if (dynamicModule.module_type === "vocab-test") {
    return PROGRESS_WEIGHTS.completions.vocabTest
  }

  return 0
}

export function getModuleTypeForCompletion(moduleId: string): string | null {
  const staticModule = static_modules[moduleId]
  if (staticModule) return staticModule.module_type

  const dynamicModule = dynamic_modules[moduleId]
  if (dynamicModule) return dynamicModule.module_type

  return null
}

export function getLocalDateKey(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date)
}

export function getCurrentTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
}

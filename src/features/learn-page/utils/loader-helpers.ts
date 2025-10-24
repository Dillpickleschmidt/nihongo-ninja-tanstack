// features/learn-page-v2/utils/loader-helpers.ts
import type {
  Module,
  ExternalResource,
  StaticModule,
  DynamicModule,
  ExternalResourceCollection,
} from "@/data/types"
import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  Gamepad,
  Coffee,
  Video,
  Volume2,
  Library,
  BookOpenText,
  BookPlus,
  Headphones,
  FileText,
  Mic,
  Wrench,
  MessageCircle,
  Newspaper,
  BookMarked,
  Ear,
  Eye,
  PenTool,
  Blocks,
  MapPlus,
} from "lucide-solid"
import { Component } from "solid-js"

// --- Text Truncation Helper ---
function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
}

// --- Types for Enriched Data ---

export type EnrichedExternalResource = ExternalResource & {
  id: string
  gradientStyle: string
  difficultyColorClass: string
  truncatedTitle: string
  truncatedTitleMobile: string
}
export type EnrichedExternalResourceCollection = Record<
  string,
  EnrichedExternalResource
>

export interface EnrichedLearningPathModule
  extends StaticModule,
    DynamicModule {
  moduleId: string
  moduleType: string
  displayTitle: string
  linkTo: string
  iconClasses: string
  gradientClasses: string
  lightBackground: string
  truncatedTitle: string
  disabled?: boolean
}

// --- Enrichment Functions for External Resources ---

function getResourceGradientStyle(
  lessonType: ExternalResource["lesson_type"],
): string {
  const gradients = {
    video:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)",
    audio:
      "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%)",
    article:
      "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)",
    podcast:
      "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)",
    tool: "linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)",
    forum:
      "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%)",
    news: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(251, 113, 133, 0.1) 100%)",
    textbook_companion:
      "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)",
    listening_practice:
      "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(244, 114, 182, 0.1) 100%)",
    reading_practice:
      "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(74, 222, 128, 0.1) 100%)",
    grammar_guide:
      "linear-gradient(135deg, rgba(245, 101, 101, 0.2) 0%, rgba(252, 165, 165, 0.1) 100%)",
    worksheet:
      "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)",
    lesson:
      "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)",
    "vocab-test":
      "linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)",
    "conjugation-practice":
      "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)",
    "counter-practice":
      "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)",
    game: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(251, 113, 133, 0.1) 100%)",
    "grammar-cheatsheet":
      "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(251, 113, 133, 0.1) 100%)",
    reading:
      "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)",
    "culture-note":
      "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(244, 114, 182, 0.1) 100%)",
    "chapter-vocab-overview":
      "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)",
  }
  return gradients[lessonType as keyof typeof gradients] || gradients.lesson
}

function getResourceDifficultyColorClass(
  difficulty: ExternalResource["difficulty_rating"],
): string {
  switch (difficulty) {
    case "easy":
      return "dark:bg-green-800 bg-green-600 text-green-100 saturate-50 dark:saturate-[75%]"
    case "medium":
      return "dark:bg-yellow-800 bg-yellow-500 text-yellow-100 saturate-50 dark:saturate-[75%]"
    case "hard":
      return "dark:bg-red-800 bg-red-600 text-red-100 saturate-50 dark:saturate-[75%]"
    default:
      return "dark:bg-gray-800 bg-gray-600 text-gray-100 saturate-50 dark:saturate-[75%]"
  }
}

export function enrichExternalResources(
  resources: ExternalResourceCollection,
): EnrichedExternalResourceCollection {
  const enriched: EnrichedExternalResourceCollection = {}

  for (const [key, resource] of Object.entries(resources)) {
    enriched[key] = {
      ...resource,
      id: key,
      gradientStyle: getResourceGradientStyle(resource.lesson_type),
      difficultyColorClass: getResourceDifficultyColorClass(
        resource.difficulty_rating,
      ),
      truncatedTitle: truncateText(resource.title, 50),
      truncatedTitleMobile: truncateText(resource.title, 35),
    }
  }

  return enriched
}

// Helper function to map lesson type to Lucide icon component
export function getResourceIconComponent(
  lessonType: ExternalResource["lesson_type"],
): Component<any> {
  const iconMap = {
    video: Video,
    audio: Headphones,
    worksheet: FileText,
    lesson: BookOpen,
    "vocab-test": GraduationCap,
    "conjugation-practice": GraduationCap,
    "counter-practice": GraduationCap,
    game: Gamepad,
    "grammar-cheatsheet": ScrollText,
    reading: BookOpenText,
    "culture-note": Coffee,
    "chapter-vocab-overview": Library,
  }
  return iconMap[lessonType as keyof typeof iconMap] || BookOpen
}

// --- Enrichment Functions for Learning Path Modules (Lessons) ---

function getModuleType(module: Module) {
  return "lesson_type" in module ? module.lesson_type : module.session_type
}

function getDisplayTitle(title: string) {
  return title.startsWith("Practice ") ? title.substring(9) : title
}

export function getLinkTo(module: Module, moduleKey: string) {
  if ("link" in module && module.link) {
    if (module.link.startsWith("/external-resources/")) {
      const parts = module.link.split("/")
      parts.splice(-2, 1)
      return parts.join("/")
    }
    return module.link
  }

  if ("session_type" in module) {
    if (module.session_type === "vocab-practice") {
      return `/vocab?import=${moduleKey}`
    }
    if (module.session_type === "sentence-practice") {
      const strippedId = moduleKey.replace(/^sentence-practice-/, "")
      return `/sentence-practice/${strippedId}`
    }
  }

  return `/practice/${moduleKey}`
}

export function getModuleIcon(moduleType: string) {
  const iconComponents = {
    lesson: BookOpen,
    worksheet: PencilLine,
    "sentence-practice": PencilLine,
    "culture-note": Coffee,
    vocab: BookPlus,
    "vocab-practice": GraduationCap,
    "conjugation-practice": GraduationCap,
    "counter-practice": GraduationCap,
    game: Gamepad,
    video: Video,
    audio: Volume2,
    "grammar-cheatsheet": FileText,
    guides: ScrollText,
    reading: BookOpenText,
    "vocab-list": Library,
    "vocab-test": GraduationCap,
    kanji: Library,
    "listening-material": Volume2,
    extension: Blocks,
    misc: MapPlus,
  }
  return iconComponents[moduleType] || BookOpen
}

const MODULE_STYLES = {
  lesson: {
    text: "text-green-600 dark:text-green-500",
    bg: "bg-green-600 dark:bg-green-500",
  },
  worksheet: {
    text: "text-teal-500 dark:text-teal-400",
    bg: "bg-teal-500 dark:bg-teal-400",
  },
  "sentence-practice": {
    text: "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
    bg: "bg-yellow-600 dark:bg-yellow-500 saturate-[75%]",
  },
  "culture-note": {
    text: "text-pink-500 dark:text-pink-400 saturate-[75%]",
    bg: "bg-pink-500 dark:bg-pink-400 saturate-[75%]",
  },
  vocab: {
    text: "text-sky-500 dark:text-sky-400 saturate-[75%]",
    bg: "bg-sky-500 dark:bg-sky-400 saturate-[75%]",
  },
  "vocab-practice": {
    text: "text-orange-600 dark:text-orange-500",
    bg: "bg-orange-600 dark:bg-orange-500",
  },
  "conjugation-practice": {
    text: "text-teal-500 dark:text-teal-400",
    bg: "bg-teal-500 dark:bg-teal-400",
  },
  "counter-practice": {
    text: "text-green-600 dark:text-green-500",
    bg: "bg-green-600 dark:bg-green-500",
  },
  game: {
    text: "text-red-600 dark:text-red-500",
    bg: "bg-red-600 dark:bg-red-500",
  },
  video: {
    text: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-500 dark:bg-purple-400",
  },
  audio: {
    text: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-500 dark:bg-purple-400",
  },
  "grammar-cheatsheet": {
    text: "text-red-600 dark:text-red-500 opacity-80",
    bg: "bg-red-600 dark:bg-red-500 opacity-80",
  },
  guides: {
    text: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-500 dark:bg-purple-400",
  },
  reading: {
    text: "text-teal-500 dark:text-teal-400",
    bg: "bg-teal-500 dark:bg-teal-400",
  },
  "vocab-list": {
    text: "text-sky-500 dark:text-sky-400 saturate-[75%]",
    bg: "bg-sky-500 dark:bg-sky-400 saturate-[75%]",
  },
  "vocab-test": {
    text: "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
    bg: "bg-yellow-600 dark:bg-yellow-500 saturate-[75%]",
  },
  kanji: {
    text: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-600 dark:bg-indigo-400",
  },
  "listening-material": {
    text: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-500 dark:bg-purple-400",
  },
  extension: {
    text: "text-emerald-600 dark:text-emerald-500",
    bg: "bg-emerald-600 dark:bg-emerald-500",
  },
  misc: {
    text: "text-pink-500 dark:text-pink-400",
    bg: "bg-pink-500 dark:bg-pink-400",
  },
}

const DEFAULT_STYLE = {
  text: "text-gray-600 dark:text-gray-500",
  bg: "bg-gray-600 dark:bg-gray-500",
}

function getModuleStyle(moduleType: string) {
  return MODULE_STYLES[moduleType] || DEFAULT_STYLE
}

export function getModuleIconClasses(moduleType: string) {
  return getModuleStyle(moduleType).text
}

export function getModuleCircleClasses(moduleType: string) {
  return getModuleStyle(moduleType).bg
}

function getModuleGradient(moduleType: string) {
  const gradientClasses = {
    lesson: "bg-gradient-to-br from-green-500/10 via-card to-green-600/5",
    worksheet: "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "practice-sentence":
      "bg-gradient-to-br from-yellow-500/10 via-card to-yellow-600/5",
    "culture-note": "bg-gradient-to-br from-pink-400/10 via-card to-pink-500/5",
    vocab: "bg-gradient-to-br from-sky-400/10 via-card to-sky-500/5",
    "vocab-practice":
      "bg-gradient-to-br from-orange-500/10 via-card to-orange-600/5",
    "conjugation-practice":
      "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "counter-practice":
      "bg-gradient-to-br from-green-500/10 via-card to-green-600/5",
    game: "bg-gradient-to-br from-red-500/10 via-card to-red-600/5",
    video: "bg-gradient-to-br from-purple-400/10 via-card to-purple-500/5",
    audio: "bg-gradient-to-br from-purple-400/10 via-card to-purple-500/5",
    "grammar-cheatsheet":
      "bg-gradient-to-br from-red-500/10 via-card to-red-600/5",
    guides: "bg-gradient-to-br from-purple-400/10 via-card to-purple-500/5",
    reading: "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "vocab-list": "bg-gradient-to-br from-sky-400/10 via-card to-sky-500/5",
    "vocab-test":
      "bg-gradient-to-br from-yellow-500/10 via-card to-yellow-600/5",
    extension:
      "bg-gradient-to-br from-emerald-500/10 via-card to-emerald-600/5",
    misc: "bg-gradient-to-br from-pink-500/10 via-card to-pink-600/5",
  }
  return gradientClasses[moduleType] || "bg-card"
}

function getModuleLightBackground(moduleType: string) {
  // ... (implementation from previous refactor)
  const lightBackgrounds = {
    lesson: "bg-green-50/70",
    worksheet: "bg-teal-50/70",
    "practice-sentence": "bg-yellow-50/70",
    "culture-note": "bg-pink-50/70",
    vocab: "bg-sky-50/70",
    "vocab-practice": "bg-orange-50/70",
    "conjugation-practice": "bg-teal-50/70",
    "counter-practice": "bg-green-50/70",
    game: "bg-red-50/70",
    video: "bg-purple-50/70",
    audio: "bg-purple-50/70",
    "grammar-cheatsheet": "bg-red-50/70",
    guides: "bg-purple-50/70",
    reading: "bg-teal-50/70",
    "vocab-list": "bg-sky-50/70",
    "vocab-test": "bg-yellow-50/70",
    extension: "bg-emerald-50/70",
    misc: "bg-pink-50/70",
  }
  return lightBackgrounds[moduleType] || "bg-card"
}

export function enrichLessons(
  lessons: {
    module: Module
    key: string
    disabled?: boolean
  }[],
): EnrichedLearningPathModule[] {
  return lessons.map(({ module, key, disabled }) => {
    const moduleType = getModuleType(module)
    const displayTitle = getDisplayTitle(module.title)

    return {
      ...module,
      moduleId: key,
      moduleType,
      displayTitle,
      linkTo: getLinkTo(module, key),
      iconClasses: getModuleIconClasses(moduleType),
      gradientClasses: getModuleGradient(moduleType),
      lightBackground: getModuleLightBackground(moduleType),
      truncatedTitle: truncateText(displayTitle, 25),
      disabled,
    } as EnrichedLearningPathModule
  })
}

// features/dashboard/utils/loader-helpers.ts
import type {
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
} from "lucide-solid"

// --- Text Truncation Helper ---
function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
}

// --- Types for Enriched Data ---

export type EnrichedExternalResource = ExternalResource & {
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
  moduleType: string
  displayTitle: string
  linkTo: string
  iconClasses: string
  gradientClasses: string
  lightBackground: string
  truncatedTitle: string
}

// --- Enrichment Functions for External Resources ---

function getResourceGradientStyle(
  resourceType: ExternalResource["resource_type"],
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
  }
  return gradients[resourceType as keyof typeof gradients] || gradients.article
}

function getResourceDifficultyColorClass(
  difficulty: ExternalResource["difficulty_rating"],
): string {
  // ... (implementation from contentShowcaseUtils.ts)
  switch (difficulty) {
    case "easy":
      return "bg-green-500/30 text-green-100"
    case "medium":
      return "bg-yellow-500/30 text-yellow-100"
    case "hard":
      return "bg-red-500/30 text-red-100"
    default:
      return "bg-gray-500/30 text-gray-100"
  }
}

export function enrichExternalResources(
  resources: ExternalResourceCollection,
): EnrichedExternalResourceCollection {
  const enriched: EnrichedExternalResourceCollection = {}

  for (const [key, resource] of Object.entries(resources)) {
    enriched[key] = {
      ...resource,
      gradientStyle: getResourceGradientStyle(resource.resource_type),
      difficultyColorClass: getResourceDifficultyColorClass(
        resource.difficulty_rating,
      ),
      truncatedTitle: truncateText(resource.title, 50),
      truncatedTitleMobile: truncateText(resource.title, 35),
    }
  }

  return enriched
}

// --- Enrichment Functions for Learning Path Modules (Lessons) ---

function getModuleType(module: StaticModule | DynamicModule) {
  return "lesson_type" in module ? module.lesson_type : module.session_type
}

function getDisplayTitle(title: string) {
  return title.startsWith("Practice ") ? title.substring(9) : title
}

function getLinkTo(lesson: StaticModule | DynamicModule, moduleKey: string) {
  if ("link" in lesson && lesson.link) {
    return lesson.link
  }

  if ("session_type" in lesson && lesson.session_type === "vocab-practice") {
    return `/vocab?import=${moduleKey}`
  }

  return `/practice/${moduleKey}`
}

export function getModuleIcon(moduleType: string) {
  const iconComponents = {
    lesson: BookOpen,
    worksheet: PencilLine,
    "practice-sentence": PencilLine,
    "culture-note": Coffee,
    vocab: BookPlus,
    "vocab-practice": GraduationCap,
    "conjugation-practice": GraduationCap,
    "counter-practice": GraduationCap,
    game: Gamepad,
    video: Video,
    audio: Volume2,
    "grammar-notes": ScrollText,
    reading: BookOpenText,
    "vocab-list": Library,
    "vocab-test": GraduationCap,
  }
  return iconComponents[moduleType] || BookOpen
}

function getModuleIconClasses(moduleType: string) {
  // ... (implementation from previous refactor)
  const iconClasses = {
    lesson: "text-green-600 dark:text-green-500",
    worksheet: "text-teal-500 dark:text-teal-400",
    "practice-sentence": "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
    "culture-note": "text-pink-500 dark:text-pink-400 saturate-[75%]",
    vocab: "text-sky-500 dark:text-sky-400 saturate-[75%]",
    "vocab-practice": "text-orange-600 dark:text-orange-500",
    "conjugation-practice": "text-teal-500 dark:text-teal-400",
    "counter-practice": "text-green-600 dark:text-green-500",
    game: "text-red-600 dark:text-red-500",
    video: "text-purple-500 dark:text-purple-400",
    audio: "text-purple-500 dark:text-purple-400",
    "grammar-notes": "text-red-600 dark:text-red-500 opacity-80",
    reading: "text-teal-500 dark:text-teal-400",
    "vocab-list": "text-sky-500 dark:text-sky-400 saturate-[75%]",
    "vocab-test": "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
  }
  return iconClasses[moduleType] || "text-gray-600 dark:text-gray-500"
}

function getModuleGradient(moduleType: string) {
  // ... (implementation from previous refactor)
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
    "grammar-notes": "bg-gradient-to-br from-red-500/10 via-card to-red-600/5",
    reading: "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "vocab-list": "bg-gradient-to-br from-sky-400/10 via-card to-sky-500/5",
    "vocab-test":
      "bg-gradient-to-br from-yellow-500/10 via-card to-yellow-600/5",
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
    "grammar-notes": "bg-red-50/70",
    reading: "bg-teal-50/70",
    "vocab-list": "bg-sky-50/70",
    "vocab-test": "bg-yellow-50/70",
  }
  return lightBackgrounds[moduleType] || "bg-card"
}

export function enrichLessons(
  lessons: { lesson: StaticModule | DynamicModule; key: string }[],
): EnrichedLearningPathModule[] {
  return lessons.map(({ lesson, key }) => {
    const moduleType = getModuleType(lesson)
    const displayTitle = getDisplayTitle(lesson.title)

    return {
      ...lesson,
      moduleType,
      displayTitle,
      linkTo: getLinkTo(lesson, key),
      iconClasses: getModuleIconClasses(moduleType),
      gradientClasses: getModuleGradient(moduleType),
      lightBackground: getModuleLightBackground(moduleType),
      truncatedTitle: truncateText(displayTitle, 25),
    } as EnrichedLearningPathModule
  })
}

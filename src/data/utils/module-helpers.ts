// Module icon and styling helpers
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
  FileText,
  Blocks,
  MapPlus,
} from "lucide-solid"
import type { Component } from "solid-js"
import type { Module } from "./modules"

// Icon components mapped by module type
const iconComponents: Record<string, Component<any>> = {
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
  "grammar-notes": ScrollText,
  guides: ScrollText,
  reading: BookOpenText,
  "vocab-list": Library,
  "vocab-test": GraduationCap,
  kanji: Library,
  "listening-material": Volume2,
  extension: Blocks,
  misc: MapPlus,
}

// Helper function to map source type to Lucide icon component
export function getModuleIcon(moduleType: string): Component<any> {
  return iconComponents[moduleType] || BookOpen
}

const MODULE_STYLES: Record<string, { text: string; bg: string }> = {
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
  "grammar-notes": {
    text: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-500 dark:bg-purple-400",
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

export function getModuleIconClasses(moduleType: string): string {
  return (MODULE_STYLES[moduleType] || DEFAULT_STYLE).text
}

// Generate link URL for a module
export function getLinkTo(module: Module, moduleKey: string): string {
  if ("link" in module && module.link) {
    return module.link
  }

  // Handle dynamic modules by module_type
  if (module.module_type === "vocab-practice") {
    return `/vocab?import=${moduleKey}`
  }

  if (module.module_type === "sentence-practice") {
    const strippedId = moduleKey.replace(/^sentence-practice-/, "")
    return `/sentence-practice/${strippedId}`
  }

  if (module.module_type === "vocab-test") {
    const strippedId = moduleKey.replace(/-quiz$/, "")
    return `/vocab/quiz/${strippedId}`
  }

  if (module.module_type === "vocab-list") {
    return `/vocab/list/${moduleKey}`
  }

  return `/practice/${moduleKey}`
}

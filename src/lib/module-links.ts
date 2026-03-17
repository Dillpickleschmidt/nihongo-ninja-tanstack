import { chapters } from "@/data/chapters"
import { static_modules } from "@/data/static_modules"
import {
  external_resources,
  getExternalResourceLink,
} from "@/data/external_resources"

// --- Forward: moduleId → link URL ---

export function getModuleLink(
  module: { module_type: string; link?: string },
  moduleId: string,
): string {
  if ("link" in module && module.link) return module.link
  if (moduleId in external_resources) return getExternalResourceLink(moduleId)
  if (module.module_type === "vocab-practice") {
    const chapter = getChapterForModule(moduleId)
    if (chapter) return `/vocab/${chapter.textbookId}/${chapter.chapterSlug}/${moduleId}`
    return `/vocab/practice/${moduleId}`
  }
  if (module.module_type === "sentence-practice")
    return `/sentence-practice/${moduleId.replace(/^sentence-practice-/, "")}`
  if (module.module_type === "vocab-test")
    return `/vocab/quiz/${moduleId.replace(/-quiz$/, "")}`
  if (module.module_type === "vocab-list") return `/vocab/list/${moduleId}`
  return `/practice/${moduleId}`
}

// --- Reverse: URL → moduleId ---

export const linkToModuleId: Record<string, string> = {}
for (const [moduleId, mod] of Object.entries(static_modules)) {
  linkToModuleId[mod.link] = moduleId
}
for (const moduleId of Object.keys(external_resources)) {
  linkToModuleId[getExternalResourceLink(moduleId)] = moduleId
}

export function getModuleIdFromUrl(
  pathname: string,
  search: Record<string, unknown> | string,
): string | undefined {
  if (linkToModuleId[pathname]) return linkToModuleId[pathname]

  const importParam =
    typeof search === "string"
      ? new URLSearchParams(search).get("import")
      : (search as Record<string, string>).import
  if (importParam) return importParam

  const sentenceMatch = pathname.match(/^\/sentence-practice\/(.+)$/)
  if (sentenceMatch) return `sentence-practice-${sentenceMatch[1]}`

  const quizMatch = pathname.match(/^\/vocab\/quiz\/(.+)$/)
  if (quizMatch) return `${quizMatch[1]}-quiz`

  const vocabListMatch = pathname.match(/^\/vocab\/list\/(.+)$/)
  if (vocabListMatch) return vocabListMatch[1]

  return undefined
}

// --- moduleId → chapter ---

const moduleToChapter: Record<
  string,
  { textbookId: string; chapterSlug: string }
> = {}
for (const [textbookId, textbookChapters] of Object.entries(chapters)) {
  for (const chapter of Object.values(textbookChapters)) {
    for (const moduleId of chapter.learning_path_item_ids) {
      moduleToChapter[moduleId] = { textbookId, chapterSlug: chapter.slug }
    }
  }
}

export function getChapterForModule(moduleId: string) {
  return moduleToChapter[moduleId]
}

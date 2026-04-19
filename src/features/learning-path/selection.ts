import { getChaptersByTextbook } from "@/data/utils/chapters"
import { isBuiltInTextbook } from "@/data/utils/textbooks"

export function getDefaultChapterSlugForPath(pathId: string) {
  if (isBuiltInTextbook(pathId)) {
    return getChaptersByTextbook(pathId)[0]?.slug ?? "chapter-0"
  }

  return "chapter-1"
}

export function buildPathSelectionPreferences(pathId: string) {
  return {
    activeLearningPath: pathId,
    activeChapter: getDefaultChapterSlugForPath(pathId),
  }
}

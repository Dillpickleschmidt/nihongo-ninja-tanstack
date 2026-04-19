import {
  BUILT_IN_BACKGROUNDS,
  CURATED_CHAPTER_BACKGROUNDS,
  FALLBACK_BACKGROUND_ID,
  type BuiltInBackground,
} from "./catalog"
import {
  getChapterOverrideKey,
  type BackgroundOverrides,
} from "./overrides"

export type BackgroundSourceScope =
  | "chapter"
  | "path"
  | "curated"
  | "fallback"

export type ResolvedBackground = {
  background: BuiltInBackground
  sourceScope: BackgroundSourceScope
  sourceLabel: string
  assignedBackgroundId?: string
}

function getBackgroundById(id: string | undefined) {
  return id ? BUILT_IN_BACKGROUNDS[id] : undefined
}

export function resolveBackground(
  pathId: string | undefined,
  chapterSlug: string | undefined,
  overrides: BackgroundOverrides,
): ResolvedBackground {
  if (pathId && chapterSlug) {
    const chapterBackgroundId =
      overrides.chapters[getChapterOverrideKey(pathId, chapterSlug)]
    const chapterBackground = getBackgroundById(chapterBackgroundId)
    if (chapterBackground) {
      return {
        background: chapterBackground,
        sourceScope: "chapter",
        sourceLabel: "Chapter override",
        assignedBackgroundId: chapterBackgroundId,
      }
    }
  }

  if (pathId) {
    const pathBackgroundId = overrides.paths[pathId]
    const pathBackground = getBackgroundById(pathBackgroundId)
    if (pathBackground) {
      return {
        background: pathBackground,
        sourceScope: "path",
        sourceLabel: "Path override",
        assignedBackgroundId: pathBackgroundId,
      }
    }
  }

  if (pathId && chapterSlug) {
    const curatedBackgroundId =
      CURATED_CHAPTER_BACKGROUNDS[pathId]?.[chapterSlug]
    const curatedBackground = getBackgroundById(curatedBackgroundId)
    if (curatedBackground) {
      return {
        background: curatedBackground,
        sourceScope: "curated",
        sourceLabel: "Curated default",
        assignedBackgroundId: curatedBackgroundId,
      }
    }
  }

  return {
    background: BUILT_IN_BACKGROUNDS[FALLBACK_BACKGROUND_ID],
    sourceScope: "fallback",
    sourceLabel: "Fallback",
    assignedBackgroundId: FALLBACK_BACKGROUND_ID,
  }
}

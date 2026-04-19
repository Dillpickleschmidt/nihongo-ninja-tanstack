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
import { IMAGE_ID_PREFIX } from "@/features/images/validation"

export type BackgroundSourceScope =
  | "chapter"
  | "path"
  | "curated"
  | "fallback"

export type UserImageBackground = {
  kind: "image"
  id: string
  layout: "vertical" | "horizontal"
  opacity: number
  yOffsetDesktop?: string
  yOffsetMobile?: string
}

export type ResolvedBackground = {
  background: BuiltInBackground | UserImageBackground
  sourceScope: BackgroundSourceScope
  sourceLabel: string
  assignedBackgroundId?: string
}

// Treat unknown, non-upload IDs as stale catalog entries and fall through.
function resolveOverrideId(
  id: string | undefined,
): BuiltInBackground | UserImageBackground | undefined {
  if (!id) return undefined
  const catalogEntry = BUILT_IN_BACKGROUNDS[id]
  if (catalogEntry) return catalogEntry
  if (!id.startsWith(IMAGE_ID_PREFIX)) return undefined
  return {
    kind: "image",
    id,
    layout: "horizontal",
    opacity: 0.4,
  }
}

export function resolveBackground(
  pathId: string | undefined,
  chapterSlug: string | undefined,
  overrides: BackgroundOverrides,
): ResolvedBackground {
  if (pathId && chapterSlug) {
    const chapterBackgroundId =
      overrides.chapters[getChapterOverrideKey(pathId, chapterSlug)]
    const chapterBackground = resolveOverrideId(chapterBackgroundId)
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
    const pathBackground = resolveOverrideId(pathBackgroundId)
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
    const curatedBackground = curatedBackgroundId
      ? BUILT_IN_BACKGROUNDS[curatedBackgroundId]
      : undefined
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

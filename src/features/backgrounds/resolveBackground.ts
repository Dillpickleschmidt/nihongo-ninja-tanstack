import {
  BUILT_IN_BACKGROUNDS,
  CURATED_CHAPTER_BACKGROUNDS,
  FALLBACK_BACKGROUND_ID,
  type BuiltInBackground,
} from "./catalog"
import {
  getChapterBackgroundKey,
  type BackgroundOverrides,
} from "./overrides"
import { IMAGE_ID_PREFIX } from "@/features/images/validation"

export type BackgroundSourceScope =
  | "global-lock"
  | "path-lock"
  | "chapter"
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

export function resolveBackground(
  pathId: string | undefined,
  chapterSlug: string | undefined,
  overrides: BackgroundOverrides,
): ResolvedBackground {
  const lock = overrides.lock
  if (lock && (lock.scope === "global" || lock.pathId === pathId)) {
    const locked = resolveChapterBackground(overrides, lock.pathId, lock.chapterSlug)
    if (locked) {
      return {
        ...locked,
        sourceScope: lock.scope === "global" ? "global-lock" : "path-lock",
        sourceLabel:
          lock.scope === "global"
            ? "Locked everywhere"
            : "Locked for this learning path",
      }
    }
  }

  return (
    resolveChapterBackground(overrides, pathId, chapterSlug) ?? {
      background: BUILT_IN_BACKGROUNDS[FALLBACK_BACKGROUND_ID],
      sourceScope: "fallback",
      sourceLabel: "Fallback",
      assignedBackgroundId: FALLBACK_BACKGROUND_ID,
    }
  )
}

function resolveChapterBackground(
  overrides: BackgroundOverrides,
  pathId: string | undefined,
  chapterSlug: string | undefined,
): ResolvedBackground | undefined {
  if (!pathId || !chapterSlug) return undefined

  const assignedBackgroundId =
    overrides.chapters[getChapterBackgroundKey(pathId, chapterSlug)]
  const assignedBackground = resolveBackgroundId(assignedBackgroundId)
  if (assignedBackground) {
    return {
      background: assignedBackground,
      sourceScope: "chapter",
      sourceLabel: "Chapter background",
      assignedBackgroundId,
    }
  }

  const curatedBackgroundId = CURATED_CHAPTER_BACKGROUNDS[pathId]?.[chapterSlug]
  const curatedBackground = curatedBackgroundId
    ? BUILT_IN_BACKGROUNDS[curatedBackgroundId]
    : undefined
  if (!curatedBackground) return undefined

  return {
    background: curatedBackground,
    sourceScope: "curated",
    sourceLabel: "Curated default",
    assignedBackgroundId: curatedBackgroundId,
  }
}

// Treat unknown, non-upload IDs as stale catalog entries and fall through.
function resolveBackgroundId(
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

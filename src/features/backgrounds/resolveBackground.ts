import { GENERATED_IMAGES } from "@/features/images/generated-images"
import { IMAGE_ID_PREFIX } from "@/features/images/validation"
import type { BackgroundSelection } from "./background-selection"
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

export type BackgroundSourceScope =
  | "global-lock"
  | "path-lock"
  | "chapter"
  | "curated"
  | "fallback"

export type UploadedBackground = {
  id: string
  mediaType: "image" | "gif"
  src: string
  sourceWidth: number
  layout: "vertical" | "horizontal"
  opacity: number
  yOffsetDesktop?: string
  yOffsetMobile?: string
}

export type ResolvedBackground = {
  selection: BackgroundSelection
  background: BuiltInBackground | UploadedBackground
  sourceScope: BackgroundSourceScope
  sourceLabel: string
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
    resolveChapterBackground(overrides, pathId, chapterSlug) ??
    resolveBuiltInBackground(FALLBACK_BACKGROUND_ID, "fallback", "Fallback")
  )
}

function resolveChapterBackground(
  overrides: BackgroundOverrides,
  pathId: string | undefined,
  chapterSlug: string | undefined,
): ResolvedBackground | undefined {
  if (!pathId || !chapterSlug) return undefined

  const selection = overrides.chapters[getChapterBackgroundKey(pathId, chapterSlug)]
  const assignedBackground = resolveSelection(selection, "chapter", "Chapter background")
  if (assignedBackground) return assignedBackground

  const curatedBackgroundId = CURATED_CHAPTER_BACKGROUNDS[pathId]?.[chapterSlug]
  return curatedBackgroundId
    ? resolveBuiltInBackground(curatedBackgroundId, "curated", "Curated default")
    : undefined
}

function resolveSelection(
  selection: BackgroundSelection | undefined,
  sourceScope: BackgroundSourceScope,
  sourceLabel: string,
): ResolvedBackground | undefined {
  if (!selection) return undefined
  const builtIn = BUILT_IN_BACKGROUNDS[selection.id]
  if (builtIn) return { selection, background: builtIn, sourceScope, sourceLabel }
  if (!selection.id.startsWith(IMAGE_ID_PREFIX)) return undefined
  return {
    selection,
    background: {
      id: selection.id,
      mediaType: selection.mediaType === "gif" ? "gif" : "image",
      src: `/api/images/private/${encodeURIComponent(selection.id)}`,
      sourceWidth: selection.sourceWidth,
      layout: "horizontal",
      opacity: 0.4,
    },
    sourceScope,
    sourceLabel,
  }
}

function resolveBuiltInBackground(
  id: string,
  sourceScope: BackgroundSourceScope,
  sourceLabel: string,
): ResolvedBackground {
  const background = BUILT_IN_BACKGROUNDS[id] ?? BUILT_IN_BACKGROUNDS[FALLBACK_BACKGROUND_ID]
  return {
    selection: builtInSelection(background),
    background,
    sourceScope,
    sourceLabel,
  }
}

function builtInSelection(background: BuiltInBackground): BackgroundSelection {
  const imageSrc = background.mediaType === "video" ? background.posterSrc : background.src
  const generated = GENERATED_IMAGES[imageSrc as keyof typeof GENERATED_IMAGES]
  if (!generated) throw new Error(`Missing generated image metadata for ${imageSrc}`)
  return {
    id: background.id,
    sourceWidth: generated.sourceWidth,
    mediaType: background.mediaType,
  }
}

import type { BackgroundSelection } from "./background-selection"

export type BackgroundOverrides = {
  chapters: Record<string, BackgroundSelection>
  lock?: BackgroundLock
}

export type BackgroundTarget = {
  pathId: string
  chapterSlug: string
}

export type BackgroundLockScope = "path" | "global"
export type BackgroundApplyScope = "chapter" | BackgroundLockScope

export type BackgroundLock = BackgroundTarget & {
  scope: BackgroundLockScope
}

export function getChapterBackgroundKey(pathId: string, chapterSlug: string) {
  return `${pathId}:${chapterSlug}`
}

export function getChapterBackgroundSelection(
  overrides: BackgroundOverrides,
  target: BackgroundTarget,
) {
  return overrides.chapters[getChapterBackgroundKey(target.pathId, target.chapterSlug)]
}

export function clearChapterBackground(
  overrides: BackgroundOverrides,
  target: BackgroundTarget,
): BackgroundOverrides {
  const chapters = { ...overrides.chapters }
  delete chapters[getChapterBackgroundKey(target.pathId, target.chapterSlug)]
  return { ...overrides, chapters }
}

export function getActiveBackgroundLock(
  overrides: BackgroundOverrides,
  target: BackgroundTarget,
): BackgroundLock | null {
  const lock = overrides.lock
  if (!lock) return null
  return lock.scope === "global" || lock.pathId === target.pathId ? lock : null
}

export function applyChapterBackgroundSelection(
  overrides: BackgroundOverrides,
  assignment: BackgroundTarget & {
    selection: BackgroundSelection
    scope: BackgroundApplyScope
  },
): BackgroundOverrides {
  const chapters = {
    ...overrides.chapters,
    [getChapterBackgroundKey(assignment.pathId, assignment.chapterSlug)]:
      assignment.selection,
  }

  return applyBackgroundScope({ ...overrides, chapters }, assignment)
}

export function applyBackgroundScope(
  overrides: BackgroundOverrides,
  target: BackgroundTarget & { scope: BackgroundApplyScope },
): BackgroundOverrides {
  if (target.scope === "chapter") {
    return isLockSource(overrides.lock, target)
      ? clearBackgroundLock(overrides)
      : overrides
  }

  return {
    ...overrides,
    lock: {
      scope: target.scope,
      pathId: target.pathId,
      chapterSlug: target.chapterSlug,
    },
  }
}

export function clearBackgroundLock(
  overrides: BackgroundOverrides,
): BackgroundOverrides {
  return { chapters: overrides.chapters }
}

function isLockSource(
  lock: BackgroundLock | undefined,
  target: BackgroundTarget,
) {
  return lock?.pathId === target.pathId && lock.chapterSlug === target.chapterSlug
}

export function removeBackgroundPreferencesForPath(
  overrides: BackgroundOverrides,
  pathId: string,
): BackgroundOverrides {
  const chapters = Object.fromEntries(
    Object.entries(overrides.chapters).filter(
      ([key]) => !key.startsWith(`${pathId}:`),
    ),
  )

  return overrides.lock?.pathId === pathId
    ? { chapters }
    : { chapters, lock: overrides.lock }
}

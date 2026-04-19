export type BackgroundOverrides = {
  paths: Record<string, string>
  chapters: Record<string, string>
}

export type BackgroundScope =
  | { type: "path"; pathId: string }
  | { type: "chapter"; pathId: string; chapterSlug: string }

export function getChapterOverrideKey(pathId: string, chapterSlug: string) {
  return `${pathId}:${chapterSlug}`
}

export function getAssignedBackgroundId(
  overrides: BackgroundOverrides,
  scope: BackgroundScope,
) {
  if (scope.type === "path") return overrides.paths[scope.pathId]
  return overrides.chapters[
    getChapterOverrideKey(scope.pathId, scope.chapterSlug)
  ]
}

export function setAssignedBackgroundId(
  overrides: BackgroundOverrides,
  scope: BackgroundScope,
  backgroundId: string,
): BackgroundOverrides {
  if (scope.type === "path") {
    return {
      ...overrides,
      paths: { ...overrides.paths, [scope.pathId]: backgroundId },
    }
  }

  const key = getChapterOverrideKey(scope.pathId, scope.chapterSlug)
  return {
    ...overrides,
    chapters: { ...overrides.chapters, [key]: backgroundId },
  }
}

export function clearAssignedBackgroundId(
  overrides: BackgroundOverrides,
  scope: BackgroundScope,
): BackgroundOverrides {
  if (scope.type === "path") {
    const nextPaths = { ...overrides.paths }
    delete nextPaths[scope.pathId]
    return { ...overrides, paths: nextPaths }
  }

  const key = getChapterOverrideKey(scope.pathId, scope.chapterSlug)
  const nextChapters = { ...overrides.chapters }
  delete nextChapters[key]
  return { ...overrides, chapters: nextChapters }
}

export function removeOverridesForPath(
  overrides: BackgroundOverrides,
  pathId: string,
): BackgroundOverrides {
  const nextPaths = { ...overrides.paths }
  delete nextPaths[pathId]

  const nextChapters = Object.fromEntries(
    Object.entries(overrides.chapters).filter(([key]) => !key.startsWith(`${pathId}:`)),
  )

  return {
    ...overrides,
    paths: nextPaths,
    chapters: nextChapters,
  }
}

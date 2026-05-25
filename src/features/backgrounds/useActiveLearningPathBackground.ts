import { createMemo } from "solid-js"
import { usePreferences } from "@/lib/preferences"
import { resolveBackground } from "./resolveBackground"

export function useActiveLearningPathBackground() {
  const { preferences } = usePreferences()

  const resolvedBackground = createMemo(() =>
    resolveBackground(
      preferences().activeLearningPath,
      preferences().activeChapter,
      preferences().backgroundOverrides,
    ),
  )

  const backgroundItem = () => resolvedBackground().background
  const backgroundSelection = () => resolvedBackground().selection
  const videoBackground = () => {
    const bg = backgroundItem()
    return bg.mediaType === "video" ? bg : undefined
  }

  return {
    backgroundItem,
    backgroundSelection,
    videoBackground,
  }
}

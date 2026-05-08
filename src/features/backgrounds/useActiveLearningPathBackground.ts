import { createMemo } from "solid-js"
import { usePreferences } from "@/lib/preferences"
import { usePrivateImageSource } from "@/features/images/usePrivateImageSource"
import { buildPublicUnpicSource } from "@/features/images/transformer"
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
  const videoBackground = () => {
    const bg = backgroundItem()
    return bg.kind === "video" ? bg : undefined
  }
  const uploadImageId = () => {
    const bg = backgroundItem()
    return bg.kind === "image" && !("src" in bg) ? bg.id : undefined
  }
  const uploadSource = usePrivateImageSource(uploadImageId, () => ({
    layout: "fullWidth",
  }))
  const imageSource = () => {
    const bg = backgroundItem()
    if (bg.kind !== "image") return undefined
    if (!("src" in bg)) return uploadSource()
    return buildPublicUnpicSource({
      src: bg.src,
      sourceWidth: bg.sourceWidth,
      layout: { layout: "fullWidth" },
    })
  }

  return {
    backgroundItem,
    videoBackground,
    imageSource,
  }
}

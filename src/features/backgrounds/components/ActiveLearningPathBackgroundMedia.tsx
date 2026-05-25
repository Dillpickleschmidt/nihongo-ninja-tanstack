import { Show } from "solid-js"
import { Image } from "@/components/Image"
import { imageVariantWidths } from "@/features/images/variants"
import { cn } from "@/utils"
import { useActiveLearningPathBackground } from "../useActiveLearningPathBackground"

interface ActiveLearningPathBackgroundMediaProps {
  class?: string
  imageClass?: string
}

export function ActiveLearningPathBackgroundMedia(
  props: ActiveLearningPathBackgroundMediaProps,
) {
  const { backgroundItem, backgroundSelection, videoBackground } =
    useActiveLearningPathBackground()
  const imageClass = () => cn("size-full object-cover", props.imageClass)

  return (
    <div class={props.class}>
      <Show
        when={videoBackground()}
        fallback={
          <Image
            src={backgroundItem().src}
            widths={
              backgroundSelection().mediaType === "image"
                ? imageVariantWidths(backgroundSelection().sourceWidth)
                : undefined
            }
            sizes="100vw"
            alt="Active background preview"
            class={imageClass()}
          />
        }
      >
        {(bg) => (
          <img
            src={bg().posterSrc}
            alt="Active background preview"
            class={imageClass()}
            style={{
              "object-position": bg().layout === "vertical" ? "top" : "center",
            }}
          />
        )}
      </Show>
    </div>
  )
}

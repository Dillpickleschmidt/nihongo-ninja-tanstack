import { Show } from "solid-js"
import { Image as BaseImage } from "@unpic/solid/base"
import { cn } from "@/utils"
import { useActiveLearningPathBackground } from "../useActiveLearningPathBackground"

interface ActiveLearningPathBackgroundMediaProps {
  class?: string
  imageClass?: string
}

export function ActiveLearningPathBackgroundMedia(
  props: ActiveLearningPathBackgroundMediaProps,
) {
  const { imageSource, videoBackground } = useActiveLearningPathBackground()
  const imageClass = () => cn("size-full object-cover", props.imageClass)

  return (
    <div class={props.class}>
      <Show
        when={videoBackground()}
        fallback={
          <Show when={imageSource()}>
            {(s) => (
              <BaseImage
                src={s().src}
                transformer={s().transformer}
                breakpoints={s().breakpoints}
                layout="fullWidth"
                unstyled
                alt="Active background preview"
                class={imageClass()}
              />
            )}
          </Show>
        }
      >
        {(bg) => (
          <img
            src={bg().src}
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

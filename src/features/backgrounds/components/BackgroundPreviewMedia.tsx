import { Show } from "solid-js"
import { Image } from "@unpic/solid"
import type { BuiltInBackground } from "../catalog"

interface BackgroundPreviewMediaProps {
  background: BuiltInBackground
  width: number
  height: number
  class?: string
}

export function BackgroundPreviewMedia(props: BackgroundPreviewMediaProps) {
  const previewSrc = () => props.background.previewSrc ?? props.background.src

  return (
    <Show
      when={props.background.sourceType === "img" || props.background.previewSrc}
      fallback={
        <video
          src={props.background.src}
          class={props.class}
          muted
          playsinline
          preload="metadata"
        />
      }
    >
      <Image
        src={previewSrc()}
        layout="fixed"
        width={props.width}
        height={props.height}
        alt="Background preview"
        class={props.class}
      />
    </Show>
  )
}

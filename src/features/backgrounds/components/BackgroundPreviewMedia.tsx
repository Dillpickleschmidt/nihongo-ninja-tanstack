import { Show } from "solid-js"
import { Image as BaseImage } from "@unpic/solid/base"
import type { BuiltInBackground } from "../catalog"
import { usePrivateImageSource } from "@/features/images/usePrivateImageSource"
import { buildPublicUnpicSource } from "@/features/images/transformer"

interface BackgroundPreviewMediaProps {
  background?: BuiltInBackground
  upload?: {
    imageId: string
    sourceWidth?: number
  }
  width: number
  height: number
  class?: string
}

export function BackgroundPreviewMedia(props: BackgroundPreviewMediaProps) {
  const uploadSource = usePrivateImageSource(
    () => props.upload?.imageId,
    () => ({ layout: "fixed", width: props.width }),
    () => props.upload?.sourceWidth,
  )
  const source = () =>
    props.background
      ? buildPublicUnpicSource({
          src: props.background.src,
          sourceWidth: props.background.sourceWidth,
          layout: { layout: "fixed", width: props.width },
        })
      : uploadSource()

  return (
    <Show when={source()}>
      {(s) => (
        <BaseImage
          src={s().src}
          transformer={s().transformer}
          breakpoints={s().breakpoints}
          layout="fixed"
          width={props.width}
          height={props.height}
          unstyled
          alt="Background preview"
          class={props.class}
        />
      )}
    </Show>
  )
}

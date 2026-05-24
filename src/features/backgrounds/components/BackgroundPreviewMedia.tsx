import { Show } from "solid-js"
import { Image as BaseImage } from "@unpic/solid/base"
import type { BuiltInBackground } from "../catalog"
import type { UserImageBackground } from "../resolveBackground"
import { usePrivateImageSource } from "@/features/images/usePrivateImageSource"
import { buildPublicUnpicSource } from "@/features/images/transformer"

export type BackgroundPreviewItem = BuiltInBackground | (UserImageBackground & {
  sourceWidth?: number
})

interface BackgroundPreviewMediaProps {
  item: BackgroundPreviewItem
  width: number
  height?: number
  class?: string
}

export function BackgroundPreviewMedia(props: BackgroundPreviewMediaProps) {
  const uploadSource = usePrivateImageSource(
    () => ("src" in props.item ? undefined : props.item.id),
    () => ({ layout: "fixed", width: props.width }),
    () => ("src" in props.item ? undefined : props.item.sourceWidth),
  )
  const source = () =>
    "src" in props.item
      ? buildPublicUnpicSource({
          src: props.item.src,
          sourceWidth: props.item.sourceWidth,
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
          height={props.height ?? props.width}
          unstyled
          alt="Background preview"
          class={props.class}
        />
      )}
    </Show>
  )
}

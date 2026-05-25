import { Image } from "@/components/Image"
import { imageVariantWidths } from "@/features/images/variants"
import type { BuiltInBackground } from "../catalog"
import type { UploadedBackground } from "../resolveBackground"

export type BackgroundPreviewItem = BuiltInBackground | UploadedBackground

interface BackgroundPreviewMediaProps {
  item: BackgroundPreviewItem
  width: number
  height?: number
  class?: string
}

export function BackgroundPreviewMedia(props: BackgroundPreviewMediaProps) {
  const src = () =>
    props.item.mediaType === "video" ? props.item.posterSrc : props.item.src
  const widths = () =>
    props.item.mediaType === "gif"
      ? undefined
      : imageVariantWidths(props.item.sourceWidth)

  return (
    <Image
      src={src()}
      widths={widths()}
      sizes={`${props.width}px`}
      width={props.width}
      height={props.height ?? props.width}
      alt="Background preview"
      class={props.class}
    />
  )
}

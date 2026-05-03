import type { Operations } from "@unpic/core/base"
import type { TransformerFunction } from "unpic"
import type { LayoutArgs } from "./breakpoints"
import { breakpointsFor } from "./breakpoints"

export type UnpicImageSource = {
  src: string
  transformer: TransformerFunction<Operations, undefined>
  breakpoints: number[]
}

export function buildPublicUnpicSource(args: {
  src: string
  sourceWidth: number
  layout: LayoutArgs
}): UnpicImageSource {
  return {
    src: args.src,
    transformer: (src, { width }) => {
      const path = encodeURI(src.toString().replace(/^\/+/, ""))
      return `/api/images/public/${path}?w=${imageWidth(width, args.sourceWidth)}`
    },
    breakpoints: breakpointsFor({ ...args.layout, sourceWidth: args.sourceWidth }),
  }
}

export function buildPrivateUnpicSource(args: {
  imageId: string
  sourceWidth: number
  layout: LayoutArgs
}): UnpicImageSource {
  return {
    src: args.imageId,
    transformer: (src, { width }) => {
      const id = encodeURIComponent(src.toString())
      return `/api/images/private/${id}?w=${imageWidth(width, args.sourceWidth)}`
    },
    breakpoints: breakpointsFor({ ...args.layout, sourceWidth: args.sourceWidth }),
  }
}

function imageWidth(width: string | number | undefined, sourceWidth: number) {
  return typeof width === "number" ? width : sourceWidth
}

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
    transformer: publicTransformer,
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
    transformer: privateTransformer,
    breakpoints: breakpointsFor({ ...args.layout, sourceWidth: args.sourceWidth }),
  }
}

const publicTransformer: UnpicImageSource["transformer"] = (src, { width }) => {
  const path = encodeURI(src.toString().replace(/^\/+/, ""))
  const query = typeof width === "number" ? `?w=${width}` : ""
  return `/api/images/public/${path}${query}`
}

const privateTransformer: UnpicImageSource["transformer"] = (src, { width }) => {
  const id = encodeURIComponent(src.toString())
  const query = typeof width === "number" ? `?w=${width}` : ""
  return `/api/images/private/${id}${query}`
}

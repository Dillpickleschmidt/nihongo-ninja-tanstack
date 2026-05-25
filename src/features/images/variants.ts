import { IMAGE_VARIANT_WIDTHS } from "./image-constants"

export function imageVariantWidths(sourceWidth: number) {
  return [...new Set([...IMAGE_VARIANT_WIDTHS, sourceWidth])]
    .filter((width) => width <= sourceWidth)
    .sort((a, b) => a - b)
}

export function nearestImageVariantWidth(widths: number[], requestedWidth: number) {
  return widths.find((width) => width >= requestedWidth) ?? widths.at(-1)
}

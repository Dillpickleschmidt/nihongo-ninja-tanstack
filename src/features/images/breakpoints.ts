import { DEFAULT_RESOLUTIONS, getBreakpoints } from "@unpic/core/base"

export type LayoutArgs =
  | { layout: "fullWidth" }
  | { layout: "fixed"; width: number }

// Delegate breakpoint generation to Unpic itself, but cap the resulting
// candidates at the source image's native width so browsers never request an
// upscaled asset from our routes.
export function breakpointsFor(
  args: LayoutArgs & { sourceWidth: number },
): number[] {
  const raw = getBreakpoints({
    layout: args.layout,
    width: args.layout === "fixed" ? args.width : undefined,
    resolutions: DEFAULT_RESOLUTIONS,
  })

  const maxBreakpoint = Math.max(...raw)
  const ceiling = Math.min(args.sourceWidth, maxBreakpoint)
  const capped = raw.filter((w) => w <= ceiling)

  if (args.sourceWidth < maxBreakpoint && !capped.includes(args.sourceWidth)) {
    capped.push(args.sourceWidth)
  }

  return capped
}


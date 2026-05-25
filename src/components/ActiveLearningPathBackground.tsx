import { Show } from "solid-js"
import {
  useQuery as useTanstackQuery,
  useQueryClient,
} from "@tanstack/solid-query"
import { Image } from "@/components/Image"
import { imageVariantWidths } from "@/features/images/variants"
import { FastAverageColor } from "fast-average-color"
import { backgroundSettingsQueryOptions } from "~/query/query-options"
import { usePreferences } from "@/lib/preferences"
import { queryKeys } from "~/query/query-keys"
import { useActiveLearningPathBackground } from "@/features/backgrounds/useActiveLearningPathBackground"
import type { BackgroundColor } from "@/features/backgrounds/types"

const fac = new FastAverageColor()

export function ActiveLearningPathBackground() {
  const queryClient = useQueryClient()
  const { preferences, setPreference } = usePreferences()

  const backgroundSettingsQuery = useTanstackQuery(() =>
    backgroundSettingsQueryOptions(),
  )
  const settings = () => backgroundSettingsQuery.data

  const extractAndSetColor = (element: HTMLImageElement | HTMLVideoElement) => {
    try {
      const color = fac.getColor(element)
      queryClient.setQueryData(queryKeys.backgroundColor(), {
        hex: color.hex,
        isDark: color.isDark,
      } satisfies BackgroundColor)
      document.documentElement.style.setProperty("--dynamic-accent", color.hex)
      setPreference("accentColor", color.hex)
    } catch (e) {
      console.warn("Failed to extract color from background:", e)
    }
  }

  const blurValue = () =>
    settings()?.blur !== undefined ? `${settings()?.blur}px` : "16px"

  const { backgroundItem, backgroundSelection, videoBackground } =
    useActiveLearningPathBackground()
  const yOffset = () => backgroundItem().yOffsetDesktop || "0"
  const finalOpacity = () =>
    backgroundItem().opacity + (settings()?.opacityOffset || 0)

  // Calculate height to compensate for negative y-offset
  const heightValue = () => {
    const offset = yOffset()
    if (offset.startsWith("-")) {
      // Extract numeric value and add it to 100%
      const offsetPx = offset.slice(1) // Remove the minus sign
      return `calc(100% + ${offsetPx})`
    }
    return "100%"
  }

  return (
    <Show when={finalOpacity() > 0}>
      <>
        <Show when={videoBackground()}>
          {(bg) => (
            <video
              src={bg().src}
              class="pointer-events-none fixed inset-0 -z-10 -mt-8"
              style={{
                "object-fit": "cover",
                "object-position":
                  bg().layout === "vertical" ? "top" : "center",
                opacity: finalOpacity(),
                filter: `blur(${blurValue()})`,
                transition: "filter 300ms ease-out",
                width: "100%",
                height: heightValue(),
                top: yOffset(),
              }}
              autoplay
              loop
              muted
              playsinline
              preload="auto"
              onLoadedData={(e) => extractAndSetColor(e.currentTarget)}
            />
          )}
        </Show>
        <Show when={backgroundItem().mediaType !== "video"}>
          <div
            class="pointer-events-none fixed inset-0 -z-10 -mt-8 overflow-hidden"
            style={{
              opacity: finalOpacity(),
              filter: `blur(${blurValue()})`,
              transition: "filter 300ms ease-out",
              width: "100%",
              height: heightValue(),
              top: yOffset(),
            }}
          >
            <Image
              src={backgroundItem().src}
              widths={
                backgroundSelection().mediaType === "image"
                  ? imageVariantWidths(backgroundSelection().sourceWidth)
                  : undefined
              }
              sizes="100vw"
              alt="Background"
              class={`h-full w-full object-cover ${
                backgroundItem().layout === "vertical" ? "object-top" : "object-center"
              }`}
              onLoad={(e) => extractAndSetColor(e.currentTarget)}
            />
          </div>
        </Show>

        {/* Gradient Overlay */}
        <div
          class={`pointer-events-none fixed inset-0 -z-5 transition-opacity duration-300 ${settings()?.showGradient === false ? "opacity-0" : "opacity-100"}`}
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(18, 18, 18, 1) 100%)",
          }}
        />
      </>
    </Show>
  )
}

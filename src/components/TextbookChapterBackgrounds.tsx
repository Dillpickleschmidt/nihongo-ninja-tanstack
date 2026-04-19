import { Show, createMemo } from "solid-js"
import { Image } from "@unpic/solid"
import {
  useQuery as useTanstackQuery,
  useQueryClient,
} from "@tanstack/solid-query"
import { FastAverageColor } from "fast-average-color"
import { backgroundSettingsQueryOptions } from "~/query/query-options"
import { usePreferences } from "@/lib/preferences"
import { queryKeys } from "~/query/query-keys"
import { resolveBackground } from "@/features/backgrounds/resolveBackground"

export type BackgroundColor = {
  hex: string
  isDark: boolean
}

const fac = new FastAverageColor()

export type BackgroundSettings = {
  blur: number | undefined
  opacityOffset: number
  showGradient: boolean
}

export function TextbookChapterBackgrounds() {
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

  const resolvedBackground = createMemo(() =>
    resolveBackground(
      preferences().activeLearningPath,
      preferences().activeChapter,
      preferences().backgroundOverrides,
    ),
  )
  const backgroundItem = createMemo(() => resolvedBackground().background)
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
        <Show
          when={backgroundItem().sourceType === "img"}
          fallback={
            <>
              {/* Video Background */}
              <video
                src={backgroundItem().src}
                class="pointer-events-none fixed inset-0 -z-10 -mt-8"
                style={{
                  "object-fit": "cover",
                  "object-position":
                    backgroundItem().layout === "vertical" ? "top" : "center",
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
            </>
          }
        >
          {/* Image Background */}
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
              layout="fullWidth"
              height={1440}
              class={`h-full w-full ${
                backgroundItem().layout === "vertical" ? "object-top" : "object-center"
              }`}
              alt="Background"
              objectFit="cover"
              onLoad={(e) => extractAndSetColor(e.currentTarget)}
            />
          </div>
        </Show>

        {/* Gradient Overlay */}
        <div
          class={`pointer-events-none fixed inset-0 -z-5 transition-opacity duration-300 ${settings()?.showGradient == false ? "opacity-0" : "opacity-100"}`}
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(18, 18, 18, 1) 100%)",
          }}
        />
      </>
    </Show>
  )
}

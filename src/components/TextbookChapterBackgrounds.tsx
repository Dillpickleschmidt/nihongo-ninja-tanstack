import { Show, createMemo } from "solid-js"
import {
  useQuery as useTanstackQuery,
  useQueryClient,
} from "@tanstack/solid-query"
import { FastAverageColor } from "fast-average-color"
import { backgroundSettingsQueryOptions } from "~/query/query-options"
import { usePreferences } from "@/lib/preferences"
import { queryKeys } from "~/query/query-keys"

export type BackgroundColor = {
  hex: string
  isDark: boolean
}

const fac = new FastAverageColor()

type BackgroundMediaItem = {
  source_type: "img" | "video"
  src: string
  layout: "vertical" | "horizontal"
  opacity: number
  y_offset_desktop?: string
  y_offset_mobile?: string
}

type TextbookChapterBackgrounds = {
  [textbook: string]: {
    [chapter: string]: BackgroundMediaItem
  }
}

const textbook_chapter_backgrounds: TextbookChapterBackgrounds = {
  genki_1: {
    "chapter-0": {
      source_type: "img",
      src: "/img/backgrounds/red-temple.jpg",
      layout: "horizontal",
      opacity: 0.4,
    },
    "chapter-1": {
      source_type: "img",
      src: "/img/backgrounds/tranquil_village_by_k_jackson_katss_djqxpcz.png",
      layout: "horizontal",
      opacity: 0.44,
    },
    "chapter-2": {
      source_type: "img",
      src: "/img/backgrounds/moujib-aghrout-s9ESRUFnKDg-unsplash.jpg",
      layout: "horizontal",
      opacity: 0.5,
    },
    "chapter-3": {
      source_type: "img",
      src: "/img/backgrounds/morning_village_by_k_jackson_katss_djrsova.jpg",
      layout: "horizontal",
      opacity: 0.4,
    },
    "chapter-4": {
      source_type: "video",
      src: "/video/backgrounds/AdobeStock_621205133_Video_HD_Preview.mp4",
      layout: "vertical",
      opacity: 0.44,
    },
    "chapter-5": {
      source_type: "img",
      src: "/img/backgrounds/rainy-day-stroll.jpg",
      layout: "horizontal",
      opacity: 0.4,
    },
    "chapter-6": {
      source_type: "img",
      src: "/img/backgrounds/japanese-gate.png",
      layout: "horizontal",
      opacity: 0.5,
    },
    "chapter-7": {
      source_type: "img",
      src: "/img/backgrounds/japanese-gate.png",
      layout: "horizontal",
      opacity: 0.45,
    },
    "chapter-8": {
      source_type: "video",
      src: "/video/backgrounds/AdobeStock_353576536_Video_HD_Preview.mp4",
      layout: "horizontal",
      opacity: 0.4,
    },
    "chapter-9": {
      source_type: "video",
      src: "/video/backgrounds/AdobeStock_621202547_Video_HD_Preview.mp4",
      layout: "horizontal",
      opacity: 0.4,
    },
    "chapter-10": {
      source_type: "img",
      src: "/img/backgrounds/AdobeStock_84364851_Preview.svg",
      layout: "horizontal",
      opacity: 0.4,
    },
    "chapter-11": {
      source_type: "img",
      src: "/img/backgrounds/traditional_chinatown_market.jpg",
      layout: "vertical",
      opacity: 0.4,
      y_offset_desktop: "-298px",
    },
    "chapter-12": {
      source_type: "video",
      src: "/video/backgrounds/AdobeStock_796038864_Video_4K_Preview.mp4",
      layout: "horizontal",
      opacity: 0.4,
    },
  },
  genki_2: {
    "chapter-13": {
      source_type: "img",
      src: "/img/backgrounds/joshua-fernandez-4aE2enR5M8s-unsplash.jpg",
      layout: "vertical",
      opacity: 0.5,
      y_offset_desktop: "-598px",
    },
    "chapter-14": {
      source_type: "img",
      src: "/img/backgrounds/medium-shot-friends-wearing-scarfs.jpg",
      layout: "vertical",
      opacity: 0.45,
      y_offset_desktop: "-838px",
    },
    "chapter-15": {
      source_type: "img",
      src: "/img/backgrounds/shima-onsen-gunma-japan.jpg",
      layout: "horizontal",
      opacity: 0.5,
    },
    "chapter-16": {
      source_type: "img",
      src: "/img/backgrounds/rainy-day-mood-cartoon-style.jpg",
      layout: "vertical",
      opacity: 0.5,
      y_offset_desktop: "-468px",
      y_offset_mobile: "-24px",
    },
    "chapter-17": {
      source_type: "img",
      src: "/img/backgrounds/pot and pan on gas stove4.jpg",
      layout: "horizontal",
      opacity: 0.5,
    },
    "chapter-18": {
      source_type: "img",
      src: "/img/backgrounds/full-shot-people-eating-japanese-street-food-restaurant.jpg",
      layout: "horizontal",
      opacity: 0.5,
    },
    "chapter-19": {
      source_type: "img",
      src: "/img/backgrounds/japanese-subway-train-system-display-screen-passenger-information.jpg",
      layout: "horizontal",
      opacity: 0.4,
    },
    "chapter-20": {
      source_type: "img",
      src: "/img/backgrounds/asian-touristic-attraction-place.jpg",
      layout: "vertical",
      opacity: 0.5,
      y_offset_desktop: "-793px",
    },
  },
}

const fallbackBackground: BackgroundMediaItem = {
  source_type: "img",
  src: "/img/backgrounds/red-temple.jpg",
  layout: "horizontal",
  opacity: 0.4,
  y_offset_desktop: "0",
}

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
      document.documentElement.style.setProperty("--accent", color.hex)
      setPreference("accentColor", color.hex)
    } catch (e) {
      console.warn("Failed to extract color from background:", e)
    }
  }

  const getBackgroundItem = () => {
    const textbook = preferences().activeLearningPath
    const chapter = preferences().activeChapter

    if (!textbook || !chapter) return fallbackBackground
    return (
      textbook_chapter_backgrounds[textbook]?.[chapter] || fallbackBackground
    )
  }

  const blurValue = () =>
    settings()?.blur !== undefined ? `${settings()?.blur}px` : "16px"

  const backgroundItem = createMemo(() => getBackgroundItem())
  const yOffset = () => backgroundItem().y_offset_desktop || "0"
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
          when={backgroundItem().source_type === "img"}
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
          <img
            src={backgroundItem().src}
            class="pointer-events-none fixed inset-0 -z-10 -mt-8"
            alt="Background"
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
            onLoad={(e) => extractAndSetColor(e.currentTarget)}
          />
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

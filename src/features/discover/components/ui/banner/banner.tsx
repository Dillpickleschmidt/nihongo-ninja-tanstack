import { createSignal, createEffect, onCleanup, Show } from "solid-js"
import type { FragmentOf } from "gql.tada"
import { FullMedia } from "~/features/discover/api/anilist/queries"
import { FullBanner } from "./full-banner"
import { BannerSkeleton } from "./skeleton-banner"
import {
  getContrastTextColor,
  formatColorForCSS,
} from "~/features/discover/utils/banner-utils"

interface BannerProps {
  bannerData: (FragmentOf<typeof FullMedia> | null)[] | undefined
  hqImageUrls: (string | null | undefined)[] | undefined
  error?: Error | null
  isDesktop: boolean
}

export function Banner(props: BannerProps) {
  // Move ALL hooks to top level (before any conditional logic)
  const [currentIndex, setCurrentIndex] = createSignal(0)
  const [colorVars, setColorVars] = createSignal<Record<string, string>>({})

  // Use reactive Show components instead of early returns
  return (
    <Show
      when={!props.error}
      fallback={
        <div class="w-full bg-red-50 p-4 text-red-600">
          Error loading banner
        </div>
      }
    >
      <Show when={props.bannerData} fallback={<BannerSkeleton />}>
        {(bannerData) => {
          let timerId: ReturnType<typeof setTimeout> | undefined

          const processedData = () => bannerData()
          const current = () => processedData()[currentIndex()]

          // Update color variables when current anime changes
          createEffect(() => {
            const current = processedData()[currentIndex()]
            if (current) {
              const color = formatColorForCSS(current.coverImage?.color)
              const textColor = getContrastTextColor(current.coverImage?.color)
              setColorVars({
                "--custom": color.hex,
                "--custom-r": color.r,
                "--custom-g": color.g,
                "--custom-b": color.b,
                "--text-contrast":
                  textColor === "white" ? "#ffffff" : "#000000",
              } as any)
            }
          })

          // Schedule next slide transition
          const scheduleNext = () => {
            if (timerId) clearTimeout(timerId)
            if (!processedData().length) return

            timerId = setTimeout(() => {
              setCurrentIndex((prev) => (prev + 1) % processedData().length)
              scheduleNext()
            }, 15000)
          }

          // Start timer on mount
          createEffect(() => {
            if (!processedData().length) return
            scheduleNext()
            onCleanup(() => {
              if (timerId) clearTimeout(timerId)
            })
          })

          const handleSelectIndex = (index: number) => {
            setCurrentIndex(index)
            scheduleNext()
          }

          return (
            <>
              <style>{`
                @keyframes banner-fill {
                  from { transform: translate3d(-100%, 0, 0); }
                  to { transform: translate3d(0%, 0, 0); }
                }
                @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                .banner-progress {
                  background: rgb(var(--custom-r), var(--custom-g), var(--custom-b));
                }
              `}</style>

              <div style={colorVars()}>
                <div class="relative h-[70vh] overflow-hidden md:h-[80vh]">
                  <Show
                    when={processedData().length > 0}
                    fallback={
                      <div class="w-full p-8 text-center text-muted-foreground">
                        No featured anime available this season
                      </div>
                    }
                  >
                    <FullBanner
                      current={current()}
                      hqImageUrl={props.hqImageUrls?.[currentIndex()] ?? null}
                      isDesktop={props.isDesktop}
                      currentIndex={currentIndex()}
                      onSelectIndex={handleSelectIndex}
                      itemCount={processedData().length}
                    />
                  </Show>
                </div>
              </div>
            </>
          )
        }}
      </Show>
    </Show>
  )
}

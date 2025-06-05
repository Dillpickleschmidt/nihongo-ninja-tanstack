// features/dashboard/components/ContentSection.tsx
import { For, onMount } from "solid-js"
import { ArrowRight, Plus } from "lucide-solid"
import { Await, useLocation } from "@tanstack/solid-router"
import { Transition } from "solid-transition-group"
import { ExternalResourceCard } from "./ExternalResourceCard"
import { usePageTransition } from "@/context/TransitionContext"
import type { ExternalResource } from "@/data/types"

interface ContentSectionProps {
  resources: ExternalResource[]
  thumbnailPromises: Promise<{
    resourceId: string
    thumbnailUrl: string | null
  }>[]
}

export function ContentSection(props: ContentSectionProps) {
  const location = useLocation()
  const { isInitialLoad } = usePageTransition()

  onMount(() => {
    const currentPath = location().pathname
    if (currentPath === "/dashboard" && !isInitialLoad()) {
      // Navigation back - hide then animate in quickly
      const element = document.querySelector(
        "[data-content-section]",
      ) as HTMLElement
      if (element) {
        element.style.transform = "translateX(-30px)"
        element.style.opacity = "0"

        // Start enter animation after short delay
        setTimeout(() => {
          // Transform animation
          element.animate(
            [
              { transform: "translateX(-30px)" },
              { transform: "translateX(0px)" },
            ],
            {
              duration: 300,
              easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fill: "forwards",
            },
          )

          // Opacity animation with snappy curve
          element.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 300,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Snappy ease-out
            fill: "forwards",
          })
        }, 150) // Much faster delay
      }
    }
  })

  return (
    <div class="mt-6 xl:mt-7">
      <div class="mb-4 flex items-center justify-between pl-8 xl:mb-5 xl:pl-10">
        <div class="flex items-end">
          <h2 class="text-xl xl:text-2xl">Content</h2>
          <p class="text-muted-foreground pb-1 pl-2 text-xs xl:pl-3 xl:text-sm">
            You Might Enjoy
          </p>
        </div>
        <ArrowRight class="mr-5 h-5 w-5 xl:mr-6 xl:h-6 xl:w-6" />
      </div>

      <Transition
        onEnter={(element, done) => {
          if (isInitialLoad()) {
            done()
            return
          }

          // Transform animation
          const transformAnimation = element.animate(
            [
              { transform: "translateX(-30px)" },
              { transform: "translateX(0px)" },
            ],
            {
              duration: 300,
              easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            },
          )

          // Opacity animation with snappy curve (fast start, slow end)
          const opacityAnimation = element.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            {
              duration: 300,
              easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Snappy ease-out
            },
          )

          Promise.all([
            transformAnimation.finished,
            opacityAnimation.finished,
          ]).then(() => done())
        }}
      >
        {true && (
          <div
            data-content-section
            data-transition-content
            class="scrollbar-hide mb-5 flex gap-4 overflow-x-auto pr-4 pb-2 pl-8 xl:mb-6 xl:gap-5 xl:pr-5 xl:pl-10"
          >
            <div class="bg-background border-primary/30 mr-1 flex min-w-[50px] items-center justify-center rounded-[14px] border-2 border-dashed xl:min-w-[55px] xl:rounded-[16px]">
              <Plus class="text-primary/30 h-6 w-6 xl:h-7 xl:w-7" />
            </div>
            <For each={props.resources}>
              {(resource, index) => {
                const thumbnailPromise = props.thumbnailPromises[index()]
                return (
                  <Await
                    promise={thumbnailPromise}
                    fallback={<ExternalResourceCard resource={resource} />}
                  >
                    {(thumbnailData) => (
                      <ExternalResourceCard
                        resource={resource}
                        thumbnailUrl={thumbnailData.thumbnailUrl}
                      />
                    )}
                  </Await>
                )
              }}
            </For>
          </div>
        )}
      </Transition>
    </div>
  )
}

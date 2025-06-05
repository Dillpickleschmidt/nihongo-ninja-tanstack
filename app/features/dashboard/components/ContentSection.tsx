// features/dashboard/components/ContentSection.tsx
import { For, onMount, createEffect } from "solid-js"
import { ArrowRight, Plus } from "lucide-solid"
import { Await, useLocation } from "@tanstack/solid-router"
import { Transition } from "solid-transition-group"
import { ExternalResourceCard } from "./ExternalResourceCard"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import type { ExternalResource } from "@/data/types"

interface ContentSectionProps {
  resources: ExternalResource[]
  thumbnailPromises: Promise<{
    resourceId: string
    thumbnailUrl: string | null
  }>[]
}

const SELECTOR = "[data-content-section]"
const DIRECTION = "right" as const
const ENTER_DELAY = 0 // Content enters first

export function ContentSection(props: ContentSectionProps) {
  const location = useLocation()
  const { hasUserNavigated, animationTrigger } = usePageTransition()

  const runAnimation = () => {
    if (location().pathname === "/dashboard" && hasUserNavigated()) {
      const element = document.querySelector(SELECTOR) as HTMLElement
      if (element) {
        prepareElementForEnter(element, DIRECTION)
        setTimeout(() => {
          createSlideWithFadeInAnimation(element, DIRECTION)
        }, ENTER_DELAY)
      }
    }
  }

  onMount(() => {
    runAnimation()
  })

  // Listen for animation triggers (like chapter changes)
  createEffect(() => {
    animationTrigger() // Subscribe to trigger changes
    runAnimation()
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

      <div class="scrollbar-hide mb-5 flex gap-4 overflow-x-auto pl-8 xl:gap-5 xl:pb-2 xl:pl-10">
        <div class="bg-background border-primary/30 flex min-w-[50px] items-center justify-center rounded-[14px] border-2 border-dashed xl:min-w-[55px] xl:rounded-[16px]">
          <Plus class="text-primary/30 h-6 w-6 xl:h-7 xl:w-7" />
        </div>
        <Transition
          onEnter={(element, done) => {
            if (!hasUserNavigated()) {
              done()
              return
            }
            createSlideWithFadeInAnimation(
              element as HTMLElement,
              DIRECTION,
            ).then(() => done())
          }}
        >
          {true && (
            <div
              data-content-section
              data-transition-content
              class="flex gap-4 pr-4 xl:gap-5 xl:pr-5"
            >
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
    </div>
  )
}

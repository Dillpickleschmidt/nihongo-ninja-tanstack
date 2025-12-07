import { onMount, onCleanup } from "solid-js"
import BestMaterialsRightTimeSvg from "@/assets/best-materials-right-time.svg"
import {
  getInitialAnimationStyles,
  observeElementForAnimation,
} from "@/utils/animations"

export function GuidesSection() {
  let ref: HTMLDivElement | undefined

  onMount(() => {
    if (ref) {
      const cleanup = observeElementForAnimation(ref,
        {
          initialPosition: "down",
          screenTopOffset: 30,
          // noExit: true
        })
      onCleanup(cleanup)
    }
  })

  return (
    <div
      ref={ref}
      id="your-japanese-companion"
      class="snap-start min-h-screen mx-auto max-w-4xl px-4 pt-6 pb-12 md:px-6"
      style={getInitialAnimationStyles("down")}
    >
      <header class="text-center">
        <h1 class="mb-3 text-3xl font-bold tracking-tight">
          Nihongo Ninja - Your Japanese Companion
        </h1>
        <div class="mx-auto mb-6 h-1 w-16 rounded bg-pink-300" />
        {/* <p class="text-muted-foreground mb-6 italic"> */}
        {/*   See why you might love learning Japanese here. */}
        {/* </p> */}
      </header>

      <div class="space-y-4">
        <p>
          Nihongo Ninja is both a roadmap and a collection of tools built to
          aid your Japanese learning journey in a way that you want. It's
          designed to help anime fans, manga readers, classroom students, and more
          to connect with the language through content they enjoy.
        </p>
        <div class="mb-2 pt-4">
          {/* @ts-expect-error */}
          <BestMaterialsRightTimeSvg class="h-auto w-[400px] text-[#d3d3d3] md:w-[460px]" />
        </div>
        <div class="bg-background/20 relative -mt-2 overflow-hidden rounded-xl border border-white/10 p-7 shadow-md backdrop-blur-md">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 w-1.25 rounded-l-xl bg-pink-300/70"
            aria-hidden="true"
          />
          <p class="text-foreground text-base leading-normal md:text-lg">
            There are <span class="italic">so many</span> great Japanese resources that exist across the web—but they're
            scattered and hard to find at the right time.{" "}
            <span class="font-semibold text-pink-300">
              Nihongo Ninja helps you find the best ones
            </span>
            , then makes them stick with free tools and strategies not found
            elsewhere. Everything is accessible without an account, and only
            one tool is paid.
          </p>
        </div>

        <div class="border-border bg-background relative mx-auto aspect-16/10 w-full max-w-2xl overflow-hidden rounded-lg border">
          {/* Video placeholder content */}
          <div class="flex h-full items-center justify-center">
            <div class="text-center">
              <div class="bg-primary/10 mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full">
                <svg
                  class="text-primary h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p class="text-muted-foreground text-sm">Preview video</p>
              <p class="text-foreground/80 mt-1 text-xs">See how it works</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

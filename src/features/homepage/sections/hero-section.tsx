import { Link } from "@tanstack/solid-router"
import { onMount } from "solid-js"
import { VideoShowcase } from "../components/video-showcase"
import {
  animateElementIn,
  getInitialAnimationStyles,
} from "@/utils/animations"

export function HeroSection(props: { explorePath?: string }) {
  let textRef: HTMLDivElement | undefined
  let videoRef: HTMLDivElement | undefined

  onMount(() => {
    if (textRef) {
      animateElementIn(textRef, "down", { duration: 1000 })
    }
    if (videoRef) {
      animateElementIn(videoRef, "down", { duration: 1000, scale: 0.95 })
    }
  })

  return (
    <section class="relative flex min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-14rem)] items-center justify-center -mt-16">
      <div class="mx-auto max-w-7xl px-6 py-20">
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div
            ref={textRef}
            style={getInitialAnimationStyles("down")}
          >
            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-(--landing-accent)/20 bg-(--landing-accent)/10 px-4 py-1.5 text-sm text-(--landing-accent)">
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--landing-accent) opacity-75" />
                <span class="relative inline-flex h-2 w-2 rounded-full bg-(--landing-accent)" />
              </span>
              Creating an account is optional
            </div>

            <h1 class="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Learn Japanese
              <br />
              <span class="text-transparent bg-clip-text bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end)">
                Through the Content You Love
              </span>
            </h1>

            <p class="mb-8 text-lg text-white/60 leading-relaxed max-w-xl lg:text-xl">
              A free collection of tools, curated resources, and
              textbook-aligned learning paths to help you learn Japanese through
              anime, dramas, and media you actually enjoy.
            </p>

            <div class="flex flex-col gap-4 sm:flex-row">
              <Link
                to={props.explorePath ?? "/dashboard"}
                class="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) px-8 py-4 font-semibold text-white transition-transform hover:scale-[1.02]"
                style={{
                  "box-shadow":
                    "0 10px 12.5px -2.5px color-mix(in srgb, var(--landing-accent) 25%, transparent), 0 4px 5px -3px color-mix(in srgb, var(--landing-accent) 25%, transparent)",
                }}
              >
                Explore the Tools
                <svg
                  class="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                to="/discover"
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/20"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Discover Content
              </Link>
            </div>
          </div>

          {/* Hero video */}
          <div
            ref={videoRef}
            class="relative"
            style={getInitialAnimationStyles("down", true, undefined, 0.95)}
          >
            {/* Glow effect behind video */}
            <div class="absolute -inset-4 rounded-3xl bg-linear-to-r from-(--landing-accent)/20 to-(--landing-accent-end)/20 blur-2xl" />

            <VideoShowcase
              title="See Nihongo Ninja in Action"
              subtitle="2 min overview"
              class="relative"
              videoSrc="/video/backgrounds/AdobeStock_796038864_Video_4K_Preview.mp4"
              autoPlay
            />

            {/* Floating badges */}
            <div class="absolute -left-4 top-8 rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-2 shadow-xl backdrop-blur-sm lg:-left-8">
              <div class="text-xs text-white/50">Currently learning</div>
              <div class="font-medium text-white">進撃の巨人</div>
            </div>

            <div class="absolute -right-4 bottom-8 rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-2 shadow-xl backdrop-blur-sm lg:-right-8">
              <div class="text-xs text-white/50">Words mastered</div>
              <div class="font-medium text-(--landing-accent)">2,847</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

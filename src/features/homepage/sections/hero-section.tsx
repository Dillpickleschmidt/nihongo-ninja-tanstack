import { Link } from '@tanstack/solid-router'
import { Accessor } from 'solid-js'
import { cn } from '@/utils'
import { VideoShowcase } from '../components/video-showcase'

export function HeroSection(props: { heroLoaded: Accessor<boolean>; onExplore?: () => void }) {
  return (
    <section class="relative flex min-h-screen items-center justify-center pt-16">
      <div class="mx-auto max-w-7xl px-6 py-20">
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div class={cn(
            "transition-all duration-1000 delay-200",
            props.heroLoaded() ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-(--accent)/20 bg-(--accent)/10 px-4 py-1.5 text-sm text-(--accent)">
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--accent) opacity-75" />
                <span class="relative inline-flex h-2 w-2 rounded-full bg-(--accent)" />
              </span>
              Creating an account is optional
            </div>

            <h1 class="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Learn Japanese
              <br />
              <span class="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-(--accent-end)">
                Through the Content You Love
              </span>
            </h1>

            <p class="mb-8 text-lg text-white/60 leading-relaxed max-w-xl lg:text-xl">
              A free collection of tools, curated resources, and textbook-aligned learning paths to help you learn Japanese through anime, dramas, and media you actually enjoy.
            </p>

            <div class="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={props.onExplore}
                class="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-(--accent) to-(--accent-end) px-8 py-4 font-semibold text-white transition-all hover:scale-[1.02]"
                style={{
                  "box-shadow": "0 10px 12.5px -2.5px color-mix(in srgb, var(--accent) 25%, transparent), 0 4px 5px -3px color-mix(in srgb, var(--accent) 25%, transparent)"
                }}
              >
                Explore the Tools
                <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <Link
                to="/discover"
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Discover Content
              </Link>
            </div>
          </div>

          {/* Hero video */}
          <div class={cn(
            "relative transition-all duration-1000 delay-500",
            props.heroLoaded() ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          )}>
            {/* Glow effect behind video */}
            <div class="absolute -inset-4 rounded-3xl bg-linear-to-r from-(--accent)/20 to-(--accent-end)/20 blur-2xl" />

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
              <div class="font-medium text-(--accent)">2,847</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div class={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000",
        props.heroLoaded() ? "opacity-100" : "opacity-0"
      )}>
        <div class="flex flex-col items-center gap-2 text-white/30">
          <span class="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div class="h-12 w-6 rounded-full border border-white/20 p-1">
            <div class="h-2 w-2 animate-bounce rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Link } from "@tanstack/solid-router"

export default function Hero() {
  return (
    <div class="relative">
      {/* Full-width gradient backgrounds - no clipping */}
      <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Primary warm wash - full width */}
        <div class="absolute top-0 right-0 left-0 h-72">
          <div class="h-full w-full bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(251,146,60,0.12),transparent_70%)]" />
        </div>

        {/* Subtle side accent - positioned to avoid rectangular look */}
        <div class="absolute top-16 right-0 h-64 w-1/2">
          <div class="h-full w-full bg-[radial-gradient(ellipse_70%_60%_at_100%_30%,rgba(99,102,241,0.06),rgba(56,189,248,0.04)_40%,transparent_70%)] opacity-80" />
        </div>
      </div>

      {/* Content constrained to max-w-7xl */}
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 items-center gap-10 px-4 pt-14 pb-20 lg:grid-cols-2 lg:pt-24 lg:pb-28">
          {/* Left: copy + CTAs */}
          <div>
            <div class="border-primary/20 bg-background/60 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur">
              Learn Japanese Your Way
            </div>

            <h1 class="text-foreground mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The{" "}
              <span class="font-inter text-4xl font-medium lg:text-5xl">
                best materials
              </span>
              , at the{" "}
              <span class="font-inter text-4xl font-medium lg:text-5xl">
                right time
              </span>
              , in{" "}
              <span class="font-inter text-4xl font-medium lg:text-5xl">
                one place
              </span>
              .
            </h1>

            <p class="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
              Combining the best Japanese language resources on the internet
              with spaced repetition and custom learning tools.
            </p>

            <div class="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/dashboard">
                <a class="group border-border/60 bg-background/70 rounded-2xl border p-1 backdrop-blur transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_8px_30px_rgba(255,165,0,0.08)]">
                  <span class="from-primary/20 to-primary/10 block rounded-xl bg-gradient-to-br p-0.5">
                    <span class="bg-background block rounded-[0.65rem] px-5 py-3 text-base font-semibold">
                      Start learning →
                    </span>
                  </span>
                </a>
              </Link>

              <Link to="/pricing">
                <a class="border-border/60 bg-background/60 text-foreground hover:border-primary/40 rounded-xl border px-5 py-3 backdrop-blur transition-colors">
                  See pricing
                </a>
              </Link>
            </div>
          </div>

          {/* Right: Bigger video preview */}
          <div class="relative">
            <div class="relative mx-auto w-full max-w-2xl">
              {/* Ambient glow around video - scaled up */}
              <div class="absolute -inset-6 -z-10">
                <div class="absolute inset-0 rounded-[1.5rem] bg-[conic-gradient(from_220deg_at_60%_40%,rgba(251,146,60,0.12),transparent_25%,rgba(56,189,248,0.08)_55%,transparent_80%,rgba(251,146,60,0.10))] opacity-80 blur-2xl" />
              </div>

              {/* Video container - bigger */}
              <div class="border-border/40 bg-background/85 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border shadow-[0_20px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                {/* Subtle inner ring */}
                <div class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 ring-inset" />

                {/* Top highlight */}
                <div class="pointer-events-none absolute inset-x-6 top-6 h-10 rounded-lg bg-gradient-to-b from-white/4 to-transparent blur-sm" />

                {/* Video placeholder content - scaled up */}
                <div class="flex h-full items-center justify-center">
                  <div class="text-center">
                    <div class="bg-primary/10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full backdrop-blur-sm">
                      <svg
                        class="text-primary h-9 w-9"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p class="text-muted-foreground text-base">Preview video</p>
                    <p class="text-foreground/80 mt-2 text-sm">
                      See how it works
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

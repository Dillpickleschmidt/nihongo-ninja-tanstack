export function CTASection(props: { onExplore?: () => void }) {
  return (
    <section class="relative py-20 lg:py-32">
      <div class="mx-auto max-w-4xl px-6 text-center">
        {/* Background glow */}
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="h-64 w-64 rounded-full bg-(--accent)/20 blur-[100px]" />
        </div>

        <div class="relative">
          <h2 class="mb-6 text-3xl font-bold lg:text-5xl">
            Ready to Start
            <br />
            <span class="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-(--accent-end)">
              Learning Japanese?
            </span>
          </h2>
          <p class="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Dive into the lessons, try out the practice tools, or discover content that matches your level. No sign-up needed to get started.
          </p>
          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={props.onExplore}
              class="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-(--accent) to-(--accent-end) px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02]"
              style={{
                "box-shadow": "0 20px 25px -5px color-mix(in srgb, var(--accent) 25%, transparent), 0 8px 10px -6px color-mix(in srgb, var(--accent) 25%, transparent)"
              }}
            >
              Start Exploring
              <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

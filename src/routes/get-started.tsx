import { createFileRoute, Link, useNavigate } from "@tanstack/solid-router"
import { createSignal, For, Show } from "solid-js"
import { textbooks, type TextbookIDEnum } from "@/data/textbooks"
import { usePreferences } from "@/lib/preferences"
import { useColorAnimation } from "@/features/homepage/lib/use-color-animation"
import { cn } from "@/utils"
import { Button } from "~/components/ui/button"
import { queryKeys } from "~/query/query-keys"

export const Route = createFileRoute("/get-started")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 0,
        opacityOffset: 0.6,
        showGradient: false,
      })
    }
  },
  component: GetStartedPage,
})

const textbookList = Object.values(textbooks)
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`

type Step = "fork" | "textbook" | "show"

function GetStartedPage() {
  const navigate = useNavigate()
  const { setPreference } = usePreferences()
  const [step, setStep] = createSignal<Step>("fork")
  const [selectedTextbook, setSelectedTextbook] =
    createSignal<TextbookIDEnum>("genki_1")

  useColorAnimation()

  const handleContinueTextbook = () => {
    setPreference("activeLearningPath", selectedTextbook())
    setPreference("hasCompletedOnboarding", true)
    navigate({ to: "/dashboard" })
  }

  const handleSetOnboarded = () => {
    setPreference("hasCompletedOnboarding", true)
  }

  return (
    <div class="relative min-h-dvh text-white overflow-x-clip">
      <style>{`
        @property --landing-accent { syntax: "<color>"; inherits: true; initial-value: #f59e0b; }
        @property --landing-accent-end { syntax: "<color>"; inherits: true; initial-value: #f43f5e; }
        :root { transition: --landing-accent 2s ease-in-out, --landing-accent-end 2s ease-in-out; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.5s ease-out both; }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
      `}</style>

      {/* Overlays on top of shared background */}
      <div class="fixed inset-0 -z-9">
        {/* Dark overlay */}
        <div class="absolute inset-0 bg-neutral-950/80" />
        {/* Bottom fade to solid */}
        <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        {/* Noise texture */}
        <div
          class="absolute inset-0 opacity-[0.02]"
          style={{ "background-image": NOISE_SVG }}
        />
      </div>

      {/* Radial glow behind content */}
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 8%, transparent), transparent 70%)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />

      {/* Header */}
      <nav class="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-neutral-950/70">
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" class="flex items-center gap-2 text-lg font-bold">
            <img src="/icons/ninja.png" alt="Ninja" class="size-8 -mb-1.25" />
            <span class="bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">
              Nihongo Ninja
            </span>
          </Link>
          <Link
            to="/"
            class="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </nav>

      {/* Main content area */}
      <div class="relative flex flex-col items-center min-h-[calc(100dvh-4rem)] px-6 py-12">
        {/* Step 1: Fork */}
        <Show when={step() === "fork"}>
          <div class="w-full max-w-3xl my-auto md:pb-16 animate-fade-up">
            <div class="text-center mb-10 md:mb-14">
              <h1 class="text-3xl md:text-5xl font-bold tracking-tight">
                How do you want to{" "}
                <span class="text-transparent bg-clip-text bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end)">
                  learn
                </span>
                ?
              </h1>
              <p class="mt-3 text-base md:text-lg text-white/50 max-w-md mx-auto">
                Choose your starting path — you can always explore both.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Card A: Textbook */}
              <button
                type="button"
                onClick={() => setStep("textbook")}
                class="group relative rounded-2xl border border-white/5 p-6 md:p-8 text-left transition-colors duration-300 hover:border-(--accent)/30 cursor-pointer flex flex-col overflow-hidden"
                style={{
                  "background-color":
                    "color-mix(in srgb, var(--accent) 12%, transparent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--accent) 20%, transparent)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--accent) 12%, transparent)"
                }}
              >
                {/* Noise texture overlay */}
                <div
                  class="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{ "background-image": NOISE_SVG }}
                />
                {/* Cover stack */}
                <div class="relative h-32 mb-4 flex items-center justify-center">
                  <img
                    src="/img/textbooks/genki_1.png"
                    alt=""
                    class="absolute h-28 w-auto rounded-md object-cover transition-transform duration-300 -rotate-6 -translate-x-6 group-hover:-rotate-8 group-hover:-translate-x-8"
                    style={{ "box-shadow": "0 4px 16px rgba(0,0,0,0.4)" }}
                  />
                  <img
                    src="/img/textbooks/genki_2.png"
                    alt=""
                    class="absolute h-28 w-auto rounded-md object-cover transition-transform duration-300 rotate-4 translate-x-6 z-10 group-hover:rotate-6 group-hover:translate-x-8"
                    style={{ "box-shadow": "0 6px 20px rgba(0,0,0,0.5)" }}
                  />
                </div>
                <div>
                  <h2 class="text-lg md:text-xl font-semibold text-white transition-colors group-hover:text-(--accent)">
                    I'm following a textbook
                  </h2>
                  <p class="mt-1.5 text-sm text-white/40 leading-relaxed group-hover:text-white/50 transition-colors">
                    Genki, Tobira, and more — we'll align your study tools to
                    your curriculum.
                  </p>
                </div>
                <div class="mt-auto pt-5 flex items-center gap-1.5 text-xs font-medium text-white/50 group-hover:text-(--accent) transition-colors">
                  <span>Select your textbook</span>
                  <svg
                    class="size-3 transition-transform group-hover:translate-x-0.5"
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
                </div>
              </button>

              {/* Card B: Show */}
              <button
                type="button"
                onClick={() => setStep("show")}
                class="group relative rounded-2xl border border-white/5 p-6 md:p-8 text-left transition-colors duration-300 hover:border-(--accent)/30 cursor-pointer flex flex-col overflow-hidden"
                style={{
                  "background-color":
                    "color-mix(in srgb, var(--accent) 12%, transparent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--accent) 20%, transparent)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--accent) 12%, transparent)"
                }}
              >
                {/* Noise texture overlay */}
                <div
                  class="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{ "background-image": NOISE_SVG }}
                />
                {/* Cover stack */}
                <div class="relative h-32 mb-4 flex items-center justify-center">
                  <img
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-HTDmeL4RGeJ4.png"
                    alt=""
                    class="absolute h-24 w-auto rounded-md object-cover transition-transform duration-300 -rotate-6 -translate-x-14 group-hover:-rotate-9 group-hover:-translate-x-16"
                    style={{ "box-shadow": "0 4px 16px rgba(0,0,0,0.4)" }}
                  />
                  <img
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Kb6R5nYQfjmP.jpg"
                    alt=""
                    class="absolute h-28 w-auto rounded-md object-cover transition-transform duration-300 z-10 group-hover:scale-105"
                    style={{ "box-shadow": "0 6px 20px rgba(0,0,0,0.5)" }}
                  />
                  <img
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg"
                    alt=""
                    class="absolute h-24 w-auto rounded-md object-cover transition-transform duration-300 rotate-6 translate-x-14 group-hover:rotate-9 group-hover:translate-x-16"
                    style={{ "box-shadow": "0 4px 16px rgba(0,0,0,0.4)" }}
                  />
                </div>
                <div>
                  <h2 class="text-lg md:text-xl font-semibold text-white transition-colors group-hover:text-(--accent)">
                    I want to learn through a show
                  </h2>
                  <p class="mt-1.5 text-sm text-white/40 leading-relaxed group-hover:text-white/50 transition-colors">
                    Pick anime or dramas and get a personalized study plan built
                    from real dialogue.
                  </p>
                </div>
                <div class="mt-auto pt-5 flex items-center gap-1.5 text-xs font-medium text-white/50 group-hover:text-(--accent) transition-colors">
                  <span>See how it works</span>
                  <svg
                    class="size-3 transition-transform group-hover:translate-x-0.5"
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
                </div>
              </button>
            </div>

            <p class="mt-8 text-center text-white/25">
              You can always switch or use both later.
            </p>
          </div>
        </Show>

        {/* Step 2a: Textbook selection */}
        <Show when={step() === "textbook"}>
          <div class="w-full max-w-xl my-auto animate-fade-up">
            <div class="text-center mb-10">
              <h1 class="text-2xl md:text-4xl font-bold tracking-tight">
                Which{" "}
                <span class="text-(--accent) brightness-150">textbook</span> are
                you following?
              </h1>
              <p class="mt-2 text-sm md:text-base text-white/50">
                We'll tailor the order to your curriculum
              </p>
            </div>

            <div class="flex flex-wrap justify-center gap-4 md:gap-6">
              <For each={textbookList}>
                {(textbook) => (
                  <button
                    type="button"
                    onClick={() => setSelectedTextbook(textbook.id)}
                    class={cn(
                      "group relative flex flex-col items-center rounded-2xl px-6 py-5 transition-all duration-200 cursor-pointer border",
                      selectedTextbook() === textbook.id
                        ? "border-(--accent)/30 scale-[1.02]"
                        : "border-white/5 hover:border-(--accent)/20 hover:scale-[1.01]",
                    )}
                    style={{
                      "background-color":
                        selectedTextbook() === textbook.id
                          ? "color-mix(in srgb, var(--accent) 15%, transparent)"
                          : "color-mix(in srgb, var(--accent) 5%, transparent)",
                    }}
                  >
                    {/* Selection indicator */}
                    <div
                      class={cn(
                        "absolute top-3 right-3 size-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center",
                        selectedTextbook() === textbook.id
                          ? "border-(--accent) bg-(--accent)"
                          : "border-white/20",
                      )}
                    >
                      <Show when={selectedTextbook() === textbook.id}>
                        <svg
                          class="size-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </Show>
                    </div>
                    <img
                      src={textbook.cover_image_url}
                      alt={textbook.name}
                      class={cn(
                        "h-44 w-auto rounded-lg object-contain transition-all duration-200",
                        selectedTextbook() === textbook.id
                          ? "opacity-100"
                          : "opacity-50 group-hover:opacity-80",
                      )}
                      style={{
                        "aspect-ratio": "3/4",
                        "box-shadow": "0 8px 24px rgba(0,0,0,0.5)",
                      }}
                    />
                    <span
                      class={cn(
                        "mt-3 text-sm font-medium transition-colors",
                        selectedTextbook() === textbook.id
                          ? "text-white"
                          : "text-white/50 group-hover:text-white/70",
                      )}
                    >
                      {textbook.short_name}
                    </span>
                    <span class="text-xs text-white/30 mt-0.5">
                      {textbook.level}
                    </span>
                  </button>
                )}
              </For>
            </div>

            <div class="flex items-center justify-between mt-10">
              <button
                type="button"
                onClick={() => setStep("fork")}
                class="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors cursor-pointer"
              >
                <svg
                  class="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                Back
              </button>
              <Button
                variant="ghost"
                onClick={handleContinueTextbook}
                class="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-(--accent) transition-all hover:scale-[1.02]"
                style={{
                  "box-shadow":
                    "0 8px 16px -4px color-mix(in srgb, var(--accent) 30%, transparent)",
                }}
              >
                Continue
                <svg
                  class="size-4 transition-transform group-hover:translate-x-0.5"
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
              </Button>
            </div>
          </div>
        </Show>

        {/* Step 2b: Show explainer */}
        <Show when={step() === "show"}>
          <div class="w-full max-w-3xl animate-fade-up">
            <div class="text-center mb-8 md:mb-10">
              <h1 class="text-2xl md:text-4xl font-bold tracking-tight">
                Learn through{" "}
                <span class="text-(--accent) brightness-150">
                  shows you love
                </span>
              </h1>
              <p class="mt-2 text-sm md:text-base text-white/50 max-w-md mx-auto">
                We turn anime and dramas into structured study plans
              </p>
            </div>

            <div class="flex flex-col max-w-2xl mx-auto">
              {/* Step 1: Browse */}
              <div
                class="relative rounded-2xl border border-white/5 p-4 md:p-5 overflow-hidden"
                style={{
                  "background-color":
                    "color-mix(in srgb, var(--accent) 6%, transparent)",
                }}
              >
                <div
                  class="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{ "background-image": NOISE_SVG }}
                />
                <div class="flex items-center gap-3 mb-3">
                  <StepBadge n={1} />
                  <div>
                    <h3 class="text-sm font-semibold text-white">
                      Pick a show you love
                    </h3>
                    <p class="text-xs text-white/40">
                      Browse anime and dramas on the Discover page
                    </p>
                  </div>
                </div>
                <div class="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
                  <ShowCover
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Kb6R5nYQfjmP.jpg"
                    name="SPY x FAMILY"
                  />
                  <ShowCover
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg"
                    name="Frieren"
                  />
                  <ShowCover
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-HTDmeL4RGeJ4.png"
                    name="Bocchi"
                  />
                  <ShowCover
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98444-Vzysp1EsrzgD.jpg"
                    name="Laid-Back Camp"
                  />
                  <ShowCover
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-60q1B6GK2Ghb.jpg"
                    name="Dandadan"
                    class="hidden sm:block"
                  />
                </div>
              </div>

              {/* Connector */}
              <div class="flex justify-center">
                <div class="w-px h-4 bg-white/[0.08]" />
              </div>

              {/* Step 2: Analyze */}
              <div
                class="relative rounded-2xl border border-white/5 p-4 md:p-5 overflow-hidden"
                style={{
                  "background-color":
                    "color-mix(in srgb, var(--accent) 6%, transparent)",
                }}
              >
                <div
                  class="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{ "background-image": NOISE_SVG }}
                />
                <div class="flex items-center gap-3 mb-3">
                  <StepBadge n={2} />
                  <div>
                    <h3 class="text-sm font-semibold text-white">
                      We analyze every episode
                    </h3>
                    <p class="text-xs text-white/40">
                      Vocab and grammar matched to your level
                    </p>
                  </div>
                </div>
                {/* Mini episode card */}
                <div class="flex gap-4 items-start">
                  <img
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Kb6R5nYQfjmP.jpg"
                    alt=""
                    class="hidden sm:block w-16 h-22 rounded-lg object-cover flex-shrink-0 border border-white/10"
                    style={{ "box-shadow": "0 4px 12px rgba(0,0,0,0.4)" }}
                  />
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-medium text-white/60 mb-0.5">
                      SPY x FAMILY
                    </p>
                    <p class="text-[10px] text-white/30 mb-2">Episode 1</p>
                    <div class="space-y-2">
                      <StatBar label="unique words" value="847" pct="100%" />
                      <StatBar
                        label="at your level"
                        value="234"
                        pct="28%"
                        accent
                      />
                      <StatBar
                        label="grammar points"
                        value="12"
                        pct="8%"
                        accent
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div class="flex justify-center">
                <div class="w-px h-4 bg-white/[0.08]" />
              </div>

              {/* Step 3: Study + Watch */}
              <div
                class="relative rounded-2xl border border-white/5 p-4 md:p-5 overflow-hidden"
                style={{
                  "background-color":
                    "color-mix(in srgb, var(--accent) 6%, transparent)",
                }}
              >
                <div
                  class="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{ "background-image": NOISE_SVG }}
                />
                <div class="flex items-center gap-3 mb-3">
                  <StepBadge n={3} />
                  <div>
                    <h3 class="text-sm font-semibold text-white">
                      Study, then watch
                    </h3>
                    <p class="text-xs text-white/40">
                      Learn the words first, then hear them in context
                    </p>
                  </div>
                </div>
                <div class="flex items-stretch gap-4">
                  <div class="flex-1 space-y-1.5">
                    <VocabRow word="家族" reading="かぞく" meaning="family" />
                    <VocabRow word="秘密" reading="ひみつ" meaning="secret" />
                    <VocabRow word="任務" reading="にんむ" meaning="mission" />
                  </div>
                  <div class="hidden sm:flex flex-shrink-0 w-28 flex-col items-center gap-2">
                    <div class="w-full flex-1 rounded-xl bg-white/[0.04] border border-white/[0.08] flex flex-col items-center justify-center gap-1.5">
                      <div class="size-10 rounded-full bg-(--accent)/15 flex items-center justify-center">
                        <svg
                          class="size-5 text-(--accent) translate-x-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span class="text-[10px] text-white/40 font-medium">
                        Watch EP 1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky CTA */}
            <div class="sticky bottom-6 mt-8 z-10 flex justify-center">
              <Link
                to="/discover"
                onClick={handleSetOnboarded}
                class="group inline-flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold text-white bg-(--accent) transition-all hover:scale-[1.02]"
                style={{
                  "box-shadow":
                    "0 8px 20px -4px color-mix(in srgb, var(--accent) 30%, transparent)",
                }}
              >
                Browse Shows
                <svg
                  class="size-4 transition-transform group-hover:translate-x-0.5"
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
            </div>

            {/* Secondary actions */}
            <div class="mt-3 flex flex-col items-center gap-3">
              <Link
                to="/dashboard"
                onClick={handleSetOnboarded}
                class="text-sm text-white/30 hover:text-white/50 transition-colors"
              >
                Go to dashboard instead
              </Link>
              <button
                type="button"
                onClick={() => setStep("fork")}
                class="flex items-center gap-1.5 text-sm text-white/30 hover:text-white/50 transition-colors cursor-pointer"
              >
                <svg
                  class="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                Back
              </button>
            </div>
          </div>
        </Show>
      </div>
    </div>
  )
}

/* ---- Shared small components ---- */

function StepBadge(props: { n: number }) {
  return (
    <span
      class="flex-shrink-0 size-7 rounded-full flex items-center justify-center text-xs font-bold text-white bg-(--accent)"
      style={{
        "box-shadow":
          "0 0 12px color-mix(in srgb, var(--accent) 25%, transparent)",
      }}
    >
      {props.n}
    </span>
  )
}

function ShowCover(props: { src: string; name: string; class?: string }) {
  return (
    <div class={cn("flex-shrink-0 w-[72px]", props.class)}>
      <img
        src={props.src}
        alt={props.name}
        class="w-full h-24 rounded-lg object-cover border border-white/10"
        style={{ "box-shadow": "0 4px 12px rgba(0,0,0,0.4)" }}
      />
      <p class="mt-1.5 text-[10px] text-white/50 font-medium text-center truncate">
        {props.name}
      </p>
    </div>
  )
}

function StatBar(props: {
  label: string
  value: string
  pct: string
  accent?: boolean
}) {
  return (
    <div class="flex items-center gap-3">
      <span class="text-xs font-medium text-white/60 w-12 text-right">
        {props.value}
      </span>
      <div class="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          class={cn(
            "h-full rounded-full",
            props.accent ? "bg-(--accent)" : "bg-white/20",
          )}
          style={{ width: props.pct }}
        />
      </div>
      <span class="text-[10px] text-white/30 w-24">{props.label}</span>
    </div>
  )
}

function VocabRow(props: { word: string; reading?: string; meaning: string }) {
  return (
    <div class="flex items-center justify-between rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2">
      <div class="flex items-center gap-2">
        <span class="text-xs font-medium text-white/70">{props.word}</span>
        <Show when={props.reading}>
          <span class="text-[10px] text-white/30">{props.reading}</span>
        </Show>
      </div>
      <span class="text-[10px] text-white/30">{props.meaning}</span>
    </div>
  )
}

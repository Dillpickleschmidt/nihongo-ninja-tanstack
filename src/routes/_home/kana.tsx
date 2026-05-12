import { createFileRoute, Link } from "@tanstack/solid-router"
import { For } from "solid-js"
import { queryKeys } from "~/query/query-keys"
import { dynamic_modules } from "@/data/dynamic_modules"
import { getModuleLink } from "@/lib/module-links"

export const Route = createFileRoute("/_home/kana")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 16,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: KanaPage,
})

// ---------------------------------------------------------------------------
// Placeholder data
// ---------------------------------------------------------------------------

interface QuizModule {
  id: string
  label: string
  subtitle: string
  mastery: number
  sample: string[]
  bgChar: string
  span?: boolean
}

const HIRAGANA_MODULES: QuizModule[] = [
  {
    id: "hiragana-quiz",
    label: "Basic Hiragana",
    subtitle: "Gojūon — the core 46 characters",
    mastery: 94,
    sample: ["あ", "か", "さ", "た", "な", "は", "ま"],
    bgChar: "あ",
  },
  {
    id: "dakuten-handakuten-quiz",
    label: "Dakuten & Handakuten",
    subtitle: "Voiced & semi-voiced sounds",
    mastery: 82,
    sample: ["が", "ざ", "だ", "ば", "ぱ"],
    bgChar: "が",
  },
  {
    id: "contracted-sounds-quiz",
    label: "Contracted Sounds",
    subtitle: "Yōon — combined syllables",
    mastery: 58,
    sample: ["きゃ", "しゅ", "ちょ", "にゃ", "ひょ"],
    bgChar: "きゃ",
  },
  {
    id: "all-hiragana-quiz",
    label: "All Hiragana",
    subtitle: "Everything combined — basic, dakuten, and contracted",
    mastery: 78,
    sample: ["あ", "が", "きゃ", "し", "ぱ", "みゅ", "わ", "ん"],
    bgChar: "ひ",
    span: true,
  },
]

const KATAKANA_MODULE: QuizModule = {
  id: "katakana-quiz",
  label: "Katakana",
  subtitle: "Foreign-word syllabary",
  mastery: 61,
  sample: ["ア", "カ", "サ", "タ", "ナ", "ハ", "マ"],
  bgChar: "ア",
}

interface WeakKana {
  char: string
  reading: string
  accuracy: number
}

const WEAK_KANA: WeakKana[] = [
  { char: "ぬ", reading: "nu", accuracy: 42 },
  { char: "む", reading: "mu", accuracy: 48 },
  { char: "ぢ", reading: "di", accuracy: 51 },
  { char: "ぴょ", reading: "pyo", accuracy: 53 },
  { char: "りゅ", reading: "ryu", accuracy: 55 },
  { char: "づ", reading: "zu", accuracy: 57 },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function KanaPage() {
  return (
    <main class="p-4 pt-12 pb-40 mx-auto max-w-5xl">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-up { animation: fade-up 0.35s ease-out forwards; opacity: 0; }
      `}</style>

      {/* ── Header ─────────────────────────────────────────────── */}
      <header class="anim-up">
        <div class="flex items-end justify-between gap-6">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-2 dark:text-white/25">
              五十音 | Gojūon
            </p>
            <h1 class="text-3xl font-bold lg:text-4xl">
              <span class="text-foreground dark:text-white/90">Kana</span>{" "}
              <span class="text-dynamic-accent">Practice</span>
            </h1>
            <p class="text-sm text-muted-foreground mt-1.5 max-w-md dark:text-white/35">
              Master the Japanese syllabaries through timed quizzes. Track your
              accuracy and build recognition speed.
            </p>
          </div>
          <div class="hidden sm:flex items-center gap-4 text-xs text-muted-foreground/70 tabular-nums shrink-0 dark:text-white/25">
            <span>
              <span class="text-muted-foreground dark:text-white/40">156</span>/214 learned
            </span>
            <span class="text-muted-foreground/40 dark:text-white/8">·</span>
            <span>
              <span class="text-muted-foreground dark:text-white/40">72%</span> mastery
            </span>
          </div>
        </div>
      </header>

      {/* ── Hiragana ───────────────────────────────────────────── */}
      <section class="mt-8">
        <h2
          class="text-sm font-medium text-muted-foreground mb-3 anim-up dark:text-white/40"
          style={{ "animation-delay": "40ms" }}
        >
          Hiragana
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <For each={HIRAGANA_MODULES}>
            {(mod, i) => <QuizCard mod={mod} delay={80 + i() * 60} />}
          </For>
        </div>
      </section>

      {/* ── Katakana + Review ─────────────────────────────────── */}
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Katakana column */}
        <section>
          <h2
            class="text-sm font-medium text-muted-foreground mb-3 anim-up dark:text-white/40"
            style={{ "animation-delay": "340ms" }}
          >
            Katakana
          </h2>
          <QuizCard mod={KATAKANA_MODULE} delay={380} />
        </section>

        {/* Review column */}
        <section>
          <h2
            class="text-xs uppercase tracking-[0.2em] text-rose-500/70 mb-3 leading-5 anim-up dark:text-rose-400/40"
            style={{ "animation-delay": "400ms" }}
          >
            Review
          </h2>
          <Link
            to={"/kana/weak-spots" as string}
            class="group relative block overflow-hidden rounded-xl border border-rose-400/20 bg-rose-500/5 p-5 shadow-sm transition-colors hover:border-rose-400/30 hover:bg-rose-500/8 anim-up dark:border-rose-400/10 dark:bg-rose-500/3 dark:shadow-none dark:hover:border-rose-400/20 dark:hover:bg-rose-500/6"
            style={{ "animation-delay": "440ms" }}
          >
            <NoiseOverlay />

            <div class="relative flex items-start justify-between gap-4">
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                  <h3 class="text-lg font-semibold text-rose-600 transition-colors group-hover:text-rose-500 dark:text-rose-300/80 dark:group-hover:text-rose-300">
                    Weak Spots
                  </h3>
                  <span class="text-[10px] uppercase tracking-wider text-rose-500/70 border border-rose-400/30 rounded-full px-2 py-0.5 dark:text-rose-400/50 dark:border-rose-400/20">
                    Dynamic
                  </span>
                </div>
                <p class="text-sm text-muted-foreground mt-0.5 dark:text-white/25">
                  Practice your most-missed characters
                </p>
              </div>
            </div>

            <HoverArrow class="text-rose-400/50" />

            <div class="relative flex gap-3 flex-wrap mt-3">
              <For each={WEAK_KANA.slice(0, 4)}>
                {(k) => (
                  <span class="font-japanese text-lg text-rose-500/40 transition-colors group-hover:text-rose-500/60 dark:text-rose-300/30 dark:group-hover:text-rose-300/50">
                    {k.char}
                  </span>
                )}
              </For>
              <span class="text-lg text-rose-500/25 transition-colors group-hover:text-rose-500/40 dark:text-rose-300/15 dark:group-hover:text-rose-300/30">
                …
              </span>
            </div>
          </Link>

          {/* Rose gradient line beneath */}
          <div
            class="mt-3 h-[1.5px] w-full rounded-full anim-up"
            style={{
              "animation-delay": "500ms",
              background:
                "linear-gradient(90deg, transparent, rgb(251 113 133 / 0.25), transparent)",
            }}
          />
        </section>
      </div>
    </main>
  )
}

// ---------------------------------------------------------------------------
// Quiz card
// ---------------------------------------------------------------------------

function QuizCard(props: { mod: QuizModule; delay: number }) {
  const href = () => {
    const dm = dynamic_modules[props.mod.id]
    return dm ? getModuleLink(dm, props.mod.id) : `/practice/${props.mod.id}`
  }

  return (
    <Link
      to={href()}
      class={`group relative block overflow-hidden rounded-xl border border-border/50 bg-card/50 shadow-sm transition-colors hover:border-dynamic-accent/30 hover:bg-card/70 anim-up dark:border-white/6 dark:bg-white/2.5 dark:shadow-none dark:hover:border-dynamic-accent/25 dark:hover:bg-white/4.5 ${props.mod.span ? "md:col-span-2 p-6" : "p-5"}`}
      style={{ "animation-delay": `${props.delay}ms` }}
    >
      <NoiseOverlay />
      <BgChar char={props.mod.bgChar} large={props.mod.span} />

      {/* Header row */}
      <div class="relative flex items-start justify-between gap-4">
        <div class="min-w-0 flex-1">
          <h3 class="text-lg font-semibold text-foreground/90 transition-colors group-hover:text-dynamic-accent dark:text-white/90">
            {props.mod.label}
          </h3>
          <p class="text-sm text-muted-foreground mt-0.5 dark:text-white/30">{props.mod.subtitle}</p>
        </div>

        <div class="text-right shrink-0 mt-0.5">
          <span class="text-sm tabular-nums text-muted-foreground dark:text-white/35">
            {props.mod.mastery}%
          </span>
          <p class="text-[11px] text-muted-foreground/70 dark:text-white/20">last session</p>
        </div>
      </div>

      {/* Sample kana */}
      <div
        class={`relative flex gap-3 flex-wrap ${props.mod.span ? "mt-4" : "mt-3"}`}
      >
        <For each={props.mod.sample}>
          {(ch) => (
            <span
              class={`font-japanese text-muted-foreground/40 transition-colors group-hover:text-dynamic-accent/60 dark:text-white/20 dark:group-hover:text-dynamic-accent/40 ${props.mod.span ? "text-xl" : "text-lg"}`}
            >
              {ch}
            </span>
          )}
        </For>
      </div>

      <HoverArrow class="text-dynamic-accent" />
    </Link>
  )
}

// ---------------------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------------------

function BgChar(props: { char: string; large?: boolean; rose?: boolean }) {
  return (
    <span
      class={`absolute top-1/2 -translate-y-1/2 pointer-events-none select-none font-japanese leading-none ${props.rose ? "text-rose-400/8 dark:text-rose-400/4" : "text-foreground/5 dark:text-white/4"} ${props.large ? "text-[7.5rem] right-24" : "text-[5.5rem] right-18"}`}
    >
      {props.char}
    </span>
  )
}

function NoiseOverlay() {
  return (
    <div
      class="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        "background-image": `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  )
}

function HoverArrow(props: { class?: string }) {
  return (
    <svg
      class={`absolute right-5 top-1/2 -translate-y-1/2 size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 ${props.class ?? ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

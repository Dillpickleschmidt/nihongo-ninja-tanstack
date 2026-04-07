import { createFileRoute } from "@tanstack/solid-router"
import { For } from "solid-js"
import { Button } from "@/components/ui/button"
import { Repeat, Sparkles, DollarSign } from "lucide-solid"
import BestMaterialsRightTimeSvg from "@/features/homepage/shared/assets/best-materials-right-time.svg"

export const Route = createFileRoute("/_home/guides/")({
  loader: () => ({
    toc: [{ id: "how-it-works", title: "What is Nihongo Ninja?" }],
  }),
  component: RouteComponent,
})

const PHILOSOPHY_POINTS = [
  {
    icon: Sparkles,
    title: "We make it enjoyable",
    description: (
      <>
        Learn from content you actually want to watch—not kids' shows or
        beginner materials.{" "}
        <span class="font-extrabold">
          Set up custom learning paths tailored to the exact episode, movie, or
          series you care about.
        </span>{" "}
        We analyze what you need to understand that specific content, so your
        study time feels purposeful instead of generic.
      </>
    ),
  },
  {
    icon: DollarSign,
    title: "If you want free, we'll give you free",
    description: (
      <>
        It's no secret that there are many great free and open-source tools for
        learning Japanese, such as Anki, Yomitan, ASBPlayer, and more. Our
        philosophy is this:{" "}
        <span class="font-extrabold">
          If anything we build overlaps with these tools, we make that part
          free.
        </span>{" "}
        We want to enhance your learning experience without locking you into a
        paid ecosystem.
      </>
    ),
  },
  {
    icon: Repeat,
    title: "Flexible practice that builds connections",
    description: (
      <>
        We use research-backed spaced repetition like Anki,{" "}
        <span class="font-extrabold">
          but we don't make you live in flashcards.
        </span>{" "}
        Your activity—writing, conjugating, watching—feeds the same memory
        schedule. Already using other tools?{" "}
        <span class="font-extrabold">
          Keep them—our system works alongside whatever you prefer,
        </span>{" "}
        without locking you in.
      </>
    ),
    bullets: [
      "Writing sentences updates your SRS",
      "Practice vocabulary while consuming content",
      "Flexible review: flashcards, quizzes, writing, multiple choice",
    ],
  },
]

const PHILOSOPHY_ICON_COLOR_CLASS = "text-pink-300"

function RouteComponent() {
  return (
    <div class="mx-auto max-w-4xl pb-24">
      <header class="pt-16 text-center">
        <h1 class="mb-3 text-4xl font-bold tracking-tight">
          What is Nihongo Ninja?
        </h1>
        <div class="mx-auto mb-6 h-1 w-16 rounded bg-pink-300" />
        <p class="text-muted-foreground mb-6 italic">
          See why you might love learning Japanese with us.
        </p>
      </header>

      <section id="how-it-works" aria-labelledby="how-it-works-heading">
        <div class="space-y-4">
          <p>
            Nihongo Ninja is both a roadmap and a collection of tools built to
            aid your Japanese learning journey in a way that you want. It's
            designed to help anime fans, drama lovers, manga readers, and more
            to connect with the language through content they enjoy.
          </p>
          <h1 class="mb-2 pt-4 font-serif text-xl leading-tight tracking-tight sm:text-2xl">
            {/* @ts-expect-error vite-plugin-solid-svg types don't support class prop */}
            <BestMaterialsRightTimeSvg class="h-auto w-[400px] text-[#d3d3d3] md:w-[460px]" />
          </h1>
          <div class="bg-background/20 relative -mt-2 overflow-hidden rounded-xl border border-white/10 p-7 shadow-md backdrop-blur-md">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 w-1.25 rounded-l-xl bg-pink-300/70"
              aria-hidden="true"
            />
            <p class="text-foreground text-base leading-normal md:text-lg">
              🌷 Great Japanese resources exist across the web—but they're
              scattered and hard to find at the right time.
              <span class="font-semibold text-pink-300">
                {" "}
                We curate and enhance them with our own tools and strategies to
                support your learning.
              </span>{" "}
              Our job is to make them stick with engaging practice tools so you
              can immediately put what you learned into practice.
            </p>
          </div>

          <div class="border-border bg-background relative my-8 mx-auto aspect-16/10 w-full max-w-2xl overflow-hidden rounded-lg border">
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

          <section class="space-y-8">
            <p class="text-center text-xl font-medium py-2">
              Let's clarify what Nihongo Ninja is and what it isn't.
            </p>

            <ul class="grid gap-6 md:grid-cols-2">
              <li>
                <p class="mb-1.5 text-sm font-bold uppercase tracking-widest text-pink-300">
                  Is
                </p>
                <p class="text-muted-foreground">
                  A free collection of tools, curated resources, and
                  textbook-aligned learning paths to help you learn Japanese
                  through anime, dramas, and media you actually enjoy.
                </p>
              </li>

              <li>
                <p class="text-muted-foreground mb-1.5 text-sm font-bold uppercase tracking-widest">
                  Isn't
                </p>
                <p class="text-muted-foreground">
                  A subscription-only service. While we certainly have
                  subscription offers that are helpful long-term and can enhance
                  your experience (e.g. the spaced-repetition system), each tool
                  can be used by anyone anonymously, without progression
                  tracking.
                </p>
              </li>
            </ul>
            <p class="max-w-2xl mx-auto text-muted-foreground">
              Additionally, we support free integration with many of the most
              popular third-party tools like Anki, so you can add progression
              tracking there if you wish.
            </p>
          </section>
        </div>
      </section>

      <div class="mx-auto px-2 md:px-4">
        <p class="pt-12 text-center text-xl font-medium">
          Why should I use Nihongo Ninja?
        </p>

        <ul class="space-y-6 pt-8">
          <For each={PHILOSOPHY_POINTS}>
            {(point) => (
              <li class="group before:bg-foreground/10 relative pl-6 transition before:absolute before:inset-y-2 before:left-0 before:w-0.5 before:rounded before:content-['']">
                <div class="mb-2 flex items-center gap-3 text-base">
                  <div
                    class={`ring-foreground/10 ${PHILOSOPHY_ICON_COLOR_CLASS} flex size-8 items-center justify-center rounded-full ring-1`}
                  >
                    <point.icon class="size-4" aria-hidden="true" />
                  </div>
                  <h3 class="text-[1.0675rem] font-medium">{point.title}</h3>
                </div>
                <p class="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
                {point.bullets && (
                  <div class="mt-3 flex flex-wrap gap-2">
                    <For each={point.bullets}>
                      {(bullet) => (
                        <span class="bg-foreground/5 text-foreground/80 rounded-full px-2.5 py-1 text-xs">
                          {bullet}
                        </span>
                      )}
                    </For>
                  </div>
                )}
              </li>
            )}
          </For>
        </ul>

        <div class="mt-6 flex flex-wrap gap-3">
          <a href="/guides/srs">
            <Button
              variant="ghost"
              class="bg-foreground/5 hover:bg-foreground/10"
              aria-label="Learn how our spaced repetition system works"
            >
              How our SRS works
            </Button>
          </a>
          <a href="/guides/comparison">
            <Button
              variant="ghost"
              class="bg-foreground/5 hover:bg-foreground/10"
              aria-label="Compare SRS platforms"
            >
              SRS platform comparison
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

import { createFileRoute } from "@tanstack/solid-router"
import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Timeline, type TimelinePropsItem } from "@/components/ui/timeline"
import ExternalResourceIcons from "@/features/homepage/ExternalResourceIcons"
import {
  getLevelStyles,
  JLPT_LEVELS,
  type JLPTLevel,
} from "@/features/homepage-v2/utils/levelStyles"
import { Lightbulb, Repeat, BookOpen, Sparkles, DollarSign } from "lucide-solid"

export const Route = createFileRoute("/_home/guides/home")({
  loader: () => ({
    toc: [
      { id: "how-it-works", title: "How Nihongo Ninja works" },
      { id: "first-week", title: "Your first week" },
      { id: "resources", title: "Great resources" },
    ],
  }),
  component: RouteComponent,
})

/* ===== Data ===== */

const LEVEL_COLORS: Record<JLPTLevel, { line: string; bullet: string }> = {
  N5: {
    line: "rgba(52, 211, 153, 0.3)",
    bullet: "rgb(52, 211, 153)", // emerald-400
  },
  N4: {
    line: "rgba(56, 189, 248, 0.3)", // sky-400
    bullet: "rgb(56, 189, 248)",
  },
  N3: {
    line: "rgba(167, 139, 250, 0.3)", // violet-400
    bullet: "rgb(167, 139, 250)",
  },
  N2: {
    line: "rgba(251, 191, 36, 0.3)", // amber-400
    bullet: "rgb(251, 191, 36)",
  },
  N1: {
    line: "rgba(248, 113, 113, 0.3)", // rose-400
    bullet: "rgb(248, 113, 113)",
  },
}

const PHILOSOPHY_POINTS = [
  {
    icon: Lightbulb,
    title: "The right resource at the right time",
    description: (
      <>
        Great teachers and materials already exist.{" "}
        <span class="font-extrabold">
          Our job is to surface them in a way that matches your level and
          interests.
        </span>{" "}
        If you're new, we focus on clear explanations and comprehensible input.
        If you're further along, we match you with content that stretches your
        abilities at just the right pace.
      </>
    ),
  },
  {
    icon: BookOpen,
    title: "Practice that actually builds memory",
    description: (
      <>
        We use research‑backed spaced repetition like Anki,{" "}
        <span class="font-extrabold">
          but we don't make you live in flashcards.
        </span>{" "}
        Your activity—writing sentences, conjugating an adjective, watching a
        show or reading something online—feeds the same memory schedule. You
        keep learning naturally, while the system quietly tracks what needs
        review.
      </>
    ),
    bullets: [
      "Short reviews that reinforce recent exposure",
      "Written/MC practice that updates the same schedule",
      "Grammar/vocab strengthened through normal study",
    ],
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
    title: "Flexible, not locked‑in",
    description: (
      <>
        Already using Anki, WaniKani, or JPDB? Keep them.{" "}
        <span class="font-extrabold">
          Our tools are designed to play nicely with the ones you already like.
        </span>{" "}
        You can switch later or mix approaches without losing progress or
        getting trapped in a single workflow.
      </>
    ),
  },
  {
    icon: Sparkles,
    title: "Make it enjoyable",
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
]

const ROADMAP_BY_LEVEL: Record<
  JLPTLevel,
  Array<{
    day: string
    title: string
    details: string
    links: Array<{ label: string; href: string }>
  }>
> = {
  N5: [
    {
      day: "Day 1",
      title: "Start Hiragana + short quiz",
      details:
        "Learn the first handful of characters. Keep it short and familiar.",
      links: [
        { label: "Hiragana Quiz", href: "/practice/hiragana-quiz" },
        {
          label: "Tofugu Hiragana PDF",
          href: "https://files.tofugu.com/articles/japanese/2022-07-05-learn-hiragana-book-pdf/tofugu-learn-hiragana-book.pdf",
        },
      ],
    },
    {
      day: "Day 2",
      title: "Finish core Hiragana + watch 1 beginner video",
      details:
        "Build comfort reading kana and hear natural Japanese at your level.",
      links: [
        {
          label: "Beginner greetings video",
          href: "/external-resources/greetings-japanese-super-immersion",
        },
      ],
    },
    {
      day: "Day 3",
      title: "Light review + short reading",
      details:
        "Do a small review session and read a few lines of very simple text.",
      links: [{ label: "Start a review", href: "/practice/review" }],
    },
    {
      day: "Day 4",
      title: "Practice kana in context",
      details: "Sound out simple words, notice patterns (like し=shi, ち=chi).",
      links: [],
    },
    {
      day: "Day 5–7",
      title: "Stabilize",
      details:
        "Alternate short reviews with easy input. Keep it light and consistent.",
      links: [],
    },
  ],
  N4: [
    {
      day: "Day 1",
      title: "Conjugation warmup",
      details: "Pick 1–2 forms and practice in short bursts.",
      links: [
        { label: "Conjugation Practice", href: "/_home/practice/conjugation" },
      ],
    },
    {
      day: "Day 2",
      title: "Light review + simple input",
      details: "Do a short review, then watch a comprehensible video.",
      links: [{ label: "Start a review", href: "/practice/review" }],
    },
    {
      day: "Day 3–4",
      title: "Build theme vocabulary",
      details: "Pick a topic you care about and gather a few useful words.",
      links: [],
    },
    {
      day: "Day 5–7",
      title: "Rotate: input → practice → review",
      details: "Short, consistent cycles beat marathon sessions.",
      links: [],
    },
  ],
  N3: [
    {
      day: "Day 1",
      title: "Pick actual content you enjoy",
      details: "Anime/series/YouTube. Keep pausing minimal; enjoy it.",
      links: [],
    },
    {
      day: "Day 2",
      title: "Short review session",
      details: "Reinforce recent items without overloading.",
      links: [{ label: "Start a review", href: "/practice/review" }],
    },
    {
      day: "Day 3–4",
      title: "Targeted grammar pass",
      details: "Note 1–2 grammar points that repeatedly block understanding.",
      links: [],
    },
    {
      day: "Day 5–7",
      title: "Alternate input + light practice",
      details: "Maintain momentum; keep sessions short and focused.",
      links: [],
    },
  ],
  N2: [
    {
      day: "Day 1",
      title: "Choose a series/article arc",
      details: "Stick with one source for a week; focus on flow.",
      links: [],
    },
    {
      day: "Day 2",
      title: "Short review session",
      details: "Keep it light; don't overfit to cards.",
      links: [{ label: "Start a review", href: "/practice/review" }],
    },
    {
      day: "Day 3–4",
      title: "Grammar/usage focus",
      details: "Revisit a few blocking points in context.",
      links: [],
    },
    {
      day: "Day 5–7",
      title: "Sustain with variety",
      details: "Mix listening and reading; avoid burnout.",
      links: [],
    },
  ],
  N1: [
    {
      day: "Day 1–2",
      title: "Deep input in your domain",
      details: "Pick dense materials (essays, tech, news) you genuinely enjoy.",
      links: [],
    },
    {
      day: "Day 3",
      title: "Kanji-focused practice (optional)",
      details: "Generate a few sheets to solidify weak shapes.",
      links: [
        {
          label: "Kanji Practice Sheets",
          href: "/_home/additional-resources/kanji-practice-sheet",
        },
      ],
    },
    {
      day: "Day 4–7",
      title: "Sustain with minimal friction",
      details: "Keep reviews lean; prioritize real reading/listening.",
      links: [],
    },
  ],
}

/* ===== Components ===== */

function RouteComponent() {
  const defaultLevel = () => {
    // TODO: Pass selected level from home-v2 context if available
    return "N5"
  }

  return (
    <div class="mx-auto max-w-4xl pb-24">
      <header class="pt-16 text-center">
        <h1 class="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          How Nihongo Ninja Works
        </h1>
        <div class="bg-foreground/20 mx-auto mb-5 h-0.5 w-12 rounded" />
        <p class="text-muted-foreground text-lg md:text-xl">
          Input-first learning, flexible tools, and practice that builds lasting
          memory.
        </p>
      </header>

      <section id="how-it-works" aria-labelledby="how-it-works-heading">
        <div class="relative mb-10 overflow-hidden rounded-xl border border-white/10 bg-white/3 p-7 shadow-md shadow-black/20 backdrop-blur-md">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 w-1.25 rounded-l-xl bg-indigo-400/35"
            aria-hidden="true"
          />
          <p class="text-foreground text-lg leading-normal">
            Great Japanese resources exist across the web—but they're scattered
            and hard to find at the right time.
            <span class="font-semibold text-indigo-300">
              {" "}
              We personalize them with our own tools and strategies to support
              your learning.
            </span>{" "}
            We don't profit from the brilliant work already out there—that's why
            the core learning path stays free.
          </p>
        </div>

        <ul class="space-y-6 pt-6">
          <For each={PHILOSOPHY_POINTS}>
            {(point) => (
              <li class="group before:bg-foreground/10 relative pl-6 transition before:absolute before:inset-y-2 before:left-0 before:w-[2px] before:rounded before:content-['']">
                <div class="mb-2 flex items-center gap-3 text-base">
                  <div class="ring-foreground/10 flex size-8 items-center justify-center rounded-full ring-1">
                    <point.icon
                      class="size-4 text-indigo-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 class="text-lg font-semibold">{point.title}</h3>
                </div>
                <p class="text-muted-foreground text-lg leading-relaxed">
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
              class="text-foreground hover:bg-foreground/5 bg-transparent transition"
              aria-label="Learn how our spaced repetition system works"
            >
              How our SRS works
            </Button>
          </a>
          <a href="/guides/comparison">
            <Button
              variant="ghost"
              class="text-foreground hover:bg-foreground/5 bg-transparent transition"
              aria-label="Compare SRS platforms"
            >
              SRS platform comparison
            </Button>
          </a>
        </div>
      </section>

      {/* Roadmap Section */}
      <section
        id="first-week"
        aria-labelledby="first-week-heading"
        class="border-foreground/10 mt-12 border-t pt-12"
      >
        <h2 id="first-week-heading" class="mb-2 text-3xl font-semibold">
          Your First Week
        </h2>
        <p class="text-muted-foreground mb-8 text-lg">
          Here's how the philosophy translates to action. Each level starts
          differently—this shows what a typical first week looks like for you.
        </p>

        <div class="p-0">
          <Tabs defaultValue={defaultLevel()} class="w-full">
            <TabsList class="mb-6 flex h-auto flex-wrap justify-start gap-3 bg-transparent p-0">
              <For each={JLPT_LEVELS as unknown as JLPTLevel[]}>
                {(level) => (
                  <TabsTrigger
                    value={level}
                    class={`text-foreground/80 gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-base backdrop-blur-sm transition-colors hover:border-white/10 hover:bg-white/10 data-[selected]:border-white/15 data-[selected]:bg-white/10 data-[selected]:text-white`}
                    aria-label={`Show ${level} plan`}
                  >
                    <span
                      class={`${getLevelStyles(level).textColor} inline-block size-2.5 rounded-full bg-current`}
                      aria-hidden="true"
                    />
                    {level}
                  </TabsTrigger>
                )}
              </For>
            </TabsList>

            <For each={JLPT_LEVELS as unknown as JLPTLevel[]}>
              {(level) => (
                <TabsContent value={level}>
                  <RoadmapTimeline
                    level={level}
                    items={ROADMAP_BY_LEVEL[level]}
                  />
                </TabsContent>
              )}
            </For>
          </Tabs>
        </div>
      </section>

      {/* External Resources Section */}
      <section
        id="resources"
        aria-labelledby="resources-heading"
        class="border-foreground/10 mt-12 border-t pt-12"
      >
        <h2 id="resources-heading" class="mb-2 text-3xl font-semibold">
          Great Places to Learn
        </h2>
        <p class="text-muted-foreground mb-6 text-lg">
          We highlight and connect the internet's best Japanese teachers.
        </p>

        <div class="relative overflow-hidden rounded-xl border border-white/5 bg-white/3 p-5 shadow-md shadow-black/20 backdrop-blur-md">
          <ExternalResourceIcons />
        </div>
        <p class="text-muted-foreground mt-4 text-base">
          We surface creators known for clarity and quality. Explore them in app
          or visit their platforms directly when you're ready.
        </p>
        <p class="text-muted-foreground mt-4 text-sm">
          We're not affiliated with listed sources. We embed videos per
          YouTube's Terms of Service, use public APIs when available, or link
          directly out. Support these creators—they're excellent.
        </p>
      </section>
    </div>
  )
}

/* ===== Sub-components ===== */

interface RoadmapLevel {
  day: string
  title: string
  details: string
  links: Array<{ label: string; href: string }>
}

function RoadmapTimeline(props: { level: JLPTLevel; items: RoadmapLevel[] }) {
  const levelStyles = getLevelStyles(props.level)
  const colors = LEVEL_COLORS[props.level]

  const timelineItems: TimelinePropsItem[] = props.items.map((item) => ({
    bullet: undefined,
    title: (
      <div>
        <p class="text-sm tracking-wide uppercase opacity-70">{item.day}</p>
        <p class="text-xl font-semibold">{item.title}</p>
      </div>
    ),
    description: (
      <div class="space-y-2 text-base md:text-lg">
        <p>{item.details}</p>
        {item.links.length > 0 && (
          <div class="flex flex-wrap gap-2">
            <For each={item.links}>
              {(link) =>
                link.href.startsWith("http") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    class={`text-sm ${levelStyles.textColor} underline-offset-2 hover:underline`}
                    aria-label={`${link.label} (opens in a new tab)`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href}>
                    <a
                      class={`text-sm ${levelStyles.textColor} underline-offset-2 hover:underline`}
                    >
                      {link.label}
                    </a>
                  </Link>
                )
              }
            </For>
          </div>
        )}
      </div>
    ),
  }))

  return (
    <div
      class="timeline-container"
      style={
        {
          "--timeline-line-color": colors.line,
          "--timeline-bullet-color": colors.bullet,
          "--timeline-bullet-ring-color": "rgba(255, 255, 255, 0.15)",
        } as any
      }
    >
      <style>{`
        /* Tighten vertical spacing for timeline items (keep last item flush) */
        .timeline-container li.relative:not(.pb-0) { padding-bottom: 1.25rem !important; }

        /* Simple colored line */
        .timeline-container li.border-l-primary {
          border-left-color: var(--timeline-line-color) !important;
        }

        /* Simple colored active bullet */
        .timeline-container li > div[style*="left"].border-primary {
          background: var(--timeline-bullet-color) !important;
          border-color: var(--timeline-bullet-color) !important;
          box-shadow: none;
          opacity: 1;
        }

        /* Inactive bullet - light ring */
        .timeline-container li > div[style*="left"]:not(.border-primary) {
          background: transparent !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: none;
        }
      `}</style>
      <Timeline
        items={timelineItems}
        activeItem={props.items.length}
        bulletSize={16}
        lineSize={2}
      />
    </div>
  )
}

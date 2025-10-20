import { createFileRoute } from "@tanstack/solid-router"
import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Timeline, type TimelinePropsItem } from "@/components/ui/timeline"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import ExternalResourceIcons from "@/features/homepage/shared/components/ExternalResourceIcons"
import { getChapterStyles } from "@/data/chapter_colors"
import { Repeat, BookOpen, Sparkles, DollarSign } from "lucide-solid"
import BestMaterialsRightTimeSvg from "@/features/homepage/shared/assets/best-materials-right-time.svg"

export const Route = createFileRoute("/guides/home")({
  loader: () => ({
    toc: [
      { id: "how-it-works", title: "What is Nihongo Ninja?" },
      // { id: "first-week", title: "Your first week" },
      { id: "resources", title: "Great resources" },
    ],
  }),
  component: RouteComponent,
})

/* ===== Data ===== */

const CHAPTER_COLORS: Record<string, { line: string; bullet: string }> = {
  getting_started_n5: {
    line: "rgba(52, 211, 153, 0.3)",
    bullet: "rgb(52, 211, 153)", // emerald-400
  },
  getting_started_n4: {
    line: "rgba(56, 189, 248, 0.3)", // sky-400
    bullet: "rgb(56, 189, 248)",
  },
  getting_started_n3: {
    line: "rgba(167, 139, 250, 0.3)", // violet-400
    bullet: "rgb(167, 139, 250)",
  },
  getting_started_n2: {
    line: "rgba(251, 191, 36, 0.3)", // amber-400
    bullet: "rgb(251, 191, 36)",
  },
  getting_started_n1: {
    line: "rgba(248, 113, 113, 0.3)", // rose-400
    bullet: "rgb(248, 113, 113)",
  },
}

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
        We use research‑backed spaced repetition like Anki,{" "}
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

const ROADMAP_BY_CHAPTER: Record<
  string,
  Array<{
    day: string
    title: string
    details: string
    links: Array<{ label: string; href: string }>
  }>
> = {
  getting_started_n5: [
    {
      day: "Days 1–3",
      title: "Master Kana & Numbers",
      details:
        "Learn hiragana and contracted sounds, pass the quiz, then count 0–100. By day 3, you can read and count.",
      links: [
        { label: "Start Hiragana", href: "/lessons/hiragana" },
        { label: "Hiragana Quiz", href: "/practice/hiragana-quiz" },
        { label: "Numbers 0–100", href: "/lessons/numbers-0-100" },
      ],
    },
    {
      day: "Days 4–6",
      title: "Greetings & Self-Introduction",
      details:
        "Learn greetings and introduce yourself formally. Master the は and が particles with basic politeness patterns.",
      links: [
        { label: "Greetings", href: "/lessons/greetings" },
        {
          label: "Watch native speakers",
          href: "/external-resources/greetings-japanese-super-immersion",
        },
        { label: "Self-Introductions", href: "/lessons/self-introductions" },
      ],
    },
    {
      day: "Days 7–9",
      title: "Ask About People & Things",
      details:
        "Learn to ask about people, their occupations, and nationalities. Start forming real questions.",
      links: [
        { label: "Occupations & Majors", href: "/lessons/occupations-majors" },
        {
          label: "Questions with か",
          href: "/lessons/questions-with-ka",
        },
      ],
    },
    {
      day: "Days 10–13",
      title: "Learn Katakana & More Particles",
      details: "Master katakana, then learn particles も and negation.",
      links: [
        { label: "Start Katakana", href: "/lessons/katakana" },
        { label: "Katakana Quiz", href: "/practice/katakana-quiz" },
        { label: "Particles & Negation", href: "/lessons/particles-mo" },
      ],
    },
    {
      day: "Days 14–17",
      title: "Verbs & What People Do",
      details:
        "Learn verb conjugation (masu form), describe daily activities, and what people do.",
      links: [
        { label: "Verb Conjugation", href: "/lessons/verb-conj-masu" },
        {
          label: "Practice Conjugation",
          href: "/practice/conjugation-practice",
        },
      ],
    },
  ],
  getting_started_n4: [
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
  getting_started_n3: [
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
  getting_started_n2: [
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
  getting_started_n1: [
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
    // TODO: Pass selected level from root context if available
    return "N5"
  }

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
            <BestMaterialsRightTimeSvg class="h-auto w-[460px] text-[#d3d3d3]" />
          </h1>
          <div class="bg-background/20 relative -mt-2 overflow-hidden rounded-xl border border-white/10 p-7 shadow-md backdrop-blur-md">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 w-1.25 rounded-l-xl bg-pink-300/70"
              aria-hidden="true"
            />
            <p class="text-foreground text-lg leading-normal">
              🌷 Great Japanese resources exist across the web—but they're
              scattered and hard to find at the right time.
              <span class="font-semibold text-pink-300">
                {" "}
                We personalize them with our own tools and strategies to support
                your learning.
              </span>{" "}
              We don't profit from the brilliant work already out there—that's
              why the core learning path stays free.
            </p>
          </div>

          <p class="text-muted-foreground mt-4 text-sm leading-relaxed sm:text-base">
            Great teachers and materials already exist.{" "}
            <span class="font-extrabold">
              Our job is to bring the good ones to you.
            </span>{" "}
            Then, we fill in the gaps and help make content stick—through
            writing practice, memory reinforcement, and scheduling designed for
            long-term retention.
          </p>

          <div class="border-border bg-background relative mx-auto aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-lg border">
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
      </section>

      <div class="mx-auto max-w-3xl">
        <p class="pt-12 text-center text-2xl font-semibold">
          Why should I use Nihongo Ninja?
        </p>

        <ul class="space-y-6 pt-8">
          <For each={PHILOSOPHY_POINTS}>
            {(point) => (
              <li class="group before:bg-foreground/10 relative pl-6 transition before:absolute before:inset-y-2 before:left-0 before:w-[2px] before:rounded before:content-['']">
                <div class="mb-2 flex items-center gap-3 text-base">
                  <div class="ring-foreground/10 flex size-8 items-center justify-center rounded-full ring-1">
                    <point.icon
                      class="size-4 text-emerald-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 class="text-lg font-semibold">{point.title}</h3>
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

        {/* Roadmap Section */}
        {/* <section */}
        {/*   id="first-week" */}
        {/*   aria-labelledby="first-week-heading" */}
        {/*   class="border-foreground/10 mt-12 border-t pt-12" */}
        {/* > */}
        {/*   <p class="text-muted-foreground mb-8"> */}
        {/*     Each level starts differently—here are some examples of how your */}
        {/*     path might look. */}
        {/*   </p> */}
        {/**/}
        {/*   <Tabs defaultValue={defaultLevel()}> */}
        {/*     <TabsList class="mb-6 flex h-auto flex-wrap justify-start gap-3 bg-transparent p-0"> */}
        {/*       <For each={JLPT_LEVELS as unknown as JLPTLevel[]}> */}
        {/*         {(level) => ( */}
        {/*           <TabsTrigger */}
        {/*             value={level} */}
        {/*             class={`text-foreground/80 gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-0.75 text-base backdrop-blur-sm transition-colors hover:border-white/10 hover:bg-white/10 data-[selected]:border-white/15 data-[selected]:bg-white/10 data-[selected]:text-white`} */}
        {/*             aria-label={`Show ${level} plan`} */}
        {/*           > */}
        {/*             <span */}
        {/*               class={`${getLevelStyles(level).textColor} inline-block size-2.25 rounded-full bg-current`} */}
        {/*               aria-hidden="true" */}
        {/*             /> */}
        {/*             {level} */}
        {/*           </TabsTrigger> */}
        {/*         )} */}
        {/*       </For> */}
        {/*     </TabsList> */}
        {/**/}
        {/*     <For each={JLPT_LEVELS as unknown as JLPTLevel[]}> */}
        {/*       {(level) => ( */}
        {/*         <TabsContent value={level}> */}
        {/*           <Collapsible defaultOpen={false}> */}
        {/*             <CollapsibleTrigger class="w-auto py-1 pr-3 pl-1.5 hover:bg-neutral-400/5"> */}
        {/*               Show Timeline */}
        {/*             </CollapsibleTrigger> */}
        {/*             <CollapsibleContent class="mt-4"> */}
        {/*               <RoadmapTimeline */}
        {/*                 level={level} */}
        {/*                 items={ROADMAP_BY_LEVEL[level]} */}
        {/*               /> */}
        {/*             </CollapsibleContent> */}
        {/*           </Collapsible> */}
        {/*         </TabsContent> */}
        {/*       )} */}
        {/*     </For> */}
        {/*   </Tabs> */}
        {/* </section> */}

        {/* External Resources Section */}
        {/* <section */}
        {/*   id="resources" */}
        {/*   aria-labelledby="resources-heading" */}
        {/*   class="border-foreground/10 mt-12 border-t pt-12" */}
        {/* > */}
        {/*   <h2 class="text-lg font-semibold">Find Your Favorite Creators</h2> */}
        {/*   <p class="text-muted-foreground mt-2 mb-6"> */}
        {/*     We&apos;ve curated a list of great external resources to help you */}
        {/*     dive deeper into Japanese learning. Whether you&apos;re looking for */}
        {/*     YouTube channels, websites, or tools, these resources are handpicked */}
        {/*     to enhance your learning experience. */}
        {/*   </p> */}
        {/*   <ExternalResourceIcons /> */}
        {/*   <p class="mt-6"> */}
        {/*     See{" "} */}
        {/*     <Link */}
        {/*       to="guides/creator-support" */}
        {/*       class="text-sky-400 underline-offset-3 hover:underline" */}
        {/*     > */}
        {/*       Support The Creators */}
        {/*     </Link>{" "} */}
        {/*     for more information. */}
        {/*   </p> */}
        {/* </section> */}
      </div>
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

function RoadmapTimeline(props: { chapterId: string; items: RoadmapLevel[] }) {
  const levelStyles = getChapterStyles(props.chapterId)
  const colors = CHAPTER_COLORS[props.chapterId]

  const timelineItems: TimelinePropsItem[] = props.items.map((item) => ({
    bullet: undefined,
    title: (
      <div>
        <p class="text-sm tracking-wide uppercase opacity-70">{item.day}</p>
        <p class="text-xl font-semibold">{item.title}</p>
      </div>
    ),
    description: (
      <div class="space-y-2 text-base md:text-lg md:leading-6">
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
                  <Link
                    to={link.href}
                    class={`text-sm ${levelStyles.textColor} underline-offset-2 hover:underline`}
                  >
                    {link.label}
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

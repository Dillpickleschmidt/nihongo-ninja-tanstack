import { createFileRoute, Link } from "@tanstack/solid-router"
import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  Video,
  Volume2,
  Library,
  BookOpenText,
  BookPlus,
} from "lucide-solid"
import type { JSX } from "solid-js"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"

export const Route = createFileRoute(
  "/lessons/_chapter-0/welcome-overview",
)({
  component: WelcomeOverview,
})

const moduleTypes = [
  {
    icon: BookOpen,
    color: "text-green-500",
    name: "Lesson",
    desc: "Core grammar & concepts",
  },
  {
    icon: BookPlus,
    color: "text-sky-400",
    name: "Vocab",
    desc: "Anime videos & mnemonics",
  },
  {
    icon: ScrollText,
    color: "text-red-500",
    name: "Grammar Notes",
    desc: "Quick reference summaries",
  },
  {
    icon: Video,
    color: "text-purple-400",
    name: "Immersion Video",
    desc: "Listening & reading practice",
  },
  {
    icon: Volume2,
    color: "text-purple-400",
    name: "Immersion Audio",
    desc: "Pure listening practice",
  },
  {
    icon: PencilLine,
    color: "text-yellow-500",
    name: "Practice Sentence",
    desc: "Apply what you've learned",
  },
  {
    icon: Library,
    color: "text-sky-400",
    name: "Vocab List",
    desc: "All vocabulary in one place",
  },
  {
    icon: GraduationCap,
    color: "text-orange-500",
    name: "Vocab Practice",
    desc: "Efficient memorization",
  },
  {
    icon: GraduationCap,
    color: "text-yellow-500",
    name: "Vocab Test",
    desc: "Test your retention",
  },
  {
    icon: GraduationCap,
    color: "text-teal-400",
    name: "Conjugation Practice",
    desc: "Master verb forms",
  },
  {
    icon: GraduationCap,
    color: "text-green-500",
    name: "Counter Practice",
    desc: "Essential counting system",
  },
  {
    icon: BookOpenText,
    color: "text-teal-400",
    name: "Reading",
    desc: "True Japanese mastery",
  },
  {
    icon: PencilLine,
    color: "text-teal-400",
    name: "Worksheet",
    desc: "Extra practice materials",
  },
]

function WelcomeOverview() {
  return (
    <div class="relative pb-32">
      {/* Decorative background character */}
      <span class="pointer-events-none absolute top-8 right-6 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] sm:top-11 sm:right-8 sm:text-[11rem] dark:text-white/[0.03]">
        忍
      </span>

      <LessonHeader
        chapter="Chapter 0 · Foundations"
        title={<>Lesson Structure</>}
        subtitle="N5-N4 level Japanese with lessons, practice tools, and immersion content."
      >
        <OverviewItem>How this course is structured</OverviewItem>
        <OverviewItem>The module types you'll encounter</OverviewItem>
        <OverviewItem>Where to start</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* How this course works */}
        <div class="space-y-4">
          <SectionLabel>How this course works</SectionLabel>
          <div class="space-y-4 leading-relaxed text-foreground/75 dark:text-white/70">
            <p>
              This course covers listening, reading, writing, and grammar. You
              can choose where to focus, but start with Hiragana and
              Katakana—they're the foundation for everything else.
            </p>
            <p>
              The path is flexible. Want listening practice? Jump straight in.
              Prefer vocabulary or grammar? Start wherever your curiosity takes
              you.
            </p>
          </div>
        </div>

        {/* Module types */}
        <div class="space-y-5">
          <SectionLabel>Module types</SectionLabel>
          <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/50">
            Every lesson is built from a mix of these modules. Different lessons
            combine them in different ways depending on the topic.
          </p>

          <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {moduleTypes.map((module) => {
              const IconComponent = module.icon
              return (
                <ModuleCard
                  icon={
                    <IconComponent
                      size="18px"
                      class={`${module.color} shrink-0`}
                    />
                  }
                  name={module.name}
                  desc={module.desc}
                />
              )
            })}
          </div>
        </div>

        {/* Optional pre-read */}
        <div class="space-y-4">
          <SectionLabel>Optional pre-read</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            New to Japanese? This popular community guide covers effective
            learning methods and basics. Worth reading up to{" "}
            <a
              href="https://learnjapanese.moe/guide/#22-hiragana-and-katakana"
              target="_blank"
              class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 transition hover:decoration-dynamic-accent/60"
            >
              section 2.2 (Hiragana and Katakana)
            </a>{" "}
            before diving in.
          </p>

          <div class="py-2">
            <AsideBlock>
              <a
                href="https://learnjapanese.moe/guide/"
                target="_blank"
                class="group flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground dark:text-white/60 dark:hover:text-white/80"
              >
                <BookOpen
                  size="16"
                  class="shrink-0 text-dynamic-accent opacity-70"
                />
                <span class="underline decoration-foreground/20 underline-offset-2 transition group-hover:decoration-foreground/40 dark:decoration-foreground/20 dark:decoration-white/20 dark:group-hover:decoration-foreground/40 dark:decoration-white/40">
                  Japanese Guide – The Moe Way
                </span>
              </a>
            </AsideBlock>
          </div>
        </div>

        {/* Next step */}
        <GlowBox>
          <div class="text-center">
            <p class="mb-1 text-lg font-semibold text-foreground dark:text-white/90">
              Ready to begin?
            </p>
            <p class="mb-6 text-sm text-muted-foreground dark:text-white/50">
              Start with the three Japanese writing systems—the foundation of
              everything else.
            </p>
            <Link
              to="/lessons/writing-systems"
              class="inline-block rounded-full bg-dynamic-accent/20 px-6 py-2.5 text-sm font-medium text-dynamic-accent transition hover:bg-dynamic-accent/30"
            >
              Start with Writing Systems →
            </Link>
          </div>
        </GlowBox>

      </div>
    </div>
  )
}

function ModuleCard(props: {
  icon: JSX.Element
  name: string
  desc: string
}) {
  return (
    <div class="flex items-start gap-3 rounded-lg bg-card/60 px-4 py-3 dark:bg-white/[0.04]">
      <div class="mt-0.5">{props.icon}</div>
      <div>
        <div class="text-sm font-medium text-foreground/80 dark:text-white/80">{props.name}</div>
        <div class="text-xs text-muted-foreground dark:text-white/40">{props.desc}</div>
      </div>
    </div>
  )
}

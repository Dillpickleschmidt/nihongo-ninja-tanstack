import { createFileRoute } from "@tanstack/solid-router"

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
  Sparkles,
  Target,
  Zap,
} from "lucide-solid"

export const Route = createFileRoute("/learn/welcome-overview")({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/learn/japanese-pronunciation",
        nextButtonText: "Start Learning →",
        size: "default" as const,
      },
    }
  },
  component: RouteComponent,
})

export default function RouteComponent() {
  const iconSize = "20px"

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

  return (
    <div class="mb-8">
      {/* Hero Section */}
      <div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 px-4 py-16">
        <div class="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10"></div>
        <div class="relative text-center">
          <div class="mx-auto mb-8 w-40 overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/img/chapter-0/chapter-0-welcome.png"
              alt="Welcome to Nihongo Ninja"
              class="w-full"
            />
          </div>
          <h1 class="mb-5 text-4xl leading-tight font-bold text-white">
            Welcome to{" "}
            <span class="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Nihongo Ninja
            </span>{" "}
            🍵
          </h1>
          <p class="text-lg leading-relaxed text-slate-300">
            Learn Japanese the fun way. N5-N4 level content with epic
            explanations and practice tools that actually keep you engaged.
          </p>
        </div>
      </div>

      <div class="px-4 py-8">
        {/* Quick Resource */}
        <div class="bg-card/50 border-border mb-8 rounded-lg border p-4 shadow-lg">
          <div class="mb-2 flex items-center gap-2">
            <Sparkles class="text-yellow-500" size="20" />
            <h3 class="text-base font-semibold">Essential Resource</h3>
          </div>
          <p class="text-muted-foreground mb-3 text-sm">
            New to Japanese? This popular guide covers what you need to know
            about effective learning methods and getting started. I would read
            up to{" "}
            <a
              href="https://learnjapanese.moe/guide/#22-hiragana-and-katakana"
              target="_blank"
              class="underline"
            >
              2.2 Hiragana and Katakana
            </a>{" "}
            for this lesson.
          </p>
          <a
            u
            href="https://learnjapanese.moe/guide/"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-md bg-sky-500 px-3 py-2 text-sm text-white transition-colors hover:bg-sky-600"
          >
            <BookOpen size="16" />
            Japanese Guide - The Moe Way
          </a>
        </div>

        {/* Key Features Grid */}
        <div class="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="border-border rounded-xl border bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 p-6 shadow-lg">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-fuchsia-500/20">
              <Target class="text-fuchsia-500" size="24" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-fuchsia-500">
              What You'll Learn
            </h3>
            <p class="text-muted-foreground text-sm">
              Listening, reading, writing, and grammar. Focus on what interests
              you most—spoken Japanese, written forms, or grammar mastery.
            </p>
            <p class="text-muted-foreground mt-3 text-sm">
              <strong>Start here:</strong> Hiragana and katakana (takes about a
              week, essential for everything else).
            </p>
          </div>

          <div class="border-border rounded-xl border bg-gradient-to-br from-orange-500/10 to-amber-500/5 p-6 shadow-lg">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
              <Zap class="text-orange-500" size="24" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-orange-500">
              Flexible Learning
            </h3>
            <p class="text-muted-foreground text-sm">
              Pick and choose your focus. Want listening practice? Jump in.
              Prefer vocabulary or grammar? Start there. No fixed path—follow
              your curiosity.
            </p>
          </div>

          <div class="border-border rounded-xl border bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 shadow-lg md:col-span-2 lg:col-span-1">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
              <Sparkles class="text-green-500" size="24" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-green-500">
              Curated Content
            </h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              We've scoured the internet to find the best, most engaging videos
              available. These are carefully selected and provided just when
              they're most helpful.
            </p>
            <p class="text-muted-foreground mt-3 text-sm">
              Our goal: save you time by filtering only the highest quality
              content.
            </p>
          </div>
        </div>

        {/* Module Types */}
        <div class="bg-card/50 border-border rounded-lg border p-5 shadow-lg">
          <h2 class="mb-4 text-xl font-bold">Learning Modules</h2>
          <p class="text-muted-foreground mb-5 text-sm">
            Every lesson combines different types of content to keep learning
            engaging:
          </p>

          <div class="grid grid-cols-2 gap-3">
            {moduleTypes.map((module) => {
              const IconComponent = module.icon
              return (
                <div class="bg-background/50 flex items-center gap-2 rounded-lg p-3">
                  <div class="flex-shrink-0">
                    <IconComponent
                      size={iconSize}
                      class={`${module.color} saturate-75`}
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="text-sm font-medium">{module.name}</div>
                    <div class="text-muted-foreground text-xs">
                      {module.desc}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <p class="text-muted-foreground mt-5 text-sm italic">
            Each lesson may combine multiple module types for maximum
            effectiveness.
          </p>
        </div>

        {/* Bottom CTA */}
        <div class="mt-8 text-center">
          <h3 class="mb-2 text-lg font-bold">Ready to Start?</h3>
          <p class="text-muted-foreground text-sm">
            Begin with Japanese pronunciation and basic sounds—the foundation of
            everything else.
          </p>
        </div>
      </div>
    </div>
  )
}

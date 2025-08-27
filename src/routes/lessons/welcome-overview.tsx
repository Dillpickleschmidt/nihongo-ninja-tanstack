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

export const Route = createFileRoute("/lessons/welcome-overview")({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/japanese-pronunciation",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
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
    <div class="mb-32">
      {/* Header */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Welcome to Nihongo Ninja 🍵
        </h1>
        <div class="mx-auto mb-5 h-1 w-16 rounded bg-fuchsia-400"></div>
        <p class="text-muted-foreground text-lg">
          Learn Japanese the fun way. N5–N4 level content with epic explanations
          and practice tools that keep you engaged.
        </p>
      </header>

      <main class="mx-auto max-w-3xl space-y-12 px-6 leading-relaxed">
        {/* Overview */}
        <section class="space-y-8">
          <h2 class="text-2xl font-semibold">How This Course Works</h2>

          <div class="text-muted-foreground space-y-6 text-sm leading-relaxed">
            <div>
              <h3 class="mb-1 text-base font-semibold text-white">
                What You'll Learn
              </h3>
              <p>
                Listening, reading, writing, and grammar. You can choose where
                to focus, but start with Hiragana and Katakana — the essential
                foundations.
              </p>
            </div>

            <div>
              <h3 class="mb-1 text-base font-semibold text-white">
                Flexible Learning
              </h3>
              <p>
                Pick your own path. Want listening practice? Jump in there.
                Prefer vocabulary or grammar? Start where your curiosity takes
                you.
              </p>
            </div>

            <div>
              <h3 class="mb-1 text-base font-semibold text-white">
                Curated Content
              </h3>
              <p>
                We’ve filtered only the highest‑quality resources to make sure
                what you see is always worth your time.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Modules */}
        <section>
          <h2 class="mb-4 text-2xl font-semibold">Learning Modules</h2>
          <p class="text-muted-foreground mb-6 text-sm">
            Every lesson combines modules to keep your learning balanced and
            effective:
          </p>

          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {moduleTypes.map((module) => {
              const IconComponent = module.icon
              return (
                <div class="border-border bg-card/50 flex items-start gap-3 rounded-md border p-3">
                  <IconComponent
                    size={iconSize}
                    class={`${module.color} mt-0.5 flex-shrink-0`}
                  />
                  <div>
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
            Different lessons combine modules in different ways for maximum
            effectiveness.
          </p>
        </section>

        {/* Optional Pre-Read */}
        <section>
          <h2 class="mb-3 text-xl font-semibold">Optional Pre‑Read</h2>
          <p class="text-muted-foreground mb-3 text-sm">
            New to Japanese? This popular guide explains effective learning
            methods and basics. Recommended: read up to{" "}
            <a
              href="https://learnjapanese.moe/guide/#22-hiragana-and-katakana"
              target="_blank"
              class="text-fuchsia-400 underline"
            >
              2.2 Hiragana and Katakana
            </a>{" "}
            before this lesson.
          </p>

          <a
            href="https://learnjapanese.moe/guide/"
            target="_blank"
            class="bg-muted text-foreground hover:bg-muted/70 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition"
          >
            <BookOpen size="16" class="text-fuchsia-400" />
            Japanese Guide – The Moe Way
          </a>
        </section>

        {/* CTA */}
        <section class="mt-12 text-center">
          <h3 class="mb-2 text-lg font-bold">Ready to Begin?</h3>
          <p class="text-muted-foreground mb-6 text-sm">
            Start with Japanese pronunciation and sounds — the foundation of
            everything else.
          </p>
          <a
            href="/lessons/japanese-pronunciation"
            class="inline-block rounded-full bg-fuchsia-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-fuchsia-600"
          >
            Start with Pronunciation →
          </a>
        </section>
      </main>
    </div>
  )
}

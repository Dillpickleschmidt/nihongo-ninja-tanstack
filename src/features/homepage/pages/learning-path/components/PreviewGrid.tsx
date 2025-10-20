import { Show, For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ReviewCard } from "@/routes/_home/review"
import { Button } from "@/components/ui/button"
import { getLevelStyles, JLPT_LEVELS } from "@/features/homepage/shared/utils/levelStyles"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-solid"
import StartHereSvg from "@/features/homepage/shared/assets/start-here.svg"
import ViewingIsEnough from "@/features/homepage/shared/assets/viewing-is-enough.svg"
import LearnNew from "@/features/homepage/shared/assets/learn-new.svg"

interface PreviewGridProps {
  level: string | null
  onLevelChange?: (level: string) => void
}

const getLevelContent = (level: string | null) => {
  switch (level) {
    case "N5":
      return {
        heading: "Beautiful tools. Engaging content.",
        description:
          "Most beginner resources overcomplicate grammar. Finding engaging content at your level feels impossible. We've simplified it: curated YouTube from teachers who actually explain well, clear lessons, and interactive practice from day one. Learn Japanese with great resources from across the web.",
        features: [
          "Interactive hiragana & katakana quizzes",
          "Free lessons ordered to match Genki + curated YouTube videos",
          "Spaced repetition from the start",
        ],
        tiles: [
          {
            title: "Getting Started",
            subtitle: "Introduction",
            href: "/guides/home",
          },
          {
            title: "Hiragana Quiz",
            subtitle: "Interactive kana",
            href: "/practice/hiragana-quiz",
          },
          {
            title: "Lessons",
            subtitle: "Clear explanations",
            href: "/lessons",
          },
          {
            title: "Grammar",
            subtitle: "Conjugation Practice",
            href: "/practice/conjugation",
          },
          {
            title: "Vocabulary Practice",
            subtitle: "SRS from day 1",
            href: "/vocab",
          },
        ],
      }
    case "N4":
      return {
        heading: "Learn what you actually care about",
        description:
          "You're tired of textbook phrases that nobody actually says. Build vocabulary around what you care about—anime, games, whatever keeps you motivated. Master the conjugations you'll actually hear. When you're ready, the browser extension is already set up and waiting. No PhD in software required.",
        features: [
          "Conjugation practice (11 different forms)",
          "Custom vocabulary decks for your interests",
          "Grammar + vocabulary spaced repetition",
        ],
        tiles: [
          {
            title: "Getting Started",
            subtitle: "Introduction",
            href: "/guides/home",
          },
          {
            title: "Lessons",
            subtitle: "Clear explanations",
            href: "/lessons",
          },
          {
            title: "Grammar",
            subtitle: "Sentence Practice",
            href: "/_home/practice/conjugation",
          },
          {
            title: "Vocabulary Practice",
            subtitle: "SRS from day 1",
            href: "/practice/review",
          },
          {
            title: "SRS Practice",
            subtitle: "Grammar + Vocab",
            href: "/practice/review",
          },
          {
            title: "Custom Decks",
            subtitle: "Learn what matters",
            href: "/_home/vocab",
          },
          { title: "Browser Extension", subtitle: "Pre-configured", href: "#" },
        ],
      }
    case "N3":
      return {
        heading: "Start watching what you love",
        description:
          "You're tired of pausing every sentence. Pick the anime or show you've been wanting to watch, and we'll show you exactly what stands between you and understanding it. Not generic lessons—a custom learning path built for that specific content. Grammar becomes your unlock key instead of a chore.",
        features: [
          "Generate custom learning paths for any show",
          "Grammar-focused spaced repetition (unique!)",
          "Browser extension for sentence-mining with grammar explanations",
        ],
        tiles: [
          {
            title: "Getting Started",
            subtitle: "Introduction",
            href: "/guides/home",
          },
          { title: "Learning Paths", subtitle: "For any show", href: "#" },
          {
            title: "Browser Extension",
            subtitle: "Mining subtitles",
            href: "#",
          },
          {
            title: "SRS Practice",
            subtitle: "Grammar + Vocab",
            href: "/practice/review",
          },
          { title: "Sentence Building", subtitle: "Grammar", href: "#" },
        ],
      }
    case "N2":
      return {
        heading: "Pick any content. We'll show you what to learn.",
        description:
          "You know what you want to watch next. We'll analyze exactly what you need to learn for it. Already using Anki or WaniKani? Keep using them—import your data, switch platforms anytime. You've outgrown rigid systems. Time for tools that respect how you actually learn.",
        features: [
          "Show/movie learning path generator",
          "Switch between Anki, WaniKani, JPDB anytime",
          "Import your existing review data",
        ],
        tiles: [
          {
            title: "Getting Started",
            subtitle: "Introduction",
            href: "/guides/home",
          },
          { title: "Learning Paths", subtitle: "Analyze any show", href: "#" },
          {
            title: "Browser Extension",
            subtitle: "Mining subtitles",
            href: "#",
          },
          { title: "SRS Flexibility", subtitle: "Use any platform", href: "#" },
          { title: "Sentence Building", subtitle: "Grammar", href: "#" },
        ],
      }
    case "N1":
      return {
        heading: "Complete toolkit. Complete flexibility.",
        description:
          "You're past needing hand-holding. Full dictionary access, every SRS platform connected, the extension's most advanced features, learning paths for any content no matter how niche. The complete toolkit with zero restrictions. Learn what you want, how you want.",
        features: [
          "Full dictionary integration (Jotoba + WaniKani)",
          "All SRS platforms connected seamlessly",
          "Generate custom kanji practice sheets",
        ],
        tiles: [
          {
            title: "Getting Started",
            subtitle: "Introduction",
            href: "/guides/home",
          },
          { title: "Learning Paths", subtitle: "Analyze any show", href: "#" },
          {
            title: "Browser Extension",
            subtitle: "Mining subtitles",
            href: "#",
          },
          { title: "All SRS Platforms", subtitle: "Connected", href: "#" },
        ],
      }
    default:
      return {
        heading: "Select your level",
        description:
          "Choose your Japanese proficiency level to see content tailored specifically for you.",
        features: [
          "Personalized resources",
          "Level-appropriate content",
          "Clear progression path",
        ],
        tiles: [
          {
            title: "Getting Started",
            subtitle: "Introduction",
            href: "/guides/home",
          },
          {
            title: "Lessons",
            subtitle: "Structured learning",
            href: "/lessons",
          },
          {
            title: "Practice",
            subtitle: "Multiple formats",
            href: "/practice/review",
          },
          { title: "Resources", subtitle: "Curated content", href: "#" },
          { title: "Tools", subtitle: "Built for you", href: "#" },
        ],
      }
  }
}

const getButtonColors = (level: string | null) => {
  switch (level) {
    case "N5":
      return "bg-emerald-400/10 text-emerald-400"
    case "N4":
      return "bg-sky-400/10 text-sky-400"
    case "N3":
      return "bg-violet-400/10 text-violet-400"
    case "N2":
      return "bg-amber-400/10 text-amber-400"
    case "N1":
      return "bg-rose-400/10 text-rose-400"
    default:
      return "bg-gray-400/10 text-gray-400"
  }
}

const getRingColor = (level: string | null) => {
  switch (level) {
    case "N5":
      return "ring-emerald-400/20"
    case "N4":
      return "ring-sky-400/20"
    case "N3":
      return "ring-violet-400/20"
    case "N2":
      return "ring-amber-400/20"
    case "N1":
      return "ring-rose-400/20"
    default:
      return "ring-gray-400/20"
  }
}

function LevelPagination(props: {
  currentLevel: string | null
  onLevelChange?: (level: string) => void
}) {
  const levelIndex = () =>
    props.currentLevel ? JLPT_LEVELS.indexOf(props.currentLevel as any) : -1

  const canGoBack = () => levelIndex() > 0
  const canGoForward = () => levelIndex() < JLPT_LEVELS.length - 1

  const handlePrevious = () => {
    if (canGoBack() && props.onLevelChange) {
      props.onLevelChange(JLPT_LEVELS[levelIndex() - 1])
    }
  }

  const handleNext = () => {
    if (canGoForward() && props.onLevelChange) {
      props.onLevelChange(JLPT_LEVELS[levelIndex() + 1])
    }
  }

  const styles = () => getLevelStyles(props.currentLevel)

  return (
    <Show when={props.currentLevel}>
      <div class="flex items-center justify-center gap-3">
        <button
          onClick={handlePrevious}
          disabled={!canGoBack()}
          class="hover:bg-muted rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>

        <div
          class={`flex size-10 items-center justify-center rounded-lg border bg-gradient-to-br font-bold shadow-lg backdrop-blur-md transition-colors duration-150 ${styles().borderColor} ${styles().gradient} ${styles().textColor}`}
        >
          {props.currentLevel}
        </div>

        <button
          onClick={handleNext}
          disabled={!canGoForward()}
          class="hover:bg-muted rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </Show>
  )
}

export default function PreviewGrid(props: PreviewGridProps) {
  const content = () => getLevelContent(props.level)

  return (
    <section class="mx-auto w-full max-w-7xl px-4 pt-4 pb-24 md:pt-24">
      {/* Review Cards - temporarily shown */}
      <Show when={false}>
        <div class="mb-3 flex flex-wrap justify-center gap-8">
          <ReviewCard
            label="Meanings"
            color="blue"
            dueCount={12}
            breakdown="8 V · 4 K"
            onClick={() => console.log("meanings clicked")}
            variant="desktop"
          />
          <ReviewCard
            label="Spellings"
            color="green"
            dueCount={5}
            onClick={() => console.log("spellings clicked")}
            variant="desktop"
          />
          <ReviewCard
            label="Grammar"
            color="amber"
            dueCount={0}
            onClick={() => console.log("grammar clicked")}
            variant="desktop"
          />
        </div>
        <div class="-mb-2 flex justify-center">
          <LearnNew class="h-20 text-[#d3d3d3]" />
        </div>
      </Show>

      {/* Content section */}
      <div class="p-4 md:p-6">
        <div class="mb-4 flex justify-between">
          <h2 class="text-2xl font-semibold md:text-3xl">
            {content().heading}
          </h2>
          <LevelPagination
            currentLevel={props.level}
            onLevelChange={props.onLevelChange}
          />
        </div>
        <p class="text-muted-foreground mt-4 max-w-3xl">
          {content().description}
        </p>
        <div class="flex w-full justify-between">
          <FeatureList features={content().features} />
          <ViewingIsEnough class="-mr-8 -mb-20 h-auto w-68 text-neutral-400" />
        </div>
      </div>

      {/* Preview tiles */}
      <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <For each={content().tiles}>
            {(tile, index) => (
              <Link to={tile.href}>
                <PreviewTile
                  title={tile.title}
                  subtitle={tile.subtitle}
                  level={props.level}
                  index={index()}
                />
              </Link>
            )}
          </For>
        </div>
      </div>

      <div class="flex w-full flex-col items-center gap-6 pt-6">
        <p class="text-muted-foreground text-xl font-semibold">
          <span class={getLevelStyles(props.level).textColor}>2/5</span>{" "}
          Complete
        </p>
        <Link to="/dashboard">
          <Button
            class="font-poppins font-semibold"
            variant="secondary"
            onClick={() => {}}
          >
            See your dashboard
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </section>
  )
}

function FeatureList(props: { features: string[] }) {
  return (
    <ul class="text-muted-foreground mt-4 space-y-2 text-sm">
      <For each={props.features}>
        {(feature) => (
          <li class="flex items-center gap-2">
            <span class="bg-primary h-1.5 w-1.5 rounded-full" />
            {feature}
          </li>
        )}
      </For>
    </ul>
  )
}

function PreviewTile(props: {
  title: string
  subtitle: string
  level: string | null
  index: number
}) {
  return (
    <div
      class={`bg-background/50 ease-instant-hover-200 rounded-2xl border border-neutral-700/60 p-4 hover:scale-[0.995] hover:ring-2 ${getRingColor(props.level)}`}
    >
      {/* Preview area */}
      <div class="bg-background mb-3 h-32 rounded-xl md:h-40" />

      <div class="flex items-center justify-between">
        <div>
          <p class="text-muted-foreground text-sm">{props.subtitle}</p>
          <h3 class="text-lg font-medium">{props.title}</h3>
        </div>
        <div>
          <Show when={props.index === 0}>
            <StartHereSvg class="mr-1 inline-flex h-auto w-32 text-pink-300 saturate-[75%]" />
          </Show>
          <span
            class={`h-auto rounded-lg px-4 py-2 text-sm ${props.index === 0 && "ring"} ${getButtonColors(props.level)}`}
          >
            Explore
          </span>
        </div>
      </div>
    </div>
  )
}

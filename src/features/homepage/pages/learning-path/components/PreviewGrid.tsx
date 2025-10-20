import { Show, For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ReviewCard } from "@/routes/_home/review"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-solid"
import { getLevelStyles, JLPT_LEVELS } from "../../../shared/utils/levelStyles"
import { textbooks } from "@/data/textbooks"
import { static_modules } from "@/data/static_modules"

import StartHereSvg from "@/features/homepage/shared/assets/start-here.svg"
import ViewingIsEnough from "@/features/homepage/shared/assets/viewing-is-enough.svg"
import LearnNew from "@/features/homepage/shared/assets/learn-new.svg"

interface PreviewGridProps {
  level: string | null
  onLevelChange?: (level: string) => void
}

const getLevelContent = (level: string | null) => {
  // Get the getting_started textbook
  const gettingStarted = textbooks.getting_started

  // Find the chapter matching the level
  const chapterMap: Record<string, string> = {
    N5: "getting_started_n5",
    N4: "getting_started_n4",
    N3: "getting_started_n3",
    N2: "getting_started_n2",
    N1: "getting_started_n1",
  }

  const chapterId = level ? chapterMap[level] : null
  const chapter = chapterId
    ? gettingStarted.chapters.find((ch) => ch.id === chapterId)
    : null

  if (chapter && chapter.heading && chapter.description && chapter.features) {
    // Build tiles from learning_path_items using static_modules data
    const tiles = chapter.learning_path_items
      .map((itemId) => {
        const module = static_modules[itemId as keyof typeof static_modules]
        if (!module) return null

        return {
          title: module.title,
          subtitle: module.description || "",
          href: "link" in module ? module.link : "#",
        }
      })
      .filter((tile) => tile !== null)

    return {
      heading: chapter.heading,
      description: chapter.description,
      features: chapter.features,
      tiles,
    }
  }

  // Fallback for when no level is selected
  return {
    heading: "Select your level",
    description:
      "Choose your Japanese proficiency level to see content tailored specifically for you.",
    features: [
      "Personalized resources",
      "Level-appropriate content",
      "Clear progression path",
    ],
    tiles: [],
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
  const styles = () => getLevelStyles(props.level)

  return (
    <div
      class={`bg-background/50 ease-instant-hover-200 rounded-2xl border border-neutral-700/60 p-4 hover:scale-[0.995] hover:ring-2 ${styles().tileRingColor}`}
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
            class={`h-auto rounded-lg px-4 py-2 text-sm ${props.index === 0 && "ring"} ${styles().backgroundColor} ${styles().textColor}`}
          >
            Explore
          </span>
        </div>
      </div>
    </div>
  )
}

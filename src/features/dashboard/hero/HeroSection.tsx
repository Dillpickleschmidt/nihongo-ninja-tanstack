import { Show, Suspense, onMount } from "solid-js"
import { Sparkles } from "lucide-solid"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { animateElementIn, getInitialAnimationStyles } from "@/utils/animations"
import { CurrentChapterCard } from "./CurrentChapterCard"

interface HeroSectionProps {
  skipAnimation?: boolean
}

export function HeroSection(props: HeroSectionProps) {
  let headerRef: HTMLDivElement | undefined

  onMount(() => {
    if (!props.skipAnimation && headerRef) {
      animateElementIn(headerRef, "down")
    }
  })

  return (
    <section>
      <div
        ref={headerRef}
        class="mb-8"
        style={props.skipAnimation ? {} : getInitialAnimationStyles("down")}
      >
        <Suspense
          fallback={
            <div class="flex items-center gap-3 mb-2">
              <div class="h-6 w-24 rounded-full bg-white/10 animate-pulse" />
            </div>
          }
        >
          <HeroBadge />
        </Suspense>
        <h1 class="text-2xl font-bold md:text-3xl lg:text-4xl">
          <span class="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-(--accent-end)">
            Continue
          </span>{" "}
          your journey
        </h1>
      </div>

      <CurrentChapterCard skipAnimation={props.skipAnimation} />
    </section>
  )
}

function HeroBadge() {
  const profile = useConvexQuery(api.api.profiles.getProfile, {})
  const learningPathsQuery = useConvexQuery(
    api.api.learning_paths.getAllLearningPaths,
    {}
  )

  const selectedPathId = () =>
    profile.data()?.userPreferences.activeLearningPath

  const selectedPath = () =>
    learningPathsQuery.data()?.find((p) => p.id === selectedPathId())

  const pathChaptersQuery = useConvexQuery(
    api.api.learning_paths.getPathChapters,
    () => ({ pathId: selectedPathId()! }),
    () => ({ enabled: !!selectedPathId() })
  )

  const currentChapter = () => {
    const chapterSlug = profile.data()?.userPreferences.activeChapter
    if (!chapterSlug) return undefined
    return pathChaptersQuery.data()?.find((c) => c.slug === chapterSlug)
  }

  return (
    <div class="flex items-center gap-3 mb-2">
      <div class="flex items-center gap-2 rounded-full border border-(--accent)/20 bg-(--accent)/10 px-3 py-1 text-xs text-(--accent)">
        <Sparkles class="size-3" />
        <span>{selectedPath()?.shortName ?? "Loading..."}</span>
      </div>
      <Show when={currentChapter()}>
        <span class="text-white/30">•</span>
        <span class="text-sm text-white/50">
          Chapter {getChapterDisplayNumber(currentChapter()?.slug ?? "")}
        </span>
      </Show>
    </div>
  )
}

import { Show, Suspense } from "solid-js"
import { Sparkles } from "lucide-solid"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { usePreferences } from "@/lib/preferences"
import { CurrentChapterCard } from "./CurrentChapterCard"

export function HeroSection() {
  return (
    <section>
      <div class="mb-8 animate-fade-up opacity-0">
        <Suspense
          fallback={
            <div class="flex items-center gap-3 mb-2">
              <div class="h-6 w-24 rounded-full bg-white/10 animate-pulse" />
            </div>
          }
        >
          <HeroBadge />
        </Suspense>
        <h1 class="text-3xl font-bold lg:text-4xl">
          <span class="text-(--accent)">Continue</span> your journey
        </h1>
      </div>

      <CurrentChapterCard />
    </section>
  )
}

function HeroBadge() {
  const { preferences } = usePreferences()
  const learningPathsQuery = useConvexQuery(
    api.api.learning_paths.getAllLearningPaths,
    {},
  )

  const selectedPathId = () => preferences().activeLearningPath

  const selectedPath = () =>
    learningPathsQuery.data()?.find((p) => p.id === selectedPathId())

  const progressQuery = useConvexQuery(
    api.api.learning_paths.getPathWithProgress,
    () => ({ pathId: selectedPathId()! }),
    () => ({ enabled: !!selectedPathId() }),
  )

  const currentChapter = () => {
    const chapterSlug = preferences().activeChapter
    if (!chapterSlug) return undefined
    return progressQuery.data()?.chapters?.find((c) => c.slug === chapterSlug)
  }

  const moduleCount = () => {
    const chapter = currentChapter()
    if (chapter === undefined) return undefined
    return chapter.modules.length
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
        <Show when={moduleCount() !== undefined}>
          <span class="text-white/30">•</span>
          <span class="text-sm text-white/50">{moduleCount()} modules</span>
        </Show>
      </Show>
    </div>
  )
}

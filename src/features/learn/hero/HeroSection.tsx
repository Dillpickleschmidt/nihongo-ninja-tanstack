import {
  Show,
  Suspense,
  createSignal,
  type Accessor,
  type Setter,
} from "solid-js"
import { Skeleton } from "@/components/ui/custom/skeleton"
import { Sparkles, ChevronRight } from "lucide-solid"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { useSrs } from "@/features/srs/use-srs"
import { useLearningPath } from "../context/learning-path"
import { LearningPathSelector } from "../LearningPathSelector"
import { HeroTimeline } from "./HeroTimeline"
import { ViewToggle } from "./ViewToggle"
import { DueCountBadge } from "./DueCountBadge"

interface HeroSectionProps {
  selectedView: Accessor<string>
  setSelectedView: Setter<string>
}

export function HeroSection(props: HeroSectionProps) {
  const { currentChapter, selectedPath } = useLearningPath()

  const currentModules = () => {
    const chapter = currentChapter()
    if (chapter === undefined) return undefined
    return chapter.modules
  }

  const nextModules = () => currentModules()?.slice(0, 3) ?? []

  return (
    <section class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div class="flex-1">
        <div class="mb-4 animate-fade-up opacity-0">
          <Suspense
            fallback={
              <div class="flex items-center gap-3 mb-2">
                <Skeleton class="h-6 w-24 rounded-full bg-white/10" />
              </div>
            }
          >
            <HeroBadge />
          </Suspense>
        </div>

        <div
          class="animate-fade-up opacity-0"
          style={{ "animation-delay": "75ms" }}
        >
          <Suspense
            fallback={
              <div>
                <Skeleton class="h-7 w-48 bg-white/10 rounded mb-2" />
                <Skeleton class="h-4 w-64 bg-white/5 rounded mb-4" />
                <div class="flex items-center gap-4">
                  <Skeleton class="h-8 w-28 bg-white/5 rounded-xl" />
                  <Skeleton class="h-10 w-16 bg-white/5 rounded" />
                </div>
              </div>
            }
          >
            <HeroContent />
          </Suspense>
        </div>
      </div>

      <div
        class="lg:shrink-0 lg:self-stretch flex flex-col animate-fade-up opacity-0"
        style={{ "animation-delay": "100ms" }}
      >
        <div class="flex-1 flex flex-col justify-center">
          <HeroTimeline modules={nextModules()} />
        </div>
        <div>
          <SSRMediaQuery showFrom="md">
            <ViewToggle
              selectedView={props.selectedView}
              setSelectedView={props.setSelectedView}
            />
          </SSRMediaQuery>
        </div>
      </div>
    </section>
  )
}

function HeroContent() {
  const [isSelectorOpen, setIsSelectorOpen] = createSignal(false)
  const { query, selectedPathId, selectedPath, switchPath } = useLearningPath()
  const { dueCounts } = useSrs()
  const vocabTotal = () => dueCounts().vocabTotal

  return (
    <div>
      <h2 class="text-3xl font-bold font-excalifont text-white mb-1 md:text-4xl">
        Your <span class="text-dynamic-accent">Learning Path</span>
      </h2>
      <p class="text-sm font-excalifont text-white/50 mb-4">
        {selectedPath()?.name ?? "Select a textbook to begin"}
      </p>

      <div class="flex items-center gap-4">
        <Show when={query.data()?.paths && selectedPathId()}>
          <LearningPathSelector
            learningPaths={query.data()!.paths}
            activePathId={selectedPathId()!}
            isOpen={isSelectorOpen()}
            onOpenChange={setIsSelectorOpen}
            onPathSelect={switchPath}
            class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
          >
            Change path
            <ChevronRight class="size-4" />
          </LearningPathSelector>
        </Show>
        <DueCountBadge count={vocabTotal} />
      </div>
    </div>
  )
}

function HeroBadge() {
  const { selectedPath, currentChapter } = useLearningPath()

  const moduleCount = () => {
    const chapter = currentChapter()
    if (chapter === undefined) return undefined
    return chapter.modules.length
  }

  return (
    <div class="flex items-center gap-3 mb-2 font-excalifont">
      <div class="flex items-center gap-2 rounded-full border border-dynamic-accent/20 bg-dynamic-accent/10 px-3 py-1 text-xs text-dynamic-accent">
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

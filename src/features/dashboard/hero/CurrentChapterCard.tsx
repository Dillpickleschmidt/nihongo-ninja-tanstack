import { Show, For, createSignal, Suspense } from "solid-js"
import { ChevronRight } from "lucide-solid"
import { useSrs } from "@/features/srs/use-srs"
import { useDashboardPath } from "../context/dashboard-path"
import { LearningPathSelector } from "../LearningPathSelector"
import { ModuleLink } from "./ModuleLink"
import { DueCountBadge } from "./DueCountBadge"

export function CurrentChapterCard() {
  return (
    <div
      class="relative overflow-hidden min-h-34 animate-fade-up opacity-0"
      style={{ "animation-delay": "75ms" }}
    >
      <Suspense
        fallback={
          <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div class="flex-1">
              <div class="h-7 w-48 bg-white/10 rounded animate-pulse mb-2" />
              <div class="h-4 w-96 bg-white/5 rounded animate-pulse mb-4" />
              <div class="flex flex-wrap gap-2">
                <div class="h-8 w-32 bg-white/5 rounded-lg animate-pulse" />
                <div class="h-8 w-28 bg-white/5 rounded-lg animate-pulse" />
              </div>
            </div>
            <div class="flex items-center gap-4 lg:flex-col lg:items-end">
              <div class="h-10 w-16 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
        }
      >
        <CurrentChapterCardContent />
      </Suspense>
    </div>
  )
}

function CurrentChapterCardContent() {
  const [isSelectorOpen, setIsSelectorOpen] = createSignal(false)
  const { query, selectedPathId, currentChapter, switchPath } =
    useDashboardPath()
  const srs = useSrs()

  const currentModules = () => {
    const chapter = currentChapter()
    if (chapter === undefined) return undefined
    return [...chapter.specialModules, ...chapter.modules]
  }

  const nextModules = () => currentModules()?.slice(0, 3) ?? []

  return (
    <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div class="flex-1">
        <h2 class="text-xl font-semibold text-white mb-2 md:text-2xl">
          {currentChapter()?.title}
        </h2>
        <Show
          when={(currentChapter() as { description?: string })?.description}
        >
          <p class="text-sm text-white/50 mb-4 max-w-2xl line-clamp-2 md:text-base">
            {(currentChapter() as { description?: string })?.description}
          </p>
        </Show>

        {/* Quick module list */}
        <div class="flex flex-wrap gap-2 mb-4">
          <For each={nextModules()}>
            {(module, index) => (
              <ModuleLink
                linkTo={module.linkTo}
                title={module.module.title}
                isPrimary={index() === 0}
              />
            )}
          </For>
        </div>
      </div>

      {/* Progress indicator */}
      <div class="flex items-center gap-4 lg:flex-col lg:items-end">
        <DueCountBadge count={srs.dueCount} />
        <Show
          when={currentChapter() && query.data()?.paths && selectedPathId()}
        >
          <LearningPathSelector
            learningPaths={query.data()!.paths}
            activePathId={selectedPathId()!}
            isOpen={isSelectorOpen()}
            onOpenChange={setIsSelectorOpen}
            onPathSelect={switchPath}
            class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all hover:bg-white/10 hover:text-white cursor-pointer"
          >
            Change path
            <ChevronRight class="size-4" />
          </LearningPathSelector>
        </Show>
      </div>
    </div>
  )
}

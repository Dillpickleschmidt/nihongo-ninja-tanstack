import { For, Show, createSignal } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ModuleCard } from "./ModuleCard"
import { useLearningPath } from "../LearningPathContext"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import ViewingIsEnough from "@/features/homepage/shared/assets/viewing-is-enough.svg"
import ModuleDetailDialog from "./ModuleDetailDialog"
import { textbooks } from "@/data/textbooks"

interface LearningPathGridProps {
  lessonRefs?: (el: HTMLElement, index: number) => void
  blinkingLessonIndex?: number | null
}

export function LearningPathGrid(props: LearningPathGridProps) {
  const context = useLearningPath()
  const [selectedModuleId, setSelectedModuleId] = createSignal<string | null>(
    null,
  )
  const [selectedModuleName, setSelectedModuleName] = createSignal<
    string | null
  >(null)
  const [dialogOpen, setDialogOpen] = createSignal(false)

  // Check if the active learning path is a textbook (vs generated path)
  const isTextbookPath = () => {
    const activePath = context.settingsQuery.data?.["active-learning-path"]
    return activePath && activePath in textbooks
  }

  return (
    <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <For each={context.modules.data}>
          {(lesson, index) => (
            <>
              <div ref={(el) => props.lessonRefs?.(el, index())}>
                <Show
                  when={!isTextbookPath()}
                  fallback={
                    <Link to={lesson.linkTo}>
                      <ModuleCard
                        module={lesson}
                        isCompleted={context.isLessonCompleted(lesson.linkTo)}
                        shouldBlink={props.blinkingLessonIndex === index()}
                      />
                    </Link>
                  }
                >
                  <button
                    onClick={() => {
                      setSelectedModuleId(lesson.moduleId)
                      setSelectedModuleName(lesson.title)
                      setDialogOpen(true)
                    }}
                    class="w-full text-left transition-opacity hover:opacity-90"
                  >
                    <ModuleCard
                      module={lesson}
                      isCompleted={context.isLessonCompleted(lesson.linkTo)}
                      shouldBlink={props.blinkingLessonIndex === index()}
                    />
                  </button>
                </Show>
              </div>
              <Show
                when={
                  index() === 0 &&
                  context.settingsQuery.data!["active-learning-path"] ===
                    "getting_started"
                }
              >
                <SSRMediaQuery hideFrom="md">
                  <ViewingIsEnough class="pointer-events-none -mt-1 -mb-5 h-auto w-68 justify-self-end text-neutral-400" />
                </SSRMediaQuery>
              </Show>
            </>
          )}
        </For>
      </div>

      {/* Module detail dialog - only for generated paths */}
      <Show when={!isTextbookPath() && selectedModuleId()}>
        {(moduleId) => (
          <ModuleDetailDialog
            moduleId={moduleId()}
            moduleName={selectedModuleName() || ""}
            isOpen={dialogOpen()}
            onOpenChange={setDialogOpen}
          />
        )}
      </Show>
    </div>
  )
}

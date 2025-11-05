import { For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { CircleCheckBig } from "lucide-solid"
import { cn } from "@/utils"
import { getModuleIcon } from "@/features/learn-page/utils/loader-helpers"
import { useLearningPath } from "../LearningPathContext"

interface LearningPathListProps {
  lessonRefs?: (el: HTMLElement, index: number) => void
  blinkingLessonIndex?: number | null
}

export function LearningPathList(props: LearningPathListProps) {
  const context = useLearningPath()

  return (
    <>
      {" "}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
        <div class="-mr-4 grid grid-cols-1 gap-6 overflow-x-hidden overflow-y-auto pr-2.5 pb-8 lg:grid-cols-2 xl:grid-cols-3">
          <For each={context.lessons()}>
            {(lesson, index) => (
              <GridLessonItem
                lesson={lesson}
                index={index()}
                number={index() + 1}
                isCompleted={context.isLessonCompleted(lesson.href)}
                shouldBlink={props.blinkingLessonIndex === index()}
                lessonRef={(el) => props.lessonRefs?.(el, index())}
              />
            )}
          </For>
        </div>
      </div>
    </>
  )
}

// ============================================================================
// Grid Lesson Item Component
// ============================================================================

interface GridLessonItemProps {
  lesson: ReturnType<typeof useLearningPath>["lessons"][number]
  index: number
  number: number
  isCompleted: boolean
  shouldBlink: boolean
  lessonRef?: (el: HTMLElement) => void
}

function GridLessonItem(props: GridLessonItemProps) {
  const { moduleType, title, href, iconClasses } = props.lesson
  const ModuleIcon = getModuleIcon(moduleType)

  return (
    <div
      ref={props.lessonRef}
      class={cn(
        "ease-instant-hover-75 hover:scale-[98.5%]",
        props.shouldBlink && "animate-pulse",
      )}
    >
      <Link
        to={href}
        data-lessons-section
        class={cn(
          "group bg-card font-inter relative block h-12 w-full rounded-md text-sm whitespace-nowrap",
          "border-card-foreground/70 border backdrop-blur-sm",
          "bg-gradient-to-br dark:from-neutral-600/10 dark:to-gray-600/5",
          "ease-instant-hover-200",
          props.isCompleted &&
            "border-green-500/50 font-semibold text-green-500",
          "hover:bg-accent cursor-pointer",
        )}
      >
        <div
          class={cn(
            "scrollbar-hide absolute inset-0 flex items-center justify-between overflow-x-scroll overflow-y-hidden px-5",
            props.isCompleted && "bg-green-500/10",
          )}
        >
          <div class="flex items-center gap-3">
            <span
              class={cn(
                "text-primary",
                props.isCompleted && "font-bold text-green-500",
              )}
            >
              {props.number}.
            </span>
            <span
              class={cn(
                "text-primary dark:text-muted-foreground",
                props.isCompleted && "font-bold text-green-500",
              )}
            >
              {props.isCompleted && (
                <CircleCheckBig class="mr-2 inline-flex h-4 w-4 origin-center dark:text-green-500" />
              )}
              {title}
            </span>
          </div>

          <div class="sticky right-0 flex flex-shrink-0">
            <ModuleIcon size="20px" class={iconClasses} />
          </div>
        </div>
      </Link>
    </div>
  )
}

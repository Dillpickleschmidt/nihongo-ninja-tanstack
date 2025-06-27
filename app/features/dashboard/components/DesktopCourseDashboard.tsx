// features/dashboard/components/DesktopCourseDashboard.tsx
import { For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Clock, CheckCircle, Circle, ArrowRight, BookOpen } from "lucide-solid"
import type { StaticModule, DynamicModule } from "@/data/types"
import { cn } from "@/utils"

interface DesktopCourseDashboardProps {
  lessons: (StaticModule | DynamicModule)[]
  progressPercentage: number
}

export function DesktopCourseDashboard(props: DesktopCourseDashboardProps) {
  // Filter out vocabulary modules since they're now shown at the top
  const filteredLessons = () => {
    return props.lessons.filter((lesson) => {
      const type =
        "lesson_type" in lesson ? lesson.lesson_type : lesson.session_type
      return !["vocab", "vocab-list", "vocab-practice", "vocab-test"].includes(
        type,
      )
    })
  }

  // Group lessons by type for better organization
  const groupedLessons = () => {
    const groups = new Map<string, (StaticModule | DynamicModule)[]>()

    filteredLessons().forEach((lesson) => {
      const type =
        "lesson_type" in lesson ? lesson.lesson_type : lesson.session_type
      const category = getCategoryFromType(type)

      if (!groups.has(category)) {
        groups.set(category, [])
      }
      groups.get(category)!.push(lesson)
    })

    return Array.from(groups.entries())
  }

  return (
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold">Current Progress</h2>
          <p class="text-muted-foreground">Continue your learning journey</p>
        </div>
        <div class="text-right">
          <div class="text-primary text-2xl font-bold">
            {props.progressPercentage}%
          </div>
          <div class="text-muted-foreground text-sm">Complete</div>
        </div>
      </div>

      {/* Progress bar */}
      <div class="relative">
        <div class="bg-muted/30 h-2 w-full overflow-hidden rounded-full">
          <div
            class="from-primary to-primary/80 h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out"
            style={`width: ${props.progressPercentage}%`}
          />
        </div>
        <div class="bg-primary absolute -top-0.5 right-0 h-3 w-3 rounded-full shadow-lg"></div>
      </div>

      {/* Lesson groups */}
      <div class="space-y-8">
        <For each={groupedLessons()}>
          {([category, lessons]) => (
            <LessonCategory category={category} lessons={lessons} />
          )}
        </For>
      </div>
    </div>
  )
}

function LessonCategory(props: {
  category: string
  lessons: (StaticModule | DynamicModule)[]
}) {
  const getGradientForCategory = (category: string) => {
    switch (category) {
      case "Core Lessons":
        return "from-green-600/20 to-emerald-600/10"
      case "Practice":
        return "from-blue-600/20 to-cyan-600/10"
      case "Culture":
        return "from-orange-600/20 to-pink-600/10"
      case "Media":
        return "from-purple-600/20 to-indigo-600/10"
      case "Reading":
        return "from-teal-600/20 to-emerald-600/10"
      default:
        return "from-gray-600/20 to-slate-600/10"
    }
  }

  return (
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <h3 class="text-lg font-semibold">{props.category}</h3>
        <div class="from-muted h-px flex-1 bg-gradient-to-r to-transparent"></div>
        <span class="text-muted-foreground text-sm">
          {props.lessons.length} lessons
        </span>
      </div>

      <div class="grid grid-cols-1 gap-3">
        <For each={props.lessons}>
          {(lesson, index) => (
            <LessonRow
              lesson={lesson}
              isCompleted={index() < 2} // Mock completion status
              gradient={getGradientForCategory(props.category)}
            />
          )}
        </For>
      </div>
    </div>
  )
}

function LessonRow(props: {
  lesson: StaticModule | DynamicModule
  isCompleted: boolean
  gradient: string
}) {
  const linkTo =
    "link" in props.lesson && props.lesson.link
      ? props.lesson.link
      : `/practice/${props.lesson.id}`

  const displayTitle = props.lesson.title.startsWith("Practice ")
    ? props.lesson.title.substring(9)
    : props.lesson.title

  return (
    <Link to={linkTo} class="group block">
      <div
        class={cn(
          "flex items-center gap-4 rounded-xl border border-white/5 p-4 transition-all duration-200",
          "hover:scale-[1.01] hover:border-white/10 hover:shadow-lg",
          "bg-gradient-to-r backdrop-blur-sm",
          props.isCompleted ? "bg-green-600/5" : "bg-white/2",
        )}
        style={`background-image: linear-gradient(to right, ${props.gradient})`}
      >
        {/* Status icon */}
        <div class="flex-shrink-0">
          {props.isCompleted ? (
            <CheckCircle class="h-6 w-6 text-green-400" />
          ) : (
            <Circle class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors" />
          )}
        </div>

        {/* Content */}
        <div class="min-w-0 flex-1">
          <h4 class="group-hover:text-primary line-clamp-1 font-medium transition-colors">
            {displayTitle}
          </h4>
          <div class="mt-1 flex items-center gap-4">
            <span class="text-muted-foreground text-sm capitalize">
              {"lesson_type" in props.lesson
                ? props.lesson.lesson_type
                : props.lesson.session_type}
            </span>
            <div class="text-muted-foreground flex items-center gap-1 text-xs">
              <Clock class="h-3 w-3" />
              <span>~5 min</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight class="text-muted-foreground h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
    </Link>
  )
}

function getCategoryFromType(type: string): string {
  switch (type) {
    case "lesson":
    case "grammar-notes":
      return "Core Lessons"
    case "practice-sentence":
    case "worksheet":
    case "conjugation-practice":
    case "counter-practice":
    case "game":
      return "Practice"
    case "culture-note":
      return "Culture"
    case "video":
    case "audio":
      return "Media"
    case "reading":
      return "Reading"
    default:
      return "Other"
  }
}

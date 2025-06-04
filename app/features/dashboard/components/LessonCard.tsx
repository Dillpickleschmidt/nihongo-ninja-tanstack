// features/dashboard/components/LessonCard.tsx
import { Link } from "@tanstack/solid-router"
import { ChevronRight } from "lucide-solid"
import { SmoothCard } from "./SmoothCard"
import { cn } from "@/utils/util"
import type { StaticModule, DynamicModule } from "@/data/types"
import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  Gamepad,
  Coffee,
  Video,
  Volume2,
  Library,
  BookOpenText,
  BookPlus,
} from "lucide-solid"

interface LessonCardProps {
  lesson: StaticModule | DynamicModule
}

function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
}

function IconComponent(props: { module: StaticModule | DynamicModule }) {
  const { module } = props
  const iconSize = "22px"

  const iconClasses = {
    lesson: "text-green-600 dark:text-green-500",
    worksheet: "text-teal-500 dark:text-teal-400",
    "practice-sentence": "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
    "culture-note": "text-pink-500 dark:text-pink-400 saturate-[75%]",
    vocab: "text-sky-500 dark:text-sky-400 saturate-[75%]",
    "vocab-practice": "text-orange-600 dark:text-orange-500",
    "conjugation-practice": "text-teal-500 dark:text-teal-400",
    "counter-practice": "text-green-600 dark:text-green-500",
    game: "text-red-600 dark:text-red-500",
    video: "text-purple-500 dark:text-purple-400",
    audio: "text-purple-500 dark:text-purple-400",
    "grammar-notes": "text-red-600 dark:text-red-500 opacity-80",
    reading: "text-teal-500 dark:text-teal-400",
    "vocab-list": "text-sky-500 dark:text-sky-400 saturate-[75%]",
    "vocab-test": "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
  }

  const iconComponents = {
    lesson: BookOpen,
    worksheet: PencilLine,
    "practice-sentence": PencilLine,
    "culture-note": Coffee,
    vocab: BookPlus,
    "vocab-practice": GraduationCap,
    "conjugation-practice": GraduationCap,
    "counter-practice": GraduationCap,
    game: Gamepad,
    video: Video,
    audio: Volume2,
    "grammar-notes": ScrollText,
    reading: BookOpenText,
    "vocab-list": Library,
    "vocab-test": GraduationCap,
  }

  // Get the correct property based on module type
  const moduleType =
    "lesson_type" in module ? module.lesson_type : module.session_type
  const SelectedIcon = iconComponents[moduleType] || BookOpen
  const iconStyle =
    iconClasses[moduleType] || "text-gray-600 dark:text-gray-500"

  return <SelectedIcon size={iconSize} class={cn(iconStyle, "xl:h-6 xl:w-6")} />
}

function getCardBackground(module: StaticModule | DynamicModule) {
  const moduleType =
    "lesson_type" in module ? module.lesson_type : module.session_type

  const lightBackgrounds = {
    lesson: "bg-green-50/70",
    worksheet: "bg-teal-50/70",
    "practice-sentence": "bg-yellow-50/70",
    "culture-note": "bg-pink-50/70",
    vocab: "bg-sky-50/70",
    "vocab-practice": "bg-orange-50/70",
    "conjugation-practice": "bg-teal-50/70",
    "counter-practice": "bg-green-50/70",
    game: "bg-red-50/70",
    video: "bg-purple-50/70",
    audio: "bg-purple-50/70",
    "grammar-notes": "bg-red-50/70",
    reading: "bg-teal-50/70",
    "vocab-list": "bg-sky-50/70",
    "vocab-test": "bg-yellow-50/70",
  }

  return lightBackgrounds[moduleType] || "bg-card"
}

function getCardGradient(module: StaticModule | DynamicModule) {
  const moduleType =
    "lesson_type" in module ? module.lesson_type : module.session_type

  const gradientClasses = {
    lesson: "bg-gradient-to-br from-green-500/10 via-card to-green-600/5",
    worksheet: "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "practice-sentence":
      "bg-gradient-to-br from-yellow-500/10 via-card to-yellow-600/5",
    "culture-note": "bg-gradient-to-br from-pink-400/10 via-card to-pink-500/5",
    vocab: "bg-gradient-to-br from-sky-400/10 via-card to-sky-500/5",
    "vocab-practice":
      "bg-gradient-to-br from-orange-500/10 via-card to-orange-600/5",
    "conjugation-practice":
      "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "counter-practice":
      "bg-gradient-to-br from-green-500/10 via-card to-green-600/5",
    game: "bg-gradient-to-br from-red-500/10 via-card to-red-600/5",
    video: "bg-gradient-to-br from-purple-400/10 via-card to-purple-500/5",
    audio: "bg-gradient-to-br from-purple-400/10 via-card to-purple-500/5",
    "grammar-notes": "bg-gradient-to-br from-red-500/10 via-card to-red-600/5",
    reading: "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "vocab-list": "bg-gradient-to-br from-sky-400/10 via-card to-sky-500/5",
    "vocab-test":
      "bg-gradient-to-br from-yellow-500/10 via-card to-yellow-600/5",
  }

  return gradientClasses[moduleType] || "bg-card"
}

export function LessonCard(props: LessonCardProps) {
  const { lesson } = props

  // Trim "Practice " prefix from title if it exists
  const displayTitle = lesson.title.startsWith("Practice ")
    ? lesson.title.substring(9)
    : lesson.title

  // Determine link destination
  const linkTo =
    "link" in lesson && lesson.link
      ? lesson.link
      : `/learn/practice?id=${lesson.id}`

  return (
    <Link to={linkTo} class="transition-transform hover:scale-[98%]">
      <SmoothCard
        width={120}
        height={155}
        scales={{ xl: 1.1 }}
        class={cn(
          "relative flex flex-col items-center justify-between px-2 py-3 text-center xl:px-3 xl:py-4 dark:bg-transparent",
          getCardBackground(lesson),
        )}
      >
        <div
          class={cn(
            "absolute inset-0 -z-1 hidden dark:block",
            getCardGradient(lesson),
          )}
        />
        <div class="mx-auto flex items-center justify-center">
          <IconComponent module={lesson} />
        </div>
        <h3 class="font-inter mb-1 text-sm leading-[1.15rem] xl:text-[15px] xl:leading-5">
          {truncateText(displayTitle, 25)}
        </h3>
        <div class="bg-muted mb-1 rounded-full p-2 xl:p-[9px]">
          <ChevronRight class="h-4 w-4 xl:h-[17px] xl:w-[17px]" />
        </div>
      </SmoothCard>
    </Link>
  )
}

// features/dashboard/components/LessonCard.tsx
import { Link } from "@tanstack/solid-router"
import { ChevronRight } from "lucide-solid"
import { SmoothCard } from "./SmoothCard"
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
    lesson: "text-green-500",
    worksheet: "text-teal-400",
    "practice-sentence": "text-yellow-500 saturate-[75%]",
    "culture-note": "text-pink-400 saturate-[75%]",
    vocab: "text-sky-400 saturate-[75%]",
    "vocab-practice": "text-orange-500",
    "conjugation-practice": "text-teal-400",
    "counter-practice": "text-green-500",
    game: "text-red-500",
    video: "text-purple-400",
    audio: "text-purple-400",
    "grammar-notes": "text-red-500 opacity-80",
    reading: "text-teal-400",
    "vocab-list": "text-sky-400 saturate-[75%]",
    "vocab-test": "text-yellow-500 saturate-[75%]",
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
  const iconStyle = iconClasses[moduleType] || "text-gray-500"

  return <SelectedIcon size={iconSize} class={iconStyle} />
}

export function LessonCard(props: LessonCardProps) {
  const { lesson } = props

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
        class="flex flex-col items-center justify-between px-2 py-3 text-center"
      >
        <div class="mx-auto flex items-center justify-center rounded-lg">
          <IconComponent module={lesson} />
        </div>

        <h3 class="font-inter mb-1 text-sm leading-[1.15rem]">
          {truncateText(lesson.title, 25)}
        </h3>

        <div class="bg-muted mb-1 rounded-full p-2">
          <ChevronRight class="h-4 w-4" />
        </div>
      </SmoothCard>
    </Link>
  )
}

// features/dashboard/components/LessonCard.tsx
import { Link } from "@tanstack/solid-router"
import { ChevronRight } from "lucide-solid"
import { SmoothCard } from "./SmoothCard"
import type { StaticModule, DynamicModule } from "@/data/types"

interface LessonCardProps {
  lesson: StaticModule | DynamicModule
}

function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
}

export function LessonCard(props: LessonCardProps) {
  const { lesson } = props

  // Determine link destination
  const linkTo =
    "link" in lesson && lesson.link
      ? lesson.link
      : `/learn/practice?id=${lesson.id}`

  return (
    <Link to={linkTo}>
      <SmoothCard
        width={120}
        height={155}
        class="flex flex-col items-center justify-between px-1 py-3 text-center"
      >
        <div class="bg-muted mx-auto mb-2 flex h-6 w-6 items-center justify-center rounded-lg">
          <span class="text-xl">📚</span>
        </div>
        <h3 class="font-inter mb-1 text-sm">
          {truncateText(lesson.title || lesson.name, 25)}
        </h3>
        <div class="bg-muted mb-1 rounded-full p-2">
          <ChevronRight class="h-4 w-4" />
        </div>
      </SmoothCard>
    </Link>
  )
}

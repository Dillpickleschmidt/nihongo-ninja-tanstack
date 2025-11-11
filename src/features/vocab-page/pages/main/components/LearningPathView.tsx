import { For, Show } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { VocabBreadcrumb } from "./VocabBreadcrumb"
import { FolderCard } from "../../../shared/components/FolderCard"
import type { LearningPath } from "@/data/types"

interface LearningPathViewProps {
  learningPath: LearningPath
}

/**
 * View component for displaying a learning path's chapters
 * Shows all chapters in a grid layout for navigation
 */
export function LearningPathView(props: LearningPathViewProps) {
  const navigate = useNavigate()

  const handleChapterClick = (chapterSlug: string) => {
    navigate({ to: `/vocab/${props.learningPath.id}/${chapterSlug}` })
  }

  const breadcrumbs = [
    { label: "Vocabulary", href: "/vocab" },
    { label: props.learningPath.name, href: `/vocab/${props.learningPath.id}` },
  ]

  return (
    <div class="space-y-6">
      {/* Breadcrumb Navigation */}
      <VocabBreadcrumb items={breadcrumbs} />

      {/* Learning Path Title */}
      <div>
        <h1 class="text-foreground text-2xl font-bold">
          {props.learningPath.name}
        </h1>
        <Show when={props.learningPath.description}>
          <p class="text-muted-foreground mt-2 text-sm">
            {props.learningPath.description}
          </p>
        </Show>
      </div>

      {/* Chapters Grid */}
      <Show
        when={
          props.learningPath.chapters && props.learningPath.chapters.length > 0
        }
        fallback={
          <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
            <p class="text-muted-foreground text-sm">No chapters available</p>
          </div>
        }
      >
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <For each={props.learningPath.chapters}>
            {(chapter) => (
              <FolderCard
                title={chapter.title}
                subtitle="Chapter"
                onClick={() => handleChapterClick(chapter.slug)}
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}

import { For } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { ViewContainer } from "../../../shared/components/ViewContainer"
import { GridContainer } from "../../../shared/components/GridContainer"
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

  const chapters = () => props.learningPath.chapters || []

  return (
    <ViewContainer
      breadcrumbs={[
        { label: "Vocabulary", href: "/vocab" },
        { label: props.learningPath.name, href: `/vocab/${props.learningPath.id}` }
      ]}
      title={props.learningPath.name}
      description={props.learningPath.description}
    >
      <GridContainer items={chapters} emptyMessage="No chapters available">
        <For each={chapters()}>
          {(chapter) => (
            <FolderCard
              title={chapter.title}
              subtitle="Chapter"
              onClick={() => handleChapterClick(chapter.slug)}
            />
          )}
        </For>
      </GridContainer>
    </ViewContainer>
  )
}

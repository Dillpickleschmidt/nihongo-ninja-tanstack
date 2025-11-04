interface LearningPathCompactProps {
  lessonRefs?: (el: HTMLElement, index: number) => void
  blinkingLessonIndex?: number | null
}

/**
 * WIP: Compact view for learning path
 * TODO: Implement compact/list view of learning path lessons
 */
export function LearningPathCompact(props: LearningPathCompactProps) {
  return (
    <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
      <div class="border-muted-foreground/30 rounded-lg border border-dashed p-8 text-center">
        <p class="text-muted-foreground text-sm">Compact view - coming soon</p>
      </div>
    </div>
  )
}

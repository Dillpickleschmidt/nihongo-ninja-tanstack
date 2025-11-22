// src/features/import-page/components/StatisticsSummary.tsx
import { Show, createMemo } from "solid-js"
import { BookOpen, Star, GraduationCap } from "lucide-solid"
import type { ImportCategory } from "../data/jlpt-data"
import type { ImportState } from "../types"

interface StatisticsSummaryProps {
  itemStates: ImportState
  categories: ImportCategory[]
  showLearning?: boolean // When true, shows "Learning" count (automatic mode)
}

interface CategoryStats {
  title: string
  total: number
  learning: number
  decent: number
  mastered: number
}

export function StatisticsSummary(props: StatisticsSummaryProps) {
  // Compute statistics for each category
  const categoryStats = createMemo(() => {
    return props.categories.map((category): CategoryStats => {
      // Flatten category items from all subcategories
      const items = category.subcategories.flatMap((sub) => sub.items)
      const itemIds = items.map((i) => i.id)

      // Calculate statistics
      const learning = itemIds.filter((id) => props.itemStates[id] === "learning").length
      const decent = itemIds.filter((id) => props.itemStates[id] === "decent").length
      const mastered = itemIds.filter((id) => props.itemStates[id] === "mastered").length

      return {
        title: category.title,
        total: learning + decent + mastered,
        learning,
        decent,
        mastered,
      }
    })
  })

  return (
    <div class="space-y-6">
      {categoryStats().map((stats) => (
        <div class="border-border bg-card/50 rounded-lg border px-5 py-4">
          {/* Category Header */}
          <div class="text-muted-foreground mb-3 text-xs font-bold tracking-wider uppercase">
            {stats.title} Summary
          </div>

          {/* Stats Grid */}
          <div class="space-y-2 text-sm">
            {/* Total Items */}
            <div class="mb-2 flex justify-between border-b border-white/5 pb-2">
              <span class="text-muted-foreground">Total Items</span>
              <span class="text-foreground font-mono font-medium">
                {stats.total}
              </span>
            </div>

            {/* Learning (only in automatic mode) */}
            <Show when={props.showLearning}>
              <div class="flex justify-between">
                <span class="text-muted-foreground flex items-center gap-2">
                  <GraduationCap class="size-3.5 text-green-500" /> Learning
                </span>
                <span class="text-foreground font-mono font-medium">
                  {stats.learning}
                </span>
              </div>
            </Show>

            {/* Decent */}
            <div class="flex justify-between">
              <span class="text-muted-foreground flex items-center gap-2">
                <BookOpen class="size-3.5 text-blue-500" /> Decent
              </span>
              <span class="text-foreground font-mono font-medium">
                {stats.decent}
              </span>
            </div>

            {/* Mastered */}
            <div class="flex justify-between">
              <span class="text-muted-foreground flex items-center gap-2">
                <Star class="size-3.5 text-yellow-500" /> Mastered
              </span>
              <span class="text-foreground font-mono font-medium">
                {stats.mastered}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

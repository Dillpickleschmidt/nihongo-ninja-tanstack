// src/features/import-page/components/StatisticsSummary.tsx
import { Show, createSignal, createMemo } from "solid-js"
import { Await } from "@tanstack/solid-router"
import { BookOpen, Star, GraduationCap } from "lucide-solid"
import type { ImportState } from "../types"

interface ItemWithId {
  id: string
}

interface StatisticsSummaryProps {
  itemStates: ImportState
  itemsPromise: Promise<ItemWithId[]>
  title: string
  showLearning: boolean // When true, shows "Learning" count (automatic mode)
}

export function StatisticsSummary(props: StatisticsSummaryProps) {
  const [itemIds, setItemIds] = createSignal<string[]>([])

  const stats = createMemo(() => {
    const ids = itemIds()
    const learning = ids.filter(
      (id) => props.itemStates[id] === "learning",
    ).length
    const decent = ids.filter((id) => props.itemStates[id] === "decent").length
    const mastered = ids.filter(
      (id) => props.itemStates[id] === "mastered",
    ).length
    const total = learning + decent + mastered
    return { learning, decent, mastered, total }
  })

  return (
    <>
      <Await
        promise={props.itemsPromise}
        fallback={<div class="text-muted-foreground text-sm">Loading...</div>}
      >
        {(items) => {
          setItemIds(items.map((item) => item.id))
          return null
        }}
      </Await>

      <div class="border-border bg-card/50 rounded-lg border px-5 py-4">
        {/* Category Header */}
        <div class="text-muted-foreground mb-3 text-xs font-bold tracking-wider uppercase">
          {props.title} Summary
        </div>

        {/* Stats Grid */}
        <div class="space-y-2 text-sm">
          {/* Total Items */}
          <div class="mb-2 flex justify-between border-b border-white/5 pb-2">
            <span class="text-muted-foreground">Total Items</span>
            <span class="text-foreground font-mono font-medium">
              {stats().total}
            </span>
          </div>

          {/* Learning (only in automatic mode) */}
          <Show when={props.showLearning}>
            <div class="flex justify-between">
              <span class="text-muted-foreground flex items-center gap-2">
                <GraduationCap class="size-3.5 text-green-500" /> Learning
              </span>
              <span class="text-foreground font-mono font-medium">
                {stats().learning}
              </span>
            </div>
          </Show>

          {/* Decent */}
          <div class="flex justify-between">
            <span class="text-muted-foreground flex items-center gap-2">
              <BookOpen class="size-3.5 text-blue-500" /> Decent
            </span>
            <span class="text-foreground font-mono font-medium">
              {stats().decent}
            </span>
          </div>

          {/* Mastered */}
          <div class="flex justify-between">
            <span class="text-muted-foreground flex items-center gap-2">
              <Star class="size-3.5 text-yellow-500" /> Mastered
            </span>
            <span class="text-foreground font-mono font-medium">
              {stats().mastered}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

// src/features/import-page/components/FloatingActionBar.tsx
import { createSignal, Show } from "solid-js"
import { Portal } from "solid-js/web"
import { X, BookOpen, Star, HelpCircle, MousePointerClick, GraduationCap } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/utils"
import type { ItemStatus } from "../types"

interface FloatingActionBarProps {
  selectedCount: number
  onApply: (status: ItemStatus) => void
  onClearSelection: () => void
  mode?: "manual" | "automatic"
}

export function FloatingActionBar(props: FloatingActionBarProps) {
  const [decentOpen, setDecentOpen] = createSignal(false)
  const [masteredOpen, setMasteredOpen] = createSignal(false)

  const handleApply = (status: ItemStatus) => {
    setDecentOpen(false)
    setMasteredOpen(false)
    props.onApply(status)
  }

  const handleClearSelection = () => {
    setDecentOpen(false)
    setMasteredOpen(false)
    props.onClearSelection()
  }

  return (
    <Portal>
      <div
        class={cn(
          "fixed bottom-6 left-1/2 z-50 flex w-full max-w-4xl -translate-x-1/2 flex-col gap-2 px-4 transition-all duration-300 ease-in-out md:bottom-8",
          props.selectedCount > 0
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0",
        )}
      >
        <div class="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-neutral-950/80 p-2 shadow-2xl shadow-black/50 backdrop-blur-md">
          {/* Counter */}
          <div class="flex items-center gap-3 pl-3">
            <div class="flex size-8 items-center justify-center rounded-full bg-white/10 font-mono text-sm font-bold text-white">
              {props.selectedCount}
            </div>
            <span class="text-muted-foreground hidden text-sm font-medium sm:inline-block">
              Selected
            </span>
            <Button
              variant="ghost"
              size="icon"
              class="text-muted-foreground hover:text-foreground size-8 md:hidden"
              onClick={handleClearSelection}
            >
              <X class="size-4" />
            </Button>
          </div>

          {/* Actions Group */}
          <div class="flex items-center">
            {/* AUTOMATIC MODE: Learning Button */}
            <Show when={props.mode === "automatic"}>
              <Button
                variant="secondary"
                class="h-9 gap-2 border border-green-500/20 bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:text-green-300"
                onClick={() => handleApply("learning")}
              >
                <GraduationCap class="hidden size-4 sm:inline" />
                <span>Learning</span>
              </Button>
            </Show>

            {/* 1. Decent Button */}
            <Button
              variant="secondary"
              class={cn(
                "h-9 gap-2 border border-blue-500/20 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300",
                props.mode === "automatic" ? "ml-2" : "",
              )}
              onClick={() => handleApply("decent")}
            >
              <BookOpen class="hidden size-4 sm:inline" />
              <span>Decent</span>
              <Tooltip placement="top" open={decentOpen()}>
                <TooltipTrigger
                  as="div"
                  class="ml-1 cursor-help opacity-50 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    setDecentOpen(!decentOpen())
                  }}
                  onMouseEnter={() => setDecentOpen(true)}
                  onMouseLeave={() => setDecentOpen(false)}
                >
                  <HelpCircle class="size-3.5" />
                </TooltipTrigger>
                <TooltipContent class="max-w-xs">
                  <p>
                    I've practiced this before but wouldn't mind occasional
                    review.
                  </p>
                </TooltipContent>
              </Tooltip>
            </Button>

            {/* 2. Mastered Button */}
            <Button
              variant="secondary"
              class="ml-2 h-9 gap-2 border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 hover:text-yellow-300"
              onClick={() => handleApply("mastered")}
            >
              <Star class="hidden size-4 fill-current sm:inline" />
              <span>Mastered</span>
              <Tooltip placement="top" open={masteredOpen()}>
                <TooltipTrigger
                  as="div"
                  class="ml-1 cursor-help opacity-50 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    setMasteredOpen(!masteredOpen())
                  }}
                  onMouseEnter={() => setMasteredOpen(true)}
                  onMouseLeave={() => setMasteredOpen(false)}
                >
                  <HelpCircle class="size-3.5" />
                </TooltipTrigger>
                <TooltipContent class="max-w-xs">
                  <p>
                    I've got a very good grip on this and will almost never need
                    to review it.
                  </p>
                </TooltipContent>
              </Tooltip>
            </Button>

            {/* MANUAL MODE: Clear Status Button */}
            <Show when={props.mode !== "automatic"}>
              <>
                <div class="mx-2 h-6 w-px bg-white/10" />
                <Tooltip placement="top">
                  <TooltipTrigger>
                    <Button
                      variant="ghost"
                      size="icon"
                      class="text-muted-foreground hover:bg-destructive/10 hover:text-destructive size-9"
                      onClick={() => handleApply(null)}
                    >
                      <MousePointerClick class="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Clear status</TooltipContent>
                </Tooltip>
              </>
            </Show>

            {/* Deselect / Close Button */}
            <div class="mx-2 h-6 w-px bg-white/10" />
            <Tooltip placement="top">
              <TooltipTrigger class="hidden md:block">
                <Button
                  variant="ghost"
                  size="icon"
                  class="size-9"
                  onClick={handleClearSelection}
                >
                  <X class="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Deselect all</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </Portal>
  )
}

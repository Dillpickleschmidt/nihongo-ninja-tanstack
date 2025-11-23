// src/features/import-page/components/FloatingActionBar.tsx
import { Show } from "solid-js"
import { Portal } from "solid-js/web"
import { X, MousePointerClick } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/utils"
import type { ItemStatus } from "../types"
import { StatusButton } from "./StatusButton"

interface FloatingActionBarProps {
  selectedCount: number
  onApply: (status: ItemStatus) => void
  onClearSelection: () => void
  mode: "manual" | "automatic"
}

export function FloatingActionBar(props: FloatingActionBarProps) {
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
              onClick={() => props.onClearSelection()}
            >
              <X class="size-4" />
            </Button>
          </div>

          {/* Actions Group */}
          <div class="flex items-center">
            {/* AUTOMATIC MODE: Learning Button */}
            <Show when={props.mode === "automatic"}>
              <StatusButton
                status="learning"
                onClick={() => props.onApply("learning")}
              />
            </Show>

            {/* Decent Button */}
            <StatusButton
              status="decent"
              onClick={() => props.onApply("decent")}
              class={props.mode === "automatic" ? "ml-2" : ""}
            />

            {/* Mastered Button */}
            <StatusButton
              status="mastered"
              onClick={() => props.onApply("mastered")}
              class="ml-2"
            />

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
                      onClick={() => props.onApply(null)}
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
                  onClick={() => props.onClearSelection()}
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

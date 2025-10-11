// features/learn-page-v2/components/shared/DeckSelectionPopover.tsx
import { createSignal, For, Show, JSX, createEffect } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { Deck, TextbookIDEnum } from "@/data/types"
import { cn } from "@/utils"
import { getMinifiedTextbookEntries } from "@/data/utils/core"

interface DeckSelectionPopoverProps {
  children: JSX.Element
  activeTextbookId: TextbookIDEnum
  activeDeck: Deck
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  popoverWidth?: string
}

export function DeckSelectionPopover(props: DeckSelectionPopoverProps) {
  const [selectedTextbookId, setSelectedTextbookId] =
    createSignal<TextbookIDEnum | null>(null)

  let activeTextbookRef: HTMLButtonElement | undefined

  const textbookEntries = getMinifiedTextbookEntries()

  const displayedTextbookId = () =>
    selectedTextbookId() || props.activeTextbookId

  // Focus active textbook when popover opens
  createEffect(() => {
    if (props.isOpen) {
      console.log("Popover opened, activeTextbookRef:", activeTextbookRef)
      activeTextbookRef?.focus()
    }
  })

  const handleTextbookSelect = (textbookId: TextbookIDEnum) => {
    setSelectedTextbookId(textbookId)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedTextbookId(null)
    }
    props.onOpenChange(open)
  }

  return (
    <Popover open={props.isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger>{props.children}</PopoverTrigger>
      <PopoverContent
        class={cn(
          "border-card-foreground bg-neutral-950/70 p-2 backdrop-blur-2xl",
          props.popoverWidth || "w-[480px]",
        )}
      >
        <div class="grid grid-cols-[1fr_2fr]">
          <div class="border-primary/10 border-r p-1">
            <For each={textbookEntries}>
              {([textbookId, textbook]) => (
                <button
                  ref={(el) => {
                    if (props.activeTextbookId === textbookId) {
                      activeTextbookRef = el
                    }
                  }}
                  onClick={() => handleTextbookSelect(textbookId)}
                  class={cn(
                    "hover:bg-primary/15 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-medium",
                    displayedTextbookId() === textbookId && "bg-primary/10",
                  )}
                >
                  <span>{textbook.short_name || textbook.name}</span>
                </button>
              )}
            </For>
          </div>
          <div class="p-1">
            <For each={textbookEntries}>
              {([textbookId, textbook]) => (
                <Show when={displayedTextbookId() === textbookId}>
                  <For each={textbook.chapters}>
                    {(deck) => (
                      <Link
                        to="/learn/$textbookId/$chapterSlug"
                        params={{ textbookId, chapterSlug: deck.slug }}
                        onClick={() => props.onOpenChange(false)}
                        class={cn(
                          "hover:bg-card-foreground/40 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-normal",
                          props.activeDeck.id === deck.id &&
                            "bg-primary/10 hover:bg-primary/15 font-semibold",
                        )}
                      >
                        <span>{deck.title}</span>
                        <Show when={props.activeDeck.id === deck.id}>
                          <svg
                            class="size-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M5 12l5 5l10 -10" />
                          </svg>
                        </Show>
                      </Link>
                    )}
                  </For>
                </Show>
              )}
            </For>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

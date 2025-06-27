// features/dashboard/components/DesktopDashboardHeader.tsx
import {
  Link,
  useNavigate,
  Await,
  type DeferredPromise,
} from "@tanstack/solid-router"
import { createSignal, For, Show } from "solid-js"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import type { Deck, DeckSource } from "@/data/types"
import { cn } from "@/utils"

interface DesktopDashboardHeaderProps {
  currentDeck: Deck
  deckSources: DeckSource[]
  dueFSRSCardsPromise: DeferredPromise<FSRSCardData[] | null>
}

export function DesktopDashboardHeader(props: DesktopDashboardHeaderProps) {
  const navigate = useNavigate({ from: "/dashboard" })
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)

  const findCurrentSource = () =>
    props.deckSources.find((source) =>
      source.decks.some((d) => d.id === props.currentDeck.id),
    )

  const [selectedSource, setSelectedSource] = createSignal<
    DeckSource | undefined
  >(findCurrentSource())

  const handleDeckChange = (source: DeckSource, deck: Deck) => {
    const searchParams =
      source.type === "textbook"
        ? { textbook: source.id, deck: deck.slug }
        : { user: source.id, deck: deck.slug }

    navigate({ search: searchParams })
    setIsPopoverOpen(false)
  }

  return (
    <div class="pointer-events-none absolute top-0 right-0 left-0 z-10">
      <div class="px-8 pt-8 pb-4">
        {/* Top navigation bar */}
        <div class="flex items-center justify-between">
          <Link to="/" class="pointer-events-auto flex items-center gap-3">
            <Avatar class="h-11 w-11">
              <AvatarImage src="/icons/ninja.png" class="h-full w-full" />
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <span class="text-foreground/90 text-lg font-semibold">
              Dashboard
            </span>
          </Link>

          <div class="pointer-events-auto flex items-center gap-6">
            {/* Quick stats - only completed */}
            <div class="text-center">
              <div class="text-xl font-bold text-green-400">12</div>
              <div class="text-muted-foreground text-xs">Completed</div>
            </div>

            {/* Reviews due - no box */}
            {!props.dueFSRSCardsPromise ? (
              <Link to="/auth" class="text-sm italic">
                Login to see reviews
              </Link>
            ) : (
              <Await
                promise={props.dueFSRSCardsPromise}
                fallback={
                  <div class="text-center">
                    <div class="text-lg font-bold text-gray-400">...</div>
                    <div class="text-muted-foreground text-xs">Loading...</div>
                  </div>
                }
              >
                {(dueCards) => (
                  <div class="text-center">
                    <div
                      class={cn(
                        "text-lg font-bold",
                        dueCards && dueCards.length > 0
                          ? "text-amber-400"
                          : "text-green-400",
                      )}
                    >
                      {dueCards?.length || 0}
                    </div>
                    <div class="text-muted-foreground text-xs">
                      {dueCards?.length === 0
                        ? "No reviews due"
                        : `Review${dueCards?.length === 1 ? "" : "s"} Due`}
                    </div>
                  </div>
                )}
              </Await>
            )}
          </div>
        </div>

        {/* Chapter title - positioned in bottom left */}
        <div class="pointer-events-auto mt-6">
          <div class="text-muted-foreground mb-2 text-sm tracking-wider uppercase">
            Current Chapter
          </div>
          <Popover open={isPopoverOpen()} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger class="group flex items-center gap-3 text-left">
              <h1 class="text-foreground group-hover:text-foreground/80 text-3xl font-bold transition-colors">
                {props.currentDeck.title}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-5 opacity-60 transition-opacity group-hover:opacity-80"
              >
                <path d="M8 9l4 -4l4 4" />
                <path d="M16 15l-4 4l-4 -4" />
              </svg>
            </PopoverTrigger>
            <PopoverContent class="border-card-foreground w-[520px] bg-neutral-950/80 p-2 backdrop-blur-2xl">
              <div class="grid grid-cols-[1fr_2fr]">
                <div class="border-primary/10 border-r p-1">
                  <For each={props.deckSources}>
                    {(source) => (
                      <button
                        onClick={() => setSelectedSource(source)}
                        class={cn(
                          "hover:bg-primary/15 w-full rounded-md p-2 text-left text-sm font-medium",
                          selectedSource()?.id === source.id && "bg-primary/10",
                        )}
                      >
                        {source.name}
                      </button>
                    )}
                  </For>
                </div>
                <div class="p-1">
                  <Show when={selectedSource()} keyed>
                    {(source) => (
                      <For each={source.decks}>
                        {(deck) => (
                          <button
                            onClick={() => handleDeckChange(source, deck)}
                            class={cn(
                              "hover:bg-card-foreground/40 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-normal",
                              props.currentDeck.id === deck.id &&
                                "bg-primary/10 hover:bg-primary/15 font-semibold",
                            )}
                          >
                            <span>{deck.title}</span>
                            <Show when={props.currentDeck.id === deck.id}>
                              <svg
                                class="size-4"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                            </Show>
                          </button>
                        )}
                      </For>
                    )}
                  </Show>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

// features/dashboard/components/layout/DashboardHeader.tsx
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

interface DashboardHeaderProps {
  currentDeck: Deck
  deckSources: DeckSource[]
  dueFSRSCardsPromise: DeferredPromise<FSRSCardData[] | null>
  variant: "mobile" | "desktop"
}

export function DashboardHeader(props: DashboardHeaderProps) {
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

  if (props.variant === "mobile") {
    return (
      <div class="grid grid-cols-3 pt-10 text-xl font-bold xl:pt-12 xl:text-2xl">
        <Link to="/" class="-mt-2 pl-8 xl:-mt-3 xl:pl-10">
          <Avatar class="h-11 w-11 xl:h-12 xl:w-12">
            <AvatarImage src="/icons/ninja.png" class="h-full w-full" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
        </Link>

        <div class="flex justify-center">
          <Popover open={isPopoverOpen()} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger class="hover:bg-card-foreground/40 -mt-0.5 flex min-w-[200px] items-center justify-center space-x-2 rounded-md border-none px-3 py-2 text-center text-lg font-semibold hover:cursor-pointer md:text-xl xl:-mt-1 xl:text-2xl">
              <span>{props.currentDeck.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-4 opacity-50"
              >
                <path d="M8 9l4 -4l4 4" />
                <path d="M16 15l-4 4l-4 -4" />
              </svg>
            </PopoverTrigger>
            <PopoverContent class="border-card-foreground w-[480px] bg-neutral-950/70 p-2 backdrop-blur-2xl">
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
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="size-4"
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

        <div class="flex justify-end pr-6 xl:pr-8">
          <div class="min-w-20 text-center xl:min-w-24">
            {!props.dueFSRSCardsPromise ? (
              <Link to="/auth" class="text-sm italic xl:text-base">
                Login
              </Link>
            ) : (
              <Await
                promise={props.dueFSRSCardsPromise}
                fallback={
                  <>
                    <div class="text-gray-400">
                      <span class="font-inter text-base font-bold xl:text-lg">
                        ...
                      </span>
                    </div>
                    <div class="text-muted-foreground text-xs xl:text-sm">
                      Loading...
                    </div>
                  </>
                }
              >
                {(dueCards) => (
                  <>
                    <div
                      class={
                        dueCards && dueCards.length > 0
                          ? "text-amber-400"
                          : "text-green-500"
                      }
                    >
                      <span class="font-inter text-base font-bold xl:text-lg">
                        {dueCards?.length || 0}
                      </span>
                    </div>
                    <div class="text-muted-foreground text-xs xl:text-sm">
                      {dueCards?.length === 0
                        ? "No reviews"
                        : `${dueCards?.length === 1 ? "Review" : "Reviews"} Due`}
                    </div>
                  </>
                )}
              </Await>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Desktop variant (without chapter selector)
  return (
    <div class="px-8 pt-8">
      <div class="flex items-center justify-between">
        <Link to="/" class="flex items-center gap-3">
          <Avatar class="h-11 w-11">
            <AvatarImage src="/icons/ninja.png" class="h-full w-full" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <span class="text-foreground/90 text-lg font-semibold">
            Dashboard
          </span>
        </Link>

        <div class="flex items-center gap-6">
          <div class="text-center">
            <div class="text-xl font-bold text-green-400">12</div>
            <div class="text-muted-foreground text-xs">Completed</div>
          </div>

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
    </div>
  )
}

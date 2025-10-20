// Nav.tsx
import { createSignal, Show } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { Button } from "@/components/ui/button"
import { useLocation, useRouteContext } from "@tanstack/solid-router"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { DeckSelectionPopover } from "@/features/learn-page/components/shared/DeckSelectionPopover"
import { getDeckBySlug, getMinifiedTextbookEntries } from "@/data/utils/core"
import { Route as RootRoute } from "@/routes/__root"
import type { TextbookIDEnum } from "@/data/types"

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const context = useRouteContext({ from: RootRoute.id })
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  const activeTextbookId = () =>
    settingsQuery.data?.["active-textbook"] as TextbookIDEnum | undefined
  const activeChapterSlug = () => settingsQuery.data?.["active-deck"]

  const activeDeck = () => {
    const textbookId = activeTextbookId()
    const chapterSlug = activeChapterSlug()
    if (!textbookId || !chapterSlug) return null
    return getDeckBySlug(textbookId, chapterSlug)
  }

  const handleDeckSelect = (textbookId: TextbookIDEnum, deckSlug: string) => {
    if (textbookId === "getting_started") {
      // For getting_started, navigate to homepage "/"
      // unless we're already there
      if (location().pathname !== "/") {
        navigate({ to: "/" })
      }
      return
    }
    // Navigate to appropriate route for other textbooks
    const deck = getDeckBySlug(textbookId, deckSlug)
    if (deck) {
      navigate({
        to: "/$textbookId/$chapterSlug",
        params: { textbookId, chapterSlug: deckSlug },
      })
    }
  }

  const active = (path: string) =>
    location().pathname === path
      ? "text-primary dark:text-orange-200"
      : "text-foreground/80 hover:text-foreground dark:text-orange-100/70 hover:dark:text-orange-100"

  return (
    <nav class="sticky top-0 z-50 flex h-16 w-full items-center justify-between overflow-hidden px-6 py-2">
      <Show
        when={
          activeTextbookId() &&
          activeDeck() &&
          activeTextbookId() !== "getting_started"
        }
        fallback={<div />}
      >
        <DeckSelectionPopover
          activeTextbookId={activeTextbookId()!}
          activeDeck={activeDeck()!}
          queryClient={queryClient}
          userId={context().user?.id || null}
          onDeckSelect={handleDeckSelect}
          isOpen={isPopoverOpen()}
          onOpenChange={setIsPopoverOpen}
        >
          <button class="group text-foreground/80 hover:text-foreground flex items-center gap-2">
            <span class="text-sm font-semibold">
              {
                getMinifiedTextbookEntries().find(
                  ([id]) => id === activeTextbookId(),
                )?.[1]?.short_name
              }
            </span>
            <span class="text-sm font-medium">{activeDeck()?.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-3 opacity-60 transition-opacity group-hover:opacity-100"
            >
              <path d="M8 9l4 -4l4 4" />
              <path d="M16 15l-4 4l-4 -4" />
            </svg>
          </button>
        </DeckSelectionPopover>
      </Show>
      <Button class="h-8.5 border-2 border-black bg-indigo-400 opacity-70 transition-opacity duration-200 hover:bg-indigo-400 hover:opacity-100">
        Login
      </Button>
    </nav>
  )
}

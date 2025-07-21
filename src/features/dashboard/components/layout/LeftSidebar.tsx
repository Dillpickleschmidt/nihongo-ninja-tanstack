// features/dashboard/components/layout/LeftSidebar.tsx
import { createSignal, createMemo, onMount, createEffect } from "solid-js"
import { useNavigate, useLocation } from "@tanstack/solid-router"
import { WordHierarchy } from "../content/WordHierarchy"
import { DeckSelectionPopover } from "../shared/DeckSelectionPopover"
import type { User } from "@supabase/supabase-js"
import type { Deck, DeckSource } from "@/data/types"
import { useDashboardData } from "@/features/dashboard/context/DashboardDataContext"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"

interface LeftSidebarProps {
  dashboardType: "textbook" | "service" | "user"
  user: User | null
  variant: "mobile" | "desktop"
}

const LEFT_SIDEBAR_SELECTOR = "[data-left-sidebar]"
const ENTER_DIRECTION = "right" as const
const ENTER_DELAY = 50

export function LeftSidebar(props: LeftSidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const dashboardData = useDashboardData()
  const { shouldAnimate, animationTrigger } = usePageTransition()
  const allSources = createMemo(() => {
    return dashboardData.deckSources
  })


  const handleDeckChange = (source: DeckSource, deck: Deck) => {
    if (source.type === "textbook") {
      navigate({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: source.id, chapterSlug: deck.slug },
      })
    } else if (source.type === "service") {
      navigate({
        to: "/dashboard/$serviceId",
        params: { serviceId: source.id },
      })
    } else if (source.type === "user") {
      navigate({
        to: "/dashboard/$userId",
        params: { userId: source.id },
      })
    }
    setIsPopoverOpen(false)
  }

  if (props.variant === "mobile") {
    return (
      <div class="mb-8 flex flex-col gap-3 px-7">
        <WordHierarchy variant="mobile" user={props.user} />
      </div>
    )
  }

  return (
    <div class="space-y-6">
      <div class="space-y-3">
        <div class="text-muted-foreground text-sm tracking-wider uppercase">
          Current{" "}
          {props.dashboardType === "textbook"
            ? "Chapter"
            : props.dashboardType === "service"
              ? "Service"
              : "Collection"}
        </div>
        <DeckSelectionPopover
          currentDeck={dashboardData.currentDeck}
          allSources={allSources()}
          onDeckChange={handleDeckChange}
          isOpen={isPopoverOpen()}
          onOpenChange={setIsPopoverOpen}
        >
          <div class="group flex items-center gap-3 text-left">
            <h1 class="text-foreground group-hover:text-foreground/80 text-2xl font-bold transition-colors">
              {dashboardData.currentDeck.title}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4 opacity-60 transition-opacity group-hover:opacity-80"
            >
              <path d="M8 9l4 -4l4 4" />
              <path d="M16 15l-4 4l-4 -4" />
            </svg>
          </div>
        </DeckSelectionPopover>
      </div>

      <div class="space-y-3 pb-3">
        <h2 class="text-lg font-semibold">Your Progress</h2>

        <WordHierarchy variant="desktop" user={props.user} />
      </div>
    </div>
  )
}

// features/dashboard/components/layout/LeftSidebar.tsx
import { createSignal, createMemo, For } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { WordHierarchy } from "../content/WordHierarchy"
import { DeckSelectionPopover } from "../shared/DeckSelectionPopover"
import type { User } from "@supabase/supabase-js"
import { useSettings } from "@/context/SettingsContext"
import { generateServiceSources } from "@/features/dashboard/utils/serviceSourceHelper"
import type { Deck, DeckSource, UserDeck, VocabularyItem } from "@/data/types"
import type { FullHierarchyData } from "@/data/wanikani/types"
import type { DeferredPromise } from "@tanstack/solid-router"
import type { FSRSCardData } from "@/features/supabase/db/utils"

interface LeftSidebarProps {
  dashboardType: "textbook" | "service" | "user"
  user: User | null
  currentDeck: Deck
  deckSources: DeckSource[]
  wordHierarchyData: FullHierarchyData | null
  vocabularyItems: VocabularyItem[]
  progressData: DeferredPromise<Record<string, FSRSCardData> | null>
  variant: "mobile" | "desktop"
}

export function LeftSidebar(props: LeftSidebarProps) {
  const navigate = useNavigate()
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const { serviceAuthData, preferences } = useSettings()

  // Helper function to create a properly typed user deck source
  const createUserDeckSource = (user: User): DeckSource => {
    const userDeck: UserDeck = {
      id: "user-decks",
      slug: "default",
      title: "My Custom Decks",
      deckType: "user_deck" as const,
      learning_path_items: [],
      owner_id: user.id,
      is_public: false,
      vocabulary_keys: [],
    }

    return {
      id: user.id,
      name: "My Decks",
      type: "user" as const,
      decks: [userDeck],
      disabled: false,
    }
  }

  // Generate all available sources
  const allSources = createMemo(() => {
    const serviceSources = generateServiceSources(
      serviceAuthData(),
      preferences(),
    )
    const userSources = props.user ? [createUserDeckSource(props.user)] : []

    return [...props.deckSources, ...serviceSources, ...userSources]
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
        <WordHierarchy
          data={props.wordHierarchyData}
          vocabularyItems={props.vocabularyItems}
          progressData={props.progressData}
          variant="mobile"
          user={props.user}
        />
      </div>
    )
  }

  // Desktop variant
  return (
    <div class="space-y-6">
      {/* Current Deck Section */}
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
          currentDeck={props.currentDeck}
          allSources={allSources()}
          onDeckChange={handleDeckChange}
          isOpen={isPopoverOpen()}
          onOpenChange={setIsPopoverOpen}
        >
          <div class="group flex items-center gap-3 text-left">
            <h1 class="text-foreground group-hover:text-foreground/80 text-2xl font-bold transition-colors">
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
              class="size-4 opacity-60 transition-opacity group-hover:opacity-80"
            >
              <path d="M8 9l4 -4l4 4" />
              <path d="M16 15l-4 4l-4 -4" />
            </svg>
          </div>
        </DeckSelectionPopover>
      </div>

      {/* Progress Section */}
      <div class="space-y-3 pb-3">
        <h2 class="text-lg font-semibold">Your Progress</h2>

        <WordHierarchy
          data={props.wordHierarchyData}
          vocabularyItems={props.vocabularyItems}
          progressData={props.progressData}
          variant="desktop"
          user={props.user}
        />
      </div>
    </div>
  )
}

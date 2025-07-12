// features/dashboard/components/layout/LeftSidebar.tsx
import { createSignal, createMemo } from "solid-js"
import { TrendingUp, Target, Award } from "lucide-solid"
import { useNavigate } from "@tanstack/solid-router"
import { WordHierarchy } from "../content/WordHierarchy"
import { DeckSelectionPopover } from "../shared/DeckSelectionPopover"
import { cn } from "@/utils"
import type { User } from "@supabase/supabase-js"
import { useSettings } from "@/context/SettingsContext"
import { generateServiceSources } from "@/features/dashboard/utils/serviceSourceHelper"
import type { Deck, DeckSource, UserDeck } from "@/data/types"
import { FullHierarchyData } from "@/data/wanikani/types"

interface LeftSidebarProps {
  dashboardType: "textbook" | "service" | "user"
  user: User | null
  currentDeck: Deck
  deckSources: DeckSource[]
  wordHierarchyData: FullHierarchyData | null
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
      <div class="space-y-3">
        <h2 class="text-lg font-semibold">Your Progress</h2>

        <div class="relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 p-4 backdrop-blur-sm">
          <WordHierarchy
            data={props.wordHierarchyData}
            variant="desktop"
            user={props.user}
          />
        </div>

        <div class="space-y-2">
          <StatCard
            icon={TrendingUp}
            title="Study Streak"
            value="12 days"
            gradient="from-green-600/20 to-emerald-600/10"
            iconColor="text-green-400"
          />

          <StatCard
            icon={Target}
            title="Weekly Goal"
            value="85%"
            gradient="from-blue-600/20 to-cyan-600/10"
            iconColor="text-blue-400"
          />

          <StatCard
            icon={Award}
            title="Level"
            value={
              props.dashboardType === "textbook" ? "Beginner" : "Intermediate"
            }
            gradient="from-purple-600/20 to-indigo-600/10"
            iconColor="text-purple-400"
          />
        </div>
      </div>
    </div>
  )
}

function StatCard(props: {
  icon: any
  title: string
  value: string
  gradient: string
  iconColor: string
}) {
  const Icon = props.icon

  return (
    <div
      class={cn(
        "rounded-lg border border-white/10 p-3 backdrop-blur-sm",
        "bg-gradient-to-br transition-all duration-200 hover:scale-[1.01] hover:shadow-lg",
      )}
      style={`background-image: linear-gradient(to bottom right, ${props.gradient})`}
    >
      <div class="flex items-center gap-2">
        <div class="rounded-md bg-white/10 p-1.5">
          <Icon class={cn("h-4 w-4", props.iconColor)} />
        </div>
        <div class="min-w-0 flex-1">
          <div class="text-muted-foreground text-xs font-medium">
            {props.title}
          </div>
          <div class="text-sm font-bold">{props.value}</div>
        </div>
      </div>
    </div>
  )
}

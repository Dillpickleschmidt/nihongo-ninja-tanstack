// features/dashboard/components/content/service/ServiceDeckList.tsx
import { For } from "solid-js"
import { Star, TrendingUp, ArrowRight, Play } from "lucide-solid"
import type { ServiceType } from "@/features/service-config/types"

interface Deck {
  id: string
  name: string
  dueCards: number
  totalCards: number
  type: "user" | "special"
}

interface DeckCategory {
  title: string
  decks: Deck[]
}

interface ServiceDeckListProps {
  serviceId: ServiceType
  decks: Deck[]
  activeDeckId: string
  variant: "mobile" | "desktop"
  onDeckClick: (deck: Deck) => void
}

interface DeckComponentProps {
  deck: Deck
  serviceId: ServiceType
  isActive: boolean
  index: number
  onDeckClick: (deck: Deck) => void
}

export function ServiceDeckList(props: ServiceDeckListProps) {
  const groupedDecks = (): DeckCategory[] => {
    const specialDecks = props.decks.filter((deck) => deck.type === "special")
    const userDecks = props.decks.filter((deck) => deck.type === "user")

    const categories: DeckCategory[] = []

    if (userDecks.length > 0) {
      categories.push({ title: "Your Decks", decks: userDecks })
    }

    if (specialDecks.length > 0) {
      categories.push({ title: "Built-in Decks", decks: specialDecks })
    }

    return categories
  }

  const CategoryHeader = ({ category }: { category: DeckCategory }) => (
    <div class="flex items-center gap-3">
      <h3 class="text-lg font-semibold">{category.title}</h3>
      {props.variant === "desktop" && (
        <div class="from-muted h-px flex-1 bg-gradient-to-r to-transparent" />
      )}
      <span class="text-muted-foreground text-sm">
        {category.decks.length} decks
      </span>
    </div>
  )

  if (props.variant === "mobile") {
    return (
      <div class="mb-8 px-6">
        <div class="space-y-6">
          <For each={groupedDecks()}>
            {(category) => (
              <div class="space-y-3">
                <CategoryHeader category={category} />
                <div class="space-y-3">
                  <For each={category.decks}>
                    {(deck, index) => (
                      <MobileDeckCard
                        deck={deck}
                        serviceId={props.serviceId}
                        isActive={deck.id === props.activeDeckId}
                        index={index()}
                        onDeckClick={props.onDeckClick}
                      />
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    )
  }

  return (
    <div class="space-y-4">
      <For each={groupedDecks()}>
        {(category) => (
          <div class="space-y-4">
            <CategoryHeader category={category} />
            <div class="space-y-4">
              <For each={category.decks}>
                {(deck, index) => (
                  <DeckRow
                    deck={deck}
                    serviceId={props.serviceId}
                    isActive={deck.id === props.activeDeckId}
                    index={index()}
                    onDeckClick={props.onDeckClick}
                  />
                )}
              </For>
            </div>
          </div>
        )}
      </For>
    </div>
  )
}

function DeckRow(props: DeckComponentProps) {
  const completionPercentage = () => {
    if (props.deck.name === "Blacklisted Vocabulary") return 0
    const studied = props.deck.totalCards - props.deck.dueCards
    return Math.round((studied / props.deck.totalCards) * 100)
  }

  const isBlacklisted = props.deck.name === "Blacklisted Vocabulary"
  const showNumber = props.deck.type === "user"

  return (
    <div
      class={`group flex cursor-pointer items-center rounded-xl border p-4 backdrop-blur-sm transition-all duration-200 hover:scale-[1.01] hover:shadow-lg ${showNumber ? "gap-4" : "gap-0"} ${
        props.isActive
          ? "border-primary/30 bg-primary/5 ring-primary/20 shadow-lg ring-2"
          : "border-white/5 bg-white/2 hover:border-white/10"
      } `}
      onClick={() => props.onDeckClick(props.deck)}
    >
      {showNumber && (
        <div class="flex-shrink-0">
          {props.isActive ? (
            <Star class="h-6 w-6 fill-current text-yellow-400" />
          ) : (
            <span class="text-muted-foreground group-hover:text-primary w-6 text-center text-lg font-semibold transition-colors">
              {props.index + 1}
            </span>
          )}
        </div>
      )}

      <div class="min-w-0 flex-1">
        <h4 class="group-hover:text-primary line-clamp-1 font-semibold transition-colors">
          {props.deck.name}
        </h4>
        <div class="mt-1 flex items-center gap-4">
          <span class="text-muted-foreground text-sm">
            {props.deck.dueCards} due • {props.deck.totalCards} total
          </span>
          {!isBlacklisted && (
            <div class="text-muted-foreground flex items-center gap-1 text-xs">
              <TrendingUp class="h-3 w-3" />
              <span>{completionPercentage()}% complete</span>
            </div>
          )}
        </div>
      </div>

      <div class="flex items-center gap-2">
        {props.deck.dueCards > 0 && (
          <div class="rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-400">
            {props.deck.dueCards} due
          </div>
        )}
        <ArrowRight class="text-muted-foreground h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
    </div>
  )
}

function MobileDeckCard(props: DeckComponentProps) {
  const hasDueCards = props.deck.dueCards > 0
  const showNumber = props.deck.type === "user"

  return (
    <div
      class={`bg-card relative block cursor-pointer rounded-2xl p-4 backdrop-blur-sm transition-all duration-200 hover:scale-[99%] ${props.isActive ? "ring-primary/30 shadow-lg ring-2" : ""} `}
      onClick={() => props.onDeckClick(props.deck)}
    >
      {(props.isActive || showNumber) && (
        <div class="absolute top-2 right-2">
          {props.isActive ? (
            <Star class="h-5 w-5 fill-current text-yellow-400" />
          ) : (
            <span class="text-muted-foreground text-sm font-semibold">
              {props.index + 1}
            </span>
          )}
        </div>
      )}

      <div class="space-y-3">
        <div>
          <h3
            class={`line-clamp-1 font-semibold ${props.isActive || showNumber ? "pr-8" : ""}`}
          >
            {props.deck.name}
          </h3>
          <p class="text-muted-foreground text-sm">
            {props.deck.totalCards} cards • {props.deck.dueCards} due
          </p>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Play class="h-4 w-4" />
            <span class="text-sm font-medium">Study</span>
          </div>

          <div
            class={`rounded-full px-2 py-1 text-xs font-medium ${
              hasDueCards
                ? "bg-amber-400/20 text-amber-400"
                : "bg-green-400/20 text-green-400"
            }`}
          >
            {hasDueCards ? `${props.deck.dueCards} due` : "Up to date"}
          </div>
        </div>
      </div>
    </div>
  )
}

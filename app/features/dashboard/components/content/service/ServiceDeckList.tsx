// features/dashboard/components/content/service/ServiceDeckList.tsx
import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Clock, Star, TrendingUp, ArrowRight, Play, Circle } from "lucide-solid"
import { cn } from "@/utils"
import type { ServiceType } from "@/features/service-config/types"

type DeckCategory = {
  title: string
  decks: Array<{
    id: string
    name: string
    dueCards: number
    totalCards: number
    type: "user" | "special"
  }>
}

interface ServiceDeckListProps {
  serviceId: ServiceType
  decks: Array<{
    id: string
    name: string
    dueCards: number
    totalCards: number
    type: "user" | "special"
  }>
  activeDeckId: string
  variant: "mobile" | "desktop"
}

export function ServiceDeckList(props: ServiceDeckListProps) {
  const groupedDecks = (): DeckCategory[] => {
    const specialDecks = props.decks.filter((deck) => deck.type === "special")
    const userDecks = props.decks.filter((deck) => deck.type === "user")

    const categories: DeckCategory[] = []

    if (specialDecks.length > 0) {
      categories.push({ title: "Built-in Decks", decks: specialDecks })
    }

    if (userDecks.length > 0) {
      categories.push({ title: "Your Decks", decks: userDecks })
    }

    return categories
  }

  const getServiceColor = (serviceId: ServiceType) => {
    const colors = {
      anki: "from-blue-600/20 to-cyan-600/10",
      wanikani: "from-pink-600/20 to-purple-600/10",
      jpdb: "from-green-600/20 to-emerald-600/10",
    }
    return colors[serviceId] || "from-gray-600/20 to-slate-600/10"
  }

  if (props.variant === "mobile") {
    return (
      <div class="mb-8 px-6">
        <div class="space-y-6">
          <For each={groupedDecks()}>
            {(category) => (
              <div class="space-y-3">
                {/* Category Header with deck count */}
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold">{category.title}</h3>
                  <div class="text-muted-foreground text-sm">
                    {category.decks.length} decks
                  </div>
                </div>
                <div class="space-y-3">
                  <For each={category.decks}>
                    {(deck) => (
                      <MobileDeckCard
                        deck={deck}
                        serviceId={props.serviceId}
                        isActive={deck.id === props.activeDeckId}
                        gradient={getServiceColor(props.serviceId)}
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

  // Desktop variant
  return (
    <div class="space-y-4">
      <For each={groupedDecks()}>
        {(category) => (
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <h3 class="text-lg font-semibold">{category.title}</h3>
              <div class="from-muted h-px flex-1 bg-gradient-to-r to-transparent"></div>
              <span class="text-muted-foreground text-sm">
                {category.decks.length} decks
              </span>
            </div>

            <div class="space-y-4">
              <For each={category.decks}>
                {(deck) => (
                  <DeckRow
                    deck={deck}
                    serviceId={props.serviceId}
                    isActive={deck.id === props.activeDeckId}
                    gradient={getServiceColor(props.serviceId)}
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

function DeckRow(props: {
  deck: {
    id: string
    name: string
    dueCards: number
    totalCards: number
    type: "user" | "special"
  }
  serviceId: ServiceType
  isActive: boolean
  gradient: string
}) {
  const completionPercentage = () => {
    if (props.deck.name === "Blacklisted Vocabulary") return 0
    const studied = props.deck.totalCards - props.deck.dueCards
    return Math.round((studied / props.deck.totalCards) * 100)
  }

  return (
    <Link to={`/study/${props.serviceId}/${props.deck.id}`} class="group block">
      <div
        class={cn(
          "flex items-center gap-4 rounded-xl border p-4 transition-all duration-200",
          "bg-gradient-to-r backdrop-blur-sm hover:scale-[1.01] hover:shadow-lg",
          props.isActive
            ? "border-primary/30 bg-primary/5 ring-primary/20 shadow-lg ring-2"
            : "border-white/5 bg-white/2 hover:border-white/10",
        )}
        style={`background-image: linear-gradient(to right, ${props.gradient})`}
      >
        <div class="flex-shrink-0">
          {props.isActive ? (
            <Star class="h-6 w-6 fill-current text-yellow-400" />
          ) : (
            <Circle class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors" />
          )}
        </div>

        <div class="min-w-0 flex-1">
          <h4 class="group-hover:text-primary line-clamp-1 font-semibold transition-colors">
            {props.deck.name}
          </h4>
          <div class="mt-1 flex items-center gap-4">
            <span class="text-muted-foreground text-sm">
              {props.deck.dueCards} due • {props.deck.totalCards} total
            </span>
            {props.deck.name !== "Blacklisted Vocabulary" && (
              <div class="text-muted-foreground flex items-center gap-1 text-xs">
                <TrendingUp class="h-3 w-3" />
                <span>{completionPercentage()}% complete</span>
              </div>
            )}
          </div>
        </div>

        {/* Quick actions */}
        <div class="flex items-center gap-2">
          {props.deck.dueCards > 0 && (
            <div class="rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-400">
              {props.deck.dueCards} due
            </div>
          )}
          <ArrowRight class="text-muted-foreground h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  )
}

function MobileDeckCard(props: {
  deck: {
    id: string
    name: string
    dueCards: number
    totalCards: number
    type: "user" | "special"
  }
  serviceId: ServiceType
  isActive: boolean
  gradient: string
}) {
  return (
    <Link to={`/study/${props.serviceId}/${props.deck.id}`} class="block">
      <div
        class={cn(
          "bg-card relative rounded-2xl p-4 backdrop-blur-sm transition-all duration-200 hover:scale-[99%]",
          props.isActive && "ring-primary/30 shadow-lg ring-2",
        )}
        style={`background-image: linear-gradient(to right, ${props.gradient})`}
      >
        {props.isActive && (
          <div class="absolute top-2 right-2">
            <Star class="h-5 w-5 fill-current text-yellow-400" />
          </div>
        )}

        <div class="space-y-3">
          <div>
            <h3 class="line-clamp-1 font-semibold">{props.deck.name}</h3>
            <p class="text-muted-foreground text-sm">
              {props.deck.totalCards} cards • {props.deck.dueCards} due
            </p>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <Play class="h-4 w-4" />
              <span class="text-sm font-medium">Study</span>
            </div>
            {props.deck.dueCards > 0 ? (
              <div class="rounded-full bg-amber-400/20 px-2 py-1 text-xs font-medium text-amber-400">
                {props.deck.dueCards} due
              </div>
            ) : (
              <div class="rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-green-400">
                Up to date
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

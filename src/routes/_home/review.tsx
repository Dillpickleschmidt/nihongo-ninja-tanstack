import { createSignal, Show, createMemo, For } from "solid-js"
import { createFileRoute, useRouteContext, Link } from "@tanstack/solid-router"
import { cn } from "@/utils"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userSettingsQueryOptions,
  dueCardsCountQueryOptions,
} from "@/query/query-options"
import { queryKeys } from "@/query/utils/query-keys"
import { Route as RootRoute } from "@/routes/__root"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { getActiveService } from "@/features/srs-services/utils"
import { useServiceSwitcher } from "@/features/settings-page/hooks/useServiceSwitcher"
import type { SRSServiceType } from "@/features/main-cookies/schemas/user-settings"

export const Route = createFileRoute("/_home/review")({
  loader: async ({ context }) => {
    const { user, queryClient } = context

    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 16,
      backgroundOpacityOffset: -0.22,
      showGradient: true,
    })

    const userSettings = queryClient.getQueryData(
      userSettingsQueryOptions(user?.id || null).queryKey,
    )!

    queryClient.prefetchQuery(
      dueCardsCountQueryOptions(
        user?.id || null,
        userSettings["srs-service-preferences"],
      ),
    )
  },
  component: RouteComponent,
})

// ————————————————————————————————————————————————————————————————

function ReviewHero(props: {
  priorityCategory: { id: string; label: string; count: number; breakdown?: string } | null
  onClick: () => void
  disabled?: boolean
  isLoading?: boolean
}) {
  const isCaughtUp = !props.isLoading && (!props.priorityCategory || props.priorityCategory.count === 0)

  return (
    <div class="relative flex flex-col items-center justify-center">
      {/* Glow effect behind the button when there are reviews */}
      <Show when={!isCaughtUp && !props.disabled && !props.isLoading}>
        <div class="absolute animate-pulse inset-0 rounded-full bg-sky-500/20 blur-3xl" />
      </Show>

      <button
        onClick={props.onClick}
        disabled={props.disabled || isCaughtUp || props.isLoading}
        class={cn(
          "group relative flex h-64 w-64 flex-col items-center justify-center rounded-full border backdrop-blur-md transition-all duration-500 ease-out",
          isCaughtUp
            ? "border-white/10 bg-white/5 cursor-default"
            : "border-sky-400/30 bg-gradient-to-br from-sky-500/20 via-sky-600/10 to-sky-400/20 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20 cursor-pointer animate-pulse",
          props.disabled && "opacity-50 cursor-not-allowed hover:scale-100",
        )}
      >
        <div class="flex flex-col items-center space-y-2 text-center">
          <Show
            when={!props.isLoading}
            fallback={<div class="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />}
          >
            <Show
              when={!isCaughtUp}
              fallback={
                <>
                  <span class="text-4xl">🎉</span>
                  <span class="text-lg font-medium text-white/80">All Caught Up</span>
                </>
              }
            >
              <span class="text-lg font-medium text-sky-300 uppercase tracking-wider">
                Start Review
              </span>
              <span class="font-poppins text-5xl font-bold text-white">
                {props.priorityCategory?.count}
              </span>
              <span class="text-sm text-white/60">
                {props.priorityCategory?.label} due
              </span>
              {props.priorityCategory?.breakdown && (
                <span class="absolute bottom-12 text-xs font-normal text-white/40">
                  {props.priorityCategory.breakdown}
                </span>
              )}
            </Show>
          </Show>
        </div>
      </button>
    </div>
  )
}

function ReviewCategorySelector(props: {
  categories: Array<{ id: string; label: string; count: number; color: "blue" | "green" | "amber" }>
  onSelect: (id: string) => void
  disabled?: boolean
  isLoading?: boolean
}) {
  const colors = {
    blue: "text-sky-400 group-hover:text-sky-300",
    green: "text-emerald-400 group-hover:text-emerald-300",
    amber: "text-amber-400 group-hover:text-amber-300",
  }

  return (
    <div class="flex flex-wrap justify-center gap-4">
      <For each={props.categories}>
        {(category) => (
          <button
            onClick={() => props.onSelect(category.id)}
            disabled={props.disabled || props.isLoading}
            class={cn(
              "group flex min-w-[120px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm transition-all hover:bg-white/10",
              props.disabled && "opacity-50 cursor-not-allowed",
            )}
          >
            <span class={cn("text-xs font-medium uppercase tracking-wider mb-1", colors[category.color])}>
              {category.label}
            </span>
            <span class="font-poppins text-2xl font-bold text-white">
              {props.isLoading ? "-" : category.count}
            </span>
          </button>
        )}
      </For>
    </div>
  )
}

// ————————————————————————————————————————————————————————————————

function PageHeader(props: { variant: "mobile" | "desktop" }) {
  const isDesktop = props.variant === "desktop"

  return (
    <div class={cn("space-y-2 text-center", isDesktop && "space-y-3")}>
      <h1
        class={cn(
          "font-bold font-serif italic drop-shadow-sm",
          isDesktop ? "text-6xl" : "text-4xl",
        )}
      >
        Review & Practice
      </h1>
      <p class={cn("text-muted-foreground", isDesktop ? "text-base" : "text-sm")}>
        Get those reps in.
      </p>
    </div>
  )
}

function ServiceSelector(props: {
  variant: "mobile" | "desktop"
  selectedService: () => string
  services: Array<{ id: string; label: string }>
  isSwitching: () => boolean
  switchError: () => string | null
  onServiceChange: (service: string) => void
}) {
  const isDesktop = props.variant === "desktop"

  return (
    <div
      class={cn(
        "text-muted-foreground flex flex-col items-center gap-2",
        isDesktop ? "text-sm" : "text-xs",
      )}
    >
      <div class="flex flex-wrap items-center justify-center gap-2">
        <span>Service:</span>
        <Select
          value={props.selectedService()}
          onChange={(v) => v && props.onServiceChange(v)}
          options={props.services.map((s) => s.id)}
          placeholder="Select Service"
          disabled={props.isSwitching()}
          itemComponent={(itemProps) => (
            <SelectItem item={itemProps.item}>
              {
                props.services.find((s) => s.id === itemProps.item.rawValue)
                  ?.label
              }
            </SelectItem>
          )}
        >
          <SelectTrigger
            class={cn(
              "bg-background/40 text-foreground hover:bg-background/60 h-8 rounded-md text-xs transition focus:ring-1 disabled:opacity-50",
              isDesktop ? "w-56" : "w-48",
            )}
          >
            <SelectValue>
              {(state) =>
                props.isSwitching()
                  ? "Switching..."
                  : (props.services.find((s) => s.id === state.selectedOption())
                    ?.label ?? "Select Service")
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent class="border-border/50 bg-card/90 text-foreground rounded-md border backdrop-blur-xl" />
        </Select>
      </div>

      {/* Error display */}
      <Show when={props.switchError()}>
        <div class="mt-3 max-w-md rounded-lg border border-red-400/30 bg-red-500/20 p-3">
          <p class="text-xs text-red-100">✗ {props.switchError()}</p>
          <p class="mt-2 text-xs text-red-100">
            Please visit the{" "}
            <Link
              to="/settings"
              class="font-medium underline underline-offset-2"
            >
              Settings page
            </Link>{" "}
            to configure this service.
          </p>
        </div>
      </Show>
    </div>
  )
}

// ————————————————————————————————————————————————————————————————

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  // Query for due cards count
  const dueCardsQuery = useCustomQuery(() =>
    dueCardsCountQueryOptions(
      context().user?.id || null,
      settingsQuery.data!["srs-service-preferences"],
    ),
  )

  // Service switching hook
  const { switchToService, isSwitching, switchError, clearError } =
    useServiceSwitcher(context().user?.id || null)

  const getActiveServiceDisplay = () => {
    const preferences = settingsQuery.data?.["srs-service-preferences"]
    if (!preferences) return "nihongo"

    const activeService = getActiveService(preferences)
    return activeService || "nihongo"
  }

  const [selectedService, setSelectedService] = createSignal<
    "nihongo" | SRSServiceType
  >(getActiveServiceDisplay())

  const handleServiceChange = async (
    newService: "nihongo" | SRSServiceType,
  ) => {
    clearError()
    const result = await switchToService(newService)

    if (result.success) {
      setSelectedService(newService)
    } else {
      // Revert selection on error
      setSelectedService(getActiveServiceDisplay())
    }
  }

  const services = [
    { id: "nihongo", label: "Nihongo Ninja (Built‑in)" },
    { id: "anki", label: "Anki" },
  ]

  const externalLinks: Record<string, string> = {
    anki: "https://apps.ankiweb.net/",
  }

  // Helper to safely get counts
  const getCount = (type: "meanings" | "spellings" | "grammar"): number => {
    if (!dueCardsQuery.data) return 0
    const data = dueCardsQuery.data

    if (type === "meanings") {
      if (!data.meanings || typeof data.meanings !== "object") return 0
      return (data.meanings.vocab || 0) + (data.meanings.kanji || 0)
    }

    if (type === "spellings") {
      return typeof data.spellings === 'number' ? data.spellings : 0
    }

    return 0 // Grammar not implemented yet
  }

  const getBreakdown = (type: "meanings" | "spellings"): string | undefined => {
    if (!dueCardsQuery.data) return undefined
    const data = dueCardsQuery.data

    if (type === "meanings" && data.meanings && typeof data.meanings === "object") {
      return `${data.meanings.vocab} V · ${data.meanings.kanji} K`
    }
    return undefined
  }

  // Memoize categories with counts
  const reviewCategories = createMemo(() => [
    {
      id: "meanings",
      label: "Meanings",
      count: getCount("meanings"),
      breakdown: getBreakdown("meanings"),
      color: "blue" as const
    },
    {
      id: "spellings",
      label: "Spellings",
      count: getCount("spellings"),
      breakdown: getBreakdown("spellings"),
      color: "green" as const
    },
    {
      id: "grammar",
      label: "Grammar",
      count: 0,
      color: "amber" as const
    },
  ])

  // Determine priority category
  const priorityCategory = createMemo(() => {
    const cats = reviewCategories()
    // Sort by count descending
    const sorted = [...cats].sort((a, b) => b.count - a.count)
    // Return top category if it has items, otherwise null (all caught up)
    return sorted[0].count > 0 ? sorted[0] : null
  })

  const handleClick = (section: string) => {
    const s = selectedService()
    if (s !== "nihongo") {
      window.open(externalLinks[s], "_blank")
      return
    }
    console.log(`Navigate to ${section}`)
  }

  return (
    <div class="text-foreground relative flex min-h-screen flex-col items-center px-4 pt-[12vh] pb-24">
      {/* Responsive Header */}
      <div class="mb-12 md:mb-16">
        <SSRMediaQuery showFrom="md">
          <PageHeader variant="desktop" />
        </SSRMediaQuery>
        <SSRMediaQuery hideFrom="md">
          <PageHeader variant="mobile" />
        </SSRMediaQuery>
      </div>

      {/* Hero Section - Priority Action */}
      <div class="mb-12 md:mb-16">
        <ReviewHero
          priorityCategory={priorityCategory()}
          onClick={() => priorityCategory() && handleClick(priorityCategory()!.id)}
          disabled={selectedService() === "anki"}
          isLoading={dueCardsQuery.isPending}
        />
      </div>

      {/* Secondary Actions - Category Selectors */}
      <div class="mb-16 w-full max-w-2xl">
        <ReviewCategorySelector
          categories={reviewCategories()}
          onSelect={handleClick}
          disabled={selectedService() === "anki"}
          isLoading={dueCardsQuery.isPending}
        />
      </div>

      {/* Footer - Service Selector */}
      <div class="mt-auto">
        <SSRMediaQuery showFrom="md">
          <ServiceSelector
            variant="desktop"
            selectedService={selectedService}
            services={services}
            isSwitching={isSwitching}
            switchError={switchError}
            onServiceChange={(v) =>
              handleServiceChange(v as "nihongo" | SRSServiceType)
            }
          />
        </SSRMediaQuery>
        <SSRMediaQuery hideFrom="md">
          <ServiceSelector
            variant="mobile"
            selectedService={selectedService}
            services={services}
            isSwitching={isSwitching}
            switchError={switchError}
            onServiceChange={(v) =>
              handleServiceChange(v as "nihongo" | SRSServiceType)
            }
          />
        </SSRMediaQuery>
      </div>
    </div>
  )
}

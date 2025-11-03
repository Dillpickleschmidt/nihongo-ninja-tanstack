import { createSignal, Show } from "solid-js"
import { createFileRoute, useRouteContext, Link } from "@tanstack/solid-router"
import { cn } from "@/utils"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { UpcomingModulesList } from "@/features/learn-page/components/content/UpcomingModulesList"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import {
  dueCardsCountQueryOptions,
  upcomingModulesQueryOptions,
  completedModulesQueryOptions,
} from "@/query/query-options"
import { Route as RootRoute } from "@/routes/__root"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { getActiveLiveService } from "@/features/srs-services/utils"
import { useServiceSwitcher } from "@/features/settings-page/hooks/useServiceSwitcher"
import type { ServiceType } from "@/features/main-cookies/schemas/user-settings"
import { TextbookIDEnum } from "@/data/types"

export const Route = createFileRoute("/_home/review")({
  loader: async ({ context }) => {
    const { user, queryClient } = context

    // Get user settings from cache (already loaded in root)
    const userSettings = queryClient.getQueryData(
      userSettingsQueryOptions(user?.id || null).queryKey,
    )!

    // Prefetch queries for review page
    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))
    queryClient.prefetchQuery(
      dueCardsCountQueryOptions(
        user?.id || null,
        userSettings["service-preferences"],
      ),
    )
    await queryClient.ensureQueryData(
      upcomingModulesQueryOptions(
        user?.id || null,
        userSettings["active-learning-path"] as TextbookIDEnum,
        userSettings["learning-path-positions"]?.[userSettings["active-learning-path"]] ||
          null,
      ),
    )
  },
  component: RouteComponent,
})

// ————————————————————————————————————————————————————————————————

export function ReviewCard(props: {
  label: string
  color: "blue" | "green" | "amber"
  dueCount: number | "loading" | "error" | "unavailable"
  breakdown?: string
  onClick: () => void
  disabled?: boolean
  variant: "mobile" | "desktop"
}) {
  const gradients = {
    blue: "from-sky-500/40 via-sky-400/20 to-sky-600/30",
    green: "from-emerald-500/40 via-emerald-400/20 to-emerald-600/30",
    amber: "from-amber-500/40 via-amber-400/20 to-amber-600/30",
  }

  const borders = {
    blue: "border-sky-300/20",
    green: "border-emerald-300/20",
    amber: "border-amber-300/20",
  }

  const textColors = {
    blue: "text-sky-400",
    green: "text-emerald-400",
    amber: "text-amber-400",
  }

  const isDesktop = props.variant === "desktop"

  return (
    <div
      class={cn(
        "w-full rounded-xl border bg-gradient-to-br shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-md",
        borders[props.color],
        gradients[props.color],
        isDesktop && "w-[300px]",
      )}
    >
      <div
        class={cn(
          "flex flex-col items-center text-center",
          isDesktop ? "px-8 py-10" : "px-6 py-6",
        )}
      >
        <h2
          class={cn(
            "font-semibold",
            textColors[props.color],
            isDesktop ? "text-lg" : "text-base",
          )}
        >
          {props.label}
        </h2>

        <div
          class={cn(
            "mt-2 h-[2px] rounded-full",
            textColors[props.color].replace("text-", "bg-"),
            isDesktop ? "w-12" : "w-10",
          )}
        />

        <div
          class={cn(
            "mt-2 font-semibold tracking-tight",
            textColors[props.color],
            isDesktop ? "h-11 text-lg" : "h-9 text-base",
          )}
        >
          {props.dueCount === "loading" ? (
            "..."
          ) : props.dueCount === "error" ? (
            "-"
          ) : props.dueCount === "unavailable" ? (
            "-"
          ) : (
            <>
              {props.dueCount}
              <span class="text-sm font-normal text-white/70"> due</span>
            </>
          )}
          {props.breakdown && (
            <p class="text-xs font-normal text-white/60">{props.breakdown}</p>
          )}
        </div>

        <Button
          onClick={props.onClick}
          disabled={props.disabled}
          class={cn(
            "mt-3 w-full rounded-md border-white/10 bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50",
            isDesktop ? "text-base" : "text-sm",
          )}
        >
          Review
        </Button>
      </div>
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
          "font-poppins font-extrabold drop-shadow-sm",
          isDesktop ? "text-5xl" : "text-3xl",
        )}
      >
        Review & Practice
      </h1>
      <p class={cn("text-muted-foreground", isDesktop ? "text-sm" : "text-xs")}>
        Review due items or start learning new ones.
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
      settingsQuery.data!["service-preferences"],
    ),
  )

  // Service switching hook
  const { switchToService, isSwitching, switchError, clearError } =
    useServiceSwitcher(context().user?.id || null)

  // Queries for upcoming modules list
  const upcomingModulesQuery = useCustomQuery(() =>
    upcomingModulesQueryOptions(
      context().user?.id || null,
      settingsQuery.data!["active-learning-path"] as TextbookIDEnum,
      settingsQuery.data!["learning-path-positions"]?.[
        settingsQuery.data!["active-learning-path"]
      ] || null,
    ),
  )

  const completionsQuery = useCustomQuery(() =>
    completedModulesQueryOptions(context().user?.id || null),
  )

  const getActiveServiceDisplay = () => {
    const preferences = settingsQuery.data?.["service-preferences"]
    if (!preferences) return "nihongo"

    const activeService = getActiveLiveService(preferences)
    return activeService || "nihongo"
  }

  const [selectedService, setSelectedService] = createSignal<
    "nihongo" | ServiceType
  >(getActiveServiceDisplay())

  const handleServiceChange = async (newService: "nihongo" | ServiceType) => {
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
    { id: "wanikani", label: "WaniKani" },
    { id: "jpdb", label: "JPDB" },
  ]

  const externalLinks: Record<string, string> = {
    anki: "https://apps.ankiweb.net/",
    wanikani: "https://www.wanikani.com/",
    jpdb: "https://jpdb.io/",
  }

  // Calculate due counts based on query results
  const getMeaningsDueCount = ():
    | number
    | "loading"
    | "error"
    | "unavailable" => {
    if (dueCardsQuery.isPending) return "loading"
    if (dueCardsQuery.isError) return "error"

    const result = dueCardsQuery.data
    if (!result) return "loading"

    // Handle CLIENT_ONLY (Anki on SSR)
    if (
      result.meanings === null &&
      result.unavailableReason === "CLIENT_ONLY"
    ) {
      return "loading"
    }

    // Handle NOT_SUPPORTED (JPDB)
    if (
      result.meanings === null &&
      result.unavailableReason === "NOT_SUPPORTED"
    ) {
      return "unavailable"
    }

    // Handle errors or unexpected null counts
    if (result.meanings === null) {
      return "error"
    }

    return result.meanings.vocab + result.meanings.kanji
  }

  const getSpellingsDueCount = ():
    | number
    | "loading"
    | "error"
    | "unavailable" => {
    if (dueCardsQuery.isPending) return "loading"
    if (dueCardsQuery.isError) return "error"

    const result = dueCardsQuery.data
    if (!result) return "loading"

    // Handle CLIENT_ONLY (Anki on SSR)
    if (
      result.spellings === null &&
      result.unavailableReason === "CLIENT_ONLY"
    ) {
      return "loading"
    }

    // Handle NOT_SUPPORTED (JPDB)
    if (
      result.spellings === null &&
      result.unavailableReason === "NOT_SUPPORTED"
    ) {
      return "unavailable"
    }

    // Handle errors or unexpected null counts
    if (result.spellings === null) {
      return "error"
    }

    return result.spellings
  }

  // Get breakdown text for displaying vocab/kanji split
  const getMeaningsBreakdown = () => {
    const result = dueCardsQuery.data
    if (
      !result ||
      result.meanings === null ||
      dueCardsQuery.isPending ||
      dueCardsQuery.isError
    ) {
      return ""
    }
    return `${result.meanings.vocab} V · ${result.meanings.kanji} K`
  }

  const getSpellingsBreakdown = () => {
    return ""
  }

  const handleClick = (section: string) => {
    const s = selectedService()
    if (["meanings", "spellings"].includes(section) && s !== "nihongo") {
      window.open(externalLinks[s], "_blank")
      return
    }
    console.log(`Navigate to ${section}`)
  }

  return (
    <>
      <TextbookChapterBackgrounds
        textbook={settingsQuery.data["active-learning-path"]}
        chapter={settingsQuery.data["active-chapter"]}
        showGradient={false}
        blur="32px"
      />

      {/* Desktop */}
      <SSRMediaQuery showFrom="md">
        <div class="text-foreground relative flex flex-col items-center space-y-12 px-4 pt-[12vh] pb-24">
          <PageHeader variant="desktop" />

          <div class="flex flex-wrap justify-center gap-10">
            <ReviewCard
              label="Meanings"
              color="blue"
              dueCount={getMeaningsDueCount()}
              breakdown={getMeaningsBreakdown()}
              onClick={() => handleClick("meanings")}
              disabled={["anki", "wanikani", "jpdb"].includes(
                selectedService(),
              )}
              variant="desktop"
            />
            <ReviewCard
              label="Spellings"
              color="green"
              dueCount={getSpellingsDueCount()}
              breakdown={getSpellingsBreakdown()}
              onClick={() => handleClick("spellings")}
              disabled={["anki", "wanikani", "jpdb"].includes(
                selectedService(),
              )}
              variant="desktop"
            />
            <ReviewCard
              label="Grammar"
              color="amber"
              dueCount={0}
              onClick={() => handleClick("grammar")}
              variant="desktop"
            />
          </div>

          <ServiceSelector
            variant="desktop"
            selectedService={selectedService}
            services={services}
            isSwitching={isSwitching}
            switchError={switchError}
            onServiceChange={(v) =>
              handleServiceChange(v as "nihongo" | ServiceType)
            }
          />

          <Button
            size="lg"
            class="w-80 rounded-lg border border-white/20 bg-white/10 py-5 text-base text-white shadow-sm transition hover:bg-white/20"
            onClick={() => handleClick("learn-new")}
          >
            Learn New
          </Button>

          <Show when={context().user}>
            <div class="w-full max-w-lg px-4">
              <h3 class="mb-3 text-lg font-semibold">Upcoming Lessons</h3>
              <UpcomingModulesList
                upcomingModulesQuery={upcomingModulesQuery}
                completionsQuery={completionsQuery}
                class="max-h-[150px]"
              />
            </div>
          </Show>
        </div>
      </SSRMediaQuery>

      {/* Mobile */}
      <SSRMediaQuery hideFrom="md">
        <div class="text-foreground relative flex flex-col items-center space-y-4 px-4 pt-4 pb-36">
          <PageHeader variant="mobile" />

          <div class="flex w-full max-w-[340px] flex-col gap-5">
            <ReviewCard
              label="Vocab Meanings"
              color="blue"
              dueCount={getMeaningsDueCount()}
              breakdown={getMeaningsBreakdown()}
              onClick={() => handleClick("meanings")}
              disabled={["anki", "wanikani", "jpdb"].includes(
                selectedService(),
              )}
              variant="mobile"
            />
            <ReviewCard
              label="Vocab Spellings"
              color="green"
              dueCount={getSpellingsDueCount()}
              breakdown={getSpellingsBreakdown()}
              onClick={() => handleClick("spellings")}
              disabled={["anki", "wanikani", "jpdb"].includes(
                selectedService(),
              )}
              variant="mobile"
            />
            <ServiceSelector
              variant="mobile"
              selectedService={selectedService}
              services={services}
              isSwitching={isSwitching}
              switchError={switchError}
              onServiceChange={(v) =>
                handleServiceChange(v as "nihongo" | ServiceType)
              }
            />
            <ReviewCard
              label="Grammar"
              color="amber"
              dueCount={0}
              onClick={() => handleClick("grammar")}
              variant="mobile"
            />
          </div>

          <Show when={context().user}>
            <div class="w-full px-4 pt-4">
              <h3 class="mb-2 text-lg font-semibold">Upcoming Lessons</h3>
              <UpcomingModulesList
                upcomingModulesQuery={upcomingModulesQuery}
                completionsQuery={completionsQuery}
              />
            </div>
          </Show>
        </div>

        <div class="fixed right-0 bottom-20 left-0 flex justify-center">
          <Button
            size="lg"
            class="w-[90%] rounded-lg border border-white/20 bg-white/15 py-4 text-base text-white shadow-sm backdrop-blur-md transition hover:bg-white/25"
            onClick={() => handleClick("learn-new")}
          >
            Learn New
          </Button>
        </div>
      </SSRMediaQuery>
    </>
  )
}

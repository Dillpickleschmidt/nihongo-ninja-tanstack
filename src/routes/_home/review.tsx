import { createSignal, Show } from "solid-js"
import { createFileRoute, useRouteContext, Link } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { dueCardsCountQueryOptions } from "@/features/learn-page/query/query-options"
import { Route as RootRoute } from "@/routes/__root"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { getActiveLiveService } from "@/features/srs-services/utils"
import { useServiceSwitcher } from "@/features/settings-page/hooks/useServiceSwitcher"
import type { ServiceType } from "@/features/main-cookies/schemas/user-settings"

export const Route = createFileRoute("/_home/review")({
  component: RouteComponent,
})

// ————————————————————————————————————————————————————————————————

function ReviewCard(props: {
  label: string
  color: "blue" | "green" | "amber"
  dueCount: number | "loading" | "error" | "unavailable"
  breakdown?: string
  onClick: () => void
  disabled?: boolean
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

  return (
    <div
      class={`w-full rounded-xl border sm:w-[300px] ${borders[props.color]} bg-gradient-to-br ${gradients[props.color]} shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-md`}
    >
      <div class="flex flex-col items-center px-6 py-6 text-center sm:px-8 sm:py-10">
        <h2
          class={`text-base font-semibold sm:text-lg ${textColors[props.color]}`}
        >
          {props.label}
        </h2>

        <div
          class={`mt-2 h-[2px] w-10 rounded-full sm:w-12 ${textColors[
            props.color
          ].replace("text-", "bg-")}`}
        />

        <div
          class={`mt-2 h-9 text-base font-semibold sm:mt-3 sm:h-11 sm:text-lg ${textColors[props.color]} tracking-tight`}
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
          class="mt-3 w-full rounded-md border-white/10 bg-white/10 text-sm text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
        >
          Review
        </Button>
      </div>
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
      settingsQuery.data?.["service-preferences"] ?? {
        anki: {
          mode: "disabled",
          data_imported: false,
          is_api_key_valid: false,
        },
        wanikani: {
          mode: "disabled",
          data_imported: false,
          is_api_key_valid: false,
        },
        jpdb: {
          mode: "disabled",
          data_imported: false,
          is_api_key_valid: false,
        },
      },
    ),
  )

  // Service switching hook
  const { switchToService, isSwitching, switchError, clearError } =
    useServiceSwitcher(context().user?.id || null)

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

    return result.spellings.vocab + result.spellings.kanji
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
    const result = dueCardsQuery.data
    if (
      !result ||
      result.spellings === null ||
      dueCardsQuery.isPending ||
      dueCardsQuery.isError
    ) {
      return ""
    }
    return `${result.spellings.vocab} V · ${result.spellings.kanji} K`
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
        textbook={settingsQuery.data["active-textbook"]}
        chapter={settingsQuery.data["active-deck"]}
        showGradient={false}
        blur="32px"
      />

      <div class="text-foreground relative flex min-h-[85vh] flex-col items-center justify-center space-y-4 px-4 pt-4 pb-34 sm:space-y-12 sm:pt-0 sm:pb-0">
        {/* Header */}
        <div class="space-y-2 text-center sm:space-y-3">
          <h1 class="font-poppins text-3xl font-extrabold drop-shadow-sm sm:text-5xl">
            Review & Practice
          </h1>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Continue where you left off or focus on specific skills.
          </p>
        </div>

        {/* Desktop layout (3 cards) */}
        <SSRMediaQuery showFrom="md">
          <div class="flex flex-wrap justify-center gap-8 sm:gap-10">
            <ReviewCard
              label="Vocab Meanings"
              color="blue"
              dueCount={getMeaningsDueCount()}
              breakdown={getMeaningsBreakdown()}
              onClick={() => handleClick("meanings")}
              disabled={["anki", "wanikani", "jpdb"].includes(
                selectedService(),
              )}
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
            />
            <ReviewCard
              label="Grammar"
              color="amber"
              dueCount={0}
              onClick={() => handleClick("grammar")}
            />
          </div>
        </SSRMediaQuery>

        {/* Mobile stacked cards */}
        <SSRMediaQuery hideFrom="md">
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
            />
            <ReviewCard
              label="Grammar"
              color="amber"
              dueCount={0}
              onClick={() => handleClick("grammar")}
            />
          </div>
        </SSRMediaQuery>

        {/* Selector */}
        <div class="text-muted-foreground flex flex-col items-center gap-2 text-xs sm:text-sm">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <span>Service:</span>
            <Select
              value={selectedService()}
              onChange={(v) =>
                v && handleServiceChange(v as "nihongo" | ServiceType)
              }
              options={services.map((s) => s.id)}
              placeholder="Select Service"
              disabled={isSwitching()}
              itemComponent={(itemProps) => (
                <SelectItem item={itemProps.item}>
                  {
                    services.find((s) => s.id === itemProps.item.rawValue)
                      ?.label
                  }
                </SelectItem>
              )}
            >
              <SelectTrigger class="bg-background/40 text-foreground hover:bg-background/60 h-8 w-48 rounded-md text-xs transition focus:ring-1 disabled:opacity-50 sm:w-56">
                <SelectValue>
                  {(state) =>
                    isSwitching()
                      ? "Switching..."
                      : (services.find((s) => s.id === state.selectedOption())
                          ?.label ?? "Select Service")
                  }
                </SelectValue>
              </SelectTrigger>
              <SelectContent class="border-border/50 bg-card/90 text-foreground rounded-md border backdrop-blur-xl" />
            </Select>
          </div>

          {/* Error display */}
          <Show when={switchError()}>
            <div class="mt-3 max-w-md rounded-lg border border-red-400/30 bg-red-500/20 p-3">
              <p class="text-xs text-red-100">✗ {switchError()}</p>
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

        {/* Desktop Learn New */}
        <SSRMediaQuery showFrom="md">
          <div class="pt-8">
            <Button
              size="lg"
              class="w-80 rounded-lg border border-white/20 bg-white/10 py-5 text-base text-white shadow-sm transition hover:bg-white/20"
              onClick={() => handleClick("learn-new")}
            >
              Learn New
            </Button>
          </div>
        </SSRMediaQuery>
      </div>

      {/* Mobile Learn New - fixed bottom */}
      <SSRMediaQuery hideFrom="md">
        <div class="py- fixed right-0 bottom-20 left-0 flex justify-center">
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

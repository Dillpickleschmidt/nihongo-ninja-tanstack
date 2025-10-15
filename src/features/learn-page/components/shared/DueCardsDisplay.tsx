import { Link, useRouteContext } from "@tanstack/solid-router"
import { Suspense } from "solid-js"
import { Button } from "@/components/ui/button"
import { Route as RootRoute } from "@/routes/__root"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import { getActiveLiveService } from "@/features/srs-services/utils"

interface DueCardsDisplayProps {
  variant: "mobile" | "desktop"
}

export function DueCardsDisplay(props: DueCardsDisplayProps) {
  const routeContext = useRouteContext({ from: RootRoute.id })
  const context = useLearnPageContext()

  const getServiceDisplayName = () => {
    const preferences = context.settingsQuery.data!["service-preferences"]
    if (!preferences) return "Local FSRS"

    const activeService = getActiveLiveService(preferences)
    if (!activeService) return "Local FSRS"

    switch (activeService) {
      case "anki":
        return "Anki (Live)"
      case "jpdb":
        return "jpdb (Live)"
      case "wanikani":
        return "WaniKani (Live)"
      default:
        return "Local FSRS"
    }
  }

  if (!routeContext().user) {
    return (
      <Button
        as={Link}
        to="/auth"
        variant="link"
        class={
          props.variant === "mobile"
            ? "italic"
            : "mr-8 font-bold italic xl:text-base"
        }
      >
        Sign In
      </Button>
    )
  }

  const display = () => {
    if (context.dueCardsCountQuery.data === undefined) {
      return null
    }

    const result = context.dueCardsCountQuery.data

    // Check for CLIENT_ONLY (Anki on SSR)
    if (result.count === null && result.unavailableReason === "CLIENT_ONLY") {
      return loadingFallback
    }

    // Check for NOT_SUPPORTED (JPDB)
    if (result.count === null && result.unavailableReason === "NOT_SUPPORTED") {
      return (
        <>
          <div class="text-gray-400">
            <span class="font-inter text-base font-bold xl:text-lg">-</span>
          </div>
          <div class="text-muted-foreground text-xs xl:text-sm">
            Not available
          </div>
        </>
      )
    }

    // Handle actual errors or unexpected null counts
    if (context.dueCardsCountQuery.isError || result.count === null) {
      return (
        <>
          <div class="text-gray-400">
            <span class="font-inter text-base font-bold xl:text-lg">-</span>
          </div>
          <div class="text-muted-foreground text-xs xl:text-sm">
            Unable to load
          </div>
        </>
      )
    }

    // Normal display for real counts
    return (
      <>
        <div
          class={result.count > 0 ? "text-amber-400" : "text-green-500"}
          title={getServiceDisplayName()}
        >
          <span class="font-inter text-base font-bold xl:text-lg">
            {result.count}
          </span>
        </div>
        <div
          class="text-muted-foreground text-xs xl:text-sm"
          title={getServiceDisplayName()}
        >
          {result.count === 0
            ? "No reviews"
            : `${result.count === 1 ? "Review" : "Reviews"} Due`}
        </div>
      </>
    )
  }

  const loadingFallback = (
    <>
      <div class="text-gray-400">
        <span class="font-inter text-base font-bold xl:text-lg">...</span>
      </div>
      <div class="text-muted-foreground text-xs xl:text-sm">Loading...</div>
    </>
  )

  if (props.variant === "mobile") {
    return <Suspense fallback={loadingFallback}>{display()}</Suspense>
  }

  return (
    <>
      <div class="text-center">
        <div class="text-xl font-bold text-green-400">12</div>
        <div class="text-muted-foreground text-xs">Completed</div>
      </div>
      <div class="text-center">
        <Suspense fallback={loadingFallback}>{display()}</Suspense>
      </div>
    </>
  )
}

import { Link } from "@tanstack/solid-router"
import { Suspense } from "solid-js"
import { Button } from "@/components/ui/button"
import { Route } from "@/routes/_home/learn/$textbookId.$chapterSlug"
import { dueFSRSCardsCountQueryOptions } from "@/features/learn-page/queries/learn-page-queries"
import { useCustomQuery } from "@/hooks/useCustomQuery"

interface DueCardsDisplayProps {
  variant: "mobile" | "desktop"
}

export function DueCardsDisplay(props: DueCardsDisplayProps) {
  const loaderData = Route.useLoaderData()
  const userId = loaderData().user?.id || null

  if (!loaderData().user) {
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

  const countQuery = useCustomQuery(() => dueFSRSCardsCountQueryOptions(userId))

  const display = () => {
    const value = countQuery.data!
    return (
      <>
        <div class={value > 0 ? "text-amber-400" : "text-green-500"}>
          <span class="font-inter text-base font-bold xl:text-lg">{value}</span>
        </div>
        <div class="text-muted-foreground text-xs xl:text-sm">
          {value === 0
            ? "No reviews"
            : `${value === 1 ? "Review" : "Reviews"} Due`}
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

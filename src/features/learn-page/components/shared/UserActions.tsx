import { Link, Await } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import type { User } from "@supabase/supabase-js"

interface UserActionsProps {
  user: User | null
  variant: "mobile" | "desktop"
  dueFSRSCardsCount: Promise<number | null>
}

export function UserActions(props: UserActionsProps) {
  // Component for rendering due cards count
  const DueCardsDisplay = () => {
    if (!props.user) {
      return null
    }

    return (
      <Await
        promise={props.dueFSRSCardsCount}
        fallback={
          <>
            <div class="text-gray-400">
              <span class="font-inter text-base font-bold xl:text-lg">...</span>
            </div>
            <div class="text-muted-foreground text-xs xl:text-sm">
              Loading...
            </div>
          </>
        }
      >
        {(count) => (
          <>
            <div
              class={count && count > 0 ? "text-amber-400" : "text-green-500"}
            >
              <span class="font-inter text-base font-bold xl:text-lg">
                {count || 0}
              </span>
            </div>
            <div class="text-muted-foreground text-xs xl:text-sm">
              {count === 0
                ? "No reviews"
                : `${count === 1 ? "Review" : "Reviews"} Due`}
            </div>
          </>
        )}
      </Await>
    )
  }

  if (!props.user) {
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

  if (props.variant === "mobile") {
    return <DueCardsDisplay />
  }

  // Desktop variant - show both completed count and due cards
  return (
    <>
      <div class="text-center">
        <div class="text-xl font-bold text-green-400">12</div>
        <div class="text-muted-foreground text-xs">Completed</div>
      </div>
      <div class="text-center">
        <DueCardsDisplay />
      </div>
    </>
  )
}


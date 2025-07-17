// src/components/ContentBox.tsx
import { Show } from "solid-js"
import { Button } from "./ui/button"
import { useLocation, useNavigate, useMatches } from "@tanstack/solid-router"
import { cva } from "class-variance-authority"
import { cn } from "@/utils/util"
import { User } from "@supabase/supabase-js"
import { usePageTransition } from "@/context/TransitionContext"

type ContentBoxConfig = {
  nextButtonLink?: string
  nextButtonText?: string
  size?: "default" | "lg"
  class?: string
}

function hasContentBox(data: any): data is { contentBox: ContentBoxConfig } {
  return data && typeof data === "object" && "contentBox" in data
}

type ContentBoxProps = {
  children: any
  user?: User | null
}

export const contentBoxVariants = cva(
  "w-full min-h-screen relative bg-background/75",
  {
    variants: {
      size: {
        default: "max-w-[825px] ",
        lg: "max-w-5xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

export default function ContentBox(props: ContentBoxProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const matches = useMatches()
  const { setUserHasNavigated } = usePageTransition()

  const config = (): ContentBoxConfig => {
    const currentPath = location().pathname
    const match = matches().find((match) => match.pathname === currentPath)
    const loaderData = match?.loaderData

    if (hasContentBox(loaderData)) {
      return loaderData.contentBox
    }

    return {}
  }

  // Check visibility directly without signals - this is stable during SSR/hydration
  const isVisible = () => location().pathname.startsWith("/learn/")

  const handleBackClick = (e: Event) => {
    e.preventDefault()
    setUserHasNavigated(true)
    navigate({ to: "/dashboard" })
  }

  const handleNextClick = (e: Event) => {
    const nextLink = config().nextButtonLink
    if (nextLink) {
      e.preventDefault()
      navigate({ to: nextLink })
    }
  }

  return (
    <>
      <Show when={isVisible()}>
        <div class="flex w-full justify-center">
          <div
            class={cn(
              contentBoxVariants({ size: config().size }),
              config().class,
            )}
          >
            {props.children}
          </div>
        </div>
      </Show>
      <Show when={config().nextButtonLink}>
        <div class="absolute">
          <div class="fixed right-6 bottom-6 flex gap-2">
            <Button
              as="a"
              href="/dashboard"
              onClick={handleBackClick}
              variant="ghost"
              class="dark:to-card/25 opacity-80 hover:opacity-100 dark:bg-gradient-to-br dark:from-green-500/30"
            >
              {"<-"} Complete & Return
            </Button>
            <Button
              as="a"
              href={config().nextButtonLink!}
              onClick={handleNextClick}
              variant="ghost"
              class="dark:to-card/25 opacity-80 hover:opacity-100 dark:bg-gradient-to-br dark:from-green-500/30"
            >
              {config().nextButtonText ?? "Complete & Next ->"}
            </Button>
          </div>
        </div>
      </Show>
    </>
  )
}

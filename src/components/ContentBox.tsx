// src/components/ContentBox.tsx
import { Show } from "solid-js"
import { Button } from "./ui/button"
import { useLocation, useNavigate, useMatches } from "@tanstack/solid-router"
import { cva } from "class-variance-authority"
import { cn } from "@/utils/util"
import { User } from "@supabase/supabase-js"

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
  "w-full min-h-screen relative bg-background/60",
  {
    variants: {
      size: {
        default: "max-w-4xl ",
        lg: "",
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
  const isVisible = () =>
    location().pathname.startsWith("/lessons/") ||
    location().pathname.startsWith("/external-resources/")

  const handleBackClick = (e: Event) => {
    e.preventDefault()
    navigate({ to: "/learn" })
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
              href="/learn"
              onClick={handleBackClick}
              variant="ghost"
              size="sm"
              class="text-muted-foreground"
            >
              {"<-"} Complete & Return
            </Button>
            <Button
              as="a"
              href={config().nextButtonLink!}
              onClick={handleNextClick}
              variant="ghost"
              size="sm"
              class="text-muted-foreground"
            >
              {config().nextButtonText ?? "Complete & Next ->"}
            </Button>
          </div>
        </div>
      </Show>
    </>
  )
}

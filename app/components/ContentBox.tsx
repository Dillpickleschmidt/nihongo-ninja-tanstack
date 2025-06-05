// app/components/ContentBox.tsx
import { Show, createEffect, createSignal } from "solid-js"
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

export const contentBoxVariants = cva("relative w-full bg-background/75", {
  variants: {
    size: {
      default: "max-w-[825px] ",
      lg: "max-w-5xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export default function ContentBox(props: ContentBoxProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const matches = useMatches()

  const [isVisible, setIsVisible] = createSignal(false)

  const config = (): ContentBoxConfig => {
    const currentPath = location().pathname
    const match = matches().find((match) => match.pathname === currentPath)
    const loaderData = match?.loaderData

    if (hasContentBox(loaderData)) {
      return loaderData.contentBox
    }

    return {}
  }

  createEffect(() => {
    const currentPath = location().pathname

    if (currentPath.startsWith("/learn/")) {
      setIsVisible(true)
    }
  })

  const handleBackClick = (e: Event) => {
    e.preventDefault()

    // Dispatch custom event for parent to handle
    const customEvent = new CustomEvent("contentbox-back-click", {
      bubbles: true,
      cancelable: true,
    })

    document.dispatchEvent(customEvent)
  }

  const handleNextClick = (e: Event) => {
    const nextLink = config().nextButtonLink
    if (nextLink) {
      e.preventDefault()
      navigate({ to: nextLink })
    }
  }

  return (
    <Show when={isVisible()}>
      <div class="flex min-h-screen w-full justify-center">
        <div
          class={cn(
            contentBoxVariants({ size: config().size }),
            config().class,
            "p-6",
          )}
        >
          {props.children}
          <Show when={config().nextButtonLink}>
            <div class="absolute right-6 bottom-6 flex gap-2">
              <Button
                as="a"
                href="/dashboard"
                onClick={handleBackClick}
                variant="outline"
                class="border-green-500/35 bg-green-500/15 hover:bg-green-500/25"
              >
                {"<-"} Complete & Return
              </Button>
              <Button
                as="a"
                href={config().nextButtonLink!}
                onClick={handleNextClick}
                variant="outline"
                class="border-green-500/35 bg-green-500/15 hover:bg-green-500/25"
              >
                {config().nextButtonText ?? "Complete & Next ->"}
              </Button>
            </div>
          </Show>
        </div>
      </div>
    </Show>
  )
}

// features/vocab-practice/components/pages/start-page/components/StartPageButton.tsx
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-solid"

type StartPageButtonProps = {
  loading: boolean
  disabled: boolean
  onClick: () => void
}

export function StartPageButton(props: StartPageButtonProps) {
  return (
    <div class="fixed right-0 bottom-16 left-0 z-50 p-4">
      <div class="mx-auto max-w-md">
        <Button
          onClick={props.onClick}
          size="lg"
          class="h-12 w-full rounded-lg border border-white/20 bg-white/10 text-base text-white shadow-sm backdrop-blur-lg transition hover:bg-white/20 disabled:opacity-70"
          disabled={props.loading || props.disabled}
        >
          <span class="flex items-center justify-center gap-2">
            {props.loading ? (
              <>
                Loading...
                <Loader2
                  stroke-width={2}
                  class="h-5 w-5 animate-spin text-neutral-300"
                />
              </>
            ) : (
              <>
                Start Learning!
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            )}
          </span>
        </Button>
      </div>
    </div>
  )
}

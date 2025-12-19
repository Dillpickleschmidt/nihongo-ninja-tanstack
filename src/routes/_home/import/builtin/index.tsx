import { createFileRoute } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { onMount } from "solid-js"
import { queryKeys } from "@/query/query-keys"
import { ImportPageHeader } from "@/features/import/shared/ImportPageHeader"
import { ImportOptionCard } from "@/features/import/shared/ImportOptionCard"

export const Route = createFileRoute("/_home/import/builtin/")({
  component: BuiltinMethodPage,
})

function BuiltinMethodPage() {
  const queryClient = useQueryClient()

  onMount(() => {
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 12,
      opacityOffset: -0.22,
      showGradient: false,
    })
  })

  return (
    <div class="mx-auto max-w-2xl px-4 pt-24 pb-32 md:pb-16">
      <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <ImportPageHeader
          title="How would you like to import?"
          backTo="/import"
          backLabel="Back"
        />

        <div class="grid gap-4 sm:grid-cols-2">
          <ImportOptionCard
            title="Mark What I Know"
            description="Browse JLPT vocab, grammar, and kanji lists"
            icon={(props) => (
              <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            to="/import/builtin/manual"
          />

          <ImportOptionCard
            title="Upload History"
            description="Import from .apkg or jpdb .json exports"
            icon={(props) => (
              <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            )}
            to="/import/builtin/upload"
          />
        </div>
      </div>
    </div>
  )
}

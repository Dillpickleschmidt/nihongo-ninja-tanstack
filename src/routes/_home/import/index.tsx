import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "@/query/query-keys"
import { ImportPageHeader } from "@/features/import/shared/ImportPageHeader"
import { ImportOptionCard } from "@/features/import/shared/ImportOptionCard"

export const Route = createFileRoute("/_home/import/")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 12,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: ImportIndexPage,
})

function ImportIndexPage() {
  return (
    <div class="mx-auto max-w-2xl px-4 pt-24 pb-32 md:pb-16">
      <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <ImportPageHeader
          title="Import Your Progress"
          subtitle="Choose how you'd like to track your reviews"
          backTo="/learn"
          backLabel="Learn"
        />

        <div class="grid gap-4 sm:grid-cols-2">
          <ImportOptionCard
            title="Nihongo Ninja"
            description="Use our built-in review system with FSRS scheduling"
            icon={(props) => (
              <svg
                {...props}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                />
              </svg>
            )}
            to="/import/builtin"
          />

          <ImportOptionCard
            title="Anki"
            description="Connect to Anki desktop via AnkiConnect"
            icon={(props) => (
              <svg
                {...props}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            )}
            to="/import/anki"
          />
        </div>
      </div>
    </div>
  )
}

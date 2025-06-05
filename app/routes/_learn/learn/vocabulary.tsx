// app/routes/_learn/learn/vocabulary.tsx
import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_learn/learn/vocabulary")({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/learn/grammar",
        nextButtonText: "Complete & Continue to Grammar",
        size: "default" as const,
      },
    }
  },
  component: VocabularyPage,
})

function VocabularyPage() {
  const { contentBox } = Route.useLoaderData()()

  console.log("This page will show:", contentBox.nextButtonText)

  return (
    <div>
      <h1 class="mb-6 w-full text-3xl font-bold">Vocabulary Practice</h1>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <div class="rounded-lg bg-white p-6 shadow">
            <h2 class="mb-4 text-xl font-semibold">Today's Words</h2>
            <p class="text-gray-600">
              Your vocabulary practice content goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

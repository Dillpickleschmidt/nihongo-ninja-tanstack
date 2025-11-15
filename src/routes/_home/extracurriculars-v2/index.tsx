import { createFileRoute, Await } from "@tanstack/solid-router"
import { For } from "solid-js"
import { Search } from "@/features/extracurriculars-v2/api/anilist/queries"
import { getHomepageSections } from "@/features/extracurriculars-v2/utils/section-configs"
import { AnimeSection } from "@/features/extracurriculars-v2/components/AnimeSection"

const sections = getHomepageSections()

export const Route = createFileRoute("/_home/extracurriculars-v2/")({
  loader: async ({ context }) => {
    const { urqlClient } = context as any

    const sectionPromises = sections.map((section) => ({
      config: section,
      promise: urqlClient.query(Search, section.queryVars).toPromise(),
    }))

    return { sectionPromises }
  },

  component: () => {
    return <HomePage />
  },
})

function HomePage() {
  const { sectionPromises } = Route.useLoaderData()()

  return (
    <div class="mx-auto max-w-7xl p-4">
      <h1 class="mb-8 text-3xl font-bold">Extracurriculars</h1>

      <For each={sectionPromises}>
        {(item) => (
          <Await
            promise={item.promise}
            fallback={<SectionSkeleton title={item.config.title} />}
          >
            {(result: any) => (
              <AnimeSection
                title={item.config.title}
                data={result.data?.Page?.media}
                viewMoreLink={item.config.viewMoreLink}
              />
            )}
          </Await>
        )}
      </For>

      {/* Auth sections stubs */}
      <div class="mt-12 space-y-8">
        <div class="rounded bg-gray-100 p-6 text-center">
          <h2 class="mb-2 text-xl font-bold">Continue Watching</h2>
          <p class="text-gray-600">
            Sign in to see anime you're currently watching
          </p>
        </div>

        <div class="rounded bg-gray-100 p-6 text-center">
          <h2 class="mb-2 text-xl font-bold">Your List</h2>
          <p class="text-gray-600">
            Sign in to see your personalized anime list
          </p>
        </div>

        <div class="rounded bg-gray-100 p-6 text-center">
          <h2 class="mb-2 text-xl font-bold">Sequels You Missed</h2>
          <p class="text-gray-600">
            Sign in to see sequels of anime you've completed
          </p>
        </div>
      </div>
    </div>
  )
}

function SectionSkeleton(props: { title: string }) {
  return (
    <div class="mb-8">
      <h2 class="mb-4 text-xl font-bold">{props.title}</h2>
      <div class="flex gap-4 overflow-x-auto pb-2">
        <For each={Array(5)}>
          {() => (
            <div class="w-40 flex-shrink-0 space-y-2">
              <div class="h-56 w-full animate-pulse rounded bg-gray-200" />
              <div class="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div class="h-3 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

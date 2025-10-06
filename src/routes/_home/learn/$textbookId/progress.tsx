// routes/_home/learn/$textbookId.progress.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { UpcomingModulesList } from "@/features/learn-page/components/content/UpcomingModulesList"
import { Route as ParentRoute } from "@/routes/_home/learn/$textbookId"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"

export const Route = createFileRoute("/_home/learn/$textbookId/progress")({
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = ParentRoute.useLoaderData()()
  const { upcomingModulesQuery, completionsQuery } = useLearnPageContext()

  // If no user, show sign-in message
  if (!loaderData.user) {
    return (
      <div class="flex h-[60vh] items-center justify-center">
        <div class="text-center">
          <h2 class="text-2xl font-bold">Sign in to see your progress</h2>
          <p class="text-muted-foreground mt-2">
            Track your learning journey by signing in
          </p>
        </div>
      </div>
    )
  }

  // Filter upcoming modules to exclude completed ones
  const upcomingModules = () => {
    const data = upcomingModulesQuery.data || []
    const completedSet = new Set(
      completionsQuery.data?.map((c) => c.module_path) || [],
    )
    // Exclude all completed modules, even if marked as current
    return data.filter((item) => !completedSet.has(item.id))
  }

  return (
    <>
      {/* Mobile: Full width timeline */}
      <div class="xl:hidden">
        <UpcomingModulesList variant="lg" upcomingModules={upcomingModules} />
      </div>

      {/* Desktop: 3-column layout with timeline in center */}
      <div class="hidden xl:flex xl:w-full xl:pr-4 xl:pl-8">
        {/* Left sidebar - empty */}
        <div class="w-[20%]" />

        {/* Center content - timeline */}
        <div class="w-[60%] pt-6">
          <UpcomingModulesList variant="lg" upcomingModules={upcomingModules} />
        </div>

        {/* Right sidebar - empty */}
        <div class="w-[20%]" />
      </div>
    </>
  )
}

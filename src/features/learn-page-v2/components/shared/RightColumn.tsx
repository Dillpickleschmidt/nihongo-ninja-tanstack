import ProfileCard from "../content/ProfileCard"
import { Show } from "solid-js"
import { Play } from "lucide-solid"
import { useRouteContext, Link } from "@tanstack/solid-router"
// import { HistoryContent } from "../content/HistoryContent"
import { UpcomingModulesList } from "../content/UpcomingModulesList"
import { useLearnPageContext } from "@/features/learn-page-v2/context/LearnPageContext"
import { Button } from "@/components/ui/button"
import { Route as RootRoute } from "@/routes/__root"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { external_resources } from "@/data/external_resources"
import { getLinkTo } from "@/features/learn-page-v2/utils/loader-helpers"

const modules = { ...static_modules, ...dynamic_modules, ...external_resources }

function RightColumn() {
  const context = useRouteContext({ from: RootRoute.id })
  const { upcomingModulesQuery, completionsQuery } = useLearnPageContext()

  // if (props.variant === "mobile") {
  //   return <HistoryContent variant="mobile" />
  // }

  // Filter out completed modules from upcoming list
  const upcomingModules = () => {
    const data = upcomingModulesQuery.data || []
    const completedSet = new Set(
      completionsQuery.data?.map((c) => c.module_path) || [],
    )
    return data.filter((item) => !completedSet.has(item.id))
  }

  const getFirstUpcomingLink = () => {
    const first = upcomingModules()[0]
    if (!first) return null
    const module = modules[first.id]
    return module ? getLinkTo(module, first.id) : null
  }

  return (
    <div class="mt-1 pr-3.5">
      <div
        data-right-sidebar
        class="flex h-full flex-col space-y-3 overflow-x-hidden px-4 pb-3"
      >
        <ProfileCard />
        <Show
          when={context().user}
          fallback={
            <h3 class="text-muted-foreground text-center">
              Your review history here, coming soon.
            </h3>
          }
        >
          <Show
            when={getFirstUpcomingLink()}
            fallback={
              <Button
                variant="ghost"
                disabled
                class="bg-primary/10 text-primary w-full cursor-not-allowed rounded-lg px-4 py-2.5 opacity-50"
              >
                <Play class="h-4 w-4" />
                <span class="text-sm font-medium">Start Studying</span>
              </Button>
            }
          >
            {(link) => (
              <Link to={link()} class="px-0.5 pt-0.5" tabindex="-1">
                <Button
                  variant="ghost"
                  class="bg-primary/10 hover:bg-primary/20 text-primary w-full cursor-pointer rounded-lg px-4 py-2.5 focus-visible:ring-offset-0"
                  onClick={() => {}}
                  tabindex="3"
                >
                  <Play class="h-4 w-4" />
                  <span class="text-sm font-medium">Start Studying</span>
                </Button>
              </Link>
            )}
          </Show>
          <h3 class="pt-3 text-lg font-semibold">Upcoming Lessons</h3>
          <div class="px-4">
            <UpcomingModulesList />
          </div>
        </Show>
      </div>
    </div>
  )
}

export default RightColumn

import ProfileCard from "../content/ProfileCard"
import { Show } from "solid-js"
import { History, Pen, Play } from "lucide-solid"
import { useRouteContext, Link } from "@tanstack/solid-router"
// import { HistoryContent } from "../content/HistoryContent"
import { UpcomingModulesList } from "../content/UpcomingModulesList"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import { Button } from "@/components/ui/button"
import { Route as RootRoute } from "@/routes/__root"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { external_resources } from "@/data/external_resources"
import { getLinkTo } from "@/features/learn-page/utils/loader-helpers"

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
              <div class="px-0.5 pt-0.5">
                <Button
                  variant="ghost"
                  class="text-primary ease-instant-hover-100 mb-2 w-full cursor-pointer rounded-lg border-2 border-[#523142] px-4 py-2.5 backdrop-blur-sm hover:opacity-80 focus-visible:ring-offset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(244, 114, 182, 0.1) 100%)",
                  }}
                  onClick={() => {}}
                  tabindex="3"
                >
                  <History class="h-4 w-4" />
                  <span class="text-sm font-medium">Review</span>
                </Button>
                <Link to={link()} class="w-full" tabindex="-1">
                  <Button
                    variant="ghost"
                    class="text-primary ease-instant-hover-100 w-full cursor-pointer rounded-lg border-2 border-[#2d4452] px-4 py-2.5 backdrop-blur-sm hover:opacity-80 focus-visible:ring-offset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)",
                    }}
                    onClick={() => {}}
                    tabindex="3"
                  >
                    <Pen class="h-4 w-4" />
                    <span class="text-sm font-medium">Start Studying</span>
                  </Button>
                </Link>
              </div>
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

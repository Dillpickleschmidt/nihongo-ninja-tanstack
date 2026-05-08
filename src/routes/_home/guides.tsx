import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js"
import {
  createFileRoute,
  Outlet,
  useLocation,
  useMatches,
  useNavigate,
} from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { useCompleteModule } from "@/lib/completions"
import { static_modules } from "@/data/static_modules"
import { queryKeys } from "~/query/query-keys"
import { ActiveLearningPathBackground } from "@/components/ActiveLearningPathBackground"
import { Button } from "@/components/ui/button"
import { TableOfContents, type TOCItem } from "@/components/TableOfContents"
import GoHomeSvg from "@/features/homepage/shared/assets/go-home.svg"

export const Route = createFileRoute("/_home/guides")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 4,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const location = useLocation()
  const matches = useMatches()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { completeModule } = useCompleteModule()
  const [scrollY, setScrollY] = createSignal(0)

  createEffect(() => {
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: scrollY() === 0 ? 4 : 12,
      opacityOffset: -0.22,
      showGradient: false,
    })
  })

  onMount(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    onCleanup(() => window.removeEventListener("scroll", handleScroll))
  })

  const toc = () => {
    const currentMatch = matches()[matches().length - 1]
    return (
      (currentMatch?.loaderData as { toc?: TOCItem[] } | undefined)?.toc || []
    )
  }

  const handleGoHomeClick = (e: Event) => {
    e.preventDefault()

    const currentPath = location().pathname
    const staticModuleEntry = Object.entries(static_modules).find(
      ([, module]) => module.link === currentPath,
    )

    if (staticModuleEntry) {
      completeModule(staticModuleEntry[0])
      navigate({ to: "/learn" })
      return
    }

    const moduleId = currentPath.split("/").pop()

    if (moduleId) {
      const module = static_modules[moduleId as keyof typeof static_modules]

      if (module) {
        completeModule(moduleId)
      }
    }

    navigate({ to: "/learn" })
  }

  return (
    <>
      <ActiveLearningPathBackground />
      <div class="flex gap-6 px-6 py-4">
        <div class="mx-auto w-full">
          <Outlet />
        </div>
        <aside class="mt-[20vh] hidden w-32 shrink-0 md:w-64 lg:block">
          <div class="sticky top-40">
            <TableOfContents items={toc()} />
          </div>
        </aside>
      </div>
      <div class="mb-12 flex w-full justify-center">
        <Button
          variant="ghost"
          class="bg-background flex h-10 w-40 rounded-xl border p-0 opacity-80 hover:opacity-100 [&_svg]:size-full"
          onClick={handleGoHomeClick}
        >
          {/* @ts-expect-error vite-plugin-solid-svg types don't support class prop */}
          <GoHomeSvg class="" />
        </Button>
      </div>
    </>
  )
}

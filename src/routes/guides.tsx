import {
  For,
  Show,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js"
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
  useMatches,
  useNavigate,
} from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { authClient } from "@/lib/auth-client"
import { getUser } from "@/lib/auth"
import { useCompleteModule } from "@/lib/completions"
import { static_modules } from "@/data/static_modules"
import { queryKeys } from "~/query/query-keys"
import { TextbookChapterBackgrounds } from "@/components/TextbookChapterBackgrounds"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { TableOfContents, type TOCItem } from "@/components/TableOfContents"
import GoHomeSvg from "@/features/homepage/shared/assets/go-home.svg"
import { LogIn, LogOut } from "lucide-solid"

export const Route = createFileRoute("/guides")({
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

const guidesNavigation = [
  {
    category: "Nihongo Ninja",
    items: [
      {
        id: "home",
        title: "Home",
        href: "/guides",
      },
    ],
  },
  {
    category: "Guides",
    items: [
      {
        id: "japanese-guide",
        title: "Japanese Guide",
        href: "/guides/japanese-guide",
      },
      {
        id: "hiragana",
        title: "Hiragana + Katakana",
        href: "/guides/hiragana",
      },
      {
        id: "typing",
        title: "Typing in Japanese",
        href: "/guides/typing",
      },
      {
        id: "finding-shows",
        title: "Finding Shows & Movies",
        href: "/guides/finding-shows",
      },
      {
        id: "writing-practice",
        title: "Writing Practice",
        href: "/guides/writing-practice",
      },
      {
        id: "creator-support",
        title: "Support the Creators",
        href: "/guides/creator-support",
      },
    ],
  },
  {
    category: "Browser Extension",
    items: [
      {
        id: "nihongo-extension",
        title: "Nihongo Extension",
        href: "/guides/nihongo-extension",
      },
    ],
  },
  {
    category: "FAQ",
    items: [
      {
        id: "srs",
        title: "Spaced Repetition System",
        href: "/guides/srs",
      },
      {
        id: "comparison",
        title: "Using Anki or Other SRS?",
        href: "/guides/comparison",
      },
    ],
  },
]

function RouteComponent() {
  const user = getUser()
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

  const isActive = (href: string) => {
    return location().pathname === href
  }

  const toc = () => {
    const currentMatch = matches()[matches().length - 1]
    return (
      (currentMatch?.loaderData as { toc?: TOCItem[] } | undefined)?.toc || []
    )
  }

  const handleSignOut = async () => {
    await authClient.signOut()
    queryClient.invalidateQueries({ queryKey: ["auth"] })
    navigate({ to: "/" })
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
      <TextbookChapterBackgrounds />
      <SidebarProvider
        style={{
          "--sidebar-width": "18rem",
        }}
      >
        <Sidebar class="bg-background/70 shadow-[2px_0_8px_-2px_rgba(0,0,0,0.05)] backdrop-blur-md dark:shadow-[2px_0_8px_-2px_rgba(0,0,0,0.15)]">
          <SidebarContent class="pt-4 pl-3">
            <For each={guidesNavigation}>
              {(section) => (
                <SidebarGroup>
                  <SidebarGroupLabel class="text-muted-foreground">
                    {section.category}
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <For each={section.items}>
                        {(item) => (
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              as={Link}
                              href={item.href}
                              isActive={isActive(item.href)}
                            >
                              <span
                                class={`${isActive(item.href) && "text-dynamic-accent brightness-150"}`}
                              >
                                {item.title}
                              </span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )}
                      </For>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              )}
            </For>
          </SidebarContent>
          <SidebarFooter class="p-4">
            <Show
              when={user()}
              fallback={
                <Link to="/auth">
                  <Button
                    variant="ghost"
                    class="w-full justify-start gap-2 text-primary/60 hover:text-primary"
                  >
                    <LogIn class="h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
              }
            >
              <Button
                variant="ghost"
                onClick={handleSignOut}
                class="w-full justify-start gap-2 text-primary/60 hover:text-red-400"
              >
                <LogOut class="h-4 w-4" />
                Sign Out
              </Button>
            </Show>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset class="bg-transparent">
          <SidebarTrigger class="bg-card/70 absolute top-2 left-2 p-4" />
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
        </SidebarInset>
      </SidebarProvider>
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

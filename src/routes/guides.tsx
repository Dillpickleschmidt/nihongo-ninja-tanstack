// routes/guides.tsx
import { For, Show } from "solid-js"
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
  useMatches,
} from "@tanstack/solid-router"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
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
import { Button } from "@/components/ui/button"
import { BackgroundLayers } from "@/features/homepage/components/BackgroundLayers"
import LogoutButton from "@/features/auth/components/Logout"
import { TableOfContents, type TOCItem } from "@/components/TableOfContents"
import GoHomeSvg from "@/features/homepage/go-home.svg"

export const Route = createFileRoute("/guides")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
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
        href: "/guides/home",
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
      // {
      //   id: "grammar-cheatsheets",
      //   title: "Grammar Cheatsheets",
      //   href: "/guides/grammar-cheatsheets",
      // },
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
  const { user } = Route.useLoaderData()()
  const location = useLocation()
  const matches = useMatches()
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )

  const isActive = (href: string) => {
    return location().pathname === href
  }

  const toc = () => {
    const currentMatch = matches()[matches().length - 1]
    return (
      (currentMatch?.loaderData as { toc?: TOCItem[] } | undefined)?.toc || []
    )
  }

  return (
    <>
      <BackgroundLayers />
      <SidebarProvider
        style={{
          "--sidebar-width": "18rem",
        }}
      >
        <Sidebar>
          <SidebarContent class="bg-background/70 pt-4 pl-3 shadow-[2px_0_8px_-2px_rgba(0,0,0,0.05)] backdrop-blur-md dark:shadow-[2px_0_8px_-2px_rgba(0,0,0,0.15)]">
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
                                class={`${isActive(item.href) && "text-indigo-400"}`}
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
          <SidebarFooter class="bg-background/70 p-4">
            <Show
              when={user}
              fallback={
                <div>
                  <Button
                    as={Link}
                    href="/auth"
                    class="h-8 border-2 border-black bg-indigo-400 opacity-70 transition-opacity duration-200 hover:bg-indigo-400 hover:opacity-100"
                  >
                    Login
                  </Button>
                </div>
              }
            >
              <div class="flex items-center gap-3 rounded-lg p-2">
                <div class="text-sm">
                  <p class="text-foreground/90 font-medium">{user?.email}</p>
                  <LogoutButton class="text-muted-foreground hover:text-foreground h-auto bg-transparent p-0 text-xs hover:bg-transparent" />
                </div>
              </div>
            </Show>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset class="bg-transparent">
          <SidebarTrigger class="bg-card/70 absolute top-2 left-2 p-4" />
          <div class="flex gap-6 px-6 py-4">
            <div class="mx-auto w-full">
              <Outlet />
            </div>
            <aside class="mt-[20vh] hidden w-32 flex-shrink-0 md:w-64 lg:block">
              <div class="sticky top-40">
                <TableOfContents items={toc()} />
              </div>
            </aside>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <div class="mb-12 flex w-full justify-center">
        <Button
          as={Link}
          to="/"
          variant="ghost"
          class="bg-background flex h-10 w-40 rounded-xl border p-0 opacity-80 hover:opacity-100 [&_svg]:size-full"
          onClick={() => {}}
        >
          <GoHomeSvg class="" />
        </Button>
      </div>
    </>
  )
}

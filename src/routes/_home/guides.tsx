// routes/guides.tsx
import { For, Show } from "solid-js"
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
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
import { BackgroundLayers } from "@/features/homepage-v2/components/BackgroundLayers"
import LogoutButton from "@/features/auth/components/Logout"

export const Route = createFileRoute("/_home/guides")({
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
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )

  const isActive = (href: string) => {
    return location().pathname === href
  }

  return (
    <>
      <BackgroundLayers />
      <SidebarProvider>
        <Sidebar>
          <SidebarContent class="bg-background/70 shadow-[2px_0_8px_-2px_rgba(0,0,0,0.05)] backdrop-blur-md dark:shadow-[2px_0_8px_-2px_rgba(0,0,0,0.15)]">
            <For each={guidesNavigation}>
              {(section) => (
                <SidebarGroup>
                  <SidebarGroupLabel>{section.category}</SidebarGroupLabel>
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
          <div class="px-6 py-4">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

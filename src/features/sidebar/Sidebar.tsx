import { For, Show, createSignal } from "solid-js"
import { Dynamic } from "solid-js/web"
import { Link, useLocation } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import { HamburgerIcon } from "@/components/HamburgerIcon"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { cn } from "@/utils"
import { getInitialAnimationStyles } from "@/utils/animations"
import {
  House,
  ChartNoAxesColumn,
  Clapperboard,
  GraduationCap,
  PencilLine,
  Repeat2,
  Hash,
  FileText,
  Package,
  Ellipsis,
  Import,
  LogIn,
  LogOut,
  type LucideIcon,
} from "lucide-solid"
import { getUser } from "@/lib/auth"

interface NavigationItem {
  id: string
  title: string
  href: string
  icon: LucideIcon | string
  class: string
}

interface NavigationSection {
  label?: string
  items: NavigationItem[]
}

interface SidebarProps {
  ref?: (el: HTMLDivElement) => void
  animated: boolean
  onSignOut?: () => void
}

const navigation: NavigationSection[] = [
  {
    items: [
      {
        id: "home",
        title: "Home",
        href: "/dashboard",
        icon: House,
        class: "text-primary",
      },
      {
        id: "stats",
        title: "Your Stats",
        href: "/stats",
        icon: ChartNoAxesColumn,
        class: "text-primary",
      },
      {
        id: "discover",
        title: "Real Content",
        href: "/discover",
        icon: Clapperboard,
        class: "text-primary",
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        id: "vocab",
        title: "Vocab",
        href: "/vocab",
        icon: GraduationCap,
        class: "text-orange-600 dark:text-orange-500",
      },
      {
        id: "sentences",
        title: "Sentences",
        href: "/sentence-practice",
        icon: PencilLine,
        class: "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
      },
      {
        id: "conjugation",
        title: "Conjugation",
        href: "/practice/conjugation",
        icon: Repeat2,
        class: "text-teal-500 dark:text-teal-400",
      },
      {
        id: "counters",
        title: "Counters",
        href: "/counters",
        icon: Hash,
        class: "text-green-600 dark:text-green-500",
      },
      {
        id: "cheatsheets",
        title: "Cheatsheets",
        href: "/cheatsheets",
        icon: FileText,
        class: "text-rose-600 dark:text-rose-500 opacity-80",
      },
      {
        id: "kana",
        title: "Kana",
        href: "/kana",
        icon: "あ",
        class: "text-sky-600 dark:text-sky-500",
      },
    ],
  },
  {
    label: "Extra",
    items: [
      {
        id: "guides",
        title: "Guides",
        href: "/guides",
        icon: GraduationCap,
        class: "text-primary",
      },
      {
        id: "extension",
        title: "Extension",
        href: "/guides/nihongo-extension",
        icon: Package,
        class: "text-primary",
      },
      {
        id: "import",
        title: "Import",
        href: "/import",
        icon: Import,
        class: "text-primary",
      },
      {
        id: "misc",
        title: "Misc",
        href: "/misc",
        icon: Ellipsis,
        class: "text-primary",
      },
    ],
  },
]

interface NavigationContentProps {
  isActive: (href: string) => boolean
  onNavigate?: () => void
  onSignOut?: () => void
}

function NavigationContent(props: NavigationContentProps) {
  const user = getUser()

  return (
    <div class="flex h-full flex-col justify-between px-6 pt-4">
      {/* <Link to="/" class="flex items-center gap-2 text-lg tracking-tight font-bold"> */}
      {/*   <img src="/icons/ninja.png" alt="Ninja" class="size-8 -mb-1.25" /> */}
      {/*   <span class="text-muted-foreground"> */}
      {/*     Nihongo Ninja */}
      {/*   </span> */}
      {/* </Link> */}
      {/* Navigation Groups */}
      <div class="flex-1 space-y-1 pt-24">
        <For each={navigation}>
          {(section) => (
            <div class="flex flex-col space-y-1 py-4">
              <Show when={section.label}>
                <div class="text-muted-foreground px-3 py-1 text-[0.68rem] font-semibold tracking-wide uppercase">
                  {section.label}
                </div>
              </Show>
              <For each={section.items}>
                {(item) => (
                  <Link to={item.href} onClick={props.onNavigate}>
                    <Button
                      variant="ghost"
                      class={cn("w-full justify-start px-2 hover:bg-(--accent)/20")}
                      onClick={() => { }}
                    >
                      <Show
                        when={typeof item.icon === "string"}
                        fallback={
                          <Dynamic
                            component={item.icon as LucideIcon}
                            class={cn(
                              "mx-1 size-4!",
                              item.class,
                              props.isActive(item.href) && "text-(--accent) brightness-150",
                            )}
                          />
                        }
                      >
                        <span
                          class={cn(
                            "mx-1 size-4 flex items-center justify-center text-base font-japanese font-medium",
                            item.class,
                            props.isActive(item.href) && "text-(--accent) brightness-150",
                          )}
                        >
                          {item.icon as string}
                        </span>
                      </Show>
                      <span
                        class={cn(
                          "text-[0.85rem] font-medium",
                          props.isActive(item.href) && "text-(--accent) brightness-150",
                        )}
                      >
                        {item.title}
                      </span>
                    </Button>
                  </Link>
                )}
              </For>
            </div>
          )}
        </For>
      </div>

      {/* Footer - Auth Section */}
      <div class="py-4">
        <Show
          when={user()}
          fallback={
            <Link to="/auth">
              <Button
                variant="ghost"
                class="w-full justify-start gap-2 text-primary/60 hover:text-primary"
              >
                <LogIn class="w-4 h-4" />
                Sign In
              </Button>
            </Link>
          }
        >
          <Button
            variant="ghost"
            onClick={props.onSignOut}
            class="w-full justify-start gap-2 text-primary/60 hover:text-red-400"
          >
            <LogOut class="w-4 h-4" />
            Sign Out
          </Button>
        </Show>
      </div>
    </div>
  )
}

function DesktopSidebar(props: {
  isActive: (href: string) => boolean
  ref?: (el: HTMLDivElement) => void
  animated: boolean
  onSignOut?: () => void
}) {
  return (
    <div
      ref={props.ref}
      class="fixed top-0 left-0 h-screen w-72 z-50"
      style={props.animated ? getInitialAnimationStyles("left") : undefined}
    >
      <NavigationContent
        isActive={props.isActive}
        onSignOut={props.onSignOut}
      />
    </div>
  )
}

export function Sidebar(props: SidebarProps) {
  const location = useLocation()

  // Check if a navigation item is active based on current route
  const isActive = (href: string) => {
    const pathname = location().pathname
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/")
  }

  // Mobile overlay open state (starts closed)
  const [isMobileOpen, setIsMobileOpen] = createSignal(false)

  return (
    <>
      {/* Mobile: Hamburger button and overlay drawer */}
      <SSRMediaQuery hideFrom="md">
        {/* Hamburger button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileOpen(!isMobileOpen())}
          class="fixed top-4 left-4 z-50"
        >
          <HamburgerIcon size="sm" />
        </Button>

        {/* Mobile overlay - backdrop and drawer */}
        <Show when={isMobileOpen()}>
          {/* Backdrop */}
          <div
            class="fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Mobile sidebar drawer */}
          <div class="bg-background/50 fixed top-0 left-0 z-50 h-full w-72 backdrop-blur-md">
            <NavigationContent
              isActive={isActive}
              onNavigate={() => setIsMobileOpen(false)}
              onSignOut={props.onSignOut}
            />
          </div>
        </Show>
      </SSRMediaQuery>

      {/* Desktop: Fixed sidebar */}
      <SSRMediaQuery showFrom="md">
        <DesktopSidebar
          isActive={isActive}
          ref={props.ref}
          animated={props.animated}
          onSignOut={props.onSignOut}
        />
      </SSRMediaQuery>
    </>
  )
}

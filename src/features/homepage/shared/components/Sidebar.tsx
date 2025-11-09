import { Component, For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import LogoutButton from "@/features/auth/components/Logout"
import { cn } from "@/utils"
import {
  Home,
  BarChart2,
  Sparkles,
  GraduationCap,
  PencilLine,
  Repeat2,
  Hash,
  FileText,
  Italic,
  Scroll,
  Package,
  MoreHorizontal,
} from "lucide-solid"

interface NavigationItem {
  id: string
  title: string
  href: string
  icon: Component
  class: string
}

interface NavigationSection {
  label?: string
  items: NavigationItem[]
}

interface SidebarProps {
  user: any
  isActive: (href: string) => boolean
}

const navigation: NavigationSection[] = [
  {
    items: [
      {
        id: "home",
        title: "Home",
        href: "/",
        icon: Home,
        class: "text-primary",
      },
      {
        id: "stats",
        title: "Your Stats",
        href: "/stats",
        icon: BarChart2,
        class: "text-primary",
      },
      {
        id: "extracurriculars",
        title: "Real Content",
        href: "/extracurriculars",
        icon: Sparkles,
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
        href: "/conjugation",
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
        icon: Italic,
        class: "text-sky-600 dar:text-sky-500",
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
        id: "misc",
        title: "Misc",
        href: "/misc",
        icon: MoreHorizontal,
        class: "text-primary",
      },
    ],
  },
]

export function Sidebar(props: SidebarProps) {
  return (
    <div class="h-[calc(100vh-65px)] w-72">
      <div class="flex h-full flex-col justify-between px-6 pt-24">
        {/* Navigation Groups */}
        <div class="flex-1 space-y-1">
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
                    <Button
                      as={Link}
                      to={item.href}
                      variant="ghost"
                      class={cn(
                        "hover:bg-card-foreground/50 justify-start px-2",
                        // isActive(item.href) && "bg-card-foreground/40",
                      )}
                    >
                      <item.icon
                        class={cn(
                          "mx-1 size-4!",
                          item.class,
                          props.isActive(item.href) && "text-indigo-400",
                        )}
                      />
                      <span
                        class={cn(
                          "text-[0.85rem] font-medium",
                          props.isActive(item.href) && "text-indigo-400",
                        )}
                      >
                        {item.title}
                      </span>
                    </Button>
                  )}
                </For>
              </div>
            )}
          </For>
        </div>

        {/* Footer */}
        {/* <div class="border-border border-t py-4"> */}
        {/*   <Show */}
        {/*     when={props.user} */}
        {/*     fallback={ */}
        {/*       <Button */}
        {/*         as={Link} */}
        {/*         href="/auth" */}
        {/*         class="h-8 w-20 border-2 border-black bg-indigo-400 opacity-70 transition-opacity duration-200 hover:bg-indigo-400 hover:opacity-100" */}
        {/*       > */}
        {/*         Login */}
        {/*       </Button> */}
        {/*     } */}
        {/*   > */}
        {/*     <div class="flex items-center gap-3 rounded-lg p-2"> */}
        {/*       <div class="text-sm"> */}
        {/*         <p class="text-foreground/90 font-medium"> */}
        {/*           {props.user?.email} */}
        {/*         </p> */}
        {/*         <LogoutButton class="text-muted-foreground hover:text-foreground h-auto bg-transparent p-0 text-xs hover:bg-transparent" /> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </Show> */}
        {/* </div> */}
      </div>
    </div>
  )
}

import { For, Show } from "solid-js"
import { Dynamic } from "solid-js/web"
import { Link, useLocation } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { getInitialAnimationStyles } from "@/utils/animations"
import {
  House,
  BookOpen,
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
  ArrowLeft,
  type LucideIcon,
} from "lucide-solid"
import { SidebarAuthFooter } from "./SidebarAuthFooter"
// --- Guides navigation data ---
const guidesNavigation = [
  {
    category: "Nihongo Ninja",
    items: [{ id: "home", title: "Home", href: "/guides" }],
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
      { id: "tools", title: "Tools", href: "/guides/tools" },
      { id: "typing", title: "Typing in Japanese", href: "/guides/typing" },
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
      { id: "srs", title: "Spaced Repetition System", href: "/guides/srs" },
      {
        id: "comparison",
        title: "Using Anki or Other SRS?",
        href: "/guides/comparison",
      },
    ],
  },
]

// --- Shared style tokens ---
const iconSize = "size-3.5! 2xl:size-4!"
const textSize = "text-[0.78rem] 2xl:text-[0.85rem] font-medium"
const labelSize =
  "text-[0.6rem] 2xl:text-[0.68rem] font-semibold tracking-wide uppercase"
const activeClass = "text-dynamic-accent brightness-150"

// --- Types ---
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

export interface NavigationContentProps {
  isActive: (href: string) => boolean
  onNavigate?: () => void
  onSignOut?: () => void
}

// --- Navigation data ---
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
        id: "learn",
        title: "Learning Path",
        href: "/learn",
        icon: BookOpen,
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
        href: "/conjugation",
        icon: Repeat2,
        class: "text-teal-500 dark:text-teal-400",
      },
      {
        id: "counters",
        title: "Counters",
        href: "/counters",
        icon: Hash,
        class: "text-violet-600 dark:text-violet-400",
      },
      {
        id: "cheatsheets",
        title: "Cheatsheets",
        href: "/cheatsheets",
        icon: FileText,
        class: "text-green-600 dark:text-green-500 opacity-80",
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

// --- Shared nav item renderer ---
function NavButton(props: {
  item: {
    href: string
    title: string
    icon?: LucideIcon | string
    class?: string
  }
  isActive: boolean
  onNavigate?: () => void
}) {
  return (
    <Link to={props.item.href} onClick={props.onNavigate}>
      <Button
        variant="ghost"
        class="w-full justify-start px-2 hover:bg-dynamic-accent/20"
      >
        <Show when={props.item.icon}>
          <Show
            when={typeof props.item.icon === "string"}
            fallback={
              <Dynamic
                component={props.item.icon as LucideIcon}
                class={cn(
                  "mx-1",
                  iconSize,
                  props.item.class,
                  props.isActive && activeClass,
                )}
              />
            }
          >
            <span
              class={cn(
                "mx-1 flex items-center justify-center text-sm 2xl:text-base font-japanese font-medium",
                iconSize,
                props.item.class,
                props.isActive && activeClass,
              )}
            >
              {props.item.icon as string}
            </span>
          </Show>
        </Show>
        <span class={cn(textSize, props.isActive && activeClass)}>
          {props.item.title}
        </span>
      </Button>
    </Link>
  )
}

// --- Section renderers ---
function DefaultNavigation(props: NavigationContentProps) {
  return (
    <div class="flex flex-1 flex-col gap-1 xl:gap-3 xl:pt-10 2xl:pt-14">
      <For each={navigation}>
        {(section) => (
          <div class="flex flex-col gap-0.5">
            <Show when={section.label}>
              <div
                class={cn("text-muted-foreground px-3 pt-2 xl:pt-3", labelSize)}
              >
                {section.label}
              </div>
            </Show>
            <For each={section.items}>
              {(item) => (
                <NavButton
                  item={item}
                  isActive={props.isActive(item.href)}
                  onNavigate={props.onNavigate}
                />
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  )
}

function GuidesNavigation(props: NavigationContentProps) {
  return (
    <div class="flex flex-1 flex-col gap-1 xl:gap-2 xl:pt-8 2xl:pt-12 overflow-y-auto">
      <Link to="/dashboard" onClick={props.onNavigate}>
        <Button
          variant="ghost"
          class="w-full justify-start px-2 gap-1.5 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft class={iconSize} />
          <span class={textSize}>Back to Main</span>
        </Button>
      </Link>
      <For each={guidesNavigation}>
        {(section) => (
          <div class="flex flex-col gap-0.5">
            <div
              class={cn("text-muted-foreground px-3 pt-2 xl:pt-3", labelSize)}
            >
              {section.category}
            </div>
            <For each={section.items}>
              {(item) => (
                <NavButton
                  item={item}
                  isActive={props.isActive(item.href)}
                  onNavigate={props.onNavigate}
                />
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  )
}

// --- Main content shell ---
export function NavigationContent(props: NavigationContentProps) {
  const location = useLocation()
  const isGuidesSection = () => location().pathname.startsWith("/guides")

  return (
    <div class="flex h-full flex-col px-6 pt-6 pb-4 gap-4 xl:gap-0">
      <Link
        to="/"
        class="flex items-center gap-2 text-lg tracking-tight font-bold"
        onClick={props.onNavigate}
      >
        <img
          src="/icons/ninja.png"
          alt="Ninja"
          class="size-6 2xl:size-8 -mb-1.25"
        />
        <span class="text-muted-foreground text-sm 2xl:text-base">
          Nihongo Ninja
        </span>
      </Link>

      <Show
        when={isGuidesSection()}
        fallback={<DefaultNavigation {...props} />}
      >
        <GuidesNavigation {...props} />
      </Show>

      <SidebarAuthFooter onSignOut={props.onSignOut} />
    </div>
  )
}

// --- Exports ---
export function Sidebar(props: SidebarProps) {
  const location = useLocation()

  const isActive = (href: string) => {
    const pathname = location().pathname
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <div
      ref={props.ref}
      class="h-full"
      style={props.animated ? getInitialAnimationStyles("left") : undefined}
    >
      <NavigationContent isActive={isActive} onSignOut={props.onSignOut} />
    </div>
  )
}

import {
  For,
  Show,
  createEffect,
  createMemo,
  createSignal,
  type JSX,
} from "solid-js"
import { Dynamic } from "solid-js/web"
import { Link, useLocation } from "@tanstack/solid-router"
import {
  BookOpen,
  Circle,
  CircleCheckBig,
  Clapperboard,
  Ellipsis,
  FileText,
  GraduationCap,
  Hash,
  House,
  Import,
  Package,
  PencilLine,
  PlayCircle,
  Repeat2,
  type LucideIcon,
} from "lucide-solid"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Skeleton } from "@/components/ui/custom/skeleton"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { LearningPathProvider, useLearningPath } from "@/features/learn/context/learning-path"
import { useLocalCompletions } from "@/lib/completions"
import { cn } from "@/utils"
import { getInitialAnimationStyles } from "@/utils/animations"
import { SidebarAuthFooter } from "./SidebarAuthFooter"
import type {
  LearningPathChapter,
  LearningPathModule,
} from "convex/model/learning_paths"

type SidebarTab = "menu" | "course"

interface SidebarProps {
  ref?: (el: HTMLDivElement) => void
  animated: boolean
  onSignOut?: () => void
}

interface NavigationContentProps {
  isActive: (href: string) => boolean
  onNavigate: () => void
  onSignOut?: () => void
}

interface NavigationItem {
  title: string
  href: string
  icon: LucideIcon | string
  class: string
}

const navigation: Array<{ label?: string; items: NavigationItem[] }> = [
  {
    items: [
      { title: "Home", href: "/dashboard", icon: House, class: "text-primary" },
      {
        title: "Learning Path",
        href: "/learn",
        icon: BookOpen,
        class: "text-primary",
      },
      {
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
        title: "Vocab",
        href: "/vocab",
        icon: GraduationCap,
        class: "text-orange-600 dark:text-orange-500",
      },
      {
        title: "Sentences",
        href: "/sentence-practice",
        icon: PencilLine,
        class: "text-yellow-600 saturate-[75%] dark:text-yellow-500",
      },
      {
        title: "Conjugation",
        href: "/conjugation",
        icon: Repeat2,
        class: "text-teal-500 dark:text-teal-400",
      },
      {
        title: "Counters",
        href: "/counters",
        icon: Hash,
        class: "text-violet-600 dark:text-violet-400",
      },
      {
        title: "Cheatsheets",
        href: "/cheatsheets",
        icon: FileText,
        class: "text-green-600 opacity-80 dark:text-green-500",
      },
      {
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
      { title: "Guides", href: "/guides", icon: GraduationCap, class: "text-primary" },
      {
        title: "Extension",
        href: "/guides/nihongo-extension",
        icon: Package,
        class: "text-primary",
      },
      { title: "Import", href: "/import", icon: Import, class: "text-primary" },
      { title: "Misc", href: "/misc", icon: Ellipsis, class: "text-primary" },
    ],
  },
]

export function Sidebar(props: SidebarProps) {
  const location = useLocation()
  const [tab, setTab] = createSignal<SidebarTab>("menu")

  createEffect(() => {
    const pathname = location().pathname
    if (pathname === "/learn" || pathname.startsWith("/learn/")) {
      setTab("course")
    } else if (pathname === "/dashboard") {
      setTab("menu")
    }
  })

  return (
    <div
      ref={props.ref}
      class="h-full"
      style={props.animated ? getInitialAnimationStyles("left") : undefined}
    >
      <LearningPathProvider>
        <SidebarShell tab={tab()} onTabChange={setTab} onSignOut={props.onSignOut}>
          <Show
            when={tab() === "course"}
            fallback={<MenuContent onNavigate={() => {}} />}
          >
            <CourseOutline />
          </Show>
        </SidebarShell>
      </LearningPathProvider>
    </div>
  )
}

function SidebarShell(props: {
  tab: SidebarTab
  onTabChange: (tab: SidebarTab) => void
  onSignOut?: () => void
  children: JSX.Element
}) {
  return (
    <div class="flex h-full flex-col">
      <div
        class={cn(
          "shrink-0 space-y-3 px-6 pt-6 pb-3",
          props.tab === "course" && "border-b border-border/70 dark:border-white/10",
        )}
      >
        <SidebarBrand />
        <SidebarTabs value={props.tab} onChange={props.onTabChange} />
        <Show when={props.tab === "course"}>
          <CourseSummary />
        </Show>
      </div>

      <div class="scrollbar-none min-h-0 flex-1 overflow-y-auto">
        {props.children}
      </div>

      <div class="shrink-0 border-t border-border/70 px-4 py-2 dark:border-white/10">
        <SidebarAuthFooter onSignOut={props.onSignOut} />
      </div>
    </div>
  )
}

function SidebarBrand() {
  return (
    <Link to="/" class="flex items-center gap-2 text-lg font-bold tracking-tight">
      <img
        src="/icons/ninja.png"
        alt="Ninja"
        class="size-6 -mb-1.25 2xl:size-8"
      />
      <span class="text-sm text-muted-foreground 2xl:text-base">
        Nihongo Ninja
      </span>
    </Link>
  )
}

function SidebarTabs(props: {
  value: SidebarTab
  onChange: (value: SidebarTab) => void
}) {
  return (
    <Tabs value={props.value} onChange={(value) => props.onChange(value as SidebarTab)}>
      <TabsList class="grid h-8 w-full grid-cols-2 bg-transparent p-0">
        <TabsTrigger
          value="menu"
          class="h-6 text-xs transition-none data-selected:bg-dynamic-accent/20 data-selected:text-dynamic-accent data-selected:brightness-125 data-selected:dark:bg-dynamic-accent/25"
        >
          Menu
        </TabsTrigger>
        <TabsTrigger
          value="course"
          class="h-6 text-xs transition-none data-selected:bg-dynamic-accent/20 data-selected:text-dynamic-accent data-selected:brightness-125 data-selected:dark:bg-dynamic-accent/25"
        >
          Course
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export function NavigationContent(props: NavigationContentProps) {
  return (
    <div class="flex h-full flex-col px-6 pt-6 pb-4 gap-4 xl:gap-0">
      <SidebarBrand />
      <MenuContent isActive={props.isActive} onNavigate={props.onNavigate} />
      <SidebarAuthFooter onSignOut={props.onSignOut} />
    </div>
  )
}

function MenuContent(props: {
  isActive?: (href: string) => boolean
  onNavigate: () => void
}) {
  const location = useLocation()
  const isActive = (href: string) => {
    if (props.isActive) return props.isActive(href)
    const pathname = location().pathname
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <nav class="flex flex-col gap-4 px-1 pb-4 lg:gap-0 xl:pt-11 2xl:pt-15 xl:[@media(min-height:900px)]:gap-8">
      <For each={navigation}>
        {(section) => (
          <div class="flex flex-col">
            <Show when={section.label}>
              <div class="pl-6.5 pr-6 pb-1.5 text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground 2xl:text-[0.68rem]">
                {section.label}
              </div>
            </Show>
            <For each={section.items}>
              {(item) => (
                <MenuButton
                  item={item}
                  active={isActive(item.href)}
                  onNavigate={props.onNavigate}
                />
              )}
            </For>
          </div>
        )}
      </For>
    </nav>
  )
}

function MenuButton(props: {
  item: NavigationItem
  active: boolean
  onNavigate: () => void
}) {
  return (
    <Link
      to={props.item.href}
      onClick={props.onNavigate}
      class={cn(
        buttonVariants({ variant: "ghost" }),
        "ease-instant-hover-75 w-full justify-start rounded-md pl-6.5 pr-6 py-2.5 hover:bg-dynamic-accent/20",
      )}
    >
        <Show
          when={typeof props.item.icon === "string"}
          fallback={
            <Dynamic
              component={props.item.icon as LucideIcon}
              class={cn(
                "mx-1 size-3.5 2xl:size-4",
                props.item.class,
                props.active && "text-dynamic-accent brightness-150",
              )}
            />
          }
        >
          <span
            class={cn(
              "mx-1 flex size-3.5 items-center justify-center font-japanese text-sm font-medium 2xl:size-4 2xl:text-base",
              props.item.class,
              props.active && "text-dynamic-accent brightness-150",
            )}
          >
            {props.item.icon as string}
          </span>
        </Show>
        <span
          class={cn(
            "text-[0.78rem] font-medium 2xl:text-[0.85rem]",
            props.active && "text-dynamic-accent brightness-150",
          )}
        >
          {props.item.title}
        </span>
    </Link>
  )
}

function CourseSummary() {
  const { selectedPath } = useLearningPath()
  const { completedCount, totalCount } = useCourseProgress()

  return (
    <div class="pt-1">
      <p class="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Active Course
      </p>
      <h2 class="mt-1 truncate text-sm font-semibold text-foreground dark:text-white">
        {selectedPath()?.shortName ?? selectedPath()?.name}
      </h2>
      <p class="mt-1 text-xs text-muted-foreground">
        {completedCount()} / {totalCount()} modules complete
      </p>
    </div>
  )
}

function CourseOutline() {
  const location = useLocation()
  const { query, preferences } = useLearningPath()
  const { isCompleted } = useCourseProgress()
  const [openChapters, setOpenChapters] = createSignal<string[]>([
    preferences().activeChapter,
  ])

  createEffect(() => {
    const activeChapter = preferences().activeChapter
    setOpenChapters((current) =>
      current.includes(activeChapter) ? current : [...current, activeChapter],
    )
  })

  const isActiveModule = (module: LearningPathModule) =>
    location().pathname === module.linkTo ||
    location().pathname.startsWith(module.linkTo + "/")

  return (
    <Show when={query.data()} fallback={<CourseOutlineSkeleton />}>
      {(data) => (
        <Show
          when={data().chapters.length > 0}
          fallback={
            <p class="px-6 py-4 text-sm text-muted-foreground">
              This learning path does not have any chapters yet.
            </p>
          }
        >
          <Accordion
            multiple
            value={openChapters()}
            onChange={setOpenChapters}
          >
            <For each={data().chapters}>
              {(chapter) => (
                <CourseChapter
                  chapter={chapter}
                  isCompleted={isCompleted}
                  isActiveModule={isActiveModule}
                />
              )}
            </For>
          </Accordion>
        </Show>
      )}
    </Show>
  )
}

function CourseChapter(props: {
  chapter: LearningPathChapter
  isCompleted: (moduleId: string) => boolean
  isActiveModule: (module: LearningPathModule) => boolean
}) {
  const completedCount = () =>
    props.chapter.modules.filter((module) => props.isCompleted(module.moduleId)).length

  return (
    <AccordionItem
      value={props.chapter.slug}
      class="border-t border-border/50 dark:border-white/8"
    >
      <div class="sticky top-0 z-20">
        <AccordionTrigger class="px-6 py-3 text-left hover:text-dynamic-accent">
          <div class="min-w-0">
            <div class="truncate text-xs font-semibold text-foreground dark:text-white">
              {props.chapter.title}
            </div>
            <div class="mt-0.5 text-[0.68rem] text-muted-foreground">
              {completedCount()} / {props.chapter.modules.length} complete
            </div>
          </div>
        </AccordionTrigger>
      </div>
      <AccordionContent class="px-0">
        <div class="border-t border-border/40 py-1 dark:border-white/5">
          <For each={props.chapter.modules}>
            {(module, index) => (
              <CourseModuleLink
                module={module}
                index={index()}
                completed={props.isCompleted(module.moduleId)}
                active={props.isActiveModule(module)}
              />
            )}
          </For>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

function CourseModuleLink(props: {
  module: LearningPathModule
  index: number
  completed: boolean
  active: boolean
}) {
  const ModuleIcon = getModuleIcon(props.module.module.module_type)
  const statusIcon = () => {
    if (props.completed) {
      return <CircleCheckBig class="size-3.5 text-dynamic-accent dark:brightness-125" />
    }
    if (props.active) {
      return <PlayCircle class="size-3.5 text-dynamic-accent dark:brightness-125" />
    }
    return <Circle class="size-3 text-muted-foreground/45" />
  }

  const content = (
    <div
      class={cn(
        "ease-instant-hover-75 flex items-center gap-2 border-b border-border/30 px-6 py-2 text-xs last:border-b-0 dark:border-white/5",
        props.active
          ? "text-dynamic-accent dark:brightness-125"
          : "text-muted-foreground hover:text-foreground dark:hover:text-white",
        props.completed &&
          "bg-dynamic-accent/8 text-dynamic-accent dark:brightness-125",
        props.module.disabled && "cursor-not-allowed opacity-50",
      )}
    >
      <span class="shrink-0">{statusIcon()}</span>
      <span class="min-w-0 flex-1 truncate">
        {props.index + 1}. {props.module.module.title}
      </span>
      <ModuleIcon
        class={cn(
          "size-3.5 shrink-0",
          getModuleIconClasses(props.module.module.module_type),
        )}
      />
    </div>
  )

  if (props.module.disabled) return content
  return <Link to={props.module.linkTo}>{content}</Link>
}

function useCourseProgress() {
  const { query } = useLearningPath()
  const completedSet = createMemo(
    () => new Set(query.data()?.completedModules ?? []),
  )
  const localCompletions = useLocalCompletions()
  const isCompleted = (moduleId: string) =>
    completedSet().has(moduleId) || moduleId in localCompletions()

  return {
    isCompleted,
    completedCount: () =>
      query
        .data()
        ?.chapters.reduce(
          (sum, chapter) =>
            sum +
            chapter.modules.filter((module) => isCompleted(module.moduleId))
              .length,
          0,
        ),
    totalCount: () =>
      query
        .data()
        ?.chapters.reduce((sum, chapter) => sum + chapter.modules.length, 0),
  }
}

function CourseOutlineSkeleton() {
  return (
    <div class="space-y-3">
      <Skeleton class="h-20" />
      <Skeleton class="h-28" />
      <Skeleton class="h-20" />
      <Skeleton class="h-20" />
    </div>
  )
}

import { Link } from "@tanstack/solid-router"
import {
  For,
  Show,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js"
import { Dynamic } from "solid-js/web"
import { ArrowRight, Check } from "lucide-solid"

import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import type { DashboardCard } from "./dashboard-cards-data"

/**
 * Tool showcase — every practice tool is rendered stacked as an alternating
 * two-column feature block. A sticky rail at the top quick-jumps between them
 * and highlights whichever block is currently in view (scroll-spy).
 */
export function ToolShowcase(props: {
  tools: DashboardCard[]
  vocabDueCount?: () => number | undefined
}) {
  const [active, setActive] = createSignal(0)
  const [stuck, setStuck] = createSignal(false)

  const tabRefs: HTMLButtonElement[] = []
  const sectionRefs: HTMLElement[] = []
  let railRef: HTMLDivElement | undefined
  let sentinelRef: HTMLDivElement | undefined
  const [indicator, setIndicator] = createSignal({ left: 0, width: 0 })

  // Ignore scroll-spy while a click-jump is animating, so the pill doesn't
  // race through every tab between origin and destination.
  let suppressSpy = false

  const syncIndicator = () => {
    const el = tabRefs[active()]
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
  }

  // Keep the active tab centered within the rail's own horizontal scroll.
  // (scrollIntoView would scroll the page when the rail is off-screen.)
  const scrollTabIntoView = (i: number) => {
    const tab = tabRefs[i]
    if (!railRef || !tab) return
    railRef.scrollTo({
      left: tab.offsetLeft - railRef.clientWidth / 2 + tab.offsetWidth / 2,
      behavior: "smooth",
    })
  }

  createEffect(() => {
    syncIndicator()
    scrollTabIntoView(active())
  })

  const jumpTo = (i: number) => {
    suppressSpy = true
    setActive(i)
    sectionRefs[i]?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.setTimeout(() => (suppressSpy = false), 700)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const last = props.tools.length - 1
    let next: number
    if (e.key === "ArrowRight") next = active() === last ? 0 : active() + 1
    else if (e.key === "ArrowLeft") next = active() === 0 ? last : active() - 1
    else if (e.key === "Home") next = 0
    else if (e.key === "End") next = last
    else return
    e.preventDefault()
    jumpTo(next)
    tabRefs[next]?.focus()
  }

  onMount(() => {
    syncIndicator()
    document.fonts?.ready.then(syncIndicator)
    const onResize = () => syncIndicator()
    window.addEventListener("resize", onResize)

    // Scroll-spy: the active tab follows the block under the sticky rail.
    const visible = new Array(props.tools.length).fill(false)
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = sectionRefs.indexOf(e.target as HTMLElement)
          if (i >= 0) visible[i] = e.isIntersecting
        }
        if (suppressSpy) return
        const first = visible.indexOf(true)
        if (first >= 0) setActive(first)
      },
      { rootMargin: "-96px 0px -55% 0px" },
    )
    for (const el of sectionRefs) spy.observe(el)

    // Toggle the rail's floating styling only once it's pinned to the top.
    const stick = new IntersectionObserver(
      ([e]) => setStuck(e.boundingClientRect.top < 16),
      { rootMargin: "-16px 0px 0px 0px" },
    )
    if (sentinelRef) stick.observe(sentinelRef)

    // Warm the image cache so jumps land on an already-loaded screenshot.
    for (const tool of props.tools) {
      const img = new Image()
      img.src = tool.image
    }

    onCleanup(() => {
      window.removeEventListener("resize", onResize)
      spy.disconnect()
      stick.disconnect()
    })
  })

  const dueLabel = (tool: DashboardCard) => {
    if (tool.dueCountType === "sentences") return "–"
    if (tool.dueCountType === "vocab") {
      const count = props.vocabDueCount?.()
      return count !== undefined ? String(count) : "–"
    }
    return undefined
  }

  return (
    <div class="mt-7">
      <style>{`
        @keyframes tool-nav-in { from { opacity: 0; } to { opacity: 1; } }
        .tool-nav-in { animation: tool-nav-in 0.5s ease-out both; }
        .tool-rail { scrollbar-width: none; }
        .tool-rail::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Sentinel — marks the rail's resting position to detect when pinned */}
      <div ref={sentinelRef} aria-hidden="true" class="h-0" />

      {/* Sticky quick-jump rail */}
      <div
        ref={railRef}
        role="tablist"
        aria-label="Practice tools"
        onKeyDown={onKeyDown}
        class={`tool-rail tool-nav-in sticky top-4 z-20 flex gap-1 overflow-x-auto rounded-2xl border p-1.5 opacity-0 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-200 ${
          stuck()
            ? "border-border/60 bg-background/80 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.4)] backdrop-blur-md dark:border-white/8 dark:bg-background/70"
            : "border-transparent"
        }`}
        style={{ "animation-delay": "260ms" }}
      >
        {/* Sliding active-tab pill */}
        <div
          class="pointer-events-none absolute bottom-1.5 top-1.5 rounded-xl transition-[left,width] duration-300 ease-out"
          style={{
            left: `${indicator().left}px`,
            width: `${indicator().width}px`,
            background:
              "color-mix(in srgb, var(--dynamic-accent) 13%, transparent)",
          }}
        />
        <For each={props.tools}>
          {(tool, i) => {
            const isActive = () => active() === i()
            return (
              <button
                ref={(el) => (tabRefs[i()] = el)}
                type="button"
                role="tab"
                aria-selected={isActive()}
                aria-controls={`tool-${tool.id}`}
                tabindex={isActive() ? 0 : -1}
                onClick={() => jumpTo(i())}
                class="group/tab relative z-10 flex shrink-0 items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-sm transition-colors lg:flex-1"
              >
                <Dynamic
                  component={getModuleIcon(tool.moduleType ?? "")}
                  class={`size-4 shrink-0 transition-colors ${
                    isActive()
                      ? getModuleIconClasses(tool.moduleType ?? "")
                      : "text-muted-foreground/40 group-hover/tab:text-muted-foreground/70 dark:text-white/25"
                  }`}
                />
                <span
                  class="whitespace-nowrap font-semibold transition-colors"
                  classList={{
                    "text-muted-foreground group-hover/tab:text-foreground/80 dark:text-white/45":
                      !isActive(),
                  }}
                  style={
                    isActive()
                      ? { color: "var(--dynamic-accent)" }
                      : undefined
                  }
                >
                  {tool.tabLabel ?? tool.title}
                </span>
              </button>
            )
          }}
        </For>
      </div>

      {/* Stacked feature blocks */}
      <div
        class="mt-4 animate-fade-up divide-y divide-border/50 opacity-0 dark:divide-white/7"
        style={{ "animation-delay": "320ms" }}
      >
        <For each={props.tools}>
          {(tool, i) => (
            <ToolBlock
              ref={(el) => (sectionRefs[i()] = el)}
              tool={tool}
              index={i()}
              total={props.tools.length}
              dueLabel={() => dueLabel(tool)}
            />
          )}
        </For>
      </div>
    </div>
  )
}

function ToolBlock(props: {
  ref: (el: HTMLElement) => void
  tool: DashboardCard
  index: number
  total: number
  dueLabel: () => string | undefined
}) {
  return (
    <section
      ref={props.ref}
      id={`tool-${props.tool.id}`}
      class="scroll-mt-28 py-3 lg:py-4"
    >
      <Link
        to={props.tool.href}
        aria-label={`Open ${props.tool.title}`}
        class="group/tool-row grid items-center gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10"
      >
        {/* Text */}
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <div
                class="grid size-8 shrink-0 place-items-center rounded-lg"
                style={{
                  background:
                    "color-mix(in srgb, var(--dynamic-accent) 12%, transparent)",
                }}
              >
                <Dynamic
                  component={getModuleIcon(props.tool.moduleType ?? "")}
                  class={`size-4 ${getModuleIconClasses(props.tool.moduleType ?? "")}`}
                />
              </div>
              <span class="text-[0.62rem] font-bold uppercase tracking-[0.22em] tabular-nums text-muted-foreground/70 dark:text-white/35">
                {pad(props.index + 1)}
                <span class="text-muted-foreground/35 dark:text-white/20">
                  {" / "}
                  {pad(props.total)}
                </span>
              </span>
            </div>
            <Show when={props.tool.tags?.length}>
              <div class="flex flex-wrap justify-end gap-1.5">
                <For each={props.tool.tags}>
                  {(tag) => (
                    <span class="rounded-full border border-border/60 px-2 py-0.5 font-excalifont text-[0.7rem] text-muted-foreground dark:border-white/10 dark:text-white/45">
                      {tag}
                    </span>
                  )}
                </For>
              </div>
            </Show>
          </div>

          <h3 class="font-excalifont text-2xl leading-tight text-foreground/90 sm:text-3xl dark:text-white/90">
            {props.tool.title}
          </h3>

          <p class="max-w-md text-sm leading-relaxed text-muted-foreground dark:text-white/50">
            {props.tool.description}
          </p>

          <Show when={props.tool.bullets?.length}>
            <ul class="flex flex-col gap-1.5">
              <For each={props.tool.bullets}>
                {(point) => (
                  <li class="flex items-start gap-2 text-sm text-foreground/70 dark:text-white/55">
                    <Check
                      class="mt-[3px] size-3.5 shrink-0"
                      style={{ color: "var(--dynamic-accent)" }}
                    />
                    <span class="leading-snug">{point}</span>
                  </li>
                )}
              </For>
            </ul>
          </Show>

          <div class="mt-1 flex items-center gap-4">
            <span
              class="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-transform group-hover/tool-row:scale-[1.02]"
              style={{
                background: "var(--dynamic-accent)",
                "box-shadow":
                  "0 10px 22px -10px color-mix(in srgb, var(--dynamic-accent) 55%, transparent)",
              }}
            >
              Open
              <ArrowRight class="size-4 transition-transform group-hover/tool-row:translate-x-0.5" />
            </span>
            <Show when={props.dueLabel()}>
              {(label) => (
                <span class="text-xs text-muted-foreground dark:text-white/40">
                  <span
                    class="mr-0.5 text-sm font-semibold tabular-nums"
                    style={{ color: "var(--dynamic-accent)" }}
                  >
                    {label()}
                  </span>{" "}
                  due for review
                </span>
              )}
            </Show>
          </div>
        </div>

        {/* Screenshot */}
        <div class="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/50 dark:border-white/7">
          <img
            src={props.tool.image}
            alt=""
            class="size-full object-cover"
          />
          <Show when={props.dueLabel()}>
            {(label) => (
              <div
                class="pointer-events-none absolute right-3 top-3 rounded-full border bg-white/90 px-2.5 py-1 text-xs font-medium shadow-sm backdrop-blur dark:bg-background/80 dark:shadow-none"
                style={{
                  color: "var(--dynamic-accent)",
                  "border-color":
                    "color-mix(in srgb, var(--dynamic-accent) 20%, transparent)",
                }}
              >
                {label()} due
              </div>
            )}
          </Show>
        </div>
      </Link>
    </section>
  )
}

function pad(n: number) {
  return n < 10 ? `0${n}` : String(n)
}

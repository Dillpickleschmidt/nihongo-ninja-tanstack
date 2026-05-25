import { Link } from "@tanstack/solid-router"
import { Show } from "solid-js"
import type { JSX } from "solid-js"
import { Dynamic } from "solid-js/web"
import { ArrowRight, Compass } from "lucide-solid"

import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { Skeleton } from "@/components/ui/custom/skeleton"
import type { ModuleLink } from "@/lib/module-links"

export type NextDashboardModule = {
  linkTo: ModuleLink
  chapterTitle: string
  module: { title: string; module_type: string }
}

/** Flat, borderless container — items only differ by hover/padding. */
const ITEM_BASE = "flex flex-col rounded-lg px-3 py-2"
const ITEM_INTERACTIVE = `group/item ${ITEM_BASE} text-left transition-colors hover:bg-foreground/[0.04] dark:hover:bg-white/[0.04]`

/**
 * The dashboard header's action pair — "next up" and "due for review" sitting
 * side by side as flat, typographic blocks rather than raised cards, so they
 * read as part of the header instead of competing with it.
 */
export function TodayActionsPanel(props: {
  class?: string
  mod: NextDashboardModule | undefined
  nextLoading: boolean
  meanings: number | undefined
  spellings: number | undefined
  total: number | undefined
  onStartReview: () => void
}) {
  return (
    <div
      class={`flex flex-col gap-1 sm:flex-row sm:items-stretch ${props.class ?? ""}`}
    >
      <NextUpItem mod={props.mod} loading={props.nextLoading} />
      <div class="my-1.5 hidden w-px shrink-0 self-stretch bg-border/60 sm:block dark:bg-white/[0.08]" />
      <ReviewItem
        meanings={props.meanings}
        spellings={props.spellings}
        total={props.total}
        onStart={props.onStartReview}
      />
    </div>
  )
}

function NextUpItem(props: {
  mod: NextDashboardModule | undefined
  loading: boolean
}) {
  return (
    <Show
      when={props.mod}
      fallback={
        <Show when={!props.loading} fallback={<ItemSkeleton flex />}>
          <Link to="/learn" class={`${ITEM_INTERACTIVE} min-w-0 flex-1`}>
            <Overline>Next up</Overline>
            <div class="mt-1.5 flex items-center gap-2">
              <Compass class="size-[1.05rem] shrink-0 text-muted-foreground dark:text-white/45" />
              <span class="min-w-0 flex-1 truncate text-[0.95rem] font-semibold text-foreground/85 dark:text-white/85">
                Choose a learning path
              </span>
              <ActionText label="Browse" />
            </div>
          </Link>
        </Show>
      }
    >
      {(mod) => (
        <Link
          to={mod().linkTo.to}
          search={mod().linkTo.search}
          class={`${ITEM_INTERACTIVE} min-w-0 flex-1`}
        >
          <Overline>Next up</Overline>
          <div class="mt-1.5 flex items-center gap-2">
            <Dynamic
              component={getModuleIcon(mod().module.module_type)}
              class={`size-[1.05rem] shrink-0 ${getModuleIconClasses(mod().module.module_type)}`}
            />
            <span class="min-w-0 flex-1 truncate text-[0.95rem] font-semibold text-foreground/85 dark:text-white/85">
              {mod().module.title}
            </span>
            <ActionText label="Continue" />
          </div>
        </Link>
      )}
    </Show>
  )
}

function ReviewItem(props: {
  meanings: number | undefined
  spellings: number | undefined
  total: number | undefined
  onStart: () => void
}) {
  return (
    <Show when={props.total !== undefined} fallback={<ItemSkeleton />}>
      <Show
        when={props.total! > 0}
        fallback={
          <div class={`${ITEM_BASE} shrink-0`}>
            <Overline>Due for review</Overline>
            <p class="mt-1.5 text-[0.95rem] font-medium text-foreground/45 dark:text-white/40">
              You're all caught up
            </p>
          </div>
        }
      >
        <button
          type="button"
          onClick={props.onStart}
          class={`${ITEM_INTERACTIVE} shrink-0`}
        >
          <Overline>Due for review</Overline>
          <div class="mt-1.5 flex items-center gap-2.5">
            <span
              class="text-[0.95rem] font-bold leading-none tabular-nums"
              style={{ color: "var(--dynamic-accent)" }}
            >
              {props.total}
            </span>
            <ReviewChip
              symbol="読"
              symbolClass="text-sky-500 dark:text-sky-300"
              value={props.meanings}
            />
            <ReviewChip
              symbol="あ"
              symbolClass="text-orange-500 dark:text-orange-300"
              value={props.spellings}
            />
            <ActionText label="Review" />
          </div>
        </button>
      </Show>
    </Show>
  )
}

/** Flat text "button" — accent label with an arrow that nudges on hover. */
function ActionText(props: { label: string }) {
  return (
    <span
      class="inline-flex shrink-0 items-center gap-0.5 text-xs font-semibold"
      style={{ color: "var(--dynamic-accent)" }}
    >
      {props.label}
      <ArrowRight class="size-3.5 transition-transform group-hover/item:translate-x-0.5" />
    </span>
  )
}

function ReviewChip(props: {
  symbol: string
  symbolClass: string
  value: number | undefined
}) {
  return (
    <span class="inline-flex items-baseline gap-1">
      <span
        class={`font-japanese text-[0.85rem] leading-none ${props.symbolClass}`}
      >
        {props.symbol}
      </span>
      <span class="text-[0.8rem] font-semibold tabular-nums text-foreground/65 dark:text-white/65">
        <Show when={props.value !== undefined} fallback="–">
          {props.value}
        </Show>
      </span>
    </span>
  )
}

function Overline(props: { children: JSX.Element }) {
  return (
    <span class="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground/70 dark:text-white/35">
      {props.children}
    </span>
  )
}

function ItemSkeleton(props: { flex?: boolean }) {
  return (
    <div class={`${ITEM_BASE} ${props.flex ? "min-w-0 flex-1" : "shrink-0"}`}>
      <Skeleton class="h-2.5 w-14 rounded bg-muted/60 dark:bg-white/[0.04]" />
      <div class="mt-2 flex items-center gap-2">
        <Skeleton class="size-[1.05rem] shrink-0 rounded bg-muted/60 dark:bg-white/[0.05]" />
        <Skeleton
          class="h-3.5 rounded bg-muted/70 dark:bg-white/[0.05]"
          style={{ width: props.flex ? "9rem" : "6rem" }}
        />
      </div>
    </div>
  )
}

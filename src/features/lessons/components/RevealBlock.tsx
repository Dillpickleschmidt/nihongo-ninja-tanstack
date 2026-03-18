import type { JSX } from "solid-js"
import { createSignal } from "solid-js"
import * as CollapsiblePrimitive from "@kobalte/core/collapsible"
import { ChevronDown } from "lucide-solid"

export default function RevealBlock(props: {
  children: JSX.Element
  openLabel?: string
  closedLabel?: string
}) {
  const [open, setOpen] = createSignal(false)

  return (
    <CollapsiblePrimitive.Root open={open()} onOpenChange={setOpen}>
      {/* Static top line — hidden when closed, visible when open */}
      <div
        class={`h-px w-full transition-opacity duration-200 ${open() ? "opacity-15" : "opacity-0"}`}
        style={{
          background: `linear-gradient(to right, var(--dynamic-accent), transparent 90%)`,
        }}
      />

      {/* Expandable content */}
      <CollapsiblePrimitive.Content class="overflow-hidden data-[closed]:animate-[collapsible-collapse_200ms_ease] data-[expanded]:animate-[collapsible-expand_200ms_ease]">
        <div class="py-6">{props.children}</div>
      </CollapsiblePrimitive.Content>

      {/* Trigger: bottom line + chevron + label — moves down when content expands */}
      <CollapsiblePrimitive.Trigger class="group flex w-full cursor-pointer flex-col items-center">
        <div
          class="h-px w-full"
          style={{
            background: `linear-gradient(to right, var(--dynamic-accent), transparent 90%)`,
            opacity: 0.15,
          }}
        />
        <ChevronDown class="mt-2 size-3 text-white/20 transition-all duration-200 group-hover:text-white/40 group-data-[expanded]:rotate-180" />
        <span class="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/20 transition-colors group-hover:text-white/40">
          {open() ? (props.openLabel ?? "Show less") : (props.closedLabel ?? "Show more")}
        </span>
      </CollapsiblePrimitive.Trigger>
    </CollapsiblePrimitive.Root>
  )
}

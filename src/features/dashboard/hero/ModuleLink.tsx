import { Link } from "@tanstack/solid-router"
import { Show } from "solid-js"
import { ChevronRight, Play } from "lucide-solid"
import { cn } from "@/utils"

interface ModuleLinkProps {
  linkTo: string
  title: string
  isPrimary: boolean
}

export function ModuleLink(props: ModuleLinkProps) {
  return (
    <Link
      to={props.linkTo}
      class={cn(
        "group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm transition-all",
        props.isPrimary
          ? "bg-linear-to-r from-(--accent) to-(--accent-end) text-white font-medium hover:scale-[1.02]"
          : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
      )}
      style={
        props.isPrimary
          ? {
            "box-shadow":
              "0 8px 20px -4px color-mix(in srgb, var(--accent) 30%, transparent)",
          }
          : {}
      }
    >
      <Show when={props.isPrimary}>
        <Play class="size-4" />
      </Show>
      <span class="truncate max-w-[200px]">{props.title}</span>
      <ChevronRight
        class={cn(
          "size-4 transition-transform",
          props.isPrimary && "group-hover:translate-x-0.5"
        )}
      />
    </Link>
  )
}

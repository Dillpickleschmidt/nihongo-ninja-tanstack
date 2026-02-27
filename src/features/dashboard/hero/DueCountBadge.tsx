import { Show } from "solid-js"
import { LoaderCircle } from "lucide-solid"

interface DueCountBadgeProps {
  count: number | undefined
}

export function DueCountBadge(props: DueCountBadgeProps) {
  return (
    <div class="text-right">
      <Show
        when={props.count !== undefined}
        fallback={<LoaderCircle class="ml-auto h-5 w-5 animate-spin text-white/50" />}
      >
        <div class="text-2xl font-bold text-(--accent) brightness-150 md:text-3xl">
          {props.count}
        </div>
      </Show>
      <div class="text-xs text-white/40">due cards</div>
    </div>
  )
}

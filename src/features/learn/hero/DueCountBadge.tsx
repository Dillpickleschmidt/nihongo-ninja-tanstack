import { LoaderCircle } from "lucide-solid"
import { Show, createMemo, type Accessor } from "solid-js"

interface DueCountBadgeProps {
  count: Accessor<number | undefined>
}

export function DueCountBadge(props: DueCountBadgeProps) {
  const count = createMemo(() => props.count())

  return (
    <div class="flex items-center gap-2">
      <Show
        when={count() !== undefined}
        fallback={
          <LoaderCircle class="h-4 w-4 animate-spin text-white/50" />
        }
      >
        <span class="text-2xl font-bold text-dynamic-accent brightness-150">
          {count()}
        </span>
      </Show>
      <span class="text-sm text-white/40">due cards</span>
    </div>
  )
}

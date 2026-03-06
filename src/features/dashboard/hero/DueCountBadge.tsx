import { LoaderCircle } from "lucide-solid"
import { Show, createMemo, type Accessor } from "solid-js"

interface DueCountBadgeProps {
  count: Accessor<number | undefined>
}

export function DueCountBadge(props: DueCountBadgeProps) {
  const count = createMemo(() => props.count())

  return (
    <div class="text-right">
      <Show
        when={count() !== undefined}
        fallback={
          <LoaderCircle class="ml-auto h-5 w-5 animate-spin text-white/50" />
        }
      >
        <div class="text-2xl font-bold text-(--accent) brightness-150 md:text-3xl">
          {count()}
        </div>
      </Show>
      <div class="text-xs text-white/40">due cards</div>
    </div>
  )
}

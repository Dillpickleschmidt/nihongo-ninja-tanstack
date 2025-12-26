type Props = {
  completed: number
  total: number
  deckName: string
}

export function ProgressHeader(props: Props) {
  const percentage = () =>
    props.total > 0 ? (props.completed / props.total) * 100 : 0

  return (
    <div class="mb-4 px-4 pt-4">
      <div class="mx-auto max-w-2xl">
        {/* Deck name */}
        <h1 class="mb-2 text-center text-lg font-semibold text-foreground">
          {props.deckName}
        </h1>

        {/* Progress bar */}
        <div class="flex items-center gap-3">
          <div class="h-2 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              class="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
              style={{ width: `${percentage()}%` }}
            />
          </div>
          <span class="text-sm font-medium text-muted-foreground">
            {props.completed} / {props.total}
          </span>
        </div>
      </div>
    </div>
  )
}

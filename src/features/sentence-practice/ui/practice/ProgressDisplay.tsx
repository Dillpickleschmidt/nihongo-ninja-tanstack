// ui/practice/ProgressDisplay.tsx
interface ProgressDisplayProps {
  attempted: number
  total: number
}

export default function ProgressDisplay(props: ProgressDisplayProps) {
  const progress = () => (props.attempted / props.total) * 100

  return (
    <div class="pt-2">
      <div class="text-muted-foreground flex items-center justify-between text-sm">
        <span>
          Question: {props.attempted}/{props.total}
        </span>
      </div>
      <div class="bg-muted mt-2 h-2 overflow-hidden rounded-full">
        <div
          class="bg-primary h-full rounded-full transition-all duration-500"
          style={{ width: `${progress()}%` }}
        />
      </div>
    </div>
  )
}

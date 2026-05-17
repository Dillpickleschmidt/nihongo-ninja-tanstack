interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
}

export function getProgressColor(progress: number) {
  const p = Math.max(0, Math.min(100, progress))
  const red500 = [239, 68, 68]
  const yellow500 = [234, 179, 8]
  const green500 = [34, 197, 94]

  let r, g, b

  if (p <= 50) {
    const ratio = p / 50
    r = Math.round(red500[0] + (yellow500[0] - red500[0]) * ratio)
    g = Math.round(red500[1] + (yellow500[1] - red500[1]) * ratio)
    b = Math.round(red500[2] + (yellow500[2] - red500[2]) * ratio)
  } else {
    const ratio = (p - 50) / 50
    r = Math.round(yellow500[0] + (green500[0] - yellow500[0]) * ratio)
    g = Math.round(yellow500[1] + (green500[1] - yellow500[1]) * ratio)
    b = Math.round(yellow500[2] + (green500[2] - yellow500[2]) * ratio)
  }

  return `rgb(${r}, ${g}, ${b})`
}

export function ProgressRing(props: ProgressRingProps) {
  const size = () => props.size ?? 140
  const strokeWidth = () => props.strokeWidth ?? 5
  const radius = () => (size() - strokeWidth()) / 2
  const circumference = () => 2 * Math.PI * radius()
  const offset = () =>
    circumference() * (1 - Math.min(100, props.progress) / 100)
  const center = () => size() / 2

  return (
    <div class="relative inline-flex items-center justify-center shrink-0">
      <svg
        class="-rotate-90"
        width={size()}
        height={size()}
        viewBox={`0 0 ${size()} ${size()}`}
      >
        <circle
          cx={center()}
          cy={center()}
          r={radius()}
          fill="none"
          stroke-width={strokeWidth()}
          stroke="currentColor"
          class="text-muted/80 dark:text-white/6"
        />
        <circle
          cx={center()}
          cy={center()}
          r={radius()}
          fill="none"
          stroke-width={strokeWidth()}
          stroke={getProgressColor(props.progress)}
          stroke-dasharray={String(circumference())}
          stroke-dashoffset={String(offset())}
          stroke-linecap="round"
          class="transition-all duration-700 ease-out"
        />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span
          class="text-3xl font-bold tabular-nums tracking-tight"
          style={{ color: getProgressColor(props.progress) }}
        >
          {props.progress >= 100 ? "百" : `${props.progress}%`}
        </span>
      </div>
    </div>
  )
}

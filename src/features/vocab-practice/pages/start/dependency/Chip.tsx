type ChipProps = {
  label: string
  color: "indigo" | "purple" | "sky" | "neutral"
  selected?: boolean
  onClick?: () => void
}

export function Chip(props: ChipProps) {
  const base =
    "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition"
  const palette = () => {
    switch (props.color) {
      case "indigo":
        return props.selected
          ? "border-indigo-500/40 bg-indigo-500/20 text-indigo-300"
          : "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20"
      case "purple":
        return props.selected
          ? "border-purple-500/40 bg-purple-500/20 text-purple-300"
          : "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
      case "sky":
        return props.selected
          ? "border-sky-500/40 bg-sky-500/20 text-sky-300"
          : "border-sky-500/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20"
      default:
        return props.selected
          ? "border-neutral-500/40 bg-neutral-500/20 text-neutral-300"
          : "border-neutral-500/30 bg-neutral-500/10 text-neutral-300 hover:bg-neutral-500/20"
    }
  }
  return (
    <button
      type="button"
      class={`${base} ${palette()}`}
      onClick={props.onClick}
      title={props.selected ? "Clear selection" : "Select"}
    >
      {props.label}
    </button>
  )
}

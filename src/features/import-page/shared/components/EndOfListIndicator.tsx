import { CheckCircle2 } from "lucide-solid"

interface EndOfListIndicatorProps {
  text?: string
}

export function EndOfListIndicator(props: EndOfListIndicatorProps) {
  return (
    <div class="text-muted-foreground py-12 text-center text-sm">
      <CheckCircle2 class="mx-auto mb-2 size-8 opacity-20" />
      <p>{props.text || "End of import results"}</p>
    </div>
  )
}

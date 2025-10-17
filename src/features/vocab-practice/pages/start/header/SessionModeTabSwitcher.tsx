// features/vocab-practice/components/SessionModeTabSwitcher.tsx
import { Button } from "@/components/ui/button"
import type { PracticeSessionMode } from "@/features/vocab-practice/types"

interface SessionModeTabSwitcherProps {
  mode: PracticeSessionMode
  onModeChange: (mode: PracticeSessionMode) => void
}

export function SessionModeTabSwitcher(props: SessionModeTabSwitcherProps) {
  return (
    <div class="bg-muted/50 inline-flex rounded-lg p-1">
      <Button
        variant="ghost"
        onClick={() => props.onModeChange("mixed")}
        class={`h-auto rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
          props.mode === "mixed"
            ? "bg-background/60 text-foreground hover:bg-background/70"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Mixed mode adds a handful of due cards from outside the current deck (up to 1 non-deck card for every 3 deck cards, so ~33% review and ~66% new). This helps keep your review count down."
      >
        Mixed
      </Button>
      <Button
        variant="ghost"
        onClick={() => props.onModeChange("focused")}
        class={`h-auto rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
          props.mode === "focused"
            ? "bg-background/60 text-foreground hover:bg-background/70"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Focused mode only includes cards from the current deck."
      >
        Focused
      </Button>
    </div>
  )
}

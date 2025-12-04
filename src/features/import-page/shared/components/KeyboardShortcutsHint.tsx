import { Keyboard } from "lucide-solid"

export function KeyboardShortcutsHint() {
  return (
    <div class="text-muted-foreground flex items-start gap-3 px-1 text-xs">
      <Keyboard class="mt-0.5 size-4 shrink-0 opacity-50" />
      <div>
        <p class="leading-relaxed">
          <strong class="text-muted-foreground">Shift + Click</strong> to select a
          range.
        </p>
        <p class="leading-relaxed mt-1">
          <strong class="text-muted-foreground">Cmd/Ctrl + Click</strong> to toggle
          individually.
        </p>
      </div>
    </div>
  )
}

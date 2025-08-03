import { Show, For } from "solid-js"
import { Home } from "lucide-solid"

interface LocationBreadcrumbProps {
  currentPath: DeckFolder[]
  selectedPath: DeckFolder[]
  hasChanges: boolean
}

export function LocationBreadcrumb(props: LocationBreadcrumbProps) {
  return (
    <div class="space-y-1">
      {/* Current Location */}
      <div class="text-muted-foreground flex items-center gap-1 text-sm">
        <span>Current:</span>
        <Home class="h-3.5 w-3.5" />
        <Show
          when={props.currentPath.length === 0}
          fallback={
            <For each={props.currentPath}>
              {(folder, index) => (
                <>
                  <span>{folder.folder_name}</span>
                  <Show when={index() < props.currentPath.length - 1}>
                    <span>›</span>
                  </Show>
                </>
              )}
            </For>
          }
        >
          <span>Root</span>
        </Show>
      </div>

      {/* New Location (if different) */}
      <Show when={props.hasChanges}>
        <div class="flex items-center gap-1 text-sm font-semibold text-emerald-600">
          <span>New:</span>
          <Home class="h-3.5 w-3.5" />
          <Show
            when={props.selectedPath.length === 0}
            fallback={
              <For each={props.selectedPath}>
                {(folder, index) => (
                  <>
                    <span>{folder.folder_name}</span>
                    <Show when={index() < props.selectedPath.length - 1}>
                      <span>›</span>
                    </Show>
                  </>
                )}
              </For>
            }
          >
            <span>Root</span>
          </Show>
        </div>
      </Show>
    </div>
  )
}

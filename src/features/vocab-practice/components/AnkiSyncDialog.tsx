import { Match, Switch } from "solid-js"
import { Button } from "@/components/ui/button"

export type AnkiSyncState =
  | { phase: "checking" }
  | { phase: "confirm"; toAdd: number; alreadyExist: number }
  | { phase: "loading" }
  | { phase: "error"; message: string }
  | { phase: "ready" }

type Props = {
  state: AnkiSyncState
  onContinue: () => void
  onCancel: () => void
  onRetry: () => void
}

export function AnkiSyncDialog(props: Props) {
  return (
    <div class="flex min-h-[50vh] items-center justify-center p-4">
      <div class="w-full max-w-md rounded-2xl border border-border/70 bg-card/70 p-8 shadow-xl backdrop-blur-md dark:border-card-foreground/20 dark:bg-card/60">
        <Switch>
          <Match when={props.state.phase === "checking"}>
            <div class="flex flex-col items-center gap-4">
              <div class="h-8 w-8 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
              <p class="text-muted-foreground">Connecting to Anki...</p>
            </div>
          </Match>

          <Match
            when={props.state.phase === "confirm" && props.state}
          >
            {(s) => {
              const state = s() as Extract<AnkiSyncState, { phase: "confirm" }>
              return (
                <div class="flex flex-col items-center gap-6">
                  <h3 class="text-lg font-semibold">Sync to Anki</h3>
                  <div class="text-center text-muted-foreground">
                    <p>
                      <span class="font-medium text-foreground">
                        {state.toAdd}
                      </span>{" "}
                      new cards will be added.
                    </p>
                    <p>
                      <span class="font-medium text-foreground">
                        {state.alreadyExist}
                      </span>{" "}
                      already exist.
                    </p>
                  </div>
                  <div class="flex gap-3">
                    <Button variant="outline" onClick={props.onCancel}>
                      Cancel
                    </Button>
                    <Button onClick={props.onContinue}>Continue</Button>
                  </div>
                </div>
              )
            }}
          </Match>

          <Match when={props.state.phase === "loading"}>
            <div class="flex flex-col items-center gap-4">
              <div class="h-8 w-8 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
              <p class="text-muted-foreground">
                Preparing practice session...
              </p>
            </div>
          </Match>

          <Match
            when={props.state.phase === "error" && props.state}
          >
            {(s) => {
              const state = s() as Extract<AnkiSyncState, { phase: "error" }>
              return (
                <div class="flex flex-col items-center gap-6">
                  <h3 class="text-lg font-semibold text-destructive">Error</h3>
                  <p class="text-center text-sm text-muted-foreground">
                    {state.message}
                  </p>
                  <div class="flex gap-3">
                    <Button variant="outline" onClick={props.onCancel}>
                      Cancel
                    </Button>
                    <Button onClick={props.onRetry}>Retry</Button>
                  </div>
                </div>
              )
            }}
          </Match>
        </Switch>
      </div>
    </div>
  )
}

// features/vocab-practice/components/pages/start-page/components/StartPageHeader.tsx
import { Show, type JSX } from "solid-js"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-solid"
import { SessionModeTabSwitcher } from "../../../SessionModeTabSwitcher"
import DeckSettingsDialogComponent from "../../../DeckSettingsDialogComponent"
import type { PracticeSessionMode } from "../../../../types"

type StartPageHeaderProps = {
  deckName: string | JSX.Element
  previewCount: string
  sessionMode: PracticeSessionMode
  onSessionModeChange: (mode: PracticeSessionMode) => void
  activeService: () => "local" | "jpdb" | "wanikani" | "anki" | null
}

export function StartPageHeader(props: StartPageHeaderProps) {
  return (
    <div class="relative px-4 pt-10 pb-6 lg:pt-14 lg:pb-8">
      <div class="mx-auto max-w-3xl">
        <div class="relative flex items-center justify-between">
          <div class="flex-1 text-center">
            <div class="mb-2">
              <span class="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-1 text-xs font-medium tracking-wide text-orange-400 uppercase">
                Vocab Practice
              </span>
            </div>
            <h1 class="text-2xl font-bold lg:text-4xl">{props.deckName}</h1>
            <p class="text-muted-foreground mt-2 text-sm lg:text-base">
              Master {props.previewCount} through interactive practice
            </p>
          </div>
          <div class="absolute top-0 right-0 flex items-center gap-3">
            <Show when={props.activeService() === "local"}>
              <SessionModeTabSwitcher
                mode={props.sessionMode}
                onModeChange={props.onSessionModeChange}
              />
            </Show>
            <DeckSettingsDialogComponent>
              <Button variant="ghost" size="sm" class="h-9 w-9 rounded-lg">
                <Settings class="h-4 w-4" />
              </Button>
            </DeckSettingsDialogComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

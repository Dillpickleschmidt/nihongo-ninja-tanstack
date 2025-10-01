// vocab-practice/components/DeckSettingsDialogComponent.tsx
import { createSignal, JSX, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useVocabPracticeContext } from "../context/VocabPracticeContext"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/queries/user-settings"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"

type DeckSettingsDialogProps = {
  children: JSX.Element
}

export default function DeckSettingsDialogComponent(
  props: DeckSettingsDialogProps,
) {
  const { uiState, setUIState } = useVocabPracticeContext()
  const [open, setOpen] = createSignal(false)

  const context = useRouteContext({ from: RootRoute.id })
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )
  const defaults = settingsQuery.data.routes["vocab-practice"]

  const handleOkClick = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open()} onOpenChange={setOpen}>
      <DialogTrigger tabIndex={-1}>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deck Settings</DialogTitle>
          <DialogDescription>
            Configure your deck settings here.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <Checkbox
            class="flex items-center space-x-2"
            checked={uiState.settings.shuffleAnswers}
            onChange={(isChecked) =>
              setUIState("settings", "shuffleAnswers", isChecked)
            }
          >
            <CheckboxInput />
            <CheckboxLabel>Shuffle answer choices</CheckboxLabel>
          </Checkbox>

          <Checkbox
            class="flex items-center space-x-2"
            checked={uiState.settings.enableKanjiRadicalPrereqs}
            onChange={(isChecked) =>
              setUIState("settings", "enableKanjiRadicalPrereqs", isChecked)
            }
          >
            <CheckboxInput />
            <CheckboxLabel class="flex items-center gap-2">
              Enable Kanji/Radical Prerequisites
              <Show
                when={
                  uiState.settings.enableKanjiRadicalPrereqs !==
                  defaults["enable-kanji-radical-prereqs"]
                }
              >
                <span class="text-muted-foreground text-xs italic">
                  (Default:{" "}
                  {defaults["enable-kanji-radical-prereqs"] ? "On" : "Off"})
                </span>
              </Show>
            </CheckboxLabel>
          </Checkbox>

          <Checkbox
            class="flex items-center space-x-2"
            checked={uiState.settings.flipVocabQA}
            onChange={(isChecked) =>
              setUIState("settings", "flipVocabQA", isChecked)
            }
          >
            <CheckboxInput />
            <CheckboxLabel class="flex items-center gap-2">
              Flip Vocabulary Q/A
              <Show
                when={
                  uiState.settings.flipVocabQA !== defaults["flip-vocab-qa"]
                }
              >
                <span class="text-muted-foreground text-xs italic">
                  (Default: {defaults["flip-vocab-qa"] ? "On" : "Off"})
                </span>
              </Show>
            </CheckboxLabel>
          </Checkbox>

          {/* CONDITIONAL: Hide flipKanjiRadicalQA when prerequisites are disabled */}
          <Show when={uiState.settings.enableKanjiRadicalPrereqs}>
            <Checkbox
              class="flex items-center space-x-2"
              checked={uiState.settings.flipKanjiRadicalQA}
              onChange={(isChecked) =>
                setUIState("settings", "flipKanjiRadicalQA", isChecked)
              }
            >
              <CheckboxInput />
              <CheckboxLabel class="flex items-center gap-2">
                Flip Kanji/Radical Q/A
                <Show
                  when={
                    uiState.settings.flipKanjiRadicalQA !==
                    defaults["flip-kanji-radical-qa"]
                  }
                >
                  <span class="text-muted-foreground text-xs italic">
                    (Default: {defaults["flip-kanji-radical-qa"] ? "On" : "Off"}
                    )
                  </span>
                </Show>
              </CheckboxLabel>
            </Checkbox>
          </Show>
        </div>
        <DialogFooter>
          <Button onClick={handleOkClick}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// vocab-practice/components/DeckSettingsDialogComponent.tsx
import { createSignal, JSX, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { Label } from "@/components/ui/label"

type DeckSettingsDialogProps = {
  children: JSX.Element
}

export default function DeckSettingsDialogComponent(
  props: DeckSettingsDialogProps,
) {
  const { state, setState } = useVocabPracticeContext()
  const [open, setOpen] = createSignal(false)

  // Default values for the toggles
  const DEFAULT_FLIP_VOCAB_QA = false
  const DEFAULT_FLIP_KANJI_RADICAL_QA = true
  const DEFAULT_ENABLE_PREREQUISITES = true

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
          <div class="flex items-center space-x-2">
            <Checkbox
              checked={state.settings.shuffleInput}
              onChange={(isChecked) =>
                setState("settings", "shuffleInput", isChecked)
              }
              id="shuffle-input"
            />
            <Label for="shuffle-input">Shuffle answer choices</Label>
          </div>

          <div class="flex items-center space-x-2">
            <Checkbox
              checked={state.settings.enablePrerequisites}
              onChange={(isChecked) =>
                setState("settings", "enablePrerequisites", isChecked)
              }
              id="enable-prerequisites"
            />
            <Label for="enable-prerequisites" class="flex items-center gap-2">
              Enable Kanji/Radical Prerequisites
              <Show
                when={
                  state.settings.enablePrerequisites !==
                  DEFAULT_ENABLE_PREREQUISITES
                }
              >
                <span class="text-muted-foreground text-xs italic">
                  (Default: {DEFAULT_ENABLE_PREREQUISITES ? "On" : "Off"})
                </span>
              </Show>
            </Label>
          </div>

          <div class="flex items-center space-x-2">
            <Checkbox
              checked={state.settings.flipVocabQA}
              onChange={(isChecked) =>
                setState("settings", "flipVocabQA", isChecked)
              }
              id="flip-vocab-qa"
            />
            <Label for="flip-vocab-qa" class="flex items-center gap-2">
              Flip Vocabulary Q/A
              <Show when={state.settings.flipVocabQA !== DEFAULT_FLIP_VOCAB_QA}>
                <span class="text-muted-foreground text-xs italic">
                  (Default: {DEFAULT_FLIP_VOCAB_QA ? "On" : "Off"})
                </span>
              </Show>
            </Label>
          </div>

          {/* CONDITIONAL: Hide flipKanjiRadicalQA when prerequisites are disabled */}
          <Show when={state.settings.enablePrerequisites}>
            <div class="flex items-center space-x-2">
              <Checkbox
                checked={state.settings.flipKanjiRadicalQA}
                onChange={(isChecked) =>
                  setState("settings", "flipKanjiRadicalQA", isChecked)
                }
                id="flip-kanji-radical-qa"
              />
              <Label
                for="flip-kanji-radical-qa"
                class="flex items-center gap-2"
              >
                Flip Kanji/Radical Q/A
                <Show
                  when={
                    state.settings.flipKanjiRadicalQA !==
                    DEFAULT_FLIP_KANJI_RADICAL_QA
                  }
                >
                  <span class="text-muted-foreground text-xs italic">
                    (Default: {DEFAULT_FLIP_KANJI_RADICAL_QA ? "On" : "Off"})
                  </span>
                </Show>
              </Label>
            </div>
          </Show>
        </div>
        <DialogFooter>
          <Button onClick={handleOkClick}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

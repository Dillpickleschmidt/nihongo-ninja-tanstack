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
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import { updateUserSettingsMutation } from "@/query/query-mutations"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { useMutation, useQueryClient } from "@tanstack/solid-query"

type DeckSettingsDialogProps = {
  children: JSX.Element
}

export default function DeckSettingsDialogComponent(
  props: DeckSettingsDialogProps,
) {
  const {
    uiState,
    setUIState,
    prerequisitesEnabled,
    prerequisitesDisabledReason,
    activeService,
  } = useVocabPracticeContext()
  const [open, setOpen] = createSignal(false)

  const context = useRouteContext({ from: RootRoute.id })
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )
  const defaults = settingsQuery.data!.routes["vocab-practice"]

  const queryClient = useQueryClient()
  const updateMutation = useMutation(() =>
    updateUserSettingsMutation(context().user?.id || null, queryClient),
  )

  // Determine if the prerequisites checkbox should be disabled
  const isPrerequisitesCheckboxDisabled = () => {
    const service = activeService()
    return service !== "local"
  }

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
            onChange={(isChecked) => {
              setUIState("settings", "shuffleAnswers", isChecked)
              updateMutation.mutate({
                routes: {
                  ...settingsQuery.data!.routes,
                  "vocab-practice": {
                    ...settingsQuery.data!.routes["vocab-practice"],
                    "shuffle-answers": isChecked,
                  },
                },
              })
            }}
          >
            <CheckboxInput />
            <CheckboxLabel>Shuffle answer choices</CheckboxLabel>
          </Checkbox>

          <Checkbox
            class="flex items-center space-x-2"
            checked={prerequisitesEnabled()}
            onChange={(isChecked) => {
              setUIState("settings", "enableKanjiRadicalPrereqs", isChecked)
              updateMutation.mutate({
                routes: {
                  ...settingsQuery.data!.routes,
                  "vocab-practice": {
                    ...settingsQuery.data!.routes["vocab-practice"],
                    "enable-kanji-radical-prereqs": isChecked,
                  },
                },
              })
            }}
            disabled={isPrerequisitesCheckboxDisabled()}
          >
            <CheckboxInput />
            <CheckboxLabel
              class="flex items-center gap-2"
              title={prerequisitesDisabledReason() || undefined}
            >
              Enable Kanji/Radical Prerequisites
              <Show when={isPrerequisitesCheckboxDisabled()}>
                <span class="text-muted-foreground text-xs italic">
                  ({prerequisitesDisabledReason()})
                </span>
              </Show>
              <Show
                when={
                  !isPrerequisitesCheckboxDisabled() &&
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
        </div>
        <DialogFooter>
          <Button onClick={handleOkClick}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

import { createSignal, For, Show } from "solid-js"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/custom/collapsible"
import { Button } from "@/components/ui/button"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import type {
  MatchedKanjiRadical,
  UnmatchedKanjiRadical,
} from "@/features/fsrs-import/core/jpdb-validation-types"

type ImportReviewDialogProps = {
  open: boolean
  matched: MatchedKanjiRadical[]
  unmatched: UnmatchedKanjiRadical[]
  vocabularyCount: number
  onConfirm: () => void
  onCancel: () => void
}

export const ImportReviewDialog = (props: ImportReviewDialogProps) => {
  const [unmatchedMeanings, setUnmatchedMeanings] = createSignal<
    Record<string, string>
  >({})

  const filledCount = () => {
    return Object.values(unmatchedMeanings()).filter((m) => m.trim() !== "")
      .length
  }

  const unfilledCount = () => props.unmatched.length - filledCount()

  const handleMeaningChange = (source: string, value: string) => {
    setUnmatchedMeanings((prev) => ({ ...prev, [source]: value }))
  }

  const handleConfirm = () => {
    props.onConfirm()
    // Reset state
    setUnmatchedMeanings({})
  }

  const handleCancel = () => {
    props.onCancel()
    // Reset state
    setUnmatchedMeanings({})
  }

  return (
    <Dialog open={props.open}>
      <DialogContent class="max-h-[80vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Review Import</DialogTitle>
          <DialogDescription>
            Review which items will be imported before continuing.
          </DialogDescription>
        </DialogHeader>

        <div class="space-y-4">
          {/* Matched Kanji/Radicals Section */}
          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger class="bg-muted/50 w-full rounded-lg p-3">
              <span class="text-base font-semibold">
                Matched Kanji/Radicals ({props.matched.length})
              </span>
            </CollapsibleTrigger>
            <CollapsibleContent class="mt-2 space-y-2">
              <Show
                when={props.matched.length > 0}
                fallback={
                  <p class="text-muted-foreground p-2 text-sm">
                    No matched kanji/radicals
                  </p>
                }
              >
                <div class="max-h-48 space-y-2 overflow-y-auto p-2">
                  <For each={props.matched}>
                    {(item) => (
                      <div class="flex items-center gap-3 rounded-md border p-2">
                        <span class="min-w-[3rem] text-center text-2xl font-bold">
                          {item.character}
                        </span>
                        <span class="text-muted-foreground flex-1 text-sm">
                          {item.meaning}
                        </span>
                      </div>
                    )}
                  </For>
                </div>
              </Show>
            </CollapsibleContent>
          </Collapsible>

          {/* Unmatched Kanji/Radicals Section */}
          <Collapsible>
            <CollapsibleTrigger class="bg-muted/50 w-full rounded-lg p-3">
              <span class="text-base font-semibold">
                Unmatched Kanji/Radicals ({props.unmatched.length})
              </span>
            </CollapsibleTrigger>
            <CollapsibleContent class="mt-2 space-y-2">
              <Show
                when={props.unmatched.length > 0}
                fallback={
                  <p class="text-muted-foreground p-2 text-sm">
                    No unmatched kanji/radicals
                  </p>
                }
              >
                <p class="text-muted-foreground p-2 text-xs">
                  These items were not found in WaniKani. You can optionally
                  provide meanings below (this will be used in a future update).
                </p>
                <div class="max-h-48 space-y-2 overflow-y-auto p-2">
                  <For each={props.unmatched}>
                    {(item) => (
                      <div class="flex items-center gap-3">
                        <span class="min-w-[3rem] text-center text-2xl font-bold">
                          {item.character}
                        </span>
                        <TextField class="flex-1">
                          <TextFieldInput
                            type="text"
                            placeholder="Meaning (optional)"
                            value={unmatchedMeanings()[item.source] || ""}
                            onInput={(e) =>
                              handleMeaningChange(
                                item.source,
                                e.currentTarget.value,
                              )
                            }
                          />
                        </TextField>
                      </div>
                    )}
                  </For>
                </div>
              </Show>
            </CollapsibleContent>
          </Collapsible>

          {/* Vocabulary Count */}
          <div class="bg-muted/30 rounded-lg border p-3">
            <p class="text-sm">
              <span class="font-semibold">+ {props.vocabularyCount}</span>{" "}
              vocabulary items will be imported
            </p>
          </div>

          {/* Warning about unfilled meanings */}
          <Show when={unfilledCount() > 0}>
            <div class="rounded-lg border border-yellow-500/50 bg-yellow-500/10 p-3">
              <p class="text-sm text-yellow-700 dark:text-yellow-300">
                ⚠️ {unfilledCount()} kanji/radical
                {unfilledCount() === 1 ? "" : "s"} will be skipped (no WaniKani
                match)
              </p>
            </div>
          </Show>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleConfirm}>Confirm Import</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

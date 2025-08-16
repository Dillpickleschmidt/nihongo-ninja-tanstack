// features/vocab-page/deck-creation/components/VocabItemEditor.tsx
import { Index, Show, createMemo } from "solid-js"
import { Plus, Trash2, Minus, InfoIcon } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldDescription,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { Checkbox } from "@/components/ui/checkbox"
import { useDeckCreationStore } from "../context/DeckCreationStoreContext"
import { useVocabItemValidation } from "../hooks/useVocabItemValidation"
import { createEmptyVocabItemFormData } from "../../types/vocabulary-types"
import { Label } from "@/components/ui/label"

interface VocabItemEditorProps {
  itemId: number
  index: number
  isFirstItem: boolean
  onRemove: () => void
}

export function VocabItemEditor(props: VocabItemEditorProps) {
  const { store, actions } = useDeckCreationStore()

  // Get form data for this item
  const formData = createMemo(() => {
    return (
      store.vocabItems.formData.get(props.itemId) ||
      createEmptyVocabItemFormData()
    )
  })

  // Create validation context
  const validationContext = createMemo(() => ({
    itemId: props.itemId,
    isFirstItem: props.isFirstItem,
    hasAttemptedSubmit: store.validation.hasAttemptedSubmit,
    formData: formData(),
  }))

  const validation = useVocabItemValidation(validationContext)

  // Update form data helper
  const updateFormData = (updates: Partial<typeof formData>) => {
    const current = formData()
    const updated = { ...current, ...updates }
    actions.updateVocabItemFormData(props.itemId, updated)
  }

  // English meanings handlers
  const addEnglishMeaning = () =>
    updateFormData({
      english: [...formData().english, ""],
    })

  const removeEnglishMeaning = (index: number) =>
    updateFormData({
      english:
        formData().english.length > 1
          ? formData().english.filter((_, i) => i !== index)
          : [""],
    })

  const updateEnglishMeaning = (index: number, value: string) =>
    updateFormData({
      english: formData().english.map((item, i) =>
        i === index ? value : item,
      ),
    })

  // Additional field handlers (keeping original logic)
  const addNote = () =>
    updateFormData({
      notes: [...formData().notes, ""],
    })

  const removeNote = (index: number) =>
    updateFormData({
      notes: formData().notes.filter((_, i) => i !== index),
    })

  const updateNote = (index: number, value: string) =>
    updateFormData({
      notes: formData().notes.map((item, i) => (i === index ? value : item)),
    })

  const addParticle = () =>
    updateFormData({
      particles: [...formData().particles, { particle: "", label: "" }],
    })

  const removeParticle = (index: number) =>
    updateFormData({
      particles: formData().particles.filter((_, i) => i !== index),
    })

  const updateParticle = (
    index: number,
    field: "particle" | "label",
    value: string,
  ) =>
    updateFormData({
      particles: formData().particles.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    })

  const addExample = () =>
    updateFormData({
      examples: [...formData().examples, { japanese: "", english: "" }],
    })

  const removeExample = (index: number) =>
    updateFormData({
      examples: formData().examples.filter((_, i) => i !== index),
    })

  const updateExample = (
    index: number,
    field: "japanese" | "english",
    value: string,
  ) =>
    updateFormData({
      examples: formData().examples.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    })

  const addReadingMnemonic = () =>
    updateFormData({
      readingMnemonics: [...formData().readingMnemonics, ""],
    })

  const removeReadingMnemonic = (index: number) =>
    updateFormData({
      readingMnemonics: formData().readingMnemonics.filter(
        (_, i) => i !== index,
      ),
    })

  const updateReadingMnemonic = (index: number, value: string) =>
    updateFormData({
      readingMnemonics: formData().readingMnemonics.map((item, i) =>
        i === index ? value : item,
      ),
    })

  const addKanjiMnemonic = () =>
    updateFormData({
      kanjiMnemonics: [...formData().kanjiMnemonics, ""],
    })

  const removeKanjiMnemonic = (index: number) =>
    updateFormData({
      kanjiMnemonics: formData().kanjiMnemonics.filter((_, i) => i !== index),
    })

  const updateKanjiMnemonic = (index: number, value: string) =>
    updateFormData({
      kanjiMnemonics: formData().kanjiMnemonics.map((item, i) =>
        i === index ? value : item,
      ),
    })

  // Required indicator helpers
  const getRequiredIndicator = (validation: {
    showError: boolean
    isRequired: boolean
    error?: string
  }) => {
    const hasAttemptedSubmit = store.validation.hasAttemptedSubmit
    const isFirstCard = props.isFirstItem

    // Show red error only after submit attempt and field is invalid
    if (hasAttemptedSubmit && !validation.isValid && validation.error) {
      return (
        <span class="text-destructive text-xs font-medium">
          {validation.error}
        </span>
      )
    }

    // Show gray "Required" preview only on first card before submit attempt
    if (!hasAttemptedSubmit && isFirstCard && validation.isRequired) {
      return <span>Required</span>
    }

    return null
  }

  return (
    <div class="bg-card/50 border-card-foreground/70 rounded-lg border p-4 shadow-sm backdrop-blur-sm">
      <div class="mb-3 flex items-center justify-between">
        <div class="text-muted-foreground text-xs">Item {props.index + 1}</div>
        <Button
          variant="ghost"
          size="icon"
          class="size-8"
          onClick={props.onRemove}
          aria-label="Remove item"
        >
          <Trash2 class="size-4" />
        </Button>
      </div>

      {/* Word and Furigana row */}
      <div class="grid gap-4 md:grid-cols-2">
        <TextField
          value={formData().word}
          onChange={(value) => updateFormData({ word: value })}
          class="relative"
        >
          <TextFieldLabel>Word</TextFieldLabel>
          <TextFieldInput class="border-card-foreground" placeholder="食べ物" />
          <div class="text-muted-foreground/70 pointer-events-none absolute top-7.5 right-4 text-xs font-medium italic">
            {getRequiredIndicator(validation.wordValidation())}
          </div>
        </TextField>

        <TextField
          value={formData().furigana}
          onChange={(value) => updateFormData({ furigana: value })}
          title="Add a space before each kanji group. If you typed '食[た]べ物[もの]' (without the space), もの will be applied to 'べ物' instead of just '物.'"
        >
          <TextFieldLabel>Furigana</TextFieldLabel>
          <TextFieldInput
            class="border-card-foreground"
            placeholder="食[た]べ  物[もの]"
          />
          <TextFieldDescription class="text-xs leading-none font-normal">
            Use kana in brackets for kanji segments.
          </TextFieldDescription>
        </TextField>
      </div>

      {/* Rest of the content in original two-column layout */}
      <div class="-mt-1.5 grid gap-4 md:grid-cols-2">
        {/* LEFT COLUMN */}
        <div>
          {/* English Meanings */}
          <div class="mb-1.5 flex items-center justify-between text-sm font-medium">
            English Meanings
          </div>
          <div class="space-y-2">
            <Index each={formData().english}>
              {(meaning, i) => (
                <div class="flex items-center gap-1">
                  <TextField
                    class="relative flex-1"
                    value={meaning()}
                    onChange={(value) => updateEnglishMeaning(i, value)}
                  >
                    <TextFieldInput
                      class="border-card-foreground"
                      placeholder="food"
                    />
                    <Show when={i === 0}>
                      <div class="text-muted-foreground/70 pointer-events-none absolute top-3 right-4 text-xs font-medium italic">
                        {getRequiredIndicator(validation.englishValidation())}
                      </div>
                    </Show>
                  </TextField>
                  <div class="flex items-center gap-0.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      class="size-8 hover:cursor-pointer hover:text-red-500 focus-visible:text-red-500"
                      onClick={() => removeEnglishMeaning(i)}
                      aria-label="Remove meaning"
                    >
                      <Minus class="size-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      class="size-8 hover:cursor-pointer hover:text-green-500 focus-visible:text-green-500"
                      onClick={addEnglishMeaning}
                      aria-label="Add meaning"
                    >
                      <Plus class="size-3" />
                    </Button>
                  </div>
                </div>
              )}
            </Index>
          </div>

          {/* Is Verb */}
          <div class="flex items-center gap-2 pt-4">
            <Checkbox
              checked={formData().isVerb}
              onChange={(checked) => updateFormData({ isVerb: checked })}
              class="border-primary/60 ml-1 hover:cursor-pointer"
            >
              <span class="text-sm font-medium">Is Verb</span>
            </Checkbox>
            <Label class="text-muted-foreground text-xs">Is this a verb?</Label>
            <div title="When you use multiple-choice during review, we show verbs with verbs and non-verbs with non-verbs (so the answer isn't too obvious).">
              <InfoIcon class="text-muted-foreground size-3" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Action buttons */}
        <div class="space-y-4">
          <div class="mt-3 flex min-h-36 flex-col justify-center 2xl:mt-1.5">
            <div class="flex flex-wrap justify-end gap-2">
              <Show when={formData().notes.length === 0}>
                <Button variant="outline" onClick={addNote} class="text-xs">
                  <Plus class="max-h-3 max-w-3" /> Note
                </Button>
              </Show>
              <Show when={formData().particles.length === 0}>
                <Button variant="outline" onClick={addParticle} class="text-xs">
                  <Plus class="max-h-3 max-w-3" /> Particle
                </Button>
              </Show>
              <Show when={formData().examples.length === 0}>
                <Button variant="outline" onClick={addExample} class="text-xs">
                  <Plus class="max-h-3 max-w-3" /> Example Sentence
                </Button>
              </Show>
              <Show when={formData().readingMnemonics.length === 0}>
                <Button
                  variant="outline"
                  onClick={addReadingMnemonic}
                  class="text-xs"
                >
                  <Plus class="max-h-3 max-w-3" /> Reading Mnemonic
                </Button>
              </Show>
              <Show when={formData().kanjiMnemonics.length === 0}>
                <Button
                  variant="outline"
                  onClick={addKanjiMnemonic}
                  class="text-xs"
                >
                  <Plus class="max-h-3 max-w-3" /> Kanji Mnemonic
                </Button>
              </Show>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Fields Section - Full Width (keeping original structure) */}
      <div class="space-y-3">
        {/* Notes */}
        {formData().notes.length > 0 && (
          <div>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Notes</span>
            </div>
            <div class="space-y-2">
              <Index each={formData().notes}>
                {(note, i) => (
                  <div class="flex items-center gap-1">
                    <TextField
                      class="flex-1"
                      value={note()}
                      onChange={(value) => updateNote(i, value)}
                    >
                      <TextFieldInput placeholder="Add a note..." />
                    </TextField>
                    <div class="flex items-center gap-0.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-red-500 focus-visible:text-red-500"
                        onClick={() => removeNote(i)}
                        aria-label="Remove note"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-green-500 focus-visible:text-green-500"
                        onClick={addNote}
                        aria-label="Add note"
                      >
                        <Plus class="size-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </Index>
            </div>
          </div>
        )}

        {/* Particles */}
        {formData().particles.length > 0 && (
          <div>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Particles</span>
            </div>
            <div class="space-y-2">
              <Index each={formData().particles}>
                {(particle, i) => (
                  <div class="flex items-center gap-1">
                    <div class="grid flex-1 grid-cols-2 gap-2">
                      <TextField
                        value={particle().particle}
                        onChange={(value) =>
                          updateParticle(i, "particle", value)
                        }
                      >
                        <TextFieldInput placeholder="Particle (は、を、に...)" />
                      </TextField>
                      <TextField
                        value={particle().label}
                        onChange={(value) => updateParticle(i, "label", value)}
                      >
                        <TextFieldInput placeholder="Label (for when there are multiple particles)" />
                      </TextField>
                    </div>
                    <div class="flex items-center gap-0.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-red-500 focus-visible:text-red-500"
                        onClick={() => removeParticle(i)}
                        aria-label="Remove particle"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-green-500 focus-visible:text-green-500"
                        onClick={addParticle}
                        aria-label="Add particle"
                      >
                        <Plus class="size-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </Index>
            </div>
          </div>
        )}

        {/* Example Sentences */}
        {formData().examples.length > 0 && (
          <div>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Example Sentences</span>
            </div>
            <div class="space-y-2">
              <Index each={formData().examples}>
                {(example, i) => (
                  <div class="flex items-center gap-1">
                    <div class="grid flex-1 grid-cols-2 gap-2">
                      <TextField
                        value={example().japanese}
                        onChange={(value) =>
                          updateExample(i, "japanese", value)
                        }
                      >
                        <TextFieldInput placeholder="Japanese example..." />
                      </TextField>
                      <TextField
                        value={example().english}
                        onChange={(value) => updateExample(i, "english", value)}
                      >
                        <TextFieldInput placeholder="English translation..." />
                      </TextField>
                    </div>
                    <div class="flex items-center gap-0.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-red-500 focus-visible:text-red-500"
                        onClick={() => removeExample(i)}
                        aria-label="Remove example"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-green-500 focus-visible:text-green-500"
                        onClick={addExample}
                        aria-label="Add example"
                      >
                        <Plus class="size-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </Index>
            </div>
          </div>
        )}

        {/* Reading Mnemonics */}
        {formData().readingMnemonics.length > 0 && (
          <div>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Reading Mnemonics</span>
            </div>
            <div class="space-y-2">
              <Index each={formData().readingMnemonics}>
                {(mnemonic, i) => (
                  <div class="flex items-center gap-1">
                    <TextField
                      class="flex-1"
                      value={mnemonic()}
                      onChange={(value) => updateReadingMnemonic(i, value)}
                    >
                      <TextFieldInput placeholder="Reading mnemonic..." />
                    </TextField>
                    <div class="flex items-center gap-0.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-red-500 focus-visible:text-red-500"
                        onClick={() => removeReadingMnemonic(i)}
                        aria-label="Remove reading mnemonic"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-green-500 focus-visible:text-green-500"
                        onClick={addReadingMnemonic}
                        aria-label="Add reading mnemonic"
                      >
                        <Plus class="size-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </Index>
            </div>
          </div>
        )}

        {/* Kanji Mnemonics */}
        {formData().kanjiMnemonics.length > 0 && (
          <>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Kanji Mnemonics</span>
            </div>
            <div class="space-y-2">
              <Index each={formData().kanjiMnemonics}>
                {(mnemonic, i) => (
                  <div class="flex items-center gap-1">
                    <TextField
                      class="flex-1"
                      value={mnemonic()}
                      onChange={(value) => updateKanjiMnemonic(i, value)}
                    >
                      <TextFieldInput placeholder="Kanji mnemonic..." />
                    </TextField>
                    <div class="flex items-center gap-0.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-red-500 focus-visible:text-red-500"
                        onClick={() => removeKanjiMnemonic(i)}
                        aria-label="Remove kanji mnemonic"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:cursor-pointer hover:text-green-500 focus-visible:text-green-500"
                        onClick={addKanjiMnemonic}
                        aria-label="Add kanji mnemonic"
                      >
                        <Plus class="size-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </Index>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

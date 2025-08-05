import { Index, Show, createEffect } from "solid-js"
import { Plus, Trash2, Minus } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldDescription,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
  NumberFieldLabel,
} from "@/components/ui/number-field"
import type { PartOfSpeech } from "@/data/types"

export interface VocabItemFormData {
  word: string
  furigana: string
  english: string[]
  partOfSpeech: string
  chapter: string
  notes: string[]
  particles: Array<{ particle: string; label: string }>
  examples: Array<{ japanese: string; english: string }>
  readingMnemonics: string[]
  kanjiMnemonics: string[]
}

const PARTS_OF_SPEECH: PartOfSpeech[] = [
  "Ichidan verb",
  "Godan verb with 'u' ending",
  "Godan verb with 'tsu' ending",
  "Godan verb with 'ru' ending",
  "Godan verb - Iku/Yuku special class",
  "Godan verb with 'ku' ending",
  "Godan verb with 'gu' ending",
  "Godan verb with 'bu' ending",
  "Godan verb with 'mu' ending",
  "Godan verb with 'nu' ending",
  "Godan verb with 'su' ending",
  "Godan verb with 'ru' ending (irregular verb)",
  "Godan verb - -aru special class",
  "Suru verb - included",
  "Suru verb - compound word",
  "Suru verb - special class",
  "Kuru verb - special class",
  "I-adjective",
  "Na-adjective",
]

interface VocabItemEditorProps {
  index: number
  onRemove: () => void
  formData: VocabItemFormData
  onFormDataChange: (data: VocabItemFormData) => void
}

export function VocabItemEditor(props: VocabItemEditorProps) {
  // Use external form data instead of local state
  const updateFormData = (updates: Partial<VocabItemFormData>) => {
    props.onFormDataChange({ ...props.formData, ...updates })
  }

  const addEnglishMeaning = () =>
    updateFormData({
      english: [...props.formData.english, ""],
    })
  const removeEnglishMeaning = (index: number) =>
    updateFormData({
      english:
        props.formData.english.length > 1
          ? props.formData.english.filter((_, i) => i !== index)
          : [""],
    })
  const updateEnglishMeaning = (index: number, value: string) =>
    updateFormData({
      english: props.formData.english.map((item, i) =>
        i === index ? value : item,
      ),
    })

  // Additional field functions
  const addNote = () =>
    updateFormData({
      notes: [...props.formData.notes, ""],
    })
  const removeNote = (index: number) =>
    updateFormData({
      notes: props.formData.notes.filter((_, i) => i !== index),
    })
  const updateNote = (index: number, value: string) =>
    updateFormData({
      notes: props.formData.notes.map((item, i) =>
        i === index ? value : item,
      ),
    })

  const addParticle = () =>
    updateFormData({
      particles: [...props.formData.particles, { particle: "", label: "" }],
    })
  const removeParticle = (index: number) =>
    updateFormData({
      particles: props.formData.particles.filter((_, i) => i !== index),
    })
  const updateParticle = (
    index: number,
    field: "particle" | "label",
    value: string,
  ) =>
    updateFormData({
      particles: props.formData.particles.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    })

  const addExample = () =>
    updateFormData({
      examples: [...props.formData.examples, { japanese: "", english: "" }],
    })
  const removeExample = (index: number) =>
    updateFormData({
      examples: props.formData.examples.filter((_, i) => i !== index),
    })
  const updateExample = (
    index: number,
    field: "japanese" | "english",
    value: string,
  ) =>
    updateFormData({
      examples: props.formData.examples.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    })

  const addReadingMnemonic = () =>
    updateFormData({
      readingMnemonics: [...props.formData.readingMnemonics, ""],
    })
  const removeReadingMnemonic = (index: number) =>
    updateFormData({
      readingMnemonics: props.formData.readingMnemonics.filter(
        (_, i) => i !== index,
      ),
    })
  const updateReadingMnemonic = (index: number, value: string) =>
    updateFormData({
      readingMnemonics: props.formData.readingMnemonics.map((item, i) =>
        i === index ? value : item,
      ),
    })

  const addKanjiMnemonic = () =>
    updateFormData({
      kanjiMnemonics: [...props.formData.kanjiMnemonics, ""],
    })
  const removeKanjiMnemonic = (index: number) =>
    updateFormData({
      kanjiMnemonics: props.formData.kanjiMnemonics.filter(
        (_, i) => i !== index,
      ),
    })
  const updateKanjiMnemonic = (index: number, value: string) =>
    updateFormData({
      kanjiMnemonics: props.formData.kanjiMnemonics.map((item, i) =>
        i === index ? value : item,
      ),
    })

  return (
    <div class="border-border rounded-lg border p-4">
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

      {/* Word and Furigana row - for proper tab order */}
      <div class="grid gap-4 md:grid-cols-2">
        <TextField
          value={props.formData.word}
          onChange={(value) => updateFormData({ word: value })}
        >
          <TextFieldLabel>Word</TextFieldLabel>
          <TextFieldInput placeholder="食べ物" />
        </TextField>

        <TextField
          value={props.formData.furigana}
          onChange={(value) => updateFormData({ furigana: value })}
        >
          <TextFieldLabel>Furigana</TextFieldLabel>
          <TextFieldInput placeholder="食[た]べ  物[もの]" />
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
          <div class="mb-1.5">
            <span class="text-sm font-medium">English Meanings</span>
          </div>
          <div class="space-y-2">
            <Index each={props.formData.english}>
              {(meaning, i) => (
                <div class="flex items-center gap-1">
                  <TextField
                    class="flex-1"
                    value={meaning()}
                    onChange={(value) => updateEnglishMeaning(i, value)}
                  >
                    <TextFieldInput placeholder="food" />
                  </TextField>
                  <div class="flex items-center gap-0.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      class="size-8 hover:text-red-500"
                      onClick={() => removeEnglishMeaning(i)}
                      aria-label="Remove meaning"
                    >
                      <Minus class="size-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      class="size-8 hover:text-green-500"
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

          {/* Part of Speech + Chapter */}
          <div class="grid grid-cols-[1fr_auto] items-end gap-3 pt-2.5">
            <div>
              <div class="mb-1.5">
                <span class="text-sm font-medium">Part of Speech</span>
              </div>
              <Select
                value={props.formData.partOfSpeech}
                onChange={(value) =>
                  updateFormData({ partOfSpeech: value || "" })
                }
                options={PARTS_OF_SPEECH}
                placeholder="Select part of speech"
                itemComponent={(props) => (
                  <SelectItem item={props.item}>
                    {props.item.rawValue as string}
                  </SelectItem>
                )}
              >
                <SelectTrigger aria-label="Part of Speech" class="text-xs">
                  <SelectValue<string>>
                    {(state) =>
                      state.selectedOption() || "Select part of speech"
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectContent />
              </Select>
            </div>

            <div class="w-20">
              <NumberField
                value={props.formData.chapter}
                onChange={(val) => updateFormData({ chapter: val || "1" })}
              >
                <NumberFieldLabel>Chapter</NumberFieldLabel>
                <NumberFieldGroup>
                  <NumberFieldInput />
                  <NumberFieldIncrementTrigger class="h-3 w-3 pt-1" />
                  <NumberFieldDecrementTrigger class="h-3 w-3 pb-1" />
                </NumberFieldGroup>
              </NumberField>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div class="space-y-4">
          {/* Action buttons */}
          <div class="mt-3 flex min-h-36 flex-col justify-center 2xl:mt-1.5">
            <div class="flex flex-wrap justify-end gap-2">
              <Show when={props.formData.notes.length === 0}>
                <Button variant="outline" onClick={addNote} class="text-xs">
                  <Plus class="max-h-3 max-w-3" /> Note
                </Button>
              </Show>
              <Show when={props.formData.particles.length === 0}>
                <Button variant="outline" onClick={addParticle} class="text-xs">
                  <Plus class="max-h-3 max-w-3" /> Particle
                </Button>
              </Show>
              <Show when={props.formData.examples.length === 0}>
                <Button variant="outline" onClick={addExample} class="text-xs">
                  <Plus class="max-h-3 max-w-3" /> Example Sentence
                </Button>
              </Show>
              <Show when={props.formData.readingMnemonics.length === 0}>
                <Button
                  variant="outline"
                  onClick={addReadingMnemonic}
                  class="text-xs"
                >
                  <Plus class="max-h-3 max-w-3" /> Reading Mnemonic
                </Button>
              </Show>
              <Show when={props.formData.kanjiMnemonics.length === 0}>
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

      {/* Additional Fields Section - Full Width */}
      <div
        class={`${(props.formData.notes || props.formData.examples || props.formData.particles || props.formData.readingMnemonics || props.formData.kanjiMnemonics) && "2xl:mt-4"} space-y-3`}
      >
        {/* Notes */}
        {props.formData.notes.length > 0 && (
          <div>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Notes</span>
            </div>
            <div class="space-y-2">
              <Index each={props.formData.notes}>
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
                        class="size-8 hover:text-red-500"
                        onClick={() => removeNote(i)}
                        aria-label="Remove note"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:text-green-500"
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
        {props.formData.particles.length > 0 && (
          <div>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Particles</span>
            </div>
            <div class="space-y-2">
              <Index each={props.formData.particles}>
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
                        <TextFieldInput placeholder="Label (topic, object, direction...)" />
                      </TextField>
                    </div>
                    <div class="flex items-center gap-0.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:text-red-500"
                        onClick={() => removeParticle(i)}
                        aria-label="Remove particle"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:text-green-500"
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
        {props.formData.examples.length > 0 && (
          <div>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Example Sentences</span>
            </div>
            <div class="space-y-2">
              <Index each={props.formData.examples}>
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
                        class="size-8 hover:text-red-500"
                        onClick={() => removeExample(i)}
                        aria-label="Remove example"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:text-green-500"
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
        {props.formData.readingMnemonics.length > 0 && (
          <div>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Reading Mnemonics</span>
            </div>
            <div class="space-y-2">
              <Index each={props.formData.readingMnemonics}>
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
                        class="size-8 hover:text-red-500"
                        onClick={() => removeReadingMnemonic(i)}
                        aria-label="Remove reading mnemonic"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:text-green-500"
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
        {props.formData.kanjiMnemonics.length > 0 && (
          <>
            <div class="mb-1.5">
              <span class="text-sm font-medium">Kanji Mnemonics</span>
            </div>
            <div class="space-y-2">
              <Index each={props.formData.kanjiMnemonics}>
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
                        class="size-8 hover:text-red-500"
                        onClick={() => removeKanjiMnemonic(i)}
                        aria-label="Remove kanji mnemonic"
                      >
                        <Minus class="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="size-8 hover:text-green-500"
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

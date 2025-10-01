// features/conjugation-practice/components/SettingsPage.tsx
import { For } from "solid-js"
import { useMutation, useQueryClient } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userSettingsQueryOptions,
  updateUserSettingsMutation,
} from "@/queries/user-settings"
import ToggleOption from "./ToggleOption"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  TextField,
  TextFieldLabel,
  TextFieldInput,
} from "@/components/ui/text-field"
import type { ConjugationPracticeSettings } from "../schemas/settings"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"

type SettingsPageProps = {
  settings: () => ConjugationPracticeSettings
  isSharedRoute: boolean
  userId: string | null
  onSettingsChange: (settings: ConjugationPracticeSettings) => void
  onStartReview: () => void
}

export default function SettingsPage({
  settings,
  isSharedRoute,
  userId,
  onSettingsChange,
  onStartReview,
}: SettingsPageProps) {
  const queryClient = useQueryClient()
  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))
  const updateMutation = useMutation(() =>
    updateUserSettingsMutation(userId, queryClient),
  )

  const CATEGORIES = {
    formTypes: [
      ["normal", "Normal"],
      ["teForm", "Te-form"],
      ["tariForm", "Tari-form"],
      ["taiForm", "Tai-form"],
      ["potential", "Potential"],
      ["volitional", "Volitional"],
      ["imperative", "Imperative"],
      ["conditional", "Conditional"],
      ["passive", "Passive"],
      ["causative", "Causative"],
      ["causativePassive", "Causative-Passive"],
    ],
    partsOfSpeech: [
      ["verb", "Verb"],
      ["iAdjective", "I-Adjective"],
      ["naAdjective", "Na-Adjective"],
    ],
    speechLevels: [
      ["polite", "Polite"],
      ["plain", "Plain"],
    ],
    tenses: [
      ["nonPast", "Non-Past"],
      ["past", "Past"],
    ],
    polarities: [
      ["positive", "Positive"],
      ["negative", "Negative"],
    ],
  } as const

  const isLastInCategory = (
    key: keyof ConjugationPracticeSettings,
    currentSettings: ConjugationPracticeSettings,
  ): boolean => {
    for (const category of Object.values(CATEGORIES)) {
      const keys = category.map(([k]) => k)
      if (keys.includes(key)) {
        const selectedCount = keys.filter(
          (k) => currentSettings[k as keyof ConjugationPracticeSettings],
        ).length
        return selectedCount === 1 && Boolean(currentSettings[key])
      }
    }
    return false
  }

  const handleSettingChange = (
    key: keyof ConjugationPracticeSettings,
    value: boolean | string | number,
  ) => {
    // Prevent unchecking the last option in required categories
    if (
      typeof value === "boolean" &&
      !value &&
      isLastInCategory(key, settings())
    ) {
      return
    }

    const newSettings = { ...settings(), [key]: value }
    onSettingsChange(newSettings)

    // Update user settings only if not a shared route
    if (!isSharedRoute) {
      updateMutation.mutate({
        "conjugation-practice": {
          ...settingsQuery.data["conjugation-practice"],
          [key]: value,
        },
      })
    }
  }

  const examples = [
    { normal: "食べる・食べます" },
    { teForm: "食べて" },
    { tariForm: "食べたり" },
    { taiForm: "食べたい" },
    { potential: "食べられる" },
    { volitional: "食べよう・食べましょう" },
    { imperative: "食べろ" },
    { conditional: "食べれば" },
    { passive: "食べられる" },
    { causative: "食べさせる" },
    { causativePassive: "食べさせられる" },
  ]

  return (
    <>
      <div class="fixed inset-0 -z-1">
        <TextbookChapterBackgrounds
          textbook={settingsQuery.data["active-textbook"]}
          chapter={settingsQuery.data["active-deck"]}
          showGradient={false}
          blur="16px"
          class="opacity-40"
        />
      </div>
      {/* ↓ narrower now */}
      <div class="bg-background relative min-h-screen w-full max-w-4xl sm:mt-6 sm:rounded-t-xl">
        {/* Header */}
        <header class="border-card-foreground/70 flex h-28 items-center justify-center rounded-b-xl border bg-gradient-to-r from-orange-400 to-orange-500 backdrop-blur-sm sm:rounded-xl">
          <h1 class="text-3xl font-extrabold tracking-tight text-white">
            Conjugation Practice
          </h1>
        </header>

        <main class="space-y-10 px-6 pt-8 pb-30">
          {/* Form Types Section */}
          <section class="bg-card/60 border-card-foreground/70 space-y-5 rounded-lg border p-6">
            <h2 class="text-center text-xl font-semibold text-orange-400">
              Form Types
            </h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <For each={CATEGORIES.formTypes}>
                {([key, label], index) => (
                  <div>
                    <ToggleOption
                      checked={() => settings()[key]}
                      onChange={(checked: boolean) =>
                        handleSettingChange(key, checked)
                      }
                      label={label}
                    />
                    <p class="text-muted-foreground mt-1 text-sm">
                      {examples[index()][key]}
                    </p>
                  </div>
                )}
              </For>
            </div>
          </section>

          {/* Parts of Speech */}
          <section class="bg-card/60 border-card-foreground/70 space-y-5 rounded-lg border p-6">
            <h2 class="text-center text-xl font-semibold">Parts of Speech</h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <For each={CATEGORIES.partsOfSpeech}>
                {([key, label]) => (
                  <ToggleOption
                    id={key}
                    checked={() => settings()[key]}
                    onChange={(checked: boolean) =>
                      handleSettingChange(key, checked)
                    }
                    label={label}
                  />
                )}
              </For>
            </div>
          </section>

          {/* Speech Level / Tense / Polarity */}
          <div class="grid gap-6 sm:grid-cols-3">
            <section class="bg-card/60 border-card-foreground/70 space-y-4 rounded-lg border p-6">
              <h2 class="text-center text-lg font-semibold">Speech Level</h2>
              <div class="space-y-3">
                <For each={CATEGORIES.speechLevels}>
                  {([key, label]) => (
                    <ToggleOption
                      checked={() => settings()[key]}
                      onChange={(checked: boolean) =>
                        handleSettingChange(key, checked)
                      }
                      label={label}
                    />
                  )}
                </For>
              </div>
            </section>

            <section class="bg-card/60 border-card-foreground/70 space-y-4 rounded-lg border p-6">
              <h2 class="text-center text-lg font-semibold">Tense</h2>
              <div class="space-y-3">
                <For each={CATEGORIES.tenses}>
                  {([key, label]) => (
                    <ToggleOption
                      checked={() => settings()[key]}
                      onChange={(checked: boolean) =>
                        handleSettingChange(key, checked)
                      }
                      label={label}
                    />
                  )}
                </For>
              </div>
            </section>

            <section class="bg-card/60 border-card-foreground/70 space-y-4 rounded-lg border p-6">
              <h2 class="text-center text-lg font-semibold">Polarity</h2>
              <div class="space-y-3">
                <For each={CATEGORIES.polarities}>
                  {([key, label]) => (
                    <ToggleOption
                      checked={() => settings()[key]}
                      onChange={(checked: boolean) =>
                        handleSettingChange(key, checked)
                      }
                      label={label}
                    />
                  )}
                </For>
              </div>
            </section>
          </div>

          {/* Special Options */}
          <section class="bg-card/60 border-card-foreground/70 space-y-5 rounded-lg border p-6">
            <h2 class="text-center text-lg font-semibold italic">
              Special Options
            </h2>

            <div class="grid gap-6 sm:grid-cols-2">
              <div class="space-y-5">
                <div class="space-y-2">
                  <label for="jlptLevel" class="text-sm font-medium">
                    JLPT Level:
                  </label>
                  <Select
                    options={["n5", "n4", "n3", "n2", "n1"]}
                    value={settings().jlptLevel}
                    placeholder="Select JLPT level"
                    onChange={(value) =>
                      handleSettingChange(
                        "jlptLevel",
                        value as ConjugationPracticeSettings["jlptLevel"],
                      )
                    }
                  >
                    <SelectTrigger id="jlptLevel">
                      <SelectValue<string>>
                        {(state) => state.selectedOption().toUpperCase()}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent />
                  </Select>
                </div>

                <TextField class="space-y-2">
                  <TextFieldLabel>Number of questions:</TextFieldLabel>
                  <TextFieldInput
                    type="number"
                    value={settings().amount}
                    onInput={(e) =>
                      handleSettingChange(
                        "amount",
                        parseInt(e.currentTarget.value, 10),
                      )
                    }
                    min="1"
                    max="100"
                  />
                </TextField>
              </div>

              <div class="space-y-3">
                <ToggleOption
                  checked={() => settings().leaveOutSuru}
                  onChange={(checked: boolean) =>
                    handleSettingChange("leaveOutSuru", checked)
                  }
                  label={
                    <>
                      Leave out <span class="font-japanese">する</span> verbs
                    </>
                  }
                />
                <ToggleOption
                  checked={() => settings().reverse}
                  onChange={(checked: boolean) =>
                    handleSettingChange("reverse", checked)
                  }
                  label="Reverse mode"
                />
                <ToggleOption
                  checked={() => settings().showMeaning}
                  onChange={(checked: boolean) =>
                    handleSettingChange("showMeaning", checked)
                  }
                  label="Show meaning"
                />
                <ToggleOption
                  checked={() => settings().noFurigana}
                  onChange={(checked: boolean) =>
                    handleSettingChange("noFurigana", checked)
                  }
                  label="No furigana"
                />
                <ToggleOption
                  checked={() => settings().emoji}
                  onChange={(checked: boolean) =>
                    handleSettingChange("emoji", checked)
                  }
                  label="Show emojis above conjugation types [WIP]"
                />
              </div>
            </div>
          </section>

          {/* Start Button */}
          <div class="fixed right-0 bottom-16 left-0 pt-4 pb-6">
            <div class="mx-auto max-w-4xl px-10">
              <Button
                onClick={onStartReview}
                size="lg"
                class="border-card-foreground/70 flex w-full items-center justify-center rounded-xl border bg-gradient-to-r from-orange-400 to-orange-500 py-6 backdrop-blur-sm"
              >
                Practice! <span class="text-base font-black">{"->"}</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

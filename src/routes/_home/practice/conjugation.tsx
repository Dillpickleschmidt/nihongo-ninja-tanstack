import ConjugationPractice from "@/features/conjugation-practice/ConjugationPractice"
import { createFileRoute } from "@tanstack/solid-router"
import { z } from "zod"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { DEFAULT_CONJUGATION_SETTINGS } from "@/features/conjugation-practice/schemas/settings"
import type { ConjugationPracticeSettings } from "@/features/conjugation-practice/schemas/settings"

function RouteComponent() {
  const { user } = Route.useLoaderData()()
  const validatedSearchParams = Route.useSearch()

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )
  const savedSettings =
    settingsQuery.data["conjugation-practice"] || DEFAULT_CONJUGATION_SETTINGS
  const merged = { ...savedSettings, ...validatedSearchParams }
  const hasUrlParams = Object.keys(validatedSearchParams).length > 0

  return (
    <ConjugationPractice
      initialOptions={merged}
      isSharedRoute={hasUrlParams}
      userId={user?.id || null}
    />
  )
}

const conjugationSearchSchema = z
  .object({
    // Form types
    normal: z.boolean().optional(),
    teForm: z.boolean().optional(),
    volitional: z.boolean().optional(),
    taiForm: z.boolean().optional(),
    tariForm: z.boolean().optional(),
    potential: z.boolean().optional(),
    imperative: z.boolean().optional(),
    conditional: z.boolean().optional(),
    passive: z.boolean().optional(),
    causative: z.boolean().optional(),
    causativePassive: z.boolean().optional(),

    // Part of speech
    verb: z.boolean().optional(),
    iAdjective: z.boolean().optional(),
    naAdjective: z.boolean().optional(),

    // Speech level
    polite: z.boolean().optional(),
    plain: z.boolean().optional(),

    // Tense
    nonPast: z.boolean().optional(),
    past: z.boolean().optional(),

    // Polarity
    positive: z.boolean().optional(),
    negative: z.boolean().optional(),

    // Special options
    jlptLevel: z.enum(["n5", "n4", "n3", "n2", "n1"]).optional(),
    leaveOutSuru: z.boolean().optional(),
    reverse: z.boolean().optional(),
    amount: z.number().min(1).max(100).optional(),
    showMeaning: z.boolean().optional(),
    noFurigana: z.boolean().optional(),
    emoji: z.boolean().optional(),
  })
  .partial()

function validateConjugationSearch(
  search: Record<string, unknown>,
): Partial<ConjugationPracticeSettings> {
  const result = conjugationSearchSchema.safeParse(search)
  return result.success ? result.data : {}
}

export const Route = createFileRoute("/_home/practice/conjugation")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  validateSearch: validateConjugationSearch,
  component: RouteComponent,
})

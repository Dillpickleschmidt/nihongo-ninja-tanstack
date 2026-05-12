export const FIRST_PERSON_PRONOUNS = [
  { value: "私[わたし]", label: "私" },
  { value: "私[わたくし]", label: "私 (わたくし)" },
  { value: "僕[ぼく]", label: "僕" },
  { value: "俺[おれ]", label: "俺" },
  { value: "あたし", label: "あたし" },
] as const

export const PLURAL_FIRST_PERSON_PRONOUNS = [
  { value: "私[わたし]たち", label: "私たち" },
  { value: "僕[ぼく]たち", label: "僕たち" },
  { value: "俺[おれ]たち", label: "俺たち" },
] as const

export function getPronounDisplayLabel(pronoun: string): string | undefined {
  if (pronoun === "dropped") return "Dropped"

  return [...FIRST_PERSON_PRONOUNS, ...PLURAL_FIRST_PERSON_PRONOUNS].find(
    (entry) => entry.value === pronoun,
  )?.label
}

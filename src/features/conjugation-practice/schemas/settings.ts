// src/features/conjugation-practice/schemas/settings.ts
import { z } from "zod"

/**
 * Schema for conjugation practice settings
 * Used in both user preferences (for persistence) and URL params (for sharing)
 */
export const ConjugationPracticeSettingsSchema = z.object({
  // Form types
  normal: z.boolean().default(true),
  teForm: z.boolean().default(false),
  volitional: z.boolean().default(false),
  taiForm: z.boolean().default(false),
  tariForm: z.boolean().default(false),
  potential: z.boolean().default(false),
  imperative: z.boolean().default(false),
  conditional: z.boolean().default(false),
  passive: z.boolean().default(false),
  causative: z.boolean().default(false),
  causativePassive: z.boolean().default(false),

  // Part of speech
  verb: z.boolean().default(true),
  iAdjective: z.boolean().default(false),
  naAdjective: z.boolean().default(false),

  // Speech level
  polite: z.boolean().default(true),
  plain: z.boolean().default(true),

  // Tense
  nonPast: z.boolean().default(true),
  past: z.boolean().default(true),

  // Polarity
  positive: z.boolean().default(true),
  negative: z.boolean().default(true),

  // Special options
  jlptLevel: z.enum(["n5", "n4", "n3", "n2", "n1"]).default("n5"),
  leaveOutSuru: z.boolean().default(false),
  reverse: z.boolean().default(false),
  amount: z.number().min(1).max(100).default(10),
  showMeaning: z.boolean().default(false),
  noFurigana: z.boolean().default(false),
  emoji: z.boolean().default(false),
})

// Export the inferred TypeScript type
export type ConjugationPracticeSettings = z.infer<
  typeof ConjugationPracticeSettingsSchema
>

// Export default settings for convenience
export const DEFAULT_CONJUGATION_SETTINGS =
  ConjugationPracticeSettingsSchema.parse({})
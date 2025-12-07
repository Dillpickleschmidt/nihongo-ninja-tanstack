import { v } from 'convex/values'

// === Vocabulary Item Validators ===
export const mnemonicsValidator = v.object({
  kanji: v.array(v.string()),
  reading: v.array(v.string()),
})

// ExampleSentence can have either plain strings or highlighted segments
const sentencePartValidator = v.union(v.string(), v.object({ t: v.string() }))

export const exampleSentenceValidator = v.object({
  japanese: v.array(sentencePartValidator),
  english: v.array(sentencePartValidator),
  audio_url: v.optional(v.string()),
})

export const videoValidator = v.object({
  src: v.string(),
  title: v.string(),
})

export const particleValidator = v.object({
  label: v.optional(v.string()),
  particle: v.string(),
})

// === FSRS Validators ===
const fsrsStateValidator = v.union(
  v.literal(0), // New
  v.literal(1), // Learning
  v.literal(2), // Review
  v.literal(3), // Relearning
)

export const fsrsCardValidator = v.object({
  due: v.number(), // timestamp (was Date)
  stability: v.float64(),
  difficulty: v.float64(),
  elapsed_days: v.number(),
  scheduled_days: v.number(),
  reps: v.number(),
  lapses: v.number(),
  state: fsrsStateValidator,
  learning_steps: v.optional(v.number()),
})

export const fsrsReviewLogValidator = v.object({
  rating: v.union(v.literal(0), v.literal(1), v.literal(2), v.literal(3), v.literal(4)),
  state: fsrsStateValidator,
  due: v.number(),
  stability: v.float64(),
  difficulty: v.float64(),
  elapsed_days: v.number(),
  last_elapsed_days: v.number(),
  scheduled_days: v.number(),
  learning_steps: v.number(),
  review: v.number(),
})

// === Transcript Validators ===
export const transcriptLineValidator = v.object({
  line_id: v.number(),
  text: v.string(),
  english: v.string(),
  timestamp: v.optional(v.string()),
})

// === Dictionary Meta Validators (from Yomitan types) ===
// GenericFrequencyData: string | number | {value, displayValue?}
const genericFrequencyDataValidator = v.union(
  v.string(),
  v.number(),
  v.object({
    value: v.number(),
    displayValue: v.optional(v.string()),
  }),
)

// TermMetaPitchData: pitch accent information
const pitchValidator = v.object({
  position: v.union(v.number(), v.string()),
  nasal: v.optional(v.union(v.number(), v.array(v.number()))),
  devoice: v.optional(v.union(v.number(), v.array(v.number()))),
  tags: v.optional(v.array(v.string())),
})

const termMetaPitchDataValidator = v.object({
  reading: v.string(),
  pitches: v.array(pitchValidator),
})

// TermMetaPhoneticData: IPA transcriptions
const termMetaPhoneticDataValidator = v.object({
  reading: v.string(),
  transcriptions: v.array(
    v.object({
      ipa: v.string(),
      tags: v.optional(v.array(v.string())),
    }),
  ),
})

// Union of all possible termMeta/kanjiMeta data types
export const metaDataValidator = v.union(
  genericFrequencyDataValidator,
  termMetaPitchDataValidator,
  termMetaPhoneticDataValidator,
)

// === User Preferences Validators ===
const srsServicePreferenceValidator = v.object({
  mode: v.string(),
  data_imported: v.boolean(),
  is_api_key_valid: v.boolean(),
})

const conjugationPracticeSettingsValidator = v.object({
  normal: v.boolean(),
  teForm: v.boolean(),
  volitional: v.boolean(),
  taiForm: v.boolean(),
  tariForm: v.boolean(),
  potential: v.boolean(),
  imperative: v.boolean(),
  conditional: v.boolean(),
  passive: v.boolean(),
  causative: v.boolean(),
  causativePassive: v.boolean(),
  verb: v.boolean(),
  iAdjective: v.boolean(),
  naAdjective: v.boolean(),
  polite: v.boolean(),
  plain: v.boolean(),
  nonPast: v.boolean(),
  past: v.boolean(),
  positive: v.boolean(),
  negative: v.boolean(),
  jlptLevel: v.union(
    v.literal('n5'),
    v.literal('n4'),
    v.literal('n3'),
    v.literal('n2'),
    v.literal('n1'),
  ),
  leaveOutSuru: v.boolean(),
  reverse: v.boolean(),
  amount: v.number(),
  showMeaning: v.boolean(),
  noFurigana: v.boolean(),
  emoji: v.boolean(),
})

export const userPreferencesValidator = v.object({
  srsServicePreferences: v.optional(
    v.object({
      anki: v.optional(srsServicePreferenceValidator),
    }),
  ),
  activeLearningPath: v.optional(v.string()),
  activeChapter: v.optional(v.string()),
  hasCompletedOnboarding: v.optional(v.boolean()),
  tours: v.optional(v.record(v.string(), v.number())),
  conjugationPractice: v.optional(conjugationPracticeSettingsValidator),
  timestamp: v.optional(v.number()),
})

// === Enum Validators (from Supabase enums) ===

// practice_mode_enum: meanings, spellings
export const practiceModeValidator = v.union(
  v.literal('meanings'),
  v.literal('spellings'),
)

// practice_item_type: vocabulary, kanji, radical (already used inline, exporting for reuse)
export const practiceItemTypeValidator = v.union(
  v.literal('vocabulary'),
  v.literal('kanji'),
  v.literal('radical'),
)

// part_of_speech_enum: verb conjugations, adjectives
export const partOfSpeechValidator = v.union(
  v.literal('Ichidan verb'),
  v.literal("Godan verb with 'u' ending"),
  v.literal("Godan verb with 'tsu' ending"),
  v.literal("Godan verb with 'ru' ending"),
  v.literal('Godan verb - Iku/Yuku special class'),
  v.literal("Godan verb with 'ku' ending"),
  v.literal("Godan verb with 'gu' ending"),
  v.literal("Godan verb with 'bu' ending"),
  v.literal("Godan verb with 'mu' ending"),
  v.literal("Godan verb with 'nu' ending"),
  v.literal("Godan verb with 'su' ending"),
  v.literal("Godan verb with 'ru' ending (irregular verb)"),
  v.literal('Godan verb - -aru special class'),
  v.literal('Suru verb - included'),
  v.literal('Suru verb - compound word'),
  v.literal('Suru verb - special class'),
  v.literal('Kuru verb - special class'),
  v.literal('I-adjective'),
  v.literal('Na-adjective'),
)

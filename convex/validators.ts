import { v, type Infer } from "convex/values"

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
  dueAt: v.number(), // timestamp - when card is due for review
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
  rating: v.union(
    v.literal(0),
    v.literal(1),
    v.literal(2),
    v.literal(3),
    v.literal(4),
  ),
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
// GenericFrequencyData: string | number | {value, displayValue?} | {frequency, reading}
const genericFrequencyDataValidator = v.union(
  v.string(),
  v.number(),
  v.object({
    value: v.number(),
    displayValue: v.optional(v.string()),
  }),
  v.object({
    frequency: v.number(),
    reading: v.string(),
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

const srsServicePreferencesValidator = v.object({
  anki: srsServicePreferenceValidator,
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
    v.literal("n5"),
    v.literal("n4"),
    v.literal("n3"),
    v.literal("n2"),
    v.literal("n1"),
  ),
  leaveOutSuru: v.boolean(),
  reverse: v.boolean(),
  amount: v.number(),
  showMeaning: v.boolean(),
  noFurigana: v.boolean(),
  emoji: v.boolean(),
})

export const userPreferencesValidator = v.object({
  srsServicePreferences: srsServicePreferencesValidator,
  activeLearningPath: v.string(),
  activeChapter: v.string(),
  hasCompletedOnboarding: v.boolean(),
  tours: v.record(v.string(), v.number()),
  conjugationPractice: conjugationPracticeSettingsValidator,
  timestamp: v.number(),
})

// Default values for new user profiles
export const DEFAULT_USER_PREFERENCES = {
  srsServicePreferences: {
    anki: { mode: "disabled", data_imported: false, is_api_key_valid: false },
  },
  activeLearningPath: "genki_1",
  activeChapter: "chapter-0",
  hasCompletedOnboarding: false,
  tours: {},
  conjugationPractice: {
    normal: true,
    teForm: false,
    volitional: false,
    taiForm: false,
    tariForm: false,
    potential: false,
    imperative: false,
    conditional: false,
    passive: false,
    causative: false,
    causativePassive: false,
    verb: true,
    iAdjective: false,
    naAdjective: false,
    polite: true,
    plain: true,
    nonPast: true,
    past: true,
    positive: true,
    negative: true,
    jlptLevel: "n5" as const,
    leaveOutSuru: false,
    reverse: false,
    amount: 10,
    showMeaning: false,
    noFurigana: false,
    emoji: false,
  },
  timestamp: 0,
}

// === Enum Validators (from Supabase enums) ===

// practice_mode_enum: meanings, spellings
export const practiceModeValidator = v.union(
  v.literal("meanings"),
  v.literal("spellings"),
)

// practice_item_type: vocabulary, kanji, radical (already used inline, exporting for reuse)
export const practiceItemTypeValidator = v.union(
  v.literal("vocabulary"),
  v.literal("kanji"),
  v.literal("radical"),
)

// Key + type for status lookups
export const practiceItemKeyValidator = v.object({
  key: v.string(),
  type: practiceItemTypeValidator,
})

// === Import Processing Validators ===
export const importCardValidator = v.object({
  searchTerm: v.string(),
  type: practiceItemTypeValidator,
  fsrsCard: fsrsCardValidator,
  fsrsLogs: v.array(fsrsReviewLogValidator),
})

// part_of_speech_enum: verb conjugations, adjectives
export const partOfSpeechValidator = v.union(
  v.literal("Ichidan verb"),
  v.literal("Godan verb with 'u' ending"),
  v.literal("Godan verb with 'tsu' ending"),
  v.literal("Godan verb with 'ru' ending"),
  v.literal("Godan verb - Iku/Yuku special class"),
  v.literal("Godan verb with 'ku' ending"),
  v.literal("Godan verb with 'gu' ending"),
  v.literal("Godan verb with 'bu' ending"),
  v.literal("Godan verb with 'mu' ending"),
  v.literal("Godan verb with 'nu' ending"),
  v.literal("Godan verb with 'su' ending"),
  v.literal("Godan verb with 'ru' ending (irregular verb)"),
  v.literal("Godan verb - -aru special class"),
  v.literal("Suru verb - included"),
  v.literal("Suru verb - compound word"),
  v.literal("Suru verb - special class"),
  v.literal("Kuru verb - special class"),
  v.literal("I-adjective"),
  v.literal("Na-adjective"),
)

// === Core Vocabulary Item Validator ===
export const vocabularyItemValidator = v.object({
  key: v.string(),
  word: v.string(),
  furigana: v.string(),
  english: v.array(v.string()),
  partOfSpeech: v.optional(partOfSpeechValidator),
  info: v.optional(v.array(v.string())),
  mnemonics: v.optional(mnemonicsValidator),
  exampleSentences: v.optional(v.array(exampleSentenceValidator)),
  videos: v.optional(v.array(videoValidator)),
  particles: v.optional(v.array(particleValidator)),
  overwriteWord: v.optional(v.string()),
})

// === Deck Vocabulary Item Input Validator (for user-created decks) ===
export const deckVocabItemInputValidator = v.object({
  word: v.string(),
  furigana: v.optional(v.string()),
  english: v.array(v.string()),
  info: v.optional(v.array(v.string())),
  mnemonics: v.optional(mnemonicsValidator),
  exampleSentences: v.optional(v.array(exampleSentenceValidator)),
  particles: v.optional(v.array(particleValidator)),
  isVerb: v.optional(v.boolean()),
})

export type DeckVocabItemInput = Infer<typeof deckVocabItemInputValidator>

// Inferred types
export type VocabularyItem = Infer<typeof vocabularyItemValidator>
export type RichVocabItem = VocabularyItem & {
  hiragana: string[]
  rubyText: string[]
}

// === Kanji/Radical Validators ===
export const kanjiEntryValidator = v.object({
  kanji: v.string(),
  radicalComponents: v.array(v.string()),
  meanings: v.array(v.string()),
  meaningMnemonic: v.string(),
  readingMnemonic: v.optional(v.string()),
})

export const radicalEntryValidator = v.object({
  radical: v.string(),
  meanings: v.array(v.string()),
  meaningMnemonic: v.string(),
})

// Inferred types
export type KanjiEntry = Infer<typeof kanjiEntryValidator>
export type RadicalEntry = Infer<typeof radicalEntryValidator>

// === Hierarchy Validators ===
export const vocabRelationshipValidator = v.object({
  word: v.string(),
  kanjiComponents: v.array(v.string()),
})

export const kanjiRelationshipValidator = v.object({
  kanji: v.string(),
  radicalComponents: v.array(v.string()),
})

export const vocabHierarchyValidator = v.object({
  vocabulary: v.array(vocabRelationshipValidator),
  kanji: v.array(kanjiRelationshipValidator),
  radicals: v.array(v.string()),
})

// Inferred types
export type VocabRelationship = Infer<typeof vocabRelationshipValidator>
export type KanjiRelationship = Infer<typeof kanjiRelationshipValidator>
export type VocabHierarchy = Infer<typeof vocabHierarchyValidator>
export type Mnemonics = Infer<typeof mnemonicsValidator>
export type PracticeMode = Infer<typeof practiceModeValidator>
export type PracticeItemType = Infer<typeof practiceItemTypeValidator>
export type PracticeItemKey = Infer<typeof practiceItemKeyValidator>

// === Sentence Practice Validators ===
export const sentenceConjugationValidator = v.object({
  pos: v.string(),
  form: v.optional(v.string()),
  polarity: v.union(v.literal("positive"), v.literal("negative")),
  tense: v.union(v.literal("past"), v.literal("non-past")),
})

export const sentenceSegmentValidator = v.object({
  text: v.string(),
  blank: v.optional(v.boolean()),
  conjugation: v.optional(sentenceConjugationValidator),
})

export const sentenceAnswerValidator = v.object({
  segments: v.array(sentenceSegmentValidator),
  notes: v.optional(v.string()),
})

// Inferred types for sentence practice
export type SentenceConjugation = Infer<typeof sentenceConjugationValidator>
export type SentenceSegment = Infer<typeof sentenceSegmentValidator>
export type SentenceAnswer = Infer<typeof sentenceAnswerValidator>
export type PartOfSpeech = Infer<typeof partOfSpeechValidator>

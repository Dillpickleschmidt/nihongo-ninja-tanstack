import type {
  SentenceAnswerToken,
  SentenceSegment,
} from "../../../../convex/validators"

// RichSegment: single source of truth - compute once, use everywhere
export interface RichSegment {
  original: string // "行[い]く" - with furigana brackets
  plain: string // "行く" - kanji, no brackets
  kana: string // "いく" - kana only
  ruby: string // "<ruby>行<rt>い</rt></ruby>く" - HTML
  isBlank: boolean
}

export interface ProcessedSegment extends RichSegment {
  sourceIndex: number
  source: SentenceSegment
}

// Pre-computed answer forms for matching
export interface RichAnswer {
  original: string // "給料[きゅうりょう]を..." - with furigana brackets
  plain: string // "給料をもらったら" - kanji, no brackets
  kana: string // "きゅうりょうをもらったら" - all kana

  // Variation tracking for filtering/display
  isVariation?: boolean
  isInputAlias?: boolean // Derived typing alias, not a canonical Japanese answer
  inputAliasType?: "kana"
  originalPoliteForm?: boolean // true=polite, false=casual
  pronounType?: string // "私[わたし]" | "僕[ぼく]" | "none" | etc.
  honorificType?: string // "さん" | "くん+ちゃん" | "none" | etc.
  sourceAnswerIndex?: number // Which source answer this came from
  notes?: string // Optional context note
}

export interface PreparedAnswerForMatching {
  answer: RichAnswer
  normalizedPlain: string
  normalizedKana: string
  visiblePlain: string
  visibleKana: string
  plainToVisible: (pos: number) => number
  kanaToVisible: (pos: number) => number
}

export type AnswerMatchDisplayMode = "plain" | "kana"

export interface AnswerMatch {
  answer: RichAnswer
  displayText: string
  displayTextMode: AnswerMatchDisplayMode
  similarity: number // 0-1 score
  userErrors: ErrorRange[] // Errors in user input
  displayTextErrors: ErrorRange[]
}

export interface ProcessedQuestion {
  english: string
  hint?: string
  canonicalAnswerTokens: SentenceAnswerToken[][]
  displayAnswer: RichSegment[] // canonical segment answer used for display and easy-mode assembly
  answers: RichSegment[][] // all processed segment answer variants
  canonicalAnswers: RichAnswer[] // real Japanese answer forms
  acceptedAnswers: RichAnswer[] // canonical answers plus input aliases for checking
  preparedAnswersForMatching: PreparedAnswerForMatching[]
}

export interface CheckResult {
  isCorrect: boolean
  bestMatch: string
  similarity: number // 0-1
  errorRanges: ErrorRange[] // errors in user input
  bestMatchDisplayErrors: ErrorRange[]
  strippedParticle?: string // particle stripped for comparison (よ/ね)

  // All matches for alternatives & debug
  allMatches: AnswerMatch[]
  bestMatchIndex: number // Index into allMatches for current best
}

export interface ErrorRange {
  start: number
  end: number
}

export type Difficulty = "easy" | "hard"

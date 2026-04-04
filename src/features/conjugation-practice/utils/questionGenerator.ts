import type { FunctionReturnType } from "convex/server"
import type { PartOfSpeech } from "convex/validators"
import type { api } from "convex/_generated/api"
import type { StoredPreferences } from "@/query/model/preferences"
import { extractHiragana } from "@/data/utils/text/furigana"
import {
  createQuestion,
  setAnswers,
  reverseQuestion,
  type Question,
} from "./questionUtils"

export type ConjugationPracticeSettings =
  StoredPreferences["conjugationPractice"]

export type ConjugatableVocabItem = FunctionReturnType<
  typeof api.api.vocabulary.getConjugatableVocab
>[number]

const SURU_TYPES: PartOfSpeech[] = [
  "Suru verb - special class",
  "Suru verb - included",
  "Suru verb - compound word",
]

function isVerb(pos: PartOfSpeech): boolean {
  return pos !== "I-adjective" && pos !== "Na-adjective"
}

/** Returns inclusive JLPT levels: "n3" → ["n5", "n4", "n3"] */
export function getJLPTLevels(
  jlptLevel: ConjugationPracticeSettings["jlptLevel"],
): string[] {
  const levels = ["n5", "n4", "n3", "n2", "n1"]
  return levels.slice(0, levels.indexOf(jlptLevel) + 1)
}

export function generateQuestions(
  vocab: ConjugatableVocabItem[],
  settings: ConjugationPracticeSettings,
): Question[] {
  const questions: Question[] = []
  const words = filterWords(vocab, settings)
  const types = getQuestionTypes(settings)

  if (words.length === 0 || types.length === 0) return []

  while (questions.length < settings.amount && words.length > 0) {
    const wordIndex = Math.floor(Math.random() * words.length)
    const item = words[wordIndex]
    const typeIndex = Math.floor(Math.random() * types.length)
    const type = types[typeIndex]

    const reading = extractHiragana(item.furigana)
    const questionWord = {
      word: item.word,
      reading,
      furigana: item.furigana,
      partOfSpeech: item.partOfSpeech,
      meaning: item.english[0],
    }

    // Convert suru compound nouns to verb form
    if (item.partOfSpeech === "Suru verb - compound word") {
      questionWord.word = questionWord.word + "する"
      questionWord.reading = questionWord.reading + "する"
      questionWord.furigana = questionWord.furigana + "する"
      questionWord.meaning = "[to do] " + questionWord.meaning
    }

    let question = createQuestion(questionWord, type)
    try {
      question = setAnswers(question)
    } catch (error) {
      console.error("Error setting answers for question:", error)
      words.splice(wordIndex, 1)
      continue
    }

    if (settings.reverse && Math.random() < 0.5) {
      question = reverseQuestion(question)
    }

    questions.push(question)
    words.splice(wordIndex, 1)
  }

  shuffleArray(questions)
  return questions
}

function filterWords(
  vocab: ConjugatableVocabItem[],
  settings: ConjugationPracticeSettings,
): ConjugatableVocabItem[] {
  return vocab.filter((item) => {
    const pos = item.partOfSpeech

    // Part of speech filter
    if (isVerb(pos) && !settings.verb) return false
    if (pos === "I-adjective" && !settings.iAdjective) return false
    if (pos === "Na-adjective" && !settings.naAdjective) return false

    // Suru verb filter
    if (settings.leaveOutSuru && SURU_TYPES.includes(pos)) return false

    return true
  })
}

function getQuestionTypes(
  settings: ConjugationPracticeSettings,
): string[][] {
  const types: string[] = []

  if (settings.normal) types.push("normal")
  if (settings.teForm) types.push("te-form")
  if (settings.volitional) types.push("volitional")
  if (settings.taiForm) types.push("tai-form")
  if (settings.tariForm) types.push("tari-form")
  if (settings.potential) types.push("potential")
  if (settings.imperative) types.push("imperative")
  if (settings.conditional) types.push("conditional")
  if (settings.passive) types.push("passive")
  if (settings.causative) types.push("causative")
  if (settings.causativePassive) types.push("causative-passive")

  const speechLevels: string[] = []
  if (settings.polite) speechLevels.push("polite")
  if (settings.plain) speechLevels.push("plain")

  const tenses: string[] = []
  if (settings.nonPast) tenses.push("non-past")
  if (settings.past) tenses.push("past")

  const polarities: string[] = []
  if (settings.positive) polarities.push("positive")
  if (settings.negative) polarities.push("negative")

  const fullTypes: string[][] = []
  for (const type of types) {
    for (const speechLevel of speechLevels) {
      for (const tense of tenses) {
        for (const polarity of polarities) {
          fullTypes.push([speechLevel, tense, polarity, type])
        }
      }
    }
  }

  return fullTypes
}

function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

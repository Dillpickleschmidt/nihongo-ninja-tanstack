// questionGenerator.ts

import { ConjugationPracticeSettings } from "../schemas/settings"
import {
  Question,
  createQuestion,
  setAnswers,
  reverseQuestion,
} from "./questionUtils"
import { getJLPTLevels } from "./settingsUtils"
import VerbsAndAdjectivesJLPT from "../data/VerbsAndAdjectivesJLPT.json"

type Word = {
  japanese: { word?: string; reading: string }[]
  senses: { english_definitions: string[]; parts_of_speech: string[] }[]
  jlpt_level: number
}

const allowedPartsOfSpeech = [
  "Godan verb with 'u' ending",
  "Godan verb with 'tsu' ending",
  "Godan verb with 'ru' ending",
  "Godan verb with 'ru' ending (irregular verb)",
  "Godan verb - -aru special class",
  "Godan verb - Iku/Yuku special class",
  "Godan verb with 'ku' ending",
  "Godan verb with 'gu' ending",
  "Godan verb with 'bu' ending",
  "Godan verb with 'mu' ending",
  "Godan verb with 'nu' ending",
  "Godan verb with 'su' ending",
  "Ichidan verb",
  "Kuru verb - special class",
  "Suru verb - special class",
  "Suru verb - included",
  "Suru verb - compound word",
  "I-adjective",
  "Na-adjective",
]

/**
 * Generates a set of practice questions based on the provided settings.
 * @param settings - The current application settings.
 * @returns An array of Question objects.
 */
export function generateQuestions(settings: ConjugationPracticeSettings): Question[] {
  console.log("Generating questions with settings:", settings)
  const questions: Question[] = []
  const words = filterWords(settings)
  // log the filtered words - all that match the settings (uncapped amount)
  console.log(
    "Filtered words:",
    words.map((word) => {
      return word.japanese[0].word
    }),
  )
  const types = getQuestionTypes(settings)
  // log the enabled question types (from settings)
  types.forEach((type, index) =>
    console.log("Enabled type " + index + ": " + type),
  )

  while (questions.length < settings.amount && words.length > 0) {
    const wordIndex = Math.floor(Math.random() * words.length)
    const word = words[wordIndex]
    console.log(
      "Selected word:",
      word.japanese[0].word || "reading: " + word.japanese[0].reading,
    )
    const typeIndex = Math.floor(Math.random() * types.length)
    const type = types[typeIndex]
    // console.log("Selected type:", type)

    const questionWord = {
      word: word.japanese[0].word || word.japanese[0].reading,
      reading: word.japanese[0].reading,
      partOfSpeech: word.senses[0].parts_of_speech[0],
      meaning: word.senses[0].english_definitions[0],
    }

    // Make a suru verb from a noun (if applicable)
    if (questionWord.partOfSpeech === "Suru verb - compound word") {
      console.log("Converting noun to suru verb")
      questionWord.word = questionWord.word + "する"
      questionWord.reading = questionWord.reading + "する"
      questionWord.meaning = "[to do] " + questionWord.meaning
    }
    // console.log("Question word:", questionWord)
    // console.log("Question word POS:", questionWord.partOfSpeech)

    let question = createQuestion(questionWord, type)
    // console.log("Created question:", question)
    try {
      question = setAnswers(question)
      // console.log("Answer for " + question.term + question.answers[0].reading)
      // console.log("Types for " + question.term.word + question.type)
    } catch (error) {
      console.error("Error setting answers for question:", error)
      console.error("Problematic question:", question.term)
    }

    if (settings.reverse && Math.random() < 0.5) {
      question = reverseQuestion(question)
    }

    questions.push(question)
    words.splice(wordIndex, 1) // Remove the word to avoid duplicates
  }

  shuffleArray(questions)
  return questions
}

function isUsable(partOfSpeech: string) {
  if (!allowedPartsOfSpeech.includes(partOfSpeech)) {
    return false
  }
  return true
}

/**
 * Filters the word database based on the current settings.
 * @param settings - The current application settings.
 * @returns An array of filtered Word objects.
 */
function filterWords(settings: ConjugationPracticeSettings): Word[] {
  const jlptLevels = getJLPTLevels(settings.jlptLevel)
  const filteredWords: Word[] = []

  if (settings.verb) {
    const verbs = VerbsAndAdjectivesJLPT.verb.filter(
      (word) =>
        jlptLevels.includes(`n${word.jlpt_level}`) &&
        // Include the verb if "Suru verbs" are not to be excluded, or if it is not a "Suru verb"
        (!settings.leaveOutSuru ||
          ![
            "Suru verb - special class",
            "Suru verb - included",
            "Suru verb - compound word",
          ].some((pos) => word.senses[0].parts_of_speech.includes(pos))) &&
        isUsable(word.senses[0].parts_of_speech[0]),
    )
    filteredWords.push(...verbs)
  }
  if (settings.iAdjective) {
    const iAdjectives = VerbsAndAdjectivesJLPT["adj-i"].filter(
      (word) =>
        jlptLevels.includes(`n${word.jlpt_level}`) &&
        isUsable(word.senses[0].parts_of_speech[0]),
    )
    filteredWords.push(...iAdjectives)
  }
  if (settings.naAdjective) {
    const naAdjectives = VerbsAndAdjectivesJLPT["adj-na"].filter(
      (word) =>
        jlptLevels.includes(`n${word.jlpt_level}`) &&
        isUsable(word.senses[0].parts_of_speech[0]),
    )
    filteredWords.push(...naAdjectives)
  }

  return filteredWords
}

/**
 * Determines the question types to use based on the current settings.
 * @param settings - The current application settings.
 * @returns An array of question type strings.
 */
function getQuestionTypes(settings: ConjugationPracticeSettings): string[][] {
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

  const fullTypes: string[][] = []

  const speechLevels: string[] = []
  if (settings.polite) speechLevels.push("polite")
  if (settings.plain) speechLevels.push("plain")

  const tenses: string[] = []
  if (settings.nonPast) tenses.push("non-past")
  if (settings.past) tenses.push("past")

  const polarities: string[] = []
  if (settings.positive) polarities.push("positive")
  if (settings.negative) polarities.push("negative")

  types.forEach((type) => {
    speechLevels.forEach((speechLevel) => {
      tenses.forEach((tense) => {
        polarities.forEach((polarity) => {
          fullTypes.push([speechLevel, tense, polarity, type])
        })
      })
    })
  })

  return fullTypes
}

/**
 * Shuffles an array in place.
 * @param array - The array to shuffle.
 */
function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

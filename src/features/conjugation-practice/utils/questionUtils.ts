// questionUtils.ts

import * as conjugationUtils from "./conjugationUtils"
import * as wanakana from "wanakana"

export type Answer = {
  word: string
  reading: string
}

export type Question = {
  term: {
    word: string
    reading: string
    partOfSpeech: string
  }
  type: string[]
  answers: Answer[]
  givenAnswer: string
  correct?: boolean
  answered: boolean
  reversed: boolean
}

export type ReviewSessionState = {
  questions: Question[]
  currentIndex: number
  score: number
  isComplete: boolean
}

/**
 * Creates a new Question object.
 * @param term - Object containing word, reading, and partOfSpeech of the word (verb or adjective)
 * @param type - The type of conjugation or inflection for the question
 * @returns A new Question object
 *
 * @example
 * const question = createQuestion(
 *   { word: '食べる', reading: 'たべる', partOfSpeech: 'Ichidan verb' },
 *   'te-form'
 * );
 */
export function createQuestion(
  term: { word: string; reading: string; partOfSpeech: string },
  type: string[],
): Question {
  return {
    term,
    type,
    answers: [],
    givenAnswer: "",
    answered: false,
    reversed: false,
  }
}

/**
 * Sets the answers for a given question based on its conjugation or inflection type.
 * @param question - The Question object to set answers for
 * @returns A new Question object with answers set
 *
 * @example
 * const questionWithAnswers = setAnswers(question);
 * console.log(questionWithAnswers.answers);
 */
export function setAnswers(question: Question): Question {
  const conjugations = getConjugations(
    question.term.reading,
    question.term.partOfSpeech,
    question.type,
  )
  const answers = conjugations.map((conjugation) => ({
    word:
      getWordAnswer(question.term.word, question.term.reading, conjugation) ||
      conjugation,
    reading: conjugation,
  }))
  return { ...question, answers }
}

/**
 * Generates conjugations or inflections based on the word and question type.
 * @param reading - The reading of the word (verb or adjective)
 * @param partOfSpeech - The part of speech of the word
 * @param type - The type of conjugation or inflection
 * @returns An array of conjugated or inflected forms
 */
function getConjugations(
  reading: string,
  partOfSpeech: string,
  type: string[],
): string[] {
  const [speechLevel, tense, polarity, conjugationType] = type
  const polite = speechLevel === "polite"
  const negative = polarity === "negative"
  const past = tense === "past"
  // console.log("Conjugation options:", {
  //   polite,
  //   negative,
  //   past,
  //   conjugationType,
  // })

  switch (conjugationType) {
    case "te-form":
      return conjugationUtils.teForm(reading, partOfSpeech)
    case "volitional":
      return conjugationUtils.volitional(reading, partOfSpeech, polite)
    case "potential":
      return conjugationUtils.potential(reading, partOfSpeech, {
        polite,
        negative,
        past,
      })
    case "imperative":
      return conjugationUtils.imperative(reading, partOfSpeech, negative)
    case "conditional":
      return conjugationUtils.conditional(reading, partOfSpeech, negative)
    case "tai-form":
      return conjugationUtils.taiForm(reading, partOfSpeech, {
        polite,
        negative,
        past,
      })
    case "tari-form":
      return conjugationUtils.tariForm(reading, partOfSpeech, negative)
    case "passive":
      return conjugationUtils.passive(reading, partOfSpeech, {
        polite,
        negative,
        past,
      })
    case "causative":
      return conjugationUtils.causative(reading, partOfSpeech, {
        polite,
        negative,
        past,
      })
    case "causative-passive":
      return conjugationUtils.causativePassive(reading, partOfSpeech, {
        polite,
        negative,
        past,
      })
    default:
      return conjugationUtils.normalForm(reading, partOfSpeech, {
        polite,
        negative,
        past,
      })
  }
}

/**
 * Generates the word answer based on the conjugated or inflected reading.
 * @param word - The original word
 * @param reading - The reading of the word
 * @param readingAnswer - The conjugated or inflected reading
 * @returns The conjugated or inflected word, or undefined if no change
 */
function getWordAnswer(
  word: string,
  reading: string,
  readingAnswer: string,
): string | undefined {
  if (word === reading) {
    return undefined
  }

  const okurigana = getOkurigana(word)
  if (okurigana.length === 0) {
    return readingAnswer.replace(reading, word)
  }

  const readingBase = reading.slice(0, -okurigana.length)
  const wordBase = word.slice(0, -okurigana.length)
  const conjugation = readingAnswer.substring(readingBase.length)

  return `${wordBase}${conjugation}`
}

/**
 * Extracts the okurigana from a word.
 * @param word - The word to extract okurigana from
 * @returns The okurigana of the word
 */
function getOkurigana(word: string): string {
  return word.substring(wanakana.stripOkurigana(word).length)
}

/**
 * Checks the given answer against the correct answers for a question.
 * @param question - The Question object to check
 * @param givenAnswer - The answer provided by the user
 * @returns A new Question object with the check results
 *
 * @example
 * const checkedQuestion = checkAnswer(question, 'たべて');
 * console.log(checkedQuestion.correct); // true or false
 */
export function checkAnswer(question: Question, givenAnswer: string): Question {
  // Clean the given answer by removing extra spaces and converting to kana
  let cleanedAnswer = givenAnswer.trim().replace(/\s+/g, "")
  cleanedAnswer = cleanedAnswer.replace(/nn$/g, "ん")
  cleanedAnswer = wanakana.toKana(cleanedAnswer)

  // If the answer is empty after cleaning, mark it as incorrect
  if (!cleanedAnswer) {
    return {
      ...question,
      givenAnswer: cleanedAnswer,
      answered: true,
      correct: false,
    }
  }

  // Continue checking the cleaned answer against the correct answers
  const correct = question.answers.some(
    (answer) =>
      checkGivenAgainstCorrect(cleanedAnswer, answer.word) ||
      checkGivenAgainstCorrect(cleanedAnswer, answer.reading),
  )

  return { ...question, givenAnswer: cleanedAnswer, answered: true, correct }
}

/**
 * Checks if a given answer exactly matches a correct answer.
 * @param given - The given answer to check
 * @param correct - The correct answer to check against
 * @returns True if the given answer matches the correct answer exactly, false otherwise
 */
function checkGivenAgainstCorrect(
  given: string,
  correct: string | undefined,
): boolean {
  if (!correct) return false
  const cleanedAnswers = cleanUpAnswer(correct)

  // Ensure exact match instead of partial match
  return cleanedAnswers.some((cleanedAnswer) => cleanedAnswer === given)
}

/**
 * Cleans up an answer for comparison.
 * @param answer - The answer to clean up
 * @returns An array of cleaned up versions of the answer
 */
function cleanUpAnswer(answer: string): string[] {
  return [
    wanakana.toHiragana(answer),
    wanakana.toHiragana(wanakana.toRomaji(answer)),
  ]
}

/**
 * Reverses a question, making the answer the new question and vice versa.
 * @param question - The Question object to reverse
 * @returns A new reversed Question object
 *
 * @example
 * const reversedQuestion = reverseQuestion(question);
 * console.log(reversedQuestion.term.reading); // Original answer
 * console.log(reversedQuestion.answers[0].reading); // Original question
 */
export function reverseQuestion(question: Question): Question {
  const [firstAnswer] = question.answers
  return {
    ...question,
    answers: [{ word: question.term.word, reading: question.term.reading }],
    term: {
      ...question.term,
      word: firstAnswer.word,
      reading: firstAnswer.reading,
    },
    reversed: true,
  }
}

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
    furigana: string
    partOfSpeech: string
    meaning: string
  }
  type: string[]
  answers: Answer[]
  givenAnswer: string
  correct: boolean
  answered: boolean
  reversed: boolean
}

export type ReviewSessionState = {
  questions: Question[]
  currentIndex: number
  score: number
  isComplete: boolean
}

export function createQuestion(
  term: Question["term"],
  type: string[],
): Question {
  return {
    term,
    type,
    answers: [],
    givenAnswer: "",
    correct: false,
    answered: false,
    reversed: false,
  }
}

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

function getConjugations(
  reading: string,
  partOfSpeech: string,
  type: string[],
): string[] {
  const [speechLevel, tense, polarity, conjugationType] = type
  const polite = speechLevel === "polite"
  const negative = polarity === "negative"
  const past = tense === "past"

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

function getWordAnswer(
  word: string,
  reading: string,
  readingAnswer: string,
): string | undefined {
  if (word === reading) return undefined

  const okurigana = getOkurigana(word)
  if (okurigana.length === 0) {
    return readingAnswer.replace(reading, word)
  }

  const readingBase = reading.slice(0, -okurigana.length)
  const wordBase = word.slice(0, -okurigana.length)
  const conjugation = readingAnswer.substring(readingBase.length)

  return `${wordBase}${conjugation}`
}

function getOkurigana(word: string): string {
  return word.substring(wanakana.stripOkurigana(word).length)
}

export function checkAnswer(question: Question, givenAnswer: string): Question {
  let cleanedAnswer = givenAnswer.trim().replace(/\s+/g, "")
  cleanedAnswer = cleanedAnswer.replace(/nn$/g, "ん")
  cleanedAnswer = wanakana.toKana(cleanedAnswer)

  if (!cleanedAnswer) {
    return {
      ...question,
      givenAnswer: cleanedAnswer,
      answered: true,
      correct: false,
    }
  }

  const correct = question.answers.some(
    (answer) =>
      checkGivenAgainstCorrect(cleanedAnswer, answer.word) ||
      checkGivenAgainstCorrect(cleanedAnswer, answer.reading),
  )

  return { ...question, givenAnswer: cleanedAnswer, answered: true, correct }
}

function checkGivenAgainstCorrect(
  given: string,
  correct: string | undefined,
): boolean {
  if (!correct) return false
  const cleanedAnswers = cleanUpAnswer(correct)
  return cleanedAnswers.some((cleanedAnswer) => cleanedAnswer === given)
}

function cleanUpAnswer(answer: string): string[] {
  return [
    wanakana.toHiragana(answer),
    wanakana.toHiragana(wanakana.toRomaji(answer)),
  ]
}

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

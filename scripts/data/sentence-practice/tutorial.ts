import type { Question } from "./types"

export const questions: Question[] = [
  {
    english: "I am a student.",
    answers: [
      {
        segments: [
          {
            text: "学生[がくせい]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]は",
          },
          {
            text: "学生[がくせい]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]が",
          },
          {
            text: "学生[がくせい]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
      },
    ],
  },
  {
    english: "I eat bananas.",
    hint: "bananas - バナナ",
    answers: [
      {
        segments: [
          {
            text: "バナナを",
          },
          {
            text: "食[た]べる",
            blank: true,
          },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]はバナナを",
          },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]がバナナを",
          },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
]

import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Is Mr./Ms. Tanaka a student?",
    hint: "Name spelling: 田中（たなか）",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは" },
          { text: "学生[がくせい]ですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "Is Mr./Ms. Yamada a doctor?",
    hint: "Name spelling: 山田（やまだ）",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは" },
          { text: "医者[いしゃ]ですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "How old is Professor Suzuki?",
    hint: "Name spelling: 鈴木（すずき）",
    answers: [
      {
        segments: [
          { text: "鈴木[すずき]先生[せんせい]は" },
          { text: "何[なん]歳[さい]ですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "Is Mr./Ms. Yoshida Japanese?",
    hint: "Name spelling: 吉田（よしだ）",
    answers: [
      {
        segments: [
          { text: "吉田[よしだ]さんは" },
          { text: "日本人[にほんじん]ですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "Is Ms. Hanako a nurse?",
    hint: "Name spelling: 花子（はなこ）",
    answers: [
      {
        segments: [
          { text: "花子[はなこ]さんは" },
          { text: "看護師[かんごし]ですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "Is Katou a university student?",
    hint: "Name spelling: 加藤（かとう）",
    answers: [
      {
        segments: [
          { text: "加藤[かとう]さんは" },
          { text: "大学生[だいがくせい]ですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "Is Mr./Ms. Satou a lawyer?",
    hint: "Name spelling: 砂糖（さとう）",
    answers: [
      {
        segments: [
          { text: "砂糖[さとう]さんは" },
          { text: "弁護士[べんごし]ですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "Is Tarou a first-year student?",
    hint: "Name spelling: 太郎（たろう）",
    answers: [
      {
        segments: [
          { text: "太郎[たろう]さんは" },
          { text: "一年生[いちねんせい]ですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "Is Ms. Kimura a housewife?",
    hint: "Name spelling: 木村（きむら）",
    answers: [
      {
        segments: [
          { text: "木村[きむら]さんは" },
          { text: "主婦[しゅふ]ですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "Is Mr./Ms. Inoue an office worker?",
    hint: "Name spelling: 井上（いのうえ）",
    answers: [
      {
        segments: [
          { text: "井上[いのうえ]さんは" },
          { text: "会社員[かいしゃいん]ですか", blank: true }
        ]
      }
    ]
  }
]

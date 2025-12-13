import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "This is not my book.",
    hint: "XはYです",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "私[わたし]の 本[ほん]じゃないです", blank: true }
        ],
        notes: "Full form with これは"
      },
      {
        segments: [
          { text: "私[わたし]の 本[ほん]じゃないです", blank: true }
        ],
        notes: "Shorter form without これは"
      }
    ]
  },
  {
    english: "Isn't this Tanaka's bag?",
    hint: "Seeking confirmation about ownership",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "田中[たなか]さんのかばんじゃないですか", blank: true }
        ],
        notes: "Full form with これは"
      },
      {
        segments: [
          { text: "田中[たなか]さんのかばんじゃないですか", blank: true }
        ],
        notes: "Shorter form without これは"
      }
    ]
  },
  {
    english: "This is not Tanaka's dictionary.",
    hint: "Denying ownership of a dictionary",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "田中[たなか]さんのじしょじゃないです", blank: true }
        ],
        notes: "Full form with これは"
      },
      {
        segments: [
          { text: "田中[たなか]さんのじしょじゃないです", blank: true }
        ],
        notes: "Shorter form without これは"
      }
    ]
  },
  {
    english: "Tanaka is not a student. Yamada is not a student either.",
    hint: "Expressing that multiple people aren't students",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは" },
          { text: "学生[がくせい]じゃないです", blank: true },
          { text: "。山田[やまだ]さんも" },
          { text: "学生[がくせい]じゃないです", blank: true },
          { text: "。" }
        ],
        notes: "Using も to add another person who isn't a student"
      }
    ]
  },
  {
    english: "Isn't that person Chinese?",
    hint: "Seeking confirmation about someone's nationality",
    answers: [
      {
        segments: [
          { text: "あの 人[ひと]は" },
          { text: "中国人[ちゅうごくじん]じゃないですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "This is not a student.",
    hint: "Simple negation of someone's role",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "学生[がくせい]じゃないです", blank: true }
        ],
        notes: "Full form with これは"
      },
      {
        segments: [
          { text: "これが" },
          { text: "学生[がくせい]じゃないです", blank: true }
        ],
        notes: "Full form with これは"
      },
      {
        segments: [
          { text: "学生[がくせい]じゃないです", blank: true }
        ],
        notes: "Shorter form without これは, when context is clear"
      }
    ]
  },
  {
    english: "Tanaka is not a teacher.",
    hint: "Stating what someone is not",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは" },
          { text: "先生[せんせい]じゃないです", blank: true }
        ]
      }
    ]
  },
  {
    english: "Isn't Yamada a nurse?",
    hint: "Seeking confirmation about someone's profession",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは" },
          { text: "看護師[かんごし]じゃないですか", blank: true }
        ]
      }
    ]
  },
  {
    english: "This is not an English book.",
    hint: "Denying type of book",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "英語[えいご]の 本[ほん]じゃないです", blank: true }
        ],
        notes: "Full form with これは"
      },
      {
        segments: [
          { text: "英語[えいご]の 本[ほん]じゃないです", blank: true }
        ],
        notes: "Shorter form without これは"
      }
    ]
  },
  {
    english: "Yamada is not a doctor. Kim is not a doctor either.",
    hint: "Expressing that multiple people aren't doctors",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは" },
          { text: "医者[いしゃ]じゃないです", blank: true },
          { text: "。キムさんも" },
          { text: "医者[いしゃ]じゃないです", blank: true },
          { text: "。" }
        ],
        notes: "Using も to add another person who isn't a doctor"
      }
    ]
  }
]

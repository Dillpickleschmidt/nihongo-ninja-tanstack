import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I am a student.",
    hint: "Use XはYです pattern",
    answers: [
      {
        segments: [{ text: "私[わたし]は 学生[がくせい]です", blank: true }],
      },
    ],
  },
  {
    english: "Mr./Ms. Tanaka is a doctor.",
    hint: "Name spelling: 田中（たなか）",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは 医者[いしゃ]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Yamada is an office worker.",
    hint: "Name spelling: 山田（やまだ）",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは 会社員[かいしゃいん]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Satou is Japanese.",
    hint: "Name spelling: 砂糖（さとう）",
    answers: [
      {
        segments: [
          { text: "佐藤[さとう]さんは 日本人[にほんじん]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Professor Hayashi is a teacher.",
    hint: "Name spelling: 林（はやし）",
    answers: [
      {
        segments: [
          {
            text: "林[はやし]先生[せんせい]は 先生[せんせい]です",
            blank: true,
          },
        ],
      },
    ],
  },
  {
    english: "Yuki is a high school student.",
    hint: "Name spelling: 雪（ゆき）",
    answers: [
      {
        segments: [
          { text: "雪[ゆき]は 高校生[こうこうせい]です", blank: true },
        ],
      },
      {
        segments: [{ text: "ユキは 高校生[こうこうせい]です", blank: true }],
      },
      {
        segments: [{ text: "ゆきは 高校生[こうこうせい]です", blank: true }],
      },
    ],
  },
  {
    english: "Mr./Ms. Nakamura is a university student.",
    hint: "Name spelling: 中村（なかむら）",
    answers: [
      {
        segments: [
          {
            text: "中村[なかむら]さんは 大学生[だいがくせい]です",
            blank: true,
          },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Suzuki is a nurse.",
    hint: "Name spelling: 鈴木（すずき）",
    answers: [
      {
        segments: [
          { text: "鈴木[すずき]さんは 看護師[かんごし]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Tarou is a first-year student.",
    hint: "Name spelling: 太郎（たろう）",
    answers: [
      {
        segments: [
          { text: "太郎[たろう]は 一年生[いちねんせい]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Ms. Hanako is a housewife.",
    hint: "Name spelling: 花子（はなこ）",
    answers: [
      {
        segments: [
          { text: "花子[はなこ]さんは 主婦[しゅふ]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "I am a graduate student.",
    hint: "Use XはYです pattern",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 大学院生[だいがくいんせい]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Kobayashi is a high school student.",
    hint: "Name spelling: 小林（こばやし）",
    answers: [
      {
        segments: [
          {
            text: "小林[こばやし]さんは 高校生[こうこうせい]です",
            blank: true,
          },
        ],
      },
      {
        segments: [
          { text: "賢司[けんじ]は 高校生[こうこうせい]です", blank: true },
        ],
      },
      {
        segments: [
          { text: "謙治[けんじ]は 高校生[こうこうせい]です", blank: true },
        ],
      },
      {
        segments: [
          { text: "研司[けんじ]は 高校生[こうこうせい]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Murata is a lawyer.",
    hint: "Name spelling: 村田（むらた）",
    answers: [
      {
        segments: [
          { text: "村田[むらた]さんは 弁護士[べんごし]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Inoue is a teacher.",
    hint: "Name spelling: 井上（いのうえ）",
    answers: [
      {
        segments: [
          { text: "井上[いのうえ]さんは 先生[せんせい]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Yoshida is an international student.",
    hint: "Name spelling: 吉田（よしだ）",
    answers: [
      {
        segments: [
          {
            text: "吉田[よしだ]さんは 留学生[りゅうがくせい]です",
            blank: true,
          },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Katou is a doctor.",
    hint: "Name spelling: 加藤（かとう）",
    answers: [
      {
        segments: [
          { text: "加藤[かとう]さんは 医者[いしゃ]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Okada is an office worker.",
    hint: "Name spelling: 岡田（おかだ）",
    answers: [
      {
        segments: [
          { text: "岡田[おかだ]さんは 会社員[かいしゃいん]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Abe is a university student.",
    hint: "Name spelling: 阿部（あべ） or 安倍（あべ）",
    answers: [
      {
        segments: [
          { text: "阿部[あべ]さんは 大学生[だいがくせい]です", blank: true },
        ],
      },
      {
        segments: [
          { text: "安倍[あべ]さんは 大学生[だいがくせい]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mr./Ms. Mori is a nurse.",
    hint: "Name spelling: 森（もり）",
    answers: [
      {
        segments: [
          { text: "森[もり]さんは 看護師[かんごし]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Ms. Kimura is a housewife.",
    hint: "Name spelling: 木村（きむら）",
    answers: [
      {
        segments: [
          { text: "木村[きむら]さんは 主婦[しゅふ]です", blank: true },
        ],
      },
    ],
  },
]

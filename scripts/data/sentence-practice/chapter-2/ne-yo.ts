import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Kobayashi isn't a student, is he?",
    hint: "Kobayashi = 小林 (こばやし); sharing observation/seeking agreement about someone's role",
    answers: [
      {
        segments: [
          { text: "小林[こばやし]さんは 学生[がくせい]じゃないです" },
          { text: "ね", blank: true },
        ],
        notes:
          "Using ね when you're both familiar with Kobayashi and sharing knowledge",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは 学生[がくせい]じゃないです" },
          { text: "よね", blank: true },
        ],
        notes:
          "Using よね when you heard this but want to confirm your understanding",
      },
    ],
  },
  {
    english: "This is an English book, you know.",
    hint: "Informing someone about what kind of book it is",
    answers: [
      {
        segments: [
          { text: "これは 英語[えいご]の 本[ほん]です" },
          { text: "よ", blank: true },
        ],
        notes:
          "Using よ to inform someone who might not know what kind of book it is",
      },
    ],
  },
  {
    english: "Yamada is a doctor, right?",
    hint: "Yamada = 山田 (やまだ); confirming what you believe about someone's profession",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは 医者[いしゃ]です" },
          { text: "ね", blank: true },
        ],
        notes: "Using ね when it's common knowledge you're both aware of",
      },
      {
        segments: [
          { text: "山田[やまだ]さんは 医者[いしゃ]です" },
          { text: "よね", blank: true },
        ],
        notes: "Using よね when you believe this is true but want to confirm",
      },
    ],
  },
  {
    english: "This bag is expensive, isn't it?",
    hint: "Sharing observation about price",
    answers: [
      {
        segments: [
          { text: "このかばんは 高[たか]いです" },
          { text: "ね", blank: true },
        ],
        notes:
          "Using ね when you're both looking at the price tag or discussing the known price",
      },
      {
        segments: [
          { text: "このかばんは 高[たか]いです" },
          { text: "よね", blank: true },
        ],
        notes:
          "Using よね when you think it's expensive and want to confirm if others agree",
      },
    ],
  },
  {
    english: "This is my dictionary, just so you know.",
    hint: "Informing someone about ownership",
    answers: [
      {
        segments: [
          { text: "これは 私[わたし]のじしょです" },
          { text: "よ", blank: true },
        ],
        notes:
          "Using よ to inform someone of ownership they might not be aware of",
      },
    ],
  },
  {
    english: "Kim is a nurse, right?",
    hint: "Kim = キム; confirming someone's profession",
    answers: [
      {
        segments: [
          { text: "キムさんは 看護師[かんごし]です" },
          { text: "ね", blank: true },
        ],
        notes: "Using ね when discussing shared knowledge about Kim",
      },
      {
        segments: [
          { text: "キムさんは 看護師[かんごし]です" },
          { text: "よね", blank: true },
        ],
        notes:
          "Using よね when you think you remember correctly but want to confirm",
      },
    ],
  },
  {
    english: "That person isn't Chinese, is he?",
    hint: "Sharing observation about someone's nationality",
    answers: [
      {
        segments: [
          { text: "あの 人[ひと]は 中国人[ちゅうごくじん]じゃないです" },
          { text: "ね", blank: true },
        ],
        notes: "Using ね to share an immediate observation and seek agreement",
      },
      {
        segments: [
          { text: "あの 人[ひと]は 中国人[ちゅうごくじん]じゃないです" },
          { text: "よね", blank: true },
        ],
        notes:
          "Using よね because you don't think they're Chinese, but want to confirm if others agree",
      },
    ],
  },
  {
    english: "That teacher is a lawyer, you know.",
    hint: "Informing someone about a person's profession",
    answers: [
      {
        segments: [
          { text: "あの 先生[せんせい]は 弁護士[べんごし]です" },
          { text: "よ", blank: true },
        ],
        notes: "Using よ to provide information the listener might not know",
      },
    ],
  },
  {
    english: "This sushi is delicious, isn't it?",
    hint: "Sharing opinion about food",
    answers: [
      {
        segments: [
          { text: "このすしはおいしいです" },
          { text: "ね", blank: true },
        ],
        notes: "Using ね when eating together and sharing the experience",
      },
      {
        segments: [
          { text: "このすしはおいしいです" },
          { text: "よね", blank: true },
        ],
        notes:
          "Using よね when you think it's delicious and want to confirm if others agree",
      },
    ],
  },
  {
    english: "I'm a first-year student, you know.",
    hint: "Informing someone about your student status",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 一年生[いちねんせい]です" },
          { text: "よ", blank: true },
        ],
        notes: "Using よ to inform someone of your status",
      },
    ],
  },
  {
    english: "That's an international student, right?",
    hint: "Confirming someone's student status",
    answers: [
      {
        segments: [
          { text: "あの 人[ひと]は 留学生[りゅうがくせい]です" },
          { text: "ね", blank: true },
        ],
        notes: "Using ね when sharing an observation or common knowledge",
      },
      {
        segments: [
          { text: "あの 人[ひと]は 留学生[りゅうがくせい]です" },
          { text: "よね", blank: true },
        ],
        notes: "Using よね when you've heard this and want to confirm",
      },
    ],
  },
  {
    english: "This is not your pen, is it?",
    hint: "Confirming non-ownership",
    answers: [
      {
        segments: [
          { text: "これはあなたのペンじゃないです" },
          { text: "ね", blank: true },
        ],
        notes: "Using ね to confirm a shared understanding about ownership",
      },
    ],
  },
  {
    english: "That's my umbrella, you know.",
    hint: "Informing about ownership",
    answers: [
      {
        segments: [
          { text: "あれは 私[わたし]のかさです" },
          { text: "よ", blank: true },
        ],
        notes: "Using よ to inform someone who might not know it's yours",
      },
    ],
  },
  {
    english: "Your major is Japanese, right?",
    hint: "Confirming someone's field of study",
    answers: [
      {
        segments: [
          { text: "あなたの 専攻[せんこう]は 日本語[にほんご]です" },
          { text: "ね", blank: true },
        ],
        notes: "Using ね when confirming something you've discussed before",
      },
      {
        segments: [
          { text: "あなたの 専攻[せんこう]は 日本語[にほんご]です" },
          { text: "よね", blank: true },
        ],
        notes:
          "Using よね when you think you remember correctly but want to confirm",
      },
    ],
  },
]

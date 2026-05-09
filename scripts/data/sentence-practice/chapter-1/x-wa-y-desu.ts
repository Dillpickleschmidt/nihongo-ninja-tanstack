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
    english: "Tanaka is a doctor.",
    hint: "Tanaka = 田中 (たなか)",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは 医者[いしゃ]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Yamada is an office worker.",
    hint: "Yamada = 山田 (やまだ)",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは 会社員[かいしゃいん]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "My mother is Japanese.",
    answers: [
      {
        segments: [
          { text: "お母[おかあ]さんは 日本人[にほんじん]です", blank: true },
        ],
        notes: "Dropping 私の — natural in Japanese when context is clear; お母さん alone implies \"my mother\"",
      },
      {
        segments: [
          { text: "私[わたし]の お母[おかあ]さんは 日本人[にほんじん]です", blank: true },
        ],
        notes: "Explicitly includes 私の for possession.",
      },
      {
        segments: [
          { text: "母[はは]は 日本人[にほんじん]です", blank: true },
        ],
        notes: "Using 母 (haha) — humble/plain word for one's own mother, more formal register",
      },
      {
        segments: [
          { text: "私[わたし]の 母[はは]は 日本人[にほんじん]です", blank: true },
        ],
        notes: "Using 母 (haha) — humble/plain word for one's own mother, more formal register",
      },
    ],
  },
  {
    english: "Sato is Japanese.",
    hint: "Sato = 佐藤 (さとう)",
    answers: [
      {
        segments: [
          { text: "佐藤[さとう]さんは 日本人[にほんじん]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Nakamura is a university student.",
    hint: "Nakamura = 中村 (なかむら)",
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
    english: "Everyone is a student.",
    answers: [
      {
        segments: [
          { text: "みんなは 学生[がくせい]です", blank: true },
        ],
      },
      {
        segments: [
          { text: "みんなが 学生[がくせい]です", blank: true },
        ],
        notes: "Using が instead of は to highlight \"everyone\"",
      },
      {
        segments: [
          { text: "皆[みんな]は 学生[がくせい]です", blank: true },
        ],
        notes: "Using kanji 皆 for みんな with は",
      },
      {
        segments: [
          { text: "皆[みんな]が 学生[がくせい]です", blank: true },
        ],
        notes: "Kanji 皆 with が instead of は",
      },
    ],
  },
  {
    english: "Suzuki is a nurse.",
    hint: "Suzuki = 鈴木 (すずき)",
    answers: [
      {
        segments: [
          { text: "鈴木[すずき]さんは 看護師[かんごし]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Kobayashi is a high school student.",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          {
            text: "小林[こばやし]さんは 高校生[こうこうせい]です",
            blank: true,
          },
        ],
      },

    ],
  },
  {
    english: "Hanako is a housewife.",
    hint: "Hanako = 花子 (はなこ)",
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
    english: "Murata is a lawyer.",
    hint: "Murata = 村田 (むらた)",
    answers: [
      {
        segments: [
          { text: "村田[むらた]さんは 弁護士[べんごし]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mei is a biology major.",
    hint: "Mei = 芽衣 (めい)",
    answers: [
      {
        segments: [
          { text: "芽衣[めい]さんは 生物学[せいぶつがく] 専攻[せんこう]です", blank: true },
        ],
        notes: "Compact form — 生物学専攻 used as a compound noun without の",
      },
      {
        segments: [
          { text: "芽衣[めい]さんは 生物学[せいぶつがく]の 専攻[せんこう]です", blank: true },
        ],
        notes: "生物学の専攻 = biology major.",
      },
      {
        segments: [
          { text: "芽衣[めい]さんの 専攻[せんこう]は 生物学[せいぶつがく]です", blank: true },
        ],
        notes: "Topic is Mei's major; は marks 専攻 as topic",
      },
    ],
  },
  {
    english: "Yoshida is an international student.",
    hint: "Yoshida = 吉田 (よしだ)",
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
    english: "My friend is a nurse.",
    answers: [
      {
        segments: [
          { text: "友[とも]だちは 看護師[かんごし]です", blank: true },
        ],
        notes: "Dropping 私の — possession implied; shorter and natural in casual context",
      },
      {
        segments: [
          { text: "友達[ともだち]は 看護師[かんごし]です", blank: true },
        ],
        notes: "友達 kanji variant, no 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 友[とも]だちは 看護師[かんごし]です", blank: true },
        ],
        notes: "Explicitly includes 私の to show possession.",
      },
      {
        segments: [
          { text: "私[わたし]の 友達[ともだち]は 看護師[かんごし]です", blank: true },
        ],
        notes: "Using 友達 kanji variant instead of 友だち",
      },
    ],
  },
  {
    english: "Kato is a doctor.",
    hint: "Kato = 加藤 (かとう)",
    answers: [
      {
        segments: [
          { text: "加藤[かとう]さんは 医者[いしゃ]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Okada is an office worker.",
    hint: "Okada = 岡田 (おかだ)",
    answers: [
      {
        segments: [
          { text: "岡田[おかだ]さんは 会社員[かいしゃいん]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mori is a nurse.",
    hint: "Mori = 森 (もり)",
    answers: [
      {
        segments: [
          { text: "森[もり]さんは 看護師[かんごし]です", blank: true },
        ],
      },
    ],
  },
  {
    english: "Kimura is a housewife.",
    hint: "Kimura = 木村 (きむら)",
    answers: [
      {
        segments: [
          { text: "木村[きむら]さんは 主婦[しゅふ]です", blank: true },
        ],
      },
    ],
  },
]

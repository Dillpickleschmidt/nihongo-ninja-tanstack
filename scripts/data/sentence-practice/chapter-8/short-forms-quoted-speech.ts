import type { Question } from "../types"

const omouPos = {
  pos: "Godan verb with 'u' ending" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

const kikuPast = {
  pos: "Godan verb with 'ku' ending" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "past" as const,
}

export const questions: Question[] = [
  {
    english: "Kaede said she is living with a dog now.",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんは 今[いま] 犬[いぬ]と 住[す]んで", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "楓[かえで]さんが 今[いま] 犬[いぬ]と 住[す]んで", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 犬[いぬ]と 今[いま] 住[す]んで", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "今 moved after 犬と",
      },
      {
        segments: [
          {
            text: "楓[かえで]さんは 今[いま] 犬[いぬ]と 一緒[いっしょ]に 住[す]んで",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "一緒に (together with) added",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 今[いま] 犬[いぬ]と 住[す]んで", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "と聞いた instead of と言っていた",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 今[いま] 犬[いぬ]と 暮[く]らして", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "暮らしている (live, synonym of 住む) + 言った",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 今[いま] 犬[いぬ]と 暮[く]らして", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "暮らしている + 言っていた",
      },
    ],
  },
  {
    english: "I think it's going to rain tomorrow.",
    answers: [
      {
        segments: [
          { text: "明日[あした]は 雨[あめ]が 降[ふ]ると", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]は 明日[あした]は 雨[あめ]が 降[ふ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "明日[あした] 雨[あめ]が 降[ふ]ると", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Without は after 明日",
      },
      {
        segments: [
          { text: "明日[あした]は 雨[あめ]だと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "雨だ (noun predicate) instead of 降る",
      },
    ],
  },
  {
    english: "I heard that Mizuki is studying Japanese at the library now.",
    hint: "Mizuki = 瑞希 (みずき)",
    answers: [
      {
        segments: [
          {
            text: "瑞希[みずき]さんが 今[いま] 図書館[としょかん]で 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard sentence with が marking Mizuki as the subject of the quoted information.",
      },
      {
        segments: [
          {
            text: "瑞希[みずき]さんは 今[いま] 図書館[としょかん]で 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using は to mark Mizuki as the topic of the quoted information.",
      },
      {
        segments: [
          {
            text: "今[いま] 瑞希[みずき]さんが 図書館[としょかん]で 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time phrase placed at the beginning.",
      },
      {
        segments: [
          {
            text: "今[いま] 瑞希[みずき]さんは 図書館[としょかん]で 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time phrase first, with は marking Mizuki as topic.",
      },
      {
        segments: [
          {
            text: "瑞希[みずき]さんが 図書館[としょかん]で 今[いま] 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "今 placed after the location phrase.",
      },
      {
        segments: [
          {
            text: "瑞希[みずき]さんは 図書館[としょかん]で 今[いま] 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Location before 今, with Mizuki as topic.",
      },
      {
        segments: [
          {
            text: "図書館[としょかん]で 瑞希[みずき]さんが 今[いま] 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Location phrase placed at the beginning.",
      },
      {
        segments: [
          {
            text: "図書館[としょかん]で 瑞希[みずき]さんは 今[いま] 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Location first, with Mizuki as topic.",
      },
      {
        segments: [
          {
            text: "瑞希[みずき]さんが 今[いま] 図書館[としょかん]で 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual quotation particle って instead of と.",
      },
      {
        segments: [
          {
            text: "瑞希[みずき]さんは 今[いま] 図書館[としょかん]で 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual って with は for Mizuki as topic.",
      },
      {
        segments: [
          {
            text: "今[いま] 瑞希[みずき]さんが 図書館[としょかん]で 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time first, using casual quotation particle って.",
      },
      {
        segments: [
          {
            text: "今[いま] 瑞希[みずき]さんは 図書館[としょかん]で 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time first, casual って, with は as topic marker.",
      },
      {
        segments: [
          {
            text: "瑞希[みずき]さんが 図書館[としょかん]で 今[いま] 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual って with 今 placed after the location phrase.",
      },
      {
        segments: [
          {
            text: "瑞希[みずき]さんは 図書館[としょかん]で 今[いま] 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual って, location before 今, with は topic marker.",
      },
      {
        segments: [
          {
            text: "図書館[としょかん]で 瑞希[みずき]さんが 今[いま] 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Location first with casual quotation particle って.",
      },
      {
        segments: [
          {
            text: "図書館[としょかん]で 瑞希[みずき]さんは 今[いま] 日本語[にほんご]を ",
          },
          { text: "勉強[べんきょう]している", blank: true },
          { text: " " },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Location first, casual って, and は topic marker.",
      },
    ],
  },
  {
    english: "Ami said she is eating lunch at the cafeteria today.",
    hint: "Ami = 亜美 (あみ)",
    answers: [
      {
        segments: [
          {
            text: "亜美[あみ]さんは 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "亜美[あみ]さんは 食堂[しょくどう]で 今日[きょう] 昼[ひる]ご 飯[はん]を 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "食堂で moved before 今日",
      },
      {
        segments: [
          {
            text: "亜美[あみ]さんは 今日[きょう] 昼[ひる]ご 飯[はん]を 食堂[しょくどう]で 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "昼ご飯を moved before 食堂で",
      },
      {
        segments: [
          {
            text: "亜美[あみ]さんが 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "亜美[あみ]さんは 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "と聞いた instead of と言っていた",
      },
      {
        segments: [
          {
            text: "亜美[あみ]さんは 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "って", blank: true },
          {
            text: "言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "casual",
        notes: "って (casual quote) + 言った",
      },
    ],
  },
  {
    english: "I don't think this bag is cheap.",
    answers: [
      {
        segments: [
          { text: "このかばんは 安[やす]くないと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          { text: "私[わたし]はこのかばんは 安[やす]くないと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "このかばんが 安[やす]くないと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "このかばんは 安[やす]いと", blank: true },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Negating 思う instead: 安いと思わない",
      },
      {
        segments: [
          { text: "私[わたし]はこのかばんは 安[やす]いと", blank: true },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + negating 思う",
      },
      {
        segments: [
          { text: "このバッグは 安[やす]いとは", blank: true },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "バッグ (loanword) + とは (emphasis particle)",
      },
    ],
  },
  {
    english:
      "I heard that Kobayashi takes pictures in front of the old castle these days.",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          {
            text: "小林[こばやし]さんが 今[いま] 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "と " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard version with が, 今 before the location, and と聞いた",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは 今[いま] 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "と " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using は to mark Kobayashi as the topic",
      },
      {
        segments: [
          {
            text: "今[いま]、小林[こばやし]さんが 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "と " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Fronting 今 for emphasis",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんが 古[ふる]い お城[しろ]の 前[まえ]で 今[いま] 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "と " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Placing 今 just before the action phrase",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんが 最近[さいきん] 古[ふる]い 城[しろ]の 前[まえ]で 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "と " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 城 instead of お城",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんが 今[いま] 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using casual quotation particle って instead of と",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは 今[いま] 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using は plus casual って",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんが 今[いま] 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を ",
          },
          { text: "撮[と]ってる", blank: true },
          { text: "と " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Contracted 撮ってる instead of 撮っている",
      },
      {
        segments: [
          {
            text: "今[いま]、小林[こばやし]さんは 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "と " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Fronting 今 and using は",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんが 今[いま] 写真[しゃしん]を 古[ふる]い お城[しろ]の 前[まえ]で ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "と " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Moving the object before the location phrase",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんが 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を 今[いま] ",
          },
          { text: "撮[と]っている", blank: true },
          { text: "と " },
          {
            text: "聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Putting 今 immediately before the verb",
      },
    ],
  },
  {
    english: "I think Kobayashi is going to go home early tonight.",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は小林[こばやし]さんは 今晩[こんばん] 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]は小林[こばやし]さんが 今晩[こんばん] 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "小林[こばやし]さんが instead of 小林[こばやし]さんは",
      },
      {
        segments: [
          {
            text: "私[わたし]は小林[こばやし]さんは 今夜[こんや] 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 instead of 今晩",
      },
      {
        segments: [
          {
            text: "私[わたし]は小林[こばやし]さんが 今夜[こんや] 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 + 小林[こばやし]さんが",
      },
      {
        segments: [
          {
            text: "今晩[こんばん]、 私[わたし]は小林[こばやし]さんは 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 fronted",
      },
      {
        segments: [
          {
            text: "今晩[こんばん]、 私[わたし]は小林[こばやし]さんが 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 fronted + が",
      },
    ],
  },
  {
    english: "The chef said, “I’m using avocado in this pizza today.”",
    hint: "chef = シェフ; avocado = アボカド; pizza = ピザ",
    answers: [
      {
        segments: [
          { text: "シェフは「今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard direct quotation with と; 今日 placed at the start of the quote.",
      },
      {
        segments: [
          { text: "シェフは「今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using the casual quotation particle って instead of と.",
      },
      {
        segments: [
          { text: "シェフは 今日[きょう] この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: " " },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Indirect quotation without Japanese quotation marks.",
      },
      {
        segments: [
          { text: "シェフは 今日[きょう] この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: " " },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Indirect quotation with casual って.",
      },
      {
        segments: [
          { text: "シェフが「今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が to mark the chef as the subject.",
      },
      {
        segments: [
          { text: "シェフが「今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が plus the casual quotation particle って.",
      },
      {
        segments: [
          { text: "シェフは「この ピザに 今日[きょう] アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Different placement of 今日 inside the quoted sentence.",
      },
      {
        segments: [
          { text: "シェフは「この ピザに 今日[きょう] アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "今日 placed after このピザに, with って.",
      },
      {
        segments: [
          { text: "シェフは「今日[きょう]、この ピザで アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using で to mean using avocado for/in making this pizza.",
      },
      {
        segments: [
          { text: "シェフは「今日[きょう]、この ピザで アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using で with casual って.",
      },
      {
        segments: [
          { text: "「今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " シェフは 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Quote-first word order with シェフは after the quotation.",
      },
      {
        segments: [
          { text: "「今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " シェフは 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Quote-first word order with って.",
      },
      {
        segments: [
          {
            text: "シェフは「私[わたし]は 今日[きょう]、この ピザに アボカドを ",
          },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Including 私は inside the chef's direct quote.",
      },
      {
        segments: [
          {
            text: "シェフは「私[わたし]は 今日[きょう]、この ピザに アボカドを ",
          },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Including 私は in the quote with casual って.",
      },
    ],
  },
  {
    english: "My older sister said, “I’m making dinner with Mom now.”",
    answers: [
      {
        segments: [
          { text: "姉[あね]は「今[いま]、母[はは]と 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard direct quote with と and 晩ご飯",
      },
      {
        segments: [
          { text: "姉[あね]は「今[いま]、母[はは]と 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual quotation particle って",
      },
      {
        segments: [
          {
            text: "姉[あね]は「今[いま]、お 母[かあ]さんと 晩[ばん]ご 飯[はん]を ",
          },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using お母さん inside the quote",
      },
      {
        segments: [
          {
            text: "姉[あね]は「今[いま]、お 母[かあ]さんと 晩[ばん]ご 飯[はん]を ",
          },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "お母さん plus casual って",
      },
      {
        segments: [
          { text: "姉[あね]は「母[はは]と 今[いま] 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Moved 今 after 母と",
      },
      {
        segments: [
          { text: "姉[あね]は「母[はは]と 今[いま] 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Moved 今 plus casual って",
      },
      {
        segments: [
          { text: "姉[あね]は「今[いま]、母[はは]と 夕[ゆう]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 夕ご飯 for dinner",
      },
      {
        segments: [
          { text: "姉[あね]は「今[いま]、母[はは]と 夕[ゆう]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "夕ご飯 with casual quotation particle って",
      },
      {
        segments: [
          {
            text: "姉[あね]は「今[いま]、お 母[かあ]さんと 夕[ゆう]ご 飯[はん]を ",
          },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "夕ご飯 plus お母さん inside the quote",
      },
      {
        segments: [
          {
            text: "姉[あね]は「今[いま]、お 母[かあ]さんと 夕[ゆう]ご 飯[はん]を ",
          },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "夕ご飯, お母さん, and casual って",
      },
      {
        segments: [
          { text: "姉[あね]が「今[いま]、母[はは]と 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が to mark the speaker",
      },
      {
        segments: [
          { text: "姉[あね]が「今[いま]、母[はは]と 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Speaker marked with が plus って",
      },
      {
        segments: [
          { text: "姉[あね]は、今[いま] 母[はは]と 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: " " },
          { text: "と", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Indirect quote without quotation marks",
      },
      {
        segments: [
          { text: "姉[あね]は、今[いま] 母[はは]と 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: " " },
          { text: "って", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Indirect-style quote with casual って",
      },
      {
        segments: [
          { text: "姉[あね]が、今[いま] 母[はは]と 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: " " },
          { text: "と", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Indirect quote with speaker marked by が",
      },
      {
        segments: [
          { text: "姉[あね]は「今[いま]、お 母[かあ]さんと ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using ご飯 for the meal in a direct quote",
      },
      {
        segments: [
          { text: "姉[あね]は「今[いま]、お 母[かあ]さんと ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          {
            text: " 言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using ご飯 for dinner/meal with と",
      },
    ],
  },
  {
    english: "Does Kaede think her part-time job is too busy?",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          {
            text: "楓[かえで]さんはアルバイトがすごく 忙[いそが]しいと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          {
            text: "楓[かえで]さんはアルバイトはすごく 忙[いそが]しいと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "は instead of が for アルバイト",
      },
      {
        segments: [
          { text: "楓[かえで]さんはアルバイトが 忙[いそが]しいと", blank: true },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Without すごく",
      },
      {
        segments: [
          { text: "楓[かえで]さんはアルバイトが 忙[いそが]しすぎると", blank: true },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "忙しすぎる (too busy)",
      },
      {
        segments: [
          { text: "楓[かえで]さんはアルバイトが 大変[たいへん]だと", blank: true },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "大変だ (tough)",
      },
      {
        segments: [
          { text: "楓[かえで]さんはアルバイトは 大変[たいへん]だと", blank: true },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "大変だ + は",
      },
      {
        segments: [
          { text: "楓[かえで]さんはバイトが 忙[いそが]しすぎると", blank: true },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "バイト (casual abbreviation of アルバイト)",
      },
    ],
  },
  {
    english:
      "Kobayashi said, “I’m tired today, so I’m not going to the party tonight.”",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」",
          },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard quotation with と; topic marker は for Kobayashi.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」",
          },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual quotation marker って instead of と.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんが「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」",
          },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が to mark Kobayashi as the subject of the reported speech.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんが「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」",
          },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Combines が for the speaker and casual って quotation.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今夜[こんや] パーティーに 行[い]かない」",
          },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 今夜 instead of 今晩 for “tonight.”",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今夜[こんや] パーティーに 行[い]かない」",
          },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 今夜 and casual quotation marker って.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん]は パーティーに 行[い]かない」",
          },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Adds は to 今晩 for contrastive/topic emphasis on tonight.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん]は パーティーに 行[い]かない」",
          },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Adds contrastive は to 今晩 with casual って.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーへ 行[い]かない」",
          },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses へ instead of に for the party as the destination.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーへ 行[い]かない」",
          },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses destination へ and casual quote marker って.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」",
          },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Simple past 言った/言いました instead of 言っていた/言っていました.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」",
          },
          { text: "って", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Simple past with casual quotation marker って.",
      },
      {
        segments: [
          {
            text: "「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」",
          },
          { text: "と", blank: true },
          { text: "、小林[こばやし]さんは " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order: quote first, then speaker.",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは 今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない",
          },
          { text: "と", blank: true },
          { text: " " },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: " " },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Indirect quote style without Japanese quotation marks.",
      },
    ],
  },
  {
    english: "Someone told me Sora is going on a date this weekend.",
    hint: "Sora = 空 (そら)",
    answers: [
      {
        segments: [
          {
            text: "空[そら]さんは 今週末[こんしゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
      },
      {
        segments: [
          {
            text: "空[そら]さんが 今週末[こんしゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "空[そら]さんは 週末[しゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "週末 instead of 今週末",
      },
      {
        segments: [
          {
            text: "空[そら]さんは 今週末[こんしゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "と言っていた instead of と聞いた",
      },
    ],
  },
  {
    english: "The teacher said, “Don’t use smartphones in class.”",
    hint: "smartphones = スマホ",
    answers: [
      {
        segments: [
          {
            text: "先生[せんせい]は「クラスで スマホを 使[つか]ってはいけない」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard quotation with と; uses クラスで for “in class” and てはいけない for “don’t.”",
      },
      {
        segments: [
          {
            text: "先生[せんせい]が「クラスで スマホを 使[つか]ってはいけない」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が to mark the teacher as the subject.",
      },
      {
        segments: [
          {
            text: "先生[せんせい]は「クラスで スマホは 使[つか]ってはいけない」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using は to mark スマホ as the topic inside the quote.",
      },
      {
        segments: [
          {
            text: "先生[せんせい]が「クラスで スマホは 使[つか]ってはいけない」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が for the teacher and は for スマホ inside the quote.",
      },
      {
        segments: [
          {
            text: "先生[せんせい]は「クラスでは スマホを 使[つか]ってはいけない」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Using では to emphasize “in class” as the setting where smartphone use is prohibited.",
      },
      {
        segments: [
          {
            text: "先生[せんせい]が「クラスでは スマホを 使[つか]ってはいけない」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が plus emphasized クラスでは.",
      },
      {
        segments: [
          {
            text: "先生[せんせい]は「授業中[じゅぎょうちゅう]に スマホを 使[つか]ってはいけない」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using the more natural word 授業中 for “during class.”",
      },
      {
        segments: [
          {
            text: "先生[せんせい]が「授業中[じゅぎょうちゅう]に スマホを 使[つか]ってはいけない」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 授業中に and marking the teacher with が.",
      },
      {
        segments: [
          {
            text: "先生[せんせい]は「授業中[じゅぎょうちゅう]は スマホを 使[つか]ってはいけない」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 授業中は to topicalize “during class.”",
      },
      {
        segments: [
          {
            text: "先生[せんせい]は「クラスで スマホを 使[つか]わないでください」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Directly quotes the teacher’s polite request: “Please don’t use smartphones.”",
      },
      {
        segments: [
          {
            text: "先生[せんせい]が「クラスで スマホを 使[つか]わないでください」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Polite quoted request with が marking the teacher.",
      },
      {
        segments: [
          {
            text: "先生[せんせい]は「授業中[じゅぎょうちゅう]に スマホを 使[つか]わないでください」",
          },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Polite quoted request using 授業中に for “in class.”",
      },
    ],
  },
  {
    english: "I think I'll go to the sea this weekend.",
    answers: [
      {
        segments: [
          {
            text: "今週末[こんしゅうまつ]、 海[うみ]に 行[い]くと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、 海[うみ]に 行[い]くと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "週末 instead of 今週末",
      },
      {
        segments: [
          {
            text: "今週末[こんしゅうまつ]、 海[うみ]へ 行[い]くと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、 海[うみ]へ 行[い]くと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "週末 + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]に 行[い]くと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          {
            text: "今週末[こんしゅうまつ]は 海[うみ]に 行[い]こうと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Volitional 行こう (first-person intention) + は topic",
      },
      {
        segments: [
          {
            text: "今週末[こんしゅうまつ] 海[うみ]に 行[い]こうと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Volitional 行こう without は",
      },
    ],
  },
  {
    english: "My older brother said he is working at a company now.",
    answers: [
      {
        segments: [
          {
            text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "兄[あに]が 今[いま] 会社[かいしゃ]で 働[はたら]いて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "兄[あに]は 会社[かいしゃ]で 今[いま] 働[はたら]いて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "今 moved after 会社で",
      },
      {
        segments: [
          {
            text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "〜と言った (simple past) instead of 〜と言っていた",
      },
      {
        segments: [
          {
            text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "って", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "casual",
        notes: "って quote particle + 言っていた",
      },
    ],
  },
  {
    english: "I heard that the bus isn't coming today because of the rain.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]が 降[ふ]っているから、今日[きょう] バスが 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard と聞いた with 雨が降っているから for “because it is raining.”",
      },
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]が 降[ふ]っているから、バスが 今日[きょう] 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Moves 今日 after バスが; still natural emphasis on when the bus won’t come.",
      },
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]が 降[ふ]っているから、今日[きょう]は バスが 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Uses 今日 は to mark today as the topic within the quoted information.",
      },
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]が 降[ふ]っているから、今日[きょう] バスは 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Uses バスは instead of バスが, presenting the bus as the topic.",
      },
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]が 降[ふ]っているから、今日[きょう]は バスは 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Topicalizes both 今日 and バス; natural when contrasting today/bus service.",
      },
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]だから、今日[きょう] バスが 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 雨だから, a concise way to say “because of the rain.”",
      },
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]だから、今日[きょう]は バスが 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "雨だから with 今日 は topicalized.",
      },
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]だから、今日[きょう] バスは 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "雨だから with バスは topicalized.",
      },
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]だから、今日[きょう]は バスは 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Concise “because of rain,” with both 今日 and バス topicalized.",
      },
      {
        segments: [
          {
            text: "雨[あめ]が 降[ふ]っているから、今日[きょう] バスが 来[こ]ない ",
          },
          {
            text: "って 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses casual quotation particle って with 聞いた.",
      },
      {
        segments: [
          {
            text: "雨[あめ]が 降[ふ]っているから、バスが 今日[きょう] 来[こ]ない ",
          },
          {
            text: "って 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual って; 今日 placed after バスが.",
      },
      {
        segments: [
          {
            text: "雨[あめ]が 降[ふ]っているから、今日[きょう]は バスが 来[こ]ない ",
          },
          {
            text: "って 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual って with 今日 は topicalized.",
      },
      {
        segments: [
          {
            text: "雨[あめ]が 降[ふ]っているから、今日[きょう] バスは 来[こ]ない ",
          },
          {
            text: "って 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual って with バスは as the topic.",
      },
      {
        segments: [
          { text: "私[わたし]は、雨[あめ]で 今日[きょう] バスが 来[こ]ない " },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 雨で to express “because of the rain.”",
      },
      {
        segments: [
          {
            text: "私[わたし]は、雨[あめ]で 今日[きょう]は バスが 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "雨で with 今日 は topicalized.",
      },
      {
        segments: [
          { text: "私[わたし]は、雨[あめ]で 今日[きょう] バスは 来[こ]ない " },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "雨で with バスは topicalized.",
      },
      {
        segments: [
          { text: "私[わたし]は、雨[あめ]で バスが 今日[きょう] 来[こ]ない " },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "雨で with alternate placement of 今日.",
      },
      {
        segments: [
          {
            text: "私[わたし]は、今日[きょう]、雨[あめ]が 降[ふ]っているから、バスが 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Places 今日 at the beginning of the quoted content.",
      },
      {
        segments: [
          {
            text: "今日[きょう]、雨[あめ]が 降[ふ]っているから、バスが 来[こ]ない ",
          },
          {
            text: "って 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Casual って with 今日 placed first.",
      },
      {
        segments: [
          { text: "私[わたし]は、今日[きょう]、雨[あめ]で バスが 来[こ]ない " },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 今日 first and 雨で for “because of the rain.”",
      },
      {
        segments: [
          {
            text: "私[わたし]は、今日[きょう]は 雨[あめ]で バスが 来[こ]ない ",
          },
          {
            text: "と 聞[き]く",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "今日 は at the start with 雨で.",
      },
    ],
  },
  {
    english: "Yosuke thinks that Kaede is good at singing.",
    hint: "Yosuke = 陽介 (ようすけ), Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          {
            text: "陽介[ようすけ]さんは楓[かえで]さんは 歌[うた]が 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
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
            text: "陽介[ようすけ]さんは楓[かえで]さんが 歌[うた]が 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "楓[かえで]さんが instead of 楓[かえで]さんは",
      },
      {
        segments: [
          {
            text: "陽介[ようすけ]さんが楓[かえで]さんは 歌[うた]が 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "陽介[ようすけ]さんが instead of 陽介[ようすけ]さんは",
      },
      {
        segments: [
          {
            text: "陽介[ようすけ]さんは楓[かえで]さんは 歌[うた]が 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "思う (plain) instead of 思っている",
      },
    ],
  },
  {
    english: "Did Sora say, “I don’t know that man”?",
    hint: "Sora = 空 (そら)",
    answers: [
      {
        segments: [
          { text: "空[そら]さんは「あの 男[おとこ]の 人[ひと]を 知[し]らない」" },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Standard quotation with と and あの男の人",
      },
      {
        segments: [
          { text: "空[そら]さんは「あの 男[おとこ]の 人[ひと]を 知[し]らない」" },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using casual quotation particle って",
      },
      {
        segments: [
          { text: "空[そら]さんは「その 男[おとこ]の 人[ひと]を 知[し]らない」" },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using その for 'that man' near the listener/context",
      },
      {
        segments: [
          { text: "空[そら]さんは「その 男[おとこ]の 人[ひと]を 知[し]らない」" },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using その plus casual quotation particle って",
      },
      {
        segments: [
          { text: "空[そら]さんが「あの 男[おとこ]の 人[ひと]を 知[し]らない」" },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using が to focus on whether Sora was the one who said it",
      },
      {
        segments: [
          { text: "空[そら]さんが「あの 男[おとこ]の 人[ひと]を 知[し]らない」" },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using が with casual quotation particle って",
      },
      {
        segments: [
          { text: "空[そら]さんが「その 男[おとこ]の 人[ひと]を 知[し]らない」" },
          { text: "と", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using が and その",
      },
      {
        segments: [
          { text: "空[そら]さんが「その 男[おとこ]の 人[ひと]を 知[し]らない」" },
          { text: "って", blank: true },
          { text: " 言[い]って" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using が, その, and casual って",
      },
    ],
  },
  {
    english: "I think Mary won't come to the party tonight.",
    hint: "Mary = メアリー",
    answers: [
      {
        segments: [
          {
            text: "メアリーさんは 今晩[こんばん] パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          {
            text: "メアリーさんが 今晩[こんばん] パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "メアリーさんは 今夜[こんや] パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 instead of 今晩",
      },
      {
        segments: [
          {
            text: "今晩[こんばん]、 メアリーさんは パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 fronted",
      },
      {
        segments: [
          {
            text: "私[わたし]はメアリーさんは 今晩[こんばん] パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
    ],
  },
  {
    english: "Mika said she is studying biology.",
    hint: "Mika = 美香 (みか)",
    answers: [
      {
        segments: [
          {
            text: "美香[みか]さんは 生物学[せいぶつがく]を 勉強[べんきょう]して",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "美香[みか]さんが 生物学[せいぶつがく]を 勉強[べんきょう]して",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "美香[みか]さんは 生物学[せいぶつがく]を 勉強[べんきょう]して",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          {
            text: "言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "と言った (simple past)",
      },
      {
        segments: [
          {
            text: "美香[みか]さんは 生物学[せいぶつがく]を 勉強[べんきょう]して",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "と聞いた instead of と言っていた",
      },
    ],
  },
]

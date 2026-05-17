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
          { text: "楓[かえで]さんは 今[いま] 犬[いぬ]と 一緒[いっしょ]に 住[す]んで", blank: true },
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
        notes: "暮らしている (live, synonym of 住む)",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 今[いま] 犬[いぬ]と 住[す]んで", blank: true },
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
        notes: "って instead of と",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 今[いま] 犬[いぬ]と 一緒[いっしょ]に 住[す]んで", blank: true },
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
        notes: "一緒に (together with) added + って",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 今[いま] 犬[いぬ]と 暮[く]らして", blank: true },
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
        notes: "暮らしている (live, synonym of 住む) + って",
      },
    ],
  },
  {
    english: "I think it's going to rain tomorrow.",
    answers: [
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
      {
        segments: [
          {
            text: "私[わたし]は 明日[あした]は 雨[あめ]になると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "雨になる instead of 雨が降る",
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
          { text: "亜美[あみ]さんは 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べている", blank: true },
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
          { text: "亜美[あみ]さんは 食堂[しょくどう]で 今日[きょう] 昼[ひる]ご 飯[はん]を 食[た]べている", blank: true },
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
        notes: "Different placement of 今日",
      },
      {
        segments: [
          { text: "亜美[あみ]さんは 今日[きょう] 昼[ひる]ご 飯[はん]を 食堂[しょくどう]で 食[た]べている", blank: true },
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
        notes: "Different placement of 食堂で",
      },
      {
        segments: [
          { text: "亜美[あみ]さんは 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べている", blank: true },
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
        notes: "って instead of と",
      },
      {
        segments: [
          { text: "亜美[あみ]さんは 食堂[しょくどう]で 今日[きょう] 昼[ひる]ご 飯[はん]を 食[た]べている", blank: true },
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
        notes: "Different placement of 今日 + って",
      },
      {
        segments: [
          { text: "亜美[あみ]さんは 今日[きょう] 昼[ひる]ご 飯[はん]を 食堂[しょくどう]で 食[た]べている", blank: true },
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
        notes: "Different placement of 食堂で + って",
      },
    ],
  },
  {
    english: "I don't think this bag is cheap.",
    answers: [
      {
        segments: [
          { text: "私[わたし]はこのかばんは 安[やす]くないと", blank: true },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は",
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
          { text: "このかばんは 安[やす]いとは", blank: true },
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
        notes: "とは (emphasis particle)",
      },
      {
        segments: [
          { text: "私[わたし]はこのバッグは 安[やす]くないと", blank: true },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "バッグ + explicit 私は",
      },
      {
        segments: [
          { text: "私[わたし]はこのバッグは 安[やす]いと", blank: true },
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
        notes: "バッグ + 私は + negating 思う",
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
      "I heard that Kobayashi has been taking pictures in front of the old castle lately.",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          { text: "小林[こばやし]さんが 最近[さいきん] 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を 撮[と]っている", blank: true },
          { text: "と", blank: true },
          { text: " " },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "が + 最近 after subject",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは 最近[さいきん] 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を 撮[と]っている", blank: true },
          { text: "と", blank: true },
          { text: " " },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "は + 最近 after subject",
      },
      {
        segments: [
          { text: "最近[さいきん]、小林[こばやし]さんが 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を 撮[と]っている", blank: true },
          { text: "と", blank: true },
          { text: " " },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "最近 fronted + が",
      },
      {
        segments: [
          { text: "最近[さいきん]、小林[こばやし]さんは 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を 撮[と]っている", blank: true },
          { text: "と", blank: true },
          { text: " " },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "最近 fronted + は",
      },
      {
        segments: [
          { text: "小林[こばやし]さんが 最近[さいきん] 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を 撮[と]っている", blank: true },
          { text: "って", blank: true },
          { text: " " },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "が + 最近 after subject + って",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは 最近[さいきん] 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を 撮[と]っている", blank: true },
          { text: "って", blank: true },
          { text: " " },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "は + 最近 after subject + って",
      },
      {
        segments: [
          { text: "最近[さいきん]、小林[こばやし]さんが 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を 撮[と]っている", blank: true },
          { text: "って", blank: true },
          { text: " " },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "最近 fronted + が + って",
      },
      {
        segments: [
          { text: "最近[さいきん]、小林[こばやし]さんは 古[ふる]い お城[しろ]の 前[まえ]で 写真[しゃしん]を 撮[と]っている", blank: true },
          { text: "って", blank: true },
          { text: " " },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "最近 fronted + は + って",
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
            text: "私[わたし]は 今晩[こんばん] 小林[こばやし]さんは 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 placed before 小林さん inside the thought",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今晩[こんばん] 小林[こばやし]さんが 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 before 小林さん + が",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今夜[こんや] 小林[こばやし]さんは 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 before 小林さん",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今夜[こんや] 小林[こばやし]さんが 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 before 小林さん + が",
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
          { text: " 言[い]って", blank: true },
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
        notes: "今日 at start + このピザに",
      },
      {
        segments: [
          { text: "シェフは「今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "今日 at start + このピザに + って",
      },
      {
        segments: [
          { text: "シェフは「今日[きょう]は この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "今日は + このピザに",
      },
      {
        segments: [
          { text: "シェフは「今日[きょう]は この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "今日は + このピザに + って",
      },
      {
        segments: [
          { text: "シェフは「今日[きょう]は この ピザには アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "今日は + このピザには",
      },
      {
        segments: [
          { text: "シェフは「今日[きょう]は この ピザには アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "今日は + このピザには + って",
      },
      {
        segments: [
          { text: "シェフは「この ピザに 今日[きょう] アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "今日 after このピザに",
      },
      {
        segments: [
          { text: "シェフは「この ピザに 今日[きょう] アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "今日 after このピザに + って",
      },
      {
        segments: [
          { text: "「今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " シェフは 言[い]って", blank: true },
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
        notes: "Quote-first word order",
      },
      {
        segments: [
          { text: "「今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " シェフは 言[い]って", blank: true },
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
        notes: "Quote-first word order + って",
      },
      {
        segments: [
          { text: "シェフは「私[わたし]は 今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "Explicit 私は inside quote",
      },
      {
        segments: [
          { text: "シェフは「私[わたし]は 今日[きょう]、この ピザに アボカドを " },
          { text: "使[つか]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "Explicit 私は inside quote + って",
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
          { text: " 言[い]って", blank: true },
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
          { text: "姉[あね]は「今[いま]、母[はは]と 晩[ばん]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "って instead of と",
      },
      {
        segments: [
          { text: "姉[あね]は「今[いま]、母[はは]と 夕[ゆう]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "夕ご飯",
      },
      {
        segments: [
          { text: "姉[あね]は「今[いま]、母[はは]と 夕[ゆう]ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "夕ご飯 + って",
      },
      {
        segments: [
          { text: "姉[あね]は「今[いま]、母[はは]と ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "ご飯",
      },
      {
        segments: [
          { text: "姉[あね]は「今[いま]、母[はは]と ご 飯[はん]を " },
          { text: "作[つく]っている", blank: true },
          { text: "」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "ご飯 + って",
      },
    ],
  },
  {
    english: "Does Kaede think her part-time job is too busy?",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんは アルバイトが 忙[いそが]しすぎると", blank: true },
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
          { text: "楓[かえで]さんは アルバイトは 忙[いそが]しすぎると", blank: true },
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
        notes: "アルバイト + は",
      },
      {
        segments: [
          { text: "楓[かえで]さんは バイトが 忙[いそが]しすぎると", blank: true },
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
        notes: "バイト + が",
      },
      {
        segments: [
          { text: "楓[かえで]さんは バイトは 忙[いそが]しすぎると", blank: true },
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
        notes: "バイト + は",
      },
      {
        segments: [
          { text: "楓[かえで]さんは アルバイトが 忙[いそが]しすぎると", blank: true },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "アルバイト + が + 思いますか",
      },
      {
        segments: [
          { text: "楓[かえで]さんは アルバイトは 忙[いそが]しすぎると", blank: true },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "アルバイト + は + 思いますか",
      },
      {
        segments: [
          { text: "楓[かえで]さんは バイトが 忙[いそが]しすぎると", blank: true },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "バイト + が + 思いますか",
      },
      {
        segments: [
          { text: "楓[かえで]さんは バイトは 忙[いそが]しすぎると", blank: true },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "バイト + は + 思いますか",
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
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」" },
          { text: "と", blank: true },
          { text: " " },
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
        notes: "今晩 + に",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」" },
          { text: "って", blank: true },
          { text: " " },
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
        notes: "今晩 + に + って",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今夜[こんや] パーティーに 行[い]かない」" },
          { text: "と", blank: true },
          { text: " " },
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
        notes: "今夜 + に",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今夜[こんや] パーティーに 行[い]かない」" },
          { text: "って", blank: true },
          { text: " " },
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
        notes: "今夜 + に + って",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん]は パーティーに 行[い]かない」" },
          { text: "と", blank: true },
          { text: " " },
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
        notes: "今晩は + に",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん]は パーティーに 行[い]かない」" },
          { text: "って", blank: true },
          { text: " " },
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
        notes: "今晩は + に + って",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーへ 行[い]かない」" },
          { text: "と", blank: true },
          { text: " " },
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
        notes: "今晩 + へ",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーへ 行[い]かない」" },
          { text: "って", blank: true },
          { text: " " },
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
        notes: "今晩 + へ + って",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」" },
          { text: "と", blank: true },
          { text: " " },
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
        notes: "Simple past 言った/言いました",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」" },
          { text: "って", blank: true },
          { text: " " },
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
        notes: "Simple past + って",
      },
      {
        segments: [
          { text: "「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」" },
          { text: "と", blank: true },
          { text: "、小林[こばやし]さんは " },
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
        notes: "Quote-first word order",
      },
      {
        segments: [
          { text: "「今日[きょう]は 疲[つか]れているから、今晩[こんばん] パーティーに 行[い]かない」" },
          { text: "って", blank: true },
          { text: "、小林[こばやし]さんは " },
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
        notes: "Quote-first word order + って",
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
        notes: "今週末 + が",
      },
      {
        segments: [
          {
            text: "空[そら]さんは 週末[しゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "週末 + は",
      },
      {
        segments: [
          {
            text: "空[そら]さんが 週末[しゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "週末 + が",
      },
      {
        segments: [
          {
            text: "空[そら]さんは 今週末[こんしゅうまつ] デートに 行[い]くって",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "今週末 + は + って",
      },
      {
        segments: [
          {
            text: "空[そら]さんが 今週末[こんしゅうまつ] デートに 行[い]くって",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "今週末 + が + って",
      },
      {
        segments: [
          {
            text: "空[そら]さんは 週末[しゅうまつ] デートに 行[い]くって",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "週末 + は + って",
      },
      {
        segments: [
          {
            text: "空[そら]さんが 週末[しゅうまつ] デートに 行[い]くって",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "週末 + が + って",
      },
    ],
  },
  {
    english: "The teacher said, “Don’t use smartphones in class.”",
    hint: "smartphones = スマホ",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は「クラスで スマホを 使[つか]わないでください」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "クラスで + ください",
      },
      {
        segments: [
          { text: "先生[せんせい]は「クラスで スマホを 使[つか]わないでください」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "クラスで + ください + って",
      },
      {
        segments: [
          { text: "先生[せんせい]は「授業中[じゅぎょうちゅう]に スマホを 使[つか]わないでください」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "授業中に + ください",
      },
      {
        segments: [
          { text: "先生[せんせい]は「授業中[じゅぎょうちゅう]に スマホを 使[つか]わないでください」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "授業中に + ください + って",
      },
      {
        segments: [
          { text: "先生[せんせい]は「授業中[じゅぎょうちゅう]は スマホを 使[つか]わないでください」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "授業中は + ください",
      },
      {
        segments: [
          { text: "先生[せんせい]は「授業中[じゅぎょうちゅう]は スマホを 使[つか]わないでください」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "授業中は + ください + って",
      },
      {
        segments: [
          { text: "先生[せんせい]は「クラスで スマホを 使[つか]わないで」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "クラスで + 使わないで",
      },
      {
        segments: [
          { text: "先生[せんせい]は「クラスで スマホを 使[つか]わないで」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "クラスで + 使わないで + って",
      },
      {
        segments: [
          { text: "先生[せんせい]は「授業中[じゅぎょうちゅう]に スマホを 使[つか]わないで」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "授業中に + 使わないで",
      },
      {
        segments: [
          { text: "先生[せんせい]は「授業中[じゅぎょうちゅう]に スマホを 使[つか]わないで」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "授業中に + 使わないで + って",
      },
      {
        segments: [
          { text: "先生[せんせい]は「授業中[じゅぎょうちゅう]は スマホを 使[つか]わないで」" },
          { text: "と", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "授業中は + 使わないで",
      },
      {
        segments: [
          { text: "先生[せんせい]は「授業中[じゅぎょうちゅう]は スマホを 使[つか]わないで」" },
          { text: "って", blank: true },
          { text: " 言[い]って", blank: true },
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
        notes: "授業中は + 使わないで + って",
      },
    ],
  },
  {
    english: "I think I'll go to the sea this weekend.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]に 行[い]こうと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "volitional + 今週末 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]へ 行[い]こうと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "volitional + 今週末 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]、 海[うみ]に 行[い]こうと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "volitional + 週末 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]、 海[うみ]へ 行[い]こうと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "volitional + 週末 + へ",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は 海[うみ]に 行[い]こうと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "volitional + 今週末は + に",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は 海[うみ]へ 行[い]こうと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "volitional + 今週末は + へ",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]は 海[うみ]に 行[い]こうと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "volitional + 週末は + に",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]は 海[うみ]へ 行[い]こうと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "volitional + 週末は + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]に 行[い]くと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "prediction reading + 今週末 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]へ 行[い]くと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "prediction reading + 今週末 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]、 海[うみ]に 行[い]くと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "prediction reading + 週末 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]、 海[うみ]へ 行[い]くと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "prediction reading + 週末 + へ",
      },
    ],
  },
  {
    english: "My older brother said he is working at a company now.",
    answers: [
      {
        segments: [
          { text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて", blank: true },
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
          { text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて", blank: true },
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
        notes: "って instead of と",
      },
      {
        segments: [
          { text: "兄[あに]は 会社[かいしゃ]で 今[いま] 働[はたら]いて", blank: true },
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
          { text: "兄[あに]は 会社[かいしゃ]で 今[いま] 働[はたら]いて", blank: true },
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
        notes: "今 moved after 会社で + って",
      },
      {
        segments: [
          { text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて", blank: true },
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
        notes: "Simple past 言った/言いました",
      },
      {
        segments: [
          { text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて", blank: true },
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
        notes: "Simple past + って",
      },
    ],
  },
  {
    english: "I heard that the bus isn't coming today because of the rain.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 雨[あめ]が 降[ふ]っているから、今日[きょう] バスが 来[こ]ないと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨が降っているから + 今日バスが + explicit 私は + と",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、今日[きょう] バスが 来[こ]ないって", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨が降っているから + 今日バスが + って",
      },
      {
        segments: [
          { text: "私[わたし]は 雨[あめ]が 降[ふ]っているから、今日[きょう]は バスが 来[こ]ないと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨が降っているから + 今日はバスが + explicit 私は + と",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、今日[きょう]は バスが 来[こ]ないって", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨が降っているから + 今日はバスが + って",
      },
      {
        segments: [
          { text: "私[わたし]は 雨[あめ]が 降[ふ]っているから、バスが 今日[きょう] 来[こ]ないと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨が降っているから + バスが今日 + explicit 私は + と",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、バスが 今日[きょう] 来[こ]ないって", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨が降っているから + バスが今日 + って",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、雨[あめ]が 降[ふ]っているから、バスが 来[こ]ないと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "今日 + 雨が降っているから + explicit 私は + と",
      },
      {
        segments: [
          { text: "今日[きょう]、雨[あめ]が 降[ふ]っているから、バスが 来[こ]ないって", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "今日 + 雨が降っているから + って",
      },
      {
        segments: [
          { text: "私[わたし]は 雨[あめ]で 今日[きょう] バスが 来[こ]ないと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨で + 今日バスが + explicit 私は + と",
      },
      {
        segments: [
          { text: "雨[あめ]で 今日[きょう] バスが 来[こ]ないって", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨で + 今日バスが + って",
      },
      {
        segments: [
          { text: "私[わたし]は 雨[あめ]で 今日[きょう]は バスが 来[こ]ないと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨で + 今日はバスが + explicit 私は + と",
      },
      {
        segments: [
          { text: "雨[あめ]で 今日[きょう]は バスが 来[こ]ないって", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨で + 今日はバスが + って",
      },
      {
        segments: [
          { text: "私[わたし]は 雨[あめ]で バスが 今日[きょう] 来[こ]ないと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨で + バスが今日 + explicit 私は + と",
      },
      {
        segments: [
          { text: "雨[あめ]で バスが 今日[きょう] 来[こ]ないって", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "雨で + バスが今日 + って",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、雨[あめ]で バスが 来[こ]ないと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "今日 + 雨で + explicit 私は + と",
      },
      {
        segments: [
          { text: "今日[きょう]、雨[あめ]で バスが 来[こ]ないって", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "今日 + 雨で + って",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]は 雨[あめ]で バスが 来[こ]ないと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "今日は雨で + explicit 私は + と",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]で バスが 来[こ]ないって", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "今日は雨で + って",
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
            text: "陽介[ようすけ]さんは 楓[かえで]さんは 歌[うた]が 上手[じょうず]だと",
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
            text: "陽介[ようすけ]さんは 楓[かえで]さんは 歌[うた]が 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "思う instead of 思っている",
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
        notes: "Uses quotation particle と and あの男の人."
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
        notes: "今晩 + パーティーに",
      },
      {
        segments: [
          {
            text: "今晩[こんばん]、 メアリーさんは パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 fronted + パーティーに",
      },
      {
        segments: [
          {
            text: "メアリーさんは 今晩[こんばん] パーティーへ 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 + パーティーへ",
      },
      {
        segments: [
          {
            text: "今晩[こんばん]、 メアリーさんは パーティーへ 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 fronted + パーティーへ",
      },
      {
        segments: [
          {
            text: "メアリーさんは 今夜[こんや] パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 + パーティーに",
      },
      {
        segments: [
          {
            text: "今夜[こんや]、 メアリーさんは パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 fronted + パーティーに",
      },
      {
        segments: [
          {
            text: "メアリーさんは 今夜[こんや] パーティーへ 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 + パーティーへ",
      },
      {
        segments: [
          {
            text: "今夜[こんや]、 メアリーさんは パーティーへ 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 fronted + パーティーへ",
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
          { text: "美香[みか]さんは 生物学[せいぶつがく]を 勉強[べんきょう]して", blank: true },
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
        notes: "生物学 + と言っていました",
      },
      {
        segments: [
          { text: "美香[みか]さんは 生物学[せいぶつがく]を 勉強[べんきょう]して", blank: true },
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
        notes: "生物学 + って言っていました",
      },
      {
        segments: [
          { text: "美香[みか]さんは 生物学[せいぶつがく]を 勉強[べんきょう]して", blank: true },
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
        notes: "生物学 + と言いました",
      },
      {
        segments: [
          { text: "美香[みか]さんは 生物学[せいぶつがく]を 勉強[べんきょう]して", blank: true },
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
        notes: "生物学 + って言いました",
      },
      {
        segments: [
          { text: "美香[みか]さんは 生物[せいぶつ]を 勉強[べんきょう]して", blank: true },
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
        notes: "生物 + と言っていました",
      },
      {
        segments: [
          { text: "美香[みか]さんは 生物[せいぶつ]を 勉強[べんきょう]して", blank: true },
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
        notes: "生物 + って言っていました",
      },
      {
        segments: [
          { text: "美香[みか]さんは 生物[せいぶつ]を 勉強[べんきょう]して", blank: true },
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
        notes: "生物 + と言いました",
      },
      {
        segments: [
          { text: "美香[みか]さんは 生物[せいぶつ]を 勉強[べんきょう]して", blank: true },
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
        notes: "生物 + って言いました",
      },
    ],
  },
]

import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I have to return this textbook to the library by tomorrow.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Standard order with なければいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なければいけません", blank: true },
        ],
        notes: "Polite なければいけません",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なきゃいけません", blank: true },
        ],
        notes: "Polite ending with colloquial なきゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なくちゃいけません", blank: true },
        ],
        notes: "Polite ending with colloquial なくちゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なきゃ", blank: true },
        ],
        notes: "Casual omission of いけない after なきゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なくちゃ", blank: true },
        ],
        notes: "Casual omission of いけない after なくちゃ",
      },
      {
        segments: [
          { text: "私[わたし]は この 教科書[きょうかしょ]を 明日[あした]までに 図書館[としょかん]に 返[かえ]さ" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Object placed before the deadline phrase",
      },
      {
        segments: [
          { text: "私[わたし]は この 教科書[きょうかしょ]を 明日[あした]までに 図書館[としょかん]に 返[かえ]さ" },
          { text: "なきゃいけない", blank: true },
        ],
        notes: "Object placed before the deadline phrase with なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]に 明日[あした]までに この 教科書[きょうかしょ]を 返[かえ]さ" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Destination placed earlier in the sentence",
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]に この 教科書[きょうかしょ]を 明日[あした]までに 返[かえ]さ" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Destination first, deadline just before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は この 教科書[きょうかしょ]は 明日[あした]までに 図書館[としょかん]に 返[かえ]さ" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Using は to topicalize the textbook",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なけりゃいけない", blank: true },
        ],
        notes: "Very casual なけりゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なけりゃ", blank: true },
        ],
        notes: "Very casual omitted いけない with なけりゃ",
      },
      {
        segments: [
          { text: "明日[あした]までに、私[わたし]は この 教科書[きょうかしょ]を 図書館[としょかん]に 返[かえ]さ" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Deadline phrase placed at the beginning",
      },
      {
        segments: [
          { text: "この 教科書[きょうかしょ]を、私[わたし]は 明日[あした]までに 図書館[としょかん]に 返[かえ]さ" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Object fronted for emphasis",
      },
      {
        segments: [
          { text: "図書館[としょかん]に、私[わたし]は 明日[あした]までに この 教科書[きょうかしょ]を 返[かえ]さ" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Destination fronted for emphasis",
      },
    ],
  },
  {
    english: "Because I have a test tomorrow, I have to study tonight.",
    answers: [
      {
        segments: [
          { text: "明日[あした] テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなければいけない", blank: true },
        ],
        notes: "Standard なければいけない with から and 今晩",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるので、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなければいけない", blank: true },
        ],
        notes: "Using ので for because",
      },
      {
        segments: [
          { text: "明日[あした]は テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなければいけない", blank: true },
        ],
        notes: "Using topic marker は on 明日",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今夜[こんや] " },
          { text: "勉強[べんきょう]しなければいけない", blank: true },
        ],
        notes: "Using 今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなきゃ", blank: true },
        ],
        notes: "Omitted いけない, very common colloquial form",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなくちゃ", blank: true },
        ],
        notes: "Omitted いけない with なくちゃ",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、私[わたし]は 今晩[こんばん] " },
          { text: "勉強[べんきょう]しなければいけない", blank: true },
        ],
        notes: "Explicit 私は before tonight",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした] テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなければいけない", blank: true },
        ],
        notes: "Explicit subject at sentence start; app can also drop it",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今晩[こんばん]は " },
          { text: "勉強[べんきょう]しなければいけない", blank: true },
        ],
        notes: "Topicalizing tonight with は",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、明日[あした] テストが あるから " },
          { text: "勉強[べんきょう]しなければいけない", blank: true },
        ],
        notes: "Reversed word order with 今晩は first",
      },
      {
        segments: [
          { text: "明日[あした] 試験[しけん]が あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなければいけない", blank: true },
        ],
        notes: "Using 試験 instead of テスト",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるので、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなきゃいけない", blank: true },
        ],
        notes: "ので with なきゃいけない",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるので、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなくちゃいけない", blank: true },
        ],
        notes: "ので with なくちゃいけない",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるので、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなきゃ", blank: true },
        ],
        notes: "ので with omitted いけない",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるので、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなくちゃ", blank: true },
        ],
        notes: "ので with omitted いけない after なくちゃ",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今夜[こんや] " },
          { text: "勉強[べんきょう]しなきゃいけない", blank: true },
        ],
        notes: "今夜 with なきゃいけない",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今夜[こんや] " },
          { text: "勉強[べんきょう]しなくちゃいけない", blank: true },
        ],
        notes: "今夜 with なくちゃいけない",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今夜[こんや] " },
          { text: "勉強[べんきょう]しなきゃ", blank: true },
        ],
        notes: "今夜 with omitted いけない",
      },
      {
        segments: [
          { text: "明日[あした] テストが あるから、今夜[こんや] " },
          { text: "勉強[べんきょう]しなくちゃ", blank: true },
        ],
        notes: "今夜 with omitted いけない after なくちゃ",
      },
      {
        segments: [
          { text: "明日[あした]は テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなきゃいけない", blank: true },
        ],
        notes: "明日は with なきゃいけない",
      },
      {
        segments: [
          { text: "明日[あした]は テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなくちゃいけない", blank: true },
        ],
        notes: "明日は with なくちゃいけない",
      },
      {
        segments: [
          { text: "明日[あした]は テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなきゃ", blank: true },
        ],
        notes: "明日は with omitted いけない",
      },
      {
        segments: [
          { text: "明日[あした]は テストが あるから、今晩[こんばん] " },
          { text: "勉強[べんきょう]しなくちゃ", blank: true },
        ],
        notes: "明日は with omitted いけない after なくちゃ",
      },
    ],
  },
  {
    english: "I have to take medicine after meals.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなければいけない", blank: true },
        ],
        notes: "Standard form using なければいけない with 食後に.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなきゃいけない", blank: true },
        ],
        notes: "Colloquial contraction using なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなくちゃいけない", blank: true },
        ],
        notes: "Colloquial contraction using なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]、薬[くすり]を " },
          { text: "飲[の]まなければいけない", blank: true },
        ],
        notes: "Uses 食後 as a sentence adverb without に.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]、薬[くすり]を " },
          { text: "飲[の]まなきゃいけない", blank: true },
        ],
        notes: "食後 without に, with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]、薬[くすり]を " },
          { text: "飲[の]まなくちゃいけない", blank: true },
        ],
        notes: "食後 without に, with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 食後[しょくご]に " },
          { text: "飲[の]まなければいけない", blank: true },
        ],
        notes: "Reversed word order: object before time phrase.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 食後[しょくご]に " },
          { text: "飲[の]まなきゃいけない", blank: true },
        ],
        notes: "Reversed word order with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 食後[しょくご]に " },
          { text: "飲[の]まなくちゃいけない", blank: true },
        ],
        notes: "Reversed word order with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]を 食[た]べた 後[あと]で 薬[くすり]を " },
          { text: "飲[の]まなければいけない", blank: true },
        ],
        notes: "Uses ご飯を食べた後で to express after meals.",
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]を 食[た]べた 後[あと]で 薬[くすり]を " },
          { text: "飲[の]まなきゃいけない", blank: true },
        ],
        notes: "ご飯を食べた後で with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]を 食[た]べた 後[あと]で 薬[くすり]を " },
          { text: "飲[の]まなくちゃいけない", blank: true },
        ],
        notes: "ご飯を食べた後で with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を ご飯[はん]を 食[た]べた 後[あと]で " },
          { text: "飲[の]まなければいけない", blank: true },
        ],
        notes: "Reversed order using ご飯を食べた後で.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を ご飯[はん]を 食[た]べた 後[あと]で " },
          { text: "飲[の]まなきゃいけない", blank: true },
        ],
        notes: "Reversed order with ご飯を食べた後で and なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を ご飯[はん]を 食[た]べた 後[あと]で " },
          { text: "飲[の]まなくちゃいけない", blank: true },
        ],
        notes: "Reversed order with ご飯を食べた後で and なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなきゃ", blank: true },
        ],
        notes: "Most casual form with いけない omitted.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなくちゃ", blank: true },
        ],
        notes: "Casual なくちゃ form with いけない omitted.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]、薬[くすり]を " },
          { text: "飲[の]まなきゃ", blank: true },
        ],
        notes: "食後 without に, with いけない omitted.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]、薬[くすり]を " },
          { text: "飲[の]まなくちゃ", blank: true },
        ],
        notes: "食後 without に, なくちゃ with いけない omitted.",
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]を 食[た]べた 後[あと]で 薬[くすり]を " },
          { text: "飲[の]まなきゃ", blank: true },
        ],
        notes: "Uses ご飯を食べた後で with omitted いけない.",
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]を 食[た]べた 後[あと]で 薬[くすり]を " },
          { text: "飲[の]まなくちゃ", blank: true },
        ],
        notes: "Uses ご飯を食べた後で with なくちゃ and omitted いけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなければいけません", blank: true },
        ],
        notes: "Polite ending using なければいけません.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなきゃいけません", blank: true },
        ],
        notes: "Polite ending with colloquial なきゃ.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなくちゃいけません", blank: true },
        ],
        notes: "Polite ending with colloquial なくちゃ.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]、薬[くすり]を " },
          { text: "飲[の]まなければいけません", blank: true },
        ],
        notes: "食後 without に, polite ending.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]、薬[くすり]を " },
          { text: "飲[の]まなきゃいけません", blank: true },
        ],
        notes: "食後 without に, polite ending with なきゃ.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]、薬[くすり]を " },
          { text: "飲[の]まなくちゃいけません", blank: true },
        ],
        notes: "食後 without に, polite ending with なくちゃ.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 食後[しょくご]に " },
          { text: "飲[の]まなければいけません", blank: true },
        ],
        notes: "Reversed word order with polite なければいけません.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 食後[しょくご]に " },
          { text: "飲[の]まなきゃいけません", blank: true },
        ],
        notes: "Reversed word order with polite なきゃいけません.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 食後[しょくご]に " },
          { text: "飲[の]まなくちゃいけません", blank: true },
        ],
        notes: "Reversed word order with polite なくちゃいけません.",
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]を 食[た]べた 後[あと]で 薬[くすり]を " },
          { text: "飲[の]まなければいけません", blank: true },
        ],
        notes: "Uses ご飯を食べた後で with polite なければいけません.",
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]を 食[た]べた 後[あと]で 薬[くすり]を " },
          { text: "飲[の]まなきゃいけません", blank: true },
        ],
        notes: "Uses ご飯を食べた後で with polite なきゃいけません.",
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]を 食[た]べた 後[あと]で 薬[くすり]を " },
          { text: "飲[の]まなくちゃいけません", blank: true },
        ],
        notes: "Uses ご飯を食べた後で with polite なくちゃいけません.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 食後[しょくご] " },
          { text: "飲[の]まなきゃ", blank: true },
        ],
        notes: "Casual speech dropping the particle に after 食後 and omitting いけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなけりゃいけない", blank: true },
        ],
        notes: "Very casual/rough contraction なけりゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]、薬[くすり]を " },
          { text: "飲[の]まなけりゃいけない", blank: true },
        ],
        notes: "食後 without に, with very casual なけりゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]まなけりゃ", blank: true },
        ],
        notes: "Very casual/rough なけりゃ with いけない omitted.",
      },
    ],
  },
  {
    english: "My younger sister has a fever, so I have to call the doctor right away.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなければいけない", blank: true },
        ],
        notes: "Standard なければいけない with から; uses only known vocabulary.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ お医者[いしゃ]さんに " },
          { text: "電話[でんわ]しなければいけない", blank: true },
        ],
        notes: "Uses お医者さん, a more natural way to say doctor.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるので、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなければいけない", blank: true },
        ],
        notes: "Uses ので instead of から for the reason.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるので、すぐ お医者[いしゃ]さんに " },
          { text: "電話[でんわ]しなければいけない", blank: true },
        ],
        notes: "Combines ので with お医者さん.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、医者[いしゃ]に すぐ " },
          { text: "電話[でんわ]しなければいけない", blank: true },
        ],
        notes: "Places すぐ right before the verb phrase.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、医者[いしゃ]に " },
          { text: "すぐ 電話[でんわ]しなければいけない", blank: true },
        ],
        notes: "Includes すぐ inside the blank with the tested phrase.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]に 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなければいけない", blank: true },
        ],
        notes: "Uses 妹に熱がある, a natural possession/condition pattern for having a fever.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]に 熱[ねつ]が あるので、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなければいけない", blank: true },
        ],
        notes: "Uses 妹に熱がある with ので.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ お医者[いしゃ]さんに " },
          { text: "電話[でんわ]しなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない with お医者さん.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]に 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない with 妹に熱がある.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ お医者[いしゃ]さんに " },
          { text: "電話[でんわ]しなくちゃいけない", blank: true },
        ],
        notes: "なくちゃいけない with お医者さん.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]に 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなくちゃいけない", blank: true },
        ],
        notes: "なくちゃいけない with 妹に熱がある.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなければいけません", blank: true },
        ],
        notes: "Polite いけません form.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ お医者[いしゃ]さんに " },
          { text: "電話[でんわ]しなければいけません", blank: true },
        ],
        notes: "Polite いけません form with お医者さん.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]に 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなければいけません", blank: true },
        ],
        notes: "Polite いけません with 妹に熱がある.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなきゃいけません", blank: true },
        ],
        notes: "Colloquial なきゃ with polite いけません.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなくちゃいけません", blank: true },
        ],
        notes: "Colloquial なくちゃ with polite いけません.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなきゃ", blank: true },
        ],
        notes: "Casual shortened なきゃ with いけない omitted.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ お医者[いしゃ]さんに " },
          { text: "電話[でんわ]しなきゃ", blank: true },
        ],
        notes: "Casual shortened なきゃ with お医者さん.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]に 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなきゃ", blank: true },
        ],
        notes: "Casual なきゃ with 妹に熱がある.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなくちゃ", blank: true },
        ],
        notes: "Casual shortened なくちゃ with いけない omitted.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ お医者[いしゃ]さんに " },
          { text: "電話[でんわ]しなくちゃ", blank: true },
        ],
        notes: "Casual なくちゃ with お医者さん.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]に 熱[ねつ]が あるから、すぐ 医者[いしゃ]に " },
          { text: "電話[でんわ]しなくちゃ", blank: true },
        ],
        notes: "Casual なくちゃ with 妹に熱がある.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に 電話[でんわ]を " },
          { text: "しなければいけない", blank: true },
        ],
        notes: "Uses 電話をする instead of 電話する.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ お医者[いしゃ]さんに 電話[でんわ]を " },
          { text: "しなければいけない", blank: true },
        ],
        notes: "電話をする with お医者さん.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]に 熱[ねつ]が あるから、すぐ 医者[いしゃ]に 電話[でんわ]を " },
          { text: "しなければいけない", blank: true },
        ],
        notes: "電話をする with 妹に熱がある.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に 電話[でんわ]を " },
          { text: "しなきゃいけない", blank: true },
        ],
        notes: "電話をする with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に 電話[でんわ]を " },
          { text: "しなくちゃいけない", blank: true },
        ],
        notes: "電話をする with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に 電話[でんわ]を " },
          { text: "しなきゃ", blank: true },
        ],
        notes: "電話をする with shortened なきゃ.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 熱[ねつ]が あるから、すぐ 医者[いしゃ]に 電話[でんわ]を " },
          { text: "しなくちゃ", blank: true },
        ],
        notes: "電話をする with shortened なくちゃ.",
      },
    ],
  },
  {
    english: "I have to get off at the next station, so I’ll call later.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなければいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with なければいけない and 後で電話する",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなきゃいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなくちゃいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなければいけない", blank: true },
          { text: "から、後[あと]で 電話[でんわ]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をする instead of 電話する",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなきゃいけない", blank: true },
          { text: "から、後[あと]で 電話[でんわ]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial なきゃいけない with 電話をする",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなくちゃいけない", blank: true },
          { text: "から、後[あと]で 電話[でんわ]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial なくちゃいけない with 電話をする",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなけりゃいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Very casual/rough なけりゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなければいけない", blank: true },
          { text: "ので、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ので instead of から for a softer reason",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなきゃいけない", blank: true },
          { text: "ので、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "なきゃいけない with ので",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなくちゃいけない", blank: true },
          { text: "ので、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "なくちゃいけない with ので",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなければいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Direct casual obligation statement",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなきゃいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual contracted なきゃいけない version",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で" },
          { text: "降[お]りなくちゃいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual contracted なくちゃいけない version",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で 電車[でんしゃ]を" },
          { text: "降[お]りなければいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says get off the train at the next station",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で 電車[でんしゃ]を" },
          { text: "降[お]りなきゃいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit train with colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 次[つぎ]の 駅[えき]で 電車[でんしゃ]を" },
          { text: "降[お]りなくちゃいけない", blank: true },
          { text: "から、後[あと]で" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit train with なくちゃいけない",
      },
    ],
  },
  {
    english: "I have to buy a present for my friend's birthday today.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなければいけない", blank: true },
        ],
        notes: "Standard なければいけない with 今日 near the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなければいけません", blank: true },
        ],
        notes: "Polite いけません version",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない version",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなきゃいけません", blank: true },
        ],
        notes: "Colloquial なきゃ with polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない version",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなくちゃいけません", blank: true },
        ],
        notes: "Colloquial なくちゃ with polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]の 誕生日[たんじょうび]の プレゼントを 今日[きょう] " },
          { text: "買[か]わなければいけない", blank: true },
        ],
        notes: "Same meaning with 今日 placed right before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]の 誕生日[たんじょうび]の プレゼントを 今日[きょう] " },
          { text: "買[か]わなければいけません", blank: true },
        ],
        notes: "今日 before the verb with polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]の 誕生日[たんじょうび]の プレゼントを 今日[きょう] " },
          { text: "買[か]わなきゃいけない", blank: true },
        ],
        notes: "今日 before the verb with colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]の 誕生日[たんじょうび]の プレゼントを 今日[きょう] " },
          { text: "買[か]わなきゃいけません", blank: true },
        ],
        notes: "今日 before the verb with なきゃ and polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]の 誕生日[たんじょうび]の プレゼントを 今日[きょう] " },
          { text: "買[か]わなくちゃいけない", blank: true },
        ],
        notes: "今日 before the verb with colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]の 誕生日[たんじょうび]の プレゼントを 今日[きょう] " },
          { text: "買[か]わなくちゃいけません", blank: true },
        ],
        notes: "今日 before the verb with なくちゃ and polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなければいけない", blank: true },
        ],
        notes: "Uses 友達に to mark the recipient of the present",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなければいけません", blank: true },
        ],
        notes: "Recipient marked with に, polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなきゃいけない", blank: true },
        ],
        notes: "Recipient marked with に, colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなきゃいけません", blank: true },
        ],
        notes: "Recipient marked with に, なきゃ with polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなくちゃいけない", blank: true },
        ],
        notes: "Recipient marked with に, colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなくちゃいけません", blank: true },
        ],
        notes: "Recipient marked with に, なくちゃ with polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなければいけない", blank: true },
        ],
        notes: "Uses the compound 誕生日プレゼント instead of 誕生日のプレゼント",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなければいけません", blank: true },
        ],
        notes: "Compound 誕生日プレゼント with polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなきゃいけない", blank: true },
        ],
        notes: "Compound 誕生日プレゼント with colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなきゃいけません", blank: true },
        ],
        notes: "Compound 誕生日プレゼント with なきゃ and polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなくちゃいけない", blank: true },
        ],
        notes: "Compound 誕生日プレゼント with colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなくちゃいけません", blank: true },
        ],
        notes: "Compound 誕生日プレゼント with なくちゃ and polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなきゃ", blank: true },
        ],
        notes: "Most casual shortened なきゃ with いけない omitted",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなくちゃ", blank: true },
        ],
        notes: "Casual shortened なくちゃ with いけない omitted",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]の プレゼントを " },
          { text: "買[か]わなけりゃいけない", blank: true },
        ],
        notes: "Very casual なけりゃいけない form",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]の 誕生日[たんじょうび]の プレゼントを 今日[きょう] " },
          { text: "買[か]わなきゃ", blank: true },
        ],
        notes: "Short なきゃ form with 今日 before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]の 誕生日[たんじょうび]の プレゼントを 今日[きょう] " },
          { text: "買[か]わなくちゃ", blank: true },
        ],
        notes: "Short なくちゃ form with 今日 before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]の 誕生日[たんじょうび]の プレゼントを 今日[きょう] " },
          { text: "買[か]わなけりゃいけない", blank: true },
        ],
        notes: "Very casual なけりゃいけない with 今日 before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなければいけない", blank: true },
        ],
        notes: "Uses recipient に and compound 誕生日プレゼント",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなきゃいけない", blank: true },
        ],
        notes: "Recipient に plus compound noun with なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなくちゃいけない", blank: true },
        ],
        notes: "Recipient に plus compound noun with なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなきゃ", blank: true },
        ],
        notes: "Recipient に plus compound noun with shortened なきゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなくちゃ", blank: true },
        ],
        notes: "Recipient に plus compound noun with shortened なくちゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなけりゃいけない", blank: true },
        ],
        notes: "Recipient に plus compound noun with very casual なけりゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなければいけません", blank: true },
        ],
        notes: "Recipient に plus compound noun with polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなきゃいけません", blank: true },
        ],
        notes: "Recipient に plus compound noun with なきゃ and polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]に 誕生日[たんじょうび]プレゼントを " },
          { text: "買[か]わなくちゃいけません", blank: true },
        ],
        notes: "Recipient に plus compound noun with なくちゃ and polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]に プレゼントを " },
          { text: "買[か]わなければいけない", blank: true },
        ],
        notes: "Uses 誕生日に to mark the occasion for the present",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]に プレゼントを " },
          { text: "買[か]わなければいけません", blank: true },
        ],
        notes: "Occasion marked with に, polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]に プレゼントを " },
          { text: "買[か]わなきゃいけない", blank: true },
        ],
        notes: "Occasion marked with に, colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]に プレゼントを " },
          { text: "買[か]わなきゃいけません", blank: true },
        ],
        notes: "Occasion marked with に, なきゃ with polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]に プレゼントを " },
          { text: "買[か]わなくちゃいけない", blank: true },
        ],
        notes: "Occasion marked with に, colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]に プレゼントを " },
          { text: "買[か]わなくちゃいけません", blank: true },
        ],
        notes: "Occasion marked with に, なくちゃ with polite いけません",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]に プレゼントを " },
          { text: "買[か]わなきゃ", blank: true },
        ],
        notes: "Occasion marked with に, shortened なきゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]に プレゼントを " },
          { text: "買[か]わなくちゃ", blank: true },
        ],
        notes: "Occasion marked with に, shortened なくちゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、友達[ともだち]の 誕生日[たんじょうび]に プレゼントを " },
          { text: "買[か]わなけりゃいけない", blank: true },
        ],
        notes: "Occasion marked with に, very casual なけりゃいけない",
      },
    ],
  },
  {
    english: "I have to do laundry today, but I’m really sleepy.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、洗濯[せんたく]を " },
          { text: "しなければいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard なければいけない with 洗濯をする and すごく",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、洗濯[せんたく]を " },
          { text: "しなきゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、洗濯[せんたく]を " },
          { text: "しなくちゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう]、洗濯[せんたく]を " },
          { text: "しなければいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Starts with 今日; subject omitted naturally",
      },
      {
        segments: [
          { text: "今日[きょう]、洗濯[せんたく]を " },
          { text: "しなきゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted with なきゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう]、洗濯[せんたく]を " },
          { text: "しなくちゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted with なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 洗濯[せんたく]を 今日[きょう] " },
          { text: "しなければいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日 placed before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 洗濯[せんたく]を 今日[きょう] " },
          { text: "しなきゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日 before verb with なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 洗濯[せんたく]を 今日[きょう] " },
          { text: "しなくちゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日 before verb with なくちゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう]は 洗濯[せんたく]を " },
          { text: "しなければいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日 marked as topic with は",
      },
      {
        segments: [
          { text: "今日[きょう]は 洗濯[せんたく]を " },
          { text: "しなきゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日 as topic with なきゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう]は 洗濯[せんたく]を " },
          { text: "しなくちゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日 as topic with なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 洗濯[せんたく]を " },
          { text: "しなければいけない", blank: true },
          { text: "けど、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses けど instead of が",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 洗濯[せんたく]を " },
          { text: "しなきゃいけない", blank: true },
          { text: "けど、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "けど with なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 洗濯[せんたく]を " },
          { text: "しなくちゃいけない", blank: true },
          { text: "けど、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "けど with なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、洗濯[せんたく]を " },
          { text: "しなければいけない", blank: true },
          { text: "が、とても " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses とても for “really/very”",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、洗濯[せんたく]を " },
          { text: "しなきゃいけない", blank: true },
          { text: "が、とても " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "なきゃいけない with とても",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、洗濯[せんたく]を " },
          { text: "しなくちゃいけない", blank: true },
          { text: "が、とても " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "なくちゃいけない with とても",
      },
      {
        segments: [
          { text: "今日[きょう]は 洗濯[せんたく]を " },
          { text: "しなきゃ", blank: true },
          { text: "いけないけど、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Blank tests shortened なきゃ alone, with いけない following outside blank",
      },
      {
        segments: [
          { text: "今日[きょう]は 洗濯[せんたく]を " },
          { text: "しなくちゃ", blank: true },
          { text: "いけないけど、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Blank tests shortened なくちゃ alone, with いけない following outside blank",
      },
      {
        segments: [
          { text: "今日[きょう]は " },
          { text: "洗濯[せんたく]しなければいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses compound verb 洗濯する without を",
      },
      {
        segments: [
          { text: "今日[きょう]は " },
          { text: "洗濯[せんたく]しなきゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Compound 洗濯する with なきゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう]は " },
          { text: "洗濯[せんたく]しなくちゃいけない", blank: true },
          { text: "が、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Compound 洗濯する with なくちゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう]は 洗濯[せんたく]を " },
          { text: "しなけりゃいけない", blank: true },
          { text: "けど、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Very casual/rough なけりゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう]は " },
          { text: "洗濯[せんたく]しなきゃ", blank: true },
          { text: "。でも、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitted いけない after なきゃ; split into two sentences with でも",
      },
      {
        segments: [
          { text: "今日[きょう]は " },
          { text: "洗濯[せんたく]しなくちゃ", blank: true },
          { text: "。でも、すごく " },
          { text: "眠[ねむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitted いけない after なくちゃ; split into two sentences with でも",
      },
    ],
  },
  {
    english: "I have to practice the piano for the concert on Sunday, but my fingers hurt.",
    hint: "piano = ピアノ; concert = コンサート",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に コンサートが あるから、ピアノを " },
          { text: "練習[れんしゅう]しなければいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using なければいけない and から to express the reason/occasion.",
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に コンサートが あるから、ピアノを " },
          { text: "練習[れんしゅう]しなきゃいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the colloquial なきゃいけない form.",
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に コンサートが あるから、ピアノを " },
          { text: "練習[れんしゅう]しなくちゃいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the colloquial なくちゃいけない form.",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に コンサートが あるから、私[わたし]は ピアノを " },
          { text: "練習[れんしゅう]しなければいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves the reason clause to the beginning before 私は.",
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]の コンサートで ピアノを 弾[ひ]くから、ピアノを " },
          { text: "練習[れんしゅう]しなければいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "States that I will play piano at Sunday's concert, making the reason explicit.",
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に コンサートが あるから、ピアノの 練習[れんしゅう]を " },
          { text: "しなければいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ピアノの練習をする instead of ピアノを練習する.",
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に コンサートが あるから、ピアノの 練習[れんしゅう]を " },
          { text: "しなきゃいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ピアノの練習をする with colloquial なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に コンサートが あるから、ピアノの 練習[れんしゅう]を " },
          { text: "しなくちゃいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ピアノの練習をする with colloquial なくちゃいけない.",
      },
      {
        segments: [
          { text: "日曜日[にちようび]の コンサートで ピアノを 弾[ひ]くから、私[わたし]は ピアノを " },
          { text: "練習[れんしゅう]しなきゃいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason clause first, using なきゃいけない and 弾く for performing piano.",
      },
      {
        segments: [
          { text: "日曜日[にちようび]の コンサートで ピアノを 弾[ひ]くから、私[わたし]は ピアノを " },
          { text: "練習[れんしゅう]しなくちゃいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason clause first, using なくちゃいけない and 弾く for performing piano.",
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]の コンサートで ピアノを 弾[ひ]くから、ピアノの 練習[れんしゅう]を " },
          { text: "しなければいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ピアノの練習をする with a more explicit concert-performance reason.",
      },
      {
        segments: [
          { text: "指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、私[わたし]は 日曜日[にちようび]に コンサートが あるから、ピアノを " },
          { text: "練習[れんしゅう]しなければいけない", blank: true },
        ],
        notes: "Reverses the clauses: although my fingers hurt, I have to practice.",
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に コンサートが あるから、ピアノを " },
          { text: "練習[れんしゅう]しなけりゃいけない", blank: true },
          { text: "が、指[ゆび]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the rougher colloquial なけりゃいけない form.",
      },
    ],
  },
  {
    english: "My host family is coming at three, so I have to clean my room by three.",
    hint: "host family = ホストファミリー",
    answers: [
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなければいけない", blank: true },
        ],
        notes: "Basic sentence with が and から; uses 部屋を掃除する.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない form.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない form.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーは 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなければいけない", blank: true },
        ],
        notes: "Using は to mark the host family as the topic.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーは 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃいけない", blank: true },
        ],
        notes: "Topic は with colloquial なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーは 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃいけない", blank: true },
        ],
        notes: "Topic は with colloquial なくちゃいけない.",
      },
      {
        segments: [
          { text: "三時[さんじ]に 私[わたし]の ホストファミリーが 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなければいけない", blank: true },
        ],
        notes: "Time phrase placed at the beginning of the sentence.",
      },
      {
        segments: [
          { text: "三時[さんじ]に 私[わたし]の ホストファミリーが 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃいけない", blank: true },
        ],
        notes: "Time phrase first with なきゃいけない.",
      },
      {
        segments: [
          { text: "三時[さんじ]に 私[わたし]の ホストファミリーが 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃいけない", blank: true },
        ],
        notes: "Time phrase first with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るので、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなければいけない", blank: true },
        ],
        notes: "Using ので instead of から for the reason.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るので、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃいけない", blank: true },
        ],
        notes: "Using ので with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るので、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃいけない", blank: true },
        ],
        notes: "Using ので with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 私[わたし]の 部屋[へや]を " },
          { text: "掃除[そうじ]しなければいけない", blank: true },
        ],
        notes: "Explicitly says 私の部屋 for “my room.”",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 私[わたし]の 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃいけない", blank: true },
        ],
        notes: "Explicit my room with colloquial なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 私[わたし]の 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃいけない", blank: true },
        ],
        notes: "Explicit my room with colloquial なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、部屋[へや]を 三時[さんじ]までに " },
          { text: "掃除[そうじ]しなければいけない", blank: true },
        ],
        notes: "Moves 三時までに after the object.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、部屋[へや]を 三時[さんじ]までに " },
          { text: "掃除[そうじ]しなきゃいけない", blank: true },
        ],
        notes: "Object-before-deadline word order with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、部屋[へや]を 三時[さんじ]までに " },
          { text: "掃除[そうじ]しなくちゃいけない", blank: true },
        ],
        notes: "Object-before-deadline word order with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなければいけません", blank: true },
        ],
        notes: "Polite いけません ending.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃいけません", blank: true },
        ],
        notes: "なきゃ with polite いけません.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃいけません", blank: true },
        ],
        notes: "なくちゃ with polite いけません.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]の 掃除[そうじ]を " },
          { text: "しなければいけない", blank: true },
        ],
        notes: "Uses 部屋の掃除をする instead of 部屋を掃除する.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]の 掃除[そうじ]を " },
          { text: "しなきゃいけない", blank: true },
        ],
        notes: "部屋の掃除をする with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]の 掃除[そうじ]を " },
          { text: "しなくちゃいけない", blank: true },
        ],
        notes: "部屋の掃除をする with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]ごろ 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなければいけない", blank: true },
        ],
        notes: "Uses 三時ごろ for the arrival time; still must clean by three.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]ごろ 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃいけない", blank: true },
        ],
        notes: "三時ごろ with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]ごろ 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃいけない", blank: true },
        ],
        notes: "三時ごろ with なくちゃいけない.",
      },
      {
        segments: [
          { text: "ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 私[わたし]の 部屋[へや]を " },
          { text: "掃除[そうじ]しなければいけない", blank: true },
        ],
        notes: "Omits 私の before host family, keeps 私の before room.",
      },
      {
        segments: [
          { text: "ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 私[わたし]の 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃいけない", blank: true },
        ],
        notes: "Omitted possessor for host family with なきゃいけない.",
      },
      {
        segments: [
          { text: "ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 私[わたし]の 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃいけない", blank: true },
        ],
        notes: "Omitted possessor for host family with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃ", blank: true },
        ],
        notes: "Most colloquial form with いけない omitted.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃ", blank: true },
        ],
        notes: "Colloquial なくちゃ form with いけない omitted.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るので、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなきゃ", blank: true },
        ],
        notes: "ので with colloquial omitted いけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るので、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなくちゃ", blank: true },
        ],
        notes: "ので with なくちゃ and omitted いけない.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなけりゃいけない", blank: true },
        ],
        notes: "Very casual/rough なけりゃ variant.",
      },
      {
        segments: [
          { text: "私[わたし]の ホストファミリーが 三時[さんじ]に 来[く]るから、三時[さんじ]までに 部屋[へや]を " },
          { text: "掃除[そうじ]しなけりゃ", blank: true },
        ],
        notes: "Very casual なけりゃ with いけない omitted.",
      },
    ],
  },
  {
    english: "I have to leave the party at ten because the last train is at eleven.",
    answers: [
      {
        segments: [
          { text: "終電[しゅうでん]は 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なければいけない", blank: true },
        ],
        notes: "Standard なければいけない form; 終電は as the reason first",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なければいけない", blank: true },
        ],
        notes: "Using が for the last train being at eleven",
      },
      {
        segments: [
          { text: "私[わたし]は 終電[しゅうでん]が 十一時[じゅういちじ]だから、十時[じゅうじ]に パーティーを " },
          { text: "出[で]なければいけない", blank: true },
        ],
        notes: "Starts with the subject 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 終電[しゅうでん]は 十一時[じゅういちじ]だから、十時[じゅうじ]に パーティーを " },
          { text: "出[で]なければいけない", blank: true },
        ],
        notes: "Subject first, with 終電は",
      },
      {
        segments: [
          { text: "十一時[じゅういちじ]に 終電[しゅうでん]が あるから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なければいけない", blank: true },
        ],
        notes: "Expresses “the last train is at eleven” as “there is a last train at eleven”",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は 十一時[じゅういちじ]だから、十時[じゅうじ]に 私[わたし]は パーティーを " },
          { text: "出[で]なければいけない", blank: true },
        ],
        notes: "Moves the time phrase before 私は",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない form",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない with 終電が",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない form",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない with 終電が",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なきゃ", blank: true },
        ],
        notes: "Most casual なきゃ with いけない omitted",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なきゃ", blank: true },
        ],
        notes: "Omitted いけない with 終電が",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なくちゃ", blank: true },
        ],
        notes: "Most casual なくちゃ with いけない omitted",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 十一時[じゅういちじ]だから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なくちゃ", blank: true },
        ],
        notes: "Omitted いけない with 終電が",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は 十一時[じゅういちじ]だから、私[わたし]は パーティーを 十時[じゅうじ]に " },
          { text: "出[で]なければいけない", blank: true },
        ],
        notes: "Moves パーティーを before the time phrase",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 十一時[じゅういちじ]だから、私[わたし]は パーティーを 十時[じゅうじ]に " },
          { text: "出[で]なければいけない", blank: true },
        ],
        notes: "Object before time phrase with 終電が",
      },
      {
        segments: [
          { text: "私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なければいけない", blank: true },
          { text: "。終電[しゅうでん]は 十一時[じゅういちじ]だから" },
        ],
        notes: "Splits into two sentences, obligation first",
      },
      {
        segments: [
          { text: "私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なければいけない", blank: true },
          { text: "。終電[しゅうでん]が 十一時[じゅういちじ]だから" },
        ],
        notes: "Two-sentence version with 終電が",
      },
      {
        segments: [
          { text: "十一時[じゅういちじ]に 終電[しゅうでん]が あるから、十時[じゅうじ]に パーティーを " },
          { text: "出[で]なきゃ", blank: true },
        ],
        notes: "Casual なきゃ with あるから reason and subject omitted",
      },
      {
        segments: [
          { text: "十一時[じゅういちじ]に 終電[しゅうでん]が あるから、十時[じゅうじ]に パーティーを " },
          { text: "出[で]なくちゃ", blank: true },
        ],
        notes: "Casual なくちゃ with あるから reason and subject omitted",
      },
      {
        segments: [
          { text: "十一時[じゅういちじ]に 終電[しゅうでん]が あるから、私[わたし]は 十時[じゅうじ]に パーティーを " },
          { text: "出[で]なきゃいけない", blank: true },
        ],
        notes: "なきゃいけない with the reason phrased using がある",
      },
    ],
  },
  {
    english: "I have to take my dog to the park this morning because the weather is nice.",
    hint: "Use “my dog” rather than a pronoun.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Standard なければいけない with reason first; uses に for destination",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 公園[こうえん]へ " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Uses へ instead of に for destination",
      },
      {
        segments: [
          { text: "天気[てんき]が よいから、今朝[けさ]、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Moves 今朝 after the reason clause",
      },
      {
        segments: [
          { text: "今朝[けさ]、天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Places 今朝 at the very beginning as the time for the whole sentence",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていかなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていかなくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]の 犬[いぬ]を 今朝[けさ] 公園[こうえん]に " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
          { text: "。天気[てんき]が よいから" },
        ],
        notes: "Obligation first, reason after; natural explanatory order",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Includes explicit subject 私は",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいので、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Uses ので instead of から for the reason",
      },
      {
        segments: [
          { text: "天気[てんき]が よいので、今朝[けさ]、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "ので reason clause first, with 今朝 after it",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいので、私[わたし]の 犬[いぬ]を 公園[こうえん]へ " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Uses ので and destination particle へ",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]と 公園[こうえん]に " },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Alternative expression: go to the park with my dog",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]と 公園[こうえん]へ " },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Alternative expression with へ: go with my dog",
      },
      {
        segments: [
          { text: "天気[てんき]が よいから、今朝[けさ]、私[わたし]の 犬[いぬ]と 公園[こうえん]に " },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Go with dog; reason first, time after",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいので、私[わたし]の 犬[いぬ]と 公園[こうえん]に " },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Go with dog using ので",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]と 公園[こうえん]に " },
          { text: "行[い]かなきゃいけない", blank: true },
        ],
        notes: "Go with dog using colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]と 公園[こうえん]に " },
          { text: "行[い]かなくちゃいけない", blank: true },
        ],
        notes: "Go with dog using なくちゃいけない",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていかなきゃ", blank: true },
        ],
        notes: "Colloquial なきゃ with いけない omitted",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていかなくちゃ", blank: true },
        ],
        notes: "Colloquial なくちゃ with いけない omitted",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]と 公園[こうえん]に " },
          { text: "行[い]かなきゃ", blank: true },
        ],
        notes: "Go with dog using shortened なきゃ only",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]と 公園[こうえん]に " },
          { text: "行[い]かなくちゃ", blank: true },
        ],
        notes: "Go with dog using shortened なくちゃ only",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていかなけりゃいけない", blank: true },
        ],
        notes: "Very casual なけりゃいけない",
      },
      {
        segments: [
          { text: "今朝[けさ]は 天気[てんき]が よいから、私[わたし]の 犬[いぬ]と 公園[こうえん]に " },
          { text: "行[い]かなけりゃいけない", blank: true },
        ],
        notes: "Very casual なけりゃいけない with 行く",
      },
      {
        segments: [
          { text: "天気[てんき]が よいから、私[わたし]の 犬[いぬ]を 今朝[けさ] 公園[こうえん]に " },
          { text: "連[つ]れて", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Places 今朝 before destination in main clause",
      },
    ],
  },
  {
    english: "I have to answer the questionnaire today, but I don't understand the questions.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートに " },
          { text: "答[こた]えなければいけない", blank: true },
          { text: "が、質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Standard なければいけない with アンケートに答える and 質問が分からない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートに " },
          { text: "答[こた]えなきゃいけない", blank: true },
          { text: "が、質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Colloquial なきゃいけない form",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートに " },
          { text: "答[こた]えなくちゃいけない", blank: true },
          { text: "が、質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Colloquial なくちゃいけない form",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は アンケートに " },
          { text: "答[こた]えなければいけない", blank: true },
          { text: "が、質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Time phrase moved to the beginning",
      },
      {
        segments: [
          { text: "今日[きょう]、アンケートに " },
          { text: "答[こた]えなければいけない", blank: true },
          { text: "が、質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Subject omitted; natural when context identifies the speaker",
      },
      {
        segments: [
          { text: "今日[きょう]は アンケートに " },
          { text: "答[こた]えなければいけない", blank: true },
          { text: "が、質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 今日は to topicalize today",
      },
      {
        segments: [
          { text: "私[わたし]は アンケートに 今日[きょう] " },
          { text: "答[こた]えなければいけない", blank: true },
          { text: "が、質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Today placed immediately before the obligation verb",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートに " },
          { text: "答[こた]えなければいけない", blank: true },
          { text: "けど、質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using けど instead of が for 'but'",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートに " },
          { text: "答[こた]えなきゃ", blank: true },
          { text: "いけないけど、質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Blank targets なきゃ; using けど",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートに " },
          { text: "答[こた]えなきゃ", blank: true },
          { text: "、でも 質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Casual omission of いけない with でも for but",
      },
      {
        segments: [
          { text: "今日[きょう]、アンケートに " },
          { text: "答[こた]えなくちゃ", blank: true },
          { text: "、でも 質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Casual なくちゃ without いけない and omitted subject",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートに " },
          { text: "答[こた]えなければいけない", blank: true },
          { text: "が、質問[しつもん]は " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 質問は to contrast the questions as the part not understood",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートに " },
          { text: "答[こた]えなければいけない", blank: true },
          { text: "が、質問[しつもん]が 全然[ぜんぜん] " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Adds 全然 to emphasize not understanding at all",
      },
      {
        segments: [
          { text: "今日[きょう]、アンケートに " },
          { text: "答[こた]えなきゃいけない", blank: true },
          { text: "けど、質問[しつもん]が 全然[ぜんぜん] " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Subject omitted, colloquial obligation, and emphatic 全然",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートの 質問[しつもん]に " },
          { text: "答[こた]えなければいけない", blank: true },
          { text: "が、その 質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Interprets 'answer the questionnaire' as answering its questions",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、アンケートの 質問[しつもん]に " },
          { text: "答[こた]えなくちゃいけない", blank: true },
          { text: "けど、その 質問[しつもん]が " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Question-answering phrasing with なくちゃいけない and けど",
      },
    ],
  },
  {
    english: "Because it’s raining, I have to take an umbrella to school today.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]が 降[ふ]っているから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Standard なければいけない; topic 今日は at the beginning",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Standard form with reason first and 今日は before the object",
      },
      {
        segments: [
          { text: "今日[きょう]、雨[あめ]が 降[ふ]っているから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "今日 placed before the reason clause",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、傘[かさ]を 今日[きょう] 学校[がっこう]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "今日 placed inside the main clause before 学校に",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]が 降[ふ]っているから、学校[がっこう]に 傘[かさ]を " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Object and destination order reversed",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、今日[きょう]、学校[がっこう]に 傘[かさ]を " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Destination before object; 今日 set off after reason",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]だから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Using 雨だから instead of 雨が降っているから",
      },
      {
        segments: [
          { text: "雨[あめ]だから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "雨だから reason first",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]が 降[ふ]っているから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない with reason first",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]だから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃ with 雨だから",
      },
      {
        segments: [
          { text: "雨[あめ]だから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃ with 雨だから reason first",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]が 降[ふ]っているから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
        ],
        notes: "なくちゃいけない with reason first",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]だから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
        ],
        notes: "なくちゃいけない with 雨だから",
      },
      {
        segments: [
          { text: "雨[あめ]だから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
        ],
        notes: "なくちゃいけない with 雨だから reason first",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]が 降[ふ]っているから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなきゃ", blank: true },
        ],
        notes: "Omitting いけない after なきゃ; very common casual form",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなきゃ", blank: true },
        ],
        notes: "Omitted いけない with reason first",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]だから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなきゃ", blank: true },
        ],
        notes: "Omitted いけない with 雨だから",
      },
      {
        segments: [
          { text: "雨[あめ]だから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなきゃ", blank: true },
        ],
        notes: "Omitted いけない with 雨だから reason first",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]が 降[ふ]っているから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなくちゃ", blank: true },
        ],
        notes: "Omitting いけない after なくちゃ",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]っているから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなくちゃ", blank: true },
        ],
        notes: "Omitted いけない after なくちゃ with reason first",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]だから、傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなくちゃ", blank: true },
        ],
        notes: "Omitted いけない after なくちゃ with 雨だから",
      },
      {
        segments: [
          { text: "雨[あめ]だから、今日[きょう]は 傘[かさ]を 学校[がっこう]に " },
          { text: "持[も]っていかなくちゃ", blank: true },
        ],
        notes: "Omitted いけない after なくちゃ with 雨だから reason first",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]が 降[ふ]っているから、傘[かさ]を 学校[がっこう]へ " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Using へ instead of に for destination",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]が 降[ふ]っているから、傘[かさ]を 学校[がっこう]へ " },
          { text: "持[も]っていかなきゃ", blank: true },
        ],
        notes: "Using へ with shortened なきゃ",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]だから、傘[かさ]を 学校[がっこう]へ " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
        ],
        notes: "Using へ with 雨だから",
      },
      {
        segments: [
          { text: "今日[きょう]は 雨[あめ]だから、傘[かさ]を 学校[がっこう]へ " },
          { text: "持[も]っていかなきゃ", blank: true },
        ],
        notes: "Using へ, 雨だから, and shortened なきゃ",
      },
    ],
  },
  {
    english: "I have to go to the dentist today because my tooth hurts.",
    answers: [
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、私[わたし]は 今日[きょう] 歯科[しか]に 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Standard なければいけない with reason first; uses 歯科 for dentist/dental clinic",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いので、私[わたし]は 今日[きょう] 歯科[しか]に 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Uses ので instead of から for the reason",
      },
      {
        segments: [
          { text: "私[わたし]は 歯[は]が 痛[いた]いから、今日[きょう] 歯科[しか]に 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Starts with 私は; reason embedded before main clause",
      },
      {
        segments: [
          { text: "私[わたし]は 歯[は]が 痛[いた]いので、今日[きょう] 歯科[しか]に 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Starts with 私は and uses ので",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、今日[きょう] 私[わたし]は 歯科[しか]に 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Moves 今日 before 私は in the main clause",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、私[わたし]は 歯科[しか]に 今日[きょう] 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Places 今日 immediately before the verb phrase",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、私[わたし]は 今日[きょう] 歯科[しか]へ 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Uses へ instead of に for direction",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いので、私[わたし]は 今日[きょう] 歯科[しか]へ 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Uses ので and direction particle へ",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、私[わたし]は 今日[きょう] 歯医者[はいしゃ]に 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Uses 歯医者, a common word for dentist (synonym outside listed vocabulary)",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いので、私[わたし]は 今日[きょう] 歯医者[はいしゃ]に 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "歯医者 with ので",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、私[わたし]は 今日[きょう] 歯医者[はいしゃ]へ 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "歯医者 with direction particle へ",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いので、私[わたし]は 今日[きょう] 歯医者[はいしゃ]へ 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "歯医者 with ので and へ",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、私[わたし]は 今日[きょう] 歯科[しか]に 行[い]か" },
          { text: "なきゃいけない", blank: true },
        ],
        notes: "Uses colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、私[わたし]は 今日[きょう] 歯科[しか]に 行[い]か" },
          { text: "なくちゃいけない", blank: true },
        ],
        notes: "Uses colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、私[わたし]は 今日[きょう] 歯科[しか]に 行[い]か" },
          { text: "なきゃ", blank: true },
        ],
        notes: "Omitted いけない; very common casual abbreviation",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、私[わたし]は 今日[きょう] 歯科[しか]に 行[い]か" },
          { text: "なくちゃ", blank: true },
        ],
        notes: "Omitted いけない with なくちゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 歯医者[はいしゃ]に 行[い]か" },
          { text: "なきゃいけない", blank: true },
          { text: "。歯[は]が 痛[いた]いから" },
        ],
        notes: "Reversed order: obligation first, reason after",
      },
      {
        segments: [
          { text: "今日[きょう]、歯[は]が 痛[いた]いので、私[わたし]は 歯科[しか]に 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "Places 今日 at the start applying to the whole sentence",
      },
      {
        segments: [
          { text: "今日[きょう]、歯[は]が 痛[いた]いから、私[わたし]は 歯科[しか]に 行[い]か" },
          { text: "なければいけない", blank: true },
        ],
        notes: "今日 at sentence beginning with から",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、今日[きょう] 歯科[しか]に 行[い]か" },
          { text: "なきゃ", blank: true },
        ],
        notes: "Casual, omits 私は as subject",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、今日[きょう] 歯医者[はいしゃ]に 行[い]か" },
          { text: "なきゃ", blank: true },
        ],
        notes: "Casual with 歯医者 and omitted subject",
      },
      {
        segments: [
          { text: "歯[は]が 痛[いた]いから、今日[きょう] 歯医者[はいしゃ]へ 行[い]か" },
          { text: "なくちゃ", blank: true },
        ],
        notes: "Casual なくちゃ with へ and omitted subject",
      },
    ],
  },
  {
    english: "I have to bring my health insurance card to the hospital today, but I can’t find my wallet.",
    hint: "health insurance card = health insurance certificate",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Standard なければいけない with 今日 at the beginning; uses 財布がない for “can’t find my wallet”.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]っていかなきゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Colloquial なきゃいけない form.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Colloquial なくちゃいけない form.",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は 保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Different word order with 今日 sentence-initial.",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は 保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]っていかなきゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "今日 sentence-initial with なきゃいけない.",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は 保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "今日 sentence-initial with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 保険証[ほけんしょう]を 今日[きょう] 病院[びょういん]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Places 今日 before 病院に.",
      },
      {
        segments: [
          { text: "私[わたし]は 保険証[ほけんしょう]を 今日[きょう] 病院[びょういん]に " },
          { text: "持[も]っていかなきゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "今日 before 病院に with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 保険証[ほけんしょう]を 今日[きょう] 病院[びょういん]に " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "今日 before 病院に with なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]へ " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Uses へ instead of に for the destination.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]へ " },
          { text: "持[も]っていかなきゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Destination へ with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]へ " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Destination へ with なくちゃいけない.",
      },
      {
        segments: [
          { text: "今日[きょう] 病院[びょういん]に 保険証[ほけんしょう]を " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Drops sentence-initial pronoun; different order with destination before object.",
      },
      {
        segments: [
          { text: "今日[きょう] 病院[びょういん]に 保険証[ほけんしょう]を " },
          { text: "持[も]っていかなきゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Pronoun omitted with destination before object and なきゃいけない.",
      },
      {
        segments: [
          { text: "今日[きょう] 病院[びょういん]に 保険証[ほけんしょう]を " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
          { text: "が、財布[さいふ]が ない" },
        ],
        notes: "Pronoun omitted with destination before object and なくちゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけない", blank: true },
          { text: "が、財布[さいふ]が 見[み]つからない" },
        ],
        notes: "Uses 見つからない for a more literal “can’t find my wallet.”",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]っていかなきゃいけない", blank: true },
          { text: "が、財布[さいふ]が 見[み]つからない" },
        ],
        notes: "見つからない with なきゃいけない.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]っていかなくちゃいけない", blank: true },
          { text: "が、財布[さいふ]が 見[み]つからない" },
        ],
        notes: "見つからない with なくちゃいけない.",
      },
      {
        segments: [
          { text: "今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]っていかなきゃ", blank: true },
          { text: "いけないが、財布[さいふ]が 見[み]つからない" },
        ],
        notes: "Blank isolates なきゃ; keeps いけない outside the blank.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、保険証[ほけんしょう]を 病院[びょういん]に " },
          { text: "持[も]って", blank: true },
          { text: "行[い]かなければいけません", blank: true },
          { text: "が、財布[さいふ]が 見[み]つからない" },
        ],
        notes: "Polite いけません ending with 見つからない.",
      },
    ],
  },
  {
    english: "I have to pay the cafe bill today, but I left my money at home.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなければいけない", blank: true },
          { text: "が、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Standard なければいけない with カフェ代 for cafe bill",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェの 代金[だいきん]を " },
          { text: "払[はら]わなければいけない", blank: true },
          { text: "が、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Uses カフェの代金 instead of カフェ代",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなきゃいけない", blank: true },
          { text: "が、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Colloquial なきゃいけない form",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなくちゃいけない", blank: true },
          { text: "が、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Colloquial なくちゃいけない form",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は カフェ代[だい]を " },
          { text: "払[はら]わなければいけない", blank: true },
          { text: "が、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなければいけない", blank: true },
          { text: "が、私[わたし]は お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Subject appears in the second clause",
      },
      {
        segments: [
          { text: "私[わたし]は カフェ代[だい]を 今日[きょう] " },
          { text: "払[はら]わなければいけない", blank: true },
          { text: "が、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "今日 placed just before the obligation verb",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなければいけない", blank: true },
          { text: "が、家[いえ]に お金[かね]を 忘[わす]れた" },
        ],
        notes: "Object and location order reversed in second clause",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなきゃ", blank: true },
          { text: "いけないが、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Blank isolates なきゃ before いけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなくちゃ", blank: true },
          { text: "いけないが、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Blank isolates なくちゃ before いけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなければ", blank: true },
          { text: "いけないが、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Blank isolates なければ before いけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなきゃ", blank: true },
          { text: "。でも、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Colloquial なきゃ with いけない omitted, split into two sentences with でも",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、カフェ代[だい]を " },
          { text: "払[はら]わなくちゃ", blank: true },
          { text: "。でも、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Colloquial なくちゃ with いけない omitted, split into two sentences",
      },
      {
        segments: [
          { text: "今日[きょう]は カフェ代[だい]を " },
          { text: "払[はら]わなければいけない", blank: true },
          { text: "が、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Uses 今日は as topicalized time; subject omitted",
      },
      {
        segments: [
          { text: "今日[きょう]は カフェ代[だい]を " },
          { text: "払[はら]わなきゃいけない", blank: true },
          { text: "が、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "今日 topicalized with なきゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう]は カフェ代[だい]を " },
          { text: "払[はら]わなくちゃいけない", blank: true },
          { text: "が、お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "今日 topicalized with なくちゃいけない",
      },
      {
        segments: [
          { text: "カフェ代[だい]を 今日[きょう] " },
          { text: "払[はら]わなければいけない", blank: true },
          { text: "が、私[わたし]は お金[かね]を 家[いえ]に 忘[わす]れた" },
        ],
        notes: "Object fronted and subject in second clause",
      },
    ],
  },
  {
    english: "I have to meet Kenji in front of the station at nine tonight.",
    hint: "Kenji = 健二",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Standard なければいけない form with 今夜 before the time",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない form",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない form",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Using 今晩 for tonight instead of 今夜",
      },
      {
        segments: [
          { text: "私[わたし]は 九時[くじ]に 今夜[こんや] 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Time phrase order variation: clock time before tonight",
      },
      {
        segments: [
          { text: "私[わたし]は 駅[えき]の 前[まえ]で 今夜[こんや] 九時[くじ]に 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Location placed before time phrase",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 駅[えき]の 前[まえ]で 九時[くじ]に 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Location before exact clock time",
      },
      {
        segments: [
          { text: "今夜[こんや] 九時[くじ]に、私[わたし]は 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Fronted time phrase for emphasis",
      },
      {
        segments: [
          { text: "駅[えき]の 前[まえ]で、私[わたし]は 今夜[こんや] 九時[くじ]に 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Fronted location phrase",
      },
      {
        segments: [
          { text: "健二[けんじ]さんに、私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Fronted person to meet for emphasis/contrast",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅前[えきまえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Using 駅前 as a compact word for in front of the station",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Omitting さん for a close friend named Kenji",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんと " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Using と with 会う to mean meet up with Kenji",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんと " },
          { text: "会[あ]わなければいけない", blank: true },
        ],
        notes: "Using と and no honorific for close relationship",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅前[えきまえ]で 健二[けんじ]さんと " },
          { text: "会[あ]わなきゃいけない", blank: true },
        ],
        notes: "Combination of 駅前 and colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅前[えきまえ]で 健二[けんじ]さんと " },
          { text: "会[あ]わなくちゃいけない", blank: true },
        ],
        notes: "Combination of 駅前 and colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんと " },
          { text: "会[あ]わなきゃいけない", blank: true },
        ],
        notes: "Using 今晩 plus と and colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんと " },
          { text: "会[あ]わなくちゃいけない", blank: true },
        ],
        notes: "Using 今晩 plus と and colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなければいけません", blank: true },
        ],
        notes: "Polite いけません ending included in the tested structure",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなきゃいけません", blank: true },
        ],
        notes: "Polite ending with colloquial なきゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなくちゃいけません", blank: true },
        ],
        notes: "Polite ending with colloquial なくちゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなきゃ", blank: true },
        ],
        notes: "Very common casual omission of いけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅[えき]の 前[まえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなくちゃ", blank: true },
        ],
        notes: "Very common casual omission of いけない with なくちゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅前[えきまえ]で 健二[けんじ]さんに " },
          { text: "会[あ]わなきゃ", blank: true },
        ],
        notes: "Most casual compact version with 駅前, no さん, and omitted いけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] 九時[くじ]に 駅前[えきまえ]で 健二[けんじ]さんと " },
          { text: "会[あ]わなくちゃ", blank: true },
        ],
        notes: "Casual compact version with と and なくちゃ",
      },
    ],
  },
  {
    english: "I played soccer today, so I have to take a shower.",
    answers: [
      {
        segments: [
          { text: "今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなければいけない", blank: true },
        ],
        notes: "Standard なければいけない form; most direct translation",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない form",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない form",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなきゃ", blank: true },
        ],
        notes: "Very common casual form with いけない omitted",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなくちゃ", blank: true },
        ],
        notes: "Casual なくちゃ with いけない omitted",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなければいけません", blank: true },
        ],
        notes: "Polite いけません ending",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなきゃいけません", blank: true },
        ],
        notes: "Colloquial contraction with polite いけません",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなくちゃいけません", blank: true },
        ],
        notes: "なくちゃ with polite いけません",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したから、" },
          { text: "シャワーを 浴[あ]びなければいけない", blank: true },
        ],
        notes: "Blank includes the full obligation phrase",
      },
      {
        segments: [
          { text: "サッカーを 今日[きょう] したから、シャワーを " },
          { text: "浴[あ]びなければいけない", blank: true },
        ],
        notes: "Time expression placed after the object in the first clause",
      },
      {
        segments: [
          { text: "サッカーを 今日[きょう] したから、シャワーを " },
          { text: "浴[あ]びなきゃ", blank: true },
        ],
        notes: "Reordered first clause with casual omitted いけない",
      },
      {
        segments: [
          { text: "今日[きょう]は サッカーを したから、シャワーを " },
          { text: "浴[あ]びなければいけない", blank: true },
        ],
        notes: "Using 今日は as topic for 'today'",
      },
      {
        segments: [
          { text: "今日[きょう]は サッカーを したから、シャワーを " },
          { text: "浴[あ]びなきゃいけない", blank: true },
        ],
        notes: "今日は plus colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう]は サッカーを したから、シャワーを " },
          { text: "浴[あ]びなきゃ", blank: true },
        ],
        notes: "今日は with casual abbreviated obligation",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したので、シャワーを " },
          { text: "浴[あ]びなければいけない", blank: true },
        ],
        notes: "Using ので for 'so/because'",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したので、シャワーを " },
          { text: "浴[あ]びなきゃいけない", blank: true },
        ],
        notes: "ので with colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを したので、シャワーを " },
          { text: "浴[あ]びなくちゃ", blank: true },
        ],
        notes: "ので with casual なくちゃ",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを した。だから、シャワーを " },
          { text: "浴[あ]びなければいけない", blank: true },
        ],
        notes: "Split into two sentences using だから",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを した。だから、シャワーを " },
          { text: "浴[あ]びなきゃ", blank: true },
        ],
        notes: "Split sentence with casual abbreviated obligation",
      },
      {
        segments: [
          { text: "今日[きょう] サッカーを した。シャワーを " },
          { text: "浴[あ]びなきゃ", blank: true },
        ],
        notes: "Causal link inferred from context; very natural casual phrasing",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなければいけない", blank: true },
        ],
        notes: "Explicit subject 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] サッカーを したから、シャワーを " },
          { text: "浴[あ]びなきゃいけない", blank: true },
        ],
        notes: "Explicit subject with なきゃいけない",
      },
    ],
  },
  {
    english: "I have to write a reply to my older brother’s email tonight, but I’m too tired.",
    hint: "Use “too” in the sense of excessive.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなければいけない", blank: true },
          { text: "が、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard なければいけない; 返事を書く as 'write a reply'",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]、兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなければいけない", blank: true },
          { text: "が、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなきゃいけない", blank: true },
          { text: "が、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなくちゃいけない", blank: true },
          { text: "が、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなきゃ", blank: true },
          { text: "いけないが、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Blank focuses on shortened なきゃ before いけない",
      },
      {
        segments: [
          { text: "今晩[こんばん]、私[わたし]は 兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなければいけない", blank: true },
          { text: "が、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 兄[あに]の メールに 今晩[こんばん] 返事[へんじ]を " },
          { text: "書[か]かなければいけない", blank: true },
          { text: "が、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Different placement of 今晩 before 返事",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、兄[あに]の メールの 返事[へんじ]を " },
          { text: "書[か]かなければいけない", blank: true },
          { text: "が、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses メールの返事 instead of メールに返事",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、お兄[にい]さんの メールに 返事[へんじ]を " },
          { text: "書[か]かなければいけない", blank: true },
          { text: "が、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses お兄さん for older brother (common in some contexts)",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、兄[あに]に メールの 返事[へんじ]を " },
          { text: "書[か]かなければいけない", blank: true },
          { text: "が、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Recipient marked with 兄に, object as メールの返事",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなければいけない", blank: true },
          { text: "けど、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses けど instead of が for 'but'",
      },
      {
        segments: [
          { text: "今晩[こんばん]、兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなきゃ", blank: true },
          { text: "いけないけど、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural colloquial version with initial pronoun omitted and けど",
      },
      {
        segments: [
          { text: "今夜[こんや]、兄[あに]の メールの 返事[へんじ]を " },
          { text: "書[か]かなくちゃいけない", blank: true },
          { text: "けど、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Concise colloquial version with 今夜 and メールの返事",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなければいけない", blank: true },
          { text: "のですが、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses explanatory のですが for softer 'but'",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、兄[あに]の メールに 返事[へんじ]を " },
          { text: "書[か]かなきゃいけない", blank: true },
          { text: "のですが、疲[つか]れ" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial obligation with softer のですが",
      },
    ],
  },
  {
    english: "The green light is on, so I have to cross now.",
    hint: "green light = 青信号",
    answers: [
      {
        segments: [
          { text: "青信号[あおしんごう]だから、今[いま] " },
          { text: "渡[わた]らなければいけない", blank: true },
        ],
        notes: "Basic translation using だから and なければいけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]だから、今[いま] " },
          { text: "渡[わた]らなきゃいけない", blank: true },
        ],
        notes: "Colloquial なきゃいけない form",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]だから、今[いま] " },
          { text: "渡[わた]らなくちゃいけない", blank: true },
        ],
        notes: "Colloquial なくちゃいけない form",
      },
      {
        segments: [
          { text: "今[いま] 青信号[あおしんごう]だから、" },
          { text: "渡[わた]らなければいけない", blank: true },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "今[いま] 青信号[あおしんごう]だから、" },
          { text: "渡[わた]らなきゃいけない", blank: true },
        ],
        notes: "Time-first word order with なきゃいけない",
      },
      {
        segments: [
          { text: "今[いま] 青信号[あおしんごう]だから、" },
          { text: "渡[わた]らなくちゃいけない", blank: true },
        ],
        notes: "Time-first word order with なくちゃいけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]だから、" },
          { text: "今[いま] 渡[わた]らなければいけない", blank: true },
        ],
        notes: "Blank includes the time adverb with the target grammar",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]だから、" },
          { text: "今[いま] 渡[わた]らなきゃいけない", blank: true },
        ],
        notes: "Blank includes 今 with colloquial なきゃいけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]だから、" },
          { text: "今[いま] 渡[わた]らなくちゃいけない", blank: true },
        ],
        notes: "Blank includes 今 with colloquial なくちゃいけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]が ついているから、今[いま] " },
          { text: "渡[わた]らなければいけない", blank: true },
        ],
        notes: "Explicitly translates “the green light is on” as がついている",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]が ついているから、今[いま] " },
          { text: "渡[わた]らなきゃいけない", blank: true },
        ],
        notes: "Explicit “is on” with なきゃいけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]が ついているから、今[いま] " },
          { text: "渡[わた]らなくちゃいけない", blank: true },
        ],
        notes: "Explicit “is on” with なくちゃいけない",
      },
      {
        segments: [
          { text: "今[いま] 青信号[あおしんごう]が ついているから、" },
          { text: "渡[わた]らなければいけない", blank: true },
        ],
        notes: "Explicit “is on” with time phrase at the beginning",
      },
      {
        segments: [
          { text: "今[いま] 青信号[あおしんごう]が ついているから、" },
          { text: "渡[わた]らなきゃいけない", blank: true },
        ],
        notes: "Explicit “is on,” time-first, with なきゃいけない",
      },
      {
        segments: [
          { text: "今[いま] 青信号[あおしんごう]が ついているから、" },
          { text: "渡[わた]らなくちゃいけない", blank: true },
        ],
        notes: "Explicit “is on,” time-first, with なくちゃいけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]に なったから、今[いま] " },
          { text: "渡[わた]らなければいけない", blank: true },
        ],
        notes: "Natural alternative: “it turned green”",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]に なったから、今[いま] " },
          { text: "渡[わた]らなきゃいけない", blank: true },
        ],
        notes: "“It turned green” with なきゃいけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]に なったから、今[いま] " },
          { text: "渡[わた]らなくちゃいけない", blank: true },
        ],
        notes: "“It turned green” with なくちゃいけない",
      },
      {
        segments: [
          { text: "今[いま] 青信号[あおしんごう]に なったから、" },
          { text: "渡[わた]らなければいけない", blank: true },
        ],
        notes: "“It turned green” with time phrase first",
      },
      {
        segments: [
          { text: "今[いま] 青信号[あおしんごう]に なったから、" },
          { text: "渡[わた]らなきゃいけない", blank: true },
        ],
        notes: "“It turned green,” time-first, with なきゃいけない",
      },
      {
        segments: [
          { text: "今[いま] 青信号[あおしんごう]に なったから、" },
          { text: "渡[わた]らなくちゃいけない", blank: true },
        ],
        notes: "“It turned green,” time-first, with なくちゃいけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]だから、" },
          { text: "今[いま] 渡[わた]らなきゃ", blank: true },
        ],
        notes: "Colloquial omission of いけない after なきゃ",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]だから、" },
          { text: "今[いま] 渡[わた]らなくちゃ", blank: true },
        ],
        notes: "Colloquial omission of いけない after なくちゃ",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]が ついているから、" },
          { text: "今[いま] 渡[わた]らなきゃ", blank: true },
        ],
        notes: "Explicit “is on” with omitted いけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]が ついているから、" },
          { text: "今[いま] 渡[わた]らなくちゃ", blank: true },
        ],
        notes: "Explicit “is on” with omitted いけない using なくちゃ",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]に なったから、" },
          { text: "今[いま] 渡[わた]らなきゃ", blank: true },
        ],
        notes: "“It turned green” with omitted いけない",
      },
      {
        segments: [
          { text: "青信号[あおしんごう]に なったから、" },
          { text: "今[いま] 渡[わた]らなくちゃ", blank: true },
        ],
        notes: "“It turned green” with omitted いけない using なくちゃ",
      },
    ],
  },
];

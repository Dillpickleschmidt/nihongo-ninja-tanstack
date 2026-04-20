import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I have a fever, so I'm going to rest today.",
    answers: [
      {
        segments: [
          { text: "熱[ねつ]が", blank: true },
          { text: "ある", blank: true },
          { text: "ので、今日[きょう]は" },
          { text: "休[やす]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "熱[ねつ]がある", blank: true },
          { text: "ので、今日[きょう]" },
          { text: "休[やす]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日 without は — no topic particle on 今日.",
      },
      {
        segments: [
          { text: "今日[きょう]は" },
          { text: "熱[ねつ]がある", blank: true },
          { text: "ので、" },
          { text: "休[やす]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日は moved to the front as the topic, before the reason clause.",
      },
      {
        segments: [
          { text: "熱[ねつ]がある", blank: true },
          { text: "ので、今日[きょう]は" },
          { text: "寝[ねる]", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 寝る (sleep/lie down to rest) instead of 休む as the result clause.",
      },
    ],
  },
  {
    english: "Since I'm free this weekend, do you want to go see a movie together?",
    answers: [
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は" },
          { text: "暇[ひま]な", blank: true },
          { text: "ので、一緒[いっしょ]に 映画[えいが]を 見[み]に 行[い]きませんか" },
        ],
        notes: "Base answer: 暇 (な-adj) + なので, invitation with ませんか",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は" },
          { text: "暇[ひま]な", blank: true },
          { text: "ので、一緒[いっしょ]に 映画[えいが]を 見[み]に 行[い]きましょうか" },
        ],
        notes: "Using ましょうか instead of ませんか for the invitation",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]は" },
          { text: "暇[ひま]な", blank: true },
          { text: "ので、一緒[いっしょ]に 映画[えいが]を 見[み]に 行[い]きませんか" },
        ],
        notes: "Using 週末 (without 今) instead of 今週末",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]に" },
          { text: "暇[ひま]な", blank: true },
          { text: "ので、一緒[いっしょ]に 映画[えいが]を 見[み]に 行[い]きませんか" },
        ],
        notes: "Using に instead of は after 今週末",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]が" },
          { text: "暇[ひま]な", blank: true },
          { text: "ので、一緒[いっしょ]に 映画[えいが]を 見[み]に 行[い]きませんか" },
        ],
        notes: "Using が instead of は after 今週末",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は" },
          { text: "暇[ひま]な", blank: true },
          { text: "ので、映画[えいが]を 一緒[いっしょ]に 見[み]に 行[い]きませんか" },
        ],
        notes: "Different word order: 映画を一緒に (instead of 一緒に映画を)",
      },
    ],
  },
  {
    english: "This café is quiet, so I often study here.",
    answers: [
      {
        segments: [
          { text: "このカフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、ここでよく 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Base answer: な-adjective + なので. よく before 勉強する, ここで after ので clause.",
      },
      {
        segments: [
          { text: "このカフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、よくここで 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "よく moved before ここで (adverb placement variation)",
      },
      {
        segments: [
          { text: "このカフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、私[わたし]はここでよく 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は added in the result clause for emphasis",
      },
      {
        segments: [
          { text: "このカフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、ここでよく 勉強[べんきょう]を" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "勉強をする (with を particle) instead of 勉強する",
      },
      {
        segments: [
          { text: "このカフェが" },
          { text: "静[しず]かなので", blank: true },
          { text: "、ここでよく 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は — neutral subject marker highlighting the café as the reason",
      },
    ],
  },
  {
    english: "Since tomorrow is an exam, I'm not going out tonight.",
    answers: [
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]", blank: true },
          { text: "なので、今晩[こんばん]は" },
          { text: "出[で]かける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Base answer: noun + なので, 今晩 for \"tonight\"",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]", blank: true },
          { text: "なので、今夜[こんや]は" },
          { text: "出[で]かける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "今夜 instead of 今晩 for \"tonight\"",
      },
      {
        segments: [
          { text: "明日[あした]試験[しけん]がある", blank: true },
          { text: "ので、今晩[こんばん]は" },
          { text: "出[で]かける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "明日[あした]試験[しけん]がある", blank: true },
          { text: "ので、今夜[こんや]は" },
          { text: "出[で]かける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "がある construction with 今夜",
      },
      {
        segments: [
          { text: "明日[あした]はテスト", blank: true },
          { text: "なので、今晩[こんばん]は" },
          { text: "出[で]かける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "テスト instead of 試験 for \"exam\", 今晩",
      },
      {
        segments: [
          { text: "明日[あした]はテスト", blank: true },
          { text: "なので、今夜[こんや]は" },
          { text: "出[で]かける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "テスト with 今夜",
      },
      {
        segments: [
          { text: "明日[あした]テストがある", blank: true },
          { text: "ので、今晩[こんばん]は" },
          { text: "出[で]かける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "テストがある (verb + ので) with 今晩",
      },
      {
        segments: [
          { text: "明日[あした]テストがある", blank: true },
          { text: "ので、今夜[こんや]は" },
          { text: "出[で]かける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "テストがある with 今夜",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]なので、今夜[こんや]は 外[そと]に" },
          { text: "出[で]る", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "外に出る instead of 出かける for \"go out\", with 今夜",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]なので、今晩[こんばん]は 外[そと]に" },
          { text: "出[で]る", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "外に出る with 今晩",
      },
    ],
  },
  {
    english: "I'm hungry, so I'm going to go buy a sandwich.",
    hint: "sandwich = サンドイッチ",
    answers: [
      {
        segments: [
          { text: "おなかがすいている", blank: true },
          { text: "ので、サンドイッチを 買[か]いに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "おなかがすく", blank: true },
          { text: "ので、サンドイッチを 買[か]いに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "おなかがすく (dictionary form) as blank — \"stomach gets empty so...\"",
      },
      {
        segments: [
          { text: "おなかがすいた", blank: true },
          { text: "ので、サンドイッチを 買[か]いに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "おなかがすいた (past/resulting state) — \"got hungry so...\"",
      },
    ],
  },
  {
    english: "I forgot my wallet, so I can't buy anything.",
    answers: [
    ],
  },
];

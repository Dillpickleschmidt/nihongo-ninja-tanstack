import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Even if the weather is bad, Kenji is going to the concert tomorrow.",
    hint: "Kenji = 健一 (けんいち); concert = コンサート",
    answers: [
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic word order with 天気が悪くても and simple future 行く",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、明日[あした] けんいちさんは コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "明日 placed after the concessive clause",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "明日 placed immediately before the final verb",
      },
      {
        segments: [
          { text: "天気[てんき]は" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は with 天気 for contrast/topic",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートへ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for direction toward the concert",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは コンサートへ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase first, with へ for direction",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに 行[い]く つもり" },
          { text: "です" },
        ],
        notes: "Using つもりです to express 'is going to'",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに 行[い]く 予定[よてい]" },
          { text: "です" },
        ],
        notes: "Using 予定です to express a plan",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは コンサートに 行[い]く つもり" },
          { text: "です" },
        ],
        notes: "つもりです with 明日 at the beginning",
      },
      {
        segments: [
          { text: "天気[てんき]は" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートへ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 天気は and コンサートへ",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]は" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "明日 first and 天気は",
      },
      {
        segments: [
          { text: "天気[てんき]は" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに 行[い]く つもり" },
          { text: "です" },
        ],
        notes: "つもりです with 天気は",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートへ 行[い]く つもり" },
          { text: "です" },
        ],
        notes: "つもりです with へ",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは コンサートへ 行[い]く つもり" },
          { text: "です" },
        ],
        notes: "つもりです with 明日 first and へ",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートへ 行[い]く 予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定です with へ instead of に",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]は" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは コンサートへ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "明日 first, 天気は, and へ",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]は" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは コンサートへ 行[い]く つもり" },
          { text: "です" },
        ],
        notes: "つもりです with 明日 first, 天気は, and へ",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは コンサートに 行[い]く 予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定です with 明日 at the beginning",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは コンサートへ 行[い]く 予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定です with 明日 first and へ",
      },
      {
        segments: [
          { text: "天気[てんき]は" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに 行[い]く 予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定です with 天気は",
      },
      {
        segments: [
          { text: "天気[てんき]は" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートへ 行[い]く 予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定です with 天気は and へ",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "よくなくても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using よくなくても ('even if the weather is not good') instead of 悪くても",
      },
      {
        segments: [
          { text: "明日[あした]、天気[てんき]が" },
          { text: "よくなくても", blank: true },
          { text: "、けんいちさんは コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "よくなくても with 明日 at the beginning",
      },
      {
        segments: [
          { text: "悪[わる]い 天気[てんき]" },
          { text: "でも", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using noun phrase 悪い天気でも",
      },
      {
        segments: [
          { text: "明日[あした]、悪[わる]い 天気[てんき]" },
          { text: "でも", blank: true },
          { text: "、けんいちさんは コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "悪い天気でも with 明日 at the beginning",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした]の コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Interpreting 'tomorrow' as modifying the concert: 明日のコンサート",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "悪[わる]くても", blank: true },
          { text: "、けんいちさんは 明日[あした] コンサートに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "No honorific suffix on Kenji, natural in narrative/plain reference",
      },
    ],
  },
  {
    english: "Even if I eat breakfast, I get hungry before lunch.",
    answers: [
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を 食[た]べ" },
          { text: "ても", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 前[まえ]に おなかが すく" },
        ],
        notes: "Basic wording with ても after 食べ.",
      },
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を 食[た]べ" },
          { text: "ても", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 前[まえ]に お 腹[なか]が すく" },
        ],
        notes: "Using お腹 for stomach/hunger.",
      },
    ],
  },
];

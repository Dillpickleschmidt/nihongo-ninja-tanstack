import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "It takes three hours to translate this file.",
    hint: "file = ファイル",
    answers: [
      {
        segments: [
          { text: "この ファイルを 訳[やく]すのに", blank: true },
          { text: "三時間[さんじかん] " },
          { text: "かかる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この ファイルは 訳[やく]すのに", blank: true },
          { text: "三時間[さんじかん] " },
          { text: "かかる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この ファイルを 翻訳[ほんやく]するのに", blank: true },
          { text: "三時間[さんじかん] " },
          { text: "かかる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この ファイルは 翻訳[ほんやく]するのに", blank: true },
          { text: "三時間[さんじかん] " },
          { text: "かかる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この ファイルを 訳[やく]すのに", blank: true },
          { text: "かかる 時間[じかん]は 三時間[さんじかん] " },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "この ファイルを 翻訳[ほんやく]するのに", blank: true },
          { text: "かかる 時間[じかん]は 三時間[さんじかん] " },
          { text: "です" },
        ],
      },
    ],
  },
  {
    english: "I need a spoon to eat this curry.",
    hint: "spoon = スプーン; curry = カレー",
    answers: [
      {
        segments: [
          { text: "この カレーを 食[た]べるのに", blank: true },
          { text: "スプーンが " },
          { text: "要[い]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この カレーを 食[た]べるのに", blank: true },
          { text: "スプーンが 必要[ひつよう]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "この カレーを 食[た]べるのに", blank: true },
          { text: "スプーンを " },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この カレーを 食[た]べるのに", blank: true },
          { text: "スプーンが いります" },
        ],
        register: "polite",
      },
    ],
  },
];

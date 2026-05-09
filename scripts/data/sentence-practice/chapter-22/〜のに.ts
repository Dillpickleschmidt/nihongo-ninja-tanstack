import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "It takes three hours to translate this whole long email from the travel agency.",
    hint: "email = メール",
    answers: [
      {
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の この 長[なが]い メールを 全部[ぜんぶ] 訳[やく]すのに", blank: true },
          { text: "三時間[さんじかん] " },
          { text: "かかる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の この 長[なが]い メールは 全部[ぜんぶ] 訳[やく]すのに", blank: true },
          { text: "三時間[さんじかん] " },
          { text: "かかる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の この 長[なが]い メールを 全部[ぜんぶ] 翻訳[ほんやく]するのに", blank: true },
          { text: "三時間[さんじかん] " },
          { text: "かかる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の この 長[なが]い メールは 全部[ぜんぶ] 翻訳[ほんやく]するのに", blank: true },
          { text: "三時間[さんじかん] " },
          { text: "かかる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の この 長[なが]い メールを 全部[ぜんぶ] 訳[やく]すのに", blank: true },
          { text: "かかる 時間[じかん]は 三時間[さんじかん] " },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の この 長[なが]い メールを 全部[ぜんぶ] 翻訳[ほんやく]するのに", blank: true },
          { text: "かかる 時間[じかん]は 三時間[さんじかん] " },
          { text: "です" },
        ],
      },
    ],
  },
  {
    english: "I need a spoon to eat this curry while watching the movie.",
    hint: "spoon = スプーン; curry = カレー",
    answers: [
      {
        segments: [
          { text: "映画[えいが]を 見[み]ながら この カレーを 食[た]べるのに", blank: true },
          { text: "スプーンが " },
          { text: "要[い]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "映画[えいが]を 見[み]ながら この カレーを 食[た]べるのに", blank: true },
          { text: "スプーンが 必要[ひつよう]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "映画[えいが]を 見[み]ながら この カレーを 食[た]べるのに", blank: true },
          { text: "スプーンを " },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "映画[えいが]を 見[み]ながら この カレーを 食[た]べるのに", blank: true },
          { text: "スプーンが いります" },
        ],
        register: "polite",
      },
    ],
  },
];

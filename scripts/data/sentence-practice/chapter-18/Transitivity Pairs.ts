import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Oh no — I dropped my wallet in the river!",
    hint: "wallet = 財布; river = 川",
    answers: [
      {
        segments: [
          { text: "大変[たいへん]！ 財布[さいふ]を 川[かわ]に" },
          { text: "落[お]とす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "！" },
        ],
      },
      {
        segments: [
          { text: "しまった！ 財布[さいふ]を 川[かわ]に" },
          { text: "落[お]とす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "！" },
        ],
        register: "casual",
        notes: "しまった is a casual exclamation like “oh no” or “oops.”",
      },
      {
        segments: [
          { text: "大変[たいへん]！ 川[かわ]に 財布[さいふ]を" },
          { text: "落[お]とす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "！" },
        ],
        notes: "The 川に phrase can come before 財布を.",
      },
    ],
  },
];

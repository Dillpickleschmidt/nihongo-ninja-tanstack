import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I want to go to the party, but I have a lot of homework.",
    answers: [
      {
        segments: [
          { text: "パーティーに 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 宿題[しゅくだい]が たくさん ある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "explanatory second clause",
      },
      {
        segments: [
          { text: "パーティーに 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 宿題[しゅくだい]が たくさん" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "plain second clause",
      },
    ],
  },
  {
    english: "I'm sorry, I actually don't eat meat.",
    answers: [
      {
        segments: [
          { text: "すみません、 実[じつ]は 肉[にく]を 食[た]べない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + を",
      },
      {
        segments: [
          { text: "すみません、 実[じつ]は 肉[にく]は 食[た]べない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + は",
      },
      {
        segments: [
          { text: "すみません、 肉[にく]を 食[た]べない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "を",
      },
      {
        segments: [
          { text: "すみません、 肉[にく]は 食[た]べない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "は",
      },
    ],
  },
  {
    english: "Actually, I borrowed Kenji's bicycle, but...",
    hint: "Kenji = 健司[けんじ]",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、 健司[けんじ]さんの 自転車[じてんしゃ]を 借[か]りた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、 健司[けんじ]さんの 自転車[じてんしゃ]を 借[か]りた" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、 健司[けんじ]さんの 自転車[じてんしゃ]を 借[か]りた" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、 健司[けんじ]さんの 自転車[じてんしゃ]を 借[か]りた" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + んだけれど",
      },
      {
        segments: [
          { text: "健司[けんじ]さんの 自転車[じてんしゃ]を 借[か]りた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + んです variants",
      },
      {
        segments: [
          { text: "健司[けんじ]さんの 自転車[じてんしゃ]を 借[か]りた" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + んですけれど",
      },
      {
        segments: [
          { text: "健司[けんじ]さんの 自転車[じてんしゃ]を 借[か]りた" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + んですけれども",
      },
      {
        segments: [
          { text: "健司[けんじ]さんの 自転車[じてんしゃ]を 借[か]りた" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + んだけれど",
      },
    ],
  },
  {
    english: "I actually have a test tomorrow, but I haven't studied at all.",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、明日[あした] テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + 明日 + んです variants + explanatory",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした] テストがある" },
          { text: "んですけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日 + んですけれど + explanatory",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした] テストがある" },
          { text: "んですけれども", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日 + んですけれども + explanatory",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした] テストがある" },
          { text: "んだけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "実は + 明日 + んだけれど + explanatory",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした] テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日 + んです variants + plain",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした] テストがある" },
          { text: "んですけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日 + んですけれど + plain",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした] テストがある" },
          { text: "んですけれども", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日 + んですけれども + plain",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした] テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない", blank: true },
        ],
        register: "casual",
        notes: "実は + 明日 + んだけど + plain",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした] テストがある" },
          { text: "んだけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない", blank: true },
        ],
        register: "casual",
        notes: "実は + 明日 + んだけれど + plain",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした]は テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + 明日は + んです variants + explanatory",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした]は テストがある" },
          { text: "んですけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日は + んですけれど + explanatory",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした]は テストがある" },
          { text: "んですけれども", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日は + んですけれども + explanatory",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした]は テストがある" },
          { text: "んだけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "実は + 明日は + んだけれど + explanatory",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした]は テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日は + んです variants + plain",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした]は テストがある" },
          { text: "んですけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日は + んですけれど + plain",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした]は テストがある" },
          { text: "んですけれども", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "実は + 明日は + んですけれども + plain",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした]は テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない", blank: true },
        ],
        register: "casual",
        notes: "実は + 明日は + んだけど + plain",
      },
      {
        segments: [
          { text: "実[じつ]は、明日[あした]は テストがある" },
          { text: "んだけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない", blank: true },
        ],
        register: "casual",
        notes: "実は + 明日は + んだけれど + plain",
      },
      {
        segments: [
          { text: "明日[あした] テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + 明日 + んです variants + explanatory",
      },
      {
        segments: [
          { text: "明日[あした] テストがある" },
          { text: "んですけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日 + んですけれど + explanatory",
      },
      {
        segments: [
          { text: "明日[あした] テストがある" },
          { text: "んですけれども", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日 + んですけれども + explanatory",
      },
      {
        segments: [
          { text: "明日[あした] テストがある" },
          { text: "んだけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 明日 + んだけれど + explanatory",
      },
      {
        segments: [
          { text: "明日[あした] テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日 + んです variants + plain",
      },
      {
        segments: [
          { text: "明日[あした] テストがある" },
          { text: "んですけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日 + んですけれど + plain",
      },
      {
        segments: [
          { text: "明日[あした] テストがある" },
          { text: "んですけれども", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日 + んですけれども + plain",
      },
      {
        segments: [
          { text: "明日[あした] テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 明日 + んだけど + plain",
      },
      {
        segments: [
          { text: "明日[あした] テストがある" },
          { text: "んだけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 明日 + んだけれど + plain",
      },
      {
        segments: [
          { text: "明日[あした]は テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + 明日は + んです variants + explanatory",
      },
      {
        segments: [
          { text: "明日[あした]は テストがある" },
          { text: "んですけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日は + んですけれど + explanatory",
      },
      {
        segments: [
          { text: "明日[あした]は テストがある" },
          { text: "んですけれども", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日は + んですけれども + explanatory",
      },
      {
        segments: [
          { text: "明日[あした]は テストがある" },
          { text: "んだけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 明日は + んだけれど + explanatory",
      },
      {
        segments: [
          { text: "明日[あした]は テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日は + んです variants + plain",
      },
      {
        segments: [
          { text: "明日[あした]は テストがある" },
          { text: "んですけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日は + んですけれど + plain",
      },
      {
        segments: [
          { text: "明日[あした]は テストがある" },
          { text: "んですけれども", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していません", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 明日は + んですけれども + plain",
      },
      {
        segments: [
          { text: "明日[あした]は テストがある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 明日は + んだけど + plain",
      },
      {
        segments: [
          { text: "明日[あした]は テストがある" },
          { text: "んだけれど", blank: true },
          { text: "、全然[ぜんぜん] 勉強[べんきょう]していない", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 明日は + んだけれど + plain",
      },
    ],
  },
  {
    english: "Actually, I'm a little hungry, but...",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、ちょっと おなかが すいている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + ちょっと before noun + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、ちょっと おなかが すいている" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + ちょっと before noun + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、ちょっと おなかが すいている" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + ちょっと before noun + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、ちょっと おなかが すいている" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + ちょっと before noun + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、少し[すこし] おなかが すいている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + 少し before noun + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、少し[すこし] おなかが すいている" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 少し before noun + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、少し[すこし] おなかが すいている" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 少し before noun + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、少し[すこし] おなかが すいている" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + 少し before noun + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、おなかが ちょっと すいている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + ちょっと before verb + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、おなかが ちょっと すいている" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + ちょっと before verb + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、おなかが ちょっと すいている" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + ちょっと before verb + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、おなかが ちょっと すいている" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + ちょっと before verb + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、おなかが 少し[すこし] すいている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + 少し before verb + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、おなかが 少し[すこし] すいている" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 少し before verb + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、おなかが 少し[すこし] すいている" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 少し before verb + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、おなかが 少し[すこし] すいている" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + 少し before verb + んだけれど",
      },
      {
        segments: [
          { text: "ちょっと おなかが すいている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + ちょっと before noun + んです variants",
      },
      {
        segments: [
          { text: "ちょっと おなかが すいている" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + ちょっと before noun + んですけれど",
      },
      {
        segments: [
          { text: "ちょっと おなかが すいている" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + ちょっと before noun + んですけれども",
      },
      {
        segments: [
          { text: "ちょっと おなかが すいている" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + ちょっと before noun + んだけれど",
      },
      {
        segments: [
          { text: "少し[すこし] おなかが すいている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + 少し before noun + んです variants",
      },
      {
        segments: [
          { text: "少し[すこし] おなかが すいている" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 少し before noun + んですけれど",
      },
      {
        segments: [
          { text: "少し[すこし] おなかが すいている" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 少し before noun + んですけれども",
      },
      {
        segments: [
          { text: "少し[すこし] おなかが すいている" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + 少し before noun + んだけれど",
      },
      {
        segments: [
          { text: "おなかが ちょっと すいている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + ちょっと before verb + んです variants",
      },
      {
        segments: [
          { text: "おなかが ちょっと すいている" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + ちょっと before verb + んですけれど",
      },
      {
        segments: [
          { text: "おなかが ちょっと すいている" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + ちょっと before verb + んですけれども",
      },
      {
        segments: [
          { text: "おなかが ちょっと すいている" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + ちょっと before verb + んだけれど",
      },
      {
        segments: [
          { text: "おなかが 少し[すこし] すいている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + 少し before verb + んです variants",
      },
      {
        segments: [
          { text: "おなかが 少し[すこし] すいている" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 少し before verb + んですけれど",
      },
      {
        segments: [
          { text: "おなかが 少し[すこし] すいている" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 少し before verb + んですけれども",
      },
      {
        segments: [
          { text: "おなかが 少し[すこし] すいている" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + 少し before verb + んだけれど",
      },
    ],
  },
  {
    english: "I'm sorry, I can't go on Saturday. I have a part-time job.",
    answers: [
      {
        segments: [
          { text: "すみません、土曜日[どようび]は 行[い]けない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "。アルバイトがある", blank: true },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "土曜日は + アルバイト",
      },
      {
        segments: [
          { text: "すみません、土曜日[どようび]は 行[い]けない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "。バイトがある", blank: true },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "土曜日は + バイト",
      },
      {
        segments: [
          { text: "すみません、土曜日[どようび]に 行[い]けない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "。アルバイトがある", blank: true },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "土曜日に + アルバイト",
      },
      {
        segments: [
          { text: "すみません、土曜日[どようび]に 行[い]けない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "。バイトがある", blank: true },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "土曜日に + バイト",
      },
    ],
  },
  {
    english: "I'm going to the park on Sunday, but do you want to come, Saki?",
    hint: "Saki = 咲[さき]",
    answers: [
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 咲[さき]さんも" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "日曜日に + name second",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 咲[さき]さんも 一緒[いっしょ]に" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "日曜日に + name second + 一緒に",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 一緒[いっしょ]に" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "日曜日に + 一緒に",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 咲[さき]さんも" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "日曜日は + name second",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 咲[さき]さんも 一緒[いっしょ]に" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "日曜日は + name second + 一緒に",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 一緒[いっしょ]に" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "日曜日は + 一緒に",
      },
      {
        segments: [
          { text: "咲[さき]さん、日曜日[にちようび]に 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 一緒[いっしょ]に" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "vocative first + 日曜日に + 一緒に",
      },
      {
        segments: [
          { text: "咲[さき]さん、日曜日[にちようび]に 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "vocative first + 日曜日に + no 一緒に",
      },
      {
        segments: [
          { text: "咲[さき]さん、日曜日[にちようび]は 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、 一緒[いっしょ]に" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "vocative first + 日曜日は + 一緒に",
      },
      {
        segments: [
          { text: "咲[さき]さん、日曜日[にちようび]は 公園[こうえん]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "vocative first + 日曜日は + no 一緒に",
      },
    ],
  },
  {
    english: "Are you going on a trip, Daiki?",
    hint: "Daiki = 大輝[だいき]",
    answers: [
      {
        segments: [
          { text: "大輝[だいき]さん、旅行[りょこう]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "か", blank: true },
        ],
        notes: "vocative + 旅行に行く",
      },
      {
        segments: [
          { text: "大輝[だいき]さんは、 旅行[りょこう]に 行[い]く" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "か", blank: true },
        ],
        notes: "topic + 旅行に行く",
      },
      {
        segments: [
          { text: "旅行[りょこう]に 行[い]く" },
          { text: "んですか", blank: true },
          { text: "、 大輝[だいき]さん" },
        ],
        register: "polite",
        notes: "postposed + 旅行に行く + んですか",
      },
      {
        segments: [
          { text: "旅行[りょこう]に 行[い]く" },
          { text: "のですか", blank: true },
          { text: "、 大輝[だいき]さん" },
        ],
        register: "polite",
        notes: "postposed + 旅行に行く + のですか",
      },
      {
        segments: [
          { text: "旅行[りょこう]に 行[い]く" },
          { text: "の", blank: true },
          { text: "、 大輝[だいき]さん" },
        ],
        register: "casual",
        notes: "postposed + 旅行に行く + の",
      },
      {
        segments: [
          { text: "大輝[だいき]さん、旅行[りょこう]する" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "か", blank: true },
        ],
        notes: "vocative + 旅行する",
      },
      {
        segments: [
          { text: "大輝[だいき]さんは、 旅行[りょこう]する" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "か", blank: true },
        ],
        notes: "topic + 旅行する",
      },
      {
        segments: [
          { text: "旅行[りょこう]する" },
          { text: "んですか", blank: true },
          { text: "、 大輝[だいき]さん" },
        ],
        register: "polite",
        notes: "postposed + 旅行する + んですか",
      },
      {
        segments: [
          { text: "旅行[りょこう]する" },
          { text: "のですか", blank: true },
          { text: "、 大輝[だいき]さん" },
        ],
        register: "polite",
        notes: "postposed + 旅行する + のですか",
      },
      {
        segments: [
          { text: "旅行[りょこう]する" },
          { text: "の", blank: true },
          { text: "、 大輝[だいき]さん" },
        ],
        register: "casual",
        notes: "postposed + 旅行する + の",
      },
    ],
  },
  {
    english: "Actually, I lost my wallet, but...",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、財布[さいふ]を なくした" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + なくした + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、財布[さいふ]を なくした" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + なくした + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、財布[さいふ]を なくした" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + なくした + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、財布[さいふ]を なくした" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + なくした + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、財布[さいふ]が なくなった" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + なくなった + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、財布[さいふ]が なくなった" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + なくなった + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、財布[さいふ]が なくなった" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + なくなった + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、財布[さいふ]が なくなった" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + なくなった + んだけれど",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくした" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + なくした + んです variants",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくした" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + なくした + んですけれど",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくした" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + なくした + んですけれども",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくした" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + なくした + んだけれど",
      },
      {
        segments: [
          { text: "財布[さいふ]が なくなった" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + なくなった + んです variants",
      },
      {
        segments: [
          { text: "財布[さいふ]が なくなった" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + なくなった + んですけれど",
      },
      {
        segments: [
          { text: "財布[さいふ]が なくなった" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + なくなった + んですけれども",
      },
      {
        segments: [
          { text: "財布[さいふ]が なくなった" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + なくなった + んだけれど",
      },
    ],
  },
  {
    english: "Actually, this movie is really scary!",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、この 映画[えいが]、 本当[ほんとう]に 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + comma topic + 本当に",
      },
      {
        segments: [
          { text: "実[じつ]は、この 映画[えいが]、 すごく 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + comma topic + すごく",
      },
      {
        segments: [
          { text: "実[じつ]は、この 映画[えいが]、 とても 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + comma topic + とても",
      },
      {
        segments: [
          { text: "実[じつ]は、この 映画[えいが]は 本当[ほんとう]に 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + は + 本当に",
      },
      {
        segments: [
          { text: "実[じつ]は、この 映画[えいが]は すごく 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + は + すごく",
      },
      {
        segments: [
          { text: "実[じつ]は、この 映画[えいが]は とても 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + は + とても",
      },
      {
        segments: [
          { text: "この 映画[えいが]、 本当[ほんとう]に 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + comma topic + 本当に",
      },
      {
        segments: [
          { text: "この 映画[えいが]、 すごく 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + comma topic + すごく",
      },
      {
        segments: [
          { text: "この 映画[えいが]、 とても 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + comma topic + とても",
      },
      {
        segments: [
          { text: "この 映画[えいが]は 本当[ほんとう]に 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + は + 本当に",
      },
      {
        segments: [
          { text: "この 映画[えいが]は すごく 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + は + すごく",
      },
      {
        segments: [
          { text: "この 映画[えいが]は とても 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + は + とても",
      },
    ],
  },
  {
    english: "I'm actually tired, but is it okay if I rest for a bit?",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "実は + 疲れている + ちょっと + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れている" },
          { text: "んですけれど", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "実は + 疲れている + ちょっと + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れている" },
          { text: "んですけれども", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "実は + 疲れている + ちょっと + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れている" },
          { text: "んだけれど", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "casual",
        notes: "実は + 疲れている + ちょっと + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "実は + 疲れている + 少し + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れている" },
          { text: "んですけれど", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "実は + 疲れている + 少し + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れている" },
          { text: "んですけれども", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "実は + 疲れている + 少し + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れている" },
          { text: "んだけれど", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "casual",
        notes: "実は + 疲れている + 少し + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "実は + 疲れた + ちょっと + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れた" },
          { text: "んですけれど", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "実は + 疲れた + ちょっと + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れた" },
          { text: "んですけれども", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "実は + 疲れた + ちょっと + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れた" },
          { text: "んだけれど", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "casual",
        notes: "実は + 疲れた + ちょっと + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "実は + 疲れた + 少し + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れた" },
          { text: "んですけれど", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "実は + 疲れた + 少し + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れた" },
          { text: "んですけれども", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "実は + 疲れた + 少し + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、疲[つか]れた" },
          { text: "んだけれど", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "casual",
        notes: "実は + 疲れた + 少し + んだけれど",
      },
      {
        segments: [
          { text: "疲[つか]れている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "no 実は + 疲れている + ちょっと + んです variants",
      },
      {
        segments: [
          { text: "疲[つか]れている" },
          { text: "んですけれど", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 疲れている + ちょっと + んですけれど",
      },
      {
        segments: [
          { text: "疲[つか]れている" },
          { text: "んですけれども", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 疲れている + ちょっと + んですけれども",
      },
      {
        segments: [
          { text: "疲[つか]れている" },
          { text: "んだけれど", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 疲れている + ちょっと + んだけれど",
      },
      {
        segments: [
          { text: "疲[つか]れている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "no 実は + 疲れている + 少し + んです variants",
      },
      {
        segments: [
          { text: "疲[つか]れている" },
          { text: "んですけれど", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 疲れている + 少し + んですけれど",
      },
      {
        segments: [
          { text: "疲[つか]れている" },
          { text: "んですけれども", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 疲れている + 少し + んですけれども",
      },
      {
        segments: [
          { text: "疲[つか]れている" },
          { text: "んだけれど", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 疲れている + 少し + んだけれど",
      },
      {
        segments: [
          { text: "疲[つか]れた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "no 実は + 疲れた + ちょっと + んです variants",
      },
      {
        segments: [
          { text: "疲[つか]れた" },
          { text: "んですけれど", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 疲れた + ちょっと + んですけれど",
      },
      {
        segments: [
          { text: "疲[つか]れた" },
          { text: "んですけれども", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 疲れた + ちょっと + んですけれども",
      },
      {
        segments: [
          { text: "疲[つか]れた" },
          { text: "んだけれど", blank: true },
          { text: "、ちょっと 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 疲れた + ちょっと + んだけれど",
      },
      {
        segments: [
          { text: "疲[つか]れた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        notes: "no 実は + 疲れた + 少し + んです variants",
      },
      {
        segments: [
          { text: "疲[つか]れた" },
          { text: "んですけれど", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 疲れた + 少し + んですけれど",
      },
      {
        segments: [
          { text: "疲[つか]れた" },
          { text: "んですけれども", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "polite",
        notes: "no 実は + 疲れた + 少し + んですけれども",
      },
      {
        segments: [
          { text: "疲[つか]れた" },
          { text: "んだけれど", blank: true },
          { text: "、少し[すこし] 休[やす]んでも" },
          { text: "よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か", blank: true },
        ],
        register: "casual",
        notes: "no 実は + 疲れた + 少し + んだけれど",
      },
    ],
  },
  {
    english: "Actually, Hana and her boyfriend just broke up.",
    hint: "Hana = 花[はな]",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、花[はな]さんは 彼氏[かれし]と さっき 別[わか]れた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + Hana subject",
      },
      {
        segments: [
          { text: "実[じつ]は、花[はな]さんと 彼氏[かれし]が さっき 別[わか]れた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + couple subject",
      },
      {
        segments: [
          { text: "花[はな]さんは 彼氏[かれし]と さっき 別[わか]れた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + Hana subject",
      },
      {
        segments: [
          { text: "花[はな]さんと 彼氏[かれし]が さっき 別[わか]れた" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + couple subject",
      },
    ],
  },
  {
    english: "Excuse me, I'm actually looking for the library, but could you tell me where it is?",
    answers: [
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "探している + どこにあるか + いただけますか + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "んですけれど", blank: true },
          { text: "、どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "探している + どこにあるか + いただけますか + んですけれど",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "んですけれども", blank: true },
          { text: "、どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "探している + どこにあるか + いただけますか + んですけれども",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "探している + 図書館がどこにあるか + いただけますか + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "んですけれど", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "探している + 図書館がどこにあるか + いただけますか + んですけれど",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "んですけれども", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "探している + 図書館がどこにあるか + いただけますか + んですけれども",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえますか", blank: true },
        ],
        register: "polite",
        notes: "探している + どこにあるか + もらえますか + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "んですけれど", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえますか", blank: true },
        ],
        register: "polite",
        notes: "探している + どこにあるか + もらえますか + んですけれど",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "んですけれども", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえますか", blank: true },
        ],
        register: "polite",
        notes: "探している + どこにあるか + もらえますか + んですけれども",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえる？", blank: true },
        ],
        register: "casual",
        notes: "探している + どこにあるか + もらえる + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "んだけれど", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえる？", blank: true },
        ],
        register: "casual",
        notes: "探している + どこにあるか + もらえる + んだけれど",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えてもらえる？", blank: true },
        ],
        register: "casual",
        notes: "探している + 図書館がどこにあるか + もらえる + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を 探[さが]している" },
          { text: "んだけれど", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えてもらえる？", blank: true },
        ],
        register: "casual",
        notes: "探している + 図書館がどこにあるか + もらえる + んだけれど",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "行きたい + どこにあるか + いただけますか + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "行きたい + どこにあるか + いただけますか + んですけれど",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "行きたい + どこにあるか + いただけますか + んですけれども",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "行きたい + 図書館がどこにあるか + いただけますか + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "行きたい + 図書館がどこにあるか + いただけますか + んですけれど",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えていただけますか", blank: true },
        ],
        register: "polite",
        notes: "行きたい + 図書館がどこにあるか + いただけますか + んですけれども",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえますか", blank: true },
        ],
        register: "polite",
        notes: "行きたい + どこにあるか + もらえますか + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえますか", blank: true },
        ],
        register: "polite",
        notes: "行きたい + どこにあるか + もらえますか + んですけれど",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえますか", blank: true },
        ],
        register: "polite",
        notes: "行きたい + どこにあるか + もらえますか + んですけれども",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえる？", blank: true },
        ],
        register: "casual",
        notes: "行きたい + どこにあるか + もらえる + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、どこに あるか 教[おし]えてもらえる？", blank: true },
        ],
        register: "casual",
        notes: "行きたい + どこにあるか + もらえる + んだけれど",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えてもらえる？", blank: true },
        ],
        register: "casual",
        notes: "行きたい + 図書館がどこにあるか + もらえる + んです variants",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、図書館[としょかん]が どこに あるか 教[おし]えてもらえる？", blank: true },
        ],
        register: "casual",
        notes: "行きたい + 図書館がどこにあるか + もらえる + んだけれど",
      },
    ],
  },
  {
    english: "Actually, I'm really into karaoke!",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、カラオケが 大好[だいす]きな" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + 大好き",
      },
      {
        segments: [
          { text: "実[じつ]は、カラオケが すごく 好[す]きな" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + すごく好き",
      },
      {
        segments: [
          { text: "実[じつ]は、カラオケに はまっている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + はまっている; はまる = to be into",
      },
      {
        segments: [
          { text: "カラオケが 大好[だいす]きな" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + 大好き",
      },
      {
        segments: [
          { text: "カラオケが すごく 好[す]きな" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + すごく好き",
      },
      {
        segments: [
          { text: "カラオケに はまっている" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + はまっている; はまる = to be into",
      },
    ],
  },
  {
    english: "Actually, the dormitory is really cramped, but...",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は 本当[ほんとう]に 狭[せま]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + 本当に + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は 本当[ほんとう]に 狭[せま]い" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 本当に + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は 本当[ほんとう]に 狭[せま]い" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 本当に + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は 本当[ほんとう]に 狭[せま]い" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + 本当に + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は すごく 狭[せま]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + すごく + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は すごく 狭[せま]い" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + すごく + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は すごく 狭[せま]い" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + すごく + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は すごく 狭[せま]い" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + すごく + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は とても 狭[せま]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + とても + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は とても 狭[せま]い" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + とても + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は とても 狭[せま]い" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + とても + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、寮[りょう]は とても 狭[せま]い" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + とても + んだけれど",
      },
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + 本当に + んです variants",
      },
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 本当に + んですけれど",
      },
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 本当に + んですけれども",
      },
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + 本当に + んだけれど",
      },
      {
        segments: [
          { text: "寮[りょう]は すごく 狭[せま]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + すごく + んです variants",
      },
      {
        segments: [
          { text: "寮[りょう]は すごく 狭[せま]い" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + すごく + んですけれど",
      },
      {
        segments: [
          { text: "寮[りょう]は すごく 狭[せま]い" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + すごく + んですけれども",
      },
      {
        segments: [
          { text: "寮[りょう]は すごく 狭[せま]い" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + すごく + んだけれど",
      },
      {
        segments: [
          { text: "寮[りょう]は とても 狭[せま]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + とても + んです variants",
      },
      {
        segments: [
          { text: "寮[りょう]は とても 狭[せま]い" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + とても + んですけれど",
      },
      {
        segments: [
          { text: "寮[りょう]は とても 狭[せま]い" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + とても + んですけれども",
      },
      {
        segments: [
          { text: "寮[りょう]は とても 狭[せま]い" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + とても + んだけれど",
      },
    ],
  },
  {
    english: "Rin, do you have a fever?",
    hint: "Rin = 凛[りん]",
    answers: [
      {
        segments: [
          { text: "凛[りん]さん、熱[ねつ]が ある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "か", blank: true },
        ],
        notes: "vocative",
      },
      {
        segments: [
          { text: "凛[りん]さんは 熱[ねつ]が ある" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "か", blank: true },
        ],
        notes: "topic",
      },
      {
        segments: [
          { text: "熱[ねつ]が ある" },
          { text: "んですか", blank: true },
          { text: "、 凛[りん]さん" },
        ],
        register: "polite",
        notes: "postposed + んですか",
      },
      {
        segments: [
          { text: "熱[ねつ]が ある" },
          { text: "のですか", blank: true },
          { text: "、 凛[りん]さん" },
        ],
        register: "polite",
        notes: "postposed + のですか",
      },
      {
        segments: [
          { text: "熱[ねつ]が ある" },
          { text: "の", blank: true },
          { text: "、 凛[りん]さん" },
        ],
        register: "casual",
        notes: "postposed + の",
      },
    ],
  },
  {
    english: "Actually, I want to use Yuki's dictionary, but...",
    hint: "Yuki = 結希[ゆき]",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、結希[ゆき]さんの 辞書[じしょ]を 使[つか]いたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + 使いたい + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、結希[ゆき]さんの 辞書[じしょ]を 使[つか]いたい" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 使いたい + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、結希[ゆき]さんの 辞書[じしょ]を 使[つか]いたい" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 使いたい + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、結希[ゆき]さんの 辞書[じしょ]を 使[つか]いたい" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + 使いたい + んだけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、結希[ゆき]さんの 辞書[じしょ]を 借[か]りたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "実は + 借りたい + んです variants",
      },
      {
        segments: [
          { text: "実[じつ]は、結希[ゆき]さんの 辞書[じしょ]を 借[か]りたい" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 借りたい + んですけれど",
      },
      {
        segments: [
          { text: "実[じつ]は、結希[ゆき]さんの 辞書[じしょ]を 借[か]りたい" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "実は + 借りたい + んですけれども",
      },
      {
        segments: [
          { text: "実[じつ]は、結希[ゆき]さんの 辞書[じしょ]を 借[か]りたい" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "実は + 借りたい + んだけれど",
      },
      {
        segments: [
          { text: "結希[ゆき]さんの 辞書[じしょ]を 使[つか]いたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + 使いたい + んです variants",
      },
      {
        segments: [
          { text: "結希[ゆき]さんの 辞書[じしょ]を 使[つか]いたい" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 使いたい + んですけれど",
      },
      {
        segments: [
          { text: "結希[ゆき]さんの 辞書[じしょ]を 使[つか]いたい" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 使いたい + んですけれども",
      },
      {
        segments: [
          { text: "結希[ゆき]さんの 辞書[じしょ]を 使[つか]いたい" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + 使いたい + んだけれど",
      },
      {
        segments: [
          { text: "結希[ゆき]さんの 辞書[じしょ]を 借[か]りたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "…" },
        ],
        notes: "no 実は + 借りたい + んです variants",
      },
      {
        segments: [
          { text: "結希[ゆき]さんの 辞書[じしょ]を 借[か]りたい" },
          { text: "んですけれど", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 借りたい + んですけれど",
      },
      {
        segments: [
          { text: "結希[ゆき]さんの 辞書[じしょ]を 借[か]りたい" },
          { text: "んですけれども", blank: true },
          { text: "…" },
        ],
        register: "polite",
        notes: "no 実は + 借りたい + んですけれども",
      },
      {
        segments: [
          { text: "結希[ゆき]さんの 辞書[じしょ]を 借[か]りたい" },
          { text: "んだけれど", blank: true },
          { text: "…" },
        ],
        register: "casual",
        notes: "no 実は + 借りたい + んだけれど",
      },
    ],
  },
  {
    english: "Actually, I want to buy a new camera, but I don't have enough money.",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、新[あたら]しい カメラを 買[か]いたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですけれど", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + んですけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですけれども", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + んですけれども + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、新[あたら]しい カメラを 買[か]いたい" },
          { text: "んだけれど", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "実は + んだけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですが", blank: true },
          { text: "、お 金[かね]が 足[た]りません" },
        ],
        register: "polite",
        notes: "実は + んですが + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですけれど", blank: true },
          { text: "、お 金[かね]が 足[た]りません" },
        ],
        register: "polite",
        notes: "実は + んですけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですけれども", blank: true },
          { text: "、お 金[かね]が 足[た]りません" },
        ],
        register: "polite",
        notes: "実は + んですけれども + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、新[あたら]しい カメラを 買[か]いたい" },
          { text: "んだけれど", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
        ],
        register: "casual",
        notes: "実は + んだけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、新[あたら]しい カメラを 買[か]いたい" },
          { text: "んだけど", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
        ],
        register: "casual",
        notes: "実は + んだけど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを 買[か]いたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + explanatory second clause",
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですけれど", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + んですけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですけれども", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + んですけれども + explanatory second clause",
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを 買[か]いたい" },
          { text: "んだけれど", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "no 実は + んだけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですが", blank: true },
          { text: "、お 金[かね]が 足[た]りません" },
        ],
        register: "polite",
        notes: "no 実は + んですが + non-explanatory second clause",
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですけれど", blank: true },
          { text: "、お 金[かね]が 足[た]りません" },
        ],
        register: "polite",
        notes: "no 実は + んですけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを 買[か]いたい" },
          { text: "んですけれども", blank: true },
          { text: "、お 金[かね]が 足[た]りません" },
        ],
        register: "polite",
        notes: "no 実は + んですけれども + non-explanatory second clause",
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを 買[か]いたい" },
          { text: "んだけれど", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
        ],
        register: "casual",
        notes: "no 実は + んだけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを 買[か]いたい" },
          { text: "んだけど", blank: true },
          { text: "、お 金[かね]が 足[た]りない" },
        ],
        register: "casual",
        notes: "no 実は + んだけど + non-explanatory second clause",
      },
    ],
  },
  {
    english: "Actually, Kenji is a firefighter!",
    hint: "Kenji = 健司[けんじ]",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、健司[けんじ]さんは 消防士[しょうぼうし]な" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は",
      },
      {
        segments: [
          { text: "健司[けんじ]さんは 消防士[しょうぼうし]な" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は",
      },
    ],
  },
  {
    english: "Actually, I want to go to the concert, but I don't have a ticket.",
    answers: [
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、チケットが ない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + ticket absent + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、チケットが ない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + ticket absent + んですけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、チケットが ない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + ticket absent + んですけれども + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、チケットが ない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "実は + ticket absent + んだけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですが", blank: true },
          { text: "、チケットが ありません" },
        ],
        register: "polite",
        notes: "実は + ticket absent + んですが + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、チケットが ありません" },
        ],
        register: "polite",
        notes: "実は + ticket absent + んですけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、チケットが ありません" },
        ],
        register: "polite",
        notes: "実は + ticket absent + んですけれども + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、チケットが ない" },
        ],
        register: "casual",
        notes: "実は + ticket absent + んだけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んだけど", blank: true },
          { text: "、チケットが ない" },
        ],
        register: "casual",
        notes: "実は + ticket absent + んだけど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、チケットを 持[も]っていない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "実は + not holding ticket + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、チケットを 持[も]っていない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + not holding ticket + んですけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、チケットを 持[も]っていない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "実は + not holding ticket + んですけれども + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、チケットを 持[も]っていない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "実は + not holding ticket + んだけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですが", blank: true },
          { text: "、チケットを 持[も]っていません" },
        ],
        register: "polite",
        notes: "実は + not holding ticket + んですが + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、チケットを 持[も]っていません" },
        ],
        register: "polite",
        notes: "実は + not holding ticket + んですけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、チケットを 持[も]っていません" },
        ],
        register: "polite",
        notes: "実は + not holding ticket + んですけれども + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、チケットを 持[も]っていない" },
        ],
        register: "casual",
        notes: "実は + not holding ticket + んだけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "実[じつ]は、コンサートに 行[い]きたい" },
          { text: "んだけど", blank: true },
          { text: "、チケットを 持[も]っていない" },
        ],
        register: "casual",
        notes: "実は + not holding ticket + んだけど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、チケットが ない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + ticket absent + explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、チケットが ない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + ticket absent + んですけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、チケットが ない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + ticket absent + んですけれども + explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、チケットが ない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "no 実は + ticket absent + んだけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですが", blank: true },
          { text: "、チケットが ありません" },
        ],
        register: "polite",
        notes: "no 実は + ticket absent + んですが + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、チケットが ありません" },
        ],
        register: "polite",
        notes: "no 実は + ticket absent + んですけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、チケットが ありません" },
        ],
        register: "polite",
        notes: "no 実は + ticket absent + んですけれども + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、チケットが ない" },
        ],
        register: "casual",
        notes: "no 実は + ticket absent + んだけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んだけど", blank: true },
          { text: "、チケットが ない" },
        ],
        register: "casual",
        notes: "no 実は + ticket absent + んだけど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "が", blank: true },
          { text: "、チケットを 持[も]っていない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "no 実は + not holding ticket + explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、チケットを 持[も]っていない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + not holding ticket + んですけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、チケットを 持[も]っていない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "polite",
        notes: "no 実は + not holding ticket + んですけれども + explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、チケットを 持[も]っていない" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        register: "casual",
        notes: "no 実は + not holding ticket + んだけれど + explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですが", blank: true },
          { text: "、チケットを 持[も]っていません" },
        ],
        register: "polite",
        notes: "no 実は + not holding ticket + んですが + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですけれど", blank: true },
          { text: "、チケットを 持[も]っていません" },
        ],
        register: "polite",
        notes: "no 実は + not holding ticket + んですけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んですけれども", blank: true },
          { text: "、チケットを 持[も]っていません" },
        ],
        register: "polite",
        notes: "no 実は + not holding ticket + んですけれども + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んだけれど", blank: true },
          { text: "、チケットを 持[も]っていない" },
        ],
        register: "casual",
        notes: "no 実は + not holding ticket + んだけれど + non-explanatory second clause",
      },
      {
        segments: [
          { text: "コンサートに 行[い]きたい" },
          { text: "んだけど", blank: true },
          { text: "、チケットを 持[も]っていない" },
        ],
        register: "casual",
        notes: "no 実は + not holding ticket + んだけど + non-explanatory second clause",
      },
    ],
  },
];

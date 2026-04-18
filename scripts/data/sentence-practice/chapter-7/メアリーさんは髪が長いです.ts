import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Kenji's older brother has really big eyes.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんのお 兄[にい]さんは" },
          { text: "目[め]が", blank: true },
          { text: "すごく" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "けんじさんのお 兄[にい]さんは" },
          { text: "目[め]が", blank: true },
          { text: "とても" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "My older sister has short hair.",
    answers: [
      {
        segments: [
          { text: "姉[あね]は" },
          { text: "髪[かみ]が", blank: true },
          {
            text: "短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 姉[あね]は" },
          { text: "髪[かみ]が", blank: true },
          {
            text: "短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私の",
      },
    ],
  },
  {
    english: "My younger brother has a really big mouth.",
    answers: [
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "口[くち]が", blank: true },
          { text: "すごく" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "口[くち]が", blank: true },
          { text: "とても" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "My mother has really beautiful eyes.",
    answers: [
      {
        segments: [
          { text: "母[はは]は" },
          { text: "目[め]が", blank: true },
          { text: "すごく" },
          {
            text: "きれい",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "My older brother has really long legs.",
    answers: [
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "足[あし]が", blank: true },
          { text: "すごく" },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "足[あし]が", blank: true },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without すごく",
      },
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "足[あし]が", blank: true },
          { text: "とても" },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "My grandmother has really cute hands.",
    answers: [
      {
        segments: [
          { text: "おばあさんは" },
          { text: "手[て]が", blank: true },
          { text: "すごく" },
          {
            text: "かわいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "おばあさんは" },
          { text: "手[て]が", blank: true },
          {
            text: "かわいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without すごく",
      },
    ],
  },
  {
    english: "My father has really broad shoulders.",
    answers: [
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "肩[かた]が", blank: true },
          { text: "すごく" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "肩幅[かたはば]が", blank: true },
          { text: "とても" },
          {
            text: "広[ひろ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "肩幅が広い (shoulder width is broad) — more idiomatic for \"broad shoulders\"",
      },
      {
        segments: [
          { text: "父[ちち]はすごく" },
          { text: "肩[かた]が", blank: true },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "すごく moved before 肩が",
      },
    ],
  },
  {
    english: "My younger sister has really cute ears.",
    answers: [
      {
        segments: [
          { text: "妹[いもうと]は" },
          { text: "耳[みみ]が", blank: true },
          { text: "すごく" },
          {
            text: "かわいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は" },
          { text: "耳[みみ]が", blank: true },
          { text: "すごく" },
          {
            text: "かわいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私の",
      },
    ],
  },
  {
    english: "My grandmother has really long fingers.",
    answers: [
      {
        segments: [
          { text: "おばあさんは" },
          { text: "指[ゆび]が", blank: true },
          { text: "すごく" },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "おばあさんは" },
          { text: "指[ゆび]が", blank: true },
          { text: "とても" },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "My grandfather has a really big nose.",
    answers: [
      {
        segments: [
          { text: "おじいさんは" },
          { text: "鼻[はな]が", blank: true },
          { text: "すごく" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "おじいさんは" },
          { text: "鼻[はな]が", blank: true },
          { text: "とても" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "My older sister has really long fingers.",
    answers: [
      {
        segments: [
          { text: "姉[あね]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "すごく" },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "姉[あね]は" },
          { text: "指[ゆび]が", blank: true },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 姉[あね]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "すごく" },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "姉[あね]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "とても" },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 姉[あね]は" },
          { text: "指[ゆび]が", blank: true },
          {
            text: "長[なが]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私の + without すごく",
      },
    ],
  },
  {
    english: "My grandfather has really short legs.",
    answers: [
      {
        segments: [
          { text: "おじいさんは" },
          { text: "足[あし]が", blank: true },
          { text: "すごく" },
          {
            text: "短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "おじいさんは" },
          { text: "足[あし]が", blank: true },
          {
            text: "短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without すごく",
      },
    ],
  },
  {
    english: "My father has a really fast car.",
    answers: [
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "車[くるま]が", blank: true },
          { text: "すごく" },
          {
            text: "速[はや]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "車[くるま]が", blank: true },
          { text: "とても" },
          {
            text: "速[はや]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "My older sister has a really cute face.",
    answers: [
      {
        segments: [
          { text: "姉[あね]は" },
          { text: "顔[かお]が", blank: true },
          { text: "すごく" },
          {
            text: "かわいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "姉[あね]は" },
          { text: "顔[かお]が", blank: true },
          {
            text: "かわいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without すごく",
      },
    ],
  },
  {
    english: "My grandfather has really big ears.",
    answers: [
      {
        segments: [
          { text: "おじいさんは" },
          { text: "耳[みみ]が", blank: true },
          { text: "すごく" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "おじいさんは" },
          { text: "耳[みみ]が", blank: true },
          { text: "とても" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "My younger brother has really short fingers.",
    answers: [
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "すごく" },
          {
            text: "短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "指[ゆび]が", blank: true },
          {
            text: "短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without すごく",
      },
    ],
  },
  {
    english: "My mother has a really fast car.",
    answers: [
      {
        segments: [
          { text: "母[はは]は" },
          { text: "車[くるま]が", blank: true },
          { text: "すごく" },
          {
            text: "速[はや]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "母[はは]は" },
          { text: "車[くるま]が", blank: true },
          { text: "とても" },
          {
            text: "速[はや]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "My grandfather has a really big stomach.",
    answers: [
      {
        segments: [
          { text: "おじいさんは" },
          { text: "おなかが", blank: true },
          { text: "すごく" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "おじいさんは" },
          { text: "おなかが", blank: true },
          { text: "とても" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "My younger sister has really beautiful hair.",
    answers: [
      {
        segments: [
          { text: "妹[いもうと]は" },
          { text: "髪[かみ]が", blank: true },
          { text: "すごく" },
          {
            text: "きれい",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "妹[いもうと]は" },
          { text: "髪[かみ]が", blank: true },
          {
            text: "きれい",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without すごく",
      },
      {
        segments: [
          { text: "妹[いもうと]は" },
          { text: "髪[かみ]が", blank: true },
          { text: "本当[ほんとう]に" },
          {
            text: "きれい",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "本当に instead of すごく",
      },
    ],
  },
  {
    english: "My father has really big hands.",
    answers: [
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "手[て]が", blank: true },
          { text: "すごく" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "手[て]が", blank: true },
          { text: "とても" },
          {
            text: "大[おお]きい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
]

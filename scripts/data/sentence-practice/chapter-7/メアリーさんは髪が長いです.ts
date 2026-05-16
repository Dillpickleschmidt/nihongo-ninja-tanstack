import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Yosuke's older brother has really big eyes.",
    hint: "Yosuke = 陽介 (ようすけ)",
    answers: [
      {
        segments: [
          { text: "陽介[ようすけ]さんのお 兄[にい]さんは" },
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
          { text: "陽介[ようすけ]さんのお 兄[にい]さんは" },
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
      {
        segments: [
          { text: "陽介[ようすけ]さんのお 兄[にい]さんは" },
          { text: "目[め]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんのお 兄[にい]さんは" },
          { text: "目[め]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
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
      {
        segments: [
          { text: "姉[あね]は" },
          { text: "髪[かみ]が", blank: true },
          {
            text: "短[みじか]め",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "短め instead of 短い",
      },
      {
        segments: [
          { text: "私[わたし]の 姉[あね]は" },
          { text: "髪[かみ]が", blank: true },
          {
            text: "短[みじか]め",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私の + 短め",
      },
    ],
  },
  {
    english: "My younger brother's mouth is really big.",
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
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "口[くち]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "口[くち]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]は" },
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
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]は" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]は" },
          { text: "口[くち]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]は" },
          { text: "口[くち]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
      },
    ],
  },
  {
    english: "My mother's eyes are really beautiful.",
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
      {
        segments: [
          { text: "母[はは]は" },
          { text: "目[め]が", blank: true },
          { text: "とても" },
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
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "母[はは]は" },
          { text: "目[め]が", blank: true },
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
      {
        segments: [
          { text: "母[はは]は" },
          { text: "目[め]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 母[はは]は" },
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
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 母[はは]は" },
          { text: "目[め]が", blank: true },
          { text: "とても" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 母[はは]は" },
          { text: "目[め]が", blank: true },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 母[はは]は" },
          { text: "目[め]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
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
          { text: "兄[あに]は" },
          { text: "足[あし]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "足[あし]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は" },
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
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は" },
          { text: "足[あし]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は" },
          { text: "足[あし]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
      },
    ],
  },
  {
    english: "My grandmother has really small hands.",
    answers: [
      {
        segments: [
          { text: "おばあさんは" },
          { text: "手[て]が", blank: true },
          { text: "すごく" },
          {
            text: "小[ちい]さい",
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
          { text: "とても" },
          {
            text: "小[ちい]さい",
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
          { text: "おばあさんは" },
          { text: "手[て]が", blank: true },
          { text: "本当[ほんとう]に" },
          {
            text: "小[ちい]さい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "おばあさんは" },
          { text: "手[て]が", blank: true },
          { text: "とっても" },
          {
            text: "小[ちい]さい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とっても instead of すごく",
      },
    ],
  },
  {
    english: "My father has really broad shoulders.",
    answers: [
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "肩幅[かたはば]が", blank: true },
          { text: "すごく" },
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
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "肩幅[かたはば]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "肩幅[かたはば]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "肩幅[かたはば]が", blank: true },
          { text: "すごく" },
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
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "肩幅[かたはば]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "肩幅[かたはば]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
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
          { text: "妹[いもうと]は" },
          { text: "耳[みみ]が", blank: true },
          { text: "とても" },
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
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "妹[いもうと]は" },
          { text: "耳[みみ]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "妹[いもうと]は" },
          { text: "耳[みみ]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
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
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は" },
          { text: "耳[みみ]が", blank: true },
          { text: "とても" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は" },
          { text: "耳[みみ]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は" },
          { text: "耳[みみ]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
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
      {
        segments: [
          { text: "おばあさんは" },
          { text: "指[ゆび]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "おばあさんは" },
          { text: "指[ゆび]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
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
      {
        segments: [
          { text: "おじいさんは" },
          { text: "鼻[はな]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "おじいさんは" },
          { text: "鼻[はな]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
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
          { text: "姉[あね]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "姉[あね]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
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
          { text: "私[わたし]の 姉[あね]は" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 姉[あね]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 姉[あね]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
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
          { text: "とても" },
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
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "おじいさんは" },
          { text: "足[あし]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "おじいさんは" },
          { text: "足[あし]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
    ],
  },
  {
    english: "My father's car is really fast.",
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
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "車[くるま]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "車[くるま]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
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
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "車[くるま]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "車[くるま]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
      },
    ],
  },
  {
    english: "The hamster has a really cute face.",
    hint: "hamster = ハムスター",
    answers: [
      {
        segments: [
          { text: "ハムスターは" },
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
          { text: "ハムスターは" },
          { text: "顔[かお]が", blank: true },
          { text: "とても" },
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
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "ハムスターは" },
          { text: "顔[かお]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "ハムスターは" },
          { text: "顔[かお]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
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
      {
        segments: [
          { text: "おじいさんは" },
          { text: "耳[みみ]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "おじいさんは" },
          { text: "耳[みみ]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
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
          { text: "とても" },
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
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]は" },
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
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "とても" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]は" },
          { text: "指[ゆび]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
      },
    ],
  },
  {
    english: "My mother's car is really fast.",
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
      {
        segments: [
          { text: "母[はは]は" },
          { text: "車[くるま]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "母[はは]は" },
          { text: "車[くるま]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 母[はは]は" },
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
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 母[はは]は" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 母[はは]は" },
          { text: "車[くるま]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 母[はは]は" },
          { text: "車[くるま]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
      },
    ],
  },
  {
    english: "My grandfather has a really big belly.",
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
      {
        segments: [
          { text: "おじいさんは" },
          { text: "おなかが", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "おじいさんは" },
          { text: "おなかが", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
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
          { text: "とても" },
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
        notes: "とても instead of すごく",
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
      {
        segments: [
          { text: "妹[いもうと]は" },
          { text: "髪[かみ]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は" },
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
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は" },
          { text: "髪[かみ]が", blank: true },
          { text: "とても" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は" },
          { text: "髪[かみ]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
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
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "手[て]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "手[て]が", blank: true },
          { text: "とっても" },
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
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
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
        notes: "Explicit 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
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
        notes: "Explicit 私の + とても",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "手[て]が", blank: true },
          { text: "本当[ほんとう]に" },
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
        notes: "Explicit 私の + 本当に",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "手[て]が", blank: true },
          { text: "とっても" },
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
        notes: "Explicit 私の + とっても",
      },
    ],
  },
]

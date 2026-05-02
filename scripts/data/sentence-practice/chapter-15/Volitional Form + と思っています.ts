import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I'm thinking of quitting my part-time job next month.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]、アルバイトを" },
          { text: "やめよう", blank: true },
          { text: "と" },
          { text: "思[おも]っています", blank: true },
        ],
      },
      {
        segments: [
          { text: "アルバイトを来月[らいげつ]やめようと" },
          { text: "思[おも]っています", blank: true },
        ],
        notes: "Time word placed after the object (mid-sentence position)",
      },
      {
        segments: [
          { text: "来月[らいげつ]、アルバイトを" },
          { text: "やめよう", blank: true },
          { text: "と" },
          { text: "思[おも]います", blank: true },
        ],
        notes: "Using と思います (simple volitional + と思う) instead of と思っています",
      },
      {
        segments: [
          { text: "来月[らいげつ]、アルバイトは" },
          { text: "やめよう", blank: true },
          { text: "と" },
          { text: "思[おも]っています", blank: true },
        ],
        notes: "は instead of を (topicalizing アルバイト)",
      },
      {
        segments: [
          { text: "来月[らいげつ]、アルバイトは" },
          { text: "やめよう", blank: true },
          { text: "と" },
          { text: "思[おも]います", blank: true },
        ],
        notes: "は instead of を, with と思います (simple form)",
      },
    ],
  },
  {
    english: "I've been thinking of trying to climb Mount Fuji this summer.",
    hint: "Mount Fuji = 富士山 (ふじさん)",
    answers: [
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山[ふじさん]に 登[のぼ]ろうと" },
          { text: "思[おも]ってい", blank: true },
          { text: "ます" },
        ],
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山[ふじさん]に 登[のぼ]ろうと" },
          { text: "思[おも]ってい", blank: true },
          { text: "ます" },
        ],
        notes: "この夏 instead of 今年の夏 for \"this summer\"",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山[ふじさん]に 登[のぼ]ろうと" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual form with と思っている (plain), no ます ending",
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山[ふじさん]に 登[のぼ]ろうと" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "この夏 + casual と思っている",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に 富士山[ふじさん]に 登[のぼ]ろうと" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今年の夏に + casual と思っている",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山[ふじさん]を 登[のぼ]ろうと" },
          { text: "思[おも]ってい", blank: true },
          { text: "ます" },
        ],
        notes: "富士山を登る (を instead of に) - を marks the path/space traversed, polite",
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山[ふじさん]を 登[のぼ]ろうと" },
          { text: "思[おも]ってい", blank: true },
          { text: "ます" },
        ],
        notes: "この夏 + 富士山を (を particle) + polite",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山[ふじさん]を 登[のぼ]ろうと" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "富士山を + casual と思っている",
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山[ふじさん]を 登[のぼ]ろうと" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "この夏 + 富士山を + casual と思っている",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山[ふじさん]に" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っています" },
        ],
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山[ふじさん]に" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っています" },
        ],
        notes: "この夏 instead of 今年の夏 for \"this summer\"",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山[ふじさん]に" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っている" },
        ],
        notes: "今年の夏、富士山に + casual と思っている",
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山[ふじさん]に" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っている" },
        ],
        notes: "この夏 + casual と思っている",
      },
      {
        segments: [
          { text: "事年[ことし]の 夏[なつ]に、富士山[ふじさん]に" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っています" },
        ],
        notes: "今年の夏に (with に particle after time expression) + polite",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に、富士山[ふじさん]に" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っている" },
        ],
        notes: "今年の夏に + casual と思っている",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に、富士山[ふじさん]に" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っています" },
        ],
        notes: "今年の夏に (with に particle after time expression) + polite",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山[ふじさん]を" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っています" },
        ],
        notes: "富士山を登る (を instead of に) - を marks the path/space traversed, polite",
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山[ふじさん]を" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っています" },
        ],
        notes: "この夏 + 富士山を (を particle) + polite",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山[ふじさん]を" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っている" },
        ],
        notes: "富士山を + casual と思っている",
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山[ふじさん]を" },
          { text: "登[のぼ]ろう", blank: true },
          { text: "と思[おも]っている" },
        ],
        notes: "この夏 + 富士山を + casual と思っている",
      },
    ],
  },
  {
    english: "I'm thinking of selling my old car and buying a bike instead.",
    answers: [
      {
        segments: [
          { text: "古[ふる]い 車[くるま]を 売[う]って、代[か]わりに バイクを" },
          { text: "買[か]おうと 思[おも]っています", blank: true },
        ],
        notes: "Basic version: て-form connects selling→buying, 代わりに (instead), と思っています",
      },
      {
        segments: [
          { text: "古[ふる]い 車[くるま]を" },
          { text: "売[う]ろうと 思[おも]っていて、代[か]わりに バイクを 買[か]おうと 思[おも]っています", blank: true },
        ],
        notes: "Two separate volitional expressions: 売ろうと思っていて、代わりにバイクを買おうと思っています — both intentions stated explicitly",
      },
      {
        segments: [
          { text: "古[ふる]い 車[くるま]を 売[う]って、バイクを" },
          { text: "買[か]おうと 思[おも]っています", blank: true },
        ],
        notes: "Without 代わりに — simpler, still natural",
      },
      {
        segments: [
          { text: "古[ふる]い 車[くるま]を" },
          { text: "売[う]ろうと 思[おも]っていて、バイクを 買[か]おうと 思[おも]っています", blank: true },
        ],
        notes: "Two separate volitional expressions without 代わりに",
      },
      {
        segments: [
          { text: "古[ふる]い 車[くるま]を 売[う]って、そのかわりに バイクを" },
          { text: "買[か]おうと 思[おも]っています", blank: true },
        ],
        notes: "そのかわりに (in its place/instead) instead of 代わりに",
      },
      {
        segments: [
          { text: "古[ふる]い 車[くるま]を" },
          { text: "売[う]ろうと 思[おも]っていて、そのかわりに バイクを 買[か]おうと 思[おも]っています", blank: true },
        ],
        notes: "Two volitional expressions with そのかわりに",
      },
    ],
  },
  {
    english: "Kenji is thinking of starting to learn the guitar.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは ギターを" },
          { text: "習[なら]おう", blank: true },
          { text: "と" },
          { text: "思[おも]っている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんは ギターを" },
          { text: "弾[ひ]こう", blank: true },
          { text: "と" },
          { text: "思[おも]っている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 弾く (to play a string instrument) instead of 習う, は particle",
      },
      {
        segments: [
          { text: "けんじさんが ギターを" },
          { text: "習[なら]おう", blank: true },
          { text: "と" },
          { text: "思[おも]っている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for subject particle",
      },
      {
        segments: [
          { text: "けんじさんが ギターを" },
          { text: "弾[ひ]こう", blank: true },
          { text: "と" },
          { text: "思[おも]っている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は, and 弾く instead of 習う",
      },
      {
        segments: [
          { text: "けんじさんは ギターを" },
          { text: "練[れん]習[しゅう]しよう", blank: true },
          { text: "と" },
          { text: "思[おも]っている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "I've been thinking of studying abroad in Italy next year.",
    hint: "Italy = イタリア",
    answers: [
      {
        segments: [
          { text: "来年[らいねん]、イタリアに 留学[りゅうがく]しようと", blank: true },
          { text: "思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "来年[らいねん]、イタリアへ 留学[りゅうがく]しようと", blank: true },
          { text: "思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for destination",
      },
      {
        segments: [
          { text: "イタリアに 来年[らいねん] 留学[りゅうがく]しようと", blank: true },
          { text: "思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order: イタリアに来年 first",
      },
      {
        segments: [
          { text: "イタリアへ 来年[らいねん] 留学[りゅうがく]しようと", blank: true },
          { text: "思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order with へ: イタリアへ来年 first",
      },
    ],
  },
  {
    english: "I've been thinking of giving my landlady some chocolates as a thank-you gift.",
    hint: "大家さん = おおやさん",
    answers: [
      {
        segments: [
          { text: "大家[おおや]さんに お返[かえ]しに チョコレートを" },
          { text: "あげよう", blank: true },
          { text: "と 思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Core answer: お返しに + 大家さんに + チョコレートを + あげよう + と思っている/います",
      },
      {
        segments: [
          { text: "お返[かえ]しに 大家[おおや]さんに チョコレートを" },
          { text: "あげよう", blank: true },
          { text: "と 思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "お返しに fronted before 大家さんに",
      },
      {
        segments: [
          { text: "大家[おおや]さんに チョコレートを お返[かえ]しに" },
          { text: "あげよう", blank: true },
          { text: "と 思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "お返しに placed after チョコレートを (closer to verb)",
      },
    ],
  },
  {
    english: "I've been thinking of going on a diet, but I just can't give up sweets.",
    answers: [
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っているけど、お 菓子[かし]がやめられない" },
        ],
      },
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っているけど、甘[あま]い 物[もの]がやめられない" },
        ],
        notes: "甘い物 (sweet things) instead of お菓子",
      },
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っているんだけど、お 菓子[かし]がやめられない" },
        ],
        notes: "Using んだけど (explanatory nuance) instead of plain けど",
      },
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っているんだけど、甘[あま]い 物[もの]がやめられない" },
        ],
        notes: "んだけど with 甘い物",
      },
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っているけど、お 菓子[かし]があきらめられない" },
        ],
        notes: "あきらめられない (can't give up/abandon) instead of やめられない, お菓子",
      },
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っているけど、甘[あま]い 物[もの]があきらめられない" },
        ],
        notes: "あきらめられない with 甘い物",
      },
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っている。でも、お 菓子[かし]がやめられない" },
        ],
        notes: "でも as sentence-initial conjunction (two sentences), お菓子, やめられない",
      },
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っている。でも、甘[あま]い 物[もの]がやめられない" },
        ],
        notes: "でも as sentence-initial conjunction, 甘い物, やめられない",
      },
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っているが、お 菓子[かし]がやめられない" },
        ],
        notes: "が as contrastive conjunction within one sentence, お菓子, やめられない",
      },
      {
        segments: [
          { text: "ダイエットしようと", blank: true },
          { text: "思[おも]っているが、甘[あま]い 物[もの]がやめられない" },
        ],
        notes: "が as contrastive conjunction, 甘い物, やめられない",
      },
    ],
  },
  {
    english: "I'm thinking of going to see the autumn leaves in Kyoto this year.",
    hint: "Kyoto = きょうと",
    answers: [
      {
        segments: [
          { text: "今年[ことし]は、きょうとに 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こうと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "今年[ことし]、きょうとに 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こうと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "No は after 今年 — equally natural",
      },
      {
        segments: [
          { text: "今年[ことし]は、きょうとへ 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こうと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for destination (京都へ), with は",
      },
      {
        segments: [
          { text: "今年[ことし]、きょうとへ 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こうと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "今年[ことし]は、きょうとに 紅葉[こゆう]を 見[み]に" },
          { text: "行[い]こうと", blank: true },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Non-progressive と思う (simple intention), は after 今年, に for destination",
      },
      {
        segments: [
          { text: "今年[ことし]、きょうとに 紅葉[こゆう]を 見[み]に" },
          { text: "行[い]こうと", blank: true },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Non-progressive と思う, no は after 今年, に for destination",
      },
      {
        segments: [
          { text: "今年[ことし]は、きょうとの 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こうと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using きょうとの紅葉 (Kyoto's autumn leaves) — の instead of destination particle に, progressive form",
      },
    ],
  },
  {
    english: "I'm thinking of writing a letter to my favorite author.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 好[す]きな 作家[さっか]に 手紙[てがみ]を" },
          { text: "書[か]こうと 思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 大好[だいす]きな 作家[さっか]に 手紙[てがみ]を" },
          { text: "書[か]こうと 思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "大好きな instead of 好きな — stronger affection for the author",
      },
      {
        segments: [
          { text: "私[わたし]は 好[す]きな 作家[さっか]へ 手紙[てがみ]を" },
          { text: "書[か]こうと 思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "へ instead of に for the recipient (directional nuance)",
      },
      {
        segments: [
          { text: "私[わたし]は 大好[だいす]きな 作家[さっか]へ 手紙[てがみ]を" },
          { text: "書[か]こうと 思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "大好きな + へ combination",
      },
      {
        segments: [
          { text: "私[わたし]は 好[す]きな 作家[さっか]に 手紙[てがみ]を" },
          { text: "送[おく]ろうと 思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "送ろう instead of 書こう — \"thinking of sending a letter\"",
      },
      {
        segments: [
          { text: "私[わたし]は 大好[だいす]きな 作家[さっか]に 手紙[てがみ]を" },
          { text: "送[おく]ろうと 思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "大好きな + 送ろう combination",
      },
    ],
  },
  {
    english: "I've been thinking of giving up on the guitar — I'm just not getting any better.",
    answers: [
      {
        segments: [
          { text: "ギターを" },
          { text: "あきらめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。全然[ぜんぜん]うまくならないから" },
        ],
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "やめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。全然[ぜんぜん]うまくならないから" },
        ],
        notes: "やめる instead of あきらめる",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "あきらめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。全然[ぜんぜん]上手[じょうず]にならないから" },
        ],
        notes: "上手になる instead of うまくなる",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "やめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。全然[ぜんぜん]上手[じょうず]にならないから" },
        ],
        notes: "やめる + 上手にならない",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "あきらめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。あまりうまくならないから" },
        ],
        notes: "あまり instead of 全然 (softer)",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "やめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。あまりうまくならないから" },
        ],
        notes: "やめる + あまり",
      },
      {
        segments: [
          { text: "全然[ぜんぜん]うまくならないから、ギターを" },
          { text: "あきらめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order: reason first",
      },
      {
        segments: [
          { text: "全然[ぜんぜん]うまくならないから、ギターを" },
          { text: "やめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with やめる",
      },
      {
        segments: [
          { text: "全然[ぜんぜん]上手[じょうず]にならないから、ギターを" },
          { text: "あきらめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order: 上手にならない",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "あきらめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。全然[ぜんぜん]うまくならないので" },
        ],
        notes: "ので instead of から",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "やめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。全然[ぜんぜん]うまくならないので" },
        ],
        notes: "やめる + ので",
      },
      {
        segments: [
          { text: "全然[ぜんぜん]うまくならないので、ギターを" },
          { text: "あきらめよう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ので + reversed order",
      },
    ],
  },
  {
    english: "I've been thinking of taking a trip to Kyushu next spring.",
    hint: "Kyushu = きゅうしゅう",
    answers: [
      {
        segments: [
          { text: "来年[らいねん]の 春[はる]、九州[きゅうしゅう]に" },
          { text: "旅行[りょこう]しようと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "来年[らいねん]の 春[はる]、九州[きゅうしゅう]に" },
          { text: "旅行[りょこう]に行[い]こうと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "旅行に行こう (go on a trip) instead of 旅行しよう, with に for destination",
      },
      {
        segments: [
          { text: "来年[らいねん]の 春[はる]に 九州[きゅうしゅう]へ" },
          { text: "旅行[りょこう]しようと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 春に and へ instead of に for destination, 旅行しよう",
      },
      {
        segments: [
          { text: "来年[らいねん]の 春[はる]、九州[きゅうしゅう]へ" },
          { text: "旅行[りょこう]に行[い]こうと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "旅行に行こう with へ for destination",
      },
      {
        segments: [
          { text: "来春[らいしゅん]、九州[きゅうしゅう]に" },
          { text: "旅行[りょこう]しようと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "来春 (more literary/formal \"next spring\") instead of 来年の春, with に and 旅行しよう",
      },
      {
        segments: [
          { text: "来春[らいしゅん]、九州[きゅうしゅう]に" },
          { text: "旅行[りょこう]に行[い]こうと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "来春 with 旅行に行こう and に for destination",
      },
    ],
  },
  {
    english: "I've been thinking of inviting Sakura to my birthday party — do you think that's a good idea?",
    hint: "Sakura = さくら",
    answers: [
      {
        segments: [
          { text: "さくらを 誕生日[たんじょうび]パーティーに" },
          { text: "誘[さそ]おう", blank: true },
          { text: "と思[おも]っているんだけど、いいと" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]パーティーにさくらを" },
          { text: "誘[さそ]おう", blank: true },
          { text: "と思[おも]っているんだけど、いいと" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object and destination reordered: 誕生日パーティーにさくらを (party first, then Sakura)",
      },
      {
        segments: [
          { text: "私[わたし]の 誕生日[たんじょうび]パーティーにさくらを" },
          { text: "誘[さそ]おう", blank: true },
          { text: "と思[おも]っているんだけど、どう" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 私の誕生日パーティー (my birthday party explicit), and どう思う (what do you think?) instead of いいと思う",
      },
      {
        segments: [
          { text: "さくらを 誕生日[たんじょうび]パーティーに" },
          { text: "誘[さそ]おう", blank: true },
          { text: "と思[おも]っているんだけど、いいと思[おも]わない" },
          { text: "か" },
        ],
        notes: "Second clause uses いいと思わない？ (don't you think it's good?) — negative question for seeking agreement",
      },
      {
        segments: [
          { text: "さくらを 誕生日[たんじょうび]パーティーに" },
          { text: "誘[さそ]おう", blank: true },
          { text: "と思[おも]っているんだけど、いいと思[おも]うよね" },
        ],
        notes: "Adding よね at the end to seek confirmation: \"I think it's good, right?\"",
      },
      {
        segments: [
          { text: "さくらを 誕生日[たんじょうび]パーティーに" },
          { text: "誘[さそ]おう", blank: true },
          { text: "と思[おも]っているんですが、いいと思[おも]いますよね" },
        ],
        notes: "Polite with よね at the end for seeking confirmation",
      },
      {
        segments: [
          { text: "さくらを 誕生日[たんじょうび]パーティーに" },
          { text: "誘[さそ]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "んですが、どう" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite register with んですが, どう思う (what do you think?) conjugated for polite/casual",
      },
      {
        segments: [
          { text: "さくらを 誕生日[たんじょうび]パーティーに" },
          { text: "誘[さそ]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "んだけど、いいと" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Second clause uses いいと思うか — asking opinion with か particle",
      },
    ],
  },
  {
    english: "I've been thinking of moving out of the dormitory and living alone.",
    answers: [
      {
        segments: [
          { text: "寮[りょう]を 出[で]て 一人[ひとり]で 住[す]もうと", blank: true },
          { text: "思[おも]っています" },
        ],
      },
      {
        segments: [
          { text: "寮[りょう]を 出[で]て 一人[ひとり]暮[ぐ]らしを しようと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "Using 一人暮らしをする (living alone as a suru-noun phrase) instead of 一人で住む",
      },
      {
        segments: [
          { text: "寮[りょう]から 出[で]て 一人[ひとり]で 住[す]もうと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "Using から instead of を with 出る (寮から出る = leave from the dormitory)",
      },
      {
        segments: [
          { text: "寮[りょう]から 出[で]て 一人[ひとり]暮[ぐ]らしを しようと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "から + 出て with 一人暮らしをしよう",
      },
      {
        segments: [
          { text: "寮[りょう]を 出[で]て、 一人[ひとり]で 住[す]もうと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "With a comma after 出て for clarity/natural pacing",
      },
      {
        segments: [
          { text: "寮[りょう]を 出[で]て、 一人[ひとり]暮[ぐ]らしを しようと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "Comma after 出て + 一人暮らしをしよう",
      },
      {
        segments: [
          { text: "寮[りょう]を 出[で]て 一人[ひとり]で 住[す]もうと 思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual form with と思っている (plain/casual ending)",
      },
      {
        segments: [
          { text: "寮[りょう]を 出[で]て 一人[ひとり]暮[ぐ]らしを しようと 思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual with 一人暮らしをしよう + と思っている",
      },
      {
        segments: [
          { text: "寮[りょう]から 出[で]て 一人[ひとり]で 住[す]もうと 思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual, から version",
      },
      {
        segments: [
          { text: "寮[りょう]から 出[で]て 一人[ひとり]暮[ぐ]らしを しようと 思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual, から + 一人暮らしをしよう",
      },
    ],
  },
  {
    english: "I've been thinking of getting a cat — I've been feeling pretty lonely lately.",
    hint: "Two separate statements joined naturally; express loneliness with 寂しい",
    answers: [
      {
        segments: [
          { text: "最近[さいきん]けっこう 寂[さび]しいから、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Two blanks: volitional 飼おう + と + 思っている (conjugated); loneliness clause first with から; けっこう for \"pretty\"",
      },
      {
        segments: [
          { text: "猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。最近[さいきん]けっこう 寂[さび]しくて" },
        ],
        notes: "Cat clause first, then reason after using 寂しくて (て-form of い-adj as reason)",
      },
      {
        segments: [
          { text: "最近[さいきん]すごく 寂[さび]しいから、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "すごく instead of けっこう — stronger emphasis on loneliness",
      },
      {
        segments: [
          { text: "最近[さいきん]ちょっと 寂[さび]しいから、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ちょっと instead of けっこう — softer/more understated expression of loneliness",
      },
      {
        segments: [
          { text: "最近[さいきん]けっこう 寂[さび]しいし、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "し instead of から — listing loneliness as one reason among possibly others",
      },
      {
        segments: [
          { text: "猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。最近[さいきん]けっこう 寂[さび]しいから" },
        ],
        notes: "Cat intention first, then reason appended as trailing から clause",
      },
      {
        segments: [
          { text: "最近[さいきん]けっこう 寂[さび]しくて、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "寂しくて (て-form) leading into intention clause — loneliness as causal te-form",
      },
      {
        segments: [
          { text: "最近[さいきん]けっこう 寂[さび]しいので、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          { text: "と" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ので instead of から — slightly more formal/written reason connector",
      },
    ],
  },
  {
    english: "Mika, are you thinking of participating in the barbecue this weekend?",
    hint: "Mika = みか",
    answers: [
      {
        segments: [
          { text: "みか、今週末[こんしゅうまつ]のバーベキューに" },
          { text: "参加[さんか]しようと思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "？" },
        ],
      },
      {
        segments: [
          { text: "みか、今週末[こんしゅうまつ]のバーベキューに" },
          { text: "参加[さんか]しようと思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "の？" },
        ],
        notes: "Adds の at the end for a softer, more inquisitive casual question",
      },
      {
        segments: [
          { text: "みか、今週末[こんしゅうまつ]のバーベキューに" },
          { text: "参加[さんか]しようと思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "んですか" },
        ],
      },
      {
        segments: [
          { text: "みか、バーベキューに" },
          { text: "参加[さんか]しようと思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "？" },
        ],
        notes: "Drops 今週末 — context may make \"this weekend\" implied, or shorter natural phrasing",
      },
      {
        segments: [
          { text: "みか、今週末[こんしゅうまつ]のバーベキューに" },
          { text: "参加[さんか]しようと思[おも]ってる", blank: true },
          { text: "？" },
        ],
        notes: "Uses と思ってる (contracted casual form instead of と思っている)",
        register: "casual",
      },
      {
        segments: [
          { text: "みか、今週末[こんしゅうまつ]のバーベキューに" },
          { text: "参加[さんか]しようと思[おも]ってる", blank: true },
          { text: "の？" },
        ],
        notes: "Contracted と思ってる with の at end for softer question",
        register: "casual",
      },
      {
        segments: [
          { text: "みか、週末[しゅうまつ]のバーベキューに" },
          { text: "参加[さんか]しようと思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "？" },
        ],
        notes: "Uses 週末 instead of 今週末 — \"the weekend\" rather than \"this weekend\" (still natural in context)",
      },
    ],
  },
  {
    english: "I've been thinking of proposing to Naomi — I've already bought the ring.",
    hint: "Naomi = なおみ",
    answers: [
      {
        segments: [
          { text: "なおみに" },
          { text: "プロポーズしようと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "、もう 指輪[ゆびわ]も" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "なおみに" },
          { text: "プロポーズしようと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。指輪[ゆびわ]は もう" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Two sentences; second uses 指輪は (topicalizing the ring) instead of 指輪も",
      },
      {
        segments: [
          { text: "なおみに" },
          { text: "プロポーズしようと思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "んだけど", blank: true },
          { text: "、もう 指輪[ゆびわ]も 買[か]った" },
        ],
        notes: "Casual-locked variant with んだけど connector",
      },
      {
        segments: [
          { text: "もう 指輪[ゆびわ]も" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "し、なおみに" },
          { text: "プロポーズしようと思[おも]って", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed clause order — \"already bought the ring\" mentioned first with し, then the intention",
      },
    ],
  },
  {
    english: "Takeru, are you thinking of going to see a movie this Sunday?",
    hint: "Takeru = たける",
    answers: [
      {
        segments: [
          { text: "たけるさん、今週[こんしゅう]の 日曜日[にちようび]に 映画[えいが]を 見[み]に 行[い]こうと" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "？" },
        ],
      },
      {
        segments: [
          { text: "たけるさん、今週[こんしゅう]の 日曜日[にちようび]、映画[えいが]を 見[み]に 行[い]こうと" },
          { text: "思[おも]ってる", blank: true },
          { text: "？" },
        ],
        notes: "Same but with a comma after the time expression (slightly more natural spoken rhythm)",
        register: "casual",
      },
      {
        segments: [
          { text: "たけるさん、映画[えいが]を 見[み]に 行[い]こうと" },
          { text: "思[おも]ってる", blank: true },
          { text: "、今週[こんしゅう]の 日曜日[にちようび]に？" },
        ],
        notes: "Time expression moved to end of sentence for emphasis",
        register: "casual",
      },
      {
        segments: [
          { text: "たけるさん、今週[こんしゅう]の 日曜日[にちようび]に 映画[えいが]を 見[み]に 行[い]こうと" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ん？" },
        ],
      },
      {
        segments: [
          { text: "たけるさん、今週[こんしゅう]の 日曜日[にちようび]に 映画[えいが]を 見[み]に 行[い]こうと" },
          { text: "思[おも]っています", blank: true },
          { text: "か？" },
        ],
        notes: "Polite form with か",
      },
      {
        segments: [
          { text: "たけるさん、今度[こんど]の 日曜日[にちようび]に 映画[えいが]を 見[み]に 行[い]こうと" },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "？" },
        ],
        notes: "今度の日曜日 instead of 今週の日曜日 (this coming Sunday)",
      },
      {
        segments: [
          { text: "たけるさん、今度[こんど]の 日曜日[にちようび]に 映画[えいが]を 見[み]に 行[い]こうと" },
          { text: "思[おも]ってる", blank: true },
          { text: "ん？" },
        ],
        notes: "今度の日曜日 with ん？ ending",
        register: "casual",
      },
    ],
  },
  {
    english: "I've been thinking of trying to make curry at home.",
    answers: [
      {
        segments: [
          { text: "家[いえ]で カレーを" },
          { text: "作[つく]ろう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "うちで カレーを" },
          { text: "作[つく]ろう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "うち instead of 家 for \"at home\"",
      },
      {
        segments: [
          { text: "カレーを 家[いえ]で" },
          { text: "作[つく]ろう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Word order: object (カレーを) before location (家で)",
      },
      {
        segments: [
          { text: "カレーを うちで" },
          { text: "作[つく]ろう", blank: true },
          { text: "と思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Word order: object first + うち for home",
      },
    ],
  },
  {
    english: "I've been thinking of taking a walk along the river this evening.",
    answers: [
      {
        segments: [
          { text: "今晩[こんばん]、川[かわ]のそばを 散歩[さんぽ]しようと", blank: true },
          { text: "思[おも]っています" },
        ],
      },
      {
        segments: [
          { text: "今夜[こんや]、川[かわ]のそばを 散歩[さんぽ]しようと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "今夜 instead of 今晩 for \"this evening\"",
      },
      {
        segments: [
          { text: "今晩[こんばん]、川[かわ]の 近[ちか]くを 散歩[さんぽ]しようと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "川の近くを (near the river) instead of 川のそばを",
      },
      {
        segments: [
          { text: "今夜[こんや]、川[かわ]の 近[ちか]くを 散歩[さんぽ]しようと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "今夜 + 川の近くを combination",
      },
      {
        segments: [
          { text: "川[かわ]のそばを 散歩[さんぽ]しようと", blank: true },
          { text: "思[おも]っています。今晩[こんばん]" },
        ],
        notes: "Time phrase moved to end of sentence",
      },
      {
        segments: [
          { text: "川[かわ]のそばを 散歩[さんぽ]しようと", blank: true },
          { text: "思[おも]っています。今夜[こんや]" },
        ],
        notes: "今夜 at the end of sentence",
      },
      {
        segments: [
          { text: "川[かわ]の 近[ちか]くを 散歩[さんぽ]しようと", blank: true },
          { text: "思[おも]っています。今晩[こんばん]" },
        ],
        notes: "川の近くを + 今晩 at end",
      },
      {
        segments: [
          { text: "今晩[こんばん]、川[かわ]のそばで 散歩[さんぽ]しようと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "川のそばで (at/by the river) with で instead of を — walking at the riverside location",
      },
      {
        segments: [
          { text: "今夜[こんや]、川[かわ]のそばで 散歩[さんぽ]しようと", blank: true },
          { text: "思[おも]っています" },
        ],
        notes: "今夜 + 川のそばで combination",
      },
    ],
  },
  {
    english: "I've been thinking of selling all my furniture and going traveling.",
    answers: [
      {
        segments: [
          { text: "家具[かぐ]を 全部[ぜんぶ]" },
          { text: "売[う]って" },
          { text: "、旅行[りょこう]" },
          { text: "しよう", blank: true },
          { text: "と思[おも]っています" },
        ],
      },
      {
        segments: [
          { text: "家具[かぐ]を 全部[ぜんぶ]" },
          { text: "売[う]って" },
          { text: "、旅行[りょこう]に行[い]こう", blank: true },
          { text: "と思[おも]っています" },
        ],
        notes: "Using 旅行に行こう instead of 旅行しよう",
      },
      {
        segments: [
          { text: "全部[ぜんぶ]の 家具[かぐ]を" },
          { text: "売[う]って" },
          { text: "、旅行[りょこう]" },
          { text: "しよう", blank: true },
          { text: "と思[おも]っています" },
        ],
        notes: "全部の家具を word order (の modifying 家具)",
      },
      {
        segments: [
          { text: "全部[ぜんぶ]の 家具[かぐ]を" },
          { text: "売[う]って" },
          { text: "、旅行[りょこう]に行[い]こう", blank: true },
          { text: "と思[おも]っています" },
        ],
        notes: "全部の家具を + 旅行に行こう",
      },
      {
        segments: [
          { text: "家具[かぐ]を 全部[ぜんぶ]" },
          { text: "売[う]って" },
          { text: "、旅行[りょこう]" },
          { text: "しよう", blank: true },
          { text: "と思[おも]っている" },
        ],
        notes: "と思っている (plain form) instead of と思っています",
      },
      {
        segments: [
          { text: "家具[かぐ]を 全部[ぜんぶ]" },
          { text: "売[う]って" },
          { text: "、旅行[りょこう]に行[い]こう", blank: true },
          { text: "と思[おも]っている" },
        ],
        notes: "旅行に行こう + と思っている (plain)",
      },
      {
        segments: [
          { text: "全部[ぜんぶ]の 家具[かぐ]を" },
          { text: "売[う]って" },
          { text: "、旅行[りょこう]" },
          { text: "しよう", blank: true },
          { text: "と思[おも]っている" },
        ],
        notes: "全部の家具を + 旅行しよう + と思っている (plain)",
      },
      {
        segments: [
          { text: "全部[ぜんぶ]の 家具[かぐ]を" },
          { text: "売[う]って" },
          { text: "、旅行[りょこう]に行[い]こう", blank: true },
          { text: "と思[おも]っている" },
        ],
        notes: "全部の家具を + 旅行に行こう + と思っている (plain)",
      },
    ],
  },
];

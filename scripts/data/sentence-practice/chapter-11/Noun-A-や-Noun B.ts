import type { Question } from "../types"

const aruPos = {
  pos: "Godan verb with 'ru' ending (irregular verb)" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

const kiitaPos = {
  pos: "Godan verb with 'ku' ending" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "past" as const,
}

const oishiiPos = {
  pos: "I-adjective" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

export const questions: Question[] = [
  {
    english: "On weekends I go to places like parks and the sea.",
    answers: [
      {
        segments: [
          {
            text: "週末[しゅうまつ]は 公園[こうえん]や 海[うみ]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          {
            text: "週末[しゅうまつ]に 公園[こうえん]や 海[うみ]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "週末に with に",
      },
      {
        segments: [
          {
            text: "週末[しゅうまつ]は 海[うみ]や 公園[こうえん]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that this town has things like temples and shrines.",
    answers: [
      {
        segments: [
          { text: "この 町[まち]には お 寺[てら]や 神社[じんじゃ]が あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "この 町[まち]には 神社[じんじゃ]や お 寺[てら]が あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "この 町[まち]に お 寺[てら]や 神社[じんじゃ]が あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "この 町[まち]には お 寺[てら]や 神社[じんじゃ]などが あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "など (etc.) added — common with 〜や listing",
      },
      {
        segments: [
          { text: "この 町[まち]には 神社[じんじゃ]や お 寺[てら]などが あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "reversed + など",
      },
      {
        segments: [
          { text: "この 町[まち]には お 寺[てら]や 神社[じんじゃ]が ある", blank: true },
          { text: "そうです" },
        ],
        notes: "そう taught later",
      },
      {
        segments: [
          { text: "この 町[まち]には お 寺[てら]や 神社[じんじゃ]などが ある", blank: true },
          { text: "そうです" },
        ],
        notes: "など + そう taught later",
      },
    ],
  },
  {
    english: "There are things like a wallet and a dictionary in my bag.",
    answers: [
      {
        segments: [
          { text: "かばんの 中[なか]に 財布[さいふ]や 辞書[じしょ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "かばんの 中[なか]には 財布[さいふ]や 辞書[じしょ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "には instead of に",
      },
      {
        segments: [
          { text: "かばんに 財布[さいふ]や 辞書[じしょ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に instead of の中に",
      },
      {
        segments: [
          { text: "かばんの 中[なか]に 辞書[じしょ]や 財布[さいふ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "かばんには 財布[さいふ]や 辞書[じしょ]などが",
            blank: true },
          { text: "入[はい]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "入っている (is contained inside) instead of ある",
      },
      {
        segments: [
          { text: "かばんの 中[なか]に 財布[さいふ]や 辞書[じしょ]などが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "など with ある",
      },
      {
        segments: [
          { text: "かばんの 中[なか]には 財布[さいふ]や 辞書[じしょ]などが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "には + など",
      },
      {
        segments: [
          { text: "かばんの 中[なか]には 辞書[じしょ]や 財布[さいふ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "reversed + には",
      },
      {
        segments: [
          { text: "かばんには 財布[さいふ]や 辞書[じしょ]が",
            blank: true },
          { text: "入[はい]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "入っている without など",
      },
      {
        segments: [
          { text: "私[わたし]の かばんの 中[なか]に 財布[さいふ]や 辞書[じしょ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "explicit 私の",
      },
    ],
  },
  {
    english:
      "I've heard that Mei wants to do things like study abroad and work part-time next semester.",
    hint: "Mei = 芽依[めい]",
    answers: [
      {
        segments: [
          {
            text: "芽依[めい]さんは 来学期[らいがっき]、留学[りゅうがく]や アルバイトを したいと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "芽依[めい]さんは 来学期[らいがっき]、アルバイトや 留学[りゅうがく]を したいと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          {
            text: "芽依[めい]さんは 来学期[らいがっき]に 留学[りゅうがく]や アルバイトを したいと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "来学期に with に",
      },
      {
        segments: [
          {
            text: "芽依[めい]さんは 来学期[らいがっき]、留学[りゅうがく]や アルバイトなどを したいと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "など",
      },
    ],
  },
  {
    english: "There are things like a guitar and a camera in my room.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には ギターや カメラが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]に ギターや カメラが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "部屋[へや]には ギターや カメラが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "部屋には without 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には カメラや ギターが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には ギターや カメラなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "など (etc.) added to listing",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]に ギターや カメラなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に + など",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には カメラや ギターなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "reversed + など",
      },
      {
        segments: [
          { text: "部屋[へや]に ギターや カメラが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "without 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には ギターや カメラが 置[お]いてあります",
            blank: true },
        ],
        notes: "置いてある taught later",
      },
    ],
  },
  {
    english:
      "I've heard that things like coffee and cake are popular at that café.",
    answers: [
      {
        segments: [
          { text: "あのカフェでは コーヒーや ケーキが 人気[にんき]があると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "あのカフェには コーヒーや ケーキが 人気[にんき]があると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "には instead of では",
      },
      {
        segments: [
          { text: "あのカフェでは ケーキや コーヒーが 人気[にんき]があると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "あのカフェでは コーヒーや ケーキが 人気[にんき]だと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "人気だと聞く",
      },
      {
        segments: [
          { text: "あのカフェでは ケーキや コーヒーが 人気[にんき]だと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "reversed + 人気だと聞く",
      },
      {
        segments: [
          { text: "あのカフェでは コーヒーや ケーキなどが 人気[にんき]だと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "など + 人気だと聞く",
      },
      {
        segments: [
          { text: "あのカフェでは コーヒーや ケーキが 人気[にんき]だ", blank: true },
          { text: "そうです" },
        ],
        notes: "そう taught later",
      },
      {
        segments: [
          { text: "あのカフェでは ケーキや コーヒーが 人気[にんき]だ", blank: true },
          { text: "そうです" },
        ],
        notes: "reversed + そう taught later",
      },
      {
        segments: [
          { text: "あのカフェでは コーヒーや ケーキなどが 人気[にんき]だ", blank: true },
          { text: "そうです" },
        ],
        notes: "など + そう taught later",
      },
    ],
  },
  {
    english:
      "I want to visit places like art museums and temples this summer vacation.",
    answers: [
      {
        segments: [
          {
            text: "今年[ことし]の 夏休[なつやす]みは 美術館[びじゅつかん]や お 寺[てら]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          {
            text: "夏休[なつやす]みは 美術館[びじゅつかん]や お 寺[てら]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "without 今年の",
      },
      {
        segments: [
          {
            text: "今年[ことし]の 夏休[なつやす]みに 美術館[びじゅつかん]や お 寺[てら]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "time + に",
      },
      {
        segments: [
          {
            text: "今年[ことし]の 夏休[なつやす]みは お 寺[てら]や 美術館[びじゅつかん]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "reversed order",
      },
      {
        segments: [
          {
            text: "今年[ことし]の 夏休[なつやす]みは 美術館[びじゅつかん]や お 寺[てら]などに",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "など",
      },
      {
        segments: [
          {
            text: "今年[ことし]の 夏休[なつやす]みは 美術館[びじゅつかん]や お 寺[てら]へ",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "へ",
      },
    ],
  },
  {
    english: "At the festival, there were activities like dancing and singing.",
    answers: [
      {
        segments: [
          { text: "お 祭[まつ]りでは ダンスや 歌[うた]が",
            blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "祭[まつ]りでは ダンスや 歌[うた]が",
            blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "祭り without お",
      },
      {
        segments: [
          { text: "お 祭[まつ]りでは 歌[うた]や ダンスが",
            blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "reversed order",
      },
      {
        segments: [
          { text: "お 祭[まつ]りでは ダンスや 歌[うた]などが",
            blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "など",
      },
      {
        segments: [
          { text: "お 祭[まつ]りには ダンスや 歌[うた]が",
            blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "には",
      },
    ],
  },
  {
    english:
      "In the future, Itsuki wants to become something like a doctor or a scientist.",
    hint: "Itsuki = 樹[いつき]; scientist = 科学者[かがくしゃ]",
    answers: [
      {
        segments: [
          { text: "樹[いつき]さんは 将来[しょうらい]、医者[いしゃ]や 科学者[かがくしゃ]に",
            blank: true },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "樹[いつき]さんは 将来[しょうらい]、医者[いしゃ]や 科学者[かがくしゃ]などに",
            blank: true },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "など",
      },
      {
        segments: [
          { text: "将来[しょうらい]、樹[いつき]さんは 医者[いしゃ]や 科学者[かがくしゃ]に",
            blank: true },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "time first",
      },
      {
        segments: [
          { text: "将来[しょうらい]、樹[いつき]さんは 医者[いしゃ]や 科学者[かがくしゃ]などに",
            blank: true },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "time first + など",
      },
    ],
  },
  {
    english: "Things like cats and dogs are popular as pets.",
    hint: "as pets = ペットとして",
    answers: [
      {
        segments: [
          { text: "ペットとして 猫[ねこ]や 犬[いぬ]は 人気[にんき]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "ペットとして 猫[ねこ]や 犬[いぬ]などは 人気[にんき]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "など",
      },
      {
        segments: [
          { text: "ペットとして 猫[ねこ]や 犬[いぬ]は 人気[にんき]",
            blank: true },
          { text: "です" },
        ],
        notes: "人気です",
      },
      {
        segments: [
          { text: "ペットとして 猫[ねこ]や 犬[いぬ]などは 人気[にんき]",
            blank: true },
          { text: "です" },
        ],
        notes: "など + 人気です",
      },
      {
        segments: [
          { text: "猫[ねこ]や 犬[いぬ]は ペットとして 人気[にんき]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "ペットとして after noun list",
      },
      {
        segments: [
          { text: "猫[ねこ]や 犬[いぬ]などは ペットとして 人気[にんき]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "など + ペットとして after noun list",
      },
    ],
  },
  {
    english: "There are things like an umbrella and a notebook in Mei's bag.",
    hint: "Mei = 芽依[めい]",
    answers: [
      {
        segments: [
          { text: "芽依[めい]さんのかばんの 中[なか]には 傘[かさ]やノートが",
            blank: true },
          { text: "入[はい]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "中には + 入っている",
      },
      {
        segments: [
          { text: "芽依[めい]さんのかばんの 中[なか]には 傘[かさ]やノートが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "中には + ある",
      },
      {
        segments: [
          { text: "芽依[めい]さんのかばんの 中[なか]には 傘[かさ]やノートなどが",
            blank: true },
          { text: "入[はい]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "中には + など + 入っている",
      },
      {
        segments: [
          { text: "芽依[めい]さんのかばんの 中[なか]には 傘[かさ]やノートなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "中には + など + ある",
      },
      {
        segments: [
          { text: "芽依[めい]さんのかばんには 傘[かさ]やノートが",
            blank: true },
          { text: "入[はい]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "かばんには + 入っている",
      },
      {
        segments: [
          { text: "芽依[めい]さんのかばんには 傘[かさ]やノートが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "かばんには + ある",
      },
      {
        segments: [
          { text: "芽依[めい]さんのかばんには 傘[かさ]やノートなどが",
            blank: true },
          { text: "入[はい]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "かばんには + など + 入っている",
      },
      {
        segments: [
          { text: "芽依[めい]さんのかばんには 傘[かさ]やノートなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "かばんには + など + ある",
      },
    ],
  },
  {
    english: "Tokyo has things like anime shops and maid cafés.",
    hint: "anime shop = アニメショップ; maid café = メイドカフェ",
    answers: [
      {
        segments: [
          { text: "東京[とうきょう]には アニメショップや メイドカフェが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "には",
      },
      {
        segments: [
          { text: "東京[とうきょう]には アニメショップや メイドカフェなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "には + など",
      },
      {
        segments: [
          { text: "東京[とうきょう]に アニメショップや メイドカフェが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に",
      },
      {
        segments: [
          { text: "東京[とうきょう]に アニメショップや メイドカフェなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に + など",
      },
    ],
  },
  {
    english: "I've heard that in Italy, things like pizza and wine are cheap.",
    answers: [
      {
        segments: [
          { text: "イタリアでは ピザや ワインが 安[やす]いと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "が + 聞く",
      },
      {
        segments: [
          { text: "イタリアでは ピザや ワインなどが 安[やす]いと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "など + が + 聞く",
      },
      {
        segments: [
          { text: "イタリアでは ピザや ワインは 安[やす]いと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "は + 聞く",
      },
      {
        segments: [
          { text: "イタリアでは ピザや ワインなどは 安[やす]いと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "など + は + 聞く",
      },
      {
        segments: [
          { text: "イタリアでは ピザや ワインが 安[やす]い", blank: true },
          { text: "そうです" },
        ],
        notes: "が + そう taught later",
      },
      {
        segments: [
          { text: "イタリアでは ピザや ワインなどが 安[やす]い", blank: true },
          { text: "そうです" },
        ],
        notes: "など + が + そう taught later",
      },
      {
        segments: [
          { text: "イタリアでは ピザや ワインは 安[やす]い", blank: true },
          { text: "そうです" },
        ],
        notes: "は + そう taught later",
      },
      {
        segments: [
          { text: "イタリアでは ピザや ワインなどは 安[やす]い", blank: true },
          { text: "そうです" },
        ],
        notes: "など + は + そう taught later",
      },
    ],
  },
  {
    english:
      "Kaito's older sister often takes things like cake and cookies to parties.",
    hint: "Kaito = 海斗[かいと]; older sister = 姉[あね]; cookie = クッキー",
    answers: [
      {
        segments: [
          { text: "海斗[かいと]さんの 姉[あね]は よく パーティーに ケーキや クッキーを",
            blank: true },
          { text: "持[も]って" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "よく before パーティー",
      },
      {
        segments: [
          { text: "海斗[かいと]さんの 姉[あね]は よく パーティーに ケーキや クッキーなどを",
            blank: true },
          { text: "持[も]って" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "よく before パーティー + など",
      },
      {
        segments: [
          { text: "海斗[かいと]さんの 姉[あね]は パーティーに よく ケーキや クッキーを",
            blank: true },
          { text: "持[も]って" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "よく after パーティー",
      },
      {
        segments: [
          { text: "海斗[かいと]さんの 姉[あね]は パーティーに よく ケーキや クッキーなどを",
            blank: true },
          { text: "持[も]って" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "よく after パーティー + など",
      },
    ],
  },
  {
    english:
      "This summer, I want to do things by the river, like have barbecues and go camping.",
    hint: "by the river = 川[かわ]のそば",
    answers: [
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]は 川[かわ]のそばで バーベキューや キャンプを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏は + 川のそば",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]は 川[かわ]のそばで バーベキューや キャンプなどを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏は + 川のそば + など",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]は 川[かわ]の 近[ちか]くで バーベキューや キャンプを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏は + 川の近く",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]は 川[かわ]の 近[ちか]くで バーベキューや キャンプなどを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏は + 川の近く + など",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]は 川[かわ]で バーベキューや キャンプを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏は + 川で",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]は 川[かわ]で バーベキューや キャンプなどを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏は + 川で + など",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に 川[かわ]のそばで バーベキューや キャンプを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏に + 川のそば",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に 川[かわ]のそばで バーベキューや キャンプなどを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏に + 川のそば + など",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に 川[かわ]の 近[ちか]くで バーベキューや キャンプを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏に + 川の近く",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に 川[かわ]の 近[ちか]くで バーベキューや キャンプなどを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏に + 川の近く + など",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に 川[かわ]で バーベキューや キャンプを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏に + 川で",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に 川[かわ]で バーベキューや キャンプなどを",
            blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夏に + 川で + など",
      },
    ],
  },
  {
    english:
      "There are things like old magazines and games in my older brother's room.",
    answers: [
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]には 古[ふる]い 雑誌[ざっし]や ゲームが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "には + ある",
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]には 古[ふる]い 雑誌[ざっし]や ゲームが 置[お]いてあります",
            blank: true },
        ],
        notes: "には + 置いてある taught later",
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]には 古[ふる]い 雑誌[ざっし]や ゲームなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "には + など + ある",
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]には 古[ふる]い 雑誌[ざっし]や ゲームなどが 置[お]いてあります",
            blank: true },
        ],
        notes: "には + など + 置いてある taught later",
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]に 古[ふる]い 雑誌[ざっし]や ゲームが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に + ある",
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]に 古[ふる]い 雑誌[ざっし]や ゲームが 置[お]いてあります",
            blank: true },
        ],
        notes: "に + 置いてある taught later",
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]に 古[ふる]い 雑誌[ざっし]や ゲームなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に + など + ある",
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]に 古[ふる]い 雑誌[ざっし]や ゲームなどが 置[お]いてあります",
            blank: true },
        ],
        notes: "に + など + 置いてある taught later",
      },
    ],
  },
  {
    english: "At the park on Sunday, there are families and students.",
    answers: [
      {
        segments: [
          { text: "日曜日[にちようび]、 公園[こうえん]には 家族[かぞく]や 学生[がくせい]が",
            blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日、 + 公園には",
      },
      {
        segments: [
          { text: "日曜日[にちようび]、 公園[こうえん]には 家族[かぞく]や 学生[がくせい]などが",
            blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日、 + 公園には + など",
      },
      {
        segments: [
          { text: "日曜日[にちようび]、 公園[こうえん]に 家族[かぞく]や 学生[がくせい]が",
            blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日、 + 公園に",
      },
      {
        segments: [
          { text: "日曜日[にちようび]、 公園[こうえん]に 家族[かぞく]や 学生[がくせい]などが",
            blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日、 + 公園に + など",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]には 家族[かぞく]や 学生[がくせい]が",
            blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日に + 公園には",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]には 家族[かぞく]や 学生[がくせい]などが",
            blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日に + 公園には + など",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 家族[かぞく]や 学生[がくせい]が",
            blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日に + 公園に",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 家族[かぞく]や 学生[がくせい]などが",
            blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日に + 公園に + など",
      },
    ],
  },
  {
    english: "There are things like horror manga and games on my shelf.",
    hint: "shelf = 棚[たな]; horror manga = ホラー漫画[まんが]",
    answers: [
      {
        segments: [
          { text: "棚[たな]には ホラー 漫画[まんが]や ゲームが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "棚には + ある",
      },
      {
        segments: [
          { text: "棚[たな]には ホラー 漫画[まんが]や ゲームが 置[お]いてあります",
            blank: true },
        ],
        notes: "棚には + 置いてある taught later",
      },
      {
        segments: [
          { text: "棚[たな]には ホラー 漫画[まんが]や ゲームなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "棚には + など + ある",
      },
      {
        segments: [
          { text: "棚[たな]には ホラー 漫画[まんが]や ゲームなどが 置[お]いてあります",
            blank: true },
        ],
        notes: "棚には + など + 置いてある taught later",
      },
      {
        segments: [
          { text: "棚[たな]に ホラー 漫画[まんが]や ゲームが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "棚に + ある",
      },
      {
        segments: [
          { text: "棚[たな]に ホラー 漫画[まんが]や ゲームが 置[お]いてあります",
            blank: true },
        ],
        notes: "棚に + 置いてある taught later",
      },
      {
        segments: [
          { text: "棚[たな]に ホラー 漫画[まんが]や ゲームなどが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "棚に + など + ある",
      },
      {
        segments: [
          { text: "棚[たな]に ホラー 漫画[まんが]や ゲームなどが 置[お]いてあります",
            blank: true },
        ],
        notes: "棚に + など + 置いてある taught later",
      },
    ],
  },
  {
    english: "Riku practices things like piano and guitar every day.",
    hint: "Riku = 陸[りく]",
    answers: [
      {
        segments: [
          { text: "陸[りく]さんは 毎日[まいにち] ピアノや ギターを",
            blank: true },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "subject first",
      },
      {
        segments: [
          { text: "陸[りく]さんは 毎日[まいにち] ピアノや ギターなどを",
            blank: true },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "subject first + など",
      },
      {
        segments: [
          { text: "毎日[まいにち]、陸[りく]さんは ピアノや ギターを",
            blank: true },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "time first",
      },
      {
        segments: [
          { text: "毎日[まいにち]、陸[りく]さんは ピアノや ギターなどを",
            blank: true },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "time first + など",
      },
    ],
  },
  {
    english: "Things like ice cream and watermelon are delicious in summer.",
    hint: "watermelon = すいか",
    answers: [
      {
        segments: [
          { text: "夏[なつ]は アイスクリームや すいかが", blank: true },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
        ],
        notes: "time first",
      },
      {
        segments: [
          { text: "夏[なつ]は アイスクリームや すいかなどが", blank: true },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
        ],
        notes: "time first + など",
      },
      {
        segments: [
          { text: "アイスクリームや すいかは 夏[なつ]に", blank: true },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
        ],
        notes: "noun first",
      },
      {
        segments: [
          { text: "アイスクリームや すいかなどは 夏[なつ]に", blank: true },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
        ],
        notes: "noun first + など",
      },
    ],
  },
]

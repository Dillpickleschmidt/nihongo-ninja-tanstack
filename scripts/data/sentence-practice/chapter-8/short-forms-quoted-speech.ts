import type { Question } from "../types"

const omouPos = {
  pos: "Godan verb with 'u' ending" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

const omouNeg = {
  pos: "Godan verb with 'u' ending" as const,
  form: "normal" as const,
  polarity: "negative" as const,
  tense: "non-past" as const,
}

const kikuPos = {
  pos: "Godan verb with 'ku' ending" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

const kikuPast = {
  pos: "Godan verb with 'ku' ending" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "past" as const,
}

const iuPast = {
  pos: "Godan verb with 'u' ending" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "past" as const,
}

export const questions: Question[] = [
  {
    english: "I think it's going to rain tomorrow.",
    answers: [
      {
        segments: [
          { text: "明日[あした]は 雨[あめ]が 降[ふ]ると", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]は 明日[あした]は 雨[あめ]が 降[ふ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "明日[あした] 雨[あめ]が 降[ふ]ると", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Without は after 明日",
      },
      {
        segments: [
          { text: "明日[あした]は 雨[あめ]だと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "雨だ (noun predicate) instead of 降る",
      },
    ],
  },
  {
    english: "I think Kenji is going to go home early tonight.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]はけんじさんは 今晩[こんばん] 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]はけんじさんが 今晩[こんばん] 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "けんじさんが instead of けんじさんは",
      },
      {
        segments: [
          {
            text: "私[わたし]はけんじさんは 今夜[こんや] 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 instead of 今晩",
      },
      {
        segments: [
          {
            text: "私[わたし]はけんじさんが 今夜[こんや] 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 + けんじさんが",
      },
      {
        segments: [
          {
            text: "今晩[こんばん]、 私[わたし]はけんじさんは 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 fronted",
      },
      {
        segments: [
          {
            text: "今晩[こんばん]、 私[わたし]はけんじさんが 早[はや]く 帰[かえ]ると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 fronted + が",
      },
    ],
  },
  {
    english: "I heard that summer in Japan is very hot.",
    answers: [
      {
        segments: [
          { text: "日本[にほん]の 夏[なつ]はとても 暑[あつ]いと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
      },
      {
        segments: [
          { text: "日本[にほん]の 夏[なつ]はすごく 暑[あつ]いと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "すごく instead of とても",
      },
      {
        segments: [
          { text: "日本[にほん]の 夏[なつ]はとても 暑[あつ]いと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPos },
        ],
        notes: "聞く (non-past) instead of 聞いた",
      },
      {
        segments: [
          { text: "日本[にほん]の 夏[なつ]はすごく 暑[あつ]いと", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPos },
        ],
        notes: "聞く + すごく",
      },
    ],
  },
  {
    english: "I think tomorrow is a holiday.",
    answers: [
      {
        segments: [
          { text: "明日[あした]は 休[やす]みだと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          { text: "明日[あした]が 休[やす]みだと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]は 休[やす]みだと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
    ],
  },
  {
    english: "My older brother said he is working at a company now.",
    answers: [
      {
        segments: [
          { text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] 会社[かいしゃ]で 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "兄[あに]は 会社[かいしゃ]で 今[いま] 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "今 moved after 会社で",
      },
      {
        segments: [
          { text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]う", blank: true, conjugation: iuPast },
        ],
        notes: "〜と言った (simple past) instead of 〜と言っていた",
      },
      {
        segments: [
          { text: "兄[あに]は 今[いま] 会社[かいしゃ]で 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "って", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        register: "casual",
        notes: "って quote particle + 言っていた",
      },
    ],
  },
  {
    english: "I don't think this bag is cheap.",
    answers: [
      {
        segments: [
          { text: "このかばんは 安[やす]くないと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          { text: "私[わたし]はこのかばんは 安[やす]くないと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "このかばんが 安[やす]くないと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "このかばんは 安[やす]いと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouNeg },
        ],
        notes: "Negating 思う instead: 安いと思わない",
      },
      {
        segments: [
          { text: "私[わたし]はこのかばんは 安[やす]いと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouNeg },
        ],
        notes: "私は + negating 思う",
      },
      {
        segments: [
          { text: "このバッグは 安[やす]いとは", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouNeg },
        ],
        notes: "バッグ (loanword) + とは (emphasis particle)",
      },
    ],
  },
  {
    english: "I heard that Mika's mother is a famous chef.",
    hint: "Mika = みか",
    answers: [
      {
        segments: [
          {
            text: "みかさんのお 母[かあ]さんは 有名[ゆうめい]なシェフだと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
      },
      {
        segments: [
          {
            text: "みかさんのお 母[かあ]さんが 有名[ゆうめい]なシェフだと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "みかさんのお 母[かあ]さんは 有名[ゆうめい]なシェフだと",
            blank: true,
          },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "と言っていた instead of と聞いた",
      },
    ],
  },
  {
    english: "I'm thinking that Sota works too late every day.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]はそうたさんは 毎日[まいにち] 遅[おそ]く 働[はたら]くと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          {
            text: "そうたさんは 毎日[まいにち] 遅[おそ]く 働[はたら]くと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私は dropped",
      },
      {
        segments: [
          {
            text: "私[わたし]はそうたさんが 毎日[まいにち] 遅[おそ]く 働[はたら]くと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "そうたさんが instead of そうたさんは",
      },
      {
        segments: [
          {
            text: "そうたさんが 毎日[まいにち] 遅[おそ]く 働[はたら]くと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私は dropped + が",
      },
      {
        segments: [
          { text: "そうたさんは 毎日[まいにち] 遅[おそ]くまで 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "遅くまで (until late) + 働いている + 思う",
      },
      {
        segments: [
          { text: "そうたさんは 毎日[まいにち] 遅[おそ]くまで 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "遅くまで + 働いている",
      },
    ],
  },
  {
    english: "I think I'll go to the sea this weekend.",
    answers: [
      {
        segments: [
          {
            text: "今週末[こんしゅうまつ]、 海[うみ]に 行[い]くと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、 海[うみ]に 行[い]くと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "週末 instead of 今週末",
      },
      {
        segments: [
          {
            text: "今週末[こんしゅうまつ]、 海[うみ]へ 行[い]くと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、 海[うみ]へ 行[い]くと", blank: true },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "週末 + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]に 行[い]くと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          {
            text: "今週末[こんしゅうまつ]は 海[うみ]に 行[い]こうと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Volitional 行こう (first-person intention) + は topic",
      },
      {
        segments: [
          {
            text: "今週末[こんしゅうまつ] 海[うみ]に 行[い]こうと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Volitional 行こう without は",
      },
    ],
  },
  {
    english: "Hana said she is living with a dog now.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは 今[いま] 犬[いぬ]と 住[す]んで", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "はなさんが 今[いま] 犬[いぬ]と 住[す]んで", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "はなさんは 犬[いぬ]と 今[いま] 住[す]んで", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "今 moved after 犬と",
      },
      {
        segments: [
          { text: "はなさんは 今[いま] 犬[いぬ]と 一緒[いっしょ]に 住[す]んで", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "一緒に (together with) added",
      },
      {
        segments: [
          { text: "はなさんは 今[いま] 犬[いぬ]と 住[す]んで", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "と聞いた instead of と言っていた",
      },
      {
        segments: [
          { text: "はなさんは 今[いま] 犬[いぬ]と 暮[く]らして", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]う", blank: true, conjugation: iuPast },
        ],
        notes: "暮らしている (live, synonym of 住む) + 言った",
      },
      {
        segments: [
          { text: "はなさんは 今[いま] 犬[いぬ]と 暮[く]らして", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "暮らしている + 言っていた",
      },
    ],
  },
  {
    english: "Does Hana think her part-time job is too busy?",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          {
            text: "はなさんはアルバイトがすごく 忙[いそが]しいと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          {
            text: "はなさんはアルバイトはすごく 忙[いそが]しいと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "は instead of が for アルバイト",
      },
      {
        segments: [
          { text: "はなさんはアルバイトが 忙[いそが]しいと", blank: true },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Without すごく",
      },
      {
        segments: [
          { text: "はなさんはアルバイトが 忙[いそが]しすぎると", blank: true },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "忙しすぎる (too busy)",
      },
      {
        segments: [
          { text: "はなさんはアルバイトが 大変[たいへん]だと", blank: true },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "大変だ (tough)",
      },
      {
        segments: [
          { text: "はなさんはアルバイトは 大変[たいへん]だと", blank: true },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "大変だ + は",
      },
      {
        segments: [
          { text: "はなさんはバイトが 忙[いそが]しすぎると", blank: true },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "バイト (casual abbreviation of アルバイト)",
      },
    ],
  },
  {
    english: "I think Yuki is very good at cooking.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          {
            text: "ゆきさんは 料理[りょうり]がすごく 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          {
            text: "ゆきさんは 料理[りょうり]がとても 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          {
            text: "私[わたし]はゆきさんは 料理[りょうり]がすごく 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          {
            text: "ゆきさんが 料理[りょうり]がすごく 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "が instead of は for ゆきさん",
      },
    ],
  },
  {
    english: "I think this homework is pretty difficult.",
    answers: [
      {
        segments: [
          {
            text: "この 宿題[しゅくだい]はすごく 難[むずか]しいと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          {
            text: "この 宿題[しゅくだい]はとても 難[むずか]しいと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          {
            text: "この 宿題[しゅくだい]がすごく 難[むずか]しいと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "この 宿題[しゅくだい]がとても 難[むずか]しいと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "が + とても",
      },
      {
        segments: [
          {
            text: "この 宿題[しゅくだい]は 結構[けっこう] 難[むずか]しいと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "結構 (quite/pretty) — more natural for \"pretty difficult\"",
      },
    ],
  },
  {
    english: "I heard that Ren's new room is really quiet.",
    hint: "Ren = れん",
    answers: [
      {
        segments: [
          {
            text: "れんさんの 新[あたら]しい 部屋[へや]はすごく 静[しず]かだと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
      },
      {
        segments: [
          {
            text: "れんさんの 新[あたら]しい 部屋[へや]はとても 静[しず]かだと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          {
            text: "れんさんの 新[あたら]しい 部屋[へや]は 本当[ほんとう]に 静[しず]かだと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          {
            text: "れんさんの 新[あたら]しい 部屋[へや]はすごく 静[しず]かだと",
            blank: true,
          },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "と言っていた instead of と聞いた",
      },
    ],
  },
  {
    english: "Sota thinks that Hana is good at singing.",
    hint: "Sota = そうた, Hana = はな",
    answers: [
      {
        segments: [
          {
            text: "そうたさんははなさんは 歌[うた]が 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          {
            text: "そうたさんははなさんが 歌[うた]が 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "はなさんが instead of はなさんは",
      },
      {
        segments: [
          {
            text: "そうたさんがはなさんは 歌[うた]が 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "そうたさんが instead of そうたさんは",
      },
      {
        segments: [
          {
            text: "そうたさんははなさんは 歌[うた]が 上手[じょうず]だと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "思う (plain) instead of 思っている",
      },
    ],
  },
  {
    english: "Ami said she is eating lunch at the cafeteria today.",
    hint: "Ami = あみ",
    answers: [
      {
        segments: [
          { text: "あみさんは 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "あみさんは 食堂[しょくどう]で 今日[きょう] 昼[ひる]ご 飯[はん]を 食[た]べて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "食堂で moved before 今日",
      },
      {
        segments: [
          { text: "あみさんは 今日[きょう] 昼[ひる]ご 飯[はん]を 食堂[しょくどう]で 食[た]べて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "昼ご飯を moved before 食堂で",
      },
      {
        segments: [
          { text: "あみさんが 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "あみさんは 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べて", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "と聞いた instead of と言っていた",
      },
      {
        segments: [
          { text: "あみさんは 今日[きょう] 食堂[しょくどう]で 昼[ひる]ご 飯[はん]を 食[た]べて", blank: true },
          { text: "いる", blank: true },
          { text: "って", blank: true },
          { text: "言[い]う", blank: true, conjugation: iuPast },
        ],
        register: "casual",
        notes: "って (casual quote) + 言った",
      },
    ],
  },
  {
    english: "I think Mary won't come to the party tonight.",
    hint: "Mary = メアリー",
    answers: [
      {
        segments: [
          {
            text: "メアリーさんは 今晩[こんばん] パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
      },
      {
        segments: [
          {
            text: "メアリーさんが 今晩[こんばん] パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "メアリーさんは 今夜[こんや] パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今夜 instead of 今晩",
      },
      {
        segments: [
          {
            text: "今晩[こんばん]、 メアリーさんは パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "今晩 fronted",
      },
      {
        segments: [
          {
            text: "私[わたし]はメアリーさんは 今晩[こんばん] パーティーに 来[こ]ないと",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "Explicit 私は",
      },
    ],
  },
  {
    english: "Mika said she is studying biology.",
    hint: "Mika = みか",
    answers: [
      {
        segments: [
          { text: "みかさんは 生物学[せいぶつがく]を 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "みかさんが 生物学[せいぶつがく]を 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "みかさんは 生物学[せいぶつがく]を 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "言[い]う", blank: true, conjugation: iuPast },
        ],
        notes: "と言った (simple past)",
      },
      {
        segments: [
          { text: "みかさんは 生物学[せいぶつがく]を 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "と", blank: true },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "と聞いた instead of と言っていた",
      },
    ],
  },
  {
    english: "Someone told me Sora is going on a date this weekend.",
    hint: "Sora = そら",
    answers: [
      {
        segments: [
          {
            text: "そらさんは 今週末[こんしゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
      },
      {
        segments: [
          {
            text: "そらさんが 今週末[こんしゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "そらさんは 週末[しゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kikuPast },
        ],
        notes: "週末 instead of 今週末",
      },
      {
        segments: [
          {
            text: "そらさんは 今週末[こんしゅうまつ] デートに 行[い]くと",
            blank: true,
          },
          { text: "言[い]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "と言っていた instead of と聞いた",
      },
    ],
  },
  {
    english: "Hana thinks her room is too small.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          {
            text: "はなさんは 自分[じぶん]の 部屋[へや]はすごく 小[ちい]さいと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          {
            text: "はなさんは 自分[じぶん]の 部屋[へや]がすごく 小[ちい]さいと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は for 部屋",
      },
      {
        segments: [
          {
            text: "はなさんは 自分[じぶん]の 部屋[へや]はちょっと 小[ちい]さいと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ちょっと小さい instead of すごく小さい",
      },
      {
        segments: [
          {
            text: "はなさんは 自分[じぶん]の 部屋[へや]はとても 小[ちい]さいと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          {
            text: "はなさんははなさんの 部屋[へや]はすごく 小[ちい]さいと",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "はなさんの部屋 instead of 自分の部屋",
      },
      {
        segments: [
          {
            text: "はなさんは 部屋[へや]が 小[ちい]さすぎると",
            blank: true,
          },
          { text: "思[おも]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "部屋が + 小さすぎる (too small) — self-possession implicit",
      },
      {
        segments: [
          {
            text: "はなさんは 部屋[へや]が 小[ちい]さすぎると",
            blank: true,
          },
          { text: "思[おも]う", blank: true, conjugation: omouPos },
        ],
        notes: "部屋が + 小さすぎる + 思う",
      },
    ],
  },
]

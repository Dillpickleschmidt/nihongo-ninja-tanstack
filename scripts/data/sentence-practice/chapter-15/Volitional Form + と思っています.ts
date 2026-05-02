import type { Question } from "../types"

const toOmotteIru = [
  { text: "と 思[おも]って", blank: true },
  {
    text: "いる",
    blank: true,
    conjugation: {
      pos: "Ichidan verb",
      form: "normal",
      polarity: "positive",
      tense: "non-past",
    },
  },
] as const


export const questions: Question[] = [
  {
    english: "I'm thinking of quitting my part-time job next month.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]、アルバイトを" },
          { text: "やめよう", blank: true },
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          { text: "アルバイトを 来月[らいげつ]" },
          { text: "やめよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Time word placed after the object (mid-sentence position)",
      },
      {
        segments: [
          { text: "来月[らいげつ]、アルバイトは" },
          { text: "やめよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "は instead of を (topicalizing アルバイト)",
      },
    ],
  },
  {
    english: "I've been thinking of trying to climb Mount Fuji this summer.",
    hint: "Mount Fuji = 富士山 (ふじさん)",
    answers: [
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山に" },
          { text: "登[のぼ]ろう", blank: true },
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山に" },
          { text: "登[のぼ]ろう", blank: true },
          ...toOmotteIru,
        ],
        notes: "この夏 instead of 今年の夏",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に 富士山に" },
          { text: "登[のぼ]ろう", blank: true },
          ...toOmotteIru,
        ],
        notes: "今年の夏に — に particle after time expression",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、富士山を" },
          { text: "登[のぼ]ろう", blank: true },
          ...toOmotteIru,
        ],
        notes: "を instead of に — を marks the path/space traversed",
      },
      {
        segments: [
          { text: "この 夏[なつ]、富士山を" },
          { text: "登[のぼ]ろう", blank: true },
          ...toOmotteIru,
        ],
        notes: "この夏 + を",
      },
    ],
  },
  {
    english: "I'm thinking of selling my old car and buying a bike instead.",
    answers: [
      {
        segments: [
          { text: "古[ふる]い 車[くるま]を 売[う]って、代[か]わりにバイクを" },
          { text: "買[か]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: "て-form connects selling→buying, 代わりに (instead)",
      },
      {
        segments: [
          { text: "古[ふる]い 車[くるま]を 売[う]って、バイクを" },
          { text: "買[か]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Without 代わりに",
      },
      {
        segments: [
          { text: "古[ふる]い 車[くるま]を 売[う]って、そのかわりにバイクを" },
          { text: "買[か]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: "そのかわりに instead of 代わりに",
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
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          { text: "けんじさんは ギターを" },
          { text: "弾[ひ]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Using 弾く (to play a string instrument) instead of 習う",
      },
      {
        segments: [
          { text: "けんじさんが ギターを" },
          { text: "習[なら]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "けんじさんが ギターを" },
          { text: "弾[ひ]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "が + 弾く",
      },
      {
        segments: [
          { text: "けんじさんは ギターを" },
          { text: "練習[れんしゅう]しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "練習する (to practice) instead of 習う",
      },
    ],
  },
  {
    english: "I've been thinking of studying abroad in Italy next year.",
    hint: "Italy = イタリア",
    answers: [
      {
        segments: [
          { text: "来年[らいねん]、イタリアに" },
          { text: "留学[りゅうがく]しよう", blank: true },
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          { text: "来年[らいねん]、イタリアへ" },
          { text: "留学[りゅうがく]しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "へ instead of に for destination",
      },
      {
        segments: [
          { text: "イタリアに 来年[らいねん]" },
          { text: "留学[りゅうがく]しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Reversed word order: イタリアに first",
      },
      {
        segments: [
          { text: "イタリアへ 来年[らいねん]" },
          { text: "留学[りゅうがく]しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Reversed word order with へ",
      },
    ],
  },
  {
    english:
      "I've been thinking of giving my landlady some chocolates as a thank-you gift.",
    hint: "大家さん = おおやさん",
    answers: [
      {
        segments: [
          { text: "大家[おおや]さんに お返[かえ]しに チョコレートを" },
          { text: "あげよう", blank: true },
          ...toOmotteIru,
        ],
        notes:
          "Core word order: 大家さんに + お返しに + チョコレートを + あげよう",
      },
      {
        segments: [
          { text: "お返[かえ]しに 大家[おおや]さんに チョコレートを" },
          { text: "あげよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "お返しに fronted before 大家さんに",
      },
      {
        segments: [
          { text: "大家[おおや]さんに チョコレートを お返[かえ]しに" },
          { text: "あげよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "お返しに placed after チョコレートを",
      },
    ],
  },
  {
    english:
      "I've been thinking of going on a diet, but I just can't give up sweets.",
    answers: [
      {
        segments: [
          { text: "ダイエット" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
          { text: "けど、お 菓子[かし]がやめられない" },
        ],
      },
      {
        segments: [
          { text: "ダイエット" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
          { text: "けど、甘[あま]い 物[もの]がやめられない" },
        ],
        notes: "甘い物 (sweet things) instead of お菓子",
      },
      {
        segments: [
          { text: "ダイエット" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
          { text: "けど、お 菓子[かし]があきらめられない" },
        ],
        notes: "あきらめられない (can't give up) instead of やめられない",
      },
      {
        segments: [
          { text: "ダイエット" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
          { text: "けど、甘[あま]い 物[もの]があきらめられない" },
        ],
        notes: "あきらめられない with 甘い物",
      },
      {
        segments: [
          { text: "ダイエット" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
          { text: "が、お 菓子[かし]がやめられない" },
        ],
        notes: "が as contrastive conjunction instead of けど",
      },
      {
        segments: [
          { text: "ダイエット" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
          { text: "が、甘[あま]い 物[もの]がやめられない" },
        ],
        notes: "が contrastive + 甘い物",
      },
    ],
  },
  {
    english:
      "I'm thinking of going to see the autumn leaves in Kyoto this year.",
    hint: "Kyoto = きょうと",
    answers: [
      {
        segments: [
          { text: "今年[ことし]は、きょうとに 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          { text: "今年[ことし]、きょうとに 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "No は after 今年",
      },
      {
        segments: [
          { text: "今年[ことし]は、きょうとへ 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "へ instead of に for destination",
      },
      {
        segments: [
          { text: "今年[ことし]、きょうとへ 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "No は + へ",
      },
      {
        segments: [
          { text: "今年[ことし]は、きょうとの 紅葉[こうよう]を 見[み]に" },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "きょうとの紅葉 (の-modifier) instead of destination に",
      },
    ],
  },
  {
    english: "I'm thinking of writing a letter to my favorite author.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 好[す]きな 作家[さっか]に 手紙[てがみ]を" },
          { text: "書[か]こう", blank: true },
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]は 大好[だいす]きな 作家[さっか]に 手紙[てがみ]を",
          },
          { text: "書[か]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "大好きな instead of 好きな — stronger affection",
      },
      {
        segments: [
          { text: "私[わたし]は 好[す]きな 作家[さっか]へ 手紙[てがみ]を" },
          { text: "書[か]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "へ instead of に for the recipient",
      },
      {
        segments: [
          {
            text: "私[わたし]は 大好[だいす]きな 作家[さっか]へ 手紙[てがみ]を",
          },
          { text: "書[か]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "大好きな + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 好[す]きな 作家[さっか]に 手紙[てがみ]を" },
          { text: "送[おく]ろう", blank: true },
          ...toOmotteIru,
        ],
        notes: "送る (to send) instead of 書く",
      },
      {
        segments: [
          {
            text: "私[わたし]は 大好[だいす]きな 作家[さっか]に 手紙[てがみ]を",
          },
          { text: "送[おく]ろう", blank: true },
          ...toOmotteIru,
        ],
        notes: "大好きな + 送る",
      },
    ],
  },
  {
    english:
      "I've been thinking of giving up on the guitar — I'm just not getting any better.",
    answers: [
      {
        segments: [
          { text: "ギターを" },
          { text: "あきらめよう", blank: true },
          ...toOmotteIru,
          { text: "。全然[ぜんぜん]うまくならないから" },
        ],
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "やめよう", blank: true },
          ...toOmotteIru,
          { text: "。全然[ぜんぜん]うまくならないから" },
        ],
        notes: "やめる instead of あきらめる",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "あきらめよう", blank: true },
          ...toOmotteIru,
          { text: "。全然[ぜんぜん]上手[じょうず]にならないから" },
        ],
        notes: "上手にならない instead of うまくならない",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "やめよう", blank: true },
          ...toOmotteIru,
          { text: "。全然[ぜんぜん]上手[じょうず]にならないから" },
        ],
        notes: "やめる + 上手にならない",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "あきらめよう", blank: true },
          ...toOmotteIru,
          { text: "。あまりうまくならないから" },
        ],
        notes: "あまり instead of 全然 (softer)",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "やめよう", blank: true },
          ...toOmotteIru,
          { text: "。あまりうまくならないから" },
        ],
        notes: "やめる + あまり",
      },
      {
        segments: [
          { text: "全然[ぜんぜん]うまくならないから、ギターを" },
          { text: "あきらめよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Reversed order: reason first",
      },
      {
        segments: [
          { text: "全然[ぜんぜん]うまくならないから、ギターを" },
          { text: "やめよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Reversed order with やめる",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "あきらめよう", blank: true },
          ...toOmotteIru,
          { text: "。全然[ぜんぜん]うまくならないので" },
        ],
        notes: "ので instead of から",
      },
      {
        segments: [
          { text: "ギターを" },
          { text: "やめよう", blank: true },
          ...toOmotteIru,
          { text: "。全然[ぜんぜん]うまくならないので" },
        ],
        notes: "やめる + ので",
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
          { text: "旅行[りょこう]しよう", blank: true },
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          {
            text: "来年[らいねん]の 春[はる]、九州[きゅうしゅう]に 旅行[りょこう]に",
          },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "旅行に行く (go on a trip) instead of 旅行する",
      },
      {
        segments: [
          { text: "来年[らいねん]の 春[はる]に 九州[きゅうしゅう]へ" },
          { text: "旅行[りょこう]しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "春に + へ for destination",
      },
      {
        segments: [
          {
            text: "来年[らいねん]の 春[はる]、九州[きゅうしゅう]へ 旅行[りょこう]に",
          },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "旅行に行く + へ",
      },
      {
        segments: [
          { text: "来春[らいしゅん]、九州[きゅうしゅう]に" },
          { text: "旅行[りょこう]しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: '来春 (more literary "next spring") instead of 来年の春',
      },
      {
        segments: [
          { text: "来春[らいしゅん]、九州[きゅうしゅう]に 旅行[りょこう]に" },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "来春 + 旅行に行く",
      },
    ],
  },
  {
    english:
      "I've been thinking of inviting Sakura to my birthday party — do you think that's a good idea?",
    hint: "Sakura = さくら",
    answers: [
      {
        segments: [
          { text: "さくらさんを 誕生日[たんじょうび]パーティーに" },
          { text: "誘[さそ]おう", blank: true },
          ...toOmotteIru,
          { text: "んだけど、よいと" },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]パーティーに さくらさんを" },
          { text: "誘[さそ]おう", blank: true },
          ...toOmotteIru,
          { text: "んだけど、よいと" },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Object and destination reordered",
      },
      {
        segments: [
          {
            text: "私[わたし]の 誕生日[たんじょうび]パーティーに さくらさんを",
          },
          { text: "誘[さそ]おう", blank: true },
          ...toOmotteIru,
          { text: "んだけど、どう" },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私の誕生日パーティー + どう思う (what do you think?)",
      },
      {
        segments: [
          { text: "さくらさんを 誕生日[たんじょうび]パーティーに" },
          { text: "誘[さそ]おう", blank: true },
          ...toOmotteIru,
          { text: "んだけど、よいと" },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Negative question よいと思わないか — seeking agreement",
      },
    ],
  },
  {
    english:
      "I've been thinking of moving out of the dormitory and living alone.",
    answers: [
      {
        segments: [
          { text: "寮[りょう]を 出[で]て 一人[ひとり]で" },
          { text: "住[す]もう", blank: true },
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          { text: "寮[りょう]を 出[で]て 一人[ひとり]暮[ぐ]らしを" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
        ],
        notes:
          "一人暮らしをする (living alone as suru-noun phrase) instead of 一人で住む",
      },
      {
        segments: [
          { text: "寮[りょう]から 出[で]て 一人[ひとり]で" },
          { text: "住[す]もう", blank: true },
          ...toOmotteIru,
        ],
        notes: "から instead of を with 出る",
      },
      {
        segments: [
          { text: "寮[りょう]から 出[で]て 一人[ひとり]暮[ぐ]らしを" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "から + 一人暮らしをする",
      },
      {
        segments: [
          { text: "寮[りょう]を 出[で]て、一人[ひとり]で" },
          { text: "住[す]もう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Comma after 出て for natural pacing",
      },
      {
        segments: [
          { text: "寮[りょう]を 出[で]て、一人[ひとり]暮[ぐ]らしを" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Comma + 一人暮らしをする",
      },
    ],
  },
  {
    english:
      "I've been thinking of getting a cat — I've been feeling pretty lonely lately.",
        answers: [
      {
        segments: [
          { text: "最近[さいきん]けっこう 寂[さび]しいから、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: 'Reason first with から; けっこう for "pretty"',
      },
      {
        segments: [
          { text: "猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          ...toOmotteIru,
          { text: "。最近[さいきん]けっこう 寂[さび]しくて" },
        ],
        notes: "Cat clause first, reason after with 寂しくて (て-form)",
      },
      {
        segments: [
          { text: "最近[さいきん]すごく 寂[さび]しいから、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: "すごく instead of けっこう — stronger emphasis",
      },
      {
        segments: [
          { text: "最近[さいきん]ちょっと 寂[さび]しいから、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: "ちょっと instead of けっこう — softer",
      },
      {
        segments: [
          { text: "最近[さいきん]けっこう 寂[さび]しいし、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: "し instead of から — listing reasons",
      },
      {
        segments: [
          { text: "猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          ...toOmotteIru,
          { text: "。最近[さいきん]けっこう 寂[さび]しいから" },
        ],
        notes: "Cat first, trailing から clause",
      },
      {
        segments: [
          { text: "最近[さいきん]けっこう 寂[さび]しくて、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: "寂しくて (causal te-form) leading into intention",
      },
      {
        segments: [
          { text: "最近[さいきん]けっこう 寂[さび]しいので、猫[ねこ]を" },
          { text: "飼[か]おう", blank: true },
          ...toOmotteIru,
        ],
        notes: "ので instead of から",
      },
    ],
  },
  {
    english:
      "Mika, are you thinking of participating in the barbecue this weekend?",
    hint: "Mika = みか",
    answers: [
      {
        segments: [
          { text: "みかさん、今週末[こんしゅうまつ]のバーベキューに" },
          { text: "参加しよう", blank: true },
          ...toOmotteIru,
          { text: "？" },
        ],
      },
      {
        segments: [
          { text: "みかさん、今週末[こんしゅうまつ]のバーベキューに" },
          { text: "参加しよう", blank: true },
          ...toOmotteIru,
          { text: "の？" },
        ],
        notes: "の at the end for softer, more inquisitive question",
      },
      {
        segments: [
          { text: "みかさん、今週末[こんしゅうまつ]のバーベキューに" },
          { text: "参加しよう", blank: true },
          ...toOmotteIru,
          { text: "んですか" },
        ],
        register: "polite",
        notes: "Polite んですか ending.",
      },
      {
        segments: [
          { text: "みかさん、バーベキューに" },
          { text: "参加しよう", blank: true },
          ...toOmotteIru,
          { text: "？" },
        ],
        notes: "Drops 今週末 — shorter natural phrasing",
      },
      {
        segments: [
          { text: "みかさん、週末[しゅうまつ]のバーベキューに" },
          { text: "参加しよう", blank: true },
          ...toOmotteIru,
          { text: "？" },
        ],
        notes: "週末 instead of 今週末",
      },
    ],
  },
  {
    english:
      "I've been thinking of proposing to Naomi — I've already bought the ring.",
    hint: "Naomi = なおみ",
    answers: [
      {
        segments: [
          { text: "なおみさんに" },
          { text: "プロポーズしよう", blank: true },
          ...toOmotteIru,
          { text: "。もう 指輪[ゆびわ]も" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "なおみさんに" },
          { text: "プロポーズしよう", blank: true },
          ...toOmotteIru,
          { text: "。指輪[ゆびわ]はもう" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "指輪は (topicalized) instead of 指輪も",
      },
      {
        segments: [
          { text: "もう 指輪[ゆびわ]も" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "し、なおみさんに" },
          { text: "プロポーズしよう", blank: true },
          ...toOmotteIru,
        ],
        notes: 'Reversed order — "already bought ring" first with し',
      },
    ],
  },
  {
    english: "Takeru, are you thinking of going to see a movie this Sunday?",
    hint: "Takeru = たける",
    answers: [
      {
        segments: [
          {
            text: "たけるさん、今週[こんしゅう]の 日曜日[にちようび]に 映画[えいが]を 見[み]に",
          },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
          { text: "？" },
        ],
      },
      {
        segments: [
          {
            text: "たけるさん、今週[こんしゅう]の 日曜日[にちようび]、映画[えいが]を 見[み]に",
          },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
          { text: "？" },
        ],
        notes: "Comma after time expression for spoken rhythm",
      },
      {
        segments: [
          {
            text: "たけるさん、今度[こんど]の 日曜日[にちようび]に 映画[えいが]を 見[み]に",
          },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
          { text: "？" },
        ],
        notes: "今度の日曜日 (this coming Sunday)",
      },
      {
        segments: [
          {
            text: "たけるさん、今週[こんしゅう]の 日曜日[にちようび]に 映画[えいが]を 見[み]に",
          },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
          { text: "ん？" },
        ],
        notes: "ん？ casual explanatory ending",
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
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          { text: "うちで カレーを" },
          { text: "作[つく]ろう", blank: true },
          ...toOmotteIru,
        ],
        notes: "うち instead of 家",
      },
      {
        segments: [
          { text: "カレーを 家[いえ]で" },
          { text: "作[つく]ろう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Object before location",
      },
      {
        segments: [
          { text: "カレーを うちで" },
          { text: "作[つく]ろう", blank: true },
          ...toOmotteIru,
        ],
        notes: "Object before location + うち",
      },
    ],
  },
  {
    english:
      "I've been thinking of taking a walk along the river this evening.",
    answers: [
      {
        segments: [
          { text: "今晩[こんばん]、川[かわ]のそばを" },
          { text: "散歩しよう", blank: true },
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          { text: "今夜[こんや]、川[かわ]のそばを" },
          { text: "散歩しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "今晩[こんばん]、川[かわ]の 近[ちか]くを" },
          { text: "散歩しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "川の近くを (near the river) instead of 川のそばを",
      },
      {
        segments: [
          { text: "今夜[こんや]、川[かわ]の 近[ちか]くを" },
          { text: "散歩しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "今夜 + 川の近くを",
      },
      {
        segments: [
          { text: "今晩[こんばん]、川[かわ]のそばで" },
          { text: "散歩しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "川のそばで (で instead of を) — at the riverside location",
      },
      {
        segments: [
          { text: "今夜[こんや]、川[かわ]のそばで" },
          { text: "散歩しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "今夜 + 川のそばで",
      },
    ],
  },
  {
    english:
      "I've been thinking of selling all my furniture and going traveling.",
    answers: [
      {
        segments: [
          { text: "家具[かぐ]を 全部[ぜんぶ] 売[う]って、旅行[りょこう]" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
        ],
      },
      {
        segments: [
          { text: "家具[かぐ]を 全部[ぜんぶ] 売[う]って、旅行[りょこう]に" },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "旅行に行く instead of 旅行する",
      },
      {
        segments: [
          { text: "全部[ぜんぶ]の 家具[かぐ]を 売[う]って、旅行[りょこう]" },
          { text: "しよう", blank: true },
          ...toOmotteIru,
        ],
        notes: "全部の家具を word order (の modifying 家具)",
      },
      {
        segments: [
          { text: "全部[ぜんぶ]の 家具[かぐ]を 売[う]って、旅行[りょこう]に" },
          { text: "行[い]こう", blank: true },
          ...toOmotteIru,
        ],
        notes: "全部の家具を + 旅行に行く",
      },
    ],
  },
]

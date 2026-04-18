import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I'll go buy some coffee and come right back.",
    answers: [
      {
        segments: [
          { text: "コーヒーを すぐ 買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "すぐ コーヒーを 買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "すぐ fronted",
      },
      {
        segments: [
          { text: "コーヒーを 買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without すぐ",
      },
    ],
  },
  {
    english: "I'm going to take some photos and head back.",
    answers: [
      {
        segments: [
          { text: "写真[しゃしん]を 撮[と]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "写真[しゃしん]を 撮[と]って" },
          {
            text: "帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 帰る instead of てくる",
      },
    ],
  },
  {
    english: "Sota brought his dictionary to class today.",
    answers: [
      {
        segments: [
          { text: "そうたさんは 今日[きょう] 授業[じゅぎょう]に 辞書[じしょ]を 持[も]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "そうたさんは 今日[きょう] クラスに 辞書[じしょ]を 持[も]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "クラス instead of 授業",
      },
      {
        segments: [
          { text: "そうたさんは 今日[きょう] 授業[じゅぎょう]へ 辞書[じしょ]を 持[も]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "そうたさんは 今日[きょう] 辞書[じしょ]を 授業[じゅぎょう]に 持[も]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Object before location",
      },
      {
        segments: [
          { text: "そうたさんは 今日[きょう] 辞書[じしょ]を クラスへ 持[も]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "クラス + へ particle",
      },
    ],
  },
  {
    english: "I'm going to go practice tennis and then head home.",
    answers: [
      {
      segments: [
        { text: "テニスを 練習[れんしゅう]して" },
        { text: "帰[かえ]って", blank: true },
        {
          text: "いく",
          blank: true,
          conjugation: {
            pos: "Godan verb - Iku/Yuku special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
      ],
      notes:
        "Blank covers 帰って + いく (conjugated), yielding 帰っていきます (polite) / 帰っていく (casual).",
    },
      {
        segments: [
          { text: "テニスの 練習[れんしゅう]をして 帰[かえ]って" },
          {
            text: "いく",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "テニスの練習をする variant",
      },
      {
        segments: [
          { text: "テニスを 練習[れんしゅう]してから 帰[かえ]って" },
          {
            text: "いく",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "〜してから variant",
      },
      {
        segments: [
          { text: "テニスの 練習[れんしゅう]をしてから 帰[かえ]って" },
          {
            text: "いく",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "テニスの練習をしてから variant",
      },
    ],
  },
  {
    english: "I'm going to go swimming in the sea and come back.",
    answers: [
      {
        segments: [
          { text: "海[うみ]で 泳[およ]いで" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 海[うみ]で 泳[およ]いで" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "海[うみ]で 泳[およ]いで 帰[かえ]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "With explicit 帰って",
      },
    ],
  },
  {
    english: "Sota forgot to bring his textbook again.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんはまた 教科書[きょうかしょ]を 持[も]ってくるのを" },
          {
            text: "忘[わす]れる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "そうたさんは 教科書[きょうかしょ]をまた 持[も]ってくるのを" },
          {
            text: "忘[わす]れる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "また after 教科書を",
      },
    ],
  },
  {
    english: "I'm going to go buy a birthday cake and come back.",
    answers: [
      {
        segments: [
          { text: "誕生日[たんじょうび]ケーキを 買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]のケーキを 買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "誕生日の + ケーキ with の particle",
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]ケーキを 買[か]いに 行[い]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "買いに行ってくる (go to buy + come back) — explicit \"go to\" purpose",
      },
    ],
  },
  {
    english: "I'm going to go practice karaoke and come back.",
    answers: [
      {
        segments: [
          { text: "カラオケを 練習[れんしゅう]して" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "カラオケを 練習[れんしゅう]して" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without the 遅くなる前に opening",
      },
      {
        segments: [
          { text: "カラオケの 練習[れんしゅう]をして" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "カラオケの練習をする variant",
      },
    ],
  },
  {
    english:
      "I'm going to go out and buy some vegetables, so I'll be back soon.",
    answers: [
      {
      segments: [
        { text: "野菜[やさい]を" },
        { text: "買[か]って", blank: true },
        {
          text: "来[く]る",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
        { text: "から、すぐ" },
        { text: "帰[かえ]って" },
        {
          text: "来[く]る",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
      ],
      notes:
        "Blank = 買って + くる (てくる construction). から connects to すぐ帰ってくる result clause.",
    },
      {
        segments: [
          { text: "野菜[やさい]を買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、すぐ帰[かえ]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Base form: buy vegetables and come back, so will be back soon.",
      },
      {
        segments: [
          { text: "野菜[やさい]を買[か]いに行[い]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、すぐ帰[かえ]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using Verb+にいく (go to buy) + てくる structure.",
      },
      {
        segments: [
          { text: "ちょっと野菜[やさい]を買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、すぐ帰[かえ]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ちょっと added before 野菜 for natural nuance.",
      },
      {
        segments: [
          { text: "野菜[やさい]を買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、すぐ帰[かえ]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "よ" },
        ],
        notes: "With よ sentence-final particle for assertion.",
      },
      {
        segments: [
          { text: "野菜[やさい]を買[か]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、すぐ" },
          { text: "帰[かえ]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Base form: buy vegetables and come back, so will be back soon.",
      },
      {
        segments: [
          { text: "野菜[やさい]を買[か]いに" },
          { text: "行[い]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、すぐ" },
          { text: "帰[かえ]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using Verb+にいく (go to buy) + てくる structure.",
      },
      {
        segments: [
          { text: "ちょっと野菜[やさい]を買[か]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、すぐ" },
          { text: "帰[かえ]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ちょっと added before 野菜 for natural nuance.",
      },
      {
        segments: [
          { text: "野菜[やさい]を買[か]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、すぐ" },
          { text: "帰[かえ]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "よ" },
        ],
        notes: "With よ sentence-final particle for assertion.",
      },
    ],
  },
  {
    english: "I'm going to go eat sushi and come back — want to join me?",
    answers: [
      {
      segments: [
        { text: "すしを" },
        { text: "食[た]べて", blank: true },
        {
          text: "来[く]る",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
        { text: "けど、一緒[いっしょ]に" },
        {
          text: "行[い]く",
          blank: true,
          conjugation: {
            pos: "Godan verb - Iku/Yuku special class",
            form: "normal",
            polarity: "negative",
            tense: "non-past",
          },
        },
        { text: "か" },
      ],
    },
      {
        segments: [
          { text: "寿司[すし]を 食[た]べて" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、一緒[いっしょ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "寿司 kanji",
      },
      {
        segments: [
          { text: "すしを 食[た]べて" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、一緒[いっしょ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          { text: "すしを 食[た]べて" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、一緒[いっしょ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "行きましょうか (volitional invitation)",
      },
    ],
  },
  {
    english: "Sota is going to eat lunch and come back.",
    hint: "Sota = そうた",
    answers: [
      {
      segments: [
        { text: "そうたさんは" },
        { text: "昼[ひる]ご飯[はん]を" },
        { text: "食[た]べて", blank: true },
        {
          text: "来[く]る",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
      ],
    },
      {
        segments: [
          { text: "そうたさんは 昼[ひる]ご飯[はん]を 食[た]べて" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "そうたさんは 昼[ひる]ご飯[はん]を 食[た]べて 帰[かえ]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
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
    english:
      "I'm going to go write my essay at the library and then come back.",
    answers: [
      {
      segments: [
        { text: "図書館[としょかん]で" },
        {
          text: "作文[さくぶん]を 書[か]いていって、帰[かえ]って",
          blank: true,
        },
        {
          text: "来[く]る",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
      ],
    },
      {
        segments: [
          {
            text: "図書館[としょかん]で作文[さくぶん]を書[か]いていって、帰[かえ]って",
          },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "図書館[としょかん]へ作文[さくぶん]を書[か]いていって、帰[かえ]って",
          },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "図書館[としょかん]に作文[さくぶん]を書[か]いていって、帰[かえ]って",
          },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "作文[さくぶん]を 図書館[としょかん]で 書[か]いていって、 帰[かえ]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "作文を fronted",
      },
    ],
  },
  {
    english: "The weather has been getting colder these days, hasn't it.",
    answers: [
      {
      segments: [
        { text: "このごろ、天気[てんき]が" },
        { text: "寒[さむ]く", blank: true },
        { text: "なって", blank: true },
        {
          text: "くる",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
        { text: "ね" },
      ],
    },
      {
        segments: [
          { text: "このごろ、 天気[てんき]が 寒[さむ]くなって" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "ね" },
        ],
        notes: "Same as display (duplicate after format normalization)",
      },
      {
        segments: [
          { text: "このごろ、 天気[てんき]は 寒[さむ]くなって" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "ね" },
        ],
        notes: "は instead of が",
      },
      {
        segments: [
          { text: "最近[さいきん]、 寒[さむ]くなって" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "ね" },
        ],
        notes: "最近 (recently) + subject 天気が dropped",
      },
    ],
  },
  {
    english: "I'm going to go do some shopping and bring back some fruit.",
    answers: [
      {
      segments: [
        { text: "買[か]い 物[もの]をして" },
        { text: "いって", blank: true },
        { text: "、 果物[くだもの]を" },
        { text: "買[か]って", blank: true },
        {
          text: "来[く]る",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
      ],
    },
      {
        segments: [
          { text: "買[か]い 物[もの]をしていって、 果物[くだもの]を 買[か]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "No pause variant",
      },
      {
        segments: [
          { text: "買[か]い 物[もの]をしてきて、 果物[くだもの]を 買[か]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "してきて variant",
      },
      {
        segments: [
          { text: "買[か]い 物[もの]をして、 果物[くだもの]を買[か]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using shopping+come back with fruit, without explicit ていく",
      },
      {
        segments: [
          { text: "買[か]い 物[もの]をして" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、 果物[くだもの]を買[か]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 買い物してくる structure",
      },
      {
        segments: [
          { text: "私[わたし]は 買[か]い 物[もの]をして" },
          { text: "いって" },
          { text: "、 果物[くだもの]を買[か]って" },
          {
            text: "来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "With は topic marker",
      },
    ],
  },
  {
    english: "I'm going to go ask my teacher and come back with an answer.",
    answers: [
      {
      segments: [
        { text: "先生[せんせい]に" },
        { text: "聞[き]いて", blank: true },
        {
          text: "来[く]る",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
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
    english:
      "I'm going to go get some medicine and come back, so wait here for a bit.",
    answers: [
      {
      segments: [
        { text: "薬[くすり]を" },
        { text: "買[か]って", blank: true },
        {
          text: "くる",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
        { text: "から、ここで ちょっと" },
        { text: "待[ま]っていて", blank: true },
      ],
    },
      {
        segments: [
          { text: "薬[くすり]を 買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、ここで ちょっと 待[ま]っていて" },
          { text: "ください" },
        ],
        notes: "With ください",
      },
      {
        segments: [
          { text: "薬[くすり]を 買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、ここで 少[すこ]し 待[ま]っていて" },
        ],
        notes: "少し instead of ちょっと",
      },
      {
        segments: [
          { text: "薬[くすり]を 買[か]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、ここで 少[すこ]し 待[ま]っていて" },
          { text: "ください" },
        ],
        notes: "少し with ください",
      },
    ],
  },
  {
    english: "I'm going to go sing at karaoke and come back, so I'll make dinner.",
    answers: [
      {
        segments: [
          { text: "カラオケで 歌[うた]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、晩[ばん]ご 飯[はん]を" },
          {
            text: "作[つく]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "カラオケに 歌[うた]いに 行[い]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、晩[ばん]ご 飯[はん]を" },
          {
            text: "作[つく]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 歌いに行ってくる (go to sing and come back)",
      },
      {
        segments: [
          { text: "カラオケで 歌[うた]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、夕[ゆう]ご 飯[はん]を" },
          {
            text: "作[つく]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "夕ご飯 instead of 晩ご飯",
      },
      {
        segments: [
          { text: "カラオケに 歌[うた]いに 行[い]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、夕[ゆう]ご 飯[はん]を" },
          {
            text: "作[つく]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "歌いに行ってくる + 夕ご飯",
      },
    ],
  },
  {
    english:
      "I'm going to go practice the piano and come back, so please start without me.",
    answers: [
      {
      segments: [
        { text: "ピアノを" },
        { text: "練習[れんしゅう]して", blank: true },
        {
          text: "来[く]る",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
        { text: "から、ここで" },
        { text: "待[ま]っていて", blank: true },
        { text: "ください" },
      ],
    },
      {
        segments: [
          { text: "ピアノを 練習[れんしゅう]して" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、ここで 待[ま]っていて" },
        ],
        notes: "Without ください",
      },
      {
        segments: [
          { text: "ピアノの 練習[れんしゅう]をして" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、ここで 待[ま]っていて" },
          { text: "ください" },
        ],
        notes: "ピアノの練習をする variant",
      },
      {
        segments: [
          { text: "ピアノの 練習[れんしゅう]をして" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "から、ここで 待[ま]っていて" },
        ],
        notes: "ピアノの練習をする, casual ending",
      },
    ],
  },
  {
    english:
      "I'm going to go for a walk and bring back some bread on the way home.",
    answers: [
      {
      segments: [
        { text: "散歩[さんぽ]して、パンを" },
        { text: "買[か]って", blank: true },
        {
          text: "来[く]る",
          blank: true,
          conjugation: {
            pos: "Kuru verb - special class",
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
    english:
      "Japanese has been getting more and more popular around the world, hasn't it.",
    answers: [
      {
        segments: [
          { text: "世界[せかい]で 日本語[にほんご]が 有名[ゆうめい]になって" },
          {
            text: "いく",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "ね" },
        ],
      },
      {
        segments: [
          { text: "世界[せかい]で 日本語[にほんご]は 有名[ゆうめい]になって" },
          {
            text: "いく",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "ね" },
        ],
        notes: "は instead of が",
      },
      {
        segments: [
          { text: "世界[せかい]で 日本語[にほんご]が 有名[ゆうめい]になって" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "ね" },
        ],
        notes: "てきた instead of ていく",
      },
      {
        segments: [
          { text: "世界[せかい]で 日本語[にほんご]は 有名[ゆうめい]になって" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "ね" },
        ],
        notes: "は + てきた",
      },
    ],
  },
]

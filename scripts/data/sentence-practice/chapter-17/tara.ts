import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Let's go to the shopping mall after we get our salary",
    answers: [
      {
        segments: [
          {
            text: "給料[きゅうりょう]を",
          },
          {
            text: "もらったら",
            blank: true,
          },
          {
            text: "、ショッピングモールに",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "を marks the salary as what is received."
      },
    ],
  },
  {
    english: "When I get tired from work, I just want to go straight home",
    answers: [
      {
        segments: [
          {
            text: "仕事[しごと]で",
          },
          {
            text: "疲[つか]れたら",
            blank: true,
          },
          {
            text: "、まっすぐ帰[かえ]りたく",
          },
          {
            text: "なる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using たい + なる to express a desire",
      },
      {
        segments: [
          {
            text: "仕事[しごと]で",
          },
          {
            text: "疲[つか]れたら",
            blank: true,
          },
          {
            text: "、まっすぐ",
          },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using たい to express desire",
      },
    ],
  },
  {
    english: "If the lock breaks, we should contact the landlord",
    answers: [
      {
        segments: [
          { text: "鍵[かぎ]が" },
          { text: "壊[こわ]れたら", blank: true },
          { text: "、大家[おおや]さんに" },
          {
            text: "連絡[れんらく]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 壊れる instead of 使えない",
      },
    ],
  },
  {
    english:
      "Once the baby is born, we probably won't be able to travel much anymore",
    answers: [
      {
        segments: [
          { text: "赤[あか]ちゃんが" },
          { text: "生[う]まれたら", blank: true },
          { text: "、たぶん旅行[りょこう]があまり" },
          { text: "できなく" },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using なくなる to show that travel becomes difficult after the baby is born",
      },
    ],
  },
  {
    english: "If I see people getting married, I become envious",
    answers: [
      {
        segments: [
          { text: "人[ひと]が" },
          {
            text: "結婚[けっこん]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "いるのを" },
          { text: "見[み]たら", blank: true },
          {
            text: "うらやましい",
            conjugation: {
              pos: "I-adjective",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "人[ひと]が" },
          {
            text: "結婚[けっこん]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "いるのを" },
          { text: "見[み]たら", blank: true },
          { text: "うらやましく" },
          {
            text: "なる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "When the preparation is complete, please let me know",
    answers: [
      {
        segments: [
          { text: "準備[じゅんび]が" },
          { text: "終[お]わったら", blank: true },
          { text: "、" },
          {
            text: "教[おし]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "ください" },
        ],
        notes: "Using 終わる for completion",
      },
    ],
  },
  {
    english:
      "If I become a salaryman, I wonder if I'll get used to wearing a suit every day",
    answers: [
      {
        segments: [
          { text: "サラリーマンに" },
          { text: "なったら", blank: true },
          { text: "、毎日[まいにち]スーツを" },
          { text: "着[き]ることに慣[な]れるかなと" },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using こと to nominalize the action",
      },
      {
        segments: [
          { text: "サラリーマンに" },
          { text: "なったら", blank: true },
          { text: "、毎日[まいにち]スーツを" },
          { text: "着[き]ることに慣[な]れると" },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using こと to nominalize the action",
      },
      {
        segments: [
          { text: "サラリーマンに" },
          { text: "なったら", blank: true },
          { text: "、毎日[まいにち]スーツを" },
          { text: "着[き]ることに慣[な]れる" },
        ],
        notes: "Using こと to nominalize the action",
      },
    ],
  },
  {
    english: "Once you get divorced, you'll feel much more free",
    answers: [
      {
        segments: [
          { text: "離婚[りこん]したら", blank: true },
          { text: "、もっと" },
          { text: "自由[じゆう]に" },
          {
            text: "なる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using もっと for emphasis",
      },
      {
        segments: [
          { text: "離婚[りこん]したら", blank: true },
          { text: "、もっと" },
          {
            text: "解放感[かいほうかん]",
          },
          { text: "が" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 解放感 for a sense of freedom",
      },
    ],
  },
  {
    english: "Once the guests leave, the room becomes quite lonely",
    answers: [
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "帰[かえ]ったら", blank: true },
          { text: "、部屋[へや]が" },
          { text: "寂[さび]しく" },
          {
            text: "なる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が to mark both subject and object",
      },
    ],
  },
  {
    english:
      "When there's a difference of opinion, it's better to talk it through",
    answers: [
      {
        segments: [
          { text: "意見[いけん]の違[ちが]いが" },
          { text: "あったら", blank: true },
          { text: "、" },
          { text: "話[はな]し合[あ]った" },
          { text: "方[ほう]がいいです" },
        ],
        notes: "Using 話し合う for mutual discussion",
      },
    ],
  },
  {
    english: "I get really worried if the news doesn't come on time",
    answers: [
      {
        segments: [
          { text: "ニュースが" },
          { text: "遅[おく]れたら", blank: true },
          { text: "、" },
          { text: "心配[しんぱい]に" },
          {
            text: "なる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 遅れる for delay",
      },
    ],
  },
  {
    english: "Once you've chosen a job, you can't easily quit",
    answers: [
      {
        segments: [
          { text: "仕事[しごと]を" },
          { text: "選[えら]んだら", blank: true },
          { text: "、簡単[かんたん]に" },
          {
            text: "やめる",
            conjugation: {
              pos: "Ichidan verb",
              form: "potential",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using に with 簡単",
      },
    ],
  },
  {
    english: "If the hot water isn't enough, just boil some more",
    hint: "Don't literally translate word-for-word",
    answers: [
      {
        segments: [
          { text: "お湯[ゆ]が" },
          { text: "足[た]りなかったら", blank: true },
          { text: "、もっと" },
          {
            text: "沸[わ]かす",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "ください" },
        ],
        notes: "Using もっと for 'more'",
      },
    ],
  },
  {
    english: "When I get my full-time job, let's have a celebration party",
    hint: "お祝い（おいわい）- celebration",
    answers: [
      {
        segments: [
          { text: "就職[しゅうしょく]したら", blank: true },
          { text: "、お祝[いわ]いパーティーを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using お祝い for celebration",
      },
    ],
  },
  {
    english: "If the prime minister resigns, what do you think will happen?",
    answers: [
      {
        segments: [
          { text: "首相[しゅしょう]が" },
          { text: "辞[や]めたら", blank: true },
          { text: "、どう" },
          { text: "なると" },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using どう for 'what/how'",
      },
    ],
  },
  {
    english:
      "Once you get used to living alone, cooking becomes more enjoyable",
    answers: [
      {
        segments: [
          { text: "一人暮[ひとりぐ]らしに" },
          { text: "慣[な]れたら", blank: true },
          { text: "、料理[りょうり]が" },
          { text: "楽[たの]しく" },
          {
            text: "なる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using に with 慣れる",
      },
    ],
  },
  {
    english: "If it seems dangerous, you don't have to force yourself to go",
    answers: [
      {
        segments: [
          { text: "危[あぶ]なかったら", blank: true },
          { text: "、無理[むり]して" },
          { text: "行[い]かなくてもいい" },
        ],
        notes: "Using 無理して for 'force yourself'",
      },
    ],
  },
  {
    english: "When the scheduling doesn't work out, I get depressed",
    answers: [
      {
        segments: [
          { text: "都合[つごう]が" },
          { text: "悪[わる]かったら", blank: true },
          { text: "、" },
          {
            text: "落[お]ち込[こ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 落ち込む for 'get depressed'",
      },

    ],
  },
  {
    english: "If you win the lottery, what's the first thing you'd buy?",
    answers: [
      {
        segments: [
          { text: "宝[たから]くじに" },
          { text: "当[あ]たったら", blank: true },
          { text: "、最初[さいしょ]に何[なに]を" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using に with 最初",
      },
    ],
  },
  {
    english:
      "Once you get strong enough, even difficult things become possible",
    answers: [
      {
        segments: [
          { text: "強[つよ]くなったら", blank: true },
          { text: "、難[むずか]しいことでも" },
          { text: "できるように" },
          {
            text: "なる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using でも for 'even'",
      },
    ],
  },
]

import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I met my friend at the temple.",
    answers: [
      {
        segments: [
          { text: "お 寺[てら]で 友達[ともだち]に" },
          { text: "会[あ]いました", blank: true }
        ]
      }
    ]
  },
  {
    english: "Yesterday was Monday (I'm telling you).",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]は 月曜日[げつようび]" },
          { text: "でしたよ", blank: true }
        ]
      }
    ]
  },
  {
    english: "I bought bread at the supermarket.",
    answers: [
      {
        segments: [
          { text: "スーパーでパンを" },
          { text: "買[か]いました", blank: true }
        ]
      }
    ]
  },
  {
    english: "I waited at the hospital.",
    answers: [
      {
        segments: [
          { text: "病院[びょういん]で" },
          { text: "待[ま]ちました", blank: true }
        ]
      }
    ]
  },
  {
    english: "Last night's dinner was curry rice.",
    hint: "curry rice -> カレーライス",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 晩[ばん]ご 飯[はん]はカレーライス" },
          { text: "でした", blank: true }
        ]
      }
    ]
  },
  {
    english: "Why didn't you buy it?",
    answers: [
      {
        segments: [
          { text: "どうして" },
          { text: "買[か]いませんでしたか", blank: true }
        ]
      }
    ]
  },
  {
    english: "I'm sorry, I didn't take the picture.",
    answers: [
      {
        segments: [
          { text: "すみません、写真[しゃしん]を" },
          { text: "撮[と]りませんでした", blank: true }
        ]
      },
      {
        segments: [
          { text: "すみません。写真[しゃしん]を" },
          { text: "撮[と]りませんでした", blank: true }
        ]
      },
      {
        segments: [
          { text: "ごめんなさい、写真[しゃしん]を" },
          { text: "撮[と]りませんでした", blank: true }
        ]
      },
      {
        segments: [
          { text: "ごめんなさい。写真[しゃしん]を" },
          { text: "撮[と]りませんでした", blank: true }
        ]
      },
      {
        segments: [
          { text: "写真[しゃしん]を" },
          { text: "撮[と]りました", blank: true },
          { text: "。すみません" }
        ]
      },
      {
        segments: [
          { text: "写真[しゃしん]を" },
          { text: "撮[と]りました", blank: true },
          { text: "。ごめんなさい" }
        ]
      }
    ]
  },
  {
    english: "I studied a lot at school.",
    answers: [
      {
        segments: [
          { text: "学校[がっこう]でたくさん" },
          { text: "勉強[べんきょう]しました", blank: true }
        ]
      }
    ]
  },
  {
    english: "I took a picture at school.",
    answers: [
      {
        segments: [
          { text: "学校[がっこう]で 写真[しゃしん]を" },
          { text: "撮[と]りました", blank: true }
        ]
      }
    ]
  },
  {
    english: "Yesterday, I met my friend. After that, I did shopping.",
    hint: "lit. \"did shopping\"",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、友達[ともだち]に" },
          { text: "会[あ]いました", blank: true },
          { text: "。それから 買い物[かいもの]を" },
          { text: "しました", blank: true }
        ]
      },
      {
        segments: [
          { text: "昨日[きのう]は 友達[ともだち]に" },
          { text: "会[あ]いました", blank: true },
          { text: "。それから 買い物[かいもの]を" },
          { text: "しました", blank: true }
        ]
      },
      {
        segments: [
          { text: "昨日[きのう]、友達[ともだち]に" },
          { text: "会[あ]いました", blank: true },
          { text: "。そして 買い物[かいもの]を" },
          { text: "しました", blank: true }
        ]
      },
      {
        segments: [
          { text: "昨日[きのう]は 友達[ともだち]に" },
          { text: "会[あ]いました", blank: true },
          { text: "。そして 買い物[かいもの]を" },
          { text: "しました", blank: true }
        ]
      }
    ]
  },
  {
    english: "I saw a black cat. Therefore, I went home",
    hint: "black -> 黒い (くろい)",
    answers: [
      {
        segments: [
          { text: "黒[くろ]い 猫[ねこ]を" },
          { text: "見[み]ました", blank: true },
          { text: "。だから 家[いえ]に" },
          { text: "帰[かえ]りました", blank: true }
        ]
      },
      {
        segments: [
          { text: "黒[くろ]い 猫[ねこ]を" },
          { text: "見[み]ました", blank: true },
          { text: "。だから" },
          { text: "帰[かえ]りました", blank: true }
        ]
      }
    ]
  },
  {
    english: "Yesterday, I saw a cat at the park.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 猫[ねこ]を" },
          { text: "見[み]ました", blank: true }
        ]
      },
      {
        segments: [
          { text: "昨日[きのう]は 公園[こうえん]で 猫[ねこ]を" },
          { text: "見[み]ました", blank: true }
        ]
      }
    ]
  },
  {
    english: "I ate dinner at the restaurant.",
    answers: [
      {
        segments: [
          { text: "レストランで 晩[ばん]ご 飯[はん]を" },
          { text: "食[た]べました", blank: true }
        ]
      }
    ]
  },
  {
    english: "I read a book in the library.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]で 本[ほん]を" },
          { text: "読[よ]みました", blank: true }
        ]
      }
    ]
  },
  {
    english: "The children read (past-tense) at the park.",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]で 子供[こども]が" },
          { text: "読[よ]みました", blank: true }
        ],
        notes: "It never happens."
      },
      {
        segments: [
          { text: "子供[こども]が 公園[こうえん]で" },
          { text: "読[よ]みました", blank: true }
        ],
        notes: "It never happens."
      },
      {
        segments: [
          { text: "子供[こども]は 公園[こうえん]で" },
          { text: "読[よ]みました", blank: true }
        ],
        notes: "It never happens."
      },
      {
        segments: [
          { text: "子供[こども]たちは 公園[こうえん]で" },
          { text: "読[よ]みました", blank: true }
        ],
        notes: "たち - explicit plural marker"
      }
    ]
  },
  {
    english: "I bought a lot of vegetables at the supermarket.",
    answers: [
      {
        segments: [
          { text: "スーパーでたくさん 野菜[やさい]を" },
          { text: "買[か]いました", blank: true }
        ]
      }
    ]
  },
  {
    english: "I wrote on the desk.",
    answers: [
      {
        segments: [
          { text: "机[つくえ]に" },
          { text: "書[か]きました", blank: true }
        ]
      }
    ]
  },
  {
    english: "I worked a part-time job at home.",
    hint: "use the する verb",
    answers: [
      {
        segments: [
          { text: "家[いえ]でアルバイトを" },
          { text: "しました", blank: true }
        ]
      }
    ]
  },
  {
    english: "I ate bento (boxed lunch) alone in the park.",
    hint: "bento -> お弁当 (おべんとう)",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]で 一人[ひとり]でお 弁当[べんとう]を" },
          { text: "食[た]べました", blank: true }
        ]
      },
      {
        segments: [
          { text: "一人[ひとり]で 公園[こうえん]でお 弁当[べんとう]を" },
          { text: "食[た]べました", blank: true }
        ]
      }
    ]
  }
]

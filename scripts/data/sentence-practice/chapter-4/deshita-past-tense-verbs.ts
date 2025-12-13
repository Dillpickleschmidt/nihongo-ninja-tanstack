import type { Question } from "../types"

export const questions: Question[] = [
  {
    "english": "I met my friend at the temple.",
    "answers": [
      {
        "segments": [
          {
            "text": "お 寺[てら]で 友達[ともだち]に 会[あ]いました"
          }
        ]
      }
    ]
  },
  {
    "english": "Yesterday was Monday (I'm telling you).",
    "answers": [
      {
        "segments": [
          {
            "text": "昨日[きのう]は 月曜日[げつようび]でしたよ"
          }
        ]
      }
    ]
  },
  {
    "english": "I bought bread at the supermarket.",
    "answers": [
      {
        "segments": [
          {
            "text": "スーパーでパンを 買[か]いました"
          }
        ]
      }
    ]
  },
  {
    "english": "I waited at the hospital.",
    "answers": [
      {
        "segments": [
          {
            "text": "病院[びょういん]で 待[ま]ちました"
          }
        ]
      }
    ]
  },
  {
    "english": "Last night's dinner was curry rice.",
    "hint": "curry rice -> カレーライス",
    "answers": [
      {
        "segments": [
          {
            "text": "昨日[きのう]の 晩[ばん]ご 飯[はん]はカレーライスでした"
          }
        ]
      }
    ]
  },
  {
    "english": "Why didn't you buy it?",
    "answers": [
      {
        "segments": [
          {
            "text": "どうして 買[か]いませんでしたか"
          }
        ]
      }
    ]
  },
  {
    "english": "I'm sorry, I didn't take the picture.",
    "answers": [
      {
        "segments": [
          {
            "text": "すみません、写真[しゃしん]を 撮[と]りませんでした"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "すみません。写真[しゃしん]を 撮[と]りませんでした"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "ごめんなさい、写真[しゃしん]を 撮[と]りませんでした"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "ごめんなさい。写真[しゃしん]を 撮[と]りませんでした"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "写真[しゃしん]を 撮[と]りました。すみません"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "写真[しゃしん]を 撮[と]りました。ごめんなさい"
          }
        ]
      }
    ]
  },
  {
    "english": "I studied a lot at school.",
    "answers": [
      {
        "segments": [
          {
            "text": "学校[がっこう]でたくさん 勉強[べんきょう]しました"
          }
        ]
      }
    ]
  },
  {
    "english": "I took a picture at school.",
    "answers": [
      {
        "segments": [
          {
            "text": "学校[がっこう]で 写真[しゃしん]を 撮[と]りました"
          }
        ]
      }
    ]
  },
  {
    "english": "Yesterday, I met my friend. After that, I did shopping.",
    "hint": "lit. \"did shopping\"",
    "answers": [
      {
        "segments": [
          {
            "text": "昨日[きのう]、友達[ともだち]に 会[あ]いました。それから 買い物[かいもの]をしました"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "昨日[きのう]は 友達[ともだち]に 会[あ]いました。それから 買い物[かいもの]をしました"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "昨日[きのう]、友達[ともだち]に 会[あ]いました。そして 買い物[かいもの]をしました"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "昨日[きのう]は 友達[ともだち]に 会[あ]いました。そして 買い物[かいもの]をしました"
          }
        ]
      }
    ]
  },
  {
    "english": "I saw a black cat. Therefore, I went home",
    "hint": "black -> 黒い (くろい)",
    "answers": [
      {
        "segments": [
          {
            "text": "黒[くろ]い 猫[ねこ]を 見[み]ました。だから 家[いえ]に 帰[かえ]りました"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "黒[くろ]い 猫[ねこ]を 見[み]ました。だから 帰[かえ]りました"
          }
        ]
      }
    ]
  },
  {
    "english": "Yesterday, I saw a cat at the park.",
    "answers": [
      {
        "segments": [
          {
            "text": "昨日[きのう]、公園[こうえん]で 猫[ねこ]を 見[み]ました"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "昨日[きのう]は 公園[こうえん]で 猫[ねこ]を 見[み]ました"
          }
        ]
      }
    ]
  },
  {
    "english": "I ate dinner at the restaurant.",
    "answers": [
      {
        "segments": [
          {
            "text": "レストランで 晩[ばん]ご 飯[はん]を 食[た]べました"
          }
        ]
      }
    ]
  },
  {
    "english": "I read a book in the library.",
    "answers": [
      {
        "segments": [
          {
            "text": "図書館[としょかん]で 本[ほん]を 読[よ]みました"
          }
        ]
      }
    ]
  },
  {
    "english": "The children read (past-tense) at the park.",
    "answers": [
      {
        "segments": [
          {
            "text": "公園[こうえん]で 子供[こども]が 読[よ]みました"
          }
        ],
        "notes": "It never happens."
      },
      {
        "segments": [
          {
            "text": "子供[こども]が 公園[こうえん]で 読[よ]みました"
          }
        ],
        "notes": "It never happens."
      },
      {
        "segments": [
          {
            "text": "子供[こども]は 公園[こうえん]で 読[よ]みました"
          }
        ],
        "notes": "It never happens."
      },
      {
        "segments": [
          {
            "text": "子供[こども]たちは 公園[こうえん]で 読[よ]みました"
          }
        ],
        "notes": "たち - explicit plural marker"
      }
    ]
  },
  {
    "english": "I bought a lot of vegetables at the supermarket.",
    "answers": [
      {
        "segments": [
          {
            "text": "スーパーでたくさん 野菜[やさい]を 買[か]いました"
          }
        ]
      }
    ]
  },
  {
    "english": "I wrote on the desk.",
    "answers": [
      {
        "segments": [
          {
            "text": "机[つくえ]に 書[か]きました"
          }
        ]
      }
    ]
  },
  {
    "english": "I worked a part-time job at home.",
    "hint": "use the する verb",
    "answers": [
      {
        "segments": [
          {
            "text": "家[いえ]でアルバイトをしました"
          }
        ]
      }
    ]
  },
  {
    "english": "I ate bento (boxed lunch) alone in the park.",
    "hint": "bento -> お弁当 (おべんとう)",
    "answers": [
      {
        "segments": [
          {
            "text": "公園[こうえん]で 一人[ひとり]でお 弁当[べんとう]を 食[た]べました"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "一人[ひとり]で 公園[こうえん]でお 弁当[べんとう]を 食[た]べました"
          }
        ]
      }
    ]
  }
]

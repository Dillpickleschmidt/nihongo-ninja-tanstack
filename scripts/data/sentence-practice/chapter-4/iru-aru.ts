import type { Question } from "../types"

export const questions: Question[] = [
  {
    "english": "There is a book.",
    "answers": [
      {
        "segments": [
          {
            "text": "本[ほん]があります"
          }
        ]
      }
    ]
  },
  {
    "english": "There is a table.",
    "hint": "table -> テーブル",
    "answers": [
      {
        "segments": [
          {
            "text": "テーブルがあります"
          }
        ]
      }
    ]
  },
  {
    "english": "There is a teacher.",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]がいます"
          }
        ]
      }
    ]
  },
  {
    "english": "There is a dog.",
    "answers": [
      {
        "segments": [
          {
            "text": "犬[いぬ]がいます"
          }
        ]
      }
    ]
  },
  {
    "english": "Tanaka's bag is here.",
    "hint": "For this practice session, use います・あります, not です. \nbag - 鞄（かばん）",
    "answers": [
      {
        "segments": [
          {
            "text": "田中[たなか]さんの 鞄[かばん]があります"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "田中[たなか]さんのかばんはここにあります"
          }
        ],
        "notes": "Specifically \"here\" as opposed to \"there\"."
      },
      {
        "segments": [
          {
            "text": "ここに 田中[たなか]さんのかばんがあります"
          }
        ],
        "notes": "Specifically \"here\" as opposed to \"there\"."
      }
    ]
  },
  {
    "english": "Suzuki's pen is here.",
    "answers": [
      {
        "segments": [
          {
            "text": "鈴木[すずき]さんのペンがあります"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "鈴木[すずき]さんのペンはここにあります"
          }
        ],
        "notes": "Specifically \"here\" as opposed to \"there\"."
      },
      {
        "segments": [
          {
            "text": "ここに 鈴木[すずき]さんのペンがあります"
          }
        ],
        "notes": "Specifically \"here\" as opposed to \"there\"."
      }
    ]
  },
  {
    "english": "Is Yamada here?",
    "answers": [
      {
        "segments": [
          {
            "text": "山田[やまだ]さんがいますか"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "山田[やまだ]さんはいますか"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "山田[やまだ]さんはここにいますか"
          }
        ],
        "notes": ""
      },
      {
        "segments": [
          {
            "text": "ここに 山田[やまだ]さんがいますか"
          }
        ],
        "notes": ""
      }
    ]
  },
  {
    "english": "Nakamura's notebook is here.",
    "answers": [
      {
        "segments": [
          {
            "text": "中村[なかむら]さんのノートがあります"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "ここに 中村[なかむら]さんのノートがあります"
          }
        ],
        "notes": "Specifically \"here\" as opposed to \"there\"."
      },
      {
        "segments": [
          {
            "text": "中村[なかむら]さんのノートはここにあります"
          }
        ],
        "notes": "Specifically \"here\" as opposed to \"there\"."
      }
    ]
  },
  {
    "english": "There are flowers in the park.",
    "answers": [
      {
        "segments": [
          {
            "text": "公園[こうえん]に 花[はな]があります"
          }
        ]
      }
    ]
  },
  {
    "english": "There is a cat in the park.",
    "answers": [
      {
        "segments": [
          {
            "text": "公園[こうえん]に 猫[ねこ]がいます"
          }
        ]
      }
    ]
  },
  {
    "english": "Do you have time today?",
    "answers": [
      {
        "segments": [
          {
            "text": "今日[きょう]は 時間[じかん]がありますか"
          }
        ]
      }
    ]
  },
  {
    "english": "There is a store nearby.",
    "answers": [
      {
        "segments": [
          {
            "text": "近[ちか]くに 店[みせ]があります"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "店[みせ]が 近[ちか]くにあります"
          }
        ],
        "notes": "Store-focused variation"
      }
    ]
  },
  {
    "english": "That person is over there.",
    "answers": [
      {
        "segments": [
          {
            "text": "あの 人[ひと]がいます"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "あそこにあの 人[ひと]がいます"
          }
        ],
        "notes": "Specifically \"over there\" as opposed to somewhere else."
      },
      {
        "segments": [
          {
            "text": "あの 人[ひと]はあそこにいます"
          }
        ],
        "notes": "Specifically \"over there\" as opposed to somewhere else."
      }
    ]
  },
  {
    "english": "There are people in the park.",
    "answers": [
      {
        "segments": [
          {
            "text": "公園[こうえん]に 人[ひと]がいます"
          }
        ]
      }
    ]
  }
]

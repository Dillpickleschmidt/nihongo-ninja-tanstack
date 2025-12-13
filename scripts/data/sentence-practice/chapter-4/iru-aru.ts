import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "There is a book.",
    answers: [
      {
        segments: [
          { text: "本[ほん]が" },
          { text: "あります", blank: true }
        ]
      }
    ]
  },
  {
    english: "There is a table.",
    hint: "table -> テーブル",
    answers: [
      {
        segments: [
          { text: "テーブルが" },
          { text: "あります", blank: true }
        ]
      }
    ]
  },
  {
    english: "There is a teacher.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]が" },
          { text: "います", blank: true }
        ]
      }
    ]
  },
  {
    english: "There is a dog.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]が" },
          { text: "います", blank: true }
        ]
      }
    ]
  },
  {
    english: "Tanaka's bag is here.",
    hint: "For this practice session, use います・あります, not です. \nbag - 鞄（かばん）",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんの 鞄[かばん]が" },
          { text: "あります", blank: true }
        ]
      },
      {
        segments: [
          { text: "田中[たなか]さんのかばんはここに" },
          { text: "あります", blank: true }
        ],
        notes: "Specifically \"here\" as opposed to \"there\"."
      },
      {
        segments: [
          { text: "ここに 田中[たなか]さんのかばんが" },
          { text: "あります", blank: true }
        ],
        notes: "Specifically \"here\" as opposed to \"there\"."
      }
    ]
  },
  {
    english: "Suzuki's pen is here.",
    answers: [
      {
        segments: [
          { text: "鈴木[すずき]さんのペンが" },
          { text: "あります", blank: true }
        ]
      },
      {
        segments: [
          { text: "鈴木[すずき]さんのペンはここに" },
          { text: "あります", blank: true }
        ],
        notes: "Specifically \"here\" as opposed to \"there\"."
      },
      {
        segments: [
          { text: "ここに 鈴木[すずき]さんのペンが" },
          { text: "あります", blank: true }
        ],
        notes: "Specifically \"here\" as opposed to \"there\"."
      }
    ]
  },
  {
    english: "Is Yamada here?",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんが" },
          { text: "いますか", blank: true }
        ]
      },
      {
        segments: [
          { text: "山田[やまだ]さんは" },
          { text: "いますか", blank: true }
        ]
      },
      {
        segments: [
          { text: "山田[やまだ]さんはここに" },
          { text: "いますか", blank: true }
        ]
      },
      {
        segments: [
          { text: "ここに 山田[やまだ]さんが" },
          { text: "いますか", blank: true }
        ]
      }
    ]
  },
  {
    english: "Nakamura's notebook is here.",
    answers: [
      {
        segments: [
          { text: "中村[なかむら]さんのノートが" },
          { text: "あります", blank: true }
        ]
      },
      {
        segments: [
          { text: "ここに 中村[なかむら]さんのノートが" },
          { text: "あります", blank: true }
        ],
        notes: "Specifically \"here\" as opposed to \"there\"."
      },
      {
        segments: [
          { text: "中村[なかむら]さんのノートはここに" },
          { text: "あります", blank: true }
        ],
        notes: "Specifically \"here\" as opposed to \"there\"."
      }
    ]
  },
  {
    english: "There are flowers in the park.",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]に 花[はな]が" },
          { text: "あります", blank: true }
        ]
      }
    ]
  },
  {
    english: "There is a cat in the park.",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]に 猫[ねこ]が" },
          { text: "います", blank: true }
        ]
      }
    ]
  },
  {
    english: "Do you have time today?",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は 時間[じかん]が" },
          { text: "ありますか", blank: true }
        ]
      }
    ]
  },
  {
    english: "There is a store nearby.",
    answers: [
      {
        segments: [
          { text: "近[ちか]くに 店[みせ]が" },
          { text: "あります", blank: true }
        ]
      },
      {
        segments: [
          { text: "店[みせ]が 近[ちか]くに" },
          { text: "あります", blank: true }
        ],
        notes: "Store-focused variation"
      }
    ]
  },
  {
    english: "That person is over there.",
    answers: [
      {
        segments: [
          { text: "あの 人[ひと]が" },
          { text: "います", blank: true }
        ]
      },
      {
        segments: [
          { text: "あそこにあの 人[ひと]が" },
          { text: "います", blank: true }
        ],
        notes: "Specifically \"over there\" as opposed to somewhere else."
      },
      {
        segments: [
          { text: "あの 人[ひと]はあそこに" },
          { text: "います", blank: true }
        ],
        notes: "Specifically \"over there\" as opposed to somewhere else."
      }
    ]
  },
  {
    english: "There are people in the park.",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]に 人[ひと]が" },
          { text: "います", blank: true }
        ]
      }
    ]
  }
]

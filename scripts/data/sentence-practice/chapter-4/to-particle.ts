import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Takahashi bought notebooks and pencils.",
    hint: "pencil -> 鉛筆 (えんぴつ)",
    answers: [
      {
        segments: [
          { text: "高橋[たかはし]さんはノート" },
          { text: "と", blank: true },
          { text: "鉛筆[えんぴつ]を 買[か]いました" }
        ]
      }
    ]
  },
  {
    english: "I went to Kyoto and Osaka.",
    answers: [
      {
        segments: [
          { text: "京都[きょうと]" },
          { text: "と", blank: true },
          { text: "大阪[おおさか]に 行[い]きました" }
        ]
      }
    ]
  },
  {
    english: "There are dogs and cats here.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]" },
          { text: "と", blank: true },
          { text: "猫[ねこ]はここにいます" }
        ],
        notes: "Emphasizing the presence of the animals."
      },
      {
        segments: [
          { text: "ここに 犬[いぬ]" },
          { text: "と", blank: true },
          { text: "猫[ねこ]がいます" }
        ],
        notes: "Emphasizing the location in which the animals exist."
      },
      {
        segments: [
          { text: "ここには 犬[いぬ]" },
          { text: "と", blank: true },
          { text: "猫[ねこ]がいます" }
        ],
        notes: "Highlighting the location more specifically."
      },
      {
        segments: [
          { text: "犬[いぬ]" },
          { text: "と", blank: true },
          { text: "猫[ねこ]がここにいます" }
        ],
        notes: "Emphasizing the presence of the animals."
      }
    ]
  },
  {
    english: "I studied Japanese with Nakamura.",
    answers: [
      {
        segments: [
          { text: "中村[なかむら]さん" },
          { text: "と", blank: true },
          { text: "日本語[にほんご]を 勉強[べんきょう]しました" }
        ]
      }
    ]
  },
  {
    english: "Kimura bought notebooks and pencils.",
    hint: "pencil -> 鉛筆 (えんぴつ)",
    answers: [
      {
        segments: [
          { text: "木村[きむら]さんはノート" },
          { text: "と", blank: true },
          { text: "鉛筆[えんぴつ]を 買[か]いました" }
        ]
      }
    ]
  },
  {
    english: "I studied Japanese with Mr. Ito.",
    answers: [
      {
        segments: [
          { text: "伊藤[いとう]先生[せんせい]" },
          { text: "と", blank: true },
          { text: "日本語[にほんご]を 勉強[べんきょう]しました" }
        ]
      }
    ]
  },
  {
    english: "Ayaka will go to Korea with Mayumi.",
    answers: [
      {
        segments: [
          { text: "彩香[あやか]さんは 真由美[まゆみ]さん" },
          { text: "と", blank: true },
          { text: "韓国[かんこく]に 行[い]きます" }
        ]
      },
      {
        segments: [
          { text: "彩香[あやか]さんは 韓国[かんこく]に 真由美[まゆみ]さん" },
          { text: "と", blank: true },
          { text: "行[い]きます" }
        ]
      }
    ]
  },
  {
    english: "Fujita went shopping with me.",
    answers: [
      {
        segments: [
          { text: "藤田[ふじた]さんは 私[わたし]" },
          { text: "と", blank: true },
          { text: "買い物[かいもの]に 行[い]きました" }
        ]
      }
    ]
  },
  {
    english: "I watched a movie with Yoshida.",
    answers: [
      {
        segments: [
          { text: "吉田[よしだ]さん" },
          { text: "と", blank: true },
          { text: "映画[えいが]を 見[み]ました" }
        ]
      }
    ]
  },
  {
    english: "Sasaki bought bread and juice.",
    answers: [
      {
        segments: [
          { text: "佐々[ささ]木[き]さんはパン" },
          { text: "と", blank: true },
          { text: "ジュースを 買[か]いました" }
        ]
      }
    ]
  },
  {
    english: "I read a book with Yamashita.",
    answers: [
      {
        segments: [
          { text: "山下[やました]さん" },
          { text: "と", blank: true },
          { text: "本[ほん]を 読[よ]みました" }
        ]
      }
    ]
  },
  {
    english: "Matsumoto bought apples and oranges.",
    answers: [
      {
        segments: [
          { text: "松本[まつもと]さんはりんご" },
          { text: "と", blank: true },
          { text: "オレンジを 買[か]いました" }
        ]
      }
    ]
  },
  {
    english: "I went to school with Shimizu.",
    answers: [
      {
        segments: [
          { text: "清水[しみず]さん" },
          { text: "と", blank: true },
          { text: "学校[がっこう]に 行[い]きました" }
        ]
      },
      {
        segments: [
          { text: "清水[しみず]さん" },
          { text: "と", blank: true },
          { text: "学校[がっこう]へ 行[い]きました" }
        ]
      }
    ]
  },
  {
    english: "Okada drank tea and water.",
    answers: [
      {
        segments: [
          { text: "岡田[おかだ]さんはお茶[おちゃ]" },
          { text: "と", blank: true },
          { text: "お水[みず]を 飲[の]みました" }
        ]
      }
    ]
  },
  {
    english: "I studied for the test with Hashimoto.",
    answers: [
      {
        segments: [
          { text: "橋本[はしもと]さん" },
          { text: "と", blank: true },
          { text: "テストを 勉強[べんきょう]しました" }
        ]
      },
      {
        segments: [
          { text: "橋本[はしもと]さん" },
          { text: "と", blank: true },
          { text: "試験[しけん]を 勉強[べんきょう]しました" }
        ]
      }
    ]
  }
]

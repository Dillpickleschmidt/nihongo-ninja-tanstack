import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "This bag is expensive. That wallet is also expensive.",
    hint: "Comparing prices of items",
    answers: [
      {
        segments: [
          { text: "この 鞄[かばん]は 高[たか]いです。" },
          { text: "その 財布[さいふ]も", blank: true },
          { text: "高[たか]いです。" }
        ]
      }
    ]
  },
  {
    english: "Both this hat and that bag are expensive",
    hint: "Comparing multiple items' prices",
    answers: [
      {
        segments: [
          { text: "この 帽子[ぼうし]も", blank: true },
          { text: "その 鞄[かばん]も", blank: true },
          { text: "高[たか]いです" }
        ]
      }
    ]
  },
  {
    english: "This is my dictionary. This is also my notebook.",
    hint: "Showing ownership of multiple items",
    answers: [
      {
        segments: [
          { text: "これは 私[わたし]の 辞書[じしょ]です。これは" },
          { text: "私[わたし]のノートも", blank: true },
          { text: "です。" }
        ],
        notes: "Using も with です"
      },
      {
        segments: [
          { text: "これは 私[わたし]の 辞書[じしょ]です。" },
          { text: "このノートも", blank: true },
          { text: "私[わたし]のです。" }
        ],
        notes: "Alternative pattern emphasizing the item"
      }
    ]
  },
  {
    english: "Tanaka is a student. Yamada is also a student.",
    hint: "Comparing people's roles",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは 学生[がくせい]です。" },
          { text: "山田[やまだ]さんも", blank: true },
          { text: "学生[がくせい]です。" }
        ]
      }
    ]
  },
  {
    english: "Both Tanaka and Sato are Japanese.",
    hint: "Describing multiple people's nationality",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんも", blank: true },
          { text: "佐藤[さとう]さんも", blank: true },
          { text: "日本人[にほんじん]です" }
        ]
      }
    ]
  },
  {
    english: "This is an English book. This is also a Japanese book.",
    hint: "Describing books in different languages",
    answers: [
      {
        segments: [
          { text: "これは 英語[えいご]の 本[ほん]です。これは" },
          { text: "日本語[にほんご]の 本[ほん]も", blank: true },
          { text: "です。" }
        ]
      }
    ]
  },
  {
    english: "Both this pen and that pencil are expensive.",
    hint: "Comparing prices of stationery items",
    answers: [
      {
        segments: [
          { text: "このペンも", blank: true },
          { text: "その 鉛筆[えんぴつ]も", blank: true },
          { text: "高[たか]いです" }
        ]
      }
    ]
  },
  {
    english: "Yamada is a doctor. He is also a teacher.",
    hint: "Describing someone with multiple roles",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは 医者[いしゃ]です。" },
          { text: "先生[せんせい]も", blank: true },
          { text: "です。" }
        ],
        notes: "Using も with です"
      },
      {
        segments: [
          { text: "山田[やまだ]さんは 医者[いしゃ]です。" },
          { text: "先生[せんせい]でも", blank: true },
          { text: "あります。" }
        ],
        notes: "Alternative pattern showing multiple roles"
      }
    ]
  },
  {
    english: "Both this university and that high school are in Japan.",
    hint: "Describing locations of schools",
    answers: [
      {
        segments: [
          { text: "この 大学[だいがく]も", blank: true },
          { text: "その 高校[こうこう]も", blank: true },
          { text: "日本[にほん]です" }
        ]
      }
    ]
  },
  {
    english: "Kim is Korean. She is also a university student.",
    hint: "Describing someone's nationality and role",
    answers: [
      {
        segments: [
          { text: "キムさんは 韓国人[かんこくじん]です。" },
          { text: "大学生[だいがくせい]も", blank: true },
          { text: "です。" }
        ]
      }
    ]
  },
  {
    english: "Both this dictionary and that notebook are mine.",
    hint: "Showing ownership of multiple items",
    answers: [
      {
        segments: [
          { text: "この 辞書[じしょ]も", blank: true },
          { text: "そのノートも", blank: true },
          { text: "私[わたし]のです" }
        ]
      }
    ]
  },
  {
    english: "This is Tanaka's pen. This is also Tanaka's notebook.",
    hint: "Showing multiple items belonging to same person",
    answers: [
      {
        segments: [
          { text: "これは 田中[たなか]さんのペンです。これは" },
          { text: "田中[たなか]さんのノートも", blank: true },
          { text: "です。" }
        ]
      }
    ]
  },
  {
    english: "Both Yamada and Tanaka are first-year students.",
    hint: "Describing multiple people's grade level",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんも", blank: true },
          { text: "田中[たなか]さんも", blank: true },
          { text: "一年生[いちねんせい]です" }
        ]
      }
    ]
  },
  {
    english: "This is an international student. This is also a nurse.",
    hint: "Introducing people with different roles",
    answers: [
      {
        segments: [
          { text: "これは 留学生[りゅうがくせい]です。これは" },
          { text: "看護師[かんごし]も", blank: true },
          { text: "です。" }
        ]
      }
    ]
  },
  {
    english: "Both this umbrella and that bag are Tanaka's.",
    hint: "Multiple items belonging to same person",
    answers: [
      {
        segments: [
          { text: "この 傘[かさ]も", blank: true },
          { text: "その 鞄[かばん]も", blank: true },
          { text: "田中[たなか]さんのです" }
        ]
      }
    ]
  },
  {
    english: "This is the English teacher. This is also the Japanese teacher.",
    hint: "Introducing teachers of different subjects",
    answers: [
      {
        segments: [
          { text: "これは 英語[えいご]の 先生[せんせい]です。これは" },
          { text: "日本語[にほんご]の 先生[せんせい]も", blank: true },
          { text: "です。" }
        ]
      }
    ]
  },
  {
    english: "Both these shoes and that hat are Yamada's.",
    hint: "Multiple items belonging to same person",
    answers: [
      {
        segments: [
          { text: "この 靴[くつ]も", blank: true },
          { text: "その 帽子[ぼうし]も", blank: true },
          { text: "山田[やまだ]さんのです" }
        ]
      }
    ]
  },
  {
    english: "This is the university library. This is also the computer room.",
    hint: "Introducing different places in a building",
    answers: [
      {
        segments: [
          { text: "これは 大学[だいがく]の 図書館[としょかん]です。これは" },
          { text: "コンピューターの 部屋[へや]も", blank: true },
          { text: "です。" }
        ]
      }
    ]
  },
  {
    english: "Both this bike and that umbrella are expensive.",
    hint: "Comparing prices of different items",
    answers: [
      {
        segments: [
          { text: "この 自転車[じてんしゃ]も", blank: true },
          { text: "その 傘[かさ]も", blank: true },
          { text: "高[たか]いです" }
        ]
      }
    ]
  },
  {
    english: "Tanaka is a lawyer. He is also a university teacher.",
    hint: "Describing someone with multiple professions",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは 弁護士[べんごし]です。" },
          { text: "大学[だいがく]の 先生[せんせい]も", blank: true },
          { text: "です。" }
        ]
      }
    ]
  }
]

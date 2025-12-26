import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "This is my book.",
    hint: "Speaker is holding it",
    answers: [
      {
        segments: [
          { text: "これは", blank: true },
          { text: "私[わたし]の 本[ほん]です" },
        ],
        notes: "Full sentence with これ",
      },
      {
        segments: [{ text: "私[わたし]の 本[ほん]です" }],
        notes: "More natural, casual version without これは",
      },
    ],
  },
  {
    english: "This bag is expensive.",
    hint: "Right beside the speaker",
    answers: [
      {
        segments: [
          { text: "このかばんは", blank: true },
          { text: "高[たか]いです" },
        ],
      },
    ],
  },
  {
    english: "Is that Mr./Ms. Tanaka's pen?",
    hint: "Name spelling: たなか; On the listener's desk",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "たなかさんのペンですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [{ text: "たなかさんのペンですか" }],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "The teacher at this library is Japanese.",
    hint: "Where the speaker currently is",
    answers: [
      {
        segments: [
          { text: "この 図書館[としょかん]の", blank: true },
          { text: "先生[せんせい]は 日本人[にほんじん]です" },
        ],
      },
    ],
  },
  {
    english: "That umbrella over there is Professor Yamada's.",
    hint: "Name spelling: やまだ; Visible at the end of the hallway",
    answers: [
      {
        segments: [
          { text: "あれは", blank: true },
          { text: "やまだ 先生[せんせい]の 傘[かさ]です" },
        ],
        notes: "Full sentence with あれ",
      },
      {
        segments: [{ text: "やまだ 先生[せんせい]の 傘[かさ]です" }],
        notes: "More natural, casual version without あれは",
      },
    ],
  },
  {
    english: "The students in this class are international students.",
    hint: "The room where the speaker is; クラス -> class",
    answers: [
      {
        segments: [
          { text: "このクラスの", blank: true },
          { text: "学生[がくせい]は 留学生[りゅうがくせい]です" },
        ],
      },
    ],
  },
  {
    english: "Is that Mr./Ms. Sato's watch?",
    hint: "Name spelling: さとう; In the listener's hand",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "さとうさんの 時計[とけい]ですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [{ text: "さとうさんの 時計[とけい]ですか" }],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "The teacher at this university is a doctor.",
    hint: "Campus where conversation is taking place",
    answers: [
      {
        segments: [
          { text: "この 大学[だいがく]の", blank: true },
          { text: "先生[せんせい]は 医者[いしゃ]です" },
        ],
      },
    ],
  },
  {
    english: "That bank employee over there is Chinese.",
    hint: "Can be seen through the window",
    answers: [
      {
        segments: [
          { text: "あの 銀行[ぎんこう]の 会社員[かいしゃいん]は", blank: true },
          { text: "中国人[ちゅうごくじん]です" },
        ],
      },
    ],
  },
  {
    english: "The fish at this convenience store is expensive.",
    hint: "Store where speaker is shopping",
    answers: [
      {
        segments: [
          { text: "このコンビニの", blank: true },
          { text: "魚[さかな]は 高[たか]いです" },
        ],
      },
    ],
  },
  {
    english: "Is that your (Yamada's) dictionary?",
    hint: "Name spelling: やまだ; Next to where the listener is sitting; じしょ -> dictionary",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "やまださんの 辞書[じしょ]ですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [{ text: "やまださんの 辞書[じしょ]ですか" }],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "How much is this?",
    hint: "Holding or pointing at an item",
    answers: [
      {
        segments: [{ text: "これは", blank: true }, { text: "いくらですか" }],
      },
    ],
  },
  {
    english: "That teacher over there is Korean.",
    hint: "Standing at the far end of the campus",
    answers: [
      {
        segments: [
          { text: "あの 先生[せんせい]は", blank: true },
          { text: "韓国人[かんこくじん]です" },
        ],
      },
    ],
  },
  {
    english: "The desk in this room is new.",
    hint: "Speaker touching the desk",
    answers: [
      {
        segments: [
          { text: "この 部屋[へや]の", blank: true },
          { text: "机[つくえ]は 新[あたら]しいです" },
        ],
      },
    ],
  },
  {
    english: "Is that your (Tanaka's) bicycle?",
    hint: "Name spelling: たなか; Bike parked near the listener",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "たなかさんの 自転車[じてんしゃ]ですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [{ text: "たなかさんの 自転車[じてんしゃ]ですか" }],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "That'll be 10,000 yen.",
    hint: "At a store counter, telling customer the price",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "一万[いちまん]円[えん]です" },
        ],
      },
    ],
  },
  {
    english: "This newspaper is in Japanese.",
    hint: "Paper the speaker is reading",
    answers: [
      {
        segments: [
          { text: "この 新聞[しんぶん]は", blank: true },
          { text: "日本語[にほんご]です" },
        ],
      },
    ],
  },
  {
    english: "Is that your (Suzuki's) wallet?",
    hint: "Name spelling: すずき; On the table between speaker and listener",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "すずきさんの 財布[さいふ]ですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [{ text: "すずきさんの 財布[さいふ]ですか" }],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "This is delicious.",
    hint: "Visible from the train station",
    answers: [
      {
        segments: [{ text: "これは", blank: true }, { text: "おいしい" }],
        notes: "Full sentence with これ",
      },
      {
        segments: [{ text: "おいしい" }],
        notes: "More natural, casual version without これは",
      },
    ],
  },
  {
    english: "This is the Japanese classroom.",
    hint: "Standing in front of the room",
    answers: [
      {
        segments: [
          { text: "これは", blank: true },
          { text: "日本語[にほんご]のクラスです" },
        ],
      },
    ],
  },
  {
    english: "Is that your (Nakamura's) notebook?",
    hint: "Name spelling: なかむら; Notebook in listener's backpack",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "なかむらさんのノートですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [{ text: "なかむらさんのノートですか" }],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "That over there is a convenience store.",
    hint: "Visible down the block",
    answers: [
      {
        segments: [{ text: "あれは", blank: true }, { text: "コンビニです" }],
      },
    ],
  },
  {
    english: "This phone's number is wrong.",
    hint: "Phone in speaker's hand",
    answers: [
      {
        segments: [
          { text: "この 電話[でんわ]の", blank: true },
          { text: "番号[ばんごう]は 違[ちが]います" },
        ],
      },
    ],
  },
  {
    english: "Is this the English classroom?",
    hint: "Standing at the classroom entrance",
    answers: [
      {
        segments: [
          { text: "これは", blank: true },
          { text: "英語[えいご]のクラスですか" },
        ],
        notes: "Full sentence with これ",
      },
      {
        segments: [{ text: "英語[えいご]のクラスですか" }],
        notes: "More natural, casual version without これは",
      },
    ],
  },
  {
    english: "That library over there is tall.",
    hint: "Building visible from the classroom window",
    answers: [
      {
        segments: [
          { text: "あの 図書館[としょかん]は", blank: true },
          { text: "高[たか]いです" },
        ],
      },
    ],
  },
  {
    english: "This class's teacher is from America.",
    hint: "Class currently in session; クラス -> class",
    answers: [
      {
        segments: [
          { text: "このクラスの", blank: true },
          { text: "先生[せんせい]はアメリカ人[じん]です" },
        ],
      },
    ],
  },
  {
    english: "Is that your (Sato's) English textbook?",
    hint: "Name spelling: さとう; Book on the listener's chair; きょうかしょ -> textbook",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "さとうさんの 英語[えいご]の 教科書[きょうかしょ]ですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [
          { text: "さとうさんの 英語[えいご]の 教科書[きょうかしょ]ですか" },
        ],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "That over there is the library.",
    hint: "Visible from the coffee shop window",
    answers: [
      {
        segments: [
          { text: "あれは", blank: true },
          { text: "図書館[としょかん]です" },
        ],
      },
    ],
  },
  {
    english: "These shoes are expensive.",
    hint: "Shoes the speaker is trying on",
    answers: [
      {
        segments: [
          { text: "この 靴[くつ]は", blank: true },
          { text: "高[たか]いです" },
        ],
      },
    ],
  },
  {
    english: "Is that chair expensive?",
    hint: "Chair the listener was about to sit on",
    answers: [
      {
        segments: [
          { text: "その 椅子[いす]は", blank: true },
          { text: "高[たか]いですか" },
        ],
      },
    ],
  },
]

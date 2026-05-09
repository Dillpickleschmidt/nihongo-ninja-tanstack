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
        segments: [
          { text: "これ、", blank: true },
          { text: "私[わたし]の 本[ほん]です" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [{ text: "私[わたし]の 本[ほん]です" }],
        notes: "More natural, casual version without これは",
      },
    ],
  },
  {
    english: "Where is the restroom?",
    answers: [
      {
        segments: [
          { text: "トイレはどこ", blank: true },
          { text: "ですか" },
        ],
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
      {
        segments: [
          { text: "この 鞄[かばん]は", blank: true },
          { text: "高[たか]いです" },
        ],
        notes: "Kanji 鞄"
      },
      {
        segments: [
          { text: "このかばん、", blank: true },
          { text: "高[たか]いです" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "この 鞄[かばん]、", blank: true },
          { text: "高[たか]いです" },
        ],
        notes: "Shorter with 、instead of は, kanji 鞄"
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
      {
        segments: [{ text: "これ、", blank: true }, { text: "いくらですか" }],
        notes: "Shorter with 、instead of は"
      },
    ],
  },
  {
    english: "Is that Mori's pen?",
    hint: "Mori = 森 (もり); On the listener's desk",
    answers: [
      {
        segments: [
          { text: "そのペンは", blank: true },
          { text: "森[もり]さんのですか" },
        ],
        notes: "そのペン variant",
      },
      {
        segments: [
          { text: "それは", blank: true },
          { text: "森[もり]さんのペンですか" },
        ],
        notes: "それは variant",
      },
      {
        segments: [
          { text: "それ、", blank: true },
          { text: "森[もり]さんのペンですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [{ text: "森[もり]さんのペンですか" }],
        notes: "Version that drops それは",
      },
    ],
  },
  {
    english: "The teacher at this library is Japanese.",
    hint: "Where the speaker currently is",
    answers: [
      {
        segments: [
          { text: "この 図書館[としょかん]", blank: true },
          { text: "の先生[せんせい]は 日本人[にほんじん]です" },
        ],
      },
    ],
  },
  {
    english: "Is that over there a convenience store?",
    answers: [
      {
        segments: [
          { text: "あれ、コンビニ", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Short: あれ + 、 + noun + です + か",
      },
      {
        segments: [
          { text: "あれはコンビニ", blank: true },
          { text: "です" },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "Excuse me, which one is the dictionary?",
    hint: "Three or more items to choose from",
    answers: [
      {
        segments: [
          { text: "すみません、" },
          { text: "辞書[じしょ]はどれ", blank: true },
          { text: "ですか" },
        ],
        notes: "Noun は どれ structure; すみません for \"Excuse me\"",
      },
      {
        segments: [
          { text: "すみません、" },
          { text: "どれが 辞書[じしょ]", blank: true },
          { text: "ですか" },
        ],
        notes: "どれ が Noun です structure; reversed word order",
      },
      {
        segments: [
          { text: "すいません、" },
          { text: "辞書[じしょ]はどれ", blank: true },
          { text: "ですか" },
        ],
        notes: "すいません variant; Noun は どれ structure; すみません for \"Excuse me\"",
      },
      {
        segments: [
          { text: "すいません、" },
          { text: "どれが 辞書[じしょ]", blank: true },
          { text: "ですか" },
        ],
        notes: "すいません variant; どれ が Noun です structure; reversed word order",
      },
      {
        segments: [
          { text: "あのう、" },
          { text: "辞書[じしょ]はどれ", blank: true },
          { text: "ですか" },
        ],
        notes: "Using あのう instead of すみません for \"Excuse me/Um...\"; Noun は どれ structure",
      },
      {
        segments: [
          { text: "あのう、" },
          { text: "どれが 辞書[じしょ]", blank: true },
          { text: "ですか" },
        ],
        notes: "Using あのう instead of すみません; どれ が Noun です structure",
      },
    ],
  },
  {
    english: "That umbrella over there is Professor Yamada's.",
    hint: "Yamada = 山田 (やまだ); Visible at the end of the hallway",
    answers: [
      {
        segments: [
          { text: "あの 傘[かさ]は", blank: true },
          { text: "山田[やまだ]先生[せんせい]のです" },
        ],
        notes: "山田先生のです",
      },
      {
        segments: [
          { text: "あれは", blank: true },
          { text: "山田[やまだ]先生[せんせい]の 傘[かさ]です" },
        ],
        notes: "あれは variant",
      },
      {
        segments: [{ text: "山田[やまだ]先生[せんせい]の 傘[かさ]です" }],
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
    english: "Which one is my notebook?",
    answers: [
      {
        segments: [
          { text: "どれが 私[わたし]のノート", blank: true },
          { text: "ですか" },
        ],
        notes: "どれ + が + Noun + です pattern, question with が",
      },
      {
        segments: [
          { text: "私[わたし]のノートはどれ", blank: true },
          { text: "ですか" },
        ],
        notes: "Noun + は + どれ + ですか pattern, standard word order",
      },
    ],
  },
  {
    english: "Is that Sato's watch?",
    hint: "Sato = 佐藤 (さとう); In the listener's hand",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "佐藤[さとう]さんの 時計[とけい]ですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [
          { text: "それ、", blank: true },
          { text: "佐藤[さとう]さんの 時計[とけい]ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [{ text: "佐藤[さとう]さんの 時計[とけい]ですか" }],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "Which one is today's newspaper?",
    hint: "Ask about one item from a group of three or more",
    answers: [
      {
        segments: [
          { text: "どれが 今日[きょう]の 新聞[しんぶん]", blank: true },
          { text: "ですか" },
        ],
        notes: "どれ + が variant",
      },
      {
        segments: [
          { text: "今日[きょう]の 新聞[しんぶん]はどれ", blank: true },
          { text: "ですか" },
        ],
        notes: "Noun + は + どれ variant",
      },
    ],
  },
  {
    english: "That bank employee over there is Chinese.",
    hint: "Can be seen through the window",
    answers: [
      {
        segments: [
          { text: "あちらの 銀行[ぎんこう]の 会社員[かいしゃいん]は", blank: true },
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
      {
        segments: [
          { text: "このコンビニ、", blank: true },
          { text: "魚[さかな]が 高[たか]いです" },
        ],
        notes: "More natural phrasing."
      },
    ],
  },
  {
    english: "Is that your (Yamada's) dictionary?",
    hint: "Yamada = 山田 (やまだ); Next to where the listener is sitting; dictionary = 辞書 (じしょ)",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "山田[やまだ]さんの 辞書[じしょ]ですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [
          { text: "これ、", blank: true },
          { text: "山田[やまだ]さんの 辞書[じしょ]ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [{ text: "山田[やまだ]さんの 辞書[じしょ]ですか" }],
        notes: "More natural version without それは",
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
    english: "Excuse me, which one is the dictionary?",
    hint: "Three or more items to choose from",
    answers: [
      {
        segments: [
          { text: "すみません、" },
          { text: "辞書[じしょ]はどれ", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Noun は どれ structure; すみません for \"Excuse me\"",
      },
      {
        segments: [
          { text: "すみません、" },
          { text: "どれが 辞書[じしょ]", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "どれ が Noun です structure; reversed word order",
      },
      {
        segments: [
          { text: "すいません、" },
          { text: "辞書[じしょ]はどれ", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "すいません variant; Noun は どれ structure; すみません for \"Excuse me\"",
      },
      {
        segments: [
          { text: "すいません、" },
          { text: "どれが 辞書[じしょ]", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "すいません variant; どれ が Noun です structure; reversed word order",
      },
      {
        segments: [
          { text: "あのう、" },
          { text: "辞書[じしょ]はどれ", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あのう instead of すみません for \"Excuse me/Um...\"; Noun は どれ structure",
      },
      {
        segments: [
          { text: "あのう、" },
          { text: "どれが 辞書[じしょ]", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あのう instead of すみません; どれ が Noun です structure",
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
    english: "Is that your (Fujii's) bicycle?",
    hint: "Fujii = 藤井 (ふじい); Bike parked near the listener",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "藤井[ふじい]さんの 自転車[じてんしゃ]ですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [
          { text: "それ、", blank: true },
          { text: "藤井[ふじい]さんの 自転車[じてんしゃ]ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [{ text: "藤井[ふじい]さんの 自転車[じてんしゃ]ですか" }],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "This is 10,000 yen.",
    hint: "At a store counter, telling customer the price",
    answers: [
      {
        segments: [
          { text: "これは", blank: true },
          { text: "一万[いちまん]円[えん]です" },
        ],
      },
      {
        segments: [
          { text: "これ、", blank: true },
          { text: "一万[いちまん]円[えん]です" },
        ],
        notes: "Shorter with 、instead of は"
      },
    ],
  },
  {
    english: "Is that your (Suzuki's) wallet?",
    hint: "Suzuki = 鈴木 (すずき); On the table between speaker and listener",
    answers: [
      {
        segments: [
          { text: "それは", blank: true },
          { text: "鈴木[すずき]さんの 財布[さいふ]ですか" },
        ],
        notes: "Full sentence with それ",
      },
      {
        segments: [
          { text: "それ、", blank: true },
          { text: "鈴木[すずき]さんの 財布[さいふ]ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [{ text: "鈴木[すずき]さんの 財布[さいふ]ですか" }],
        notes: "More natural, casual version without それは",
      },
    ],
  },
  {
    english: "This is delicious.",
    hint: "Visible from the train station",
    answers: [
      {
        segments: [{ text: "これは", blank: true }, { text: "おいしいです" }],
        notes: "Full sentence with これ",
      },
      {
        segments: [
          { text: "これ、", blank: true },
        { text: "おいしいです" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [{ text: "おいしいです" }],
        notes: "More natural, casual version without これは",
      },
    ],
  },
  {
    english: "That bag over there is mine.",
    hint: "Use the demonstrative for something far from both speaker and listener.",
    answers: [
      {
        segments: [
          { text: "あの", blank: true },
          { text: "かばんは 私[わたし]のです" },
        ],
        notes: "あの marks something far from both speaker and listener.",
      },
      {
        segments: [
          { text: "あの", blank: true },
          { text: "かばんが 私[わたし]のです" },
        ],
        notes: "Using が instead of は — emphasizes identifying that specific bag as mine",
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
      {
        segments: [
          { text: "これ、", blank: true },
          { text: "日本語[にほんご]のクラスです" },
        ],
        notes: "Shorter with 、instead of は"
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
        segments: [
          { text: "これ、", blank: true },
          { text: "英語[えいご]のクラスですか" },
        ],
        notes: "Shorter with 、instead of は"
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
    english: "Kaede, where is your desk?",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さん、" },
          { text: "机[つくえ]はどこ", blank: true },
          { text: "ですか" },
        ],
        notes: "Direct address to Kaede, asking where the desk is; possession implied by address",
      },
    ],
  },
  {
    english: "Where is Mizuki's bag?",
    hint: "Mizuki = 瑞希 (みずき)",
    answers: [
      {
        segments: [
          { text: "瑞希[みずき]さんの" },
          { text: "かばんはどこ", blank: true },
          { text: "ですか" },
        ],
      },
      {
        segments: [
          { text: "瑞希[みずき]さんの" },
          { text: "鞄[かばん]はどこ", blank: true },
          { text: "ですか" },
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
      {
        segments: [
          { text: "この 靴[くつ]、", blank: true },
          { text: "高[たか]いです" },
        ],
        notes: "Shorter with 、instead of は"
      },
    ],
  },
]

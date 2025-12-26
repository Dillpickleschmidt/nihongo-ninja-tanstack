import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "The professor is (graciously) reading a book at the library.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 図書館[としょかん]で 本[ほん]を" },
          { text: "お 読[よ]みになっています", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "先生[せんせい]は 図書館[としょかん]で 本[ほん]を" },
          { text: "ご 覧[らん]になっています", blank: true },
        ],
        notes: "Uses ご覧になる for 'reading' in an honorific context.",
      },
      {
        segments: [
          { text: "先生[せんせい]は 図書館[としょかん]で 本[ほん]を" },
          { text: "読[よ]んでいらっしゃいます", blank: true },
        ],
        notes: "Uses ～ていらっしゃいます construction.",
      },
    ],
  },
  {
    english:
      "Where will the professor graciously stay? (staying at a hotel/inn)",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]はどちらへ" },
          { text: "お 泊[と]まりになります", blank: true },
          { text: "か" },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "先生[せんせい]はどちらに" },
          { text: "お 泊[と]まりになりますか", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "先生[せんせい]はどちらに" },
          { text: "お 泊[と]まりですか", blank: true },
        ],
        notes: "Uses お泊まり as a noun with です.",
      },
      {
        segments: [
          { text: "どこへ 先生[せんせい]が" },
          { text: "お 泊[と]まりになりますか", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "どこに 先生[せんせい]が" },
          { text: "お 泊[と]まりになりますか", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
    ],
  },
  {
    english: "The department manager (graciously) welcomed the new employee.",
    hint: "社員（しゃいん）- employee; 迎える（むかえる）- to welcome/greet",
    answers: [
      {
        segments: [
          { text: "部長[ぶちょう]は 新[あたら]しい 社員[しゃいん]を" },
          { text: "お 迎[むか]えになりました", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]が 新[あたら]しい 社員[しゃいん]を" },
          { text: "お 迎[むか]えになりました", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
    ],
  },
  {
    english: "What does the professor (graciously) intend to say?",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 何[なに]を" },
          { text: "おっしゃる", blank: true },
          { text: "つもりですか" },
        ],
        notes: "Uses おっしゃる (honorific for 言う).",
      },
      {
        segments: [
          { text: "先生[せんせい]は 何[なん]と" },
          { text: "おっしゃいますか", blank: true },
        ],
        notes: "Uses おっしゃいます (present tense of おっしゃる).",
      },
    ],
  },
  {
    english:
      "The company president was busy, but she (graciously) gave us advice.",
    answers: [
      {
        segments: [
          {
            text: "社長[しゃちょう]はお 忙[いそが]しかったですが、私[わたし]たちにアドバイスを",
          },
          { text: "くださいました", blank: true },
        ],
        notes: "私たちに.",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]はお 忙[いそが]しかったですが、アドバイスを",
          },
          { text: "くださいました", blank: true },
        ],
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]はお 忙[いそが]しかったですが、私[わたし]たちにアドバイスを",
          },
          { text: "してくださいました", blank: true },
        ],
        notes: "Uses してくださいました for 'giving advice.'",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]はお 忙[いそが]しかったですが、アドバイスを",
          },
          { text: "してくださいました", blank: true },
        ],
        notes: "Uses してくださいました for 'giving advice.'",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]がお 忙[いそが]しかったですが、私[わたし]たちにアドバイスを",
          },
          { text: "くださいました", blank: true },
        ],
        notes: "私たちに.",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]がお 忙[いそが]しかったですが、アドバイスを",
          },
          { text: "くださいました", blank: true },
        ],
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]がお 忙[いそが]しかったですが、私[わたし]たちにアドバイスを",
          },
          { text: "してくださいました", blank: true },
        ],
        notes: "Uses してくださいました for 'giving advice.'",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]がお 忙[いそが]しかったですが、アドバイスを",
          },
          { text: "してくださいました", blank: true },
        ],
        notes: "Uses してくださいました for 'giving advice.'",
      },
    ],
  },
  {
    english:
      "Mr. Yamamoto's father (graciously) reads the newspaper every morning.",
    answers: [
      {
        segments: [
          {
            text: "山本[やまもと]さんのお 父[とう]さんは 毎朝[まいあさ]新聞[しんぶん]を",
          },
          { text: "ご 覧[らん]になります", blank: true },
        ],
        notes:
          "Uses ご覧になります for 'reading' or 'looking at' in an honorific way.",
      },
      {
        segments: [
          {
            text: "山本[やまもと]さんのお 父[とう]様[さま]は 毎朝[まいあさ]新聞[しんぶん]を",
          },
          { text: "ご 覧[らん]になります", blank: true },
        ],
        notes: "Uses お父様 instead of お父さん for added formality.",
      },
      {
        segments: [
          {
            text: "山本[やまもと]さんのお 父[とう]さんは 毎朝[まいあさ]新聞[しんぶん]を",
          },
          { text: "お 読[よ]みになります", blank: true },
        ],
        notes: "Uses お読みになる for 'reading' in an honorific way.",
      },
      {
        segments: [
          {
            text: "山本[やまもと]さんのお 父[とう]様[さま]は 毎朝[まいあさ]新聞[しんぶん]を",
          },
          { text: "お 読[よ]みになります", blank: true },
        ],
        notes: "Uses お父様 instead of お父さん for added formality.",
      },
    ],
  },
  {
    english: "Where do you (graciously) plan to go this weekend?",
    answers: [
      {
        segments: [
          { text: "今週末[こんしゅうまつ]はどちらへ" },
          { text: "お 出[で]かけになるつもりですか", blank: true },
        ],
        notes: "へ",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]はどちらに" },
          { text: "お 出[で]かけになるつもりですか", blank: true },
        ],
        notes: "に",
      },
    ],
  },
  {
    english: "Will Mrs. Kaede be attnding the summer festival this weekend?",
    hint: "お越す（おこす）- to attend, 楓(かえで) - Kaede",
    answers: [
      {
        segments: [
          {
            text: "楓[かえで]様[さま]は 今週末[こんしゅうまつ]の 夏祭[なつまつ]りに",
          },
          { text: "お 越[こし]になりますか", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          {
            text: "楓[かえで]様[さま]が 今週末[こんしゅうまつ]の 夏祭[なつまつ]りに",
          },
          { text: "お 越[こし]になりますか", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
    ],
  },
  {
    english: "The professor (graciously) gave me this book.",
    hint: "You could optionally use 渡す（わたす）- to hand over, to give",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]がこの 本[ほん]を" },
          { text: "くださいました", blank: true },
        ],
        notes: "Uses くださいました to describe the act of giving.",
      },
      {
        segments: [
          { text: "先生[せんせい]がこの 本[ほん]を" },
          { text: "渡[わた]てくださいました", blank: true },
        ],
        notes: "Uses 渡てくださいました.",
      },
    ],
  },
  {
    english: "The professor (graciously) talked about next month's trip.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 来月[らいげつ]の 旅行[りょこう]について" },
          { text: "お 話[はな]しになりました", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "先生[せんせい]は 来月[らいげつ]の 旅行[りょこう]について" },
          { text: "おっしゃいました", blank: true },
        ],
        notes: "Uses おっしゃいました (honorific for 言う).",
      },
    ],
  },
  {
    english: "Have you reviewed the new website design yet?",
    hint: "a.k.a. look at/look over; ウェブサイトのデザイン",
    answers: [
      {
        segments: [
          { text: "新[あたら]しいウェブサイトのデザインを" },
          { text: "ご 覧[らん]になりましたか", blank: true },
        ],
        notes:
          "Uses ご覧になる in the past tense to ask about reviewing in an honorific way.",
      },
      {
        segments: [
          { text: "もう 新[あたら]しいウェブサイトのデザインを" },
          { text: "ご 覧[らん]になりましたか", blank: true },
        ],
        notes: "もう adds the sense of 'already/yet' to the question.",
      },
      {
        segments: [
          { text: "新[あたら]しいウェブサイトのデザインは" },
          { text: "ご 覧[らん]になりましたか", blank: true },
        ],
        notes: "Uses は instead of を for a softer, less direct phrasing.",
      },
      {
        segments: [
          { text: "新[あたら]しいウェブサイトのデザインを" },
          { text: "お 目[め]通[どおし]しになりましたか", blank: true },
        ],
        notes:
          "Uses お目通し, a more formal/written way to say 'review/look through' in an honorific context.",
      },
    ],
  },
  {
    english: "Right now, the company president is on the phone.",
    answers: [
      {
        segments: [
          { text: "今[いま]社長[しゃちょう]は 電話[でんわ]で" },
          { text: "お 話[はな]しになっています", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "今[いま]社長[しゃちょう]は 電話[でんわ]で" },
          { text: "話[はな]していらっしゃいます", blank: true },
        ],
        notes: "Uses ～ていらっしゃいます construction.",
      },
      {
        segments: [
          { text: "今[いま]社長[しゃちょう]は 電話[でんわ]に" },
          { text: "出[で]ていらっしゃいます", blank: true },
        ],
        notes:
          "Uses ～ていらっしゃいます with 出る to describe answering the phone.",
      },
      {
        segments: [
          { text: "ただいま 社長[しゃちょう]は 電話[でんわ]で" },
          { text: "お 話[はな]しになっています", blank: true },
        ],
        notes: "Replaces 今 with ただいま for a more formal tone.",
      },
      {
        segments: [
          { text: "ただいま 社長[しゃちょう]は 電話[でんわ]で" },
          { text: "話[はな]していらっしゃいます", blank: true },
        ],
        notes: "Replaces 今 with ただいま and uses ～ていらっしゃいます.",
      },
      {
        segments: [
          { text: "ただいま 社長[しゃちょう]は 電話[でんわ]に" },
          { text: "出[で]ていらっしゃいます", blank: true },
        ],
        notes:
          "Replaces 今 with ただいま and uses 出る with ～ていらっしゃいます.",
      },
    ],
  },
  {
    english: "Did the master of the house graciously read Hanako's letter?",
    answers: [
      {
        segments: [
          { text: "主人[しゅじん]は 花子[はなこ]さんの 手紙[てがみ]を" },
          { text: "お 読[よ]みになりましたか", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "主人[しゅじん]が 花子[はなこ]さんの 手紙[てがみ]を" },
          { text: "お 読[よ]みになりましたか", blank: true },
        ],
        notes: "Uses が to mark the subject instead of は.",
      },
      {
        segments: [
          { text: "主人[しゅじん]は 花子[はなこ]さんの 手紙[てがみ]は" },
          { text: "お 読[よ]みになりましたか", blank: true },
        ],
        notes: "Uses は twice for a softer, more indirect phrasing.",
      },
      {
        segments: [
          { text: "主人[しゅじん]が 花子[はなこ]さんの 手紙[てがみ]は" },
          { text: "お 読[よ]みになりましたか", blank: true },
        ],
        notes: "Uses が with は for another variation.",
      },
    ],
  },
  {
    english: "The professor (graciously) eats at this restaurant.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]はこのレストランで" },
          { text: "召[め]し上[あ]がります", blank: true },
        ],
        notes: "Uses 召し上がる (honorific for 食べる).",
      },
      {
        segments: [
          { text: "先生[せんせい]はこのレストランで" },
          { text: "お 食事[しょくじ]になります", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
    ],
  },
  {
    english: "The professor (graciously) answered our questions.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 私[わたし]たちの 質問[しつもん]に" },
          { text: "答[こた]えてくださいました", blank: true },
        ],
        notes: "Uses てくださる construction.",
      },
      {
        segments: [
          { text: "先生[せんせい]が 私[わたし]たちの 質問[しつもん]に" },
          { text: "答[こた]えてくださいました", blank: true },
        ],
        notes: "Uses てくださる construction.",
      },
      {
        segments: [
          { text: "先生[せんせい]は 私[わたし]たちの 質問[しつもん]に" },
          { text: "お 答[こた]えになりました", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "先生[せんせい]が 私[わたし]たちの 質問[しつもん]に" },
          { text: "お 答[こた]えになりました", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
    ],
  },
  {
    english: "Have you ever read that book before?",
    answers: [
      {
        segments: [
          { text: "その 本[ほん]を" },
          { text: "お 読[よ]みになったことがありますか", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "その 本[ほん]を" },
          { text: "ご 覧[らん]になったことがありますか", blank: true },
        ],
        notes: "Uses ご覧になる to describe 'reading' in an honorific way.",
      },
    ],
  },
  {
    english:
      "The company president is graciously writing a report in the office right now.",
    answers: [
      {
        segments: [
          { text: "社長[しゃちょう]は 今[いま]オフィスでレポートを" },
          { text: "書[か]いていらっしゃいます", blank: true },
        ],
        notes: "Uses ～ていらっしゃいます.",
      },
      {
        segments: [
          { text: "社長[しゃちょう]は 今[いま]オフィスでレポートを" },
          { text: "お 書[か]きになっています", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
    ],
  },
  {
    english: "The professor is (graciously) thinking about the new project.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 新[あたら]しいプロジェクトについて" },
          { text: "お 考[かんが]えになっています", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "先生[せんせい]は 新[あたら]しいプロジェクトについて" },
          { text: "考[かんが]えていらっしゃいます", blank: true },
        ],
        notes: "Uses ～ていらっしゃいます construction.",
      },
    ],
  },
  {
    english: "The professor (graciously) stopped by the office.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 事務所[じむしょ]に" },
          { text: "お 寄[よ]りになりました", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "先生[せんせい]はオフィスに" },
          { text: "お 寄[よ]りになりました", blank: true },
        ],
        notes:
          "Uses お[verb stem]になる construction with 'オフィス' instead of '事務所.'",
      },
    ],
  },
  {
    english: "The professor (graciously) drinks tea every morning.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 毎朝[まいあさ]お 茶[ちゃ]を" },
          { text: "召[め]し 上[あ]がります", blank: true },
        ],
        notes: "Uses 召し上がる (honorific for 飲む).",
      },
      {
        segments: [
          { text: "毎朝[まいあさ]、先生[せんせい]はお 茶[ちゃ]を" },
          { text: "召[め]し 上[あ]がります", blank: true },
        ],
        notes: "Uses 召し上がる (honorific for 飲む).",
      },
      {
        segments: [
          { text: "毎朝[まいあさ]、先生[せんせい]がお 茶[ちゃ]を" },
          { text: "召[め]し 上[あ]がります", blank: true },
        ],
        notes: "Uses 召し上がる (honorific for 飲む).",
      },
    ],
  },
  {
    english: "The professor (graciously) sleeps early every night.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 毎晩[まいばん]早[はや]く" },
          { text: "お 休[やす]みになります", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "毎晩[まいばん]、先生[せんせい]は 早[はや]く" },
          { text: "お 休[やす]みになります", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
      {
        segments: [
          { text: "毎晩[まいばん]、先生[せんせい]が 早[はや]く" },
          { text: "お 休[やす]みになります", blank: true },
        ],
        notes: "Uses お[verb stem]になる construction.",
      },
    ],
  },
]

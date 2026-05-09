import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "The professor is (graciously) reading a book at the library.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 図書館[としょかん]で 本[ほん]を" },
          { text: "お 読[よ]みになって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]は 図書館[としょかん]で 本[ほん]を" },
          { text: "ご 覧[らん]になって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "ご 覧[らん]になる can mean reading or looking at something honorifically.",
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]は 図書館[としょかん]で 本[ほん]を" },
          { text: "読[よ]んで", blank: true },
          { text: "いらっしゃいます", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "教授[きょうじゅ]は 図書館[としょかん]で 本[ほん]を" },
          { text: "読[よ]んで", blank: true },
          { text: "いらっしゃいます", blank: true },
        ],
        notes: "教授 (professor) instead of 先生",
        register: "polite",
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
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]はどちらに" },
          { text: "お 泊[と]まりになります", blank: true },
          { text: "か" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]はどちらに" },
          { text: "お 泊[と]まりです", blank: true },
          { text: "か" },
        ],
        notes: "お 泊[と]まりです uses a noun-like phrasing for staying.",
        register: "polite",
      },
      {
        segments: [
          { text: "どこへ 先生[せんせい]が" },
          { text: "お 泊[と]まりになります", blank: true },
          { text: "か" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "どこに 先生[せんせい]が" },
          { text: "お 泊[と]まりになります", blank: true },
          { text: "か" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "The department manager (graciously) welcomed the new employee.",
    hint: "社員 (しゃいん) - employee; 迎える (むかえる) - to welcome/greet",
    answers: [
      {
        segments: [
          { text: "部長[ぶちょう]は 新[あたら]しい 社員[しゃいん]を" },
          { text: "お 迎[むか]えになりました", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "部長[ぶちょう]が 新[あたら]しい 社員[しゃいん]を" },
          { text: "お 迎[むか]えになりました", blank: true },
        ],
        register: "polite",
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
          { text: "つもりです" },
          { text: "か" },
        ],
        notes: "おっしゃる is an honorific way to say 言[い]う.",
        register: "polite",
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
        notes: "私[わたし]たちに makes the recipient explicit.",
        register: "polite",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]はお 忙[いそが]しかったですが、アドバイスを",
          },
          { text: "くださいました", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]はお 忙[いそが]しかったですが、私[わたし]たちにアドバイスを",
          },
          { text: "してくださいました", blank: true },
        ],
        notes:
          "アドバイスをする treats advice as something the president did for us.",
        register: "polite",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]はお 忙[いそが]しかったですが、アドバイスを",
          },
          { text: "してくださいました", blank: true },
        ],
        notes:
          "アドバイスをする treats advice as something the president did for us.",
        register: "polite",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]がお 忙[いそが]しかったですが、私[わたし]たちにアドバイスを",
          },
          { text: "くださいました", blank: true },
        ],
        notes: "私[わたし]たちに makes the recipient explicit.",
        register: "polite",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]がお 忙[いそが]しかったですが、アドバイスを",
          },
          { text: "くださいました", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]がお 忙[いそが]しかったですが、私[わたし]たちにアドバイスを",
          },
          { text: "してくださいました", blank: true },
        ],
        notes:
          "アドバイスをする treats advice as something the president did for us.",
        register: "polite",
      },
      {
        segments: [
          {
            text: "社長[しゃちょう]がお 忙[いそが]しかったですが、アドバイスを",
          },
          { text: "してくださいました", blank: true },
        ],
        notes:
          "アドバイスをする treats advice as something the president did for us.",
        register: "polite",
      },
    ],
  },
  {
    english:
      "Mori's father (graciously) reads the newspaper every morning.",
    hint: "Mori = 森 (もり)",
    answers: [
      {
        segments: [
          {
            text: "森[もり]さんのお 父[とう]さんは 毎朝[まいあさ]新聞[しんぶん]を",
          },
          { text: "ご 覧[らん]になります", blank: true },
        ],
        notes:
          "ご 覧[らん]になる can mean reading or looking at something honorifically.",
        register: "polite",
      },
      {
        segments: [
          {
            text: "森[もり]さんのお 父[とう]様[さま]は 毎朝[まいあさ]新聞[しんぶん]を",
          },
          { text: "ご 覧[らん]になります", blank: true },
        ],
        notes: "お 父[とう]様[さま] is more formal than お 父[とう]さん.",
        register: "polite",
      },
      {
        segments: [
          {
            text: "森[もり]さんのお 父[とう]さんは 毎朝[まいあさ]新聞[しんぶん]を",
          },
          { text: "お 読[よ]みになります", blank: true },
        ],
        notes: "お 読[よ]みになる is an honorific way to say 読[よ]む.",
        register: "polite",
      },
      {
        segments: [
          {
            text: "森[もり]さんのお 父[とう]様[さま]は 毎朝[まいあさ]新聞[しんぶん]を",
          },
          { text: "お 読[よ]みになります", blank: true },
        ],
        notes: "お 父[とう]様[さま] is more formal than お 父[とう]さん.",
        register: "polite",
      },
    ],
  },
  {
    english: "Where do you (graciously) plan to go this weekend?",
    answers: [
      {
        segments: [
          { text: "今週末[こんしゅうまつ]はどちらへ" },
          { text: "お 出[で]かけになるつもりです", blank: true },
          { text: "か" },
        ],
        notes: "へ marks the destination direction.",
        register: "polite",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]はどちらに" },
          { text: "お 出[で]かけになるつもりです", blank: true },
          { text: "か" },
        ],
        notes: "に marks the destination point.",
        register: "polite",
      },
    ],
  },
  {
    english: "Will Mrs. Kaede be attending the summer festival this weekend?",
    hint: "お越しになる (おこしになる) - to attend/come/go (honorific); Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          {
            text: "楓[かえで]さんは 今週末[こんしゅうまつ]の 夏祭[なつまつ]りに",
          },
          { text: "お 越[こ]しになります", blank: true },
          { text: "か" },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "楓[かえで]さんが 今週末[こんしゅうまつ]の 夏祭[なつまつ]りに",
          },
          { text: "お 越[こ]しになります", blank: true },
          { text: "か" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "The professor (graciously) gave me this book.",
    hint: "渡す (わたす) - to hand over, to give",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]がこの 本[ほん]を" },
          { text: "くださいました", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]がこの 本[ほん]を" },
          { text: "渡[わた]してくださいました", blank: true },
        ],
        notes: "渡[わた]す makes the handover explicit.",
        register: "polite",
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
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]は 来月[らいげつ]の 旅行[りょこう]について" },
          { text: "おっしゃいました", blank: true },
        ],
        notes: "おっしゃる is an honorific way to say 言[い]う.",
        register: "polite",
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
          { text: "ご 覧[らん]になりました", blank: true },
          { text: "か" },
        ],
        notes:
          "ご 覧[らん]になる can mean looking over or reviewing something honorifically.",
        register: "polite",
      },
      {
        segments: [
          { text: "もう 新[あたら]しいウェブサイトのデザインを" },
          { text: "ご 覧[らん]になりました", blank: true },
          { text: "か" },
        ],
        notes: "もう adds the sense of 'already/yet' to the question.",
        register: "polite",
      },
      {
        segments: [
          { text: "新[あたら]しいウェブサイトのデザインは" },
          { text: "ご 覧[らん]になりました", blank: true },
          { text: "か" },
        ],
        notes: "は makes the website design the topic.",
        register: "polite",
      },
      {
        segments: [
          { text: "新[あたら]しいウェブサイトのデザインを" },
          { text: "お 目[め]通[どお]しになりました", blank: true },
          { text: "か" },
        ],
        notes:
          "お 目[め]通[どお]し is a formal way to say someone looks over something.",
        register: "polite",
      },
    ],
  },
  {
    english: "Right now, the company president is on the phone.",
    answers: [
      {
        segments: [
          { text: "今[いま]社長[しゃちょう]は 電話[でんわ]で" },
          { text: "お 話[はな]しになって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今[いま]社長[しゃちょう]は 電話[でんわ]で" },
          { text: "話[はな]して", blank: true },
          { text: "いらっしゃいます", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今[いま]社長[しゃちょう]は 電話[でんわ]に" },
          { text: "出[で]て", blank: true },
          { text: "いらっしゃいます", blank: true },
        ],
        notes: "電話[でんわ]に 出[で]る means to answer or be on the phone.",
        register: "polite",
      },
      {
        segments: [
          { text: "ただいま 社長[しゃちょう]は 電話[でんわ]で" },
          { text: "お 話[はな]しになって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ただいま sounds more formal than 今[いま].",
        register: "polite",
      },
      {
        segments: [
          { text: "ただいま 社長[しゃちょう]は 電話[でんわ]で" },
          { text: "話[はな]して", blank: true },
          { text: "いらっしゃいます", blank: true },
        ],
        notes: "ただいま sounds more formal than 今[いま].",
        register: "polite",
      },
      {
        segments: [
          { text: "ただいま 社長[しゃちょう]は 電話[でんわ]に" },
          { text: "出[で]て", blank: true },
          { text: "いらっしゃいます", blank: true },
        ],
        notes:
          "ただいま sounds more formal; 電話[でんわ]に 出[で]る means to answer or be on the phone.",
        register: "polite",
      },
    ],
  },
  {
    english: "Did the master of the house graciously read Hanako's letter?",
    answers: [
      {
        segments: [
          { text: "主人[しゅじん]は 花子[はなこ]さんの 手紙[てがみ]を" },
          { text: "お 読[よ]みになりました", blank: true },
          { text: "か" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "主人[しゅじん]が 花子[はなこ]さんの 手紙[てがみ]を" },
          { text: "お 読[よ]みになりました", blank: true },
          { text: "か" },
        ],
        notes: "が marks the subject directly.",
        register: "polite",
      },
      {
        segments: [
          { text: "主人[しゅじん]は 花子[はなこ]さんの 手紙[てがみ]は" },
          { text: "お 読[よ]みになりました", blank: true },
          { text: "か" },
        ],
        notes: "The second は makes Hanako's letter the topic.",
        register: "polite",
      },
      {
        segments: [
          { text: "主人[しゅじん]が 花子[はなこ]さんの 手紙[てがみ]は" },
          { text: "お 読[よ]みになりました", blank: true },
          { text: "か" },
        ],
        notes: "が marks the reader, while は makes Hanako's letter the topic.",
        register: "polite",
      },
    ],
  },
  {
    english: "The professor (graciously) eats at this restaurant.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]はこのレストランで" },
          { text: "召[め]し 上[あ]がります", blank: true },
        ],
        notes: "召[め]し 上[あ]がる is an honorific way to say 食[た]べる.",
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]はこのレストランで" },
          { text: "お 食事[しょくじ]になります", blank: true },
        ],
        register: "polite",
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
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]が 私[わたし]たちの 質問[しつもん]に" },
          { text: "答[こた]えてくださいました", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]は 私[わたし]たちの 質問[しつもん]に" },
          { text: "お 答[こた]えになりました", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]が 私[わたし]たちの 質問[しつもん]に" },
          { text: "お 答[こた]えになりました", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "Have you ever read that book before?",
    answers: [
      {
        segments: [
          { text: "その 本[ほん]を" },
          { text: "お 読[よ]みになったことがあります", blank: true },
          { text: "か" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "その 本[ほん]を" },
          { text: "ご 覧[らん]になったことがあります", blank: true },
          { text: "か" },
        ],
        notes:
          "ご 覧[らん]になる can mean reading or looking at something honorifically.",
        register: "polite",
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
          { text: "書[か]いて", blank: true },
          { text: "いらっしゃいます", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "社長[しゃちょう]は 今[いま]オフィスでレポートを" },
          { text: "お 書[か]きになって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "The professor is (graciously) thinking about the new project.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 新[あたら]しいプロジェクトについて" },
          { text: "お 考[かんが]えになって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]は 新[あたら]しいプロジェクトについて" },
          { text: "考[かんが]えて", blank: true },
          { text: "いらっしゃいます", blank: true },
        ],
        register: "polite",
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
        register: "polite",
      },
      {
        segments: [
          { text: "先生[せんせい]はオフィスに" },
          { text: "お 寄[よ]りになりました", blank: true },
        ],
        notes: "オフィス is a loanword alternative to 事務所[じむしょ].",
        register: "polite",
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
        notes: "召[め]し 上[あ]がる is an honorific way to say 飲[の]む.",
        register: "polite",
      },
      {
        segments: [
          { text: "毎朝[まいあさ]、先生[せんせい]はお 茶[ちゃ]を" },
          { text: "召[め]し 上[あ]がります", blank: true },
        ],
        notes: "召[め]し 上[あ]がる is an honorific way to say 飲[の]む.",
        register: "polite",
      },
      {
        segments: [
          { text: "毎朝[まいあさ]、先生[せんせい]がお 茶[ちゃ]を" },
          { text: "召[め]し 上[あ]がります", blank: true },
        ],
        notes: "召[め]し 上[あ]がる is an honorific way to say 飲[の]む.",
        register: "polite",
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
        register: "polite",
      },
      {
        segments: [
          { text: "毎晩[まいばん]、先生[せんせい]は 早[はや]く" },
          { text: "お 休[やす]みになります", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "毎晩[まいばん]、先生[せんせい]が 早[はや]く" },
          { text: "お 休[やす]みになります", blank: true },
        ],
        register: "polite",
      },
    ],
  },
]

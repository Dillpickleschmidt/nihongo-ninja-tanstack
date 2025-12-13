import type { Question } from "../types"

export const questions: Question[] = [
  {
    "english": "The professor is (graciously) reading a book at the library.",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]は 図書館[としょかん]で 本[ほん]を"
          },
          {
            "text": "お 読[よ]みになっています",
            "blank": true
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]は 図書館[としょかん]で 本[ほん]を"
          },
          {
            "text": "ご 覧[らん]になっています",
            "blank": true
          }
        ],
        "notes": "Uses ご覧になる for 'reading' in an honorific context."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]は 図書館[としょかん]で 本[ほん]を 読[よ]んでいらっしゃいます"
          }
        ],
        "notes": "Uses ～ていらっしゃいます construction."
      }
    ]
  },
  {
    "english": "Where will the professor graciously stay? (staying at a hotel/inn)",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]はどちらへ"
          },
          {
            "text": "お 泊[と]まりになります",
            "blank": true
          },
          {
            "text": "か"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]はどちらにお 泊[と]まりになりますか"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]はどちらにお 泊[と]まりですか"
          }
        ],
        "notes": "Uses お泊まり as a noun with です."
      },
      {
        "segments": [
          {
            "text": "どこへ 先生[せんせい]がお 泊[と]まりになりますか"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "どこに 先生[せんせい]がお 泊[と]まりになりますか"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      }
    ]
  },
  {
    "english": "The department manager (graciously) welcomed the new employee.",
    "hint": "社員（しゃいん）- employee; 迎える（むかえる）- to welcome/greet",
    "answers": [
      {
        "segments": [
          {
            "text": "部長[ぶちょう]は 新[あたら]しい 社員[しゃいん]を"
          },
          {
            "text": "お 迎[むか]えになりました",
            "blank": true
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "部長[ぶちょう]が 新[あたら]しい 社員[しゃいん]をお 迎[むか]えになりました"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      }
    ]
  },
  {
    "english": "What does the professor (graciously) intend to say?",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]は 何[なに]を"
          },
          {
            "text": "おっしゃる",
            "blank": true
          },
          {
            "text": "つもりですか"
          }
        ],
        "notes": "Uses おっしゃる (honorific for 言う)."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]は 何[なん]とおっしゃいますか"
          }
        ],
        "notes": "Uses おっしゃいます (present tense of おっしゃる)."
      }
    ]
  },
  {
    "english": "The company president was busy, but she (graciously) gave us advice.",
    "answers": [
      {
        "segments": [
          {
            "text": "社長[しゃちょう]はお 忙[いそが]しかったですが、私[わたし]たちにアドバイスを"
          },
          {
            "text": "くださいました",
            "blank": true
          }
        ],
        "notes": "私たちに."
      },
      {
        "segments": [
          {
            "text": "社長[しゃちょう]はお 忙[いそが]しかったですが、アドバイスをくださいました"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "社長[しゃちょう]はお 忙[いそが]しかったですが、私[わたし]たちにアドバイスをしてくださいました"
          }
        ],
        "notes": "Uses してくださいました for 'giving advice.'"
      },
      {
        "segments": [
          {
            "text": "社長[しゃちょう]はお 忙[いそが]しかったですが、アドバイスをしてくださいました"
          }
        ],
        "notes": "Uses してくださいました for 'giving advice.'"
      },
      {
        "segments": [
          {
            "text": "社長[しゃちょう]がお 忙[いそが]しかったですが、私[わたし]たちにアドバイスをくださいました"
          }
        ],
        "notes": "私たちに."
      },
      {
        "segments": [
          {
            "text": "社長[しゃちょう]がお 忙[いそが]しかったですが、アドバイスをくださいました"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "社長[しゃちょう]がお 忙[いそが]しかったですが、私[わたし]たちにアドバイスをしてくださいました"
          }
        ],
        "notes": "Uses してくださいました for 'giving advice.'"
      },
      {
        "segments": [
          {
            "text": "社長[しゃちょう]がお 忙[いそが]しかったですが、アドバイスをしてくださいました"
          }
        ],
        "notes": "Uses してくださいました for 'giving advice.'"
      }
    ]
  },
  {
    "english": "Mr. Yamamoto's father (graciously) reads the newspaper every morning.",
    "answers": [
      {
        "segments": [
          {
            "text": "山本[やまもと]さんのお 父[とう]さんは 毎朝[まいあさ]新聞[しんぶん]を"
          },
          {
            "text": "ご 覧[らん]になります",
            "blank": true
          }
        ],
        "notes": "Uses ご覧になります for 'reading' or 'looking at' in an honorific way."
      },
      {
        "segments": [
          {
            "text": "山本[やまもと]さんのお 父[とう]様[さま]は 毎朝[まいあさ]新聞[しんぶん]をご 覧[らん]になります"
          }
        ],
        "notes": "Uses お父様 instead of お父さん for added formality."
      },
      {
        "segments": [
          {
            "text": "山本[やまもと]さんのお 父[とう]さんは 毎朝[まいあさ]新聞[しんぶん]をお 読[よ]みになります"
          }
        ],
        "notes": "Uses お読みになる for 'reading' in an honorific way."
      },
      {
        "segments": [
          {
            "text": "山本[やまもと]さんのお 父[とう]様[さま]は 毎朝[まいあさ]新聞[しんぶん]をお 読[よ]みになります"
          }
        ],
        "notes": "Uses お父様 instead of お父さん for added formality."
      }
    ]
  },
  {
    "english": "Where do you (graciously) plan to go this weekend?",
    "answers": [
      {
        "segments": [
          {
            "text": "今週末[こんしゅうまつ]はどちらへお 出[で]かけになるつもりですか"
          }
        ],
        "notes": "へ"
      },
      {
        "segments": [
          {
            "text": "今週末[こんしゅうまつ]はどちらにお 出[で]かけになるつもりですか"
          }
        ],
        "notes": "に"
      }
    ]
  },
  {
    "english": "Will Mrs. Kaede be attnding the summer festival this weekend?",
    "hint": "お越す（おこす）- to attend, 楓(かえで) - Kaede",
    "answers": [
      {
        "segments": [
          {
            "text": "楓[かえで]様[さま]は 今週末[こんしゅうまつ]の 夏祭[なつまつ]りにお 越[こし]になりますか"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "楓[かえで]様[さま]が 今週末[こんしゅうまつ]の 夏祭[なつまつ]りにお 越[こし]になりますか"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      }
    ]
  },
  {
    "english": "The professor (graciously) gave me this book.",
    "hint": "You could optionally use 渡す（わたす）- to hand over, to give",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]がこの 本[ほん]をくださいました"
          }
        ],
        "notes": "Uses くださいました to describe the act of giving."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]がこの 本[ほん]を 渡[わた]てくださいました"
          }
        ],
        "notes": "Uses 渡てくださいました."
      }
    ]
  },
  {
    "english": "The professor (graciously) talked about next month's trip.",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]は 来月[らいげつ]の 旅行[りょこう]についてお 話[はな]しになりました"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]は 来月[らいげつ]の 旅行[りょこう]についておっしゃいました"
          }
        ],
        "notes": "Uses おっしゃいました (honorific for 言う)."
      }
    ]
  },
  {
    "english": "Have you reviewed the new website design yet?",
    "hint": "a.k.a. look at/look over; ウェブサイトのデザイン",
    "answers": [
      {
        "segments": [
          {
            "text": "新[あたら]しいウェブサイトのデザインをご 覧[らん]になりましたか"
          }
        ],
        "notes": "Uses ご覧になる in the past tense to ask about reviewing in an honorific way."
      },
      {
        "segments": [
          {
            "text": "もう 新[あたら]しいウェブサイトのデザインをご 覧[らん]になりましたか"
          }
        ],
        "notes": "もう adds the sense of 'already/yet' to the question."
      },
      {
        "segments": [
          {
            "text": "新[あたら]しいウェブサイトのデザインはご 覧[らん]になりましたか"
          }
        ],
        "notes": "Uses は instead of を for a softer, less direct phrasing."
      },
      {
        "segments": [
          {
            "text": "新[あたら]しいウェブサイトのデザインをお 目[め]通[どおし]しになりましたか"
          }
        ],
        "notes": "Uses お目通し, a more formal/written way to say 'review/look through' in an honorific context."
      }
    ]
  },
  {
    "english": "Right now, the company president is on the phone.",
    "answers": [
      {
        "segments": [
          {
            "text": "今[いま]社長[しゃちょう]は 電話[でんわ]でお 話[はな]しになっています"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "今[いま]社長[しゃちょう]は 電話[でんわ]で 話[はな]していらっしゃいます"
          }
        ],
        "notes": "Uses ～ていらっしゃいます construction."
      },
      {
        "segments": [
          {
            "text": "今[いま]社長[しゃちょう]は 電話[でんわ]に 出[で]ていらっしゃいます"
          }
        ],
        "notes": "Uses ～ていらっしゃいます with 出る to describe answering the phone."
      },
      {
        "segments": [
          {
            "text": "ただいま 社長[しゃちょう]は 電話[でんわ]でお 話[はな]しになっています"
          }
        ],
        "notes": "Replaces 今 with ただいま for a more formal tone."
      },
      {
        "segments": [
          {
            "text": "ただいま 社長[しゃちょう]は 電話[でんわ]で 話[はな]していらっしゃいます"
          }
        ],
        "notes": "Replaces 今 with ただいま and uses ～ていらっしゃいます."
      },
      {
        "segments": [
          {
            "text": "ただいま 社長[しゃちょう]は 電話[でんわ]に 出[で]ていらっしゃいます"
          }
        ],
        "notes": "Replaces 今 with ただいま and uses 出る with ～ていらっしゃいます."
      }
    ]
  },
  {
    "english": "Did the master of the house graciously read Hanako's letter?",
    "answers": [
      {
        "segments": [
          {
            "text": "主人[しゅじん]は 花子[はなこ]さんの 手紙[てがみ]をお 読[よ]みになりましたか"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "主人[しゅじん]が 花子[はなこ]さんの 手紙[てがみ]をお 読[よ]みになりましたか"
          }
        ],
        "notes": "Uses が to mark the subject instead of は."
      },
      {
        "segments": [
          {
            "text": "主人[しゅじん]は 花子[はなこ]さんの 手紙[てがみ]はお 読[よ]みになりましたか"
          }
        ],
        "notes": "Uses は twice for a softer, more indirect phrasing."
      },
      {
        "segments": [
          {
            "text": "主人[しゅじん]が 花子[はなこ]さんの 手紙[てがみ]はお 読[よ]みになりましたか"
          }
        ],
        "notes": "Uses が with は for another variation."
      }
    ]
  },
  {
    "english": "The professor (graciously) eats at this restaurant.",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]はこのレストランで 召[め]し上[あ]がります"
          }
        ],
        "notes": "Uses 召し上がる (honorific for 食べる)."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]はこのレストランでお 食事[しょくじ]になります"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      }
    ]
  },
  {
    "english": "The professor (graciously) answered our questions.",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]は 私[わたし]たちの 質問[しつもん]に 答[こた]えてくださいました"
          }
        ],
        "notes": "Uses てくださる construction."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]が 私[わたし]たちの 質問[しつもん]に 答[こた]えてくださいました"
          }
        ],
        "notes": "Uses てくださる construction."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]は 私[わたし]たちの 質問[しつもん]にお 答[こた]えになりました"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]が 私[わたし]たちの 質問[しつもん]にお 答[こた]えになりました"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      }
    ]
  },
  {
    "english": "Have you ever read that book before?",
    "answers": [
      {
        "segments": [
          {
            "text": "その 本[ほん]をお 読[よ]みになったことがありますか"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "その 本[ほん]をご 覧[らん]になったことがありますか"
          }
        ],
        "notes": "Uses ご覧になる to describe 'reading' in an honorific way."
      }
    ]
  },
  {
    "english": "The company president is graciously writing a report in the office right now.",
    "answers": [
      {
        "segments": [
          {
            "text": "社長[しゃちょう]は 今[いま]オフィスでレポートを 書[か]いていらっしゃいます"
          }
        ],
        "notes": "Uses ～ていらっしゃいます."
      },
      {
        "segments": [
          {
            "text": "社長[しゃちょう]は 今[いま]オフィスでレポートをお 書[か]きになっています"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      }
    ]
  },
  {
    "english": "The professor is (graciously) thinking about the new project.",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]は 新[あたら]しいプロジェクトについてお 考[かんが]えになっています"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]は 新[あたら]しいプロジェクトについて 考[かんが]えていらっしゃいます"
          }
        ],
        "notes": "Uses ～ていらっしゃいます construction."
      }
    ]
  },
  {
    "english": "The professor (graciously) stopped by the office.",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]は 事務所[じむしょ]にお 寄[よ]りになりました"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]はオフィスにお 寄[よ]りになりました"
          }
        ],
        "notes": "Uses お[verb stem]になる construction with 'オフィス' instead of '事務所.'"
      }
    ]
  },
  {
    "english": "The professor (graciously) drinks tea every morning.",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]は 毎朝[まいあさ]お 茶[ちゃ]を 召[め]し 上[あ]がります"
          }
        ],
        "notes": "Uses 召し上がる (honorific for 飲む)."
      },
      {
        "segments": [
          {
            "text": "毎朝[まいあさ]、先生[せんせい]はお 茶[ちゃ]を 召[め]し 上[あ]がります"
          }
        ],
        "notes": "Uses 召し上がる (honorific for 飲む)."
      },
      {
        "segments": [
          {
            "text": "毎朝[まいあさ]、先生[せんせい]がお 茶[ちゃ]を 召[め]し 上[あ]がります"
          }
        ],
        "notes": "Uses 召し上がる (honorific for 飲む)."
      }
    ]
  },
  {
    "english": "The professor (graciously) sleeps early every night.",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]は 毎晩[まいばん]早[はや]くお 休[やす]みになります"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "毎晩[まいばん]、先生[せんせい]は 早[はや]くお 休[やす]みになります"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      },
      {
        "segments": [
          {
            "text": "毎晩[まいばん]、先生[せんせい]が 早[はや]くお 休[やす]みになります"
          }
        ],
        "notes": "Uses お[verb stem]になる construction."
      }
    ]
  }
]

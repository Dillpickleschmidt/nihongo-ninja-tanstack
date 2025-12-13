import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Mary says she's quitting her job next month",
    answers: [
      {
        segments: [
          { text: "メアリーさんは 来月[らいげつ]仕事[しごと]を 辞[や]める" },
          { text: "って", blank: true }
        ],
        notes: "Basic pattern with は"
      },
      {
        segments: [
          { text: "メアリーさんが 来月[らいげつ]仕事[しごと]を 辞[や]める" },
          { text: "って", blank: true }
        ],
        notes: "Using が"
      }
    ]
  },
  {
    english: "Mary was telling me she's studying abroad next year",
    answers: [
      {
        segments: [
          { text: "メアリーさんは 来年[らいねん]留学[りゅうがく]する" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Basic pattern with は"
      },
      {
        segments: [
          { text: "メアリーさんが 来年[らいげつ]留学[りゅうがく]する" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using が"
      }
    ]
  },
  {
    english: "My friend says the movie was boring",
    answers: [
      {
        segments: [
          { text: "友[とも]達[だち]は 映画[えいが]はつまらなかっ" },
          { text: "たって", blank: true }
        ],
        notes: "Using は for both subject and topic"
      },
      {
        segments: [
          { text: "友[とも]達[だち]は 映画[えいが]がつまらなかっ" },
          { text: "たって", blank: true }
        ],
        notes: "Using は for subject and が for topic"
      }
    ]
  },
  {
    english: "The teacher says the test will be easy",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]はテストは 簡単[かんたん]" },
          { text: "だって", blank: true }
        ],
        notes: "Using は for both subject and topic"
      },
      {
        segments: [
          { text: "先生[せんせい]はテストが 簡単[かんたん]" },
          { text: "だって", blank: true }
        ],
        notes: "Using は for subject and が for topic"
      }
    ]
  },
  {
    english: "Ken was saying his homework is difficult",
    answers: [
      {
        segments: [
          { text: "ケンさんは 宿題[しゅくだい]が 難[むずか]しい" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Basic pattern with が"
      },
      {
        segments: [
          { text: "ケンさんの 宿題[しゅくだい]が 難[むずか]しい" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using の for possession"
      }
    ]
  },
  {
    english: "Yuki says she's getting married",
    answers: [
      {
        segments: [
          { text: "ユキさんは 結婚[けっこん]する" },
          { text: "って", blank: true }
        ],
        notes: "Basic pattern with は"
      },
      {
        segments: [
          { text: "ユキさんが 結婚[けっこん]する" },
          { text: "って", blank: true }
        ],
        notes: "Using が"
      }
    ]
  },
  {
    english: "My sister was telling me the rent became expensive",
    answers: [
      {
        segments: [
          { text: "姉[あね]は 家賃[やちん]が 高[たか]くなっ" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は for subject and が for topic"
      },
      {
        segments: [
          { text: "姉[あね]が 家賃[やちん]が 高[たか]くなっ" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using が for both"
      }
    ]
  },
  {
    english: "Mike says he's used to life in Japan",
    answers: [
      {
        segments: [
          { text: "マイクさんは 日本[にほん]の 生活[せいかつ]に 慣[な]れ" },
          { text: "たって", blank: true }
        ],
        notes: "Basic pattern with は"
      },
      {
        segments: [
          { text: "マイクさんが 日本[にほん]の 生活[せいかつ]に 慣[な]れ" },
          { text: "たって", blank: true }
        ],
        notes: "Using が"
      }
    ]
  },
  {
    english: "My classmate was telling me the final exam was cancelled",
    answers: [
      {
        segments: [
          { text: "クラスメートは 期末試験[きまつしけん]がなくなっ" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は for subject and が for topic"
      },
      {
        segments: [
          { text: "クラスメートが 期末試験[きまつしけん]がなくなっ" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using が for both"
      }
    ]
  },
  {
    english: "Tanaka says there's a big fire nearby",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは 近[ちか]くで 大[おお]きい 火事[かじ]がある" },
          { text: "って", blank: true }
        ],
        notes: "Using は with 大きい"
      },
      {
        segments: [
          { text: "田中[たなか]さんは 近[ちか]くで 大きな 火事[かじ]がある" },
          { text: "って", blank: true }
        ],
        notes: "Using は with 大きな"
      }
    ]
  },
  {
    english: "My friend was saying the restaurant is good",
    answers: [
      {
        segments: [
          { text: "友[とも]達[だち]はレストランがいい" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は for subject and が for topic"
      },
      {
        segments: [
          { text: "友[とも]達[だち]はあのレストランはいい" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は for both, with あの"
      }
    ]
  },
  {
    english: "Keiko says she got a new job",
    answers: [
      {
        segments: [
          { text: "ケイコさんは 新[あたら]しい 仕事[しごと]が 決[き]まっ" },
          { text: "たって", blank: true }
        ],
        notes: "Using は with passive form"
      },
      {
        segments: [
          { text: "ケイコさんが 新[あたら]しい 仕事[しごと]を 見[み]つけ" },
          { text: "たって", blank: true }
        ],
        notes: "Using が with active form"
      }
    ]
  },
  {
    english: "Sarah was telling me she got into Tokyo University",
    answers: [
      {
        segments: [
          { text: "サラさんは 東京[とうきょう]大学[だいがく]に 合格[ごうかく]し" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は and 合格"
      },
      {
        segments: [
          { text: "サラさんは 東京[とうきょう]大学[だいがく]に 入[はい]っ" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は"
      },
      {
        segments: [
          { text: "サラさんが 東京[とうきょう]大学[だいがく]に 合格[ごうかく]し" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using が and 合格"
      },
      {
        segments: [
          { text: "サラさんが 東京[とうきょう]大学[だいがく]に 入[はい]っ" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using が"
      }
    ]
  },
  {
    english: "Naomi says the test was easy",
    answers: [
      {
        segments: [
          { text: "ナオミさんはテストは 簡単[かんたん]だっ" },
          { text: "たって", blank: true }
        ],
        notes: "Using は for both"
      },
      {
        segments: [
          { text: "ナオミさんはテストが 簡単[かんたん]だっ" },
          { text: "たって", blank: true }
        ],
        notes: "Using は and が"
      }
    ]
  },
  {
    english: "My roommate was telling me the shopping mall opened",
    answers: [
      {
        segments: [
          { text: "ルームメイトはショッピングモールができ" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は and が with できた"
      },
      {
        segments: [
          { text: "ルームメイトはショッピングモールがオープンし" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は and が with オープンした"
      }
    ]
  },
  {
    english: "Bob says he's studying Japanese",
    answers: [
      {
        segments: [
          { text: "ボブさんは 日本語[にほんご]を 勉強[べんきょう]してる" },
          { text: "って", blank: true }
        ],
        notes: "Using は"
      },
      {
        segments: [
          { text: "ボブさんが 日本語[にほんご]を 勉強[べんきょう]してる" },
          { text: "って", blank: true }
        ],
        notes: "Using が"
      }
    ]
  },
  {
    english: "The teacher was telling me the homework is due tomorrow",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 宿題[しゅくだい]が 明日[あした]まで" },
          { text: "だって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は and が"
      },
      {
        segments: [
          { text: "先生[せんせい]は 宿題[しゅくだい]は 明日[あした]まで" },
          { text: "だって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は for both"
      }
    ]
  },
  {
    english: "John was saying the coffee shop is crowded",
    answers: [
      {
        segments: [
          { text: "ジョンさんはカフェが 込[こ]んでる" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は and が"
      },
      {
        segments: [
          { text: "ジョンさんはあのカフェは 込[こ]んでる" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は for both with あの"
      }
    ]
  },
  {
    english: "Yuki says she failed the exam",
    hint: "落ちた (おちた) -> failed (same kanji as in 落ち込む)",
    answers: [
      {
        segments: [
          { text: "ユキさんは 試験[しけん]に 落[お]ち" },
          { text: "たって", blank: true }
        ],
        notes: "Using は"
      },
      {
        segments: [
          { text: "ユキさんが 試験[しけん]に 落[お]ち" },
          { text: "たって", blank: true }
        ],
        notes: "Using が"
      }
    ]
  },
  {
    english: "My sister was telling me that the movie theater had gotten crowded",
    answers: [
      {
        segments: [
          { text: "姉[あね]は 映画館[えいがかん]が 混[こ]んでき" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は and が"
      },
      {
        segments: [
          { text: "姉[あね]が 映画館[えいがかん]は 混[こ]んでき" },
          { text: "たって", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using が and は"
      }
    ]
  },
  {
    english: "Tanaka says the weather will be nice tomorrow",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは 明日[あした]の 天気[てんき]がいい" },
          { text: "って", blank: true }
        ],
        notes: "Using は and が"
      }
    ]
  },
  {
    english: "Ken was telling me his new job is interesting",
    answers: [
      {
        segments: [
          { text: "ケンさんは 新[あたら]しい 仕事[しごと]が 面白[おもしろ]い" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using は and が"
      },
      {
        segments: [
          { text: "ケンさんの 新[あたら]しい 仕事[しごと]は 面白[おもしろ]い" },
          { text: "って", blank: true },
          { text: "言[い]ってた" }
        ],
        notes: "Using の and は"
      }
    ]
  }
]

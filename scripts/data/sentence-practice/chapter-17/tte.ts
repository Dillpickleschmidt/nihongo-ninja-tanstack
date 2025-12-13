import type { Question } from "../types"

export const questions: Question[] = [
  {
    "english": "Mary says she's quitting her job next month",
    "answers": [
      {
        "segments": [
          {
            "text": "メアリーさんは 来月[らいげつ]仕事[しごと]を"
          },
          {
            "text": "辞[や]める",
            "conjugation": {
              "pos": "Ichidan verb",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Basic pattern with は"
      },
      {
        "segments": [
          {
            "text": "メアリーさんが 来月[らいげつ]仕事[しごと]を"
          },
          {
            "text": "辞[や]める",
            "conjugation": {
              "pos": "Ichidan verb",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Using が"
      }
    ]
  },
  {
    "english": "Mary was telling me she's studying abroad next year",
    "answers": [
      {
        "segments": [
          {
            "text": "メアリーさんは 来年[らいねん]"
          },
          {
            "text": "留学[りゅうがく]する",
            "conjugation": {
              "pos": "Suru verb - compound word",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Basic pattern with は"
      },
      {
        "segments": [
          {
            "text": "メアリーさんが 来年[らいげつ]"
          },
          {
            "text": "留学[りゅうがく]する",
            "conjugation": {
              "pos": "Suru verb - compound word",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using が"
      }
    ]
  },
  {
    "english": "My friend says the movie was boring",
    "answers": [
      {
        "segments": [
          {
            "text": "友[とも]達[だち]は 映画[えいが]は"
          },
          {
            "text": "つまらない",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "negative",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          }
        ],
        "notes": "Using は for both subject and topic"
      },
      {
        "segments": [
          {
            "text": "友[とも]達[だち]は 映画[えいが]が"
          },
          {
            "text": "つまらない",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "negative",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          }
        ],
        "notes": "Using は for subject and が for topic"
      }
    ]
  },
  {
    "english": "The teacher says the test will be easy",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]はテストは"
          },
          {
            "text": "簡単[かんたん]",
            "conjugation": {
              "pos": "Na-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "だって"
          }
        ],
        "notes": "Using は for both subject and topic"
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]はテストが"
          },
          {
            "text": "簡単[かんたん]",
            "conjugation": {
              "pos": "Na-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "だって"
          }
        ],
        "notes": "Using は for subject and が for topic"
      }
    ]
  },
  {
    "english": "Ken was saying his homework is difficult",
    "answers": [
      {
        "segments": [
          {
            "text": "ケンさんは 宿題[しゅくだい]が"
          },
          {
            "text": "難[むずか]しい",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Basic pattern with が"
      },
      {
        "segments": [
          {
            "text": "ケンさんの 宿題[しゅくだい]が"
          },
          {
            "text": "難[むずか]しい",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using の for possession"
      }
    ]
  },
  {
    "english": "Yuki says she's getting married",
    "answers": [
      {
        "segments": [
          {
            "text": "ユキさんは"
          },
          {
            "text": "結婚[けっこん]する",
            "conjugation": {
              "pos": "Suru verb - compound word",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Basic pattern with は"
      },
      {
        "segments": [
          {
            "text": "ユキさんが"
          },
          {
            "text": "結婚[けっこん]する",
            "conjugation": {
              "pos": "Suru verb - compound word",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Using が"
      }
    ]
  },
  {
    "english": "My sister was telling me the rent became expensive",
    "answers": [
      {
        "segments": [
          {
            "text": "姉[あね]は 家賃[やちん]が"
          },
          {
            "text": "高[たか]い",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は for subject and が for topic"
      },
      {
        "segments": [
          {
            "text": "姉[あね]が 家賃[やちん]が"
          },
          {
            "text": "高[たか]い",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using が for both"
      }
    ]
  },
  {
    "english": "Mike says he's used to life in Japan",
    "answers": [
      {
        "segments": [
          {
            "text": "マイクさんは 日本[にほん]の 生活[せいかつ]に"
          },
          {
            "text": "慣[な]れる",
            "conjugation": {
              "pos": "Ichidan verb",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          }
        ],
        "notes": "Basic pattern with は"
      },
      {
        "segments": [
          {
            "text": "マイクさんが 日本[にほん]の 生活[せいかつ]に"
          },
          {
            "text": "慣[な]れる",
            "conjugation": {
              "pos": "Ichidan verb",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          }
        ],
        "notes": "Using が"
      }
    ]
  },
  {
    "english": "My classmate was telling me the final exam was cancelled",
    "answers": [
      {
        "segments": [
          {
            "text": "クラスメートは 期末試験[きまつしけん]が"
          },
          {
            "text": "なくなる",
            "conjugation": {
              "pos": "Godan verb with 'ru' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は for subject and が for topic"
      },
      {
        "segments": [
          {
            "text": "クラスメートが 期末試験[きまつしけん]が"
          },
          {
            "text": "なくなる",
            "conjugation": {
              "pos": "Godan verb with 'ru' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using が for both"
      }
    ]
  },
  {
    "english": "Tanaka says there's a big fire nearby",
    "answers": [
      {
        "segments": [
          {
            "text": "田中[たなか]さんは 近[ちか]くで"
          },
          {
            "text": "大[おお]きい",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "火事[かじ]が"
          },
          {
            "text": "ある",
            "conjugation": {
              "pos": "Godan verb with 'ru' ending (irregular verb)",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Using は with 大きい"
      },
      {
        "segments": [
          {
            "text": "田中[たなか]さんは 近[ちか]くで 大きな 火事[かじ]が"
          },
          {
            "text": "ある",
            "conjugation": {
              "pos": "Godan verb with 'ru' ending (irregular verb)",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Using は with 大きな"
      }
    ]
  },
  {
    "english": "My friend was saying the restaurant is good",
    "answers": [
      {
        "segments": [
          {
            "text": "友[とも]達[だち]はレストランが"
          },
          {
            "text": "いい",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は for subject and が for topic"
      },
      {
        "segments": [
          {
            "text": "友[とも]達[だち]はあのレストランは"
          },
          {
            "text": "いい",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は for both, with あの"
      }
    ]
  },
  {
    "english": "Keiko says she got a new job",
    "answers": [
      {
        "segments": [
          {
            "text": "ケイコさんは 新[あたら]しい 仕事[しごと]が"
          },
          {
            "text": "決[き]まる",
            "conjugation": {
              "pos": "Godan verb with 'ru' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          }
        ],
        "notes": "Using は with passive form"
      },
      {
        "segments": [
          {
            "text": "ケイコさんが 新[あたら]しい 仕事[しごと]を"
          },
          {
            "text": "見[み]つける",
            "conjugation": {
              "pos": "Ichidan verb",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          }
        ],
        "notes": "Using が with active form"
      }
    ]
  },
  {
    "english": "Sarah was telling me she got into Tokyo University",
    "answers": [
      {
        "segments": [
          {
            "text": "サラさんは 東京[とうきょう]大学[だいがく]に"
          },
          {
            "text": "合格[ごうかく]する",
            "conjugation": {
              "pos": "Suru verb - compound word",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は and 合格"
      },
      {
        "segments": [
          {
            "text": "サラさんは 東京[とうきょう]大学[だいがく]に"
          },
          {
            "text": "入[はい]る",
            "conjugation": {
              "pos": "Godan verb with 'ru' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は"
      },
      {
        "segments": [
          {
            "text": "サラさんが 東京[とうきょう]大学[だいがく]に"
          },
          {
            "text": "合格[ごうかく]する",
            "conjugation": {
              "pos": "Suru verb - compound word",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using が and 合格"
      },
      {
        "segments": [
          {
            "text": "サラさんが 東京[とうきょう]大学[だいがく]に"
          },
          {
            "text": "入[はい]る",
            "conjugation": {
              "pos": "Godan verb with 'ru' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using が"
      }
    ]
  },
  {
    "english": "Naomi says the test was easy",
    "answers": [
      {
        "segments": [
          {
            "text": "ナオミさんはテストは"
          },
          {
            "text": "簡単[かんたん]",
            "conjugation": {
              "pos": "Na-adjective",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "だったって"
          }
        ],
        "notes": "Using は for both"
      },
      {
        "segments": [
          {
            "text": "ナオミさんはテストが"
          },
          {
            "text": "簡単[かんたん]",
            "conjugation": {
              "pos": "Na-adjective",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "だったって"
          }
        ],
        "notes": "Using は and が"
      }
    ]
  },
  {
    "english": "My roommate was telling me the shopping mall opened",
    "answers": [
      {
        "segments": [
          {
            "text": "ルームメイトはショッピングモールが"
          },
          {
            "text": "できる",
            "conjugation": {
              "pos": "Ichidan verb",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は and が with できた"
      },
      {
        "segments": [
          {
            "text": "ルームメイトはショッピングモールが"
          },
          {
            "text": "オープンする",
            "conjugation": {
              "pos": "Suru verb - compound word",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は and が with オープンした"
      }
    ]
  },
  {
    "english": "Bob says he's studying Japanese",
    "answers": [
      {
        "segments": [
          {
            "text": "ボブさんは 日本語[にほんご]を"
          },
          {
            "text": "勉強[べんきょう]する",
            "conjugation": {
              "pos": "Suru verb - compound word",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Using は"
      },
      {
        "segments": [
          {
            "text": "ボブさんが 日本語[にほんご]を"
          },
          {
            "text": "勉強[べんきょう]する",
            "conjugation": {
              "pos": "Suru verb - compound word",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Using が"
      }
    ]
  },
  {
    "english": "The teacher was telling me the homework is due tomorrow",
    "answers": [
      {
        "segments": [
          {
            "text": "先生[せんせい]は 宿題[しゅくだい]が 明日[あした]までだって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は and が"
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]は 宿題[しゅくだい]は 明日[あした]までだって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は for both"
      }
    ]
  },
  {
    "english": "John was saying the coffee shop is crowded",
    "answers": [
      {
        "segments": [
          {
            "text": "ジョンさんはカフェが"
          },
          {
            "text": "込[こ]む",
            "conjugation": {
              "pos": "Godan verb with 'mu' ending",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は and が"
      },
      {
        "segments": [
          {
            "text": "ジョンさんはあのカフェは"
          },
          {
            "text": "込[こ]む",
            "conjugation": {
              "pos": "Godan verb with 'mu' ending",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は for both with あの"
      }
    ]
  },
  {
    "english": "Yuki says she failed the exam",
    "hint": "落ちた (おちた) -> failed (same kanji as in 落ち込む)",
    "answers": [
      {
        "segments": [
          {
            "text": "ユキさんは 試験[しけん]に"
          },
          {
            "text": "落[お]ちる",
            "conjugation": {
              "pos": "Ichidan verb",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          }
        ],
        "notes": "Using は"
      },
      {
        "segments": [
          {
            "text": "ユキさんが 試験[しけん]に"
          },
          {
            "text": "落[お]ちる",
            "conjugation": {
              "pos": "Ichidan verb",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          }
        ],
        "notes": "Using が"
      }
    ]
  },
  {
    "english": "My sister was telling me that the movie theater had gotten crowded",
    "answers": [
      {
        "segments": [
          {
            "text": "姉[あね]は 映画館[えいがかん]が"
          },
          {
            "text": "混[ま]ざる",
            "conjugation": {
              "pos": "Godan verb with 'ru' ending",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "来[く]る",
            "conjugation": {
              "pos": "Kuru verb - special class",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は and が"
      },
      {
        "segments": [
          {
            "text": "姉[あね]が 映画館[えいがかん]は"
          },
          {
            "text": "混[ま]ざる",
            "conjugation": {
              "pos": "Godan verb with 'ru' ending",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "来[く]る",
            "conjugation": {
              "pos": "Kuru verb - special class",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "たって"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using が and は"
      }
    ]
  },
  {
    "english": "Tanaka says the weather will be nice tomorrow",
    "answers": [
      {
        "segments": [
          {
            "text": "田中[たなか]さんは 明日[あした]の 天気[てんき]が"
          },
          {
            "text": "いい",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Using は and が"
      },
      {
        "segments": [
          {
            "text": "田中[たなか]さんは 明日[あした]の 天気[てんき]が"
          },
          {
            "text": "いい",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          }
        ],
        "notes": "Using の for tomorrow's weather"
      }
    ]
  },
  {
    "english": "Ken was telling me his new job is interesting",
    "answers": [
      {
        "segments": [
          {
            "text": "ケンさんは 新[あたら]しい 仕事[しごと]が"
          },
          {
            "text": "面白[おもしろ]い",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using は and が"
      },
      {
        "segments": [
          {
            "text": "ケンさんの 新[あたら]しい 仕事[しごと]は"
          },
          {
            "text": "面白[おもしろ]い",
            "conjugation": {
              "pos": "I-adjective",
              "polarity": "positive",
              "tense": "non-past"
            }
          },
          {
            "text": "って"
          },
          {
            "text": "言[い]う",
            "conjugation": {
              "pos": "Godan verb with 'u' ending",
              "polarity": "positive",
              "tense": "past"
            }
          },
          {
            "text": "た"
          }
        ],
        "notes": "Using の and は"
      }
    ]
  }
]

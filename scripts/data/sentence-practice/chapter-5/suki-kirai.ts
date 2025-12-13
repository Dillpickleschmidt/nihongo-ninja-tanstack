import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Mr. Takeda hates children.",
    hint: "武田（たけだ）- Takeda",
    answers: [
      {
        segments: [
          { text: "武田[たけだ]さんは 子供[こども]たちが" },
          { text: "大[だい]嫌[きら]いです", blank: true }
        ],
        notes: "Using 大嫌い because this guy has some issues."
      },
      {
        segments: [
          { text: "武田[たけだ]さんは 子供[こども]が" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Using 嫌い instead of 大嫌い for a less intense statement."
      }
    ]
  },
  {
    english: "Does Mr. Tanaka like Japanese (the language)?",
    hint: "田中（たなか）- Tanaka",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは 日本語[にほんご]が" },
          { text: "好[す]きですか", blank: true }
        ],
        notes: "Basic question structure with は and が."
      },
      {
        segments: [
          { text: "田中[たなか]さんは 日本語[にほんご]が" },
          { text: "好[す]きでしょうか", blank: true }
        ],
        notes: "Using でしょうか for a more inquisitive tone (advanced)."
      }
    ]
  },
  {
    english: "My favorite sport is tennis.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の" },
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニスです" }
        ],
        notes: "Basic structure with noun modification using 好きな."
      },
      {
        segments: [
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニスです" }
        ],
        notes: "Omitting 私."
      },
      {
        segments: [
          { text: "私[わたし]の 一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニスです" }
        ],
        notes: "Using 一番 to emphasize \"most favorite\" with 私 included."
      },
      {
        segments: [
          { text: "一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニスです" }
        ],
        notes: "Omitting 私 for a more natural and casual sentence."
      },
      {
        segments: [
          { text: "私[わたし]が 一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニスです" }
        ],
        notes: "Using 私が instead of 私の for a slightly different nuance."
      },
      {
        segments: [
          { text: "スポーツの 中[なか]で 一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "のはテニスです" }
        ],
        notes: "Using スポーツの中で to explicitly say \"among sports, my favorite is tennis\" (advanced)."
      },
      {
        segments: [
          { text: "私[わたし]はスポーツの 中[なか]でテニスが 一番[いちばん]" },
          { text: "好[す]きです", blank: true }
        ],
        notes: "Rephrased to emphasize \"I like tennis the most among sports\" (advanced)."
      }
    ]
  },
  {
    english: "My younger brother's least favorite food is fish.",
    answers: [
      {
        segments: [
          { text: "弟[おとうと]の" },
          { text: "嫌[きら]いな", blank: true },
          { text: "食[た]べ 物[もの]は 魚[さかな]です" }
        ],
        notes: "Basic structure with noun modification using 嫌いな."
      },
      {
        segments: [
          { text: "弟[おとうと]が" },
          { text: "嫌[きら]いな", blank: true },
          { text: "食[た]べ 物[もの]は 魚[さかな]です" }
        ],
        notes: "Using 弟が instead of 弟の for a slightly different nuance."
      },
      {
        segments: [
          { text: "弟[おとうと]の 一番[いちばん]" },
          { text: "嫌[きら]いな", blank: true },
          { text: "食[た]べ 物[もの]は 魚[さかな]です" }
        ],
        notes: "Using 一番 to emphasize \"least favorite\" with the basic structure."
      },
      {
        segments: [
          { text: "弟[おとうと]が 一番[いちばん]" },
          { text: "嫌[きら]いな", blank: true },
          { text: "食[た]べ 物[もの]は 魚[さかな]です" }
        ],
        notes: "Using 弟が instead of 弟の with 一番 for emphasis."
      },
      {
        segments: [
          { text: "食[た]べ 物[もの]の 中[なか]で 弟[おとうと]が 一番[いちばん]" },
          { text: "嫌[きら]いな", blank: true },
          { text: "のは 魚[さかな]です" }
        ],
        notes: "Using 食べ物の中で to explicitly say \"among foods, my younger brother dislikes fish the most (advanced).'"
      },
      {
        segments: [
          { text: "弟[おとうと]は 食[た]べ 物[もの]の 中[なか]で 魚[さかな]が 一番[いちばん]" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Rephrased to emphasize \"My younger brother dislikes fish the most among foods (advanced).'"
      },
      {
        segments: [
          { text: "弟[おとうと]の 一番[いちばん]" },
          { text: "嫌[きら]いな", blank: true },
          { text: "のは 魚[さかな]です" }
        ],
        notes: "\"the thing my younger brother dislikes the most is fish, with の in place of 食べ物 to mean \"thing\" (advanced).'"
      }
    ]
  },
  {
    english: "My younger sister loves fruit but dislikes vegetables.",
    answers: [
      {
        segments: [
          { text: "妹[いもうと]は 果物[くだもの]が" },
          { text: "大[だい]好[す]きです", blank: true },
          { text: "が、野菜[やさい]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Using は before 嫌い to emphasize the contrast between fruit and vegetables."
      },
      {
        segments: [
          { text: "妹[いもうと]は 果物[くだもの]が 好[す]きですが 野菜[やさい]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Using 好き instead of 大好き for a less intense statement,."
      }
    ]
  },
  {
    english: "My father neither likes nor dislikes movies.",
    answers: [
      {
        segments: [
          { text: "父[ちち]は 映画[えいが]が" },
          { text: "好[す]きでも 嫌[きら]いでもないです", blank: true }
        ],
        notes: "Basic structure with neutral expression 好きでも嫌いでもない."
      },
      {
        segments: [
          { text: "父[ちち]は 映画[えいが]が" },
          { text: "好[す]きでも 嫌[きら]いでもありません", blank: true }
        ],
        notes: "Using ありません for a more formal tone."
      }
    ]
  },
  {
    english: "My favorite books are manga.",
    hint: "漫画[まんが] - manga",
    answers: [
      {
        segments: [
          { text: "私[わたし]の" },
          { text: "好[す]きな", blank: true },
          { text: "本[ほん]は 漫画[まんが]です" }
        ],
        notes: "Basic structure with noun modification using 好きな."
      },
      {
        segments: [
          { text: "好[す]きな", blank: true },
          { text: "本[ほん]は 漫画[まんが]です" }
        ],
        notes: "Omitting 私 for a more natural sentence."
      },
      {
        segments: [
          { text: "私[わたし]の 一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "本[ほん]は 漫画[まんが]です" }
        ],
        notes: "Using 一番 to emphasize 'most favorite' with 私 included."
      },
      {
        segments: [
          { text: "一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "本[ほん]は 漫画[まんが]です" }
        ],
        notes: "Omitting 私 for a more casual and natural sentence."
      },
      {
        segments: [
          { text: "私[わたし]が 一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "本[ほん]は 漫画[まんが]です" }
        ],
        notes: "Using 私が instead of 私の for a slightly different nuance."
      },
      {
        segments: [
          { text: "本[ほん]の 中[なか]で 一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "のは 漫画[まんが]です" }
        ],
        notes: "Using 本の中で to explicitly say 'among books, my favorite is manga' with の in place of 本 (advanced)."
      },
      {
        segments: [
          { text: "私[わたし]は 本[ほん]の 中[なか]で 漫画[まんが]が 一番[いちばん]" },
          { text: "好[す]きです", blank: true }
        ],
        notes: "Rephrased to emphasize 'I like manga the most among books' (advanced)."
      }
    ]
  },
  {
    english: "My father likes coffee, but he absolutely hates tea.",
    answers: [
      {
        segments: [
          { text: "父[ちち]はコーヒーが 好[す]きですが、お 茶[ちゃ]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Basic structure with 父 and contrast using は for お茶."
      },
      {
        segments: [
          { text: "父[ちち]はコーヒーが 好[す]きですがお 茶[ちゃ]は" },
          { text: "大[だい]嫌[きら]いです", blank: true }
        ],
        notes: "Using 大嫌い for stronger emphasis with 父 and は."
      },
      {
        segments: [
          { text: "父[ちち]はコーヒーが 好[す]きですがお 茶[ちゃ]は 絶対[ぜったい]" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Adding 絶対 to emphasize 'absolutely hates' tea with 父 and は."
      },
      {
        segments: [
          { text: "父[ちち]はコーヒーが 好[す]きですがお 茶[ちゃ]は 絶対[ぜったい]" },
          { text: "大[だい]嫌[きら]いです", blank: true }
        ],
        notes: "Using 絶対 and 大嫌い for stronger emphasis with 父 and は."
      },
      {
        segments: [
          { text: "お 父[とう]さんはコーヒーが 好[す]きですがお 茶[ちゃ]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Basic structure with お父さん and contrast using は for お茶."
      },
      {
        segments: [
          { text: "お 父[とう]さんはコーヒーが 好[す]きですがお 茶[ちゃ]は" },
          { text: "大[だい]嫌[きら]いです", blank: true }
        ],
        notes: "Using 大嫌い for stronger emphasis with お父さん and は."
      },
      {
        segments: [
          { text: "お 父[とう]さんはコーヒーが 好[す]きですがお 茶[ちゃ]は 絶対[ぜったい]" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Adding 絶対 to emphasize 'absolutely hates' tea with お父さん and は."
      },
      {
        segments: [
          { text: "お 父[とう]さんはコーヒーが 好[す]きですがお 茶[ちゃ]は 絶対[ぜったい]" },
          { text: "大[だい]嫌[きら]いです", blank: true }
        ],
        notes: "Using 絶対 and 大嫌い for stronger emphasis with お父さん and は."
      }
    ]
  },
  {
    english: "My friend loves traveling. Every year, they go to Europe",
    hint: "ヨーロッパ - Europe",
    answers: [
      {
        segments: [
          { text: "友[とも] 達[だち]は 旅行[りょこう]が" },
          { text: "大[だい]好[す]きです", blank: true },
          { text: "。毎[まい]年[ねん]ヨーロッパに 行[い]きます" }
        ],
        notes: "Basic structure with 大好き and listing examples using や."
      },
      {
        segments: [
          { text: "友[とも] 達[だち]は 旅行[りょこう]が" },
          { text: "好[す]きです", blank: true },
          { text: "。毎[まい]年[ねん]ヨーロッパに 行[い]きます" }
        ],
        notes: "Using 好き instead of 大好き for a less intense statement."
      },
      {
        segments: [
          { text: "友[とも]だちは 旅行[りょこう]が" },
          { text: "大[だい]好[す]きです", blank: true },
          { text: "。毎[まい]年[ねん]ヨーロッパに 行[い]きます" }
        ],
        notes: "Basic structure with 大好き and listing examples using や."
      },
      {
        segments: [
          { text: "友[とも]だちは 旅行[りょこう]が" },
          { text: "好[す]きです", blank: true },
          { text: "。毎[まい]年[ねん]ヨーロッパに 行[い]きます" }
        ],
        notes: "Using 好き instead of 大好き for a less intense statement."
      }
    ]
  },
  {
    english: "I like music, but I dislike homework.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 音楽[おんがく]が 好[す]きです。でも 宿題[しゅくだい]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Basic structure with contrast using でも."
      },
      {
        segments: [
          { text: "音楽[おんがく]が 好[す]きです。でも 宿題[しゅくだい]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Omitting 私 for a more natural sentence."
      },
      {
        segments: [
          { text: "私[わたし]は 音楽[おんがく]が 好[す]きですが、宿題[しゅくだい]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Using が for contrast."
      },
      {
        segments: [
          { text: "音楽[おんがく]が 好[す]きですが、宿題[しゅくだい]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Omitting 私 and using が for contrast."
      },
      {
        segments: [
          { text: "私[わたし]は 音楽[おんがく]が 好[す]きですけど、宿題[しゅくだい]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Using けど for a polite and conversational contrast."
      },
      {
        segments: [
          { text: "音楽[おんがく]が 好[す]きですけど、宿題[しゅくだい]は" },
          { text: "嫌[きら]いです", blank: true }
        ],
        notes: "Omitting 私 and using けど for a polite and conversational contrast."
      }
    ]
  }
]

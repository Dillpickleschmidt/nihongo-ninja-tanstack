import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Mary says she's quitting her job next month",
    answers: [
      {
        segments: [
          { text: "メアリーさんは 来月[らいげつ]仕事[しごと]を 辞[や]めるって", blank: true },
        ],
        notes: "Basic pattern with は",
        register: "casual",
      },
      {
        segments: [
          { text: "メアリーさんが 来月[らいげつ]仕事[しごと]を 辞[や]めるって", blank: true },
        ],
        notes: "Using が",
        register: "casual",
      },
      {
        segments: [
          { text: "メアリーさんは 来月[らいげつ]仕事[しごと]を 辞[や]めるって", blank: true },
          { text: "言[い]ってる" },
        ],
        notes: "〜って言ってる (is saying) extended form",
        register: "casual",
      },
      {
        segments: [
          { text: "メアリーさんは 来月[らいげつ]仕事[しごと]を 辞[や]めるって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている non-contracted",
        register: "casual",
      },
    ],
  },
  {
    english: "Mary was telling me she's studying abroad next year",
    answers: [
      {
        segments: [
          { text: "メアリーさんは 来年[らいねん]留学[りゅうがく]するって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Basic pattern with は",
        register: "casual",
      },
      {
        segments: [
          { text: "メアリーさんが 来年[らいねん]留学[りゅうがく]するって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using が",
        register: "casual",
      },
    ],
  },
  {
    english: "My friend says the movie was boring",
    answers: [
      {
        segments: [
          { text: "友[とも]達[だち]は 映画[えいが]はつまらなかったって", blank: true },
        ],
        notes: "Using は for both subject and topic",
        register: "casual",
      },
      {
        segments: [
          { text: "友[とも]達[だち]は 映画[えいが]がつまらなかったって", blank: true },
        ],
        notes: "Using は for subject and が for topic",
        register: "casual",
      },
      {
        segments: [
          { text: "友[とも]達[だち]は 映画[えいが]はつまらなかったって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている (is saying) extension",
        register: "casual",
      },
      {
        segments: [
          { text: "友[とも]達[だち]は 映画[えいが]がつまらなかったって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "は+が + 言っている extension",
        register: "casual",
      },
    ],
  },
  {
    english: "The teacher says the test will be easy",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]はテストは 簡単[かんたん]だって", blank: true },
        ],
        notes: "Using は for both subject and topic",
        register: "casual",
      },
      {
        segments: [
          { text: "先生[せんせい]はテストが 簡単[かんたん]だって", blank: true },
        ],
        notes: "Using は for subject and が for topic",
        register: "casual",
      },
      {
        segments: [
          { text: "先生[せんせい]はテストは 簡単[かんたん]だって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている extension",
        register: "casual",
      },
      {
        segments: [
          { text: "先生[せんせい]はテストが 簡単[かんたん]だって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "は+が + 言っている extension",
        register: "casual",
      },
    ],
  },
  {
    english: "Ken was saying his homework is difficult",
    answers: [
      {
        segments: [
          { text: "ケンさんは 宿題[しゅくだい]が 難[むずか]しいって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Basic pattern with が",
        register: "casual",
      },
      {
        segments: [
          { text: "ケンさんの 宿題[しゅくだい]が 難[むずか]しいって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using の for possession",
        register: "casual",
      },
    ],
  },
  {
    english: "Yuki says she's getting married",
    answers: [
      {
        segments: [
          { text: "ユキさんは 結婚[けっこん]するって", blank: true },
        ],
        notes: "Basic pattern with は",
        register: "casual",
      },
      {
        segments: [
          { text: "ユキさんが 結婚[けっこん]するって", blank: true },
        ],
        notes: "Using が",
        register: "casual",
      },
      {
        segments: [
          { text: "ユキさんは 結婚[けっこん]するって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている extension",
        register: "casual",
      },
    ],
  },
  {
    english: "My sister was telling me the rent became expensive",
    answers: [
      {
        segments: [
          { text: "姉[あね]は 家賃[やちん]が 高[たか]くなったって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は for subject and が for topic",
        register: "casual",
      },
      {
        segments: [
          { text: "姉[あね]が 家賃[やちん]が 高[たか]くなったって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using が for both",
        register: "casual",
      },
    ],
  },
  {
    english: "Mike says he's used to life in Japan",
    answers: [
      {
        segments: [
          { text: "マイクさんは 日本[にほん]の 生活[せいかつ]に 慣[な]れたって", blank: true },
        ],
        notes: "Basic pattern with は",
        register: "casual",
      },
      {
        segments: [
          { text: "マイクさんが 日本[にほん]の 生活[せいかつ]に 慣[な]れたって", blank: true },
        ],
        notes: "Using が",
        register: "casual",
      },
      {
        segments: [
          { text: "マイクさんは 日本[にほん]の 生活[せいかつ]に 慣[な]れたって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている extension",
        register: "casual",
      },
    ],
  },
  {
    english: "My classmate was telling me the final exam was cancelled",
    answers: [
      {
        segments: [
          { text: "クラスメートは 期末試験[きまつしけん]がなくなったって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は for subject and が for topic",
        register: "casual",
      },
      {
        segments: [
          { text: "クラスメートが 期末試験[きまつしけん]がなくなったって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using が for both",
        register: "casual",
      },
    ],
  },
  {
    english: "Tanaka says there's a big fire nearby",
    answers: [
      {
        segments: [
          {
            text: "田中[たなか]さんは 近[ちか]くで 大[おお]きい 火事[かじ]があるって",
            blank: true,
          },
        ],
        notes: "Using は with 大きい",
        register: "casual",
      },
      {
        segments: [
          { text: "田中[たなか]さんは 近[ちか]くで 大きな 火事[かじ]があるって", blank: true },
        ],
        notes: "Using は with 大きな",
        register: "casual",
      },
      {
        segments: [
          {
            text: "田中[たなか]さんは 近[ちか]くで 大[おお]きい 火事[かじ]があるって",
            blank: true,
          },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている extension",
        register: "casual",
      },
    ],
  },
  {
    english: "My friend was saying the restaurant is good",
    answers: [
      {
        segments: [
          { text: "友[とも]達[だち]はレストランがよいって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は for subject and が for topic",
        register: "casual",
      },
      {
        segments: [
          { text: "友[とも]達[だち]はあのレストランはよいって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は for both, with あの",
        register: "casual",
      },
      {
        segments: [
          { text: "友[とも]達[だち]がそのレストランはよいって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "が subject + は topic + その (that nearby)",
        register: "casual",
      },
      {
        segments: [
          { text: "友[とも]達[だち]がそのレストランがよいって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "が subject + が object + その",
        register: "casual",
      },
    ],
  },
  {
    english: "Keiko says she got a new job",
    answers: [
      {
        segments: [
          { text: "ケイコさんは 新[あたら]しい 仕事[しごと]が 決[き]まったって", blank: true },
        ],
        notes: "Using は with 決まる for getting decided",
        register: "casual",
      },
      {
        segments: [
          { text: "ケイコさんが 新[あたら]しい 仕事[しごと]を 見[み]つけたって", blank: true },
        ],
        notes: "Using が with active form",
        register: "casual",
      },
      {
        segments: [
          { text: "ケイコさんは 新[あたら]しい 仕事[しごと]が 決[き]まったって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている extension",
        register: "casual",
      },
    ],
  },
  {
    english: "Sarah was telling me she got into Tokyo University",
    answers: [
      {
        segments: [
          {
            text: "サラさんは 東京[とうきょう]大学[だいがく]に 合格[ごうかく]したって",
            blank: true,
          },
          { text: "言[い]っていた" },
        ],
        notes: "Using は and 合格",
        register: "casual",
      },
      {
        segments: [
          { text: "サラさんは 東京[とうきょう]大学[だいがく]に 入[はい]ったって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は",
        register: "casual",
      },
      {
        segments: [
          {
            text: "サラさんが 東京[とうきょう]大学[だいがく]に 合格[ごうかく]したって",
            blank: true,
          },
          { text: "言[い]っていた" },
        ],
        notes: "Using が and 合格",
        register: "casual",
      },
      {
        segments: [
          { text: "サラさんが 東京[とうきょう]大学[だいがく]に 入[はい]ったって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using が",
        register: "casual",
      },
    ],
  },
  {
    english: "Naomi says the test was easy",
    answers: [
      {
        segments: [
          { text: "ナオミさんはテストは 簡単[かんたん]だったって", blank: true },
        ],
        notes: "Using は for both",
        register: "casual",
      },
      {
        segments: [
          { text: "ナオミさんはテストが 簡単[かんたん]だったって", blank: true },
        ],
        notes: "Using は and が",
        register: "casual",
      },
      {
        segments: [
          { text: "ナオミさんはテストは 簡単[かんたん]だったって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている extension",
        register: "casual",
      },
    ],
  },
  {
    english: "My roommate was telling me the shopping mall opened",
    answers: [
      {
        segments: [
          { text: "ルームメイトはショッピングモールができたって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は and が with できた",
        register: "casual",
      },
      {
        segments: [
          { text: "ルームメイトはショッピングモールがオープンしたって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は and が with オープンした",
        register: "casual",
      },
    ],
  },
  {
    english: "Bob says he's studying Japanese",
    answers: [
      {
        segments: [
          { text: "ボブさんは 日本語[にほんご]を 勉強[べんきょう]してるって", blank: true },
        ],
        notes: "Using は",
        register: "casual",
      },
      {
        segments: [
          { text: "ボブさんが 日本語[にほんご]を 勉強[べんきょう]してるって", blank: true },
        ],
        notes: "Using が",
        register: "casual",
      },
      {
        segments: [
          { text: "ボブさんは 日本語[にほんご]を 勉強[べんきょう]しているって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている extension (non-contracted 勉強している)",
        register: "casual",
      },
    ],
  },
  {
    english: "The teacher was telling me the homework is due tomorrow",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]は 宿題[しゅくだい]が 明日[あした]までだって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は and が",
        register: "casual",
      },
      {
        segments: [
          { text: "先生[せんせい]は 宿題[しゅくだい]は 明日[あした]までだって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は for both",
        register: "casual",
      },
    ],
  },
  {
    english: "John was saying the coffee shop is crowded",
    answers: [
      {
        segments: [
          { text: "ジョンさんはカフェが 込[こ]んでるって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は and が",
        register: "casual",
      },
      {
        segments: [
          { text: "ジョンさんはあのカフェは 込[こ]んでるって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は for both with あの",
        register: "casual",
      },
    ],
  },
  {
    english: "Yuki says she failed the exam",
    hint: "落ちた (おちた) -> failed (same kanji as in 落ち込む)",
    answers: [
      {
        segments: [
          { text: "ユキさんは 試験[しけん]に 落[お]ちたって", blank: true },
        ],
        notes: "Using は",
        register: "casual",
      },
      {
        segments: [
          { text: "ユキさんが 試験[しけん]に 落[お]ちたって", blank: true },
        ],
        notes: "Using が",
        register: "casual",
      },
      {
        segments: [
          { text: "ユキさんは 試験[しけん]に 落[お]ちたって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている extension",
        register: "casual",
      },
    ],
  },
  {
    english:
      "My sister was telling me that the movie theater had gotten crowded",
    answers: [
      {
        segments: [
          { text: "姉[あね]は 映画館[えいがかん]が 混[こ]んできたって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は and が",
        register: "casual",
      },
      {
        segments: [
          { text: "姉[あね]が 映画館[えいがかん]は 混[こ]んできたって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using が and は",
        register: "casual",
      },
    ],
  },
  {
    english: "Tanaka says the weather will be nice tomorrow",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは 明日[あした]の 天気[てんき]がよいって", blank: true },
        ],
        notes: "Using は and が",
        register: "casual",
      },
      {
        segments: [
          { text: "田中[たなか]さんは 明日[あした]の 天気[てんき]がよいって", blank: true },
          { text: "言[い]っている" },
        ],
        notes: "〜って言っている extension",
        register: "casual",
      },
    ],
  },
  {
    english: "Ken was telling me his new job is interesting",
    answers: [
      {
        segments: [
          { text: "ケンさんは 新[あたら]しい 仕事[しごと]が 面白[おもしろ]いって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using は and が",
        register: "casual",
      },
      {
        segments: [
          { text: "ケンさんの 新[あたら]しい 仕事[しごと]は 面白[おもしろ]いって", blank: true },
          { text: "言[い]っていた" },
        ],
        notes: "Using の and は",
        register: "casual",
      },
    ],
  },
]

import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Please don't throw away my old camera.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 古[ふる]いカメラを" },
          { text: "捨[す]てないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "古[ふる]いカメラを" },
          { text: "捨[す]てないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "Without 私の",
      },
    ],
  },
  {
    english: "Please don't use my dictionary on the test.",
    hint: "test = テスト",
    answers: [
      {
        segments: [
          { text: "テストで 私[わたし]の 辞書[じしょ]を" },
          { text: "使[つか]わないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "テストで 辞書[じしょ]を" },
          { text: "使[つか]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "Without 私の",
      },
    ],
  },
  {
    english: "Please don't eat snacks before dinner.",
    answers: [
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 前[まえ]に おかしを" },
          { text: "食[た]べないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]の 前[まえ]に おかしを" },
          { text: "食[た]べないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "夕ご飯 instead of 晩ご飯",
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 前[まえ]に お 菓子[かし]を" },
          { text: "食[た]べないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "お菓子 in kanji",
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]の 前[まえ]に お 菓子[かし]を" },
          { text: "食[た]べないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "夕ご飯 + お菓子",
      },
      {
        segments: [
          { text: "夕食[ゆうしょく]の 前[まえ]に お 菓子[かし]を" },
          { text: "食[た]べないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "夕食 (more formal word for dinner) + お菓子",
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 前[まえ]に おやつを" },
          { text: "食[た]べないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "おやつ (snack/afternoon treat) instead of お菓子",
      },
    ],
  },
  {
    english: "Please don't forget your homework tomorrow morning.",
    answers: [
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、宿題[しゅくだい]を" },
          { text: "忘[わす]れないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
    ],
  },
  {
    english: "Please don't fall asleep on the couch.",
    answers: [
      {
        segments: [
          { text: "ソファで" },
          { text: "寝[ね]ないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "ソファーで" },
          { text: "寝[ね]ないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "ソファー (long vowel)",
      },
      {
        segments: [
          { text: "ソファの 上[うえ]で" },
          { text: "寝[ね]ないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "ソファの上で (on top of the couch)",
      },
      {
        segments: [
          { text: "ソファーの 上[うえ]で" },
          { text: "寝[ね]ないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "ソファーの上で",
      },
    ],
  },
  {
    english: "Please don't eat in the library.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]で" },
          { text: "食[た]べないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "図書館[としょかん]では" },
          { text: "食[た]べないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "では (topic emphasis)",
      },
      {
        segments: [
          { text: "図書館[としょかん]でものを" },
          { text: "食[た]べないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "ものを食べる (eat things) explicit",
      },
    ],
  },
  {
    english: "Please don't sleep in class.",
    answers: [
      {
        segments: [
          { text: "授業[じゅぎょう]中[ちゅう]に" },
          { text: "寝[ね]ないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "クラスで" },
          { text: "寝[ね]ないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "クラスで (in class, locative)",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]中[ちゅう]は" },
          { text: "寝[ね]ないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "授業中は (topic marker)",
      },
      {
        segments: [
          { text: "クラスの 間[あいだ]は" },
          { text: "寝[ね]ないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "クラスの間は (during class)",
      },
    ],
  },
  {
    english: "Please don't talk during the movie.",
    answers: [
      {
        segments: [
          { text: "映画[えいが]の 間[あいだ]に" },
          { text: "話[はな]さないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "映画[えいが] 中[ちゅう]に" },
          { text: "話[はな]さないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "映画中に (using 中 instead of 間)",
      },
      {
        segments: [
          { text: "映画[えいが]の 間[あいだ]" },
          { text: "話[はな]さないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "Without に particle",
      },
      {
        segments: [
          { text: "映画[えいが] 中[ちゅう]は" },
          { text: "話[はな]さないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "映画中は (topic marker)",
      },
    ],
  },
  {
    english: "Please don't use your phone while driving.",
    answers: [
      {
        segments: [
          { text: "運転[うんてん]中[ちゅう]に 電話[でんわ]を" },
          { text: "使[つか]わないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "運転[うんてん]中[ちゅう]に ケータイを" },
          { text: "使[つか]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "ケータイ (casual)",
      },
      {
        segments: [
          { text: "運転[うんてん]中[ちゅう]に スマホを" },
          { text: "使[つか]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "スマホ",
      },
      {
        segments: [
          { text: "運転[うんてん]しながら 電話[でんわ]を" },
          { text: "使[つか]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "〜ながら (while driving)",
      },
      {
        segments: [
          { text: "運転[うんてん]中[ちゅう]は 携帯[けいたい]電話[でんわ]を" },
          { text: "使[つか]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "携帯電話 (full form) + は (topic marker on time)",
      },
      {
        segments: [
          { text: "運転[うんてん]中[ちゅう]は スマホを" },
          { text: "使[つか]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "スマホ + は",
      },
    ],
  },
  {
    english: "Please don't open the window without asking first.",
    answers: [
      {
        segments: [
          { text: "先[さき]に" },
          { text: "聞[き]かないで", blank: true },
          { text: "窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "聞[き]かないで", blank: true },
          { text: "窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "Without 先に",
      },
      {
        segments: [
          { text: "まず" },
          { text: "聞[き]かないで", blank: true },
          { text: "窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "まず (first of all) instead of 先に",
      },
      {
        segments: [
          { text: "勝手[かって]に 窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "勝手に (without permission) — natural one-clause phrasing",
      },
      {
        segments: [
          { text: "先[さき]に 聞[き]かずに 窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "〜ずに alternative for \"without asking\"",
      },
    ],
  },
  {
    english: "Please don't leave without your umbrella.",
    answers: [
      {
        segments: [
          { text: "傘[かさ]を" },
          { text: "持[も]たないで", blank: true },
          { text: "出[で]かけないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "傘[かさ]を" },
          { text: "持[も]たないで", blank: true },
          { text: "行[い]かないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "行く instead of 出かける",
      },
      {
        segments: [
          { text: "傘[かさ]を" },
          { text: "忘[わす]れないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes:
          "忘れないでください (don't forget) — natural idiomatic alternative",
      },
    ],
  },
  {
    english: "Please don't answer the questionnaire without reading it.",
    answers: [
      {
        segments: [
          { text: "アンケートを" },
          { text: "読[よ]まないで", blank: true },
          { text: "アンケートに" },
          { text: "答[こた]えないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "アンケートを" },
          { text: "読[よ]まないで", blank: true },
          { text: "答[こた]えないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "Second アンケートに dropped",
      },
      {
        segments: [
          { text: "アンケートを 読[よ]まずに" },
          { text: "答[こた]えないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "〜ずに alternative for \"without V-ing\"",
      },
    ],
  },
  {
    english: "Please don't cut the watermelon without washing it first.",
    answers: [
      {
        segments: [
          { text: "すいかを" },
          { text: "洗[あら]わないで", blank: true },
          { text: "切[き]らないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "先[さき]にすいかを" },
          { text: "洗[あら]わないで", blank: true },
          { text: "切[き]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "先に (first) added",
      },
      {
        segments: [
          { text: "まずすいかを" },
          { text: "洗[あら]わないで", blank: true },
          { text: "切[き]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "まず (first of all) instead of 先に",
      },
      {
        segments: [
          { text: "すいかを 洗[あら]わずに" },
          { text: "切[き]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "〜ずに alternative for \"without washing\"",
      },
    ],
  },
  {
    english: "Please don't go to work without eating breakfast.",
    answers: [
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べないで", blank: true },
          { text: "仕事[しごと]に" },
          { text: "行[い]かないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べないで", blank: true },
          { text: "仕事[しごと]へ" },
          { text: "行[い]かないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "朝食[ちょうしょく]を" },
          { text: "食[た]べないで", blank: true },
          { text: "仕事[しごと]に" },
          { text: "行[い]かないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "朝食 (formal) instead of 朝ご飯",
      },
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を 食[た]べずに 仕事[しごと]に" },
          { text: "行[い]かないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "〜ずに alternative for \"without eating\"",
      },
    ],
  },
  {
    english: "Please don't turn off the lights without telling me.",
    answers: [
      {
        segments: [
          { text: "私[わたし]に" },
          { text: "言[い]わないで", blank: true },
          { text: "電気[でんき]を" },
          { text: "消[け]さないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "私[わたし]に" },
          { text: "知[し]らせないで", blank: true },
          { text: "電気[でんき]を" },
          { text: "消[け]さないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "知らせる (notify) instead of 言う",
      },
      {
        segments: [
          { text: "私[わたし]に 先[さき]に" },
          { text: "言[い]わないで", blank: true },
          { text: "電気[でんき]を" },
          { text: "消[け]さないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "先に (first) added",
      },
      {
        segments: [
          { text: "言[い]わずに 電気[でんき]を" },
          { text: "消[け]さないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "〜ずに alternative for \"without telling\"",
      },
      {
        segments: [
          { text: "私[わたし]に 言[い]わずに 電気[でんき]を" },
          { text: "消[け]さないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "私に + 〜ずに variant",
      },
    ],
  },
  {
    english: "Please don't go home without waiting for me.",
    answers: [
      {
        segments: [
          { text: "私[わたし]を" },
          { text: "待[ま]たないで", blank: true },
          { text: "帰[かえ]らないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "私[わたし]を" },
          { text: "待[ま]たないで", blank: true },
          { text: "家[いえ]に" },
          { text: "帰[かえ]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "家に帰る (go home) explicit",
      },
      {
        segments: [
          { text: "私[わたし]を" },
          { text: "待[ま]たないで", blank: true },
          { text: "うちに" },
          { text: "帰[かえ]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "うち instead of 家",
      },
      {
        segments: [
          { text: "私[わたし]を 待[ま]たずに" },
          { text: "帰[かえ]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "〜ずに alternative for \"without waiting\"",
      },
    ],
  },
  {
    english: "Please don't take photos here.",
    answers: [
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]らないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "写真[しゃしん]をここで" },
          { text: "撮[と]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "Object before location",
      },
      {
        segments: [
          { text: "ここでは 写真[しゃしん]を" },
          { text: "撮[と]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "ここでは (topic emphasis)",
      },
    ],
  },
  {
    english: "Please don't come into my room.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]に" },
          { text: "入[はい]らないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]へ" },
          { text: "入[はい]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]に" },
          { text: "来[こ]ないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "来る (come) instead of 入る",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]へ" },
          { text: "来[こ]ないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "来る + へ",
      },
      {
        segments: [
          { text: "部屋[へや]に" },
          { text: "入[はい]らないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "Without 私の",
      },
    ],
  },
  {
    english: "Please don't sing without listening to the song first.",
    answers: [
      {
        segments: [
          { text: "歌[うた]を" },
          { text: "聞[き]かないで", blank: true },
          { text: "歌[うた]わないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "先[さき]に 歌[うた]を" },
          { text: "聞[き]かないで", blank: true },
          { text: "歌[うた]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "先に (first) added",
      },
      {
        segments: [
          { text: "まず 歌[うた]を" },
          { text: "聞[き]かないで", blank: true },
          { text: "歌[うた]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "まず instead of 先に",
      },
      {
        segments: [
          { text: "歌[うた]を 先[さき]に 聞[き]かずに" },
          { text: "歌[うた]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "〜ずに alternative for \"without listening\"",
      },
      {
        segments: [
          { text: "先[さき]に 歌[うた]を 聞[き]かずに" },
          { text: "歌[うた]わないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "先に fronted before 歌を",
      },
    ],
  },
  {
    english: "Please don't work overtime every day.",
    answers: [
      {
        segments: [
          { text: "毎日[まいにち]" },
          { text: "残業[ざんぎょう]しないで", blank: true },
          { text: "ください", blank: true },
        ],
      },
      {
        segments: [
          { text: "毎日[まいにち]は" },
          { text: "残業[ざんぎょう]しないで", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "毎日は (topic emphasis)",
      },
    ],
  },
]

import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "The dog sleeping on the park bench is mine.",
    hint: "bench = ベンチ",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]のベンチで" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "犬[いぬ]", blank: true },
          { text: "は 私[わたし]の" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "公園[こうえん]のベンチに" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "犬[いぬ]", blank: true },
          { text: "は 私[わたし]の" },
          { text: "です" },
        ],
        notes: "に instead of で",
      },
      {
        segments: [
          { text: "公園[こうえん]のベンチで" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "犬[いぬ]", blank: true },
          { text: "は 私[わたし]の" },
        ],
        register: "casual",
        notes: "Without final です",
      },
      {
        segments: [
          { text: "公園[こうえん]のベンチに" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "犬[いぬ]", blank: true },
          { text: "は 私[わたし]の" },
        ],
        register: "casual",
        notes: "に instead of で, without final です",
      },
      {
        segments: [
          { text: "公園[こうえん]のベンチの 上[うえ]で" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "犬[いぬ]", blank: true },
          { text: "は 私[わたし]の" },
          { text: "です" },
        ],
        notes: "ベンチの上で (on top of the bench)",
      },
    ],
  },
  {
    english: "The coffee Tanaka is drinking is really delicious.",
    hint: "Tanaka = 田中 (たなか)",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんが 飲[の]んで", blank: true },
          { text: "いる", blank: true },
          { text: "コーヒーは すごく" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "田中[たなか]さんが 飲[の]んで", blank: true },
          { text: "いる", blank: true },
          { text: "コーヒーは とても" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "田中[たなか]さんが 飲[の]んで", blank: true },
          { text: "いる", blank: true },
          { text: "コーヒーは 本当[ほんとう]に" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "田中[たなか]さんが 飲[の]んで", blank: true },
          { text: "いる", blank: true },
          { text: "コーヒーは とっても" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "田中[たなか]さんの 飲[の]んで", blank: true },
          { text: "いる", blank: true },
          { text: "コーヒーは すごく" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "の instead of が in relative clause",
      },
    ],
  },
  {
    english: "The letter I got from Kobayashi last week was really short.",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          { text: "先週[せんしゅう]" },
          { text: "小林[こばやし]さんからもらった 手紙[てがみ]", blank: true },
          { text: "は すごく" },
          {
            text: " 短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "先週[せんしゅう]" },
          { text: "小林[こばやし]さんからもらった 手紙[てがみ]", blank: true },
          { text: "は とても" },
          {
            text: " 短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "先週[せんしゅう]" },
          { text: "小林[こばやし]さんからもらった 手紙[てがみ]", blank: true },
          { text: "は 本当[ほんとう]に" },
          {
            text: " 短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "先週[せんしゅう]" },
          { text: "小林[こばやし]さんからもらった 手紙[てがみ]", blank: true },
          { text: "は とっても" },
          {
            text: " 短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "小林[こばやし]さんから 先週[せんしゅう]もらった 手紙[てがみ]", blank: true },
          { text: "は すごく" },
          {
            text: " 短[みじか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "小林さんから before 先週",
      },
    ],
  },
  {
    english: "The man wearing a red hat over there is my father.",
    answers: [
      {
        segments: [
          { text: "あそこで" },
          { text: " 赤[あか]い 帽子[ぼうし]をかぶって", blank: true },
          { text: "いる", blank: true },
          { text: "男[おとこ]の 人[ひと]", blank: true },
          { text: "は 私[わたし]の 父[ちち]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "あそこにいる" },
          { text: " 赤[あか]い 帽子[ぼうし]をかぶって", blank: true },
          { text: "いる", blank: true },
          { text: "男[おとこ]の 人[ひと]", blank: true },
          { text: "は 私[わたし]の 父[ちち]" },
          { text: "です" },
        ],
        notes: "あそこにいる instead of あそこで",
      },
      {
        segments: [
          { text: "あそこで" },
          { text: " 赤[あか]い 帽子[ぼうし]をかぶって", blank: true },
          { text: "いる", blank: true },
          { text: "人[ひと]", blank: true },
          { text: "は 私[わたし]の 父[ちち]" },
          { text: "です" },
        ],
        notes: "Dropping 男の from 男の人",
      },
      {
        segments: [
          { text: "あそこの" },
          { text: " 赤[あか]い 帽子[ぼうし]をかぶって", blank: true },
          { text: "いる", blank: true },
          { text: "男[おとこ]の 人[ひと]", blank: true },
          { text: "は 私[わたし]の 父[ちち]" },
          { text: "です" },
        ],
        notes: "あそこの (over there)",
      },
      {
        segments: [
          { text: "向[む]こうで" },
          { text: " 赤[あか]い 帽子[ぼうし]をかぶって", blank: true },
          { text: "いる", blank: true },
          { text: "男[おとこ]の 人[ひと]", blank: true },
          { text: "は 私[わたし]の 父[ちち]" },
          { text: "です" },
        ],
        notes: "向こうで (over there)",
      },
    ],
  },
  {
    english:
      "The book I borrowed from the library has a really interesting story.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]で" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は 話[はなし]が すごく" },
          { text: "面白[おもしろ]い", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "図書館[としょかん]から" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は 話[はなし]が すごく" },
          { text: "面白[おもしろ]い", blank: true },
          { text: "です" },
        ],
        notes: "から instead of で",
      },
      {
        segments: [
          { text: "図書館[としょかん]で" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は 話[はなし]が とても" },
          { text: "面白[おもしろ]い", blank: true },
          { text: "です" },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "図書館[としょかん]で" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は 話[はなし]が 本当[ほんとう]に" },
          { text: "面白[おもしろ]い", blank: true },
          { text: "です" },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "図書館[としょかん]で" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は 話[はなし]が とっても" },
          { text: "面白[おもしろ]い", blank: true },
          { text: "です" },
        ],
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "図書館[としょかん]で" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は ストーリーが すごく" },
          { text: "面白[おもしろ]い", blank: true },
          { text: "です" },
        ],
        notes: "ストーリー instead of 話",
      },
      {
        segments: [
          { text: "図書館[としょかん]で" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は 内容[ないよう]が すごく" },
          { text: "面白[おもしろ]い", blank: true },
          { text: "です" },
        ],
        notes: "内容 (content) instead of 話",
      },
    ],
  },
  {
    english: "The woman talking on the phone over there is my older sister.",
    answers: [
      {
        segments: [
          { text: "あそこで" },
          { text: " 電話[でんわ]して", blank: true },
          { text: "いる", blank: true },
          { text: " 女[おんな]の 人[ひと]は 私[わたし]の 姉[あね]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "あそこで" },
          { text: " 電話[でんわ]をして", blank: true },
          { text: "いる", blank: true },
          { text: " 女[おんな]の 人[ひと]は 私[わたし]の 姉[あね]" },
          { text: "です" },
        ],
        notes: "電話をしている with を",
      },
      {
        segments: [
          { text: "あそこで" },
          { text: " 電話[でんわ]して", blank: true },
          { text: "いる", blank: true },
          { text: " 女[おんな]の 人[ひと]は 私[わたし]の 姉[あね]" },
        ],
        register: "casual",
        notes: "Without final です",
      },
      {
        segments: [
          { text: "向[む]こうで" },
          { text: " 電話[でんわ]して", blank: true },
          { text: "いる", blank: true },
          { text: " 女[おんな]の 人[ひと]は 私[わたし]の 姉[あね]" },
          { text: "です" },
        ],
        notes: "向こうで instead of あそこで",
      },
      {
        segments: [
          { text: "向[む]こうで" },
          { text: " 電話[でんわ]をして", blank: true },
          { text: "いる", blank: true },
          { text: " 女[おんな]の 人[ひと]は 私[わたし]の 姉[あね]" },
          { text: "です" },
        ],
        notes: "向こうで + 電話をしている",
      },
      {
        segments: [
          { text: "向[む]こうで" },
          { text: " 電話[でんわ]して", blank: true },
          { text: "いる", blank: true },
          { text: " 女性[じょせい]は 私[わたし]の 姉[あね]" },
          { text: "です" },
        ],
        notes: "向こうで (colloquial \"over there\") + 女性 (formal \"woman\")",
      },
    ],
  },
  {
    english: "The homework I forgot to do is due tomorrow.",
    answers: [
      {
        segments: [
          { text: "やるのを" },
          { text: " 忘[わす]れた 宿題[しゅくだい]", blank: true },
          { text: "は 明日[あした]まで" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "するのを" },
          { text: " 忘[わす]れた 宿題[しゅくだい]", blank: true },
          { text: "は 明日[あした]まで" },
          { text: "です" },
        ],
        notes: "する instead of やる",
      },
      {
        segments: [
          { text: " 忘[わす]れた 宿題[しゅくだい]", blank: true },
          { text: "は 明日[あした]まで" },
          { text: "です" },
        ],
        notes: "Shorter: just 忘れた宿題",
      },
      {
        segments: [
          { text: "やるのを" },
          { text: " 忘[わす]れて", blank: true },
          { text: "いた", blank: true },
          { text: "宿題[しゅくだい]", blank: true },
          { text: "は 明日[あした]まで" },
          { text: "です" },
        ],
        notes: "忘れていた + 明日まで",
      },
      {
        segments: [
          { text: "やるのを" },
          { text: " 忘[わす]れた 宿題[しゅくだい]", blank: true },
          { text: "の 提出[ていしゅつ]は 明日[あした]" },
          { text: "です" },
        ],
        notes: "提出は明日です",
      },
      {
        segments: [
          { text: "するのを" },
          { text: " 忘[わす]れた 宿題[しゅくだい]", blank: true },
          { text: "の 提出[ていしゅつ]は 明日[あした]" },
          { text: "です" },
        ],
        notes: "する + 提出は明日です",
      },
      {
        segments: [
          { text: "やるのを" },
          { text: " 忘[わす]れた 宿題[しゅくだい]", blank: true },
          { text: "は 明日[あした] 提出[ていしゅつ]" },
          { text: "です" },
        ],
        notes: "明日提出です",
      },
    ],
  },
  {
    english: "The song Kaede is singing right now is really popular.",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんが 今[いま] 歌[うた]って", blank: true },
          { text: "いる", blank: true },
          { text: "歌[うた]", blank: true },
          { text: "は すごく 人気[にんき]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "楓[かえで]さんが 歌[うた]って", blank: true },
          { text: "いる", blank: true },
          { text: "歌[うた]", blank: true },
          { text: "は すごく 人気[にんき]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Without 今",
      },
      {
        segments: [
          { text: "楓[かえで]さんが 今[いま] 歌[うた]って", blank: true },
          { text: "いる", blank: true },
          { text: "歌[うた]", blank: true },
          { text: "は とても 人気[にんき]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "楓[かえで]さんが 今[いま] 歌[うた]って", blank: true },
          { text: "いる", blank: true },
          { text: "歌[うた]", blank: true },
          { text: "は 本当[ほんとう]に 人気[にんき]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "楓[かえで]さんが 今[いま] 歌[うた]って", blank: true },
          { text: "いる", blank: true },
          { text: "歌[うた]", blank: true },
          { text: "は とっても 人気[にんき]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "楓[かえで]さんが 今[いま] 歌[うた]って", blank: true },
          { text: "いる", blank: true },
          { text: "曲[きょく]", blank: true },
          { text: "は すごく 人気[にんき]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "曲 instead of 歌",
      },

    ],
  },
  {
    english: "The coffee shop I went to yesterday had really good music.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "は すごく いい 音楽[おんがく]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "には すごく いい 音楽[おんがく]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "には instead of は",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "は 音楽[おんがく]が すごく" },
          { text: " よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "音楽がよかった",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "は 音楽[おんがく]が とても" },
          { text: " よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "は 音楽[おんがく]が 本当[ほんとう]に" },
          { text: " よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "は 音楽[おんがく]が とっても" },
          { text: " よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "では すごく いい 音楽[おんがく]が 流[なが]れていました", blank: true },
        ],
        notes: "いい音楽が流れていました",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "では すごく いい 音楽[おんがく]が かかっていました", blank: true },
        ],
        notes: "いい音楽がかかっていました",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]った 店[みせ]", blank: true },
          { text: "は 音楽[おんがく]が すごく" },
          { text: " よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "店 instead of カフェ",
      },
    ],
  },
  {
    english: "The cat sleeping on my bag is not mine.",
    answers: [
      {
        segments: [
          { text: "かばんの 上[うえ]で" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "猫[ねこ]", blank: true },
          { text: "は 私[わたし]のじゃない" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "かばんの 上[うえ]に" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "猫[ねこ]", blank: true },
          { text: "は 私[わたし]のじゃない" },
        ],
        register: "casual",
        notes: "に instead of で",
      },
      {
        segments: [
          { text: "かばんの 上[うえ]で" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "猫[ねこ]", blank: true },
          { text: "は 私[わたし]のじゃないです" },
        ],
        register: "polite",
        notes: "じゃないです ending",
      },
      {
        segments: [
          { text: "かばんの 上[うえ]に" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "猫[ねこ]", blank: true },
          { text: "は 私[わたし]のじゃないです" },
        ],
        register: "polite",
        notes: "に instead of で, with じゃないです",
      },
      {
        segments: [
          { text: "私[わたし]のかばんの 上[うえ]で" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "猫[ねこ]", blank: true },
          { text: "は 私[わたし]のじゃないです" },
        ],
        register: "polite",
        notes: "Explicit 私のかばん",
      },
      {
        segments: [
          { text: "私[わたし]のかばんの 上[うえ]に" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "猫[ねこ]", blank: true },
          { text: "は 私[わたし]のじゃないです" },
        ],
        register: "polite",
        notes: "Explicit 私のかばん + に",
      },
      {
        segments: [
          { text: "私[わたし]のかばんの 上[うえ]で" },
          { text: " 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "猫[ねこ]", blank: true },
          { text: "は 私[わたし]のじゃない" },
        ],
        register: "casual",
        notes: "Explicit 私のかばん, casual",
      },
    ],
  },
  {
    english: "The train I took this morning was really crowded.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]" },
          { text: " 乗[の]った 電車[でんしゃ]", blank: true },
          { text: "は すごく 人[ひと]が" },
          { text: " 多[おお]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "人が多かった describes the train as having many people on it",
      },
      {
        segments: [
          { text: "今朝[けさ]" },
          { text: " 乗[の]った 電車[でんしゃ]", blank: true },
          { text: "は すごく" },
          { text: "混[こ]んで", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "混んでいた directly describes being crowded",
      },
      {
        segments: [
          { text: "今朝[けさ]" },
          { text: " 乗[の]った 電車[でんしゃ]", blank: true },
          { text: "は とても 人[ひと]が" },
          { text: " 多[おお]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "とても + 人が多かった",
      },
      {
        segments: [
          { text: "今朝[けさ]" },
          { text: " 乗[の]った 電車[でんしゃ]", blank: true },
          { text: "は 本当[ほんとう]に 人[ひと]が" },
          { text: " 多[おお]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "本当に + 人が多かった",
      },
      {
        segments: [
          { text: "今朝[けさ]" },
          { text: " 乗[の]った 電車[でんしゃ]", blank: true },
          { text: "は とっても 人[ひと]が" },
          { text: " 多[おお]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "とっても + 人が多かった",
      },
      {
        segments: [
          { text: "今朝[けさ]" },
          { text: " 乗[の]った 電車[でんしゃ]", blank: true },
          { text: "は とても" },
          { text: "混[こ]んで", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "とても + 混んでいた",
      },
      {
        segments: [
          { text: "今朝[けさ]" },
          { text: " 乗[の]った 電車[でんしゃ]", blank: true },
          { text: "は 本当[ほんとう]に" },
          { text: "混[こ]んで", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "本当に + 混んでいた",
      },
      {
        segments: [
          { text: "今朝[けさ]" },
          { text: " 乗[の]った 電車[でんしゃ]", blank: true },
          { text: "は とっても" },
          { text: "混[こ]んで", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "とっても + 混んでいた",
      },
    ],
  },
  {
    english:
      "The student who is studying in the library right now is Shunsuke's younger brother.",
    hint: "Shunsuke = 俊介 (しゅんすけ)",
    answers: [
      {
        segments: [
          { text: "今[いま] 図書館[としょかん]で" },
          { text: " 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "学生[がくせい]", blank: true },
          { text: "は 俊介[しゅんすけ]さんの 弟[おとうと]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "今[いま] 図書館[としょかん]で" },
          { text: " 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "大学生[だいがくせい]", blank: true },
          { text: "は 俊介[しゅんすけ]さんの 弟[おとうと]" },
          { text: "です" },
        ],
        notes: "大学生 instead of 学生",
      },
      {
        segments: [
          { text: "今[いま] 図書館[としょかん]で" },
          { text: " 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "人[ひと]", blank: true },
          { text: "は 俊介[しゅんすけ]さんの 弟[おとうと]" },
          { text: "です" },
        ],
        notes: "人 instead of 学生",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 今[いま]" },
          { text: " 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "学生[がくせい]", blank: true },
          { text: "は 俊介[しゅんすけ]さんの 弟[おとうと]" },
          { text: "です" },
        ],
        notes: "図書館で今 word order",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 今[いま]" },
          { text: " 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "大学生[だいがくせい]", blank: true },
          { text: "は 俊介[しゅんすけ]さんの 弟[おとうと]" },
          { text: "です" },
        ],
        notes: "図書館で今 + 大学生",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 今[いま]" },
          { text: " 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "人[ひと]", blank: true },
          { text: "は 俊介[しゅんすけ]さんの 弟[おとうと]" },
          { text: "です" },
        ],
        notes: "図書館で今 + 人",
      },
    ],
  },
  {
    english: "The email I got from Fujii had a really long story.",
    hint: "Fujii = 藤井 (ふじい)",
    answers: [
      {
        segments: [
          { text: "藤井[ふじい]さんから" },
          { text: " もらったメール", blank: true },
          { text: "は すごく 長[なが]い 話[はなし]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "藤井[ふじい]さんから" },
          { text: " もらったメール", blank: true },
          { text: "には すごく 長[なが]い 話[はなし]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "には instead of は",
      },
      {
        segments: [
          { text: "藤井[ふじい]さんから" },
          { text: " もらったメール", blank: true },
          { text: "には すごく 長[なが]い 話[はなし]が 書[か]いてありました", blank: true },
        ],
        notes: "話が書いてありました",
      },
      {
        segments: [
          { text: "藤井[ふじい]さんから" },
          { text: " もらったメール", blank: true },
          { text: "には とても 長[なが]い 話[はなし]が 書[か]いてありました", blank: true },
        ],
        notes: "とても + 話が書いてありました",
      },
      {
        segments: [
          { text: "藤井[ふじい]さんから" },
          { text: " もらったメール", blank: true },
          { text: "には 本当[ほんとう]に 長[なが]い 話[はなし]が 書[か]いてありました", blank: true },
        ],
        notes: "本当に + 話が書いてありました",
      },
      {
        segments: [
          { text: "藤井[ふじい]さんから" },
          { text: " もらったメール", blank: true },
          { text: "には とっても 長[なが]い 話[はなし]が 書[か]いてありました", blank: true },
        ],
        notes: "とっても + 話が書いてありました",
      },
      {
        segments: [
          { text: "藤井[ふじい]さんから" },
          { text: " もらったメール", blank: true },
          { text: "は 内容[ないよう]が すごく" },
          { text: "長[なが]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "内容が長かった",
      },
      {
        segments: [
          { text: "藤井[ふじい]さんから" },
          { text: " 来[き]たメール", blank: true },
          { text: "には すごく 長[なが]い 話[はなし]が 書[か]いてありました", blank: true },
        ],
        notes: "来たメール instead of もらったメール",
      },

    ],
  },
  {
    english:
      "The park near the station has a really big dog sleeping on the grass.",
    answers: [
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くに、" },
          { text: " 草[くさ]の 上[うえ]で 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "すごく 大[おお]きい 犬[いぬ]がいる 公園[こうえん]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: " 草[くさ]の 上[うえ]で 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "すごく 大[おお]きい 犬[いぬ]がいる 公園[こうえん]", blank: true },
          { text: "が 駅[えき]の 近[ちか]くに" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject-first word order",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 公園[こうえん]には、" },
          { text: " 草[くさ]の 上[うえ]で 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "すごく 大[おお]きい 犬[いぬ]", blank: true },
          { text: "が" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic structure: park near station, dog is there",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くに、" },
          { text: " 草[くさ]の 上[うえ]で 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "とても 大[おお]きい 犬[いぬ]がいる 公園[こうえん]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くに、" },
          { text: " 草[くさ]の 上[うえ]で 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "本当[ほんとう]に 大[おお]きい 犬[いぬ]がいる 公園[こうえん]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くに、" },
          { text: " 草[くさ]の 上[うえ]で 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "とっても 大[おお]きい 犬[いぬ]がいる 公園[こうえん]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "とっても instead of すごく",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 公園[こうえん]には、" },
          { text: " 芝生[しばふ]の 上[うえ]で 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "すごく 大[おお]きい 犬[いぬ]", blank: true },
          { text: "が" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "芝生の上",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 公園[こうえん]に、" },
          { text: " 草[くさ]の 上[うえ]で 寝[ね]て", blank: true },
          { text: "いる", blank: true },
          { text: "すごく 大[おお]きい 犬[いぬ]", blank: true },
          { text: "が" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "公園に without は",
      },
    ],
  },
  {
    english: "The photo I took at the sea last summer is on my desk.",
    answers: [
      {
        segments: [
          { text: "去年[きょねん]の 夏[なつ]、" },
          { text: " 海[うみ]で 撮[と]った 写真[しゃしん]", blank: true },
          { text: "は 私[わたし]の 机[つくえ]の 上[うえ]に" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "去年[きょねん]の 夏[なつ]に" },
          { text: " 海[うみ]で 撮[と]った 写真[しゃしん]", blank: true },
          { text: "は 私[わたし]の 机[つくえ]の 上[うえ]に" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "に after 夏 marks the time more explicitly",
      },
      {
        segments: [
          { text: "去年[きょねん]の 夏[なつ]に" },
          { text: " 海[うみ]で 撮[と]った 写真[しゃしん]", blank: true },
          { text: "が 机[つくえ]の 上[うえ]に" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が presents the photo as the thing located on the desk",
      },
      {
        segments: [
          { text: "去年[きょねん]の 夏[なつ]、" },
          { text: " 海[うみ]で 撮[と]った 写真[しゃしん]", blank: true },
          { text: "が 私[わたし]の 机[つくえ]の 上[うえ]に" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が + explicit 私の机",
      },
      {
        segments: [
          { text: "去年[きょねん]の 夏[なつ]に" },
          { text: " 海[うみ]で 撮[と]った 写真[しゃしん]", blank: true },
          { text: "が 私[わたし]の 机[つくえ]の 上[うえ]に" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "に + が + explicit 私の机",
      },
    ],
  },
  {
    english:
      "The store with a big red door is the one Mizuki's older sister works at.",
    hint: "Mizuki = 瑞希 (みずき)",
    answers: [
      {
        segments: [
          { text: " 大[おお]きい 赤[あか]いドアのある 店[みせ]は" },
          { text: "瑞希[みずき]さんのお 姉[ねえ]さんが 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "店[みせ]", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "瑞希[みずき]さんのお 姉[ねえ]さんが 働[はたら]いて" },
          { text: "いる" },
          { text: "店[みせ]は" },
          {
            text: " 大[おお]きい 赤[あか]いドアのある 店[みせ]",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Reversed topic",
      },
      {
        segments: [
          { text: " 大[おお]きな 赤[あか]いドアのある 店[みせ]は" },
          { text: "瑞希[みずき]さんのお 姉[ねえ]さんが 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "店[みせ]", blank: true },
          { text: "です" },
        ],
        notes: "大きな instead of 大きい",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんのお 姉[ねえ]さんが 働[はたら]いて" },
          { text: "いる" },
          { text: "店[みせ]は" },
          {
            text: " 大[おお]きな 赤[あか]いドアのある 店[みせ]",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Reversed topic + 大きな",
      },
      {
        segments: [
          { text: " 大[おお]きな 赤[あか]いドアがある 店[みせ]は" },
          { text: "瑞希[みずき]さんのお 姉[ねえ]さんが 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "店[みせ]", blank: true },
          { text: "です" },
        ],
        notes: "ドアがある instead of ドアのある",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんのお 姉[ねえ]さんが 働[はたら]いて" },
          { text: "いる" },
          { text: "店[みせ]は" },
          {
            text: " 大[おお]きな 赤[あか]いドアがある 店[みせ]",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Reversed topic + ドアがある",
      },
    ],
  },
  {
    english:
      "The teacher with long hair is the one who lived in Italy for a year.",
    answers: [
      {
        segments: [
          { text: " 髪[かみ]が 長[なが]い 先生[せんせい]は" },
          { text: " 一年[いちねん] 間[かん]イタリアに 住[す]んで", blank: true },
          { text: "いた", blank: true },
          { text: "人[ひと]", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: " 髪[かみ]の 長[なが]い 先生[せんせい]は" },
          { text: " 一年[いちねん] 間[かん]イタリアに 住[す]んで", blank: true },
          { text: "いた", blank: true },
          { text: "人[ひと]", blank: true },
          { text: "です" },
        ],
        notes: "髪の長い instead of 髪が長い",
      },
      {
        segments: [
          { text: " 髪[かみ]が 長[なが]い 教師[きょうし]は" },
          { text: " 一年[いちねん] 間[かん]イタリアに 住[す]んで", blank: true },
          { text: "いた", blank: true },
          { text: "人[ひと]", blank: true },
          { text: "です" },
        ],
        notes: "教師 instead of 先生",
      },
      {
        segments: [
          { text: " 髪[かみ]の 長[なが]い 教師[きょうし]は" },
          { text: " 一年[いちねん] 間[かん]イタリアに 住[す]んで", blank: true },
          { text: "いた", blank: true },
          { text: "人[ひと]", blank: true },
          { text: "です" },
        ],
        notes: "髪の長い + 教師",
      },
      {
        segments: [
          { text: " 一年[いちねん] 間[かん]イタリアに 住[す]んでいた 先生[せんせい]は", blank: true },
          { text: " 髪[かみ]が 長[なが]い 人[ひと]" },
          { text: "です" },
        ],
        notes: "Reversed: lived in Italy for a year as the qualifying clause",
      },
    ],
  },
  {
    english:
      "The exam I took yesterday had a question I didn't understand at all.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 受[う]けた 試験[しけん]", blank: true },
          { text: "には" },
          { text: " 全然[ぜんぜん] 分[わ]からなかった 問題[もんだい]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 受[う]けた 試験[しけん]", blank: true },
          { text: "に" },
          { text: " 全然[ぜんぜん] 分[わ]からなかった 問題[もんだい]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 受[う]けた テスト", blank: true },
          { text: "には" },
          { text: " 全然[ぜんぜん] 分[わ]からなかった 問題[もんだい]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "テスト instead of 試験",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 受[う]けた テスト", blank: true },
          { text: "に" },
          { text: " 全然[ぜんぜん] 分[わ]からなかった 問題[もんだい]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "テスト + に",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 受[う]けた 試験[しけん]", blank: true },
          { text: "には" },
          { text: " 全然[ぜんぜん] 分[わ]からなかった 質問[しつもん]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "質問 instead of 問題",
      },
    ],
  },
  {
    english:
      "The girl with curly hair next to Kaede is a first-year student.",
    hint: "Kaede = 楓 (かえで); curly hair = くせ毛 (くせげ)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんの 隣[となり]にいる、" },
          {
            text: "くせ 毛[げ]の 女[おんな]の 子[こ]",
            blank: true,
          },
          { text: "は 一年生[いちねんせい]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "くせ 毛[げ]の、" },
          {
            text: "楓[かえで]さんの 隣[となり]にいる 女[おんな]の 子[こ]",
            blank: true,
          },
          { text: "は 一年生[いちねんせい]" },
          { text: "です" },
        ],
        notes: "Reversed modifier order",
      },
      {
        segments: [
          { text: "楓[かえで]さんの 隣[となり]にいる、" },
          {
            text: "くせ 毛[げ]の 女[おんな]の 人[ひと]",
            blank: true,
          },
          { text: "は 一年生[いちねんせい]" },
          { text: "です" },
        ],
        notes: "女の人 instead of 女の子",
      },
      {
        segments: [
          { text: "楓[かえで]さんの 隣[となり]にいる、" },
          {
            text: "髪[かみ]が くせ 毛[げ]の 女[おんな]の 子[こ]",
            blank: true,
          },
          { text: "は 一年生[いちねんせい]" },
          { text: "です" },
        ],
        notes: "髪がくせ毛",
      },
    ],
  },
]

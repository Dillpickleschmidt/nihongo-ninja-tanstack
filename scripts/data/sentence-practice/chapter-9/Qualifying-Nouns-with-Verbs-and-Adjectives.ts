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
    ],
  },
  {
    english: "The letter I got from Kenji last week was really short.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "先週[せんしゅう]" },
          { text: "けんじさんが 書[か]いた 手紙[てがみ]", blank: true },
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
          { text: "けんじさんが 先週[せんしゅう]" },
          { text: " 書[か]いた 手紙[てがみ]", blank: true },
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
        notes: "けんじさん at start before 先週",
      },
      {
        segments: [
          { text: "先週[せんしゅう]" },
          { text: "けんじさんが 書[か]いた 手紙[てがみ]", blank: true },
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
          { text: "けんじさんからもらった 手紙[てがみ]", blank: true },
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
        notes: "Using もらった (got) instead of 書いた (wrote)",
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
          { text: "は すごく 面白[おもしろ]い 話[はなし]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "図書館[としょかん]から" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は すごく 面白[おもしろ]い 話[はなし]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "から instead of で",
      },
      {
        segments: [
          { text: "図書館[としょかん]で" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は とても 面白[おもしろ]い 話[はなし]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "図書館[としょかん]から" },
          { text: " 借[か]りた 本[ほん]", blank: true },
          { text: "は とても 面白[おもしろ]い 話[はなし]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "から + とても",
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
          { text: "あの" },
          { text: " 電話[でんわ]して", blank: true },
          { text: "いる", blank: true },
          { text: " 女[おんな]の 人[ひと]は 私[わたし]の 姉[あね]" },
          { text: "です" },
        ],
        notes: "あの instead of あそこで",
      },
      {
        segments: [
          { text: "あの" },
          { text: " 電話[でんわ]をして", blank: true },
          { text: "いる", blank: true },
          { text: " 女[おんな]の 人[ひと]は 私[わたし]の 姉[あね]" },
          { text: "です" },
        ],
        notes: "あの + 電話をしている",
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
          { text: "は 明日[あした]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "するのを" },
          { text: " 忘[わす]れた 宿題[しゅくだい]", blank: true },
          { text: "は 明日[あした]" },
          { text: "です" },
        ],
        notes: "する instead of やる",
      },
      {
        segments: [
          { text: " 忘[わす]れた 宿題[しゅくだい]", blank: true },
          { text: "は 明日[あした]" },
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
          { text: "が 明日[あした]まで" },
          { text: "です" },
        ],
        notes: "明日まで means due by tomorrow",
      },
    ],
  },
  {
    english: "The song Yuki is singing right now is really popular.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんが 今[いま] 歌[うた]って", blank: true },
          { text: "いる", blank: true },
          { text: "歌[うた]", blank: true },
          { text: "は すごく 人気[にんき]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ゆきさんが 歌[うた]って", blank: true },
          { text: "いる", blank: true },
          { text: "歌[うた]", blank: true },
          { text: "は すごく 人気[にんき]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Without 今",
      },
      {
        segments: [
          { text: "ゆきさんが 今[いま] 歌[うた]って", blank: true },
          { text: "いる", blank: true },
          { text: "歌[うた]", blank: true },
          { text: "は とても 人気[にんき]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "とても instead of すごく",
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
          { text: "は すごく よい 音楽[おんがく]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "には すごく よい 音楽[おんがく]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "には instead of は",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]った 店[みせ]", blank: true },
          { text: "は すごく よい 音楽[おんがく]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "店 instead of カフェ",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]った 店[みせ]", blank: true },
          { text: "には すごく よい 音楽[おんがく]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "店 + には",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "は とても よい 音楽[おんがく]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " 行[い]ったカフェ", blank: true },
          { text: "は 音楽[おんがく]がとても" },
          { text: " よい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "音楽がよかった instead of よい音楽があった",
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
    ],
  },
  {
    english:
      "The student who is studying in the library right now is Kenji's younger brother.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "今[いま] 図書館[としょかん]で" },
          { text: " 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "学生[がくせい]", blank: true },
          { text: "は けんじさんの 弟[おとうと]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "今[いま] 図書館[としょかん]で" },
          { text: " 勉強[べんきょう]して", blank: true },
          { text: "いる", blank: true },
          { text: "大学生[だいがくせい]", blank: true },
          { text: "は けんじさんの 弟[おとうと]" },
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
          { text: "は けんじさんの 弟[おとうと]" },
          { text: "です" },
        ],
        notes: "人 instead of 学生",
      },
    ],
  },
  {
    english: "The email I got from Yuki had a really long story.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんから" },
          { text: " もらったメール", blank: true },
          { text: "は すごく 長[なが]い 話[はなし]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "ゆきさんから" },
          { text: " もらったメール", blank: true },
          { text: "には すごく 長[なが]い 話[はなし]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "には instead of は",
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
    ],
  },
  {
    english:
      "The store with a big red door is the one Yuki's older sister works at.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: " 大[おお]きい 赤[あか]いドアのある 店[みせ]は" },
          { text: "ゆきさんのお 姉[ねえ]さんが 働[はたら]いて", blank: true },
          { text: "いる", blank: true },
          { text: "店[みせ]", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんのお 姉[ねえ]さんが 働[はたら]いて" },
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
    ],
  },
  {
    english:
      "The teacher with long hair is the one who lived in Italy for a year.",
    answers: [
      {
        segments: [
          { text: " 長[なが]い 髪[かみ]のある 教師[きょうし]は" },
          {
            text: " 一年[いちねん] イタリアに 住[す]んだ 教師[きょうし]",
            blank: true,
          },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: " 長[なが]い 髪[かみ]がある 教師[きょうし]は" },
          {
            text: " 一年[いちねん] イタリアに 住[す]んだ 教師[きょうし]",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "がある instead of のある",
      },
      {
        segments: [
          { text: " 長[なが]い 髪[かみ]のある 教師[きょうし]は" },
          {
            text: " 一年[いちねん] 間[かん]イタリアに 住[す]んだ 教師[きょうし]",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "一年間 with 間",
      },
      {
        segments: [
          { text: " 長[なが]い 髪[かみ]がある 教師[きょうし]は" },
          {
            text: " 一年[いちねん] 間[かん]イタリアに 住[す]んだ 教師[きょうし]",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "一年間 with がある",
      },

      {
        segments: [
          { text: " 髪[かみ]の 長[なが]い 教師[きょうし]は" },
          { text: " 一年[いちねん] 間[かん]イタリアに 住[す]んで", blank: true },
          { text: "いた", blank: true },
          { text: "人[ひと]", blank: true },
          { text: "です" },
        ],
        notes: "髪の長い describes the teacher by the hair itself; 住んでいた人 describes the past residence",
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
          { text: " した テスト", blank: true },
          { text: "には" },
          { text: " ぜんぜん 分[わ]からなかった 質問[しつもん]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " した テスト", blank: true },
          { text: "に" },
          { text: " ぜんぜん 分[わ]からなかった 質問[しつもん]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: " した 試験[しけん]", blank: true },
          { text: "には" },
          { text: " ぜんぜん 分[わ]からなかった 質問[しつもん]", blank: true },
          { text: "が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "試験 instead of テスト",
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
        notes: "受けた試験 (\"took an exam\") + 問題 (exam problem) instead of 質問",
      },
    ],
  },
  {
    english:
      "The girl with curly hair next to Yuki is a first-year student.",
    hint: "Yuki = ゆき; curly hair = くせ 毛[げ] (くせげ)",
    answers: [
      {
        segments: [
          { text: "ゆきさんの 隣[となり]にいる、" },
          {
            text: "くせ 毛[げ]のある 女[おんな]の 人[ひと]",
            blank: true,
          },
          { text: "は 一年生[いちねんせい]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "くせ 毛[げ]のある、" },
          {
            text: "ゆきさんの 隣[となり]にいる 女[おんな]の 人[ひと]",
            blank: true,
          },
          { text: "は 一年生[いちねんせい]" },
          { text: "です" },
        ],
        notes: "Reversed modifier order",
      },
      {
        segments: [
          { text: "ゆきさんの 隣[となり]にいる、" },
          {
            text: "くせ 毛[げ]がある 女[おんな]の 人[ひと]",
            blank: true,
          },
          { text: "は 一年生[いちねんせい]" },
          { text: "です" },
        ],
        notes: "がある instead of のある",
      },
    ],
  },
]

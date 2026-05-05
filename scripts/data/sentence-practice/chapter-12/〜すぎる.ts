import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "This café's coffee is too hot.",
    answers: [
      {
        segments: [
          { text: "この カフェの コーヒーは " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with このカフェのコーヒー as the topic",
      },
      {
        segments: [
          { text: "この カフェの コーヒーが " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to identify the coffee as too hot",
      },
      {
        segments: [
          { text: "ここの コーヒーは " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ここ to mean this café/place",
      },
      {
        segments: [
          { text: "ここの コーヒーが " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ここ with が for emphasis/identification",
      },
      {
        segments: [
          { text: "この 店[みせ]の コーヒーは " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 店 as a natural synonym for café/shop",
      },
      {
        segments: [
          { text: "この 店[みせ]の コーヒーが " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 店 and が instead of は",
      },
      {
        segments: [
          { text: "この カフェは コーヒーが " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic is the café; coffee marked with が",
      },
      {
        segments: [
          { text: "この 店[みせ]は コーヒーが " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 店 with café as the topic",
      },
      {
        segments: [
          { text: "この カフェ、コーヒーが " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial topic-like pause instead of は",
      },
      {
        segments: [
          { text: "この 店[みせ]、コーヒーが " },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial version with 店 and a pause",
      },
      {
        segments: [
          { text: "この カフェの コーヒー、" },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial version with the topic particle omitted",
      },
      {
        segments: [
          { text: "この 店[みせ]の コーヒー、" },
          { text: "熱[あつ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial particle omission with 店",
      },
    ],
  },
  {
    english: "I ate too much sushi yesterday.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、すしを 食[た]べ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic word order with 昨日 at the beginning and すし in kana.",
      },
      {
        segments: [
          { text: "昨日[きのう]、寿司[すし]を 食[た]べ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses kanji 寿司 instead of kana すし.",
      },
      {
        segments: [
          { text: "すしを 昨日[きのう] 食[た]べ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered with the object before the time expression.",
      },
      {
        segments: [
          { text: "寿司[すし]を 昨日[きのう] 食[た]べ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered version using kanji 寿司.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、すしを 食[た]べ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Includes 私は explicitly; the app can also drop the initial pronoun automatically.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、寿司[すし]を 食[た]べ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit 私は with kanji 寿司.",
      },
      {
        segments: [
          { text: "私[わたし]は すしを 昨日[きのう] 食[た]べ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit subject with object before the time expression.",
      },
      {
        segments: [
          { text: "私[わたし]は 寿司[すし]を 昨日[きのう] 食[た]べ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit subject and reordered object/time, using kanji 寿司.",
      },
    ],
  },
  {
    english: "My room is too quiet at night.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は 夜[よる]、" },
          { text: "静[しず]かすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard word order: topic first, time before predicate",
      },
      {
        segments: [
          { text: "夜[よる]、私[わたし]の 部屋[へや]は" },
          { text: "静[しず]かすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は 夜[よる]に" },
          { text: "静[しず]かすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses に with 夜 to mark the time",
      },
      {
        segments: [
          { text: "夜[よる]に 私[わたし]の 部屋[へや]は" },
          { text: "静[しず]かすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase with に placed first",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は 夜[よる]は" },
          { text: "静[しず]かすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses contrastive は on 夜, meaning especially/at night",
      },
      {
        segments: [
          { text: "夜[よる]は 私[わたし]の 部屋[へや]は" },
          { text: "静[しず]かすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contrastive 夜は placed at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が 夜[よる]、" },
          { text: "静[しず]かすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が instead of は to emphasize or identify my room as too quiet",
      },
      {
        segments: [
          { text: "夜[よる]の 私[わたし]の 部屋[へや]は" },
          { text: "静[しず]かすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 夜の部屋, literally “my room at night”",
      },
      {
        segments: [
          { text: "夜[よる]の 私[わたし]の 部屋[へや]が" },
          { text: "静[しず]かすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "夜の部屋 phrasing with が for emphasis",
      },
    ],
  },
  {
    english: "Kenji studies too much every night.",
    hint: "Kenji = 健二",
    answers: [
      {
        segments: [
          { text: "健二[けんじ]さんは 毎晩[まいばん]、" },
          { text: "勉強[べんきょう]しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard word order with 健二 as the topic",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 毎晩[まいばん]、勉強[べんきょう]を " },
          { text: "しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 勉強をする with を before しすぎる",
      },
      {
        segments: [
          { text: "毎晩[まいばん]、健二[けんじ]さんは " },
          { text: "勉強[べんきょう]しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression placed at the beginning",
      },
      {
        segments: [
          { text: "毎晩[まいばん]、健二[けんじ]さんは 勉強[べんきょう]を " },
          { text: "しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression first plus 勉強をする construction",
      },
      {
        segments: [
          { text: "健二[けんじ]さんが 毎晩[まいばん]、" },
          { text: "勉強[べんきょう]しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark Kenji as the subject/focus",
      },
    ],
  },
  {
    english: "My older brother doesn't sleep enough these days.",
    answers: [
      {
        segments: [
          { text: "兄[あに]は このごろ、" },
          { text: "寝[ね]なさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using このごろ and the common negative すぎる form 寝なさすぎる",
      },
      {
        segments: [
          { text: "兄[あに]は 最近[さいきん]、" },
          { text: "寝[ね]なさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 最近 for “these days”",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は このごろ、" },
          { text: "寝[ね]なさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly saying “my older brother” with 私の兄",
      },
      {
        segments: [
          { text: "兄[あに]が このごろ、" },
          { text: "寝[ね]なさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the older brother as the focused subject",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]が このごろ、" },
          { text: "寝[ね]なさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私の兄 with が for focus",
      },
      {
        segments: [
          { text: "兄[あに]は このごろ、寝[ね]る 時間[じかん]が" },
          { text: "短[みじか]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Paraphrase: his sleeping time is too short",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は 最近[さいきん]、寝[ね]る 時間[じかん]が" },
          { text: "短[みじか]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit my older brother; sleep time is too short",
      },
    ],
  },
  {
    english: "This horror movie is too scary.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          { text: "この ホラー映画[えいが]は " },
          { text: "怖[こわ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with は marking the movie as the topic",
      },
      {
        segments: [
          { text: "この ホラー映画[えいが]が " },
          { text: "怖[こわ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to emphasize this horror movie as the one that is too scary",
      },
      {
        segments: [
          { text: "この ホラー映画[えいが]、" },
          { text: "怖[こわ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual topic-particle omission with a comma",
      },
      {
        segments: [
          { text: "この ホラー映画[えいが]は すごく " },
          { text: "怖[こわ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds すごく to emphasize that it is far too scary",
      },
      {
        segments: [
          { text: "この ホラーの 映画[えいが]は " },
          { text: "怖[こわ]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ホラーの映画 instead of the compound ホラー映画",
      },
    ],
  },
  {
    english: "This wallet is too expensive.",
    answers: [
      {
        segments: [
          { text: "この 財布[さいふ]は " },
          { text: "高[たか]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with は marking the wallet as the topic.",
      },
      {
        segments: [
          { text: "この 財布[さいふ]が " },
          { text: "高[たか]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to emphasize/identify this wallet as the one that is too expensive.",
      },
      {
        segments: [
          { text: "この 財布[さいふ]、" },
          { text: "高[たか]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural spoken style with the topic particle omitted.",
      },
      {
        segments: [
          { text: "この 財布[さいふ]は 値段[ねだん]が " },
          { text: "高[たか]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Expresses the same idea as 'the price of this wallet is too high.'",
      },
    ],
  },
  {
    english: "My father's car is too fast.",
    answers: [
      {
        segments: [
          { text: "父[ちち]の 車[くるま]は" },
          { text: "速[はや]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Most natural concise phrasing; 父 means “my father” when speaking about one’s own father.",
      },
      {
        segments: [
          { text: "父[ちち]の 車[くるま]が" },
          { text: "速[はや]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は, emphasizing that the car is too fast.",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]の 車[くるま]は" },
          { text: "速[はや]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly includes 私の for “my father.”",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]の 車[くるま]が" },
          { text: "速[はや]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私の with が for emphasis.",
      },
      {
        segments: [
          { text: "うちの 父[ちち]の 車[くるま]は" },
          { text: "速[はや]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial うちの for “my/our family’s.”",
      },
      {
        segments: [
          { text: "うちの 父[ちち]の 車[くるま]が" },
          { text: "速[はや]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial うちの with が for emphasis.",
      },
    ],
  },
  {
    english: "There are not enough chairs in this room.",
    answers: [
      {
        segments: [
          { text: "この 部屋[へや]には 椅子[いす]が" },
          { text: "なさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using には for existence in this room and なさすぎる for 'not enough'.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 椅子[いす]が" },
          { text: "なさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the room as the topic.",
      },
      {
        segments: [
          { text: "この 部屋[へや]に 椅子[いす]が" },
          { text: "なさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using simple location particle に.",
      },
      {
        segments: [
          { text: "この 部屋[へや]、椅子[いす]が" },
          { text: "なさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual topic marking with a pause instead of は.",
      },
      {
        segments: [
          { text: "この 部屋[へや]には 椅子[いす]が" },
          { text: "少[すく]なすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "More natural wording: the chairs are too few.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 椅子[いす]が" },
          { text: "少[すく]なすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked room with 少なすぎる.",
      },
      {
        segments: [
          { text: "この 部屋[へや]に 椅子[いす]が" },
          { text: "少[すく]なすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using に for the location with 少なすぎる.",
      },
      {
        segments: [
          { text: "この 部屋[へや]、椅子[いす]が" },
          { text: "少[すく]なすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual topic-pause version with 少なすぎる.",
      },
      {
        segments: [
          { text: "この 部屋[へや]の 椅子[いす]は" },
          { text: "少[すく]なすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Rephrased as 'the chairs in this room are too few'.",
      },
      {
        segments: [
          { text: "この 部屋[へや]には 椅子[いす]が" },
          { text: "足[た]りなさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 足りない ('to be insufficient') with なさすぎる.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 椅子[いす]が" },
          { text: "足[た]りなさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked room with 足りなさすぎる.",
      },
      {
        segments: [
          { text: "この 部屋[へや]に 椅子[いす]が" },
          { text: "足[た]りなさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Simple location particle に with 足りなさすぎる.",
      },
      {
        segments: [
          { text: "この 部屋[へや]、椅子[いす]が" },
          { text: "足[た]りなさすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual topic-pause version with 足りなさすぎる.",
      },
    ],
  },
  {
    english: "Did Mika practice the piano too much yesterday?",
    hint: "Mika = みか",
    answers: [
      {
        segments: [
          { text: "みかさんは 昨日[きのう]、ピアノを " },
          { text: "練習[れんしゅう]しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Standard wording with は and yesterday near the beginning",
      },
      {
        segments: [
          { text: "昨日[きのう]、みかさんは ピアノを " },
          { text: "練習[れんしゅう]しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Time phrase placed first",
      },
      {
        segments: [
          { text: "みかさんは ピアノを 昨日[きのう] " },
          { text: "練習[れんしゅう]しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Yesterday placed just before the verb phrase",
      },
      {
        segments: [
          { text: "みかさんが 昨日[きのう]、ピアノを " },
          { text: "練習[れんしゅう]しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Using が instead of は to mark Mika as the subject",
      },
      {
        segments: [
          { text: "みかさんは 昨日[きのう]、ピアノの 練習[れんしゅう]を " },
          { text: "しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Using noun phrase ピアノの練習を instead of ピアノを練習する",
      },
      {
        segments: [
          { text: "昨日[きのう]、みかさんは ピアノの 練習[れんしゅう]を " },
          { text: "しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Noun phrase version with the time phrase first",
      },
      {
        segments: [
          { text: "みかさんは ピアノの 練習[れんしゅう]を 昨日[きのう] " },
          { text: "しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Noun phrase version with 昨日 before the verb",
      },
      {
        segments: [
          { text: "みかさんが 昨日[きのう]、ピアノの 練習[れんしゅう]を " },
          { text: "しすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Noun phrase version using が for the subject",
      },
    ],
  },
  {
    english: "This test is too easy.",
    answers: [
      {
        segments: [
          { text: "この テストは " },
          { text: "簡単[かんたん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using 簡単 for “easy”",
      },
      {
        segments: [
          { text: "この 試験[しけん]は " },
          { text: "簡単[かんたん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 試験 instead of テスト",
      },
      {
        segments: [
          { text: "この テスト、" },
          { text: "簡単[かんたん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Dropping the topic particle は, natural in conversation",
      },
      {
        segments: [
          { text: "この 試験[しけん]、" },
          { text: "簡単[かんたん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 試験 and dropping は",
      },
      {
        segments: [
          { text: "この テストは " },
          { text: "やさしすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using やさしい as “easy” for a test/problem",
      },
      {
        segments: [
          { text: "この 試験[しけん]は " },
          { text: "やさしすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 試験 and やさしい",
      },
      {
        segments: [
          { text: "この テスト、" },
          { text: "やさしすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational version with やさしい and dropped は",
      },
      {
        segments: [
          { text: "この 試験[しけん]、" },
          { text: "やさしすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational version with 試験 and やさしい",
      },
    ],
  },
  {
    english: "The library is too lively today.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]は " },
          { text: "にぎやかすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic word order with 今日 first and は marking the library as the topic",
      },
      {
        segments: [
          { text: "今日[きょう]の 図書館[としょかん]は " },
          { text: "にぎやかすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今日の図書館 to mean the library as it is today",
      },
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]が " },
          { text: "にぎやかすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to emphasize the library being too lively today",
      },
      {
        segments: [
          { text: "今日[きょう]の 図書館[としょかん]が " },
          { text: "にぎやかすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今日の図書館 with が for emphasis",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 今日[きょう]、" },
          { text: "にぎやかすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Putting 今日 after the topic with a pause",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 今日[きょう]、" },
          { text: "にぎやかすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with 今日 after the subject and a pause",
      },
    ],
  },
  {
    english: "This dorm room is too narrow for two people.",
    answers: [
      {
        segments: [
          { text: "この 寮[りょう]の 部屋[へや]は 二人[ふたり]には " },
          { text: "狭[せま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using 二人には for “for two people.”",
      },
      {
        segments: [
          { text: "この 寮[りょう]の 部屋[へや]は 二人[ふたり]では " },
          { text: "狭[せま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 二人では to mean “with/for two people.”",
      },
      {
        segments: [
          { text: "二人[ふたり]には この 寮[りょう]の 部屋[へや]は " },
          { text: "狭[せま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronting 二人には for emphasis.",
      },
      {
        segments: [
          { text: "二人[ふたり]では この 寮[りょう]の 部屋[へや]は " },
          { text: "狭[せま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronting 二人では for emphasis.",
      },
      {
        segments: [
          { text: "この 寮[りょう]の この 部屋[へや]は 二人[ふたり]には " },
          { text: "狭[せま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "More explicitly “this room in this dorm.”",
      },
      {
        segments: [
          { text: "この 寮[りょう]の この 部屋[へや]は 二人[ふたり]では " },
          { text: "狭[せま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit this dorm room with 二人では.",
      },
      {
        segments: [
          { text: "寮[りょう]の この 部屋[へや]は 二人[ふたり]には " },
          { text: "狭[せま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 寮のこの部屋 to mean “this dorm room.”",
      },
      {
        segments: [
          { text: "寮[りょう]の この 部屋[へや]は 二人[ふたり]では " },
          { text: "狭[せま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 寮のこの部屋 with 二人では.",
      },
    ],
  },
  {
    english: "Yesterday, I bought too many clothes at the department store.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、デパートで 服[ふく]を " },
          { text: "買[か]いすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation with 私は as the subject",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は デパートで 服[ふく]を " },
          { text: "買[か]いすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression placed before the subject",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、デパートで 洋服[ようふく]を " },
          { text: "買[か]いすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 洋服 as a natural synonym for clothes",
      },
      {
        segments: [
          { text: "私[わたし]は デパートで 昨日[きのう]、服[ふく]を " },
          { text: "買[か]いすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location placed before the time expression for slight emphasis on where",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、服[ふく]を デパートで " },
          { text: "買[か]いすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object placed before the location",
      },
    ],
  },
  {
    english: "My roommate drank too much beer at the party yesterday.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の ルームメイトは 昨日[きのう]、パーティーで ビールを" },
          { text: "飲[の]みすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic sentence with は and 昨日 placed before the party setting.",
      },
      {
        segments: [
          { text: "私[わたし]の ルームメイトは 昨日[きのう]の パーティーで ビールを" },
          { text: "飲[の]みすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 昨日のパーティーで as a single time/location phrase.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]の ルームメイトは パーティーで ビールを" },
          { text: "飲[の]みすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Sentence starts with the time expression 昨日.",
      },
      {
        segments: [
          { text: "昨日[きのう]の パーティーで、私[わたし]の ルームメイトは ビールを" },
          { text: "飲[の]みすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronts the party setting for emphasis.",
      },
      {
        segments: [
          { text: "私[わたし]の ルームメイトが 昨日[きのう]、パーティーで ビールを" },
          { text: "飲[の]みすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses が to present or identify the roommate as the subject.",
      },
      {
        segments: [
          { text: "昨日[きのう]、パーティーで 私[わたし]の ルームメイトは ビールを" },
          { text: "飲[の]みすぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Places パーティーで before the subject; still natural with the time expression first.",
      },
    ],
  },
  {
    english: "This apple is too sweet.",
    answers: [
      {
        segments: [
          { text: "この りんごは " },
          { text: "甘[あま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with は marking the apple as the topic.",
      },
      {
        segments: [
          { text: "この りんごが " },
          { text: "甘[あま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to emphasize that this apple is the one that is too sweet.",
      },
      {
        segments: [
          { text: "この りんご、" },
          { text: "甘[あま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual spoken style with the topic particle omitted.",
      },
      {
        segments: [
          { text: "この りんごは ちょっと " },
          { text: "甘[あま]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural softened phrasing with ちょっと, meaning it is a bit too sweet.",
      },
    ],
  },
  {
    english: "This hotel is not convenient enough.",
    answers: [
      {
        segments: [
          { text: "この ホテルは 便利[べんり]じゃなさ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using じゃない + なさ + すぎる with は",
      },
      {
        segments: [
          { text: "この ホテルは 不便[ふべん]" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural paraphrase: 'too inconvenient'",
      },
      {
        segments: [
          { text: "この ホテルが 便利[べんり]じゃなさ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to emphasize this hotel as the one that is not convenient enough",
      },
      {
        segments: [
          { text: "この ホテル、便利[べんり]じゃなさ" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual topic omission with a pause",
      },
      {
        segments: [
          { text: "この ホテルが 不便[ふべん]" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Paraphrase with が: 'this hotel is too inconvenient'",
      },
      {
        segments: [
          { text: "この ホテル、不便[ふべん]" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual topic omission with paraphrase 'too inconvenient'",
      },
    ],
  },
  {
    english: "Please don't worry too much about tomorrow's exam.",
    answers: [
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]を 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Basic translation using 試験を心配する",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]の ことを 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using のことを to mean 'about the exam'",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]の ことは 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using は to mark the exam as the topic",
      },
      {
        segments: [
          { text: "明日[あした]の テストを 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テスト instead of 試験",
      },
      {
        segments: [
          { text: "明日[あした]の テストの ことを 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テスト and のことを",
      },
      {
        segments: [
          { text: "明日[あした]の テストの ことは 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テスト and topical は",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]を あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Adding あまり to emphasize 'too much'",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]の ことを あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using のことを plus あまり",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]の ことは あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using topical は plus あまり",
      },
      {
        segments: [
          { text: "明日[あした]の テストを あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テスト with あまり",
      },
      {
        segments: [
          { text: "明日[あした]の テストの ことを あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テストのことを with あまり",
      },
      {
        segments: [
          { text: "明日[あした]の テストの ことは あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テストのことは with あまり",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]の ことで 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using のことで to express 'over/about the exam'",
      },
      {
        segments: [
          { text: "明日[あした]の テストの ことで 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テストのことで",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]の ことで あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using のことで with あまり",
      },
      {
        segments: [
          { text: "明日[あした]の テストの ことで あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テストのことで with あまり",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]について 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using について for 'about'",
      },
      {
        segments: [
          { text: "明日[あした]の テストについて 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テスト with について",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]について あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using について plus あまり",
      },
      {
        segments: [
          { text: "明日[あした]の テストについて あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テストについて plus あまり",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]は 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using は directly to topicalize the exam",
      },
      {
        segments: [
          { text: "明日[あした]の テストは 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テスト with direct topical は",
      },
      {
        segments: [
          { text: "明日[あした]の 試験[しけん]は あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Direct topical は with あまり",
      },
      {
        segments: [
          { text: "明日[あした]の テストは あまり 心配[しんぱい]し" },
          { text: "すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "negative", tense: "non-past" } },
          { text: "ください" },
        ],
        notes: "Using テスト, direct は, and あまり",
      },
    ],
  },
  {
    english: "My younger sister's letter is too long.",
    answers: [
      {
        segments: [
          { text: "妹[いもうと]の 手紙[てがみ]は " },
          { text: "長[なが]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using は; 妹 implies my younger sister.",
      },
      {
        segments: [
          { text: "妹[いもうと]の 手紙[てがみ]が " },
          { text: "長[なが]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to emphasize that the letter is too long.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]の 手紙[てがみ]は " },
          { text: "長[なが]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says my younger sister with 私の.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]の 手紙[てがみ]が " },
          { text: "長[なが]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私の plus が for emphasis.",
      },
      {
        segments: [
          { text: "妹[いもうと]の 手紙[てがみ]は " },
          { text: "長[なが]すぎ", blank: true },
          { text: "です" },
        ],
        notes: "すぎ used as a noun-like predicate with です.",
      },
      {
        segments: [
          { text: "妹[いもうと]の 手紙[てがみ]が " },
          { text: "長[なが]すぎ", blank: true },
          { text: "です" },
        ],
        notes: "すぎ nominal predicate with が.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]の 手紙[てがみ]は " },
          { text: "長[なが]すぎ", blank: true },
          { text: "です" },
        ],
        notes: "Explicit 私の with shortened すぎ predicate.",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]の 手紙[てがみ]が " },
          { text: "長[なが]すぎ", blank: true },
          { text: "です" },
        ],
        notes: "Explicit 私の, が, and shortened すぎ predicate.",
      },
    ],
  },
  {
    english: "This questionnaire is too simple.",
    answers: [
      {
        segments: [
          { text: "この アンケートは " },
          { text: "簡単[かんたん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using この and は with the known な-adjective 簡単",
      },
      {
        segments: [
          { text: "この アンケートが " },
          { text: "簡単[かんたん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は; natural when identifying this questionnaire as the one that is too simple",
      },
      {
        segments: [
          { text: "この アンケート、" },
          { text: "簡単[かんたん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual topic-marking by dropping は after このアンケート",
      },
      {
        segments: [
          { text: "この アンケートは " },
          { text: "単純[たんじゅん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 単純 for “simple/simplistic” instead of 簡単",
      },
      {
        segments: [
          { text: "この アンケートが " },
          { text: "単純[たんじゅん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with the synonym 単純",
      },
      {
        segments: [
          { text: "この アンケート、" },
          { text: "単純[たんじゅん]すぎる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual particle drop with the synonym 単純",
      },
    ],
  },
];

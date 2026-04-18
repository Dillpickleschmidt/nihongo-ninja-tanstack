import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I swim in the sea twice a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 海[うみ]で" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]", blank: true },
          { text: "泳[およ]ぐ", conjugation: { pos: "Godan verb with 'gu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]が 海[うみ]で" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]", blank: true },
          { text: "泳[およ]ぐ", conjugation: { pos: "Godan verb with 'gu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "二回[にかい]" },
          { text: "海[うみ]で" },
          { text: "泳[およ]ぐ", conjugation: { pos: "Godan verb with 'gu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Frequency phrase before location: topic は + frequency + location + verb",
      },
      {
        segments: [
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "二回[にかい]" },
          { text: "私[わたし]は" },
          { text: "海[うみ]で" },
          { text: "泳[およ]ぐ", conjugation: { pos: "Godan verb with 'gu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Frequency phrase at the very start of the sentence (topic-prominent fronting)",
      },
      {
        segments: [
          { text: "週[しゅう]に", blank: true },
          { text: "二回[にかい]" },
          { text: "海[うみ]で" },
          { text: "泳[およ]ぐ", conjugation: { pos: "Godan verb with 'gu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "週に (short form) instead of 一週間に; subject 私は dropped",
      },
    ],
  },
  {
    english: "Hana goes to the beauty parlor about three times a month.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは 一[いっ]か 月[げつ]に 三[さん]回[かい]ぐらい 美容院[びよういん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "はなさんは 一[いっ]か 月[げつ]に 三[さん]回[かい]くらい 美容院[びよういん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "くらい instead of ぐらい",
      },
    ],
  },
  {
    english: "I eat lunch at the cafeteria about four times a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 食堂[しょくどう]で" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "四回[よんかい]ぐらい 昼[ひる]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 食堂[しょくどう]で" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "四回[よんかい]くらい 昼[ひる]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using くらい instead of ぐらい",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に", blank: true },
          { text: "四回[よんかい]ぐらい 食堂[しょくどう]で 昼[ひる]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Frequency expression moved before location",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に", blank: true },
          { text: "四回[よんかい]くらい 食堂[しょくどう]で 昼[ひる]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Frequency first, location after; using くらい",
      },
      {
        segments: [
          { text: "私[わたし]が 食堂[しょくどう]で" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "四回[よんかい]ぐらい 昼[ひる]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for subject marker",
      },
      {
        segments: [
          { text: "私[わたし]は 食堂[しょくどう]で" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "四回[よんかい]ぐらい 昼食[ちゅうしょく]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 昼食 (more formal word for lunch) instead of 昼ご飯",
      },
    ],
  },
  {
    english: "Does Kenji go to karaoke five times a week?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは" },
          { text: "一週間[いっしゅうかん]に 五回[ごかい]", blank: true },
          { text: "カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは カラオケに" },
          { text: "一週間[いっしゅうかん]に 五回[ごかい]", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Destination カラオケに moved before the frequency phrase",
      },
      {
        segments: [
          { text: "けんじさんが" },
          { text: "一週間[いっしゅうかん]に 五回[ごかい]", blank: true },
          { text: "カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using が instead of は for the subject",
      },
    ],
  },
  {
    english: "Saki practices piano three times a week.",
    hint: "Saki = さき",
    answers: [
      {
        segments: [
          { text: "さきは" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい]ピアノを" },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "さきは" },
          { text: "一週間[いっしゅうかん]に三回[さんかい]", blank: true },
          { text: "ピアノを" },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Entire frequency phrase 一週間に三回 as one blank",
      },
      {
        segments: [
          { text: "さきはピアノを" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい]" },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object ピアノを moved to front before the frequency phrase",
      },
      {
        segments: [
          { text: "さきは" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい]ピアノを" },
          { text: "弾[ひ]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 弾く (to play piano) instead of 練習する",
      },
      {
        segments: [
          { text: "さきはピアノを" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい]" },
          { text: "弾[ひ]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ピアノを moved to front, 弾く verb",
      },
    ],
  },
  {
    english: "Takeshi goes running in the park twice a week.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは 一週間[いっしゅうかん]に 二回[にかい] 公園[こうえん]で" },
          { text: "走[はし]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "たけしさんは 公園[こうえん]で 一週間[いっしゅうかん]に" },
          { text: "二回[にかい]", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location (公園で) moved before frequency expression; blank on 二回",
      },
      {
        segments: [
          { text: "たけしさんは 一週間[いっしゅうかん]に 二回[にかい] 公園[こうえん]に 走[はし]りに" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 走りに行く (goes running) — Verb + にいく grammar; 公園に instead of 公園で",
      },
      {
        segments: [
          { text: "たけしさんが 一週間[いっしゅうかん]に 二回[にかい] 公園[こうえん]で" },
          { text: "走[はし]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は",
      },
      {
        segments: [
          { text: "たけしさんは 公園[こうえん]で 一週間[いっしゅうかん]に" },
          { text: "二回[にかい]", blank: true },
          { text: "走[はし]りに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "走りに行く with location before frequency; blank on 二回",
      },
    ],
  },
  {
    english: "I go to a hot spring about twice a year.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 一年[いちねん]に 二回[にかい]ぐらい 温泉[おんせん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 一年[いちねん]に 二回[にかい]くらい 温泉[おんせん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Same as above but using くらい instead of ぐらい",
      },
      {
        segments: [
          { text: "私[わたし]は 一年[いちねん]に 二回[にかい] 温泉[おんせん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Without ぐらい/くらい — \"about\" omitted, just \"twice a year\"",
      },
      {
        segments: [
          { text: "私[わたし]が 一年[いちねん]に 二回[にかい]ぐらい 温泉[おんせん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for the subject particle",
      },
      {
        segments: [
          { text: "一年[いちねん]に 二回[にかい]ぐらい、私[わたし]は 温泉[おんせん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Frequency phrase moved to the front of the sentence before 私は",
      },
      {
        segments: [
          { text: "一年[いちねん]に 二回[にかい]くらい、私[わたし]は 温泉[おんせん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Frequency phrase at front, くらい instead of ぐらい",
      },
      {
        segments: [
          { text: "私[わたし]は 一年[いちねん]に 二回[にかい]ぐらい 温泉[おんせん]へ" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for destination (温泉へ行く)",
      },
      {
        segments: [
          { text: "私[わたし]は 一年[いちねん]に 二回[にかい]くらい 温泉[おんせん]へ" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "へ instead of に for destination, くらい variant",
      },
      {
        segments: [
          { text: "私[わたし]が 一年[いちねん]に 二回[にかい]くらい 温泉[おんせん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は, くらい variant",
      },
    ],
  },
  {
    english: "I watch movies about once a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 一回[いっかい]ぐらい 映画[えいが]を" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 一回[いっかい]くらい 映画[えいが]を" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "くらい instead of ぐらい",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 一回[いっかい]ぐらい 映画[えいが]を 見[み]" },
          { text: "に", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "映画を見に行く — going to watch movies (theater nuance), に as blank",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 一回[いっかい]くらい 映画[えいが]を 見[み]" },
          { text: "に", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "映画を見に行く with くらい instead of ぐらい",
      },
    ],
  },
  {
    english: "How many times a week does Haruto exercise?",
    hint: "Haruto = はると",
    answers: [
      {
        segments: [
          { text: "はるとさんは 一週間[いっしゅうかん]に" },
          { text: "何回[なんかい]", blank: true },
          { text: "運動[うんどう]" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "はるとさんは 一週間[いっしゅうかん]に" },
          { text: "何回[なんかい]", blank: true },
          { text: "運動[うんどう]" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "With か question marker at the end",
      },
      {
        segments: [
          { text: "はるとさんは 一週間[いっしゅうかん]に 何回[なんかい] 運動[うんどう]するんです" },
          { text: "か", blank: true },
        ],
      },
      {
        segments: [
          { text: "はるとさんは 一週間[いっしゅうかん]に" },
          { text: "何回[なんかい]", blank: true },
          { text: "運動[うんどう]するの" },
        ],
      },
      {
        segments: [
          { text: "一週間[いっしゅうかん]に" },
          { text: "何回[なんかい]", blank: true },
          { text: "はるとは 運動[うんどう]" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Timeframe moved to the front of the sentence",
      },
      {
        segments: [
          { text: "一週間[いっしゅうかん]に" },
          { text: "何回[なんかい]", blank: true },
          { text: "はるとは 運動[うんどう]するの" },
        ],
        notes: "Timeframe first + の question ending",
      },
      {
        segments: [
          { text: "はるとさんは 一週間[いっしゅうかん]に" },
          { text: "何回[なんかい]", blank: true },
          { text: "運動[うんどう]するんですか" },
        ],
      },
      {
        segments: [
          { text: "はるとさんが 一週間[いっしゅうかん]に" },
          { text: "何回[なんかい]", blank: true },
          { text: "運動[うんどう]" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for subject marker",
      },
    ],
  },
  {
    english: "I only study once a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一週間[いっしゅうかん]に 一回[いっかい]しか", blank: true },
          { text: "勉強[べんきょう]する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 一回[いっかい]しか 勉強[べんきょう]", blank: true },
          { text: "しない", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 一回[いっかい]しか", blank: true },
          { text: "勉強[べんきょう]しない", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Blank covers only the frequency phrase + しか; 勉強しない is outside the blank",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に", blank: true },
          { text: "一回[いっかい]しか 勉強[べんきょう]しない", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Blank covers only the timeframe + に; rest is outside",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 一回[いっかい]しか 勉強[べんきょう]しない", blank: true },
        ],
        notes: "Full sentence as one blank",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 一度[いちど]しか 勉強[べんきょう]", blank: true },
          { text: "しない", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 一度 instead of 一回 (synonym for \"once\")",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 一度[いちど]しか", blank: true },
          { text: "勉強[べんきょう]しない", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "一度 variant with blank on frequency+しか only",
      },
    ],
  },
  {
    english: "Sota eats sushi three times a week?!",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんは 一週間[いっしゅうかん]に" },
          { text: "三回[さんかい]", blank: true },
          { text: "も 寿司[すし]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "そうたさんは 一週間[いっしゅうかん]に" },
          { text: "三回[さんかい]", blank: true },
          { text: "寿司[すし]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Without も, plain exclamatory question with か",
      },
      {
        segments: [
          { text: "そうたさんは 寿司[すし]を 一週間[いっしゅうかん]に" },
          { text: "三回[さんかい]", blank: true },
          { text: "も" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Object (sushi) moved before the frequency phrase; も for emphasis",
      },
      {
        segments: [
          { text: "そうたさんは 寿司[すし]を 一週間[いっしゅうかん]に" },
          { text: "三回[さんかい]", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "の" },
        ],
        notes: "Using の for casual exclamatory question instead of か; object first order",
      },
      {
        segments: [
          { text: "そうたさんは 一週間[いっしゅうかん]に" },
          { text: "三回[さんかい]", blank: true },
          { text: "も 寿司[すし]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "の" },
        ],
        notes: "Frequency-first order with の for casual exclamation; も for emphasis",
      },
      {
        segments: [
          { text: "そうたさんは 一週間[いっしゅうかん]に" },
          { text: "三回[さんかい]", blank: true },
          { text: "も 寿司[すし]を 食[た]べるんですか" },
        ],
      },
      {
        segments: [
          { text: "そうたさんは 寿司[すし]を 一週間[いっしゅうかん]に" },
          { text: "三回[さんかい]", blank: true },
          { text: "も 食[た]べるんですか" },
        ],
        notes: "Object-first order with んですか and も for surprise",
      },
    ],
  },
  {
    english: "I go to the dentist once a month.",
    hint: "dentist = 歯科",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一回[いっかい] 歯科[しか]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 歯科[しか]に 一[いっ]か 月[げつ]に 一回[いっかい]" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Destination (歯科に) placed before the frequency phrase",
      },
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一度[いちど] 歯科[しか]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 一度 instead of 一回 for \"once\"",
      },
      {
        segments: [
          { text: "私[わたし]が 一[いっ]か 月[げつ]に 一回[いっかい] 歯科[しか]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for the subject particle",
      },
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一回[いっかい] 歯科[しか]へ" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for the destination particle",
      },
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一度[いちど] 歯科[しか]へ" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "Miki goes camping twice a year.",
    hint: "Miki = みき",
    answers: [
      {
        segments: [
          { text: "みきは" },
          { text: "一年[いちねん]に", blank: true },
          { text: "二回[にかい]キャンプに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "みきは" },
          { text: "一年[いちねん]に", blank: true },
          { text: "二回[にかい]キャンプを" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using キャンプをする instead of キャンプに行く",
      },
      {
        segments: [
          { text: "みきは 一年[いちねん]" },
          { text: "に 二回[にかい]", blank: true },
          { text: "キャンプに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Blank on に二回 portion (different blank placement)",
      },
      {
        segments: [
          { text: "みきは 一年[いちねん]" },
          { text: "に 二回[にかい]", blank: true },
          { text: "キャンプを" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Blank on に二回, using キャンプをする",
      },
      {
        segments: [
          { text: "みきは" },
          { text: "一年[いちねん]に", blank: true },
          { text: "二回[にかい]" },
          { text: "キャンプする", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "みきは 一年[いちねん]" },
          { text: "に 二回[にかい]", blank: true },
          { text: "キャンプ" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Blank on に二回, using キャンプする compound verb",
      },
    ],
  },
  {
    english: "Does Riko do laundry three times a week?",
    hint: "Riko = りこ",
    answers: [
      {
        segments: [
          { text: "りこは 一週間[いっしゅうかん]に 三回[さんかい]" },
          { text: "洗濯[せんたく]する", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "りこは 一週間[いっしゅうかん]に 三回[さんかい]も" },
          { text: "洗濯[せんたく]する", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "With も for emphasis/surprise (like sentence 11)",
      },
      {
        segments: [
          { text: "りこは 一週間[いっしゅうかん]に 三回[さんかい]ぐらい" },
          { text: "洗濯[せんたく]する", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "With ぐらい for approximation (about three times)",
      },
      {
        segments: [
          { text: "りこは 一週間[いっしゅうかん]に 三回[さんかい] 洗濯[せんたく]を" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using 洗濯をする (を particle version) instead of compound 洗濯する",
      },
    ],
  },
  {
    english: "I call home about twice a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 二回[にかい]ぐらい 家[いえ]に 電話[でんわ]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 二回[にかい]くらい 家[いえ]に 電話[でんわ]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Same structure but using くらい instead of ぐらい",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 二回[にかい]ぐらい 家[いえ]に 電話[でんわ]", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Blank on 電話, showing the noun part of the compound verb",
      },
      {
        segments: [
          { text: "私[わたし]は 家[いえ]に 一週間[いっしゅうかん]に 二回[にかい]ぐらい 電話[でんわ]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "家に moved before the frequency phrase (topic first, then frequency)",
      },
      {
        segments: [
          { text: "私[わたし]は 家[いえ]に 一週間[いっしゅうかん]に 二回[にかい]くらい 電話[でんわ]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "家に before frequency, using くらい",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 二回[にかい]ぐらい うちに 電話[でんわ]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using うち instead of 家 for \"home\"",
      },
      {
        segments: [
          { text: "私[わたし]は 一週間[いっしゅうかん]に 二回[にかい]くらい うちに 電話[でんわ]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "I buy new clothes about once a month.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一回[いっかい]ぐらい 新[あたら]しい 服[ふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Base form with ぐらい after 一回, 服 for clothes",
      },
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一回[いっかい]くらい 新[あたら]しい 服[ふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "くらい instead of ぐらい",
      },
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一回[いっかい]ぐらい 新[あたら]しい 洋服[ようふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "洋服 instead of 服 for clothes",
      },
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一回[いっかい]くらい 新[あたら]しい 洋服[ようふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "洋服 + くらい",
      },
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一回[いっかい] 新[あたら]しい 服[ふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "No ぐらい — \"about\" omitted, treating it as a straightforward once-a-month statement (also natural)",
      },
      {
        segments: [
          { text: "私[わたし]は 一[いっ]か 月[げつ]に 一回[いっかい] 新[あたら]しい 洋服[ようふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "洋服, no ぐらい",
      },
      {
        segments: [
          { text: "私[わたし]は 一ヶ月[いっかげつ]に 一回[いっかい]ぐらい 新[あたら]しい 服[ふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一ヶ月 (alternate kanji form) instead of 一か月",
      },
      {
        segments: [
          { text: "私[わたし]は 一ヶ月[いっかげつ]に 一回[いっかい]くらい 新[あたら]しい 服[ふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一ヶ月 + くらい variant",
      },
      {
        segments: [
          { text: "私[わたし]は 一ヶ月[いっかげつ]に 一回[いっかい] 新[あたら]しい 服[ふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一ヶ月, no ぐらい",
      },
      {
        segments: [
          { text: "私[わたし]が 一[いっ]か 月[げつ]に 一回[いっかい]ぐらい 新[あたら]しい 服[ふく]を" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は",
      },
    ],
  },
  {
    english: "Yuki goes to the art museum once a week.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんは" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "一回[いっかい]" },
          { text: "美術館[びじゅつかん]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ゆきさんは" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "一度[いちど]" },
          { text: "美術館[びじゅつかん]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 一度 (いちど) instead of 一回 (いっかい) for \"once\"",
      },
      {
        segments: [
          { text: "ゆきさんは 美術館[びじゅつかん]に" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "一回[いっかい]" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Destination 美術館に moved to front of sentence (topic-fronting)",
      },
    ],
  },
  {
    english: "Sota eats cake three times a week?!",
    answers: [
      {
        segments: [
          { text: "そうたさんは" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい]も ケーキを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "そうたさんは" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい]も ケーキを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "With ね for surprise/seeking confirmation",
      },
      {
        segments: [
          { text: "そうたさんは" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい]も ケーキを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "With よ for assertive surprise",
      },
      {
        segments: [
          { text: "そうたさんは 一週間[いっしゅうかん]に 三回[さんかい]も ケーキを" },
          { text: "食[た]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Blank on the verb instead of the timeframe+に",
      },
      {
        segments: [
          { text: "そうたさんは 一週間[いっしゅうかん]に 三回[さんかい]も ケーキを" },
          { text: "食[た]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "Verb blank with ね",
      },
      {
        segments: [
          { text: "そうたさんは" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい] ケーキを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Without も — surprise conveyed by か alone",
      },
      {
        segments: [
          { text: "そうたさんは" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい] ケーキを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "Without も, with ね for surprise/confirmation",
      },
      {
        segments: [
          { text: "そうたさんは ケーキを" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい]も" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Object before frequency phrase (ケーキを一週間に三回も)",
      },
      {
        segments: [
          { text: "そうたさんは ケーキを" },
          { text: "一週間[いっしゅうかん]に", blank: true },
          { text: "三回[さんかい]も" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "Object before frequency phrase, with ね",
      },
    ],
  },
  {
    english: "Riku only washes his hair about twice a week.",
    hint: "Riku = りく",
    answers: [
      {
        segments: [
          { text: "りくさんは 一週間[いっしゅうかん]に 二回[にかい]ぐらいしか 髪[かみ]を" },
          { text: "洗[あら]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "りくさんは 一週間[いっしゅうかん]に 二回[にかい]ぐらいしか 髪[かみ]の毛[け]を" },
          { text: "洗[あら]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 髪の毛 instead of 髪 — both mean hair",
      },
      {
        segments: [
          { text: "りくさんは 一週間[いっしゅうかん]に 二回[にかい]くらいしか 髪[かみ]を" },
          { text: "洗[あら]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using くらい instead of ぐらい — both mean \"about\"",
      },
      {
        segments: [
          { text: "りくさんは 一週間[いっしゅうかん]に 二回[にかい]くらいしか 髪[かみ]の毛[け]を" },
          { text: "洗[あら]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "くらい + 髪の毛 variation",
      },
    ],
  },
  {
    english: "Rina rides a roller coaster about twice a year.",
    hint: "Rina = りな; roller coaster = ジェットコースター",
    answers: [
    ],
  },
];

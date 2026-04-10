import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I usually watch TV at around nine o'clock.",
    answers: [
      // 私は + たいてい before time, with に
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "たいてい", blank: true },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "にテレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + たいてい + 九時ごろに +テレビを見る",
      },
      // 私は + たいてい before time, without に
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "たいてい", blank: true },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + たいてい + 九時ごろ (に omitted) +テレビを見る",
      },
      // 私は + たいてい after time, with に
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          { text: "たいてい", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 九時ごろに + たいてい +テレビを見る",
      },
      // 私は + たいてい after time, without に
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "たいてい", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 九時ごろ (に omitted) + たいてい +テレビを見る",
      },
      // 私、+ たいてい before time, with に
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "たいてい", blank: true },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "にテレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ たいてい + 九時ごろに",
      },
      // 私、+ たいてい before time, without に
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "たいてい", blank: true },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ たいてい + 九時ごろ (に omitted)",
      },
      // 私、+ たいてい after time, with に
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          { text: "たいてい", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 九時ごろに + たいてい",
      },
      // 私、+ たいてい after time, without に
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "たいてい", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 九時ごろ (に omitted) + たいてい",
      },
      // Fronted time + 私は after
      {
        segments: [
          { text: "たいてい", blank: true },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 私[わたし]はテレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Fronted たいてい九時ごろに + 私は",
      },
      {
        segments: [
          { text: "たいてい", blank: true },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "私[わたし]はテレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Fronted たいてい九時ごろ (に omitted) + 私は",
      },
      // たいてい directly before verb
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "にテレビを" },
          { text: "たいてい", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 九時ごろに +テレビを + たいてい + 見る",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "テレビを" },
          { text: "たいてい", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 九時ごろ (に omitted) +テレビを + たいてい + 見る",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "にテレビを" },
          { text: "たいてい", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 九時ごろに +テレビを + たいてい + 見る",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "九時[くじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "テレビを" },
          { text: "たいてい", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 九時ごろ (に omitted) +テレビを + たいてい + 見る",
      },
    ],
  },
  {
    english: "I drink coffee every day.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "毎日[まいにち]", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "毎日[まいにち]", blank: true },
          { text: "私[わたし]はコーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "毎日[まいにち]", blank: true },
          { text: "、私[わたし]はコーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "毎日[まいにち]", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
    ],
  },
  {
    english: "I watch movies on Saturday.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "土曜日[どようび]", blank: true },
          { text: "に 映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "土曜日[どようび]", blank: true },
          { text: "に 私[わたし]は 映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "土曜日[どようび]", blank: true },
          { text: "に、私[わたし]は 映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "土曜日[どようび]", blank: true },
          { text: "に 映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
    ],
  },
  {
    english: "I'll go back home at around eleven o'clock tonight.",
    hint: "Express returning to a place using に as the endpoint",
    answers: [
      // 私は + 今晩 variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今晩[こんばん]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今晩 + 十一時ごろに + 家に",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今晩[こんばん]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に うちに" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今晩 + 十一時ごろに + うちに",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今晩[こんばん]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今晩 + 十一時ごろに + 家へ",
      },
      // 私は + 今晩 + ごろ without に
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今晩[こんばん]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今晩 + 十一時ごろ (に omitted after ごろ) + 家に",
      },
      // 私は + 今夜 variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今夜[こんや]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今夜 + 十一時ごろに + 家に",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今夜[こんや]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に うちに" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今夜 + 十一時ごろに + うちに",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今夜[こんや]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今夜 + 十一時ごろに + 家へ",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "今晩[こんばん]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 今晩 + 十一時ごろに + 家に",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "今夜[こんや]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 今夜 + 十一時ごろに + 家に",
      },
      // 今晩は as topic
      {
        segments: [
          { text: "今晩[こんばん]", blank: true },
          { text: "は" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今晩は as the topic (dropping 私は) + 家に",
      },
      {
        segments: [
          { text: "今晩[こんばん]", blank: true },
          { text: "は" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に うちに" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今晩は as the topic + うちに",
      },
      {
        segments: [
          { text: "今晩[こんばん]", blank: true },
          { text: "は" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今晩は as topic + に omitted after ごろ + 家に",
      },
      // 夜の十一時 with destinations
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "夜[よる]", blank: true },
          { text: "の" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 夜の十一時ごろに + 家に",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "夜[よる]", blank: true },
          { text: "の" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に うちに" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 夜の十一時ごろに + うちに",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "夜[よる]", blank: true },
          { text: "の" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 夜の十一時ごろに + 家へ",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "夜[よる]", blank: true },
          { text: "の" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 夜の十一時ごろ (に omitted) + 家に",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "夜[よる]", blank: true },
          { text: "の" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 夜の十一時ごろに + 家に",
      },
      // Destination-less variants — 今晩
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今晩[こんばん]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今晩 + 十一時ごろに + 帰る (no destination)",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今晩[こんばん]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今晩 + 十一時ごろ (に omitted) + 帰る (no destination)",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "今晩[こんばん]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 今晩 + 十一時ごろに + 帰る (no destination)",
      },
      {
        segments: [
          { text: "今晩[こんばん]", blank: true },
          { text: "は" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今晩は as topic + 十一時ごろに + 帰る (no destination)",
      },
      // Destination-less variants — 今夜
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今夜[こんや]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今夜 + 十一時ごろに + 帰る (no destination)",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "今夜[こんや]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 今夜 + 十一時ごろ (に omitted) + 帰る (no destination)",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "今夜[こんや]", blank: true },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 今夜 + 十一時ごろに + 帰る (no destination)",
      },
      // Destination-less variants — 夜の
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "夜[よる]", blank: true },
          { text: "の" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 夜の十一時ごろに + 帰る (no destination)",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "夜[よる]", blank: true },
          { text: "の" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 夜の十一時ごろ (に omitted) + 帰る (no destination)",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "夜[よる]", blank: true },
          { text: "の" },
          { text: "十一時[じゅういちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 夜の十一時ごろに + 帰る (no destination)",
      },
    ],
  },
  {
    english:
      "I sometimes listen to music at around eight o'clock in the morning.",
    answers: [
      // 私は + 時々 before time — 朝 八時 (with space)
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]", blank: true },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 時々 + 朝 八時ごろに + 音楽を聞く",
      },
      // 私は + 時々 before time — 朝の八時
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]", blank: true },
          { text: "の" },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 時々 + 朝の八時ごろに + 音楽を聞く",
      },
      // 私は + 時々 after time
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "朝[あさ]", blank: true },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          { text: "時々[ときどき]", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 朝 八時ごろに + 時々 + 音楽を聞く",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "朝[あさ]", blank: true },
          { text: "の" },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          { text: "時々[ときどき]", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 朝の八時ごろに + 時々 + 音楽を聞く",
      },
      // 私は + ごろ without に
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]", blank: true },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 時々 + 朝 八時ごろ (に omitted) + 音楽を聞く",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]", blank: true },
          { text: "の" },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 時々 + 朝の八時ごろ (に omitted) + 音楽を聞く",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]", blank: true },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 時々 + 朝 八時ごろに",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]", blank: true },
          { text: "の" },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 時々 + 朝の八時ごろに",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "朝[あさ]", blank: true },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に" },
          { text: "時々[ときどき]", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 朝 八時ごろに + 時々",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]", blank: true },
          { text: "八時[はちじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 時々 + 朝 八時ごろ (に omitted)",
      },
    ],
  },
  {
    english: "I sometimes watch TV.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "時々[ときどき]", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "私[わたし]はテレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "、私[わたし]はテレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "時々[ときどき]", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
    ],
  },
  {
    english: "I eat lunch at 2:30.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "二時半[にじはん]", blank: true },
          { text: "に 昼[ひる]ご 飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "二時半[にじはん]", blank: true },
          { text: "に 私[わたし]は 昼[ひる]ご 飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "二時半[にじはん]", blank: true },
          { text: "に、私[わたし]は 昼[ひる]ご 飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "二時半[にじはん]", blank: true },
          { text: "に 昼[ひる]ご 飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
    ],
  },
  {
    english: "I usually study at school.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "たいてい", blank: true },
          { text: "学校[がっこう]で" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "たいてい", blank: true },
          { text: "私[わたし]は 学校[がっこう]で" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "たいてい", blank: true },
          { text: "、私[わたし]は 学校[がっこう]で" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "たいてい", blank: true },
          { text: "学校[がっこう]で" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
      // たいてい after 学校で — 私は
      {
        segments: [
          { text: "私[わたし]は 学校[がっこう]で" },
          { text: "たいてい", blank: true },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 学校で + たいてい + 勉強する",
      },
      // たいてい after 学校で — 私、
      {
        segments: [
          { text: "私[わたし]、学校[がっこう]で" },
          { text: "たいてい", blank: true },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 学校で + たいてい + 勉強する",
      },
    ],
  },
  {
    english: "I'm going to the library at around three o'clock on Saturday.",
    answers: [
      // 私は + 土曜日に variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "土曜日[どようび]", blank: true },
          { text: "に" },
          { text: "三時[さんじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 図書館[としょかん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 土曜日に + 三時ごろに + 図書館に",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "土曜日[どようび]", blank: true },
          { text: "に" },
          { text: "三時[さんじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "図書館[としょかん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 土曜日に + 三時ごろ (に omitted) + 図書館に",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "土曜日[どようび]", blank: true },
          { text: "に" },
          { text: "三時[さんじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 図書館[としょかん]へ" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 土曜日に + 三時ごろに + 図書館へ",
      },
      // 私は + 土曜日の variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "土曜日[どようび]", blank: true },
          { text: "の" },
          { text: "三時[さんじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 図書館[としょかん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "私は + 土曜日の三時ごろに — の connects day and time as noun phrase",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "土曜日[どようび]", blank: true },
          { text: "の" },
          { text: "三時[さんじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "図書館[としょかん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 土曜日の三時ごろ (に omitted) + 図書館に",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "土曜日[どようび]", blank: true },
          { text: "の" },
          { text: "三時[さんじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 図書館[としょかん]へ" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は + 土曜日の三時ごろに + 図書館へ",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "土曜日[どようび]", blank: true },
          { text: "に" },
          { text: "三時[さんじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 図書館[としょかん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、+ 土曜日に + 三時ごろに + 図書館に",
      },
      // Time-topic inversion
      {
        segments: [
          { text: "土曜日[どようび]", blank: true },
          { text: "に" },
          { text: "三時[さんじ]", blank: true },
          { text: "ごろ", blank: true },
          { text: "に 私[わたし]は 図書館[としょかん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time-topic inversion: 土曜日に三時ごろに + 私は + 図書館に",
      },
    ],
  },
  {
    english: "I often listen to music.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "よく", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "よく", blank: true },
          { text: "私[わたし]は 音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "よく", blank: true },
          { text: "、私[わたし]は 音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "よく", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
    ],
  },
  {
    english: "I go to school at 9:00.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "九時[くじ]", blank: true },
          { text: "に 学校[がっこう]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "九時[くじ]", blank: true },
          { text: "に 私[わたし]は 学校[がっこう]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "九時[くじ]", blank: true },
          { text: "に、私[わたし]は 学校[がっこう]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "九時[くじ]", blank: true },
          { text: "に 学校[がっこう]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
      // へ variants — 私は
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "九時[くじ]", blank: true },
          { text: "に 学校[がっこう]へ" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first; 学校へ",
      },
      {
        segments: [
          { text: "九時[くじ]", blank: true },
          { text: "に 私[わたし]は 学校[がっこう]へ" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は; 学校へ",
      },
      {
        segments: [
          { text: "九時[くじ]", blank: true },
          { text: "に、私[わたし]は 学校[がっこう]へ" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は; 学校へ",
      },
      // へ variants — 私、
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "九時[くじ]", blank: true },
          { text: "に 学校[がっこう]へ" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first; 学校へ",
      },
    ],
  },
  {
    english: "I read books every night.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "本[ほん]を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "毎晩[まいばん]", blank: true },
          { text: "私[わたし]は 本[ほん]を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "毎晩[まいばん]", blank: true },
          { text: "、私[わたし]は 本[ほん]を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "本[ほん]を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
    ],
  },
  {
    english: "I don't watch movies much.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "あまり", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "あまり", blank: true },
          { text: "私[わたし]は 映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "あまり", blank: true },
          { text: "、私[わたし]は 映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "あまり", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
    ],
  },
  {
    english: "I sometimes talk with friends.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "時々[ときどき]", blank: true },
          { text: "友[とも]だちと" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then time",
      },
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "私[わたし]は 友[とも]だちと" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first, then 私は",
      },
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "、私[わたし]は 友[とも]だちと" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time first with comma, then 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "時々[ときどき]", blank: true },
          { text: "友[とも]だちと" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then time",
      },
    ],
  },
  {
    english: "I wake up at 8:00 every day.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "毎日[まいにち]", blank: true },
          { text: "八時[はちじ]", blank: true },
          { text: "に" },
          {
            text: "起[お]きる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は first, then both time expressions",
      },
      {
        segments: [
          { text: "毎日[まいにち]", blank: true },
          { text: "私[わたし]は" },
          { text: "八時[はちじ]", blank: true },
          { text: "に" },
          {
            text: "起[お]きる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "毎日 first, then 私は, then 八時に",
      },
      {
        segments: [
          { text: "毎日[まいにち]", blank: true },
          { text: "、私[わたし]は" },
          { text: "八時[はちじ]", blank: true },
          { text: "に" },
          {
            text: "起[お]きる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "毎日 with comma, then 私は, then 八時に",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "毎日[まいにち]", blank: true },
          { text: "八時[はちじ]", blank: true },
          { text: "に" },
          {
            text: "起[お]きる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、first, then both time expressions",
      },
    ],
  },
]

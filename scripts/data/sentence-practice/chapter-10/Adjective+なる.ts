import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "The room became quiet after the party.",
    answers: [
      {
        segments: [
          { text: "パーティーの 後[あと]で、部屋[へや]が" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard word order with が marking the room as the subject.",
      },
      {
        segments: [
          { text: "パーティーの 後[あと]で、部屋[へや]は" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using は to present the room as the topic.",
      },
      {
        segments: [
          { text: "部屋[へや]が、パーティーの 後[あと]で" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order: the room is mentioned first.",
      },
      {
        segments: [
          { text: "部屋[へや]は、パーティーの 後[あと]で" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order with は as the topic marker.",
      },
      {
        segments: [
          { text: "パーティーの 後[あと]、部屋[へや]が" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Uses パーティーの後 without で, a very natural time expression.",
      },
      {
        segments: [
          { text: "パーティーの 後[あと]、部屋[へや]は" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "パーティーの後 without で, with は as topic.",
      },
      {
        segments: [
          { text: "部屋[へや]が、パーティーの 後[あと]、" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Room-first word order, with パーティーの後 as the time expression.",
      },
      {
        segments: [
          { text: "部屋[へや]は、パーティーの 後[あと]、" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Room-first word order using は and no で after 後.",
      },
      {
        segments: [
          { text: "パーティーの 後[あと]に、部屋[へや]が" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 後に to mark the time after the party.",
      },
      {
        segments: [
          { text: "パーティーの 後[あと]に、部屋[へや]は" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 後に with は as the topic marker.",
      },
      {
        segments: [
          { text: "パーティーが 終[お]わった 後[あと]で、部屋[へや]が" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Expresses 'after the party ended' explicitly.",
      },
      {
        segments: [
          { text: "パーティーが 終[お]わった 後[あと]で、部屋[へや]は" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Explicitly says the party ended, with は marking the room as topic.",
      },
      {
        segments: [
          { text: "パーティーが 終[お]わった 後[あと]、部屋[へや]が" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 'after the party ended' without で.",
      },
      {
        segments: [
          { text: "パーティーが 終[お]わった 後[あと]、部屋[へや]は" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 'after the party ended' without で, with は.",
      },
      {
        segments: [
          { text: "パーティーが 終[お]わった 後[あと]に、部屋[へや]が" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 後に after an explicit clause パーティーが終わった.",
      },
      {
        segments: [
          { text: "パーティーが 終[お]わった 後[あと]に、部屋[へや]は" },
          { text: "静[しず]かに", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 後に after an explicit clause, with は as topic.",
      },
    ],
  },
  {
    english: "The coffee will get cold in ten minutes.",
    answers: [
      {
        segments: [
          { text: "コーヒーは 十分後[じゅっぷんご]に " },
          { text: "冷[つめ]たく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic sentence with は and 十分後に for “in ten minutes.”",
      },
      {
        segments: [
          { text: "コーヒーが 十分後[じゅっぷんご]に " },
          { text: "冷[つめ]たく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が to mark the coffee as the subject.",
      },
      {
        segments: [
          { text: "十分後[じゅっぷんご]に コーヒーは " },
          { text: "冷[つめ]たく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time phrase placed at the beginning; は marks coffee.",
      },
      {
        segments: [
          { text: "十分後[じゅっぷんご]に コーヒーが " },
          { text: "冷[つめ]たく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time phrase first, with が marking the subject.",
      },
      {
        segments: [
          { text: "コーヒーは 十分[じゅっぷん]ぐらいで " },
          { text: "冷[つめ]たく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using ぐらいで to mean “in about ten minutes.”",
      },
      {
        segments: [
          { text: "コーヒーは 十分[じゅっぷん]で " },
          { text: "冷[つめ]たく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 十分で to express “in ten minutes.”",
      },
      {
        segments: [
          { text: "コーヒーが 十分[じゅっぷん]で " },
          { text: "冷[つめ]たく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 十分で with が as the subject marker.",
      },
      {
        segments: [
          { text: "コーヒーは 十分後[じゅっぷんご]には " },
          { text: "冷[つめ]たく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Using には after the time phrase for slight emphasis: “by/in ten minutes.”",
      },
      {
        segments: [
          { text: "十分後[じゅっぷんご]には コーヒーが " },
          { text: "冷[つめ]たく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Emphasized time phrase first with には and が for the subject.",
      },
    ],
  },
  {
    english: "My younger sister became a high school student this year.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 今年[ことし] " },
          { text: "高校生[こうこうせい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Basic sentence with は and 今年 before the predicate",
      },
      {
        segments: [
          { text: "今年[ことし]、私[わたし]の 妹[いもうと]は " },
          { text: "高校生[こうこうせい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time expression moved to the beginning",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]が 今年[ことし] " },
          { text: "高校生[こうこうせい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が to mark the younger sister as the subject",
      },
      {
        segments: [
          { text: "今年[ことし]、私[わたし]の 妹[いもうと]が " },
          { text: "高校生[こうこうせい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time first, with が as the subject marker",
      },
      {
        segments: [
          { text: "妹[いもうと]は 今年[ことし] " },
          { text: "高校生[こうこうせい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Omitting 私の because 妹 commonly implies one's own younger sister",
      },
      {
        segments: [
          { text: "今年[ことし]、妹[いもうと]は " },
          { text: "高校生[こうこうせい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Omitting 私の, with the time expression first",
      },
      {
        segments: [
          { text: "妹[いもうと]が 今年[ことし] " },
          { text: "高校生[こうこうせい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Omitting 私の and using が for the subject",
      },
      {
        segments: [
          { text: "今年[ことし]、妹[いもうと]が " },
          { text: "高校生[こうこうせい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Omitting 私の, time first, with が as subject marker",
      },
    ],
  },
  {
    english: "Because I studied Japanese every day, my Japanese got better.",
    answers: [
      {
        segments: [
          {
            text: "毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、私[わたし]の 日本語[にほんご]が ",
          },
          { text: "上手[じょうず]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard translation using な-adjective 上手に + なる with が",
      },
      {
        segments: [
          {
            text: "毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、私[わたし]の 日本語[にほんご]は ",
          },
          { text: "上手[じょうず]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using は to mark my Japanese as the topic",
      },
      {
        segments: [
          {
            text: "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]したから、私[わたし]の 日本語[にほんご]が ",
          },
          { text: "上手[じょうず]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Changed word order in the reason clause: 日本語を毎日",
      },
      {
        segments: [
          {
            text: "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]したから、私[わたし]の 日本語[にほんご]は ",
          },
          { text: "上手[じょうず]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Changed word order in the reason clause and using は",
      },
      {
        segments: [
          {
            text: "私[わたし]は 毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、日本語[にほんご]が ",
          },
          { text: "上手[じょうず]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 私は as the subject/topic: I got better at Japanese",
      },
      {
        segments: [
          {
            text: "私[わたし]は 日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]したから、日本語[にほんご]が ",
          },
          { text: "上手[じょうず]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 私は and changing adverb/object order",
      },
      {
        segments: [
          {
            text: "毎日[まいにち] 日本語[にほんご]の 勉強[べんきょう]をしたから、私[わたし]の 日本語[にほんご]が ",
          },
          { text: "上手[じょうず]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 日本語の勉強をする instead of 日本語を勉強する",
      },
      {
        segments: [
          {
            text: "毎日[まいにち] 日本語[にほんご]の 勉強[べんきょう]をしたから、私[わたし]の 日本語[にほんご]は ",
          },
          { text: "上手[じょうず]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 日本語の勉強をする with は in the main clause",
      },
      {
        segments: [
          {
            text: "私[わたし]は 毎日[まいにち] 日本語[にほんご]の 勉強[べんきょう]をしたから、日本語[にほんご]が ",
          },
          { text: "上手[じょうず]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Combining 私は topic with 日本語の勉強をする",
      },
      {
        segments: [
          {
            text: "毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、私[わたし]の 日本語[にほんご]が ",
          },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using kanji 良く for the irregular いい → よくなる form",
      },
      {
        segments: [
          {
            text: "毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、私[わたし]の 日本語[にほんご]は ",
          },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 良くなる with は as the topic marker",
      },
      {
        segments: [
          {
            text: "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]したから、私[わたし]の 日本語[にほんご]が ",
          },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 良くなる with changed word order in the reason clause",
      },
      {
        segments: [
          {
            text: "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]したから、私[わたし]の 日本語[にほんご]は ",
          },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 良くなる with changed reason word order and は",
      },
      {
        segments: [
          {
            text: "私[わたし]は 毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、日本語[にほんご]が ",
          },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 私は as topic with 良くなる",
      },
      {
        segments: [
          {
            text: "毎日[まいにち] 日本語[にほんご]の 勉強[べんきょう]をしたから、私[わたし]の 日本語[にほんご]が ",
          },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 日本語の勉強をする with 良くなる",
      },
    ],
  },
  {
    english: "Will it get warm next week?",
    answers: [
      {
        segments: [
          { text: "来週[らいしゅう]は " },
          { text: "暖[あたた]かく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Standard translation with 来週は as the topic.",
      },
      {
        segments: [
          { text: "来週[らいしゅう]、" },
          { text: "暖[あたた]かく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "Drops the topic particle after 来週; natural conversational wording.",
      },
      {
        segments: [
          { text: "来週[らいしゅう]から " },
          { text: "暖[あたた]かく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses から to mean “starting next week.”",
      },
      {
        segments: [
          { text: "来週[らいしゅう]には " },
          { text: "暖[あたた]かく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses には to mean “by/as of next week.”",
      },
      {
        segments: [
          { text: "来週[らいしゅう]は 気温[きおん]が " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "Uses 気温が高くなる, literally “will the temperature get high/rise,” a natural weather-related alternative.",
      },
      {
        segments: [
          { text: "来週[らいしゅう]、気温[きおん]が " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "気温が高くなる version with the topic particle after 来週 omitted.",
      },
      {
        segments: [
          { text: "来週[らいしゅう]から 気温[きおん]が " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "Uses から with 気温が高くなる: “Will the temperature rise starting next week?”",
      },
      {
        segments: [
          { text: "来週[らいしゅう]には 気温[きおん]が " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "Uses には with 気温が高くなる: “Will the temperature be higher by next week?”",
      },
    ],
  },
  {
    english: "This computer got slow this month.",
    answers: [
      {
        segments: [
          { text: "この コンピューターは 今月[こんげつ] " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Basic translation using は and 今月 before the adjective",
      },
      {
        segments: [
          { text: "この コンピューターが 今月[こんげつ] " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が instead of は to mark the computer as the subject",
      },
      {
        segments: [
          { text: "今月[こんげつ]、この コンピューターは " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "今月[こんげつ]、この コンピューターが " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time phrase first, with が for the subject",
      },
      {
        segments: [
          { text: "この パソコンは 今月[こんげつ] " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using パソコン as a natural synonym for computer",
      },
      {
        segments: [
          { text: "この パソコンが 今月[こんげつ] " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using パソコン with が",
      },
      {
        segments: [
          { text: "今月[こんげつ]、この パソコンは " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "パソコン version with the time phrase first",
      },
      {
        segments: [
          { text: "今月[こんげつ]、この パソコンが " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "パソコン version with time phrase first and が",
      },
      {
        segments: [
          { text: "今月[こんげつ]は この コンピューターが " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 今月は to topicalize 'this month'",
      },
      {
        segments: [
          { text: "今月[こんげつ]は この パソコンが " },
          { text: "遅[おそ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Topicalized time phrase with パソコン",
      },
    ],
  },
  {
    english: "Did this town become lively this year?",
    answers: [
      {
        segments: [
          { text: "この 町[まち]は 今年[ことし] " },
          { text: "にぎやかに", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Past-tense question, matching “Did ... become...?”",
      },
      {
        segments: [
          { text: "この 町[まち]が 今年[ことし] " },
          { text: "にぎやかに", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using が to mark the town as the subject/focus.",
      },
      {
        segments: [
          { text: "今年[ことし]、この 町[まち]は " },
          { text: "にぎやかに", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Time phrase placed at the beginning.",
      },
      {
        segments: [
          { text: "今年[ことし]、この 町[まち]が " },
          { text: "にぎやかに", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Time phrase first, with が for subject focus.",
      },
      {
        segments: [
          { text: "この 町[まち]は 今年[ことし] " },
          { text: "にぎやかな 町[まち]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using the noun + になる pattern: “became a lively town.”",
      },
      {
        segments: [
          { text: "この 町[まち]が 今年[ことし] " },
          { text: "にぎやかな 町[まち]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Noun + になる pattern with が as the subject marker.",
      },
      {
        segments: [
          { text: "今年[ことし]、この 町[まち]は " },
          { text: "にぎやかな 町[まち]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Noun + になる pattern with the time phrase at the beginning.",
      },
      {
        segments: [
          { text: "今年[ことし]、この 町[まち]が " },
          { text: "にぎやかな 町[まち]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Noun + になる pattern, time phrase first, with が.",
      },
    ],
  },
  {
    english: "After I opened the window, the room became cool.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 窓[まど]を 開[あ]けて、部屋[へや]が " },
          { text: "涼[すず]しく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Basic translation using て for 'after opening' and が for the room becoming cool",
      },
      {
        segments: [
          { text: "私[わたし]は 窓[まど]を 開[あ]けて、部屋[へや]は " },
          { text: "涼[すず]しく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using は to mark the room as the topic",
      },
      {
        segments: [
          { text: "私[わたし]が 窓[まど]を 開[あ]けて、部屋[へや]が " },
          { text: "涼[すず]しく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が to emphasize that I was the one who opened the window",
      },
      {
        segments: [
          { text: "私[わたし]が 窓[まど]を 開[あ]けて、部屋[へや]は " },
          { text: "涼[すず]しく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Emphasizes the doer with が and topicalizes the room with は",
      },
      {
        segments: [
          { text: "部屋[へや]は、私[わたし]が 窓[まど]を 開[あ]けて " },
          { text: "涼[すず]しく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order, placing the room first as topic",
      },
      {
        segments: [
          {
            text: "私[わたし]は 窓[まど]を 開[あ]けた 後[あと]で、部屋[へや]が ",
          },
          { text: "涼[すず]しく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 後で to explicitly express 'after'",
      },
      {
        segments: [
          {
            text: "私[わたし]は 窓[まど]を 開[あ]けた 後[あと]で、部屋[へや]は ",
          },
          { text: "涼[すず]しく", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 後で and topicalizes the room with は",
      },
    ],
  },
  {
    english: "I took medicine, so my stomach got better.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 飲[の]んだから、おなかが " },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Uses kanji 良くなった for “got better,” with the いい→よくなる exception.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 飲[の]んで、おなかが " },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Uses the て-form to connect “took medicine” and the resulting improvement.",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで、私[わたし]のおなかが " },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Marks the stomach explicitly as “my stomach” instead of using 私は as the topic.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 飲[の]んだ。だから、おなかが " },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Splits the cause and result into two sentences with だから.",
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 飲[の]んだから、おなかは " },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses は instead of が to topic-mark the stomach/result.",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んだから、私[わたし]のおなかが " },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Uses 私のおなか to explicitly say “my stomach,” with から for the reason.",
      },
      {
        segments: [
          { text: "私[わたし]のおなかは 薬[くすり]を 飲[の]んで " },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Reversed word order: starts with “my stomach” as the topic, then gives the cause.",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで、おなかは " },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Uses て-form for the cause/result connection and は for the stomach as topic.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 薬[くすり]を 飲[の]んで、おなかの 調子[ちょうし]が ",
          },
          { text: "良[よ]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Natural expression おなかの調子が良くなった, “my stomach condition got better.”",
      },
    ],
  },
  {
    english: "After I memorized the vocabulary, the exam became easy.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 単語[たんご]を 覚[おぼ]えた 後[あと]で、試験[しけん]が",
          },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Basic translation using 簡単になる with 試験が",
      },
      {
        segments: [
          { text: "私[わたし]は 単語[たんご]を 覚[おぼ]えて、試験[しけん]が" },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Using て to mean after/as a result: after memorizing vocabulary",
      },
      {
        segments: [
          {
            text: "私[わたし]は 単語[たんご]を 覚[おぼ]えた 後[あと]で、試験[しけん]は",
          },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using は to mark the exam as the topic",
      },
      {
        segments: [
          {
            text: "私[わたし]は 単語[たんご]を 覚[おぼ]えた 後[あと]で、テストが",
          },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using テスト instead of 試験",
      },
      {
        segments: [
          {
            text: "私[わたし]は 単語[たんご]を 覚[おぼ]えた 後[あと]で、試験[しけん]が",
          },
          { text: "やさしく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using い-adjective やさしい in く form",
      },
      {
        segments: [
          { text: "私[わたし]は 単語[たんご]を 覚[おぼ]えて、試験[しけん]が" },
          { text: "やさしく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using て and やさしくなる",
      },
      {
        segments: [
          {
            text: "私[わたし]は 単語[たんご]を 覚[おぼ]えた 後[あと]で、テストが",
          },
          { text: "やさしく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using テスト and やさしくなる",
      },
      {
        segments: [
          {
            text: "私[わたし]が 単語[たんご]を 覚[おぼ]えた 後[あと]で、試験[しけん]が",
          },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Using 私が in the subordinate clause instead of sentence-topic 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 単語[たんご]を 覚[おぼ]えて、テストが" },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using テスト with て construction",
      },
      {
        segments: [
          {
            text: "私[わたし]は 単語[たんご]を 覚[おぼ]えた 後[あと]で、テストは",
          },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using テスト and topical は",
      },
      {
        segments: [
          {
            text: "私[わたし]は 単語[たんご]を 覚[おぼ]えた 後[あと]で、試験[しけん]は",
          },
          { text: "やさしく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using やさしくなる with 試験は",
      },
      {
        segments: [
          { text: "私[わたし]は 単語[たんご]を 覚[おぼ]えて、テストが" },
          { text: "やさしく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using テスト with て and やさしくなる",
      },
      {
        segments: [
          {
            text: "私[わたし]は 単語[たんご]を 覚[おぼ]えた 後[あと]で、テストは",
          },
          { text: "やさしく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using テストは with やさしくなる",
      },
      {
        segments: [
          {
            text: "私[わたし]が 単語[たんご]を 覚[おぼ]えた 後[あと]で、試験[しけん]が",
          },
          { text: "やさしく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 私が and い-adjective やさしくなる",
      },
      {
        segments: [
          {
            text: "私[わたし]が 単語[たんご]を 覚[おぼ]えた 後[あと]で、テストが",
          },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 私が and テスト",
      },
      {
        segments: [
          {
            text: "私[わたし]が 単語[たんご]を 覚[おぼ]えた 後[あと]で、テストが",
          },
          { text: "やさしく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 私が, テスト, and やさしくなる",
      },
      {
        segments: [
          {
            text: "私[わたし]が 単語[たんご]を 覚[おぼ]えた 後[あと]で、試験[しけん]は",
          },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 私が and topical 試験は",
      },
      {
        segments: [
          {
            text: "私[わたし]が 単語[たんご]を 覚[おぼ]えた 後[あと]で、テストは",
          },
          { text: "簡単[かんたん]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 私が with topical テストは",
      },
    ],
  },
  {
    english: "I drank wine, and my face turned red.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ワインを 飲[の]んで、顔[かお]が " },
          { text: "赤[あか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard phrasing with て to connect the actions",
      },
      {
        segments: [
          { text: "私[わたし]は ワインを 飲[の]んだから、顔[かお]が " },
          { text: "赤[あか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using から to express the cause: because I drank wine",
      },
      {
        segments: [
          { text: "ワインを 飲[の]んで、私[わたし]の 顔[かお]が " },
          { text: "赤[あか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Using 私の顔 instead of 顔 after marking the subject later in the sentence",
      },
      {
        segments: [
          { text: "ワインを 飲[の]んだから、私[わたし]の 顔[かお]が " },
          { text: "赤[あか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Cause expressed with から and explicit 私の顔",
      },
      {
        segments: [
          {
            text: "私[わたし]は ワインを 飲[の]んで、私[わたし]の 顔[かお]が ",
          },
          { text: "赤[あか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicitly stating 私の顔 while also keeping 私は as the topic",
      },
      {
        segments: [
          {
            text: "私[わたし]は ワインを 飲[の]んだから、私[わたし]の 顔[かお]が ",
          },
          { text: "赤[あか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 私の顔 with causal から",
      },
    ],
  },
  {
    english: "That small bookstore became famous this year.",
    answers: [
      {
        segments: [
          { text: "その 小[ちい]さい 本屋[ほんや]は 今年[ことし] " },
          { text: "有名[ゆうめい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard translation using その and topic は",
      },
      {
        segments: [
          { text: "あの 小[ちい]さい 本屋[ほんや]は 今年[ことし] " },
          { text: "有名[ゆうめい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Using あの for 'that' when the bookstore is away from both speaker and listener",
      },
      {
        segments: [
          { text: "その 小[ちい]さい 本屋[ほんや]が 今年[ことし] " },
          { text: "有名[ゆうめい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が to mark the bookstore as the subject/focus",
      },
      {
        segments: [
          { text: "あの 小[ちい]さい 本屋[ほんや]が 今年[ことし] " },
          { text: "有名[ゆうめい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using あの and が for a focused subject",
      },
      {
        segments: [
          { text: "今年[ことし]、その 小[ちい]さい 本屋[ほんや]は " },
          { text: "有名[ゆうめい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time expression moved to the beginning",
      },
      {
        segments: [
          { text: "今年[ことし]、あの 小[ちい]さい 本屋[ほんや]は " },
          { text: "有名[ゆうめい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time expression first, using あの",
      },
      {
        segments: [
          { text: "今年[ことし]、その 小[ちい]さい 本屋[ほんや]が " },
          { text: "有名[ゆうめい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time expression first with subject particle が",
      },
      {
        segments: [
          { text: "今年[ことし]、あの 小[ちい]さい 本屋[ほんや]が " },
          { text: "有名[ゆうめい]に", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time expression first, using あの and が",
      },
    ],
  },
  {
    english: "I cut my hair this morning, so my hair got short.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 今朝[けさ]、髪[かみ]を 切[き]ったから、髪[かみ]が ",
          },
          { text: "短[みじか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Basic translation with から and 髪が as the subject of the change",
      },
      {
        segments: [
          {
            text: "今朝[けさ]、髪[かみ]を 切[き]ったから、私[わたし]の 髪[かみ]が ",
          },
          { text: "短[みじか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Starts with the time phrase and uses 私の髪 explicitly",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今朝[けさ]、髪[かみ]を 切[き]って、髪[かみ]が ",
          },
          { text: "短[みじか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses the て-form to connect the cause/result instead of から",
      },
      {
        segments: [
          {
            text: "今朝[けさ]、髪[かみ]を 切[き]って、私[わたし]の 髪[かみ]が ",
          },
          { text: "短[みじか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "て-form connection with 私の髪 as the changed subject",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今朝[けさ]、髪[かみ]を 切[き]ったから、私[わたし]の 髪[かみ]は ",
          },
          { text: "短[みじか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 私の髪は to mark the hair as the topic",
      },
      {
        segments: [
          { text: "今朝[けさ]、髪[かみ]を 切[き]ったから、髪[かみ]は " },
          { text: "短[みじか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Drops initial 私は and uses 髪は as topic",
      },
    ],
  },
  {
    english: "The traffic light turned green.",
    answers: [
      {
        segments: [
          { text: "信号[しんごう]が" },
          { text: "青[あお]く", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard translation; Japanese uses 青い/青 for a green traffic light",
      },
      {
        segments: [
          { text: "信号[しんごう]が" },
          { text: "青[あお]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Natural traffic-light expression using 青 as a noun: 青になる",
      },
      {
        segments: [
          { text: "信号[しんごう]は" },
          { text: "青[あお]く", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using は to mark the traffic light as the topic",
      },
      {
        segments: [
          { text: "信号[しんごう]は" },
          { text: "青[あお]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Topic-marked version with the common noun expression 青になる",
      },
      {
        segments: [
          { text: "信号[しんごう]が" },
          { text: "青信号[あおしんごう]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 青信号, the fixed word for a green traffic light",
      },
      {
        segments: [
          { text: "信号[しんごう]は" },
          { text: "青信号[あおしんごう]に", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Topic-marked version using 青信号",
      },
    ],
  },
  {
    english: "Sushi got expensive in Japan this year.",
    answers: [
      {
        segments: [
          { text: "今年[ことし]、日本[にほん]で 寿司[すし]が " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Basic translation with が marking sushi as the subject of the change",
      },
      {
        segments: [
          { text: "今年[ことし]、日本[にほん]では 寿司[すし]が " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using では to frame Japan as the context/topic",
      },
      {
        segments: [
          { text: "寿司[すし]は 今年[ことし] 日本[にほん]で " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Topicalizing sushi with は",
      },
      {
        segments: [
          { text: "日本[にほん]で 寿司[すし]は 今年[ことし] " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Alternative word order with Japan first and sushi topicalized",
      },
      {
        segments: [
          { text: "日本[にほん]では 今年[ことし]、寿司[すし]が " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Japan as broad context with では and time before subject",
      },
      {
        segments: [
          { text: "今年[ことし]、日本[にほん]の 寿司[すし]が " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 日本の寿司 to mean sushi in Japan",
      },
      {
        segments: [
          { text: "日本[にほん]の 寿司[すし]は 今年[ことし] " },
          { text: "高[たか]く", blank: true },
          { text: " " },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "日本の寿司 with topic marker は",
      },
    ],
  },
  {
    english: "Japan gets really hot in summer.",
    answers: [
      {
        segments: [
          { text: "日本[にほん]は 夏[なつ]に すごく" },
          {
            text: "暑[あつ]くなる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "日本[にほん]は 夏[なつ]は すごく" },
          {
            text: "暑[あつ]くなる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "夏は (topic) instead of 夏に (time)",
      },
      {
        segments: [
          { text: "日本[にほん]は 夏[なつ]に とても" },
          {
            text: "暑[あつ]くなる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
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
          { text: "日本[にほん]は 夏[なつ]に 本当[ほんとう]に" },
          {
            text: "暑[あつ]くなる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
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
          { text: "夏[なつ]に 日本[にほん]は 本当[ほんとう]に" },
          {
            text: "暑[あつ]くなる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "夏に fronted + 本当に",
      },
      {
        segments: [
          { text: "夏[なつ]に 日本[にほん]は すごく" },
          {
            text: "暑[あつ]くなる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "夏に fronted",
      },
    ],
  },
  {
    english: "I practiced every day, and my singing got better.",
    answers: [
      {
        segments: [
          { text: "毎日[まいにち] 練習[れんしゅう]して、歌[うた]うのが" },
          {
            text: "よくなる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          'よい → よく (irregular) + なる, past tense: よくなった. 歌うのが uses nominalization to express "singing".',
      },
      {
        segments: [
          { text: "毎日[まいにち] 練習[れんしゅう]して、歌[うた]が" },
          { text: "よく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "歌が よくなった — using 歌 directly as subject instead of nominalization",
      },
      {
        segments: [
          { text: "毎日[まいにち] 練習[れんしゅう]して、歌[うた]うのは" },
          { text: "よく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "歌うのは よくなった — using は instead of が with nominalization",
      },
      {
        segments: [
          {
            text: "私[わたし]は 毎日[まいにち] 練習[れんしゅう]して、歌[うた]うのが",
          },
          { text: "よく", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "With explicit 私は subject",
      },
      {
        segments: [
          { text: "毎日[まいにち] 練習[れんしゅう]して、歌[うた]が" },
          { text: "上手[うま]く", blank: true },
          {
            text: "なる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "上手くなる (got skilled at) — 上手い (i-adj reading) instead of よい",
      },
    ],
  },
  {
    english: "It's already November, so the mornings are getting cold.",
    answers: [
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]だから、朝[あさ]が" },
          {
            text: "寒[さむ]くなる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "寒くなる means to get cold.",
      },
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]だから、朝[あさ]は" },
          {
            text: "寒[さむ]くなる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "は instead of が on 朝",
      },
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]だから、朝[あさ]が" },
          { text: "寒[さむ]くなってきた", blank: true },
        ],
        notes: "くなってきた for gradual change",
      },
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]だから、朝[あさ]は" },
          { text: "寒[さむ]くなってきた", blank: true },
        ],
        notes: "は + くなってきた",
      },
    ],
  },
  {
    english: "Living alone, I got less lonely over time.",
    answers: [
      {
        segments: [
          { text: "一人[ひとり]で 住[す]んでいて、" },
          { text: "少[すこ]し 寂[さび]しくなくなる", blank: true },
        ],
        notes: "寂しくなくなった means became less lonely.",
      },
      {
        segments: [
          { text: "一人[ひとり]で 住[す]んでいて、" },
          { text: "寂[さび]しくなくなる", blank: true },
        ],
        notes: "Without 少し",
      },
      {
        segments: [
          { text: "一人[ひとり]で 住[す]んでいて、少[すこ]し" },
          { text: "寂[さび]しくなくなってきた", blank: true },
        ],
        notes: "With きた for gradual change",
      },
      {
        segments: [
          { text: "一人[ひとり]で 住[す]んでいて、" },
          { text: "寂[さび]しくなくなってきた", blank: true },
        ],
        notes: "Without 少し, with きた",
      },
    ],
  },
  {
    english: "In autumn, the trees turn red and get beautiful.",
    answers: [
      {
        segments: [
          { text: "秋[あき]に、 木[き]が" },
          { text: " 赤[あか]くなってきれいになる", blank: true },
        ],
      },
      {
        segments: [
          { text: "秋[あき]は、 木[き]が" },
          { text: " 赤[あか]くなってきれいになる", blank: true },
        ],
        notes: "秋は topicalized",
      },
    ],
  },
]

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
      {
        segments: [
          { text: "パーティーの 後[あと]で、部屋[へや]の 中[なか]が" },
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
        notes: "Uses 部屋の中 for inside the room.",
      },
      {
        segments: [
          { text: "パーティーの 後[あと]、部屋[へや]の 中[なか]が" },
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
        notes: "Uses 部屋の中 with パーティーの後.",
      },
      {
        segments: [
          { text: "パーティーが 終[お]わってから、部屋[へや]が" },
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
        notes: "Uses 終わってから for after the party ended.",
      },
      {
        segments: [
          { text: "パーティーが 終[お]わってから、部屋[へや]の 中[なか]が" },
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
        notes: "Uses 終わってから with 部屋の中.",
      },
    ],
  },
  {
    english: "The water will get cold soon.",
    answers: [
      {
        segments: [
          { text: "水[みず]は もうすぐ" },
          { text: "冷[つめ]たく", blank: true },
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
        notes: "Uses もうすぐ for soon.",
      },
      {
        segments: [
          { text: "もうすぐ 水[みず]は" },
          { text: "冷[つめ]たく", blank: true },
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
        notes: "Time phrase first.",
      },
      {
        segments: [
          { text: "水[みず]は すぐ" },
          { text: "冷[つめ]たく", blank: true },
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
        notes: "Uses すぐ for soon/right away.",
      },
      {
        segments: [
          { text: "水[みず]は もう 少[すこ]しで" },
          { text: "冷[つめ]たく", blank: true },
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
        notes: "Uses もう少しで for in a little while.",
      }
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
    ],
  },
  {
    english: "Because I studied Japanese every day, I got better at Japanese.",
    answers: [
      {
        segments: [
          { text: "毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、日本語[にほんご]が" },
          { text: "うまく", blank: true },
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
        notes: "Uses うまくなる for getting better at Japanese.",
      },
      {
        segments: [
          { text: "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]したから、日本語[にほんご]が" },
          { text: "うまく", blank: true },
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
        notes: "Reason clause with 日本語を毎日.",
      },
      {
        segments: [
          { text: "毎日[まいにち] 日本語[にほんご]の 勉強[べんきょう]をしたから、日本語[にほんご]が" },
          { text: "うまく", blank: true },
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
        notes: "Uses 日本語の勉強をする.",
      },
      {
        segments: [
          { text: "毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したので、日本語[にほんご]が" },
          { text: "うまく", blank: true },
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
        notes: "Uses ので for because.",
      },
      {
        segments: [
          { text: "私[わたし]は 毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、日本語[にほんご]が" },
          { text: "うまく", blank: true },
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
        notes: "Explicitly marks the speaker in the reason clause.",
      },
      {
        segments: [
          { text: "毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、私[わたし]の 日本語[にほんご]が" },
          { text: "うまく", blank: true },
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
        notes: "Uses 私の日本語.",
      },
      {
        segments: [
          { text: "毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、日本語[にほんご]が" },
          { text: "上手[じょうず]に", blank: true },
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
        notes: "Uses 上手になる.",
      },
      {
        segments: [
          { text: "毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]したから、日本語[にほんご]が" },
          { text: "良[よ]く", blank: true },
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
        notes: "Uses 良くなる.",
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
    ],
  },
  {
    english: "This computer got slow this month.",
    hint: "computer = パソコン",
    answers: [
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
        notes: "Uses パソコン for computer.",
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
        notes: "Time phrase placed at the beginning.",
      },
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
        notes: "Uses コンピューター for computer.",
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
        notes: "コンピューター version with the time phrase first.",
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
          "Uses て to connect opening the window with the room becoming cool.",
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
        notes: "Uses 後で to explicitly express after.",
      },
    ],
  },
  {
    english: "I took medicine and my stomach got better.",
    answers: [
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
        notes: "Natural expression おなかの調子が良くなる for my stomach getting better.",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで、おなかの 調子[ちょうし]が " },
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
        notes: "Omits the explicit 私は topic.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 薬[くすり]を 飲[の]んだから、おなかの 調子[ちょうし]が ",
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
        notes: "Uses から to make the cause explicit.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 薬[くすり]を 飲[の]んだので、おなかの 調子[ちょうし]が ",
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
        notes: "Uses ので to make the cause explicit.",
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
        notes: "Simpler wording with おなかが良くなる.",
      },
    ],
  },
  {
    english: "After I memorized the vocabulary, the exam became easier (for me).",
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
        notes: "Uses 簡単になる for becoming easier.",
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
        notes: "Uses て to connect memorizing vocabulary with the result.",
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
        notes: "Uses テスト instead of 試験.",
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
        notes: "Uses やさしくなる for becoming easier.",
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
          { text: "私[わたし]は ワインを 飲[の]んだので、顔[かお]が " },
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
        notes: "Uses ので to make the cause explicit.",
      }
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
        notes: "Standard translation using その and topic は.",
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
        notes: "Uses あの when the bookstore is away from both speaker and listener.",
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
        notes: "Time expression moved to the beginning.",
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
        notes: "Time expression first, using あの.",
      },
      {
        segments: [
          { text: "その 小[ちい]さな 本屋[ほんや]は 今年[ことし] " },
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
        notes: "Uses 小さな instead of 小さい.",
      },
      {
        segments: [
          { text: "あの 小[ちい]さな 本屋[ほんや]は 今年[ことし] " },
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
        notes: "Uses あの and 小さな.",
      },
      {
        segments: [
          { text: "今年[ことし]、その 小[ちい]さな 本屋[ほんや]は " },
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
        notes: "Time expression first with 小さな.",
      },
      {
        segments: [
          { text: "今年[ことし]、あの 小[ちい]さな 本屋[ほんや]は " },
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
        notes: "Time expression first with あの and 小さな.",
      }
    ],
  },
  {
    english: "The days got shorter in December.",
    answers: [
      {
        segments: [
          { text: "十二月[じゅうにがつ]に 日[ひ]が " },
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
        notes: "Uses 日が短くなる for the days getting shorter.",
      },
      {
        segments: [
          { text: "十二月[じゅうにがつ]には 日[ひ]が " },
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
        notes: "Uses には for by/in December.",
      },
      {
        segments: [
          { text: "日[ひ]が 十二月[じゅうにがつ]に " },
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
        notes: "Places 日が first.",
      },
    ],
  },
  {
    english: "The sky turned red.",
    answers: [
      {
        segments: [
          { text: "空[そら]が" },
          { text: "赤[あか]く", blank: true },
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
        notes: "Uses が for the thing undergoing the change.",
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
        notes: "とても instead of すごく.",
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
        notes: "本当に instead of すごく.",
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
        notes: "夏に fronted + 本当に.",
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
        notes: "夏に fronted.",
      },
      {
        segments: [
          { text: "夏[なつ]の 日本[にほん]は すごく" },
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
        notes: "Uses 夏の日本 for Japan in summer.",
      },
      {
        segments: [
          { text: "夏[なつ]の 日本[にほん]は 本当[ほんとう]に" },
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
        notes: "Uses 夏の日本 with 本当に.",
      }
    ],
  },
  {
    english: "I practiced every day, and my singing got better.",
    answers: [
      {
        segments: [
          { text: "毎日[まいにち] 練習[れんしゅう]して、歌[うた]うのが" },
          { text: "上手[じょうず]に", blank: true },
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
        notes: "Uses 歌うのが上手になる for getting better at singing.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 毎日[まいにち] 練習[れんしゅう]して、歌[うた]うのが",
          },
          { text: "上手[じょうず]に", blank: true },
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
        notes: "Explicitly marks the speaker as the one who practiced.",
      },
      {
        segments: [
          { text: "毎日[まいにち] 練習[れんしゅう]したから、歌[うた]うのが" },
          { text: "上手[じょうず]に", blank: true },
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
        notes: "Uses から to make the cause explicit.",
      },
      {
        segments: [
          { text: "毎日[まいにち] 練習[れんしゅう]して、歌[うた]うのが" },
          { text: "うまく", blank: true },
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
        notes: "Uses うまくなる for becoming better/skilled.",
      },
      {
        segments: [
          { text: "毎日[まいにち] 練習[れんしゅう]して、歌[うた]が" },
          { text: "うまく", blank: true },
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
        notes: "Colloquial wording with 歌がうまくなる.",
      },
    ],
  },
  {
    english: "It's already November, so the mornings are getting cold.",
    answers: [
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]だから、朝[あさ]は" },
          { text: "寒[さむ]くなってきました", blank: true },
        ],
        register: "polite",
        notes: "Uses くなってきました for a gradual change that has started.",
      },
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]だから、朝[あさ]は" },
          { text: "寒[さむ]くなってきた", blank: true },
        ],
        register: "casual",
        notes: "Casual version of くなってきました.",
      },
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]だから、朝[あさ]が" },
          { text: "寒[さむ]くなってきました", blank: true },
        ],
        register: "polite",
        notes: "Uses が for the mornings as the thing becoming cold.",
      },
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]だから、朝[あさ]が" },
          { text: "寒[さむ]くなってきた", blank: true },
        ],
        register: "casual",
        notes: "Casual が version.",
      },
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]なので、朝[あさ]は" },
          { text: "寒[さむ]くなってきました", blank: true },
        ],
        register: "polite",
        notes: "Uses なので for because.",
      },
      {
        segments: [
          { text: "もう 十一月[じゅういちがつ]なので、朝[あさ]は" },
          { text: "寒[さむ]くなってきた", blank: true },
        ],
        register: "casual",
        notes: "Casual なので version.",
      }
    ],
  },
  {
    english: "I talked with my friend and started to feel less lonely.",
    answers: [
      {
        segments: [
          { text: "友達[ともだち]と 話[はな]して、あまり" },
          { text: "寂[さび]しくなくなってきました", blank: true },
        ],
        register: "polite",
        notes: "Uses あまり寂しくなくなってきました for started to feel less lonely.",
      },
      {
        segments: [
          { text: "友達[ともだち]と 話[はな]して、あまり" },
          { text: "寂[さび]しくなくなってきた", blank: true },
        ],
        register: "casual",
        notes: "Casual version.",
      },
      {
        segments: [
          { text: "友達[ともだち]と 話[はな]して、" },
          { text: "寂[さび]しくなくなってきました", blank: true },
        ],
        register: "polite",
        notes: "Without あまり.",
      },
      {
        segments: [
          { text: "友達[ともだち]と 話[はな]して、" },
          { text: "寂[さび]しくなくなってきた", blank: true },
        ],
        register: "casual",
        notes: "Casual version without あまり.",
      },
      {
        segments: [
          { text: "友達[ともだち]と 話[はな]したから、あまり" },
          { text: "寂[さび]しくなくなってきました", blank: true },
        ],
        register: "polite",
        notes: "Uses から to make the cause explicit.",
      },
      {
        segments: [
          { text: "友達[ともだち]と 話[はな]したから、あまり" },
          { text: "寂[さび]しくなくなってきた", blank: true },
        ],
        register: "casual",
        notes: "Casual から version.",
      }
    ],
  },
  {
    english: "In autumn, the leaves turn red and become beautiful.",
    answers: [
      {
        segments: [
          { text: "秋[あき]は、木[こ]の葉[は]が" },
          { text: "赤[あか]くなって", blank: true },
          { text: "きれいに", blank: true },
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
        notes: "Uses 木の葉 for leaves on trees.",
      },
      {
        segments: [
          { text: "秋[あき]に、木[こ]の葉[は]が" },
          { text: "赤[あか]くなって", blank: true },
          { text: "きれいに", blank: true },
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
        notes: "Uses 秋に with 木の葉.",
      },
      {
        segments: [
          { text: "秋[あき]は、葉[は]が" },
          { text: "赤[あか]くなって", blank: true },
          { text: "きれいに", blank: true },
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
        notes: "Uses 葉 for leaves.",
      },
      {
        segments: [
          { text: "秋[あき]に、葉[は]が" },
          { text: "赤[あか]くなって", blank: true },
          { text: "きれいに", blank: true },
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
        notes: "Uses 秋に with 葉.",
      }
    ],
  },

]

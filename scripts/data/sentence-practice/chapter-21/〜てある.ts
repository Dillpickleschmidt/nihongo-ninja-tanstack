import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "The window has been left open, so the room is cold.",
    answers: [
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "開[あ]けて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、部屋[へや]が" },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with が emphasizing the resulting state of the window; Uses 窓が開けてある to describe the window’s prepared open state.",
      },
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "開[あ]けて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、部屋[へや]が" },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので instead of から for a slightly softer causal connection.",
      },
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "開[あ]けて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、この 部屋[へや]は" },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using この部屋 and は to present the room as the topic.",
      },
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "開[あ]けて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、この 部屋[へや]は" },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので plus topical この部屋は.",
      },
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "開[あ]けて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、部屋[へや]は" },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 部屋は instead of 部屋が to topicalize the room.",
      },
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "開[あ]けて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、部屋[へや]は" },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので and 部屋は.",
      },
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "開[あ]けて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、部屋[へや]の 中[なか]が" },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 部屋の中 to say “inside the room” explicitly.",
      },
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "開[あ]けて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、部屋[へや]の 中[なか]が" },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので with 部屋の中が.",
      },
    ],
  },
  {
    english: "The hotel’s phone number is written on this paper.",
    answers: [
      {
        segments: [
          { text: "この 紙[かみ]に ホテルの 電話番号[でんわばんごう]が" },
          { text: "書[か]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic order with が marking the phone number as the subject in its resulting state",
      },
      {
        segments: [
          { text: "ホテルの 電話番号[でんわばんごう]が この 紙[かみ]に" },
          { text: "書[か]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order: the phone number comes first",
      },
      {
        segments: [
          { text: "この 紙[かみ]には ホテルの 電話番号[でんわばんごう]が" },
          { text: "書[か]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には to emphasize 'on this paper' as the location where it is written",
      },
      {
        segments: [
          { text: "ホテルの 電話番号[でんわばんごう]は この 紙[かみ]に" },
          { text: "書[か]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to present the hotel’s phone number as the topic",
      },
    ],
  },
  {
    english: "The cake has been put in the refrigerator, so please eat it after dinner.",
    answers: [
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Basic translation with ケーキ as the topic and から for 'so'.",
      },
      {
        segments: [
          { text: "ケーキが 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Using が to emphasize the cake's resulting state.",
      },
      {
        segments: [
          { text: "ケーキを 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Using を, implying someone has prepared/put the cake there.",
      },
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Using ので instead of から for a slightly softer reason.",
      },
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]の 中[なか]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Adding の中に to explicitly say 'inside the refrigerator'.",
      },
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、夕[ゆう]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Using 夕ご飯 instead of 晩ご飯 for dinner.",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に ケーキが" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Reversed word order, placing the location first.",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に ケーキを" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Location first with を, emphasizing the preparation/action.",
      },
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]を 食[た]べてから 食[た]べてください" },
        ],
        notes: "Using 晩ご飯を食べてから for 'after eating dinner'.",
      },
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、夕[ゆう]ご 飯[はん]を 食[た]べてから 食[た]べてください" },
        ],
        notes: "Using 夕ご飯 and てから for 'after eating dinner'.",
      },
      {
        segments: [
          { text: "ケーキが 冷蔵庫[れいぞうこ]の 中[なか]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Using が plus explicit の中に.",
      },
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]に 食[た]べてください" },
        ],
        notes: "Using 後に instead of 後で.",
      },
      {
        segments: [
          { text: "ケーキが 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]に 食[た]べてください" },
        ],
        notes: "Using が and 後に.",
      },
      {
        segments: [
          { text: "ケーキを 冷蔵庫[れいぞうこ]に" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]に 食[た]べてください" },
        ],
        notes: "Using を and 後に.",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]の 中[なか]に ケーキが" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Location-first word order with explicit の中に.",
      },
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Using 置いてある, 'has been placed/left' in the refrigerator.",
      },
      {
        segments: [
          { text: "ケーキが 冷蔵庫[れいぞうこ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Using 置いてある with が to emphasize the resulting state.",
      },
      {
        segments: [
          { text: "ケーキを 冷蔵庫[れいぞうこ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]の 後[あと]で 食[た]べてください" },
        ],
        notes: "Using 置いてある with を, implying someone placed it there.",
      },
    ],
  },
  {
    english: "The concert poster is posted on the classroom door.",
    hint: "poster = ポスター; concert = コンサート; door = ドア",
    answers: [
      {
        segments: [
          { text: "コンサートの ポスターが 教室[きょうしつ]の ドアに " },
          { text: "貼[は]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic order with が, focusing on the poster's resulting state.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の ドアに コンサートの ポスターが " },
          { text: "貼[は]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location placed at the beginning.",
      },
      {
        segments: [
          { text: "コンサートの ポスターは 教室[きょうしつ]の ドアに " },
          { text: "貼[は]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to topicalize the poster.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の ドアには コンサートの ポスターが " },
          { text: "貼[は]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には to topicalize the location.",
      },
    ],
  },
  {
    english: "The room has already been cleaned, so it’s okay to invite guests.",
    answers: [
      {
        segments: [
          { text: "部屋[へや]は もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 招待[しょうたい]しても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic version with は, もう, から, and 招待する",
      },
      {
        segments: [
          { text: "部屋[へや]が もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 招待[しょうたい]しても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to focus on the room's cleaned state",
      },
      {
        segments: [
          { text: "もう 部屋[へや]は " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 招待[しょうたい]しても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moving もう to the beginning",
      },
      {
        segments: [
          { text: "部屋[へや]は もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 呼[よ]んでも" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 呼ぶ for inviting guests over",
      },
      {
        segments: [
          { text: "部屋[へや]は もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 招待[しょうたい]しても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Using 大丈夫 for 'it's okay'",
      },
      {
        segments: [
          { text: "部屋[へや]は もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 呼[よ]んでも 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Using 呼ぶ and 大丈夫",
      },
      {
        segments: [
          { text: "部屋[へや]が もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 呼[よ]んでも 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Using が with 呼ぶ and 大丈夫",
      },
      {
        segments: [
          { text: "もう 部屋[へや]が " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 招待[しょうたい]しても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "もう at the beginning with が and 大丈夫",
      },
      {
        segments: [
          { text: "もう 部屋[へや]は " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 呼[よ]んでも 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "もう at the beginning with 呼ぶ and 大丈夫",
      },
      {
        segments: [
          { text: "部屋[へや]は もう きれいに " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 呼[よ]んでも 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Adds きれいに to emphasize that the room has been nicely cleaned",
      },
      {
        segments: [
          { text: "部屋[へや]が もう きれいに " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 招待[しょうたい]しても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Adds きれいに with が and 大丈夫",
      },
      {
        segments: [
          { text: "部屋[へや]は もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お 客[きゃく]さんを 招待[しょうたい]しても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Using ので instead of から",
      },
      {
        segments: [
          { text: "部屋[へや]が もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お 客[きゃく]さんを 呼[よ]んでも 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Using ので with が and 呼ぶ",
      },
      {
        segments: [
          { text: "部屋[へや]は もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お 客[きゃく]さんを 招待[しょうたい]しても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので with てもよい",
      },
      {
        segments: [
          { text: "部屋[へや]を もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 呼[よ]んでも 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Using を with てある to emphasize the preparatory cleaning action",
      },
      {
        segments: [
          { text: "もう 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 招待[しょうたい]しても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Using を and placing もう at the beginning",
      },
      {
        segments: [
          { text: "部屋[へや]を もう " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お 客[きゃく]さんを 招待[しょうたい]しても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using を with ので and てもよい",
      },
      {
        segments: [
          { text: "部屋[へや]を もう きれいに " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お 客[きゃく]さんを 呼[よ]んでも 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Using を plus きれいに to stress the room has been cleaned well",
      },
    ],
  },
  {
    english: "The train tickets for tomorrow have already been bought, so don’t worry.",
    answers: [
      {
        register: "casual",
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Standard は-marked topic with から and a polite request not to worry",
      },
      {
        register: "casual",
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]が もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Using が to emphasize the tickets’ prepared state",
      },
      {
        register: "casual",
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]を もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Using を to emphasize the preparatory action of buying the tickets",
      },
      {
        register: "casual",
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "Using ので instead of から for a softer reason",
      },
      {
        register: "casual",
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]が もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "が-marked subject with ので",
      },
      {
        register: "casual",
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]を もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "を-marked preparation with ので",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しなくても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 心配しなくてもよい to mean there is no need to worry",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]が もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しなくても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が-marked subject with 心配しなくてもよい",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]を もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しなくても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "を-marked preparation with 'no need to worry'",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しなくても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ので plus 心配しなくてもよい",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]が もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しなくても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が-marked subject with ので and 心配しなくてもよい",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]を もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しなくても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "を-marked preparation with ので and 'no need to worry'",
      },
      {
        register: "casual",
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないで" },
        ],
        notes: "Shorter request form: 'don't worry' without ください",
      },
      {
        register: "casual",
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]が もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないで" },
        ],
        notes: "が-marked subject with shorter request form",
      },
      {
        register: "casual",
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]を もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないで" },
        ],
        notes: "を-marked preparation with shorter request form",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しなくても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Using 大丈夫です for reassurance",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]が もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しなくても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "が-marked subject with 大丈夫です",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]を もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しなくても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "を-marked preparation with 大丈夫です",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しなくても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "ので with 大丈夫です",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]が もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しなくても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "が-marked subject with ので and 大丈夫です",
      },
      {
        segments: [
          { text: "明日[あした]の 電車[でんしゃ]の 切符[きっぷ]を もう " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しなくても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "を-marked preparation with ので and 大丈夫です",
      },
      {
        register: "casual",
        segments: [
          { text: "もう 明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Placing もう at the beginning of the sentence",
      },
      {
        register: "casual",
        segments: [
          { text: "もう 明日[あした]の 電車[でんしゃ]の 切符[きっぷ]が " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Sentence-initial もう with が",
      },
      {
        register: "casual",
        segments: [
          { text: "もう 明日[あした]の 電車[でんしゃ]の 切符[きっぷ]を " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Sentence-initial もう with を",
      },
      {
        register: "casual",
        segments: [
          { text: "もう 明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "Sentence-initial もう with ので",
      },
      {
        segments: [
          { text: "もう 明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しなくても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Sentence-initial もう with 'no need to worry'",
      },
      {
        segments: [
          { text: "もう 明日[あした]の 電車[でんしゃ]の 切符[きっぷ]は " },
          { text: "買[か]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、心配[しんぱい]しなくても 大丈夫[だいじょうぶ]", conjugation: { pos: "Na-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "です" },
        ],
        notes: "Sentence-initial もう with 大丈夫です",
      },
    ],
  },
  {
    english: "The key has been left under the sofa, so don't lose it.",
    hint: "sofa = ソファ",
    answers: [
      {
        segments: [
          { text: "鍵[かぎ]が ソファの 下[した]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Basic sentence with が marking the key as the subject/state focus",
      },
      {
        segments: [
          { text: "鍵[かぎ]は ソファの 下[した]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Using は to present the key as the topic",
      },
      {
        segments: [
          { text: "ソファの 下[した]に 鍵[かぎ]が" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Location placed first",
      },
      {
        segments: [
          { text: "ソファの 下[した]に 鍵[かぎ]は" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Location first with topicalized key",
      },
      {
        segments: [
          { text: "鍵[かぎ]を ソファの 下[した]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Using を to imply someone intentionally left/prepared the key there",
      },
      {
        segments: [
          { text: "ソファの 下[した]に 鍵[かぎ]を" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Location first with を marking intentional placement",
      },
      {
        register: "polite",
        segments: [
          { text: "鍵[かぎ]が ソファの 下[した]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Polite てあります form",
      },
      {
        register: "polite",
        segments: [
          { text: "鍵[かぎ]は ソファの 下[した]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Polite てあります with the key as topic",
      },
      {
        segments: [
          { text: "ソファの 下[した]に 鍵[かぎ]が" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Polite form with location first",
      },
      {
        register: "polite",
        segments: [
          { text: "ソファの 下[した]に 鍵[かぎ]は" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Polite てあります with location first and topicalized key",
      },
      {
        register: "polite",
        segments: [
          { text: "鍵[かぎ]を ソファの 下[した]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Polite てあります with を emphasizing intentional placement",
      },
      {
        segments: [
          { text: "ソファの 下[した]に 鍵[かぎ]を" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、なくさないでください" },
        ],
        notes: "Polite form with location first and を marking preparation",
      },
      {
        segments: [
          { text: "鍵[かぎ]が ソファの 下[した]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、なくさないでください" },
        ],
        notes: "Using ので instead of から for a slightly softer reason",
      },
      {
        segments: [
          { text: "鍵[かぎ]は ソファの 下[した]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、なくさないでください" },
        ],
        notes: "ので with topicalized key",
      },
      {
        segments: [
          { text: "ソファの 下[した]に 鍵[かぎ]が" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、なくさないでください" },
        ],
        notes: "ので with location first",
      },
      {
        segments: [
          { text: "鍵[かぎ]を ソファの 下[した]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、なくさないでください" },
        ],
        notes: "ので with を emphasizing intentional placement",
      },
    ],
  },
  {
    english: "Sugar has already been put in this coffee, so please don’t put in any more.",
    answers: [
      {
        segments: [
          { text: "この コーヒーには もう 砂糖[さとう]を" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Uses を with てある, emphasizing that putting in sugar was already done as preparation",
      },
      {
        register: "polite",
        segments: [
          { text: "この コーヒーには もう 砂糖[さとう]を" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Polite てあります form",
      },
      {
        segments: [
          { text: "この コーヒーには もう 砂糖[さとう]が" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Uses が to focus on the state of the sugar having been put in",
      },
      {
        register: "polite",
        segments: [
          { text: "この コーヒーには もう 砂糖[さとう]が" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "State-focused が with polite てあります",
      },
      {
        segments: [
          { text: "この コーヒーには もう 砂糖[さとう]を" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Uses ので instead of から",
      },
      {
        register: "polite",
        segments: [
          { text: "この コーヒーには もう 砂糖[さとう]を" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Polite てあります with ので",
      },
      {
        segments: [
          { text: "この コーヒーには もう 砂糖[さとう]が" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "State-focused が with ので",
      },
      {
        register: "polite",
        segments: [
          { text: "この コーヒーには もう 砂糖[さとう]が" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Polite てあります, state-focused が, and ので",
      },
      {
        segments: [
          { text: "この コーヒーは もう 砂糖[さとう]を" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Using は to mark this coffee as the topic",
      },
      {
        register: "polite",
        segments: [
          { text: "この コーヒーは もう 砂糖[さとう]を" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Topic は with polite てあります",
      },
      {
        segments: [
          { text: "この コーヒーは もう 砂糖[さとう]が" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Topic は plus state-focused が",
      },
      {
        register: "polite",
        segments: [
          { text: "この コーヒーは もう 砂糖[さとう]が" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Topic は and state-focused が with polite てあります",
      },
      {
        segments: [
          { text: "この コーヒーは もう 砂糖[さとう]を" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Topic は with ので",
      },
      {
        register: "polite",
        segments: [
          { text: "この コーヒーは もう 砂糖[さとう]を" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Topic は with polite てあります and ので",
      },
      {
        segments: [
          { text: "この コーヒーは もう 砂糖[さとう]が" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Topic は, state-focused が, and ので",
      },
      {
        register: "polite",
        segments: [
          { text: "この コーヒーは もう 砂糖[さとう]が" },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、もう 砂糖[さとう]を 入[い]れないでください" },
        ],
        notes: "Topic は with polite てあります, state-focused が, and ので",
      },
    ],
  },
  {
    english: "A clean towel has been left on the sofa, so please use it after taking a shower.",
    hint: "towel = タオル; sofa = ソファ; shower = シャワー",
    answers: [
      {
        segments: [
          { text: "きれいな タオルが ソファに 置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、シャワーを 浴[あ]びてから 使[つか]ってください" },
        ],
        notes: "Basic sentence with が and ソファに; ある conjugates to polite あります or casual ある.",
      },
      {
        segments: [
          { text: "きれいな タオルは ソファに 置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、シャワーを 浴[あ]びてから 使[つか]ってください" },
        ],
        notes: "Using は to mark the towel as the topic.",
      },
      {
        segments: [
          { text: "きれいな タオルが ソファの 上[うえ]に置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、シャワーを 浴[あ]びてから 使[つか]ってください" },
        ],
        notes: "Specifies “on top of the sofa” with ソファの上に.",
      },
      {
        segments: [
          { text: "きれいな タオルは ソファの 上[うえ]に置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、シャワーを 浴[あ]びてから 使[つか]ってください" },
        ],
        notes: "Combines topic は with ソファの上に.",
      },
      {
        segments: [
          { text: "きれいな タオルが ソファに 置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、シャワーの 後[あと]で 使[つか]ってください" },
        ],
        notes: "Uses the simpler noun phrase シャワーの後で for “after the shower.”",
      },
      {
        segments: [
          { text: "きれいな タオルは ソファに 置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、シャワーの 後[あと]で 使[つか]ってください" },
        ],
        notes: "Topic は with シャワーの後で.",
      },
      {
        segments: [
          { text: "きれいな タオルが ソファの 上[うえ]に置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、シャワーの 後[あと]で 使[つか]ってください" },
        ],
        notes: "Specifies ソファの上に and uses シャワーの後で.",
      },
      {
        segments: [
          { text: "きれいな タオルは ソファの 上[うえ]に置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、シャワーの 後[あと]で 使[つか]ってください" },
        ],
        notes: "Topic は, ソファの上に, and シャワーの後で.",
      },
      {
        segments: [
          { text: "きれいな タオルが ソファに 置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、シャワーを 浴[あ]びてから 使[つか]ってください" },
        ],
        notes: "Uses ので instead of から for a slightly softer reason.",
      },
      {
        segments: [
          { text: "きれいな タオルは ソファに 置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、シャワーを 浴[あ]びてから 使[つか]ってください" },
        ],
        notes: "Uses は and ので.",
      },
      {
        segments: [
          { text: "きれいな タオルが ソファの 上[うえ]に置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、シャワーを 浴[あ]びてから 使[つか]ってください" },
        ],
        notes: "Uses ソファの上に and ので.",
      },
      {
        segments: [
          { text: "きれいな タオルは ソファの 上[うえ]に置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、シャワーを 浴[あ]びてから 使[つか]ってください" },
        ],
        notes: "Uses は, ソファの上に, and ので.",
      },
      {
        segments: [
          { text: "きれいな タオルが ソファに 置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、シャワーの 後[あと]で 使[つか]ってください" },
        ],
        notes: "Uses ので with シャワーの後で.",
      },
      {
        segments: [
          { text: "きれいな タオルは ソファに 置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、シャワーの 後[あと]で 使[つか]ってください" },
        ],
        notes: "Uses は, ので, and シャワーの後で.",
      },
      {
        segments: [
          { text: "きれいな タオルが ソファの 上[うえ]に置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、シャワーの 後[あと]で 使[つか]ってください" },
        ],
        notes: "Uses ソファの上に, ので, and シャワーの後で.",
      },
      {
        segments: [
          { text: "きれいな タオルは ソファの 上[うえ]に置[お]いて" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、シャワーの 後[あと]で 使[つか]ってください" },
        ],
        notes: "Combines は, ソファの上に, ので, and シャワーの後で.",
      },
    ],
  },
  {
    english: "The map has been put in the file, so please take it to the meeting.",
    answers: [
      {
        segments: [
          { text: "地図[ちず]が ファイルに " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Basic translation using が to focus on the map’s current prepared state.",
      },
      {
        segments: [
          { text: "地図[ちず]は ファイルに " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Using は to mark the map as the topic.",
      },
      {
        segments: [
          { text: "ファイルに 地図[ちず]が " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Reversed first-clause word order, emphasizing location first.",
      },
      {
        segments: [
          { text: "ファイルに 地図[ちず]を " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Using を with てある to emphasize preparatory action done to the map.",
      },
      {
        segments: [
          { text: "地図[ちず]を ファイルに " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Using を with standard word order to emphasize the preparatory action.",
      },
      {
        segments: [
          { text: "地図[ちず]が ファイルに " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Using ので instead of から for a slightly softer ‘so/because.’",
      },
      {
        segments: [
          { text: "地図[ちず]は ファイルに " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Using は with ので.",
      },
      {
        segments: [
          { text: "ファイルに 地図[ちず]が " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Location-first word order with ので.",
      },
      {
        segments: [
          { text: "地図[ちず]を ファイルに " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Using を and ので.",
      },
      {
        segments: [
          { text: "ファイルに 地図[ちず]を " },
          { text: "入[い]れて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、会議[かいぎ]に 持[も]って 行[い]ってください" },
        ],
        notes: "Location-first word order with を and ので.",
      },
    ],
  },
  {
    english: "The restaurant reservation has been made for seven o’clock, so let’s go soon.",
    answers: [
      {
        segments: [
          { text: "レストランの 予約[よやく]は 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using は to mark the reservation as the topic and すぐ for “soon”.",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]が 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to focus on the reservation being in that prepared state.",
      },
      {
        segments: [
          { text: "七時[しちじ]に レストランの 予約[よやく]は" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed at the beginning.",
      },
      {
        segments: [
          { text: "七時[しちじ]に レストランの 予約[よやく]が" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time-first word order with が marking the reservation.",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]を 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using を with 予約 to emphasize the preparatory action of making the reservation.",
      },
      {
        segments: [
          { text: "七時[しちじ]に レストランの 予約[よやく]を" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time-first word order with を marking the prepared reservation.",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]は 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、そろそろ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using そろそろ for a natural “soon/about time to go.”",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]が 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、そろそろ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "そろそろ with が to focus on the completed reservation state.",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]を 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、そろそろ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "そろそろ with を, emphasizing that the reservation has been arranged.",
      },
      {
        segments: [
          { text: "レストランを 七時[しちじ]に" },
          { text: "予約[よやく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using レストランを予約してある, focusing on the restaurant as the thing reserved.",
      },
      {
        segments: [
          { text: "レストランを 七時[しちじ]に" },
          { text: "予約[よやく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、そろそろ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "レストランを予約してある with そろそろ.",
      },
      {
        segments: [
          { text: "七時[しちじ]に レストランを" },
          { text: "予約[よやく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time-first word order with レストランを予約してある.",
      },
      {
        segments: [
          { text: "七時[しちじ]に レストランを" },
          { text: "予約[よやく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、そろそろ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time-first word order with そろそろ.",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]は 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので instead of から for a slightly softer reason connection.",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]が 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、そろそろ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので and そろそろ with が.",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]を 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、そろそろ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので with を marking the prepared reservation.",
      },
      {
        segments: [
          { text: "レストランを 七時[しちじ]に" },
          { text: "予約[よやく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、そろそろ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "レストランを予約してある with ので and そろそろ.",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]は もう 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、そろそろ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding もう to stress that the reservation has already been made.",
      },
      {
        segments: [
          { text: "レストランの 予約[よやく]は もう 七時[しちじ]に" },
          { text: "して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、すぐ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding もう with すぐ.",
      },
    ],
  },
  {
    english: "This door has been locked, so please use the entrance on the first floor.",
    answers: [
      {
        segments: [
          { text: "この ドアは 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Standard translation with は marking the door as the topic and から for “so”.",
      },
      {
        register: "polite",
        segments: [
          { text: "この ドアは 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Uses the polite てあります form explicitly.",
      },
      {
        segments: [
          { text: "この ドアには 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Uses には to indicate the door as the location/target where the lock has been applied.",
      },
      {
        register: "polite",
        segments: [
          { text: "この ドアには 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Polite てあります with には.",
      },
      {
        segments: [
          { text: "この ドアは 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Uses ので instead of から for a slightly softer “so/because.”",
      },
      {
        register: "polite",
        segments: [
          { text: "この ドアは 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Polite てあります with ので.",
      },
      {
        segments: [
          { text: "この ドアには 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Uses には and ので.",
      },
      {
        register: "polite",
        segments: [
          { text: "この ドアには 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Polite てあります with には and ので.",
      },
      {
        segments: [
          { text: "この ドアには 鍵[かぎ]を" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Uses 鍵をかけてある, emphasizing that someone has locked it.",
      },
      {
        register: "polite",
        segments: [
          { text: "この ドアには 鍵[かぎ]を" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一階[いっかい]の 入口[いりぐち]を 使[つか]ってください" },
        ],
        notes: "Polite てあります with 鍵をかけてあります.",
      },
      {
        segments: [
          { text: "この ドアは 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一階[いっかい]の 入口[いりぐち]から 入[はい]ってください" },
        ],
        notes: "Uses “enter from the first-floor entrance” instead of “use the entrance.”",
      },
      {
        register: "polite",
        segments: [
          { text: "この ドアは 鍵[かぎ]が" },
          { text: "かけて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一階[いっかい]の 入口[いりぐち]から 入[はい]ってください" },
        ],
        notes: "Polite てあります with 入ってください in the second clause.",
      },
    ],
  },
  {
    english: "The classroom light has been turned off, so the classroom is dark.",
    answers: [
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]が " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using が to focus on the light being in the turned-off state.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]は " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は for the classroom light as the topic.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]が " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので instead of から for a slightly softer causal connection.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]は " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は with ので.",
      },
      {
        segments: [
          { text: "電気[でんき]が " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 教室の before 電気 when context makes it clear.",
      },
      {
        segments: [
          { text: "電気[でんき]は " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 教室の and topicalizing 電気 with は.",
      },
      {
        segments: [
          { text: "電気[でんき]が " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 教室の and using ので.",
      },
      {
        segments: [
          { text: "電気[でんき]は " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 教室の, using は and ので.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]は、電気[でんき]が " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、" },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Putting 教室は at the beginning as the overall topic.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]は、電気[でんき]が " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、" },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Overall topic 教室は with ので.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]は、電気[でんき]は " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、" },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は for both the classroom topic and the light as a contrastive/topic marker.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]は、電気[でんき]は " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、" },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contrastive/topic は for 電気 with ので.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]が " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、教室[きょうしつ]が " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for 教室 to neutrally state the classroom is dark.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]は " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、教室[きょうしつ]が " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing the light, with が marking the classroom as dark.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]が " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、教室[きょうしつ]が " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので and が for the classroom.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]は " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、教室[きょうしつ]が " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は for the light, ので for the reason, and が for the classroom.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]を " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using を to imply the light was intentionally turned off.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 電気[でんき]を " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using を with ので.",
      },
      {
        segments: [
          { text: "電気[でんき]を " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 教室の and using を for intentional preparation.",
      },
      {
        segments: [
          { text: "電気[でんき]を " },
          { text: "消[け]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、教室[きょうしつ]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 教室の, using を and ので.",
      },
    ],
  },
  {
    english: "The fish has already been grilled, so let’s eat dinner.",
    answers: [
      {
        segments: [
          { text: "もう 魚[さかな]は " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、夕[ゆう]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夕ご飯, は, and initial もう",
      },
      {
        segments: [
          { text: "もう 魚[さかな]を " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、夕[ゆう]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夕ご飯, を, and initial もう",
      },
      {
        segments: [
          { text: "魚[さかな]が もう " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、夕[ゆう]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夕ご飯 with ので",
      },
      {
        segments: [
          { text: "魚[さかな]は もう " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、夕[ゆう]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夕ご飯, は, and ので",
      },
      {
        segments: [
          { text: "魚[さかな]を もう " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、夕[ゆう]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夕ご飯, を, and ので",
      },
      {
        segments: [
          { text: "もう 魚[さかな]が " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、夕[ゆう]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夕ご飯, ので, and initial もう",
      },
      {
        segments: [
          { text: "もう 魚[さかな]は " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、夕[ゆう]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夕ご飯, は, ので, and initial もう",
      },
      {
        segments: [
          { text: "もう 魚[さかな]を " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、夕[ゆう]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夕ご飯, を, ので, and initial もう",
      },
      {
        segments: [
          { text: "魚[さかな]が もう " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using が for the fish's resulting state",
      },
      {
        segments: [
          { text: "魚[さかな]は もう " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to make the fish the topic",
      },
      {
        segments: [
          { text: "もう 魚[さかな]が " },
          { text: "焼[や]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、晩[ばん]ご 飯[はん]を " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Placing もう at the start",
      },
    ],
  },
  {
    english: "The soy sauce has been left next to the sushi, so please use it.",
    answers: [
      {
        segments: [
          { text: "しょう油[ゆ]が 寿司[すし]の 隣[となり]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、使[つか]ってください" },
        ],
        notes: "Basic translation using が and 隣に; Uses 置いてある for a prepared/resulting state.",
      },
      {
        segments: [
          { text: "しょう油[ゆ]は 寿司[すし]の 隣[となり]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、使[つか]ってください" },
        ],
        notes: "Using は to present the soy sauce as the topic.",
      },
      {
        segments: [
          { text: "寿司[すし]の 隣[となり]に しょう油[ゆ]が" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、使[つか]ってください" },
        ],
        notes: "Location-first word order with が.",
      },
      {
        segments: [
          { text: "しょう油[ゆ]が 寿司[すし]の 隣[となり]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、使[つか]ってください" },
        ],
        notes: "Using ので instead of から for a softer reason.",
      },
      {
        segments: [
          { text: "しょう油[ゆ]が 寿司[すし]の そばに" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、使[つか]ってください" },
        ],
        notes: "Using そばに as a natural synonym for next to/near.",
      },
      {
        segments: [
          { text: "寿司[すし]の そばに しょう油[ゆ]が" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、使[つか]ってください" },
        ],
        notes: "Location-first word order with そばに.",
      },
      {
        segments: [
          { text: "しょう油[ゆ]が 寿司[すし]の 隣[となり]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、使[つか]ってください" },
        ],
        notes: "Using 横に, another natural expression for next to; 横 is outside the known vocabulary but natural.",
      },
      {
        segments: [
          { text: "しょう油[ゆ]を 寿司[すし]の 隣[となり]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、使[つか]ってください" },
        ],
        notes: "Using を with てある, implying someone intentionally left/prepared it there.",
      },
      {
        segments: [
          { text: "しょう油[ゆ]が 寿司[すし]の 隣[となり]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、それを使[つか]ってください" },
        ],
        notes: "Explicitly says 'use it' with それを.",
      },
    ],
  },
  {
    english: "The red sweater has already been washed, so please wear it tomorrow.",
    hint: "sweater = セーター",
    answers: [
      {
        segments: [
          { text: "赤[あか]い セーターは もう " },
          { text: "洗[あら]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、明日[あした] 着[き]てください" },
        ],
        notes: "Basic translation with は marking the red sweater as the topic.",
      },
      {
        segments: [
          { text: "赤[あか]い セーターは もう " },
          { text: "洗濯[せんたく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、明日[あした] 着[き]てください" },
        ],
        notes: "Uses 洗濯する instead of 洗う for 'washed/laundered'.",
      },
      {
        segments: [
          { text: "赤[あか]い セーターが もう " },
          { text: "洗[あら]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、明日[あした] 着[き]てください" },
        ],
        notes: "Uses が to focus on the sweater's resulting state.",
      },
      {
        segments: [
          { text: "赤[あか]い セーターが もう " },
          { text: "洗濯[せんたく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、明日[あした] 着[き]てください" },
        ],
        notes: "Uses が plus 洗濯する for the resulting laundered state.",
      },
      {
        segments: [
          { text: "もう 赤[あか]い セーターは " },
          { text: "洗[あら]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、明日[あした] 着[き]てください" },
        ],
        notes: "Moves もう to the beginning of the clause.",
      },
      {
        segments: [
          { text: "もう 赤[あか]い セーターは " },
          { text: "洗濯[せんたく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、明日[あした] 着[き]てください" },
        ],
        notes: "Moves もう to the beginning and uses 洗濯する.",
      },
      {
        segments: [
          { text: "もう 赤[あか]い セーターが " },
          { text: "洗[あら]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、明日[あした] 着[き]てください" },
        ],
        notes: "Moves もう to the beginning with が marking the subject.",
      },
      {
        segments: [
          { text: "もう 赤[あか]い セーターが " },
          { text: "洗濯[せんたく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、明日[あした] 着[き]てください" },
        ],
        notes: "Moves もう to the beginning with が and 洗濯する.",
      },
      {
        segments: [
          { text: "明日[あした] 着[き]てください。赤[あか]い セーターは もう " },
          { text: "洗[あら]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reverses the sentence order: request first, then reason.",
      },
      {
        segments: [
          { text: "明日[あした] 着[き]てください。赤[あか]い セーターは もう " },
          { text: "洗濯[せんたく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with 洗濯する.",
      },
      {
        segments: [
          { text: "赤[あか]い セーターは もう " },
          { text: "洗[あら]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、明日[あした] 着[き]てください" },
        ],
        notes: "Uses ので instead of から for a slightly softer reason.",
      },
      {
        segments: [
          { text: "赤[あか]い セーターは もう " },
          { text: "洗濯[せんたく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、明日[あした] 着[き]てください" },
        ],
        notes: "Uses ので and 洗濯する.",
      },
      {
        segments: [
          { text: "赤[あか]い セーターが もう " },
          { text: "洗[あら]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、明日[あした] 着[き]てください" },
        ],
        notes: "Uses が and ので.",
      },
      {
        segments: [
          { text: "赤[あか]い セーターが もう " },
          { text: "洗濯[せんたく]して", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、明日[あした] 着[き]てください" },
        ],
        notes: "Uses が, ので, and 洗濯する.",
      },
    ],
  },
  {
    english: "The hot water has already been boiled, so please make some tea.",
    answers: [
      {
        segments: [
          { text: "お湯[ゆ]は もう " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お茶[ちゃ]を いれてください" },
        ],
        notes: "Standard translation with は marking the prepared hot water",
      },
      {
        segments: [
          { text: "お湯[ゆ]が もう " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お茶[ちゃ]を いれてください" },
        ],
        notes: "Using が to focus on the state of the hot water",
      },
      {
        segments: [
          { text: "もう お湯[ゆ]は " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お茶[ちゃ]を いれてください" },
        ],
        notes: "Adverb もう placed at the beginning",
      },
      {
        segments: [
          { text: "もう お湯[ゆ]が " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お茶[ちゃ]を いれてください" },
        ],
        notes: "Sentence-initial もう with が marking the hot water",
      },
      {
        segments: [
          { text: "お湯[ゆ]を もう " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お茶[ちゃ]を いれてください" },
        ],
        notes: "Using を to emphasize the preparatory action of boiling the water",
      },
      {
        segments: [
          { text: "もう お湯[ゆ]を " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、お茶[ちゃ]を いれてください" },
        ],
        notes: "Sentence-initial もう with を marking the prepared object",
      },
      {
        segments: [
          { text: "お湯[ゆ]は もう " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お茶[ちゃ]を いれてください" },
        ],
        notes: "Using ので instead of から for 'so'",
      },
      {
        segments: [
          { text: "お湯[ゆ]が もう " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お茶[ちゃ]を いれてください" },
        ],
        notes: "Using ので with が to focus on the hot water's state",
      },
      {
        segments: [
          { text: "お湯[ゆ]を もう " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お茶[ちゃ]を いれてください" },
        ],
        notes: "Using ので with を to emphasize preparation",
      },
      {
        segments: [
          { text: "もう お湯[ゆ]は " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お茶[ちゃ]を いれてください" },
        ],
        notes: "Sentence-initial もう with ので and は",
      },
      {
        segments: [
          { text: "もう お湯[ゆ]が " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お茶[ちゃ]を いれてください" },
        ],
        notes: "Sentence-initial もう with ので and が",
      },
      {
        segments: [
          { text: "もう お湯[ゆ]を " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、お茶[ちゃ]を いれてください" },
        ],
        notes: "Sentence-initial もう with ので and を",
      },
      {
        segments: [
          { text: "お茶[ちゃ]を いれてください。お湯[ゆ]は もう " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed sentence order: request first, reason after",
      },
      {
        segments: [
          { text: "お茶[ちゃ]を いれてください。お湯[ゆ]が もう " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed sentence order with が marking the hot water",
      },
      {
        segments: [
          { text: "お茶[ちゃ]を いれてください。お湯[ゆ]を もう " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed sentence order with を emphasizing preparation",
      },
      {
        segments: [
          { text: "お茶[ちゃ]を いれてください。もう お湯[ゆ]は " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with もう before the hot water phrase",
      },
      {
        segments: [
          { text: "お茶[ちゃ]を いれてください。もう お湯[ゆ]が " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with sentence-initial もう and が",
      },
      {
        segments: [
          { text: "お茶[ちゃ]を いれてください。もう お湯[ゆ]を " },
          { text: "沸[わ]かして", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with sentence-initial もう and を",
      },
    ],
  },
  {
    english: "The shoes have been put under the chair, so please don't step on them.",
    answers: [
      {
        segments: [
          { text: "靴[くつ]が いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、踏[ふ]まないでください" },
        ],
        notes: "Basic translation using が to focus on the shoes' state",
      },
      {
        segments: [
          { text: "靴[くつ]は いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、踏[ふ]まないでください" },
        ],
        notes: "Using は to topicalize the shoes",
      },
      {
        segments: [
          { text: "いすの 下[した]に 靴[くつ]が " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、踏[ふ]まないでください" },
        ],
        notes: "Location-first word order",
      },
      {
        segments: [
          { text: "いすの 下[した]に 靴[くつ]は " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、踏[ふ]まないでください" },
        ],
        notes: "Location-first with は topicalization",
      },
      {
        segments: [
          { text: "靴[くつ]が いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、踏[ふ]まないでください" },
        ],
        notes: "Using ので instead of から for a softer reason",
      },
      {
        segments: [
          { text: "靴[くつ]は いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、踏[ふ]まないでください" },
        ],
        notes: "Using は plus ので",
      },
      {
        segments: [
          { text: "いすの 下[した]に 靴[くつ]が " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、踏[ふ]まないでください" },
        ],
        notes: "Location-first with ので",
      },
      {
        segments: [
          { text: "いすの 下[した]に 靴[くつ]は " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、踏[ふ]まないでください" },
        ],
        notes: "Location-first with は and ので",
      },
      {
        segments: [
          { text: "靴[くつ]が いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、その 靴[くつ]を 踏[ふ]まないでください" },
        ],
        notes: "Explicitly repeats 'those shoes' as the object of stepping",
      },
      {
        segments: [
          { text: "靴[くつ]は いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、その 靴[くつ]を 踏[ふ]まないでください" },
        ],
        notes: "Topicalizes the shoes and explicitly names the object not to step on",
      },
      {
        segments: [
          { text: "いすの 下[した]に 靴[くつ]が " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、その 靴[くつ]を 踏[ふ]まないでください" },
        ],
        notes: "Location-first plus explicit object in second clause",
      },
      {
        segments: [
          { text: "靴[くつ]が いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、その 靴[くつ]を 踏[ふ]まないでください" },
        ],
        notes: "Softer ので with explicit object",
      },
      {
        segments: [
          { text: "靴[くつ]を いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、踏[ふ]まないでください" },
        ],
        notes: "Using を with てある, emphasizing that someone has put the shoes there",
      },
      {
        segments: [
          { text: "いすの 下[した]に 靴[くつ]を " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、踏[ふ]まないでください" },
        ],
        notes: "Location-first word order with を",
      },
      {
        segments: [
          { text: "靴[くつ]を いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、踏[ふ]まないでください" },
        ],
        notes: "Using を and softer ので",
      },
      {
        segments: [
          { text: "いすの 下[した]に 靴[くつ]を " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、踏[ふ]まないでください" },
        ],
        notes: "Location-first with を and ので",
      },
      {
        register: "polite",
        segments: [
          { text: "靴[くつ]が いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、踏[ふ]まないでください" },
        ],
        notes: "Polite てあります form in the reason clause",
      },
      {
        register: "polite",
        segments: [
          { text: "靴[くつ]は いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、踏[ふ]まないでください" },
        ],
        notes: "Polite てあります with は topicalization",
      },
      {
        register: "polite",
        segments: [
          { text: "いすの 下[した]に 靴[くつ]が " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、踏[ふ]まないでください" },
        ],
        notes: "Polite てあります with location-first word order",
      },
      {
        register: "polite",
        segments: [
          { text: "靴[くつ]が いすの 下[した]に " },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、踏[ふ]まないでください" },
        ],
        notes: "Polite てあります with softer ので",
      },
    ],
  },
  {
    english: "The letter has been left on the desk, so please read it later.",
    answers: [
      {
        segments: [
          { text: "手紙[てがみ]が 机[つくえ]の 上[うえ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 読[よ]んでください" },
        ],
        notes: "Basic sentence with が marking the letter as the subject/state focus",
      },
      {
        segments: [
          { text: "手紙[てがみ]は 机[つくえ]の 上[うえ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 読[よ]んでください" },
        ],
        notes: "Using は to topicalize the letter",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 手紙[てがみ]が" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 読[よ]んでください" },
        ],
        notes: "Location phrase placed first",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 手紙[てがみ]は" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 読[よ]んでください" },
        ],
        notes: "Location first with は topicalizing the letter",
      },
      {
        segments: [
          { text: "手紙[てがみ]が 机[つくえ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 読[よ]んでください" },
        ],
        notes: "Using 机に instead of 机の上に; natural when 'on the desk' is understood",
      },
      {
        segments: [
          { text: "手紙[てがみ]は 机[つくえ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 読[よ]んでください" },
        ],
        notes: "Topicalized version with 机に",
      },
      {
        segments: [
          { text: "机[つくえ]に 手紙[てがみ]が" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 読[よ]んでください" },
        ],
        notes: "Location first with 机に",
      },
      {
        segments: [
          { text: "机[つくえ]に 手紙[てがみ]は" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 読[よ]んでください" },
        ],
        notes: "Location first with topicalized letter and 机に",
      },
      {
        segments: [
          { text: "手紙[てがみ]が 机[つくえ]の 上[うえ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 読[よ]んでください" },
        ],
        notes: "Using ので for a slightly softer reason",
      },
      {
        segments: [
          { text: "手紙[てがみ]は 机[つくえ]の 上[うえ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 読[よ]んでください" },
        ],
        notes: "Using ので with は topicalization",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 手紙[てがみ]が" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 読[よ]んでください" },
        ],
        notes: "Location first with ので",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 手紙[てがみ]は" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 読[よ]んでください" },
        ],
        notes: "Location first, topicalized letter, with ので",
      },
      {
        segments: [
          { text: "手紙[てがみ]が 机[つくえ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 読[よ]んでください" },
        ],
        notes: "Using 机に and ので",
      },
      {
        segments: [
          { text: "手紙[てがみ]は 机[つくえ]に" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 読[よ]んでください" },
        ],
        notes: "Topicalized letter with 机に and ので",
      },
      {
        segments: [
          { text: "机[つくえ]に 手紙[てがみ]が" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 読[よ]んでください" },
        ],
        notes: "Location first with 机に and ので",
      },
      {
        segments: [
          { text: "机[つくえ]に 手紙[てがみ]は" },
          { text: "置[お]いて", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 読[よ]んでください" },
        ],
        notes: "Location first, topicalized letter, with 机に and ので",
      },
    ],
  },
  {
    english: "The vegetables have already been cut, so let’s make curry together.",
    answers: [
      {
        segments: [
          { text: "野菜[やさい]は もう " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一緒[いっしょ]に カレーを " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with 野菜は and 一緒に before カレーを",
      },
      {
        register: "polite",
        segments: [
          { text: "野菜[やさい]は もう " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一緒[いっしょ]に カレーを " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite てあります form explicitly used for the target grammar",
      },
      {
        segments: [
          { text: "野菜[やさい]が もう " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一緒[いっしょ]に カレーを " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to focus on the vegetables' resulting state",
      },
      {
        register: "polite",
        segments: [
          { text: "野菜[やさい]が もう " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一緒[いっしょ]に カレーを " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with polite てあります",
      },
      {
        segments: [
          { text: "もう 野菜[やさい]は " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一緒[いっしょ]に カレーを " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved もう to the beginning",
      },
      {
        segments: [
          { text: "もう 野菜[やさい]が " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一緒[いっしょ]に カレーを " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Sentence-initial もう with が marking",
      },
      {
        segments: [
          { text: "野菜[やさい]は もう " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、カレーを 一緒[いっしょ]に " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved 一緒に after カレーを",
      },
      {
        segments: [
          { text: "野菜[やさい]が もう " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、カレーを 一緒[いっしょ]に " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が marking with reordered second clause",
      },
      {
        segments: [
          { text: "野菜[やさい]を もう " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一緒[いっしょ]に カレーを " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using を to emphasize that cutting the vegetables was done as preparation",
      },
      {
        register: "polite",
        segments: [
          { text: "野菜[やさい]を もう " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一緒[いっしょ]に カレーを " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Preparation-focused を with polite てあります",
      },
      {
        segments: [
          { text: "もう 野菜[やさい]を " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、一緒[いっしょ]に カレーを " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Sentence-initial もう with preparation-focused を",
      },
      {
        segments: [
          { text: "野菜[やさい]を もう " },
          { text: "切[き]って", blank: true },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with \'ru\' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、カレーを 一緒[いっしょ]に " },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Preparation-focused を with reordered second clause",
      },
    ],
  },
];

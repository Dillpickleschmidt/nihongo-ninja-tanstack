import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "The lights went out right in the middle of the meeting.",
    answers: [
      {
        segments: [
          { text: "会議[かいぎ]の" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、電気[でんき]が" },
          { text: "消[き]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation using noun + の最中に for “right in the middle of the meeting.”",
      },
      {
        segments: [
          { text: "会議[かいぎ]の" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、電気[でんき]が" },
          { text: "消[き]えて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses てしまう to emphasize the lights unfortunately went out.",
      },
      {
        segments: [
          { text: "会議[かいぎ]を" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、電気[でんき]が" },
          { text: "消[き]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses verb ている + 最中に: “while we were having a meeting.”",
      },
      {
        segments: [
          { text: "会議[かいぎ]を" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、電気[でんき]が" },
          { text: "消[き]えて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Verb ている + 最中に with てしまう for an unfortunate interruption.",
      },
      {
        segments: [
          { text: "電気[でんき]が、会議[かいぎ]の" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "消[き]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order, putting the lights first.",
      },
      {
        segments: [
          { text: "電気[でんき]が、会議[かいぎ]の" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "消[き]えて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with てしまう.",
      },
      {
        segments: [
          { text: "会議[かいぎ]の" },
          { text: "間[あいだ]に", blank: true },
          { text: "、電気[でんき]が" },
          { text: "消[き]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses noun + の間に; means during the meeting, though less emphatic than 最中に.",
      },
      {
        segments: [
          { text: "会議[かいぎ]を" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、電気[でんき]が" },
          { text: "消[き]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ている間に: “while we were having a meeting.”",
      },
      {
        segments: [
          { text: "会議[かいぎ]を" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、電気[でんき]が" },
          { text: "消[き]えて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ている間に with てしまう for an unfortunate event during the meeting.",
      },
      {
        segments: [
          { text: "会議[かいぎ]の" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、部屋[へや]の 電気[でんき]が" },
          { text: "消[き]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Specifies that the room lights went out.",
      },
      {
        segments: [
          { text: "会議[かいぎ]を" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、部屋[へや]の 電気[でんき]が" },
          { text: "消[き]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Verb ている + 最中に, specifying the room lights.",
      },
      {
        segments: [
          { text: "会議[かいぎ]の" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、" },
          { text: "停電[ていでん]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 停電する, a natural way to say the power went out.",
      },
      {
        segments: [
          { text: "会議[かいぎ]を" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、" },
          { text: "停電[ていでん]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ている最中に with 停電する.",
      },
    ],
  },
  {
    english: "While I was taking a shower, my cat ate the fish on my desk.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "シャワーを", blank: true },
          { text: "浴[あ]びる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]の猫[ねこ]が机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic sentence using ている間に with 猫が as the subject",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "シャワーを", blank: true },
          { text: "浴[あ]びる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]の猫[ねこ]は机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using は to mark the cat as the topic",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "シャワーを", blank: true },
          { text: "浴[あ]びる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、机[つくえ]の上[うえ]の魚[さかな]を私[わたし]の猫[ねこ]が" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered object before subject for emphasis on the fish",
      },
      {
        segments: [
          { text: "私[わたし]の猫[ねこ]が、私[わたし]が" },
          { text: "シャワーを", blank: true },
          { text: "浴[あ]びる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Main subject placed first, with the time clause in the middle",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "シャワーを", blank: true },
          { text: "浴[あ]びる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の猫[ねこ]が机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 最中に to mean right in the middle of taking a shower",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "シャワーを", blank: true },
          { text: "浴[あ]びる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、机[つくえ]の上[うえ]の魚[さかな]を私[わたし]の猫[ねこ]が" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に with object-first order",
      },
      {
        segments: [
          { text: "私[わたし]の猫[ねこ]が、私[わたし]が" },
          { text: "シャワーを", blank: true },
          { text: "浴[あ]びる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に with the cat introduced first",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "シャワーを", blank: true },
          { text: "浴[あ]びる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]の猫[ねこ]が私[わたし]の机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicitly says my desk as 私の机",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "シャワーを", blank: true },
          { text: "浴[あ]びる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の猫[ねこ]が私[わたし]の机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に with explicit my desk",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "シャワーの最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の猫[ねこ]が机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural noun phrase シャワーの最中に with 私は as the overall topic",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "シャワーの間[あいだ]に", blank: true },
          { text: "、私[わたし]の猫[ねこ]が机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural noun phrase シャワーの間に with 私は as the overall topic",
      },
      {
        segments: [
          { text: "私[わたし]の猫[ねこ]が、私[わたし]の" },
          { text: "シャワーの間[あいだ]に", blank: true },
          { text: "机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Noun phrase シャワーの間に with cat as the main subject first",
      },
      {
        segments: [
          { text: "私[わたし]の猫[ねこ]が、私[わたし]の" },
          { text: "シャワーの最中[さいちゅう]に", blank: true },
          { text: "机[つくえ]の上[うえ]の魚[さかな]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Noun phrase シャワーの最中に with cat as the main subject first",
      },
    ],
  },
  {
    english: "Sometime during lunch, someone called.",
    answers: [
      {
        segments: [
          { text: "昼[ひる]ご飯[はん]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、誰[だれ]かが電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic noun + の間に with 誰かが電話する",
      },
      {
        segments: [
          { text: "昼[ひる]ご飯[はん]を", blank: true },
          { text: "食[た]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、誰[だれ]かが電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Verb te-iru + 間に: while eating lunch",
      },
      {
        segments: [
          { text: "昼[ひる]ご飯[はん]" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かが電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using の最中に to mean in the middle of lunch",
      },
      {
        segments: [
          { text: "昼[ひる]ご飯[はん]を", blank: true },
          { text: "食[た]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かが電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Verb te-iru + 最中に: right in the middle of eating lunch",
      },
      {
        segments: [
          { text: "昼[ひる]ご飯[はん]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、誰[だれ]かから電話[でんわ]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Corrected 電話がある with ある special past conjugation",
      },
      {
        segments: [
          { text: "昼[ひる]ご飯[はん]を食[た]べている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、誰[だれ]かから電話[でんわ]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Corrected while eating lunch, using 電話がある",
      },
      {
        segments: [
          { text: "昼[ひる]ご飯[はん]" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かから電話[でんわ]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Corrected 最中に with 電話がある",
      },
      {
        segments: [
          { text: "昼[ひる]ご飯[はん]を食[た]べている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かから電話[でんわ]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Corrected verb te-iru + 最中に with 電話がある",
      },
    ],
  },
  {
    english: "While the weather is nice, let's take a walk in the park.",
    answers: [
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "よい間[あいだ]に", blank: true },
          { text: "、公園[こうえん]を散歩[さんぽ]" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using い-adjective + 間に and 公園を散歩する",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "よい間[あいだ]に", blank: true },
          { text: "、公園[こうえん]で散歩[さんぽ]" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 公園で to mark the location where the walk happens",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "よい間[あいだ]に", blank: true },
          { text: "、公園[こうえん]に散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 散歩に行く: go to the park for a walk",
      },
      {
        segments: [
          { text: "晴[は]れている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、公園[こうえん]を散歩[さんぽ]" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using verb ている + 間に with 晴れている",
      },
      {
        segments: [
          { text: "晴[は]れている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、公園[こうえん]で散歩[さんぽ]" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 晴れている間に and location particle で",
      },
      {
        segments: [
          { text: "晴[は]れている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、公園[こうえん]に散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 晴れている間に with 散歩に行く",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "よい間[あいだ]に", blank: true },
          { text: "、公園[こうえん]へ散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に with 散歩に行く",
      },
      {
        segments: [
          { text: "晴[は]れている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、公園[こうえん]へ散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 晴れている間に with へ for direction",
      },
    ],
  },
  {
    english: "While I was sleeping, my roommate cleaned my room for me.",
    hint: "roommate = ルームメイト",
    answers: [
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]のルームメイトが私[わたし]の部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard wording with 私が in the time clause and 掃除してくれる for “cleaned for me.”",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、ルームメイトが私[わたし]の部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私の before ルームメイト; still clear and natural.",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]のルームメイトが部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私の before 部屋 because it is clear from context.",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、ルームメイトが部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Most concise natural version, omitting possessives understood from context.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、ルームメイトに部屋[へや]を掃除[そうじ]して" },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses てもらう to express receiving the favor from the roommate.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、ルームメイトに私[わたし]の部屋[へや]を掃除[そうじ]して" },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "てもらう version with 私の部屋 explicitly stated.",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ルームメイトが部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に to emphasize “right in the middle of sleeping.”",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のルームメイトが私[わたし]の部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に version with both possessives explicit.",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のルームメイトが部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に version with only the roommate explicitly marked as mine.",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ルームメイトが私[わたし]の部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に version with the room explicitly marked as mine.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ルームメイトに部屋[へや]を掃除[そうじ]して" },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に with てもらう to express receiving the favor.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ルームメイトに私[わたし]の部屋[へや]を掃除[そうじ]して" },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に + てもらう with 私の部屋 explicit.",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "寝[ね]ていた間[あいだ]に", blank: true },
          { text: "、ルームメイトが部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 寝ていた間に, matching the past-time context more explicitly.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "寝[ね]ていた間[あいだ]に", blank: true },
          { text: "、ルームメイトに部屋[へや]を掃除[そうじ]して" },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past-time 寝ていた間に with てもらう.",
      },
      {
        segments: [
          { text: "ルームメイトが、私[わたし]が" },
          { text: "寝[ね]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]の部屋[へや]を" },
          { text: "掃除[そうじ]して" },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered sentence putting ルームメイトが first.",
      },
    ],
  },
  {
    english: "Right in the middle of my speech, I dropped my notebook.",
    answers: [
      {
        segments: [
          { text: "私[わたし]のスピーチ" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using noun + の最中に to emphasize right in the middle of my speech",
      },
      {
        segments: [
          { text: "スピーチ" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私の before スピーチ; ownership is inferred naturally",
      },
      {
        segments: [
          { text: "私[わたし]がスピーチをしている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using verb ている + 最中に instead of noun phrase",
      },
      {
        segments: [
          { text: "スピーチをしている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Verb ている + 最中に with the subject omitted",
      },
      {
        segments: [
          { text: "私[わたし]のスピーチ" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adds てしまう to convey accidentally/unfortunately dropped it",
      },
      {
        segments: [
          { text: "スピーチ" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject/possessor of speech omitted, with てしまう for accidental nuance",
      },
      {
        segments: [
          { text: "私[わたし]がスピーチをしている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Verb ている + 最中に plus accidental てしまう",
      },
      {
        segments: [
          { text: "スピーチをしている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted with verb phrase and てしまう",
      },
      {
        segments: [
          { text: "私[わたし]のスピーチ" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses の間に for during my speech; less emphatic than 最中に",
      },
      {
        segments: [
          { text: "ちょうど私[わたし]のスピーチ" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adds ちょうど to match “right in the middle” more explicitly",
      },
      {
        segments: [
          { text: "ちょうどスピーチ" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adds ちょうど with omitted possessor of スピーチ",
      },
      {
        segments: [
          { text: "ちょうど私[わたし]がスピーチをしている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ちょうど with verb ている + 最中に",
      },
      {
        segments: [
          { text: "ちょうどスピーチをしている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted, with ちょうど and verb ている + 最中に",
      },
      {
        segments: [
          { text: "ちょうど私[わたし]のスピーチ" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "ちょうど plus てしまう for accidental dropping",
      },
      {
        segments: [
          { text: "ちょうどスピーチ" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Possessor omitted, with ちょうど and てしまう",
      },
      {
        segments: [
          { text: "ちょうど私[わたし]がスピーチをしている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Verb phrase + 最中に with ちょうど and てしまう",
      },
      {
        segments: [
          { text: "ちょうどスピーチをしている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; explicit “right in the middle” with accidental nuance",
      },
      {
        segments: [
          { text: "私[わたし]がスピーチをしている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ている間に to say it happened while I was giving my speech",
      },
      {
        segments: [
          { text: "スピーチをしている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]のノートを" },
          { text: "落[お]とす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted with ている間に",
      },
      {
        segments: [
          { text: "私[わたし]がスピーチをしている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "ている間に plus てしまう for accidental nuance",
      },
      {
        segments: [
          { text: "スピーチをしている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]のノートを落[お]として" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted, using ている間に and てしまう",
      },
    ],
  },
  {
    english: "During the typhoon, the old window broke.",
    answers: [
      {
        segments: [
          { text: "台風[たいふう]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、古[ふる]い窓[まど]が" },
          { text: "壊[こわ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using Noun + の間に with が marking the broken window.",
      },
      {
        segments: [
          { text: "台風[たいふう]" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、古[ふる]い窓[まど]が" },
          { text: "壊[こわ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses の最中に to emphasize it happened in the midst/height of the typhoon.",
      },
      {
        segments: [
          { text: "台風[たいふう]が" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Suru verb - special class", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、古[ふる]い窓[まど]が" },
          { text: "壊[こわ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses Verbている + 間に: while the typhoon was coming/passing through.",
      },
      {
        segments: [
          { text: "台風[たいふう]が" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Suru verb - special class", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、古[ふる]い窓[まど]が" },
          { text: "壊[こわ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses Verbている + 最中に to emphasize the window broke right in the middle of the typhoon.",
      },
      {
        segments: [
          { text: "台風[たいふう]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、古[ふる]い窓[まど]が壊[こわ]れて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adds てしまう for an unfortunate/accidental nuance.",
      },
      {
        segments: [
          { text: "台風[たいふう]" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、古[ふる]い窓[まど]が壊[こわ]れて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に plus てしまう for an unfortunate event in the midst of the typhoon.",
      },
      {
        segments: [
          { text: "台風[たいふう]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、古[ふる]い窓[まど]が" },
          { text: "割[わ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 割れる, a natural verb for a window/glass breaking.",
      },
      {
        segments: [
          { text: "台風[たいふう]" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、古[ふる]い窓[まど]が" },
          { text: "割[わ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に and 割れる to emphasize the window broke amid the typhoon.",
      },
      {
        segments: [
          { text: "台風[たいふう]が" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Suru verb - special class", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、古[ふる]い窓[まど]が" },
          { text: "割[わ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses Verbている + 間に with 割れる.",
      },
      {
        segments: [
          { text: "台風[たいふう]が" },
          { text: "来[く]る", blank: true, conjugation: { pos: "Suru verb - special class", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、古[ふる]い窓[まど]が" },
          { text: "割[わ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses Verbている + 最中に with 割れる.",
      },
      {
        segments: [
          { text: "台風[たいふう]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、古[ふる]い窓[まど]が割[わ]れて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 割れてしまう to express the unfortunate breakage during the typhoon.",
      },
      {
        segments: [
          { text: "台風[たいふう]" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "、古[ふる]い窓[まど]が割[わ]れて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に plus 割れてしまう for an unfortunate event in the middle of the typhoon.",
      },
      {
        segments: [
          { text: "古[ふる]い窓[まど]が、台風[たいふう]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "壊[こわ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order: the old window is mentioned first.",
      },
      {
        segments: [
          { text: "古[ふる]い窓[まど]が、台風[たいふう]" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "壊[こわ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with 最中に.",
      },
      {
        segments: [
          { text: "古[ふる]い窓[まど]が、台風[たいふう]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "割[わ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with 割れる.",
      },
      {
        segments: [
          { text: "古[ふる]い窓[まど]が、台風[たいふう]" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "割[わ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with 最中に and 割れる.",
      },
      {
        segments: [
          { text: "古[ふる]い窓[まど]は、台風[たいふう]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "壊[こわ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses は to mark the old window as the topic.",
      },
      {
        segments: [
          { text: "古[ふる]い窓[まど]は、台風[たいふう]" },
          { text: "の最中[さいちゅう]に", blank: true },
          { text: "壊[こわ]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses は as topic with 最中に.",
      },
    ],
  },
  {
    english: "While I was changing clothes, my younger brother opened the door.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard ている間に pattern; 弟 implies my younger brother.",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 最中に to emphasize right in the middle of changing clothes.",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]の弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicitly says 私の弟 for 'my younger brother.'",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit 私の弟 with 最中に emphasis.",
      },
      {
        segments: [
          { text: "私[わたし]の" },
          { text: "着替[きが]えの間[あいだ]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using the noun 着替え with の間に.",
      },
      {
        segments: [
          { text: "私[わたし]の" },
          { text: "着替[きが]えの最中[さいちゅう]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using the noun 着替え with の最中に.",
      },
      {
        segments: [
          { text: "私[わたし]が服[ふく]を" },
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Specifies 服を着替える, 'changing clothes.'",
      },
      {
        segments: [
          { text: "私[わたし]が服[ふく]を" },
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Specifies 服を着替える with 最中に.",
      },
      {
        segments: [
          { text: "弟[おとうと]が、私[わたし]が" },
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、ドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with the main subject first.",
      },
      {
        segments: [
          { text: "弟[おとうと]が、私[わたし]が" },
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order using 最中に.",
      },
      {
        segments: [
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops the subject 私; natural when context is clear.",
      },
      {
        segments: [
          { text: "着替[きが]える", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私 and uses 最中に for 'right in the middle of.'",
      },
      {
        segments: [
          { text: "私[わたし]が着替[きが]えを" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 着替えをしている instead of 着替えている.",
      },
      {
        segments: [
          { text: "私[わたし]が着替[きが]えを" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、弟[おとうと]がドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 着替えをしている with 最中に.",
      },
    ],
  },
  {
    english: "While I was looking for my key, my dog opened the refrigerator.",
    hint: "Express “while I was looking for...” as an action in progress.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation using 鍵を探している間に",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 最中に to emphasize right in the middle of looking for the key",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、犬[いぬ]が 私[わたし]の 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Interpreting 'my dog opened my refrigerator'; different placement of 私の",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、犬[いぬ]が 私[わたし]の 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に version with 私の modifying 冷蔵庫",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 私[わたし]の 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicitly marking both 'my dog' and 'my refrigerator'",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 私[わたし]の 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に version with both possessives explicit",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]は 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using は for the dog as the topic",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]は 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に with は for topicalizing the dog",
      },
      {
        segments: [
          { text: "鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting the subject of the looking action, which is natural from context",
      },
      {
        segments: [
          { text: "鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に with omitted subject for the looking action",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、冷蔵庫[れいぞうこ]を 私[わたし]の 犬[いぬ]が" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order in the main clause, object before subject",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、冷蔵庫[れいぞうこ]を 私[わたし]の 犬[いぬ]が" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に with reversed main-clause word order",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 冷蔵庫[れいぞうこ]の ドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Specifying that the dog opened the refrigerator door",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 冷蔵庫[れいぞうこ]の ドアを" },
          { text: "開[あ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に version specifying the refrigerator door",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]けて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using てしまう to add a sense that it happened unexpectedly/unfortunately",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "探[さが]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]の 犬[いぬ]が 冷蔵庫[れいぞうこ]を" },
          { text: "開[あ]けて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に with てしまう for an unexpected/unfortunate nuance",
      },
    ],
  },
  {
    english: "While it is still bright outside, let's take pictures of the cherry blossoms.",
    answers: [
      {
        segments: [
          { text: "外[そと]が まだ " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]の 写真[しゃしん]を " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard phrasing with 桜の写真を撮る",
      },
      {
        segments: [
          { text: "まだ 外[そと]が " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]の 写真[しゃしん]を " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves まだ before 外が for a slightly different word order",
      },
      {
        segments: [
          { text: "外[そと]が まだ " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]を " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 桜を撮る instead of 桜の写真を撮る",
      },
      {
        segments: [
          { text: "まだ 外[そと]が " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]を " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines まだ-first word order with 桜を撮る",
      },
      {
        segments: [
          { text: "外[そと]が まだ " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]を 写真[しゃしん]に " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the natural phrasing 桜を写真に撮る",
      },
      {
        segments: [
          { text: "まだ 外[そと]が " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]を 写真[しゃしん]に " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 桜を写真に撮る with まだ at the beginning",
      },
      {
        segments: [
          { text: "桜[さくら]の 写真[しゃしん]を、外[そと]が まだ " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: " " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order, placing the object first",
      },
      {
        segments: [
          { text: "桜[さくら]を、外[そと]が まだ " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: " " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object-first word order with 桜を撮る",
      },
      {
        segments: [
          { text: "外[そと]が まだ " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]の 写真[しゃしん]を " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ておく to mean take the photos while we still can",
      },
      {
        segments: [
          { text: "まだ 外[そと]が " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]の 写真[しゃしん]を " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ておく phrasing with まだ at the beginning",
      },
      {
        segments: [
          { text: "外[そと]が まだ " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]を " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ておく with 桜を撮る",
      },
      {
        segments: [
          { text: "まだ 外[そと]が " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、桜[さくら]を " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ておく with 桜を撮る and まだ-first word order",
      },
      {
        segments: [
          { text: "外[そと]が まだ " },
          { text: "明[あか]るい 間[あいだ]に", blank: true },
          { text: "、写真[しゃしん]を " },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omits 桜 as understood from context; still natural if cherry blossoms are already the topic",
      },
    ],
  },
  {
    english: "While I was taking the final exam, my stomach started to hurt.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が 期末試験[きまつしけん]を" },
          { text: "受[う]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation using Verbている間に with 期末試験を受ける.",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]を" },
          { text: "受[う]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、私[わたし]は おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Starts with the exam phrase; includes 私は as experiencer.",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]を" },
          { text: "受[う]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 最中に to emphasize right in the middle of taking the exam.",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]を" },
          { text: "受[う]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]は おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に version with exam phrase first and 私は as experiencer.",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]" },
          { text: "の 間[あいだ]に", blank: true },
          { text: "、私[わたし]は おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using Nounの間に: during the final exam.",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]" },
          { text: "の 最中[さいちゅう]に", blank: true },
          { text: "、おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using Nounの最中に for 'in the midst of the final exam'.",
      },
      {
        segments: [
          { text: "私[わたし]が 期末試験[きまつしけん]を" },
          { text: "受[う]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 間[あいだ]に", blank: true },
          { text: "、おなかが 痛[いた]く " },
          { text: "なり 始[はじ]める", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses なり始める for 'started to become hurt/painful'.",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]を" },
          { text: "受[う]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: " 最中[さいちゅう]に", blank: true },
          { text: "、おなかが 痛[いた]く " },
          { text: "なり 始[はじ]める", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に plus なり始める emphasizes onset right in the middle.",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]" },
          { text: "の 最中[さいちゅう]に", blank: true },
          { text: "、私[わたし]は おなかが 痛[いた]く " },
          { text: "なり 始[はじ]める", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Nounの最中に with explicit 'started to hurt' wording.",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]" },
          { text: "の 間[あいだ]に", blank: true },
          { text: "、私[わたし]は おなかが 痛[いた]く " },
          { text: "なり 始[はじ]める", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Nounの間に with なり始める.",
      },
    ],
  },
  {
    english: "Please put the birthday present between the sofa and the curtain.",
    hint: "sofa = ソファ; curtain = カーテン; present = プレゼント",
    answers: [
      {
        segments: [
          { text: "ソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、誕生日[たんじょうび]プレゼントを置[お]いてください" },
        ],
        notes: "Standard word order: location first, using 誕生日プレゼント",
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]プレゼントをソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "置[お]いてください" },
        ],
        notes: "Object first, then location",
      },
      {
        segments: [
          { text: "ソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、誕生日[たんじょうび]のプレゼントを置[お]いてください" },
        ],
        notes: "Using 誕生日のプレゼント with の",
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]のプレゼントをソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "置[お]いてください" },
        ],
        notes: "Object-first order with 誕生日のプレゼント",
      },
      {
        segments: [
          { text: "ソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、誕生日[たんじょうび]プレゼントを入[い]れてください" },
        ],
        notes: "Using 入れる for putting/placing into the space between them",
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]プレゼントをソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "入[い]れてください" },
        ],
        notes: "Object-first order with 入れる",
      },
      {
        segments: [
          { text: "ソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、誕生日[たんじょうび]のプレゼントを入[い]れてください" },
        ],
        notes: "Using 入れる with 誕生日のプレゼント",
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]のプレゼントをソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "入[い]れてください" },
        ],
        notes: "Object-first order with 入れる and 誕生日のプレゼント",
      },
      {
        segments: [
          { text: "ソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、誕生日[たんじょうび]プレゼントを置[お]いておいてください" },
        ],
        notes: "Using ておく nuance: put it there and leave it there/prep it",
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]プレゼントをソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "置[お]いておいてください" },
        ],
        notes: "Object-first order with 置いておいてください",
      },
      {
        segments: [
          { text: "ソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、誕生日[たんじょうび]のプレゼントを置[お]いておいてください" },
        ],
        notes: "置いておいてください with 誕生日のプレゼント",
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]のプレゼントをソファとカーテン" },
          { text: "の間[あいだ]に", blank: true },
          { text: "置[お]いておいてください" },
        ],
        notes: "Object-first order with 置いておいてください and 誕生日のプレゼント",
      },
    ],
  },
  {
    english: "While I was ironing a shirt, someone called.",
    answers: [
      {
        segments: [
          { text: "私[わたし]がシャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、誰[だれ]かが電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard wording with ている間に and 誰かが電話する",
      },
      {
        segments: [
          { text: "私[わたし]がシャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かが電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 最中に to emphasize right in the middle of ironing",
      },
      {
        segments: [
          { text: "私[わたし]がシャツのアイロンがけをしている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、誰[だれ]かが電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using noun アイロンがけ with している for 'ironing'",
      },
      {
        segments: [
          { text: "シャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、誰[だれ]かが私[わたし]に電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted in the first clause; explicit 私に as call recipient",
      },
      {
        segments: [
          { text: "シャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かが私[わたし]に電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted in first clause with 最中に",
      },
      {
        segments: [
          { text: "私[わたし]がシャツの" },
          { text: "アイロンがけの間[あいだ]に", blank: true },
          { text: "、誰[だれ]かが電話[でんわ]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using the noun phrase アイロンがけ with の間に",
      },
      {
        segments: [
          { text: "私[わたし]がシャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、誰[だれ]かから電話[でんわ]がかかって" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Most idiomatic for 'someone called': 電話がかかってきた",
      },
      {
        segments: [
          { text: "私[わたし]がシャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かから電話[でんわ]がかかって" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Idiomatic 電話がかかってきた with 最中に",
      },
      {
        segments: [
          { text: "シャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、誰[だれ]かから私[わたし]に電話[でんわ]がかかって" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting 私が in the while-clause and adding recipient 私に",
      },
      {
        segments: [
          { text: "シャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かから私[わたし]に電話[でんわ]がかかって" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting 私が in the while-clause and using 最中に with recipient 私に",
      },
      {
        segments: [
          { text: "私[わたし]がシャツの" },
          { text: "アイロンがけの最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かから電話[でんわ]がかかって" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Noun + の最中に with idiomatic 電話がかかってきた",
      },
      {
        segments: [
          { text: "私[わたし]がシャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、誰[だれ]かが私[わたし]に電話[でんわ]をかけて" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 電話をかけてくる for 'someone called me'",
      },
      {
        segments: [
          { text: "私[わたし]がシャツにアイロンを" },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、誰[だれ]かが私[わたし]に電話[でんわ]をかけて" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "電話をかけてくる with 最中に",
      },
      {
        segments: [
          { text: "私[わたし]がシャツにアイロンを", blank: true },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に、", blank: true },
          { text: "誰[だれ]かから電話[でんわ]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural phrasing with 誰かから電話があった; corrected ある conjugation",
      },
      {
        segments: [
          { text: "私[わたし]がシャツにアイロンを", blank: true },
          { text: "かける", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に、", blank: true },
          { text: "誰[だれ]かから電話[でんわ]が" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "最中に plus 誰かから電話があった; corrected ある conjugation",
      },
    ],
  },
  {
    english: "While I was making curry, my younger sister ate all the apples.",
    answers: [
      {
        segments: [
          { text: "私[わたし]がカレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using ている間に; りんごを全部 for “all the apples.”",
      },
      {
        segments: [
          { text: "私[わたし]がカレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、妹[いもうと]が全部[ぜんぶ]のりんごを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 全部のりんご to emphasize “all of the apples.”",
      },
      {
        segments: [
          { text: "カレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私が; natural when the subject is clear.",
      },
      {
        segments: [
          { text: "カレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、妹[いもうと]が全部[ぜんぶ]のりんごを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私が and uses 全部のりんご.",
      },
      {
        segments: [
          { text: "私[わたし]がカレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に to mean “right in the middle of making curry.”",
      },
      {
        segments: [
          { text: "私[わたし]がカレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、妹[いもうと]が全部[ぜんぶ]のりんごを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に with 全部のりんご.",
      },
      {
        segments: [
          { text: "カレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私が and uses 最中に.",
      },
      {
        segments: [
          { text: "カレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、妹[いもうと]が全部[ぜんぶ]のりんごを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私が; 最中に plus 全部のりんご.",
      },
      {
        segments: [
          { text: "私[わたし]がカレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、私[わたし]の妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicitly says “my younger sister” with 私の妹.",
      },
      {
        segments: [
          { text: "私[わたし]がカレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、妹[いもうと]はりんごを全部[ぜんぶ]" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses は for 妹, making the younger sister the topic/contrastive subject.",
      },
      {
        segments: [
          { text: "カレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、妹[いもうと]はりんごを全部[ぜんぶ]" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私が and uses は for 妹.",
      },
      {
        segments: [
          { text: "私[わたし]がカレーを" },
          { text: "作[つく]っていた間[あいだ]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses past progressive 作っていた間に to match “while I was making.”",
      },
      {
        segments: [
          { text: "カレーを" },
          { text: "作[つく]っていた間[あいだ]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past progressive 作っていた間に with 私が omitted.",
      },
      {
        segments: [
          { text: "私[わたし]がカレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 食べてしまう to convey that she ate them all up.",
      },
      {
        segments: [
          { text: "カレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops 私が and uses 食べてしまう for “ate them all up.”",
      },
      {
        segments: [
          { text: "私[わたし]がカレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に plus 食べてしまう to stress the interruption/result.",
      },
      {
        segments: [
          { text: "カレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、妹[いもうと]がりんごを全部[ぜんぶ]" },
          { text: "食[た]べて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitted 私が; 最中に with 食べてしまう.",
      },
    ],
  },
  {
    english: "Please pay the rent sometime between the first and the fifth of next month.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]の一日[ついたち]から五日[いつか]まで" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、家賃[やちん]を払[はら]ってください" },
        ],
        notes: "Standard wording with 来月の一日から五日までの間に",
      },
      {
        segments: [
          { text: "来月[らいげつ]一日[ついたち]から五日[いつか]まで" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、家賃[やちん]を払[はら]ってください" },
        ],
        notes: "Omitting の after 来月; natural date expression",
      },
      {
        segments: [
          { text: "来月[らいげつ]の一日[ついたち]から五日[いつか]まで" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、家賃[やちん]は払[はら]ってください" },
        ],
        notes: "Topicalizing 家賃 with は",
      },
      {
        segments: [
          { text: "家賃[やちん]を、来月[らいげつ]の一日[ついたち]から五日[いつか]まで" },
          { text: "の間[あいだ]に", blank: true },
          { text: "払[はら]ってください" },
        ],
        notes: "Reversed word order: object first",
      },
      {
        segments: [
          { text: "家賃[やちん]は、来月[らいげつ]の一日[ついたち]から五日[いつか]まで" },
          { text: "の間[あいだ]に", blank: true },
          { text: "払[はら]ってください" },
        ],
        notes: "Object topicalized at the beginning with は",
      },
      {
        segments: [
          { text: "来月[らいげつ]の一日[ついたち]から五日[いつか]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、家賃[やちん]を払[はら]ってください" },
        ],
        notes: "Using から〜の間に without まで; concise natural wording",
      },
      {
        segments: [
          { text: "来月[らいげつ]一日[ついたち]から五日[いつか]" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、家賃[やちん]を払[はら]ってください" },
        ],
        notes: "Omitting の after 来月 and まで after 五日",
      },
      {
        segments: [
          { text: "来月[らいげつ]の一日[ついたち]から五日[いつか]まで" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、家賃[やちん]を払[はら]っておいてください" },
        ],
        notes: "Using ておいてください to mean please have it paid during that period",
      },
      {
        segments: [
          { text: "来月[らいげつ]一日[ついたち]から五日[いつか]まで" },
          { text: "の間[あいだ]に", blank: true },
          { text: "、家賃[やちん]を払[はら]っておいてください" },
        ],
        notes: "ておいてください with omitted の after 来月",
      },
    ],
  },
  {
    english: "Right in the middle of the wedding, a baby cried.",
    answers: [
      {
        segments: [
          { text: "結婚式[けっこんしき]の" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、赤[あか]ちゃんが" },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Most direct translation using Noun の最中に for “right in the middle of the wedding.”",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが、結婚式[けっこんしき]の" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、" },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered sentence with the subject first.",
      },
      {
        segments: [
          { text: "結婚式[けっこんしき]を" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、赤[あか]ちゃんが" },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using Verbている最中に instead of Noun の最中に.",
      },
      {
        segments: [
          { text: "結婚式[けっこんしき]の" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、赤[あか]ちゃんが泣[な]いて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses てしまう to express that the baby ended up crying, which sounds natural for an interruption.",
      },
      {
        segments: [
          { text: "結婚式[けっこんしき]の" },
          { text: "間[あいだ]に", blank: true },
          { text: "、赤[あか]ちゃんが" },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses の間に for “during the wedding,” slightly less emphatic than 最中に.",
      },
    ],
  },
  {
    english: "While the classroom is quiet, please explain the secret.",
    answers: [
      {
        segments: [
          { text: "教室[きょうしつ]が" },
          { text: "静[しず]かな間[あいだ]に", blank: true },
          { text: "、秘密[ひみつ]を説明[せつめい]してください" },
        ],
        notes: "Standard translation using the な-adjective 静かな + 間に.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]が" },
          { text: "静[しず]かな間[あいだ]に", blank: true },
          { text: "、秘密[ひみつ]について説明[せつめい]してください" },
        ],
        notes: "Uses について with 説明する: 'explain about the secret.'",
      },
      {
        segments: [
          { text: "秘密[ひみつ]を、教室[きょうしつ]が" },
          { text: "静[しず]かな間[あいだ]に", blank: true },
          { text: "説明[せつめい]してください" },
        ],
        notes: "Reversed word order, placing the object first.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の中[なか]が" },
          { text: "静[しず]かな間[あいだ]に", blank: true },
          { text: "、秘密[ひみつ]を説明[せつめい]してください" },
        ],
        notes: "Specifies 'inside the classroom' as the place that is quiet.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]で皆[みんな]が" },
          { text: "静[しず]かに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、秘密[ひみつ]を説明[せつめい]してください" },
        ],
        notes: "Uses ている間に with 皆が静かにしている, expressing the classroom being quiet via everyone being quiet.",
      },
      {
        segments: [
          { text: "皆[みんな]が教室[きょうしつ]で" },
          { text: "静[しず]かに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、秘密[ひみつ]を説明[せつめい]してください" },
        ],
        notes: "Same ている間に structure with the location placed after the subject.",
      },
      {
        segments: [
          { text: "教室[きょうしつ]で皆[みんな]が" },
          { text: "静[しず]かに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "間[あいだ]に", blank: true },
          { text: "、秘密[ひみつ]について説明[せつめい]してください" },
        ],
        notes: "Uses について with 説明する in the ている間に version.",
      },
    ],
  },
  {
    english: "I'm right in the middle of translating a letter of recommendation now, so please wait a little.",
    answers: [
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、少[すこ]し待[ま]ってください" },
        ],
        notes: "Uses Verbている＋最中に; expresses “please wait while I’m right in the middle of translating.”",
      },
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ちょっと待[ま]ってください" },
        ],
        notes: "Uses ちょっと instead of 少し for a more conversational “a little.”",
      },
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、少[すこ]し待[ま]っていてください" },
        ],
        notes: "Uses 待っていてください to emphasize “please remain waiting” while I am in the middle of translating.",
      },
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ちょっと待[ま]っていてください" },
        ],
        notes: "Conversational ちょっと plus 待っていてください.",
      },
      {
        segments: [
          { text: "私[わたし]が今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、少[すこ]し待[ま]ってください" },
        ],
        notes: "Includes 私が to make the subject explicit.",
      },
      {
        segments: [
          { text: "今[いま]、私[わたし]が推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、少[すこ]し待[ま]ってください" },
        ],
        notes: "Explicit subject with 今 placed before 私が.",
      },
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、少[すこ]し待[ま]っていただけませんか" },
        ],
        notes: "Politer request using 待っていただけませんか.",
      },
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ちょっと待[ま]っていただけませんか" },
        ],
        notes: "Politer request with conversational ちょっと.",
      },
      {
        segments: [
          { text: "今[いま]は、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、少[すこ]し待[ま]ってください" },
        ],
        notes: "Adds は to 今 to emphasize “right now.”",
      },
      {
        segments: [
          { text: "今[いま]は、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ちょっと待[ま]ってください" },
        ],
        notes: "今は plus conversational ちょっと.",
      },
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "間[あいだ]に", blank: true },
          { text: "、少[すこ]し待[ま]ってください" },
        ],
        notes: "Uses ている間に to mean “while I am translating.”",
      },
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "間[あいだ]に", blank: true },
          { text: "、ちょっと待[ま]ってください" },
        ],
        notes: "ている間に with ちょっと for a more conversational “a little.”",
      },
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "間[あいだ]に", blank: true },
          { text: "、少[すこ]し待[ま]っていてください" },
        ],
        notes: "ている間に plus 待っていてください.",
      },
      {
        segments: [
          { text: "今[いま]、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "間[あいだ]に", blank: true },
          { text: "、ちょっと待[ま]っていてください" },
        ],
        notes: "ている間に plus conversational ちょっと and 待っていてください.",
      },
      {
        segments: [
          { text: "今[いま]ちょうど、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、少[すこ]し待[ま]ってください" },
        ],
        notes: "Adds ちょうど to emphasize “right in the middle.”",
      },
      {
        segments: [
          { text: "今[いま]ちょうど、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ちょっと待[ま]ってください" },
        ],
        notes: "Adds ちょうど and uses ちょっと.",
      },
      {
        segments: [
          { text: "今[いま]ちょうど、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "間[あいだ]に", blank: true },
          { text: "、少[すこ]し待[ま]ってください" },
        ],
        notes: "Uses ている間に with ちょうど.",
      },
      {
        segments: [
          { text: "今[いま]ちょうど、推薦状[すいせんじょう]を訳[やく]している" },
          { text: "間[あいだ]に", blank: true },
          { text: "、ちょっと待[ま]ってください" },
        ],
        notes: "ている間に with ちょうど and ちょっと.",
      },
    ],
  },
  {
    english: "While I was saving money, the price of gasoline got higher.",
    hint: "gasoline = ガソリン",
    answers: [
      {
        segments: [
          { text: "私[わたし]が お金[かね]を ためている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、ガソリンの 値段[ねだん]が 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using お金をためる and ガソリンの値段",
      },
      {
        segments: [
          { text: "私[わたし]が 貯金[ちょきん]している" },
          { text: "間[あいだ]に", blank: true },
          { text: "、ガソリンの 値段[ねだん]が 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 貯金する for “save money”",
      },
      {
        segments: [
          { text: "私[わたし]が お金[かね]を ためている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、ガソリンが 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural shorthand: ガソリンが高くなる means gasoline became expensive",
      },
      {
        segments: [
          { text: "私[わたし]が 貯金[ちょきん]している" },
          { text: "間[あいだ]に", blank: true },
          { text: "、ガソリンが 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 貯金する and shorthand ガソリンが高くなる",
      },
      {
        segments: [
          { text: "ガソリンの 値段[ねだん]が、私[わたし]が お金[かね]を ためている" },
          { text: "間[あいだ]に", blank: true },
          { text: " 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order, putting the price change first",
      },
      {
        segments: [
          { text: "ガソリンが、私[わたし]が お金[かね]を ためている" },
          { text: "間[あいだ]に", blank: true },
          { text: " 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with shorthand ガソリンが高くなる",
      },
      {
        segments: [
          { text: "ガソリンの 値段[ねだん]が、私[わたし]が 貯金[ちょきん]している" },
          { text: "間[あいだ]に", blank: true },
          { text: " 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with 貯金する",
      },
      {
        segments: [
          { text: "私[わたし]が お金[かね]を ためている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ガソリンの 値段[ねだん]が 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に to emphasize it happened in the midst of saving money",
      },
      {
        segments: [
          { text: "私[わたし]が 貯金[ちょきん]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ガソリンの 値段[ねだん]が 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に with 貯金する",
      },
      {
        segments: [
          { text: "私[わたし]が お金[かね]を ためている" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ガソリンが 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に with shorthand ガソリンが高くなる",
      },
      {
        segments: [
          { text: "私[わたし]が 貯金[ちょきん]している" },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、ガソリンが 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 最中に with 貯金する and shorthand ガソリンが高くなる",
      },
      {
        segments: [
          { text: "貯金[ちょきん]の" },
          { text: "間[あいだ]に", blank: true },
          { text: "、ガソリンの 値段[ねだん]が 高[たか]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses noun + の間に with 貯金",
      },
    ],
  },
  {
    english: "Right in the middle of watching anime, the internet stopped.",
    hint: "anime = アニメ; internet = インターネット",
    answers: [
      {
        segments: [
          { text: "アニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが" },
          { text: "落[お]ちる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation using 見ている最中に and natural expression インターネットが落ちる",
      },
      {
        segments: [
          { text: "アニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが" },
          { text: "止[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 止まる for 'stopped' instead of 落ちる",
      },
      {
        segments: [
          { text: "アニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが止[と]まって" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adds てしまう to emphasize the unfortunate interruption",
      },
      {
        segments: [
          { text: "アニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが使[つか]えなく" },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Expresses the internet stopped working as 'became unusable'",
      },
      {
        segments: [
          { text: "私[わたし]がアニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが" },
          { text: "落[お]ちる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Makes the watcher explicit with 私が",
      },
      {
        segments: [
          { text: "私[わたし]がアニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが" },
          { text: "止[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit subject with 止まる for 'stopped'",
      },
      {
        segments: [
          { text: "アニメを見[み]ている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、インターネットが" },
          { text: "止[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 間に instead of 最中に; less emphatic but valid during timeframe",
      },
      {
        segments: [
          { text: "アニメを見[み]ている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、インターネットが" },
          { text: "落[お]ちる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 間に with インターネットが落ちる",
      },
      {
        segments: [
          { text: "アニメを見[み]ている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、インターネットが止[と]まって" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 間に plus てしまう for the unfortunate result",
      },
      {
        segments: [
          { text: "アニメを見[み]ている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、インターネットが使[つか]えなく" },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 間に and expresses it as the internet became unusable",
      },
      {
        segments: [
          { text: "アニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが" },
          { text: "切[き]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 切れる, a natural way to say the internet connection was cut off",
      },
      {
        segments: [
          { text: "アニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが切[き]れて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 切れてしまう to emphasize the unfortunate disconnection",
      },
      {
        segments: [
          { text: "アニメを見[み]ている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、インターネットが" },
          { text: "切[き]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 間に with 切れる",
      },
      {
        segments: [
          { text: "アニメを見[み]ている" },
          { text: "間[あいだ]に", blank: true },
          { text: "、インターネットが切[き]れて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 間に with 切れてしまう",
      },
      {
        segments: [
          { text: "ちょうどアニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが" },
          { text: "止[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adds ちょうど to explicitly convey 'right' in the middle",
      },
      {
        segments: [
          { text: "ちょうどアニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが切[き]れて" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ちょうど and 切れてしまう for an unfortunate disconnection",
      },
      {
        segments: [
          { text: "アニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが使[つか]えなくなって" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Combines 'became unusable' with てしまう",
      },
      {
        segments: [
          { text: "ちょうどアニメを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "最中[さいちゅう]に", blank: true },
          { text: "、インターネットが使[つか]えなくなって" },
          { text: "しまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit ちょうど plus unfortunate loss of internet access",
      },
    ],
  },
];

import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I have two bags. The big one is old.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は かばんが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "大[おお]きいのは", blank: true },
          {
            text: "古[ふる]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "大きいの refers to the big one",
      },
      {
        segments: [
          { text: "私[わたし]は かばんを 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "大[おお]きいのは", blank: true },
          {
            text: "古[ふる]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 持っている for possession",
      },
      {
        segments: [
          { text: "私[わたし]は かばんが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、" },
          { text: "大[おお]きいのは", blank: true },
          {
            text: "古[ふる]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Joined with が."
      },
      {
        segments: [
          { text: "私[わたし]は かばんを 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、" },
          { text: "大[おお]きいのは", blank: true },
          {
            text: "古[ふる]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "持っている + が."
      },
      {
        segments: [
          { text: "私[わたし]は かばんが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "大[おお]きいのは", blank: true },
          {
            text: "古[ふる]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Connected with て-form: かばんが二つあって、...",
      },
      {
        segments: [
          { text: "私[わたし]は 二[ふた]つ かばんが" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "大[おお]きいのは", blank: true },
          {
            text: "古[ふる]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Alternative ordering: 二つかばんがあります.",
      },
    ],
  },
  {
    english: "Out of these rooms, I like the quiet one the best.",
    answers: [
      {
        segments: [
          { text: "これらの 部屋[へや]の 中[なか]で、" },
          { text: "静[しず]かなの", blank: true },
          { text: "が 一番[いちばん] 好[す]き" },
          { text: "です" },
        ],
                notes:
          "Standard: この部屋の中で + 静かなの (な-adjective + の) + が一番好き",
      },
      {
        segments: [
          {
            text: "これらの 部屋[へや]の 中[なか]で 一番[いちばん] 好[す]きなのは",
          },
          { text: "静[しず]かなの", blank: true },
          { text: "です" },
        ],
                notes:
          "Reversed: the one I like best is the quiet one - 好きなのは 静かなのです (の used twice)",
      },
      {
        segments: [
          { text: "私[わたし]は これらの 部屋[へや]の 中[なか]で、" },
          { text: "静[しず]かなの", blank: true },
          { text: "が 一番[いちばん] 好[す]き" },
          { text: "です" },
        ],
                notes: "With 私は at the start",
      },
      {
        segments: [
          { text: "これらの 部屋[へや]の 中[なか]で、" },
          { text: "静[しず]かなのは", blank: true },
          { text: " 一番[いちばん] 好[す]き" },
          { text: "です" },
        ],
                notes: "Using は instead of が after 静かなの - topic/contrast marker",
      },
      {
        segments: [
          {
            text: "私[わたし]は これらの 部屋[へや]の 中[なか]で 一番[いちばん] 好[す]きなのは",
          },
          { text: "静[しず]かなの", blank: true },
          { text: "です" },
        ],
                notes:
          "Reversed structure with 私は: the one I like best is the quiet one",
      },
      {
        segments: [
          { text: "これらの 部屋[へや]の 中[なか]では、" },
          { text: "静[しず]かなの", blank: true },
          { text: "が 一番[いちばん] 好[す]き" },
          { text: "です" },
        ],
                notes: "これらの (these, plural) + 中では (with は emphasis)",
      },
      {
        segments: [
          { text: "これらの 部屋[へや]のうち、" },
          { text: "静[しず]かなの", blank: true },
          { text: "が 一番[いちばん] 好[す]き" },
          { text: "です" },
        ],
        notes: "Uses のうち for out of/among these rooms.",
      },
      {
        segments: [
          { text: "この 中[なか]で、" },
          { text: "静[しず]かなの", blank: true },
          { text: "が 一番[いちばん] 好[す]き" },
          { text: "です" },
        ],
        notes: "Natural context-based variant when the rooms are visible or already established.",
      },
      {
        segments: [
          { text: "この 中[なか]では、" },
          { text: "静[しず]かなの", blank: true },
          { text: "が 一番[いちばん] 好[す]き" },
          { text: "です" },
        ],
        notes: "Context-based variant with 中では.",
      },
      {
        segments: [
          { text: "これらの 部屋[へや]の 中[なか]で、" },
          { text: "静[しず]かなのを 一番[いちばん]", blank: true },
          { text: "気[き]に 入[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 気に入っている for having taken a liking to the quiet one.",
      },
      {
        segments: [
          { text: "これらの 部屋[へや]の 中[なか]では、" },
          { text: "静[しず]かなのを 一番[いちばん]", blank: true },
          { text: "気[き]に 入[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "気に入っている variant with 中では.",
      },
      {
        segments: [
          { text: "これらの 部屋[へや]のうち、" },
          { text: "静[しず]かなのを 一番[いちばん]", blank: true },
          { text: "気[き]に 入[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "気に入っている variant with のうち.",
      },
      {
        segments: [
          { text: "この 中[なか]で、" },
          { text: "静[しず]かなのを 一番[いちばん]", blank: true },
          { text: "気[き]に 入[い]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Context-based 気に入っている variant.",
      },
    ],
  },
  {
    english: "The scary one is that black cat over there.",
    answers: [
      {
        segments: [
          { text: "怖[こわ]いのは", blank: true },
          { text: "あの 黒[くろ]い 猫[ねこ]" },
          { text: "です" },
        ],
                notes: "Basic: 怖いのは with は particle, あの黒い猫です",
      },
      {
        segments: [
          { text: "怖[こわ]いのが", blank: true },
          { text: "あの 黒[くろ]い 猫[ねこ]" },
          { text: "です" },
        ],
                notes:
          "Using が instead of は to specifically identify/highlight the scary one",
      },
      {
        segments: [
          { text: "怖[こわ]いのは", blank: true },
          { text: "あそこの 黒[くろ]い 猫[ねこ]" },
          { text: "です" },
        ],
                notes: "あそこの (the one over there) instead of あの",
      },
      {
        segments: [
          { text: "怖[こわ]いのは", blank: true },
          { text: "あそこにいる あの 黒[くろ]い 猫[ねこ]" },
          { text: "です" },
        ],
        notes: "Fuller over-there variant: あそこにいるあの黒い猫.",
      },
      {
        segments: [
          { text: "あの 黒[くろ]い 猫[ねこ]が" },
          { text: "怖[こわ]いの", blank: true },
          { text: "です" },
        ],
        notes: "Explanatory structure: that black cat is the scary one.",
      },
    ],
  },
  {
    english: "Whose bicycle is this? Is it Miki's?",
    hint: "Miki = みき",
    answers: [
      {
        segments: [
          { text: "この 自転車[じてんしゃ]は" },
          { text: "誰[だれ]の", blank: true },
          { text: "？みきさんの？" },
        ],
      },
      {
        segments: [
          {
            text: "この 自転車[じてんしゃ]は 誰[だれ]の 自転車[じてんしゃ]ですか？みきさんの 自転車[じてんしゃ]ですか？",
          },
        ],
        register: "polite",
        notes: "With the noun 自転車 spelled out (non-dropped version)",
      },
      {
        segments: [
          { text: "この 自転車[じてんしゃ]は 誰[だれ]のですか？みきさんのですか？", blank: true },
        ],
        register: "polite",
        notes: "Polite ellipsis with 誰のですか / みきさんのですか.",
      },
      {
        segments: [
          { text: "これは 誰[だれ]の 自転車[じてんしゃ]ですか？みきさんのですか？", blank: true },
        ],
        register: "polite",
        notes: "Natural これは誰の自転車ですか with possessive の in the follow-up.",
      },
      {
        segments: [
          { text: "この 自転車[じてんしゃ]は 誰[だれ]のかな？みきさんのかな？", blank: true },
        ],
        register: "casual",
        notes: "Casual wondering style with かな.",
      },
      {
        segments: [
          { text: "この 自転車[じてんしゃ]は 誰[だれ]のだろう？みきさんのかな？", blank: true },
        ],
        register: "casual",
        notes: "Casual wondering style with だろう / かな.",
      },
    ],
  },
  {
    english: "There are two umbrellas here because it's raining. The new one is Kenji's.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "雨[あめ]だから、ここに 傘[かさ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "新[あたら]しいのは けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Two sentences; 新しいの refers back to 傘.",
      },
      {
        segments: [
          { text: "雨[あめ]ですから、ここに 傘[かさ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "新[あたら]しいのは けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Politer 雨ですから variant.",
      },
      {
        segments: [
          { text: "雨[あめ]だから、ここに 傘[かさ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "新[あたら]しいのは けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 傘が二つあって、...",
      },
      {
        segments: [
          { text: "ここに 傘[かさ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "新[あたら]しいのは けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Rain context omitted; focuses on the two umbrellas here.",
      },
    ],
  },
  {
    english: "I have two dictionaries. The old one is Hana's.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "古[ふる]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "古いの refers back to 辞書; はなさんの drops the repeated noun 辞書.",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "古[ふる]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 持っている for possession.",
      },
      {
        segments: [
          { text: "私[わたし]には 辞書[じしょ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "古[ふる]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 私には for possession.",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "古[ふる]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 辞書が二つあって、...",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "古[ふる]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 辞書を二つ持っていて、...",
      },
    ],
  },
  {
    english: "I have two cameras. The expensive one is Hana's.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "私[わたし]は カメラが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "高[たか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "高いの refers to the expensive camera.",
      },
      {
        segments: [
          { text: "私[わたし]は カメラを 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "高[たか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 持っている for possession.",
      },
      {
        segments: [
          { text: "私[わたし]には カメラが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "高[たか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 私には for possession.",
      },
      {
        segments: [
          { text: "私[わたし]は カメラが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "高[たか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: カメラが二つあって、...",
      },
      {
        segments: [
          { text: "私[わたし]は カメラを 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "高[たか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: カメラを二つ持っていて、...",
      },
      {
        segments: [
          { text: "私[わたし]は カメラが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "値段[ねだん]が 高[たか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Explicitly means expensive with 値段が高いの.",
      },
    ],
  },
  {
    english: "I have two notebooks. The cheap one is Riko's.",
    hint: "Riko = りこ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ノートが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "安[やす]いのは りこさんの", blank: true },
          { text: "です" },
        ],
        notes: "安いの refers back to ノート; りこさんの drops the repeated noun ノート.",
      },
      {
        segments: [
          { text: "私[わたし]は ノートを 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "安[やす]いのは りこさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 持っている for possession.",
      },
      {
        segments: [
          { text: "私[わたし]には ノートが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "安[やす]いのは りこさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 私には for possession.",
      },
      {
        segments: [
          { text: "私[わたし]は ノートが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "安[やす]いのは りこさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: ノートが二つあって、...",
      },
      {
        segments: [
          { text: "私[わたし]は ノートを 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "安[やす]いのは りこさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: ノートを二つ持っていて、...",
      },
      {
        segments: [
          { text: "私[わたし]は ノートが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "値段[ねだん]が 安[やす]いのは りこさんの", blank: true },
          { text: "です" },
        ],
        notes: "Explicitly means cheap in price with 値段が安いの.",
      },
    ],
  },
  {
    english: "I have two T-shirts. The white one is Sota's.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "私[わたし]は Ｔシャツが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "白[しろ]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "白いの refers back to Ｔシャツ.",
      },
      {
        segments: [
          { text: "私[わたし]は Ｔシャツを 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "白[しろ]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 持っている for possession.",
      },
      {
        segments: [
          { text: "私[わたし]には Ｔシャツが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "白[しろ]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 私には for possession.",
      },
      {
        segments: [
          { text: "私[わたし]は Ｔシャツが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "白[しろ]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: Ｔシャツが二つあって、...",
      },
      {
        segments: [
          { text: "私[わたし]は Ｔシャツを 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "白[しろ]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: Ｔシャツを二つ持っていて、...",
      },
    ],
  },
  {
    english: "There are two guitars here. The new one is Nana's.",
    hint: "Nana = なな",
    answers: [
      {
        segments: [
          { text: "ここに ギターが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "新[あたら]しいのは ななさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses ここに to avoid implying the speaker owns both guitars.",
      },
      {
        segments: [
          { text: "ここには ギターが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "新[あたら]しいのは ななさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses ここには for the location/topic.",
      },
      {
        segments: [
          { text: "ここに ギターが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "新[あたら]しいのは ななさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: ギターが二つあって、...",
      },
      {
        segments: [
          { text: "この 部屋[へや]に ギターが 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "新[あたら]しいのは ななさんの", blank: true },
          { text: "です" },
        ],
        notes: "Natural explicit location variant: in this room.",
      },
    ],
  },
  {
    english: "I have two wallets. The cheap one is mine.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "安[やす]いのは 私[わたし]の", blank: true },
          { text: "です" },
        ],
        notes: "安いの refers back to 財布; 私の drops the repeated noun 財布.",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "安[やす]いのは 私[わたし]の", blank: true },
          { text: "です" },
        ],
        notes: "Uses 持っている for possession.",
      },
      {
        segments: [
          { text: "私[わたし]には 財布[さいふ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "安[やす]いのは 私[わたし]の", blank: true },
          { text: "です" },
        ],
        notes: "Uses 私には for possession.",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "安[やす]いのは 私[わたし]の", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 財布が二つあって、...",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "安[やす]いのは 私[わたし]の", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 財布を二つ持っていて、...",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "値段[ねだん]が 安[やす]いのは 私[わたし]の", blank: true },
          { text: "です" },
        ],
        notes: "Explicitly means cheap in price with 値段が安いの.",
      },
    ],
  },
  {
    english: "I have two watches. The expensive one is Sota's.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 時計[とけい]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "高[たか]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "高いの refers to the expensive watch.",
      },
      {
        segments: [
          { text: "私[わたし]は 時計[とけい]を 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "高[たか]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 持っている for possession.",
      },
      {
        segments: [
          { text: "私[わたし]には 時計[とけい]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "高[たか]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 私には for possession.",
      },
      {
        segments: [
          { text: "私[わたし]は 時計[とけい]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "高[たか]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 時計が二つあって、...",
      },
      {
        segments: [
          { text: "私[わたし]は 時計[とけい]を 二[ふた]つ 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "高[たか]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 時計を二つ持っていて、...",
      },
      {
        segments: [
          { text: "私[わたし]は 時計[とけい]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "値段[ねだん]が 高[たか]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Explicitly means expensive with 値段が高いの.",
      },
      {
        segments: [
          { text: "私[わたし]は 時計[とけい]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "高[たか]いのが そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Identifying variant with が after 高いの.",
      },
      {
        segments: [
          { text: "私[わたし]は 腕時計[うでどけい]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "高[たか]いのは そうたさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 腕時計 to specify wristwatches.",
      },
    ],
  },
  {
    english: "There are two cars in the garage. The fast one is my older brother's.",
    hint: "garage = 車庫",
    answers: [
      {
        segments: [
          { text: "車庫[しゃこ]に 車[くるま]が 二台[にだい]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "速[はや]いのは 兄[あに]の", blank: true },
          { text: "です" },
        ],
        notes: "Uses 車庫 and the natural vehicle counter 二台.",
      },
      {
        segments: [
          { text: "車庫[しゃこ]には 車[くるま]が 二台[にだい]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "速[はや]いのは 兄[あに]の", blank: true },
          { text: "です" },
        ],
        notes: "Uses 車庫には for the location/topic.",
      },
      {
        segments: [
          { text: "車庫[しゃこ]に 車[くるま]が 二台[にだい]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "速[はや]いのは 兄[あに]の", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 車が二台あって、...",
      },
      {
        segments: [
          { text: "車庫[しゃこ]に 車[くるま]が 二[ふた]つ" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "速[はや]いのは 兄[あに]の", blank: true },
          { text: "です" },
        ],
        notes: "Learner-friendly counter variant with 二つ.",
      },
    ],
  },
  {
    english: "There are two pens on the desk. The red one is Hana's.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に ペンが 二本[にほん]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "赤[あか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 机の上 and the natural long-object counter 二本.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]には ペンが 二本[にほん]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "赤[あか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 机の上には for the location/topic.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に ペンが 二本[にほん]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "赤[あか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: ペンが二本あって、...",
      },
      {
        segments: [
          { text: "ここに ペンが 二本[にほん]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "赤[あか]いのは はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Contextual ここに variant.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に ペンが 二本[にほん]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "赤[あか]いのが はなさんの", blank: true },
          { text: "です" },
        ],
        notes: "Identifying variant with が after 赤いの.",
      },
    ],
  },
  {
    english: "There are two books on the desk. The interesting one is Kenji's.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 本[ほん]が 二冊[にさつ]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "面白[おもしろ]いのは けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 机の上 and the natural book counter 二冊.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]には 本[ほん]が 二冊[にさつ]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "面白[おもしろ]いのは けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 机の上には for the location/topic.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 本[ほん]が 二冊[にさつ]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "面白[おもしろ]いのは けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 本が二冊あって、...",
      },
      {
        segments: [
          { text: "ここに 本[ほん]が 二冊[にさつ]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "面白[おもしろ]いのは けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Contextual ここに variant.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 本[ほん]が 二冊[にさつ]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "面白[おもしろ]いのが けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Identifying variant with が after 面白いの.",
      },
    ],
  },
  {
    english: "Which hat is Sota's, the black one or the white one?",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんの 帽子[ぼうし]は どれですか。" },
          { text: "黒[くろ]いのですか、白[しろ]いのですか", blank: true },
        ],
        register: "polite",
        notes: "Uses 黒いの / 白いの to ask which hat is Sota's.",
      },
      {
        segments: [
          { text: "そうたさんの 帽子[ぼうし]は どれ。" },
          { text: "黒[くろ]いの、白[しろ]いの", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to the どれ question.",
      },
      {
        segments: [
          { text: "そうたさんの 帽子[ぼうし]は" },
          { text: "黒[くろ]いのですか、白[しろ]いのですか", blank: true },
        ],
        register: "polite",
        notes: "Directly asks whether Sota's hat is the black one or the white one.",
      },
      {
        segments: [
          { text: "そうたさんの 帽子[ぼうし]は" },
          { text: "黒[くろ]いの、白[しろ]いの", blank: true },
        ],
        register: "casual",
        notes: "Casual direct alternative question.",
      },
      {
        segments: [
          { text: "そうたさんのは どれですか。" },
          { text: "黒[くろ]いのですか、白[しろ]いのですか", blank: true },
        ],
        register: "polite",
        notes: "Drops 帽子 after そうたさんの when context is clear.",
      },
      {
        segments: [
          { text: "そうたさんの 帽子[ぼうし]は どっちですか。" },
          { text: "黒[くろ]いのですか、白[しろ]いのですか", blank: true },
        ],
        register: "polite",
        notes: "Uses どっち for a two-choice question.",
      },
      {
        segments: [
          { text: "そうたさんの 帽子[ぼうし]は どっち。" },
          { text: "黒[くろ]いの、白[しろ]いの", blank: true },
        ],
        register: "casual",
        notes: "Casual どっち variant.",
      },
    ],
  },
  {
    english: "There are two cats in the house. The cute one is Nana's.",
    hint: "Nana = なな",
    answers: [
      {
        segments: [
          { text: "家[いえ]に 猫[ねこ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "かわいいのは ななさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 家に and 二匹 for cats.",
      },
      {
        segments: [
          { text: "家[いえ]には 猫[ねこ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "かわいいのは ななさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 家には for the location/topic.",
      },
      {
        segments: [
          { text: "家[いえ]に 猫[ねこ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "かわいいのは ななさんの", blank: true },
          { text: "です" },
        ],
        notes: "Connected with て-form: 猫が二匹いて、...",
      },
      {
        segments: [
          { text: "ここに 猫[ねこ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "かわいいのは ななさんの", blank: true },
          { text: "です" },
        ],
        notes: "Contextual ここに variant.",
      },
      {
        segments: [
          { text: "家[いえ]に 猫[ねこ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "かわいいのが ななさんの", blank: true },
          { text: "です" },
        ],
        notes: "Identifying variant with が after かわいいの.",
      },
    ],
  },
  {
    english:
      "I have two books. The interesting one is Kenji's... wait, actually the boring one is Kenji's.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 本[ほん]が 二冊[にさつ]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "面白[おもしろ]いのは けんじさんのです。あ、違[ちが]います。つまらないのが けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Self-correction with あ、違います; uses 二冊 for books.",
      },
      {
        segments: [
          { text: "私[わたし]は 本[ほん]が 二冊[にさつ]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "面白[おもしろ]いのは けんじさんのです。いや、つまらないのが けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Self-correction with いや.",
      },
      {
        segments: [
          { text: "私[わたし]は 本[ほん]が 二冊[にさつ]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "面白[おもしろ]いのは けんじさんのじゃなくて、つまらないのが けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses じゃなくて to express actually not the interesting one, but the boring one.",
      },
      {
        segments: [
          { text: "本[ほん]が 二冊[にさつ]" },
          {
            text: "ある",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "面白[おもしろ]いのは けんじさんのです。あ、違[ちが]います。つまらないのが けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Dropped 私は.",
      },
      {
        segments: [
          { text: "私[わたし]は 本[ほん]を 二冊[にさつ] 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "面白[おもしろ]いのは けんじさんのです。あ、違[ちが]います。つまらないのが けんじさんの", blank: true },
          { text: "です" },
        ],
        notes: "Uses 持っている for possession.",
      },
    ],
  },
  {
    english: "Which bicycle is Riko's, the new one or the old one?",
    hint: "Riko = りこ",
    answers: [
      {
        segments: [
          { text: "りこさんの 自転車[じてんしゃ]は どれですか。" },
          { text: "新[あたら]しいのですか、古[ふる]いのですか", blank: true },
        ],
        register: "polite",
        notes: "Uses 新しいの / 古いの to ask which bicycle is Riko's.",
      },
      {
        segments: [
          { text: "りこさんの 自転車[じてんしゃ]は どれ。" },
          { text: "新[あたら]しいの、古[ふる]いの", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to the どれ question.",
      },
      {
        segments: [
          { text: "りこさんの 自転車[じてんしゃ]は" },
          { text: "新[あたら]しいのですか、古[ふる]いのですか", blank: true },
        ],
        register: "polite",
        notes: "Directly asks whether Riko's bicycle is the new one or the old one.",
      },
      {
        segments: [
          { text: "りこさんの 自転車[じてんしゃ]は" },
          { text: "新[あたら]しいの、古[ふる]いの", blank: true },
        ],
        register: "casual",
        notes: "Casual direct alternative question.",
      },
      {
        segments: [
          { text: "りこさんのは どれですか。" },
          { text: "新[あたら]しいのですか、古[ふる]いのですか", blank: true },
        ],
        register: "polite",
        notes: "Drops 自転車 after りこさんの when context is clear.",
      },
      {
        segments: [
          { text: "りこさんの 自転車[じてんしゃ]は どっちですか。" },
          { text: "新[あたら]しいのですか、古[ふる]いのですか", blank: true },
        ],
        register: "polite",
        notes: "Uses どっち for a two-choice question.",
      },
      {
        segments: [
          { text: "りこさんの 自転車[じてんしゃ]は どっち。" },
          { text: "新[あたら]しいの、古[ふる]いの", blank: true },
        ],
        register: "casual",
        notes: "Casual どっち variant.",
      },
    ],
  },
  {
    english:
      "At Sota's house, there are two dogs. I want to play with the friendly one, not the scary one.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんの 家[いえ]に 犬[いぬ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "やさしいのと 遊[あそ]びたいです。怖[こわ]いのとは 遊[あそ]びたくないです", blank: true },
        ],
        register: "polite",
        notes: "Uses やさしいの / 怖いの to refer to the two dogs.",
      },
      {
        segments: [
          { text: "そうたさんの 家[いえ]には 犬[いぬ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "やさしいのと 遊[あそ]びたいです。怖[こわ]いのとは 遊[あそ]びたくないです", blank: true },
        ],
        register: "polite",
        notes: "Uses 家には for the location/topic.",
      },
      {
        segments: [
          { text: "そうたさんの 家[いえ]に 犬[いぬ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、" },
          { text: "やさしいのと 遊[あそ]びたいです。怖[こわ]いのとは 遊[あそ]びたくないです", blank: true },
        ],
        register: "polite",
        notes: "Connected with て-form: 犬が二匹いて、...",
      },
      {
        segments: [
          { text: "そうたさんの 家[いえ]に 犬[いぬ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "やさしいのとは 遊[あそ]びたいですが、怖[こわ]いのとは 遊[あそ]びたくないです", blank: true },
        ],
        register: "polite",
        notes: "Contrasting やさしいのとは and 怖いのとは.",
      },
      {
        segments: [
          { text: "そうたさんの 家[いえ]に 犬[いぬ]が 二[に]匹[ひき]" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "やさしいのとは 遊[あそ]びたい。でも、怖[こわ]いのとは 遊[あそ]びたくない", blank: true },
        ],
        register: "casual",
        notes: "Casual two-sentence contrast.",
      },
    ],
  },
]

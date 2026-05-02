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
          { text: "けど、" },
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
        notes: "Connected with けど instead of two separate sentences",
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
        notes: "Connected with が (conjunction) instead of separate sentences",
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
          { text: "けど、" },
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
        notes: "持っている with けど conjunction",
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
        notes: "持っている with が conjunction",
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
    ],
  },
  {
    english: "I have two umbrellas. The new one is Kenji's.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 傘[かさ]が 二[ふた]つある。" },
          { text: "新[あたら]しいのは けんじさんの", blank: true },
          { text: "です" },
        ],
                notes:
          "Two sentences: first establishes the context (I have two umbrellas), second uses い-adjective + の to refer back to the umbrella without repeating it. けんじさんの uses possessive の with the noun dropped.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 傘[かさ]が 二[ふた]つある。新[あたら]しいのは けんじさんのです",
          },
        ],
        register: "polite",
        notes: "Same wording without a sentence break",
      },
      {
        segments: [
          {
            text: "傘[かさ]が 二[ふた]つある。新[あたら]しいのは けんじさんのです",
          },
        ],
        register: "polite",
        notes: "私は dropped",
      },
      {
        segments: [
          {
            text: "私[わたし]は 傘[かさ]を 二[ふた]つ持[も]っている。新[あたら]しいのは けんじさんのです",
          },
        ],
        register: "polite",
        notes: "持っている instead of ある",
      },
      {
        segments: [
          {
            text: "傘[かさ]は 二[ふた]つある。新[あたら]しいのは けんじさんのです",
          },
        ],
        register: "polite",
        notes: "傘はtopic marker variation, 私は dropped",
      },
    ],
  },
  {
    english: "I have two dictionaries. The old one is Hana's.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]が 二[ふた]つある。" },
          { text: "古[ふる]いのは", blank: true },
          { text: " はなさんのです" },
        ],
        register: "polite",
        notes:
          "古いの refers back to 辞書; 花さんの drops the repeated noun 辞書",
      },
      {
        segments: [
          {
            text: "辞書[じしょ]が 二[ふた]つある。古[ふる]いのは はなさんのです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]には 辞書[じしょ]が 二[ふた]つある。古[ふる]いのは はなさんのです",
          },
        ],
        register: "polite",
      },
      ],
  },
  {
    english: "I have two cameras. The expensive one is Hana's.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "私[わたし]は カメラが 二[ふた]つある。" },
          { text: "高[たか]いのは はなさんのです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "カメラが 二[ふた]つある。高[たか]いのは はなさんのです" },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は カメラが 二[ふた]つある。高[たか]いのは はなさんの",
          },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "カメラが 二[ふた]つある。高[たか]いのは はなさんの" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I have two notebooks. The cheap one is Riko's.",
    hint: "Riko = りこ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ノートが 二[ふた]つある。" },
          { text: "安[やす]いのは りこさんのです", blank: true },
        ],
        register: "polite",
        notes:
          "安いの uses い-adjective + の to refer back to ノート. りこさんの with dropped ノート (possessive の).",
      },
      {
        segments: [
          { text: "ノートが 二[ふた]つある。安[やす]いのは りこさんのです" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I have two T-shirts. The white one is Sota's.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "私[わたし]は Ｔシャツが 二[ふた]つある。" },
          { text: "白[しろ]いのは そうたさんのです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は Ｔシャツが 二[ふた]つある。白[しろ]いのは そうたさんの",
          },
        ],
        register: "casual",
      },
      {
        segments: [
          {
            text: "Ｔシャツが 二[ふた]つある。白[しろ]いのは そうたさんのです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "Ｔシャツが 二[ふた]つある。白[しろ]いのは そうたさんの" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I have two guitars. The new one is Nana's.",
    hint: "Nana = なな",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ギターが 二[ふた]つある。" },
          { text: "新[あたら]しいのは ななさんのです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は ギターが 二[ふた]つある。新[あたら]しいのは ななさんの",
          },
        ],
        register: "casual",
      },
      {
        segments: [
          {
            text: "ギターが 二[ふた]つある。新[あたら]しいのは ななさんのです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "ギターが 二[ふた]つある。新[あたら]しいのは ななさんの" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I have two wallets. The cheap one is mine.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]が 二[ふた]つある。" },
          { text: "安[やす]いの", blank: true },
          { text: "は私[わたし]のです" },
        ],
        register: "polite",
        notes:
          "The blank covers the target grammar: い-adjective + の (referring back to 財布). The predicate 私のです is outside the blank as it's possessive, not the grammar focus.",
      },
      {
        segments: [
          {
            text: "財布[さいふ]が 二[ふた]つある。安[やす]いのは 私[わたし]のです",
          },
        ],
        register: "polite",
        notes: "私は dropped at start",
      },
      {
        segments: [
          {
            text: "私[わたし]は 財布[さいふ]が 二[ふた]つあります。安[やす]いのは 私[わたし]のです",
          },
        ],
        register: "polite",
        notes: "あります in the first clause",
      },
      {
        segments: [
          {
            text: "財布[さいふ]が 二[ふた]つあります。安[やす]いのは 私[わたし]のです",
          },
        ],
        register: "polite",
        notes: "あります, without 私は",
      },
    ],
  },
  {
    english: "I have two watches. The expensive one is Sota's.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 時計[とけい]が 二[ふた]つある。" },
          { text: "高[たか]いのは", blank: true },
          { text: " そうたさんのです" },
        ],
        register: "polite",
        notes:
          "The blank focuses on the い-adjective + の pattern. そうたさんのです follows the established pattern of this sentence set.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 時計[とけい]が 二[ふた]つある。高[たか]いのが そうたさんの",
          },
        ],
        register: "casual",
      },
      {
        segments: [
          {
            text: "私[わたし]は 時計[とけい]が 二[ふた]つある。高[たか]いのが そうたさんのです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は 時計[とけい]が 二[ふた]つある。高[たか]いのは そうたさんの",
          },
        ],
        register: "casual",
        notes: "Without final です"},],
  },
  {
    english: "I have two cars. The fast one is my older brother's.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 車[くるま]が 二[ふた]つある。" },
          { text: "速[はや]いのは", blank: true },
          { text: " 兄[あに]のです" },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "車[くるま]が 二[ふた]つある。速[はや]いのは 兄[あに]のです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は 車[くるま]が 二[ふた]つある。速[はや]いのは 兄[あに]の",
          },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "車[くるま]が 二[ふた]つある。速[はや]いのは 兄[あに]の" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I have two pens. The red one is Hana's.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ペンが 二[ふた]つある。" },
          { text: "赤[あか]いのは はなさんのです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "ペンが 二[ふた]つある。赤[あか]いのは はなさんのです" },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は ペンが 二[ふた]つある。赤[あか]いのは はなさんの",
          },
        ],
        register: "casual",
      },
      {
        segments: [
          {
            text: "私[わたし]は ペンが 二[ふた]つある。赤[あか]いのが はなさんのです",
          },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I have two books. The interesting one is Kenji's.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 本[ほん]が 二[ふた]つある。" },
          { text: "面白[おもしろ]いのは けんじさんのです", blank: true },
        ],
        register: "polite",
        notes:
          "The blank covers the grammar point: い-adjective + の (referring back to 本) + possession with の",
      },
      {
        segments: [
          {
            text: "本[ほん]が 二[ふた]つある。面白[おもしろ]いのは けんじさんのです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は 本[ほん]が 二[ふた]つある。面白[おもしろ]いのが けんじさんのです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "本[ほん]が 二[ふた]つある。面白[おもしろ]いのが けんじさんのです",
          },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I have two hats. Which one is Sota's?",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 帽子[ぼうし]が 二[ふた]つある。" },
          { text: "どれが そうたさんの？", blank: true },
        ],
        notes:
          "First sentence states having two hats. Second sentence uses どれ + が + possessive の to ask which one is Sota's. の drops the previously mentioned noun 帽子.",
      },
      {
        segments: [
          { text: "帽子[ぼうし]が 二[ふた]つある。どれが そうたさんの？" },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]は 帽子[ぼうし]が 二[ふた]つある。どの 帽子[ぼうし]が そうたさんの？",
          },
        ],
      },
      {
        segments: [
          {
            text: "帽子[ぼうし]が 二[ふた]つある。どの 帽子[ぼうし]が そうたさんの？",
          },
        ],
      },
    ],
  },
  {
    english: "I have two cats. The cute one is Nana's.",
    hint: "Nana = なな",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 猫[ねこ]が 二[に]匹[ひき]いる。" },
          { text: "かわいいのは ななさんのです", blank: true },
        ],
        register: "polite",
        notes: "",
      },
      {
        segments: [
          { text: "猫[ねこ]が 二[に]匹[ひき]いる。かわいいのは ななさんのです" },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は 猫[ねこ]が 二[に]匹[ひき]いる。かわいいのが ななさんのです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は 猫[ねこ]が 二[に]匹[ひき]いる。かわいいのは ななさんの",
          },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "猫[ねこ]が 二[に]匹[ひき]いる。かわいいのは ななさんの" },
        ],
        register: "casual",
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
          { text: "私[わたし]は 本[ほん]が 二[ふた]つある。" },
          {
            text: "面白[おもしろ]いのは けんじさんので、つまらないのも けんじさんのです",
            blank: true,
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "本[ほん]が 二[ふた]つある。面白[おもしろ]いのは けんじさんので、つまらないのも けんじさんのです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]は 本[ほん]が 二[ふた]つある。面白[おもしろ]いのは けんじさんのです。つまらないのも けんじさんのです",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "私[わたし]には 本[ほん]が 二[ふた]つある。面白[おもしろ]いのは けんじさんので、つまらないのも けんじさんのです",
          },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I have two bikes. Which one is Riko's?",
    hint: "Riko = りこ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 自転車[じてんしゃ]が 二[ふた]つある。" },
          { text: "どれが りこさんの", blank: true },
          { text: "？" },
        ],
      },
      {
        segments: [
          { text: "自転車[じてんしゃ]が 二[ふた]つある。どれが りこさんの？" },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]は 自転車[じてんしゃ]が 二[ふた]つある。りこさんのはどれ？",
          },
        ],
      },
      {
        segments: [
          { text: "自転車[じてんしゃ]が 二[ふた]つある。りこさんのはどれ？" },
        ],
      },
    ],
  },
  {
    english:
      "I have two dogs. The friendly one is Sota's, and the scary one is mine.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 犬[いぬ]が 二[に]匹[ひき]いる。" },
          { text: "やさしいのは そうたさんのです。" },
          { text: "怖[こわ]いのは 私[わたし]の", blank: true },
          { text: "です" },
        ],
                notes:
          "Two sentences. First establishes the noun (犬). Second and third use adjective+の(は) pattern with possessive の. Blank focuses on the scary one being mine.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 犬[いぬ]が 二[に]匹[ひき]いる。やさしいのは そうたさんのです。怖[こわ]いのは 私[わたし]のです",
          },
        ],
        register: "polite",
        notes: "Same wording with です",
      },
      {
        segments: [
          {
            text: "犬[いぬ]が 二[に]匹[ひき]いる。やさしいのは そうたさんのです。怖[こわ]いのは 私[わたし]のです",
          },
        ],
        register: "polite",
        notes: "Dropped 私は at start",
      },
      {
        segments: [
          {
            text: "私[わたし]は 犬[いぬ]が 二[に]匹[ひき]いる。やさしいのは そうたさんの。怖[こわ]いのは 私[わたし]の",
          },
        ],
        register: "casual",
        notes: "Without final です",
      },
      {
        segments: [
          {
            text: "犬[いぬ]が 二[に]匹[ひき]いる。やさしいのは そうたさんの。怖[こわ]いのは 私[わたし]の",
          },
        ],
        register: "casual",
        notes: "Without final です or 私は",
      },
    ],
  },
]

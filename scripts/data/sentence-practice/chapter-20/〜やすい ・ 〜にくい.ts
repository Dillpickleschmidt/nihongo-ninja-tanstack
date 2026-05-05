import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "The letters in this dictionary are big, so it's easy to read, but it's heavy, so it's hard to carry.",
    answers: [
      {
        segments: [
          { text: "この 辞書[じしょ]の 字[じ]は 大[おお]きいので、" },
          { text: "読[よ]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、重[おも]いので" },
          { text: "持[も]ちにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using ので and 字 as the topic",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]は 字[じ]が 大[おお]きいので、" },
          { text: "読[よ]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、重[おも]いので" },
          { text: "持[も]ちにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 辞書 as the topic and 字が大きい",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]は 字[じ]が 大[おお]きいから、" },
          { text: "読[よ]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、重[おも]いから" },
          { text: "持[も]ちにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "More conversational, using から and けど",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]の 字[じ]は 大[おお]きいから、" },
          { text: "読[よ]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、重[おも]いから" },
          { text: "持[も]ちにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational with 辞書の字 as the topic",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]は 字[じ]が 大[おお]きくて" },
          { text: "読[よ]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、重[おも]くて" },
          { text: "持[も]ちにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using adjective te-form to connect reasons",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]の 字[じ]は 大[おお]きくて" },
          { text: "読[よ]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、重[おも]くて" },
          { text: "持[も]ちにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adjective te-form with 字 as topic",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]は 文字[もじ]が 大[おお]きいので、" },
          { text: "読[よ]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、重[おも]いので" },
          { text: "持[も]ちにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 文字 instead of 字 for letters/characters",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]は 文字[もじ]が 大[おお]きいから、" },
          { text: "読[よ]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、重[おも]いから" },
          { text: "持[も]ちにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational version using 文字",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]は 文字[もじ]が 大[おお]きくて" },
          { text: "読[よ]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、重[おも]くて" },
          { text: "持[も]ちにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adjective te-form version using 文字",
      },
    ],
  },
  {
    english: "The road near the station is dark at night, so it's hard to walk.",
    answers: [
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]は 夜[よる] 暗[くら]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using ので for the reason.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]は 夜[よる] 暗[くら]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]は 夜[よる]は 暗[くら]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Marking 夜 with は to emphasize the nighttime condition.",
      },
      {
        segments: [
          { text: "夜[よる]、駅[えき]の 近[ちか]くの 道[みち]は 暗[くら]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression moved to the beginning.",
      },
      {
        segments: [
          { text: "夜[よる]は 駅[えき]の 近[ちか]くの 道[みち]が 暗[くら]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for the road as the subject, with 夜は as topic.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]が 夜[よる] 暗[くら]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for the road.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]は 夜[よる] 暗[くら]くて、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using adjective te-form 暗くて to connect the reason.",
      },
      {
        segments: [
          { text: "夜[よる]は 駅[えき]の 近[ちか]くの 道[みち]が 暗[くら]くて、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 暗くて with が and 夜は.",
      },
      {
        segments: [
          { text: "夜[よる]の 駅[えき]の 近[ちか]くの 道[みち]は 暗[くら]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夜の to modify the whole road/location phrase.",
      },
      {
        segments: [
          { text: "夜[よる]の 駅[えき]の 近[ちか]くの 道[みち]は 暗[くら]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夜の with から for the reason.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くは 夜[よる]、道[みち]が 暗[くら]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Treating the area near the station as the topic, with 道が as the subject.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くは 夜[よる]、道[みち]が 暗[くら]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Area as topic, using から for the reason.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くは 夜[よる]、道[みち]が 暗[くら]くて、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Area as topic, connecting with 暗くて.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]は 暗[くら]いので、夜[よる]は " },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Putting 夜は in the result clause to specify when walking is hard.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]は 暗[くら]いから、夜[よる]は " },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から, with 夜は in the result clause.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]は 暗[くら]くて、夜[よる]は " },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 暗くて, with nighttime specified before the predicate.",
      },
      {
        segments: [
          { text: "夜[よる]、駅[えき]の 近[ちか]くの 道[みち]は 暗[くら]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression first, using から.",
      },
      {
        segments: [
          { text: "夜[よる]、駅[えき]の 近[ちか]くの 道[みち]が 暗[くら]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression first, using が for the road as subject.",
      },
      {
        segments: [
          { text: "夜[よる]、駅[えき]の 近[ちか]くの 道[みち]が 暗[くら]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression first, using が and から.",
      },
      {
        segments: [
          { text: "夜[よる]、駅[えき]の 近[ちか]くの 道[みち]が 暗[くら]くて、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression first, using が and 暗くて.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]は 夜[よる]は 暗[くら]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Marking 夜 with は and using から.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]は 夜[よる]は 暗[くら]くて、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Marking 夜 with は and connecting with 暗くて.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]が 夜[よる] 暗[くら]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for the road and から for the reason.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 道[みち]が 夜[よる] 暗[くら]くて、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for the road and 暗くて for the reason.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 夜道[よみち]は 暗[くら]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夜道 for a road at night.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 夜道[よみち]は 暗[くら]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夜道 with から.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 夜道[よみち]は 暗[くら]くて、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夜道 and connecting with 暗くて.",
      },
    ],
  },
  {
    english: "This camera is small, so it's easy to use, but the switch is hard to press.",
    hint: "camera = カメラ; switch = スイッチ",
    answers: [
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using ので and contrastive は for the switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので for the reason",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using adjective te-form 小さくて to connect the reason",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using けど instead of が for 'but'",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から with けど",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 小さくて with けど",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the switch as the subject of the difficulty",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and が for the switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 小さくて and が for the switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using けど and が for the switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から, けど, and が for the switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 小さくて, けど, and が for the switch",
      },
      {
        segments: [
          { text: "この 小[ちい]さい カメラは " },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 小さい as a noun modifier: 'this small camera'",
      },
      {
        segments: [
          { text: "この 小[ちい]さい カメラは " },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun-modifying 小さい with けど",
      },
      {
        segments: [
          { text: "この 小[ちい]さい カメラは " },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun-modifying 小さい with が for the switch",
      },
      {
        segments: [
          { text: "この 小[ちい]さい カメラは " },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun-modifying 小さい with けど and が for the switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Splitting into two sentences with でも",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Splitting into two sentences with から and でも",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Splitting with でも after adjective te-form",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with が marking switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with から and switch marked by が",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with 小さくて and switch marked by が",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says 'this camera's switch' with ので and contrastive は",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch, using から for the reason",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch, using 小さくて",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch with けど",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch with から and けど",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch with 小さくて and けど",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says 'this camera's switch' and marks the switch with が",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch, using から and switch が",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch, using 小さくて and switch が",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch with けど and switch が",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch with から, けど, and switch が",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit camera switch with 小さくて, けど, and switch が",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using これは小さいカメラなので instead of このカメラは小さいので",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using これは小さいカメラだから",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using これは小さいカメラなので with けど",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using これは小さいカメラだから with けど",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラなので with が marking the switch",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラだから with が marking the switch",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラなので with けど and が marking the switch",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラだから with けど and が marking the switch",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラなので plus explicit camera switch",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラだから plus explicit camera switch",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラなので plus explicit camera switch and けど",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラだから plus explicit camera switch and けど",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラなので plus explicit camera switch marked with が",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラだから plus explicit camera switch marked with が",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラなので plus explicit camera switch marked with が and けど",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これは小さいカメラだから plus explicit camera switch marked with が and けど",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with explicit camera switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with から and explicit camera switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence using 小さくて and explicit camera switch",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with explicit camera switch marked with が",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さいから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with から and explicit camera switch marked with が",
      },
      {
        segments: [
          { text: "この カメラは 小[ちい]さくて、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence using 小さくて and explicit camera switch marked with が",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence using これは小さいカメラなので",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence using これは小さいカメラだから",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラなので、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence using これは小さいカメラなので with switch marked by が",
      },
      {
        segments: [
          { text: "これは 小[ちい]さい カメラだから、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence using これは小さいカメラだから with switch marked by が",
      },
      {
        segments: [
          { text: "この 小[ちい]さい カメラは " },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with この小さいカメラ as topic",
      },
      {
        segments: [
          { text: "この 小[ちい]さい カメラは " },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with この小さいカメラ and switch marked by が",
      },
      {
        segments: [
          { text: "この 小[ちい]さい カメラは " },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、この カメラの スイッチは " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with この小さいカメラ and explicit camera switch",
      },
      {
        segments: [
          { text: "この 小[ちい]さい カメラは " },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、この カメラの スイッチが " },
          { text: "押[お]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split sentence with この小さいカメラ and explicit camera switch marked with が",
      },
    ],
  },
  {
    english: "My father gets angry easily, but he apologizes right away.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "怒[おこ]りやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、すぐ" },
          { text: "謝[あやま]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using が for “but” and すぐ for “right away”",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "怒[おこ]りやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、すぐ" },
          { text: "謝[あやま]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using けど instead of が for “but,” slightly more conversational",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]はすぐ" },
          { text: "怒[おこ]りやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、すぐ" },
          { text: "謝[あやま]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places すぐ before 怒りやすい to emphasize getting angry quickly",
      },
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "怒[おこ]りやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、すぐ" },
          { text: "謝[あやま]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Drops 私の because 父 naturally means “my father”",
      },
      {
        segments: [
          { text: "父[ちち]は" },
          { text: "怒[おこ]りやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、すぐ" },
          { text: "謝[あやま]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Drops 私の and uses conversational けど for “but”",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は" },
          { text: "怒[おこ]りやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、すぐに" },
          { text: "謝[あやま]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses すぐに instead of すぐ for “right away”",
      },
      {
        segments: [
          { text: "私[わたし]の 父親[ちちおや]は" },
          { text: "怒[おこ]りやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、すぐ" },
          { text: "謝[あやま]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 父親 instead of 父",
      },
      {
        segments: [
          { text: "父親[ちちおや]は" },
          { text: "怒[おこ]りやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、すぐに" },
          { text: "謝[あやま]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 父親 without 私の and すぐに",
      },
    ],
  },
  {
    english: "This restaurant's menu has too many dishes, so it's hard to choose.",
    hint: "dishes = menu items",
    answers: [
      {
        segments: [
          { text: "この レストランの メニューは 料理[りょうり]が 多[おお]すぎるので、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using ので and known vocabulary 料理 for menu items",
      },
      {
        segments: [
          { text: "この レストランの メニューは 料理[りょうり]が 多[おお]すぎるから、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "この レストランの メニューは 料理[りょうり]が 多[おお]すぎて、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the て-form of 多すぎる to express the reason",
      },
      {
        segments: [
          { text: "この レストランの メニューは 品数[しなかず]が 多[おお]すぎるので、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 品数 for number of menu items, a very natural expression",
      },
      {
        segments: [
          { text: "この レストランの メニューは 品数[しなかず]が 多[おお]すぎるから、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 品数 with から",
      },
      {
        segments: [
          { text: "この レストランの メニューは 品数[しなかず]が 多[おお]すぎて、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 品数 with the て-form reason construction",
      },
      {
        segments: [
          { text: "この レストランの メニューは 種類[しゅるい]が 多[おお]すぎるので、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 種類 to refer to the variety of items on the menu",
      },
      {
        segments: [
          { text: "この レストランの メニューは 種類[しゅるい]が 多[おお]すぎるから、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 種類 with から",
      },
      {
        segments: [
          { text: "この レストランの メニューは 種類[しゅるい]が 多[おお]すぎて、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 種類 with て-form reason construction",
      },
      {
        segments: [
          { text: "この レストランは メニューの 種類[しゅるい]が 多[おお]すぎるので、料理[りょうり]を" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Making 料理を the explicit object of choosing",
      },
      {
        segments: [
          { text: "この レストランは メニューの 種類[しゅるい]が 多[おお]すぎて、料理[りょうり]を" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit object with て-form reason construction",
      },
      {
        segments: [
          { text: "この レストランの メニューには 料理[りょうり]が 多[おお]すぎるので、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には to mean there are too many dishes on the menu",
      },
      {
        segments: [
          { text: "この レストランの メニューには 料理[りょうり]が 多[おお]すぎるから、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には with から",
      },
      {
        segments: [
          { text: "この レストランの メニューには 料理[りょうり]が 多[おお]すぎて、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には with て-form reason construction",
      },
      {
        segments: [
          { text: "この レストランの メニューには 品数[しなかず]が 多[おお]すぎるので、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には and 品数",
      },
      {
        segments: [
          { text: "この レストランの メニューには 品数[しなかず]が 多[おお]すぎるから、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には and 品数 with から",
      },
      {
        segments: [
          { text: "この レストランの メニューには 品数[しなかず]が 多[おお]すぎて、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には and 品数 with て-form reason",
      },
      {
        segments: [
          { text: "この レストランの メニューには 種類[しゅるい]が 多[おお]すぎるので、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には and 種類",
      },
      {
        segments: [
          { text: "この レストランの メニューには 種類[しゅるい]が 多[おお]すぎるから、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には and 種類 with から",
      },
      {
        segments: [
          { text: "この レストランの メニューには 種類[しゅるい]が 多[おお]すぎて、" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には and 種類 with て-form reason",
      },
      {
        segments: [
          { text: "料理[りょうり]が 多[おお]すぎるので、この レストランの メニューは" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order, putting the reason first",
      },
      {
        segments: [
          { text: "料理[りょうり]が 多[おお]すぎるから、この レストランの メニューは" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first order with から",
      },
      {
        segments: [
          { text: "料理[りょうり]が 多[おお]すぎて、この レストランの メニューは" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first order with て-form",
      },
      {
        segments: [
          { text: "品数[しなかず]が 多[おお]すぎるので、この レストランの メニューは" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first order using 品数",
      },
      {
        segments: [
          { text: "品数[しなかず]が 多[おお]すぎるから、この レストランの メニューは" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first order using 品数 and から",
      },
      {
        segments: [
          { text: "品数[しなかず]が 多[おお]すぎて、この レストランの メニューは" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first order using 品数 and て-form",
      },
      {
        segments: [
          { text: "種類[しゅるい]が 多[おお]すぎるので、この レストランの メニューは" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first order using 種類",
      },
      {
        segments: [
          { text: "種類[しゅるい]が 多[おお]すぎるから、この レストランの メニューは" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first order using 種類 and から",
      },
      {
        segments: [
          { text: "種類[しゅるい]が 多[おお]すぎて、この レストランの メニューは" },
          { text: "選[えら]びにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first order using 種類 and て-form",
      },
    ],
  },
  {
    english: "This pencil is short, so it's hard to write with, but it's easy to put in a pocket.",
    hint: "pocket = ポケット",
    answers: [
      {
        segments: [
          { text: "この 鉛筆[えんぴつ]は 短[みじか]いので、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with ので and が",
      },
      {
        segments: [
          { text: "この 鉛筆[えんぴつ]は 短[みじか]いから、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "この 鉛筆[えんぴつ]は 短[みじか]いので、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using けど instead of が",
      },
      {
        segments: [
          { text: "この 鉛筆[えんぴつ]は 短[みじか]いから、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and けど; slightly more conversational",
      },
      {
        segments: [
          { text: "この 鉛筆[えんぴつ]は 短[みじか]くて、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using adjective て-form to express the reason",
      },
      {
        segments: [
          { text: "この 鉛筆[えんぴつ]は 短[みじか]くて、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adjective て-form plus conversational けど",
      },
      {
        segments: [
          { text: "この 短[みじか]い 鉛筆[えんぴつ]は、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 短い as a noun modifier",
      },
      {
        segments: [
          { text: "この 短[みじか]い 鉛筆[えんぴつ]は、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun-modifying 短い with けど",
      },
      {
        segments: [
          { text: "短[みじか]いので、この 鉛筆[えんぴつ]は" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason placed first",
      },
      {
        segments: [
          { text: "短[みじか]いから、この 鉛筆[えんぴつ]は" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ポケットに" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason first with から and けど",
      },
      {
        segments: [
          { text: "この 鉛筆[えんぴつ]は 短[みじか]いので、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ポケットには" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には to emphasize contrast with the pocket",
      },
      {
        segments: [
          { text: "この 鉛筆[えんぴつ]は 短[みじか]いから、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ポケットには" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational version with contrastive には",
      },
      {
        segments: [
          { text: "この 鉛筆[えんぴつ]は 短[みじか]くて、" },
          { text: "書[か]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ポケットには" },
          { text: "入[い]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adjective て-form with contrastive には",
      },
    ],
  },
  {
    english: "This baby cries easily, so please don't make a loud noise.",
    answers: [
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "ので、大[おお]きい 音[おと]を 出[だ]さないでください" },
        ],
        notes: "Standard translation using ので and 大きい音を出す",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "から、大[おお]きい 音[おと]を 出[だ]さないでください" },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "ので、大[おお]きい 音[おと]は 出[だ]さないでください" },
        ],
        notes: "Using は to mark loud noises as the thing to avoid",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "から、大[おお]きい 音[おと]は 出[だ]さないでください" },
        ],
        notes: "Using から and contrastive は for loud noises",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "ので、大[おお]きな 音[おと]を 出[だ]さないでください" },
        ],
        notes: "Using 大きな instead of 大きい before 音",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "から、大[おお]きな 音[おと]を 出[だ]さないでください" },
        ],
        notes: "Using から with 大きな音",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "ので、大[おお]きな 音[おと]は 出[だ]さないでください" },
        ],
        notes: "Using 大きな音 with contrastive は",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "から、大[おお]きな 音[おと]は 出[だ]さないでください" },
        ],
        notes: "Using から with 大きな音 and contrastive は",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "ので、大[おお]きい 声[こえ]を 出[だ]さないでください" },
        ],
        notes: "Using 声 for a loud voice/noise",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "から、大[おお]きい 声[こえ]を 出[だ]さないでください" },
        ],
        notes: "Using から and 大きい声",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "ので、大[おお]きい 声[こえ]は 出[だ]さないでください" },
        ],
        notes: "Using 声 with contrastive は",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "から、大[おお]きい 声[こえ]は 出[だ]さないでください" },
        ],
        notes: "Using から and contrastive は with 大きい声",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "ので、大[おお]きな 声[こえ]を 出[だ]さないでください" },
        ],
        notes: "Using 大きな声",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "から、大[おお]きな 声[こえ]を 出[だ]さないでください" },
        ],
        notes: "Using 大きな声 with から",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "ので、大[おお]きな 声[こえ]は 出[だ]さないでください" },
        ],
        notes: "Using 大きな声 with contrastive は",
      },
      {
        segments: [
          { text: "この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true },
          { text: "から、大[おお]きな 声[こえ]は 出[だ]さないでください" },
        ],
        notes: "Using 大きな声 with から and contrastive は",
      },
      {
        segments: [
          { text: "大[おお]きな 音[おと]を 出[だ]さないでください。この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with 大きな音; predicate やすい handled as an i-adjective",
      },
      {
        segments: [
          { text: "大[おお]きい 音[おと]を 出[だ]さないでください。この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with 大きい音; predicate やすい handled as an i-adjective",
      },
      {
        segments: [
          { text: "大[おお]きい 声[こえ]を 出[だ]さないでください。この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order using 大きい声",
      },
      {
        segments: [
          { text: "大[おお]きな 声[こえ]を 出[だ]さないでください。この 赤[あか]ちゃんは" },
          { text: "泣[な]きやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order using 大きな声",
      },
    ],
  },
  {
    english: "This apartment is quiet, so it's easy to live in, but the bath is small and hard to use.",
    answers: [
      {
        segments: [
          { text: "この アパートは 静[しず]かなので、" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、お 風呂[ふろ]は 小[ちい]さいので" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with ので and contrastive は for the bath",
      },
      {
        segments: [
          { text: "この アパートは 静[しず]かで、" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、お 風呂[ふろ]は 小[ちい]さくて" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses adjective て-form to express the reasons more compactly",
      },
      {
        segments: [
          { text: "この アパートは 静[しず]かだから、" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、お 風呂[ふろ]は 小[ちい]さいから" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から for the reasons",
      },
      {
        segments: [
          { text: "この アパートは 静[しず]かなので、" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、お 風呂[ふろ]は 小[ちい]さいので" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses けど instead of が for a softer contrast",
      },
      {
        segments: [
          { text: "静[しず]かな アパートなので、" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、お 風呂[ふろ]は 小[ちい]さいので" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 静かなアパート as a noun phrase instead of このアパートは静か",
      },
      {
        segments: [
          { text: "この アパートは 静[しず]かなので、" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、お 風呂[ふろ]が 小[ちい]さくて" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が for the bath subject with 小さくて as the reason",
      },
      {
        segments: [
          { text: "この アパートは 静[しず]かで" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、お 風呂[ふろ]が 小[ちい]さくて" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Compact colloquial version using で, けど, and お風呂が",
      },
      {
        segments: [
          { text: "この マンションは 静[しず]かなので、" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、お 風呂[ふろ]は 小[ちい]さいので" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses マンション as another natural word for apartment",
      },
      {
        segments: [
          { text: "この アパートは 静[しず]かなので、" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、お 風呂[ふろ]は 狭[せま]いので" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 狭い for a small/cramped bath",
      },
      {
        segments: [
          { text: "この アパートは 静[しず]かなので、" },
          { text: "生活[せいかつ]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、お 風呂[ふろ]は 小[ちい]さいので" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 生活しやすい as an alternative to 住みやすい",
      },
      {
        segments: [
          { text: "この アパートは 静[しず]かで、" },
          { text: "住[す]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、お 風呂[ふろ]は 狭[せま]くて" },
          { text: "使[つか]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 静かで and 狭くて for a compact reason/contrast sentence",
      },
    ],
  },
  {
    english: "This white shirt gets dirty easily, so please don't wear it to the barbecue.",
    hint: "shirt = シャツ; barbecue = バーベキュー",
    answers: [
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "ので、バーベキューに 着[き]て 行[い]かないでください" },
        ],
        notes: "Standard translation using ので and 着て行かないでください for “don’t wear it to…”",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "から、バーベキューに 着[き]て 行[い]かないでください" },
        ],
        notes: "Uses から instead of ので for “so/because”",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "ので、バーベキューには 着[き]て 行[い]かないでください" },
        ],
        notes: "Uses には to emphasize the barbecue as the situation where it should not be worn",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "から、バーベキューには 着[き]て 行[い]かないでください" },
        ],
        notes: "Uses から plus emphatic には",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "ので、バーベキューで 着[き]ないでください" },
        ],
        notes: "Uses バーベキューで着ないでください, focusing on wearing it at the barbecue",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "から、バーベキューで 着[き]ないでください" },
        ],
        notes: "Uses から and バーベキューで着ないでください",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "ので、バーベキューには 着[き]ないでください" },
        ],
        notes: "Uses には with 着ないでください, emphasizing not wearing it for the barbecue",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "から、バーベキューには 着[き]ないでください" },
        ],
        notes: "Uses から and には with 着ないでください",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "ので、バーベキューへ 着[き]て 行[い]かないでください" },
        ],
        notes: "Uses へ instead of に with 着て行く",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "から、バーベキューへ 着[き]て 行[い]かないでください" },
        ],
        notes: "Uses から and へ with 着て行く",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "ので、バーベキューへは 着[き]て 行[い]かないでください" },
        ],
        notes: "Uses emphatic へは for the destination/situation",
      },
      {
        segments: [
          { text: "この 白[しろ]い シャツは" },
          { text: "汚[よご]れやすい", blank: true },
          { text: "から、バーベキューへは 着[き]て 行[い]かないでください" },
        ],
        notes: "Uses から plus emphatic へは",
      },
    ],
  },
  {
    english: "This PIN is long, so it's hard to memorize and easy to forget.",
    hint: "PIN = personal identification number",
    answers: [
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いので、" },
          { text: "覚[おぼ]えにくくて", blank: true },
          { text: "、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using ので and connecting the two adjectives with くて",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いから、" },
          { text: "覚[おぼ]えにくくて", blank: true },
          { text: "、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので for a more direct reason",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いので、" },
          { text: "覚[おぼ]えにくいし", blank: true },
          { text: "、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using し to list the two properties",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いから、" },
          { text: "覚[おぼ]えにくいし", blank: true },
          { text: "、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から with し for a casual/direct listing",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]くて、" },
          { text: "覚[おぼ]えにくくて", blank: true },
          { text: "、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 長くて to connect the reason more compactly",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]くて、" },
          { text: "覚[おぼ]えにくいし", blank: true },
          { text: "、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 長くて plus し to list the consequences",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いので、" },
          { text: "忘[わす]れやすくて", blank: true },
          { text: "、" },
          { text: "覚[おぼ]えにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order of the two qualities",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いから、" },
          { text: "忘[わす]れやすくて", blank: true },
          { text: "、" },
          { text: "覚[おぼ]えにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with から",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いので、" },
          { text: "忘[わす]れやすいし", blank: true },
          { text: "、" },
          { text: "覚[おぼ]えにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order using し",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いから、" },
          { text: "忘[わす]れやすいし", blank: true },
          { text: "、" },
          { text: "覚[おぼ]えにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order using から and し",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]くて、" },
          { text: "忘[わす]れやすくて", blank: true },
          { text: "、" },
          { text: "覚[おぼ]えにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with 長くて as the cause",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いので、" },
          { text: "覚[おぼ]えにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。そして、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split into two sentences with そして",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いから、" },
          { text: "覚[おぼ]えにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。そして、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split into two sentences using から",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いので、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。そして、" },
          { text: "覚[おぼ]えにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split into two sentences with the two qualities reversed",
      },
      {
        segments: [
          { text: "この 暗証番号[あんしょうばんごう]は 長[なが]いから、" },
          { text: "忘[わす]れやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。そして、" },
          { text: "覚[おぼ]えにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Split into two sentences, reversed order, using から",
      },
    ],
  },
  {
    english: "The letters on this map are small, so it’s hard to read, but the station is easy to find.",
    answers: [
      {
        segments: [
          { text: "この 地図[ちず]の 字[じ]は 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つかりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic version with 字 and intransitive 見つかりやすい",
      },
      {
        segments: [
          { text: "この 地図[ちず]の 字[じ]は 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つけやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using transitive 見つけやすい for “easy to find”",
      },
      {
        segments: [
          { text: "この 地図[ちず]は 字[じ]が 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つけやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 地図は字が小さい and 見つけやすい",
      },
      {
        segments: [
          { text: "この 地図[ちず]は 字[じ]が 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つかりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 地図は字が小さい and intransitive 見つかりやすい",
      },
      {
        segments: [
          { text: "この 地図[ちず]の 文字[もじ]は 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つけやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 文字 instead of 字",
      },
      {
        segments: [
          { text: "この 地図[ちず]の 文字[もじ]は 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つかりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 文字 and intransitive 見つかりやすい",
      },
      {
        segments: [
          { text: "この 地図[ちず]は 文字[もじ]が 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つけやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 地図は文字が小さい and transitive 見つけやすい",
      },
      {
        segments: [
          { text: "この 地図[ちず]は 文字[もじ]が 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つかりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 地図は文字が小さい and intransitive 見つかりやすい",
      },
      {
        segments: [
          { text: "この 地図[ちず]の 字[じ]は 小[ちい]さいから、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つかりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので with intransitive 見つかりやすい",
      },
      {
        segments: [
          { text: "この 地図[ちず]の 字[じ]は 小[ちい]さいから、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つけやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and transitive 見つけやすい",
      },
      {
        segments: [
          { text: "この 地図[ちず]は 字[じ]が 小[ちい]さいから、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つかりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 地図は字が小さい with から",
      },
      {
        segments: [
          { text: "この 地図[ちず]は 字[じ]が 小[ちい]さいから、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]は" },
          { text: "見[み]つけやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 地図は字が小さい with から and 見つけやすい",
      },
      {
        segments: [
          { text: "この 地図[ちず]の 字[じ]は 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]は" },
          { text: "見[み]つかりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using けど instead of が for “but”",
      },
      {
        segments: [
          { text: "この 地図[ちず]の 字[じ]は 小[ちい]さいので、" },
          { text: "読[よ]みにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]は" },
          { text: "見[み]つけやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using けど and transitive 見つけやすい",
      },
    ],
  },
  {
    english: "These boots are heavy, so they're hard to walk in.",
    hint: "boots = ブーツ",
    answers: [
      {
        segments: [
          { text: "この ブーツは 重[おも]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using ので for the reason",
      },
      {
        segments: [
          { text: "この ブーツは 重[おも]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので for a more direct causal connection",
      },
      {
        segments: [
          { text: "この ブーツは 重[おも]くて、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the て-form of the adjective to connect the reason",
      },
      {
        segments: [
          { text: "この ブーツが 重[おも]いので、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the boots as the reason/focus",
      },
      {
        segments: [
          { text: "この ブーツが 重[おも]いから、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with から for a natural focused reason",
      },
      {
        segments: [
          { text: "この ブーツは 重[おも]いし、" },
          { text: "歩[ある]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using し to give heaviness as a reason among possible factors",
      },
    ],
  },
  {
    english: "This German word is short, but it's hard to pronounce.",
    answers: [
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いけど、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural conversational contrast with けど",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いが、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for the contrasting 'but'",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いですが、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "More polite/formal contrast with ですが",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 言葉[ことば]は 短[みじか]いけど、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 言葉 instead of 単語",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 言葉[ことば]は 短[みじか]いが、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "言葉 with が contrast",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 言葉[ことば]は 短[みじか]いですが、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "言葉 with polite/formal ですが contrast",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]は 短[みじか]いけど、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 単語/言葉 when context makes it clear",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]は 短[みじか]いが、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 単語/言葉 with が contrast",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]は 短[みじか]いですが、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 単語/言葉 with ですが contrast",
      },
      {
        segments: [
          { text: "この 短[みじか]い ドイツ語[ご]の 単語[たんご]は、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 短い as a noun modifier instead of a separate clause",
      },
      {
        segments: [
          { text: "この 短[みじか]い ドイツ語[ご]の 言葉[ことば]は、" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "短い as modifier with 言葉",
      },
      {
        segments: [
          { text: "短[みじか]いけど、この ドイツ語[ご]の 単語[たんご]は" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with contrast first",
      },
      {
        segments: [
          { text: "短[みじか]いけど、この ドイツ語[ご]の 言葉[ことば]は" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with 言葉",
      },
      {
        segments: [
          { text: "短[みじか]いけど、この ドイツ語[ご]は" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with concise このドイツ語",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いけど、とても" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding とても to emphasize 'hard'",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いが、とても" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Formal contrast plus とても",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いですが、とても" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite/formal contrast plus とても",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いけど、すごく" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すごく as a casual/intensive adverb",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いけど、ちょっと" },
          { text: "発音[はつおん]しにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ちょっと to soften 'hard to pronounce'",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いけど、" },
          { text: "言[い]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 言いにくい ('hard to say') as a natural equivalent of hard to pronounce",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いが、" },
          { text: "言[い]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "言いにくい with が contrast",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]の 単語[たんご]は 短[みじか]いですが、" },
          { text: "言[い]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "言いにくい with polite/formal ですが contrast",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]は 短[みじか]いけど、" },
          { text: "言[い]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Concise version using 言いにくい",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]は 短[みじか]いが、" },
          { text: "言[い]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Concise version with が and 言いにくい",
      },
      {
        segments: [
          { text: "この ドイツ語[ご]は 短[みじか]いですが、" },
          { text: "言[い]いにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Concise version with ですが and 言いにくい",
      },
    ],
  },
  {
    english: "This sweater is light, so it's easy to wash.",
    hint: "sweater = セーター",
    answers: [
      {
        segments: [
          { text: "この セーターは 軽[かる]いので、" },
          { text: "洗[あら]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using ので for 'so/because' and 洗う for 'wash'",
      },
      {
        segments: [
          { text: "この セーターは 軽[かる]いから、" },
          { text: "洗[あら]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので for the reason",
      },
      {
        segments: [
          { text: "この セーターは 軽[かる]くて、" },
          { text: "洗[あら]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using adjective て-form to connect 'light' and 'easy to wash'",
      },
      {
        segments: [
          { text: "軽[かる]いので、この セーターは" },
          { text: "洗[あら]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed clause order with ので",
      },
      {
        segments: [
          { text: "軽[かる]いから、この セーターは" },
          { text: "洗[あら]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed clause order with から",
      },
      {
        segments: [
          { text: "この セーターは 軽[かる]いので、" },
          { text: "洗濯[せんたく]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 洗濯する instead of 洗う for 'wash/launder'",
      },
      {
        segments: [
          { text: "この セーターは 軽[かる]いから、" },
          { text: "洗濯[せんたく]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 洗濯する with から for the reason",
      },
      {
        segments: [
          { text: "この セーターは 軽[かる]くて、" },
          { text: "洗濯[せんたく]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 洗濯する with adjective て-form connection",
      },
      {
        segments: [
          { text: "軽[かる]いので、この セーターは" },
          { text: "洗濯[せんたく]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed clause order with 洗濯する",
      },
      {
        segments: [
          { text: "軽[かる]いから、この セーターは" },
          { text: "洗濯[せんたく]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed clause order with 洗濯する and から",
      },
      {
        segments: [
          { text: "この セーター、軽[かる]いから" },
          { text: "洗[あら]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual topic marking with は dropped after セーター",
      },
      {
        segments: [
          { text: "この セーター、軽[かる]いので" },
          { text: "洗[あら]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic marker dropped, using ので",
      },
      {
        segments: [
          { text: "この セーター、軽[かる]くて" },
          { text: "洗[あら]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic marker dropped, using adjective て-form",
      },
      {
        segments: [
          { text: "この セーター、軽[かる]いから" },
          { text: "洗濯[せんたく]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic marker dropped, using 洗濯する",
      },
      {
        segments: [
          { text: "この セーター、軽[かる]くて" },
          { text: "洗濯[せんたく]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic marker dropped, using 洗濯する and adjective て-form",
      },
      {
        segments: [
          { text: "この セーター、軽[かる]いので" },
          { text: "洗濯[せんたく]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic marker dropped, using 洗濯する and ので",
      },
    ],
  },
  {
    english: "This curry is very spicy, so it's hard to eat, but cold milk is easy to drink.",
    answers: [
      {
        segments: [
          { text: "この カレーは とても 辛[から]いので、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using ので and が",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]いから、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]くて" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using adjective te-form 辛くて for the reason",
      },
      {
        segments: [
          { text: "この カレーは すごく 辛[から]いので、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すごく for 'very'",
      },
      {
        segments: [
          { text: "この カレーは すごく 辛[から]いから、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すごく and から",
      },
      {
        segments: [
          { text: "この カレーは すごく 辛[から]くて" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すごく with adjective te-form",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]いので、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using でも as a separate sentence for 'but'",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]いから、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and sentence-final でも",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]くて" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 辛くて and sentence-final でも",
      },
      {
        segments: [
          { text: "この カレーは 辛[から]すぎるので、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 辛すぎる to express very/too spicy",
      },
      {
        segments: [
          { text: "この カレーは 辛[から]すぎるから、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 辛すぎる with から",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]いので、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using けど instead of が for 'but'",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]いから、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and けど",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]くて" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 辛くて and けど",
      },
      {
        segments: [
          { text: "この カレーは すごく 辛[から]いので、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すごく and けど",
      },
      {
        segments: [
          { text: "この カレーは 辛[から]すぎるので、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 辛すぎる and けど",
      },
      {
        segments: [
          { text: "この カレーが とても 辛[から]いので、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for このカレー to identify this curry as the spicy one",
      },
      {
        segments: [
          { text: "この カレーが とても 辛[から]いから、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for curry with から and けど",
      },
      {
        segments: [
          { text: "この カレーが とても 辛[から]くて" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、冷[つめ]たい 牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for curry with 辛くて and sentence-final でも",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]いので、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、冷[つめ]たい 牛乳[ぎゅうにゅう]が" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for milk to emphasize the easy-to-drink item",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]いから、" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、冷[つめ]たい 牛乳[ぎゅうにゅう]が" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for milk with から and けど",
      },
      {
        segments: [
          { text: "この カレーは とても 辛[から]くて" },
          { text: "食[た]べにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、冷[つめ]たい 牛乳[ぎゅうにゅう]が" },
          { text: "飲[の]みやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for milk with sentence-final でも",
      },
    ],
  },
  {
    english: "The door of this old hotel is heavy, so it's hard to open, but it's easy to close.",
    answers: [
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]いので、" },
          { text: "開[あ]けにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、" },
          { text: "閉[し]めやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using transitive verbs 開ける/閉める with ので and が",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]いので、" },
          { text: "開[あ]けにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、" },
          { text: "閉[し]めやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using けど instead of が for a softer contrast",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]いから、" },
          { text: "開[あ]けにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、" },
          { text: "閉[し]めやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので for the reason",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]くて、" },
          { text: "開[あ]けにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、" },
          { text: "閉[し]めやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 重くて to connect the reason more compactly",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]いから、" },
          { text: "開[あ]けにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、" },
          { text: "閉[し]めやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using both から and けど",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルは ドアが 重[おも]いので、" },
          { text: "開[あ]けにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、" },
          { text: "閉[し]めやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic is the hotel, with ドア marked by が",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルは ドアが 重[おも]いから、" },
          { text: "開[あ]けにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、" },
          { text: "閉[し]めやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic is the hotel, using から and けど",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]くて、" },
          { text: "開[あ]けにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、" },
          { text: "閉[し]めやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 重くて and けど",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]いので、" },
          { text: "開[あ]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、" },
          { text: "閉[し]まりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using intransitive verbs 開く/閉まる for how the door itself opens and closes",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]いので、" },
          { text: "開[あ]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、" },
          { text: "閉[し]まりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Intransitive verbs with けど contrast",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]いから、" },
          { text: "開[あ]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、" },
          { text: "閉[し]まりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Intransitive verbs with から and けど",
      },
      {
        segments: [
          { text: "この 古[ふる]い ホテルの ドアは 重[おも]くて、" },
          { text: "開[あ]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、" },
          { text: "閉[し]まりやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Intransitive verbs with 重くて and けど",
      },
    ],
  },
  {
    english: "The words to this song are simple, so it's easy to sing.",
    answers: [
      {
        segments: [
          { text: "この 歌[うた]は 言葉[ことば]が 簡単[かんたん]なので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural structure: making the song the topic and saying its words are simple",
      },
      {
        segments: [
          { text: "この 歌[うた]の 言葉[ことば]は 簡単[かんたん]なので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using の to modify 言葉: the words of this song are simple",
      },
      {
        segments: [
          { text: "この 歌[うた]は 言葉[ことば]が 簡単[かんたん]だから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using だから for 'so/because'",
      },
      {
        segments: [
          { text: "この 歌[うた]の 言葉[ことば]は 簡単[かんたん]だから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using の 言葉 and だから",
      },
      {
        segments: [
          { text: "この 歌[うた]は 歌詞[かし]が 簡単[かんたん]なので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 for 'the words/lyrics'",
      },
      {
        segments: [
          { text: "この 歌[うた]の 歌詞[かし]は 簡単[かんたん]なので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 as the topic with の",
      },
      {
        segments: [
          { text: "この 歌[うた]は 歌詞[かし]が 簡単[かんたん]だから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 and だから",
      },
      {
        segments: [
          { text: "この 歌[うた]の 歌詞[かし]は 簡単[かんたん]だから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 with の and だから",
      },
      {
        segments: [
          { text: "この 歌[うた]は 言葉[ことば]が やさしいので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using やさしい as 'easy/simple' for words",
      },
      {
        segments: [
          { text: "この 歌[うた]の 言葉[ことば]は やさしいので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using やさしい with 言葉 as topic",
      },
      {
        segments: [
          { text: "この 歌[うた]は 歌詞[かし]が やさしいので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 and やさしい",
      },
      {
        segments: [
          { text: "この 歌[うた]の 歌詞[かし]は やさしいので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 topic and やさしい",
      },
      {
        segments: [
          { text: "この 歌[うた]は 言葉[ことば]が やさしいから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using やさしい and から",
      },
      {
        segments: [
          { text: "この 歌[うた]の 言葉[ことば]は やさしいから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using の 言葉, やさしい, and から",
      },
      {
        segments: [
          { text: "この 歌[うた]は 歌詞[かし]が やさしいから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞, やさしい, and から",
      },
      {
        segments: [
          { text: "この 歌[うた]の 歌詞[かし]は やさしいから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 as topic, やさしい, and から",
      },
      {
        segments: [
          { text: "この 歌[うた]は 言葉[ことば]が 簡単[かんたん]で、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using で to connect the reason/result",
      },
      {
        segments: [
          { text: "この 歌[うた]の 言葉[ことば]は 簡単[かんたん]で、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 言葉 as topic and で",
      },
      {
        segments: [
          { text: "この 歌[うた]は 歌詞[かし]が 簡単[かんたん]で、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 and で",
      },
      {
        segments: [
          { text: "この 歌[うた]の 歌詞[かし]は 簡単[かんたん]で、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 topic and で",
      },
      {
        segments: [
          { text: "この 歌[うた]は 言葉[ことば]が やさしくて、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using i-adjective te-form やさしくて",
      },
      {
        segments: [
          { text: "この 歌[うた]の 言葉[ことば]は やさしくて、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 言葉 as topic and やさしくて",
      },
      {
        segments: [
          { text: "この 歌[うた]は 歌詞[かし]が やさしくて、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 and やさしくて",
      },
      {
        segments: [
          { text: "この 歌[うた]の 歌詞[かし]は やさしくて、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歌詞 topic and やさしくて",
      },
      {
        segments: [
          { text: "この 歌[うた]は 簡単[かんたん]な 言葉[ことば]なので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 簡単な言葉 as 'simple words'",
      },
      {
        segments: [
          { text: "この 歌[うた]は 簡単[かんたん]な 歌詞[かし]なので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 簡単な歌詞",
      },
      {
        segments: [
          { text: "この 歌[うた]は やさしい 言葉[ことば]なので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using やさしい言葉",
      },
      {
        segments: [
          { text: "この 歌[うた]は やさしい 歌詞[かし]なので、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using やさしい歌詞",
      },
      {
        segments: [
          { text: "この 歌[うた]は 簡単[かんたん]な 言葉[ことば]だから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 簡単な言葉 and だから",
      },
      {
        segments: [
          { text: "この 歌[うた]は 簡単[かんたん]な 歌詞[かし]だから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 簡単な歌詞 and だから",
      },
      {
        segments: [
          { text: "この 歌[うた]は やさしい 言葉[ことば]だから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using やさしい言葉 and だから",
      },
      {
        segments: [
          { text: "この 歌[うた]は やさしい 歌詞[かし]だから、" },
          { text: "歌[うた]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using やさしい歌詞 and だから",
      },
    ],
  },
  {
    english: "This old radio is very quiet, so the news is hard to hear.",
    hint: "Express “quiet” as “the sound is small.” radio = ラジオ; news = ニュース",
    answers: [
      {
        segments: [
          { text: "この 古[ふる]い ラジオは 音[おと]が とても 小[ちい]さいので、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Most natural wording with 聞こえる: the news is hard to hear because the sound is small.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオは 音[おと]が とても 小[ちい]さくて、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the adjective te-form 小さくて to connect the cause.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオの 音[おと]は とても 小[ちい]さいので、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Making the radio’s sound the topic.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオの 音[おと]は とても 小[ちい]さくて、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Radio’s sound as topic with te-form connection.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオは 音[おと]が すごく 小[ちい]さいので、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すごく instead of とても for “very.”",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオは 音[おと]が すごく 小[ちい]さくて、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すごく and te-form connection.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオの 音[おと]は すごく 小[ちい]さいので、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Radio’s sound as topic, using すごく.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオの 音[おと]は すごく 小[ちい]さくて、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Radio’s sound as topic, using すごく and te-form.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオは とても 音[おと]が 小[ちい]さいので、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Alternative placement of とても before 音が小さい.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオは とても 音[おと]が 小[ちい]さくて、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Alternative placement of とても with te-form connection.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオは すごく 音[おと]が 小[ちい]さいので、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Alternative placement of すごく before 音が小さい.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオは すごく 音[おと]が 小[ちい]さくて、ニュースが " },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Alternative placement of すごく with te-form connection.",
      },
      {
        segments: [
          { text: "ニュースは、この 古[ふる]い ラジオの 音[おと]が とても 小[ちい]さいので、" },
          { text: "聞[き]こえにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order with ニュース as the topic.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオは 音[おと]が とても 小[ちい]さいので、ニュースが " },
          { text: "聞[き]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 聞きにくい instead of 聞こえにくい; natural for “hard to hear/listen to.”",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオの 音[おと]は とても 小[ちい]さいので、ニュースが " },
          { text: "聞[き]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Radio’s sound as topic with 聞きにくい.",
      },
      {
        segments: [
          { text: "この 古[ふる]い ラジオは 音[おと]が とても 小[ちい]さくて、ニュースが " },
          { text: "聞[き]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 聞きにくい with te-form connection.",
      },
      {
        segments: [
          { text: "ニュースは、この 古[ふる]い ラジオの 音[おと]が とても 小[ちい]さいので、" },
          { text: "聞[き]きにくい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ニュース as topic with 聞きにくい.",
      },
    ],
  },
  {
    english: "Which is easier to memorize, this song or that phone number?",
    answers: [
      {
        segments: [
          { text: "この 歌[うた]と その 電話番号[でんわばんごう]と、どちらが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Basic comparison using その for “that” near the listener",
      },
      {
        segments: [
          { text: "この 歌[うた]と あの 電話番号[でんわばんごう]と、どちらが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using あの for “that” farther from both speaker and listener",
      },
      {
        segments: [
          { text: "その 電話番号[でんわばんごう]と この 歌[うた]と、どちらが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Reversed order of the two items, with その",
      },
      {
        segments: [
          { text: "あの 電話番号[でんわばんごう]と この 歌[うた]と、どちらが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Reversed order of the two items, with あの",
      },
      {
        segments: [
          { text: "この 歌[うた]と その 電話番号[でんわばんごう]では、どちらの ほうが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using では and のほうが to emphasize “which one is easier”",
      },
      {
        segments: [
          { text: "この 歌[うた]と あの 電話番号[でんわばんごう]では、どちらの ほうが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using では and のほうが with あの",
      },
      {
        segments: [
          { text: "この 歌[うた]と その 電話番号[でんわばんごう]は、どちらが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using は after the paired items instead of the second と",
      },
      {
        segments: [
          { text: "この 歌[うた]と あの 電話番号[でんわばんごう]は、どちらが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using は after the paired items, with あの",
      },
      {
        segments: [
          { text: "この 歌[うた]と その 電話番号[でんわばんごう]、どちらが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Natural omission of the comparison particle after the listed items",
      },
      {
        segments: [
          { text: "この 歌[うた]と あの 電話番号[でんわばんごう]、どちらが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Omitted comparison particle with あの",
      },
      {
        segments: [
          { text: "この 歌[うた]と その 電話番号[でんわばんごう]では、" },
          { text: "覚[おぼ]えやすい", blank: true },
          { text: "のは どちら" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Fronting 覚えやすいのは “the easier-to-memorize one is...”",
      },
      {
        segments: [
          { text: "この 歌[うた]と あの 電話番号[でんわばんごう]では、" },
          { text: "覚[おぼ]えやすい", blank: true },
          { text: "のは どちら" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Fronted construction with あの",
      },
      {
        segments: [
          { text: "この 歌[うた]と その 電話番号[でんわばんごう]と、" },
          { text: "覚[おぼ]えやすい", blank: true },
          { text: "のは どちら" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Fronted construction while keeping と after both items",
      },
      {
        segments: [
          { text: "この 歌[うた]と あの 電話番号[でんわばんごう]と、" },
          { text: "覚[おぼ]えやすい", blank: true },
          { text: "のは どちら" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Fronted construction with と after both items and あの",
      },
      {
        segments: [
          { text: "この 歌[うた]と その 電話番号[でんわばんごう]と、どっちが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using the more conversational question word どっち",
      },
      {
        segments: [
          { text: "この 歌[うた]と あの 電話番号[でんわばんごう]と、どっちが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Conversational どっち with あの",
      },
      {
        segments: [
          { text: "この 歌[うた]と その 電話番号[でんわばんごう]では、どっちの ほうが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Conversational どっちのほうが with では",
      },
      {
        segments: [
          { text: "この 歌[うた]と あの 電話番号[でんわばんごう]では、どっちの ほうが " },
          { text: "覚[おぼ]えやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Conversational どっちのほうが with あの",
      },
    ],
  },
  {
    english: "This app is simple, so it is easy to use and easy to explain.",
    hint: "app = アプリ",
    answers: [
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]なので、" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using ので and linking the two やすい adjectives with くて",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]だから、" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using だから instead of ので for the reason",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]で、" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the て-form of the adjective 簡単で to mean it is simple and therefore easy to use/explain",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]なので、" },
          { text: "使[つか]いやすいし", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using し to list the two easy qualities",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]だから、" },
          { text: "使[つか]いやすいし", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using both だから and し for a more conversational listing",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]なので、" },
          { text: "説明[せつめい]しやすくて", blank: true },
          { text: "、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversing the order of the two easy actions",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]だから、" },
          { text: "説明[せつめい]しやすくて", blank: true },
          { text: "、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with だから",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]で、" },
          { text: "説明[せつめい]しやすくて", blank: true },
          { text: "、" },
          { text: "使[つか]いやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with 簡単で",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]なので、" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、説明[せつめい]も" },
          { text: "しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding も to emphasize that it is also easy to explain",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]だから、" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、説明[せつめい]も" },
          { text: "しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using だから and も",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]で、" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、説明[せつめい]も" },
          { text: "しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 簡単で and も",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]なので、" },
          { text: "使[つか]いやすいし", blank: true },
          { text: "、説明[せつめい]も" },
          { text: "しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using し plus も for listing qualities",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]だから、" },
          { text: "使[つか]いやすいし", blank: true },
          { text: "、説明[せつめい]も" },
          { text: "しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational だから with し and も",
      },
      {
        segments: [
          { text: "簡単[かんたん]なので、この アプリは" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Placing the reason first before the topic",
      },
      {
        segments: [
          { text: "簡単[かんたん]だから、この アプリは" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first word order with だから",
      },
      {
        segments: [
          { text: "この アプリは シンプルなので、" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the loanword シンプル for “simple”",
      },
      {
        segments: [
          { text: "この アプリは シンプルだから、" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using シンプル with conversational だから",
      },
      {
        segments: [
          { text: "この アプリは シンプルで、" },
          { text: "使[つか]いやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using シンプルで to connect the reason",
      },
      {
        segments: [
          { text: "この アプリは 簡単[かんたん]なので、" },
          { text: "操作[そうさ]しやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 操作する for “use/operate” an app",
      },
      {
        segments: [
          { text: "この アプリは シンプルなので、" },
          { text: "操作[そうさ]しやすくて", blank: true },
          { text: "、" },
          { text: "説明[せつめい]しやすい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using both シンプル and 操作しやすい for a natural app-related expression",
      },
    ],
  },
];

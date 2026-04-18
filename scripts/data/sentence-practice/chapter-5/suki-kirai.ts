import type { Question } from "../types"

const naAdj = {
  pos: "Na-adjective" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

export const questions: Question[] = [
  {
    english: "Mr. Takeda hates children.",
    hint: "Takeda = たけだ",
    answers: [
      {
        segments: [
          { text: "武田[たけだ]さんは 子供[こども]たちが" },
          {
            text: "大[だい]嫌[きら]い",
            blank: true,
            conjugation: naAdj,
          },
        ],
        notes: "大嫌い with 子供たち (children, plural)",
      },
      {
        segments: [
          { text: "武田[たけだ]さんは 子供[こども]が" },
          {
            text: "嫌[きら]い",
            blank: true,
            conjugation: naAdj,
          },
        ],
        notes: "嫌い (less intense) with 子供 (without たち)",
      },
    ],
  },
  {
    english: "I don't like horror movies at all.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ホラー 映画[えいが]が 全然[ぜんぜん]" },
          {
            text: "嫌[きら]い",
            blank: true,
            conjugation: naAdj,
          },
        ],
        notes: "Standard variation: は + が, 全然 + 嫌い",
      },
      {
        segments: [
          { text: "私[わたし]は ホラー 映画[えいが]は 全然[ぜんぜん]" },
          {
            text: "嫌[きら]い",
            blank: true,
            conjugation: naAdj,
          },
        ],
        notes:
          "Topic marked with は instead of が for the object (contrastive nuance)",
      },
      {
        segments: [
          { text: "私[わたし]は ホラー 映画[えいが]が 全然[ぜんぜん]" },
          { text: "好[す]きじゃない", blank: true },
        ],
        notes: "Using 好き + じゃない instead of 嫌い; が marks the object",
      },
      {
        segments: [
          { text: "私[わたし]は ホラー 映画[えいが]は 全然[ぜんぜん]" },
          { text: "好[す]きじゃない", blank: true },
        ],
        notes:
          "Using 好き + じゃない; は marks the object (contrastive nuance)",
      },
      {
        segments: [
          { text: "私[わたし]は ホラーの 映画[えいが]が 全然[ぜんぜん]" },
          {
            text: "嫌[きら]い",
            blank: true,
            conjugation: naAdj,
          },
        ],
        notes: "ホラーの映画 instead of ホラー映画; が marks object",
      },
      {
        segments: [
          { text: "私[わたし]は ホラーの 映画[えいが]は 全然[ぜんぜん]" },
          {
            text: "嫌[きら]い",
            blank: true,
            conjugation: naAdj,
          },
        ],
        notes: "ホラーの映画; は marks the object (contrastive)",
      },
      {
        segments: [
          { text: "私[わたし]は ホラーの 映画[えいが]が 全然[ぜんぜん]" },
          { text: "好[す]きじゃない", blank: true },
        ],
        notes: "ホラーの映画; 好き + じゃない; が marks object",
      },
    ],
  },
  {
    english: "The music I like is old.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "好[す]き", blank: true },
          { text: "な 音楽[おんがく]は" },
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
        notes:
          "Core structure: 私が好きな音楽 — が marks the subject in the relative clause modifying 音楽",
      },
      {
        segments: [
          { text: "私[わたし]の" },
          { text: "好[す]き", blank: true },
          { text: "な 音楽[おんがく]は" },
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
        notes:
          "Using の instead of が in the relative clause — both are natural for 好きな",
      },
      {
        segments: [
          { text: "好[す]き", blank: true },
          { text: "な 音楽[おんがく]は" },
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
        notes:
          "Dropping 私が — subject implied from context, very natural in casual speech",
      },
    ],
  },
  {
    english: "I like cats, but I don't like dogs.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 猫[ねこ]が" },
          { text: "好[す]き", blank: true, conjugation: naAdj },
          { text: "が、犬[いぬ]は" },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes:
          "Standard polite form with が connecting clauses; 犬 marked with は for contrast",
      },
      {
        segments: [
          { text: "私[わたし]は 猫[ねこ]が" },
          { text: "好[す]き", blank: true, conjugation: naAdj },
          { text: "。でも、犬[いぬ]は" },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes: "Using でも (but) instead of が to connect the two sentences",
      },
      {
        segments: [
          { text: "私[わたし]は 猫[ねこ]が" },
          { text: "好[す]き", blank: true, conjugation: naAdj },
          { text: "が、犬[いぬ]が" },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes: "Both nouns marked with が (no contrastive は on 犬)",
      },
      {
        segments: [
          { text: "猫[ねこ]は" },
          { text: "好[す]き", blank: true, conjugation: naAdj },
          { text: "が、犬[いぬ]は" },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes: "Topic は on both animals, no 私は at start (implicit subject)",
      },
      {
        segments: [
          { text: "猫[ねこ]が" },
          { text: "好[す]き", blank: true, conjugation: naAdj },
          { text: "が、犬[いぬ]が" },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes: "Both animals with が, no 私は, implicit subject",
      },
      {
        segments: [
          { text: "私[わたし]は 猫[ねこ]が" },
          { text: "好[す]き", blank: true, conjugation: naAdj },
          { text: "。でも、犬[いぬ]が" },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes:
          "でも connecting sentences; 犬 with が instead of contrastive は",
      },
      {
        segments: [
          { text: "私[わたし]は 猫[ねこ]が" },
          { text: "好[す]き", blank: true },
          { text: "ですが、犬[いぬ]は好[す]きじゃないです" },
        ],
        notes: "Second clause uses 好きじゃない (not like) instead of 嫌い",
      },
      {
        segments: [
          { text: "私[わたし]は 猫[ねこ]が" },
          { text: "好[す]き", blank: true },
          { text: "だけど、犬[いぬ]は" },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes:
          'Using だけど instead of が/でも as a softer "but" connector (casual nuance)',
      },
    ],
  },
  {
    english: "Is the book Kenji likes old?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんが" },
          { text: "好[す]きな", blank: true },
          { text: "本[ほん]は" },
          {
            text: "古[ふる]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "Standard: が in relative clause, 古い predicate with か question",
      },
      {
        segments: [
          { text: "けんじさんの" },
          { text: "好[す]きな", blank: true },
          { text: "本[ほん]は" },
          {
            text: "古[ふる]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "Using の instead of が in the relative clause (けんじさんの好きな本)",
      },
    ],
  },
  {
    english: "I don't really like part-time jobs.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は アルバイトが あまり" },
          { text: "好[す]き", blank: true },
          { text: "じゃないです" },
        ],
        notes:
          'Standard variation: あまり好きじゃない — "not really like", using が to mark the object',
      },
      {
        segments: [
          { text: "私[わたし]は アルバイトが あまり" },
          { text: "好[す]き", blank: true },
          { text: "じゃありません" },
        ],
        notes: "More formal negative: じゃありません instead of じゃないです",
      },
      {
        segments: [
          { text: "私[わたし]は アルバイトは あまり" },
          { text: "好[す]き", blank: true },
          { text: "じゃないです" },
        ],
        notes:
          "Using は instead of が for アルバイト — slightly contrastive nuance",
      },
      {
        segments: [
          { text: "私[わたし]は アルバイトは あまり" },
          { text: "好[す]き", blank: true },
          { text: "じゃありません" },
        ],
        notes: "は for アルバイト + formal じゃありません",
      },
      {
        segments: [
          { text: "私[わたし]は アルバイトが あまり" },
          { text: "好[す]き", blank: true },
          { text: "ではありません" },
        ],
        notes: "Using ではありません — more formal/stiff negative form",
      },
      {
        segments: [
          { text: "私[わたし]は アルバイトが あまり" },
          { text: "好[す]き", blank: true },
          { text: "ではないです" },
        ],
        notes: "Using ではないです — formal variation of じゃないです",
      },
    ],
  },
  {
    english: "My favorite sport is tennis.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の" },
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニス" },
          { text: "です" },
        ],
        notes: "Basic structure with noun modification using 好きな",
      },
      {
        segments: [
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニス" },
          { text: "です" },
        ],
        notes: "Omitting 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニス" },
          { text: "です" },
        ],
        notes: 'Using 一番 to emphasize "most favorite"',
      },
      {
        segments: [
          { text: "一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニス" },
          { text: "です" },
        ],
        notes: "一番好きな with 私 omitted",
      },
      {
        segments: [
          { text: "私[わたし]が 一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "スポーツはテニス" },
          { text: "です" },
        ],
        notes: "Using 私が instead of 私の in the relative clause",
      },
      {
        segments: [
          { text: "スポーツの 中[なか]で 一番[いちばん]" },
          { text: "好[す]きな", blank: true },
          { text: "のはテニス" },
          { text: "です" },
        ],
        notes: 'Using スポーツの中で — "among sports, my favorite is tennis"',
      },
      {
        segments: [
          { text: "私[わたし]はスポーツの 中[なか]でテニスが 一番[いちばん]" },
          { text: "好[す]き", blank: true, conjugation: naAdj },
        ],
        notes: 'Rephrased — "I like tennis the most among sports"',
      },
    ],
  },
  {
    english: "My father neither likes nor dislikes movies.",
    answers: [
      {
        segments: [
          { text: "父[ちち]は 映画[えいが]が" },
          { text: "好[す]きでも 嫌[きら]いでもないです", blank: true },
        ],
        notes: "好きでも嫌いでもない — neither likes nor dislikes",
      },
      {
        segments: [
          { text: "父[ちち]は 映画[えいが]が" },
          { text: "好[す]きでも 嫌[きら]いでもありません", blank: true },
        ],
        notes: "Using ありません for a more formal tone",
      },
    ],
  },
  {
    english: "My father likes coffee, but he absolutely hates tea.",
    answers: [
      {
        segments: [
          { text: "父[ちち]はコーヒーが" },
          { text: "好[す]き", conjugation: naAdj },
          { text: "が、お 茶[ちゃ]は" },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes: "Basic structure with 父 and contrast using は for お茶",
      },
      {
        segments: [
          { text: "父[ちち]はコーヒーが" },
          { text: "好[す]き", conjugation: naAdj },
          { text: "が、お 茶[ちゃ]は" },
          { text: "大[だい]嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes: "Using 大嫌い for stronger emphasis",
      },
      {
        segments: [
          { text: "父[ちち]はコーヒーが" },
          { text: "好[す]き", conjugation: naAdj },
          { text: "が、お 茶[ちゃ]は 絶対[ぜったい]" },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes: 'Adding 絶対 to emphasize "absolutely hates"',
      },
      {
        segments: [
          { text: "父[ちち]はコーヒーが" },
          { text: "好[す]き", conjugation: naAdj },
          { text: "が、お 茶[ちゃ]は 絶対[ぜったい]" },
          { text: "大[だい]嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes: "絶対 + 大嫌い for maximum emphasis",
      },
    ],
  },
  {
    english: "My younger brother's least favorite food is fish.",
    answers: [
      {
        segments: [
          { text: "弟[おとうと]の" },
          { text: "嫌[きら]いな", blank: true },
          { text: "食[た]べ 物[もの]は 魚[さかな]" },
          { text: "です" },
        ],
        notes: "Basic structure with noun modification using 嫌いな",
      },
      {
        segments: [
          { text: "弟[おとうと]が" },
          { text: "嫌[きら]いな", blank: true },
          { text: "食[た]べ 物[もの]は 魚[さかな]" },
          { text: "です" },
        ],
        notes: "Using 弟が instead of 弟の in the relative clause",
      },
      {
        segments: [
          { text: "弟[おとうと]の 一番[いちばん]" },
          { text: "嫌[きら]いな", blank: true },
          { text: "食[た]べ 物[もの]は 魚[さかな]" },
          { text: "です" },
        ],
        notes: 'Using 一番 to emphasize "least favorite"',
      },
      {
        segments: [
          { text: "弟[おとうと]が 一番[いちばん]" },
          { text: "嫌[きら]いな", blank: true },
          { text: "食[た]べ 物[もの]は 魚[さかな]" },
          { text: "です" },
        ],
        notes: "弟が + 一番 for emphasis",
      },
      {
        segments: [
          {
            text: "食[た]べ 物[もの]の 中[なか]で 弟[おとうと]が 一番[いちばん]",
          },
          { text: "嫌[きら]いな", blank: true },
          { text: "のは 魚[さかな]" },
          { text: "です" },
        ],
        notes:
          'Using 食べ物の中で — "among foods, the one my brother dislikes most is fish"',
      },
      {
        segments: [
          {
            text: "弟[おとうと]は 食[た]べ 物[もの]の 中[なか]で 魚[さかな]が 一番[いちばん]",
          },
          { text: "嫌[きら]い", blank: true, conjugation: naAdj },
        ],
        notes:
          'Rephrased — "My younger brother dislikes fish the most among foods"',
      },
      {
        segments: [
          { text: "弟[おとうと]の 一番[いちばん]" },
          { text: "嫌[きら]いな", blank: true },
          { text: "のは 魚[さかな]" },
          { text: "です" },
        ],
        notes:
          'Using の in place of 食べ物 — "the thing my brother dislikes most is fish"',
      },
    ],
  },
]

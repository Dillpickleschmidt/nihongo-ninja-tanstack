import type { Question, SegmentConjugation } from "../types"

const tai = (
  pos: SegmentConjugation["pos"],
  polarity: SegmentConjugation["polarity"] = "positive",
  tense: SegmentConjugation["tense"] = "non-past",
): SegmentConjugation => ({
  pos,
  form: "tai-form",
  polarity,
  tense,
})

export const questions: Question[] = [
  {
    english: "I want to swim in the sea this summer.",
    answers: [
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、海[うみ]で" },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: tai("Godan verb with 'gu' ending"),
          },
        ],
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に、海[うみ]で" },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: tai("Godan verb with 'gu' ending"),
          },
        ],
        notes: "夏に marks the time",
      },
      {
        segments: [
          { text: "この 夏[なつ]は 海[うみ]で" },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: tai("Godan verb with 'gu' ending"),
          },
        ],
        notes: "この夏は means this summer",
      },
    ],
  },
  {
    english: "I didn't want to eat vegetables when I was a child.",
    answers: [
      {
        segments: [
          { text: "子供[こども]の 時[とき]、野菜[やさい]が" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
      },
      {
        segments: [
          { text: "子供[こども]の 時[とき]、野菜[やさい]を" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "を instead of が",
      },
      {
        segments: [
          { text: "子供[こども]の 時[とき]は、野菜[やさい]が" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "時は marks the childhood period as the topic",
      },
      {
        segments: [
          { text: "子供[こども]の 頃[ころ]、野菜[やさい]が" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "子供の頃 is a natural way to say when I was a child",
      },
      {
        segments: [
          { text: "子供[こども]の 頃[ころ]は、野菜[やさい]が" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "子供の頃は topicalizes the childhood period",
      },
    ],
  },
  {
    english: "I wanted to go to the concert, but I didn't have any money.",
    answers: [
      {
        segments: [
          { text: "コンサートに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "けど、お金[おかね]が" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Basic version with に.",
      },
      {
        segments: [
          { text: "コンサートへ" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "けど、お金[おかね]が" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Uses へ for destination.",
      }
    ],
  },
  {
    english: "Yuki, what do you want to drink at the cafe after class?",
    hint: "Yuki = ゆき; cafe = カフェ",
    answers: [
      {
        segments: [
          { text: "ゆきさん、授業[じゅぎょう]の 後[あと]で カフェで 何[なに]が " },
          {
            text: "飲[の]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending"),
          },
          { text: "か" },
        ],
        notes: "Direct question with が marking the desired drink."
      },
      {
        segments: [
          { text: "ゆきさん、授業[じゅぎょう]の 後[あと]で カフェで 何[なに]を " },
          {
            text: "飲[の]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending"),
          },
          { text: "か" },
        ],
        notes: "Using を instead of が for the thing to drink",
      },
      {
        segments: [
          { text: "ゆきさんは 授業[じゅぎょう]の 後[あと]で カフェで 何[なに]が " },
          {
            text: "飲[の]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending"),
          },
          { text: "か" },
        ],
        notes: "Using は to mark Yuki as the topic",
      },
      {
        segments: [
          { text: "ゆきさんは 授業[じゅぎょう]の 後[あと]で カフェで 何[なに]を " },
          {
            text: "飲[の]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending"),
          },
          { text: "か" },
        ],
        notes: "Topic-marked Yuki with を marking the drink",
      },
    ],
  },
  {
    english: "I was tired yesterday, so I wanted to go home early.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]は、疲[つか]れていたから、早[はや]く " },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Basic sentence with 昨日は as the time topic and から for reason",
      },
      {
        segments: [
          { text: "昨日[きのう]、疲[つか]れていたから、早[はや]く " },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Without は after 昨日",
      },
      {
        segments: [
          { text: "昨日[きのう]は、疲[つか]れたから、早[はや]く " },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 疲れたから instead of 疲れていたから",
      },
      {
        segments: [
          { text: "昨日[きのう]、疲[つか]れたから、早[はや]く " },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "No は, with 疲れたから",
      },
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]、疲[つか]れていたから、早[はや]く ",
          },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject 私は",
      },
      {
        segments: [
          {
            text: "昨日[きのう]は、疲[つか]れていたから、早[はや]く 家[いえ]に ",
          },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicitly saying 家に帰る",
      },
      {
        segments: [
          { text: "昨日[きのう]は、疲[つか]れていたから、早[はや]く うちに " },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using うちに帰る for going home",
      },
      {
        segments: [
          {
            text: "昨日[きのう]は、疲[つか]れていたから、家[いえ]に 早[はや]く ",
          },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Different adverb placement with 家に",
      },
      {
        segments: [
          { text: "昨日[きのう]は、疲[つか]れていたから、うちに 早[はや]く " },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Different adverb placement with うちに",
      },

      {
        segments: [
          { text: "昨日[きのう]は 疲[つか]れていて、早[はや]く " },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using て-form to connect the reason naturally",
      },
      {
        segments: [
          { text: "昨日[きのう]は 疲[つか]れていて、早[はや]く 家[いえ]に " },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "て-form connection with explicit 家に",
      },
      {
        segments: [
          { text: "昨日[きのう]は 疲[つか]れていて、早[はや]く うちに " },
          {
            text: "帰[かえ]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "て-form connection with explicit うちに",
      },
    ],
  },
  {
    english:
      "Last month, I wanted to buy a new bicycle, but I didn't have any money.",
    answers: [
      {
        segments: [
          { text: "先月[せんげつ]、新[あたら]しい 自転車[じてんしゃ]を " },
          {
            text: "買[か]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "けど、お金[かね]が 全然[ぜんぜん] " },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Basic time expression. Uses けど/ですけど for but.",
      },
      {
        segments: [
          { text: "先月[せんげつ]は、新[あたら]しい 自転車[じてんしゃ]を " },
          {
            text: "買[か]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "けど、お金[かね]が 全然[ぜんぜん] " },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Topicalizes last month. Uses けど/ですけど for but.",
      },
      {
        segments: [
          { text: "先月[せんげつ]、新[あたら]しい 自転車[じてんしゃ]を " },
          {
            text: "買[か]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "が、お金[かね]が 全然[ぜんぜん] " },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Polite version with ですが.",
      },
      {
        segments: [
          { text: "先月[せんげつ]は、新[あたら]しい 自転車[じてんしゃ]を " },
          {
            text: "買[か]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "が、お金[かね]が 全然[ぜんぜん] " },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Polite ですが with topicalized last month.",
      },
      {
        segments: [
          { text: "先月[せんげつ]、新[あたら]しい 自転車[じてんしゃ]を " },
          {
            text: "買[か]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "が、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        register: "casual",
        notes: "Plain written connector が.",
      },
      {
        segments: [
          { text: "先月[せんげつ]は、新[あたら]しい 自転車[じてんしゃ]を " },
          {
            text: "買[か]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "が、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        register: "casual",
        notes: "Plain written connector が with topicalized time.",
      },
      {
        segments: [
          { text: "先月[せんげつ]、新[あたら]しい 自転車[じてんしゃ]を " },
          {
            text: "買[か]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "。でも、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        register: "casual",
        notes: "Splitting into two sentences and using でも for but.",
      }
    ],
  },
  {
    english: "After the exam, I didn't want to answer any questions.",
    answers: [
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、どんな 質問[しつもん]にも " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Uses どんな質問にも for “any questions.”"
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、どんな 質問[しつもん]にも " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Using 後で instead of 後",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]は、どんな 質問[しつもん]にも " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Using は to mark the post-exam time as the topic",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、質問[しつもん]には 何[なに]も " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Using 質問には何も to express not wanting to answer anything",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、質問[しつもん]には 何[なに]も " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Combines 後で with 質問には何も",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]は、質問[しつもん]には 何[なに]も " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Topicalizes the time with は and uses 質問には何も",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、何[なに]も " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Shorter natural version: did not want to answer anything",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、何[なに]も " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Shorter version using 後で",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]は、何[なに]も " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Shorter version with topical は",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、質問[しつもん]に 一[ひと]つも " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Uses 質問に一つも to emphasize not even one question",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、質問[しつもん]に 一[ひと]つも " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "質問に一つも emphasis with 後で",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]は、質問[しつもん]に 一[ひと]つも " },
          {
            text: "答[こた]える",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "質問に一つも emphasis with topic は",
      },
    ],
  },
  {
    english:
      "When I saw the blue sea, I thought I wanted to swim. But the water was freezing, so I got out right away.",
    answers: [
      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]て、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とても 冷[つめ]たかったから、すぐ " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 見て to mean when/upon seeing.",
      },
      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]た 時[とき]、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とても 冷[つめ]たかったから、すぐ " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 見た時 for when I saw.",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]て、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とても 冷[つめ]たかったから、すぐ " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject with 見て.",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]た 時[とき]、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とても 冷[つめ]たかったから、すぐ " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject with 見た時.",
      },
      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]て、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とっても 冷[つめ]たかったから、すぐ " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 見て to mean when/upon seeing with とっても.",
      },
      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]た 時[とき]、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とっても 冷[つめ]たかったから、すぐ " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 見た時 for when I saw with とっても.",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]て、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とっても 冷[つめ]たかったから、すぐ " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject with 見て with とっても.",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]た 時[とき]、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とっても 冷[つめ]たかったから、すぐ " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject with 見た時 with とっても.",
      },

      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]て、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とても 冷[つめ]たかったから、すぐに " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 見て to mean when/upon seeing.",
      },
      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]た 時[とき]、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とても 冷[つめ]たかったから、すぐに " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 見た時 for when I saw.",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]て、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とても 冷[つめ]たかったから、すぐに " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject with 見て.",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]た 時[とき]、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とても 冷[つめ]たかったから、すぐに " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject with 見た時.",
      },
      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]て、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とっても 冷[つめ]たかったから、すぐに " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 見て to mean when/upon seeing with とっても.",
      },
      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]た 時[とき]、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とっても 冷[つめ]たかったから、すぐに " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 見た時 for when I saw with とっても.",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]て、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とっても 冷[つめ]たかったから、すぐに " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject with 見て with とっても.",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]た 時[とき]、" },
          { text: "泳[およ]ぎたい", blank: true },
          { text: "と " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、水[みず]が とっても 冷[つめ]たかったから、すぐに " },
          {
            text: "出[で]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject with 見た時 with とっても.",
      }
    ],
  },
  {
    english:
      "Last night, I wanted to take a bath, but I didn't want to wash my hair.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 髪は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 髪を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 頭は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 頭を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 髪は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 髪を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 頭は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 頭を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 髪は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 髪を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 頭は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 頭を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 髪は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 髪を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 頭は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 頭を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 髪は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 髪を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 頭は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 頭を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 髪は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 髪を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 頭は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 頭を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 髪は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 髪を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 頭は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses お風呂に, 頭を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 髪は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 髪を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 頭は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "けど、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        notes: "Uses contrastive お風呂には, 頭を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 髪は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 髪を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 頭は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 頭を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 髪は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 髪を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 頭は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 頭を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 髪は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 髪を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 頭は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 頭を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 髪は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 髪を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 頭は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 頭を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 髪は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 髪を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 頭は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 頭を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 髪は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 髪を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 頭は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 頭を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 髪は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 髪を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 頭は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お風呂に and 頭を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 髪は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 髪を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 頭は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "が、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with contrastive お風呂には and 頭を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 髪は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 髪を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 頭は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 頭を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 髪は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 髪を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 頭は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 頭を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 髪は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 髪を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 頭は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 頭を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 髪は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 髪を.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 頭は.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 頭を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 髪は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 髪を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 頭は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 頭を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 髪は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 髪を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 頭は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 頭を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 髪は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 髪を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 頭は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, お風呂に, and 頭を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 髪は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、髪[かみ]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 髪を.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]は" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 頭は.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          {
            text: "入[はい]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending", "positive", "past"),
          },
          { text: "。でも、頭[あたま]を" },
          {
            text: "洗[あら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "negative", "past"),
          },
        ],
        register: "casual",
        notes: "Split sentence with でも, contrastive お風呂には, and 頭を.",
      }
    ],
  },
  {
    english: "I'm sleepy today, so I don't want to drive.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]いから、" },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Marks 今日 as the topic.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]いから、" },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Using 今日 as a time adverb instead of the topic.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]いから、車[くるま]を " },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Explicitly states 車を as the object of driving.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]いから、車[くるま]を " },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "今日 as a time adverb with explicit 車を.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]くて、" },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses the い-adjective te-form 眠くて to express the reason.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]くて、" },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "今日 as a time adverb with 眠くて for the reason.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]いから、運転[うんてん]は " },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "negative"),
          },
        ],
        notes: "Topicalizes the action with は: as for driving, I do not want to.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]いから、運転[うんてん]は " },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "negative"),
          },
        ],
        notes: "今日 as a time adverb and topicalized 運転は.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]い。だから、" },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Splits the reason into a separate sentence using だから.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]い。だから、車[くるま]を " },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses だから and explicitly mentions driving a car.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]いから、車[くるま]の 運転[うんてん]を " },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "negative"),
          },
        ],
        notes: "Uses 車の運転をする as a noun-phrase version of drive a car.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]いから、車[くるま]の 運転[うんてん]を " },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "negative"),
          },
        ],
        notes: "今日 as a time adverb with 車の運転をする.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]いから、車[くるま]の 運転[うんてん]は " },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "negative"),
          },
        ],
        notes: "Topicalizes 車の運転 with は.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]いから、車[くるま]の 運転[うんてん]は " },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "negative"),
          },
        ],
        notes: "今日 as a time adverb with topicalized 車の運転は.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]くて、車[くるま]を " },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 眠くて for the reason and explicitly mentions the car.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]くて、車[くるま]を " },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "今日 as a time adverb with 眠くて and explicit 車を.",
      },
      {
        segments: [
          { text: "眠[ねむ]いから、今日[きょう]は " },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Reversed order: gives the reason first, then 今日 as topic.",
      },
      {
        segments: [
          { text: "眠[ねむ]いから、今日[きょう] " },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Reason first with 今日 used adverbially.",
      },
      {
        segments: [
          { text: "眠[ねむ]いから、今日[きょう]は 車[くるま]を " },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Reason first with explicit 車を.",
      },
      {
        segments: [
          { text: "眠[ねむ]いから、今日[きょう] 車[くるま]を " },
          {
            text: "運転[うんてん]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Reason first, 今日 adverbial, and explicit 車を.",
      }
    ],
  },
  {
    english:
      "This morning, I didn't want to get up at six, but I wanted to eat breakfast with my older brother.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝は, 六時に, 兄と一緒に朝ご飯を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝は, 六時に, 兄と一緒に朝ご飯が, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝は, 六時に, 兄と朝ご飯を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝は, 六時に, 兄と朝ご飯が, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝は, 六時には, 兄と一緒に朝ご飯を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝は, 六時には, 兄と一緒に朝ご飯が, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝は, 六時には, 兄と朝ご飯を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝は, 六時には, 兄と朝ご飯が, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝, 六時に, 兄と一緒に朝ご飯を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝, 六時に, 兄と一緒に朝ご飯が, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝, 六時に, 兄と朝ご飯を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝, 六時に, 兄と朝ご飯が, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝, 六時には, 兄と一緒に朝ご飯を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝, 六時には, 兄と一緒に朝ご飯が, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝, 六時には, 兄と朝ご飯を, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "けど、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        notes: "Uses 今朝, 六時には, 兄と朝ご飯が, and けど/ですけど.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝は, 六時に, and 兄と一緒に朝ご飯を.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝は, 六時に, and 兄と一緒に朝ご飯が.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝は, 六時に, and 兄と朝ご飯を.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝は, 六時に, and 兄と朝ご飯が.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝は, 六時には, and 兄と一緒に朝ご飯を.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝は, 六時には, and 兄と一緒に朝ご飯が.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝は, 六時には, and 兄と朝ご飯を.",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝は, 六時には, and 兄と朝ご飯が.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝, 六時に, and 兄と一緒に朝ご飯を.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝, 六時に, and 兄と一緒に朝ご飯が.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝, 六時に, and 兄と朝ご飯を.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝, 六時に, and 兄と朝ご飯が.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝, 六時には, and 兄と一緒に朝ご飯を.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝, 六時には, and 兄と一緒に朝ご飯が.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝, 六時には, and 兄と朝ご飯を.",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: tai("Ichidan verb", "positive", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 今朝, 六時には, and 兄と朝ご飯が.",
      }
    ],
  },
  {
    english:
      "I want to climb Mount Fuji at least once in my life, but I don't want to go in winter.",
    hint: "Mount Fuji = 富士山 (ふじさん)",
    answers: [
      {
        segments: [
          { text: "一生[いっしょう]に 一度[いちど]は 富士山[ふじさん]に" },
          {
            text: "登[のぼ]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending"),
          },
          { text: "けど、冬[ふゆ]には" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class", "negative"),
          },
        ],
        notes: "Uses 一生に一度は and けど/ですけど.",
      },
      {
        segments: [
          { text: "人生[じんせい]で 一度[いちど]は 富士山[ふじさん]に" },
          {
            text: "登[のぼ]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending"),
          },
          { text: "けど、冬[ふゆ]には" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class", "negative"),
          },
        ],
        notes: "Uses 人生で一度は and けど/ですけど.",
      },
      {
        segments: [
          { text: "一度[いちど]は 富士山[ふじさん]に" },
          {
            text: "登[のぼ]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending"),
          },
          { text: "けど、冬[ふゆ]には" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class", "negative"),
          },
        ],
        notes: "Uses 一度は and けど/ですけど.",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 一度[いちど]は " },
          {
            text: "登[のぼ]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending"),
          },
          { text: "けど、冬[ふゆ]には" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class", "negative"),
          },
        ],
        notes: "Uses 富士山に一度は and けど/ですけど.",
      },
      {
        segments: [
          { text: "一生[いっしょう]に 一度[いちど]は 富士山[ふじさん]に" },
          {
            text: "登[のぼ]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending"),
          },
          { text: "が、冬[ふゆ]には" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 一生に一度は.",
      },
      {
        segments: [
          { text: "人生[じんせい]で 一度[いちど]は 富士山[ふじさん]に" },
          {
            text: "登[のぼ]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending"),
          },
          { text: "が、冬[ふゆ]には" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 人生で一度は.",
      },
      {
        segments: [
          { text: "一度[いちど]は 富士山[ふじさん]に" },
          {
            text: "登[のぼ]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending"),
          },
          { text: "が、冬[ふゆ]には" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 一度は.",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 一度[いちど]は " },
          {
            text: "登[のぼ]る",
            blank: true,
            conjugation: tai("Godan verb with 'ru' ending"),
          },
          { text: "が、冬[ふゆ]には" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 富士山に一度は.",
      }
    ],
  },
  {
    english: "I wanted to learn guitar, but I didn't want to practice every day.",
    answers: [
      {
        segments: [
          { text: "ギターを " },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "けど、毎日[まいにち]は " },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses 毎日は and けど/ですけど.",
      },
      {
        segments: [
          { text: "ギターを " },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "けど、毎日[まいにち] " },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses 毎日 and けど/ですけど.",
      },
      {
        segments: [
          { text: "ギターを " },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "けど、毎日[まいにち] ギターを " },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses 毎日ギターを and けど/ですけど.",
      },
      {
        segments: [
          { text: "ギターを " },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "けど、ギターを 毎日[まいにち] " },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses ギターを毎日 and けど/ですけど.",
      },
      {
        segments: [
          { text: "ギターを " },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "が、毎日[まいにち]は " },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 毎日は.",
      },
      {
        segments: [
          { text: "ギターを " },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "が、毎日[まいにち] " },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 毎日.",
      },
      {
        segments: [
          { text: "ギターを " },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "が、毎日[まいにち] ギターを " },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 毎日ギターを.",
      },
      {
        segments: [
          { text: "ギターを " },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "が、ギターを 毎日[まいにち] " },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with ギターを毎日.",
      }
    ],
  },
  {
    english:
      "At the party, I wanted to talk with the famous singer, but I didn't want to introduce myself to everyone.",
    answers: [
      {
        segments: [
          { text: "パーティーで、有名[ゆうめい]な 歌手[かしゅ]と" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "けど、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses implicit subject, パーティーで, 有名な歌手と, and けど/ですけど.",
      },
      {
        segments: [
          { text: "パーティーで、有名[ゆうめい]な 歌手[かしゅ]とは" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "けど、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses implicit subject, パーティーで, 有名な歌手とは, and けど/ですけど.",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 有名[ゆうめい]な 歌手[かしゅ]と" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "けど、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses explicit 私は, パーティーで, 有名な歌手と, and けど/ですけど.",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 有名[ゆうめい]な 歌手[かしゅ]とは" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "けど、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses explicit 私は, パーティーで, 有名な歌手とは, and けど/ですけど.",
      },
      {
        segments: [
          { text: "パーティーでは、有名[ゆうめい]な 歌手[かしゅ]と" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "けど、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses implicit subject, パーティーでは, 有名な歌手と, and けど/ですけど.",
      },
      {
        segments: [
          { text: "パーティーでは、有名[ゆうめい]な 歌手[かしゅ]とは" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "けど、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        notes: "Uses implicit subject, パーティーでは, 有名な歌手とは, and けど/ですけど.",
      },
      {
        segments: [
          { text: "パーティーで、有名[ゆうめい]な 歌手[かしゅ]と" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "が、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, パーティーで, and 有名な歌手と.",
      },
      {
        segments: [
          { text: "パーティーで、有名[ゆうめい]な 歌手[かしゅ]とは" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "が、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, パーティーで, and 有名な歌手とは.",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 有名[ゆうめい]な 歌手[かしゅ]と" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "が、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, パーティーで, and 有名な歌手と.",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 有名[ゆうめい]な 歌手[かしゅ]とは" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "が、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, パーティーで, and 有名な歌手とは.",
      },
      {
        segments: [
          { text: "パーティーでは、有名[ゆうめい]な 歌手[かしゅ]と" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "が、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, パーティーでは, and 有名な歌手と.",
      },
      {
        segments: [
          { text: "パーティーでは、有名[ゆうめい]な 歌手[かしゅ]とは" },
          {
            text: "話[はな]す",
            blank: true,
            conjugation: tai("Godan verb with 'su' ending", "positive", "past"),
          },
          { text: "が、みんなに" },
          {
            text: "自己紹介[じこしょうかい]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, パーティーでは, and 有名な歌手とは.",
      }
    ],
  },
  {
    english:
      "When I was a high school student, I wanted to live in a dorm, but now I don't.",
    answers: [
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生の時は, 今は, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生の時は, 今は, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生の時は, 今は, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生の時は, 今は, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生の時は, 今はもう, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生の時は, 今はもう, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生の時は, 今はもう, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生の時は, 今はもう, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生の時, 今は, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生の時, 今は, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生の時, 今は, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生の時, 今は, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生の時, 今はもう, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生の時, 今はもう, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生の時, 今はもう, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生の時, 今はもう, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校の時は, 今は, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校の時は, 今は, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校の時は, 今は, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校の時は, 今は, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校の時は, 今はもう, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校の時は, 今はもう, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校の時は, 今はもう, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校の時は, 今はもう, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生だった時は, 今は, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生だった時は, 今は, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生だった時は, 今は, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生だった時は, 今は, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生だった時は, 今はもう, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生だった時は, 今はもう, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses implicit subject, 高校生だった時は, 今はもう, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with implicit subject, 高校生だった時は, 今はもう, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生の時は, 今は, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生の時は, 今は, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生の時は, 今は, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生の時は, 今は, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生の時は, 今はもう, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生の時は, 今はもう, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生の時は, 今はもう, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生の時は, 今はもう, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生の時, 今は, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生の時, 今は, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生の時, 今は, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生の時, 今は, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生の時, 今はもう, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生の時, 今はもう, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生の時, 今はもう, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生の時, 今はもう, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校の時は, 今は, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校の時は, 今は, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校の時は, 今は, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校の時は, 今は, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校の時は, 今はもう, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校の時は, 今はもう, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校の時は, 今はもう, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校の時は, 今はもう, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生だった時は, 今は, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生だった時は, 今は, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生だった時は, 今は, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生だった時は, 今は, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生だった時は, 今はもう, implicit dorm in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生だった時は, 今はもう, and implicit dorm in second clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "けど、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Uses explicit 私は, 高校生だった時は, 今はもう, repeats 寮に in second clause, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]だった 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "が、今[いま]は もう 寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with explicit 私は, 高校生だった時は, 今はもう, and repeats 寮に in second clause.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, implicit subject, 高校生の時は, and 今は.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, implicit subject, 高校生の時は, and 今はもう.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, implicit subject, 高校生の時, and 今は.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, implicit subject, 高校生の時, and 今はもう.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, implicit subject, 高校の時は, and 今は.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, implicit subject, 高校の時は, and 今はもう.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, explicit 私は, 高校生の時は, and 今は.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, explicit 私は, 高校生の時は, and 今はもう.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, explicit 私は, 高校生の時, and 今は.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, explicit 私は, 高校生の時, and 今はもう.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, explicit 私は, 高校の時は, and 今は.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "positive", "past"),
          },
          { text: "。でも、今[いま]は もう " },
          {
            text: "住[す]む",
            blank: true,
            conjugation: tai("Godan verb with 'mu' ending", "negative"),
          },
        ],
        notes: "Split sentence with でも, explicit 私は, 高校の時は, and 今はもう.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with implicit subject, 高校生の時は, 今は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, implicit subject, 高校生の時は, and 今は.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with implicit subject, 高校生の時は, 今はもう, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, implicit subject, 高校生の時は, and 今はもう.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with implicit subject, 高校生の時, 今は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, implicit subject, 高校生の時, and 今は.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with implicit subject, 高校生の時, 今はもう, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 時[とき]、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, implicit subject, 高校生の時, and 今はもう.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with implicit subject, 高校の時は, 今は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, implicit subject, 高校の時は, and 今は.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with implicit subject, 高校の時は, 今はもう, and けど/ですけど.",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, implicit subject, 高校の時は, and 今はもう.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with explicit 私は, 高校生の時は, 今は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, explicit 私は, 高校生の時は, and 今は.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with explicit 私は, 高校生の時は, 今はもう, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, explicit 私は, 高校生の時は, and 今はもう.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with explicit 私は, 高校生の時, 今は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, explicit 私は, 高校生の時, and 今は.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with explicit 私は, 高校生の時, 今はもう, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, explicit 私は, 高校生の時, and 今はもう.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with explicit 私は, 高校の時は, 今は, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, explicit 私は, 高校の時は, and 今は.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "けど、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        notes: "Uses 寮で生活する with explicit 私は, 高校の時は, 今はもう, and けど/ですけど.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "positive", "past"),
          },
          { text: "が、今[いま]は もう " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: tai("Suru verb - compound word", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 寮で生活する, explicit 私は, 高校の時は, and 今はもう.",
      }
    ],
  },
  {
    english:
      "Last Friday, I didn't want to take the last train home, so I stayed at a hotel near the station.",
    answers: [
      {
        segments: [
          { text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で " },
          { text: "帰[かえ]りたくなかった", blank: true },
          { text: "から、駅[えき]の 近[ちか]くの ホテルに " },
          {
            text: "泊[と]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard wording with から and ホテルに泊まる.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]の 金曜日[きんようび]は、終電[しゅうでん]で " },
          { text: "帰[かえ]りたくなかった", blank: true },
          { text: "から、駅[えき]の 近[ちか]くの ホテルに " },
          {
            text: "泊[と]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses は after the time phrase.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で うちに " },
          { text: "帰[かえ]りたくなかった", blank: true },
          { text: "から、駅[えき]の 近[ちか]くの ホテルに " },
          {
            text: "泊[と]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Explicitly says うちに帰る.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で 家[いえ]に " },
          { text: "帰[かえ]りたくなかった", blank: true },
          { text: "から、駅[えき]の 近[ちか]くの ホテルに " },
          {
            text: "泊[と]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 家に帰る.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で " },
          { text: "帰[かえ]りたくなかった", blank: true },
          { text: "から、駅[えき]の 近[ちか]くに ある ホテルに " },
          {
            text: "泊[と]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses 駅の近くにあるホテル.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で " },
          { text: "帰[かえ]りたくなかった", blank: true },
          { text: "。だから、駅[えき]の 近[ちか]くの ホテルに " },
          {
            text: "泊[と]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Splits the cause and result into two sentences using だから.",
      }
    ],
  },
  {
    english:
      "I wanted to go camping by the river, but I didn't want to sleep somewhere cold.",
    answers: [
      {
        segments: [
          { text: "川[かわ]のそばで キャンプ" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "positive", "past"),
          },
          { text: "けど、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Uses 川のそばでキャンプする and けど/ですけど.",
      },
      {
        segments: [
          { text: "川[かわ]のそばで キャンプ" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "positive", "past"),
          },
          { text: "が、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 川のそばでキャンプする.",
      },
      {
        segments: [
          { text: "川[かわ]の 近[ちか]くで キャンプ" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "positive", "past"),
          },
          { text: "けど、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Uses 川の近くでキャンプする and けど/ですけど.",
      },
      {
        segments: [
          { text: "川[かわ]の 近[ちか]くで キャンプ" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "positive", "past"),
          },
          { text: "が、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 川の近くでキャンプする.",
      },
      {
        segments: [
          { text: "川[かわ]で キャンプ" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "positive", "past"),
          },
          { text: "けど、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Uses 川でキャンプする and けど/ですけど.",
      },
      {
        segments: [
          { text: "川[かわ]で キャンプ" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class", "positive", "past"),
          },
          { text: "が、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 川でキャンプする.",
      },
      {
        segments: [
          { text: "川[かわ]のそばに キャンプに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "けど、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Uses 川のそばにキャンプに行く and けど/ですけど.",
      },
      {
        segments: [
          { text: "川[かわ]のそばに キャンプに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "が、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 川のそばにキャンプに行く.",
      },
      {
        segments: [
          { text: "川[かわ]のそばへ キャンプに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "けど、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Uses 川のそばへキャンプに行く and けど/ですけど.",
      },
      {
        segments: [
          { text: "川[かわ]のそばへ キャンプに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "が、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 川のそばへキャンプに行く.",
      },
      {
        segments: [
          { text: "川[かわ]の 近[ちか]くに キャンプに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "けど、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Uses 川の近くにキャンプに行く and けど/ですけど.",
      },
      {
        segments: [
          { text: "川[かわ]の 近[ちか]くに キャンプに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "が、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 川の近くにキャンプに行く.",
      },
      {
        segments: [
          { text: "川[かわ]の 近[ちか]くへ キャンプに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "けど、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        notes: "Uses 川の近くへキャンプに行く and けど/ですけど.",
      },
      {
        segments: [
          { text: "川[かわ]の 近[ちか]くへ キャンプに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai(
              "Godan verb - Iku/Yuku special class",
              "positive",
              "past",
            ),
          },
          { text: "が、寒[さむ]いところで" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: tai("Ichidan verb", "negative", "past"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 川の近くへキャンプに行く.",
      }
    ],
  },
  {
    english:
      "I want to visit a shrine for New Year's, but I don't want to wake up early.",
    answers: [
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses お正月に, 神社に行く, and けど/ですけど.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お正月に and 神社に行く.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]へ" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses お正月に, 神社へ行く, and けど/ですけど.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]へ" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お正月に and 神社へ行く.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]には 神社[じんじゃ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses お正月には, 神社に行く, and けど/ですけど.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]には 神社[じんじゃ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お正月には and 神社に行く.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]には 神社[じんじゃ]へ" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses お正月には, 神社へ行く, and けど/ですけど.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]には 神社[じんじゃ]へ" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お正月には and 神社へ行く.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]に 神社[じんじゃ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses 正月に, 神社に行く, and けど/ですけど.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]に 神社[じんじゃ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 正月に and 神社に行く.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]に 神社[じんじゃ]へ" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses 正月に, 神社へ行く, and けど/ですけど.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]に 神社[じんじゃ]へ" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 正月に and 神社へ行く.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]には 神社[じんじゃ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses 正月には, 神社に行く, and けど/ですけど.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]には 神社[じんじゃ]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 正月には and 神社に行く.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]には 神社[じんじゃ]へ" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses 正月には, 神社へ行く, and けど/ですけど.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]には 神社[じんじゃ]へ" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 正月には and 神社へ行く.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]に 初詣[はつもうで]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses お正月に and 初詣に行く.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]に 初詣[はつもうで]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お正月に and 初詣に行く.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]には 初詣[はつもうで]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses お正月には and 初詣に行く.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]には 初詣[はつもうで]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お正月には and 初詣に行く.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]に 初詣[はつもうで]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses 正月に and 初詣に行く.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]に 初詣[はつもうで]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 正月に and 初詣に行く.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]には 初詣[はつもうで]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses 正月には and 初詣に行く.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]には 初詣[はつもうで]に" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 正月には and 初詣に行く.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]を" },
          {
            text: "訪[おとず]れる",
            blank: true,
            conjugation: tai("Ichidan verb"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses お正月に and 神社を訪れる.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]を" },
          {
            text: "訪[おとず]れる",
            blank: true,
            conjugation: tai("Ichidan verb"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お正月に and 神社を訪れる.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]には 神社[じんじゃ]を" },
          {
            text: "訪[おとず]れる",
            blank: true,
            conjugation: tai("Ichidan verb"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses お正月には and 神社を訪れる.",
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]には 神社[じんじゃ]を" },
          {
            text: "訪[おとず]れる",
            blank: true,
            conjugation: tai("Ichidan verb"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with お正月には and 神社を訪れる.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]に 神社[じんじゃ]を" },
          {
            text: "訪[おとず]れる",
            blank: true,
            conjugation: tai("Ichidan verb"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses 正月に and 神社を訪れる.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]に 神社[じんじゃ]を" },
          {
            text: "訪[おとず]れる",
            blank: true,
            conjugation: tai("Ichidan verb"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 正月に and 神社を訪れる.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]には 神社[じんじゃ]を" },
          {
            text: "訪[おとず]れる",
            blank: true,
            conjugation: tai("Ichidan verb"),
          },
          { text: "けど、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        notes: "Uses 正月には and 神社を訪れる.",
      },
      {
        segments: [
          { text: "正月[しょうがつ]には 神社[じんじゃ]を" },
          {
            text: "訪[おとず]れる",
            blank: true,
            conjugation: tai("Ichidan verb"),
          },
          { text: "が、早[はや]く " },
          {
            text: "起[お]きる",
            blank: true,
            conjugation: tai("Ichidan verb", "negative"),
          },
        ],
        register: "polite",
        notes: "Polite/formal が with 正月には and 神社を訪れる.",
      }
    ],
  },
  {
    english:
      "Does everyone want to go see a famous temple in Kyoto next year?",
    answers: [
      {
        segments: [
          { text: "来年[らいねん]、皆[みな]さんは 京都[きょうと]に ある 有名[ゆうめい]な お 寺[てら]を 見[み]に " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "か" },
        ],
        register: "polite",
        notes: "Uses 皆さんは, time first, and 京都にある有名なお寺.",
      },
      {
        segments: [
          { text: "来年[らいねん]、皆[みな]さんは 京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "か" },
        ],
        register: "polite",
        notes: "Uses 皆さんは, time first, and 京都の有名なお寺.",
      },
      {
        segments: [
          { text: "皆[みな]さんは 来年[らいねん]、京都[きょうと]に ある 有名[ゆうめい]な お 寺[てら]を 見[み]に " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "か" },
        ],
        register: "polite",
        notes: "Uses 皆さんは, subject first, and 京都にある有名なお寺.",
      },
      {
        segments: [
          { text: "皆[みな]さんは 来年[らいねん]、京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "か" },
        ],
        register: "polite",
        notes: "Uses 皆さんは, subject first, and 京都の有名なお寺.",
      },
      {
        segments: [
          { text: "来年[らいねん]、みんなは 京都[きょうと]に ある 有名[ゆうめい]な お 寺[てら]を 見[み]に " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "か" },
        ],
        register: "casual",
        notes: "Uses みんなは, time first, and 京都にある有名なお寺.",
      },
      {
        segments: [
          { text: "来年[らいねん]、みんなは 京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "か" },
        ],
        register: "casual",
        notes: "Uses みんなは, time first, and 京都の有名なお寺.",
      },
      {
        segments: [
          { text: "みんなは 来年[らいねん]、京都[きょうと]に ある 有名[ゆうめい]な お 寺[てら]を 見[み]に " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "か" },
        ],
        register: "casual",
        notes: "Uses みんなは, subject first, and 京都にある有名なお寺.",
      },
      {
        segments: [
          { text: "みんなは 来年[らいねん]、京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
          { text: "か" },
        ],
        register: "casual",
        notes: "Uses みんなは, subject first, and 京都の有名なお寺.",
      }
    ],
  },
  {
    english: "Someday, I want to fish at a lake.",
    answers: [
      {
        segments: [
          { text: "いつか 湖[みずうみ]で 釣[つ]りを" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class"),
          },
        ],
        notes: "Uses 湖で and 釣りをする.",
      },
      {
        segments: [
          { text: "いつか 湖[みずうみ]で 魚釣[さかなつ]りを" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class"),
          },
        ],
        notes: "Uses 湖で and 魚釣りをする.",
      },
      {
        segments: [
          { text: "いつか 湖[みずうみ]で 釣[つ]りが" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class"),
          },
        ],
        notes: "Uses 湖で and 釣りがする.",
      },
      {
        segments: [
          { text: "いつか 湖[みずうみ]で 魚釣[さかなつ]りが" },
          {
            text: "する",
            blank: true,
            conjugation: tai("Suru verb - special class"),
          },
        ],
        notes: "Uses 湖で and 魚釣りがする.",
      },
      {
        segments: [
          { text: "いつか 湖[みずうみ]に 釣[つ]りに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
        ],
        notes: "Uses 湖に釣りに行く.",
      },
      {
        segments: [
          { text: "いつか 湖[みずうみ]に 魚釣[さかなつ]りに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
        ],
        notes: "Uses 湖に魚釣りに行く.",
      },
      {
        segments: [
          { text: "いつか 湖[みずうみ]へ 釣[つ]りに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
        ],
        notes: "Uses 湖へ釣りに行く.",
      },
      {
        segments: [
          { text: "いつか 湖[みずうみ]へ 魚釣[さかなつ]りに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: tai("Godan verb - Iku/Yuku special class"),
          },
        ],
        notes: "Uses 湖へ魚釣りに行く.",
      }
    ],
  },

]

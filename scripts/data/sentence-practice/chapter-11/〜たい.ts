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
          { text: "けど、お金[おかね]がなかった" },
        ],
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
          { text: "けど、お金[おかね]がなかった" },
        ],
        notes: "へ instead of に",
      },
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
          { text: "けど、お金[おかね]はなかった" },
        ],
        notes: "は marks money as the contrast",
      },
    ],
  },
  {
    english: "Yuki, what do you want to drink at the cafe after class?",
    hint: "Yuki = ゆき; cafe = カフェ",
    answers: [
      {
        segments: [
          { text: "ゆきさん、授業[じゅぎょう]の 後[あと]で カフェで 何[なに]が " },
          { text: "飲[の]みたい", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Standard direct question with が marking the desired drink",
      },
      {
        segments: [
          { text: "ゆきさん、授業[じゅぎょう]の 後[あと]で カフェで 何[なに]を " },
          { text: "飲[の]みたい", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using を instead of が for the thing to drink",
      },
      {
        segments: [
          { text: "ゆきさんは 授業[じゅぎょう]の 後[あと]で カフェで 何[なに]が " },
          { text: "飲[の]みたい", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using は to mark Yuki as the topic",
      },
      {
        segments: [
          { text: "ゆきさんは 授業[じゅぎょう]の 後[あと]で カフェで 何[なに]を " },
          { text: "飲[の]みたい", blank: true },
          { text: "です" },
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
          { text: "昨日[きのう]は、疲[つか]れていました。だから、早[はや]く " },
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
        notes: "Two-sentence version using だから",
      },
      {
        segments: [
          { text: "昨日[きのう]は、疲[つか]れました。だから、早[はや]く " },
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
        notes: "Two-sentence version with 疲れました",
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
          { text: "買[か]いたかった", blank: true },
          { text: "が、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        notes:
          "Basic wording with を marking the desired object and が as 'but'",
      },
      {
        segments: [
          { text: "先月[せんげつ]、新[あたら]しい 自転車[じてんしゃ]が " },
          { text: "買[か]いたかった", blank: true },
          { text: "が、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        notes: "Using が instead of を for the object of 買いたい",
      },
      {
        segments: [
          { text: "先月[せんげつ]は、新[あたら]しい 自転車[じてんしゃ]を " },
          { text: "買[か]いたかった", blank: true },
          { text: "が、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        notes: "Using は after 先月 to set the time as the topic",
      },
      {
        segments: [
          { text: "先月[せんげつ]は、新[あたら]しい 自転車[じてんしゃ]が " },
          { text: "買[か]いたかった", blank: true },
          { text: "が、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        notes: "Combines 先月は with が marking the desired object",
      },
      {
        segments: [
          { text: "先月[せんげつ]、新[あたら]しい 自転車[じてんしゃ]を " },
          { text: "買[か]いたかった", blank: true },
          { text: "。でも、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        notes: "Splitting into two sentences and using でも for 'but'",
      },
      {
        segments: [
          { text: "先月[せんげつ]、新[あたら]しい 自転車[じてんしゃ]が " },
          { text: "買[か]いたかった", blank: true },
          { text: "。でも、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        notes: "Two-sentence version with が marking the desired object",
      },
      {
        segments: [
          { text: "新[あたら]しい 自転車[じてんしゃ]を 先月[せんげつ] " },
          { text: "買[か]いたかった", blank: true },
          { text: "が、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        notes: "Reordered to place the object before the time expression",
      },
      {
        segments: [
          { text: "新[あたら]しい 自転車[じてんしゃ]が 先月[せんげつ] " },
          { text: "買[か]いたかった", blank: true },
          { text: "が、お金[かね]が 全然[ぜんぜん] なかった" },
        ],
        notes: "Reordered version with が marking the desired object",
      },
    ],
  },
  {
    english: "After the exam, I didn't want to answer any questions.",
    answers: [
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、どんな 質問[しつもん]にも " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Standard wording with どんな質問にも for “any questions”",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、どんな 質問[しつもん]にも " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Using 後で instead of 後",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]は、どんな 質問[しつもん]にも " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Using は to mark the post-exam time as the topic",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、質問[しつもん]には 何[なに]も " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Using 質問には何も to express not wanting to answer anything",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、質問[しつもん]には 何[なに]も " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Combines 後で with 質問には何も",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]は、質問[しつもん]には 何[なに]も " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Topicalizes the time with は and uses 質問には何も",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、何[なに]も " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Shorter natural version: did not want to answer anything",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、何[なに]も " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Shorter version using 後で",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]は、何[なに]も " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Shorter version with topical は",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、一[ひと]つも 質問[しつもん]に " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "Using 一つも to emphasize not even one question",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、一[ひと]つも 質問[しつもん]に " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "一つも emphasis with 後で",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]は、一[ひと]つも 質問[しつもん]に " },
          { text: "答[こた]えたくなかった", blank: true },
        ],
        notes: "一つも emphasis with topic は",
      },
    ],
  },
  {
    english: "When I saw the blue sea, I wanted to swim right away.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]た 時[とき]、すぐ ",
          },
          {
            text: "泳[およ]ぎたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard translation using 見た時 and past たい form",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]て、すぐ " },
          {
            text: "泳[およ]ぎたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 見て to mean 'upon seeing' instead of 見た時",
      },
      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]て、私[わたし]は すぐ " },
          {
            text: "泳[およ]ぎたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reordered sentence with 私は after the te-clause",
      },
      {
        segments: [
          {
            text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]た 時[とき]、すぐ ",
          },
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
        ],
        notes: "Using 泳ぎたいと思った to express 'I thought I wanted to swim'",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]て、すぐ " },
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
        ],
        notes: "Using 見て plus 泳ぎたいと思った",
      },
      {
        segments: [
          {
            text: "青[あお]い 海[うみ]を 見[み]た 時[とき]、私[わたし]は すぐ ",
          },
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
        ],
        notes: "Reordered version with 泳ぎたいと思った",
      },
      {
        segments: [
          {
            text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]た 時[とき]、すぐに ",
          },
          {
            text: "泳[およ]ぎたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using すぐに instead of すぐ",
      },
      {
        segments: [
          { text: "私[わたし]は 青[あお]い 海[うみ]を 見[み]て、すぐに " },
          {
            text: "泳[およ]ぎたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 見て and すぐに",
      },
      {
        segments: [
          { text: "青[あお]い 海[うみ]を 見[み]て、私[わたし]は すぐに " },
          {
            text: "泳[およ]ぎたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reordered with すぐに",
      },
    ],
  },
  {
    english:
      "Last night, I wanted to take a bath, but I didn't want to wash my hair.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Basic translation; uses contrastive は for hair",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Adds は to mark last night as the topic",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses には to contrast taking a bath with washing hair",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Combines topical 昨日の夜は with contrastive お風呂には",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses を for the object 髪",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Topic-marked time with を for hair",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Contrastive には with を for hair",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Combines 昨日の夜は and お風呂には with を for hair",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜 for last night",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜 with topic は",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜 and contrastive お風呂には",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜は plus contrastive お風呂には",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜 and を for hair",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜は and を for hair",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜, contrastive には, and を for hair",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]は、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜は, contrastive には, and を for hair",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "。でも、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses でも as a separate-sentence conjunction",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "。でも、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses でも and を for hair",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "。でも、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses でも with contrastive お風呂には",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "。でも、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses でも, contrastive お風呂には, and を for hair",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "。でも、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜 and でも",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "。でも、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜, でも, and を for hair",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "。でも、髪[かみ]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜, contrastive には, and でも",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]には" },
          { text: "入[はい]りたかった", blank: true },
          { text: "。でも、髪[かみ]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜, でも, contrastive には, and を for hair",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、頭[あたま]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 頭を洗う/頭は洗う for washing one's hair/head",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、頭[あたま]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 頭を洗う with を",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、頭[あたま]は" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜 and 頭は洗う",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、お 風呂[ふろ]に" },
          { text: "入[はい]りたかった", blank: true },
          { text: "が、頭[あたま]を" },
          { text: "洗[あら]いたくなかった", blank: true },
        ],
        notes: "Uses 昨夜 and 頭を洗う",
      },
    ],
  },
  {
    english: "I'm sleepy today, so I don't want to drive.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]いから、" },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Standard translation with 今日 as the topic.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]いから、" },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Using 今日 as a time adverb instead of the topic.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]いから、車[くるま]を " },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Explicitly states 車を as the object of driving.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]いから、車[くるま]を " },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "今日 as a time adverb with explicit 車を.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]くて、" },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Uses the い-adjective te-form 眠くて to express the reason.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]くて、" },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "今日 as a time adverb with 眠くて for the reason.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]いから、" },
          { text: "運転[うんてん]は したくない", blank: true },
        ],
        notes:
          "Topicalizes the action with は: as for driving, I don't want to.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]いから、" },
          { text: "運転[うんてん]は したくない", blank: true },
        ],
        notes: "今日 as a time adverb and topicalized 運転は.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]い。だから、" },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Splits the reason into a separate sentence using だから.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]い。だから、車[くるま]を " },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Uses だから and explicitly mentions driving a car.",
      },
      {
        segments: [
          {
            text: "今日[きょう]は 眠[ねむ]いから、車[くるま]の 運転[うんてん]を ",
          },
          { text: "したくない", blank: true },
        ],
        notes: "Uses 車の運転をする as a noun-phrase version of 'drive a car'.",
      },
      {
        segments: [
          {
            text: "今日[きょう]、眠[ねむ]いから、車[くるま]の 運転[うんてん]を ",
          },
          { text: "したくない", blank: true },
        ],
        notes: "今日 as a time adverb with 車の運転をする.",
      },
      {
        segments: [
          {
            text: "今日[きょう]は 眠[ねむ]いから、車[くるま]の 運転[うんてん]は ",
          },
          { text: "したくない", blank: true },
        ],
        notes: "Topicalizes 車の運転 with は.",
      },
      {
        segments: [
          {
            text: "今日[きょう]、眠[ねむ]いから、車[くるま]の 運転[うんてん]は ",
          },
          { text: "したくない", blank: true },
        ],
        notes: "今日 as a time adverb with topicalized 車の運転は.",
      },
      {
        segments: [
          { text: "今日[きょう]は 眠[ねむ]くて、車[くるま]を " },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Uses 眠くて for the reason and explicitly mentions the car.",
      },
      {
        segments: [
          { text: "今日[きょう]、眠[ねむ]くて、車[くるま]を " },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "今日 as a time adverb with 眠くて and explicit 車を.",
      },
      {
        segments: [
          { text: "眠[ねむ]いから、今日[きょう]は " },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Reversed order: gives the reason first, then 今日 as topic.",
      },
      {
        segments: [
          { text: "眠[ねむ]いから、今日[きょう] " },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Reason first with 今日 used adverbially.",
      },
      {
        segments: [
          { text: "眠[ねむ]いから、今日[きょう]は 車[くるま]を " },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Reason first with explicit 車を.",
      },
      {
        segments: [
          { text: "眠[ねむ]いから、今日[きょう] 車[くるま]を " },
          { text: "運転[うんてん]したくない", blank: true },
        ],
        notes: "Reason first, 今日 adverbial, and explicit 車を.",
      },
    ],
  },
  {
    english:
      "This morning, I didn't want to get up at six, but I wanted to eat breakfast with my older brother.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Basic translation with 今朝は, 朝ご飯を, and 兄と一緒に",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Omitting は after 今朝",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Using が for the desired object 朝ご飯",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Omitting は and using が for the desired object",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、朝[あさ]ご 飯[はん]を 兄[あに]と 一緒[いっしょ]に " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Reordered object before companion phrase",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、朝[あさ]ご 飯[はん]を 兄[あに]と 一緒[いっしょ]に " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Reordered object before companion phrase, without は",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、朝[あさ]ご 飯[はん]が 兄[あに]と 一緒[いっしょ]に " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Reordered object with が before companion phrase",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、朝[あさ]ご 飯[はん]が 兄[あに]と 一緒[いっしょ]に " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Reordered object with が, without は",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          {
            text: "が、お 兄[にい]さんと 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を ",
          },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Using お兄さん for older brother",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          {
            text: "が、お 兄[にい]さんと 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を ",
          },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Using お兄さん and omitting は after 今朝",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Omitting 一緒に; と alone expresses eating with older brother",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Omitting 一緒に and は after 今朝",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Omitting 一緒に and using が for the desired object",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 朝[あさ]ご 飯[はん]が " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Omitting 一緒に, using が, and omitting は after 今朝",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、朝[あさ]ご 飯[はん]を 兄[あに]と " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Object before companion phrase without 一緒に",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、朝[あさ]ご 飯[はん]を 兄[あに]と " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Object before companion phrase without 一緒に, omitting は",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、朝[あさ]ご 飯[はん]が 兄[あに]と " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Object with が before companion phrase without 一緒に",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、朝[あさ]ご 飯[はん]が 兄[あに]と " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes:
          "Object with が before companion phrase without 一緒に, omitting は",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]に " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、お 兄[にい]さんと 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Using お兄さん without 一緒に",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Using には to emphasize the time six o'clock",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Using には for six o'clock and omitting は after 今朝",
      },
      {
        segments: [
          { text: "今朝[けさ]は、六時[ろくじ]には " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Using には and が for the desired object",
      },
      {
        segments: [
          { text: "今朝[けさ]、六時[ろくじ]には " },
          { text: "起[お]きたくなかった", blank: true },
          { text: "が、兄[あに]と 一緒[いっしょ]に 朝[あさ]ご 飯[はん]が " },
          { text: "食[た]べたかった", blank: true },
        ],
        notes: "Using には and が, without は after 今朝",
      },
    ],
  },
  {
    english:
      "I want to climb Mount Fuji at least once in my life, but I don't want to go in winter.",
    hint: "Mount Fuji = 富士山 (ふじさん)",
    answers: [
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
      },
      {
        segments: [
          { text: "富士山[ふじさん]に" },
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
        notes: "without 一度は",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に" },
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
        notes: "が connects the contrast",
      },
    ],
  },
  {
    english:
      "I wanted to learn guitar, but I didn't want to practice every day.",
    answers: [
      {
        segments: [
          { text: "ギターを" },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "けど、毎日[まいにち]" },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - special class", "negative", "past"),
          },
        ],
      },
      {
        segments: [
          { text: "ギターが" },
          {
            text: "習[なら]う",
            blank: true,
            conjugation: tai("Godan verb with 'u' ending", "positive", "past"),
          },
          { text: "けど、毎日[まいにち]は" },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: tai("Suru verb - special class", "negative", "past"),
          },
        ],
        notes: "が for ギター and は for 毎日",
      },
    ],
  },
  {
    english:
      "At the party, I wanted to talk with the famous singer, but I didn't want to introduce myself to everyone.",
    answers: [
      {
        segments: [
          { text: "パーティーで、有名[ゆうめい]な 歌手[かしゅ]と" },
          { text: "話[はな]したかった", blank: true },
          { text: "が、みんなに 自己紹介[じこしょうかい]" },
          { text: "したくなかった", blank: true },
        ],
      },
      {
        segments: [
          {
            text: "パーティーで、私[わたし]は 有名[ゆうめい]な 歌手[かしゅ]と",
          },
          { text: "話[はな]したかった", blank: true },
          { text: "が、みんなに 自己紹介[じこしょうかい]" },
          { text: "したくなかった", blank: true },
        ],
      },
    ],
  },
  {
    english:
      "When I was a high school student, I wanted to live in a dorm, but now I don't.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に ",
          },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Basic version with は marking the contrast between then and now; second 寮に is omitted naturally.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に ",
          },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は もう " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Adds もう to express “not anymore” more explicitly.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 高校生[こうこうせい]の 時[とき]、寮[りょう]に ",
          },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "No contrastive は after 時; still natural.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 高校生[こうこうせい]だった 時[とき]は、寮[りょう]に ",
          },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 高校生だった時 instead of 高校生の時.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に ",
          },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は 寮[りょう]に " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Repeats 寮に in the second clause for clarity.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に ",
          },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。でも、今[いま]は " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Splits the sentence and uses でも for “but.”",
      },
      {
        segments: [
          {
            text: "高校生[こうこうせい]の 時[とき]は、私[わたし]は 寮[りょう]に ",
          },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Moves the time phrase to the beginning of the sentence.",
      },
      {
        segments: [
          {
            text: "高校生[こうこうせい]だった 時[とき]は、私[わたし]は 寮[りょう]に ",
          },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Time phrase first, using 高校生だった時.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]に " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は " },
          {
            text: "住[す]みたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Uses 高校の時 as a natural synonym for “when I was in high school.”",
      },
      {
        segments: [
          {
            text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]で ",
          },
          {
            text: "生活[せいかつ]したい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は " },
          {
            text: "生活[せいかつ]したい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 寮で生活する as a natural alternative to 寮に住む.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 高校生[こうこうせい]の 時[とき]は、寮[りょう]に ",
          },
          {
            text: "入[はい]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は " },
          {
            text: "入[はい]りたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 寮に入る, which naturally means to enter/live in a dorm.",
      },
      {
        segments: [
          { text: "私[わたし]は 高校[こうこう]の 時[とき]は、寮[りょう]で " },
          {
            text: "生活[せいかつ]したい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、今[いま]は もう " },
          {
            text: "生活[せいかつ]したい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Combines 高校の時 with 寮で生活する and もう for “not anymore.”",
      },
    ],
  },
  {
    english:
      "Last Friday, I didn't want to take the last train home, so I stayed at a hotel near the station.",
    answers: [
      {
        segments: [
          {
            text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で ",
          },
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
        notes:
          "Standard wording with から for “so/because” and ホテルに泊まる.",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 金曜日[きんようび]は、終電[しゅうでん]で ",
          },
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
        notes:
          "Uses は after the time phrase to set “last Friday” as the topic.",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で うちに ",
          },
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
        notes: "Explicitly says “go home to my place” with うちに帰る.",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で 家[いえ]に ",
          },
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
        notes: "Uses 家に帰る for “go home.”",
      },
      {
        segments: [
          { text: "終電[しゅうでん]で " },
          { text: "帰[かえ]りたくなかった", blank: true },
          {
            text: "から、先週[せんしゅう]の 金曜日[きんようび]、駅[えき]の 近[ちか]くの ホテルに ",
          },
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
        notes: "Reversed order: reason first, then the time and result.",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で ",
          },
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
        notes:
          "Uses 駅の近くにあるホテル (“a hotel located near the station”).",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で ",
          },
          { text: "帰[かえ]りたくなかった", blank: true },
          { text: "から、駅[えき]の 近[ちか]くの ホテルで " },
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
        notes: "Uses で with ホテル to mark the place of staying.",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 金曜日[きんようび]、終電[しゅうでん]で ",
          },
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
      },
    ],
  },
  {
    english:
      "I wanted to go camping by the river, but I didn't want to sleep somewhere cold.",
    answers: [
      {
        segments: [
          { text: "川[かわ]のそばで キャンプに" },
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
        notes: "キャンプする instead of キャンプに行く",
      },
    ],
  },
  {
    english:
      "I want to visit a shrine for New Year's, but I don't want to wake up early.",
    answers: [
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]に" },
          { text: "行[い]きたい", blank: true },
          { text: "けど、早[はや]く" },
          { text: "起[お]きたくない", blank: true },
        ],
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]へ" },
          { text: "行[い]きたい", blank: true },
          { text: "けど、早[はや]く" },
          { text: "起[お]きたくない", blank: true },
        ],
      },
    ],
  },
  {
    english:
      "Does everyone want to go see a famous temple in Kyoto next year?",
    answers: [
      {
        segments: [
          {
            text: "来年[らいねん]、皆[みな]さんは 京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
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
          "Standard order with 来年 first and お寺; たい conjugated as an い-adjective",
      },
      {
        segments: [
          {
            text: "皆[みな]さんは 来年[らいねん]、京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Topic first, then time expression",
      },
      {
        segments: [
          {
            text: "京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を、皆[みな]さんは 来年[らいねん] 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Object fronted for emphasis",
      },
      {
        segments: [
          {
            text: "来年[らいねん]、皆[みな]さんは メキシコの 有名[ゆうめい]な 城[しろ]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using 城 without honorific お",
      },
      {
        segments: [
          {
            text: "皆[みな]さんは 来年[らいねん]、メキシコの 有名[ゆうめい]な 城[しろ]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Topic-first order with 城 instead of お城",
      },
      {
        segments: [
          {
            text: "来年[らいねん]、みんなは 京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using みんな instead of 皆さん",
      },
      {
        segments: [
          {
            text: "みんなは 来年[らいねん]、京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using みんな with topic-first order",
      },
      {
        segments: [
          {
            text: "来年[らいねん]、皆[みな]さん、京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Addressing the group directly without は",
      },
      {
        segments: [
          {
            text: "皆[みな]さん、来年[らいねん]、京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Direct address with 皆さん at the beginning",
      },
      {
        segments: [
          {
            text: "来年[らいねん]、みんな、京都[きょうと]の 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Direct address with みんな",
      },
      {
        segments: [
          {
            text: "来年[らいねん]、皆[みな]さんは 京都[きょうと]に ある 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using 京都にある to mean “located in Kyoto”",
      },
      {
        segments: [
          {
            text: "皆[みな]さんは 来年[らいねん]、京都[きょうと]に ある 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Topic-first order with 京都にある",
      },
      {
        segments: [
          {
            text: "来年[らいねん]、みんなは 京都[きょうと]に ある 有名[ゆうめい]な お 寺[てら]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using みんな and メキシコにある",
      },
      {
        segments: [
          {
            text: "来年[らいねん]、皆[みな]さんは メキシコに ある 有名[ゆうめい]な 城[しろ]を 見[み]に ",
          },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "メキシコにある with 城 instead of お城",
      },
    ],
  },
  {
    english: "Someday, I want to try fishing at a lake.",
    answers: [
      {
        segments: [
          { text: "いつか 湖[みずうみ]で つりを" },
          { text: "してみたい", blank: true },
        ],
      },
      {
        segments: [
          { text: "いつか 湖[みずうみ]に つりに" },
          { text: "行[い]ってみたい", blank: true },
        ],
      },
    ],
  },
]

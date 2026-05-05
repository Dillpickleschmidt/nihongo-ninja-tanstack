import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Kenji was singing in the library!",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で" },
          { text: "歌[うた]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "けんじさんが 図書館[としょかん]で" },
          { text: "歌[うた]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で 歌[うた]を" },
          { text: "歌[うた]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "歌を歌っていた — 'singing a song'",
      },
      {
        segments: [
          { text: "けんじさんが 図書館[としょかん]で 歌[うた]を" },
          { text: "歌[うた]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "歌を歌っていた + が",
      },
    ],
  },
  {
    english: "Kenji is married.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは" },
          { text: "結婚[けっこん]して", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "My older brother was playing tennis in the park yesterday.",
    answers: [
      {
        segments: [
          { text: "兄[あに]は 昨日[きのう]、公園[こうえん]で テニスを " },
          { text: "していた", blank: true },
        ],
        notes: "Standard word order with は; 兄 implies my older brother.",
      },
      {
        segments: [
          { text: "昨日[きのう]、兄[あに]は 公園[こうえん]で テニスを " },
          { text: "していた", blank: true },
        ],
        notes: "Time expression placed at the beginning.",
      },
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 兄[あに]は テニスを " },
          { text: "していた", blank: true },
        ],
        notes: "Location placed before the subject.",
      },
      {
        segments: [
          { text: "兄[あに]は 公園[こうえん]で 昨日[きのう] テニスを " },
          { text: "していた", blank: true },
        ],
        notes:
          "Time expression placed after the location; natural with a slight focus on yesterday.",
      },
      {
        segments: [
          { text: "兄[あに]が 昨日[きのう]、公園[こうえん]で テニスを " },
          { text: "していた", blank: true },
        ],
        notes:
          "Using が instead of は to identify the older brother as the one playing.",
      },
      {
        segments: [
          { text: "昨日[きのう]、兄[あに]が 公園[こうえん]で テニスを " },
          { text: "していた", blank: true },
        ],
        notes: "が-marked subject with the time expression first.",
      },
      {
        segments: [
          {
            text: "私[わたし]の 兄[あに]は 昨日[きのう]、公園[こうえん]で テニスを ",
          },
          { text: "していた", blank: true },
        ],
        notes: "Explicitly says 'my older brother' with 私の兄.",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、私[わたし]の 兄[あに]は 公園[こうえん]で テニスを ",
          },
          { text: "していた", blank: true },
        ],
        notes: "Explicit 'my older brother' with the time expression first.",
      },
      {
        segments: [
          {
            text: "私[わたし]の 兄[あに]が 昨日[きのう]、公園[こうえん]で テニスを ",
          },
          { text: "していた", blank: true },
        ],
        notes: "Explicit 'my older brother' with が for identification.",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、私[わたし]の 兄[あに]が 公園[こうえん]で テニスを ",
          },
          { text: "していた", blank: true },
        ],
        notes: "Explicit 'my older brother' and が, with yesterday first.",
      },
      {
        segments: [
          {
            text: "兄[あに]は 昨日[きのう]、公園[こうえん]で テニスを やっていた",
            blank: true,
          },
        ],
        notes:
          "Uses やる instead of する, which is natural for playing a sport.",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、兄[あに]は 公園[こうえん]で テニスを やっていた",
            blank: true,
          },
        ],
        notes: "やる version with the time expression first.",
      },
      {
        segments: [
          {
            text: "兄[あに]が 昨日[きのう]、公園[こうえん]で テニスを やっていた",
            blank: true,
          },
        ],
        notes: "やる version with が marking the subject.",
      },
      {
        segments: [
          {
            text: "私[わたし]の 兄[あに]は 昨日[きのう]、公園[こうえん]で テニスを やっていた",
            blank: true,
          },
        ],
        notes: "Explicit 'my older brother' with やる.",
      },
    ],
  },
  {
    english: "The door is open.",
    answers: [
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]いて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "ドアは" },
          { text: "開[あ]いて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "は particle",
      },
    ],
  },
  {
    english: "Kenji is taking pictures of the flowers near the temple.",
    hint: "Kenji = 健二",
    answers: [
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、お寺[てら]の 近[ちか]くで 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Standard wording; taking pictures near the temple",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、お寺[てら]の 近[ちか]くの 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Specifies that the flowers are near the temple",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、お寺[てら]の 近[ちか]くで 花[はな]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Uses 花を撮る, a natural way to say photographing flowers",
      },
      {
        segments: [
          {
            text: "今[いま]、健二[けんじ]さんは お寺[てら]の 近[ちか]くで 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Moves 今 to the beginning",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんが 今[いま]、お寺[てら]の 近[ちか]くで 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Uses が to focus on Kenji as the one doing the action",
      },
      {
        segments: [
          {
            text: "健二[けんじ]は 今[いま]、お寺[てら]の 近[ちか]くで 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "No honorific さん on Kenji; natural in narration",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは お寺[てら]の 近[ちか]くで 今[いま]、花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Places 今 after the location phrase",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 花[はな]の 写真[しゃしん]を 今[いま]、お寺[てら]の 近[ちか]くで ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Object placed before time and location",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、寺[てら]の 近[ちか]くで 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Uses 寺 instead of お寺",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、寺[てら]の 近[ちか]くの 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Uses 寺 and directly modifies the flowers as near the temple",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、寺[てら]の 近[ちか]くで 花[はな]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Uses 寺 and 花を撮る",
      },
      {
        segments: [
          {
            text: "今[いま]、健二[けんじ]さんは お寺[てら]の 近[ちか]くの 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes:
          "今 at beginning and flowers directly described as near the temple",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんが 今[いま]、お寺[てら]の 近[ちか]くの 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "が with flowers specified as near the temple",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんが 今[いま]、お寺[てら]の 近[ちか]くで 花[はな]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "が with 花を撮る",
      },
      {
        segments: [
          {
            text: "健二[けんじ]は 今[いま]、お寺[てら]の 近[ちか]くの 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "No honorific and flowers specified as near temple",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、お寺[てら]の 近[ちか]くで 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]ってる", blank: true },
        ],
        notes: "Contracted てる form, common in speech",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、お寺[てら]の 近[ちか]くの 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]ってる", blank: true },
        ],
        notes: "Contracted てる with flowers specified as near the temple",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、お寺[てら]の 近[ちか]くで 花[はな]を ",
          },
          { text: "撮[と]ってる", blank: true },
        ],
        notes: "Contracted てる with 花を撮る",
      },
      {
        segments: [
          {
            text: "今[いま]、健二[けんじ]さんは お寺[てら]の 近[ちか]くで 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]ってる", blank: true },
        ],
        notes: "Contracted てる with 今 at the beginning",
      },
      {
        segments: [
          {
            text: "健二[けんじ]は 今[いま]、お寺[てら]の 近[ちか]くで 花[はな]の 写真[しゃしん]を ",
          },
          { text: "撮[と]ってる", blank: true },
        ],
        notes: "Contracted てる and no honorific",
      },
      {
        segments: [
          {
            text: "健二[けんじ]さんは 今[いま]、花[はな]の 写真[しゃしん]を お寺[てら]の 近[ちか]くで ",
          },
          { text: "撮[と]っている", blank: true },
        ],
        notes: "Location placed immediately before the verb",
      },
    ],
  },
  {
    english:
      "My mother was waiting in front of the station yesterday at seven o’clock.",
    answers: [
      {
        segments: [
          {
            text: "母[はは]は 昨日[きのう]、七時[しちじ]に 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Standard translation using 母は and 駅の前で",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、七時[しちじ]に 母[はは]は 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 七時[しちじ]に、母[はは]は 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Using 昨日の七時に as a combined time expression",
      },
      {
        segments: [
          {
            text: "母[はは]は 七時[しちじ]に 昨日[きのう]、駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes:
          "Seven o'clock placed before yesterday; still natural though less common",
      },
      {
        segments: [
          {
            text: "母[はは]が 昨日[きのう]、七時[しちじ]に 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Using が instead of は to identify who was waiting",
      },
      {
        segments: [
          { text: "母[はは]は 昨日[きのう]、七時[しちじ]に 駅前[えきまえ]で " },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Using the compound 駅前 instead of 駅の前",
      },
      {
        segments: [
          { text: "母[はは]が 昨日[きのう]、七時[しちじ]に 駅前[えきまえ]で " },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Using が and the compound 駅前",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、七時[しちじ]に 母[はは]が 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Time phrase first, with が marking the subject",
      },
      {
        segments: [
          { text: "昨日[きのう]、七時[しちじ]に 母[はは]は 駅前[えきまえ]で " },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Time phrase first and 駅前",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 七時[しちじ]に、母[はは]が 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Combined time expression with が",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 七時[しちじ]に、母[はは]は 駅前[えきまえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Combined time expression and 駅前",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 七時[しちじ]、母[はは]は 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Omitting に after the combined time expression",
      },
      {
        segments: [
          { text: "昨日[きのう]の 七時[しちじ]、母[はは]は 駅前[えきまえ]で " },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Omitting に with combined time, using 駅前",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 七時[しちじ]、母[はは]が 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Omitting に with combined time, using が",
      },
      {
        segments: [
          {
            text: "母[はは]は 駅[えき]の 前[まえ]で 昨日[きのう]の 七時[しちじ]に ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Location placed before time",
      },
      {
        segments: [
          {
            text: "母[はは]は 駅前[えきまえ]で 昨日[きのう]の 七時[しちじ]に ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Location first with 駅前",
      },
      {
        segments: [
          {
            text: "母[はは]が 駅[えき]の 前[まえ]で 昨日[きのう]の 七時[しちじ]に ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Location first with が",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、駅[えき]の 前[まえ]で 七時[しちじ]に 母[はは]は ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Subject placed near the verb after time and location",
      },
      {
        segments: [
          { text: "昨日[きのう]、駅前[えきまえ]で 七時[しちじ]に 母[はは]は " },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Subject near verb, using 駅前",
      },
      {
        segments: [
          {
            text: "昨日[きのう] 七時[しちじ]に、母[はは]は 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes:
          "No comma/particle between 昨日 and 七時に, a natural adverbial sequence",
      },
      {
        segments: [
          {
            text: "私[わたし]の 母[はは]は 昨日[きのう]、七時[しちじ]に 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Explicitly saying 私の母 for 'my mother'",
      },
      {
        segments: [
          {
            text: "私[わたし]の 母[はは]が 昨日[きのう]、七時[しちじ]に 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Explicit 私の母 with が",
      },
      {
        segments: [
          {
            text: "私[わたし]の 母[はは]は 昨日[きのう]、七時[しちじ]に 駅前[えきまえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Explicit 私の母 and 駅前",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、七時[しちじ]に 私[わたし]の 母[はは]は 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Time phrase first with explicit 私の母",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 七時[しちじ]に、私[わたし]の 母[はは]は 駅[えき]の 前[まえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes: "Combined time expression with explicit 私の母",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 七時[しちじ]、私[わたし]の 母[はは]は 駅前[えきまえ]で ",
          },
          { text: "待[ま]っていた", blank: true },
        ],
        notes:
          "Omitting に in the combined time expression with explicit 私の母 and 駅前",
      },
    ],
  },
  {
    english: "Is Kenji wearing glasses?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 眼鏡[めがね]を" },
          { text: "かけて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "The children are swimming in the sea.",
    answers: [
      {
        segments: [
          { text: "子供[こども]は 今[いま]、海[うみ]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Basic translation using は and 今 before the location.",
      },
      {
        segments: [
          { text: "子供[こども]たちは 今[いま]、海[うみ]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Uses plural 子供たち for 'the children'.",
      },
      {
        segments: [
          { text: "今[いま]、子供[こども]たちは 海[うみ]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Time expression placed at the beginning.",
      },
      {
        segments: [
          { text: "子供[こども]たちは 海[うみ]で 今[いま] " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "今 placed immediately before the verb phrase.",
      },
      {
        segments: [
          { text: "今[いま]、子供[こども]は 海[うみ]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Singular-form collective 子供 with time at sentence start.",
      },
      {
        segments: [
          { text: "子供[こども]が 今[いま]、海[うみ]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Uses が to mark the children as the observed subject.",
      },
      {
        segments: [
          { text: "子供[こども]たちが 今[いま]、海[うみ]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Uses plural 子供たち with が.",
      },
      {
        segments: [
          { text: "今[いま]、子供[こども]たちが 海[うみ]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "が-marked subject with time expression first.",
      },
      {
        segments: [
          { text: "今[いま]、子供[こども]が 海[うみ]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Collective 子供 with が and time first.",
      },
      {
        segments: [
          { text: "子供[こども]たちは 今[いま]、海[うみ]で " },
          { text: "泳[およ]いでる", blank: true },
        ],
        notes: "Uses the common contracted form てる.",
      },
      {
        segments: [
          { text: "子供[こども]は 今[いま]、海[うみ]で " },
          { text: "泳[およ]いでる", blank: true },
        ],
        notes: "Collective 子供 with contracted てる.",
      },
      {
        segments: [
          { text: "今[いま]、子供[こども]たちは 海[うみ]で " },
          { text: "泳[およ]いでる", blank: true },
        ],
        notes: "Contracted てる with time expression at the beginning.",
      },
      {
        segments: [
          { text: "今[いま]、海[うみ]で 子供[こども]たちが " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes:
          "Location placed before the subject, with が for what is being observed.",
      },
      {
        segments: [
          { text: "今[いま]、海[うみ]で 子供[こども]たちは " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Location placed before the は-marked topic.",
      },
      {
        segments: [
          { text: "子供[こども]たちは 今[いま]、海[うみ]の 中[なか]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Uses 海の中で to emphasize being in the sea/water.",
      },
      {
        segments: [
          { text: "今[いま]、子供[こども]たちは 海[うみ]の 中[なか]で " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "海の中で with the time expression at the beginning.",
      },
      {
        segments: [
          { text: "子供[こども]たちは 海[うみ]で " },
          { text: "泳[およ]いでいる", blank: true },
          { text: "、今[いま]" },
        ],
        notes: "今 placed after the predicate as an afterthought.",
      },
      {
        segments: [
          { text: "海[うみ]で 子供[こども]たちが 今[いま] " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Starts with the location, then が-marked subject.",
      },
      {
        segments: [
          { text: "海[うみ]で 子供[こども]たちは 今[いま] " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "Starts with the location, then は-marked topic.",
      },
      {
        segments: [
          { text: "子供[こども]たちが 海[うみ]で 今[いま] " },
          { text: "泳[およ]いでいる", blank: true },
        ],
        notes: "が-marked subject with 今 immediately before the verb phrase.",
      },
    ],
  },
  {
    english: "I was writing a report at the library yesterday at ten o’clock.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]、十時[じゅうじ]に 図書館[としょかん]で レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes:
          "Standard translation with ていた for an action in progress in the past",
      },
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]、図書館[としょかん]で 十時[じゅうじ]に レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Location before the specific time",
      },
      {
        segments: [
          {
            text: "私[わたし]は 十時[じゅうじ]に 昨日[きのう]、図書館[としょかん]で レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes:
          "Specific time placed before yesterday; still natural with a pause",
      },
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]の 十時[じゅうじ]に、図書館[としょかん]で レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Uses 昨日の十時に to mean at ten o’clock yesterday",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、私[わたし]は 十時[じゅうじ]に 図書館[としょかん]で レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "昨日 placed at the start",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 十時[じゅうじ]に、私[わたし]は 図書館[としょかん]で レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "昨日の十時に placed at the start",
      },
      {
        segments: [
          {
            text: "私[わたし]が 昨日[きのう]、十時[じゅうじ]に 図書館[としょかん]で レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Uses が to emphasize that I was the one writing",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、十時[じゅうじ]に 私[わたし]は 図書館[としょかん]で レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Time phrase before the subject",
      },
      {
        segments: [
          {
            text: "図書館[としょかん]で、私[わたし]は 昨日[きのう]の 十時[じゅうじ]に レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Location topicalized/fronted",
      },
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]、十時[じゅうじ]に 図書館[としょかん]で レポート ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Casual-sounding dropped を after レポート",
      },
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]、十時[じゅうじ]に レポートを 図書館[としょかん]で ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Object placed before the location",
      },
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]の 十時[じゅうじ]に、レポートを 図書館[としょかん]で ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Uses 昨日の十時に with object before location",
      },
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]、十時[じゅうじ]には 図書館[としょかん]で レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Uses 十時には to emphasize what was happening at ten",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 十時[じゅうじ]には、私[わたし]は 図書館[としょかん]で レポートを ",
          },
          { text: "書[か]いていた", blank: true },
        ],
        notes: "Fronted time phrase with は for emphasis",
      },
    ],
  },
  {
    english: "The light in the room is on.",
    answers: [
      {
        segments: [
          { text: "部屋[へや]の 電気[でんき]は" },
          { text: "つけて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]の 電気[でんき]が" },
          { text: "つけて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が particle",
      },
      {
        segments: [
          { text: "部屋[へや]の 電気[でんき]が" },
          { text: "ついて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          'Intransitive つく (電気がついている) — more natural for "the light is on"',
      },
    ],
  },
  {
    english: "My father is taking a shower, so please wait a little.",
    answers: [
      {
        segments: [
          { text: "父[ちち]は 今[いま]、シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、少[すこ]し 待[ま]ってください" },
        ],
        notes: "Basic wording with 父 and 今 before the action",
      },
      {
        segments: [
          { text: "父[ちち]は 今[いま]、シャワーを " },
          { text: "浴[あ]びています", blank: true },
          { text: "から、少[すこ]し 待[ま]ってください" },
        ],
        notes: "Polite ています form in the reason clause",
      },
      {
        segments: [
          { text: "父[ちち]は 今[いま]、シャワーを " },
          { text: "浴[あ]びてる", blank: true },
          { text: "から、少[すこ]し 待[ま]ってください" },
        ],
        notes: "Contracted てる form",
      },
      {
        segments: [
          { text: "父[ちち]は 今[いま]、シャワーを " },
          { text: "浴[あ]びてます", blank: true },
          { text: "から、少[すこ]し 待[ま]ってください" },
        ],
        notes: "Contracted polite てます form",
      },
      {
        segments: [
          { text: "父[ちち]が 今[いま]、シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、少[すこ]し 待[ま]ってください" },
        ],
        notes: "Using が to identify father as the reason",
      },
      {
        segments: [
          { text: "今[いま]、父[ちち]は シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、少[すこ]し 待[ま]ってください" },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "今[いま]、父[ちち]が シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、少[すこ]し 待[ま]ってください" },
        ],
        notes: "Time phrase first and が marking the subject",
      },
      {
        segments: [
          { text: "父[ちち]は シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、今[いま] 少[すこ]し 待[ま]ってください" },
        ],
        notes: "今 placed in the request clause, still meaning wait now",
      },
      {
        segments: [
          { text: "父[ちち]が シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、今[いま] 少[すこ]し 待[ま]ってください" },
        ],
        notes: "が subject marker with 今 in the request clause",
      },
      {
        segments: [
          { text: "父[ちち]は 今[いま]、シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、ちょっと 待[ま]ってください" },
        ],
        notes: "Using ちょっと instead of 少し",
      },
      {
        segments: [
          { text: "父[ちち]が 今[いま]、シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、ちょっと 待[ま]ってください" },
        ],
        notes: "が subject marker and ちょっと",
      },
      {
        segments: [
          { text: "今[いま]、父[ちち]は シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、ちょっと 待[ま]ってください" },
        ],
        notes: "今 at sentence beginning with ちょっと",
      },
      {
        segments: [
          { text: "今[いま]、父[ちち]が シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、ちょっと 待[ま]ってください" },
        ],
        notes: "今 first, が, and ちょっと",
      },
      {
        segments: [
          { text: "父[ちち]は シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、今[いま] ちょっと 待[ま]ってください" },
        ],
        notes: "今 in request clause with ちょっと",
      },
      {
        segments: [
          { text: "父[ちち]が シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、今[いま] ちょっと 待[ま]ってください" },
        ],
        notes: "が subject marker with 今 in request clause and ちょっと",
      },
      {
        segments: [
          { text: "お父[とう]さんは 今[いま]、シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、少[すこ]し 待[ま]ってください" },
        ],
        notes: "Using お父さん instead of 父",
      },
      {
        segments: [
          { text: "お父[とう]さんが 今[いま]、シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、少[すこ]し 待[ま]ってください" },
        ],
        notes: "お父さん with が",
      },
      {
        segments: [
          { text: "お父[とう]さんは 今[いま]、シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、ちょっと 待[ま]ってください" },
        ],
        notes: "お父さん with ちょっと",
      },
      {
        segments: [
          { text: "お父[とう]さんが 今[いま]、シャワーを " },
          { text: "浴[あ]びている", blank: true },
          { text: "から、ちょっと 待[ま]ってください" },
        ],
        notes: "お父さん with が and ちょっと",
      },
    ],
  },
  {
    english: "Kenji's younger brother is living in Canada now.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は 今[いま] カナダに" },
          { text: "住[す]んで", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は カナダに 今[いま]" },
          { text: "住[す]んで", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今 moved after カナダに",
      },
    ],
  },
  {
    english: "The cat is sleeping under the chair.",
    answers: [
      {
        segments: [
          { text: "猫[ねこ]は 今[いま]、椅子[いす]の 下[した]で " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Standard wording with conjugation metadata on いる to generate polite/casual forms",
      },
      {
        segments: [
          { text: "猫[ねこ]が 今[いま]、椅子[いす]の 下[した]で " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が to identify the cat as the subject",
      },
      {
        segments: [
          { text: "今[いま]、猫[ねこ]は 椅子[いす]の 下[した]で " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "今[いま]、猫[ねこ]が 椅子[いす]の 下[した]で " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time phrase first with が marking the subject",
      },
      {
        segments: [
          { text: "椅子[いす]の 下[した]で、猫[ねこ]は 今[いま] " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Location phrase placed at the beginning",
      },
      {
        segments: [
          { text: "椅子[いす]の 下[した]で、猫[ねこ]が 今[いま] " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Location phrase first with が marking the subject",
      },
      {
        segments: [
          { text: "猫[ねこ]は 椅子[いす]の 下[した]で 今[いま] " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今 placed immediately before the verb phrase",
      },
      {
        segments: [
          { text: "猫[ねこ]が 椅子[いす]の 下[した]で 今[いま] " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今 before the verb with が marking the subject",
      },
      {
        segments: [
          { text: "今[いま]、椅子[いす]の 下[した]で 猫[ねこ]が " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Both time and location placed before the subject; natural for reporting what is happening",
      },
      {
        segments: [
          { text: "猫[ねこ]、今[いま] 椅子[いす]の 下[した]で " },
          { text: "寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Casual spoken style with the subject particle omitted",
      },
    ],
  },
  {
    english: "The window is closed.",
    answers: [
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "閉[し]まって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "窓[まど]は" },
          { text: "閉[し]まって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "は particle",
      },
    ],
  },
  {
    english: "I'm always listening to music while studying.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は いつも 勉強[べんきょう]して 音楽[おんがく]を 聞[き]いて",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "私[わたし]が いつも 勉強[べんきょう]して 音楽[おんがく]を 聞[き]いて",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "私[わたし]は 勉強[べんきょう]して いつも 音楽[おんがく]を 聞[き]いて",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "いつも moved after 勉強して",
      },
      {
        segments: [
          {
            text: "私[わたし]は いつも 勉強[べんきょう]して 音楽[おんがく]を 聴[き]いて",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 聴く (listen attentively) instead of 聞く",
      },
    ],
  },
  {
    english:
      "At nine o’clock last night, my grandfather was watching TV at home.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]の おじいさんは 昨日[きのう]の 夜[よる] 九時[くじ]に 家[いえ]で テレビを ",
          },
          { text: "見[み]ていた", blank: true },
        ],
        notes: "Basic sentence using known vocabulary; subject marked with は.",
      },
      {
        segments: [
          {
            text: "私[わたし]の おじいさんが 昨日[きのう]の 夜[よる] 九時[くじ]に 家[いえ]で テレビを ",
          },
          { text: "見[み]ていた", blank: true },
        ],
        notes:
          "Using が to mark the subject; natural when identifying who was watching.",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる] 九時[くじ]に、私[わたし]の おじいさんは 家[いえ]で テレビを ",
          },
          { text: "見[み]ていた", blank: true },
        ],
        notes: "Time phrase placed at the beginning.",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる] 九時[くじ]に、私[わたし]の おじいさんが 家[いえ]で テレビを ",
          },
          { text: "見[み]ていた", blank: true },
        ],
        notes: "Time-fronted version with が subject marking.",
      },
      {
        segments: [
          {
            text: "私[わたし]の おじいさんは 家[いえ]で 昨日[きのう]の 夜[よる] 九時[くじ]に テレビを ",
          },
          { text: "見[み]ていた", blank: true },
        ],
        notes: "Location placed before the time phrase.",
      },
      {
        segments: [
          {
            text: "私[わたし]の おじいさんは 昨日[きのう]の 夜[よる] 九時[くじ]に うちで テレビを ",
          },
          { text: "見[み]ていた", blank: true },
        ],
        notes: "Using うち for home/my place instead of 家.",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる] 九時[くじ]に、私[わたし]の おじいさんは うちで テレビを ",
          },
          { text: "見[み]ていた", blank: true },
        ],
        notes: "Time-fronted version using うち for home.",
      },
    ],
  },
  {
    english: "I was using my dad's car every day back then.",
    answers: [
      {
        segments: [
          {
            text: "あのころ、 私[わたし]は 毎日[まいにち] 父[ちち]の 車[くるま]を 使[つか]って",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "その 頃[ころ]、 私[わたし]は 毎日[まいにち] 父[ちち]の 車[くるま]を 使[つか]って",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "その頃 instead of あのころ",
      },
      {
        segments: [
          {
            text: "あのころ、 私[わたし]は 父[ちち]の 車[くるま]を 毎日[まいにち] 使[つか]って",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "毎日 moved after 車を",
      },
      {
        segments: [
          {
            text: "私[わたし]は あのころ、 毎日[まいにち] 父[ちち]の 車[くるま]を 使[つか]って",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "私は at start, あのころ after は",
      },
      {
        segments: [
          {
            text: "あのころ、 私[わたし]は 毎日[まいにち] 父[ちち]の 車[くるま]に 乗[の]って",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "乗っていた — 'was riding/taking' as a synonym for using",
      },
      {
        segments: [
          {
            text: "その 頃[ころ]、 私[わたし]は 父[ちち]の 車[くるま]を 毎日[まいにち] 使[つか]って",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "その頃 + 毎日 after 車を",
      },
      {
        segments: [
          {
            text: "毎日[まいにち]、 あのころは 私[わたし]は 父[ちち]の 車[くるま]を 使[つか]って",
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "毎日 fronted, あのころは as topic",
      },
    ],
  },
  {
    english: "The dog is sitting on the chair.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]は いすに" },
          {
            text: "座[すわ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "犬[いぬ]は いすの 上[うえ]に" },
          {
            text: "座[すわ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "With 上に (on top of)",
      },
      {
        segments: [
          { text: "犬[いぬ]が いすに" },
          {
            text: "座[すわ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が particle",
      },
      {
        segments: [
          { text: "犬[いぬ]が いすの 上[うえ]に" },
          {
            text: "座[すわ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が particle + 上に",
      },
    ],
  },
  {
    english: "The traffic light has turned red.",
    answers: [
      {
        segments: [
          { text: "信号[しんごう]は" },
          { text: "赤[あか]くなって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "信号[しんごう]が" },
          { text: "赤[あか]くなって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が particle",
      },
    ],
  },
  {
    english: "The dog is dead.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]は" },
          { text: "死[し]んで", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "犬[いぬ]が" },
          { text: "死[し]んで", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は",
      },
    ],
  },
]

import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "There's a cat in the park.",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]に 猫[ねこ]が" },
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
        notes: "Standard word order: location に + noun が + いる",
      },
      {
        segments: [
          { text: "公園[こうえん]に 猫[ねこ]が" },
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
          { text: "よ" },
        ],
        notes: "With よ sentence-final particle for emphasis",
      },
      {
        segments: [
          { text: "公園[こうえん]に 猫[ねこ]が" },
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
          { text: "ね" },
        ],
        notes: "With ね sentence-final particle (seeking agreement)",
      },
      {
        segments: [
          { text: "この 公園[こうえん]に 猫[ねこ]が" },
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
        notes: 'この公園 — "this park" (nearby park)',
      },
      {
        segments: [
          { text: "その 公園[こうえん]に 猫[ねこ]が" },
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
        notes: 'その公園 — "that park" (near listener)',
      },
    ],
  },
  {
    english: "There's a dog over there.",
    answers: [
      {
        segments: [
          { text: "あそこに 犬[いぬ]が" },
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
        notes: "Standard word order: location + noun + がいる",
      },
      {
        segments: [
          { text: "あそこに 犬[いぬ]が" },
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
          { text: "ね" },
        ],
        notes: "With ね particle — seeking agreement/confirmation",
      },
      {
        segments: [
          { text: "あそこに 犬[いぬ]が" },
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
          { text: "よ" },
        ],
        notes:
          "With よ particle — natural when pointing something out to someone",
      },
    ],
  },
  {
    english: "Is there a menu here?",
    answers: [
      {
        segments: [
          { text: "ここに メニューが" },
          {
            text: "ある",
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
          "Standard: ここに + メニューが (blank) ある + か question marker",
      },
      {
        segments: [
          { text: "メニューが" },
          {
            text: "ある",
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
          "Without ここに — location dropped, just asking if there's a menu",
      },
      {
        segments: [
          { text: "ここ メニューが" },
          {
            text: "ある",
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
          "Dropping に particle after ここ — casual speech particle omission",
      },
    ],
  },
  {
    english: "There's a newspaper on the desk.",
    answers: [
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 新聞[しんぶん]が" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard word order: location + subject + ある",
      },
      {
        segments: [
          { text: "机[つくえ]に 新聞[しんぶん]が" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Simplified location: 机に instead of 机の上に (on/at the desk)",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 新聞[しんぶん]" },
          {
            text: "が ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "よ" },
        ],
        notes: "With よ particle for emphasis/informing",
      },
    ],
  },
  {
    english: "Is there a doctor at the hospital?",
    answers: [
      {
        segments: [
          { text: "病院[びょういん]に 医者[いしゃ]が" },
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
        notes: "Standard word order: location に + subject が + いる + か",
      },
      {
        segments: [
          { text: "病院[びょういん]には 医者[いしゃ]が" },
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
        notes: "Using には (topic marker on location) instead of just に",
      },
    ],
  },
  {
    english: "There's no bread at the supermarket.",
    answers: [
      {
        segments: [
          { text: "スーパーに パンが" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic: location に + noun が + ある (negative)",
      },
      {
        segments: [
          { text: "スーパーには パンが" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "には for contrastive topic marking on the location",
      },
      {
        segments: [
          { text: "スーパーには パンが" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "よ" },
        ],
        notes: "Adding よ sentence-final particle for assertiveness",
      },
      {
        segments: [
          { text: "スーパーに パンが" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "ね" },
        ],
        notes: "Adding ね for seeking agreement",
      },
    ],
  },
  {
    english: "There's a child in the library.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]に 子供[こども]が" },
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
        notes: "Standard word order: location に + subject が + いる",
      },
      {
        segments: [
          { text: "図書館[としょかん]に 子供[こども]が" },
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
          { text: "よ" },
        ],
        notes: 'With よ for emphasis: "There IS a child in the library."',
      },
      {
        segments: [
          { text: "図書館[としょかん]に 子供[こども]が" },
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
          { text: "ね" },
        ],
        notes:
          "With ね for seeking agreement: \"There's a child in the library, isn't there.\"",
      },
      {
        segments: [
          { text: "図書館[としょかん]に" },
          { text: "子供[こども]が" },
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
        notes: "Standard word order: location に + subject が + いる",
      },
      {
        segments: [
          { text: "図書館[としょかん]に" },
          { text: "子供[こども]が" },
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
          { text: "よ" },
        ],
        notes: 'With よ for emphasis: "There IS a child in the library."',
      },
      {
        segments: [
          { text: "図書館[としょかん]に" },
          { text: "子供[こども]が" },
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
          { text: "ね" },
        ],
        notes:
          "With ね for seeking agreement: \"There's a child in the library, isn't there.\"",
      },
    ],
  },
  {
    english: "There's a fish in the water.",
    hint: "Fish are living creatures — choose the verb accordingly.",
    answers: [
      {
        segments: [
          { text: "水[みず]に" },
          { text: "魚[さかな]が" },
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
        notes: "Standard word order: location に + subject が + いる",
      },
      {
        segments: [
          { text: "水[みず]の 中[なか]に" },
          { text: "魚[さかな]が" },
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
        notes: "Using 水の中に (inside the water) for more specificity",
      },
    ],
  },
  {
    english: "Is there anyone at home?",
    hint: 'Express "anyone" as a specific question word meaning "who"',
    answers: [
      {
        segments: [
          { text: "家[いえ]に 誰[だれ]かが" },
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
        notes: "Standard form with が particle retained: 家に誰かがいる？",
      },
      {
        segments: [
          { text: "うちに 誰[だれ]かが" },
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
        notes: 'Using うち instead of 家 for "home" (more casual/colloquial)',
      },
    ],
  },
  {
    english: "There's a friend at the café.",
    answers: [
      {
        segments: [
          { text: "カフェに 友[とも]だちが" },
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
        notes: "Standard word order: location に + subject が + いる",
      },
      {
        segments: [
          { text: "カフェに 友達[ともだち]が" },
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
        notes: "Using 友達 (alternate kanji spelling)",
      },
      {
        segments: [
          { text: "カフェに 友[とも]だちが" },
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
        notes: "Standard word order: location に + subject が + いる",
      },
      {
        segments: [
          { text: "カフェに 友達[ともだち]が" },
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
        notes: "Using 友達 (alternate kanji spelling)",
      },
    ],
  },
  {
    english: "Is there a part-time job on Saturday?",
    answers: [
      {
        segments: [
          { text: "土曜日[どようび]に アルバイトが" },
          {
            text: "ある",
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
        notes: "Standard word order: 土曜日に + アルバイトがある + か",
      },
      {
        segments: [
          { text: "土曜日[どようび]は アルバイトが" },
          {
            text: "ある",
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
        notes: "Using は instead of に — topicalizing Saturday",
      },
    ],
  },
  {
    english: "There are no cats in the bookstore.",
    answers: [
      {
        segments: [
          { text: "本屋[ほんや]に 猫[ねこ]が" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard word order: location に + subject が + いない",
      },
      {
        segments: [
          { text: "本屋[ほんや]に 猫[ねこ]が" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard word order: location に + subject が + いない",
      },
    ],
  },
  {
    english: "Is Kenji at the hospital?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "病院[びょういん]に ケンジ" },
          {
            text: "がいる",
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
        notes: "Kenji in katakana, がいる in blank",
      },
      {
        segments: [
          { text: "病院[びょういん]に ケンジ" },
          {
            text: "がいる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "ね" },
        ],
        notes: "Seeking confirmation with ね instead of か (softer question)",
      },
      {
        segments: [
          { text: "病院[びょういん]に ケンジ" },
          {
            text: "がいる",
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
          "Rising intonation question with no か or ね particle (casual spoken question)",
      },
    ],
  },
  {
    english: "There's a dog inside the restaurant.",
    answers: [
      {
        segments: [
          { text: "レストランの 中[なか]に 犬[いぬ]が" },
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
        notes: "Standard word order: location + が + いる",
      },
      {
        segments: [
          { text: "レストランの 中[なか]には 犬[いぬ]が" },
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
          'Adding は after に for emphasis on the location "inside the restaurant"',
      },
    ],
  },
  {
    english: "There's no one in the park.",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]に 人[ひと]が" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: 'Using 人が + いない: "There is no person in the park"',
      },
      {
        segments: [
          { text: "公園[こうえん]には 人[ひと]が" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using には for topicalized location emphasis",
      },
      {
        segments: [
          { text: "公園[こうえん]には 誰[だれ]が" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          'Using 誰が + いない with には: "There is no one (who) in the park" — slightly more emphatic',
      },
      {
        segments: [
          { text: "公園[こうえん]に 誰[だれ]が" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 誰が + いない with に (without topic marker)",
      },
    ],
  },
  {
    english: "Is there a dog next to the bus stop?",
    answers: [
      {
        segments: [
          { text: "バス 停[てい]の 隣[となり]に 犬[いぬ]が" },
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
        notes: "Standard word order: location + が + いる + か",
      },
      {
        segments: [
          { text: "バスていの 隣[となり]に 犬[いぬ]が" },
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
        notes: "バス停 written in kana only (バスてい)",
      },
      {
        segments: [
          { text: "バス 停[てい]の そばに 犬[いぬ]が" },
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
        notes: "そば (near/by) instead of 隣 (next to)",
      },
    ],
  },
  {
    english: "There's a photo in the book.",
    answers: [
      {
        segments: [
          { text: "本[ほん]の 中[なか]に 写真[しゃしん]が" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard: location with の中に, photo as subject with が",
      },
      {
        segments: [
          { text: "本[ほん]に 写真[しゃしん]が" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Simpler: 本に without の中に",
      },
      {
        segments: [
          { text: "本[ほん]の 中[なか]に 写真[しゃしん]が" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard: location with の中に, photo as subject with が",
      },
      {
        segments: [
          { text: "本[ほん]に 写真[しゃしん]が" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Simpler: 本に without の中に",
      },
    ],
  },
  {
    english: "I have a younger sister.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 妹[いもうと]が" },
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
        notes: "Standard: 私は妹がいる — topic は, subject が",
      },
      {
        segments: [
          { text: "私[わたし]に 妹[いもうと]が" },
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
          'Using に instead of は — 私に妹がいる is a natural expression meaning "I have a younger sister"',
      },
    ],
  },
  {
    english: "There's a child at school on Sunday.",
    answers: [
      {
        segments: [
          { text: "日曜日[にちようび]に 学校[がっこう]に 子供[こども]が" },
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
        notes: "Standard word order: time → location → subject + がいる",
      },
      {
        segments: [
          { text: "学校[がっこう]に 日曜日[にちようび]に 子供[こども]が" },
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
        notes: "Location first, then time: 学校に → 日曜日に",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は 学校[がっこう]に 子供[こども]が" },
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
        notes: "日曜日 marked with は (topic) instead of に",
      },
    ],
  },
  {
    english: "There's a person at the temple.",
    answers: [
      {
        segments: [
          { text: "お 寺[てら]に" },
          { text: "人[ひと]が" },
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
          "Standard word order: location に + subject が + いる. Using お寺.",
      },
      {
        segments: [
          { text: "寺[てら]に" },
          { text: "人[ひと]が" },
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
        notes: "Using 寺 instead of お寺 (without honorific prefix).",
      },
    ],
  },
]

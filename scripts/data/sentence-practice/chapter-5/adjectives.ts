import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "The sea is beautiful.",
    answers: [
      {
        segments: [
          {
            text: "海[うみ]は",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
      },
    ],
  },
  {
    english: "This hamburger is really delicious!",
    answers: [
      {
        segments: [
          {
            text: "この ハンバーガーは すごく",
          },
          {
            text: "おいしい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard: このハンバーガー + すごく + おいしい predicate",
      },
      {
        segments: [
          {
            text: "この ハンバーガーは とても",
          },
          {
            text: "おいしい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: 'Using とても instead of すごく for "really/very"',
      },
      {
        segments: [
          {
            text: "この ハンバーガーが すごく",
          },
          {
            text: "おいしい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Using が instead of は (pointing out this specific hamburger as particularly delicious)",
      },
      {
        segments: [
          {
            text: "この ハンバーガーが とても",
          },
          {
            text: "おいしい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が particle + とても",
      },
    ],
  },
  {
    english: "Yesterday's weather was really good!",
    answers: [
      {
        segments: [
          {
            text: "昨日[きのう]の 天気[てんき]は すごく",
          },
          {
            text: "よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard: よい (いい) past positive with は particle",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 天気[てんき]が すごく",
          },
          {
            text: "よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は — emphasizes the subject",
      },
    ],
  },
  {
    english: "This movie is really scary!",
    answers: [
      {
        segments: [
          {
            text: "この 映画[えいが]は すごく",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Standard answer: この, は, すごく intensifier, 怖い as い-adjective predicate",
      },
      {
        segments: [
          {
            text: "この 映画[えいが]は とても",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく as intensifier",
      },
      {
        segments: [
          {
            text: "この 映画[えいが]が すごく",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は — pointing out this specific movie as scary",
      },
      {
        segments: [
          {
            text: "この 映画[えいが]が とても",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が + とても",
      },
      {
        segments: [
          {
            text: "これは すごく",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          'これは instead of この映画は — referring to the movie as "this"',
      },
      {
        segments: [
          {
            text: "これは とても",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "これは + とても",
      },
    ],
  },
  {
    english: "The fruit is sweet.",
    answers: [
      {
        segments: [
          {
            text: "果物[くだもの]は",
          },
          {
            text: "甘[あま]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
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
    english: "That horror movie was really scary!",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          {
            text: "あのホラー 映画[えいが]は すごく",
          },
          {
            text: "怖[こわ]い",
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
          "Base variation: あの + すごく + 怖かった (past い-adj, pre-conjugated)",
      },
      {
        segments: [
          {
            text: "あのホラー 映画[えいが]は とても",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          {
            text: "そのホラー 映画[えいが]は すごく",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "その instead of あの",
      },
      {
        segments: [
          {
            text: "そのホラー 映画[えいが]は とても",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "その + とても",
      },
      {
        segments: [
          {
            text: "あのホラー 映画[えいが]が すごく",
          },
          {
            text: "怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は (highlighting the movie as subject)",
      },
    ],
  },
  {
    english: "Fujii is not busy today.",
    hint: "Fujii = 藤井 (ふじい)",
    answers: [
      {
        segments: [
          {
            text: "藤井[ふじい]さんは 今日[きょう]",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard form: は particle, 今日 after topic",
      },
      {
        segments: [
          {
            text: "今日[きょう]、藤井[ふじい]さんは",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "今日 moved to sentence-initial position",
      },
      {
        segments: [
          {
            text: "藤井[ふじい]さんが 今日[きょう]",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は for subject particle",
      },
      {
        segments: [
          {
            text: "今日[きょう]、藤井[ふじい]さんが",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "今日 sentence-initial + が particle",
      },
    ],
  },
  {
    english: "The homework is difficult.",
    answers: [
      {
        segments: [
          {
            text: "宿題[しゅくだい]は",
          },
          {
            text: "難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
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
    english: "This is a tall building.",
    hint: "building -> 建物 (たてもの)",
    answers: [
      {
        segments: [
          {
            text: "これは",
          },
          {
            text: "高[たか]い",
            blank: true,
          },
          {
            text: "建物[たてもの]",
          },
          {
            text: "です",
          },
        ],
      },
      {
        segments: [
          {
            text: "高[たか]い",
            blank: true,
          },
          {
            text: "建物[たてもの]",
          },
          {
            text: "です",
          },
        ],
      },
    ],
  },
  {
    english: "The water at this beach is really clean!",
    hint: "beach = ビーチ",
    answers: [
      {
        segments: [
          {
            text: "この ビーチの 水[みず]は すごく",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes:
          "Standard な-adjective predicate with すごく (really/very), です polite marker",
      },
      {
        segments: [
          {
            text: "この ビーチの 水[みず]は とても",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: 'Using とても instead of すごく for "really/very"',
      },
      {
        segments: [
          {
            text: "この ビーチの 水[みず]が すごく",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes:
          "Using が instead of は to mark the subject (highlighting this beach's water specifically)",
      },
      {
        segments: [
          {
            text: "この ビーチの 水[みず]が とても",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: "が + とても variation",
      },
    ],
  },
  {
    english: "The trip was not fun.",
    answers: [
      {
        segments: [
          {
            text: "旅行[りょこう]は",
          },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "The park was really lively on Sunday!",
    answers: [
      {
        segments: [
          {
            text: "日曜日[にちようび]に 公園[こうえん]は すごく",
          },
          {
            text: "にぎやか",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard polite form: な-adjective + でした, に for day of week",
      },
      {
        segments: [
          {
            text: "公園[こうえん]は 日曜日[にちようび]に すごく",
          },
          {
            text: "にぎやか",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Topic (公園は) moved to front, time expression後ろ",
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]に 公園[こうえん]は とても",
          },
          {
            text: "にぎやか",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: 'とても instead of すごく (both mean "very/really")',
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]の 公園[こうえん]は すごく",
          },
          {
            text: "にぎやか",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: 'の instead of に — "Sunday\'s park" phrasing',
      },
    ],
  },
  {
    english: "This coffee is not good.",
    answers: [
      {
        segments: [
          {
            text: "この コーヒーは",
          },
          {
            text: "よい",
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
          "Basic translation: このコーヒーはよくない — は particle, よくない (negative of いい/よい)",
      },
      {
        segments: [
          {
            text: "この コーヒーが",
          },
          {
            text: "よい",
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
          "が instead of は — pointing out this coffee specifically as not good",
      },
    ],
  },
  {
    english: "Yosuke is really good-looking!",
    hint: "Yosuke = 陽介 (ようすけ)",
    answers: [
      {
        segments: [
          {
            text: "陽介[ようすけ]さんは すごく",
          },
          {
            text: "かっこいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Standard variation: は topic marker, すごく (really), かっこいい as predicate い-adjective",
      },
      {
        segments: [
          {
            text: "陽介[ようすけ]さんが すごく",
          },
          {
            text: "かっこいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Using が instead of は — pointing out Yosuke specifically as good-looking",
      },
      {
        segments: [
          {
            text: "陽介[ようすけ]さんは とても",
          },
          {
            text: "かっこいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: 'Using とても instead of すごく for "really/very"',
      },
      {
        segments: [
          {
            text: "陽介[ようすけ]さんが とても",
          },
          {
            text: "かっこいい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が + とても",
      },
    ],
  },
  {
    english: "The books at that bookstore were really old.",
    answers: [
      {
        segments: [
          {
            text: "あの 本屋[ほんや]の 本[ほん]は すごく",
          },
          {
            text: "古[ふる]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Base answer: あの本屋 + すごく + 古かった (past い-adj)",
      },
      {
        segments: [
          {
            text: "その 本屋[ほんや]の 本[ほん]は すごく",
          },
          {
            text: "古[ふる]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using その instead of あの",
      },
      {
        segments: [
          {
            text: "あの 本屋[ほんや]の 本[ほん]は とても",
          },
          {
            text: "古[ふる]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using とても instead of すごく",
      },
      {
        segments: [
          {
            text: "あの 本屋[ほんや]の 本[ほん]は 本当[ほんとう]に",
          },
          {
            text: "古[ふる]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 本当に instead of すごく",
      },
      {
        segments: [
          {
            text: "あの 本屋[ほんや]の 本[ほん]が すごく",
          },
          {
            text: "古[ふる]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が instead of は",
      },
    ],
  },
  {
    english: "Part-time work is really tough!",
    answers: [
      {
        segments: [
          {
            text: "アルバイトは すごく",
          },
          {
            text: "大変[たいへん]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: "Basic な-adjective predicate with すごく (really)",
      },
      {
        segments: [
          {
            text: "アルバイトは とても",
          },
          {
            text: "大変[たいへん]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          {
            text: "アルバイトは",
          },
          {
            text: "大変[たいへん]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: 'No intensifier — just "part-time work is tough"',
      },
      {
        segments: [
          {
            text: "アルバイトが すごく",
          },
          {
            text: "大変[たいへん]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes:
          "が instead of は — emphasizing part-time work specifically as the tough thing",
      },
    ],
  },
  {
    english: "It was a not-so-clean restaurant.",
    answers: [
      {
        segments: [
          {
            text: "あまり",
          },
          {
            text: "きれいではない",
            blank: true,
          },
          {
            text: "レストランでした",
          },
        ],
      },
      {
        segments: [
          {
            text: "きれいではない",
            blank: true,
          },
          {
            text: "レストランでした",
          },
        ],
      },
      {
        segments: [
          {
            text: "あまり",
          },
          {
            text: "きれいじゃない",
            blank: true,
          },
          {
            text: "レストランでした",
          },
        ],
        notes:
          "Using じゃない instead of ではない in the noun-modifying phrase",
      },
      {
        segments: [
          {
            text: "きれいじゃない",
            blank: true,
          },
          {
            text: "レストランでした",
          },
        ],
        notes: "Using じゃない instead of ではない",
      },
      {
        segments: [
          {
            text: "あまり",
          },
          {
            text: "きれいではない",
            blank: true,
          },
          {
            text: "レストランだった",
          },
        ],
        notes: "Casual past ending with だった",
      },
      {
        segments: [
          {
            text: "きれいではない",
            blank: true,
          },
          {
            text: "レストランだった",
          },
        ],
        notes: "Casual past ending with だった",
      },
      {
        segments: [
          {
            text: "あまり",
          },
          {
            text: "きれいじゃない",
            blank: true,
          },
          {
            text: "レストランだった",
          },
        ],
        notes: "Using じゃない with casual past だった",
      },
      {
        segments: [
          {
            text: "きれいじゃない",
            blank: true,
          },
          {
            text: "レストランだった",
          },
        ],
        notes: "Using じゃない with casual past だった",
      },
    ],
  },
  {
    english: "The fish at that supermarket was really cheap!",
    answers: [
      {
        segments: [
          {
            text: "あのスーパーの 魚[さかな]は すごく",
          },
          {
            text: "安[やす]い",
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
          "Standard form with すごく, blank is 安かった (past い-adjective)",
      },
      {
        segments: [
          {
            text: "あのスーパーの 魚[さかな]は とても",
          },
          {
            text: "安[やす]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: 'とても instead of すごく for "really"',
      },
      {
        segments: [
          {
            text: "あのスーパーの 魚[さかな]が すごく",
          },
          {
            text: "安[やす]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は as the subject particle",
      },
      {
        segments: [
          {
            text: "あのスーパーの 魚[さかな]が とても",
          },
          {
            text: "安[やす]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が particle + とても",
      },
      {
        segments: [
          {
            text: "そのスーパーの 魚[さかな]は すごく",
          },
          {
            text: "安[やす]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: 'その instead of あの — "that supermarket" (near listener)',
      },
      {
        segments: [
          {
            text: "そのスーパーの 魚[さかな]は とても",
          },
          {
            text: "安[やす]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "その + とても, casual",
      },
    ],
  },
  {
    english: "The movie is boring.",
    answers: [
      {
        segments: [
          {
            text: "映画[えいが]は",
          },
          {
            text: "つまらない",
            blank: true,
            conjugation: {
              pos: "I-adjective",
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
    english: "The teacher is compassionate.",
    answers: [
      {
        segments: [
          {
            text: "先生[せんせい]は",
          },
          {
            text: "優[やさ]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
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
            text: "その 先生[せんせい]は",
          },
          {
            text: "優[やさ]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
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
    english: "That hotel room wasn't clean at all.",
    hint: "hotel = ホテル",
    answers: [
      {
        segments: [
          {
            text: "あのホテルの 部屋[へや]は 全然[ぜんぜん]",
          },
          {
            text: "きれいじゃなかった",
            blank: true,
          },
        ],
        notes:
          "Core answer: な-adjective きれい + じゃなかった (casual negative past), with ぜんぜん",
      },
      {
        segments: [
          {
            text: "あのホテルの 部屋[へや]は 全然[ぜんぜん]",
          },
          {
            text: "きれい",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes:
          "Negative past form of きれい — gives forms like きれいではなかった / きれいではありませんでした",
      },
      {
        segments: [
          {
            text: "あのホテルの 部屋[へや]は 全然[ぜんぜん]",
          },
          {
            text: "きれいじゃありませんでした",
            blank: true,
          },
        ],
        notes:
          "Polite: じゃありませんでした — contraction of では to じゃ, polite negative past",
      },
    ],
  },
  {
    english: "The weather at the sea is good!",
    answers: [
      {
        segments: [
          {
            text: "海[うみ]の 天気[てんき]は",
          },
          {
            text: "よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard: 海の天気は + いい (base form よい for engine)",
      },
      {
        segments: [
          {
            text: "海[うみ]の 天気[てんき]が",
          },
          {
            text: "よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は — highlighting the sea's weather specifically",
      },
    ],
  },
  {
    english: "Kaede's dog is really energetic!",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          {
            text: "楓[かえで]さんの 犬[いぬ]は すごく"
          },
          {
            text: "元気[げんき]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: "Standard variation: は particle, すごく, な-adjective + です",
      },
      {
        segments: [
          {
            text: "楓[かえで]さんの 犬[いぬ]が すごく"
          },
          {
            text: "元気[げんき]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: "が instead of は — pointing out this specific dog",
      },
      {
        segments: [
          {
            text: "楓[かえで]さんの 犬[いぬ]は とても"
          },
          {
            text: "元気[げんき]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: "とても instead of すごく (は particle)",
      },
      {
        segments: [
          {
            text: "楓[かえで]さんの 犬[いぬ]が とても"
          },
          {
            text: "元気[げんき]",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: "とても + が particle",
      },
    ],
  },
  {
    english: "The test wasn't difficult at all.",
    answers: [
      {
        segments: [
          {
            text: "テストは 全然[ぜんぜん]",
          },
          {
            text: "難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes:
          "Core answer: 全然 + 難しくなかった (くなかった negative past, casual)",
      },
      {
        segments: [
          {
            text: "テストが 全然[ぜんぜん]",
          },
          {
            text: "難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は as subject marker",
      },
      {
        segments: [
          {
            text: "全然[ぜんぜん] テストは",
          },
          {
            text: "難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "全然 fronted before テストは (adverb at start of sentence)",
      },
      {
        segments: [
          {
            text: "試験[しけん]は 全然[ぜんぜん]",
          },
          {
            text: "難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "試験 as a synonym for テスト (test/exam)",
      },
    ],
  },
  {
    english: "This souvenir is really pretty!",
    answers: [
      {
        segments: [
          {
            text: "この お土産[おみやげ]は すごく",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes:
          'Standard: このお土産は、すごくきれいです — な-adjective predicate with です, すごく for "really"',
      },
      {
        segments: [
          {
            text: "この お土産[おみやげ]は とても",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: 'Using とても instead of すごく for "really/very"',
      },
      {
        segments: [
          {
            text: "この 土産[みやげ]は すごく",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: "Using 土産 (みやげ) without the honorific お, with すごく",
      },
      {
        segments: [
          {
            text: "この 土産[みやげ]は とても",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes: "Using 土産 without お, with とても",
      },
      {
        segments: [
          {
            text: "この お土産[おみやげ]が すごく",
          },
          {
            text: "きれい",
            blank: true,
          },
          {
            text: "です",
          },
        ],
        notes:
          "Using が instead of は — pointing out this souvenir specifically as pretty",
      },
      {
        segments: [
          {
            text: "この お土産[おみやげ]、すごく",
          },
          {
            text: "きれい",
            blank: true,
          },
        ],
        notes:
          "Casual drop of です — just ending with きれい (な-adjective predicate without copula, natural in casual speech for exclamations)",
      },
    ],
  },
  {
    english: "Last week was really busy!",
    answers: [
      {
        segments: [
          {
            text: "先週[せんしゅう]は すごく 忙[いそが]し",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard: 忙しかった — blank is かった (past suffix)",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]は 本当[ほんとう]に 忙[いそが]し",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: 'Using 本当に instead of すごく for "really"',
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]は とても 忙[いそが]し",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: 'Using とても instead of すごく for "really"',
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]は すごく",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Polite form with すごく: 忙しかったです",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]は 本当[ほんとう]に",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Polite form with 本当に: 忙しかったです",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]は とても",
          },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Polite form with とても: 忙しかったです",
      },
    ],
  },
  {
    english: "The coffee at that café wasn't good.",
    answers: [
      {
        segments: [
          {
            text: "そのカフェのコーヒーは",
          },
          {
            text: "よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes:
          'Base variation: その for "that", よくなかった as past negative of いい',
      },
      {
        segments: [
          {
            text: "あのカフェのコーヒーは",
          },
          {
            text: "よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes:
          'あの instead of その for "that" (slightly more distant reference)',
      },
    ],
  },
  {
    english: "Yesterday's homework was really tough!",
    answers: [
      {
        segments: [
          {
            text: "昨日[きのう]の 宿題[しゅくだい]は すごく",
          },
          {
            text: "大変[たいへん]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard polite past: な-adjective 大変 + でした, intensifier すごく",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 宿題[しゅくだい]は とても",
          },
          {
            text: "大変[たいへん]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using とても instead of すごく as the intensifier",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 宿題[しゅくだい]は すごく",
          },
          {
            text: "難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "い-adjective 難しかった (past casual); すごく intensifier",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 宿題[しゅくだい]は とても",
          },
          {
            text: "難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "難しかった with とても; casual",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 宿題[しゅくだい]が すごく",
          },
          {
            text: "大変[たいへん]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は; casual 大変だった",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 宿題[しゅくだい]が すごく",
          },
          {
            text: "難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は; 難しかった casual",
      },
    ],
  },
  {
    english: "This movie is not boring.",
    answers: [
      {
        segments: [
          {
            text: "この 映画[えいが]は",
          },
          {
            text: "つまらない",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "映画[えいが]は",
          },
          {
            text: "つまらない",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "The surfing lesson was really fun!",
    hint: "surfing = サーフィン",
    answers: [
      {
        segments: [
          {
            text: "サーフィンのレッスンは すごく",
          },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Base form: すごく + 楽しかった (plain text past)",
      },
      {
        segments: [
          {
            text: "サーフィンのレッスンは とても",
          },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          {
            text: "サーフィンのレッスンが すごく",
          },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
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
          {
            text: "サーフィンのレッスンが とても",
          },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が + とても",
      },
      {
        segments: [
          {
            text: "サーフィンのレッスンは とっても",
          },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "とっても (very colloquial) instead of すごく/とても",
      },
    ],
  },
]

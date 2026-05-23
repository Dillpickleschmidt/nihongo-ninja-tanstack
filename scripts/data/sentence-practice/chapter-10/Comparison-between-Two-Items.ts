import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Between the Shinkansen and an airplane, which is faster?",
    answers: [
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]と、" },
          { text: "どちらが " },
          {
            text: "速[はや]い",
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
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]、どちらが " },
          {
            text: "速[はや]い",
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
        notes: "と repeated once (second と dropped)",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]と、どちらのほうが " },
          {
            text: "速[はや]い",
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
        notes: "どちらのほうが variant",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]、どちらのほうが " },
          {
            text: "速[はや]い",
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
        notes: "どちらのほうが variant, second と dropped",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]と、どっちが " },
          {
            text: "速[はや]い",
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
        notes: "どっち variant",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]、どっちが " },
          {
            text: "速[はや]い",
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
        notes: "どっち variant, second と dropped",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]と、どっちのほうが " },
          {
            text: "速[はや]い",
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
        notes: "どっちのほうが variant",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]、どっちのほうが " },
          {
            text: "速[はや]い",
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
        notes: "どっちのほうが variant, second と dropped",
      },
      {
        segments: [
          { text: "飛行機[ひこうき]と 新幹線[しんかんせん]と、どちらが " },
          {
            text: "速[はや]い",
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
        notes: "airplane listed first",
      },
      {
        segments: [
          { text: "飛行機[ひこうき]と 新幹線[しんかんせん]、どちらが " },
          {
            text: "速[はや]い",
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
        notes: "airplane first, second と dropped",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]では、どちらが " },
          {
            text: "速[はや]い",
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
        notes: "では (topic marker) instead of と、",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]では、どちらのほうが " },
          {
            text: "速[はや]い",
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
        notes: "では with どちらのほうが",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]では、どっちが " },
          {
            text: "速[はや]い",
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
        notes: "では with どっち",
      },
      {
        segments: [
          { text: "飛行機[ひこうき]と 新幹線[しんかんせん]では、どちらが " },
          {
            text: "速[はや]い",
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
        notes: "では with airplane listed first",
      },
    ],
  },
  {
    english: "I like eating sushi more than eating hamburgers.",
    answers: [
      {
        segments: [
          { text: "ハンバーガーを 食[た]べるより、すしを 食[た]べる" },
          { text: "ほうが 好[す]き", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes:
          "より～のほうが construction. The blank covers the comparative grammar nucleus ほうが好き.",
      },
      {
        segments: [
          { text: "すしを 食[た]べるのは、ハンバーガーを 食[た]べるより " },
          { text: "好[す]き", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "のは variant with より at the end",
      },
      {
        segments: [
          { text: "ハンバーガーを 食[た]べるより、すしのほうが " },
          { text: "好[す]き", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes:
          "Using noun すし with のほうが (dropping 食べる for the preferred item)",
      },
      {
        segments: [
          { text: "ハンバーガーより、すしを 食[た]べる" },
          { text: "ほうが 好[す]き", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "ハンバーガーより with noun only for the disliked item",
      },
      {
        segments: [
          { text: "ハンバーガーを 食[た]べるより、すしを 食[た]べるのが " },
          { text: "好[す]き", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Uses のが好き with comparison carried by より.",
      },
      {
        segments: [
          { text: "ハンバーガーより、すしのほうが " },
          { text: "好[す]き", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Noun-only comparison with eating implied by context.",
      },
    ],
  },
  {
    english: "Is summer in Japan hotter than summer in India?",
    hint: "India = インド",
    answers: [
      {
        segments: [
          { text: "インドの 夏[なつ]より、日本[にほん]の 夏[なつ]のほうが" },
          {
            text: "暑[あつ]い",
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
          "Question comparing summer heat in Japan vs India using より～のほうが. The blank is 暑い (the comparison adjective). です and か are plain text outside the blank since the engine does not double-add です for question sentences here.",
      },
      {
        segments: [
          { text: "日本[にほん]の 夏[なつ]は、インドの 夏[なつ]より" },
          {
            text: "暑[あつ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Topic-first word order: 日本の夏は、インドの夏より暑いですか",
      },
      {
        segments: [
          { text: "インドの 夏[なつ]より、日本[にほん]の 夏[なつ]は" },
          {
            text: "暑[あつ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses 日本の夏は after the より phrase.",
      },
      {
        segments: [
          { text: "日本[にほん]の 夏[なつ]のほうが、インドの 夏[なつ]より" },
          {
            text: "暑[あつ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Puts のほうが first, followed by より phrase.",
      },
      {
        segments: [
          {
            text: "インドの 夏[なつ]と 日本[にほん]の 夏[なつ]では、どちらのほうが 暑[あつ]いですか",
          },
        ],
        register: "polite",
        notes: "Uses と...では with どちらのほうが.",
      },
      {
        segments: [
          {
            text: "日本[にほん]の 夏[なつ]と インドの 夏[なつ]では、どちらのほうが 暑[あつ]いですか",
          },
        ],
        register: "polite",
        notes: "と...では comparison with Japan listed first.",
      },
    ],
  },
  {
    english:
      "Between studying at a café and studying at the library, which do you find more enjoyable?",
    answers: [
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]することと、",
            blank: true,
          },
          { text: "どちらが " },
          {
            text: "楽[たの]しい",
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
          'Using こと to nominalize the verbs, and どちらが for the "which" comparison. The hint says to use "I" perspective but since this is a question about what "you find" enjoyable, it\'s naturally phrased as a question directed at the listener. The whole sentence is the target grammar (と～と、どちらが construction).',
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]することと、どっちが " },
          {
            text: "楽[たの]しい",
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
        notes: "Using どっちが instead of どちらが (more casual)",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]すること、どちらが " },
          {
            text: "楽[たの]しい",
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
        notes: "Dropping the second と before comma",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]すること、どっちが " },
          {
            text: "楽[たの]しい",
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
        notes: "Dropping the second と, using どっちが",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのと、どちらが " },
          {
            text: "楽[たの]しい",
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
        notes: "Using の instead of こと for nominalization",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのと、どっちが " },
          {
            text: "楽[たの]しい",
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
        notes: "Using の for nominalization and どっちが",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するの、どちらが " },
          {
            text: "楽[たの]しい",
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
        notes: "Using の for nominalization, dropping second と",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]することと、どちらのほうが " },
          {
            text: "楽[たの]しい",
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
        notes: "Using どちらのほうが",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのと、どちらのほうが " },
          {
            text: "楽[たの]しい",
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
        notes: "Using の nominalization with どちらのほうが",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのでは、どちらの 方[ほう]が " },
          {
            text: "楽[たの]しい",
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
        notes: "では (topic marker) instead of と、",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのでは、どちらが " },
          {
            text: "楽[たの]しい",
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
        notes: "では with どちらが",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]することでは、どちらが " },
          {
            text: "楽[たの]しい",
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
        notes: "こと nominalization with では and どちらが",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 勉強[べんきょう]するのと カフェで 勉強[べんきょう]するのと、どちらが " },
          {
            text: "楽[たの]しい",
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
        notes: "Library listed first",
      },
      {
        segments: [
          { text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのと、どっちのほうが " },
          {
            text: "楽[たの]しい",
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
        notes: "の nominalization with どっちのほうが",
      },
    ],
  },
  {
    english: "Is Kenji's dog bigger than his cat?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんの 猫[ねこ]より、けんじさんの 犬[いぬ]のほうが" },
          {
            text: "大[おお]きい",
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
          "Comparison using より～のほうが with い-adjective 大きい. The blank covers the adjective predicate.",
      },
      {
        segments: [
          { text: "猫[ねこ]より、 犬[いぬ]のほうが 大[おお]きいですか" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "けんじさんの 犬[いぬ]は、けんじさんの 猫[ねこ]より" },
          {
            text: "大[おお]きい",
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
        notes: "Topic-first word order with both pets explicitly possessed by Kenji.",
      },
      {
        segments: [
          { text: "けんじさんの 犬[いぬ]は、猫[ねこ]より" },
          {
            text: "大[おお]きい",
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
        notes: "Topic-first word order with Kenji possession inferred for the cat.",
      },
      {
        segments: [
          { text: "けんじさんの 猫[ねこ]と 犬[いぬ]では、犬[いぬ]のほうが " },
          {
            text: "大[おお]きい",
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
        notes: "Uses と...では comparison over Kenji's cat and dog.",
      },
      {
        segments: [
          { text: "けんじさんの 犬[いぬ]と 猫[ねこ]では、犬[いぬ]のほうが " },
          {
            text: "大[おお]きい",
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
        notes: "Uses と...では with dog listed first.",
      },
    ],
  },
  {
    english: "Taking a bath is about as relaxing as listening to music.",
    answers: [
      {
        segments: [
          {
            text: "お 風呂[ふろ]に 入[はい]ることは 音楽[おんがく]を 聞[き]くことと 同[おな]じくらい ",
          },
          {
            text: "リラックスできる",
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
          'Uses と同じくらい with リラックスできます to match "about as relaxing as".',
      },
      {
        segments: [
          {
            text: "お 風呂[ふろ]に 入[はい]ることは 音楽[おんがく]を 聞[き]くことと 同[おな]じぐらい ",
          },
          {
            text: "リラックスできる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ぐらい variant instead of くらい",
      },
      {
        segments: [
          {
            text: "お 風呂[ふろ]に 入[はい]るのは 音楽[おんがく]を 聞[き]くのと 同[おな]じくらい ",
          },
          {
            text: "リラックスできる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses の nominalization instead of こと.",
      },
      {
        segments: [
          {
            text: "お 風呂[ふろ]に 入[はい]ることは 音楽[おんがく]を 聞[き]くことと 同[おな]じくらい ",
          },
          {
            text: "くつろげる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses くつろげます for relaxing.",
      },
    ],
  },
  {
    english: "Is Italian wine more famous than Italian pizza?",
    answers: [
      {
        segments: [
          { text: "イタリアのピザより、" },
          { text: "イタリアのワインのほうが 有名[ゆうめい]", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "ピザより、ワインのほうが " },
          {
            text: "有名[ゆうめい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Dropped イタリアの for both",
      },
      {
        segments: [
          { text: "イタリアのワインは、イタリアのピザより " },
          { text: "有名[ゆうめい]", blank: true },
          { text: "ですか" },
        ],
        register: "polite",
        notes: "Topic-first word order.",
      },
      {
        segments: [
          { text: "イタリアのピザと イタリアのワインでは、どちらのほうが " },
          {
            text: "有名[ゆうめい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses と...では with pizza listed first.",
      },
      {
        segments: [
          { text: "イタリアのワインと イタリアのピザでは、どちらのほうが " },
          {
            text: "有名[ゆうめい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses と...では with wine listed first.",
      },
      {
        segments: [
          { text: "ピザと ワインでは、どちらのほうが 有名[ゆうめい]ですか" },
        ],
        register: "polite",
        notes: "Context-implied Italian comparison.",
      },
    ],
  },
  {
    english: "Between singing and dancing, which does Haruka like better?",
    hint: "Haruka = はるか",
    answers: [
      {
        segments: [
          { text: "はるかさんは" },
          {
            text: "歌[うた]うことと 踊[おど]ることと、どちらが 好[す]きですか",
            blank: true,
          },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うことと 踊[おど]ることと、どちらのほうが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うことと 踊[おど]ること、どちらが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うことと 踊[おど]ること、どちらのほうが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うことと 踊[おど]ることと、どっちが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うことと 踊[おど]ることと、どっちのほうが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うことと 踊[おど]ること、どっちが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うことと 踊[おど]ること、どっちのほうが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うのと 踊[おど]るのと、どちらが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses の nominalization instead of こと.",
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うのと 踊[おど]るのと、どちらのほうが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses の nominalization with どちらのほうが.",
      },
      {
        segments: [
          { text: "はるかさんは 歌[うた]うのと 踊[おど]るの、どっちが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses の nominalization, dropping the second と.",
      },
      {
        segments: [
          { text: "はるかさんは 踊[おど]るのと 歌[うた]うのと、どちらのほうが " },
          {
            text: "好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Reversed order with の nominalization.",
      },
    ],
  },
  {
    english: "Is riding the subway more convenient than riding the bus?",
    answers: [
      {
        segments: [
          {
            text: "バスに 乗[の]るより、地下鉄[ちかてつ]に 乗[の]るほうが",
            blank: true,
          },
          { text: "便利[べんり]" },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes:
          "より〜のほうが compares riding the subway with riding the bus. 便利 is a な-adjective used predicatively without な before です.",
      },
      {
        segments: [
          { text: "バスより、地下鉄[ちかてつ]のほうが便利[べんり]ですか" },
        ],
        register: "polite",
        notes: "Noun + より + Noun + のほうが variant (without verb 乗る)",
      },
      {
        segments: [
          { text: "地下鉄[ちかてつ]に 乗[の]るのは、バスに 乗[の]るより " },
          {
            text: "便利[べんり]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Topic-first の nominalization.",
      },
      {
        segments: [
          { text: "バスに 乗[の]ることより、地下鉄[ちかてつ]に 乗[の]ることのほうが " },
          {
            text: "便利[べんり]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "こと nominalization on both actions.",
      },
      {
        segments: [
          { text: "地下鉄[ちかてつ]に 乗[の]ることは、バスに 乗[の]ることより " },
          {
            text: "便利[べんり]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Topic-first こと nominalization.",
      },
      {
        segments: [
          { text: "バスと 地下鉄[ちかてつ]では、地下鉄[ちかてつ]のほうが 便利[べんり]ですか" },
        ],
        register: "polite",
        notes: "Noun comparison with riding implied by context.",
      },
    ],
  },
  {
    english: "Is reading books more interesting than watching TV?",
    answers: [
      {
        segments: [
          { text: "テレビを 見[み]るより、本[ほん]を 読[よ]むほうが" },
          { text: "" },
          {
            text: "面白[おもしろ]い",
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
          "The blank covers the adjective predicate including the question marker, as the core comparison outcome of the より～のほうが structure.",
      },
      {
        segments: [
          { text: "テレビを 見[み]ることより、本[ほん]を 読[よ]むことのほうが" },
          {
            text: "面白[おもしろ]い",
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
        notes: "Using こと nominalizer for both verbs",
      },
      {
        segments: [
          { text: "本[ほん]を 読[よ]むのは、テレビを 見[み]るより" },
          {
            text: "面白[おもしろ]い",
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
          "Topic-first word order: 本を読むのは、テレビを見るより面白いですか",
      },
      {
        segments: [
          { text: "テレビを 見[み]ることより、本[ほん]を 読[よ]むほうが" },
          {
            text: "面白[おもしろ]い",
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
        notes: "こと on first verb only, ほう on second",
      },
      {
        segments: [
          { text: "テレビを 見[み]るのより、本[ほん]を 読[よ]むほうが " },
          {
            text: "面白[おもしろ]い",
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
        notes: "Uses の nominalization for watching TV.",
      },
      {
        segments: [
          { text: "本[ほん]を 読[よ]むことは、テレビを 見[み]ることより " },
          {
            text: "面白[おもしろ]い",
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
        notes: "Topic-first こと nominalization.",
      },
      {
        segments: [
          { text: "テレビを 見[み]るのと 本[ほん]を 読[よ]むのでは、どちらのほうが " },
          {
            text: "面白[おもしろ]い",
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
        notes: "Uses と...では with の nominalization.",
      },
      {
        segments: [
          { text: "本[ほん]を 読[よ]むのと テレビを 見[み]るのでは、どちらのほうが " },
          {
            text: "面白[おもしろ]い",
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
        notes: "Uses と...では with reading listed first.",
      },
      {
        segments: [
          { text: "テレビより、読書[どくしょ]のほうが 面白[おもしろ]いですか" },
        ],
        register: "polite",
        notes: "Lexical 読書 variant with watching TV implied by テレビ.",
      },
      {
        segments: [
          { text: "読書[どくしょ]は、テレビより 面白[おもしろ]いですか" },
        ],
        register: "polite",
        notes: "Topic-first lexical 読書 variant.",
      },
    ],
  },
  {
    english: "Is Mt. Fuji taller than any mountain in Korea?",
    hint: "Mt. Fuji = 富士山 (ふじさん)",
    answers: [
      {
        segments: [
          { text: "富士山[ふじさん]は 韓国[かんこく]のどの 山[やま]より" },
          {
            text: "高[たか]い",
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
      },
      {
        segments: [
          { text: "富士山[ふじさん]は韓国[かんこく]のどの山[やま]よりも" },
          {
            text: "高[たか]い",
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
        notes: "よりも variant",
      },
      {
        segments: [
          { text: "富士山[ふじさん]は 韓国[かんこく]にあるどの 山[やま]より" },
          {
            text: "高[たか]い",
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
        notes: "Explicitly describes mountains located in Korea.",
      },
      {
        segments: [
          { text: "富士山[ふじさん]は韓国[かんこく]にあるどの山[やま]よりも" },
          {
            text: "高[たか]い",
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
        notes: "韓国にある with よりも variant.",
      },
    ],
  },
  {
    english:
      "Between living at home and living in a dormitory, which do you think is more convenient?",
    answers: [
      {
        segments: [
          { text: "うちに 住[す]むことと 寮[りょう]に 住[す]むことでは、どちらのほうが " },
          {
            text: "便利[べんり]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses こと nominalization with と...では and どちらのほうが.",
      },
      {
        segments: [
          { text: "家[いえ]に 住[す]むことと 寮[りょう]に 住[す]むことでは、どちらのほうが " },
          {
            text: "便利[べんり]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "家 instead of うち.",
      },
      {
        segments: [
          { text: "寮[りょう]に 住[す]むことと うちに 住[す]むことでは、どちらのほうが " },
          {
            text: "便利[べんり]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Dormitory listed first.",
      },
      {
        segments: [
          { text: "うちに 住[す]むのと 寮[りょう]に 住[す]むのでは、どちらのほうが " },
          {
            text: "便利[べんり]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses の nominalization instead of こと.",
      },
      {
        segments: [
          { text: "家[いえ]に 住[す]むのと 寮[りょう]に 住[す]むのでは、どちらのほうが " },
          {
            text: "便利[べんり]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "の nominalization with 家 instead of うち.",
      },
      {
        segments: [
          { text: "うちより、寮[りょう]のほうが 便利[べんり]ですか" },
        ],
        register: "polite",
        notes: "Answers the comparison directly with うちより.",
      },
      {
        segments: [
          { text: "家[いえ]より、寮[りょう]のほうが 便利[べんり]ですか" },
        ],
        register: "polite",
        notes: "Answers the comparison directly with 家より.",
      },
    ],
  },
  {
    english: "Is writing essays more difficult than memorizing vocabulary?",
    answers: [
      {
        segments: [
          {
            text: "単語[たんご]を 覚[おぼ]えることより、作文[さくぶん]を 書[か]くことのほうが",
            blank: true,
          },
          {
            text: "難[むずか]しい",
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
          "Using Verb+こと to nominalize both actions, then より～のほうが for comparison. The blank covers the full comparison construction up to and including のほうが.",
      },
      {
        segments: [
          {
            text: "単語[たんご]を 覚[おぼ]えることより、作文[さくぶん]を 書[か]くほうが",
          },
          { text: "難[むずか]しいですか" },
        ],
        register: "polite",
        notes: "Without こと for the second verb",
      },
      {
        segments: [
          {
            text: "単語[たんご]を 覚[おぼ]えるより、作文[さくぶん]を 書[か]くことのほうが",
          },
          { text: "難[むずか]しいですか" },
        ],
        register: "polite",
        notes: "Without こと for the first verb",
      },
      {
        segments: [
          {
            text: "単語[たんご]を 覚[おぼ]えるより、作文[さくぶん]を 書[か]くほうが",
          },
          { text: "難[むずか]しいですか" },
        ],
        register: "polite",
        notes: "Without こと for both verbs",
      },
      {
        segments: [
          {
            text: "作文[さくぶん]を 書[か]くことと 単語[たんご]を 覚[おぼ]えることと、どちらが",
          },
          { text: "難[むずか]しいですか" },
        ],
        register: "polite",
        notes: "Using どちらが construction",
      },
      {
        segments: [
          {
            text: "作文[さくぶん]を 書[か]くことと 単語[たんご]を 覚[おぼ]えることと、どちらのほうが",
          },
          { text: "難[むずか]しいですか" },
        ],
        register: "polite",
        notes: "Using どちらのほうが construction",
      },
      {
        segments: [
          { text: "作文[さくぶん]を 書[か]くのと 単語[たんご]を 覚[おぼ]えるのでは、どちらのほうが " },
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
          { text: "か" },
        ],
        notes: "Uses の nominalization with と...では.",
      },
      {
        segments: [
          { text: "単語[たんご]を 覚[おぼ]えるのより、作文[さくぶん]を 書[か]くほうが " },
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
          { text: "か" },
        ],
        notes: "Uses の nominalization for memorizing vocabulary.",
      },
      {
        segments: [
          { text: "作文[さくぶん]を 書[か]くことは、単語[たんご]を 覚[おぼ]えることより " },
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
          { text: "か" },
        ],
        notes: "Topic-first こと nominalization.",
      },
      {
        segments: [
          { text: "作文[さくぶん]と 単語[たんご]では、作文[さくぶん]のほうが " },
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
          { text: "か" },
        ],
        notes: "Noun comparison with writing/memorizing implied by context.",
      },
    ],
  },
  {
    english:
      "Is buying food at a department store more expensive than buying it at a supermarket?",
    answers: [
      {
        segments: [
          {
            text: "スーパーで 食[た]べ 物[もの]を 買[か]うことより、デパートで 食[た]べ 物[もの]を 買[か]うことのほうが",
          },
          {
            text: " 高[たか]い",
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
      },
      {
        segments: [
          {
            text: "スーパーで 食[た]べ 物[もの]を 買[か]うより、デパートで 食[た]べ 物[もの]を 買[か]うほうが",
          },
          {
            text: " 高[たか]い",
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
        notes: "こと dropped",
      },
      {
        segments: [
          {
            text: "デパートで 食[た]べ 物[もの]を 買[か]うことは、スーパーで 食[た]べ 物[もの]を 買[か]うことより",
          },
          {
            text: " 高[たか]い",
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
          "Reversed order with は instead of のほうが. 高い is kept as the learner-facing vocabulary for expensive.",
      },
      {
        segments: [
          {
            text: "スーパーで 食[た]べ 物[もの]を 買[か]うのと デパートで 食[た]べ 物[もの]を 買[か]うのでは、どちらのほうが 高[たか]いですか",
            blank: true,
          },
        ],
        register: "polite",
        notes: "Uses の nominalization with と...では.",
      },
      {
        segments: [
          {
            text: "スーパーより、デパートのほうが 食[た]べ 物[もの]の 値段[ねだん]が 高[たか]いですか",
            blank: true,
          },
        ],
        register: "polite",
        notes: "More explicit 値段が高い variant while keeping 高い vocabulary.",
      },
      {
        segments: [
          {
            text: "スーパーと デパートでは、どちらのほうが 食[た]べ 物[もの]の 値段[ねだん]が 高[たか]いですか",
            blank: true,
          },
        ],
        register: "polite",
        notes: "と...では with explicit food prices.",
      },
      {
        segments: [
          {
            text: "スーパーで 食[た]べ 物[もの]を 買[か]うより、デパートで 食[た]べ 物[もの]を 買[か]うほうが 高[たか]く",
          },
          {
            text: "つく",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Natural 高くつく variant for costing more.",
      },
    ],
  },
  {
    english: "Is winter in Spain warmer than winter in Canada?",
    answers: [
      {
        segments: [
          {
            text: "カナダの 冬[ふゆ]より、スペインの 冬[ふゆ]のほうが",
            blank: true,
          },
          {
            text: "暖[あたた]かい",
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
      },
      {
        segments: [
          { text: "スペインの 冬[ふゆ]は カナダの 冬[ふゆ]より" },
          {
            text: " 暖[あたた]かい",
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
      },
      {
        segments: [
          { text: "カナダの 冬[ふゆ]より スペインの 冬[ふゆ]のほうが" },
          {
            text: " 暖[あたた]かい",
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
      },
      {
        segments: [
          { text: "スペインの 冬[ふゆ]と カナダの 冬[ふゆ]では、どちらのほうが " },
          {
            text: "暖[あたた]かい",
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
        notes: "Uses と...では with Spain listed first.",
      },
      {
        segments: [
          { text: "カナダの 冬[ふゆ]と スペインの 冬[ふゆ]では、どちらのほうが " },
          {
            text: "暖[あたた]かい",
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
        notes: "Uses と...では with Canada listed first.",
      },
      {
        segments: [
          { text: "スペインの 冬[ふゆ]のほうが、カナダの 冬[ふゆ]より" },
          {
            text: " 暖[あたた]かい",
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
        notes: "Puts のほうが first, followed by より phrase.",
      },
    ],
  },
  {
    english: "Takeshi is better at cooking than his mother.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは お母さんより 料理[りょうり]が " },
          {
            text: "上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Statement comparing cooking skill with より.",
      },
      {
        segments: [
          { text: "お母さんより、たけしさんのほうが 料理[りょうり]が " },
          {
            text: "上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses より〜のほうが with Takeshi as the better cook.",
      },
      {
        segments: [
          { text: "たけしさんのほうが、お母さんより 料理[りょうり]が " },
          {
            text: "上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Puts のほうが first, followed by より phrase.",
      },
      {
        segments: [
          { text: "たけしさんと お母さんでは、たけしさんのほうが 料理[りょうり]が " },
          {
            text: "上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses と...では with explicit result.",
      },
      {
        segments: [
          { text: "お母さんと たけしさんでは、たけしさんのほうが 料理[りょうり]が " },
          {
            text: "上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "と...では with mother listed first.",
      },
      {
        segments: [
          { text: "たけしさんは お母さんより 料理[りょうり]が " },
          {
            text: "得意[とくい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 得意 for being good at cooking.",
      },
    ],
  },
  {
    english: "I think working part-time is harder than working at a company.",
    answers: [
      {
        segments: [
          { text: "会社[かいしゃ]で 働[はたら]くより、アルバイトをするほうが 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Statement with と思います and より〜ほうが comparison.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]で 働[はたら]くことより、アルバイトをすることのほうが 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses こと nominalization on both actions.",
      },
      {
        segments: [
          { text: "アルバイトをすることは、会社[かいしゃ]で 働[はたら]くことより 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Topic-first こと nominalization.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]で 働[はたら]くのと アルバイトをするのでは、アルバイトをするほうが 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses の nominalization with と...では and explicit result.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]で 働[はたら]くことと アルバイトをすることでは、アルバイトをすることのほうが 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses こと nominalization with と...では and explicit result.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]で 働[はたら]くより、アルバイトのほうが 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses noun アルバイト with working implied.",
      },
    ],
  },
  {
    english: "Do you think supermarket sushi is better than convenience store sushi?",
    answers: [
      {
        segments: [
          { text: "コンビニのすしより、スーパーのすしのほうが おいしいと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses より〜のほうが with と思いますか.",
      },
      {
        segments: [
          { text: "スーパーのすしは、コンビニのすしより おいしいと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Topic-first comparison.",
      },
      {
        segments: [
          { text: "スーパーのすしと コンビニのすしでは、どちらのほうが おいしいと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses と...では with supermarket sushi listed first.",
      },
      {
        segments: [
          { text: "コンビニのすしと スーパーのすしでは、どちらのほうが おいしいと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses と...では with convenience store sushi listed first.",
      },
      {
        segments: [
          { text: "コンビニですしを 買[か]うより、スーパーですしを 買[か]うほうが おいしいと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Action comparison, with the resulting sushi implied.",
      },
    ],
  },
  {
    english: "I think doing laundry is harder than doing homework.",
    answers: [
      {
        segments: [
          { text: "宿題[しゅくだい]をするより、洗濯[せんたく]するほうが 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Statement with と思います and より〜ほうが comparison.",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]をすることより、洗濯[せんたく]することのほうが 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses こと nominalization on both actions.",
      },
      {
        segments: [
          { text: "洗濯[せんたく]することは、宿題[しゅくだい]をすることより 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Topic-first こと nominalization.",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]をするのと 洗濯[せんたく]するのでは、洗濯[せんたく]するほうが 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses の nominalization with と...では and explicit result.",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]をすることと 洗濯[せんたく]することでは、洗濯[せんたく]することのほうが 大変[たいへん]だと " },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses こと nominalization with と...では and explicit result.",
      },
    ],
  },
  {
    english:
      "Between eating at a restaurant and eating with your family, which do you like more?",
    answers: [
      {
        segments: [
          { text: "レストランで 食[た]べるのと 家族[かぞく]と 食[た]べるのでは、どちらのほうが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses の nominalization with と...では and どちらのほうが.",
      },
      {
        segments: [
          { text: "レストランで 食[た]べることと 家族[かぞく]と 食[た]べることでは、どちらのほうが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses こと nominalization with と...では.",
      },
      {
        segments: [
          { text: "レストランで 食[た]べるのと 家族[かぞく]と 食[た]べるのと、どちらが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses のと...のと with どちらが.",
      },
      {
        segments: [
          { text: "家族[かぞく]と 食[た]べるのと レストランで 食[た]べるのでは、どちらのほうが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Family listed first.",
      },
      {
        segments: [
          { text: "レストランで 食[た]べるより、家族[かぞく]と 食[た]べるほうが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Direct comparison with family eating as the preferred option.",
      },
      {
        segments: [
          { text: "家族[かぞく]と 食[た]べるより、レストランで 食[た]べるほうが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Direct comparison with restaurant eating as the preferred option.",
      },
    ],
  },
]

import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Between the Shinkansen and an airplane, which is faster?",
    answers: [
      {
        segments: [
          { text: "新幹線[しんかんせん]と 飛行機[ひこうき]と、" },
          { text: "どちらが 速[はや]いですか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]と 飛行機[ひこうき]、どちらが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "と repeated once (second と dropped)",
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]と 飛行機[ひこうき]と、どちらのほうが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "どちらのほうが variant",
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]と 飛行機[ひこうき]、どちらのほうが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "どちらのほうが variant, second と dropped",
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]と 飛行機[ひこうき]と、どっちが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "どっち variant",
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]と 飛行機[ひこうき]、どっちが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "どっち variant, second と dropped",
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]と 飛行機[ひこうき]と、どっちのほうが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "どっちのほうが variant",
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]と 飛行機[ひこうき]、どっちのほうが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "どっちのほうが variant, second と dropped",
      },
      {
        segments: [
          {
            text: "飛行機[ひこうき]と 新幹線[しんかんせん]と、どちらが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "airplane listed first",
      },
      {
        segments: [
          {
            text: "飛行機[ひこうき]と 新幹線[しんかんせん]、どちらが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "airplane first, second と dropped",
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]と 飛行機[ひこうき]では、どちらが 速[はや]いですか",
          },
        ],
        register: "polite",
        notes: "では (topic marker) instead of と、",
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
        notes:
          "より～のほうが construction. The blank covers the comparative grammar nucleus ほうが好き.",
      },
      {
        segments: [
          {
            text: "すしを 食[た]べるのは、ハンバーガーを 食[た]べるより 好[す]きです",
          },
        ],
        notes: "のは variant with より at the end",
      },
      {
        segments: [
          { text: "ハンバーガーを 食[た]べるより、すしのほうが 好[す]きです" },
        ],
        notes:
          "Using noun すし with のほうが (dropping 食べる for the preferred item)",
      },
      {
        segments: [
          { text: "ハンバーガーより、すしを 食[た]べるほうが 好[す]き" },
          { text: "です" },
        ],
        notes: "ハンバーガーより with noun only for the disliked item",
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
          {
            text: "インドの 夏[なつ]より、日本[にほん]の 夏[なつ]のほうが 暑[あつ]いですか",
          },
        ],
        register: "polite",
        notes: "Same comparison as a single sentence",
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
          { text: "どちらが 楽[たの]しいですか", blank: true },
        ],
        register: "polite",
        notes:
          'Using こと to nominalize the verbs, and どちらが for the "which" comparison. The hint says to use "I" perspective but since this is a question about what "you find" enjoyable, it\'s naturally phrased as a question directed at the listener. The whole sentence is the target grammar (と～と、どちらが construction).',
      },
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]することと、どっちが 楽[たの]しいですか",
          },
        ],
        register: "polite",
        notes: "Using どっちが instead of どちらが (more casual)",
      },
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]すること、どちらが 楽[たの]しいですか",
          },
        ],
        register: "polite",
        notes: "Dropping the second と before comma",
      },
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]すること、どっちが 楽[たの]しいですか",
          },
        ],
        register: "polite",
        notes: "Dropping the second と, using どっちが",
      },
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのと、どちらが 楽[たの]しいですか",
          },
        ],
        register: "polite",
        notes: "Using の instead of こと for nominalization",
      },
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのと、どっちが 楽[たの]しいですか",
          },
        ],
        register: "polite",
        notes: "Using の for nominalization and どっちが",
      },
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するの、どちらが 楽[たの]しいですか",
          },
        ],
        register: "polite",
        notes: "Using の for nominalization, dropping second と",
      },
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]することと 図書館[としょかん]で 勉強[べんきょう]することと、どちらのほうが 楽[たの]しいですか",
          },
        ],
        register: "polite",
        notes: "Using どちらのほうが",
      },
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのと、どちらのほうが 楽[たの]しいですか",
          },
        ],
        register: "polite",
        notes: "Using の nominalization with どちらのほうが",
      },
      {
        segments: [
          {
            text: "カフェで 勉強[べんきょう]するのと 図書館[としょかん]で 勉強[べんきょう]するのでは、どちらの 方[ほう]が 楽[たの]しいですか",
          },
        ],
        register: "polite",
        notes: "では (topic marker) instead of と、",
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
          {
            text: "けんじさんの 猫[ねこ]より、けんじさんの 犬[いぬ]のほうが 大[おお]きいですか",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "猫[ねこ]より、 犬[いぬ]のほうが 大[おお]きいですか" },
        ],
        register: "polite",
      },
      ],
  },
  {
    english: "Taking a bath is about as relaxing as listening to music.",
    answers: [
      {
        segments: [
          {
            text: "お 風呂[ふろ]に 入[はい]ることは 音楽[おんがく]を 聞[き]くことと",
          },
          { text: "同[おな]じくらい 楽[たの]しい", blank: true },
        ],
        notes:
          'Uses と同じくらい to express "just as enjoyable as". 楽しい is used as the closest available adjective for "relaxing". お風呂に入ること is compared to 音楽を聞くこと.',
      },

      {
        segments: [
          {
            text: "風呂[ふろ]に 入[はい]ることは 音楽[おんがく]を 聞[き]くことと 同[おな]じくらい 楽[たの]しい",
          },
        ],
        notes: "Without お on 風呂",
      },
      {
        segments: [
          {
            text: "お 風呂[ふろ]に 入[はい]ることは 音楽[おんがく]を 聞[き]くことと 同[おな]じぐらい 楽[たの]しい",
          },
        ],
        notes: "ぐらい variant instead of くらい",
      },
      {
        segments: [
          {
            text: "風呂[ふろ]に 入[はい]ることは 音楽[おんがく]を 聞[き]くことと 同[おな]じぐらい 楽[たの]しい",
          },
        ],
        notes: "Without お on 風呂 + ぐらい variant",
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
        segments: [{ text: "ピザより、ワインのほうが 有名[ゆうめい]ですか" }],
        register: "polite",
        notes: "Dropped イタリアの for both",
      },
    ],
  },
  {
    english: "Between singing and dancing, which does Haruka enjoy more?",
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
          {
            text: "はるかさんは 歌[うた]うことと 踊[おど]ることと、どちらのほうが 好[す]きですか",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "はるかさんは 歌[うた]うことと 踊[おど]ること、どちらが 好[す]きですか",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "はるかさんは 歌[うた]うことと 踊[おど]ること、どちらのほうが 好[す]きですか",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "はるかさんは 歌[うた]うことと 踊[おど]ることと、どっちが 好[す]きですか",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "はるかさんは 歌[うた]うことと 踊[おど]ることと、どっちのほうが 好[す]きですか",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "はるかさんは 歌[うた]うことと 踊[おど]ること、どっちが 好[す]きですか",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "はるかさんは 歌[うた]うことと 踊[おど]ること、どっちのほうが 好[す]きですか",
          },
        ],
        register: "polite",
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
      ],
  },
  {
    english: "Is reading books more interesting than watching TV?",
    answers: [
      {
        segments: [
          { text: "テレビを 見[み]るより、本[ほん]を 読[よ]むほうが" },
          { text: "面白[おもしろ]いですか", blank: true },
        ],
        register: "polite",
        notes:
          "The blank covers the adjective predicate including the question marker, as the core comparison outcome of the より～のほうが structure.",
      },
      {
        segments: [
          {
            text: "テレビを 見[み]ることより、本[ほん]を 読[よ]むことのほうが面白[おもしろ]いですか",
          },
        ],
        register: "polite",
        notes: "Using こと nominalizer for both verbs",
      },
      {
        segments: [
          {
            text: "本[ほん]を 読[よ]むのは、テレビを 見[み]るより面白[おもしろ]いですか",
          },
        ],
        register: "polite",
        notes:
          "Topic-first word order: 本を読むのは、テレビを見るより面白いですか",
      },
      {
        segments: [
          {
            text: "テレビを 見[み]ることより、本[ほん]を 読[よ]むほうが面白[おもしろ]いですか",
          },
        ],
        register: "polite",
        notes: "こと on first verb only, ほう on second",
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
          {
            text: "富士山[ふじさん]は韓国[かんこく]のどの山[やま]より高[たか]いですか",
          },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]は韓国[かんこく]のどの山[やま]よりも高[たか]いですか",
          },
        ],
        register: "polite",
        notes: "よりも variant",
      },
    ],
  },
  {
    english: "Is living in a dormitory about as convenient as living at home?",
    answers: [
      {
        segments: [
          { text: "寮[りょう]に 住[す]むことは うちに 住[す]むことと 同[おな]じくらい" },
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
        notes:
          "Using と同じくらい pattern: Noun/Verb こと + と同じくらい + な-adjective.",
      },
      {
        segments: [
          { text: "家[いえ]より、寮[りょう]のほうが便利[べんり]ですか" },
        ],
        register: "polite",
      },
      {
        segments: [{ text: "うちより寮[りょう]のほうが便利[べんり]ですか" }],
        register: "polite",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 住[す]むことは うちに 住[す]むことと同[おな]じくらい便利[べんり]ですか",
          },
        ],
        register: "polite",
        notes: "No comma variation",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 住[す]むことは 家[いえ]に 住[す]むことと 同[おな]じくらい 便利[べんり]ですか",
          },
        ],
        register: "polite",
        notes: "家 instead of うち",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 住[す]むことは うちに 住[す]むことと 同[おな]じぐらい 便利[べんり]ですか",
          },
        ],
        register: "polite",
        notes: "ぐらい variant",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 住[す]むことは 家[いえ]に 住[す]むことと 同[おな]じぐらい 便利[べんり]ですか",
          },
        ],
        register: "polite",
        notes: "家 + ぐらい variant",
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
        notes: "Reversed order with は instead of のほうが",
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
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
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
    ],
  },
  {
    english: "Is Takeshi's cooking better than his mother's cooking?",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          {
            text: "たけしさんのお母[かあ]さんの料理[りょうり]より、たけしさんの料理[りょうり]のほうが",
            blank: true,
          },
          { text: "上手[じょうず]" },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes:
          "Using より〜のほうが to compare Takeshi's cooking to his mother's. 上手 describes cooking skill.",
      },

      {
        segments: [
          {
            text: "お母[かあ]さんの料理[りょうり]より、たけしさんの料理[りょうり]のほうが上手[じょうず]ですか",
          },
        ],
        register: "polite",
        notes:
          "Dropping たけしさんの before お母さん — still clear from context",
      },
      {
        segments: [
          {
            text: "たけしさんのお母[かあ]さんの料理[りょうり]より、たけしさんのほうが料理[りょうり]が上手[じょうず]ですか",
          },
        ],
        register: "polite",
        notes: "Alternative word order: たけしさんのほうが料理が上手ですか",
      },
      {
        segments: [
          {
            text: "たけしさんのお母[かあ]さんの料理[りょうり]より、たけしさんの料理[りょうり]のほうがよいですか",
          },
        ],
        register: "polite",
        notes: "Using よい instead of 上手 — 'is better'",
      },
    ],
  },
  {
    english: "Is working at a company more stressful than working part-time?",
    answers: [
      {
        segments: [
          { text: "アルバイトをすることより、" },
          { text: "会社[かいしゃ]で 働[はたら]くことのほうが", blank: true },
          { text: "大変[たいへん]ですか" },
        ],
        register: "polite",
        notes:
          'Using 大変 (tough/hard) to express "stressful". より～のほうが comparison question structure.',
      },
      {
        segments: [
          {
            text: "アルバイトをするより、会社[かいしゃ]で働[はたら]くほうが大変[たいへん]ですか",
          },
        ],
        register: "polite",
        notes:
          "Without こと nominalization on both verbs, using verb directly before ほうが",
      },
      {
        segments: [
          {
            text: "会社[かいしゃ]で働[はたら]くことはアルバイトをすることより大変[たいへん]ですか",
          },
        ],
        register: "polite",
        notes: "Reversed order: company work は + part-time より",
      },
      {
        segments: [
          {
            text: "アルバイトより会社[かいしゃ]で働[はたら]くほうが大変[たいへん]ですか",
          },
        ],
        register: "polite",
        notes:
          "Abbreviated: アルバイトより会社で働くほうが大変ですか — comparing the activity directly",
      },
    ],
  },
  {
    english:
      "Is buying sushi at a supermarket about as delicious as eating it at a sushi restaurant?",
    answers: [
      {
        segments: [
          {
            text: "スーパーですしを 買[か]うことは、すし 屋[や]で 食[た]べることと 同[おな]じくらい",
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
          { text: "か" },
        ],
        notes:
          "Uses と同じくらい to compare buying sushi at a supermarket vs. eating it at a sushi restaurant.",
      },
      {
        segments: [
          {
            text: "スーパーですしを 買[か]うことより、レストランですしを 食[た]べることのほうがおいしいですか",
          },
        ],
        register: "polite",
        notes: "Standard form",
      },
      {
        segments: [
          {
            text: "スーパーですしを 買[か]うよりレストランですしを 食[た]べるほうがおいしいですか",
          },
        ],
        register: "polite",
        notes: "Dropped こと, の versions",
      },
      {
        segments: [
          {
            text: "スーパーですしを 買[か]うよりも、レストランですしを 食[た]べるほうがおいしいですか",
          },
        ],
        register: "polite",
        notes: "よりも variation",
      },
      {
        segments: [
          {
            text: "スーパーで 買[か]ったすしより、レストランで 食[た]べたすしのほうがおいしいですか",
          },
        ],
        register: "polite",
        notes: "Noun phrase variation using past tense modifiers",
      },
      {
        segments: [
          {
            text: "スーパーですしを 買[か]うことは、すし 屋[や]で 食[た]べることと同[おな]じくらいおいしいですか",
          },
        ],
        register: "polite",
        notes: "Standard word order",
      },
      {
        segments: [
          {
            text: "スーパーですしを 買[か]うことは、すし 屋[や]で 食[た]べることと同[おな]じぐらいおいしいですか",
          },
        ],
        register: "polite",
        notes: "ぐらい variation",
      },
      {
        segments: [
          {
            text: "スーパーですしを 買[か]うことは、すしやで 食[た]べることと同[おな]じくらいおいしいですか",
          },
        ],
        register: "polite",
        notes: "すし屋 written without space",
      },
      {
        segments: [
          {
            text: "すし 屋[や]で 食[た]べることと同[おな]じくらい、スーパーですしを 買[か]うことはおいしいですか",
          },
        ],
        register: "polite",
        notes: "Word order: sushi restaurant first",
      },
    ],
  },
  {
    english: "Is doing overtime work more tiring than doing laundry?",
    answers: [
      {
        segments: [
          {
            text: "洗濯[せんたく]することより、残業[ざんぎょう]することのほうが",
            blank: true,
          },
          { text: "大変[たいへん]ですか" },
        ],
        register: "polite",
        notes:
          'Using 大変 (tough/hard) as the adjective for "tiring", since there is no い-adjective for "tiring" in the known vocab. 大変 covers the meaning well here. The blank covers the full より～のほうが construction.',
      },
      {
        segments: [
          {
            text: "洗濯[せんたく]することより、残業[ざんぎょう]するほうが大変[たいへん]ですか",
          },
        ],
        register: "polite",
      },
    ],
  },
  {
    english:
      "Between eating at a restaurant and cooking at home, which do you think is more enjoyable?",
    answers: [
      {
        segments: [
          {
            text: "レストランで 食[た]べることと 家[いえ]で 料理[りょうり]することと、",
          },
          { text: "どちらが 楽[たの]しいと 思[おも]いますか", blank: true },
        ],
        notes:
          'Verbal phrases using こと nominalizer: レストランで食べること (eating at a restaurant) and 家で料理すること (cooking at home). どちらが～と思いますか for "which do you think is more..."',
      },
      {
        segments: [
          {
            text: "レストランで 食[た]べることと 家[いえ]で 料理[りょうり]すること、どちらが 楽[たの]しいと 思[おも]いますか",
          },
        ],
        notes: "Second と before どちら dropped",
      },
      {
        segments: [
          {
            text: "レストランで 食[た]べることと 家[いえ]で 料理[りょうり]すること、どちらのほうが 楽[たの]しいと 思[おも]いますか",
          },
        ],
        notes: "Second と dropped, どちらのほうが variant",
      },
      {
        segments: [
          {
            text: "レストランで 食[た]べることと 家[いえ]で 料理[りょうり]すること、どっちが 楽[たの]しいと 思[おも]いますか",
          },
        ],
        notes: "Second と dropped, どっちが casual variant",
      },
      {
        segments: [
          {
            text: "レストランで 食[た]べることと 家[いえ]で 料理[りょうり]すること、どっちのほうが 楽[たの]しいと 思[おも]いますか",
          },
        ],
        notes: "Second と dropped, どっちのほうが casual variant",
      },
      {
        segments: [
          {
            text: "レストランで 食[た]べることと 家[いえ]で 料理[りょうり]すること と、どちらのほうが 楽[たの]しいと 思[おも]いますか",
          },
        ],
        notes: "Both と kept, どちらのほうが variant",
      },
      {
        segments: [
          {
            text: "レストランで 食[た]べることと 家[いえ]で 料理[りょうり]すること と、どっちが 楽[たの]しいと 思[おも]いますか",
          },
        ],
        notes: "Both と kept, どっちが variant",
      },
      {
        segments: [
          {
            text: "レストランで 食[た]べることと 家[いえ]で 料理[りょうり]すること と、どっちのほうが 楽[たの]しいと 思[おも]いますか",
          },
        ],
        notes: "Both と kept, どっちのほうが variant",
      },
      ],
  },
]

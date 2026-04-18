import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I heard from the news that there was a big earthquake yesterday",
    answers: [
      {
        segments: [
          {
            text: "ニュースによると 昨日[きのう]大[おお]きい 地震[じしん]があった",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with 大きい",
      },
      {
        segments: [
          { text: "ニュースによると 昨日[きのう]大きな 地震[じしん]があった" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with 大きな",
      },
      {
        segments: [
          {
            text: "ニュースによると 昨日[きのう]は 大[おお]きい 地震[じしん]があった",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Adding は after time reference with 大きい",
      },
      {
        segments: [
          {
            text: "ニュースによると 昨日[きのう]は 大きな 地震[じしん]があった",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Adding は after time reference with 大きな",
      },
      {
        segments: [
          {
            text: "ニュースでは 昨日[きのう]大[おお]きい 地震[じしん]があった",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using では with news source",
      },
      {
        segments: [
          {
            text: "ニュースでは 昨日[きのう]は 大[おお]きい 地震[じしん]があった",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using では with news source and は after time",
      },
    ],
  },
  {
    english: "I heard from the weather forecast that a typhoon is coming",
    answers: [
      {
        segments: [
          { text: "天気予報[てんきよほう]によると 台風[たいふう]が 来[く]る" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では 台風[たいふう]が 来[く]る" },
          { text: "そうです", blank: true },
        ],
        notes: "Using では",
      },
      {
        segments: [
          {
            text: "天気予報[てんきよほう]によると 台風[たいふう]が 近[ちか]づいている",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 近づいている",
      },
      {
        segments: [
          {
            text: "天気予報[てんきよほう]では 台風[たいふう]が 近[ちか]づいている",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using では with 近づいている",
      },
    ],
  },
  {
    english: "I heard it will snow tomorrow",
    answers: [
      {
        segments: [
          { text: "明日[あした]雪[ゆき]が 降[ふ]る" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure",
      },
      {
        segments: [
          { text: "明日[あした]は 雪[ゆき]が 降[ふ]る" },
          { text: "そうです", blank: true },
        ],
        notes: "Using は with time reference",
      },
    ],
  },
  {
    english: "I heard their teacher is very strict",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]はとても 厳[きび]しい" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with は",
      },
      {
        segments: [
          { text: "先生[せんせい]がとても 厳[きび]しい" },
          { text: "そうです", blank: true },
        ],
        notes: "Using が",
      },
      {
        segments: [
          { text: "あの 先生[せんせい]はとても 厳[きび]しい" },
          { text: "そうです", blank: true },
        ],
        notes: "Using あの with は",
      },
      {
        segments: [
          { text: "あの 先生[せんせい]がとても 厳[きび]しい" },
          { text: "そうです", blank: true },
        ],
        notes: "Using あの with が",
      },
      {
        segments: [
          {
            text: "みんなの 話[はなし]では 先生[せんせい]はとても 厳[きび]しい",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Adding source with では",
      },
    ],
  },
  {
    english: "I heard from my friend that that restaurant's sushi is delicious",
    answers: [
      {
        segments: [
          {
            text: "友[とも]達[だち]によるとあのレストランの 寿司[すし]は 美味[おい]しい",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with は",
      },
      {
        segments: [
          {
            text: "友[とも]達[だち]によるとあのレストランの 寿司[すし]が 美味[おい]しい",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using が",
      },
      {
        segments: [
          {
            text: "友[とも]達[だち]の 話[はなし]ではあのレストランの 寿司[すし]は 美味[おい]しい",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では",
      },
      {
        segments: [
          {
            text: "友[とも]達[だち]の 話[はなし]ではあのレストランの 寿司[すし]が 美味[おい]しい",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では with が",
      },
    ],
  },
  {
    english: "I heard the final exam was very difficult",
    answers: [
      {
        segments: [
          { text: "期末試験[きまつしけん]はとても 難[むずか]しかった" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with は",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]がとても 難[むずか]しかった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using が",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]はすごく 難[むずか]しかった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using すごく instead of とても",
      },
    ],
  },
  {
    english: "I heard from my roommate that the rent is expensive",
    answers: [
      {
        segments: [
          { text: "ルームメイトによると 家賃[やちん]が 高[たか]い" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with が",
      },
      {
        segments: [
          { text: "ルームメイトによると 家賃[やちん]は 高[たか]い" },
          { text: "そうです", blank: true },
        ],
        notes: "Using は",
      },
      {
        segments: [
          { text: "ルームメイトの 話[はなし]では 家賃[やちん]が 高[たか]い" },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では with が",
      },
      {
        segments: [
          { text: "ルームメイトの 話[はなし]では 家賃[やちん]は 高[たか]い" },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では with は",
      },
      {
        segments: [
          { text: "ルームメイトによるとこの 家賃[やちん]は 高[たか]い" },
          { text: "そうです", blank: true },
        ],
        notes: "Adding この with は",
      },
    ],
  },
  {
    english: "Apparently there was a big fire yesterday",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]大[おお]きい 火事[かじ]があった" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with 大きい",
      },
      {
        segments: [
          { text: "昨日[きのう]大きな 火事[かじ]があった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using 大きな",
      },
      {
        segments: [
          { text: "昨日[きのう]は 大[おお]きい 火事[かじ]があった" },
          { text: "そうです", blank: true },
        ],
        notes: "Adding は after time reference with 大きい",
      },
      {
        segments: [
          { text: "昨日[きのう]は 大きな 火事[かじ]があった" },
          { text: "そうです", blank: true },
        ],
        notes: "Adding は after time reference with 大きな",
      },
      {
        segments: [
          { text: "昨日[きのう]大変[たいへん]な 火事[かじ]があった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using 大変な",
      },
      {
        segments: [
          { text: "昨日[きのう]は 大変[たいへん]な 火事[かじ]があった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using は with 大変な",
      },
    ],
  },
  {
    english: "I heard from the newspaper that a new shopping mall will open",
    answers: [
      {
        segments: [
          {
            text: "新聞[しんぶん]によると 新[あたら]しいショッピングモールができる",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with できる",
      },
      {
        segments: [
          {
            text: "新聞[しんぶん]では 新[あたら]しいショッピングモールができる",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using では",
      },
      {
        segments: [
          {
            text: "新聞[しんぶん]によると 新[あたら]しいショッピングモールがオープンする",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using オープンする",
      },
      {
        segments: [
          {
            text: "新聞[しんぶん]では 新[あたら]しいショッピングモールがオープンする",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using では with オープンする",
      },
      {
        segments: [
          {
            text: "新聞[しんぶん]の 記事[きじ]によると 新[あたら]しいショッピングモールができる",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 記事によると",
      },
      {
        segments: [
          {
            text: "新聞[しんぶん]の 記事[きじ]では 新[あたら]しいショッピングモールができる",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 記事では",
      },
    ],
  },
  {
    english: "Apparently she got a full-time job at a bank",
    answers: [
      {
        segments: [
          { text: "銀行[ぎんこう]に 就職[しゅうしょく]した" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure",
      },
      {
        segments: [
          { text: "銀行[ぎんこう]で 働[はたら]くことになった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using 働くことになった",
      },
      {
        segments: [
          { text: "銀行[ぎんこう]の 仕事[しごと]が 決[き]まった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using 決まった",
      },
      {
        segments: [
          { text: "彼女[かのじょ]は 銀行[ぎんこう]に 就職[しゅうしょく]した" },
          { text: "そうです", blank: true },
        ],
        notes: "Adding subject with は",
      },
      {
        segments: [
          { text: "彼女[かのじょ]が 銀行[ぎんこう]に 就職[しゅうしょく]した" },
          { text: "そうです", blank: true },
        ],
        notes: "Adding subject with が",
      },
      {
        segments: [
          { text: "銀行[ぎんこう]では 働[はたら]くことになった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using では",
      },
    ],
  },
  {
    english: "I heard from the teacher that the homework is very easy",
    answers: [
      {
        segments: [
          {
            text: "先生[せんせい]によると 宿題[しゅくだい]はとても 簡単[かんたん]だ",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with 簡単",
      },
      {
        segments: [
          {
            text: "先生[せんせい]によると 宿題[しゅくだい]はとても 優[やさ]しい",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using やさしい",
      },
      {
        segments: [
          {
            text: "先生[せんせい]の 話[はなし]では 宿題[しゅくだい]はとても 簡単[かんたん]だ",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では",
      },
      {
        segments: [
          {
            text: "先生[せんせい]によると 今回[こんかい]の 宿題[しゅくだい]はとても 簡単[かんたん]だ",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Adding 今回の",
      },
      {
        segments: [
          {
            text: "先生[せんせい]の 話[はなし]では 今回[こんかい]の 宿題[しゅくだい]はとても 簡単[かんたん]だ",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では with 今回の",
      },
    ],
  },
  {
    english: "I heard the movie was boring",
    answers: [
      {
        segments: [
          { text: "映画[えいが]はつまらなかった" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with は",
      },
      {
        segments: [
          { text: "映画[えいが]がつまらなかった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using が",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はつまらなかった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using あの with は",
      },
    ],
  },
  {
    english: "I heard from my friend that that cafe's coffee is good",
    answers: [
      {
        segments: [
          { text: "友[とも]達[だち]によるとあのカフェのコーヒーはいい" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with いい",
      },
      {
        segments: [
          {
            text: "友[とも]達[だち]によるとあのカフェのコーヒーが 美味[おい]しい",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using が and おいしい",
      },
      {
        segments: [
          {
            text: "友[とも]達[だち]の 話[はなし]ではあのカフェのコーヒーはいい",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では with は",
      },
      {
        segments: [
          {
            text: "友[とも]達[だち]の 話[はなし]ではあのカフェのコーヒーが 美味[おい]しい",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では with が",
      },
      {
        segments: [
          { text: "友[とも]達[だち]の 話[はなし]ではあそこのコーヒーはいい" },
          { text: "そうです", blank: true },
        ],
        notes: "Using あそこ instead of あのカフェ",
      },
    ],
  },
  {
    english: "I heard it will snow tomorrow",
    answers: [
      {
        segments: [
          { text: "明日[あした]雪[ゆき]が 降[ふ]る" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure",
      },
      {
        segments: [
          { text: "明日[あした]は 雪[ゆき]が 降[ふ]る" },
          { text: "そうです", blank: true },
        ],
        notes: "Using は with time reference",
      },
      {
        segments: [
          {
            text: "天気予報[てんきよほう]によると 明日[あした]雪[ゆき]が 降[ふ]る",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Adding information source",
      },
      {
        segments: [
          {
            text: "天気予報[てんきよほう]によると 明日[あした]は 雪[ゆき]が 降[ふ]る",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using source and は",
      },
      {
        segments: [
          {
            text: "天気予報[てんきよほう]では 明日[あした]雪[ゆき]が 降[ふ]る",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using では",
      },
      {
        segments: [
          {
            text: "天気予報[てんきよほう]では 明日[あした]は 雪[ゆき]が 降[ふ]る",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using では and は",
      },
    ],
  },
  {
    english: "I heard from my classmate that the test was easy",
    answers: [
      {
        segments: [
          { text: "クラスメートによるとテストは 優[やさ]しかった" },
          { text: "そうです", blank: true },
        ],
        notes: "Basic structure with やさしい",
      },
      {
        segments: [
          { text: "クラスメートによるとテストは 簡単[かんたん]だった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using かんたん",
      },
      {
        segments: [
          { text: "クラスメートの 話[はなし]ではテストは 優[やさ]しかった" },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では with やさしい",
      },
      {
        segments: [
          {
            text: "クラスメートの 話[はなし]ではテストは 簡単[かんたん]だった",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では with かんたん",
      },
      {
        segments: [
          {
            text: "クラスメートによると 今回[こんかい]のテストは 優[やさ]しかった",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Adding 今回の",
      },
      {
        segments: [
          {
            text: "クラスメートの 話[はなし]では 今回[こんかい]のテストは 簡単[かんたん]だった",
          },
          { text: "そうです", blank: true },
        ],
        notes: "Using 話では with 今回の and かんたん",
      },
    ],
  },
]

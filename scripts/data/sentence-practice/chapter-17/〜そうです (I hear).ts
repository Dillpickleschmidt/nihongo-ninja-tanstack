import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I heard that the new cafe near the station is quiet.",
    hint: "cafe = カフェ",
    answers: [
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しい カフェは 静[しず]か" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation with は marking the cafe as the topic",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しい カフェが 静[しず]か" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to identify the cafe as the subject of the reported information",
      },
      {
        segments: [
          { text: "新[あたら]しい カフェは 駅[えき]の 近[ちか]くで、静[しず]か" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Splits the description: the cafe is near the station, and it is quiet",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くにある 新[あたら]しい カフェは 静[しず]か" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses にある to express “located near the station”",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くにある 新[あたら]しい カフェが 静[しず]か" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses にある and が for the subject of the reported information",
      },
      {
        segments: [
          { text: "新[あたら]しい カフェが 駅[えき]の 近[ちか]くにあって、静[しず]か" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses te-form あって to connect location and quietness within the reported content",
      },
    ],
  },
  {
    english: "I heard that it will rain tomorrow.",
    answers: [
      {
        segments: [
          { text: "明日[あした]は 雨[あめ]が 降[ふ]る" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using Verb + そうです for hearsay.",
      },
      {
        segments: [
          { text: "明日[あした]、雨[あめ]が 降[ふ]る" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Without topical は; neutral statement about tomorrow.",
      },
      {
        segments: [
          { text: "明日[あした]は 雨[あめ]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses Noun + だそうです: 'tomorrow will be rain/rainy'.",
      },
      {
        segments: [
          { text: "明日[あした]は 雨[あめ]に なる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 雨になる ('become rainy') with Verb + そうです.",
      },
      {
        segments: [
          { text: "明日[あした]、雨[あめ]に なる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Same 雨になる expression without topical は.",
      },
      {
        segments: [
          { text: "明日[あした]、雨[あめ]が 降[ふ]るんだ" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Adds explanatory んだ before the hearsay そう, a natural spoken form.",
      },
      {
        segments: [
          { text: "明日[あした]は 雨[あめ]が 降[ふ]るんだ" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Explanatory んだ form with 明日は topic.",
      },
      {
        segments: [
          { text: "明日[あした]、雨[あめ] 降[ふ]る" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Colloquial dropped が after 雨.",
      },
      {
        segments: [
          { text: "明日[あした]は 雨[あめ] 降[ふ]る" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Colloquial dropped が with 明日は topic.",
      },
      {
        segments: [
          { text: "明日[あした]、雨[あめ]なんだ" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Colloquial explanatory noun form 雨なんだ + そうです.",
      },
      {
        segments: [
          { text: "明日[あした]は 雨[あめ]なんだ" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Explanatory noun form with 明日は topic.",
      },
    ],
  },
  {
    english: "I heard that Kenji's older sister is a famous singer.",
    hint: "Kenji = 健二",
    answers: [
      {
        segments: [
          { text: "健二[けんじ]さんの お姉[ねえ]さんは 有名[ゆうめい]な 歌手[かしゅ]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation with は and the conversational word お姉さん.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんの お姉[ねえ]さんが 有名[ゆうめい]な 歌手[かしゅ]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark Kenji's older sister as the subject of the reported information.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんの 姉[あね]は 有名[ゆうめい]な 歌手[かしゅ]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 姉, a plainer term for older sister.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんの 姉[あね]が 有名[ゆうめい]な 歌手[かしゅ]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 姉 with が.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんの お姉[ねえ]さんは 歌手[かしゅ]で、有名[ゆうめい]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Says she is a singer and famous, with 有名 as the reported な-adjective predicate.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんの お姉[ねえ]さんが 歌手[かしゅ]で、有名[ゆうめい]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Same wording with が as the subject marker.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんの 姉[あね]は 歌手[かしゅ]で、有名[ゆうめい]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 姉 and reporting 有名だそうです.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんの 姉[あね]が 歌手[かしゅ]で、有名[ゆうめい]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 姉 with が in the 'singer and famous' wording.",
      },
    ],
  },
  {
    english: "I heard that the Shinkansen was very crowded yesterday.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、新幹線[しんかんせん]は とても 混[こ]んでいた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Basic word order with 新幹線 as the topic and とても for “very”",
      },
      {
        segments: [
          { text: "昨日[きのう]、新幹線[しんかんせん]が とても 混[こ]んでいた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark the Shinkansen as the subject",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 昨日[きのう] とても 混[こ]んでいた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time expression placed after the topic",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]が 昨日[きのう] とても 混[こ]んでいた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time expression after subject with が",
      },
      {
        segments: [
          { text: "昨日[きのう]は 新幹線[しんかんせん]が とても 混[こ]んでいた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using 昨日は as the topic of the report",
      },
      {
        segments: [
          { text: "昨日[きのう]、新幹線[しんかんせん]は すごく 混[こ]んでいた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using すごく instead of とても for “very”",
      },
      {
        segments: [
          { text: "昨日[きのう]、新幹線[しんかんせん]が すごく 混[こ]んでいた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using すごく with が as subject marker",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 昨日[きのう] すごく 混[こ]んでいた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Reordered sentence with すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]は 新幹線[しんかんせん]が すごく 混[こ]んでいた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "昨日は topic with すごく",
      },
    ],
  },
  {
    english: "I heard that the sushi at that restaurant is not expensive.",
    answers: [
      {
        segments: [
          { text: "あの レストランの すしは " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using あのレストランのすし and 高くないそうです.",
      },
      {
        segments: [
          { text: "その レストランの すしは " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Using その for 'that restaurant' near the listener/context.",
      },
      {
        segments: [
          { text: "あの レストランは すしが " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Using レストラン as the topic and すしが as the subject.",
      },
      {
        segments: [
          { text: "その レストランは すしが " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Using その with レストラン as the topic and すしが as the subject.",
      },
      {
        segments: [
          { text: "あの レストランでは、すしは " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Using では to mean 'at that restaurant'.",
      },
      {
        segments: [
          { text: "その レストランでは、すしは " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Using その and では for the restaurant context.",
      },
      {
        segments: [
          { text: "あの レストランの すしは " },
          { text: "安[やす]いそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 安いそうです to express 'inexpensive/cheap'.",
      },
      {
        segments: [
          { text: "その レストランの すしは " },
          { text: "安[やす]いそう", blank: true },
          { text: "です" },
        ],
        notes: "Using その and 安いそうです.",
      },
      {
        segments: [
          { text: "あの レストランは すしが " },
          { text: "安[やす]いそう", blank: true },
          { text: "です" },
        ],
        notes: "Using レストラン as topic with すしが, and 安いそうです.",
      },
      {
        segments: [
          { text: "その レストランは すしが " },
          { text: "安[やす]いそう", blank: true },
          { text: "です" },
        ],
        notes: "Using その, レストラン as topic, and 安いそうです.",
      },
      {
        segments: [
          { text: "あの レストランでは、すしが " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Using では for 'at that restaurant' and が for sushi.",
      },
      {
        segments: [
          { text: "その レストランでは、すしが " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Using その, では, and が.",
      },
      {
        segments: [
          { text: "すしは、あの レストランでは " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order by topicalizing sushi first.",
      },
      {
        segments: [
          { text: "すしは、その レストランでは " },
          { text: "高[たか]くないそう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order with その restaurant.",
      },
      {
        segments: [
          { text: "あの レストランでは、すしが " },
          { text: "安[やす]いそう", blank: true },
          { text: "です" },
        ],
        notes: "Using では and が with 安いそうです.",
      },
      {
        segments: [
          { text: "その レストランでは、すしが " },
          { text: "安[やす]いそう", blank: true },
          { text: "です" },
        ],
        notes: "Using そのレストランでは with 安いそうです.",
      },
      {
        segments: [
          { text: "すしは、あの レストランでは " },
          { text: "安[やす]いそう", blank: true },
          { text: "です" },
        ],
        notes: "Topicalizing sushi first with 安いそうです.",
      },
      {
        segments: [
          { text: "すしは、その レストランでは " },
          { text: "安[やす]いそう", blank: true },
          { text: "です" },
        ],
        notes: "Topicalizing sushi first with そのレストラン and 安いそうです.",
      },
    ],
  },
  {
    english: "I heard that the final exam starts at nine o'clock.",
    answers: [
      {
        segments: [
          { text: "期末試験[きまつしけん]は 九時[くじ]に 始[はじ]まる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation with は marking the final exam as the topic and に for the start time.",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が 九時[くじ]に 始[はじ]まる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark the final exam as the subject/new information.",
      },
      {
        segments: [
          { text: "九時[くじ]に 期末試験[きまつしけん]は 始[はじ]まる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Reordered sentence with the time phrase first.",
      },
      {
        segments: [
          { text: "九時[くじ]に 期末試験[きまつしけん]が 始[はじ]まる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase first, with が marking the subject.",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は 午前[ごぜん]九時[くじ]に 始[はじ]まる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Specifies nine o'clock as 9 a.m., natural for an exam start time.",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が 午前[ごぜん]九時[くじ]に 始[はじ]まる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Specifies 9 a.m. and uses が for the subject.",
      },
      {
        segments: [
          { text: "午前[ごぜん]九時[くじ]に 期末試験[きまつしけん]は 始[はじ]まる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "9 a.m. time phrase placed at the beginning.",
      },
      {
        segments: [
          { text: "午前[ごぜん]九時[くじ]に 期末試験[きまつしけん]が 始[はじ]まる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "9 a.m. time phrase first, with が marking the subject.",
      },
    ],
  },
  {
    english: "I heard that Maria can speak Spanish and Japanese.",
    hint: "Maria = マリア",
    answers: [
      {
        segments: [
          { text: "マリアさんは スペイン語[ご]と 日本語[にほんご]が 話[はな]せる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using the potential verb 話せる with が",
      },
      {
        segments: [
          { text: "マリアさんは 日本語[にほんご]と スペイン語[ご]が 話[はな]せる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Reverses the order of the two languages",
      },
      {
        segments: [
          { text: "マリアさんは スペイン語[ご]と 日本語[にほんご]を 話[はな]せる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses を with the potential verb 話せる, also natural in modern Japanese",
      },
      {
        segments: [
          { text: "マリアさんは 日本語[にほんご]と スペイン語[ご]を 話[はな]せる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses を with 話せる and reverses the language order",
      },
      {
        segments: [
          { text: "マリアさんは スペイン語[ご]も 日本語[にほんご]も 話[はな]せる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses も...も to emphasize that she can speak both languages",
      },
      {
        segments: [
          { text: "マリアさんは 日本語[にほんご]も スペイン語[ご]も 話[はな]せる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses も...も with the language order reversed",
      },
      {
        segments: [
          { text: "マリアさんが スペイン語[ご]と 日本語[にほんご]を 話[はな]せる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses が to mark Maria as the subject/focus",
      },
      {
        segments: [
          { text: "マリアさんが スペイン語[ご]と 日本語[にほんご]が 話[はな]せる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses が for both the subject focus and the object of potential ability",
      },
      {
        segments: [
          { text: "マリアさんは スペイン語[ご]と 日本語[にほんご]を 話[はな]すことができる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses the more formal potential expression 話すことができる",
      },
      {
        segments: [
          { text: "マリアさんは 日本語[にほんご]と スペイン語[ご]を 話[はな]すことができる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 話すことができる with the language order reversed",
      },
      {
        segments: [
          { text: "マリアさんは スペイン語[ご]も 日本語[にほんご]も 話[はな]すことができる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 話すことができる with も...も for both languages",
      },
      {
        segments: [
          { text: "マリアさんは 日本語[にほんご]も スペイン語[ご]も 話[はな]すことができる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 話すことができる and reverses the order in the も...も construction",
      },
    ],
  },
  {
    english: "I heard that that zoo has two pandas.",
    answers: [
      {
        segments: [
          { text: "あの 動物園[どうぶつえん]には パンダが 二匹[にひき] " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation with あの for “that” and には marking the zoo as the location/topic.",
      },
      {
        segments: [
          { text: "その 動物園[どうぶつえん]には パンダが 二匹[にひき] " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses その for “that” when the zoo is near/in the listener’s context.",
      },
      {
        segments: [
          { text: "あの 動物園[どうぶつえん]に パンダが 二匹[にひき] " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses に instead of には; a straightforward location marker.",
      },
      {
        segments: [
          { text: "その 動物園[どうぶつえん]に パンダが 二匹[にひき] " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Combines その with simple location particle に.",
      },
      {
        segments: [
          { text: "あの 動物園[どうぶつえん]は パンダが 二匹[にひき] " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses は to topicalize the zoo; natural for saying what the zoo has.",
      },
      {
        segments: [
          { text: "その 動物園[どうぶつえん]は パンダが 二匹[にひき] " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Topicalized version with その.",
      },
      {
        segments: [
          { text: "パンダが 二匹[にひき]、あの 動物園[どうぶつえん]に " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order, foregrounding the two pandas.",
      },
      {
        segments: [
          { text: "パンダが 二匹[にひき]、その 動物園[どうぶつえん]に " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order with その.",
      },
      {
        segments: [
          { text: "あの 動物園[どうぶつえん]には 二匹[にひき]の パンダが " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 二匹のパンダ instead of パンダが二匹.",
      },
      {
        segments: [
          { text: "その 動物園[どうぶつえん]には 二匹[にひき]の パンダが " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 二匹のパンダ with その.",
      },
      {
        segments: [
          { text: "あの 動物園[どうぶつえん]に 二匹[にひき]の パンダが " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "二匹のパンダ pattern with simple に.",
      },
      {
        segments: [
          { text: "その 動物園[どうぶつえん]に 二匹[にひき]の パンダが " },
          { text: "いるそう", blank: true },
          { text: "です" },
        ],
        notes: "二匹のパンダ pattern with その and に.",
      },
    ],
  },
  {
    english: "I heard that Tanaka gave Yuki a red scarf for Christmas.",
    hint: "Tanaka = 田中; Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは クリスマスに ゆきさんに 赤[あか]い マフラーを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Standard word order with クリスマスに before the recipient",
      },
      {
        segments: [
          { text: "田中[たなか]さんは ゆきさんに クリスマスに 赤[あか]い マフラーを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Recipient placed before the Christmas timing phrase",
      },
      {
        segments: [
          { text: "クリスマスに 田中[たなか]さんは ゆきさんに 赤[あか]い マフラーを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase moved to the beginning",
      },
      {
        segments: [
          { text: "田中[たなか]さんが クリスマスに ゆきさんに 赤[あか]い マフラーを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark Tanaka as the subject/focus",
      },
      {
        segments: [
          { text: "田中[たなか]さんが ゆきさんに クリスマスに 赤[あか]い マフラーを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Using が with recipient before the time phrase",
      },
      {
        segments: [
          { text: "クリスマスに 田中[たなか]さんが ゆきさんに 赤[あか]い マフラーを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase first and subject marked with が",
      },
      {
        segments: [
          { text: "ゆきさんに 田中[たなか]さんは クリスマスに 赤[あか]い マフラーを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Recipient topicalized/fronted for emphasis",
      },
      {
        segments: [
          { text: "ゆきさんには 田中[たなか]さんが クリスマスに 赤[あか]い マフラーを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Recipient marked with には to contrast or emphasize Yuki",
      },
      {
        segments: [
          { text: "田中[たなか]さんは クリスマスに 赤[あか]い マフラーを ゆきさんに " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Object placed before the recipient",
      },
      {
        segments: [
          { text: "田中[たなか]さんが クリスマスに 赤[あか]い マフラーを ゆきさんに " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Object before recipient with subject marked by が",
      },
      {
        segments: [
          { text: "田中[たなか]さんは ゆきさんに 赤[あか]い マフラーを クリスマスに " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase placed just before the verb",
      },
      {
        segments: [
          { text: "田中[たなか]さんが ゆきさんに 赤[あか]い マフラーを クリスマスに " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase just before the verb with が as subject marker",
      },
      {
        segments: [
          { text: "田中[たなか]さんは クリスマスに ゆきさんに 赤[あか]い スカーフを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses スカーフ, a direct loanword for scarf",
      },
      {
        segments: [
          { text: "田中[たなか]さんが クリスマスに ゆきさんに 赤[あか]い スカーフを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses スカーフ with subject marked by が",
      },
      {
        segments: [
          { text: "クリスマスに 田中[たなか]さんは ゆきさんに 赤[あか]い スカーフを " },
          { text: "あげたそう", blank: true },
          { text: "です" },
        ],
        notes: "スカーフ version with time phrase first",
      },
    ],
  },
  {
    english: "I heard that the baby cried last night.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、赤[あか]ちゃんは " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using 昨日の夜 and topic は",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、赤[あか]ちゃんが " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark the baby as the subject",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんは 昨日[きのう]の 夜[よる] " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase placed after the topic",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 昨日[きのう]の 夜[よる] " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Subject が with time phrase after the subject",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]に、赤[あか]ちゃんは " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Using に with the time expression",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]に、赤[あか]ちゃんが " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Using both time に and subject が",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんは 昨日[きのう]の 夜[よる]に " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Time に after the topic",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 昨日[きのう]の 夜[よる]に " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Subject が with time に after it",
      },
      {
        segments: [
          { text: "昨夜[さくや]、赤[あか]ちゃんは " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 昨夜 as a concise synonym for last night",
      },
      {
        segments: [
          { text: "昨夜[さくや]、赤[あか]ちゃんが " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Concise 昨夜 with subject が",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんは 昨夜[さくや] " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "昨夜 placed after topic",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 昨夜[さくや] " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Subject が and 昨夜 after the subject",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんは 昨日[きのう]の 晩[ばん] " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 昨日の晩 as another natural way to say last night",
      },
      {
        segments: [
          { text: "昨日[きのう]の 晩[ばん]、赤[あか]ちゃんが " },
          { text: "泣[な]いたそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 昨日の晩 with subject が",
      },
    ],
  },
  {
    english: "I heard that the station attendant helped the child who got lost.",
    answers: [
      {
        segments: [
          { text: "駅員[えきいん]が 道[みち]に 迷[まよ]った 子供[こども]を 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Basic version with が marking the station attendant as the subject",
      },
      {
        segments: [
          { text: "駅員[えきいん]は 道[みち]に 迷[まよ]った 子供[こども]を 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using は to present the station attendant as the topic",
      },
      {
        segments: [
          { text: "駅員[えきいん]が 道[みち]に 迷[まよ]っていた 子供[こども]を 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using 迷っていた to describe the child as having been lost at the time",
      },
      {
        segments: [
          { text: "駅員[えきいん]は 道[みち]に 迷[まよ]っていた 子供[こども]を 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Combining は topic marking with 迷っていた",
      },
      {
        segments: [
          { text: "道[みち]に 迷[まよ]った 子供[こども]を 駅員[えきいん]が 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order, putting the lost child first",
      },
      {
        segments: [
          { text: "道[みち]に 迷[まよ]った 子供[こども]を 駅員[えきいん]は 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order with は marking the station attendant",
      },
      {
        segments: [
          { text: "道[みち]に 迷[まよ]っていた 子供[こども]を 駅員[えきいん]が 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order with 迷っていた",
      },
      {
        segments: [
          { text: "道[みち]に 迷[まよ]っていた 子供[こども]を 駅員[えきいん]は 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order with 迷っていた and は",
      },
      {
        segments: [
          { text: "駅員[えきいん]さんが 道[みち]に 迷[まよ]った 子供[こども]を 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Adding さん to 駅員 for a slightly more polite/reference-like phrasing",
      },
      {
        segments: [
          { text: "駅員[えきいん]さんは 道[みち]に 迷[まよ]った 子供[こども]を 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "駅員さん with は as topic",
      },
      {
        segments: [
          { text: "駅員[えきいん]さんが 道[みち]に 迷[まよ]っていた 子供[こども]を 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "駅員さん with 迷っていた",
      },
      {
        segments: [
          { text: "駅員[えきいん]さんは 道[みち]に 迷[まよ]っていた 子供[こども]を 助[たす]けた" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "駅員さん with は and 迷っていた",
      },
    ],
  },
  {
    english: "I heard that the discount coupon can be used at the hotel front desk.",
    answers: [
      {
        segments: [
          { text: "割引券[わりびきけん]は ホテルの フロントで " },
          { text: "使[つか]えるそう", blank: true },
          { text: "です" },
        ],
        notes: "Standard topic-marked version using the potential verb 使える + hearsay そうです.",
      },
      {
        segments: [
          { text: "ホテルの フロントで 割引券[わりびきけん]が " },
          { text: "使[つか]えるそう", blank: true },
          { text: "です" },
        ],
        notes: "Reordered sentence with the place first and が marking what can be used.",
      },
      {
        segments: [
          { text: "割引券[わりびきけん]が ホテルの フロントで " },
          { text: "使[つか]えるそう", blank: true },
          { text: "です" },
        ],
        notes: "Using が for the coupon while keeping the coupon first.",
      },
      {
        segments: [
          { text: "ホテルの フロントでは 割引券[わりびきけん]が " },
          { text: "使[つか]えるそう", blank: true },
          { text: "です" },
        ],
        notes: "Using では to contrast or specify the hotel front desk as the place where it can be used.",
      },
      {
        segments: [
          { text: "割引券[わりびきけん]は ホテルの フロントでは " },
          { text: "使[つか]えるそう", blank: true },
          { text: "です" },
        ],
        notes: "Coupon as topic with では emphasizing the front desk as the usable location.",
      },
      {
        segments: [
          { text: "ホテルの フロントで 割引券[わりびきけん]を 使[つか]うことが " },
          { text: "できるそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 使うことができる instead of the potential verb 使える.",
      },
      {
        segments: [
          { text: "割引券[わりびきけん]は ホテルの フロントで 使[つか]うことが " },
          { text: "できるそう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-marked coupon with 使うことができる.",
      },
      {
        segments: [
          { text: "ホテルの フロントでは 割引券[わりびきけん]を 使[つか]うことが " },
          { text: "できるそう", blank: true },
          { text: "です" },
        ],
        notes: "Using では with 使うことができる to specify the front desk.",
      },
    ],
  },
  {
    english: "I heard that the apartment near the university is convenient, but the room is small.",
    answers: [
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]" },
          { text: "だそう", blank: true },
          { text: "です" },
          { text: "が、部屋[へや]は 小[ちい]さい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation with は marking both the apartment and the room as topics.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]" },
          { text: "だそう", blank: true },
          { text: "です" },
          { text: "が、部屋[へや]が 小[ちい]さい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が for the room in the second clause.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]" },
          { text: "だそう", blank: true },
          { text: "です" },
          { text: "が、部屋[へや]は 狭[せま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using 狭い instead of 小さい, a natural way to describe a small room.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]" },
          { text: "だそう", blank: true },
          { text: "です" },
          { text: "が、部屋[へや]が 狭[せま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using 狭い with が for the room.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くに ある アパートは 便利[べんり]" },
          { text: "だそう", blank: true },
          { text: "です" },
          { text: "が、部屋[へや]は 小[ちい]さい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using a relative clause 近くにある to mean 'near the university'.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くに ある アパートは 便利[べんり]" },
          { text: "だそう", blank: true },
          { text: "です" },
          { text: "が、部屋[へや]は 狭[せま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Relative clause 近くにある plus 狭い for 'small/cramped' room.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]だけど、部屋[へや]は 小[ちい]さい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Putting the hearsay そうです at the end so it covers the whole statement; using だけど for 'but'.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]だけど、部屋[へや]が 小[ちい]さい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "End-position hearsay with が marking the room.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]だけど、部屋[へや]は 狭[せま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "End-position hearsay with 狭い for the room.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]だけど、部屋[へや]が 狭[せま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "End-position hearsay with 狭い and が.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くに ある アパートは 便利[べんり]だけど、部屋[へや]は 小[ちい]さい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "End-position hearsay with 近くにある.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くに ある アパートは 便利[べんり]だけど、部屋[へや]は 狭[せま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "End-position hearsay with 近くにある and 狭い.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]" },
          { text: "だそう", blank: true },
          { text: "です" },
          { text: "けど、部屋[へや]は 小[ちい]さい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using けど instead of が between the two hearsay clauses.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 近[ちか]くの アパートは 便利[べんり]" },
          { text: "だそう", blank: true },
          { text: "です" },
          { text: "けど、部屋[へや]は 狭[せま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using けど and 狭い.",
      },
    ],
  },
  {
    english: "I heard that Sato will study abroad in Canada next semester.",
    hint: "Sato = 佐藤",
    answers: [
      {
        segments: [
          { text: "佐藤[さとう]さんは 来学期[らいがっき] カナダに 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Basic word order with は and カナダに",
      },
      {
        segments: [
          { text: "佐藤[さとう]さんは 来学期[らいがっき] カナダへ 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using へ instead of に for the destination",
      },
      {
        segments: [
          { text: "来学期[らいがっき]、佐藤[さとう]さんは カナダに 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time expression placed at the beginning",
      },
      {
        segments: [
          { text: "来学期[らいがっき]、佐藤[さとう]さんは カナダへ 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time expression first, with へ for destination",
      },
      {
        segments: [
          { text: "佐藤[さとう]さんが 来学期[らいがっき] カナダに 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark Sato as the person who will study abroad",
      },
      {
        segments: [
          { text: "佐藤[さとう]さんが 来学期[らいがっき] カナダへ 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が with へ for destination",
      },
      {
        segments: [
          { text: "来学期[らいがっき]、佐藤[さとう]さんが カナダに 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time expression first, using が",
      },
      {
        segments: [
          { text: "来学期[らいがっき]、佐藤[さとう]さんが カナダへ 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time expression first, using が and へ",
      },
      {
        segments: [
          { text: "佐藤[さとう]さんは カナダに 来学期[らいがっき] 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Location placed before the time expression",
      },
      {
        segments: [
          { text: "佐藤[さとう]さんは カナダへ 来学期[らいがっき] 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Location before time, using へ for destination",
      },
      {
        segments: [
          { text: "佐藤[さとう]さんが カナダに 来学期[らいがっき] 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Location before time, using が",
      },
      {
        segments: [
          { text: "佐藤[さとう]さんが カナダへ 来学期[らいがっき] 留学[りゅうがく]する" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Location before time, using が and へ",
      },
      {
        segments: [
          { text: "佐藤[さとう]さんは 来学期[らいがっき] カナダに 留学[りゅうがく]する 予定[よてい]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 予定だそうです to express that Sato is reportedly scheduled/planning to study abroad",
      },
      {
        segments: [
          { text: "佐藤[さとう]さんは 来学期[らいがっき] カナダへ 留学[りゅうがく]する 予定[よてい]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 予定だそうです with へ for destination",
      },
      {
        segments: [
          { text: "来学期[らいがっき]、佐藤[さとう]さんは カナダに 留学[りゅうがく]する 予定[よてい]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Time expression first with 予定だそうです",
      },
      {
        segments: [
          { text: "来学期[らいがっき]、佐藤[さとう]さんは カナダへ 留学[りゅうがく]する 予定[よてい]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Time expression first with 予定だそうです and へ",
      },
    ],
  },
  {
    english: "I heard that tonight's last train will be late.",
    answers: [
      {
        segments: [
          { text: "今夜[こんや]の 終電[しゅうでん]は 遅[おく]れる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation with 今夜 and topic は",
      },
      {
        segments: [
          { text: "今夜[こんや]の 終電[しゅうでん]が 遅[おく]れる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to present the last train as the new/important information",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 終電[しゅうでん]は 遅[おく]れる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using 今晩 instead of 今夜",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 終電[しゅうでん]が 遅[おく]れる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using 今晩 and が",
      },
      {
        segments: [
          { text: "今夜[こんや]、終電[しゅうでん]は 遅[おく]れる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase set off at the beginning",
      },
      {
        segments: [
          { text: "今夜[こんや]、終電[しゅうでん]が 遅[おく]れる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase first with が",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は 今夜[こんや] 遅[おく]れる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Reordered with 今夜 before the verb",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 今夜[こんや] 遅[おく]れる" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Reordered with が and 今夜 before the verb",
      },
    ],
  },
  {
    english: "I heard that Yamamoto lost his wallet at the movie theater yesterday.",
    hint: "Yamamoto = 山本",
    answers: [
      {
        segments: [
          { text: "山本[やまもと]さんは 昨日[きのう]、映画館[えいがかん]で 財布[さいふ]を なくした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Standard word order with 山本さん as the topic",
      },
      {
        segments: [
          { text: "昨日[きのう]、山本[やまもと]さんは 映画館[えいがかん]で 財布[さいふ]を なくした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "山本[やまもと]さんは 映画館[えいがかん]で 昨日[きのう] 財布[さいふ]を なくした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Yesterday placed after the location",
      },
      {
        segments: [
          { text: "山本[やまもと]さんが 昨日[きのう]、映画館[えいがかん]で 財布[さいふ]を なくした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to present the heard event rather than marking Yamamoto as the topic",
      },
      {
        segments: [
          { text: "昨日[きのう]、山本[やまもと]さんが 映画館[えいがかん]で 財布[さいふ]を なくした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が with the time phrase first",
      },
      {
        segments: [
          { text: "山本[やまもと]さんは 昨日[きのう]、映画館[えいがかん]で 財布[さいふ]を 落[お]とした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using 落とした as a natural way to say lost/dropped a wallet",
      },
      {
        segments: [
          { text: "昨日[きのう]、山本[やまもと]さんは 映画館[えいがかん]で 財布[さいふ]を 落[お]とした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using 落とした with the time phrase first",
      },
      {
        segments: [
          { text: "山本[やまもと]さんが 昨日[きのう]、映画館[えいがかん]で 財布[さいふ]を 落[お]とした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が and 落とした",
      },
      {
        segments: [
          { text: "山本[やまもと]さんは 昨日[きのう]、財布[さいふ]を 映画館[えいがかん]で なくした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Object placed before the location for emphasis",
      },
      {
        segments: [
          { text: "昨日[きのう]、山本[やまもと]さんは 財布[さいふ]を 映画館[えいがかん]で なくした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Object-before-location order with time phrase first",
      },
      {
        segments: [
          { text: "山本[やまもと]さんは 昨日[きのう]、財布[さいふ]を 映画館[えいがかん]で 落[お]とした" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Object-before-location order with 落とした",
      },
    ],
  },
  {
    english: "I heard that the curry at the university cafeteria is spicy, but the pudding is sweet.",
    hint: "curry = カレー; pudding = プリン",
    answers: [
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]の カレーは 辛[から]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "が、プリンは 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Basic version using の to mark 'the curry at/in the university cafeteria' and は for both topics.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]では カレーは 辛[から]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "が、プリンは 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using では to set the university cafeteria as the setting/contrastive topic.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]の カレーは 辛[から]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "けど、プリンは 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using けど instead of が for 'but'.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]では カレーは 辛[から]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "けど、プリンは 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Combines setting では with けど for a softer 'but'.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]では、カレーが 辛[から]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "が、プリンは 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が for カレー, presenting it as the item that is spicy within the cafeteria context.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]では、カレーは 辛[から]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "が、プリンが 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が for プリン, making pudding the identified sweet item.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]では、カレーが 辛[から]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "が、プリンが 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が for both food items; natural when identifying the qualities of items in that setting.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]の カレーは 辛[から]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "が、そこの プリンは 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses そこの to avoid repeating 'university cafeteria' for the pudding.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]の カレーは 辛[から]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "けど、そこの プリンは 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses そこの plus けど for a natural softer contrast.",
      },
      {
        segments: [
          { text: "大学[だいがく]の 食堂[しょくどう]の カレーは 辛[から]い" },
          { text: "そう", blank: true },
          { text: "で、プリンは 甘[あま]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Using the te-form そうで to connect the two hearsay statements more compactly.",
      },
    ],
  },
  {
    english: "I heard that that old temple is beautiful when it snows.",
    answers: [
      {
        segments: [
          { text: "雪[ゆき]が 降[ふ]る 時[とき]、あの 古[ふる]い お寺[てら]は きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Standard word order with the time phrase first; uses な-adjective + だそうです for hearsay.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]が 降[ふ]る 時[とき] きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Topic first, then the time phrase.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]の 時[とき] きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 雪の時 as a concise way to say when it is snowy.",
      },
      {
        segments: [
          { text: "雪[ゆき]の 時[とき]、あの 古[ふる]い お寺[てら]は きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Concise 雪の時 version with the time phrase first.",
      },
      {
        segments: [
          { text: "雪[ゆき]が " },
          { text: "降[ふ]っている" },
          { text: " 時[とき]、あの 古[ふる]い お寺[てら]は きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 降っている時 to mean while it is snowing.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]が " },
          { text: "降[ふ]っている" },
          { text: " 時[とき] きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-first order with 降っている時.",
      },
      {
        segments: [
          { text: "雪[ゆき]の 日[ひ]、あの 古[ふる]い お寺[てら]は きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 雪の日, a natural expression for on a snowy day.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]の 日[ひ] きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-first order with 雪の日.",
      },
      {
        segments: [
          { text: "雪[ゆき]が 降[ふ]る 日[ひ]、あの 古[ふる]い お寺[てら]は きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 雪が降る日, meaning on days when it snows.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]が 降[ふ]る 日[ひ] きれい" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-first order with 雪が降る日.",
      },
      {
        segments: [
          { text: "雪[ゆき]が 降[ふ]る 時[とき]、あの 古[ふる]い お寺[てら]は 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses the synonym 美しい with い-adjective + そうです hearsay.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]が 降[ふ]る 時[とき] 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-first order using 美しいそうです.",
      },
      {
        segments: [
          { text: "雪[ゆき]の 時[とき]、あの 古[ふる]い お寺[てら]は 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 美しい with concise 雪の時.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]の 時[とき] 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-first order using 美しい and 雪の時.",
      },
      {
        segments: [
          { text: "雪[ゆき]が " },
          { text: "降[ふ]っている" },
          { text: " 時[とき]、あの 古[ふる]い お寺[てら]は 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 美しい with 降っている時.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]が " },
          { text: "降[ふ]っている" },
          { text: " 時[とき] 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-first order using 美しい and 降っている時.",
      },
      {
        segments: [
          { text: "雪[ゆき]の 日[ひ]、あの 古[ふる]い お寺[てら]は 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 美しい with 雪の日.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]の 日[ひ] 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-first order using 美しい and 雪の日.",
      },
      {
        segments: [
          { text: "雪[ゆき]が 降[ふ]る 日[ひ]、あの 古[ふる]い お寺[てら]は 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 美しい with 雪が降る日.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い お寺[てら]は、雪[ゆき]が 降[ふ]る 日[ひ] 美[うつく]しい" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-first order using 美しい and 雪が降る日.",
      },
    ],
  },
  {
    english: "I heard that the wedding will be at the old castle next month.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]、結婚式[けっこんしき]は 古[ふる]い お城[しろ]で " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using あるそうです for an event taking place at a location",
      },
      {
        segments: [
          { text: "結婚式[けっこんしき]は 来月[らいげつ]、古[ふる]い お城[しろ]で " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase placed after the topic",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 結婚式[けっこんしき]は 古[ふる]い お城[しろ]で " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 来月の結婚式 to modify the wedding directly",
      },
      {
        segments: [
          { text: "来月[らいげつ]、古[ふる]い お城[しろ]で 結婚式[けっこんしき]が " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses が to mark the wedding as the event that will take place",
      },
      {
        segments: [
          { text: "古[ふる]い お城[しろ]で 来月[らいげつ] 結婚式[けっこんしき]が " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Location first, then time, with がある construction",
      },
      {
        segments: [
          { text: "結婚式[けっこんしき]が 来月[らいげつ] 古[ふる]い お城[しろ]で " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Event marked with が at the beginning",
      },
      {
        segments: [
          { text: "来月[らいげつ]、古[ふる]い お城[しろ]で 結婚式[けっこんしき]を " },
          { text: "するそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 結婚式をする to mean have/hold a wedding",
      },
      {
        segments: [
          { text: "結婚式[けっこんしき]は 来月[らいげつ] 古[ふる]い お城[しろ]で " },
          { text: "するそう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-marked wedding with するそうです; colloquial but natural",
      },
      {
        segments: [
          { text: "来月[らいげつ]、結婚式[けっこんしき]を 古[ふる]い お城[しろ]で " },
          { text: "するそう", blank: true },
          { text: "です" },
        ],
        notes: "Object before location with 結婚式をする",
      },
      {
        segments: [
          { text: "来月[らいげつ]、結婚式[けっこんしき]は 古[ふる]い 城[しろ]で " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 城 instead of お城",
      },
      {
        segments: [
          { text: "来月[らいげつ]、古[ふる]い 城[しろ]で 結婚式[けっこんしき]が " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 城 without honorific お in the がある construction",
      },
      {
        segments: [
          { text: "来月[らいげつ]、古[ふる]い 城[しろ]で 結婚式[けっこんしき]を " },
          { text: "するそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 城 without honorific お with 結婚式をする",
      },
      {
        segments: [
          { text: "来月[らいげつ]、古[ふる]い お城[しろ]で 結婚式[けっこんしき]が " },
          { text: "行[おこな]われるそう", blank: true },
          { text: "です" },
        ],
        notes: "More formal/natural phrasing using 行われる for an event being held",
      },
      {
        segments: [
          { text: "来月[らいげつ]、結婚式[けっこんしき]が 古[ふる]い お城[しろ]で " },
          { text: "行[おこな]われるそう", blank: true },
          { text: "です" },
        ],
        notes: "Same formal 行われる construction with event before location",
      },
      {
        segments: [
          { text: "結婚式[けっこんしき]は 来月[らいげつ] 古[ふる]い お城[しろ]で " },
          { text: "行[おこな]われるそう", blank: true },
          { text: "です" },
        ],
        notes: "Topic-marked wedding with formal 行われる",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 結婚式[けっこんしき]は 古[ふる]い お城[しろ]で " },
          { text: "行[おこな]われるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses 来月の結婚式 with formal 行われる",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 結婚式[けっこんしき]の 場所[ばしょ]は 古[ふる]い お城[しろ]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses noun + だそうです to say the wedding location is an old castle",
      },
      {
        segments: [
          { text: "結婚式[けっこんしき]は 来月[らいげつ]で、場所[ばしょ]は 古[ふる]い お城[しろ]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Splits the information into time and location; hearsay applies to the location clause",
      },
      {
        segments: [
          { text: "来月[らいげつ]、古[ふる]い 城[しろ]で 結婚式[けっこんしき]が " },
          { text: "行[おこな]われるそう", blank: true },
          { text: "です" },
        ],
        notes: "Formal 行われる construction using 城 instead of お城",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 結婚式[けっこんしき]の 場所[ばしょ]は 古[ふる]い 城[しろ]" },
          { text: "だそう", blank: true },
          { text: "です" },
        ],
        notes: "Noun + だそうです with 城 instead of お城",
      },
      {
        segments: [
          { text: "結婚式[けっこんしき]は 来月[らいげつ]に 古[ふる]い お城[しろ]で " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses に after 来月 to mark the time explicitly",
      },
      {
        segments: [
          { text: "来月[らいげつ]に 古[ふる]い お城[しろ]で 結婚式[けっこんしき]が " },
          { text: "あるそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses に after 来月 with がある construction",
      },
    ],
  },
  {
    english: "I heard that the art exhibition at the department store is interesting, and the tickets are cheap.",
    answers: [
      {
        segments: [
          { text: "デパートの 展覧会[てんらんかい]は 面白[おもしろ]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "。そして、チケットは 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using そして to connect the two pieces of hearsay.",
      },
      {
        segments: [
          { text: "デパートの 展覧会[てんらんかい]は 面白[おもしろ]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "が、チケットは 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses が as a soft connective for 'and' between the two heard facts.",
      },
      {
        segments: [
          { text: "デパートの 展覧会[てんらんかい]は 面白[おもしろ]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "。それから、チケットは 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses それから as the connector meaning 'and/also'.",
      },
      {
        segments: [
          { text: "デパートの 展覧会[てんらんかい]は 面白[おもしろ]くて、チケットは 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Combines the reported content into one hearsay statement using the adjective te-form.",
      },
      {
        segments: [
          { text: "デパートの 展覧会[てんらんかい]は 面白[おもしろ]くて、チケットも 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses も for the tickets, emphasizing that the tickets are also favorable.",
      },
      {
        segments: [
          { text: "デパートで 展覧会[てんらんかい]が ある" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "。その 展覧会[てんらんかい]は 面白[おもしろ]くて、チケットは 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Mentions that the exhibition is at the department store, then reports it is interesting and the tickets are cheap.",
      },
      {
        segments: [
          { text: "デパートで やっている 展覧会[てんらんかい]は 面白[おもしろ]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "。そして、チケットは 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses a relative clause, デパートでやっている展覧会, for 'the exhibition at the department store'.",
      },
      {
        segments: [
          { text: "デパートで やっている 展覧会[てんらんかい]は 面白[おもしろ]くて、チケットは 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses デパートでやっている and reports both qualities in a single そうです clause.",
      },
      {
        segments: [
          { text: "デパートの 展覧会[てんらんかい]は 面白[おもしろ]い" },
          { text: "そう", blank: true },
          { text: "です" },
          { text: "。そして、チケットが 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Uses が for チケット to mark the tickets as the thing that is cheap.",
      },
      {
        segments: [
          { text: "デパートの 展覧会[てんらんかい]は 面白[おもしろ]くて、チケットが 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Single hearsay statement with が marking チケット.",
      },
      {
        segments: [
          { text: "デパートで やっている 展覧会[てんらんかい]は 面白[おもしろ]くて、チケットも 安[やす]い" },
          { text: "そう", blank: true },
          { text: "です" },
        ],
        notes: "Relative clause version with も for the tickets.",
      },
    ],
  },
];

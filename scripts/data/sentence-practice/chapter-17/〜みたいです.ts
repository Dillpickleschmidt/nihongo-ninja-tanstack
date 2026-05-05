import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "That robot talks like a person.",
    answers: [
      {
        segments: [
          { text: "あの ロボットは 人[ひと]" },
          { text: "みたいに", blank: true },
          { text: " 話[はな]す" },
        ],
        notes: "Basic wording with みたいに before the verb.",
      },
      {
        segments: [
          { text: "その ロボットは 人[ひと]" },
          { text: "みたいに", blank: true },
          { text: " 話[はな]す" },
        ],
        notes: "Using その for “that robot.”",
      },
      {
        segments: [
          { text: "あの ロボットは 人間[にんげん]" },
          { text: "みたいに", blank: true },
          { text: " 話[はな]す" },
        ],
        notes: "Using 人間 for “person/human.”",
      },
    ],
  },
  {
    english: "It looks like Kenji forgot his wallet at the cafe.",
    hint: "Kenji = 健二",
    answers: [
      {
        segments: [
          { text: "健二[けんじ]さんは カフェに 財布[さいふ]を " },
          { text: "忘[わす]れたみたい", blank: true },
          { text: "です" },
        ],
        notes: "Standard word order with 健二さん as the topic and カフェに for the place where the wallet was left.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんが カフェに 財布[さいふ]を " },
          { text: "忘[わす]れたみたい", blank: true },
          { text: "です" },
        ],
        notes: "Using が to present Kenji as the subject in a more observational/reporting tone.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 財布[さいふ]を カフェに " },
          { text: "忘[わす]れたみたい", blank: true },
          { text: "です" },
        ],
        notes: "Reordered object before location; still natural and emphasizes the wallet slightly.",
      },
      {
        segments: [
          { text: "健二[けんじ]さんが 財布[さいふ]を カフェに " },
          { text: "忘[わす]れたみたい", blank: true },
          { text: "です" },
        ],
        notes: "Using が with the object-location order.",
      },
    ],
  },
  {
    english: "Please cut my hair like this picture.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 髪[かみ]を この 写真[しゃしん]" },
          { text: "みたいに", blank: true },
          { text: "切[き]ってください" },
        ],
        notes: "Basic wording with 私の髪を explicitly stated before the comparison.",
      },
      {
        segments: [
          { text: "この 写真[しゃしん]" },
          { text: "みたいに", blank: true },
          { text: "私[わたし]の 髪[かみ]を 切[き]ってください" },
        ],
        notes: "Places the comparison phrase at the beginning.",
      },
      {
        segments: [
          { text: "髪[かみ]を この 写真[しゃしん]" },
          { text: "みたいに", blank: true },
          { text: "切[き]ってください" },
        ],
        notes: "Omits 私の because it is clear in a salon context.",
      },
      {
        segments: [
          { text: "この 写真[しゃしん]" },
          { text: "みたいに", blank: true },
          { text: "髪[かみ]を 切[き]ってください" },
        ],
        notes: "Omitted 私の with fronted comparison phrase.",
      },
      {
        segments: [
          { text: "この 写真[しゃしん]" },
          { text: "みたいに", blank: true },
          { text: "カットしてください" },
        ],
        notes: "Uses カットする, a natural salon expression.",
      },
      {
        segments: [
          { text: "私[わたし]の 髪[かみ]を この 写真[しゃしん]" },
          { text: "みたいに", blank: true },
          { text: "カットしてください" },
        ],
        notes: "Uses カットしてください with 私の髪を explicit.",
      },
      {
        segments: [
          { text: "この 写真[しゃしん]" },
          { text: "みたいな", blank: true },
          { text: "髪形[かみがた]にしてください" },
        ],
        notes: "Uses みたいな to modify 髪形, a natural salon request.",
      },
      {
        segments: [
          { text: "私[わたし]の 髪[かみ]を この 写真[しゃしん]" },
          { text: "みたいな", blank: true },
          { text: "髪形[かみがた]にしてください" },
        ],
        notes: "Explicitly says to make my hair into a hairstyle like the picture.",
      },
      {
        segments: [
          { text: "この 写真[しゃしん]" },
          { text: "みたいな", blank: true },
          { text: "髪[かみ]にしてください" },
        ],
        notes: "Uses みたいな to modify 髪, meaning hair like this picture.",
      },
    ],
  },
  {
    english: "That baby is crying like an angry cat.",
    answers: [
      {
        segments: [
          { text: "あの 赤[あか]ちゃんは 怒[おこ]っている 猫[ねこ]" },
          { text: "みたいに", blank: true },
          { text: " " },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with あの and は",
      },
      {
        segments: [
          { text: "その 赤[あか]ちゃんは 怒[おこ]っている 猫[ねこ]" },
          { text: "みたいに", blank: true },
          { text: " " },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その for 'that' near the listener",
      },
      {
        segments: [
          { text: "あの 赤[あか]ちゃんが 怒[おこ]っている 猫[ねこ]" },
          { text: "みたいに", blank: true },
          { text: " " },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the baby as the subject",
      },
      {
        segments: [
          { text: "その 赤[あか]ちゃんが 怒[おこ]っている 猫[ねこ]" },
          { text: "みたいに", blank: true },
          { text: " " },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その and が",
      },
      {
        segments: [
          { text: "怒[おこ]っている 猫[ねこ]" },
          { text: "みたいに", blank: true },
          { text: "、あの 赤[あか]ちゃんは " },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronting the comparison phrase for emphasis",
      },
      {
        segments: [
          { text: "怒[おこ]っている 猫[ねこ]" },
          { text: "みたいに", blank: true },
          { text: "、その 赤[あか]ちゃんは " },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted comparison phrase with その",
      },
      {
        segments: [
          { text: "怒[おこ]っている 猫[ねこ]" },
          { text: "みたいに", blank: true },
          { text: "、あの 赤[あか]ちゃんが " },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted comparison phrase with が",
      },
      {
        segments: [
          { text: "怒[おこ]っている 猫[ねこ]" },
          { text: "みたいに", blank: true },
          { text: "、その 赤[あか]ちゃんが " },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted comparison phrase with その and が",
      },
    ],
  },
  {
    english: "It seems like my older brother won the lottery.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は 宝[たから]くじに 当[あ]たった" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation with 兄 as the topic and 宝くじに当たる for “win the lottery.”",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]が 宝[たから]くじに 当[あ]たった" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark the brother as the newly noticed subject.",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は 宝[たから]くじが 当[あ]たった" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using 宝くじが当たる, literally “the lottery hit/was won,” with the brother as topic.",
      },
      {
        segments: [
          { text: "宝[たから]くじに 当[あ]たったのは 私[わたし]の 兄[あに]" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Cleft-like word order emphasizing that it seems the winner was my older brother.",
      },
    ],
  },
  {
    english: "It looks like the subway is crowded today.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]、地下鉄[ちかてつ]は " },
          { text: "混[こ]んでいる" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation with 今日 at the beginning and は marking the subway as the topic",
      },
      {
        segments: [
          { text: "今日[きょう]、地下鉄[ちかてつ]が " },
          { text: "混[こ]んでいる" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using が to present what appears to be crowded today",
      },
      {
        segments: [
          { text: "今日[きょう]は 地下鉄[ちかてつ]が " },
          { text: "混[こ]んでいる" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using 今日は to frame the statement as being about today",
      },
      {
        segments: [
          { text: "今日[きょう]の 地下鉄[ちかてつ]は " },
          { text: "混[こ]んでいる" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using 今日の地下鉄 to mean “today’s subway/subway situation”",
      },
      {
        segments: [
          { text: "地下鉄[ちかてつ]は 今日[きょう]、" },
          { text: "混[こ]んでいる" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Reordered sentence with the topic first",
      },
      {
        segments: [
          { text: "地下鉄[ちかてつ]が 今日[きょう]、" },
          { text: "混[こ]んでいる" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Reordered sentence using が for the subway",
      },
    ],
  },
  {
    english: "Today’s homework is like a final exam.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]の 宿題[しゅくだい]は 期末試験[きまつしけん]" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Basic sentence with は marking today’s homework as the topic.",
      },
      {
        segments: [
          { text: "今日[きょう]の 宿題[しゅくだい]が 期末試験[きまつしけん]" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using が to emphasize today’s homework as the thing that seems like a final exam.",
      },
    ],
  },
  {
    english: "From the news, it looks like tomorrow's typhoon will be very strong.",
    answers: [
      {
        segments: [
          { text: "ニュースによると、明日[あした]の 台風[たいふう]は とても 強[つよ]い" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using ニュースによると and とても",
      },
      {
        segments: [
          { text: "ニュースによると、明日[あした]の 台風[たいふう]は すごく 強[つよ]い" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using すごく instead of とても",
      },
      {
        segments: [
          { text: "明日[あした]の 台風[たいふう]は、ニュースによると、とても 強[つよ]い" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Reordered phrase: topic first, source inserted after",
      },
      {
        segments: [
          { text: "ニュースでは、明日[あした]の 台風[たいふう]は とても 強[つよ]い" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using ニュースでは to express “from/on the news”",
      },
      {
        segments: [
          { text: "ニュースによると、明日[あした]は 台風[たいふう]が とても 強[つよ]い" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using 明日は...が structure instead of 明日の台風は",
      },
      {
        segments: [
          { text: "ニュースによると、明日[あした]は とても 強[つよ]い 台風[たいふう]が 来[く]る" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using Verb + みたい: a very strong typhoon will come tomorrow",
      },
      {
        segments: [
          { text: "ニュースによると、明日[あした]は すごく 強[つよ]い 台風[たいふう]が 来[く]る" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Verb + みたい with すごく instead of とても",
      },
      {
        segments: [
          { text: "ニュースでは、明日[あした]は とても 強[つよ]い 台風[たいふう]が 来[く]る" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using ニュースでは with Verb + みたい",
      },
      {
        segments: [
          { text: "ニュースによると、台風[たいふう]は 明日[あした] とても 強[つよ]くなる" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using 強くなるみたい to express that the typhoon will become very strong tomorrow",
      },
      {
        segments: [
          { text: "ニュースによると、明日[あした]の 台風[たいふう]は ずいぶん 強[つよ]い" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using ずいぶん as another natural intensifier",
      },
      {
        segments: [
          { text: "ニュースでは、明日[あした]の 台風[たいふう]は すごく 強[つよ]い" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using ニュースでは and すごく",
      },
      {
        segments: [
          { text: "ニュースを 見[み]たら、明日[あした]の 台風[たいふう]は とても 強[つよ]い" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Using ニュースを見たら to mean “from watching the news”",
      },
      {
        segments: [
          { text: "ニュースによると、明日[あした]の 台風[たいふう]は とても 強[つよ]い 台風[たいふう]" },
          { text: "みたい", blank: true },
          { text: "です" },
        ],
        notes: "Noun + みたい: it looks like a very strong typhoon",
      },
    ],
  },
  {
    english: "Does this cake look like a toy?",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "この ケーキは おもちゃ" },
          { text: "みたい", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Basic predicate use: Noun + みたいですか",
      },
      {
        segments: [
          { text: "この ケーキは おもちゃ" },
          { text: "みたいに", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Uses みたいに with 見える to explicitly say “look like”",
      },
      {
        register: "polite",
        segments: [
          { text: "この ケーキ、 おもちゃ" },
          { text: "みたい", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Conversational topic marking with a comma instead of は",
      },
      {
        segments: [
          { text: "この ケーキ、 おもちゃ" },
          { text: "みたいに", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Conversational dropped は with みたいに見える",
      },
    ],
  },
  {
    english: "Please draw a cloud like a whale in the diary.",
    answers: [
      {
        segments: [
          { text: "日記[にっき]に、" },
          { text: "くじらみたいな", blank: true },
          { text: "雲[くも]を 描[か]いてください" },
        ],
        notes: "Basic wording with みたいな modifying 雲",
      },
      {
        segments: [
          { text: "くじらみたいな", blank: true },
          { text: "雲[くも]を 日記[にっき]に 描[か]いてください" },
        ],
        notes: "Reordered: object first, diary location before the verb",
      },
      {
        segments: [
          { text: "日記[にっき]に、雲[くも]を " },
          { text: "くじらみたいに", blank: true },
          { text: "描[か]いてください" },
        ],
        notes: "Using みたいに to modify 描く: draw the cloud like a whale",
      },
      {
        segments: [
          { text: "雲[くも]を " },
          { text: "くじらみたいに", blank: true },
          { text: "日記[にっき]に 描[か]いてください" },
        ],
        notes: "Reordered みたいに version with object first",
      },
    ],
  },
];

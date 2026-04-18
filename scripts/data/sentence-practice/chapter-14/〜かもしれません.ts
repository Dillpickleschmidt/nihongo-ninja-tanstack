import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I left my umbrella on the train — it might already be gone.",
    answers: [
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れた。もう" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]に 傘[かさ]を 忘[わす]れた。もう" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Using 電車の中に (inside the train) instead of 電車に for more specificity.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れてきた。もう" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Using 忘れてきた (left behind, came away without) instead of 忘れた, which more naturally expresses leaving something behind when departing.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れた。もう" },
          { text: "なくなった", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Using なくなった (became nonexistent/disappeared) instead of ない, emphasizing the change of state.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れてきた。もう" },
          { text: "なくなった", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Combining 忘れてきた with なくなった.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れた。傘[かさ]は もう" },
          { text: "残[のこ]っていない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Second sentence makes the umbrella the topic with は; uses 残っていない (not remaining anymore) to express it's gone.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れてしまって、もう" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "〜てしまって (regrettable) + 、 connector instead of period",
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れたから、もう" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れてきたから、もう" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "から connecting, using 忘れてきた.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]に 傘[かさ]を 忘[わす]れてきたから、もう" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "電車の中に (inside the train) + 忘れてきた + から combination.",
      },
      {
        segments: [
          { text: "もしかしたら、電車[でんしゃ]に 忘[わす]れた 傘[かさ]は もうないかもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れた。もしかしたら、もう" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Adding もしかしたら (perhaps) before the second clause to reinforce the uncertainty of かもしれない — a very natural pairing in Japanese.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れてきた。もしかしたら、もう" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Same as previous but using 忘れてきた instead of 忘れた, plus もしかしたら.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れた。もう 取[と]られた" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れてきた。もう 取[と]られた" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 傘[かさ]を 忘[わす]れた。もう 誰[だれ]かに 取[と]られた" },
          { text: "かもしれない", blank: true },
        ],
      },
    ],
  },
  {
    english: "Kenji's little brother might be a famous singer someday.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は いつか 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は いつか 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれません", blank: true },
        ],
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]が いつか 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "が instead of は as subject marker (casual)",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]が いつか 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれません", blank: true },
        ],
        notes: "が instead of は as subject marker (polite)",
      },
      {
        segments: [
          { text: "いつか、けんじさんの 弟[おとうと]は 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "いつか moved to the front of the sentence (casual)",
      },
      {
        segments: [
          { text: "いつか、けんじさんの 弟[おとうと]は 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれません", blank: true },
        ],
        notes: "いつか moved to the front of the sentence (polite)",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は いつか 歌手[かしゅ]になる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Omitting 有名な — just \"become a singer\" (casual)",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は いつか 歌手[かしゅ]になる" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Omitting 有名な — just \"become a singer\" (polite)",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は いつか 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれない", blank: true },
          { text: "よ" },
        ],
        notes: "Adding よ sentence-final particle for emphasis (casual)",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は いつか 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれません", blank: true },
          { text: "よ" },
        ],
        notes: "Adding よ sentence-final particle for emphasis (polite)",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は いつか 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれない", blank: true },
          { text: "ね" },
        ],
        notes: "Adding ね sentence-final particle for seeking agreement (casual)",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は 将来[しょうらい] 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "将来 (in the future/someday) instead of いつか (casual)",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は 将来[しょうらい] 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれません", blank: true },
        ],
        notes: "将来 instead of いつか (polite)",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は いつか 有名[ゆうめい]な 歌手[かしゅ]になる" },
          { text: "かもしれません", blank: true },
          { text: "ね" },
        ],
        notes: "Adding ね sentence-final particle for seeking agreement (polite)",
      },
    ],
  },
  {
    english: "The weather forecast said it might be cloudy this weekend.",
    answers: [
      {
        segments: [
          { text: "天気予報[てんきよほう]では、今週末[こんしゅうまつ]は 曇[くも]り" },
          { text: "かもしれません", blank: true },
        ],
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]で、今週末[こんしゅうまつ]は 曇[くも]り" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Using で instead of では for 天気予報",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、今週末[こんしゅうまつ]は 曇[くも]り" },
          { text: "かもしれません", blank: true },
        ],
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では、週末[しゅうまつ]は 曇[くも]り" },
          { text: "かもしれません", blank: true },
        ],
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]で、今週末[こんしゅうまつ]は 曇[くも]りになる" },
          { text: "かもしれません", blank: true },
        ],
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、週末[しゅうまつ]は 曇[くも]り" },
          { text: "かもしれません", blank: true },
        ],
        notes: "によると + 週末 (no 今)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]で、今週末[こんしゅうまつ]は 曇[くも]り" },
          { text: "かもしれない", blank: true },
          { text: "と 聴[き]いた" },
        ],
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]で、今週末[こんしゅうまつ]は 曇[くも]りになる" },
          { text: "かもしれない", blank: true },
          { text: "と 聴[き]いた" },
        ],
        notes: "ときいた + 曇りになる (become cloudy verb form)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、今週末[こんしゅうまつ]は 曇[くも]りになる" },
          { text: "かもしれません", blank: true },
        ],
        notes: "によると + 今週末 + 曇りになる (become cloudy) + かもしれません",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、週末[しゅうまつ]は 曇[くも]りになる" },
          { text: "かもしれません", blank: true },
        ],
        notes: "によると + 週末 (no 今) + 曇りになる + かもしれません",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、今週末[こんしゅうまつ]は 曇[くも]り" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "によると + 今週末 + 曇り + かもしれないと聞いた (casual ときいた form with によると)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]で、週末[しゅうまつ]は 曇[くも]り" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "で + 週末 (no 今) + 曇り + かもしれないと聞いた (casual)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]で、今週末[こんしゅうまつ]は 曇[くも]りになる" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "で + 今週末 + 曇りになる + かもしれないと聞いた (casual, verb phrase)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では、週末[しゅうまつ]は 曇[くも]りになる" },
          { text: "かもしれません", blank: true },
        ],
        notes: "では + 週末 (no 今) + 曇りになる + かもしれません",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、今週末[こんしゅうまつ]は 曇[くも]り" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "によると + 今週末 + 曇り (noun) + かもしれないと聞いた (casual)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、週末[しゅうまつ]は 曇[くも]り" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "によると + 週末 (no 今) + 曇り + かもしれないと聞いた (casual)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、週末[しゅうまつ]は 曇[くも]りになる" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "によると + 週末 + 曇りになる + かもしれないと聞いた (casual)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では、今週末[こんしゅうまつ]は 曇[くも]り" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "では + 今週末 + 曇り + かもしれないと聞いた (casual, では variant)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では、週末[しゅうまつ]は 曇[くも]り" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "では + 週末 (no 今) + 曇り + かもしれないと聞いた (casual)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では、今週末[こんしゅうまつ]は 曇[くも]りになる" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "では + 今週末 + 曇りになる + かもしれないと聞いた (casual, verb phrase with では)",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では、週末[しゅうまつ]は 曇[くも]りになる" },
          { text: "かもしれないと 聞[き]いた", blank: true },
        ],
        notes: "では + 週末 + 曇りになる + かもしれないと聞いた (casual)",
      },
    ],
  },
  {
    english: "Takeshi looks tired — he might be working too much.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは 疲[つか]れている。 働[はたら]きすぎている" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "たけしさんは 疲[つか]れているから、 働[はたら]きすぎている" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "たけしさんは 疲[つか]れている。 仕事[しごと]をしすぎている" },
          { text: "かもしれない", blank: true },
        ],
        notes: "仕事をしすぎている instead of 働きすぎている (synonym: doing too much work)",
      },
      {
        segments: [
          { text: "たけしさんは 疲[つか]れているから、 仕事[しごと]をしすぎている" },
          { text: "かもしれない", blank: true },
        ],
        notes: "仕事をしすぎている + から connecting clause",
      },
      {
        segments: [
          { text: "たけしさんは 疲[つか]れている。 働[はたら]きすぎ" },
          { text: "かもしれない", blank: true },
        ],
        notes: "働きすぎ (noun form of すぎる, without ている) — \"might be a case of overworking\"",
      },
      {
        segments: [
          { text: "たけしさんは 疲[つか]れている。 働[はたら]きすぎているの" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Adding の before かもしれない for explanatory nuance (の + かもしれない)",
      },
      {
        segments: [
          { text: "たけしさんは 疲[つか]れているから、 働[はたら]きすぎているの" },
          { text: "かもしれない", blank: true },
        ],
        notes: "の + かもしれない with から connecting clause and 働きすぎている",
      },
      {
        segments: [
          { text: "たけしさんが 疲[つか]れている。 働[はたら]きすぎている" },
          { text: "かもしれない", blank: true },
        ],
        notes: "たけしが instead of たけしは (が highlights Takeshi as the subject being observed)",
      },
    ],
  },
  {
    english: "This café might be closed on Sundays.",
    answers: [
      {
        segments: [
          { text: "このカフェは 日曜日[にちようび]に 閉[し]まっているかもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "このカフェは 日曜日[にちようび]は 閉[し]まっているかもしれない", blank: true },
        ],
        notes: "Using は instead of に for 日曜日 (topic/contrast particle)",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は このカフェが 閉[し]まっているかもしれない", blank: true },
        ],
        notes: "日曜日は fronted as topic; が marks the café",
      },
      {
        segments: [
          { text: "このカフェは 日曜日[にちようび]に 休[やす]みかもしれない", blank: true },
        ],
        notes: "Using 休み (closed/day off) as a noun predicate instead of verb phrase",
      },
      {
        segments: [
          { text: "このカフェは 日曜日[にちようび]は 休[やす]みかもしれない", blank: true },
        ],
        notes: "休み with は instead of に for 日曜日",
      },
      {
        segments: [
          { text: "このカフェは 日曜日[にちようび]に 開[あ]いていないかもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "日曜日[にちようび]は このカフェが 休[やす]みかもしれない", blank: true },
        ],
        notes: "日曜日は fronted as topic; が marks the café; using 休み",
      },
    ],
  },
  {
    english: "I might already be in love with Kenji.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は もう けんじさんのことが 好[す]き" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は もう けんじさんが 好[す]き" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Without こと — simpler form けんじが好き",
      },
      {
        segments: [
          { text: "私[わたし]は けんじさんのことが もう 好[す]き" },
          { text: "かもしれない", blank: true },
        ],
        notes: "もう placed after the object (before 好き) instead of at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は けんじさんが もう 好[す]き" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Without こと, もう placed after object",
      },
      {
        segments: [
          { text: "私[わたし]は もう けんじさんのことが 大好[だいす]き" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using 大好き (love/really like) instead of 好き — stronger feeling, natural for \"in love\"",
      },
      {
        segments: [
          { text: "私[わたし]は もう けんじさんが 大好[だいす]き" },
          { text: "かもしれない", blank: true },
        ],
        notes: "大好き without こと",
      },
    ],
  },
  {
    english: "This book might be Yuki's.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "この 本[ほん]は ゆきさんの" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "この 本[ほん]は ゆきさんの もの" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "この 本[ほん]は ゆきさんの 本[ほん]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Repeating 本: \"This book might be Yuki's book\"",
      },
      {
        segments: [
          { text: "この 本[ほん]が ゆきさんの" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using が instead of は as topic/subject marker",
      },
      {
        segments: [
          { text: "この 本[ほん]が ゆきさんの もの" },
          { text: "かもしれない", blank: true },
        ],
        notes: "が + もの variation",
      },
      {
        segments: [
          { text: "この 本[ほん]は ゆきさんの", blank: true },
          { text: "かもしれません" },
        ],
        notes: "Polite form with かもしれません, は particle",
      },
      {
        segments: [
          { text: "この 本[ほん]は ゆきさんの もの", blank: true },
          { text: "かもしれません" },
        ],
        notes: "Polite form with かもしれません, は particle, explicit もの",
      },
      {
        segments: [
          { text: "この 本[ほん]が ゆきさんの", blank: true },
          { text: "かもしれません" },
        ],
        notes: "Polite form with かもしれません, が particle",
      },
      {
        segments: [
          { text: "この 本[ほん]が ゆきさんの もの", blank: true },
          { text: "かもしれません" },
        ],
        notes: "Polite form with かもしれません, が particle, explicit もの",
      },
      {
        segments: [
          { text: "この 本[ほん]は ゆきさんの 本[ほん]", blank: true },
          { text: "かもしれません" },
        ],
        notes: "Polite form with かもしれません, は particle, explicit 本",
      },
    ],
  },
  {
    english: "This neighborhood might be more convenient than I thought.",
    answers: [
      {
        segments: [
          { text: "この 近所[きんじょ]は 思[おも]ったより" },
          { text: "便利[べんり]かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "この 近所[きんじょ]は 思[おも]っていたより" },
          { text: "便利[べんり]かもしれない", blank: true },
        ],
        notes: "思っていたより instead of 思ったより (progressive past, equally natural)",
      },
      {
        segments: [
          { text: "この 辺[あたり]は 思[おも]ったより" },
          { text: "便利[べんり]かもしれない", blank: true },
        ],
        notes: "この辺り instead of この近所 (more colloquial word for neighborhood/area)",
      },
      {
        segments: [
          { text: "この 辺[あたり]は 思[おも]っていたより" },
          { text: "便利[べんり]かもしれない", blank: true },
        ],
        notes: "この辺り + 思っていたより combination",
      },
      {
        segments: [
          { text: "ここは 思[おも]ったより" },
          { text: "便利[べんり]かもしれない", blank: true },
        ],
        notes: "ここ instead of この近所 (using demonstrative pronoun for the area)",
      },
      {
        segments: [
          { text: "ここは 思[おも]っていたより" },
          { text: "便利[べんり]かもしれない", blank: true },
        ],
        notes: "ここ + 思っていたより combination",
      },
      {
        segments: [
          { text: "この 近所[きんじょ]が 思[おも]ったより" },
          { text: "便利[べんり]かもしれない", blank: true },
        ],
        notes: "が instead of は (subject marker, slightly more focused)",
      },
    ],
  },
  {
    english: "Sora might not be able to make it to the party tonight.",
    hint: "Sora = そら",
    answers: [
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 来[こ]られない", blank: true },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 来[こ]れない", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "Colloquial potential negative 来れない instead of 来られない (ら抜き言葉)",
      },
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 行[い]けない", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using 行けない (can't go) from Sora's perspective instead of 来られない",
      },
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 間[ま]に合[あ]わない", blank: true },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 来[こ]られない", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite form: かもしれません with 来られない",
      },
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 来[こ]れない", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite form: かもしれません with colloquial 来れない",
      },
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 行[い]けない", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite form: かもしれません with 行けない",
      },
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 間[ま]に合[あ]わない", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite form: かもしれません with 間に合わない",
      },
      {
        segments: [
          { text: "そらは 今晩[こんばん]の パーティーに 来[こ]られない", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using 今晩 instead of 今夜 (both mean \"tonight\")",
      },
      {
        segments: [
          { text: "そらは 今晩[こんばん]の パーティーに 間[ま]に合[あ]わない", blank: true },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 来[こ]ることができない", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using ことができない instead of potential form 来られない",
      },
      {
        segments: [
          { text: "そらは 今夜[こんや]の パーティーに 来[こ]ることができない", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite: ことができない + かもしれません",
      },
      {
        segments: [
          { text: "そらが 今夜[こんや]の パーティーに 来[こ]られない", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using が instead of は for Sora as subject",
      },
      {
        segments: [
          { text: "そらが 今夜[こんや]の パーティーに 間[ま]に合[あ]わない", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "が instead of は, with 間に合わない",
      },
    ],
  },
  {
    english: "I might take tomorrow off and go to the beach.",
    answers: [
      {
        segments: [
          { text: "明日[あした]休[やす]んで 海[うみ]に行[い]くかもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "明日[あした]は休[やす]んで 海[うみ]に行[い]くかもしれない", blank: true },
        ],
        notes: "With は after 明日 for topic/contrast marking, に for direction",
      },
      {
        segments: [
          { text: "明日[あした]休[やす]んで 海[うみ]へ行[い]くかもしれない", blank: true },
        ],
        notes: "へ instead of に for direction toward the beach, no は",
      },
      {
        segments: [
          { text: "明日[あした]は休[やす]んで 海[うみ]へ行[い]くかもしれない", blank: true },
        ],
        notes: "は after 明日 + へ for direction",
      },
      {
        segments: [
          { text: "明日[あした] 休[やす]みを 取[と]って 海[うみ]に行[い]くかもしれない", blank: true },
        ],
        notes: "休みを取って (take a day off) instead of 休んで, に for direction",
      },
      {
        segments: [
          { text: "明日[あした]は 休[やす]みを 取[と]って 海[うみ]に行[い]くかもしれない", blank: true },
        ],
        notes: "休みを取って with は after 明日, に for direction",
      },
      {
        segments: [
          { text: "明日[あした] 休[やす]みを 取[と]って 海[うみ]へ行[い]くかもしれない", blank: true },
        ],
        notes: "休みを取って, へ for direction",
      },
      {
        segments: [
          { text: "明日[あした]は 休[やす]みを 取[と]って 海[うみ]へ行[い]くかもしれない", blank: true },
        ],
        notes: "は after 明日 + 休みを取って + へ for direction",
      },
    ],
  },
  {
    english: "I ate too much — I might be a little sick.",
    answers: [
      {
        segments: [
          { text: "食[た]べすぎたから、ちょっと 気分[きぶん]が 悪[わる]い" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "食[た]べすぎたから、少[すこ]し 気分[きぶん]が 悪[わる]い" },
          { text: "かもしれない", blank: true },
        ],
        notes: "少し instead of ちょっと",
      },
      {
        segments: [
          { text: "食[た]べすぎたので、ちょっと 気分[きぶん]が 悪[わる]い" },
          { text: "かもしれない", blank: true },
        ],
        notes: "ので instead of から, ちょっと",
      },
      {
        segments: [
          { text: "食[た]べすぎたので、少[すこ]し 気分[きぶん]が 悪[わる]い" },
          { text: "かもしれない", blank: true },
        ],
        notes: "ので, 少し",
      },
      {
        segments: [
          { text: "食[た]べすぎたから、ちょっと 気分[きぶん]が 悪[わる]くなる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "なる form: \"might become a little sick\" — から",
      },
      {
        segments: [
          { text: "食[た]べすぎたので、ちょっと 気分[きぶん]が 悪[わる]くなる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "なる form with ので",
      },
      {
        segments: [
          { text: "食[た]べすぎたから、ちょっと おなかが 痛[いた]い" },
          { text: "かもしれない", blank: true },
        ],
        notes: "おなかが痛い — stomach hurts, から",
      },
      {
        segments: [
          { text: "食[た]べすぎたので、ちょっと おなかが 痛[いた]い" },
          { text: "かもしれない", blank: true },
        ],
        notes: "おなかが痛い with ので",
      },
      {
        segments: [
          { text: "食[た]べすぎたから、少[すこ]し おなかが 痛[いた]い" },
          { text: "かもしれない", blank: true },
        ],
        notes: "おなかが痛い, 少し, から",
      },
      {
        segments: [
          { text: "食[た]べすぎたので、少[すこ]し おなかが 痛[いた]い" },
          { text: "かもしれない", blank: true },
        ],
        notes: "おなかが痛い, 少し, ので",
      },
    ],
  },
  {
    english: "Sora's roommate might be someone Kenji knows.",
    hint: "Sora = そら, Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "そらのルームメイトは けんじさんが 知[し]っている 人[ひと]" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "そらのルームメートは けんじさんが 知[し]っている 人[ひと]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Alternative spelling ルームメート",
      },
      {
        segments: [
          { text: "そらのルームメイトは けんじさんが 知[し]っている 人[ひと]" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite form かもしれません",
      },
      {
        segments: [
          { text: "そらのルームメートは けんじさんが 知[し]っている 人[ひと]" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite form with ルームメート spelling",
      },
      {
        segments: [
          { text: "そらのルームメイトが けんじさんの 知[し]り合[あ]い" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "そらのルームメイトは けんじさんの 知[し]り合[あ]い" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "そらのルームメートは けんじさんの 知[し]り合[あ]い" },
          { text: "かもしれない", blank: true },
        ],
        notes: "ルームメート spelling with 知り合い",
      },
      {
        segments: [
          { text: "そらのルームメイトが けんじさんの 知[し]り合[あ]い" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite, が particle, 知り合い",
      },
      {
        segments: [
          { text: "そらのルームメートが けんじさんの 知[し]り合[あ]い" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite, が particle, 知り合い, ルームメート spelling",
      },
      {
        segments: [
          { text: "そらのルームメイトは けんじさんの知[し]っている 人[ひと]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using の instead of が in the relative clause (けんじの知っている人)",
      },
      {
        segments: [
          { text: "そらのルームメイトは けんじさんの知[し]っている 人[ひと]" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite, の in relative clause",
      },
    ],
  },
  {
    english: "That horror movie might be really scary.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          { text: "そのホラー 映画[えいが]は 本当[ほんとう]に 怖[こわ]い", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "Base answer: その + 本当に怖い + かもしれない",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は 本当[ほんとう]に 怖[こわ]い", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "あの instead of その (that over there)",
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は すごく 怖[こわ]い", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "すごく instead of 本当に for \"really\"",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は すごく 怖[こわ]い", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "あの + すごく怖い + かもしれない",
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は とても 怖[こわ]い", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "とても instead of 本当に/すごく for \"really\"",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は とても 怖[こわ]い", blank: true },
          { text: "かもしれない", blank: true },
        ],
        notes: "あの + とても怖い + かもしれない",
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は 本当[ほんとう]に 怖[こわ]い", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite form: その + 本当に怖い + かもしれません",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は 本当[ほんとう]に 怖[こわ]い", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite form: あの + 本当に怖い + かもしれません",
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は すごく 怖[こわ]い", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite: その + すごく怖い + かもしれません",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は すごく 怖[こわ]い", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite: あの + すごく怖い + かもしれません",
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は とても 怖[こわ]い", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite: その + とても怖い + かもしれません",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は とても 怖[こわ]い", blank: true },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite: あの + とても怖い + かもしれません",
      },
    ],
  },
  {
    english: "Haruki might be able to speak three or four foreign languages.",
    hint: "Haruki = はるき",
    answers: [
      {
        segments: [
          { text: "はるきは 外国語[がいこくご]が 三[さん]か 国語[こくご]か 四[よん]か 国語[こくご]" },
          { text: "話[はな]せる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "かもしれない", blank: true },
        ],
        notes: "Core answer: potential 話せる + かもしれない; が marks 外国語; か国語 counter for languages",
      },
      {
        segments: [
          { text: "はるきは 外国語[がいこくご]を 三[さん]か 国語[こくご]か 四[よん]か 国語[こくご]" },
          { text: "話[はな]せる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "かもしれない", blank: true },
        ],
        notes: "を instead of が with 外国語 (potential verb can take を)",
      },
      {
        segments: [
          { text: "はるきは 三[さん]つか 四[よっ]つの 外国語[がいこくご]が" },
          { text: "話[はな]せる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "かもしれない", blank: true },
        ],
        notes: "三つか四つの with generic つ counter + の; が marks 外国語",
      },
      {
        segments: [
          { text: "はるきは 三[さん]つか 四[よっ]つの 外国語[がいこくご]を" },
          { text: "話[はな]せる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "かもしれない", blank: true },
        ],
        notes: "三つか四つの with を particle",
      },
      {
        segments: [
          { text: "はるきは 外国語[がいこくご]を 三[さん]か 国語[こくご]か 四[よん]か 国語[こくご]話[はな]す ことが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "かもしれない", blank: true },
        ],
        notes: "ことができる construction instead of potential form; を with 外国語; dictionary form 話す",
      },
      {
        segments: [
          { text: "はるきが 外国語[がいこくご]が 三[さん]か 国語[こくご]か 四[よん]か 国語[こくご]" },
          { text: "話[はな]せる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "かもしれない", blank: true },
        ],
        notes: "はるきが instead of はるきは — が marks Haruki as the subject of potential",
      },
    ],
  },
  {
    english: "I've been using the same wallet since high school — it might be time for a new one.",
    answers: [
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]から 同[おな]じ 財布[さいふ]を 使[つか]っている。新[あたら]しいのを 買[か]った 方[ほう]がいいかもしれない", blank: true },
        ],
        notes: "Base answer: two sentences, 高校の時から, 新しいのを買ったほうがいい + かもしれない",
      },
      {
        segments: [
          { text: "高校[こうこう]から ずっと 同[おな]じ 財布[さいふ]を 使[つか]っている。新[あたら]しいのを 買[か]った 方[ほう]がいいかもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]から 同[おな]じ 財布[さいふ]を 使[つか]っているから、そろそろ 新[あたら]しいのを 買[か]った 方[ほう]がいいかもしれない", blank: true },
        ],
        notes: "Single sentence using から to connect the two clauses, adds そろそろ (it's about time)",
      },
      {
        segments: [
          { text: "高校[こうこう]から ずっと 同[おな]じ 財布[さいふ]を 使[つか]っているから、そろそろ 新[あたら]しいのを 買[か]った 方[ほう]がいいかもしれない", blank: true },
        ],
        notes: "Single sentence with ずっと added for emphasis, そろそろ, connected with から",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]から 同[おな]じ 財布[さいふ]を 使[つか]っている。そろそろ 新[あたら]しい 財布[さいふ]を 買[か]った 方[ほう]がいいかもしれない", blank: true },
        ],
        notes: "Two sentences; uses 新しい財布を (full noun) instead of 新しいの, with そろそろ",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]から 同[おな]じ 財布[さいふ]を 使[つか]っている。新[あたら]しい 財布[さいふ]を 買[か]った 方[ほう]がいいかもしれない", blank: true },
        ],
        notes: "Two sentences; 新しい財布を (full noun) without そろそろ",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]から 同[おな]じ 財布[さいふ]を 使[つか]っているので、そろそろ 新[あたら]しいのを 買[か]った 方[ほう]がいいかもしれない", blank: true },
        ],
        notes: "Single sentence using ので instead of から to connect clauses",
      },
      {
        segments: [
          { text: "高校生[こうこうせい]の 頃[ころ]から 同[おな]じ 財布[さいふ]を 使[つか]っている。新[あたら]しいのを 買[か]った 方[ほう]がいいかもしれない", blank: true },
        ],
        notes: "Uses 高校生の頃から (since around the time of being a high school student) instead of 高校の時から",
      },
      {
        segments: [
          { text: "高校[こうこう]の 時[とき]から 同[おな]じ 財布[さいふ]を 使[つか]っている。そろそろ 新[あたら]しいのを 買[か]う 時[とき]かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "高校[こうこう]から 同[おな]じ 財布[さいふ]を 使[つか]っている。そろそろ 新[あたら]しいのを 買[か]う 時[とき]かもしれない", blank: true },
        ],
        notes: "高校から (without の時) + 時かもしれない structure",
      },
    ],
  },
  {
    english: "Yuki's parents might not know she's been dating someone for two years.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんの 両親[りょうしん]は、ゆきさんが 二年間[にねんかん] 誰[だれ]かと 付[つ]き 合[あ]っていることを" },
          { text: "知[し]らない", blank: true },
          { text: "かもしれない" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんの 両親[りょうしん]は、ゆきさんが 誰[だれ]かと 二年間[にねんかん] 付[つ]き 合[あ]っていることを" },
          { text: "知[し]らない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Different word order: 誰かと before 二年間 (time phrase repositioned)",
      },
      {
        segments: [
          { text: "ゆきさんの 両親[りょうしん]は、ゆきさんが 二年間[にねんかん] 誰[だれ]かと 付[つ]き 合[あ]っていることを 知[し]っていない" },
          { text: "かもしれない", blank: true },
        ],
        notes: "知らない → 知っていない (emphatic \"not even knowing\"), with かもしれない as the blank",
      },
      {
        segments: [
          { text: "ゆきさんの 両親[りょうしん]は、ゆきさんが 二年間[にねんかん] 誰[だれ]かと 付[つ]き 合[あ]っているのを" },
          { text: "知[し]らない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Using の instead of こと to nominalize the embedded clause (の vs こと variation)",
      },
      {
        segments: [
          { text: "ゆきさんの 両親[りょうしん]が、ゆきさんが 二年間[にねんかん] 誰[だれ]かと 付[つ]き 合[あ]っていることを" },
          { text: "知[し]らない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Using が instead of は for 両親 (subject particle swap)",
      },
      {
        segments: [
          { text: "ゆきさんの 両親[りょうしん]は、ゆきさんが 二年間[にねんかん] 誰[だれ]かと 付[つ]き 合[あ]っているのを 知[し]っていない" },
          { text: "かもしれない", blank: true },
        ],
        notes: "の nominalization + 知っていない, with かもしれない as the blank",
      },
      {
        segments: [
          { text: "ゆきさんの 両親[りょうしん]が、ゆきさんが 二年間[にねんかん] 誰[だれ]かと 付[つ]き 合[あ]っているのを" },
          { text: "知[し]らない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "が particle for 両親 + の nominalization",
      },
      {
        segments: [
          { text: "ゆきさんの 両親[りょうしん]は、ゆきさんが 誰[だれ]かと 二年間[にねんかん] 付[つ]き 合[あ]っているのを" },
          { text: "知[し]らない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "の nominalization + reordered time phrase (誰かと before 二年間)",
      },
    ],
  },
  {
    english: "That quiet person in the corner might actually be the company president.",
    answers: [
      {
        segments: [
          { text: "あの 隅[すみ]の 静[しず]かな 人[ひと]は、実[じつ]は 社長[しゃちょう]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Base answer: あの隅の静かな人 (that quiet person in the corner), 実は (actually), 社長かもしれない (might be the company president)",
      },
      {
        segments: [
          { text: "この 隅[すみ]の 静[しず]かな 人[ひと]は、実[じつ]は 社長[しゃちょう]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using この (this corner person) instead of あの — if the person is close by",
      },
      {
        segments: [
          { text: "隅[すみ]に いる 静[しず]かな あの 人[ひと]は、実[じつ]は 社長[しゃちょう]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Restructured: 隅にいる静かなあの人 — \"that quiet person who is in the corner,\" with いる relative clause",
      },
      {
        segments: [
          { text: "あの 角[かど]の 静[しず]かな 人[ひと]は、実[じつ]は 社長[しゃちょう]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using 角[かど] (corner/angle) instead of 隅[すみ] — both mean \"corner\" but 角 is more for street/room corners",
      },
      {
        segments: [
          { text: "隅[すみ]の あの 静[しず]かな 方[かた]は、実[じつ]は 社長[しゃちょう]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using 方[かた] (polite word for person) instead of 人[ひと] — more respectful",
      },
      {
        segments: [
          { text: "隅[すみ]に 静[しず]かに 座[すわ]っている あの 人[ひと]は、実[じつ]は 社長[しゃちょう]" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "隅[すみ]の 静[しず]かな あの 人[ひと]は、本当[ほんとう]は" },
          { text: "社長[しゃちょう]かもしれない", blank: true },
        ],
        notes: "Using 本当は (in truth/actually) instead of 実は — slightly different nuance, \"deep down/truly\"",
      },
    ],
  },
  {
    english: "Kenji didn't go to school today — he might be sick.",
    hint: "けんじ = 健二",
    answers: [
      {
        segments: [
          { text: "健二[けんじ]は 今日[きょう] 学校[がっこう]に 行[い]かなかった。病気[びょうき]" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "健二[けんじ]は 今日[きょう] 学校[がっこう]に 行[い]かなかった。病気[びょうき]" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite: noun 病気 + かもしれません",
      },
      {
        segments: [
          { text: "健二[けんじ]は 今日[きょう] 学校[がっこう]に 行[い]かなかった。気分[きぶん]が 悪[わる]い" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using 気分が悪い (feel sick) instead of 病気 — い-adjective + かもしれない",
      },
      {
        segments: [
          { text: "健二[けんじ]は 今日[きょう] 学校[がっこう]に 行[い]かなかった。気分[きぶん]が 悪[わる]い" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite: 気分が悪い + かもしれません",
      },
      {
        segments: [
          { text: "健二[けんじ]は 今日[きょう] 学校[がっこう]に 来[こ]なかった。病気[びょうき]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using 来なかった (didn't come to school) instead of 行かなかった — different perspective",
      },
      {
        segments: [
          { text: "健二[けんじ]は 今日[きょう] 学校[がっこう]に 来[こ]なかった。病気[びょうき]" },
          { text: "かもしれません", blank: true },
        ],
        notes: "Polite: 来なかった + 病気かもしれません",
      },
      {
        segments: [
          { text: "健二[けんじ]が 今日[きょう] 学校[がっこう]に 行[い]かなかった。病気[びょうき]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Using が instead of は for 健二",
      },
      {
        segments: [
          { text: "健二[けんじ]が 今日[きょう] 学校[がっこう]に 行[い]かなかった。病気[びょうき]" },
          { text: "かもしれません", blank: true },
        ],
        notes: "が instead of は, polite かもしれません",
      },
      {
        segments: [
          { text: "健二[けんじ]は 今日[きょう] 学校[がっこゆ]に 行[い]かなかった。病気[びょうき]になっている" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "健二[けんじ]は 今日[きょう] 学校[がっこう]に 行[い]かなかった。病気[びょうき]になっている" },
          { text: "かもしれません", blank: true },
        ],
        notes: "病気になっている + かもしれません (polite)",
      },
      {
        segments: [
          { text: "今日[きょう]、健二[けんじ]は 学校[がっこう]に 行[い]かなかった。病気[びょうき]" },
          { text: "かもしれない", blank: true },
        ],
        notes: "今日 moved to the front of the sentence",
      },
      {
        segments: [
          { text: "今日[きょう]、健二[けんじ]は 学校[がっこう]に 行[い]かなかった。病気[びょうき]" },
          { text: "かもしれません", blank: true },
        ],
        notes: "今日 at front, polite かもしれません",
      },
    ],
  },
  {
    english: "I might actually be bad at karaoke.",
    hint: "カラオケ = カラオケ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 実[じつ]は カラオケが" },
          { text: "下手[へた]", blank: true },
          { text: "かもしれない" },
        ],
      },
      {
        segments: [
          { text: "実[じつ]は 私[わたし]は カラオケが" },
          { text: "下手[へた]", blank: true },
          { text: "かもしれない" },
        ],
        notes: "実は moved to the very front of the sentence for emphasis",
      },
      {
        segments: [
          { text: "私[わたし]は 実[じつ]は カラオケを するのが" },
          { text: "下手[へた]", blank: true },
          { text: "かもしれない" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 実[じつ]は カラオケが あまり" },
          { text: "上手[じょうず]じゃない", blank: true },
          { text: "かもしれない" },
        ],
      },
      {
        segments: [
          { text: "もしかしたら、私[わたし]は 実[じつ]は カラオケが" },
          { text: "下手[へた]", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Adding もしかしたら (perhaps/possibly) at the start for additional uncertainty nuance",
      },
      {
        segments: [
          { text: "私[わたし]は 実[じつ]は カラオケが 上手[じょうず]じゃ" },
          { text: "ない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "上手じゃない (not good at) without あまり, blank on ない",
      },
      {
        segments: [
          { text: "実[じつ]は カラオケが" },
          { text: "下手[へた]", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Dropping 私は entirely — since the subject is understood, starting directly with 実は",
      },
      {
        segments: [
          { text: "私[わたし]は 実[じつ]は カラオケが" },
          { text: "にがて", blank: true },
          { text: "かもしれない" },
        ],
      },
    ],
  },
  {
    english: "I studied really hard, so I might actually get a good grade on tomorrow's exam.",
    answers: [
      {
        segments: [
          { text: "よく 勉強[べんきょう]したから、明日[あした]のテストで いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
      },
      {
        segments: [
          { text: "よく 勉強[べんきょう]したから、明日[あした]の 試験[しけん]で いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "試験 instead of テスト for exam",
      },
      {
        segments: [
          { text: "よく 勉強[べんきょう]したから、明日[あした]のテストで 実[じつ]は いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "Adding 実は (actually) to emphasize the surprise element",
      },
      {
        segments: [
          { text: "よく 勉強[べんきょう]したので、明日[あした]のテストで いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "ので instead of から for softer causality",
      },
      {
        segments: [
          { text: "よく 勉強[べんきょう]したので、明日[あした]の 試験[しけん]で いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "ので + 試験",
      },
      {
        segments: [
          { text: "よく 勉強[べんきょう]したので、明日[あした]のテストで 実[じつ]は いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "ので + 実は combination",
      },
      {
        segments: [
          { text: "たくさん 勉強[べんきょう]したから、明日[あした]のテストで いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "たくさん instead of よく for \"a lot / really hard\"",
      },
      {
        segments: [
          { text: "よく 勉強[べんきょう]したから、明日[あした]のテストは いい 点[てん]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "いい点 (good score/points) instead of いい成績; は topic-marking the exam",
      },
      {
        segments: [
          { text: "よく 勉強[べんきょう]したから、明日[あした]のテストで いい 点[てん]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "いい点 with で (on the test)",
      },
      {
        segments: [
          { text: "本当[ほんとう]に よく 勉強[べんきょう]したから、明日[あした]のテストで いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "本当によく勉強した — \"really hard\" with 本当に + よく",
      },
      {
        segments: [
          { text: "すごく 勉強[べんきょう]したから、明日[あした]のテストで いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "すごく勉強した — \"really hard\" with すごく",
      },
      {
        segments: [
          { text: "よく 勉強[べんきょう]したから、明日[あした]の 試験[しけん]で 実[じつ]は いい 成績[せいせき]が 取[と]れる" },
          { text: "かもしれない", blank: true },
        ],
        notes: "試験 + 実は combination with から",
      },
    ],
  },
];

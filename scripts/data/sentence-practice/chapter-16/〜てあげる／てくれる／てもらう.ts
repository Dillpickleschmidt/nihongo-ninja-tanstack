import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Mika helped my younger brother with his homework yesterday.",
    hint: "Mika = ミカ",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、ミカさんが 私[わたし]の 弟[おとうと]の 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、ミカさんは 私[わたし]の 弟[おとうと]の 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "ミカさんが 昨日[きのう] 私[わたし]の 弟[おとうと]の 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "ミカさんは 昨日[きのう] 私[わたし]の 弟[おとうと]の 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 私[わたし]の 弟[おとうと]は ミカさんに 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 私[わたし]の 弟[おとうと]が ミカさんに 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]は 昨日[きのう] ミカさんに 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、ミカさんが 私[わたし]の 弟[おとうと]に 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、ミカさんは 私[わたし]の 弟[おとうと]に 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Could Mr. Sato take a photo for me in front of the station?",
    hint: "Mr. Sato = 佐藤さん",
    answers: [
      {
        segments: [
          { text: "佐藤[さとう]さん、駅[えき]の 前[まえ]で 私[わたし]の 写真[しゃしん]を 撮[と]って" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "佐藤[さとう]さん、駅[えき]の 前[まえ]で 写真[しゃしん]を 撮[と]って" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "佐藤[さとう]さんに 駅[えき]の 前[まえ]で 私[わたし]の 写真[しゃしん]を 撮[と]って" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "佐藤[さとう]さんに 駅[えき]の 前[まえ]で 写真[しゃしん]を 撮[と]って" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "駅[えき]の 前[まえ]で、 佐藤[さとう]さんに 私[わたし]の 写真[しゃしん]を 撮[と]って" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "駅[えき]の 前[まえ]で、 佐藤[さとう]さんに 写真[しゃしん]を 撮[と]って" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 佐藤[さとう]さんに 駅[えき]の 前[まえ]で 写真[しゃしん]を 撮[と]って" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "駅[えき]の 前[まえ]で 私[わたし]の 写真[しゃしん]を、 佐藤[さとう]さんが 撮[と]って" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "駅[えき]の 前[まえ]で 写真[しゃしん]を、 佐藤[さとう]さんが 撮[と]って" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "I had my friend translate the hotel map for me because I don't understand kanji.",
    answers: [
      {
        segments: [
          { text: "漢字[かんじ]が わからないので、 私[わたし]は 友達[ともだち]に ホテルの 地図[ちず]を " },
          { text: "訳[やく]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 漢字[かんじ]が わからないので、友達[ともだち]に ホテルの 地図[ちず]を " },
          { text: "訳[やく]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "漢字[かんじ]が わからないから、 私[わたし]は 友達[ともだち]に ホテルの 地図[ちず]を " },
          { text: "訳[やく]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 漢字[かんじ]が わからないから、友達[ともだち]に ホテルの 地図[ちず]を " },
          { text: "訳[やく]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "ホテルの 地図[ちず]の 漢字[かんじ]が わからないので、 私[わたし]は 友達[ともだち]に " },
          { text: "訳[やく]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "ホテルの 地図[ちず]の 漢字[かんじ]が わからないから、 私[わたし]は 友達[ともだち]に " },
          { text: "訳[やく]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Yesterday, I had a doctor look at my bad tooth.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、 私[わたし]は 医者[いしゃ]に 虫歯[むしば]を" },
          { text: "見[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 私[わたし]は 医者[いしゃ]に 悪[わる]い 歯[は]を" },
          { text: "見[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、医者[いしゃ]に 虫歯[むしば]を" },
          { text: "見[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 私[わたし]は 歯医者[はいしゃ]に 虫歯[むしば]を" },
          { text: "見[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 私[わたし]は 歯医者[はいしゃ]に 悪[わる]い 歯[は]を" },
          { text: "見[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 私[わたし]は 医者[いしゃ]に 虫歯[むしば]を" },
          { text: "診[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 私[わたし]は 歯医者[はいしゃ]に 虫歯[むしば]を" },
          { text: "診[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、医者[いしゃ]が 私[わたし]の 虫歯[むしば]を" },
          { text: "見[み]てくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、医者[いしゃ]が 私[わたし]の 悪[わる]い 歯[は]を" },
          { text: "見[み]てくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、歯医者[はいしゃ]が 私[わたし]の 虫歯[むしば]を" },
          { text: "見[み]てくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、歯医者[はいしゃ]が 私[わたし]の 悪[わる]い 歯[は]を" },
          { text: "見[み]てくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、医者[いしゃ]が 私[わたし]の 虫歯[むしば]を" },
          { text: "診[み]てくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、歯医者[はいしゃ]が 私[わたし]の 虫歯[むしば]を" },
          { text: "診[み]てくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、医者[いしゃ]に 私[わたし]の 虫歯[むしば]を" },
          { text: "見[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、歯医者[はいしゃ]に 私[わたし]の 虫歯[むしば]を" },
          { text: "見[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、医者[いしゃ]に 私[わたし]の 悪[わる]い 歯[は]を" },
          { text: "見[み]てもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Could Kenji lend me his computer today?",
    hint: "Kenji = 健二",
    answers: [
      {
        segments: [
          { text: "健二[けんじ]さんは 今日[きょう]、 私[わたし]に コンピューターを " },
          { text: "貸[か]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]、 健二[けんじ]さんは 私[わたし]に コンピューターを " },
          { text: "貸[か]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "健二[けんじ]さんが 今日[きょう]、 私[わたし]に コンピューターを " },
          { text: "貸[か]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]、 健二[けんじ]さんが 私[わたし]に コンピューターを " },
          { text: "貸[か]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 今日[きょう]、コンピューターを " },
          { text: "貸[か]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]、 健二[けんじ]さんは コンピューターを " },
          { text: "貸[か]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "健二[けんじ]さんが 今日[きょう]、コンピューターを " },
          { text: "貸[か]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、 健二[けんじ]さんに コンピューターを " },
          { text: "貸[か]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]、 私[わたし]は 健二[けんじ]さんに コンピューターを " },
          { text: "貸[か]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]、 健二[けんじ]さんに コンピューターを " },
          { text: "貸[か]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "健二[けんじ]さんに 今日[きょう]、コンピューターを " },
          { text: "貸[か]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "健二[けんじ]さん、今日[きょう]、 私[わたし]に コンピューターを " },
          { text: "貸[か]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "健二[けんじ]さん、今日[きょう]、コンピューターを " },
          { text: "貸[か]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "Could the station attendant tell me where the third platform is?",
    answers: [
      {
        segments: [
          { text: "駅員[えきいん]さん、三番[さんばん]ホームが どこか " },
          { text: "教[おし]えてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "駅員[えきいん]さん、三番[さんばん]ホームは どこか " },
          { text: "教[おし]えてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "三番[さんばん]ホームが どこか、駅員[えきいん]さんが " },
          { text: "教[おし]えてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "三番[さんばん]ホームは どこか、駅員[えきいん]さんが " },
          { text: "教[おし]えてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]さんに 三番[さんばん]ホームが どこか " },
          { text: "教[おし]えてもらう", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]さんに 三番[さんばん]ホームは どこか " },
          { text: "教[おし]えてもらう", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "駅員[えきいん]さんに 三番[さんばん]ホームが どこか " },
          { text: "教[おし]えてもらう", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "駅員[えきいん]さんに 三番[さんばん]ホームは どこか " },
          { text: "教[おし]えてもらう", blank: true },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "I made curry for my younger sister last night because she was tired.",
    answers: [
      {
        segments: [
          { text: "昨晩[さくばん]、妹[いもうと]が 疲[つか]れていたので、 私[わたし]は 妹[いもうと]に カレーを " },
          { text: "作[つく]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、妹[いもうと]が 疲[つか]れていたので、 私[わたし]は 妹[いもうと]に カレーを " },
          { text: "作[つく]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨晩[さくばん]、妹[いもうと]が 疲[つか]れていたから、 私[わたし]は 妹[いもうと]に カレーを " },
          { text: "作[つく]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "妹[いもうと]が 疲[つか]れていたので、昨晩[さくばん]、 私[わたし]は 妹[いもうと]に カレーを " },
          { text: "作[つく]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨晩[さくばん]、疲[つか]れていた 妹[いもうと]に、 私[わたし]は カレーを " },
          { text: "作[つく]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨晩[さくばん]は 妹[いもうと]が 疲[つか]れていたので、 私[わたし]が 妹[いもうと]に カレーを " },
          { text: "作[つく]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨晩[さくばん]、妹[いもうと]が 疲[つか]れていたので、カレーを " },
          { text: "作[つく]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Could Yuki not laugh while I am giving my presentation tomorrow?",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "明日[あした]、 私[わたし]が 発表[はっぴょう]している 時[とき]、ゆきさんは " },
          { text: "笑[わら]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "明日[あした]、 私[わたし]が 発表[はっぴょう]している 時[とき]に、ゆきさんは " },
          { text: "笑[わら]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんは 明日[あした]、 私[わたし]が 発表[はっぴょう]している 時[とき]、" },
          { text: "笑[わら]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "明日[あした]、 私[わたし]の 発表[はっぴょう]の 時[とき]、ゆきさんは " },
          { text: "笑[わら]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "明日[あした]、 私[わたし]が 発表[はっぴょう]する 時[とき]、ゆきさんは " },
          { text: "笑[わら]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "明日[あした]の 私[わたし]の 発表[はっぴょう]の 時[とき]、ゆきさんは " },
          { text: "笑[わら]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "This morning, I had my older brother wake me up at six because I overslept yesterday.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう] 朝寝坊[あさねぼう]したので、今朝[けさ]、 私[わたし]は 兄[あに]に 六時[ろくじ]に 起[お]こして" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう] 朝寝坊[あさねぼう]したので、今朝[けさ]、兄[あに]が 私[わたし]を 六時[ろくじ]に 起[お]こして" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう] 朝寝坊[あさねぼう]したから、今朝[けさ]、 私[わたし]は 兄[あに]に 六時[ろくじ]に 起[お]こして" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう] 朝寝坊[あさねぼう]したから、今朝[けさ]、兄[あに]が 私[わたし]を 六時[ろくじ]に 起[お]こして" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう] 朝寝坊[あさねぼう]したので、 私[わたし]は 今朝[けさ]、兄[あに]に 六時[ろくじ]に 起[お]こして" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]、昨日[きのう] 朝寝坊[あさねぼう]したので、 私[わたし]は 兄[あに]に 六時[ろくじ]に 起[お]こして" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]、昨日[きのう] 朝寝坊[あさねぼう]したので、兄[あに]が 私[わたし]を 六時[ろくじ]に 起[お]こして" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう] 朝寝坊[あさねぼう]したので、今朝[けさ] 六時[ろくじ]に、 私[わたし]は 兄[あに]に 起[お]こして" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう] 朝寝坊[あさねぼう]したので、今朝[けさ] 六時[ろくじ]に、兄[あに]が 私[わたし]を 起[お]こして" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Taro had a fever yesterday, so I took Taro to the hospital for him.",
    hint: "Taro = 太郎",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、 太郎[たろう]さんは 熱[ねつ]が あったので、 私[わたし]は 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 太郎[たろう]さんに 熱[ねつ]が あったので、 私[わたし]は 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 太郎[たろう]さんは 熱[ねつ]が あったから、 私[わたし]は 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 太郎[たろう]さんに 熱[ねつ]が あったから、 私[わたし]は 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]さんは 昨日[きのう] 熱[ねつ]が あったので、 私[わたし]は 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]さんは 昨日[きのう] 熱[ねつ]が あったから、 私[わたし]は 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 太郎[たろう]さんは 熱[ねつ]が あったので、病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 太郎[たろう]さんは 熱[ねつ]が あったから、病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 太郎[たろう]さんは 熱[ねつ]が あったので、 私[わたし]に 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 太郎[たろう]さんに 熱[ねつ]が あったので、 太郎[たろう]さんは 私[わたし]に 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、 太郎[たろう]さんは 熱[ねつ]が あったから、 私[わたし]に 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 太郎[たろう]さんに 熱[ねつ]が あったから、 太郎[たろう]さんは 私[わたし]に 太郎[たろう]さんを 病院[びょういん]に 連[つ]れて 行[い]って" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Because my mother is busy today, I will clean the room for her.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は 母[はは]が 忙[いそが]しいので、 私[わたし]は 母[はは]に 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "母[はは]が 今日[きょう] 忙[いそが]しいので、 私[わたし]は 母[はは]に 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]は 母[はは]が 忙[いそが]しいので、 私[わたし]が 母[はは]に 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]は 母[はは]が 忙[いそが]しいので、母[はは]に 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]は 母[はは]が 忙[いそが]しいので、 私[わたし]は 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "母[はは]は 今日[きょう] 忙[いそが]しいので、 私[わたし]は 母[はは]に 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]、母[はは]が 忙[いそが]しいので、 私[わたし]は 母[はは]に 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "母[はは]が 忙[いそが]しいので、今日[きょう]は 私[わたし]が 母[はは]に 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]は 母[はは]が 忙[いそが]しいから、 私[わたし]は 母[はは]に 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]は 母[はは]が 忙[いそが]しいから、母[はは]に 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]は お 母[かあ]さんが 忙[いそが]しいので、 私[わたし]は お 母[かあ]さんに 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]は お 母[かあ]さんが 忙[いそが]しいから、お 母[かあ]さんに 部屋[へや]を" },
          { text: "掃除[そうじ]してあげる", blank: true },
        ],
      },
    ],
  },
  {
    english: "Could the landlord fix the dirty door for me today?",
    answers: [
      {
        segments: [
          { text: "大家[おおや]さん、今日[きょう]、汚[きたな]い ドアを" },
          { text: "直[なお]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "大家[おおや]さんは 今日[きょう]、汚[きたな]い ドアを" },
          { text: "直[なお]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]、大家[おおや]さんは 汚[きたな]い ドアを" },
          { text: "直[なお]してくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、大家[おおや]さんに 汚[きたな]い ドアを" },
          { text: "直[なお]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 大家[おおや]さんに 今日[きょう]、汚[きたな]い ドアを" },
          { text: "直[なお]してもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "Could Aya not tell my mother about tonight's party?",
    hint: "Aya = あや",
    answers: [
      {
        segments: [
          { text: "あやさんは、 私[わたし]の 母[はは]に 今夜[こんや]の パーティーのことを " },
          { text: "言[い]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "あやさん、 私[わたし]の 母[はは]に 今夜[こんや]の パーティーのことを " },
          { text: "言[い]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "あやさんは 今夜[こんや]の パーティーのことを 私[わたし]の 母[はは]に " },
          { text: "言[い]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "あやさん、今夜[こんや]の パーティーのことを 私[わたし]の 母[はは]に " },
          { text: "言[い]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "あやさんは、 私[わたし]の お 母[かあ]さんに 今夜[こんや]の パーティーのことを " },
          { text: "言[い]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "あやさん、 私[わたし]の お 母[かあ]さんに 今夜[こんや]の パーティーのことを " },
          { text: "言[い]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "あやさんは 今夜[こんや]の パーティーのことを 私[わたし]の お 母[かあ]さんに " },
          { text: "言[い]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "あやさん、今夜[こんや]の パーティーのことを 私[わたし]の お 母[かあ]さんに " },
          { text: "言[い]わないでくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "Because I was busy with work yesterday, I had my roommate buy my concert ticket for me.",
    hint: "roommate = ルームメイト; concert ticket = コンサートのチケット",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、 私[わたし]は 仕事[しごと]で 忙[いそが]しかったので、ルームメイトに コンサートの チケットを " },
          { text: "買[か]ってもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 仕事[しごと]で 忙[いそが]しかったので、 私[わたし]は ルームメイトに コンサートの チケットを " },
          { text: "買[か]ってもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] 仕事[しごと]で 忙[いそが]しかったので、ルームメイトに コンサートの チケットを " },
          { text: "買[か]ってもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、仕事[しごと]で 忙[いそが]しかったので、ルームメイトが 私[わたし]に コンサートの チケットを " },
          { text: "買[か]ってくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 私[わたし]が 仕事[しごと]で 忙[いそが]しかったので、ルームメイトが コンサートの チケットを " },
          { text: "買[か]ってくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "仕事[しごと]で 忙[いそが]しかったので、昨日[きのう]、 私[わたし]は ルームメイトに コンサートの チケットを " },
          { text: "買[か]ってもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、仕事[しごと]が 忙[いそが]しかったので、 私[わたし]は ルームメイトに コンサートの チケットを " },
          { text: "買[か]ってもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、仕事[しごと]が 忙[いそが]しかったので、ルームメイトが 私[わたし]に コンサートの チケットを " },
          { text: "買[か]ってくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Because my father lost his gloves this morning, I lent him my scarf.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、父[ちち]が 手袋[てぶくろ]を なくしたので、 私[わたし]は 父[ちち]に マフラーを 貸[か]して" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "父[ちち]が 今朝[けさ] 手袋[てぶくろ]を なくしたので、 私[わたし]は 父[ちち]に マフラーを 貸[か]して" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]、 私[わたし]の 父[ちち]が 手袋[てぶくろ]を なくしたので、 私[わたし]は 父[ちち]に マフラーを 貸[か]して" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]、父[ちち]が 手袋[てぶくろ]を なくしたから、 私[わたし]は 父[ちち]に マフラーを 貸[か]して" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "父[ちち]が 今朝[けさ] 手袋[てぶくろ]を なくしたから、 私[わたし]は 父[ちち]に マフラーを 貸[か]して" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]、父[ちち]が 手袋[てぶくろ]を なくしたので、父[ちち]に マフラーを 貸[か]して" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]、父[ちち]が 手袋[てぶくろ]を なくしたから、父[ちち]に マフラーを 貸[か]して" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]、父[ちち]は 手袋[てぶくろ]を なくしたので、 私[わたし]は 父[ちち]に マフラーを 貸[か]して" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]、父[ちち]は 手袋[てぶくろ]を なくしたから、 私[わたし]は 父[ちち]に マフラーを 貸[か]して" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Because the insurance was difficult, I had my father explain it to me yesterday.",
    answers: [
      {
        segments: [
          { text: "保険[ほけん]が 難[むずか]しかったので、昨日[きのう]、 私[わたし]は 父[ちち]に 保険[ほけん]を 説明[せつめい]して" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、保険[ほけん]が 難[むずか]しかったので、 私[わたし]は 父[ちち]に 説明[せつめい]して" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 保険[ほけん]が 難[むずか]しかったので、 私[わたし]は 父[ちち]に 保険[ほけん]を 説明[せつめい]して" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 保険[ほけん]が 難[むずか]しかったので、 私[わたし]は 父[ちち]に 説明[せつめい]して" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "保険[ほけん]が 難[むずか]しかったので、 私[わたし]は 昨日[きのう] 父[ちち]に 保険[ほけん]を 説明[せつめい]して" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "保険[ほけん]が 難[むずか]しかったので、 私[わたし]は 昨日[きのう] 父[ちち]に 説明[せつめい]して" },
          { text: "もらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、保険[ほけん]が 難[むずか]しかったので、父[ちち]が 私[わたし]に 保険[ほけん]を 説明[せつめい]して" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、保険[ほけん]が 難[むずか]しかったので、父[ちち]が 私[わたし]に 説明[せつめい]して" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 保険[ほけん]が 難[むずか]しかったので、父[ちち]が 私[わたし]に 保険[ほけん]を 説明[せつめい]して" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 保険[ほけん]が 難[むずか]しかったので、父[ちち]が 私[わたし]に 説明[せつめい]して" },
          { text: "くれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Because my smartphone battery was dead, I had Rina show me the map on Rina's smartphone.",
    hint: "Rina = りな",
    answers: [
      {
        segments: [
          { text: "私[わたし]の スマホの 電池[でんち]が なかったので、 私[わたし]は りなさんに りなさんの スマホで 地図[ちず]を " },
          { text: "見[み]せてもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の スマホの 電池[でんち]が なかったので、 りなさんに りなさんの スマホで 地図[ちず]を " },
          { text: "見[み]せてもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の スマホの 電池[でんち]が なかったので、 りなさんが りなさんの スマホで 地図[ちず]を " },
          { text: "見[み]せてくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の スマホの 電池[でんち]が なかったから、 私[わたし]は りなさんに りなさんの スマホで 地図[ちず]を " },
          { text: "見[み]せてもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の スマホの 電池[でんち]が なかったから、 りなさんが りなさんの スマホで 地図[ちず]を " },
          { text: "見[み]せてくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が なかったので、 私[わたし]は りなさんに りなさんの スマホで 地図[ちず]を " },
          { text: "見[み]せてもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が なかったので、 りなさんが りなさんの スマホで 地図[ちず]を " },
          { text: "見[み]せてくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の スマホの 電池[でんち]が なかったので、 私[わたし]は りなさんに 地図[ちず]を りなさんの スマホで " },
          { text: "見[み]せてもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の スマホの 電池[でんち]が なかったので、 りなさんが 地図[ちず]を りなさんの スマホで " },
          { text: "見[み]せてくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の スマホの 電池[でんち]が なかったので、 私[わたし]は りなさんに りなさんの スマホの 地図[ちず]を " },
          { text: "見[み]せてもらう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の スマホの 電池[でんち]が なかったので、 りなさんが りなさんの スマホの 地図[ちず]を " },
          { text: "見[み]せてくれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Could Emi bring two plates to tomorrow's party for me?",
    hint: "Emi = えみ",
    answers: [
      {
        segments: [
          { text: "えみさんは 明日[あした]の パーティーに 私[わたし]に お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "えみさん、明日[あした]の パーティーに 私[わたし]に お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "明日[あした]の パーティーに、 えみさんは 私[わたし]に お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は えみさんに 明日[あした]の パーティーに お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてもらう", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "明日[あした]の パーティーに、 私[わたし]は えみさんに お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてもらう", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "えみさんに 明日[あした]の パーティーに お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてもらう", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "明日[あした]の パーティーに、 えみさんに お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてもらう", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "えみさん、明日[あした]の パーティーに お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "えみさんは 明日[あした]の パーティーに お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "明日[あした]の パーティーに、 えみさんは お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてくれる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "えみさんは 私[わたし]に 明日[あした]の パーティーに お皿[さら]を 二枚[にまい] " },
          { text: "持[も]ってきてくれる", blank: true },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "Because the children were crying, I sang a funny song for them.",
    answers: [
      {
        segments: [
          { text: "子供[こども]たちが 泣[な]いていたので、 私[わたし]は 子供[こども]たちに 面白[おもしろ]い 歌[うた]を " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たちが 泣[な]いていたから、 私[わたし]は 子供[こども]たちに 面白[おもしろ]い 歌[うた]を " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たちが 泣[な]いていたので、 私[わたし]が 子供[こども]たちに 面白[おもしろ]い 歌[うた]を " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たちが 泣[な]いていたので、子供[こども]たちに 面白[おもしろ]い 歌[うた]を " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たちが 泣[な]いていたから、子供[こども]たちに 面白[おもしろ]い 歌[うた]を " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たちが 泣[な]いていたので、 私[わたし]は 面白[おもしろ]い 歌[うた]を 子供[こども]たちに " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たちが 泣[な]いていたから、 私[わたし]は 面白[おもしろ]い 歌[うた]を 子供[こども]たちに " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "泣[な]いていた 子供[こども]たちに、 私[わたし]は 面白[おもしろ]い 歌[うた]を " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たちが 泣[な]いていたので、 私[わたし]は 子供[こども]たちに 楽[たの]しい 歌[うた]を " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たちが 泣[な]いていたから、子供[こども]たちに 楽[たの]しい 歌[うた]を " },
          { text: "歌[うた]ってあげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
    ],
  },
  {
    english: "Because my grandmother cannot use a smartphone, I will send the reply email for her tonight.",
    answers: [
      {
        segments: [
          { text: "祖母[そぼ]は スマホが 使[つか]えないので、今夜[こんや]、 私[わたし]は 返事[へんじ]の メールを 送[おく]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "今夜[こんや]、祖母[そぼ]は スマホが 使[つか]えないので、 私[わたし]は 返事[へんじ]の メールを 送[おく]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "祖母[そぼ]は スマホを 使[つか]うことが できないので、今夜[こんや]、 私[わたし]は 返事[へんじ]の メールを 送[おく]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "祖母[そぼ]は スマホが 使[つか]えないので、 私[わたし]は 今夜[こんや]、返事[へんじ]の メールを 送[おく]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "祖母[そぼ]は スマホが 使[つか]えないので、今夜[こんや]、 私[わたし]が 返事[へんじ]の メールを 送[おく]って" },
          { text: "あげる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
];

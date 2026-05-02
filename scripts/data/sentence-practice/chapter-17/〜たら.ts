import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "If I finish my homework, can we go to karaoke?",
    answers: [
      {
        segments: [
          { text: "宿題[しゅくだい]が", blank: true },
          { text: "終[お]わったら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を", blank: true },
          { text: "したら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using 宿題をしたら (do homework, を particle) instead of 終わったら.",
      },
      {
        segments: [
          { text: "もし" },
          { text: "宿題[しゅくだい]が" },
          { text: "終[お]わったら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Adding もし at the start for emphasis on the \"if\" nuance, with 終わったら.",
      },
      {
        segments: [
          { text: "もし" },
          { text: "宿題[しゅくだい]を" },
          { text: "したら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が" },
          { text: "終[お]わったら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using volitional form 行こう/行きましょう as \"shall we go to karaoke?\" instead of potential.",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "したら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "宿題[しゅくだい]" },
          { text: "終[お]わったら", blank: true },
          { text: "、カラオケ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "?" },
        ],
        notes: "Casual を/に particle drops",
      },
      {
        segments: [
          { text: "もし" },
          { text: "宿題[しゅくだい]が" },
          { text: "終[お]わったら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "やったら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "やったら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "宿題[しゅくだい]を" },
          { text: "やったら", blank: true },
          { text: "、カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が" },
          { text: "終[お]わったら", blank: true },
          { text: "、カラオケに行[い]きませんか" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "したら", blank: true },
          { text: "、カラオケに行[い]きませんか" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もし" },
          { text: "宿題[しゅくだい]が" },
          { text: "終[お]わったら", blank: true },
          { text: "、カラオケに行[い]きませんか" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "If it were the weekend, I would go to the sea.",
    answers: [
      {
        segments: [
          { text: "週末[しゅうまつ]だったら", blank: true },
          { text: "、海[うみ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もし週末[しゅうまつ]だったら", blank: true },
          { text: "、海[うみ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "週末[しゅうまつ]だったら", blank: true },
          { text: "、海[うみ]へ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for direction to the sea.",
      },
      {
        segments: [
          { text: "もし週末[しゅうまつ]だったら", blank: true },
          { text: "、海[うみ]へ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "週末[しゅうまつ]だったら", blank: true },
          { text: "、海[うみ]に行[い]きたい" },
        ],
        notes: "Result clause uses たい form — \"would want to go to the sea.\" Captures the hypothetical desire.",
      },
      {
        segments: [
          { text: "もし週末[しゅうまつ]だったら", blank: true },
          { text: "、海[うみ]に行[い]きたい" },
        ],
      },
    ],
  },
  {
    english: "If the weather were nice, I'd want to take photos in the park.",
    answers: [
      {
        segments: [
          { text: "天気[てんき]がよかったら", blank: true },
          { text: "、公園[こうえん]で 写真[しゃしん]を" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "天気[てんき]がよかったら", blank: true },
          { text: "、公園[こうえん]で 写真[しゃしん]を" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding もし at the start to emphasize the hypothetical \"if\"",
      },
      {
        segments: [
          { text: "天気[てんき]がよかったら", blank: true },
          { text: "、公園[こうえん]で 写真[しゃしん]を" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "past" } },
        ],
        notes: "Past tense of たい (撮りたかった) to match \"would have wanted\" counterfactual nuance",
      },
      {
        segments: [
          { text: "もし" },
          { text: "天気[てんき]がよかったら", blank: true },
          { text: "、公園[こうえん]で 写真[しゃしん]を" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "晴[は]れだったら", blank: true },
          { text: "、公園[こうえん]で 写真[しゃしん]を" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "晴[は]れだったら", blank: true },
          { text: "、公園[こうえん]で 写真[しゃしん]を" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "天気[てんき]がよかったら", blank: true },
          { text: "、公園[こうえん]で 写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "写真が撮りたい — が instead of を before たい, also natural in Japanese",
      },
      {
        segments: [
          { text: "もし" },
          { text: "天気[てんき]がよかったら", blank: true },
          { text: "、公園[こうえん]で 写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I won the lottery, I'd want to travel abroad.",
    answers: [
      {
        segments: [
          { text: "宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 外国[がいこく]に 旅行[りょこう]したい" },
        ],
      },
      {
        segments: [
          { text: "もし宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 外国[がいこく]に 旅行[りょこう]したい" },
        ],
      },
      {
        segments: [
          { text: "宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 海外[かいがい]を 旅行[りょこう]したい" },
        ],
        notes: "Using 海外を旅行したい instead of 外国に旅行したい — 海外 is a more natural word for \"abroad\" in this context",
      },
      {
        segments: [
          { text: "もし宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 海外[かいがい]を 旅行[りょこう]したい" },
        ],
      },
      {
        segments: [
          { text: "宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 外国[がいこく]へ 旅行[りょこう]したい" },
        ],
        notes: "Using へ instead of に with 外国 — both particles are natural with direction of travel",
      },
      {
        segments: [
          { text: "もし宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 外国[がいこく]へ 旅行[りょこう]したい" },
        ],
      },
      {
        segments: [
          { text: "宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 外国[がいこく]で 旅行[りょこう]したい" },
        ],
        notes: "Using で instead of に/へ — で can mark the location/scope of the activity",
      },
      {
        segments: [
          { text: "宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 海外[かいがい]へ 旅行[りょこう]したい" },
        ],
        notes: "海外へ — using へ with 海外",
      },
      {
        segments: [
          { text: "もし宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 海外[かいがい]へ 旅行[りょこう]したい" },
        ],
      },
      {
        segments: [
          { text: "宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 外国[がいこく]に 旅行[りょこう]に行[い]きたい" },
        ],
        notes: "Using 旅行に行きたい (\"want to go traveling\") instead of 旅行したい — more colloquial phrasing",
      },
      {
        segments: [
          { text: "もし宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 外国[がいこく]に 旅行[りょこう]に行[い]きたい" },
        ],
      },
      {
        segments: [
          { text: "宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 海外[かいがい]に 旅行[りょこう]に行[い]きたい" },
        ],
      },
      {
        segments: [
          { text: "もし宝[たから]くじに 当[あ]たったら", blank: true },
          { text: "、 海外[かいがい]に 旅行[りょこう]に行[い]きたい" },
        ],
      },
    ],
  },
  {
    english: "If Kenji is late one more time, I'm not waiting.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんが もう一度[いちど] 遅刻[ちこく]したら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もしけんじさんが もう一度[いちど] 遅刻[ちこく]したら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんが もう一度[いちど] 遅れ[おくれ]たら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 遅れる (to be late/delayed) instead of 遅刻する",
      },
      {
        segments: [
          { text: "もしけんじさんが もう一度[いちど] 遅れ[おくれ]たら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんが 今度[こんど] 遅刻[ちこく]したら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 今度 (next time/one more time) instead of もう一度",
      },
      {
        segments: [
          { text: "もしけんじさんが 今度[こんど] 遅刻[ちこく]したら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんが もう一度[いちど] 遅刻[ちこく]したら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは もう一度[いちど] 遅刻[ちこく]したら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using は instead of が for Kenji (topic marker emphasis)",
      },
      {
        segments: [
          { text: "けんじさんが また 遅刻[ちこく]したら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using また (again) instead of もう一度",
      },
      {
        segments: [
          { text: "もしけんじさんが また 遅刻[ちこく]したら、" },
          { text: "待[ま]つ", blank: true, conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If it were a horror movie, I wouldn't want to watch it alone.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          { text: "ホラー 映画[えいが]だったら", blank: true },
          { text: "、一人[ひとり]で 見[み]たくない" },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "ホラー 映画[えいが]だったら", blank: true },
          { text: "、一人[ひとり]で 見[み]たくない" },
        ],
        notes: "Adding もし before the たら clause to emphasize hypothetical \"if\".",
      },
      {
        segments: [
          { text: "ホラー 映画[えいが]だったら", blank: true },
          { text: "、一人[ひとり]で 見[み]るのは いやです" },
        ],
        notes: "Using のは嫌だ (\"watching it alone is unpleasant\") instead of 見たくない.",
      },
      {
        segments: [
          { text: "もし" },
          { text: "ホラー 映画[えいが]だったら", blank: true },
          { text: "、一人[ひとり]で 見[み]るのは いやです" },
        ],
      },
      {
        segments: [
          { text: "ホラー 映画[えいが]だったら", blank: true },
          { text: "、一人[ひとり]では 見[み]たくない" },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "ホラー 映画[えいが]だったら", blank: true },
          { text: "、一人[ひとり]では 見[み]たくない" },
        ],
      },
    ],
  },
  {
    english: "If you get hungry, there's some bread in the bag.",
    answers: [
      {
        segments: [
          { text: "おなかがすいたら", blank: true },
          { text: "" },
          { text: "、かばんの 中[なか]に パンが" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もし おなかがすいたら", blank: true },
          { text: "" },
          { text: "、かばんの 中[なか]に パンが" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Added もし at the start to emphasize the \"if\" nuance",
      },
      {
        segments: [
          { text: "おなかがすいたら", blank: true },
          { text: "" },
          { text: "、かばんの 中[なか]に パンが" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "" },
        ],
      },
      {
        segments: [
          { text: "もし おなかがすいたら", blank: true },
          { text: "" },
          { text: "、かばんの 中[なか]に パンが" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "" },
        ],
      },
      {
        segments: [
          { text: "おなかがすいたら", blank: true },
          { text: "" },
          { text: "、パンが かばんの 中[なか]に" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "パンが fronted to before the location phrase — different word order",
      },
      {
        segments: [
          { text: "もし おなかがすいたら", blank: true },
          { text: "" },
          { text: "、パンが かばんの 中[なか]に" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "おなかがすいたら", blank: true },
          { text: "" },
          { text: "、かばんの 中[なか]に パンは" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "パンは instead of パンが — は marks bread with informational/contrastive focus",
      },
      {
        segments: [
          { text: "もし おなかがすいたら", blank: true },
          { text: "" },
          { text: "、かばんの 中[なか]に パンは" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "おなかがすいたら", blank: true },
          { text: "" },
          { text: "、かばんに パンが" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "かばんに without 中 — also natural for \"in the bag\"",
      },
      {
        segments: [
          { text: "もし おなかがすいたら", blank: true },
          { text: "" },
          { text: "、かばんに パンが" },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I get to the airport and the flight is already gone, what should I do?",
    answers: [
      {
        segments: [
          { text: "空港[くうこう]に" },
          { text: "着[つ]いたら", blank: true },
          { text: "、もう 飛行機[ひこうき]が 出[で]ていたら、どうしたらいいですか" },
        ],
        notes: "Base answer: double たら — \"when I arrive at the airport, if the flight has already departed, what should I do?\"",
      },
      {
        segments: [
          { text: "もし 空港[くうこう]に 着[つ]いたら", blank: true },
          { text: "、もう 飛行機[ひこうき]が 出[で]ていたら、どうしたらいいですか" },
        ],
        notes: "Adding もし at the start to emphasize the hypothetical \"if\" nuance",
      },
      {
        segments: [
          { text: "空港[くうこう]に" },
          { text: "着[つ]いたら", blank: true },
          { text: "、もう 飛行機[ひこうき]に 乗[の]り 遅[おく]れていたら、どうしたらいいですか" },
        ],
        notes: "Using 乗り遅れる (to miss a flight) instead of 出ていた for the second condition",
      },
      {
        segments: [
          { text: "もし 空港[くうこう]に 着[つ]いたら", blank: true },
          { text: "、もう 飛行機[ひこうき]に 乗[の]り 遅[おく]れていたら、どうしたらいいですか" },
        ],
      },
    ],
  },
  {
    english: "When I opened the bag, there was a cat inside.",
    answers: [
      {
        segments: [
          { text: "かばんを" },
          { text: "開[あ]けたら", blank: true },
          { text: "、中[なか]に 猫[ねこ]が いた" },
        ],
      },
      {
        segments: [
          { text: "カバンを" },
          { text: "開[あ]けたら", blank: true },
          { text: "、中[なか]に 猫[ねこ]が いた" },
        ],
        notes: "Katakana カバン instead of かばん — natural variant spelling",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "開[あ]けたら", blank: true },
          { text: "、中[なか]に 猫[ねこ]が いた" },
        ],
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "開[あ]けたら", blank: true },
          { text: "、猫[ねこ]が 中[なか]に いた" },
        ],
        notes: "Word order variation — 猫が comes before 中に",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "開[あ]けたら", blank: true },
          { text: "、中[なか]に ねこが いた" },
        ],
      },
      {
        segments: [
          { text: "袋[ふくろ]を" },
          { text: "開[あ]けたら", blank: true },
          { text: "、中[なか]に 猫[ねこ]が いた" },
        ],
        notes: "Using 袋 (fukuro - sack/bag) instead of かばん — a different kind of bag",
      },
    ],
  },
  {
    english: "If I told you a secret, would you promise not to tell anyone?",
    answers: [
      {
        segments: [
          { text: "もし 秘密[ひみつ]を" },
          { text: "話[はな]したら", blank: true },
          { text: "、誰[だれ]にも 言[い]わないと 約束[やくそく]できる" },
          { text: "か" },
        ],
        notes: "もし + 約束できる？= \"can you promise?\" instead of 約束してくれる",
      },
      {
        segments: [
          { text: "秘密[ひみつ]を" },
          { text: "話[はな]したら", blank: true },
          { text: "、誰[だれ]にも 言[い]わないと 約束[やくそく]できる" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "もし 秘密[ひみつ]を" },
          { text: "話[はな]したら", blank: true },
          { text: "、誰[だれ]にも 言[い]わないと 約束[やくそく]してもらえる" },
          { text: "か" },
        ],
        notes: "約束してもらえる？= can I get you to promise? (もらえる potential of もらう)",
      },
      {
        segments: [
          { text: "秘密[ひみつ]を" },
          { text: "話[はな]したら", blank: true },
          { text: "、誰[だれ]にも 言[い]わないと 約束[やくそく]してもらえる" },
          { text: "か" },
        ],
        notes: "Same with 約束してもらえる but without もし",
      },
      {
        segments: [
          { text: "もし 秘密[ひみつ]を 話[はな]したら、誰[だれ]にも 言[い]わないと 約束[やくそく]して", blank: true },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "秘密[ひみつ]を 話[はな]したら、誰[だれ]にも 言[い]わないと 約束[やくそく]して", blank: true },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Same as above but without もし",
      },
      {
        segments: [
          { text: "もし 秘密[ひみつ]を 教[おし]えたら、誰[だれ]にも 言[い]わないと 約束[やくそく]して", blank: true },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "教える (to tell/share) instead of 話す; もし included",
      },
      {
        segments: [
          { text: "秘密[ひみつ]を 教[おし]えたら、誰[だれ]にも 言[い]わないと 約束[やくそく]して", blank: true },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "教える without もし",
      },
      {
        segments: [
          { text: "もし 秘密[ひみつ]を 言[い]ったら、誰[だれ]にも 言[い]わないと 約束[やくそく]して", blank: true },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "言う (to tell) as the condition verb with もし",
      },
      {
        segments: [
          { text: "秘密[ひみつ]を 言[い]ったら、誰[だれ]にも 言[い]わないと 約束[やくそく]して", blank: true },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "言う without もし",
      },
      {
        segments: [
          { text: "もし 秘密[ひみつ]を 話[はな]したら、誰[だれ]にも 言[い]わないって 約束[やくそく]して", blank: true },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "って instead of と for the quote (casual); 話す condition; もし included",
      },
      {
        segments: [
          { text: "もし 秘密[ひみつ]を 教[おし]えたら、誰[だれ]にも 言[い]わないって 約束[やくそく]して", blank: true },
          { text: "くれる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "って quote + 教える condition; もし included",
      },
    ],
  },
  {
    english: "When summer comes, I want to go swimming in the sea.",
    answers: [
      {
        segments: [
          { text: "夏[なつ]になったら", blank: true },
          { text: "、海[うみ]で 泳[およ]ぎたい" },
        ],
      },
      {
        segments: [
          { text: "夏[なつ]になったら", blank: true },
          { text: "、海[うみ]で 泳[およ]ぎに 行[い]きたい" },
        ],
      },
      {
        segments: [
          { text: "もし夏[なつ]になったら", blank: true },
          { text: "、海[うみ]で 泳[およ]ぎたい" },
        ],
      },
      {
        segments: [
          { text: "もし夏[なつ]になったら", blank: true },
          { text: "、海[うみ]で 泳[およ]ぎに 行[い]きたい" },
        ],
      },
      {
        segments: [
          { text: "夏[なつ]がきたら", blank: true },
          { text: "、海[うみ]で 泳[およ]ぎたい" },
        ],
        notes: "Using 夏がきたら (when summer arrives — くる verb) instead of 夏になったら",
      },
      {
        segments: [
          { text: "夏[なつ]がきたら", blank: true },
          { text: "、海[うみ]で 泳[およ]ぎに 行[い]きたい" },
        ],
      },
      {
        segments: [
          { text: "もし夏[なつ]がきたら", blank: true },
          { text: "、海[うみ]で 泳[およ]ぎたい" },
        ],
      },
      {
        segments: [
          { text: "もし夏[なつ]がきたら", blank: true },
          { text: "、海[うみ]で 泳[およ]ぎに 行[い]きたい" },
        ],
      },
      {
        segments: [
          { text: "夏[なつ]になったら", blank: true },
          { text: "、海[うみ]に 泳[およ]ぎに 行[い]きたい" },
        ],
        notes: "Using 海に泳ぎに行きたい (go to the sea to swim) — に for destination instead of で for location",
      },
      {
        segments: [
          { text: "夏[なつ]がきたら", blank: true },
          { text: "、海[うみ]に 泳[およ]ぎに 行[い]きたい" },
        ],
      },
      {
        segments: [
          { text: "もし夏[なつ]になったら", blank: true },
          { text: "、海[うみ]に 泳[およ]ぎに 行[い]きたい" },
        ],
      },
      {
        segments: [
          { text: "もし夏[なつ]がきたら", blank: true },
          { text: "、海[うみ]に 泳[およ]ぎに 行[い]きたい" },
        ],
      },
    ],
  },
  {
    english: "If I were to move to a foreign country, what language should I study?",
    answers: [
      {
        segments: [
          { text: "もし 外国[がいこく]に" },
          { text: "住[す]んだら", blank: true },
          { text: "、何語[なにご]を 勉強[べんきょう]したらいいですか" },
        ],
      },
      {
        segments: [
          { text: "外国[がいこく]に" },
          { text: "住[す]んだら", blank: true },
          { text: "、何語[なにご]を 勉強[べんきょう]したらいいですか" },
        ],
      },
      {
        segments: [
          { text: "もし 外国[がいこく]に" },
          { text: "行[い]ったら", blank: true },
          { text: "、何語[なにご]を 勉強[べんきょう]したらいいですか" },
        ],
        notes: "Using 行く instead of 住む; with もし",
      },
      {
        segments: [
          { text: "外国[がいこく]に" },
          { text: "行[い]ったら", blank: true },
          { text: "、何語[なにご]を 勉強[べんきょう]したらいいですか" },
        ],
      },
      {
        segments: [
          { text: "もし 外国[がいこく]に" },
          { text: "住[す]んだら", blank: true },
          { text: "、何語[なにご]を 勉強[べんきょう]するといいですか" },
        ],
        notes: "Using といいですか instead of たらいいですか for \"should\"; with もし",
      },
      {
        segments: [
          { text: "もし 外国[がいこく]に" },
          { text: "住[す]んだら", blank: true },
          { text: "、どの 言語[ことば]を 勉強[べんきょう]したらいいですか" },
        ],
        notes: "Using どの言語 instead of 何語; with もし",
      },
    ],
  },
  {
    english: "If it gets too cold, turn on the heater.",
    answers: [
      {
        segments: [
          { text: "寒[さむ]すぎたら", blank: true },
          { text: "、ヒーターをつけて" },
          { text: "ください" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もし" },
          { text: "寒[さむ]すぎたら", blank: true },
          { text: "、ヒーターをつけて" },
          { text: "ください" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "寒[さむ]くなりすぎたら", blank: true },
          { text: "、ヒーターをつけて" },
          { text: "ください" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "寒[さむ]すぎたら", blank: true },
          { text: "、ヒーターをつけて" },
        ],
      },
      {
        segments: [
          { text: "もし寒[さむ]すぎたら", blank: true },
          { text: "、ヒーターをつけて" },
        ],
        notes: "Adding もし at the start for emphasis on the hypothetical \"if\"",
      },
      {
        segments: [
          { text: "寒[さむ]くなりすぎたら", blank: true },
          { text: "、ヒーターをつけて" },
        ],
        notes: "Using 寒くなりすぎたら (become too cold) instead of 寒すぎたら — emphasizes the process of becoming cold",
      },
      {
        segments: [
          { text: "もし寒[さむ]くなりすぎたら", blank: true },
          { text: "、ヒーターをつけて" },
        ],
      },
    ],
  },
  {
    english: "If I called Takeshi right now, do you think he'd pick up?",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "もし今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]ると" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もし今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]てくれると" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "出てくれる instead of 出る — emphasizing \"pick up for me\"",
      },
      {
        segments: [
          { text: "今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]ると" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]てくれると" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もし今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]るだろうか" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]るだろうか" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "もし今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]てくれるだろうか" },
        ],
        notes: "もし + たら + 出てくれるだろうか — \"would he pick up for me?\"",
        register: "casual",
      },
      {
        segments: [
          { text: "今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]てくれるだろうか" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "もし今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]るかな" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]るかな" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "もし今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]てくれるかな" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今[いま]たけしさんに" },
          { text: "電話[でんわ]したら", blank: true },
          { text: "、出[で]てくれるかな" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "If you look it up, you might be surprised.",
    answers: [
      {
        segments: [
          { text: "調[しら]べたら", blank: true },
          { text: "、びっくりするかもしれない" },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "調[しら]べたら", blank: true },
          { text: "、びっくりするかもしれない" },
        ],
        notes: "Adding もし at the start to emphasize the \"if\" nuance",
      },
      {
        segments: [
          { text: "調[しら]べたら", blank: true },
          { text: "、びっくりするかも" },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "調[しら]べたら", blank: true },
          { text: "、びっくりするかも" },
        ],
      },
      {
        segments: [
          { text: "調[しら]べたら", blank: true },
          { text: "、驚[おどろ]くかもしれない" },
        ],
        notes: "Using 驚く instead of びっくりする for \"surprised\"",
      },
      {
        segments: [
          { text: "もし" },
          { text: "調[しら]べたら", blank: true },
          { text: "、驚[おどろ]くかもしれない" },
        ],
      },
      {
        segments: [
          { text: "調[しら]べたら", blank: true },
          { text: "、驚[おどろ]くかも" },
        ],
        notes: "驚く + casual かも ending",
      },
      {
        segments: [
          { text: "もし" },
          { text: "調[しら]べたら", blank: true },
          { text: "、驚[おどろ]くかも" },
        ],
      },
      {
        segments: [
          { text: "調[しら]べたら", blank: true },
          { text: "、びっくりするかもしれない" },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "調[しら]べたら", blank: true },
          { text: "、びっくりするかもしれない" },
        ],
      },
    ],
  },
  {
    english: "When I got to the park, a cat was already sitting on my bench.",
    hint: "bench = ベンチ",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]に 着[つ]いたら", blank: true },
          { text: "、私[わたし]のベンチにもう 猫[ねこ]が 座[すわ]っていた" },
        ],
      },
      {
        segments: [
          { text: "公園[こうえん]に 行[い]ったら", blank: true },
          { text: "、私[わたし]のベンチにもう 猫[ねこ]が 座[すわ]っていた" },
        ],
        notes: "行ったら instead of 着いたら — \"when I went to the park\"",
      },
      {
        segments: [
          { text: "公園[こうえん]に 着[つ]いたら", blank: true },
          { text: "、私[わたし]のベンチにもう 猫[ねこ]が いた" },
        ],
        notes: "Using いた instead of 座っていた for the result clause — simpler expression \"a cat was already there\"",
      },
      {
        segments: [
          { text: "もし公園[こうえん]に 着[つ]いたら", blank: true },
          { text: "、私[わたし]のベンチにもう 猫[ねこ]が 座[すわ]っていた" },
        ],
      },
      {
        segments: [
          { text: "公園[こうえん]に 着[つ]いたら", blank: true },
          { text: "、ベンチにもう 猫[ねこ]が 座[すわ]っていた" },
        ],
        notes: "Dropping 私の — in context, \"the bench\" implies it's the one I was heading to; natural in Japanese",
      },
      {
        segments: [
          { text: "公園[こうえん]に 着[つ]いたら", blank: true },
          { text: "、私[わたし]のベンチにはもう 猫[ねこ]が 座[すわ]っていた" },
        ],
      },
      {
        segments: [
          { text: "公園[こうえん]に 行[い]ったら", blank: true },
          { text: "、私[わたし]のベンチにはもう 猫[ねこ]が 座[すわ]っていた" },
        ],
      },
      {
        segments: [
          { text: "公園[こうえん]に 着[つ]いたら", blank: true },
          { text: "、私[わたし]のベンチにすでに 猫[ねこ]が 座[すわ]っていた" },
        ],
        notes: "すでに instead of もう — \"already\" with a slightly more formal nuance",
      },
    ],
  },
  {
    english: "When you finish eating, wash your plate.",
    answers: [
      {
        segments: [
          { text: "食[た]べたら", blank: true },
          { text: "、お皿[さら]を 洗[あら]って" },
        ],
      },
      {
        segments: [
          { text: "食[た]べたら", blank: true },
          { text: "、皿[さら]を 洗[あら]って" },
        ],
        notes: "Using plain 皿 instead of お皿.",
      },
      {
        segments: [
          { text: "食[た]べ 終[お]わったら", blank: true },
          { text: "、お皿[さら]を 洗[あら]って" },
        ],
        notes: "Using 食べ終わる for finishing a meal.",
      },
      {
        segments: [
          { text: "食[た]べ 終[お]わったら", blank: true },
          { text: "、皿[さら]を 洗[あら]って" },
        ],
        notes: "Using 食べ終わる with plain 皿.",
      },
    ],
  },
  {
    english: "If I ever became a chef, I'd want to make the world's best pizza.",
    hint: "pizza = ピザ, chef = シェフ",
    answers: [
      {
        segments: [
          { text: "シェフになったら", blank: true },
          { text: "、世界一[せかいいち]のピザを" },
          { text: "作[つく]りたいと" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 〜たいと思う instead of just たい to express \"I think I'd want to\"",
      },
      {
        segments: [
          { text: "もし" },
          { text: "シェフになったら", blank: true },
          { text: "、世界一[せかいいち]のピザを" },
          { text: "作[つく]りたいと" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "シェフになったら", blank: true },
          { text: "、世界一[せかいいち]のピザを" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "シェフになったら", blank: true },
          { text: "、世界一[せかいいち]のピザを" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding もし at start for emphasis on hypothetical \"if\"",
      },
      {
        segments: [
          { text: "シェフになったら", blank: true },
          { text: "、世界[せかい]で一番[いちばん]おいしいピザを" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 世界で一番おいしい instead of 世界一の to express \"world's best\"",
      },
      {
        segments: [
          { text: "もし" },
          { text: "シェフになったら", blank: true },
          { text: "、世界[せかい]で一番[いちばん]おいしいピザを" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "シェフになったら", blank: true },
          { text: "、世界一[せかいいち]のピザを作[つく]って" },
          { text: "み[み]る", conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もし" },
          { text: "シェフになったら", blank: true },
          { text: "、世界一[せかいいち]のピザを作[つく]って" },
          { text: "み[み]る", conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "シェフだったら", blank: true },
          { text: "、世界一[せかいいち]のピザを" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "もしシェフだったら", blank: true },
          { text: "、世界一[せかいいち]のピザを" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If this were a dream, I wouldn't want to wake up.",
    answers: [
      {
        segments: [
          { text: "もしこれが 夢[ゆめ]だったら", blank: true },
          { text: "、起[お]きたくない" },
        ],
      },
      {
        segments: [
          { text: "これが 夢[ゆめ]だったら", blank: true },
          { text: "、起[お]きたくない" },
        ],
      },
      {
        segments: [
          { text: "もしこれが 夢[ゆめ]だったら", blank: true },
          { text: "、起[お]きたくないな" },
        ],
        notes: "Using な for a wistful feeling.",
        register: "casual",
      },
      {
        segments: [
          { text: "これが 夢[ゆめ]だったら", blank: true },
          { text: "、起[お]きたくないな" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "If you find my wallet, please call me.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 財布[さいふ]が" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]して" },
          { text: "ください" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もし" },
          { text: "私[わたし]の 財布[さいふ]が" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]して" },
          { text: "ください" },
        ],
        notes: "Added もし at the start to emphasize the hypothetical \"if\"",
      },
      {
        segments: [
          { text: "私[わたし]の 財布[さいふ]が" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]して" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もし" },
          { text: "私[わたし]の 財布[さいふ]が" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]して" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 財布[さいふ]は" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]して" },
          { text: "ください" },
        ],
        notes: "Using は instead of が for the wallet (topic-marking the wallet)",
        register: "polite",
      },
      {
        segments: [
          { text: "もし" },
          { text: "私[わたし]の 財布[さいふ]は" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]して" },
          { text: "ください" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もし" },
          { text: "私[わたし]の 財布[さいふ]が" },
          { text: "見[み]つかったら", blank: true },
          { text: "、連絡[れんらく]して" },
          { text: "ください" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "私[わたし]の 財布[さいふ]が" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]していただけませんか" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もし" },
          { text: "私[わたし]の 財布[さいふ]が" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]していただけませんか" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "財布[さいふ]が" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]して" },
          { text: "ください" },
        ],
        notes: "Dropping 私の — context makes ownership clear",
        register: "polite",
      },
      {
        segments: [
          { text: "もし" },
          { text: "財布[さいふ]が" },
          { text: "見[み]つかったら", blank: true },
          { text: "、電話[でんわ]して" },
          { text: "ください" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "私[わたし]の 財布[さいふ]が 見[み]つかったら", blank: true },
          { text: "、連絡[れんらく]してください" },
        ],
        notes: "Using 連絡する (to contact) instead of 電話する, with ください request",
        register: "polite",
      },
    ],
  },
];

import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "The test is next week, so you don't have to study today.",
    answers: [
      {
        segments: [
          { text: "テストは 来週[らいしゅう]だから、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくてもいい", blank: true },
        ],
        notes: "Base answer: テストは来週だから with なくてもいい (も included), casual ending",
      },
      {
        segments: [
          { text: "テストは 来週[らいしゅう]だから、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくていい", blank: true },
        ],
        notes: "も omitted: なくていい (casual, slightly more friendly variant)",
      },
      {
        segments: [
          { text: "テストは 来週[らいしゅう]なので、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくてもいい", blank: true },
        ],
        notes: "ので instead of だから (softer, more polite reason-giving)",
      },
      {
        segments: [
          { text: "テストは 来週[らいしゅう]なので、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくていい", blank: true },
        ],
        notes: "ので + なくていい (も omitted)",
      },
      {
        segments: [
          { text: "テストは 来週[らいしゅう]だから、今日[きょう]" },
          { text: "勉強[べんきょう]しなくてもいい", blank: true },
        ],
        notes: "は dropped before 今日 (は omitted after 今日, more casual)",
      },
      {
        segments: [
          { text: "テストが 来週[らいしゅう]だから、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくてもいい", blank: true },
        ],
        notes: "が instead of は for テストが (subject marked with が)",
      },
      {
        segments: [
          { text: "テストが 来週[らいしゅう]なので、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくてもいい", blank: true },
        ],
        notes: "テストが + ので combination",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくてもいい", blank: true },
        ],
        notes: "来週テストがある (there is a test next week) + から; different way to express the first clause",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくていい", blank: true },
        ],
        notes: "来週テストがある + から + なくていい (も omitted)",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるので、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくてもいい", blank: true },
        ],
        notes: "来週テストがある + ので + なくてもいい",
      },
      {
        segments: [
          { text: "テストは 来週[らいしゅう]なので、今日[きょう]は" },
          { text: "勉強[べんきょう]しなくてもいい", blank: true },
          { text: "です" },
        ],
        notes: "Polite ending: なくてもいいです",
      },
    ],
  },
  {
    english: "I don't have money, and I can't buy a new computer.",
    answers: [
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいコンピューターが" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Core: が with お金、が with potential 買える、コンピューター",
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいコンピューターを" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "を instead of が with potential 買える; コンピューター",
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいコンピューターが買[か]うことが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ことができない instead of potential form; が with object; コンピューター",
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいコンピューターを買[か]うことが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ことができない with を; コンピューター",
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいパソコンが" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "パソコン instead of コンピューター; が with potential",
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいパソコンを" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "パソコン with を instead of が; potential form",
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいパソコンが買[か]うことが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "パソコン + ことができない + が",
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいパソコンを買[か]うことが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "パソコン + ことができない + を",
      },
      {
        segments: [
          { text: "お金[かね]は", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいコンピューターが" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "は instead of が for お金 (topical emphasis); コンピューター; が with potential",
      },
      {
        segments: [
          { text: "お金[かね]は", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいコンピューターを" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "は instead of が; コンピューター; を with potential",
      },
      {
        segments: [
          { text: "お金[かね]は", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいパソコンが" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "は instead of が; パソコン; が with potential",
      },
      {
        segments: [
          { text: "お金[かね]は", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいパソコンを" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "は instead of が; パソコン; を with potential",
      },
      {
        segments: [
          { text: "私[わたし]はお金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいコンピューターが" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "With 私は topic; が with both; コンピューター + potential",
      },
      {
        segments: [
          { text: "私[わたし]はお金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいパソコンが" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "With 私は topic; パソコン; が with potential",
      },
      {
        segments: [
          { text: "金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいコンピューターが" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "金 (casual, no お) instead of お金; コンピューター; が with potential",
      },
      {
        segments: [
          { text: "金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、新[あたら]しいパソコンが" },
          { text: "買[か]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "金 (casual); パソコン; が with potential",
      },
    ],
  },
  {
    english: "The essay doesn't have to be long — just write what you think.",
    answers: [
      {
        segments: [
          { text: "作文[さくぶん]は 長[なが]く" },
          { text: "なくてもいい", blank: true },
          { text: "から、思[おも]うことを書[か]いて" },
        ],
        notes: "Base answer: 作文は長くなくてもいい, using から to connect, 思うことを書いて for \"write what you think\"",
      },
      {
        segments: [
          { text: "作文[さくぶん]は 長[なが]く" },
          { text: "なくてもいい", blank: true },
          { text: "。思[おも]うことを書[か]いてください" },
        ],
        notes: "Two separate sentences; second clause uses てください for \"please write\"",
      },
      {
        segments: [
          { text: "作文[さくぶん]は 長[なが]く" },
          { text: "なくてもいい", blank: true },
          { text: "。思[おも]っていることを書[か]いてください" },
        ],
        notes: "Using 思っていること (what you are thinking/your current thoughts) instead of 思うこと",
      },
      {
        segments: [
          { text: "作文[さくぶん]が 長[なが]く" },
          { text: "なくてもいい", blank: true },
          { text: "から、思[おも]うことを書[か]いて" },
        ],
        notes: "Using が instead of は for the subject particle",
      },
      {
        segments: [
          { text: "レポートは 長[なが]く" },
          { text: "なくてもいい", blank: true },
          { text: "から、思[おも]うことを書[か]いて" },
        ],
        notes: "Using レポート (report/essay) instead of 作文",
      },
      {
        segments: [
          { text: "作文[さくぶん]は 長[なが]く" },
          { text: "なくていい", blank: true },
          { text: "から、思[おも]うことを書[か]いて" },
        ],
        notes: "Omitting も (なくていい instead of なくてもいい) — slightly more casual, same nuance",
      },
      {
        segments: [
          { text: "作文[さくぶん]は 長[なが]く" },
          { text: "なくてもいい", blank: true },
          { text: "。ただ、思[おも]うことを書[か]いてください" },
        ],
        notes: "Adding ただ (just/only) for emphasis before the second clause, with てください",
      },
    ],
  },
  {
    english: "Yuki doesn't look well today — she doesn't have to come to class.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]がないから、授業[じゅぎょう]に" },
          { text: "来[こ]なくてもいい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]がないので、授業[じゅぎょう]に" },
          { text: "来[こ]なくてもいい", blank: true },
        ],
        notes: "Using ので instead of から for softer reason",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]がないから、授業[じゅぎょう]に" },
          { text: "来[こ]なくていい", blank: true },
        ],
        notes: "も omitted (なくていい — more casual nuance)",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]がないので、授業[じゅぎょう]に" },
          { text: "来[こ]なくていい", blank: true },
        ],
        notes: "ので + も omitted (なくていい)",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]じゃないから、授業[じゅぎょう]に" },
          { text: "来[こ]なくてもいい", blank: true },
        ],
        notes: "元気じゃない (not energetic/well) instead of 元気がない, with から",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]じゃないので、授業[じゅぎょう]に" },
          { text: "来[こ]なくてもいい", blank: true },
        ],
        notes: "元気じゃない with ので",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]がないから、クラスに" },
          { text: "来[こ]なくてもいい", blank: true },
        ],
        notes: "クラス instead of 授業, から",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]がないから、クラスに" },
          { text: "来[こ]なくていい", blank: true },
        ],
        notes: "クラス, も omitted (なくていい), から",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]がないから、授業[じゅぎょう]には" },
          { text: "来[こ]なくてもいい", blank: true },
        ],
        notes: "Adding は after 授業に for contrast/emphasis",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 元気[げんき]がないから、授業[じゅぎょう]には" },
          { text: "来[こ]なくていい", blank: true },
        ],
        notes: "授業には (with は emphasis) + なくていい (も omitted), から",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう] 顔[かお]が 青[あお]いから、授業[じゅぎょう]に" },
          { text: "来[こ]なくてもいい", blank: true },
        ],
        notes: "顔が青い (looks pale) as an alternative for \"doesn't look well\", から",
      },
    ],
  },
  {
    english: "Because the weather isn't warm, I don't feel like going swimming.",
    answers: [
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "暖[あたた]かくなくて", blank: true },
          { text: "、泳[およ]ぎに 行[い]く 気[き]が" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "天気[てんき]は" },
          { text: "暖[あたた]かくなくて", blank: true },
          { text: "、泳[およ]ぎに 行[い]く 気[き]が" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "は instead of が for topic marker on 天気",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "暖[あたた]かくはなくて", blank: true },
          { text: "、泳[およ]ぎに 行[い]く 気[き]が" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "暖かくはなくて — は inserted between stem and ない for emphasis",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "暖[あたた]かくなくて", blank: true },
          { text: "、泳[およ]ぐ", conjugation: { pos: "Godan verb with 'gu' ending", form: "tai-form", polarity: "negative", tense: "non-past" } },
        ],
        notes: "が on 天気; 泳ぎたくない — \"don't want to swim\" using たい negative",
      },
      {
        segments: [
          { text: "天気[てんき]は" },
          { text: "暖[あたた]かくなくて", blank: true },
          { text: "、泳[およ]ぐ", conjugation: { pos: "Godan verb with 'gu' ending", form: "tai-form", polarity: "negative", tense: "non-past" } },
        ],
        notes: "は topic on 天気; 泳ぎたくない",
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "暖[あたた]かくなくて", blank: true },
          { text: "、泳[およ]ぎに 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "negative", tense: "non-past" } },
        ],
        notes: "が on 天気; 泳ぎに行きたくない — \"don't want to go swimming\" (explicit about going)",
      },
      {
        segments: [
          { text: "天気[てんき]は" },
          { text: "暖[あたた]かくなくて", blank: true },
          { text: "、泳[およ]ぎに 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "negative", tense: "non-past" } },
        ],
        notes: "は topic on 天気; 泳ぎに行きたくない",
      },
    ],
  },
  {
    english: "Because I don't have cash, I can't pay the restaurant bill.",
    answers: [
      {
        segments: [
          { text: "現金[げんきん]が", blank: true },
          { text: "なくて" },
          { text: "、レストランの 代金[だいきん]が" },
          { text: "払[はら]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、レストランの 代金[だいきん]が" },
          { text: "払[はら]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using お金 instead of 現金 for \"cash/money\"",
      },
      {
        segments: [
          { text: "現金[げんきん]が", blank: true },
          { text: "なくて" },
          { text: "、レストランの 代金[だいきん]を" },
          { text: "払[はら]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using を instead of が with 払えない (both are natural with potential verbs)",
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、レストランの 代金[だいきん]を" },
          { text: "払[はら]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "お金 + を + 払えない",
      },
      {
        segments: [
          { text: "現金[げんきん]が", blank: true },
          { text: "なくて" },
          { text: "、レストランの 代金[だいきん]を 払[はら]う ことが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using ことができない instead of potential form 払えない; 現金 + を + 払う",
      },
      {
        segments: [
          { text: "お金[かね]が", blank: true },
          { text: "なくて" },
          { text: "、レストランの 代金[だいきん]を 払[はら]う ことが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "お金 + ことができない",
      },
      {
        segments: [
          { text: "現金[げんきん]が", blank: true },
          { text: "なくて" },
          { text: "、食堂[しょくどう]の 代[だい]が" },
          { text: "払[はら]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 食堂 (cafeteria/dining hall) instead of レストラン, and 代 (known vocab) for bill",
      },
    ],
  },
  {
    english: "You don't have to come pick me up — I can take the train.",
    answers: [
      {
        segments: [
          { text: "迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい" },
          { text: "、電車[でんしゃ]に 乗[の]れるから" },
        ],
      },
      {
        segments: [
          { text: "迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい" },
          { text: "、電車[でんしゃ]で 行[い]けるから" },
        ],
        notes: "Same structure but \"can go by train\" instead of \"can ride the train\"",
      },
      {
        segments: [
          { text: "迎[むか]えに 来[こ]", blank: true },
          { text: "なくていい" },
          { text: "、電車[でんしゃ]に 乗[の]れるから" },
        ],
        notes: "も omitted (more casual): 来なくていい",
      },
      {
        segments: [
          { text: "迎[むか]えに 来[こ]", blank: true },
          { text: "なくていい" },
          { text: "、電車[でんしゃ]で 行[い]けるから" },
        ],
        notes: "も omitted + \"can go by train\"",
      },
      {
        segments: [
          { text: "電車[でんしゃ]に 乗[の]れるから、迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい" },
        ],
        notes: "Reversed order: reason clause first, then なくてもいい",
      },
      {
        segments: [
          { text: "電車[でんしゃ]で 行[い]けるから、迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい" },
        ],
        notes: "Reversed order + \"can go by train\"",
      },
      {
        segments: [
          { text: "迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい、電車[でんしゃ]に 乗[の]れるよ" },
        ],
        notes: "With よ for assertion at the end; 乗れる plain (inside clause stays plain)",
      },
      {
        segments: [
          { text: "迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい、電車[でんしゃ]で 行[い]けるよ" },
        ],
        notes: "With よ + \"can go by train\"",
      },
      {
        segments: [
          { text: "迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい、電車[でんしゃ]に 乗[の]れるからね" },
        ],
        notes: "With ね for seeking agreement/softening",
      },
      {
        segments: [
          { text: "迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい、電車[でんしゃ]に 乗[の]ることができるから" },
        ],
        notes: "Using ことができる for \"can take the train\" instead of potential form",
      },
      {
        segments: [
          { text: "迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい、電車[でんしゃ]で 行[い]くことができるから" },
        ],
        notes: "ことができる + \"go by train\"",
      },
      {
        segments: [
          { text: "私[わたし]を 迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい、電車[でんしゃ]に 乗[の]れるから" },
        ],
        notes: "Explicit object 私を added to 迎えに来る",
      },
      {
        segments: [
          { text: "私[わたし]を 迎[むか]えに 来[こ]", blank: true },
          { text: "なくてもいい、電車[でんしゃ]で 行[い]けるから" },
        ],
        notes: "Explicit 私を + \"can go by train\"",
      },
    ],
  },
  {
    english: "Because this homework isn't interesting, I don't want to do it.",
    answers: [
      {
        segments: [
          { text: "この 宿題[しゅくだい]は" },
          { text: "面白[おもしろ]くなくて", blank: true },
          { text: "、やりたくない" },
        ],
        notes: "面白くなくて as the blank (なくて grammar point); plain text やりたくない for \"don't want to do it\"",
      },
      {
        segments: [
          { text: "この 宿題[しゅくだい]は" },
          { text: "面白[おもしろ]くなくて", blank: true },
          { text: "、したくない" },
        ],
        notes: "Same structure but using したくない (する-based) instead of やりたくない",
      },
      {
        segments: [
          { text: "この 宿題[しゅくだい]は全然[ぜんぜん]" },
          { text: "面白[おもしろ]くなくて", blank: true },
          { text: "、やりたくない" },
        ],
        notes: "Adding 全然 for emphasis \"not interesting at all\"; やりたくない",
      },
      {
        segments: [
          { text: "この 宿題[しゅくだい]は全然[ぜんぜん]" },
          { text: "面白[おもしろ]くなくて", blank: true },
          { text: "、したくない" },
        ],
        notes: "全然 + 面白くなくて + したくない",
      },
      {
        segments: [
          { text: "この 宿題[しゅくだい]はあまり" },
          { text: "面白[おもしろ]くなくて", blank: true },
          { text: "、やりたくない" },
        ],
      },
      {
        segments: [
          { text: "この 宿題[しゅくだい]はあまり" },
          { text: "面白[おもしろ]くなくて", blank: true },
          { text: "、したくない" },
        ],
        notes: "あまり + 面白くなくて + したくない",
      },
    ],
  },
  {
    english: "The bag isn't dirty, and it still looks new.",
    answers: [
      {
        segments: [
          { text: "かばんは" },
          { text: "汚[きたな]くなくて", blank: true },
          { text: "、まだ 新[あたら]しく" },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "汚い (い-adj) → 汚くなくて as blank; 見える with conjugation for polite/casual",
      },
      {
        segments: [
          { text: "かばんは" },
          { text: "汚[きたな]くなくて", blank: true },
          { text: "、まだ" },
          { text: "新[あたら]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "汚くなくて (blank) + まだ新しい with conjugation — stating it IS new rather than it looks new",
      },
      {
        segments: [
          { text: "かばんは 汚[きたな]れていなくて、まだ 新[あたら]しく", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Verb form: 汚れていなくて (hasn't gotten dirty) as blank; 見える with conjugation",
      },
      {
        segments: [
          { text: "かばんは 汚[きたな]れていなくて、まだ", blank: true },
          { text: "新[あたら]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "汚れていなくて as blank + まだ新しい with conjugation",
      },
      {
        segments: [
          { text: "かばんは" },
          { text: "汚[きたな]くなくて", blank: true },
          { text: "、まだ 新[あたら]しそう" },
          { text: "です" },
        ],
        notes: "汚くなくて (blank) + まだ新しそうです — そう suffix on い-adjective to mean \"looks new\"",
      },
      {
        segments: [
          { text: "かばんは 汚[きたな]れていなくて、まだ 新[あたら]しそう", blank: true },
          { text: "です" },
        ],
        notes: "汚れていなくて as blank + まだ新しそうです",
      },
    ],
  },
  {
    english: "I'm not hungry yet, so I don't have to eat dinner now.",
    answers: [
      {
        segments: [
          { text: "まだ おなかが すいていないから、今[いま] 晩[ばん]ご飯[はん]を" },
          { text: "食[た]べなくてもいい", blank: true },
        ],
      },
      {
        segments: [
          { text: "まだ おなかが すいていないから、今[いま] 夕[ゆう]ご飯[はん]を" },
          { text: "食[た]べなくてもいい", blank: true },
        ],
        notes: "夕ご飯 instead of 晩ご飯",
      },
      {
        segments: [
          { text: "まだ おなかが すいていないので、今[いま] 晩[ばん]ご飯[はん]を" },
          { text: "食[た]べなくてもいい", blank: true },
        ],
        notes: "ので instead of から",
      },
      {
        segments: [
          { text: "まだ おなかが すいていないから、今[いま] 晩[ばん]ご飯[はん]を" },
          { text: "食[た]べなくていい", blank: true },
        ],
        notes: "も omitted (なくていい — casual nuance)",
      },
      {
        segments: [
          { text: "まだ おなかが すいていないので、今[いま] 晩[ばん]ご飯[はん]を" },
          { text: "食[た]べなくていい", blank: true },
        ],
        notes: "ので + も omitted (なくていい)",
      },
      {
        segments: [
          { text: "まだ おなかが すいていないから、晩[ばん]ご飯[はん]を今[いま]" },
          { text: "食[た]べなくてもいい", blank: true },
        ],
        notes: "今 placed before the blank (after 晩ご飯を), different word order",
      },
      {
        segments: [
          { text: "まだ おなかが すいていないから、夕[ゆう]ご飯[はん]を今[いま]" },
          { text: "食[た]べなくてもいい", blank: true },
        ],
        notes: "夕ご飯 + 今 after object, different word order",
      },
    ],
  },
  {
    english: "I don't have a reservation, and I'm not sure we can get into the restaurant.",
    answers: [
      {
        segments: [
          { text: "予約[よやく]がなくて、レストランに" },
          { text: "入[はい]れない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "Core answer: なくて as reason/cause. 入れない = negative potential of 入る (can't get in). かもしれない = might not be able to.",
      },
      {
        segments: [
          { text: "予約[よやく]がなくて、レストランに" },
          { text: "入[はい]れる", blank: true },
          { text: "かどうかわからない" },
        ],
      },
      {
        segments: [
          { text: "予約[よやく]なくて、レストランに" },
          { text: "入[はい]れない", blank: true },
          { text: "かもしれない" },
        ],
        notes: "予約なくて (without が particle) — natural casual variation where が is dropped",
      },
      {
        segments: [
          { text: "予約[よやく]なくて、レストランに" },
          { text: "入[はい]れる", blank: true },
          { text: "かどうかわからない" },
        ],
        notes: "予約なくて (dropped が) + わからない version",
      },
      {
        segments: [
          { text: "予約[よやく]がなくて、レストランに入[はい]れるか" },
          { text: "わからない", blank: true },
        ],
      },
      {
        segments: [
          { text: "予約[よやく]がなくて、レストランに入[はい]ることができるかどうか" },
          { text: "わからない", blank: true },
        ],
        notes: "Using ことができる (can enter) instead of potential form 入れる",
      },
    ],
  },
  {
    english: "It's a casual Friday, so Kenji doesn't have to wear a tie to work.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "カジュアルフライデーだから、けんじさんは 仕事[しごと]にネクタイを" },
          { text: "しなくてもいい", blank: true },
        ],
      },
      {
        segments: [
          { text: "カジュアルフライデーだから、けんじさんは 仕事[しごと]にネクタイを" },
          { text: "しなくていい", blank: true },
        ],
        notes: "も omitted (casual variant): しなくていい instead of しなくてもいい",
      },
      {
        segments: [
          { text: "カジュアルフライデーだから、けんじさんは 会社[かいしゃ]にネクタイを" },
          { text: "しなくてもいい", blank: true },
        ],
        notes: "会社に instead of 仕事に (\"to the company\" = \"to work\")",
      },
      {
        segments: [
          { text: "カジュアルフライデーだから、けんじさんは 会社[かいしゃ]にネクタイを" },
          { text: "しなくていい", blank: true },
        ],
        notes: "会社に + も omitted (casual): しなくていい",
      },
      {
        segments: [
          { text: "カジュアルフライデーなので、けんじさんは 仕事[しごと]にネクタイを" },
          { text: "しなくてもいい", blank: true },
        ],
        notes: "ので instead of から for reason; 仕事に",
      },
      {
        segments: [
          { text: "カジュアルフライデーなので、けんじさんは 会社[かいしゃ]にネクタイを" },
          { text: "しなくてもいい", blank: true },
        ],
        notes: "ので + 会社に",
      },
      {
        segments: [
          { text: "カジュアルフライデーだから、けんじさんは 仕事[しごと]にネクタイをつけなくても" },
          { text: "いい", blank: true },
        ],
        notes: "Using つける instead of する for wearing a tie; blank on いい",
      },
      {
        segments: [
          { text: "カジュアルフライデーだから、けんじさんは 会社[かいしゃ]にネクタイをつけなくても" },
          { text: "いい", blank: true },
        ],
        notes: "つける + 会社に; blank on いい",
      },
    ],
  },
  {
    english: "I didn't sleep last night, and I'm really tired.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、寝[ね]なくて", blank: true },
          { text: "、とても" },
          { text: "疲[つか]れている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Base answer: なくて as cause/reason, とても for \"really\", ている for current state",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、寝[ね]なくて", blank: true },
          { text: "、すごく" },
          { text: "疲[つか]れている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すごく instead of とても for \"really\"",
      },
      {
        segments: [
          { text: "昨夜[さくや]、寝[ね]なくて", blank: true },
          { text: "、とても" },
          { text: "疲[つか]れている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 昨夜 (さくや) instead of 昨日の夜 for \"last night\"",
      },
      {
        segments: [
          { text: "昨夜[さくや]、寝[ね]なくて", blank: true },
          { text: "、すごく" },
          { text: "疲[つか]れている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "昨夜 + すごく combination",
      },
      {
        segments: [
          { text: "昨日[きのう]の夜[よる]は 全然[ぜんぜん] 寝[ね]なくて", blank: true },
          { text: "、とても" },
          { text: "疲[つか]れている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding 全然 to emphasize \"didn't sleep at all\"",
      },
      {
        segments: [
          { text: "昨夜[さくや]は 全然[ぜんぜん] 寝[ね]なくて", blank: true },
          { text: "、とても" },
          { text: "疲[つか]れている", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "昨夜 + 全然 + とても combination",
      },
    ],
  },
  {
    english: "This coffee isn't hot, and I don't want to drink it.",
    answers: [
      {
        segments: [
          { text: "このコーヒーは" },
          { text: "熱[あつ]くなくて", blank: true },
          { text: "、飲[の]みたくない" },
        ],
      },
      {
        segments: [
          { text: "このコーヒーが" },
          { text: "熱[あつ]くなくて", blank: true },
          { text: "、飲[の]みたくない" },
        ],
        notes: "が instead of は — subject marker vs topic marker",
      },
      {
        segments: [
          { text: "このコーヒーは" },
          { text: "熱[あつ]くはなくて", blank: true },
          { text: "、飲[の]みたくない" },
        ],
        notes: "熱くはなくて — は added for emphasis between adjective stem and ない",
      },
      {
        segments: [
          { text: "このコーヒーは" },
          { text: "熱[あつ]くなくて", blank: true },
          { text: "、飲[の]む気[き]がしない" },
        ],
        notes: "飲む気がしない — \"don't feel like drinking\" as alternative to 飲みたくない",
      },
    ],
  },
  {
    english: "I didn't have time, and I couldn't do my homework.",
    answers: [
      {
        segments: [
          { text: "時間[じかん]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、宿題[しゅくだい]ができなかった" },
        ],
      },
      {
        segments: [
          { text: "時間[じかん]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、宿題[しゅくだい]をやれなかった" },
        ],
        notes: "Using やれなかった instead of できなかった for \"couldn't do\"",
      },
      {
        segments: [
          { text: "時間[じかん]は", blank: true },
          { text: "なくて", blank: true },
          { text: "、宿題[しゅくだい]ができなかった" },
        ],
        notes: "Using は instead of が with 時間 for contrastive/topic marking",
      },
      {
        segments: [
          { text: "時間[じかん]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、宿題[しゅくだい]をすることができなかった" },
        ],
      },
      {
        segments: [
          { text: "暇[ひま]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、宿題[しゅくだい]ができなかった" },
        ],
        notes: "Using 暇 (free time) instead of 時間 for \"time\"",
      },
      {
        segments: [
          { text: "暇[ひま]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、宿題[しゅくだい]をやれなかった" },
        ],
        notes: "暇がなくて + やれなかった variant",
      },
      {
        segments: [
          { text: "時間[じかん]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、宿題[しゅくだい]をやることができなかった" },
        ],
        notes: "時間がなくて + やることができなかった (ことができる form with やる)",
      },
    ],
  },
  {
    english: "The library is free, so I don't have to withdraw any money.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]は お金[かね]が いらないから、お金[かね]を" },
          { text: "下[お]ろさなくてもいい", blank: true },
        ],
        notes: "Base answer: 図書館はお金がいらない (library doesn't need money) + から + 下ろさなくてもいい",
      },
      {
        segments: [
          { text: "図書館[としょかん]は お金[かね]が いらないので、お金[かね]を" },
          { text: "下[お]ろさなくてもいい", blank: true },
        ],
        notes: "Using ので instead of から for the reason clause",
      },
      {
        segments: [
          { text: "図書館[としょかん]は お金[かね]が かからないから、お金[かね]を" },
          { text: "下[お]ろさなくてもいい", blank: true },
        ],
        notes: "Using お金がかからない (money doesn't cost/take) instead of いらない",
      },
      {
        segments: [
          { text: "図書館[としょかん]は お金[かね]が かからないので、お金[かね]を" },
          { text: "下[お]ろさなくてもいい", blank: true },
        ],
        notes: "かからない + ので variation",
      },
      {
        segments: [
          { text: "図書館[としょかん]は タダだから、お金[かね]を" },
          { text: "下[お]ろさなくてもいい", blank: true },
        ],
      },
      {
        segments: [
          { text: "図書館[としょかん]は タダなので、お金[かね]を" },
          { text: "下[お]ろさなくてもいい", blank: true },
        ],
        notes: "タダ + ので variation",
      },
      {
        segments: [
          { text: "図書館[としょかん]は お金[かね]が いらないから、お金[かね]を" },
          { text: "下[お]ろさなくていい", blank: true },
        ],
        notes: "Dropping も from なくてもいい → なくていい (more casual)",
      },
      {
        segments: [
          { text: "図書館[としょかん]は タダだから、お金[かね]を" },
          { text: "下[お]ろさなくていい", blank: true },
        ],
        notes: "タダ + から + なくていい (dropping も, casual)",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 無料[むりょう]だから、お金[かね]を" },
          { text: "下[お]ろさなくてもいい", blank: true },
        ],
      },
      {
        segments: [
          { text: "図書館[としょかん]は 無料[むりょう]なので、お金[かね]を" },
          { text: "下[お]ろさなくてもいい", blank: true },
        ],
        notes: "無料 + ので variation",
      },
    ],
  },
  {
    english: "It's still early, so I don't have to get up yet.",
    answers: [
      {
        segments: [
          { text: "まだ 早[はや]いから、まだ" },
          { text: "起[お]きなくてもいい", blank: true },
        ],
      },
      {
        segments: [
          { text: "まだ 早[はや]いから、まだ" },
          { text: "起[お]きなくていい", blank: true },
        ],
        notes: "も omitted: 起きなくていい — slightly more casual omission of も",
      },
      {
        segments: [
          { text: "まだ 早[はや]いので、まだ" },
          { text: "起[お]きなくてもいい", blank: true },
        ],
        notes: "Using ので instead of から for the causal connector, with も",
      },
      {
        segments: [
          { text: "まだ 早[はや]いので、まだ" },
          { text: "起[お]きなくていい", blank: true },
        ],
      },
    ],
  },
  {
    english: "I don't have an umbrella, and I can't go out.",
    answers: [
      {
        segments: [
          { text: "傘[かさ]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、出[で]かけられない" },
        ],
      },
      {
        segments: [
          { text: "傘[かさ]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、出[で]かけることができない" },
        ],
        notes: "Using ことができない instead of られない for the potential negative.",
      },
      {
        segments: [
          { text: "傘[かさ]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、外[そと]に出[で]れない" },
        ],
        notes: "Using 外に出られない (can't go outside) instead of 出かけられない.",
      },
      {
        segments: [
          { text: "傘[かさ]が", blank: true },
          { text: "なくて", blank: true },
          { text: "、外[そと]に出[で]ることができない" },
        ],
        notes: "外に出ることができない — using ことができない with 外に出る.",
      },
      {
        segments: [
          { text: "傘[かさ]は", blank: true },
          { text: "なくて", blank: true },
          { text: "、出[で]かけられない" },
        ],
        notes: "Using 傘は (topic/contrast marker) instead of 傘が.",
      },
      {
        segments: [
          { text: "傘[かさ]を持[も]ってい", blank: true },
          { text: "なくて", blank: true },
          { text: "、出[で]かけられない" },
        ],
      },
      {
        segments: [
          { text: "傘[かさ]を持[も]ってい", blank: true },
          { text: "なくて", blank: true },
          { text: "、出[で]かけることができない" },
        ],
        notes: "持っていなくて + ことができない variant.",
      },
    ],
  },
  {
    english: "The room doesn't have to be perfect — it's fine even if it's not spotless.",
    answers: [
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "きれいじゃなくてもいい", blank: true },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "きれいではなくてもいい", blank: true },
        ],
        notes: "Using では instead of じゃ (more formal)",
      },
      {
        segments: [
          { text: "部屋[へや]はきれいじゃなくても" },
          { text: "いい", blank: true },
        ],
        notes: "Blank on いい only",
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "きれいじゃなくても大丈夫[だいじょうぶ]", blank: true },
        ],
        notes: "Using 大丈夫 instead of いい as the result clause",
      },
      {
        segments: [
          { text: "部屋[へや]が" },
          { text: "きれいじゃなくてもいい", blank: true },
        ],
        notes: "Using が instead of は as the topic particle",
      },
      {
        segments: [
          { text: "部屋[へや]はきれいじゃなくても" },
          { text: "大丈夫[だいじょうぶ]", blank: true },
        ],
        notes: "Blank on 大丈夫, using も before it",
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "きれいじゃなくていい", blank: true },
        ],
        notes: "Casual form dropping も (きれいじゃなくていい)",
      },
      {
        segments: [
          { text: "部屋[へや]はきれいではなくても" },
          { text: "大丈夫[だいじょうぶ]", blank: true },
        ],
        notes: "では (formal) + 大丈夫",
      },
    ],
  },
  {
    english: "The movie isn't scary, so I don't have to worry.",
    hint: "horror = ホラー",
    answers: [
    ],
  },
];

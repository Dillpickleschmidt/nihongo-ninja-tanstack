import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "If it's a horror movie, I can't watch it.",
    answers: [
      {
        segments: [
          { text: "ホラー 映画[えいが]", blank: true },
          { text: "なら、" },
          { text: "見[み]られる", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ホラー 映画[えいが]", blank: true },
          { text: "ならば、" },
          { text: "見[み]られる", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Full ならば form instead of なら",
      },
      {
        segments: [
          { text: "ホラー 映画[えいが]", blank: true },
          { text: "なら、見[み]ることが" },
          { text: "できる", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using ことができない instead of potential form",
      },
      {
        segments: [
          { text: "ホラー 映画[えいが]", blank: true },
          { text: "ならば、見[み]ることが" },
          { text: "できる", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ならば + ことができない combination",
      },
    ],
  },
  {
    english: "If you're going to buy a bag, the one at that shop is cheap and good.",
    hint: "Directed at the speaker themselves or a situation in general — not \"you\" as a direct address; use a name or rephrase if needed, but here the implied subject is fine in Japanese.",
    answers: [
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うなら", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "Base form: verb + なら, あの店 (over there), 安くていい",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うのなら", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "Verb + のなら (nominalized with の)",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うなら", blank: true },
          { text: "、その 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "その店 instead of あの店 (that shop near the listener)",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うのなら", blank: true },
          { text: "、その 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "のなら + その店",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うならば", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "ならば (full form) with あの店",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うのならば", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "のならば (nominalized + full ならば)",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うなら", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くていい" },
        ],
        notes: "Without よ at the end — neutral statement",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うなら", blank: true },
          { text: "、あのお 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "お店 (more polite/common word for shop)",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うのなら", blank: true },
          { text: "、あのお 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "のなら + お店",
      },
      {
        segments: [
          { text: "かばん" },
          { text: "なら", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "Noun + なら: \"As for bags, that shop's is cheap and good\" — topicalizing かばん directly",
      },
      {
        segments: [
          { text: "かばん" },
          { text: "なら", blank: true },
          { text: "、その 店[みせ]のが 安[やす]くていいよ" },
        ],
        notes: "Noun + なら + その店",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うなら", blank: true },
          { text: "、あの 店[みせ]のは 安[やす]くていいよ" },
        ],
        notes: "は instead of が in the result clause",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うなら", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くていいですよ" },
        ],
        register: "polite",
        notes: "Polite ending いいですよ",
      },
      {
        segments: [
          { text: "かばんを" },
          { text: "買[か]うなら", blank: true },
          { text: "、その 店[みせ]のが 安[やす]くていいですよ" },
        ],
        register: "polite",
        notes: "Polite いいですよ + その店",
      },
    ],
  },
  {
    english: "If you're going to study, the library is quiet and good.",
    answers: [
      {
        segments: [
          { text: "勉強[べんきょう]する" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かで いいよ" },
        ],
      },
      {
        segments: [
          { text: "勉強[べんきょう]するの" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かで いいよ" },
        ],
        notes: "Verb + の + なら (nominalized form)",
      },
      {
        segments: [
          { text: "勉強[べんきょう]する" },
          { text: "ならば", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かで いいよ" },
        ],
        notes: "ならば (full conditional form) instead of なら",
      },
      {
        segments: [
          { text: "勉強[べんきょう]するの" },
          { text: "ならば", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かで いいよ" },
        ],
        notes: "Verb + のならば (nominalized + full ならば)",
      },
      {
        segments: [
          { text: "勉強[べんきょう]する" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]が 静[しず]かで いいよ" },
        ],
        notes: "が instead of は for 図書館 (emphasis on library specifically)",
      },
      {
        segments: [
          { text: "勉強[べんきょう]するの" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]が 静[しず]かで いいよ" },
        ],
        notes: "の + なら, が instead of は",
      },
      {
        segments: [
          { text: "勉強[べんきょう]する" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かで いい" },
        ],
        notes: "Without よ at the end",
      },
      {
        segments: [
          { text: "勉強[べんきょう]するの" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かで いい" },
        ],
        notes: "の + なら, without よ",
      },
      {
        segments: [
          { text: "勉強[べんきょう]する" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かでいいじゃない" },
        ],
      },
      {
        segments: [
          { text: "勉強[べんきょう]するの" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かでいいじゃない" },
        ],
        notes: "の + なら, じゃない ending",
      },
      {
        segments: [
          { text: "勉強[べんきょう]する" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かでいいね" },
        ],
        notes: "ね instead of よ at the end (seeking agreement)",
      },
      {
        segments: [
          { text: "勉強[べんきょう]するの" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かでいいね" },
        ],
        notes: "の + なら, ね ending",
      },
      {
        segments: [
          { text: "勉強[べんきょう]する" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かでいいですよ" },
        ],
        register: "polite",
        notes: "Polite ending いいですよ",
      },
      {
        segments: [
          { text: "勉強[べんきょう]する" },
          { text: "なら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かでいいです" },
        ],
        register: "polite",
        notes: "Polite ending いいです (no よ)",
      },
    ],
  },
  {
    english: "If it's the weekend, I can come.",
    answers: [
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "なら、" },
          { text: "来[こ]られる", conjugation: { pos: "Kuru verb - special class", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "週末[しゅうまつ]" },
          { text: "ならば", blank: true },
          { text: "、" },
          { text: "来[こ]られる", conjugation: { pos: "Kuru verb - special class", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun + ならば (full ならば form)",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]" },
          { text: "なら", blank: true },
          { text: "、来[こ]ることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ことができる instead of potential form for \"can come\"",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]" },
          { text: "ならば", blank: true },
          { text: "、来[こ]ることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ならば + ことができる",
      },
    ],
  },
  {
    english: "If it's cooking, Kenji is the best in the family.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "料理[りょうり]なら、けんじさんは 家族[かぞく]の 中[なか]で 一番[いちばん]", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "料理[りょうり]なら、けんじさんが 家族[かぞく]の 中[なか]で 一番[いちばん]", blank: true },
          { text: "です" },
        ],
        notes: "が instead of は for けんじさん",
      },
      {
        segments: [
          { text: "料理[りょうり]なら、家族[かぞく]の 中[なか]で 一番[いちばん]なのは けんじさん", blank: true },
          { text: "です" },
        ],
        notes: "Reversed subject: \"the best one in the family is Kenji\" — のは + noun + です",
      },
      {
        segments: [
          { text: "料理[りょうり]ならば、けんじさんは 家族[かぞく]の 中[なか]で 一番[いちばん]", blank: true },
          { text: "です" },
        ],
        notes: "ならば (full form) instead of なら",
      },
      {
        segments: [
          { text: "料理[りょうり]なら、けんじさんは 家族[かぞく]一番[いちばん]", blank: true },
          { text: "です" },
        ],
        notes: "Without の中で (just 家族一番)",
      },
      {
        segments: [
          { text: "料理[りょうり]のことなら、けんじさんは 家族[かぞく]の 中[なか]で 一番[いちばん]", blank: true },
          { text: "です" },
        ],
        notes: "料理のことなら — \"if it's about/regarding cooking\"",
      },
      {
        segments: [
          { text: "料理[りょうり]のことなら、けんじさんが 家族[かぞく]の 中[なか]で 一番[いちばん]", blank: true },
          { text: "です" },
        ],
        notes: "料理のことなら + が instead of は",
      },
      {
        segments: [
          { text: "料理[りょうり]なら、家族[かぞく]のなかでけんじさんが 一番[いちばん]", blank: true },
          { text: "です" },
        ],
        notes: "Topic moved: 家族の中でけんじさんが一番 — family-scope comes before Kenji",
      },
      {
        segments: [
          { text: "料理[りょうり]なら、けんじさんは 家族[かぞく]の 中[なか]で 一番[いちばん] 上手[じょうず]", blank: true },
          { text: "です" },
        ],
        notes: "一番上手 — \"best/most skilled\" — more specific expression of \"best\"",
      },
      {
        segments: [
          { text: "料理[りょうり]なら、けんじさんが 家族[かぞく]の 中[なか]で 一番[いちばん] 上手[じょうず]", blank: true },
          { text: "です" },
        ],
        notes: "一番上手 + が instead of は",
      },
    ],
  },
  {
    english: "If your stomach hurts, you should rest and not go to work today.",
    answers: [
      {
        segments: [
          { text: "おなかが 痛[いた]い", blank: true },
          { text: "なら、今日[きょう]は 仕事[しごと]に 行[い]かないで 休[やす]んだほうがいい" },
        ],
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いの", blank: true },
          { text: "なら、今日[きょう]は 仕事[しごと]に 行[い]かないで 休[やす]んだほうがいい" },
        ],
      },
      {
        segments: [
          { text: "おなかが 痛[いた]い", blank: true },
          { text: "なら、今日[きょう]は 休[やす]んだほうがいいし、仕事[しごと]に 行[い]かないほうがいい" },
        ],
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いの", blank: true },
          { text: "なら、今日[きょう]は 休[やす]んだほうがいいし、仕事[しごと]に 行[い]かないほうがいい" },
        ],
        notes: "のなら with し～し listing both pieces of advice",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]い", blank: true },
          { text: "なら、今日[きょう]は 休[やす]んで 会社[かいしゃ]に 行[い]かないほうがいい" },
        ],
        notes: "Using 会社 instead of 仕事; ないほうがいい for the main advice; 休んで connects the two actions",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いの", blank: true },
          { text: "なら、今日[きょう]は 休[やす]んで 会社[かいしゃ]に 行[い]かないほうがいい" },
        ],
        notes: "のなら with 会社; rest then not go to company",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いならば、今日[きょう]は 仕事[しごと]に 行[い]かないで", blank: true },
          { text: "休[やす]んだほうがいい" },
        ],
        notes: "Using ならば (full form) instead of なら — blank covers the condition clause with ならば",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]い", blank: true },
          { text: "なら、今日[きょう]は 仕事[しごと]に 行[い]かないで 休[やす]んだほうがいいよ" },
        ],
        notes: "Adding よ at the end for emphasis/advice tone, which is natural in Japanese",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いの", blank: true },
          { text: "なら、今日[きょう]は 仕事[しごと]に 行[い]かないで 休[やす]んだほうがいいよ" },
        ],
        notes: "のなら + よ at the end",
      },
    ],
  },
  {
    english: "If it's guitar, Kenji can teach you.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "ギター", blank: true },
          { text: "なら、けんじさんが" },
          { text: "教[おし]える", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ギター", blank: true },
          { text: "ならば、けんじさんが" },
          { text: "教[おし]える", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ならば (full form) instead of なら",
      },
      {
        segments: [
          { text: "ギター", blank: true },
          { text: "なら、けんじさんは" },
          { text: "教[おし]える", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "けんじさんは (は instead of が) as topic/subject",
      },
      {
        segments: [
          { text: "ギター", blank: true },
          { text: "ならば、けんじさんは" },
          { text: "教[おし]える", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ならば + は instead of が",
      },
      {
        segments: [
          { text: "ギター", blank: true },
          { text: "なら、けんじさんが教[おし]えることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる instead of potential form; が subject",
      },
      {
        segments: [
          { text: "ギター", blank: true },
          { text: "なら、けんじさんは教[おし]えることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる; は as topic marker for けんじさん",
      },
      {
        segments: [
          { text: "ギター", blank: true },
          { text: "なら、けんじさんに教[おし]えてもらえる" },
        ],
        notes: "けんじさんに教えてもらえる — \"you can have Kenji teach you\" (receiving teaching from Kenji); alternative phrasing of same meaning",
      },
      {
        segments: [
          { text: "ギター", blank: true },
          { text: "ならば、けんじさんに教[おし]えてもらえる" },
        ],
        notes: "ならば + けんじさんに教えてもらえる",
      },
    ],
  },
  {
    english: "If Hana is free on Saturday, let's all go to karaoke together.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんが 土曜日[どようび]に 暇[ひま]", blank: true },
          { text: "なら、みんなで カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "はなさんが 土曜日[どようび]に 暇[ひま]", blank: true },
          { text: "ならば、みんなで カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ならば instead of なら",
      },
      {
        segments: [
          { text: "土曜日[どようび]に はなさんが 暇[ひま]", blank: true },
          { text: "なら、みんなで カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "土曜日に moved to the front of the clause",
      },
      {
        segments: [
          { text: "はなさんが 土曜日[どようび]に 暇[ひま]", blank: true },
          { text: "なら、みんなで 一緒[いっしょ]に カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding 一緒に for \"together\" alongside みんなで",
      },
      {
        segments: [
          { text: "はなさんは 土曜日[どようび]に 暇[ひま]", blank: true },
          { text: "なら、みんなで カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "は instead of が for はなさん (topic marker)",
      },
    ],
  },
  {
    english: "If you're going to sell the car, I want to buy it.",
    answers: [
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "なら", blank: true },
          { text: "、私[わたし]が買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "のなら", blank: true },
          { text: "、私[わたし]が買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With の nominalization: verb + のなら",
      },
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "ならば", blank: true },
          { text: "、私[わたし]が買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Full ならば form instead of なら",
      },
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "のならば", blank: true },
          { text: "、私[わたし]が買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With の nominalization + full ならば",
      },
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "なら", blank: true },
          { text: "、買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject dropped (more natural casual speech), verb + なら",
      },
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "のなら", blank: true },
          { text: "、買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject dropped, verb + のなら",
      },
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "ならば", blank: true },
          { text: "、買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject dropped, full ならば",
      },
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "のならば", blank: true },
          { text: "、買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject dropped, のならば",
      },
      {
        segments: [
          { text: "その車[くるま]を売[う]る" },
          { text: "なら", blank: true },
          { text: "、買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "その車 (that car) instead of 車, subject dropped",
      },
      {
        segments: [
          { text: "その車[くるま]を売[う]る" },
          { text: "のなら", blank: true },
          { text: "、買[か]い" },
          { text: "たい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "その車, のなら, subject dropped",
      },
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "なら", blank: true },
          { text: "、買[か]いたいんだけど" },
        ],
      },
      {
        segments: [
          { text: "車[くるま]を売[う]る" },
          { text: "のなら", blank: true },
          { text: "、買[か]いたいんだけど" },
        ],
        notes: "のなら + んだけど softener",
      },
    ],
  },
  {
    english: "If you're free tomorrow, can you help me with this homework?",
    answers: [
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]なら、この 宿題[しゅくだい]を 手伝[てつだ]ってもらえる", blank: true },
          { text: "？" },
        ],
      },
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]なのなら、この 宿題[しゅくだい]を 手伝[てつだ]ってもらえる", blank: true },
          { text: "？" },
        ],
      },
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]ならば、この 宿題[しゅくだい]を 手伝[てつだ]ってもらえる", blank: true },
          { text: "？" },
        ],
        notes: "Using ならば (full form) instead of なら",
      },
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]なら、この 宿題[しゅくだい]を 手伝[てつだ]ってくれる", blank: true },
          { text: "？" },
        ],
        notes: "Using てくれる instead of てもらえる — asking if they will help (different request phrasing)",
      },
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]なのなら、この 宿題[しゅくだい]を 手伝[てつだ]ってくれる", blank: true },
          { text: "？" },
        ],
        notes: "の+なら with てくれる",
      },
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]なら、この 宿題[しゅくだい]を 手伝[てつだ]うことができる", blank: true },
          { text: "？" },
        ],
        notes: "Using ことができる for \"can help\" instead of potential form",
      },
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]なら、この 宿題[しゅくだい]、手伝[てつだ]ってもらえる", blank: true },
          { text: "？" },
        ],
        notes: "この宿題 without を (topic-dropped), more casual phrasing",
      },
      {
        segments: [
          { text: "たろうさんは 明日[あした] 暇[ひま]なら、この 宿題[しゅくだい]を 手伝[てつだ]ってもらえる", blank: true },
          { text: "？" },
        ],
        notes: "Using は instead of が for たろうさん as topic",
      },
      {
        segments: [
          { text: "たろうさんは 明日[あした] 暇[ひま]なら、この 宿題[しゅくだい]を 手伝[てつだ]ってくれる", blank: true },
          { text: "？" },
        ],
        notes: "は topic marker + てくれる",
      },
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]なのならば、この 宿題[しゅくだい]を 手伝[てつだ]ってもらえる", blank: true },
          { text: "？" },
        ],
        notes: "の+ならば (nominalized + full conditional form)",
      },
      {
        segments: [
          { text: "この 宿題[しゅくだい]、たろうさんが 明日[あした] 暇[ひま]なら 手伝[てつだ]ってもらえる", blank: true },
          { text: "？" },
        ],
        notes: "Topic-fronted: この宿題 first, then condition clause",
      },
    ],
  },
  {
    english: "If it hurts, you should go to the hospital.",
    answers: [
      {
        segments: [
          { text: "痛[いた]い", blank: true },
          { text: "なら、病院[びょういん]に 行[い]ったほうがいい" },
        ],
      },
      {
        segments: [
          { text: "痛[いた]いの", blank: true },
          { text: "なら、病院[びょういん]に 行[い]ったほうがいい" },
        ],
      },
      {
        segments: [
          { text: "痛[いた]い", blank: true },
          { text: "ならば、病院[びょういん]に 行[い]ったほうがいい" },
        ],
        notes: "Using ならば (fuller form) instead of なら",
      },
      {
        segments: [
          { text: "痛[いた]いの", blank: true },
          { text: "ならば、病院[びょういん]に 行[い]ったほうがいい" },
        ],
      },
      {
        segments: [
          { text: "痛[いた]い", blank: true },
          { text: "なら、病院[びょういん]に 行[い]ったほうがいいよ" },
        ],
        notes: "Adding よ particle to soften/emphasize the advice",
      },
      {
        segments: [
          { text: "痛[いた]いの", blank: true },
          { text: "なら、病院[びょういん]に 行[い]ったほうがいいよ" },
        ],
        notes: "のなら + よ particle",
      },
    ],
  },
  {
    english: "If you have a peanut allergy, it's better not to eat that cake.",
    hint: "allergy = アレルギー",
    answers: [
      {
        segments: [
          { text: "ピーナッツアレルギーがあるなら", blank: true },
          { text: "、そのケーキは食[た]べないほうがいい" },
        ],
        notes: "Base: ピーナッツアレルギーがあるなら (verb+なら), そのケーキ, 食べないほうがいい",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるのなら", blank: true },
          { text: "、そのケーキは食[た]べないほうがいい" },
        ],
        notes: "With の nominalization: あるのなら",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるならば", blank: true },
          { text: "、そのケーキは食[た]べないほうがいい" },
        ],
        notes: "With ならば form: あるならば",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるのならば", blank: true },
          { text: "、そのケーキは食[た]べないほうがいい" },
        ],
        notes: "の + ならば: あるのならば",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーなら", blank: true },
          { text: "、そのケーキは食[た]べないほうがいい" },
        ],
        notes: "Noun+なら: ピーナッツアレルギーなら (treating the allergy noun directly)",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーならば", blank: true },
          { text: "、そのケーキは食[た]べないほうがいい" },
        ],
        notes: "Noun+ならば: ピーナッツアレルギーならば",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるなら", blank: true },
          { text: "、あのケーキは食[た]べないほうがいい" },
        ],
        notes: "あのケーキ instead of そのケーキ",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるのなら", blank: true },
          { text: "、あのケーキは食[た]べないほうがいい" },
        ],
        notes: "あるのなら + あのケーキ",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーなら", blank: true },
          { text: "、あのケーキは食[た]べないほうがいい" },
        ],
        notes: "Noun+なら + あのケーキ",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるなら", blank: true },
          { text: "、そのケーキを食[た]べないほうがいい" },
        ],
        notes: "そのケーキを (を particle instead of は)",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるのなら", blank: true },
          { text: "、そのケーキを食[た]べないほうがいい" },
        ],
        notes: "あるのなら + そのケーキを",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーなら", blank: true },
          { text: "、そのケーキを食[た]べないほうがいい" },
        ],
        notes: "Noun+なら + そのケーキを",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるなら", blank: true },
          { text: "、あのケーキを食[た]べないほうがいい" },
        ],
        notes: "あるなら + あのケーキを",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーなら", blank: true },
          { text: "、あのケーキを食[た]べないほうがいい" },
        ],
        notes: "Noun+なら + あのケーキを",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるならば", blank: true },
          { text: "、そのケーキを食[た]べないほうがいい" },
        ],
        notes: "あるならば + そのケーキを",
      },
    ],
  },
  {
    english: "If it's sushi, Tsukiji is the most famous in the world.",
    hint: "Tsukiji = つきじ",
    answers: [
      {
        segments: [
          { text: "寿司[すし]", blank: true },
          { text: "なら、つきじが 世界[せかい]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
      },
      {
        segments: [
          { text: "寿司[すし]", blank: true },
          { text: "なら、つきじは 世界[せかい]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
        notes: "は instead of が for Tsukiji as topic",
      },
      {
        segments: [
          { text: "お寿司[すし]", blank: true },
          { text: "なら、つきじが 世界[せかい]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
        notes: "Honorific お寿司 with が",
      },
      {
        segments: [
          { text: "お寿司[すし]", blank: true },
          { text: "なら、つきじは 世界[せかい]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
        notes: "Honorific お寿司 with は",
      },
      {
        segments: [
          { text: "寿司[すし]", blank: true },
          { text: "ならば、つきじが 世界[せかい]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
        notes: "ならば (full form) with が",
      },
      {
        segments: [
          { text: "寿司[すし]", blank: true },
          { text: "ならば、つきじは 世界[せかい]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
        notes: "ならば (full form) with は",
      },
      {
        segments: [
          { text: "寿司[すし]", blank: true },
          { text: "なら、つきじが 世界中[せかいじゅう]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
        notes: "世界中で (throughout the world) instead of 世界で, with が",
      },
      {
        segments: [
          { text: "寿司[すし]", blank: true },
          { text: "なら、つきじは 世界中[せかいじゅう]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
        notes: "世界中で with は",
      },
      {
        segments: [
          { text: "寿司[すし]", blank: true },
          { text: "なら、つきじが 世界[せかい]の 中[なか]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
        notes: "世界の中で (in the world) phrasing, が marks Tsukiji",
      },
      {
        segments: [
          { text: "寿司[すし]", blank: true },
          { text: "なら、つきじは 世界[せかい]の 中[なか]で 一番[いちばん] 有名[ゆうめい]です" },
        ],
        notes: "世界の中で with は",
      },
    ],
  },
  {
    english: "If it's Kyoto, the Shinkansen is the most convenient.",
    hint: "Kyoto = きょうと, Shinkansen = しんかんせん",
    answers: [
      {
        segments: [
          { text: "きょうと" },
          { text: "なら", blank: true },
          { text: "、 新幹線[しんかんせん]が 一番[いちばん] 便利[べんり]です" },
        ],
      },
      {
        segments: [
          { text: "きょうと" },
          { text: "ならば", blank: true },
          { text: "、 新幹線[しんかんせん]が 一番[いちばん] 便利[べんり]です" },
        ],
        notes: "ならば form instead of なら",
      },
      {
        segments: [
          { text: "きょうと" },
          { text: "なら", blank: true },
          { text: "、 新幹線[しんかんせん]は 一番[いちばん] 便利[べんり]です" },
        ],
        notes: "は instead of が for 新幹線 (topic emphasis)",
      },
      {
        segments: [
          { text: "きょうと" },
          { text: "ならば", blank: true },
          { text: "、 新幹線[しんかんせん]は 一番[いちばん] 便利[べんり]です" },
        ],
        notes: "ならば + は for 新幹線",
      },
      {
        segments: [
          { text: "きょうと" },
          { text: "なら", blank: true },
          { text: "、 新幹線[しんかんせん]が 一番[いちばん]" },
          { text: "いい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 一番いい (best) instead of 一番便利, が particle",
      },
      {
        segments: [
          { text: "きょうと" },
          { text: "なら", blank: true },
          { text: "、 新幹線[しんかんせん]は 一番[いちばん]" },
          { text: "いい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If you're sleepy, you should sleep instead of studying.",
    answers: [
      {
        segments: [
          { text: "眠[ねむ]い", blank: true },
          { text: "なら、勉強[べんきょう]しないで 寝[ね]たほうがいい" },
        ],
        notes: "Core answer: 眠い (plain text, no conjugation) + なら + ないで + たほうがいい",
      },
      {
        segments: [
          { text: "眠[ねむ]いの", blank: true },
          { text: "なら、勉強[べんきょう]しないで 寝[ね]たほうがいい" },
        ],
        notes: "With の nominalization before なら",
      },
      {
        segments: [
          { text: "眠[ねむ]い", blank: true },
          { text: "ならば、勉強[べんきょう]しないで 寝[ね]たほうがいい" },
        ],
        notes: "Using ならば (full form) instead of なら",
      },
      {
        segments: [
          { text: "眠[ねむ]いの", blank: true },
          { text: "ならば、勉強[べんきょう]しないで 寝[ね]たほうがいい" },
        ],
        notes: "With の nominalization + ならば (full form)",
      },
    ],
  },
  {
    english: "If it's karate, I practiced for three years, so I can teach you.",
    answers: [
      {
        segments: [
          { text: "空手[からて]", blank: true },
          { text: "なら、三年[さんねん]練習[れんしゅう]したから、教[おし]えられる" },
        ],
        notes: "Base answer: noun + なら, 三年, potential 教えられる",
      },
      {
        segments: [
          { text: "空手[からて]", blank: true },
          { text: "なら、三年間[さんねんかん]練習[れんしゅう]したから、教[おし]えられる" },
        ],
        notes: "Using 三年間 (three-year period) instead of 三年",
      },
      {
        segments: [
          { text: "空手[からて]", blank: true },
          { text: "なら、三年[さんねん]練習[れんしゅう]したから、教[おし]えることができる" },
        ],
        notes: "Using ことができる for potential instead of られる",
      },
      {
        segments: [
          { text: "空手[からて]", blank: true },
          { text: "なら、三年間[さんねんかん]練習[れんしゅう]したから、教[おし]えることができる" },
        ],
        notes: "三年間 + ことができる",
      },
      {
        segments: [
          { text: "空手[からて]", blank: true },
          { text: "なら、三年[さんねん]練習[れんしゅう]したから、あなたに教[おし]えられる" },
        ],
        notes: "Explicit あなたに — \"can teach you\"",
      },
      {
        segments: [
          { text: "空手[からて]", blank: true },
          { text: "なら、三年間[さんねんかん]練習[れんしゅう]したから、あなたに教[おし]えられる" },
        ],
        notes: "三年間 + あなたに + 教えられる",
      },
      {
        segments: [
          { text: "空手[からて]", blank: true },
          { text: "なら、三年[さんねん]練習[れんしゅう]したから、あなたに教[おし]えることができる" },
        ],
        notes: "あなたに + ことができる",
      },
      {
        segments: [
          { text: "空手[からて]", blank: true },
          { text: "なら、三年間[さんねんかん]練習[れんしゅう]したから、あなたに教[おし]えることができる" },
        ],
        notes: "三年間 + あなたに + ことができる",
      },
      {
        segments: [
          { text: "空手[からて]" },
          { text: "ならば", blank: true },
          { text: "、三年[さんねん]練習[れんしゅう]したから、教[おし]えられる" },
        ],
        notes: "ならば (full form) instead of なら",
      },
    ],
  },
  {
    english: "If it's coffee, I can drink it every day.",
    answers: [
      {
        segments: [
          { text: "コーヒー" },
          { text: "なら", blank: true },
          { text: "、毎日[まいにち]" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "コーヒー" },
          { text: "ならば", blank: true },
          { text: "、毎日[まいにち]" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ならば (full form) instead of なら",
      },
      {
        segments: [
          { text: "コーヒーなら" },
          { text: "、毎日[まいにち]飲[の]" },
          { text: "むことができる", blank: true },
        ],
        notes: "Using ことができる for potential instead of potential verb form",
      },
      {
        segments: [
          { text: "コーヒーならば" },
          { text: "、毎日[まいにち]飲[の]" },
          { text: "むことができる", blank: true },
        ],
        notes: "ならば + ことができる",
      },
      {
        segments: [
          { text: "コーヒー" },
          { text: "なら", blank: true },
          { text: "、毎日[まいにち]でも" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding でも (even every day) for natural emphasis",
      },
      {
        segments: [
          { text: "コーヒー" },
          { text: "ならば", blank: true },
          { text: "、毎日[まいにち]でも" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ならば + でも",
      },
    ],
  },
  {
    english: "If you're good at English, you can work anywhere in the world.",
    answers: [
      {
        segments: [
          { text: "英語[えいご]が 上手[じょうず]なら", blank: true },
          { text: "、世界[せかい]のどこでも 仕事[しごと]ができる" },
        ],
        notes: "仕事ができる instead of 働ける",
      },
      {
        segments: [
          { text: "英語[えいご]が 得意[とくい]なら", blank: true },
          { text: "、世界[せかい]のどこでも 仕事[しごと]ができる" },
        ],
        notes: "得意 + なら, 仕事ができる",
      },
      {
        segments: [
          { text: "英語[えいご]が" },
          { text: "上手[じょうず]", blank: true },
          { text: "なら、世界[せかい]のどこでも" },
          { text: "働[はたら]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Base form: 上手 + なら, 世界のどこでも働ける",
      },
      {
        segments: [
          { text: "英語[えいご]が" },
          { text: "上手[じょうず]", blank: true },
          { text: "ならば、世界[せかい]のどこでも" },
          { text: "働[はたら]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ならば instead of なら",
      },
      {
        segments: [
          { text: "英語[えいご]が" },
          { text: "上手[じょうず]なのなら", blank: true },
          { text: "、世界[せかい]のどこでも" },
          { text: "働[はたら]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "のなら (nominalized with の) instead of なら",
      },
      {
        segments: [
          { text: "英語[えいご]が" },
          { text: "得意[とくい]", blank: true },
          { text: "なら、世界[せかい]のどこでも" },
          { text: "働[はたら]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "得意 instead of 上手",
      },
      {
        segments: [
          { text: "英語[えいご]が" },
          { text: "得意[とくい]", blank: true },
          { text: "ならば、世界[せかい]のどこでも" },
          { text: "働[はたら]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "得意 + ならば",
      },
      {
        segments: [
          { text: "英語[えいご]が" },
          { text: "得意[とくい]なのなら", blank: true },
          { text: "、世界[せかい]のどこでも" },
          { text: "働[はたら]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "得意 + のなら",
      },
      {
        segments: [
          { text: "英語[えいご]が" },
          { text: "上手[じょうず]", blank: true },
          { text: "なら、世界中[せかいじゅう]のどこでも" },
          { text: "働[はたら]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "世界中のどこでも instead of 世界のどこでも",
      },
      {
        segments: [
          { text: "英語[えいご]が" },
          { text: "得意[とくい]", blank: true },
          { text: "なら、世界中[せかいじゅう]のどこでも" },
          { text: "働[はたら]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "得意 + なら, 世界中のどこでも",
      },
    ],
  },
  {
    english: "If Yuki is going to travel abroad, it would be better to study a foreign language.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんが 海外旅行[かいがいりょこう]する" },
          { text: "なら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]した ほうがいい" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんが 海外旅行[かいがいりょこう]する" },
          { text: "のなら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]した ほうがいい" },
        ],
        notes: "Verb + のなら (nominalized form)",
      },
      {
        segments: [
          { text: "ゆきさんが 外国[がいこく]に 旅行[りょこう]する" },
          { text: "なら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]した ほうがいい" },
        ],
        notes: "外国に旅行する instead of 海外旅行する for \"travel abroad\"",
      },
      {
        segments: [
          { text: "ゆきさんが 外国[がいこく]に 旅行[りょこう]する" },
          { text: "のなら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]した ほうがいい" },
        ],
        notes: "外国に旅行する + のなら",
      },
      {
        segments: [
          { text: "ゆきさんが 海外[かいがい]に 行[い]く" },
          { text: "なら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]した ほうがいい" },
        ],
        notes: "海外に行く (going abroad) instead of 海外旅行する",
      },
      {
        segments: [
          { text: "ゆきさんが 海外[かいがい]に 行[い]く" },
          { text: "のなら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]した ほうがいい" },
        ],
        notes: "海外に行く + のなら",
      },
      {
        segments: [
          { text: "ゆきさんが 海外旅行[かいがいりょこう]する" },
          { text: "なら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]するのがいい" },
        ],
        notes: "Result clause uses のがいい instead of したほうがいい",
      },
      {
        segments: [
          { text: "ゆきさんが 海外旅行[かいがいりょこう]をする" },
          { text: "なら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]した ほうがいい" },
        ],
        notes: "海外旅行をする with を particle (slightly more formal/emphatic)",
      },
      {
        segments: [
          { text: "ゆきさんが 海外旅行[かいがいりょこう]をする" },
          { text: "のなら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]した ほうがいい" },
        ],
        notes: "海外旅行をする + のなら",
      },
    ],
  },
  {
    english: "If you're free, can you come to the party with me?",
    answers: [
      {
        segments: [
          { text: "暇[ひま]なら", blank: true },
          { text: "、私[わたし]と 一緒[いっしょ]に パーティーに 来[こ]られる" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "暇[ひま]なのなら", blank: true },
          { text: "、私[わたし]と 一緒[いっしょ]に パーティーに 来[こ]られる" },
          { text: "か" },
        ],
        notes: "Nominalized form: 暇なのなら (の added for nominalization)",
      },
      {
        segments: [
          { text: "暇[ひま]なら", blank: true },
          { text: "、私[わたし]と 一緒[いっしょ]に パーティーに 来[こ]る ことができる" },
          { text: "か" },
        ],
        notes: "Using ことができる instead of potential form",
      },
      {
        segments: [
          { text: "暇[ひま]なら", blank: true },
          { text: "、私[わたし]と パーティーに 来[こ]られる" },
          { text: "か" },
        ],
        notes: "Dropping 一緒に — \"with me\" implied by と私",
      },
      {
        segments: [
          { text: "暇[ひま]なら", blank: true },
          { text: "、 一緒[いっしょ]に パーティーに 来[こ]られる" },
          { text: "か" },
        ],
        notes: "Dropping 私と — \"with me\" understood from context",
      },
      {
        segments: [
          { text: "暇[ひま]なのなら", blank: true },
          { text: "、私[わたし]と パーティーに 来[こ]られる" },
          { text: "か" },
        ],
        notes: "Nominalized form (のなら) + dropping 一緒に",
      },
      {
        segments: [
          { text: "暇[ひま]ならば", blank: true },
          { text: "、私[わたし]と 一緒[いっしょ]に パーティーに 来[こ]られる" },
          { text: "か" },
        ],
        notes: "Using ならば (full form) instead of なら",
      },
      {
        segments: [
          { text: "暇[ひま]なら", blank: true },
          { text: "、私[わたし]と 一緒[いっしょ]に パーティーに 来[き]てくれる" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "暇[ひま]なのなら", blank: true },
          { text: "、私[わたし]と 一緒[いっしょ]に パーティーに 来[き]てくれる" },
          { text: "か" },
        ],
        notes: "のなら + てくれる combination",
      },
    ],
  },
];

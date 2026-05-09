import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I want that red bicycle over there for getting to my morning class.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]の 授業[じゅぎょう]に 行[い]く ために、あそこの 赤[あか]い 自転車[じてんしゃ]が " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with あそこの for “over there”; adds a concrete reason for wanting the bicycle.",
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]の 授業[じゅぎょう]に 行[い]く ために、あの 赤[あか]い 自転車[じてんしゃ]が " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あの for a bicycle away from the speaker; includes the morning-class commute context.",
      },
    ],
  },
  {
    english: "I want a bigger desk for this room.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は この 部屋[へや]に もっと 大[おお]きい 机[つくえ]が " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with この部屋に for where the desk is wanted.",
      },
      {
        segments: [
          { text: "私[わたし]は この 部屋[へや]の ために もっと 大[おお]きい 机[つくえ]が " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using のために to mean “for this room”.",
      },
    ],
  },
  {
    english: "For the barbecue this weekend, I want three bags of onions and potatoes.",
    hint: "barbecue = バーベキュー",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]の バーベキューに、三袋[さんふくろ]の たまねぎと じゃがいもが " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic version with 三袋の before both items.",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]の バーベキューで、三袋[さんふくろ]の たまねぎと じゃがいもが " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses で to mean for/at the barbecue context.",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の バーベキューに、私[わたし]は 三袋[さんふくろ]の たまねぎと じゃがいもが " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order: occasion first, then subject.",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の バーベキューで、私[わたし]は 三袋[さんふくろ]の たまねぎと じゃがいもが " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Occasion first with で instead of に.",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]の バーベキューに、たまねぎと じゃがいも 三袋[さんふくろ]が " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural counter placement after the listed items, with がほしい contiguous.",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]の バーベキューで、たまねぎと じゃがいも 三袋[さんふくろ]が " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Counter after the items; uses で for the barbecue context.",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]の バーベキューに、たまねぎ 三袋[さんふくろ]と じゃがいも 三袋[さんふくろ]が " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies three bags each of onions and potatoes.",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]の バーベキューで、たまねぎ 三袋[さんふくろ]と じゃがいも 三袋[さんふくろ]が " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies three bags each; uses で.",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]、バーベキューに 三袋[さんふくろ]の たまねぎと じゃがいもが " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Treats 今週末 as the time adverb, not modifying バーベキュー.",
      },
      {
        segments: [
          { text: "私[わたし]は 今週末[こんしゅうまつ]、バーベキューで 三袋[さんふくろ]の たまねぎと じゃがいもが " },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今週末 as time adverb; で marks the barbecue context.",
      },
    ],
  },
  {
    english: "I want advice about my résumé from my senior at the company.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 会社[かいしゃ]の 先輩[せんぱい]から、私[わたし]の 履歴書[りれきしょ]の アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic version using から for “from” and の for “about my résumé”.",
      },
      {
        segments: [
          { text: "私[わたし]は 会社[かいしゃ]の 先輩[せんぱい]から、履歴書[りれきしょ]についての アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses についての for “about the résumé”; natural when the résumé is understood to be mine.",
      },
      {
        segments: [
          { text: "私[わたし]は 会社[かいしゃ]の 先輩[せんぱい]から、私[わたし]の 履歴書[りれきしょ]についての アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says “my résumé” with 私の plus についての.",
      },
      {
        segments: [
          { text: "私[わたし]は 会社[かいしゃ]の 先輩[せんぱい]に、私[わたし]の 履歴書[りれきしょ]の アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses に to mark the person from whom advice is wanted; natural with アドバイスがほしい.",
      },
      {
        segments: [
          { text: "私[わたし]は 会社[かいしゃ]の 先輩[せんぱい]に、履歴書[りれきしょ]についての アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses に plus についての; omits 私の where context makes it clear.",
      },
      {
        segments: [
          { text: "私[わたし]は 会社[かいしゃ]の 先輩[せんぱい]に、私[わたし]の 履歴書[りれきしょ]についての アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses に and explicitly includes 私の履歴書.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 履歴書[りれきしょ]の アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "、会社[かいしゃ]の 先輩[せんぱい]から" },
        ],
        notes: "Reversed word order, placing the source after the wanted item.",
      },
      {
        segments: [
          { text: "私[わたし]は 履歴書[りれきしょ]についての アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "、会社[かいしゃ]の 先輩[せんぱい]から" },
        ],
        notes: "Reversed word order with についての and the source after the predicate.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 先輩[せんぱい]から、私[わたし]は 私[わたし]の 履歴書[りれきしょ]の アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places the source at the beginning for emphasis.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 先輩[せんぱい]から、私[わたし]は 履歴書[りれきしょ]についての アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Source-first word order with についての.",
      },
      {
        segments: [
          { text: "私[わたし]は 会社[かいしゃ]の 先輩[せんぱい]から、履歴書[りれきしょ]の ことで アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses のことで to express “about/regarding my résumé”; context implies it is my résumé.",
      },
      {
        segments: [
          { text: "私[わたし]は 会社[かいしゃ]の 先輩[せんぱい]から、私[わたし]の 履歴書[りれきしょ]の ことで アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses のことで and explicitly states “my résumé.”",
      },
      {
        segments: [
          { text: "私[わたし]は 会社[かいしゃ]の 先輩[せんぱい]に、履歴書[りれきしょ]の ことで アドバイス" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses に and のことで; concise and natural.",
      },
    ],
  },
  {
    english: "I want a new swimsuit for next month's hot spring trip.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]の 温泉[おんせん] 旅行[りょこう]に 新[あたら]しい 水着[みずぎ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic sentence using に to mark the occasion/purpose of next month's hot spring trip.",
      },
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]の 温泉[おんせん] 旅行[りょこう]には 新[あたら]しい 水着[みずぎ]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には to emphasize the trip as the occasion.",
      },
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]の 温泉[おんせん] 旅行[りょこう]では 新[あたら]しい 水着[みずぎ]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using では to mark the trip context: 'for/as for the hot spring trip.'",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 温泉[おんせん] 旅行[りょこう]に、私[わたし]は 新[あたら]しい 水着[みずぎ]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered to put the trip context first.",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 温泉[おんせん] 旅行[りょこう]には、私[わたし]は 新[あたら]しい 水着[みずぎ]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Trip context first, with には for emphasis.",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 温泉[おんせん] 旅行[りょこう]では、私[わたし]は 新[あたら]しい 水着[みずぎ]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Trip context first, using では.",
      },
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]、温泉[おんせん] 旅行[りょこう]に 行[い]くので、新[あたら]しい 水着[みずぎ]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので to explain: because I’m going on a hot spring trip next month.",
      },
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]、温泉[おんせん] 旅行[りょこう]に 行[い]くから、新[あたら]しい 水着[みずぎ]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から to give the reason: because I’m going on a hot spring trip next month.",
      },
    ],
  },
  {
    english: "I want a black cat, but my apartment is small.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 黒[くろ]い 猫[ねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、私[わたし]の アパートは" },
          { text: "小[ちい]さい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic version using が for “but” and 小さい for “small.”",
      },
      {
        segments: [
          { text: "私[わたし]は 黒[くろ]い 猫[ねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、私[わたし]の アパートは" },
          { text: "小[ちい]さい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "More conversational version using けど for “but.”",
      },
      {
        segments: [
          { text: "私[わたし]は 黒[くろ]い 猫[ねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、私[わたし]の アパートは" },
          { text: "狭[せま]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 狭い, the natural adjective for an apartment being small/not spacious.",
      },
      {
        segments: [
          { text: "私[わたし]は 黒[くろ]い 猫[ねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、私[わたし]の アパートは" },
          { text: "狭[せま]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational けど with 狭い.",
      },
      {
        segments: [
          { text: "私[わたし]は 黒[くろ]い 猫[ねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、私[わたし]の アパートが" },
          { text: "小[ちい]さい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が to mark “my apartment” as the subject of being small.",
      },
      {
        segments: [
          { text: "私[わたし]は 黒[くろ]い 猫[ねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、私[わたし]の アパートが" },
          { text: "狭[せま]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が with 狭い for the apartment’s smallness.",
      },
      {
        segments: [
          { text: "私[わたし]は 黒[くろ]い 猫[ねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、私[わたし]の アパートは" },
          { text: "小[ちい]さい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Splits the sentence and uses でも for “but.”",
      },
      {
        segments: [
          { text: "私[わたし]は 黒[くろ]い 猫[ねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、私[わたし]の アパートは" },
          { text: "狭[せま]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Sentence split with でも and 狭い for “small/not spacious.”",
      },
      {
        segments: [
          { text: "私[わたし]は 黒猫[くろねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、私[わたし]の アパートは" },
          { text: "小[ちい]さい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the compound noun 黒猫 instead of 黒い猫.",
      },
      {
        segments: [
          { text: "私[わたし]は 黒猫[くろねこ]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、私[わたし]の アパートは" },
          { text: "狭[せま]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 黒猫, conversational けど, and 狭い.",
      },
    ],
  },
  {
    english: "I want a silver wristwatch for my father's birthday.",
    hint: "wristwatch = watch/clock; father = my father",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 父[ちち]の 誕生日[たんじょうび]に 銀色[ぎんいろ]の 時計[とけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic wording using 父 for “my father” and 時計 for wristwatch.",
      },
      {
        segments: [
          { text: "私[わたし]は 父[ちち]の 誕生日[たんじょうび]に 銀色[ぎんいろ]の 腕時計[うでどけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 腕時計 to specify a wristwatch.",
      },
      {
        segments: [
          { text: "私[わたし]は 父[ちち]の 誕生日[たんじょうび]に シルバーの 時計[とけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses シルバーの instead of 銀色の.",
      },
      {
        segments: [
          { text: "私[わたし]は 父[ちち]の 誕生日[たんじょうび]に シルバーの 腕時計[うでどけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses both シルバーの and 腕時計.",
      },
      {
        segments: [
          { text: "私[わたし]は お 父[とう]さんの 誕生日[たんじょうび]に 銀色[ぎんいろ]の 時計[とけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses お父さん for “my father,” a common conversational choice.",
      },
      {
        segments: [
          { text: "私[わたし]は お 父[とう]さんの 誕生日[たんじょうび]に 銀色[ぎんいろ]の 腕時計[うでどけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses お父さん and the more specific 腕時計.",
      },
      {
        segments: [
          { text: "私[わたし]は お 父[とう]さんの 誕生日[たんじょうび]に シルバーの 時計[とけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses お父さん and シルバーの.",
      },
      {
        segments: [
          { text: "私[わたし]は お 父[とう]さんの 誕生日[たんじょうび]に シルバーの 腕時計[うでどけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational father term with specific wristwatch and シルバー.",
      },
      {
        segments: [
          { text: "父[ちち]の 誕生日[たんじょうび]に、私[わたし]は 銀色[ぎんいろ]の 時計[とけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronts the birthday phrase for emphasis.",
      },
      {
        segments: [
          { text: "父[ちち]の 誕生日[たんじょうび]に、私[わたし]は 銀色[ぎんいろ]の 腕時計[うでどけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted time/purpose phrase with 腕時計.",
      },
      {
        segments: [
          { text: "父[ちち]の 誕生日[たんじょうび]に、私[わたし]は シルバーの 時計[とけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted phrase with シルバーの.",
      },
      {
        segments: [
          { text: "父[ちち]の 誕生日[たんじょうび]に、私[わたし]は シルバーの 腕時計[うでどけい]" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted phrase with シルバーの腕時計.",
      },
    ],
  },
  {
    english: "I want this camera, but it’s a little too expensive.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は この カメラが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ちょっと 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with けど and ちょっと高すぎる for “a little too expensive”",
      },
      {
        segments: [
          { text: "私[わたし]は この カメラが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、ちょっと 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Splits the contrast into two sentences using でも",
      },
      {
        segments: [
          { text: "私[わたし]は この カメラが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、少[すこ]し 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 少し instead of ちょっと for “a little”",
      },
      {
        segments: [
          { text: "私[わたし]は この カメラが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、少[すこ]し 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Two-sentence version with でも and 少し",
      },
      {
        segments: [
          { text: "この カメラは ちょっと 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、私[わたし]は これが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order: “It’s a little too expensive, but I want this one”",
      },
      {
        segments: [
          { text: "この カメラは 少[すこ]し 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、私[わたし]は これが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order using 少し instead of ちょっと",
      },
      {
        segments: [
          { text: "私[わたし]は この カメラが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ちょっと 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the more formal contrast particle が instead of けど",
      },
      {
        segments: [
          { text: "私[わたし]は この カメラが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、少[すこ]し 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Formal が version with 少し",
      },
      {
        segments: [
          { text: "この カメラは ちょっと 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、私[わたし]は これが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with formal contrast が",
      },
      {
        segments: [
          { text: "この カメラは 少[すこ]し 高[たか]" },
          { text: "すぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、私[わたし]は これが" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with formal が and 少し",
      },
    ],
  },
  {
    english: "I want a purple kimono for next month's Kabuki.",
    hint: "Kabuki = 歌舞伎",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]の 歌舞伎[かぶき]に 紫[むらさき]の 着物[きもの]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard phrasing with に marking the occasion/purpose; uses simpler vocabulary plus the given 歌舞伎.",
      },
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]の 歌舞伎[かぶき]に 紫色[むらさきいろ]の 着物[きもの]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 紫色の instead of 紫の for “purple.”",
      },
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]の 歌舞伎[かぶき]には 紫[むらさき]の 着物[きもの]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には to emphasize “for next month’s Kabuki.”",
      },
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]の 歌舞伎[かぶき]には 紫色[むらさきいろ]の 着物[きもの]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines には emphasis with 紫色の.",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 歌舞伎[かぶき]に、私[わたし]は 紫[むらさき]の 着物[きもの]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves the occasion phrase to the beginning.",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 歌舞伎[かぶき]に、私[わたし]は 紫色[むらさきいろ]の 着物[きもの]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted occasion phrase with 紫色の.",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 歌舞伎[かぶき]には、私[わたし]は 紫[むらさき]の 着物[きもの]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted occasion phrase using には for emphasis.",
      },
      {
        segments: [
          { text: "来月[らいげつ]の 歌舞伎[かぶき]には、私[わたし]は 紫色[むらさきいろ]の 着物[きもの]が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted には phrase with 紫色の.",
      },
    ],
  },
  {
    english: "After overtime tonight, I want a warm bath and a cold beer.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]の 残業[ざんぎょう]の 後[あと]で、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using 今晩の残業の後で and お風呂",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]の 残業[ざんぎょう]の 後[あと]で、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 instead of 今晩 for tonight",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]の 残業[ざんぎょう]の 後[あと]に、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 後に instead of 後で",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]の 残業[ざんぎょう]の 後[あと]に、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 and 後に",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、残業[ざんぎょう]した 後[あと]で、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 残業した後で instead of 今晩の残業の後で",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]、残業[ざんぎょう]した 後[あと]で、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 with 残業した後で",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、残業[ざんぎょう]した 後[あと]に、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 残業した後に",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]、残業[ざんぎょう]した 後[あと]に、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 and 残業した後に",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 残業[ざんぎょう]の 後[あと]で、私[わたし]は 暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronts the time phrase before 私は",
      },
      {
        segments: [
          { text: "今夜[こんや]の 残業[ざんぎょう]の 後[あと]で、私[わたし]は 暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronts time phrase and uses 今夜",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、残業[ざんぎょう]の 後[あと]で、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今晩 with 残業の後で",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]、残業[ざんぎょう]の 後[あと]で、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 with 残業の後で",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、残業[ざんぎょう]の 後[あと]に、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今晩 with 残業の後に",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]、残業[ざんぎょう]の 後[あと]に、暖[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 with 残業の後に",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]の 残業[ざんぎょう]の 後[あと]で、温[あたた]かい お 風呂[ふろ]と 冷[つめ]たい ビール" },
          { text: "が" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 温かい, the more specific kanji for something physically warm",
      },
    ],
  },
];

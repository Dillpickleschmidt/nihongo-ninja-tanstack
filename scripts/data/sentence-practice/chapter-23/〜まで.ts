import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Please wait here until the rain stops.",
    answers: [
      {
        segments: [
          { text: "雨[あめ]が" },
          { text: "やむまで", blank: true },
          { text: "、ここで 待[ま]ってください" },
        ],
        notes: "Standard word order: until the rain stops, please wait here",
      },
      {
        segments: [
          { text: "ここで、雨[あめ]が" },
          { text: "やむまで", blank: true },
          { text: "、待[ま]ってください" },
        ],
        notes: "Reordered: place first, then the until-clause",
      },
      {
        segments: [
          { text: "雨[あめ]が" },
          { text: "やむまで", blank: true },
          { text: "、ここにいてください" },
        ],
        notes: "Uses ここにいてください, natural for staying/waiting here until the rain stops",
      },
      {
        segments: [
          { text: "ここに、雨[あめ]が" },
          { text: "やむまで", blank: true },
          { text: "、いてください" },
        ],
        notes: "Reordered version using ここにいてください",
      },
    ],
  },
  {
    english: "My older brother didn't come home until dinner started.",
    answers: [
      {
        segments: [
          { text: "兄[あに]は 晩[ばん]ご飯[はん]が" },
          { text: "始[はじ]まるまで", blank: true },
          { text: "、帰[かえ]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Basic translation using 晩ご飯 and 帰ってくる",
      },
      {
        segments: [
          { text: "兄[あに]は 夕食[ゆうしょく]が" },
          { text: "始[はじ]まるまで", blank: true },
          { text: "、帰[かえ]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Uses 夕食 instead of 晩ご飯",
      },
      {
        segments: [
          { text: "兄[あに]は 晩[ばん]ご飯[はん]が" },
          { text: "始[はじ]まるまで", blank: true },
          { text: "、家[いえ]に 帰[かえ]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Adds 家[いえ]に to explicitly say come home",
      },
      {
        segments: [
          { text: "兄[あに]は 夕食[ゆうしょく]が" },
          { text: "始[はじ]まるまで", blank: true },
          { text: "、家[いえ]に 帰[かえ]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Uses 夕食 and explicitly includes 家[いえ]に",
      },
      {
        segments: [
          { text: "晩[ばん]ご飯[はん]が" },
          { text: "始[はじ]まるまで", blank: true },
          { text: "、兄[あに]は 帰[かえ]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Reversed word order with the until-clause first",
      },
      {
        segments: [
          { text: "夕食[ゆうしょく]が" },
          { text: "始[はじ]まるまで", blank: true },
          { text: "、兄[あに]は 帰[かえ]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Until-clause first, using 夕食",
      },
      {
        segments: [
          { text: "晩[ばん]ご飯[はん]が" },
          { text: "始[はじ]まるまで", blank: true },
          { text: "、兄[あに]は 家[いえ]に 帰[かえ]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Until-clause first with 家[いえ]に included",
      },
      {
        segments: [
          { text: "夕食[ゆうしょく]が" },
          { text: "始[はじ]まるまで", blank: true },
          { text: "、兄[あに]は 家[いえ]に 帰[かえ]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Until-clause first with 夕食 and 家[いえ]に",
      },
    ],
  },
  {
    english: "I walked to the station because the last train was late.",
    hint: "Use “to” as an endpoint, not just a destination.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 終電[しゅうでん]が 遅[おく]れたので、駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using ので for “because” and まで as the endpoint particle.",
      },
      {
        segments: [
          { text: "私[わたし]は 終電[しゅうでん]が 遅[おく]れたから、駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から instead of ので for “because.”",
      },
      {
        segments: [
          { text: "私[わたし]は 終電[しゅうでん]が 遅[おく]れていたので、駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 遅れていたので to express that the last train was running late.",
      },
      {
        segments: [
          { text: "私[わたし]は 終電[しゅうでん]が 遅[おく]れていたから、駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 遅れていたから with から for a slightly more direct reason.",
      },
      {
        segments: [
          { text: "私[わたし]は 終電[しゅうでん]が 遅[おそ]かったので、駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using the adjective 遅かった to describe the train as late.",
      },
      {
        segments: [
          { text: "私[わたし]は 終電[しゅうでん]が 遅[おそ]かったから、駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 遅かったから instead of 遅かったので.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 遅[おく]れたので、私[わたし]は 駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reason clause first, with 私は before the main action.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 遅[おく]れたから、私[わたし]は 駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reason clause first with から.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 遅[おく]れていたので、私[わたし]は 駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reason clause first, using 遅れていたので.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 遅[おく]れていたから、私[わたし]は 駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reason clause first, using 遅れていたから.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 遅[おそ]かったので、私[わたし]は 駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reason clause first, using adjective 遅かった.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]が 遅[おそ]かったから、私[わたし]は 駅[えき]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reason clause first, using 遅かったから.",
      },
    ],
  },
  {
    english: "Let's play games at the cafe until five o'clock.",
    answers: [
      {
        segments: [
          { text: "カフェで " },
          { text: "五時[ごじ]まで", blank: true },
          { text: "、ゲームを" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard word order: location, until-time, object, volitional verb.",
      },
      {
        segments: [
          { text: "五時[ごじ]まで", blank: true },
          { text: " カフェで ゲームを" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression placed first for emphasis.",
      },
      {
        segments: [
          { text: "カフェで ゲームを " },
          { text: "五時[ごじ]まで", blank: true },
          { text: " " },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Until-time placed after the object; still natural.",
      },
      {
        segments: [
          { text: "カフェで " },
          { text: "五時[ごじ]まで", blank: true },
          { text: "、ゲームを" },
          { text: "やる", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses やる instead of する for playing games.",
      },
      {
        segments: [
          { text: "五時[ごじ]まで", blank: true },
          { text: " カフェで ゲームを" },
          { text: "やる", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses やる with the time expression first.",
      },
      {
        segments: [
          { text: "カフェで ゲームを " },
          { text: "五時[ごじ]まで", blank: true },
          { text: " " },
          { text: "やる", conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses やる and places the until-time after the object.",
      },
    ],
  },
  {
    english: "I was in the library until the lights went off.",
    answers: [
      {
        segments: [
          { text: "電気[でんき]が 消[き]えるまで", blank: true },
          { text: "、図書館[としょかん]に " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic sentence with the until-clause first.",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "電気[でんき]が 消[き]えるまで", blank: true },
          { text: "、図書館[としょかん]に " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Includes 私は as the subject.",
      },
      {
        segments: [
          { text: "図書館[としょかん]に、" },
          { text: "電気[でんき]が 消[き]えるまで", blank: true },
          { text: " " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Places the location first.",
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]に、" },
          { text: "電気[でんき]が 消[き]えるまで", blank: true },
          { text: " " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject and location first, with the until-clause before the predicate.",
      },
    ],
  },
  {
    english: "Please don't open the door until I come back.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "帰[かえ]って 来[く]るまで", blank: true },
          { text: "、ドアを 開[あ]けないでください" },
        ],
        notes: "Standard translation using 帰って来るまで for “until I come back.”",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "戻[もど]るまで", blank: true },
          { text: "、ドアを 開[あ]けないでください" },
        ],
        notes: "Using 戻る for “come back/return.”",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "戻[もど]って 来[く]るまで", blank: true },
          { text: "、ドアを 開[あ]けないでください" },
        ],
        notes: "Using 戻って来る to emphasize coming back to this place.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "帰[かえ]るまで", blank: true },
          { text: "、ドアを 開[あ]けないでください" },
        ],
        notes: "Using 帰る for “return,” natural if the speaker is coming back home or to the usual place.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "帰[かえ]って 来[く]るまで", blank: true },
          { text: "、ドアは 開[あ]けないでください" },
        ],
        notes: "Using ドアは to mark the door as the thing specifically not to open.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "帰[かえ]って 来[く]るまでは", blank: true },
          { text: "、ドアを 開[あ]けないでください" },
        ],
        notes: "Using までは for a slightly stronger “until then, at least” nuance.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "戻[もど]るまでは", blank: true },
          { text: "、ドアを 開[あ]けないでください" },
        ],
        notes: "Using 戻るまでは with the contrastive/topic は.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "戻[もど]って 来[く]るまでは", blank: true },
          { text: "、ドアを 開[あ]けないでください" },
        ],
        notes: "Using 戻って来るまでは, emphasizing return to the current place.",
      },
      {
        segments: [
          { text: "ドアを 開[あ]けないでください、私[わたし]が " },
          { text: "帰[かえ]って 来[く]るまで", blank: true },
        ],
        notes: "Reversed order; the until-clause comes after the request.",
      },
      {
        segments: [
          { text: "ドアは 開[あ]けないでください、私[わたし]が " },
          { text: "帰[かえ]って 来[く]るまで", blank: true },
        ],
        notes: "Reversed order with ドアは.",
      },
      {
        segments: [
          { text: "ドアを 開[あ]けないでください、私[わたし]が " },
          { text: "戻[もど]るまで", blank: true },
        ],
        notes: "Reversed order using 戻るまで.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "帰[かえ]るまでは", blank: true },
          { text: "、ドアを 開[あ]けないでください" },
        ],
        notes: "Using 帰るまでは, natural when the speaker means “until I get home/back.”",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "帰[かえ]って 来[く]るまで", blank: true },
          { text: "、ドアを 開[あ]けてはいけません" },
        ],
        notes: "Using the stronger prohibition 開けてはいけません instead of ないでください.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "戻[もど]るまで", blank: true },
          { text: "、ドアを 開[あ]けてはいけません" },
        ],
        notes: "Stronger prohibition with 戻るまで.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "戻[もど]って 来[く]るまで", blank: true },
          { text: "、ドアを 開[あ]けてはいけません" },
        ],
        notes: "Stronger prohibition with 戻って来るまで.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "帰[かえ]って 来[く]るまでは", blank: true },
          { text: "、ドアは 開[あ]けないでください" },
        ],
        notes: "Using both までは and ドアは for emphasis on the limit and the object.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "戻[もど]るまで", blank: true },
          { text: "、ドアは 開[あ]けないでください" },
        ],
        notes: "Using 戻るまで with ドアは.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "戻[もど]って 来[く]るまで", blank: true },
          { text: "、ドアは 開[あ]けないでください" },
        ],
        notes: "Using 戻って来るまで with ドアは.",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "帰[かえ]るまで", blank: true },
          { text: "、ドアは 開[あ]けないでください" },
        ],
        notes: "Using 帰るまで with ドアは.",
      },
    ],
  },
  {
    english: "I will use this old computer until it breaks.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターを" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with を marking the computer as the object",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターは" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to topicalize the computer",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、この 古[ふる]い コンピューターを" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order: until-clause first",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターを、" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: " " },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object first, with the まで phrase placed just before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンを" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using パソコン as a natural synonym for computer",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンは" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using パソコン and topicalizing it with は",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、この 古[ふる]い パソコンを" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using パソコン with the until-clause first",
      },
      {
        segments: [
          { text: "この 古[ふる]い コンピューターが" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、私[わたし]は この コンピューターを" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject of the まで clause with が",
      },
      {
        segments: [
          { text: "この 古[ふる]い パソコンが" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、私[わたし]は この パソコンを" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject of the まで clause using パソコン",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターを" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、使[つか]って" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 使っていく to emphasize continuing to use it",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンを" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、使[つか]って" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using パソコン and 使っていく",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、この 古[ふる]い コンピューターを 使[つか]って" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Until-clause first with 使っていく",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、この 古[ふる]い パソコンを 使[つか]って" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Until-clause first, using パソコン and 使っていく",
      },
      {
        segments: [
          { text: "この 古[ふる]い コンピューターを、私[わたし]は" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: " " },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalized object placed at the beginning",
      },
      {
        segments: [
          { text: "この 古[ふる]い パソコンを、私[わたし]は" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: " " },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalized object at the beginning, using パソコン",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターを" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、使[つか]い" },
          { text: "続[つづ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 使い続ける to mean keep using it until it breaks",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンを" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、使[つか]い" },
          { text: "続[つづ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using パソコン with 使い続ける",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、この 古[ふる]い コンピューターを 使[つか]い" },
          { text: "続[つづ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Until-clause first with 使い続ける",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "壊[こわ]れるまで", blank: true },
          { text: "、この 古[ふる]い パソコンを 使[つか]い" },
          { text: "続[つづ]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Until-clause first with パソコン and 使い続ける",
      },
    ],
  },
  {
    english: "Please carry this heavy bag as far as the front desk.",
    answers: [
      {
        segments: [
          { text: "この 重[おも]い かばんを フロント" },
          { text: "まで", blank: true },
          { text: "運[はこ]んでください" },
        ],
        notes: "Standard translation using かばん and 運ぶ.",
      },
      {
        segments: [
          { text: "この 重[おも]い 荷物[にもつ]を フロント" },
          { text: "まで", blank: true },
          { text: "運[はこ]んでください" },
        ],
        notes: "Using 荷物 instead of かばん.",
      },
      {
        segments: [
          { text: "フロント" },
          { text: "まで", blank: true },
          { text: "この 重[おも]い かばんを 運[はこ]んでください" },
        ],
        notes: "Reordered to put the destination first.",
      },
      {
        segments: [
          { text: "フロント" },
          { text: "まで", blank: true },
          { text: "この 重[おも]い 荷物[にもつ]を 運[はこ]んでください" },
        ],
        notes: "Destination-first order with 荷物.",
      },
      {
        segments: [
          { text: "この 重[おも]い かばんを フロント" },
          { text: "まで", blank: true },
          { text: "持[も]って 行[い]ってください" },
        ],
        notes: "Using 持って行く for carry/take.",
      },
      {
        segments: [
          { text: "この 重[おも]い 荷物[にもつ]を フロント" },
          { text: "まで", blank: true },
          { text: "持[も]って 行[い]ってください" },
        ],
        notes: "Using 持って行く with 荷物.",
      },
      {
        segments: [
          { text: "この 重[おも]い かばんを 受付[うけつけ]" },
          { text: "まで", blank: true },
          { text: "運[はこ]んでください" },
        ],
        notes: "Using 受付 as a natural equivalent of front desk/reception.",
      },
      {
        segments: [
          { text: "この 重[おも]い 荷物[にもつ]を 受付[うけつけ]" },
          { text: "まで", blank: true },
          { text: "運[はこ]んでください" },
        ],
        notes: "受付 with 荷物.",
      },
      {
        segments: [
          { text: "受付[うけつけ]" },
          { text: "まで", blank: true },
          { text: "この 重[おも]い かばんを 運[はこ]んでください" },
        ],
        notes: "Destination-first order using 受付.",
      },
      {
        segments: [
          { text: "この 重[おも]い かばんを 受付[うけつけ]" },
          { text: "まで", blank: true },
          { text: "持[も]って 行[い]ってください" },
        ],
        notes: "Using 持って行く with 受付.",
      },
      {
        segments: [
          { text: "この 重[おも]い バッグを フロント" },
          { text: "まで", blank: true },
          { text: "運[はこ]んでください" },
        ],
        notes: "Using the loanword バッグ for bag.",
      },
      {
        segments: [
          { text: "この 重[おも]い バッグを フロント" },
          { text: "まで", blank: true },
          { text: "持[も]って 行[い]ってください" },
        ],
        notes: "Loanword バッグ with 持って行く.",
      },
    ],
  },
  {
    english: "Please don't look at your smartphone until the exam is over.",
    answers: [
      {
        segments: [
          { text: "試験[しけん]が 終[お]わる" },
          { text: "まで", blank: true },
          { text: "、スマホを 見[み]ないでください" },
        ],
        notes: "Basic translation using 試験 and を",
      },
      {
        segments: [
          { text: "試験[しけん]が 終[お]わる" },
          { text: "まで", blank: true },
          { text: "、携帯[けいたい]を 見[み]ないでください" },
        ],
        notes: "Using 携帯 instead of スマホ",
      },
      {
        segments: [
          { text: "テストが 終[お]わる" },
          { text: "まで", blank: true },
          { text: "、スマホを 見[み]ないでください" },
        ],
        notes: "Using テスト instead of 試験",
      },
      {
        segments: [
          { text: "テストが 終[お]わる" },
          { text: "まで", blank: true },
          { text: "、携帯[けいたい]を 見[み]ないでください" },
        ],
        notes: "Using テスト and 携帯",
      },
      {
        segments: [
          { text: "スマホを、試験[しけん]が 終[お]わる" },
          { text: "まで", blank: true },
          { text: " 見[み]ないでください" },
        ],
        notes: "Fronting スマホを before the until-clause",
      },
      {
        segments: [
          { text: "携帯[けいたい]を、試験[しけん]が 終[お]わる" },
          { text: "まで", blank: true },
          { text: " 見[み]ないでください" },
        ],
        notes: "Fronting 携帯を before the until-clause",
      },
      {
        segments: [
          { text: "スマホは 試験[しけん]が 終[お]わる" },
          { text: "まで", blank: true },
          { text: " 見[み]ないでください" },
        ],
        notes: "Using は to mark スマホ as the topic",
      },
      {
        segments: [
          { text: "携帯[けいたい]は 試験[しけん]が 終[お]わる" },
          { text: "まで", blank: true },
          { text: " 見[み]ないでください" },
        ],
        notes: "Using は with 携帯 as the topic",
      },
      {
        segments: [
          { text: "試験[しけん]が 終[お]わる" },
          { text: "まで", blank: true },
          { text: "は、スマホを 見[み]ないでください" },
        ],
        notes: "Using までは for emphasis on the limit",
      },
      {
        segments: [
          { text: "試験[しけん]が 終[お]わる" },
          { text: "まで", blank: true },
          { text: "は、携帯[けいたい]を 見[み]ないでください" },
        ],
        notes: "Using までは with 携帯",
      },
      {
        segments: [
          { text: "テストが 終[お]わる" },
          { text: "まで", blank: true },
          { text: "は、スマホを 見[み]ないでください" },
        ],
        notes: "Using テスト with emphatic までは",
      },
      {
        segments: [
          { text: "テストが 終[お]わる" },
          { text: "まで", blank: true },
          { text: "は、携帯[けいたい]を 見[み]ないでください" },
        ],
        notes: "Using テスト and 携帯 with emphatic までは",
      },
    ],
  },
  {
    english: "The meeting continued until twelve o'clock, so I took a taxi home.",
    answers: [
      {
        segments: [
          { text: "会議[かいぎ]は" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたので、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation with は, using ので for “so/because” and 家に帰る",
      },
      {
        segments: [
          { text: "会議[かいぎ]が" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたので、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が instead of は to mark the meeting as the subject",
      },
      {
        segments: [
          { text: "会議[かいぎ]は" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたから、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から instead of ので for the reason",
      },
      {
        segments: [
          { text: "会議[かいぎ]が" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたから、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が and から",
      },
      {
        segments: [
          { text: "会議[かいぎ]は" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたので、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using うち instead of 家 for “home”",
      },
      {
        segments: [
          { text: "会議[かいぎ]が" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたので、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が and うち",
      },
      {
        segments: [
          { text: "会議[かいぎ]は" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたから、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から and うち",
      },
      {
        segments: [
          { text: "会議[かいぎ]が" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたから、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が, から, and うち",
      },
      {
        segments: [
          { text: "会議[かいぎ]は" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたので、タクシーで " },
          { text: "家[いえ]まで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 家まで to mean “all the way home”",
      },
      {
        segments: [
          { text: "会議[かいぎ]が" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたので、タクシーで " },
          { text: "家[いえ]まで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が and 家まで",
      },
      {
        segments: [
          { text: "会議[かいぎ]は" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたから、タクシーで " },
          { text: "家[いえ]まで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から and 家まで",
      },
      {
        segments: [
          { text: "会議[かいぎ]が" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたから、タクシーで " },
          { text: "家[いえ]まで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が, から, and 家まで",
      },
      {
        segments: [
          { text: "会議[かいぎ]は" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたので、タクシーで " },
          { text: "うちまで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using うちまで for “as far as home”",
      },
      {
        segments: [
          { text: "会議[かいぎ]が" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたので、タクシーで " },
          { text: "うちまで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が and うちまで",
      },
      {
        segments: [
          { text: "会議[かいぎ]は" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたから、タクシーで " },
          { text: "うちまで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から and うちまで",
      },
      {
        segments: [
          { text: "会議[かいぎ]が" },
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "続[つづ]いたから、タクシーで " },
          { text: "うちまで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が, から, and うちまで",
      },
      {
        segments: [
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "会議[かいぎ]が 続[つづ]いたので、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Placing the time phrase at the beginning",
      },
      {
        segments: [
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "会議[かいぎ]が 続[つづ]いたから、タクシーで 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, using から",
      },
      {
        segments: [
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "会議[かいぎ]が 続[つづ]いたので、タクシーで " },
          { text: "家[いえ]まで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, also using 家まで",
      },
      {
        segments: [
          { text: "十二時[じゅうにじ]まで", blank: true },
          { text: "会議[かいぎ]が 続[つづ]いたから、タクシーで " },
          { text: "家[いえ]まで", blank: true },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, using から and 家まで",
      },
    ],
  },
  {
    english: "I'll walk as far as the post office, but I won't go to the station.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]には 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Basic translation: as far as the post office; contrasts with not going to the station using には.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "は 歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]には 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Adds は after まで to emphasize the limit: I’ll walk as far as the post office, but not to the station.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]" },
          { text: "まで", blank: true },
          { text: "は 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses まで in both clauses: not going as far as the station.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "は 歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]" },
          { text: "まで", blank: true },
          { text: "は 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Parallel contrast with までは in both clauses.",
      },
      {
        segments: [
          { text: "郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "は 私[わたし]が 歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]には 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Fronts the destination and marks the subject with が.",
      },
      {
        segments: [
          { text: "駅[えき]には 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "けど、私[わたし]は 郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reverses the order of the clauses while preserving the contrast.",
      },
      {
        segments: [
          { text: "私[わたし]は 駅[えき]には 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "けど、郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed clause order with 私は at the beginning.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、駅[えき]には 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Splits the contrast into two sentences using でも.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]には 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses が instead of けど for a slightly more formal contrast.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "は 歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]には 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses が and emphasizes the limit with までは.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]" },
          { text: "まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]へは 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses へは instead of には for the station as the destination not reached.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]まで歩[ある]いて " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]には " },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 歩いて行く, with 歩いて fixed as te-form and 行く conjugated.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]までは歩[ある]いて " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、駅[えき]には " },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses までは and 歩いて行く to emphasize walking only as far as the post office.",
      },
      {
        segments: [
          { text: "私[わたし]は 郵便局[ゆうびんきょく]まで歩[ある]いて " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、駅[えき]には " },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 歩いて行く with the more formal contrast particle が.",
      },
    ],
  },
  {
    english: "I practiced the piano until my fingers hurt.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: "、ピアノを " },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using Verb + まで with ピアノを練習する",
      },
      {
        segments: [
          { text: "私[わたし]は ピアノを 指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: " " },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered: the まで-clause placed after the object",
      },
      {
        segments: [
          { text: "指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: "、私[わたし]は ピアノを " },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic 私は placed after the まで-clause",
      },
      {
        segments: [
          { text: "私[わたし]は 指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: "、ピアノの 練習[れんしゅう]を " },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses the noun phrase ピアノの練習をする",
      },
      {
        segments: [
          { text: "私[わたし]は ピアノの 練習[れんしゅう]を 指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: " " },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Noun phrase ピアノの練習 with the まで-clause after the object",
      },
      {
        segments: [
          { text: "私[わたし]の 指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: "、ピアノを " },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 私の指 to explicitly say “my fingers”",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: "、ピアノを " },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Includes both subject and possessive for maximum explicitness",
      },
      {
        segments: [
          { text: "私[わたし]は 指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: "、ピアノを 弾[ひ]く 練習[れんしゅう]を " },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ピアノを弾く練習をする, explicitly “practice playing the piano”",
      },
      {
        segments: [
          { text: "指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: "、私[わたし]は ピアノを 弾[ひ]く 練習[れんしゅう]を " },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Same wording with the まで-clause fronted",
      },
      {
        segments: [
          { text: "私[わたし]は 指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: "、ピアノを " },
          { text: "練習[れんしゅう]する", conjugation: { pos: "Suru verb - compound word", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: " " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ていた to emphasize the ongoing duration of practicing",
      },
      {
        segments: [
          { text: "私[わたし]は 指[ゆび]が 痛[いた]くなる" },
          { text: "まで", blank: true },
          { text: "、ピアノの 練習[れんしゅう]を " },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: " " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "ていた version with ピアノの練習をする",
      },
    ],
  },
  {
    english: "Please don't tell Mom until the letter arrives.",
    answers: [
      {
        segments: [
          { text: "手紙[てがみ]が" },
          { text: "来[く]るまで", blank: true },
          { text: "、お母[かあ]さんに 言[い]わないでください" },
        ],
        notes: "Standard wording using 来る for a letter arriving",
      },
      {
        segments: [
          { text: "手紙[てがみ]が" },
          { text: "来[く]るまで", blank: true },
          { text: "、お母[かあ]さんには 言[い]わないでください" },
        ],
        notes: "Using には to emphasize not telling Mom specifically",
      },
      {
        segments: [
          { text: "お母[かあ]さんに、手紙[てがみ]が" },
          { text: "来[く]るまで", blank: true },
          { text: " 言[い]わないでください" },
        ],
        notes: "Reordered sentence with the indirect object first",
      },
      {
        segments: [
          { text: "お母[かあ]さんには、手紙[てがみ]が" },
          { text: "来[く]るまで", blank: true },
          { text: " 言[い]わないでください" },
        ],
        notes: "Reordered sentence with には for emphasis",
      },
      {
        segments: [
          { text: "手紙[てがみ]が" },
          { text: "届[とど]くまで", blank: true },
          { text: "、お母[かあ]さんに 言[い]わないでください" },
        ],
        notes: "Using the more specific verb 届く for a letter being delivered",
      },
      {
        segments: [
          { text: "手紙[てがみ]が" },
          { text: "届[とど]くまで", blank: true },
          { text: "、お母[かあ]さんには 言[い]わないでください" },
        ],
        notes: "Using 届く and には for emphasis",
      },
      {
        segments: [
          { text: "お母[かあ]さんに、手紙[てがみ]が" },
          { text: "届[とど]くまで", blank: true },
          { text: " 言[い]わないでください" },
        ],
        notes: "Reordered sentence using 届く",
      },
      {
        segments: [
          { text: "お母[かあ]さんには、手紙[てがみ]が" },
          { text: "届[とど]くまで", blank: true },
          { text: " 言[い]わないでください" },
        ],
        notes: "Reordered sentence using 届く and には",
      },
    ],
  },
  {
    english: "Please keep the cake in the refrigerator until the guests arrive.",
    answers: [
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "来[く]るまで", blank: true },
          { text: "、ケーキを 冷蔵庫[れいぞうこ]に 入[い]れておいてください" },
        ],
        notes: "Basic order with the until-clause first; uses 来る for guests arriving.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "いらっしゃるまで", blank: true },
          { text: "、ケーキを 冷蔵庫[れいぞうこ]に 入[い]れておいてください" },
        ],
        notes: "More polite/honorific verb いらっしゃる for guests arriving.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "来[く]るまで", blank: true },
          { text: "、ケーキは 冷蔵庫[れいぞうこ]に 入[い]れておいてください" },
        ],
        notes: "Uses は to mark the cake as the topic.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "いらっしゃるまで", blank: true },
          { text: "、ケーキは 冷蔵庫[れいぞうこ]に 入[い]れておいてください" },
        ],
        notes: "Honorific いらっしゃる with ケーキは topic marking.",
      },
      {
        segments: [
          { text: "ケーキを 冷蔵庫[れいぞうこ]に、お客[きゃく]さんが" },
          { text: "来[く]るまで", blank: true },
          { text: "入[い]れておいてください" },
        ],
        notes: "Reordered to place the cake and refrigerator first.",
      },
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]に、お客[きゃく]さんが" },
          { text: "来[く]るまで", blank: true },
          { text: "入[い]れておいてください" },
        ],
        notes: "Reordered sentence with ケーキは as topic.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "着[つ]くまで", blank: true },
          { text: "、ケーキを 冷蔵庫[れいぞうこ]に 入[い]れておいてください" },
        ],
        notes: "Uses 着く to express the guests arriving.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "着[つ]くまで", blank: true },
          { text: "、ケーキは 冷蔵庫[れいぞうこ]に 入[い]れておいてください" },
        ],
        notes: "Uses 着く with ケーキは topic marking.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "来[く]るまで", blank: true },
          { text: "、ケーキを 冷蔵庫[れいぞうこ]の 中[なか]に 入[い]れておいてください" },
        ],
        notes: "Specifies inside the refrigerator with 冷蔵庫の中に.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "いらっしゃるまで", blank: true },
          { text: "、ケーキを 冷蔵庫[れいぞうこ]の 中[なか]に 入[い]れておいてください" },
        ],
        notes: "Honorific arriving verb with 冷蔵庫の中に.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "着[つ]くまで", blank: true },
          { text: "、ケーキを 冷蔵庫[れいぞうこ]の 中[なか]に 入[い]れておいてください" },
        ],
        notes: "Uses 着く and explicitly says inside the refrigerator.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "来[く]るまで", blank: true },
          { text: "、冷蔵庫[れいぞうこ]に ケーキを 入[い]れておいてください" },
        ],
        notes: "Places 冷蔵庫に before ケーキを in the main clause.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "いらっしゃるまで", blank: true },
          { text: "、冷蔵庫[れいぞうこ]に ケーキを 入[い]れておいてください" },
        ],
        notes: "Honorific いらっしゃる with reordered main clause.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "着[つ]くまで", blank: true },
          { text: "、冷蔵庫[れいぞうこ]に ケーキを 入[い]れておいてください" },
        ],
        notes: "Uses 着く and places the refrigerator phrase first.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんの" },
          { text: "到着[とうちゃく]まで", blank: true },
          { text: "、ケーキを 冷蔵庫[れいぞうこ]に 入[い]れておいてください" },
        ],
        notes: "Uses noun + まで with 到着 as a nominalized endpoint.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "到着[とうちゃく]するまで", blank: true },
          { text: "、ケーキを 冷蔵庫[れいぞうこ]に 入[い]れておいてください" },
        ],
        notes: "Uses 到着する for 'arrive'.",
      },
      {
        segments: [
          { text: "お客[きゃく]さんが" },
          { text: "来[こ]られるまで", blank: true },
          { text: "、ケーキを 冷蔵庫[れいぞうこ]に 入[い]れておいてください" },
        ],
        notes: "Uses honorific 来られる for the guests coming/arriving.",
      },
      {
        segments: [
          { text: "ケーキを 冷蔵庫[れいぞうこ]に 入[い]れておいてください、 お客[きゃく]さんが" },
          { text: "来[く]るまで", blank: true },
        ],
        notes: "Places the until-clause at the end as an afterthought.",
      },
      {
        segments: [
          { text: "ケーキは 冷蔵庫[れいぞうこ]に 入[い]れておいてください、 お客[きゃく]さんが" },
          { text: "来[く]るまで", blank: true },
        ],
        notes: "End-position until-clause with ケーキは topic marking.",
      },
    ],
  },
  {
    english: "Please stay in the classroom until the typhoon stops.",
    hint: "Use “stops” as “ends” here.",
    answers: [
      {
        segments: [
          { text: "台風[たいふう]が 終[お]わるまで", blank: true },
          { text: "、教室[きょうしつ]に いてください" },
        ],
        notes: "Basic sentence with Verb + まで and 教室にいる",
      },
      {
        segments: [
          { text: "台風[たいふう]が 終[お]わるまで", blank: true },
          { text: "、教室[きょうしつ]で 待[ま]っていてください" },
        ],
        notes: "Uses 教室で待っている to express staying/waiting in the classroom",
      },
      {
        segments: [
          { text: "台風[たいふう]が 終[お]わるまで", blank: true },
          { text: "、教室[きょうしつ]に 残[のこ]っていてください" },
        ],
        notes: "Uses 残っていてください to mean remain/stay",
      },
      {
        segments: [
          { text: "教室[きょうしつ]に、" },
          { text: "台風[たいふう]が 終[お]わるまで", blank: true },
          { text: " いてください" },
        ],
        notes: "Reversed word order with the location first",
      },
      {
        segments: [
          { text: "教室[きょうしつ]で、" },
          { text: "台風[たいふう]が 終[お]わるまで", blank: true },
          { text: " 待[ま]っていてください" },
        ],
        notes: "Location first; uses 待っていてください",
      },
      {
        segments: [
          { text: "台風[たいふう]が 終[お]わるまで", blank: true },
          { text: "、教室[きょうしつ]で 待[ま]ってください" },
        ],
        notes: "Uses 待ってください instead of 待っていてください",
      },
      {
        segments: [
          { text: "教室[きょうしつ]で、" },
          { text: "台風[たいふう]が 終[お]わるまで", blank: true },
          { text: " 待[ま]ってください" },
        ],
        notes: "Location first with 待ってください",
      },
    ],
  },
  {
    english: "I couldn't sleep until the strange sound stopped.",
    answers: [
      {
        segments: [
          { text: "変[へん]な 音[おと]が" },
          { text: "止[と]まるまで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Basic translation using 変な音 and potential 寝られなかった",
      },
      {
        segments: [
          { text: "変[へん]な 音[おと]が" },
          { text: "消[き]えるまで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Using 消える for the sound going away",
      },
      {
        segments: [
          { text: "変[へん]な 音[おと]が" },
          { text: "やむまで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Using やむ for a sound ceasing",
      },
      {
        segments: [
          { text: "私[わたし]は 変[へん]な 音[おと]が" },
          { text: "止[と]まるまで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Explicit 私は subject",
      },
      {
        segments: [
          { text: "変[へん]な 音[おと]が" },
          { text: "止[と]まるまで", blank: true },
          { text: "は、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Adding は after まで for emphasis: not until then",
      },
      {
        segments: [
          { text: "その 変[へん]な 音[おと]が" },
          { text: "止[と]まるまで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Using その to refer to the particular strange sound",
      },
      {
        segments: [
          { text: "その 変[へん]な 音[おと]が" },
          { text: "消[き]えるまで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Using その and 消える",
      },
      {
        segments: [
          { text: "変[へん]な 音[おと]が" },
          { text: "聞[き]こえなくなるまで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Expressing that the sound became no longer audible",
      },
      {
        segments: [
          { text: "変[へん]な 音[おと]が" },
          { text: "止[と]まるまで", blank: true },
          { text: "、寝[ね]ることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Using ことができる instead of the potential form",
      },
      {
        segments: [
          { text: "変[へん]な 音[おと]が" },
          { text: "しなくなるまで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Using 音がしなくなる to mean the sound stopped occurring",
      },
      {
        segments: [
          { text: "変[へん]な 音[おと]が" },
          { text: "止[と]まるまで", blank: true },
          { text: "、私[わたし]は" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "Subject 私は placed after the until-clause",
      },
      {
        segments: [
          { text: "変[へん]な 音[おと]が" },
          { text: "聞[き]こえなくなるまで", blank: true },
          { text: "は、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "past" } },
        ],
        notes: "聞こえなくなる with emphatic までは",
      },
    ],
  },
  {
    english: "The children ran as far as the big tree and waited there until Mom came.",
    answers: [
      {
        segments: [
          { text: "子供[こども]たちは 大[おお]きい 木[き]" },
          { text: "まで", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、そこで お母[かあ]さんが 来[く]る" },
          { text: "まで", blank: true },
          { text: "待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using 大きい木 and そこで",
      },
      {
        segments: [
          { text: "子供[こども]たちは 大[おお]きい 木[き]" },
          { text: "まで", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、お母[かあ]さんが 来[く]る" },
          { text: "まで", blank: true },
          { text: "そこで 待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Places そこで after the until-clause",
      },
      {
        segments: [
          { text: "子供[こども]たちは 大[おお]きい 木[き]の ところ" },
          { text: "まで", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、そこで お母[かあ]さんが 来[く]る" },
          { text: "まで", blank: true },
          { text: "待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 木のところまで as the endpoint",
      },
      {
        segments: [
          { text: "子供[こども]たちは 大[おお]きい 木[き]" },
          { text: "まで", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: " 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、そこで お母[かあ]さんが 来[く]る" },
          { text: "まで", blank: true },
          { text: "待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 走って行って for 'ran as far as'",
      },
      {
        segments: [
          { text: "子供[こども]たちは 大[おお]きい 木[き]の ところ" },
          { text: "まで", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: " 行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、その 木[き]の ところで お母[かあ]さんが 来[く]る" },
          { text: "まで", blank: true },
          { text: "待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 走って行って and restates 'there' as その木のところで",
      },
      {
        segments: [
          { text: "子供[こども]たちが 大[おお]きい 木[き]" },
          { text: "まで", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、そこで お母[かあ]さんが 来[く]る" },
          { text: "まで", blank: true },
          { text: "待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses が to mark the children as the subject",
      },
      {
        segments: [
          { text: "子供[こども]たちは 大[おお]きい 木[き]" },
          { text: "まで", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、お母[かあ]さんが そこに 来[く]る" },
          { text: "まで", blank: true },
          { text: "待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses そこに来る to make 'came there' explicit",
      },
      {
        segments: [
          { text: "子供[こども]たちは 大[おお]きい 木[き]の ところ" },
          { text: "まで", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、お母[かあ]さんが そこに 来[く]る" },
          { text: "まで", blank: true },
          { text: "待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Combines 木のところまで with そこに来る",
      },
      {
        segments: [
          { text: "大[おお]きい 木[き]" },
          { text: "まで", blank: true },
          { text: "子供[こども]たちは 走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、そこで お母[かあ]さんが 来[く]る" },
          { text: "まで", blank: true },
          { text: "待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronts the destination phrase",
      },
      {
        segments: [
          { text: "子供[こども]たちは 大[おお]きい 木[き]" },
          { text: "まで", blank: true },
          { text: "走[はし]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "、お母[かあ]さんが 来[く]る" },
          { text: "まで", blank: true },
          { text: "その 木[き]の ところで 待[ま]つ", conjugation: { pos: "Godan verb with 'tsu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses その木のところで for 'there'",
      },
    ],
  },
  {
    english: "This bus goes as far as the airport, but it doesn't go to the hotel.",
    answers: [
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]まで", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ホテルには " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Standard translation with に は marking the hotel as the contrasted destination.",
      },
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]まで", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ホテルには " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses が for a slightly more formal 'but'.",
      },
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]まで", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ホテルまで は " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses まで は to contrast the hotel as beyond the endpoint.",
      },
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]まで", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ホテルへは " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses へは instead of には for the contrasted destination.",
      },
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]までは", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、ホテルには " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses までは to emphasize 'as far as the airport'.",
      },
      {
        segments: [
          { text: "この バスは ホテルには " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "けど、" },
          { text: "空港[くうこう]まで", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reverses the clause order while preserving the contrast.",
      },
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]まで", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、ホテルには " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses でも as a separate-sentence contrast.",
      },
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]までは", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。でも、ホテルまでは " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Separate-sentence contrast with までは in both clauses.",
      },
      {
        segments: [
          { text: "この バスは ホテルには " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "けど、" },
          { text: "空港[くうこう]までは", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed clause order with までは emphasis.",
      },
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]まで", blank: true },
          { text: "で、ホテルには " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses までです/までだ to mean the route goes only as far as the airport.",
      },
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]まで", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ホテルへは " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Formal が contrast with へは for the hotel destination.",
      },
      {
        segments: [
          { text: "この バスは " },
          { text: "空港[くうこう]までは", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、ホテルへは " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses までは plus formal が and へは.",
      },
    ],
  },
  {
    english: "Let's sing until the baby stops crying.",
    answers: [
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
          { text: "、" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using 泣かなくなるまで for “until the baby stops crying.”",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
          { text: "、一緒[いっしょ]に " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 一緒に to emphasize “let’s/together.”",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
          { text: "、みんなで " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses みんなで to make the invitation to the group explicit.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
          { text: "、歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 歌を歌う for “sing a song.”",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
          { text: "、一緒[いっしょ]に 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines 一緒に with 歌を歌う.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
          { text: "、みんなで 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines みんなで with 歌を歌う.",
      },
      {
        segments: [
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
        ],
        notes: "Reversed word order, with the まで clause after the main invitation.",
      },
      {
        segments: [
          { text: "一緒[いっしょ]に " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
        ],
        notes: "Reversed word order with 一緒に.",
      },
      {
        segments: [
          { text: "みんなで " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
        ],
        notes: "Reversed word order with みんなで.",
      },
      {
        segments: [
          { text: "歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
        ],
        notes: "Reversed word order with 歌を歌う.",
      },
      {
        segments: [
          { text: "一緒[いっしょ]に 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
        ],
        notes: "Reversed word order combining 一緒に and 歌を歌う.",
      },
      {
        segments: [
          { text: "みんなで 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]かなくなるまで", blank: true },
        ],
        notes: "Reversed word order combining みんなで and 歌を歌う.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
          { text: "、" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣きやむ, a natural verb meaning “to stop crying.”",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
          { text: "、一緒[いっしょ]に " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣きやむ and adds 一緒に.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
          { text: "、みんなで " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣きやむ and みんなで.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
          { text: "、歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣きやむ with 歌を歌う.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
          { text: "、一緒[いっしょ]に 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣きやむ, 一緒に, and 歌を歌う.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
          { text: "、みんなで 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣きやむ, みんなで, and 歌を歌う.",
      },
      {
        segments: [
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
        ],
        notes: "Reversed word order with 泣きやむ.",
      },
      {
        segments: [
          { text: "一緒[いっしょ]に " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
        ],
        notes: "Reversed word order with 泣きやむ and 一緒に.",
      },
      {
        segments: [
          { text: "みんなで " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
        ],
        notes: "Reversed word order with 泣きやむ and みんなで.",
      },
      {
        segments: [
          { text: "歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
        ],
        notes: "Reversed word order with 泣きやむ and 歌を歌う.",
      },
      {
        segments: [
          { text: "一緒[いっしょ]に 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
        ],
        notes: "Reversed word order with 泣きやむ, 一緒に, and 歌を歌う.",
      },
      {
        segments: [
          { text: "みんなで 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "、赤[あか]ちゃんが 泣[な]きやむまで", blank: true },
        ],
        notes: "Reversed word order with 泣きやむ, みんなで, and 歌を歌う.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くのをやめるまで", blank: true },
          { text: "、" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣くのをやめるまで, literally “until the baby stops crying.”",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くのをやめるまで", blank: true },
          { text: "、一緒[いっしょ]に " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣くのをやめるまで with 一緒に.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くのをやめるまで", blank: true },
          { text: "、みんなで " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣くのをやめるまで with みんなで.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くのをやめるまで", blank: true },
          { text: "、歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣くのをやめるまで with 歌を歌う.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くのをやめるまで", blank: true },
          { text: "、一緒[いっしょ]に 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣くのをやめるまで with 一緒に and 歌を歌う.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くのをやめるまで", blank: true },
          { text: "、みんなで 歌[うた]を " },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 泣くのをやめるまで with みんなで and 歌を歌う.",
      },
    ],
  },
  {
    english: "I’ll walk with my grandmother as far as the hospital, but I won’t go inside.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は おばあさんと " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、中[なか]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Basic phrasing with おばあさんと and contrastive 中には入らない",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、病院[びょういん]の中[なか]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Specifies inside as 病院の中",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "一緒[いっしょ]に 歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、中[なか]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Adds 一緒に to emphasize walking together",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと 一緒[いっしょ]に " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、中[なか]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Different adverb placement: 一緒に before the endpoint",
      },
      {
        segments: [
          { text: "おばあさんと " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、私[わたし]は 中[なか]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Drops initial 私は by restructuring; keeps 私は before the second clause for clarity",
      },
      {
        segments: [
          { text: "おばあさんと 一緒[いっしょ]に " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、私[わたし]は 中[なか]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "No initial subject; includes 一緒に",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、病院[びょういん]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 病院には入らない instead of 中には入らない",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、中[なか]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses が instead of けど for 'but'",
      },
      {
        segments: [
          { text: "私[わたし]は おばあちゃんと " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、中[なか]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses more familiar おばあちゃん for grandmother",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、中[なか]へは " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 中へは instead of 中には",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと 一緒[いっしょ]に 歩[ある]いて " },
          { text: "病院[びょういん]まで", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、中[なか]には " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Word order: 歩いて before the まで phrase",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと 病院[びょういん]" },
          { text: "まで", blank: true },
          { text: "歩[ある]いて " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、中[なか]には 入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Corrected 歩いて行く with only 行く conjugated",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと 一緒[いっしょ]に 病院[びょういん]" },
          { text: "まで", blank: true },
          { text: "歩[ある]いて " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、病院[びょういん]には 入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Adds 一緒に and uses 病院には入らない",
      },
      {
        segments: [
          { text: "おばあさんと 病院[びょういん]" },
          { text: "まで", blank: true },
          { text: "歩[ある]いて " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、私[わたし]は 中[なか]には 入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "No initial subject; corrected 歩いて行く",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと 病院[びょういん]" },
          { text: "まで", blank: true },
          { text: "歩[ある]いて " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、中[なか]には 入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Corrected 歩いて行く with が for contrast",
      },
      {
        segments: [
          { text: "私[わたし]は おばあさんと 病院[びょういん]" },
          { text: "まで", blank: true },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "けど、中[なか]には 入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 行く instead of 歩く; natural but less literal",
      },
    ],
  },
];

import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I will make the coffee sweet with sugar.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]で コーヒーを " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using 砂糖で to mean “with sugar”.",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを 砂糖[さとう]で " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Different word order: places コーヒーを before 砂糖で.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を 入[い]れて コーヒーを " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 入れて to express making it sweet by putting in sugar.",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーに 砂糖[さとう]を 入[い]れて " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses コーヒーに砂糖を入れて; target コーヒー is marked by に before 入れる.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を 使[つか]って コーヒーを " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 砂糖を使って, “using sugar,” to express “with sugar.”",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを 砂糖[さとう]を 使[つか]って " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Alternative order with 砂糖を使って after コーヒーを.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]で この コーヒーを " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies “the coffee” as このコーヒー.",
      },
      {
        segments: [
          { text: "私[わたし]は この コーヒーを 砂糖[さとう]で " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies このコーヒー with alternate word order.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を 入[い]れて この コーヒーを " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses このコーヒー and 砂糖を入れて.",
      },
      {
        segments: [
          { text: "私[わたし]は この コーヒーに 砂糖[さとう]を 入[い]れて " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses このコーヒーに砂糖を入れて.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を 使[つか]って この コーヒーを " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses このコーヒー and 砂糖を使って.",
      },
      {
        segments: [
          { text: "私[わたし]は この コーヒーを 砂糖[さとう]を 使[つか]って " },
          { text: "甘[あま]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses このコーヒー with 砂糖を使って in later position.",
      },
    ],
  },
  {
    english: "Please make the soup hot.",
    answers: [
      {
        segments: [
          { text: "スープを" },
          { text: "熱[あつ]くして", blank: true },
          { text: "ください" },
        ],
        notes: "Basic request using the object marker を and ～くする in the てください form",
      },
      {
        segments: [
          { text: "スープを" },
          { text: "熱[あつ]くして", blank: true },
          { text: "もらえませんか" },
        ],
        notes: "Polite request using てもらう",
      },
      {
        segments: [
          { text: "スープを" },
          { text: "熱[あつ]くして", blank: true },
          { text: "くれませんか" },
        ],
        notes: "Polite request using てくれる",
      },
      {
        segments: [
          { text: "スープを" },
          { text: "熱[あつ]くして", blank: true },
          { text: "くれますか" },
        ],
        notes: "Request phrased as 'will you make it hot?' using てくれる",
      },
      {
        segments: [
          { text: "スープを" },
          { text: "熱[あつ]くして", blank: true },
          { text: "もらえますか" },
        ],
        notes: "Request phrased as 'could I have you make it hot?' using てもらう",
      },
    ],
  },
  {
    english: "I will make this room dark.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は この 部屋[へや]を" },
          { text: "暗[くら]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic sentence using この部屋を as the object",
      },
      {
        segments: [
          { text: "私[わたし]が この 部屋[へや]を" },
          { text: "暗[くら]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to emphasize that I am the one who will do it",
      },
      {
        segments: [
          { text: "この 部屋[へや]を 私[わたし]が" },
          { text: "暗[くら]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order, emphasizing this room as the object",
      },
    ],
  },
  {
    english: "Please make the letters on this poster bigger.",
    hint: "poster = ポスター",
    answers: [
      {
        segments: [
          { text: "この ポスターの 字[じ]を もっと" },
          { text: "大[おお]きくして", blank: true },
          { text: "ください" },
        ],
        notes: "Basic translation using 字 for the letters/characters",
      },
      {
        segments: [
          { text: "この ポスターの 文字[もじ]を もっと" },
          { text: "大[おお]きくして", blank: true },
          { text: "ください" },
        ],
        notes: "Using 文字 instead of 字 for letters/characters",
      },
      {
        segments: [
          { text: "この ポスターにある 字[じ]を もっと" },
          { text: "大[おお]きくして", blank: true },
          { text: "ください" },
        ],
        notes: "Using にある to mean the letters that are on the poster",
      },
      {
        segments: [
          { text: "この ポスターにある 文字[もじ]を もっと" },
          { text: "大[おお]きくして", blank: true },
          { text: "ください" },
        ],
        notes: "Using にある with 文字",
      },
      {
        segments: [
          { text: "この ポスターの 字[じ]を" },
          { text: "大[おお]きくして", blank: true },
          { text: "ください" },
        ],
        notes: "Omitting もっと; 大きくする can imply making bigger in context",
      },
      {
        segments: [
          { text: "この ポスターの 文字[もじ]を" },
          { text: "大[おお]きくして", blank: true },
          { text: "ください" },
        ],
        notes: "Omitting もっと with 文字",
      },
    ],
  },
  {
    english: "I want to make my hair shorter before the graduation ceremony.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]の 前[まえ]に 髪[かみ]を もっと" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with もっと to express “shorter” explicitly",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]の 前[まえ]に 髪[かみ]を" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Without もっと; 短くする itself naturally means make it shorter",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]の 前[まえ]に 髪[かみ]を 少[すこ]し" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 少し to mean a little shorter",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]の 前[まえ]に もっと 髪[かみ]を" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places もっと before the object rather than immediately before the blank",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]の 前[まえ]に、私[わたし]は 髪[かみ]を もっと" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase fronted before the subject",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]の 前[まえ]に、髪[かみ]を もっと" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Drops the pronoun after fronting the time phrase; natural when the speaker is obvious",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]の 前[まえ]に、髪[かみ]を" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Pronoun omitted and no もっと",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]の 前[まえ]に、髪[かみ]を 少[すこ]し" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Pronoun omitted with 少し",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]までに 髪[かみ]を もっと" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses までに to mean by/before the graduation ceremony",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]までに 髪[かみ]を" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses までに without もっと",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]までに 髪[かみ]を 少[すこ]し" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses までに with 少し",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]までに 髪[かみ]を もっと" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Includes explicit subject with までに",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]までに 髪[かみ]を" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject with までに and no もっと",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]までに 髪[かみ]を 少[すこ]し" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject with までに and 少し",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]までには 髪[かみ]を もっと" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses までには for emphasis on having it done by the ceremony",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]の 前[まえ]までに 髪[かみ]を もっと" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses の前までに to mean by before the graduation ceremony",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]の 前[まえ]までに 髪[かみ]を" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses の前までに without もっと",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]の 前[まえ]までに 髪[かみ]を 少[すこ]し" },
          { text: "短[みじか]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses の前までに with 少し",
      },
    ],
  },
  {
    english: "The baby is sleeping, so I’ll make the TV sound a little quieter.",
    answers: [
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、テレビの 音[おと]を 少[すこ]し " },
          { text: "小[ちい]さく", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with ので and 少し; all key vocabulary is known.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、テレビの 音[おと]を 少[すこ]し " },
          { text: "小[ちい]さく", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から instead of ので for a slightly more direct/casual reason.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、少[すこ]し テレビの 音[おと]を " },
          { text: "小[ちい]さく", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves 少し before the object phrase.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、少[すこ]し テレビの 音[おと]を " },
          { text: "小[ちい]さく", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から and places 少し before the object phrase.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、テレビを 少[すこ]し " },
          { text: "静[しず]かに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the な-adjective 静かにする to mean making the TV quieter.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、テレビを 少[すこ]し " },
          { text: "静[しず]かに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "静かにする with から.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、少[すこ]し テレビを " },
          { text: "静[しず]かに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "静かにする with 少し moved before テレビ.",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、少[すこ]し テレビを " },
          { text: "静[しず]かに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "から plus 少し before テレビ with 静かにする.",
      },
    ],
  },
  {
    english: "I’ll make the curry spicy with this.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は これで カレーを " },
          { text: "辛[から]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic word order: with this, make the curry spicy.",
      },
      {
        segments: [
          { text: "これで 私[わたし]は カレーを " },
          { text: "辛[から]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered to put これで at the beginning.",
      },
      {
        segments: [
          { text: "私[わたし]は カレーを これで " },
          { text: "辛[から]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered to place これで after the object.",
      },
      {
        segments: [
          { text: "これで カレーを " },
          { text: "辛[から]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Pronoun omitted; natural because the subject is understood.",
      },
      {
        segments: [
          { text: "カレーを これで " },
          { text: "辛[から]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Pronoun omitted with object-first order.",
      },
      {
        segments: [
          { text: "この カレーを これで " },
          { text: "辛[から]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies 'this curry'; natural if referring to the curry at hand.",
      },
      {
        segments: [
          { text: "私[わたし]は この カレーを これで " },
          { text: "辛[から]くする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Includes explicit subject and specifies this curry.",
      },
    ],
  },
  {
    english: "This room is cold, so I’ll turn the heater up a little.",
    hint: "Express “turn the heater up” as making the heater stronger.",
    answers: [
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いので、ヒーターを 少[すこ]し " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with ので and 少し",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 寒[さむ]いので、ヒーターを 少[すこ]し " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the room as the thing that is cold",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いから、ヒーターを 少[すこ]し " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 寒[さむ]いから、ヒーターを 少[すこ]し " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が and から",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いので、ヒーターを ちょっと " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ちょっと for “a little”",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 寒[さむ]いので、ヒーターを ちょっと " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with ちょっと",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いから、ヒーターを ちょっと " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and ちょっと",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 寒[さむ]いから、ヒーターを ちょっと " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が, から, and ちょっと",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いので、ヒーターを もう 少[すこ]し " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using もう少し for “a little more/up”",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 寒[さむ]いので、ヒーターを もう 少[すこ]し " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が and もう少し",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いから、ヒーターを もう 少[すこ]し " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and もう少し",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 寒[さむ]いから、ヒーターを もう 少[すこ]し " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が, から, and もう少し",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いので、少[すこ]し ヒーターを " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved 少し before the object",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いから、少[すこ]し ヒーターを " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved 少し before the object with から",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いので、ちょっと ヒーターを " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved ちょっと before the object",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 寒[さむ]いから、ちょっと ヒーターを " },
          { text: "強[つよ]くする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved ちょっと before the object with から",
      },
    ],
  },
  {
    english: "I’ll make this bag lighter, so I’ll take out some books.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は この かばんを" },
          { text: "軽[かる]くする", blank: true },
          { text: "ので、 本[ほん]を 何冊[なんさつ]か" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with ので; uses 何冊か for “some books.”",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんを" },
          { text: "軽[かる]くする", blank: true },
          { text: "から、 本[ほん]を 何冊[なんさつ]か" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から instead of ので for “so/because.”",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんを" },
          { text: "軽[かる]くする", blank: true },
          { text: "ので、 本[ほん]を 少[すこ]し" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 少し to express taking out some books.",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんを" },
          { text: "軽[かる]くする", blank: true },
          { text: "から、 本[ほん]を 少[すこ]し" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から and 少し.",
      },
      {
        segments: [
          { text: "この かばんを" },
          { text: "軽[かる]くする", blank: true },
          { text: "ので、 私[わたし]は 本[ほん]を 何冊[なんさつ]か" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Pronoun appears in the second clause instead of at the sentence start.",
      },
      {
        segments: [
          { text: "この かばんを" },
          { text: "軽[かる]くする", blank: true },
          { text: "から、 私[わたし]は 本[ほん]を 何冊[なんさつ]か" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Pronoun in second clause; uses から.",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんを" },
          { text: "もっと 軽[かる]くする", blank: true },
          { text: "ので、 本[ほん]を 何冊[なんさつ]か" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds もっと to emphasize making it lighter than it is now.",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんを" },
          { text: "もっと 軽[かる]くする", blank: true },
          { text: "から、 本[ほん]を 何冊[なんさつ]か" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds もっと; uses から.",
      },
      {
        segments: [
          { text: "この かばんを" },
          { text: "もっと 軽[かる]くする", blank: true },
          { text: "ので、 本[ほん]を 少[すこ]し" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "No initial pronoun; もっと and 少し.",
      },
      {
        segments: [
          { text: "この かばんを" },
          { text: "少[すこ]し 軽[かる]くする", blank: true },
          { text: "ので、 本[ほん]を 何冊[なんさつ]か" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 少し before 軽くする to mean make it a little lighter.",
      },
      {
        segments: [
          { text: "この かばんを" },
          { text: "少[すこ]し 軽[かる]くする", blank: true },
          { text: "から、 本[ほん]を 何冊[なんさつ]か" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 少し before 軽くする with から.",
      },
    ],
  },
  {
    english: "I'll make this dirty desk clean before dinner.",
    answers: [
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 前[まえ]に、この 汚[きたな]い 机[つくえ]を " },
          { text: "きれいにする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic wording with きれいにする for “make clean.”",
      },
      {
        segments: [
          { text: "夕食[ゆうしょく]の 前[まえ]に、この 汚[きたな]い 机[つくえ]を " },
          { text: "きれいにする", blank: true, conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 夕食 for dinner.",
      },
    ],
  },
];

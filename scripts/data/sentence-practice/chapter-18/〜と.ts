import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "If I press this switch, the light turns on.",
    answers: [
      {
        segments: [
          { text: "この スイッチを " },
          { text: "押[お]すと", blank: true },
          { text: "、電気[でんき]が " },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この スイッチを " },
          { text: "押[お]すと", blank: true },
          { text: "、電気[でんき]は " },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この スイッチを " },
          { text: "押[お]すと", blank: true },
          { text: "、明[あ]かりが " },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この スイッチを " },
          { text: "押[お]すと", blank: true },
          { text: "、明[あ]かりは " },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この スイッチ " },
          { text: "押[お]すと", blank: true },
          { text: "、電気[でんき]が " },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この スイッチ " },
          { text: "押[お]すと", blank: true },
          { text: "、明[あ]かりが " },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I put juice in the refrigerator, it gets cold.",
    answers: [
      {
        segments: [
          { text: "ジュースを 冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れると", blank: true },
          { text: "、冷[つめ]たく " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に ジュースを " },
          { text: "入[い]れると", blank: true },
          { text: "、冷[つめ]たく " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ジュースを 冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れると", blank: true },
          { text: "、冷[ひ]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に ジュースを " },
          { text: "入[い]れると", blank: true },
          { text: "、冷[ひ]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ジュースは 冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れると", blank: true },
          { text: "、冷[つめ]たく " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ジュースは 冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れると", blank: true },
          { text: "、冷[ひ]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れると", blank: true },
          { text: "、ジュースは 冷[つめ]たく " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れると", blank: true },
          { text: "、ジュースは 冷[ひ]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If the room is dark, I can't read books.",
    answers: [
      {
        segments: [
          { text: "部屋[へや]が" },
          { text: "暗[くら]いと", blank: true },
          { text: "、本[ほん]が " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]が" },
          { text: "暗[くら]いと", blank: true },
          { text: "、本[ほん]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "暗[くら]いと", blank: true },
          { text: "、本[ほん]が " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "暗[くら]いと", blank: true },
          { text: "、本[ほん]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "暗[くら]い 部屋[へや]だと", blank: true },
          { text: "、本[ほん]が " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "暗[くら]い 部屋[へや]だと", blank: true },
          { text: "、本[ほん]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]が" },
          { text: "暗[くら]いと", blank: true },
          { text: "、私[わたし]は 本[ほん]が " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]が" },
          { text: "暗[くら]いと", blank: true },
          { text: "、私[わたし]は 本[ほん]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "暗[くら]いと", blank: true },
          { text: "、私[わたし]は 本[ほん]が " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "暗[くら]いと", blank: true },
          { text: "、私[わたし]は 本[ほん]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が" },
          { text: "暗[くら]いと", blank: true },
          { text: "、本[ほん]が " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が" },
          { text: "暗[くら]いと", blank: true },
          { text: "、本[ほん]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I drink coffee at night, I can't sleep.",
    answers: [
      {
        segments: [
          { text: "夜[よる]にコーヒーを" },
          { text: "飲[の]むと", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "夜[よる]、コーヒーを" },
          { text: "飲[の]むと", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "コーヒーを 夜[よる]に" },
          { text: "飲[の]むと", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "夜[よる]にコーヒーを" },
          { text: "飲[の]むと", blank: true },
          { text: "、眠[ねむ]れない" },
        ],
      },
      {
        segments: [
          { text: "夜[よる]、コーヒーを" },
          { text: "飲[の]むと", blank: true },
          { text: "、眠[ねむ]れない" },
        ],
      },
      {
        segments: [
          { text: "コーヒーを 夜[よる]に" },
          { text: "飲[の]むと", blank: true },
          { text: "、眠[ねむ]れない" },
        ],
      },
    ],
  },
  {
    english: "If the door is open, the cat goes outside.",
    answers: [
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]くと", blank: true },
          { text: "、猫[ねこ]が 外[そと]に" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]いて", blank: true },
          { text: "いると", blank: true },
          { text: "、猫[ねこ]が 外[そと]に" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]いて", blank: true },
          { text: "いると", blank: true },
          { text: "、猫[ねこ]が 外[そと]へ" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]いて", blank: true },
          { text: "いると", blank: true },
          { text: "、猫[ねこ]は 外[そと]に" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]いて", blank: true },
          { text: "いると", blank: true },
          { text: "、猫[ねこ]が 外[そと]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]いて", blank: true },
          { text: "いると", blank: true },
          { text: "、猫[ねこ]は 外[そと]へ" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]くと", blank: true },
          { text: "、猫[ねこ]が 外[そと]へ" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]くと", blank: true },
          { text: "、猫[ねこ]は 外[そと]に" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]くと", blank: true },
          { text: "、猫[ねこ]は 外[そと]へ" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "猫[ねこ]は、ドアが" },
          { text: "開[あ]いて", blank: true },
          { text: "いると", blank: true },
          { text: "、外[そと]に" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "猫[ねこ]は、ドアが" },
          { text: "開[あ]いて", blank: true },
          { text: "いると", blank: true },
          { text: "、外[そと]へ" },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I put sugar in coffee, it becomes sweet.",
    answers: [
      {
        segments: [
          { text: "コーヒーに 砂糖[さとう]を " },
          { text: "入[い]れると", blank: true },
          { text: "、甘[あま]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: " " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "砂糖[さとう]を コーヒーに " },
          { text: "入[い]れると", blank: true },
          { text: "、甘[あま]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: " " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "コーヒーに 砂糖[さとう]を " },
          { text: "入[い]れると", blank: true },
          { text: "、コーヒーが 甘[あま]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: " " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "砂糖[さとう]を コーヒーに " },
          { text: "入[い]れると", blank: true },
          { text: "、コーヒーが 甘[あま]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: " " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I open the window in winter, the room gets cold.",
    answers: [
      {
        segments: [
          { text: "冬[ふゆ]に 窓[まど]を " },
          { text: "開[あ]けると", blank: true },
          { text: "、部屋[へや]が " },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: " " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "窓[まど]を " },
          { text: "冬[ふゆ]に " },
          { text: "開[あ]けると", blank: true },
          { text: "、部屋[へや]が " },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: " " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "冬[ふゆ]に 窓[まど]を " },
          { text: "開[あ]けると", blank: true },
          { text: "、部屋[へや]は " },
          { text: "寒[さむ]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: " " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "冬[ふゆ]に 窓[まど]を " },
          { text: "開[あ]けると", blank: true },
          { text: "、寒[さむ]い 部屋[へや]に " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I eat spicy curry, I get thirsty.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 辛[から]い カレーを " },
          { text: "食[た]べると", blank: true },
          { text: "、喉[のど]が " },
          { text: "渇[かわ]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "辛[から]い カレーを " },
          { text: "食[た]べると", blank: true },
          { text: "、私[わたし]は 喉[のど]が " },
          { text: "渇[かわ]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "辛[から]い カレーを " },
          { text: "食[た]べると", blank: true },
          { text: "、喉[のど]が " },
          { text: "渇[かわ]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は カレーが " },
          { text: "辛[から]いと", blank: true },
          { text: "、喉[のど]が " },
          { text: "渇[かわ]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "カレーが " },
          { text: "辛[から]いと", blank: true },
          { text: "、私[わたし]は 喉[のど]が " },
          { text: "渇[かわ]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "カレーが " },
          { text: "辛[から]いと", blank: true },
          { text: "、喉[のど]が " },
          { text: "渇[かわ]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If the soup is hot, I can't drink it right away.",
    answers: [
      {
        segments: [
          { text: "スープが" },
          { text: "熱[あつ]いと", blank: true },
          { text: "、すぐ" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "スープが" },
          { text: "熱[あつ]いと", blank: true },
          { text: "、すぐには" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "スープは" },
          { text: "熱[あつ]いと", blank: true },
          { text: "、すぐ" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "スープは" },
          { text: "熱[あつ]いと", blank: true },
          { text: "、すぐには" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "熱[あつ]い スープだと", blank: true },
          { text: "、すぐ" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "熱[あつ]い スープだと", blank: true },
          { text: "、すぐには" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I don't leave home by eight, I miss the train.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 家[いえ]を 出[で]るのが 八時[はちじ]を " },
          { text: "過[す]ぎると", blank: true },
          { text: "、電車[でんしゃ]に 乗[の]り 遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 八時[はちじ]を 過[す]ぎてから 家[いえ]を " },
          { text: "出[で]ると", blank: true },
          { text: "、電車[でんしゃ]に 乗[の]り 遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 八時[はちじ]より 後[あと]に 家[いえ]を " },
          { text: "出[で]ると", blank: true },
          { text: "、電車[でんしゃ]に 乗[の]り 遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "八時[はちじ]を 過[す]ぎてから 家[いえ]を " },
          { text: "出[で]ると", blank: true },
          { text: "、私[わたし]は 電車[でんしゃ]に 乗[の]り 遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I walk for one hour, my legs hurt.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 一時間[いちじかん] " },
          { text: "歩[ある]くと", blank: true },
          { text: "、足[あし]が 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "一時間[いちじかん] " },
          { text: "歩[ある]くと", blank: true },
          { text: "、私[わたし]の 足[あし]が 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 一時間[いちじかん] " },
          { text: "歩[ある]くと", blank: true },
          { text: "、足[あし]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "一時間[いちじかん] " },
          { text: "歩[ある]くと", blank: true },
          { text: "、私[わたし]の 足[あし]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If the weather is nice, the park gets crowded.",
    answers: [
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "よいと", blank: true },
          { text: "、公園[こうえん]が " },
          { text: "混[こ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "よいと", blank: true },
          { text: "、公園[こうえん]は " },
          { text: "混[こ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "よい 天気[てんき]" },
          { text: "だと", blank: true },
          { text: "、公園[こうえん]が " },
          { text: "混[こ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "よい 天気[てんき]" },
          { text: "だと", blank: true },
          { text: "、公園[こうえん]は " },
          { text: "混[こ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "よいと", blank: true },
          { text: "、公園[こうえん]が " },
          { text: "混[こ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "天気[てんき]が" },
          { text: "よいと", blank: true },
          { text: "、公園[こうえん]は " },
          { text: "混[こ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I forget the password, I can't use the app.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は パスワードを" },
          { text: "忘[わす]れると", blank: true },
          { text: "、アプリが" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は パスワードを" },
          { text: "忘[わす]れると", blank: true },
          { text: "、アプリを" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は パスワードを" },
          { text: "忘[わす]れると", blank: true },
          { text: "、アプリを 使[つか]うことが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は パスワードを" },
          { text: "忘[わす]れてしまうと", blank: true },
          { text: "、アプリが" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は パスワードを" },
          { text: "忘[わす]れてしまうと", blank: true },
          { text: "、アプリを" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "パスワードを" },
          { text: "忘[わす]れると", blank: true },
          { text: "、私[わたし]は アプリが" },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I take the medicine after meals, my stomach doesn't hurt.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]むと", blank: true },
          { text: "、おなかが " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]の 後[あと]に 薬[くすり]を " },
          { text: "飲[の]むと", blank: true },
          { text: "、おなかが " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]むと", blank: true },
          { text: "、私[わたし]は おなかが " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ご飯[はん]の 後[あと]に 薬[くすり]を " },
          { text: "飲[の]むと", blank: true },
          { text: "、私[わたし]は おなかが " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を 食後[しょくご]に " },
          { text: "飲[の]むと", blank: true },
          { text: "、おなかが " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 薬[くすり]を ご飯[はん]の 後[あと]に " },
          { text: "飲[の]むと", blank: true },
          { text: "、おなかが " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]むと", blank: true },
          { text: "、おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は ご飯[はん]の 後[あと]に 薬[くすり]を " },
          { text: "飲[の]むと", blank: true },
          { text: "、おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "食後[しょくご]に 薬[くすり]を " },
          { text: "飲[の]むと", blank: true },
          { text: "、私[わたし]は おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "薬[くすり]を 食後[しょくご]に " },
          { text: "飲[の]むと", blank: true },
          { text: "、私[わたし]は おなかが 痛[いた]く " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If the road is narrow, cars can't get through.",
    answers: [
      {
        segments: [
          { text: "道[みち]が" },
          { text: "狭[せま]いと", blank: true },
          { text: "、車[くるま]が" },
          { text: "通[とお]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "道[みち]が" },
          { text: "狭[せま]いと", blank: true },
          { text: "、車[くるま]は" },
          { text: "通[とお]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "道[みち]が" },
          { text: "狭[せま]いと", blank: true },
          { text: "、車[くるま]が" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "道[みち]が" },
          { text: "狭[せま]いと", blank: true },
          { text: "、車[くるま]は" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "道[みち]が" },
          { text: "狭[せま]いと", blank: true },
          { text: "、車[くるま]で" },
          { text: "通[とお]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "道[みち]が" },
          { text: "狭[せま]いと", blank: true },
          { text: "、車[くるま]で" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "狭[せま]い" },
          { text: "道[みち]だと", blank: true },
          { text: "、車[くるま]が" },
          { text: "通[とお]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "狭[せま]い" },
          { text: "道[みち]だと", blank: true },
          { text: "、車[くるま]は" },
          { text: "通[とお]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "狭[せま]い" },
          { text: "道[みち]だと", blank: true },
          { text: "、車[くるま]が" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "狭[せま]い" },
          { text: "道[みち]だと", blank: true },
          { text: "、車[くるま]は" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I don't lock the door, the dog goes outside.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ドアに 鍵[かぎ]を かけ 忘[わす]れると", blank: true },
          { text: "、犬[いぬ]が 外[そと]に " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は ドアに 鍵[かぎ]を かけ 忘[わす]れると", blank: true },
          { text: "、犬[いぬ]が 外[そと]へ " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は ドアに 鍵[かぎ]を かけ 忘[わす]れると", blank: true },
          { text: "、犬[いぬ]は 外[そと]に " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 鍵[かぎ]を ドアに かけ 忘[わす]れると", blank: true },
          { text: "、犬[いぬ]が 外[そと]に " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアの 鍵[かぎ]を かけ 忘[わす]れると", blank: true },
          { text: "、犬[いぬ]が 外[そと]に " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアの 鍵[かぎ]を かけ 忘[わす]れると", blank: true },
          { text: "、犬[いぬ]が 外[そと]へ " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ドアに 鍵[かぎ]を かけ 忘[わす]れると", blank: true },
          { text: "、犬[いぬ]が 外[そと]に " },
          { text: "出[で]ていく", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I take off my glasses, I can't see anything.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 眼鏡[めがね]を 取[と]ると", blank: true },
          { text: "、何[なに]も " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 眼鏡[めがね]を 外[はず]すと", blank: true },
          { text: "、何[なに]も " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "眼鏡[めがね]を 取[と]ると", blank: true },
          { text: "、私[わたし]は 何[なに]も " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "眼鏡[めがね]を 外[はず]すと", blank: true },
          { text: "、私[わたし]は 何[なに]も " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If I close the curtains, the room gets dark.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は カーテンを" },
          { text: "閉[し]めると", blank: true },
          { text: "、部屋[へや]が " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "カーテンを" },
          { text: "閉[し]めると", blank: true },
          { text: "、部屋[へや]が " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]が カーテンを" },
          { text: "閉[し]めると", blank: true },
          { text: "、部屋[へや]が " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "カーテンを 私[わたし]が" },
          { text: "閉[し]めると", blank: true },
          { text: "、部屋[へや]が " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]は、カーテンを" },
          { text: "閉[し]めると", blank: true },
          { text: " " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "カーテンを" },
          { text: "閉[し]めると", blank: true },
          { text: "、部屋[へや]は " },
          { text: "暗[くら]い", conjugation: { pos: "I-adjective", form: "adverb", polarity: "positive", tense: "non-past" } },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If the baby cries, the mother gets up right away.",
    answers: [
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くと", blank: true },
          { text: "、母[はは]は すぐ " },
          { text: "起[お]きる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くと", blank: true },
          { text: "、すぐ 母[はは]は " },
          { text: "起[お]きる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くと", blank: true },
          { text: "、母[はは]が すぐ " },
          { text: "起[お]きる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "赤[あか]ちゃんは 泣[な]くと", blank: true },
          { text: "、母[はは]は すぐ " },
          { text: "起[お]きる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "赤[あか]ちゃんは 泣[な]くと", blank: true },
          { text: "、母[はは]が すぐ " },
          { text: "起[お]きる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くと", blank: true },
          { text: "、母[はは]は すぐ " },
          { text: "起[お]きる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くと", blank: true },
          { text: "、母親[ははおや]は すぐ " },
          { text: "起[お]きる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 泣[な]くと", blank: true },
          { text: "、母[はは]は すぐ " },
          { text: "起[お]きる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "If the sofa is dirty, guests don’t sit there.",
    answers: [
      {
        segments: [
          { text: "ソファが" },
          { text: "汚[きたな]いと", blank: true },
          { text: "、客[きゃく]はそこに" },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ソファが" },
          { text: "汚[きたな]いと", blank: true },
          { text: "、客[きゃく]がそこに" },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ソファが" },
          { text: "汚[きたな]いと", blank: true },
          { text: "、客[きゃく]は" },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "汚[きたな]いソファだと", blank: true },
          { text: "、客[きゃく]はそこに" },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "汚[きたな]いソファだと", blank: true },
          { text: "、客[きゃく]は" },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ソファが" },
          { text: "汚[よご]れて", blank: true },
          { text: "いると", blank: true },
          { text: "、客[きゃく]はそこに" },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ソファが" },
          { text: "汚[よご]れて", blank: true },
          { text: "いると", blank: true },
          { text: "、客[きゃく]がそこに" },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ソファが" },
          { text: "汚[よご]れて", blank: true },
          { text: "いると", blank: true },
          { text: "、客[きゃく]は" },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
    ],
  },
];

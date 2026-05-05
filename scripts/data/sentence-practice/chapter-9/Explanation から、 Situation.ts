import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Because this room is quiet, I study here every morning.",
    answers: [
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 毎朝[まいあさ] ここで " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Basic translation with この部屋は and the reason marked by だから",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 毎朝[まいあさ] ここで " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が to mark this room as the reason/focus",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、毎朝[まいあさ] 私[わたし]は ここで " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Moving 毎朝 before 私は in the main clause",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、ここで 私[わたし]は 毎朝[まいあさ] " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Placing ここで at the start of the main clause for emphasis",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は ここで 毎朝[まいあさ] " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Switching the order of ここで and 毎朝",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 毎朝[まいあさ] この 部屋[へや]で " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using この部屋で instead of ここで for the place of study",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 毎朝[まいあさ] この 部屋[へや]で " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Using が in the reason clause and この部屋で in the main clause",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、毎朝[まいあさ] ここで " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropping the subject 私は in the main clause",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、毎朝[まいあさ] ここで " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropping 私は and using が in the reason clause",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、ここで 毎朝[まいあさ] " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropping 私は and putting ここで before 毎朝",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、毎朝[まいあさ] この 部屋[へや]で " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropping 私は and using この部屋で instead of ここで",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、毎朝[まいあさ] この 部屋[へや]で " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropping 私は, using が, and repeating この部屋で",
      },
      {
        segments: [
          { text: "私[わたし]は この 部屋[へや]が 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、毎朝[まいあさ] ここで " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Starting with 私は as the overall topic before the reason clause",
      },
      {
        segments: [
          { text: "私[わたし]は この 部屋[へや]が 静[しず]か" },
          { text: "だから", blank: true },
          { text: "、ここで 毎朝[まいあさ] " },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Overall topic 私は, with ここで before 毎朝",
      },
    ],
  },
  {
    english:
      "Because I don't have any money today, I won't buy that expensive hat.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は お金[かね]が" },
          { text: "ないから", blank: true },
          { text: "、あの 高[たか]い 帽子[ぼうし]は " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Basic translation with あの for 'that' and は marking the hat as the thing not being bought.",
      },
      {
        segments: [
          { text: "今日[きょう]は お金[かね]が" },
          { text: "ないから", blank: true },
          { text: "、その 高[たか]い 帽子[ぼうし]は " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Uses その for 'that' when the hat is near the listener or previously mentioned.",
      },
      {
        segments: [
          { text: "今日[きょう]は お金[かね]が" },
          { text: "ないから", blank: true },
          { text: "、あの 高[たか]い 帽子[ぼうし]を " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses を to mark the direct object instead of topical は.",
      },
      {
        segments: [
          { text: "今日[きょう]は お金[かね]が" },
          { text: "ないから", blank: true },
          { text: "、その 高[たか]い 帽子[ぼうし]を " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses その plus を for the direct object.",
      },
      {
        segments: [
          { text: "今日[きょう]、お金[かね]が" },
          { text: "ないから", blank: true },
          { text: "、あの 高[たか]い 帽子[ぼうし]は " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Drops the topic particle after 今日, making it a simple time expression.",
      },
      {
        segments: [
          { text: "今日[きょう]、お金[かね]が" },
          { text: "ないから", blank: true },
          { text: "、その 高[たか]い 帽子[ぼうし]は " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Drops は after 今日 and uses その for 'that'.",
      },
      {
        segments: [
          { text: "今日[きょう]、お金[かね]が" },
          { text: "ないから", blank: true },
          { text: "、あの 高[たか]い 帽子[ぼうし]を " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Drops は after 今日 and uses を for the direct object.",
      },
      {
        segments: [
          { text: "今日[きょう]、お金[かね]が" },
          { text: "ないから", blank: true },
          { text: "、その 高[たか]い 帽子[ぼうし]を " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Drops は after 今日, uses その, and marks the hat with を.",
      },
      {
        segments: [
          { text: "お金[かね]が" },
          { text: "ないから", blank: true },
          { text: "、今日[きょう]は あの 高[たか]い 帽子[ぼうし]は " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Places 今日は in the main clause: 'I won't buy it today because I have no money.'",
      },
      {
        segments: [
          { text: "今日[きょう]は お金[かね]が 全然[ぜんぜん]" },
          { text: "ないから", blank: true },
          { text: "、あの 高[たか]い 帽子[ぼうし]は " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Adds 全然 to emphasize 'not any money at all'.",
      },
      {
        segments: [
          { text: "今日[きょう]は お金[かね]が 全然[ぜんぜん]" },
          { text: "ないから", blank: true },
          { text: "、その 高[たか]い 帽子[ぼうし]は " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Emphatic 全然 with その.",
      },
      {
        segments: [
          { text: "今日[きょう]は お金[かね]が 全然[ぜんぜん]" },
          { text: "ないから", blank: true },
          { text: "、あの 高[たか]い 帽子[ぼうし]を " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Emphatic 全然 with を for the object.",
      },
      {
        segments: [
          { text: "今日[きょう]は お金[かね]が 全然[ぜんぜん]" },
          { text: "ないから", blank: true },
          { text: "、その 高[たか]い 帽子[ぼうし]を " },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Emphatic 全然 with その and を.",
      },
    ],
  },
  {
    english: "Because Yuki is still sleeping, please don't turn on the light.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんは まだ 寝[ね]ている" },
          { text: "から", blank: true },
          { text: "、電気[でんき]を つけないでください" },
        ],
        notes: "Basic translation with は marking Yuki as the topic",
      },
      {
        segments: [
          { text: "ゆきさんが まだ 寝[ね]ている" },
          { text: "から", blank: true },
          { text: "、電気[でんき]を つけないでください" },
        ],
        notes: "Using が to neutrally identify Yuki as the one sleeping",
      },
      {
        segments: [
          { text: "まだ ゆきさんは 寝[ね]ている" },
          { text: "から", blank: true },
          { text: "、電気[でんき]を つけないでください" },
        ],
        notes: "Adverb まだ placed at the beginning of the reason clause",
      },
      {
        segments: [
          { text: "まだ ゆきさんが 寝[ね]ている" },
          { text: "から", blank: true },
          { text: "、電気[でんき]を つけないでください" },
        ],
        notes: "Adverb まだ first, with が marking the subject",
      },
      {
        segments: [
          { text: "ゆきさんは まだ 寝[ね]ている" },
          { text: "から", blank: true },
          { text: "、電気[でんき] つけないでください" },
        ],
        notes: "Casual particle drop: omitting を after 電気",
      },
      {
        segments: [
          { text: "ゆきさんが まだ 寝[ね]ている" },
          { text: "から", blank: true },
          { text: "、電気[でんき] つけないでください" },
        ],
        notes: "Using が for Yuki and dropping を after 電気",
      },
      {
        segments: [
          { text: "まだ ゆきさんは 寝[ね]ている" },
          { text: "から", blank: true },
          { text: "、電気[でんき] つけないでください" },
        ],
        notes: "Adverb first and object particle を omitted",
      },
      {
        segments: [
          { text: "まだ ゆきさんが 寝[ね]ている" },
          { text: "から", blank: true },
          { text: "、電気[でんき] つけないでください" },
        ],
        notes: "Adverb first, が subject marker, and を omitted",
      },
    ],
  },
  {
    english:
      "Because yesterday's exam was difficult, I didn't answer anything.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、何[なに]も " },
          {
            text: "答[こた]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard translation using 試験 and は; subject 'I' is omitted.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]が 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、何[なに]も " },
          {
            text: "答[こた]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Using が to mark the exam as the reason/focus.",
      },
      {
        segments: [
          { text: "昨日[きのう]の テストは 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、何[なに]も " },
          {
            text: "答[こた]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Using テスト instead of 試験.",
      },
      {
        segments: [
          { text: "昨日[きのう]の テストが 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、何[なに]も " },
          {
            text: "答[こた]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Using テスト with が.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、私[わたし]は 何[なに]も " },
          {
            text: "答[こた]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicitly includes 私は in the result clause.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]が 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、私[わたし]は 何[なに]も " },
          {
            text: "答[こた]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 私は with が in the reason clause.",
      },
      {
        segments: [
          { text: "昨日[きのう]の テストは 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、私[わたし]は 何[なに]も " },
          {
            text: "答[こた]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 私は with テスト.",
      },
      {
        segments: [
          { text: "昨日[きのう]の テストが 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、私[わたし]は 何[なに]も " },
          {
            text: "答[こた]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 私は with テスト and が.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、答[こた]えは 何[なに]も " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Natural exam-context wording: 'I didn't write any answers.'",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]が 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、答[こた]えは 何[なに]も " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Using が and 'didn't write any answers.'",
      },
      {
        segments: [
          { text: "昨日[きのう]の テストは 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、答[こた]えは 何[なに]も " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Using テスト with 'didn't write any answers.'",
      },
      {
        segments: [
          { text: "昨日[きのう]の テストが 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、答[こた]えは 何[なに]も " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Using テスト and が with 'didn't write any answers.'",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、私[わたし]は 答[こた]えを 何[なに]も " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject with を-marked object.",
      },
      {
        segments: [
          { text: "昨日[きのう]の テストは 難[むずか]しかった" },
          { text: "から", blank: true },
          { text: "、私[わたし]は 答[こた]えを 何[なに]も " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicit subject and テスト, with 'answer(s)' as object.",
      },
    ],
  },
  {
    english: "Because this restaurant is famous, let's eat lunch here today.",
    answers: [
      {
        segments: [
          { text: "この レストランは " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、今日[きょう]は ここで 昼[ひる]ご飯[はん]を " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard translation with このレストランは and 今日 as topic",
      },
      {
        segments: [
          { text: "この レストランは " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、今日[きょう] ここで 昼[ひる]ご飯[はん]を " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Omitting は after 今日",
      },
      {
        segments: [
          { text: "この レストランは " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、ここで 今日[きょう] 昼[ひる]ご飯[はん]を " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reordered: location before time in the main clause",
      },
      {
        segments: [
          { text: "この レストランは " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、ここで 今日[きょう]は 昼[ひる]ご飯[はん]を " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Location first, with 今日は as contrastive/topic marker",
      },
      {
        segments: [
          { text: "この レストランは " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、今日[きょう]の 昼[ひる]ご飯[はん]は ここで " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 今日の昼ご飯 as the topic",
      },
      {
        segments: [
          { text: "この レストランが " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、今日[きょう]は ここで 昼[ひる]ご飯[はん]を " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Using が to mark this restaurant as the reason for choosing here",
      },
      {
        segments: [
          { text: "この レストランが " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、今日[きょう] ここで 昼[ひる]ご飯[はん]を " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が, with は omitted after 今日",
      },
      {
        segments: [
          { text: "この レストランが " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、ここで 今日[きょう] 昼[ひる]ご飯[はん]を " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が and placing ここで before 今日",
      },
      {
        segments: [
          { text: "ここは " },
          { text: "有名[ゆうめい]な レストランだから", blank: true },
          { text: "、今日[きょう]は ここで 昼[ひる]ご飯[はん]を " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Paraphrase: because this place is a famous restaurant",
      },
      {
        segments: [
          { text: "ここは " },
          { text: "有名[ゆうめい]な レストランだから", blank: true },
          { text: "、今日[きょう]の 昼[ひる]ご飯[はん]は ここで " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Paraphrase with 今日の昼ご飯 as the topic",
      },
      {
        segments: [
          { text: "この レストランは " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、今日[きょう]は ここで ランチを " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using the loanword ランチ for lunch",
      },
      {
        segments: [
          { text: "この レストランは " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、今日[きょう] ここで ランチを " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ランチ, with は omitted after 今日",
      },
      {
        segments: [
          { text: "この レストランが " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、今日[きょう]は ここで ランチを " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ランチ with が in the reason clause",
      },
      {
        segments: [
          { text: "この レストランは " },
          { text: "有名[ゆうめい]だから", blank: true },
          { text: "、今日[きょう]の ランチは ここで " },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 今日のランチ as topic",
      },
    ],
  },
  {
    english:
      "Because Kenji is good at singing, let's go to karaoke together tonight.",
    hint: "Kenji = 健二; karaoke = カラオケ",
    answers: [
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]が 上手[じょうず]" },
          { text: "だから", blank: true },
          { text: "、今晩[こんばん] 一緒[いっしょ]に カラオケに " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic translation using 歌が上手 and カラオケに行く",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]うのが 上手[じょうず]" },
          { text: "だから", blank: true },
          { text: "、今晩[こんばん] 一緒[いっしょ]に カラオケに " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses the learned のがじょうず pattern: good at singing",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]が 上手[じょうず]" },
          { text: "だから", blank: true },
          { text: "、一緒[いっしょ]に 今晩[こんばん] カラオケに " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Different word order: 一緒に before 今晩",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]うのが 上手[じょうず]" },
          { text: "だから", blank: true },
          { text: "、一緒[いっしょ]に 今晩[こんばん] カラオケに " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "のがじょうず with different adverb order",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]が 上手[じょうず]" },
          { text: "だから", blank: true },
          { text: "、今夜[こんや] 一緒[いっしょ]に カラオケに " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 今夜 instead of 今晩 for tonight",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]うのが 上手[じょうず]" },
          { text: "だから", blank: true },
          { text: "、今夜[こんや] 一緒[いっしょ]に カラオケに " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 今夜 and のがじょうず",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]が 上手[じょうず]" },
          { text: "だから", blank: true },
          { text: "、カラオケに 今晩[こんばん] 一緒[いっしょ]に " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Places カラオケに earlier in the main clause",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]うのが 上手[じょうず]" },
          { text: "だから", blank: true },
          { text: "、カラオケに 今晩[こんばん] 一緒[いっしょ]に " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "のがじょうず with カラオケに earlier in the main clause",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]が 上手[じょうず]" },
          { text: "だから", blank: true },
          {
            text: "、今晩[こんばん] 健二[けんじ]さんと 一緒[いっしょ]に カラオケに ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicitly says together with Kenji",
      },
      {
        segments: [
          { text: "健二[けんじ]さんは 歌[うた]うのが 上手[じょうず]" },
          { text: "だから", blank: true },
          {
            text: "、今晩[こんばん] 健二[けんじ]さんと 一緒[いっしょ]に カラオケに ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicitly says with Kenji, using のがじょうず",
      },
    ],
  },
  {
    english: "Because tomorrow is my mother's birthday, I will make dinner.",
    answers: [
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard translation with explicit 私は and 晩ご飯 for dinner",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Omitting the subject 私は in the main clause",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 夕ご飯 instead of 晩ご飯 for dinner",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 夕ご飯 and omitting 私は",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased as 'my mother's birthday is tomorrow'",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased reason with omitted main-clause subject",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased reason and using 夕ご飯",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased reason, using 夕ご飯, and omitting 私は",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 母 for mother, natural when speaking to someone else",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 母 and omitting 私は",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 母 and 夕ご飯",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 母, 夕ご飯, and omitting 私は",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased with 母の誕生日 as topic",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased with 母の誕生日 and omitted 私は",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased with 母の誕生日 and using 夕ご飯",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased with 母の誕生日, 夕ご飯, and omitted 私は",
      },
      {
        segments: [
          { text: "明日[あした]、母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 明日 as a time adverb before the reason clause",
      },
      {
        segments: [
          { text: "明日[あした]、母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time-adverb phrasing with omitted 私は",
      },
      {
        segments: [
          { text: "明日[あした]、母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time-adverb phrasing with 夕ご飯",
      },
      {
        segments: [
          { text: "明日[あした]、母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time-adverb phrasing, 夕ご飯, and omitted 私は",
      },
      {
        segments: [
          { text: "明日[あした]、母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time-adverb phrasing with 母 and omitted 私は",
      },
      {
        segments: [
          { text: "明日[あした]、母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time-adverb phrasing with 母 and explicit 私は",
      },
      {
        segments: [
          { text: "明日[あした]、母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]は 夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time-adverb phrasing with 母 and 夕ご飯",
      },
      {
        segments: [
          { text: "明日[あした]、母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time-adverb phrasing with 母, 夕ご飯, and omitted 私は",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]が 晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が to emphasize that I will be the one making dinner",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]が 夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が for emphasis and 夕ご飯",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]が 晩[ばん]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 母 and が to emphasize the subject",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、私[わたし]が 夕[ゆう]ご 飯[はん]を " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 母, が, and 夕ご飯",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]は 私[わたし]が " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Topicalizing dinner: 'As for dinner, I will make it'",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]は 私[わたし]が " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Topicalizing dinner with 夕ご飯",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]は 私[わたし]が " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Topicalizing dinner with 母 in the reason",
      },
      {
        segments: [
          { text: "明日[あした]は 母[はは]の 誕生日[たんじょうび]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]は 私[わたし]が " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Topicalizing dinner with 母 and 夕ご飯",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]は 私[わたし]が " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased reason and topicalized dinner",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]は 私[わたし]が " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased reason and topicalized 夕ご飯",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、晩[ばん]ご 飯[はん]は 私[わたし]が " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased reason with 母 and topicalized dinner",
      },
      {
        segments: [
          { text: "母[はは]の 誕生日[たんじょうび]は 明日[あした]" },
          { text: "だから", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]は 私[わたし]が " },
          {
            text: "作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Rephrased reason with 母 and topicalized 夕ご飯",
      },
    ],
  },
  {
    english:
      "Because the weather is nice today, let's take a walk in the park after lunch.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]を " },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic translation using 公園を散歩する and 昼ご飯の後で",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]で " },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 公園で散歩する to mark the park as the activity location",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 後[あと]、公園[こうえん]を " },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Omitting で after 後 for a natural time phrase",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 後[あと]、公園[こうえん]で " },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Omitting で after 後 and using 公園で",
      },
      {
        segments: [
          { text: "天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、今日[きょう]は 昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]を ",
          },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Moving 今日 to the main clause while still meaning today's plan",
      },
      {
        segments: [
          { text: "天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、今日[きょう]は 昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]で ",
          },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Moving 今日 to main clause and using 公園で",
      },
      {
        segments: [
          { text: "今日[きょう]は " },
          { text: "天気[てんき]が " },
          { text: "よいから", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]を " },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Blank includes the full reason phrase 天気がよいから",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 後[あと]に 公園[こうえん]を " },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 後に instead of 後で",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 後[あと]に 公園[こうえん]で " },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 後に and 公園で",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]を 食[た]べた 後[あと]で 公園[こうえん]を ",
          },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 食べた後で to express after eating lunch",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]を 食[た]べた 後[あと]で 公園[こうえん]で ",
          },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 食べた後で with 公園で",
      },
      {
        segments: [
          { text: "今日[きょう]の 天気[てんき]は " },
          { text: "よいから", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]を " },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 今日の天気は as the topic of the reason clause",
      },
      {
        segments: [
          { text: "今日[きょう]の 天気[てんき]は " },
          { text: "よいから", blank: true },
          { text: "、昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]で " },
          {
            text: "散歩[さんぽ]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今日の天気は with 公園で",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]に 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 散歩に行く with 公園に",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]へ 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 散歩に行く with 公園へ",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]の 後[あと]に 公園[こうえん]に 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "散歩に行く with 後に and destination に",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]の 後[あと]に 公園[こうえん]へ 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "散歩に行く with 後に and destination へ",
      },
      {
        segments: [
          { text: "今日[きょう]の 天気[てんき]は " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]に 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今日の天気は plus 散歩に行く",
      },
      {
        segments: [
          { text: "今日[きょう]の 天気[てんき]は " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]の 後[あと]で 公園[こうえん]へ 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今日の天気は plus destination へ",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]を 食[た]べた 後[あと]で 公園[こうえん]に 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 食べた後で and 散歩に行く",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]を 食[た]べた 後[あと]で 公園[こうえん]へ 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "食べた後で with destination へ",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]を 食[た]べた 後[あと]に 公園[こうえん]に 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "食べた後に with destination に",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]が " },
          { text: "よいから", blank: true },
          {
            text: "、昼[ひる]ご 飯[はん]を 食[た]べた 後[あと]に 公園[こうえん]へ 散歩[さんぽ]に ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "食べた後に with destination へ",
      },
    ],
  },
  {
    english: "Because I forgot my textbook, may I use this dictionary?",
    answers: [
      {
        segments: [
          { text: "教科書[きょうかしょ]を 忘[わす]れた" },
          { text: "から", blank: true },
          { text: "、この 辞書[じしょ]を 使[つか]っても" },
          {
            text: "よい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Standard translation using この辞書を and 使ってもよいですか",
      },
      {
        segments: [
          { text: "私[わたし]の 教科書[きょうかしょ]を 忘[わす]れた" },
          { text: "から", blank: true },
          { text: "、この 辞書[じしょ]を 使[つか]っても" },
          {
            text: "よい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Explicitly says my textbook with 私の",
      },
      {
        segments: [
          { text: "私[わたし]は 教科書[きょうかしょ]を 忘[わす]れた" },
          { text: "から", blank: true },
          { text: "、この 辞書[じしょ]を 使[つか]っても" },
          {
            text: "よい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Explicit subject 私は at the beginning",
      },
      {
        segments: [
          { text: "教科書[きょうかしょ]を 忘[わす]れた" },
          { text: "から", blank: true },
          { text: "、この 辞書[じしょ]を 使[つか]っても かまわない" },
          { text: "か" },
        ],
        notes: "Uses てもかまわない instead of てもよい",
      },
      {
        segments: [
          { text: "私[わたし]の 教科書[きょうかしょ]を 忘[わす]れた" },
          { text: "から", blank: true },
          { text: "、この 辞書[じしょ]を 使[つか]っても かまわない" },
          { text: "か" },
        ],
        notes: "Uses 私の and てもかまわない",
      },
      {
        segments: [
          { text: "私[わたし]は 教科書[きょうかしょ]を 忘[わす]れた" },
          { text: "から", blank: true },
          { text: "、この 辞書[じしょ]を 使[つか]っても かまわない" },
          { text: "か" },
        ],
        notes: "Explicit subject 私は with てもかまわない",
      },
      {
        segments: [
          { text: "教科書[きょうかしょ]を 忘[わす]れた" },
          { text: "から", blank: true },
          { text: "、この 辞書[じしょ]、使[つか]っても" },
          {
            text: "よい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Natural casual dropped を after この辞書",
      },
      {
        segments: [
          { text: "教科書[きょうかしょ]を 忘[わす]れた" },
          { text: "から", blank: true },
          { text: "、この 辞書[じしょ]、使[つか]っても かまわない" },
          { text: "か" },
        ],
        notes: "Dropped を after この辞書 with てもかまわない",
      },
    ],
  },
  {
    english:
      "Because the train is fast and convenient, I always go to school by train.",
    answers: [
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、私[わたし]は いつも 電車[でんしゃ]で 学校[がっこう]に " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard translation with 電車は and 学校に",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、私[わたし]は いつも 電車[でんしゃ]で 学校[がっこう]へ " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using へ instead of に for direction to school",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、私[わたし]は いつも 電車[でんしゃ]で 学校[がっこう]に " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が to mark the train as the reason subject",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、私[わたし]は いつも 電車[でんしゃ]で 学校[がっこう]へ " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が and へ",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "便利[べんり]で 速[はや]いから", blank: true },
          { text: "、私[わたし]は いつも 電車[でんしゃ]で 学校[がっこう]に " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversing the adjective order: convenient and fast",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "便利[べんり]で 速[はや]いから", blank: true },
          { text: "、私[わたし]は いつも 電車[でんしゃ]で 学校[がっこう]へ " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed adjective order with へ",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、私[わたし]は 電車[でんしゃ]で いつも 学校[がっこう]に " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Moving いつも after 電車で",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、私[わたし]は 学校[がっこう]に いつも 電車[でんしゃ]で " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reordered main clause: school first, then always by train",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、いつも 電車[でんしゃ]で 学校[がっこう]に " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Omitting 私 in the main clause",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、いつも 電車[でんしゃ]で 学校[がっこう]へ " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Omitting 私 and using へ",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、いつも 電車[でんしゃ]で 学校[がっこう]に " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Omitting 私 with が in the reason clause",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "便利[べんり]で 速[はや]いから", blank: true },
          { text: "、いつも 電車[でんしゃ]で 学校[がっこう]に " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Omitting 私 and reversing the adjective order",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、私[わたし]は いつも 学校[がっこう]に 電車[でんしゃ]で " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reordered main clause: destination before means",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          { text: "、私[わたし]は いつも 学校[がっこう]へ 電車[でんしゃ]で " },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Destination before means with へ",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          {
            text: "、私[わたし]は 学校[がっこう]へは いつも 電車[でんしゃ]で ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using へは to topicalize going to school",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は " },
          { text: "速[はや]くて 便利[べんり]だから", blank: true },
          {
            text: "、私[わたし]は 学校[がっこう]には いつも 電車[でんしゃ]で ",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using には to topicalize going to school",
      },
    ],
  },
  {
    english:
      "Because my older brother is using the computer now, I will write the report later.",
    answers: [
      {
        segments: [
          { text: "兄[あに]が 今[いま] コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、私[わたし]は 後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Basic version with が marking older brother as the subject and コンピューター.",
      },
      {
        segments: [
          { text: "今[いま] 兄[あに]が コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、私[わたし]は 後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Places 今 at the beginning of the reason clause.",
      },
      {
        segments: [
          { text: "兄[あに]は 今[いま] コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、私[わたし]は 後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Uses は to present the older brother as the topic of the reason clause.",
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] パソコンを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、私[わたし]は 後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses パソコン as a natural synonym for computer.",
      },
      {
        segments: [
          { text: "今[いま] 兄[あに]が パソコンを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、私[わたし]は 後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses パソコン and puts 今 first.",
      },
      {
        segments: [
          { text: "兄[あに]は 今[いま] パソコンを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、私[わたし]は 後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses は with パソコン.",
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、後[あと]で 私[わたし]は レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Moves 後で to the beginning of the main clause.",
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、レポートは 私[わたし]が 後[あと]で " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Topicalizes レポート and marks 私 with が.",
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、私[わたし]は レポートを 後[あと]で " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Places 後で immediately before 書く.",
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] パソコンを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、私[わたし]は レポートを 後[あと]で " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses パソコン and places 後で before the verb.",
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Omits 私 in the main clause where it is understood from context.",
      },
      {
        segments: [
          { text: "今[いま] 兄[あに]が コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Omits 私 and places 今 at the start of the reason clause.",
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] パソコンを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses パソコン and omits 私 in the main clause.",
      },
      {
        segments: [
          { text: "今[いま] 兄[あに]が パソコンを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses パソコン, omits 私, and places 今 first.",
      },
      {
        segments: [
          { text: "兄[あに]は 今[いま] コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses は for the reason-clause topic and omits 私.",
      },
      {
        segments: [
          { text: "兄[あに]は 今[いま] パソコンを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、後[あと]で レポートを " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses は and パソコン, with 私 omitted.",
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、レポートは 後[あと]で " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Topicalizes レポート in the main clause and omits 私.",
      },
      {
        segments: [
          { text: "兄[あに]が 今[いま] パソコンを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、レポートは 後[あと]で " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses パソコン and topicalizes レポート.",
      },
      {
        segments: [
          { text: "今[いま] 兄[あに]が コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、レポートは 後[あと]で " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Places 今 at the start and topicalizes レポート.",
      },
      {
        segments: [
          { text: "兄[あに]は 今[いま] コンピューターを " },
          { text: "使[つか]っているから", blank: true },
          { text: "、レポートは 後[あと]で " },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses は for both the reason-clause topic and the report topic.",
      },
    ],
  },
  {
    english: "Because I already washed the vegetables, please cut the meat.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は もう 野菜[やさい]を " },
          { text: "洗[あら]ったから", blank: true },
          { text: "、肉[にく]を 切[き]ってください" },
        ],
        notes:
          "Basic order with 私は as the subject and もう before the object.",
      },
      {
        segments: [
          { text: "私[わたし]は 野菜[やさい]を もう " },
          { text: "洗[あら]ったから", blank: true },
          { text: "、肉[にく]を 切[き]ってください" },
        ],
        notes: "Moves もう after the object; still natural.",
      },
      {
        segments: [
          { text: "もう 私[わたし]が 野菜[やさい]を " },
          { text: "洗[あら]ったから", blank: true },
          { text: "、肉[にく]を 切[き]ってください" },
        ],
        notes:
          "Uses が to emphasize that I am the one who washed the vegetables.",
      },
      {
        segments: [
          { text: "野菜[やさい]は もう 私[わたし]が " },
          { text: "洗[あら]ったから", blank: true },
          { text: "、肉[にく]を 切[き]ってください" },
        ],
        notes: "Topicalizes the vegetables with は.",
      },
      {
        segments: [
          { text: "私[わたし]は もう 野菜[やさい]を " },
          { text: "洗[あら]ったから", blank: true },
          { text: "、肉[にく]は 切[き]ってください" },
        ],
        notes: "Uses は for the meat, contrasting it with the vegetables.",
      },
      {
        segments: [
          { text: "私[わたし]は 野菜[やさい]を もう " },
          { text: "洗[あら]ったから", blank: true },
          { text: "、肉[にく]は 切[き]ってください" },
        ],
        notes: "Uses は for the meat and places もう after 野菜を.",
      },
      {
        segments: [
          { text: "野菜[やさい]は 私[わたし]が もう " },
          { text: "洗[あら]ったから", blank: true },
          { text: "、肉[にく]を 切[き]ってください" },
        ],
        notes:
          "Topicalizes vegetables and places もう just before the verb phrase.",
      },
      {
        segments: [
          { text: "野菜[やさい]は 私[わたし]が もう " },
          { text: "洗[あら]ったから", blank: true },
          { text: "、肉[にく]は 切[き]ってください" },
        ],
        notes: "Topicalizes both vegetables and meat for contrast.",
      },
    ],
  },
  {
    english:
      "Because my father is a doctor, my father works late at the hospital every night.",
    answers: [
      {
        segments: [
          { text: "父[ちち]は 医者[いしゃ]" },
          { text: "だから", blank: true },
          { text: "、毎晩[まいばん] 病院[びょういん]で 遅[おそ]くまで " },
          {
            text: "働[はたら]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Standard phrasing with 父 as the topic and 毎晩 before the place.",
      },
      {
        segments: [
          { text: "父[ちち]は 医者[いしゃ]" },
          { text: "だから", blank: true },
          { text: "、病院[びょういん]で 毎晩[まいばん] 遅[おそ]くまで " },
          {
            text: "働[はたら]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Moves the location before the time expression in the main clause.",
      },
      {
        segments: [
          { text: "父[ちち]は 医者[いしゃ]" },
          { text: "だから", blank: true },
          { text: "、毎晩[まいばん] 遅[おそ]くまで 病院[びょういん]で " },
          {
            text: "働[はたら]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Places 遅くまで before the location, emphasizing working until late every night.",
      },
      {
        segments: [
          { text: "父[ちち]は 医者[いしゃ]" },
          { text: "だから", blank: true },
          { text: "、病院[びょういん]で 遅[おそ]くまで 毎晩[まいばん] " },
          {
            text: "働[はたら]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Alternative adverb order with 毎晩 close to the verb.",
      },
      {
        segments: [
          { text: "父[ちち]が 医者[いしゃ]" },
          { text: "だから", blank: true },
          {
            text: "、父[ちち]は 毎晩[まいばん] 病院[びょういん]で 遅[おそ]くまで ",
          },
          {
            text: "働[はたら]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Uses が in the reason clause and repeats 父 in the main clause, matching the English repetition more closely.",
      },
      {
        segments: [
          { text: "父[ちち]は 医者[いしゃ]" },
          { text: "だから", blank: true },
          {
            text: "、父[ちち]は 毎晩[まいばん] 病院[びょういん]で 遅[おそ]くまで ",
          },
          {
            text: "働[はたら]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Repeats 父 as the subject of the main clause, closely reflecting the English sentence.",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は 医者[いしゃ]" },
          { text: "だから", blank: true },
          { text: "、毎晩[まいばん] 病院[びょういん]で 遅[おそ]くまで " },
          {
            text: "働[はたら]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicitly says 'my father' with 私の父.",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は 医者[いしゃ]" },
          { text: "だから", blank: true },
          { text: "、病院[びょういん]で 毎晩[まいばん] 遅[おそ]くまで " },
          {
            text: "働[はたら]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Explicit 私の父 with location placed before the time expression.",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]が 医者[いしゃ]" },
          { text: "だから", blank: true },
          {
            text: "、父[ちち]は 毎晩[まいばん] 病院[びょういん]で 遅[おそ]くまで ",
          },
          {
            text: "働[はたら]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses が in the explicit 'my father is a doctor' reason clause.",
      },
    ],
  },
  {
    english: "Because there is a cat in this bag, please don't open this bag.",
    answers: [
      {
        segments: [
          { text: "この かばんの 中[なか]に 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この かばんを 開[あ]けないでください" },
        ],
        notes: "Basic wording with かばん and の中に for “in this bag”",
      },
      {
        segments: [
          { text: "この 袋[ふくろ]の 中[なか]に 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この 袋[ふくろ]を 開[あ]けないでください" },
        ],
        notes: "Uses 袋 for “bag” instead of かばん",
      },
      {
        segments: [
          { text: "この かばんに 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この かばんを 開[あ]けないでください" },
        ],
        notes: "Uses に directly without の中 for location",
      },
      {
        segments: [
          { text: "この 袋[ふくろ]に 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この 袋[ふくろ]を 開[あ]けないでください" },
        ],
        notes: "Uses 袋 and direct に for location",
      },
      {
        segments: [
          { text: "この かばんには 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この かばんを 開[あ]けないでください" },
        ],
        notes: "Uses には to topicalize the bag as the location",
      },
      {
        segments: [
          { text: "この 袋[ふくろ]には 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この 袋[ふくろ]を 開[あ]けないでください" },
        ],
        notes: "Uses 袋 with には to topicalize the location",
      },
      {
        segments: [
          { text: "猫[ねこ]が この かばんの 中[なか]に" },
          { text: "いるから", blank: true },
          { text: "、この かばんを 開[あ]けないでください" },
        ],
        notes: "Reversed word order in the reason clause, putting 猫 first",
      },
      {
        segments: [
          { text: "猫[ねこ]が この 袋[ふくろ]の 中[なか]に" },
          { text: "いるから", blank: true },
          { text: "、この 袋[ふくろ]を 開[あ]けないでください" },
        ],
        notes: "Reversed word order with 袋",
      },
      {
        segments: [
          { text: "この かばんの 中[なか]に 猫[ねこ]が" },
          { text: "入[はい]っているから", blank: true },
          { text: "、この かばんを 開[あ]けないでください" },
        ],
        notes:
          "Uses 入っている for “is inside/in the bag,” a natural alternative",
      },
      {
        segments: [
          { text: "この 袋[ふくろ]の 中[なか]に 猫[ねこ]が" },
          { text: "入[はい]っているから", blank: true },
          { text: "、この 袋[ふくろ]を 開[あ]けないでください" },
        ],
        notes: "Uses 袋 and 入っている",
      },
      {
        segments: [
          { text: "猫[ねこ]が この かばんの 中[なか]に" },
          { text: "入[はい]っているから", blank: true },
          { text: "、この かばんを 開[あ]けないでください" },
        ],
        notes: "猫 first with 入っている",
      },
      {
        segments: [
          { text: "猫[ねこ]が この 袋[ふくろ]の 中[なか]に" },
          { text: "入[はい]っているから", blank: true },
          { text: "、この 袋[ふくろ]を 開[あ]けないでください" },
        ],
        notes: "猫 first with 袋 and 入っている",
      },
      {
        segments: [
          { text: "この かばんの 中[なか]に 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この かばんは 開[あ]けないでください" },
        ],
        notes:
          "Uses は instead of を to mark “this bag” as the thing not to open",
      },
      {
        segments: [
          { text: "この 袋[ふくろ]の 中[なか]に 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この 袋[ふくろ]は 開[あ]けないでください" },
        ],
        notes: "Uses 袋 and は for the object/topic",
      },
      {
        segments: [
          { text: "この かばんに 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この かばんは 開[あ]けないでください" },
        ],
        notes: "Direct に with は marking the bag not to open",
      },
      {
        segments: [
          { text: "この 袋[ふくろ]に 猫[ねこ]が" },
          { text: "いるから", blank: true },
          { text: "、この 袋[ふくろ]は 開[あ]けないでください" },
        ],
        notes: "Direct に with 袋 and は for the second clause",
      },
      {
        segments: [
          { text: "この かばんの 中[なか]に 猫[ねこ]が" },
          { text: "入[はい]っているから", blank: true },
          { text: "、この かばんは 開[あ]けないでください" },
        ],
        notes: "Uses 入っている and は in the request",
      },
      {
        segments: [
          { text: "この 袋[ふくろ]の 中[なか]に 猫[ねこ]が" },
          { text: "入[はい]っているから", blank: true },
          { text: "、この 袋[ふくろ]は 開[あ]けないでください" },
        ],
        notes: "Uses 袋, 入っている, and は in the request",
      },
    ],
  },
  {
    english:
      "Because it's raining now, please bring an umbrella to the station.",
    answers: [
      {
        segments: [
          { text: "今[いま] 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 駅[えき]に 持[も]ってきてください" },
        ],
        notes:
          "Standard word order with 今 at the beginning and 駅に for destination.",
      },
      {
        segments: [
          { text: "今[いま]は 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 駅[えき]に 持[も]ってきてください" },
        ],
        notes: "Using 今は to mark the current situation as the topic.",
      },
      {
        segments: [
          { text: "雨[あめ]が 今[いま]" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 駅[えき]に 持[も]ってきてください" },
        ],
        notes: "Placing 今 after the subject 雨が.",
      },
      {
        segments: [
          { text: "今[いま] 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、駅[えき]に 傘[かさ]を 持[も]ってきてください" },
        ],
        notes: "Reversed order in the request: destination before object.",
      },
      {
        segments: [
          { text: "今[いま] 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 駅[えき]まで 持[も]ってきてください" },
        ],
        notes: "Using 駅まで to express bringing it as far as the station.",
      },
      {
        segments: [
          { text: "今[いま]は 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 駅[えき]まで 持[も]ってきてください" },
        ],
        notes: "Using 今は and 駅まで.",
      },
      {
        segments: [
          { text: "今[いま] 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、駅[えき]まで 傘[かさ]を 持[も]ってきてください" },
        ],
        notes: "Destination 駅まで placed before the object.",
      },
      {
        segments: [
          { text: "今[いま] 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 持[も]って 駅[えき]に 来[き]てください" },
        ],
        notes:
          "Expresses the request as coming to the station carrying an umbrella.",
      },
      {
        segments: [
          { text: "今[いま] 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 持[も]って 駅[えき]まで 来[き]てください" },
        ],
        notes: "Using 駅まで with the come-carry phrasing.",
      },
      {
        segments: [
          { text: "雨[あめ]が 今[いま]" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 駅[えき]まで 持[も]ってきてください" },
        ],
        notes: "雨が first, using 駅まで.",
      },
      {
        segments: [
          { text: "今[いま] 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、駅[えき]に 傘[かさ]を 持[も]って 来[き]てください" },
        ],
        notes: "Come-carry phrasing with destination before object.",
      },
      {
        segments: [
          { text: "今[いま]は 雨[あめ]が" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 持[も]って 駅[えき]に 来[き]てください" },
        ],
        notes: "Using 今は with the come-carry phrasing.",
      },
      {
        segments: [
          { text: "雨[あめ]が 今[いま]" },
          { text: "降[ふ]っているから", blank: true },
          { text: "、傘[かさ]を 持[も]って 駅[えき]に 来[き]てください" },
        ],
        notes: "雨が 今 order with the come-carry phrasing.",
      },
    ],
  },
  {
    english:
      "Because my younger sister hates fish, I will cook chicken tonight.",
    answers: [
      {
        segments: [
          { text: "妹[いもうと]は 魚[さかな]が" },
          { text: "嫌[きら]いだから", blank: true },
          {
            text: "、今晩[こんばん]、私[わたし]は 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic translation using 妹は魚が嫌いだから and 鶏肉を料理する",
      },
      {
        segments: [
          { text: "妹[いもうと]は 魚[さかな]が" },
          { text: "嫌[きら]いだから", blank: true },
          {
            text: "、私[わたし]は 今晩[こんばん] 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Moves 私は before 今晩",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今晩[こんばん] 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、妹[いもうと]は 魚[さかな]が" },
          { text: "嫌[きら]いだから", blank: true },
        ],
        notes: "Reversed order: main clause first, reason after",
      },
      {
        segments: [
          { text: "妹[いもうと]は 魚[さかな]が" },
          { text: "大嫌[だいきら]いだから", blank: true },
          {
            text: "、今晩[こんばん]、私[わたし]は 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 大嫌い to express “hates” more strongly",
      },
      {
        segments: [
          { text: "妹[いもうと]は 魚[さかな]が" },
          { text: "大嫌[だいきら]いだから", blank: true },
          {
            text: "、私[わたし]は 今晩[こんばん] 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 大嫌い with different word order in main clause",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今晩[こんばん] 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "、妹[いもうと]は 魚[さかな]が" },
          { text: "大嫌[だいきら]いだから", blank: true },
        ],
        notes: "Reversed order with 大嫌い",
      },
      {
        segments: [
          { text: "妹[いもうと]は 魚[さかな]が" },
          { text: "嫌[きら]いだから", blank: true },
          {
            text: "、今晩[こんばん]、私[わたし]は 鶏肉[とりにく]の 料理[りょうり]を 作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 鶏肉の料理を作る instead of 鶏肉を料理する",
      },
      {
        segments: [
          { text: "妹[いもうと]は 魚[さかな]が" },
          { text: "大嫌[だいきら]いだから", blank: true },
          {
            text: "、今晩[こんばん]、私[わたし]は 鶏肉[とりにく]の 料理[りょうり]を 作[つく]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 大嫌い and 鶏肉の料理を作る",
      },
      {
        segments: [
          { text: "妹[いもうと]は 魚[さかな]が" },
          { text: "嫌[きら]いだから", blank: true },
          {
            text: "、今夜[こんや]、私[わたし]は 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "妹[いもうと]は 魚[さかな]が" },
          { text: "大嫌[だいきら]いだから", blank: true },
          {
            text: "、今夜[こんや]、私[わたし]は 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 今夜 and 大嫌い",
      },
      {
        segments: [
          { text: "妹[いもうと]が 魚[さかな]を" },
          { text: "食[た]べないから", blank: true },
          {
            text: "、今晩[こんばん]、私[わたし]は 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Paraphrases hates fish as does not eat fish; uses verb + から",
      },
      {
        segments: [
          { text: "妹[いもうと]は 魚[さかな]は" },
          { text: "嫌[きら]いだから", blank: true },
          {
            text: "、今晩[こんばん]、私[わたし]は 鶏肉[とりにく]を 料理[りょうり]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses contrastive は with 魚",
      },
    ],
  },
  {
    english: "Because the traffic light is red, please wait here.",
    answers: [
      {
        segments: [
          { text: "信号[しんごう]が " },
          { text: "赤[あか]いから", blank: true },
          { text: "、ここで 待[ま]ってください" },
        ],
        notes:
          "Standard translation using が to mark the traffic light as the subject of 赤い",
      },
      {
        segments: [
          { text: "信号[しんごう]は " },
          { text: "赤[あか]いから", blank: true },
          { text: "、ここで 待[ま]ってください" },
        ],
        notes: "Using は to present the traffic light as the topic",
      },
      {
        segments: [
          { text: "赤信号[あかしんごう]だから", blank: true },
          { text: "、ここで 待[ま]ってください" },
        ],
        notes: "More concise noun expression: 'because it is a red light'",
      },
      {
        segments: [
          { text: "信号[しんごう]が " },
          { text: "赤[あか]いから", blank: true },
          { text: "、ここにいてください" },
        ],
        notes:
          "Using ここにいてください, 'please stay/be here', as a natural way to say wait here",
      },
      {
        segments: [
          { text: "信号[しんごう]は " },
          { text: "赤[あか]いから", blank: true },
          { text: "、ここにいてください" },
        ],
        notes: "Topic は with ここにいてください",
      },
      {
        segments: [
          { text: "赤信号[あかしんごう]だから", blank: true },
          { text: "、ここにいてください" },
        ],
        notes: "Concise noun expression with 'please stay here'",
      },
      {
        segments: [
          { text: "信号[しんごう]が " },
          { text: "赤[あか]いから", blank: true },
          { text: "、待[ま]ってください、ここで" },
        ],
        notes:
          "Reversed order of the location phrase; acceptable spoken emphasis",
      },
      {
        segments: [
          { text: "信号[しんごう]が " },
          { text: "赤[あか]だから", blank: true },
          { text: "、ここで 待[ま]ってください" },
        ],
        notes: "Using 赤 as a noun: 'the light is red'",
      },
      {
        segments: [
          { text: "信号[しんごう]は " },
          { text: "赤[あか]だから", blank: true },
          { text: "、ここで 待[ま]ってください" },
        ],
        notes: "赤 as a noun with topic は",
      },
    ],
  },
  {
    english: "Because there is a test tomorrow, I won't play games tonight.",
    answers: [
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic wording with テスト and 今晩; subject omitted naturally.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using は to mark 明日 as the topic.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 今夜 instead of 今晩.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Combines 明日は with 今夜.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は 今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicitly states 私は after the reason clause.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は 今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は with 明日は topic.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は 今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は and 今夜.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は 今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は, 明日は topic, and 今夜.",
      },
      {
        segments: [
          { text: "テストが 明日[あした]" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed word order in the reason clause: テストが明日ある.",
      },
      {
        segments: [
          { text: "テストが 明日[あした]" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed reason-clause word order with 今夜.",
      },
      {
        segments: [
          { text: "テストが 明日[あした]" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は 今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed reason-clause word order with explicit 私は.",
      },
      {
        segments: [
          { text: "テストが 明日[あした]" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は 今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed reason-clause word order with explicit 私は and 今夜.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、ゲームを 今晩[こんばん]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Places 今晩 just before the verb for emphasis.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、ゲームを 今晩[こんばん]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 明日は and places 今晩 before the verb.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、ゲームを 今夜[こんや]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 今夜 placed just before the verb.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、ゲームを 今夜[こんや]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "明日は topic with 今夜 before the verb.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は ゲームを 今晩[こんばん]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は with 今晩 before the verb.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は ゲームを 今晩[こんばん]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は, 明日は topic, and 今晩 before the verb.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は ゲームを 今夜[こんや]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は with 今夜 before the verb.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は ゲームを 今夜[こんや]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は, 明日は topic, and 今夜 before the verb.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん]は ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Marks 今晩 as the topic with は.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん]は ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Both 明日 and 今晩 are marked as topics.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや]は ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Marks 今夜 as the topic.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや]は ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 明日は and 今夜は.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、私[わたし]は 今晩[こんばん]は ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit subject with contrastive 今晩は.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん] ゲームは" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses contrastive は with ゲーム.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん] ゲームは" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Contrastive ゲームは with 明日は topic.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや] ゲームは" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Contrastive ゲームは and 今夜.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや] ゲームは" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Contrastive ゲームは with 明日は and 今夜.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん]は ゲームは" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Both 今晩 and ゲーム are contrastively marked with は.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん]は ゲームは" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "明日は topic plus contrastive 今晩は and ゲームは.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや]は ゲームは" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "今夜は and ゲームは both contrastive.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや]は ゲームは" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 明日は with 今夜は and ゲームは.",
      },
      {
        segments: [
          { text: "明日[あした]は テスト" },
          { text: "だから", blank: true },
          { text: "、今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses noun + だから: 'because tomorrow is a test day.'",
      },
      {
        segments: [
          { text: "明日[あした]は テスト" },
          { text: "だから", blank: true },
          { text: "、今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Noun + だから with 今夜.",
      },
      {
        segments: [
          { text: "明日[あした] 試験[しけん]が" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 試験 as a synonym for テスト.",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]が" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 試験 with 明日は topic.",
      },
      {
        segments: [
          { text: "明日[あした] 試験[しけん]が" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "試験 with 今夜.",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]が" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "試験, 明日は topic, and 今夜.",
      },
      {
        segments: [
          { text: "試験[しけん]が 明日[あした]" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed reason-clause word order using 試験.",
      },
      {
        segments: [
          { text: "試験[しけん]が 明日[あした]" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed reason clause with 試験 and 今夜.",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]" },
          { text: "だから", blank: true },
          { text: "、今晩[こんばん] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Noun + だから with 試験.",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]" },
          { text: "だから", blank: true },
          { text: "、今夜[こんや] ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Noun + だから with 試験 and 今夜.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今晩[こんばん]は 私[わたし]は ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Places 今晩は before explicit 私は.",
      },
      {
        segments: [
          { text: "明日[あした] テストが" },
          { text: "あるから", blank: true },
          { text: "、今夜[こんや]は 私[わたし]は ゲームを" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Places 今夜は before explicit 私は.",
      },
    ],
  },
  {
    english: "Because the party is lively, everyone is dancing in the room.",
    hint: "party = パーティー",
    answers: [
      {
        segments: [
          { text: "パーティーは " },
          { text: "にぎやかだから", blank: true },
          { text: "、皆[みんな]が 部屋[へや]で 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard translation with パーティーは and 皆が as the subject",
      },
      {
        segments: [
          { text: "パーティーが " },
          { text: "にぎやかだから", blank: true },
          { text: "、皆[みんな]が 部屋[へや]で 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が for the party as the subject/focus",
      },
      {
        segments: [
          { text: "パーティーは " },
          { text: "にぎやかだから", blank: true },
          { text: "、皆[みんな]が 部屋[へや]で 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 皆が to mark everyone as the subject",
      },
      {
        segments: [
          { text: "パーティーが " },
          { text: "にぎやかだから", blank: true },
          { text: "、皆[みんな]が 部屋[へや]で 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が for パーティー and 皆が for everyone as the subject",
      },
      {
        segments: [
          { text: "パーティーは " },
          { text: "にぎやかだから", blank: true },
          { text: "、部屋[へや]で 皆[みんな]が 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reordered location before subject in the second clause",
      },
      {
        segments: [
          { text: "パーティーが " },
          { text: "にぎやかだから", blank: true },
          { text: "、部屋[へや]で 皆[みんな]が 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reordered second clause with が marking パーティー",
      },
      {
        segments: [
          { text: "パーティーは " },
          { text: "にぎやかだから", blank: true },
          { text: "、部屋[へや]で 皆[みんな]が 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reordered second clause with 皆が",
      },
      {
        segments: [
          { text: "パーティーが " },
          { text: "にぎやかだから", blank: true },
          { text: "、部屋[へや]で 皆[みんな]が 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reordered second clause with が for パーティー and 皆で",
      },
      {
        segments: [
          { text: "パーティーは " },
          { text: "にぎやかだから", blank: true },
          { text: "、皆[みんな]が 部屋[へや]の 中[なか]で 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 部屋の中で for “in the room”",
      },
      {
        segments: [
          { text: "パーティーが " },
          { text: "にぎやかだから", blank: true },
          { text: "、皆[みんな]が 部屋[へや]の 中[なか]で 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 部屋の中で and が for パーティー",
      },
      {
        segments: [
          { text: "パーティーは " },
          { text: "にぎやかだから", blank: true },
          { text: "、皆[みんな]で 部屋[へや]の 中[なか]で 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 皆で and 部屋の中で",
      },
      {
        segments: [
          { text: "パーティーが " },
          { text: "にぎやかだから", blank: true },
          { text: "、皆[みんな]で 部屋[へや]の 中[なか]で 踊[おど]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 皆で, 部屋の中で, and が for パーティー",
      },
    ],
  },
  {
    english: "Because it's cold tonight, please close the window.",
    answers: [
      {
        segments: [
          { text: "今晩[こんばん]は 寒[さむ]い" },
          { text: "から", blank: true },
          { text: "、窓[まど]を 閉[し]めてください" },
        ],
        notes:
          "Standard translation using 今晩は for “tonight” and を marking the window as the object.",
      },
      {
        segments: [
          { text: "今夜[こんや]は 寒[さむ]い" },
          { text: "から", blank: true },
          { text: "、窓[まど]を 閉[し]めてください" },
        ],
        notes: "Uses 今夜 as an alternative word for “tonight.”",
      },
      {
        segments: [
          { text: "今晩[こんばん] 寒[さむ]い" },
          { text: "から", blank: true },
          { text: "、窓[まど]を 閉[し]めてください" },
        ],
        notes: "Drops は after 今晩, a natural time-adverb phrasing.",
      },
      {
        segments: [
          { text: "今夜[こんや] 寒[さむ]い" },
          { text: "から", blank: true },
          { text: "、窓[まど]を 閉[し]めてください" },
        ],
        notes: "Uses 今夜 and omits は after the time expression.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は 寒[さむ]い" },
          { text: "から", blank: true },
          { text: "、窓[まど]を 閉[し]めてくださいませんか" },
        ],
        notes:
          "More polite request with てくださいませんか while retaining the reason clause.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は 寒[さむ]い" },
          { text: "から", blank: true },
          { text: "、窓[まど]、閉[し]めてください" },
        ],
        notes: "Casual spoken style dropping を after 窓.",
      },
      {
        segments: [
          {
            text: "窓[まど]を 閉[し]めてください、今晩[こんばん]は 寒[さむ]い",
          },
          { text: "から", blank: true },
        ],
        notes:
          "Reversed order with the reason added after the request; natural in speech.",
      },
      {
        segments: [
          { text: "今日[きょう]の 夜[よる]は 寒[さむ]い" },
          { text: "から", blank: true },
          { text: "、窓[まど]を 閉[し]めてください" },
        ],
        notes: "Uses 今日の夜 as another natural way to say “tonight.”",
      },
    ],
  },
]

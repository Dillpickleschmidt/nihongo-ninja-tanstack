import type { Question } from "../types"

const aruNeg = {
  pos: "Godan verb with 'ru' ending (irregular verb)" as const,
  form: "normal" as const,
  polarity: "negative" as const,
  tense: "non-past" as const,
}

const aruPos = {
  pos: "Godan verb with 'ru' ending (irregular verb)" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

export const questions: Question[] = [
  {
    english: "I've never eaten sushi before.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 寿司[すし]を 食[た]べたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は お 寿司[すし]を 食[た]べたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
        notes: "お寿司 variant",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 寿司[すし]を 食[た]べたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
        notes: "with まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 寿司[すし]を 食[た]べたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
        notes: "with 一度も",
      },
    ],
  },
  {
    english: "I've been to Italy once — the pizza there was amazing!",
    hint: "Italy = イタリア",
    answers: [
      {
        segments: [
          { text: "イタリアに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは とても " },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "に",
      },
      {
        segments: [
          { text: "イタリアへ 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは とても " },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "へ",
      },
      {
        segments: [
          { text: "イタリアに 一度[いちど] 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは とても " },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "に + 一度",
      },
      {
        segments: [
          { text: "イタリアへ 一度[いちど] 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは とても " },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "へ + 一度",
      },
      {
        segments: [
          { text: "イタリアには 一度[いちど] 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは とても " },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "には + 一度",
      },
      {
        segments: [
          { text: "一度[いちど] イタリアに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは とても " },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "一度 first + に",
      },
      {
        segments: [
          { text: "一度[いちど] イタリアへ 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは とても " },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "一度 first + へ",
      }
    ],
  },
  {
    english: "I sometimes have dreams that are so scary I can't sleep.",
    answers: [
      {
        segments: [
          { text: "怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "怖くて眠れない.",
      },
      {
        segments: [
          { text: "怖[こわ]くて 寝[ね]られない 夢[ゆめ]を 見[み]ることが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "怖くて寝られない.",
      },
      {
        segments: [
          { text: "眠[ねむ]れなくなるほど 怖[こわ]い 夢[ゆめ]を 見[み]ることが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "眠れなくなるほど怖い.",
      },
      {
        segments: [
          { text: "時々[ときどき]、怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "時々",
      },
      {
        segments: [
          { text: "時々[ときどき]、怖[こわ]くて 寝[ね]られない 夢[ゆめ]を 見[み]ることが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "時々 + 寝られない",
      },
      {
        segments: [
          { text: "時々[ときどき]、眠[ねむ]れなくなるほど 怖[こわ]い 夢[ゆめ]を 見[み]ることが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "時々 + ほど",
      },
      {
        segments: [
          { text: "怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることも", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "こともあります.",
      },
      {
        segments: [
          { text: "時々[ときどき]、怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることも", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "時々 + ことも",
      }
    ],
  },
  {
    english: "Have you ever climbed Mt. Fuji, Kenji?",
    hint: "Kenji = けんじ; Mt. Fuji = 富士山[ふじさん]",
    answers: [
      {
        segments: [
          { text: "けんじさん、富士山[ふじさん]に 登[のぼ]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは 富士山[ふじさん]に 登[のぼ]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "topic-marked Kenji",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
          { text: "、けんじさん" },
        ],
        notes: "Name at the end",
      },
    ],
  },
  {
    english: "I've never ridden a bullet train before.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 新幹線[しんかんせん]に 乗[の]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 新幹線[しんかんせん]に 乗[の]ったことは", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
        notes: "は instead of が after こと",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 新幹線[しんかんせん]に 乗[の]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
        notes: "with まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 新幹線[しんかんせん]に 乗[の]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
        notes: "with 一度も",
      },
      {
        segments: [
          { text: "私[わたし]は 新幹線[しんかんせん]には 乗[の]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
        notes: "contrastive 新幹線には",
      },
    ],
  },
  {
    english: "I've never seen snow before — I grew up in the Philippines.",
    hint: "Philippines = フィリピン",
    answers: [
      {
        segments: [
          { text: "雪[ゆき]を 見[み]たことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。フィリピン 出身[しゅっしん]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "まだ 雪[ゆき]を 見[み]たことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。フィリピン 出身[しゅっしん]" },
          { text: "です" },
        ],
        notes: "with まだ",
      },
      {
        segments: [
          { text: "一度[いちど]も 雪[ゆき]を 見[み]たことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。フィリピン 出身[しゅっしん]" },
          { text: "です" },
        ],
        notes: "with 一度も",
      },
      {
        segments: [
          { text: "雪[ゆき]を 見[み]たことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。フィリピンで " },
          {
            text: "育[そだ]つ",
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "uses フィリピンで育つ",
      },
      {
        segments: [
          { text: "まだ 雪[ゆき]を 見[み]たことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。フィリピンで " },
          {
            text: "育[そだ]つ",
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "まだ + フィリピンで育つ",
      },
      {
        segments: [
          { text: "一度[いちど]も 雪[ゆき]を 見[み]たことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。フィリピンで " },
          {
            text: "育[そだ]つ",
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "一度も + フィリピンで育つ",
      },
    ],
  },
  {
    english: "I've never been to a hot spring before — have you, Miho?",
    hint: "Miho = みほ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は まだ 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "with まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "with 一度も",
      },
      {
        segments: [
          { text: "私[わたし]は 温泉[おんせん]には 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "contrastive 温泉には",
      },
      {
        segments: [
          { text: "私[わたし]は 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは？" },
        ],
        notes: "elliptical second question",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは？" },
        ],
        notes: "まだ + elliptical second question",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 温泉[おんせん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは？" },
        ],
        notes: "一度も + elliptical second question",
      },
      {
        segments: [
          { text: "私[わたし]は 温泉[おんせん]には 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは？" },
        ],
        notes: "温泉には + elliptical second question",
      },
    ],
  },
  {
    english: "I've never been to a karaoke place — is it fun?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は カラオケに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "楽[たの]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は カラオケへ 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "楽[たの]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は まだ カラオケに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "楽[たの]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "with まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も カラオケに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "楽[たの]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "with 一度も",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケには 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "楽[たの]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "contrastive カラオケには",
      },
    ],
  },
  {
    english: "I've never done volunteer work before — have you, Sota?",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "full question",
      },
      {
        segments: [
          { text: "私[わたし]は ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは？" },
        ],
        notes: "elliptical question",
      },
      {
        segments: [
          { text: "私[わたし]は まだ ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "まだ + full question",
      },
      {
        segments: [
          { text: "私[わたし]は まだ ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは？" },
        ],
        notes: "まだ + elliptical",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "一度も + full question",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは？" },
        ],
        notes: "一度も + elliptical",
      },
      {
        segments: [
          { text: "私[わたし]は ボランティアは したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは ボランティアを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "ボランティアは + full question",
      },
      {
        segments: [
          { text: "私[わたし]は ボランティアは したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは？" },
        ],
        notes: "ボランティアは + elliptical",
      },
      {
        segments: [
          { text: "私[わたし]は ボランティアで 働[はたら]いたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは ボランティアで 働[はたら]いたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "働く + full question",
      },
      {
        segments: [
          { text: "私[わたし]は ボランティアで 働[はたら]いたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは？" },
        ],
        notes: "働く + elliptical",
      },
      {
        segments: [
          { text: "私[わたし]は まだ ボランティアで 働[はたら]いたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは ボランティアで 働[はたら]いたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "まだ + 働く + full question",
      },
      {
        segments: [
          { text: "私[わたし]は まだ ボランティアで 働[はたら]いたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは？" },
        ],
        notes: "まだ + 働く + elliptical",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も ボランティアで 働[はたら]いたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは ボランティアで 働[はたら]いたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "一度も + 働く + full question",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も ボランティアで 働[はたら]いたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは？" },
        ],
        notes: "一度も + 働く + elliptical",
      }
    ],
  },
  {
    english: "I've never sung karaoke before — is it hard?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は カラオケで 歌[うた]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "難[むずか]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "カラオケで歌う",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケで 歌[うた]を 歌[うた]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "難[むずか]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "歌を歌う",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケを 歌[うた]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "難[むずか]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "カラオケを歌う",
      },
      {
        segments: [
          { text: "私[わたし]は まだ カラオケで 歌[うた]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "難[むずか]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も カラオケで 歌[うた]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "難[むずか]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "一度も",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケは 歌[うた]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "難[むずか]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "カラオケは",
      }
    ],
  },
  {
    english:
      "I've never bought clothes at a department store before. Are they usually expensive?",
    hint: "clothes = 服[ふく]",
    answers: [
      {
        segments: [
          { text: "私[わたし]は デパートで 服[ふく]を 買[か]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。たいてい " },
          {
            text: "高[たか]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "canonical",
      },
      {
        segments: [
          { text: "私[わたし]は まだ デパートで 服[ふく]を 買[か]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。たいてい " },
          {
            text: "高[たか]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も デパートで 服[ふく]を 買[か]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。たいてい " },
          {
            text: "高[たか]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "一度も",
      },
      {
        segments: [
          { text: "私[わたし]は デパートでは 服[ふく]を 買[か]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。たいてい " },
          {
            text: "高[たか]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "デパートでは",
      },
      {
        segments: [
          { text: "私[わたし]は デパートで 服[ふく]を 買[か]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "高[たか]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "no たいてい",
      },
      {
        segments: [
          { text: "私[わたし]は まだ デパートで 服[ふく]を 買[か]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "高[たか]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "まだ + no たいてい",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も デパートで 服[ふく]を 買[か]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "高[たか]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "一度も + no たいてい",
      },
      {
        segments: [
          { text: "私[わたし]は デパートでは 服[ふく]を 買[か]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。" },
          {
            text: "高[たか]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "デパートでは + no たいてい",
      }
    ],
  },
  {
    english: "I've never been fishing before. I think it's boring.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 釣[つ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらないと " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "canonical",
      },
      {
        segments: [
          { text: "私[わたし]は 釣[つ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなそう" },
          { text: "です" },
        ],
        notes: "そう variant; taught later",
      },
      {
        segments: [
          { text: "私[わたし]は 釣[つ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなさそう" },
          { text: "です" },
        ],
        notes: "つまらなさそう; そう taught later",
      },
      {
        segments: [
          { text: "私[わたし]は つりを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらないと " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "kana つり",
      },
      {
        segments: [
          { text: "私[わたし]は つりを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなそう" },
          { text: "です" },
        ],
        notes: "kana つり + そう; taught later",
      },
      {
        segments: [
          { text: "私[わたし]は つりを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなさそう" },
          { text: "です" },
        ],
        notes: "kana つり + つまらなさそう; そう taught later",
      },
      {
        segments: [
          { text: "私[わたし]は 魚釣[さかなつ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらないと " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "魚釣り",
      },
      {
        segments: [
          { text: "私[わたし]は 魚釣[さかなつ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなそう" },
          { text: "です" },
        ],
        notes: "魚釣り + そう; taught later",
      },
      {
        segments: [
          { text: "私[わたし]は 魚釣[さかなつ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなさそう" },
          { text: "です" },
        ],
        notes: "魚釣り + つまらなさそう; そう taught later",
      },
      {
        segments: [
          { text: "私[わたし]は 釣[つ]りに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらないと " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "釣りに行く",
      },
      {
        segments: [
          { text: "私[わたし]は 釣[つ]りに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなそう" },
          { text: "です" },
        ],
        notes: "釣りに行く + そう; taught later",
      },
      {
        segments: [
          { text: "私[わたし]は 釣[つ]りに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなさそう" },
          { text: "です" },
        ],
        notes: "釣りに行く + つまらなさそう; そう taught later",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 釣[つ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらないと " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 釣[つ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなそう" },
          { text: "です" },
        ],
        notes: "まだ + そう; taught later",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 釣[つ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなさそう" },
          { text: "です" },
        ],
        notes: "まだ + つまらなさそう; そう taught later",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 釣[つ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらないと " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "一度も",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 釣[つ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなそう" },
          { text: "です" },
        ],
        notes: "一度も + そう; taught later",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 釣[つ]りを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなさそう" },
          { text: "です" },
        ],
        notes: "一度も + つまらなさそう; そう taught later",
      },
      {
        segments: [
          { text: "私[わたし]は 釣[つ]りは したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらないと " },
          {
            text: "思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "釣りは",
      },
      {
        segments: [
          { text: "私[わたし]は 釣[つ]りは したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなそう" },
          { text: "です" },
        ],
        notes: "釣りは + そう; taught later",
      },
      {
        segments: [
          { text: "私[わたし]は 釣[つ]りは したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。つまらなさそう" },
          { text: "です" },
        ],
        notes: "釣りは + つまらなさそう; そう taught later",
      }
    ],
  },
  {
    english:
      "I've never done a homestay before, but I want to live with a Japanese family.",
    hint: "Japanese family = 日本の家族[かぞく]",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ホームステイを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "が、" },
          { text: "日本[にほん]の 家族[かぞく]と " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - included",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "canonical",
      },
      {
        segments: [
          { text: "私[わたし]は ホームステイしたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "が、" },
          { text: "日本[にほん]の 家族[かぞく]と " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - included",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ホームステイする",
      },
      {
        segments: [
          { text: "私[わたし]は まだ ホームステイを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "が、" },
          { text: "日本[にほん]の 家族[かぞく]と " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - included",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も ホームステイを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "が、" },
          { text: "日本[にほん]の 家族[かぞく]と " },
          {
            text: "生活[せいかつ]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - included",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "一度も",
      },
    ],
  },
  {
    english:
      "I've never been to a zoo before, but I want to go with my younger sister someday.",
    hint: "someday = いつか",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 動物園[どうぶつえん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "が、" },
          { text: "いつか 妹[いもうと]と " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "に",
      },
      {
        segments: [
          { text: "私[わたし]は 動物園[どうぶつえん]へ 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "が、" },
          { text: "いつか 妹[いもうと]と " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "へ",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 動物園[どうぶつえん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "が、" },
          { text: "いつか 妹[いもうと]と " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 動物園[どうぶつえん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "が、" },
          { text: "いつか 妹[いもうと]と " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "一度も",
      },
      {
        segments: [
          { text: "私[わたし]は 動物園[どうぶつえん]には 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "が、" },
          { text: "いつか 妹[いもうと]と " },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "には",
      },
    ],
  },
  {
    english: "I've never driven a car before, and driving terrifies me.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 車[くるま]を 運転[うんてん]したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。運転[うんてん]するのが とても " },
          {
            text: "怖[こわ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "canonical",
      },
      {
        segments: [
          { text: "私[わたし]は 車[くるま]を 運転[うんてん]したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。運転[うんてん]するのが すごく " },
          {
            text: "怖[こわ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "すごく",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 車[くるま]を 運転[うんてん]したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。運転[うんてん]するのが とても " },
          {
            text: "怖[こわ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 車[くるま]を 運転[うんてん]したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。運転[うんてん]するのが とても " },
          {
            text: "怖[こわ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "一度も",
      },
      {
        segments: [
          { text: "私[わたし]は 車[くるま]を 運転[うんてん]したことは", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。運転[うんてん]するのが とても " },
          {
            text: "怖[こわ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ことは",
      },
      {
        segments: [
          { text: "私[わたし]は 車[くるま]を 運転[うんてん]したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。運転[うんてん]するのが めっちゃ 怖[こわ]い" },
        ],
        register: "casual",
        notes: "めっちゃ casual",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 車[くるま]を 運転[うんてん]したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。運転[うんてん]するのが めっちゃ 怖[こわ]い" },
        ],
        register: "casual",
        notes: "まだ + めっちゃ",
      },
      {
        segments: [
          { text: "私[わたし]は 一度[いちど]も 車[くるま]を 運転[うんてん]したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。運転[うんてん]するのが めっちゃ 怖[こわ]い" },
        ],
        register: "casual",
        notes: "一度も + めっちゃ",
      },
    ],
  },
  {
    english: "Yui, have you ever been to a concert before?",
    hint: "Yui = 結衣[ゆい]",
    answers: [
      {
        segments: [
          { text: "結衣[ゆい]さん、コンサートに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "vocative + に",
      },
      {
        segments: [
          { text: "結衣[ゆい]さん、コンサートへ 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "vocative + へ",
      },
      {
        segments: [
          { text: "結衣[ゆい]さんは コンサートに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "topic + に",
      },
      {
        segments: [
          { text: "結衣[ゆい]さんは コンサートへ 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "topic + へ",
      },
      {
        segments: [
          { text: "結衣[ゆい]さんは コンサートには 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "には",
      },
      {
        segments: [
          { text: "結衣[ゆい]さん、今[いま]までに コンサートに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "今までに",
      },
      {
        segments: [
          { text: "コンサートに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
          { text: "、結衣[ゆい]さん" },
        ],
        notes: "postposed name",
      },
    ],
  },
  {
    english: "Has Tsumugi ever been to a beach barbecue?",
    hint: "Tsumugi = 紬[つむぎ]; beach barbecue = 海[うみ]のバーベキュー",
    answers: [
      {
        segments: [
          { text: "紬[つむぎ]さんは 海[うみ]の バーベキューに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "に",
      },
      {
        segments: [
          { text: "紬[つむぎ]さんは 海[うみ]の バーベキューへ 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "へ",
      },
      {
        segments: [
          { text: "紬[つむぎ]さん、海[うみ]の バーベキューに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "vocative",
      },
      {
        segments: [
          { text: "海[うみ]の バーベキューに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
          { text: "、紬[つむぎ]さん" },
        ],
        notes: "postposed name",
      },
      {
        segments: [
          { text: "紬[つむぎ]さんは ビーチの バーベキューに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "ビーチ",
      },
    ],
  },
  {
    english: "Has Ren ever been to the art museum by the station?",
    hint: "Ren = 蓮[れん]",
    answers: [
      {
        segments: [
          { text: "蓮[れん]さんは 駅[えき]の 近[ちか]くの 美術館[びじゅつかん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "に",
      },
      {
        segments: [
          { text: "蓮[れん]さんは 駅[えき]の 近[ちか]くの 美術館[びじゅつかん]へ 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "へ",
      },
      {
        segments: [
          { text: "蓮[れん]さん、駅[えき]の 近[ちか]くの 美術館[びじゅつかん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "vocative",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 美術館[びじゅつかん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
          { text: "、蓮[れん]さん" },
        ],
        notes: "postposed name",
      },
      {
        segments: [
          { text: "蓮[れん]さんは 駅[えき]の 近[ちか]くに ある 美術館[びじゅつかん]に 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "近くにある",
      },
    ],
  },
  {
    english: "Has Haruto ever gone for a drive in the mountains?",
    hint: "Haruto = 陽翔[はると]",
    answers: [
      {
        segments: [
          { text: "陽翔[はると]さんは 山[やま]で ドライブを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "山でドライブをする",
      },
      {
        segments: [
          { text: "陽翔[はると]さんは 山[やま]で ドライブしたことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "山でドライブする",
      },
      {
        segments: [
          { text: "陽翔[はると]さん、山[やま]で ドライブを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "vocative",
      },
      {
        segments: [
          { text: "山[やま]で ドライブを したことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
          { text: "、陽翔[はると]さん" },
        ],
        notes: "postposed name",
      },
      {
        segments: [
          { text: "陽翔[はると]さんは 山[やま]へ ドライブに 行[い]ったことが", blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "ドライブに行く",
      },
    ],
  },
]

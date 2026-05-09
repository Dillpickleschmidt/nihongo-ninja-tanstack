import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Starting next month, I have decided not to work overtime anymore.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]から、もう" },
          { text: "残業[ざんぎょう]しないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic phrasing with もう for “anymore”; final する conjugates to します/する",
      },
      {
        segments: [
          { text: "来月[らいげつ]から、もう" },
          { text: "残業[ざんぎょう]をしないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses を with 残業をする",
      },
      {
        segments: [
          { text: "来月[らいげつ]から、私は もう" },
          { text: "残業[ざんぎょう]しないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject 私は",
      },
      {
        segments: [
          { text: "私は 来月[らいげつ]から、もう" },
          { text: "残業[ざんぎょう]しないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject at the start; app can also generate subject-dropping",
      },
      {
        segments: [
          { text: "来月[らいげつ]から、もう" },
          { text: "残業[ざんぎょう]しないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past ことにした/しました to express “have decided” more directly",
      },
      {
        segments: [
          { text: "来月[らいげつ]から、もう" },
          { text: "残業[ざんぎょう]をしないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past final verb with を-marked 残業",
      },
      {
        segments: [
          { text: "来月[らいげつ]からは、もう" },
          { text: "残業[ざんぎょう]しないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses からは to emphasize “from next month onward”",
      },
      {
        segments: [
          { text: "来月[らいげつ]からは、もう" },
          { text: "残業[ざんぎょう]をしないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "からは plus 残業をしない",
      },
      {
        segments: [
          { text: "来月[らいげつ]から、" },
          { text: "残業[ざんぎょう]は もうしないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topicalizes 残業 with は",
      },
      {
        segments: [
          { text: "来月[らいげつ]から、" },
          { text: "残業[ざんぎょう]は しないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses は for contrast; omits もう because はしない implies no more overtime",
      },
      {
        segments: [
          { text: "来月[らいげつ]からは、" },
          { text: "残業[ざんぎょう]は しないことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Double topicalization with からは and 残業は; natural emphasis",
      },
    ],
  },
  {
    english: "Because my stomach hurts, I’ve decided not to drink coffee today.",
    answers: [
      {
        segments: [
          { text: "おなかが 痛[いた]いので、今日[きょう]は コーヒーを" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので for the reason; standard word order",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いから、今日[きょう]は コーヒーを" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から for the reason",
      },
      {
        segments: [
          { text: "今日[きょう]は おなかが 痛[いた]いので、コーヒーを" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moving 今日は to the beginning",
      },
      {
        segments: [
          { text: "今日[きょう]は おなかが 痛[いた]いから、コーヒーを" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moving 今日は to the beginning and using から",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いので、今日[きょう]は コーヒーは" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark coffee as the thing being avoided",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いから、今日[きょう]は コーヒーは" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and contrasting コーヒー with は",
      },
      {
        segments: [
          { text: "今日[きょう]は おなかが 痛[いた]いので、コーヒーは" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日は at the beginning; コーヒー marked with は",
      },
      {
        segments: [
          { text: "今日[きょう]は おなかが 痛[いた]いから、コーヒーは" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日は at the beginning with から; コーヒー marked with は",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いので、コーヒーを 今日[きょう]は" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered object before 今日; natural emphasis on today",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いから、コーヒーを 今日[きょう]は" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered object before 今日 with から",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いので、コーヒーは 今日[きょう]は" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contrasting coffee and emphasizing today",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いから、コーヒーは 今日[きょう]は" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contrasting coffee and emphasizing today, using から",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]くて、今日[きょう]は コーヒーを" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the te-form 痛くて to give the reason",
      },
      {
        segments: [
          { text: "今日[きょう]は おなかが 痛[いた]くて、コーヒーを" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Te-form reason with 今日は at the beginning",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]くて、今日[きょう]は コーヒーは" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Te-form reason; コーヒー marked with contrastive は",
      },
      {
        segments: [
          { text: "今日[きょう]は おなかが 痛[いた]くて、コーヒーは" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Te-form reason; 今日は at the beginning and コーヒー marked with は",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]くて、コーヒーを 今日[きょう]は" },
          { text: "飲[の]まないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Te-form reason with object placed before 今日",
      },
    ],
  },
  {
    english: "After thinking about it, I’ve decided to study abroad in Spain next year.",
    hint: "Spain = スペイン",
    answers: [
      {
        segments: [
          { text: "よく 考[かんが]えてから、来年[らいねん] スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with よく考えてから and に for Spain",
      },
      {
        segments: [
          { text: "いろいろ 考[かんが]えてから、来年[らいねん] スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using いろいろ考えてから for “after thinking it over”",
      },
      {
        segments: [
          { text: "よく 考[かんが]えてから、来年[らいねん] スペインへ" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for the destination",
      },
      {
        segments: [
          { text: "考[かんが]えた 後[あと]で、来年[らいねん] スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 考えた後で instead of 考えてから",
      },
      {
        segments: [
          { text: "いろいろ 考[かんが]えた 後[あと]で、来年[らいねん] スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines いろいろ with 後で",
      },
      {
        segments: [
          { text: "よく 考[かんが]えた 後[あと]で、来年[らいねん] スペインへ" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 後で and へ",
      },
      {
        segments: [
          { text: "よく 考[かんが]えてから、スペインに 来年[らいねん]" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered: destination before time",
      },
      {
        segments: [
          { text: "よく 考[かんが]えてから、来年[らいねん]は スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 来年は to topicalize next year",
      },
      {
        segments: [
          { text: "いろいろ 考[かんが]えてから、来年[らいねん]は スペインへ" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalized time with へ and いろいろ考えてから",
      },
      {
        segments: [
          { text: "考[かんが]えた 後[あと]で、来年[らいねん]は スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 後で with 来年は",
      },
      {
        segments: [
          { text: "よく 考[かんが]えてから、スペインへ 来年[らいねん]" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered destination before time, using へ",
      },
      {
        segments: [
          { text: "来年[らいねん] スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。よく 考[かんが]えた 後[あと]です" },
        ],
        notes: "Decision first, followed by an explanatory sentence",
      },
      {
        segments: [
          { text: "いろいろ 考[かんが]えて、来年[らいねん] スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using te-form sequence 考えて for after thinking",
      },
      {
        segments: [
          { text: "よく 考[かんが]えてから、私[わたし]は 来年[らいねん] スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject 私は after the initial clause",
      },
      {
        segments: [
          { text: "いろいろ 考[かんが]えて、来年[らいねん]は スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Te-form sequence with 来年は",
      },
      {
        segments: [
          { text: "よく 考[かんが]えて、来年[らいねん] スペインに" },
          { text: "留学[りゅうがく]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using よく考えて as a concise “after thinking it over”",
      },
      {
        segments: [
          { text: "よく 考[かんが]えてから、来年[らいねん] スペインへ 留学[りゅうがく]に" },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 留学に行く instead of 留学する",
      },
      {
        segments: [
          { text: "いろいろ 考[かんが]えてから、来年[らいねん] スペインに 留学[りゅうがく]に" },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "留学に行く with いろいろ考えてから",
      },
      {
        segments: [
          { text: "考[かんが]えた 後[あと]で、来年[らいねん] スペインへ 留学[りゅうがく]に" },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "留学に行く with 考えた後で",
      },
    ],
  },
  {
    english: "I’ve decided to take my dog to the park tomorrow morning.",
    answers: [
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、私[わたし]の 犬[いぬ]を 公園[こうえん]に 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic word order with 公園に",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、私[わたし]の 犬[いぬ]を 公園[こうえん]へ 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for direction to the park",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、うちの 犬[いぬ]を 公園[こうえん]に 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using うちの犬 for “my/our dog,” natural colloquial phrasing",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、うちの 犬[いぬ]を 公園[こうえん]へ 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "うちの犬 plus へ for destination",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、私[わたし]の 犬[いぬ]を 連[つ]れて 公園[こうえん]に 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 犬を連れて公園に行く instead of 公園に連れていく",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、私[わたし]の 犬[いぬ]を 連[つ]れて 公園[こうえん]へ 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "犬を連れて行く construction with へ",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、うちの 犬[いぬ]を 連[つ]れて 公園[こうえん]に 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "犬を連れて行く construction with うちの犬",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、うちの 犬[いぬ]を 連[つ]れて 公園[こうえん]へ 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "うちの犬 with 公園へ行く",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 朝[あさ]、犬[いぬ]を 公園[こうえん]に 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Starting with 私は; pronoun-dropping will be auto-generated",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 朝[あさ]、犬[いぬ]を 公園[こうえん]へ 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Starting with 私は and using へ",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 朝[あさ]、犬[いぬ]を 連[つ]れて 公園[こうえん]に 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私 は topic plus 犬を連れて公園に行く",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 朝[あさ]、犬[いぬ]を 連[つ]れて 公園[こうえん]へ 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私 は topic plus 公園へ行く",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]は、私[わたし]の 犬[いぬ]を 公園[こうえん]に 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Marking tomorrow morning as topic with は",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]は、私[わたし]の 犬[いぬ]を 公園[こうえん]へ 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time topic は with へ",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]は、うちの 犬[いぬ]を 公園[こうえん]に 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time topic は with うちの犬",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]は、うちの 犬[いぬ]を 公園[こうえん]へ 連[つ]れていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time topic は with うちの犬 and へ",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]は、私[わたし]の 犬[いぬ]を 連[つ]れて 公園[こうえん]に 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time topic は plus 犬を連れて公園に行く",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]は、私[わたし]の 犬[いぬ]を 連[つ]れて 公園[こうえん]へ 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time topic は plus 公園へ行く",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]は、うちの 犬[いぬ]を 連[つ]れて 公園[こうえん]に 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time topic は, うちの犬, 公園に行く",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]は、うちの 犬[いぬ]を 連[つ]れて 公園[こうえん]へ 行[い]く" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time topic は, うちの犬, 公園へ行く",
      },
    ],
  },
  {
    english: "I’ve decided to choose the hotel near the station for the graduation ceremony.",
    hint: "Use the plain form for “choose” before “decided.”",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]のために、駅[えき]の 近[ちか]くの ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with 卒業式のために and 駅の近くのホテル",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]のために、私[わたし]は 駅[えき]の 近[ちか]くの ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved 私は after the purpose phrase",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]のために、駅[えき]の 近[ちか]くの ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting the subject, natural because the speaker is clear",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]には、駅[えき]の 近[ちか]くの ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 卒業式には to mean for/as for the graduation ceremony",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]には、駅[えき]の 近[ちか]くの ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted with 卒業式には",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]のために、駅[えき]に 近[ちか]い ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 駅に近いホテル instead of 駅の近くのホテル",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]のために、駅[えき]に 近[ちか]い ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted; using 駅に近いホテル",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]には、駅[えき]に 近[ちか]い ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 卒業式には and 駅に近いホテル",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]には、駅[えき]に 近[ちか]い ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted with 卒業式には and 駅に近いホテル",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]のために、駅[えき]の 近[ちか]くにある ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 駅の近くにあるホテル, a relative-clause description",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]のために、駅[えき]の 近[ちか]くにある ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted with 駅の近くにあるホテル",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]には、駅[えき]の 近[ちか]くにある ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 卒業式には with relative-clause description",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]には、駅[えき]の 近[ちか]くにある ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted; 卒業式には with 駅の近くにあるホテル",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]のために、駅前[えきまえ]の ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the concise expression 駅前のホテル",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]のために、駅前[えきまえ]の ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted; using 駅前のホテル",
      },
      {
        segments: [
          { text: "私[わたし]は 卒業式[そつぎょうしき]には、駅前[えきまえ]の ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 卒業式には and 駅前のホテル",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]には、駅前[えきまえ]の ホテルを" },
          { text: "選[えら]ぶことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted with concise 駅前のホテル",
      },
    ],
  },
  {
    english: "Because a typhoon is coming, I’ve decided to stay home all day tomorrow.",
    answers: [
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るので、明日[あした]は 一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using ので and 家にいる",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るから、明日[あした]は 一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るので、明日[あした]は 一日中[いちにちじゅう] うちにいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using うち instead of 家",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るから、明日[あした]は 一日中[いちにちじゅう] うちにいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and うち",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るので、明日[あした] 一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting topic particle は after 明日",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るから、明日[あした] 一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting は with から",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るので、明日[あした] 一日中[いちにちじゅう] うちにいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting は and using うち",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るから、明日[あした] 一日中[いちにちじゅう] うちにいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting は, using から and うち",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るので、明日[あした]は 一日中[いちにちじゅう] 外[そと]に 出[で]ない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Negative phrasing: deciding not to go outside",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るから、明日[あした]は 一日中[いちにちじゅう] 外[そと]に 出[で]ない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Negative phrasing with から",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るので、明日[あした]は 外[そと]に 出[で]ないで 一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Emphasizes not going outside before staying home",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るから、明日[あした]は 外[そと]に 出[で]ないで 一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Emphatic phrasing with から",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るので、明日[あした]は 家[いえ]で 一日中[いちにちじゅう] ごろごろする" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural colloquial 'stay home doing nothing' nuance with ごろごろする",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るから、明日[あした]は 家[いえ]で 一日中[いちにちじゅう] ごろごろする" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ごろごろする with から",
      },
      {
        segments: [
          { text: "明日[あした]は 台風[たいふう]が 来[く]るので、一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered: time topic first",
      },
      {
        segments: [
          { text: "明日[あした]は 台風[たいふう]が 来[く]るから、一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered with から",
      },
      {
        segments: [
          { text: "明日[あした]は 台風[たいふう]が 来[く]るので、一日中[いちにちじゅう] うちにいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered using うち",
      },
      {
        segments: [
          { text: "明日[あした]は 台風[たいふう]が 来[く]るから、一日中[いちにちじゅう] うちにいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered with から and うち",
      },
      {
        segments: [
          { text: "明日[あした] 台風[たいふう]が 来[く]るので、一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered and omitting は",
      },
      {
        segments: [
          { text: "明日[あした] 台風[たいふう]が 来[く]るから、一日中[いちにちじゅう] 家[いえ]にいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered, omitting は, with から",
      },
      {
        segments: [
          { text: "明日[あした] 台風[たいふう]が 来[く]るので、一日中[いちにちじゅう] うちにいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered, omitting は, using うち",
      },
      {
        segments: [
          { text: "明日[あした] 台風[たいふう]が 来[く]るから、一日中[いちにちじゅう] うちにいる" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered, omitting は, using から and うち",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るので、明日[あした]は 一日中[いちにちじゅう] 家[いえ]から 出[で]ない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Negative phrasing: not leaving the house",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るから、明日[あした]は 一日中[いちにちじゅう] 家[いえ]から 出[で]ない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Not leaving the house with から",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るので、明日[あした]は 一日中[いちにちじゅう] うちから 出[で]ない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Not leaving home using うち",
      },
      {
        segments: [
          { text: "台風[たいふう]が 来[く]るから、明日[あした]は 一日中[いちにちじゅう] うちから 出[で]ない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Not leaving home using うち and から",
      },
    ],
  },
  {
    english: "Did Kenji decide not to quit his part-time job after all?",
    hint: "Kenji = 健一 (けんいち)",
    answers: [
      {
        segments: [
          { text: "結局[けっきょく]、健一[けんいち]さんは アルバイトを" },
          { text: "やめないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Standard question with 結局 at the beginning and は marking Kenji as topic",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは 結局[けっきょく]、アルバイトを" },
          { text: "やめないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Same meaning with 結局 placed after the topic",
      },
      {
        segments: [
          { text: "結局[けっきょく]、健一[けんいち]さんは バイトを" },
          { text: "やめないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses the common shorter word バイト for part-time job",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは 結局[けっきょく]、バイトを" },
          { text: "やめないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses バイト with 結局 after the topic",
      },
      {
        segments: [
          { text: "やっぱり、健一[けんいち]さんは アルバイトを" },
          { text: "やめないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses やっぱり for “after all” instead of 結局",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは やっぱり、アルバイトを" },
          { text: "やめないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "やっぱり placed after the topic",
      },
      {
        segments: [
          { text: "やっぱり、健一[けんいち]さんは バイトを" },
          { text: "やめないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses やっぱり and the shorter バイト",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは やっぱり、バイトを" },
          { text: "やめないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses バイト with やっぱり after the topic",
      },
      {
        segments: [
          { text: "結局[けっきょく]、健一[けんいち]さんは アルバイトを" },
          { text: "続[つづ]けることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Paraphrases “not quit” as “continue” using the affirmative pattern",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは 結局[けっきょく]、アルバイトを" },
          { text: "続[つづ]けることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Affirmative 続ける version with 結局 after the topic",
      },
      {
        segments: [
          { text: "やっぱり、健一[けんいち]さんは アルバイトを" },
          { text: "続[つづ]けることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Affirmative 続ける version with やっぱり",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは やっぱり、アルバイトを" },
          { text: "続[つづ]けることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Affirmative 続ける version with やっぱり after the topic",
      },
      {
        segments: [
          { text: "結局[けっきょく]、健一[けんいち]さんは バイトを" },
          { text: "続[つづ]けることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses バイト with affirmative 続ける",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは 結局[けっきょく]、バイトを" },
          { text: "続[つづ]けることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "バイト and 結局 after the topic",
      },
      {
        segments: [
          { text: "やっぱり、健一[けんいち]さんは バイトを" },
          { text: "続[つづ]けることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "バイト with やっぱり",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは やっぱり、バイトを" },
          { text: "続[つづ]けることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "バイト with やっぱり after the topic",
      },
    ],
  },
  {
    english: "Tonight, I’ve decided to make dinner by myself.",
    answers: [
      {
        segments: [
          { text: "今晩[こんばん]、晩[ばん]ご飯[はん]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using 今晩 and 晩ご飯; blank is the final する in ことにする.",
      },
      {
        segments: [
          { text: "今夜[こんや]、晩[ばん]ご飯[はん]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 instead of 今晩 for “tonight.”",
      },
      {
        segments: [
          { text: "今晩[こんばん]、夕[ゆう]ご飯[はん]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 夕ご飯 instead of 晩ご飯 for “dinner.”",
      },
      {
        segments: [
          { text: "今夜[こんや]、夕[ゆう]ご飯[はん]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines 今夜 with 夕ご飯.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、夕食[ゆうしょく]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the more compact/formal noun 夕食 for dinner.",
      },
      {
        segments: [
          { text: "今夜[こんや]、夕食[ゆうしょく]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 and the compact noun 夕食.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、晩[ばん]ご飯[はん]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Marks tonight as the topic with は.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、晩[ばん]ご飯[はん]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今夜は.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、夕[ゆう]ご飯[はん]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今晩は with 夕ご飯.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、夕[ゆう]ご飯[はん]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今夜は with 夕ご飯.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、夕食[ゆうしょく]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今晩は with 夕食.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、夕食[ゆうしょく]を 一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今夜は with 夕食.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、一人[ひとり]で 晩[ばん]ご飯[はん]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves 一人で before the object for emphasis/natural word order variation.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、一人[ひとり]で 晩[ばん]ご飯[はん]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves 一人で before the object with 今夜は.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、一人[ひとり]で 夕[ゆう]ご飯[はん]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一人で before 夕ご飯.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、一人[ひとり]で 夕[ゆう]ご飯[はん]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一人で before 夕ご飯 with 今夜は.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、一人[ひとり]で 夕食[ゆうしょく]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一人で before 夕食.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、一人[ひとり]で 夕食[ゆうしょく]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一人で before 夕食 with 今夜は.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、晩[ばん]ご飯[はん]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 自分で for “by myself.”",
      },
      {
        segments: [
          { text: "今夜[こんや]、晩[ばん]ご飯[はん]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 and 自分で.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、夕[ゆう]ご飯[はん]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 夕ご飯 and 自分で.",
      },
      {
        segments: [
          { text: "今夜[こんや]、夕[ゆう]ご飯[はん]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜, 夕ご飯, and 自分で.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、夕食[ゆうしょく]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 夕食 and 自分で.",
      },
      {
        segments: [
          { text: "今夜[こんや]、夕食[ゆうしょく]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜, 夕食, and 自分で.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、晩[ばん]ご飯[はん]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今晩は with 自分で.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、晩[ばん]ご飯[はん]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今夜は with 自分で.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、夕[ゆう]ご飯[はん]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今晩は with 夕ご飯 and 自分で.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、夕[ゆう]ご飯[はん]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今夜は with 夕ご飯 and 自分で.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、夕食[ゆうしょく]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今晩は with 夕食 and 自分で.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、夕食[ゆうしょく]を 自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked 今夜は with 夕食 and 自分で.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、自分[じぶん]で 晩[ばん]ご飯[はん]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places 自分で before the object.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、自分[じぶん]で 晩[ばん]ご飯[はん]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places 自分で before the object with 今夜は.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、自分[じぶん]で 夕[ゆう]ご飯[はん]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "自分で before 夕ご飯.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、自分[じぶん]で 夕[ゆう]ご飯[はん]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "自分で before 夕ご飯 with 今夜は.",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、自分[じぶん]で 夕食[ゆうしょく]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "自分で before 夕食.",
      },
      {
        segments: [
          { text: "今夜[こんや]は、自分[じぶん]で 夕食[ゆうしょく]を 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "自分で before 夕食 with 今夜は.",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 晩[ばん]ご飯[はん]は、一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Makes “tonight’s dinner” the topic.",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 夕[ゆう]ご飯[はん]は、一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今晩の夕ご飯 as the topic.",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 夕食[ゆうしょく]は、一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今晩の夕食 as the topic.",
      },
      {
        segments: [
          { text: "今夜[こんや]の 晩[ばん]ご飯[はん]は、一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜の晩ご飯 as the topic.",
      },
      {
        segments: [
          { text: "今夜[こんや]の 夕[ゆう]ご飯[はん]は、一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜の夕ご飯 as the topic.",
      },
      {
        segments: [
          { text: "今夜[こんや]の 夕食[ゆうしょく]は、一人[ひとり]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜の夕食 as the topic.",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 晩[ばん]ご飯[はん]は、自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic construction with 自分で.",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 夕[ゆう]ご飯[はん]は、自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩の夕ご飯 topic with 自分で.",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 夕食[ゆうしょく]は、自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩の夕食 topic with 自分で.",
      },
      {
        segments: [
          { text: "今夜[こんや]の 晩[ばん]ご飯[はん]は、自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜の晩ご飯 topic with 自分で.",
      },
      {
        segments: [
          { text: "今夜[こんや]の 夕[ゆう]ご飯[はん]は、自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜の夕ご飯 topic with 自分で.",
      },
      {
        segments: [
          { text: "今夜[こんや]の 夕食[ゆうしょく]は、自分[じぶん]で 作[つく]ることに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜の夕食 topic with 自分で.",
      },
    ],
  },
  {
    english: "Because the rent is too high, I’ve decided to move to a cheap apartment.",
    answers: [
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるので、安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using ので and に for the destination",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるから、安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "アパートの 家賃[やちん]が 高[たか]すぎるので、安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies the current apartment’s rent",
      },
      {
        segments: [
          { text: "アパートの 家賃[やちん]が 高[たか]すぎるから、安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies the current apartment’s rent with から",
      },
      {
        segments: [
          { text: "今[いま]の アパートの 家賃[やちん]が 高[たか]すぎるので、安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says the rent of the current apartment",
      },
      {
        segments: [
          { text: "今[いま]の アパートの 家賃[やちん]が 高[たか]すぎるから、安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit current apartment with から",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるので、もっと 安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds もっと to mean a cheaper apartment",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるから、もっと 安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds もっと with から",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるので、家賃[やちん]が 安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 家賃が安い to clarify that the rent is cheap",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるから、家賃[やちん]が 安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 家賃が安い with から",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるので、安[やす]い アパートへ 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ instead of に for the moving destination",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるから、安[やす]い アパートへ 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ for destination and から for because",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるので、家賃[やちん]の 安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 家賃の安いアパート, a natural way to say an apartment with low rent",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]すぎるから、家賃[やちん]の 安[やす]い アパートに 引[ひ]っ越[こ]すことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 家賃の安いアパート with から",
      },
    ],
  },
  {
    english: "Because I want to save money, I’ve decided to bring a boxed lunch to school every day.",
    answers: [
      {
        segments: [
          { text: "お金[かね]をためたいので、毎日[まいにち] 学校[がっこう]に お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic order: reason first, then every day/school/boxed lunch.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいから、毎日[まいにち] 学校[がっこう]に お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので for the reason.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいので、学校[がっこう]に 毎日[まいにち] お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved 毎日 after 学校に.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいから、学校[がっこう]に 毎日[まいにち] お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "から with alternate placement of 毎日.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいので、毎日[まいにち] お弁当[べんとう]を 学校[がっこう]に 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Placed お弁当を before 学校に.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいから、毎日[まいにち] お弁当[べんとう]を 学校[がっこう]に 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "から with お弁当を before 学校に.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいので、毎日[まいにち] 学校[がっこう]へ お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for direction to school.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいから、毎日[まいにち] 学校[がっこう]へ お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "から plus へ for direction.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいので、毎日[まいにち] お弁当[べんとう]を 学校[がっこう]へ 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "へ for direction with object before destination.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいから、毎日[まいにち] お弁当[べんとう]を 学校[がっこう]へ 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "から, へ, and object-before-destination order.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいので、毎日[まいにち] 学校[がっこう]に 弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 弁当 without the honorific お.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいから、毎日[まいにち] 学校[がっこう]に 弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "から with 弁当 without お.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいので、毎日[まいにち] 学校[がっこう]へ 弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "弁当 without お and へ for direction.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいから、毎日[まいにち] 学校[がっこう]へ 弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "から, へ, and 弁当 without お.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいので、私[わたし]は 毎日[まいにち] 学校[がっこう]に お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は after the reason clause.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいから、私[わたし]は 毎日[まいにち] 学校[がっこう]に お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は with から.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいので、私[わたし]は 毎日[まいにち] 学校[がっこう]へ お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は and へ for direction.",
      },
      {
        segments: [
          { text: "お金[かね]をためたいから、私[わたし]は 毎日[まいにち] 学校[がっこう]へ お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は, から, and へ.",
      },
      {
        segments: [
          { text: "お金[かね]を 節約[せつやく]したいので、毎日[まいにち] 学校[がっこう]に お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 節約する for 'save money'.",
      },
      {
        segments: [
          { text: "お金[かね]を 節約[せつやく]したいから、毎日[まいにち] 学校[がっこう]に お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "節約する with から.",
      },
      {
        segments: [
          { text: "節約[せつやく]したいので、毎日[まいにち] 学校[がっこう]に お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting お金を with 節約したい; still means wanting to save money.",
      },
      {
        segments: [
          { text: "節約[せつやく]したいから、毎日[まいにち] 学校[がっこう]に お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting お金を with 節約したい and using から.",
      },
      {
        segments: [
          { text: "毎日[まいにち] 学校[がっこう]に お弁当[べんとう]を 持[も]っていく" },
          { text: "ことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。お金[かね]をためたいから" },
        ],
        notes: "Reason placed after the decision as a separate sentence.",
      },
    ],
  },
  {
    english: "Because the library is quiet, I’ve decided to study there on Saturday afternoons.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、土曜日[どようび]の 午後[ごご]は そこで " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with そこで and は for Saturday afternoons",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、土曜日[どようび]の 午後[ごご]は そこで " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the library as the topic",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、土曜日[どようび]の 午後[ごご]に そこで " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using に for the time expression",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、土曜日[どようび]の 午後[ごご]に そこで " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines topic は for the library with に for the time",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、土曜日[どようび]の 午後[ごご]は 図書館[としょかん]で " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Repeats 図書館で instead of using そこで",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、土曜日[どようび]の 午後[ごご]は 図書館[としょかん]で " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Repeats 図書館で with 図書館は as topic",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、土曜日[どようび]の 午後[ごご]に 図書館[としょかん]で " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses に for time and repeats 図書館で",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、土曜日[どようび]の 午後[ごご]に 図書館[としょかん]で " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は plus に for time and explicit location",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、土曜日[どようび]の 午後[ごご]、そこで " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Drops the particle after the time expression, natural in speech",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、土曜日[どようび]の 午後[ごご]、そこで " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Drops the time particle with 図書館は as topic",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、土曜日[どようび]の 午後[ごご]、図書館[としょかん]で " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Drops time particle and uses explicit 図書館で",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、土曜日[どようび]の 午後[ごご]、図書館[としょかん]で " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は, dropped time particle, and explicit location",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、土曜日[どようび]の 午後[ごご] そこでは " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves そこで before the time expression",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、土曜日[どようび]の 午後[ごご] そこでは " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved そこで with 図書館は as topic",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、土曜日[どようび]の 午後[ごご] そこでに " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved そこで and uses に for the time",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、土曜日[どようび]の 午後[ごご] そこでに " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved そこで, topic は, and に for time",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、土曜日[どようび]の 午後[ごご] そこで、" },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved そこで and drops the time particle",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、土曜日[どようび]の 午後[ごご] そこで、" },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moved そこで with 図書館は as topic and no time particle",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、毎週[まいしゅう] 土曜日[どようび]の 午後[ごご]は そこで " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 毎週 to make the repeated Saturday afternoons explicit",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、毎週[まいしゅう] 土曜日[どようび]の 午後[ごご]は そこで " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 毎週 with the library as topic",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、毎週[まいしゅう] 土曜日[どようび]の 午後[ごご]に そこで " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 毎週 and uses に for time",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、毎週[まいしゅう] 土曜日[どようび]の 午後[ごご]は 図書館[としょかん]で " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 毎週 and uses explicit 図書館で",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、毎週[まいしゅう] 土曜日[どようび]の 午後[ごご]は 図書館[としょかん]で " },
          { text: "勉強[べんきょう]することにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 毎週 with topic は and explicit location",
      },
    ],
  },
  {
    english: "I’ve decided to apologize to my roommate tonight.",
    hint: "roommate = ルームメイト",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、ルームメイトに" },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using 今晩 and 私は at the start",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]、ルームメイトに" },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]の 夜[よる]、ルームメイトに" },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今日の夜 for tonight",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトに 今晩[こんばん]" },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed after the indirect object",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトに 今夜[こんや]" },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今夜 with time phrase after the indirect object",
      },
      {
        segments: [
          { text: "今晩[こんばん]は ルームメイトに" },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing tonight with 今晩は",
      },
      {
        segments: [
          { text: "今夜[こんや]は ルームメイトに" },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing tonight with 今夜は",
      },
      {
        segments: [
          { text: "今日[きょう]の 夜[よる]は ルームメイトに" },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing 今日の夜",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、ルームメートに" },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using alternate spelling ルームメート",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトに 今晩[こんばん] " },
          { text: "謝[あやま]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With a space before the verb for the reordered phrase",
      },
    ],
  },
  {
    english: "Since I overslept again this morning, I’ve decided to go to sleep before eleven from today.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したので、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with ので and 今日から",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したから、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので for the reason",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したので、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using も to express “again/too this morning”",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したから、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using both も and から",
      },
      {
        segments: [
          { text: "今朝[けさ] また 遅[おそ]く 起[お]きたので、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Paraphrasing overslept as woke up late",
      },
      {
        segments: [
          { text: "今朝[けさ] また 遅[おそ]く 起[お]きたから、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Paraphrase with 遅く起きた and から",
      },
      {
        segments: [
          { text: "今朝[けさ] も 遅[おそ]く 起[お]きたので、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Paraphrase with も for again",
      },
      {
        segments: [
          { text: "今朝[けさ] も 遅[おそ]く 起[お]きたから、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Paraphrase with も and から",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したので、今日[きょう]から 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using までに to mean by/before eleven",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したから、今日[きょう]から 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using までに with から reason",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したので、今日[きょう]から 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using も and までに",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したから、今日[きょう]から 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using も, から, and までに",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したので、今日[きょう]から十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moving 今日から to the beginning",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したから、今日[きょう]から十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日から with から reason",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したので、今日[きょう]から十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日から with も",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したから、今日[きょう]から十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日から with も and から",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したので、今日[きょう]から十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日から with までに",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したから、今日[きょう]から十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日から with までに and から",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したので、今日[きょう]から十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日から with も and までに",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したから、今日[きょう]から十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日から with も, から, and までに",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したので、これからは 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using これからは for “from now on/from today onward”",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したから、これからは 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これからは with から reason",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したので、これからは 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これからは with も for again",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したから、これからは 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これからは with も and から",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したので、これからは 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これからは with までに",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]したから、これからは 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これからは with までに and から",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したので、これからは 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これからは with も and までに",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]したから、これからは 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これからは with も, から, and までに",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]してしまったので、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using てしまった to show regret about oversleeping again",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]してしまったので、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Regret nuance with も",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]してしまったから、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Regret nuance with から",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]してしまったから、今日[きょう]から 十一時[じゅういちじ]前[まえ]に 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Regret nuance with も and から",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]してしまったので、今日[きょう]から 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Regret nuance with までに",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]してしまったので、今日[きょう]から 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Regret nuance with も and までに",
      },
      {
        segments: [
          { text: "今朝[けさ] また 朝寝坊[あさねぼう]してしまったから、今日[きょう]から 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Regret nuance with までに and から",
      },
      {
        segments: [
          { text: "今朝[けさ] も 朝寝坊[あさねぼう]してしまったから、今日[きょう]から 十一時[じゅういちじ]までに 寝[ね]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Regret nuance with も, から, and までに",
      },
    ],
  },
  {
    english: "Since tomorrow's meeting is important, I've decided to leave home at eight.",
    answers: [
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]は 大切[たいせつ]なので、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using は and なので",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]が 大切[たいせつ]なので、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to emphasize the meeting as the reason",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]は 大切[たいせつ]だから、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using だから instead of なので",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]が 大切[たいせつ]だから、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with だから",
      },
      {
        segments: [
          { text: "明日[あした]は 大切[たいせつ]な 会議[かいぎ]が あるので、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Rephrased as “there is an important meeting tomorrow”",
      },
      {
        segments: [
          { text: "明日[あした]は 大切[たいせつ]な 会議[かいぎ]が あるから、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Rephrased with あるから",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]は 重要[じゅうよう]なので、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 重要 as a more formal synonym for important",
      },
      {
        segments: [
          { text: "明日[あした]は 重要[じゅうよう]な 会議[かいぎ]が あるので、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 重要な会議 in the “there is” construction",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]は 大事[だいじ]なので、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 大事 as a common synonym for important",
      },
      {
        segments: [
          { text: "明日[あした]は 大事[だいじ]な 会議[かいぎ]が あるので、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 大事な会議 with the “there is” construction",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]は 大切[たいせつ]なので、八時[はちじ]に うちを 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using うち instead of 家 for home",
      },
      {
        segments: [
          { text: "明日[あした]は 大切[たいせつ]な 会議[かいぎ]が あるので、八時[はちじ]に うちを 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using うち in the “there is an important meeting” phrasing",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]は 大切[たいせつ]なので、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Changed word order: 家を before 八時に",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]は 大切[たいせつ]だから、八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Changed word order with だから",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]は 大切[たいせつ]なので、朝[あさ] 八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies eight in the morning with 朝",
      },
      {
        segments: [
          { text: "明日[あした]は 大切[たいせつ]な 会議[かいぎ]が あるので、朝[あさ] 八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies morning in the “there is an important meeting” construction",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]は 大切[たいせつ]なので、午前[ごぜん] 八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies 8 a.m. with 午前",
      },
      {
        segments: [
          { text: "明日[あした]は 大切[たいせつ]な 会議[かいぎ]が あるので、午前[ごぜん] 八時[はちじ]に 家[いえ]を 出[で]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 午前八時 in the “there is” construction",
      },
    ],
  },
  {
    english: "Because the train is crowded, I’ve decided to walk to school today.",
    answers: [
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるので、今日[きょう]は 歩[ある]いて 学校[がっこう]に " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using ので and 歩いて学校に行く",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるから、今日[きょう]は 歩[ある]いて 学校[がっこう]に " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので for because",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は 混[こ]んでいるので、今日[きょう]は 歩[ある]いて 学校[がっこう]に " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the train as the topic",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるので、今日[きょう]は 学校[がっこう]まで 歩[ある]いて " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 学校まで to express walking as far as school",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるから、今日[きょう]は 学校[がっこう]まで 歩[ある]いて " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から plus 学校まで",
      },
      {
        segments: [
          { text: "今日[きょう]は 電車[でんしゃ]が 混[こ]んでいるので、学校[がっこう]まで 歩[ある]いて " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moving 今日 to the front of the sentence",
      },
      {
        segments: [
          { text: "今日[きょう]は 電車[でんしゃ]が 混[こ]んでいるから、学校[がっこう]まで 歩[ある]いて " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日 with から",
      },
      {
        segments: [
          { text: "今日[きょう]は 電車[でんしゃ]が 混[こ]んでいるので、歩[ある]いて 学校[がっこう]に " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日 with 学校に行く wording",
      },
      {
        segments: [
          { text: "今日[きょう]は 電車[でんしゃ]が 混[こ]んでいるから、歩[ある]いて 学校[がっこう]に " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日 with から and 学校に行く",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるので、今日[きょう]は 歩[ある]いて 学校[がっこう]へ " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for destination",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるから、今日[きょう]は 歩[ある]いて 学校[がっこう]へ " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and へ for destination",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるので、今日[きょう]は 学校[がっこう]へ 歩[ある]いて " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Destination placed before 歩いて行く with へ",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるので、今日[きょう]は 学校[がっこう]まで " },
          { text: "歩[ある]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 学校まで歩く without 行く",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるから、今日[きょう]は 学校[がっこう]まで " },
          { text: "歩[ある]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から with 学校まで歩く",
      },
      {
        segments: [
          { text: "今日[きょう]は 電車[でんしゃ]が 混[こ]んでいるので、学校[がっこう]まで " },
          { text: "歩[ある]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日 with concise 学校まで歩く",
      },
      {
        segments: [
          { text: "今日[きょう]は 電車[でんしゃ]が 混[こ]んでいるから、学校[がっこう]まで " },
          { text: "歩[ある]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今日, using から and 学校まで歩く",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるので、私[わたし]は 今日[きょう]、学校[がっこう]まで " },
          { text: "歩[ある]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私 as subject, not sentence-initial",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるから、私[わたし]は 今日[きょう]、学校[がっこう]まで " },
          { text: "歩[ある]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私 with から",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるので、今日[きょう]は 電車[でんしゃ]に 乗[の]らないことにして、学校[がっこう]まで " },
          { text: "歩[ある]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds the decision not to take the train, then walk; uses listed grammar twice",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が 混[こ]んでいるから、今日[きょう]は 学校[がっこう]へ 歩[ある]いて " },
          { text: "行[い]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Destination placed before 歩いて行く with へ and から",
      },
    ],
  },
  {
    english: "Because my throat hurts, I’ve decided not to sing at karaoke tonight.",
    answers: [
      {
        segments: [
          { text: "喉[のど]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今晩[こんばん]は カラオケで " },
          { text: "歌[うた]わないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with ので and 今晩は",
      },
      {
        segments: [
          { text: "喉[のど]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、今晩[こんばん]は カラオケで " },
          { text: "歌[うた]わないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "喉[のど]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今夜[こんや]は カラオケで " },
          { text: "歌[うた]わないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "喉[のど]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、今夜[こんや]は カラオケで " },
          { text: "歌[うた]わないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and 今夜",
      },
      {
        segments: [
          { text: "今晩[こんばん]は 喉[のど]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、カラオケで " },
          { text: "歌[うた]わないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "今晩[こんばん]は 喉[のど]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、カラオケで " },
          { text: "歌[うた]わないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time first, using から",
      },
      {
        segments: [
          { text: "喉[のど]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今晩[こんばん]は カラオケでは " },
          { text: "歌[うた]わないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using では to contrast karaoke as the place where the speaker won't sing",
      },
      {
        segments: [
          { text: "喉[のど]が " },
          { text: "痛[いた]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、今晩[こんばん]は カラオケでは " },
          { text: "歌[うた]わないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から with contrastive カラオケでは",
      },
    ],
  },
  {
    english: "Because the final exam is next week, I’ve decided to review grammar every night.",
    answers: [
      {
        segments: [
          { text: "期末試験[きまつしけん]は 来週[らいしゅう]なので、毎晩[まいばん] 文法[ぶんぽう]を " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using は and ので",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が 来週[らいしゅう]なので、毎晩[まいばん] 文法[ぶんぽう]を " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for the exam",
      },
      {
        segments: [
          { text: "来週[らいしゅう] 期末試験[きまつしけん]が あるので、毎晩[まいばん] 文法[ぶんぽう]を " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 期末試験がある to say there is a final exam next week",
      },
      {
        segments: [
          { text: "来週[らいしゅう]は 期末試験[きまつしけん]が あるので、毎晩[まいばん] 文法[ぶんぽう]を " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing next week with は",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は 来週[らいしゅう]だから、毎晩[まいばん] 文法[ぶんぽう]を " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using だから instead of なので",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が 来週[らいしゅう]だから、毎晩[まいばん] 文法[ぶんぽう]を " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with だから",
      },
      {
        segments: [
          { text: "来週[らいしゅう] 期末試験[きまつしけん]が あるから、毎晩[まいばん] 文法[ぶんぽう]を " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から with 期末試験がある",
      },
      {
        segments: [
          { text: "来週[らいしゅう]は 期末試験[きまつしけん]が あるから、毎晩[まいばん] 文法[ぶんぽう]を " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and topicalized 来週",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は 来週[らいしゅう]なので、文法[ぶんぽう]を 毎晩[まいばん] " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Different adverb placement before the verb",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が 来週[らいしゅう]なので、文法[ぶんぽう]を 毎晩[まいばん] " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が and moving 毎晩 before the verb",
      },
      {
        segments: [
          { text: "来週[らいしゅう] 期末試験[きまつしけん]が あるので、文法[ぶんぽう]を 毎晩[まいばん] " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Existential exam phrasing with different adverb placement",
      },
      {
        segments: [
          { text: "来週[らいしゅう]は 期末試験[きまつしけん]が あるので、文法[ぶんぽう]を 毎晩[まいばん] " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalized 来週 with different adverb placement",
      },
      {
        segments: [
          { text: "来週[らいしゅう]は 期末試験[きまつしけん]なので、毎晩[まいばん] 文法[ぶんぽう]を " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Concise phrasing: next week is the final exam",
      },
      {
        segments: [
          { text: "来週[らいしゅう]は 期末試験[きまつしけん]なので、文法[ぶんぽう]を 毎晩[まいばん] " },
          { text: "復習[ふくしゅう]することに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Concise phrasing with adverb before the verb",
      },
      {
        segments: [
          { text: "来週[らいしゅう] 期末試験[きまつしけん]が あるので、毎晩[まいばん] 文法[ぶんぽう]の " },
          { text: "復習[ふくしゅう]をすることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 文法の復習をする instead of 文法を復習する",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は 来週[らいしゅう]なので、毎晩[まいばん] 文法[ぶんぽう]の " },
          { text: "復習[ふくしゅう]をすることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Nominalized review phrasing",
      },
      {
        segments: [
          { text: "来週[らいしゅう]は 期末試験[きまつしけん]が あるので、毎晩[まいばん] 文法[ぶんぽう]の " },
          { text: "復習[ふくしゅう]をすることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Nominalized review phrasing with 来週は",
      },
    ],
  },
  {
    english: "Since the apartment is too dark, I’ve decided to put the desk near the window.",
    answers: [
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるので、机[つくえ]を 窓[まど]の 近[ちか]くに " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with が and ので",
      },
      {
        segments: [
          { text: "アパートは 暗[くら]すぎるので、机[つくえ]を 窓[まど]の 近[ちか]くに " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the apartment as the topic",
      },
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるから、机[つくえ]を 窓[まど]の 近[ちか]くに " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "アパートは 暗[くら]すぎるから、机[つくえ]を 窓[まど]の 近[ちか]くに " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は and から",
      },
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるので、窓[まど]の 近[ちか]くに 机[つくえ]を " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed object and location order",
      },
      {
        segments: [
          { text: "アパートは 暗[くら]すぎるので、窓[まど]の 近[ちか]くに 机[つくえ]を " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with apartment as topic",
      },
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるから、窓[まど]の 近[ちか]くに 机[つくえ]を " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with から",
      },
      {
        segments: [
          { text: "アパートは 暗[くら]すぎるから、窓[まど]の 近[ちか]くに 机[つくえ]を " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with は and から",
      },
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるので、机[つくえ]を 窓際[まどぎわ]に " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 窓際 for “near/by the window”",
      },
      {
        segments: [
          { text: "アパートは 暗[くら]すぎるので、机[つくえ]を 窓際[まどぎわ]に " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 窓際 with apartment as topic",
      },
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるから、机[つくえ]を 窓際[まどぎわ]に " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 窓際 and から",
      },
      {
        segments: [
          { text: "アパートは 暗[くら]すぎるから、机[つくえ]を 窓際[まどぎわ]に " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 窓際 with は and から",
      },
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるので、窓際[まどぎわ]に 机[つくえ]を " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "窓際 with reversed word order",
      },
      {
        segments: [
          { text: "アパートは 暗[くら]すぎるので、窓際[まどぎわ]に 机[つくえ]を " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "窓際, reversed order, apartment as topic",
      },
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるから、窓際[まどぎわ]に 机[つくえ]を " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "窓際, reversed order, with から",
      },
      {
        segments: [
          { text: "アパートは 暗[くら]すぎるから、窓際[まどぎわ]に 机[つくえ]を " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "窓際, reversed order, with は and から",
      },
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるので、机[つくえ]は 窓[まど]の 近[ちか]くに " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing the desk with は",
      },
      {
        segments: [
          { text: "アパートが 暗[くら]すぎるので、机[つくえ]は 窓際[まどぎわ]に " },
          { text: "置[お]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing the desk and using 窓際",
      },
    ],
  },
  {
    english: "Did Mika decide to sell her car after all?",
    hint: "Mika = 美香 (みか)",
    answers: [
      {
        segments: [
          { text: "結局[けっきょく]、美香[みか]さんは 車[くるま]を " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Standard word order with 結局 for “after all” and を for the object.",
      },
      {
        segments: [
          { text: "美香[みか]さんは 結局[けっきょく]、車[くるま]を " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Places 結局 after the topic, also natural.",
      },
      {
        segments: [
          { text: "結局[けっきょく]、美香[みか]さんは 車[くるま]を " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses explanatory んですか, a very natural way to ask for confirmation.",
      },
      {
        segments: [
          { text: "美香[みか]さんは 結局[けっきょく]、車[くるま]を " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Explanatory んですか with 結局 after the topic.",
      },
      {
        segments: [
          { text: "やっぱり 美香[みか]さんは 車[くるま]を " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses やっぱり as a natural equivalent of “after all.”",
      },
      {
        segments: [
          { text: "美香[みか]さんは やっぱり 車[くるま]を " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Places やっぱり after the topic.",
      },
      {
        segments: [
          { text: "やっぱり、美香[みか]さんは 車[くるま]を " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses やっぱり with explanatory んですか.",
      },
      {
        segments: [
          { text: "美香[みか]さんは やっぱり、車[くるま]を " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Explanatory question with やっぱり after the topic.",
      },
      {
        segments: [
          { text: "結局[けっきょく]、美香[みか]さんは 自分[じぶん]の 車[くるま]を " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Explicitly says “her own car” with 自分の.",
      },
      {
        segments: [
          { text: "美香[みか]さんは 結局[けっきょく]、自分[じぶん]の 車[くるま]を " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Explicit 自分の車 with 結局 after the topic.",
      },
      {
        segments: [
          { text: "結局[けっきょく]、美香[みか]さんは 自分[じぶん]の 車[くるま]を " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Explicit 自分の車 plus explanatory んですか.",
      },
      {
        segments: [
          { text: "美香[みか]さんは 結局[けっきょく]、自分[じぶん]の 車[くるま]を " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Explicit 自分の車 and 結局 after the topic, with んですか.",
      },
      {
        segments: [
          { text: "やっぱり、美香[みか]さんは 自分[じぶん]の 車[くるま]を " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses やっぱり and explicit 自分の車.",
      },
      {
        segments: [
          { text: "美香[みか]さんは やっぱり、自分[じぶん]の 車[くるま]を " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "やっぱり after the topic with explicit 自分の車.",
      },
      {
        segments: [
          { text: "やっぱり、美香[みか]さんは 自分[じぶん]の 車[くるま]を " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "やっぱり plus explanatory んですか and explicit 自分の車.",
      },
      {
        segments: [
          { text: "美香[みか]さんは やっぱり、自分[じぶん]の 車[くるま]を " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "やっぱり after topic with explanatory んですか and explicit 自分の車.",
      },
      {
        segments: [
          { text: "結局[けっきょく]、美香[みか]さんは 車[くるま]は " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses contrastive は on 車, natural when the car is the item under discussion.",
      },
      {
        segments: [
          { text: "結局[けっきょく]、美香[みか]さんは 車[くるま]は " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Contrastive 車は with explanatory んですか.",
      },
      {
        segments: [
          { text: "やっぱり、美香[みか]さんは 車[くるま]は " },
          { text: "売[う]ることに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Uses やっぱり and contrastive 車は.",
      },
      {
        segments: [
          { text: "やっぱり、美香[みか]さんは 車[くるま]は " },
          { text: "売[う]ることにしたん", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "やっぱり with contrastive 車は and explanatory んですか.",
      },
    ],
  },
  {
    english: "Because the baby is sleeping, I’ve decided not to play the guitar in the room tonight.",
    answers: [
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、今晩[こんばん]は 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic version with ので and 今晩は",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、今夜[こんや]は 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、今晩[こんばん]は 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、今夜[こんや]は 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and 今夜",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、部屋[へや]で 今晩[こんばん] ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered time phrase after location",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、今晩[こんばん] 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting topic particle は after 今晩",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、今晩[こんばん] 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and omitting は after 今晩",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、今晩[こんばん]は ギターを 部屋[へや]で" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object placed before location",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、今晩[こんばん]は ギターを 部屋[へや]で" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object-before-location order with から",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、今晩[こんばん]は 私[わたし]の 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifying my room",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、今晩[こんばん]は 私[わたし]の 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifying my room with から",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、私[わたし]は 今晩[こんばん] 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject 私は after reason clause",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、私[わたし]は 今晩[こんばん] 部屋[へや]で ギターを" },
          { text: "弾[ひ]かないことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject 私は with から",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、今晩[こんばん]は 部屋[へや]で ギターを" },
          { text: "弾[ひ]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Alternative: decide against playing, using negative on する",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、今晩[こんばん]は 部屋[へや]で ギターを" },
          { text: "弾[ひ]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Negative on する with から",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているので、今夜[こんや]は 部屋[へや]で ギターを" },
          { text: "弾[ひ]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Negative on する with 今夜",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 寝[ね]ているから、今夜[こんや]は 部屋[へや]で ギターを" },
          { text: "弾[ひ]くことに", blank: true },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Negative on する with から and 今夜",
      },
    ],
  },
];

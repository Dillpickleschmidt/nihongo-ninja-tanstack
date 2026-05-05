import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I think Riko forgot her textbook.",
    hint: "Riko = りこ",
    answers: [
      {
        segments: [
          {
            text: "りこさんは 教科書[きょうかしょ]を 忘[わす]れたと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "りこさんが 教科書[きょうかしょ]を 忘[わす]れたと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "私[わたし]は りこさんが 教科書[きょうかしょ]を 忘[わす]れたと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は + りこさんが",
      },
    ],
  },
  {
    english: "I swam at the beach last summer.",
    hint: "Use casual past tense.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 去年[きょねん]の 夏[なつ]、海[うみ]で" },
          { text: "泳[およ]いだ", blank: true },
        ],
        notes: "Standard word order, no に after 夏",
      },
      {
        segments: [
          { text: "私[わたし]は 去年[きょねん]の 夏[なつ]に、海[うみ]で" },
          { text: "泳[およ]いだ", blank: true },
        ],
        notes: "With に after 夏 marking the time",
      },
      {
        segments: [
          { text: "去年[きょねん]の 夏[なつ]、海[うみ]で" },
          { text: "泳[およ]いだ", blank: true },
        ],
        notes: "Dropping 私は — subject implied",
      },
      {
        segments: [
          { text: "去年[きょねん]の 夏[なつ]に、海[うみ]で" },
          { text: "泳[およ]いだ", blank: true },
        ],
        notes: "Dropping 私は, with に after 夏",
      },
      {
        segments: [
          { text: "私[わたし]は 去年[きょねん]の 夏[なつ]、ビーチで" },
          { text: "泳[およ]いだ", blank: true },
        ],
        notes: "Using ビーチ (beach) instead of 海",
      },
      {
        segments: [
          { text: "去年[きょねん]の 夏[なつ]、ビーチで" },
          { text: "泳[およ]いだ", blank: true },
        ],
        notes: "ビーチ, dropping 私は",
      },
    ],
  },
  {
    english: "Last night's party was fun!",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のパーティーは" },
          { text: "楽[たの]しかった", blank: true },
        ],
        notes:
          'Standard: 昨日の夜 for "last night", い-adjective past form 楽しかった (written directly)',
      },
      {
        segments: [
          { text: "昨晩[さくばん]のパーティーは" },
          { text: "楽[たの]しかった", blank: true },
        ],
        notes: 'Using 昨晩 (sakuban) as an alternative word for "last night"',
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のパーティーが" },
          { text: "楽[たの]しかった", blank: true },
        ],
        notes: "Using が instead of は — emphasizing the party as subject",
      },
      {
        segments: [
          { text: "昨晩[さくばん]のパーティーが" },
          { text: "楽[たの]しかった", blank: true },
        ],
        notes: "が instead of は; 昨晩",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は 楽[たの]しいパーティー" },
          { text: "だった", blank: true },
        ],
        notes:
          'Using だった after noun: 楽しいパーティーだった — "it was a fun party"; 昨日の夜',
      },
      {
        segments: [
          { text: "昨晩[さくばん]は 楽[たの]しいパーティー" },
          { text: "だった", blank: true },
        ],
        notes: "Using だった after noun; 昨晩",
      },
    ],
  },
  {
    english: "The test was really hard yesterday.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]のテストは すごく" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]のテストは 本当[ほんとう]に" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]のテストは とても" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]のテストが すごく" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "昨日[きのう]、テストは すごく" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "昨日 as standalone time adverb",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は すごく" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "試験 instead of テスト",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は 本当[ほんとう]に" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "試験 + 本当に",
      },
    ],
  },
  {
    english: "I watched a horror movie last night, but it wasn't scary at all.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる]、ホラー 映画[えいが]を 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる]にホラー 映画[えいが]を 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "に instead of の for time",
      },
      {
        segments: [
          {
            text: "昨晩[さくばん]、ホラー 映画[えいが]を 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "昨晩 instead of 昨日の夜",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる]、ホラー 映画[えいが]を 見[み]たけど、あまり",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "あまり instead of 全然",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる]、ホラー 映画[えいが]を 見[み]たが、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          {
            text: "昨夜[さくや]、ホラー 映画[えいが]を 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "昨夜 (さくや) instead of 昨日の夜",
      },
      {
        segments: [
          {
            text: "昨晩[さくばん] ホラー 映画[えいが] 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        register: "casual",
        notes: "昨晩 + を omitted",
      },
    ],
  },
  {
    english: "I didn't eat breakfast this morning.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、朝[あさ]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]は 朝[あさ]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "は on 今朝 for topic/contrast",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝[あさ]ご 飯[はん]は" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "は on 朝ご飯 for contrastive topic",
      },
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Context implied without 今朝",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、朝[あさ]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝食[ちょうしょく]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "朝食 (formal word for breakfast) instead of 朝ご飯",
      },
    ],
  },
  {
    english: "This morning's coffee wasn't hot.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]のコーヒーは" },
          { text: "熱[あつ]くなかった", blank: true },
        ],
        notes:
          "Standard: は for topic, 熱くなかった negative past い-adjective (casual)",
      },
      {
        segments: [
          { text: "今朝[けさ]のコーヒーが" },
          { text: "熱[あつ]くなかった", blank: true },
        ],
        notes: "が instead of は for subject marker",
      },
      {
        segments: [
          { text: "今日[きょう]の 朝[あさ]のコーヒーは" },
          { text: "熱[あつ]くなかった", blank: true },
        ],
        notes: '今日の朝 instead of 今朝 as "this morning", casual',
      },
    ],
  },
  {
    english:
      "I waited at the station for about thirty minutes, but Yuki didn't come.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]ぐらい" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]くらい" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "くらい instead of ぐらい",
      },
      {
        segments: [
          { text: "三十分[さんじっぷん]ぐらい、駅[えき]で" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Time expression fronted",
      },
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]ぐらい" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]ぐらい" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんが" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "ゆきさんが instead of ゆきさんは",
      },
      {
        segments: [
          { text: "私[わたし]は 駅[えき]で 三十分[さんじっぷん]ぐらい" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 私は",
      },
    ],
  },
  {
    english: "I forgot my wallet at the restaurant yesterday.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、レストランに 財布[さいふ]を" },
          { text: "忘[わす]れた", blank: true },
        ],
        notes:
          "Basic structure: に particle for location where item was left behind",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、レストランで 財布[さいふ]を" },
          { text: "忘[わす]れた", blank: true },
        ],
        notes:
          "で particle for location of action (place where the forgetting happened)",
      },
      {
        segments: [
          { text: "昨日[きのう]、レストランに 財布[さいふ]を" },
          { text: "忘[わす]れた", blank: true },
        ],
        notes: "Subject dropped entirely, に particle",
      },
      {
        segments: [
          { text: "昨日[きのう]、レストランで 財布[さいふ]を" },
          { text: "忘[わす]れた", blank: true },
        ],
        notes: "Subject dropped entirely, で particle",
      },
      {
        segments: [
          { text: "私[わたし]はレストランに 財布[さいふ]を 昨日[きのう]" },
          { text: "忘[わす]れた", blank: true },
        ],
        notes:
          "昨日 moved to just before the verb (time expression repositioned), に particle",
      },
      {
        segments: [
          { text: "私[わたし]はレストランで 財布[さいふ]を 昨日[きのう]" },
          { text: "忘[わす]れた", blank: true },
        ],
        notes: "昨日 moved to just before the verb, で particle",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう]、レストランに 財布[さいふ]を" },
          { text: "忘[わす]れた", blank: true },
        ],
        notes:
          "が instead of は for subject (slightly more emphatic), に particle",
      },
    ],
  },
  {
    english: "Kenji said he was studying at the library.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]して" },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]して" },
          { text: "いる", blank: true },
          { text: "って" },
          { text: " 言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "casual",
        notes: "って sounds more casual than と.",
      },
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]して" },
          { text: "いる", blank: true },
          { text: "と" },
          {
            text: " 言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "言った is a simple past form for “said.”",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 勉強[べんきょう]して" },
          { text: "いる", blank: true },
          { text: "と" },
          { text: "けんじさんが 言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "The quoted part can come before けんじさんが.",
      },
    ],
  },
  {
    english:
      "The movie last night was interesting, but the ending wasn't good.",
    hint: "Use casual form throughout.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]の 映画[えいが]は" },
          { text: "面白[おもしろ]かった", blank: true },
          { text: "けど、エンディングは" },
          { text: "よくなかった", blank: true },
        ],
        notes:
          'Basic: 昨日の夜の映画, けど for "but", エンディング for "ending"',
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]の 映画[えいが]は" },
          { text: "面白[おもしろ]かった", blank: true },
          { text: "が、エンディングは" },
          { text: "よくなかった", blank: true },
        ],
        notes: 'が instead of けど/でも for "but"',
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]の 映画[えいが]は" },
          { text: "面白[おもしろ]かった", blank: true },
          { text: "けど、 終わ[おわ]りは" },
          { text: "よくなかった", blank: true },
        ],
        notes: '終わり instead of エンディング for "ending", けど for "but"',
      },
      {
        segments: [
          { text: "昨夜[さくや]の 映画[えいが]は" },
          { text: "面白[おもしろ]かった", blank: true },
          { text: "けど、エンディングは" },
          { text: "よくなかった", blank: true },
        ],
        notes:
          '昨夜 (sakuya) as alternative word for "last night", けど for "but"',
      },
      {
        segments: [
          { text: "昨夜[さくや]の 映画[えいが]は" },
          { text: "面白[おもしろ]かった", blank: true },
          { text: "が、 終わ[おわ]りは" },
          { text: "よくなかった", blank: true },
        ],
        notes: '昨夜 for "last night", 終わり for "ending", が for "but"',
      },
      {
        segments: [
          { text: "昨夜[さくや]の 映画[えいが]は" },
          { text: "面白[おもしろ]かった", blank: true },
          { text: "が、エンディングは" },
          { text: "よくなかった", blank: true },
        ],
        notes: '昨夜 for "last night", エンディング for "ending", が for "but"',
      },
      {
        segments: [
          { text: "昨夜[さくや]の 映画[えいが]は" },
          { text: "面白[おもしろ]かった", blank: true },
          { text: "けど、 終わ[おわ]りは" },
          { text: "よくなかった", blank: true },
        ],
        notes: '昨夜 for "last night", 終わり for "ending", けど for "but"',
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]の 映画[えいが]は" },
          { text: "面白[おもしろ]かった", blank: true },
          { text: "が、 終わ[おわ]りは" },
          { text: "よくなかった", blank: true },
        ],
        notes: '昨日の夜 for "last night", 終わり for "ending", が for "but"',
      },
    ],
  },
  {
    english:
      "I wrote in my diary last night, but I didn't read it this morning.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 夜[よる]、日記[にっき]に" },
          { text: "書[か]いた", blank: true },
          { text: "けど、今朝[けさ]は" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes:
          "Standard: 昨日の夜, けど, は after 今朝; pre-conjugated past forms in blanks",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 夜[よる]、日記[にっき]に" },
          { text: "書[か]いた", blank: true },
          { text: "が、今朝[けさ]は" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: 'Using が instead of けど for "but"',
      },
      {
        segments: [
          { text: "私[わたし]は 昨夜[さくや]、日記[にっき]に" },
          { text: "書[か]いた", blank: true },
          { text: "けど、今朝[けさ]は" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: "Using 昨夜 (さくや) instead of 昨日の夜, けど",
      },
      {
        segments: [
          { text: "私[わたし]は 昨夜[さくや]、日記[にっき]に" },
          { text: "書[か]いた", blank: true },
          { text: "が、今朝[けさ]は" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: '昨夜 with が for "but"',
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 夜[よる]、日記[にっき]に" },
          { text: "書[か]いた", blank: true },
          { text: "けど、今朝[けさ]" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: "Dropping は after 今朝 (natural casual particle drop)",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 夜[よる]、日記[にっき]に" },
          { text: "書[か]いた", blank: true },
          { text: "けど、今朝[けさ]は 日記[にっき]を" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: "Explicitly stating 日記を in the second clause, けど",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 夜[よる]、日記[にっき]に" },
          { text: "書[か]いた", blank: true },
          { text: "が、今朝[けさ]は 日記[にっき]を" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: 'Explicitly stating 日記を in second clause, が for "but"',
      },
      {
        segments: [
          { text: "私[わたし]は 昨夜[さくや]、日記[にっき]に" },
          { text: "書[か]いた", blank: true },
          { text: "けど、今朝[けさ]は 日記[にっき]を" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: "昨夜, explicit 日記を in second clause, けど",
      },
      {
        segments: [
          { text: "私[わたし]は 昨夜[さくや]、日記[にっき]に" },
          { text: "書[か]いた", blank: true },
          { text: "が、今朝[けさ]は 日記[にっき]を" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: '昨夜, explicit 日記を, が for "but"',
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 夜[よる]、日記[にっき]を" },
          { text: "つけた", blank: true },
          { text: "けど、今朝[けさ]は" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes:
          "Using 日記をつける (to keep a diary) instead of 日記に書く, けど",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 夜[よる]、日記[にっき]を" },
          { text: "つけた", blank: true },
          { text: "が、今朝[けさ]は" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: '日記をつける with が for "but"',
      },
      {
        segments: [
          { text: "私[わたし]は 昨夜[さくや]、日記[にっき]を" },
          { text: "つけた", blank: true },
          { text: "けど、今朝[けさ]は" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: "昨夜 + 日記をつける + けど",
      },
      {
        segments: [
          { text: "私[わたし]は 昨夜[さくや]、日記[にっき]を" },
          { text: "つけた", blank: true },
          { text: "が、今朝[けさ]は" },
          { text: "読[よ]まなかった", blank: true },
        ],
        notes: "昨夜 + 日記をつける + が",
      },
    ],
  },
  {
    english: "I sang karaoke with friends last Saturday!",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 先週[せんしゅう]の 土曜日[どようび]、友[とも]だちと カラオケで 歌[うた]を",
          },
          { text: "歌[うた]った", blank: true },
        ],
        notes: "Standard: sang songs at karaoke with friends last Saturday",
      },
      {
        segments: [
          {
            text: "私[わたし]は 先週[せんしゅう]の 土曜日[どようび]、友[とも]だちと カラオケで",
          },
          { text: "歌[うた]った", blank: true },
        ],
        notes:
          'Without 歌を — just "sang at karaoke" (the activity is understood)',
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 土曜日[どようび]は 友[とも]だちと カラオケで 歌[うた]を",
          },
          { text: "歌[うた]った", blank: true },
        ],
        notes: "Time expression as topic with は; subject 私は dropped",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 土曜日[どようび]は 友[とも]だちと カラオケで",
          },
          { text: "歌[うた]った", blank: true },
        ],
        notes: "Time as topic with は, no 歌を, subject dropped",
      },
      {
        segments: [
          {
            text: "私[わたし]は 先週[せんしゅう]の 土曜日[どようび]、友[とも]だちと 一緒[いっしょ]に カラオケで 歌[うた]を",
          },
          { text: "歌[うた]った", blank: true },
        ],
        notes:
          "Using 友だちと一緒に (together with friends) for emphasis, with 歌を",
      },
      {
        segments: [
          {
            text: "私[わたし]は 先週[せんしゅう]の 土曜日[どようび]、友[とも]だちと 一緒[いっしょ]に カラオケで",
          },
          { text: "歌[うた]った", blank: true },
        ],
        notes: "一緒に without 歌を",
      },
      {
        segments: [
          {
            text: "私[わたし]は 先週[せんしゅう]の 土曜日[どようび]に 友[とも]だちと カラオケで 歌[うた]を",
          },
          { text: "歌[うた]った", blank: true },
        ],
        notes: "Using に instead of comma after 土曜日",
      },
      {
        segments: [
          {
            text: "私[わたし]は 先週[せんしゅう]の 土曜日[どようび]に 友[とも]だちと カラオケで",
          },
          { text: "歌[うた]った", blank: true },
        ],
        notes: "に after 土曜日, no 歌を",
      },
    ],
  },
  {
    english: "I bought some vegetables yesterday, but they weren't delicious.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]、野菜[やさい]を 買[か]ったけど、",
          },
          { text: "おいしくなかった", blank: true },
        ],
        notes: "Verb in non-blank, adjective negative-past as blank, with けど",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、野菜[やさい]を 買[か]ったが、" },
          { text: "おいしくなかった", blank: true },
        ],
        notes: 'Using が instead of けど for "but"',
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、野菜[やさい]を" },
          { text: "買[か]った", blank: true },
          { text: "けど、おいしくなかった" },
        ],
        notes: 'Verb 買った as blank, けど for "but"',
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、野菜[やさい]を" },
          { text: "買[か]った", blank: true },
          { text: "が、おいしくなかった" },
        ],
        notes: 'Verb 買った as blank, が for "but"',
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 野菜[やさい]を" },
          { text: "買[か]った", blank: true },
          { text: "けど、おいしくなかった" },
        ],
        notes: "昨日 fronted before 私は; verb as blank, けど",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、私[わたし]は 野菜[やさい]を 買[か]ったけど、",
          },
          { text: "おいしくなかった", blank: true },
        ],
        notes: "昨日 fronted; adjective negative-past as blank, けど",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 野菜[やさい]を" },
          { text: "買[か]った", blank: true },
          { text: "が、おいしくなかった" },
        ],
        notes: "昨日 fronted; verb as blank, が",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 野菜[やさい]を 買[か]ったが、" },
          { text: "おいしくなかった", blank: true },
        ],
        notes: "昨日 fronted; adjective negative-past as blank, が",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、野菜[やさい]を" },
          { text: "買[か]った", blank: true },
          { text: "。でも、おいしくなかった" },
        ],
        notes:
          "Using でも (but) as sentence connector instead of けど/が; verb as blank",
      },
      {
        segments: [
          {
            text: "私[わたし]は 昨日[きのう]、野菜[やさい]を 買[か]った。でも、",
          },
          { text: "おいしくなかった", blank: true },
        ],
        notes: "Using でも; adjective negative-past as blank",
      },
    ],
  },
  {
    english:
      "Last night's dinner was really good, but I didn't drink anything.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はすごく" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はすごく" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          { text: "昨日[きのう]の 晩[ばん]ご 飯[はん]はすごく" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "晩ご飯 instead of 夜のご飯",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕[ゆう]ご 飯[はん]はすごく" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "夕ご飯 instead of 夜のご飯",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はすごく" },
          {
            text: " よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "よかった instead of 美味しかった",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はとても" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "Kenji was a graduate student last year, but now he's a teacher.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "だった", blank: true },
          { text: "けど、今[いま]は 先[せん]生[せい]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "だった", blank: true },
          { text: "が、今[いま]は 先[せん]生[せい]" },
          { text: "です" },
        ],
        notes: "が gives the contrast a more formal sound than けど.",
      },
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "でした", blank: true },
          { text: "けど、今[いま]は 先[せん]生[せい]" },
          { text: "です" },
        ],
        register: "polite",
        notes: "でした makes the first clause polite.",
      },
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "でした", blank: true },
          { text: "が、今[いま]は 先[せん]生[せい]" },
          { text: "です" },
        ],
        register: "polite",
        notes: "でした with が keeps the sentence more formal.",
      },
    ],
  },
  {
    english: "I sang at karaoke last night, but I wasn't very good.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、カラオケで 歌[うた]を" },
          {
            text: " 歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、カラオケで" },
          {
            text: " 歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Without 歌を",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、カラオケで 歌[うた]を" },
          {
            text: " 歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          { text: "昨夜[さくや]、カラオケで 歌[うた]を" },
          {
            text: " 歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "昨夜 instead of 昨日の夜",
      },
    ],
  },
  {
    english:
      "I didn't sleep much last night, so I was really tired this morning.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、あまり" },
          {
            text: " 寝[ね]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]すごく 疲[つか]れて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、あまり" },
          {
            text: " 寝[ね]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]とても 疲[つか]れて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、よく" },
          {
            text: " 寝[ね]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]すごく 疲[つか]れて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "よく instead of あまり",
      },
      {
        segments: [
          { text: "昨夜[さくや]、あまり" },
          {
            text: " 寝[ね]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]すごく 疲[つか]れて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "昨夜 instead of 昨日の夜",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、あまり" },
          {
            text: " 寝[ね]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]すごく" },
          {
            text: " 疲[つか]れる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "疲れた (got tired) instead of 疲れていた (was tired)",
      },
    ],
  },
  {
    english: "Miho said she was writing a letter to her grandmother.",
    hint: "Miho = みほ",
    answers: [
      {
        segments: [
          { text: "みほさんは おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "みほさんは おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "って" },
          { text: " 言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "casual",
        notes: "って quotation particle",
      },
      {
        segments: [
          { text: "みほさんが おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "みほさんは 手紙[てがみ]を おばあさんに" },
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "手紙を before おばあさんに",
      },
      {
        segments: [
          { text: "みほさんは おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          {
            text: " 言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "言いました instead of 言っていました",
      },
    ],
  },
  {
    english: "I think Takeshi went to the library yesterday.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          {
            text: "たけしさんは 昨日[きのう]、図書館[としょかん]に 行[い]ったと",
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "たけしさんが 昨日[きのう]、図書館[としょかん]に 行[い]ったと",
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "昨日[きのう]、たけしさんは 図書館[としょかん]に 行[い]ったと",
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "昨日 fronted",
      },
      {
        segments: [
          {
            text: "私[わたし]は たけしさんが 昨日[きのう]、図書館[としょかん]に 行[い]ったと",
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は + たけしさんが",
      },
    ],
  },
]

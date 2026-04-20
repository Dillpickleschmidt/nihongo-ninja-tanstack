import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "On weekends, I do things like go to the park and take photos.",
    answers: [
      {
        segments: [
          {
            text: "週末[しゅうまつ]は 公園[こうえん]に 行[い]ったり、写真[しゃしん]を 撮[と]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
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
            text: "週末[しゅうまつ]に 公園[こうえん]に 行[い]ったり、写真[しゃしん]を 撮[と]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
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
            text: "週末[しゅうまつ]は 写真[しゃしん]を 撮[と]ったり、公園[こうえん]に 行[い]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "reversed order",
      },
    ],
  },
  {
    english: "On weeknights, I do things like take a bath and read a book.",
    answers: [
      {
        segments: [
          {
            text: "平日[へいじつ]は お 風呂[ふろ]に 入[はい]ったり、本[ほん]を 読[よ]んだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
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
            text: "平日[へいじつ]は 風呂[ふろ]に 入[はい]ったり、本[ほん]を 読[よ]んだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "No お prefix on 風呂",
      },
      {
        segments: [
          {
            text: "平日[へいじつ]は 本[ほん]を 読[よ]んだり、お 風呂[ふろ]に 入[はい]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed order: book first, then bath (with お)",
      },
      {
        segments: [
          {
            text: "平日[へいじつ]は 本[ほん]を 読[よ]んだり、風呂[ふろ]に 入[はい]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed order, no お",
      },
      {
        segments: [
          {
            text: "平日[へいじつ]の 夜[よる]は お 風呂[ふろ]に 入[はい]ったり、本[ほん]を 読[よ]んだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "平日の夜 (weeknights) instead of 平日",
      },
      {
        segments: [
          {
            text: "平日[へいじつ]の 夜[よる]は 風呂[ふろ]に 入[はい]ったり、本[ほん]を 読[よ]んだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "平日の夜 + no お",
      },
    ],
  },
  {
    english:
      "When I'm stressed, I do things like go for a drive and listen to music.",
    answers: [
      {
        segments: [
          {
            text: "ストレスが ある 時[とき]は、ドライブしたり、音楽[おんがく]を 聞[き]いたり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
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
            text: "ストレスの 時[とき]は、ドライブしたり、音楽[おんがく]を 聞[き]いたり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ストレスの時は variant",
      },
      {
        segments: [
          {
            text: "ストレスが ある 時[とき]は、音楽[おんがく]を 聞[き]いたり、ドライブしたり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          {
            text: "ストレスの 時[とき]は、音楽[おんがく]を 聞[き]いたり、ドライブしたり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ストレスの時は + reversed order",
      },
    ],
  },
  {
    english: "At the festival, I did things like eat sushi and drink beer.",
    answers: [
      {
        segments: [
          {
            text: "お 祭[まつ]りで すしを 食[た]べたり、ビールを 飲[の]んだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "祭[まつ]りで すしを 食[た]べたり、ビールを 飲[の]んだり" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "No お prefix on 祭り",
      },
      {
        segments: [
          {
            text: "お 祭[まつ]りで ビールを 飲[の]んだり、すしを 食[た]べたり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "祭[まつ]りで ビールを 飲[の]んだり、すしを 食[た]べたり" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order, no お",
      },
    ],
  },
  {
    english:
      "At the art museum, I did things like look at paintings and buy souvenirs.",
    answers: [
      {
        segments: [
          {
            text: "美術館[びじゅつかん]で 絵[え]を 見[み]たり、お 土産[みやげ]を 買[か]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "美術館[びじゅつかん]で 絵[え]を 見[み]たり、土産[みやげ]を 買[か]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "No お prefix on 土産",
      },
      {
        segments: [
          {
            text: "美術館[びじゅつかん]で お 土産[みやげ]を 買[か]ったり、絵[え]を 見[み]たり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          {
            text: "美術館[びじゅつかん]で 写真[しゃしん]を 撮[と]ったり、お 土産[みやげ]を 買[か]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "写真を撮る instead of 絵を見る",
      },
      {
        segments: [
          {
            text: "美術館[びじゅつかん]で お 土産[みやげ]を 買[か]ったり、写真[しゃしん]を 撮[と]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "写真 + reversed",
      },
    ],
  },
  {
    english: "On days off, Kenji does things like sing karaoke and dance.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          {
            text: "けんじさんは 休[やす]みの 日[ひ]に、カラオケを 歌[うた]ったり、踊[おど]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
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
            text: "けんじさんは 休[やす]みの 日[ひ]は、カラオケを 歌[うた]ったり、踊[おど]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "日は instead of 日に",
      },
      {
        segments: [
          {
            text: "けんじさんは 休[やす]みの 日[ひ]に、踊[おど]ったり、カラオケを 歌[うた]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          {
            text: "けんじさんは 休[やす]みの 日[ひ]は、踊[おど]ったり、カラオケを 歌[うた]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "日は + reversed",
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]に、けんじさんは カラオケを 歌[うた]ったり、踊[おど]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "休みの日に fronted",
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]は、けんじさんは カラオケを 歌[うた]ったり、踊[おど]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "休みの日は fronted",
      },
    ],
  },
  {
    english:
      "During summer vacation, I did things like swim in the sea and climb mountains.",
    answers: [
      {
        segments: [
          {
            text: "夏休[なつやす]みは 海[うみ]で 泳[およ]いだり、山[やま]に 登[のぼ]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "夏休[なつやす]みに 海[うみ]で 泳[およ]いだり、山[やま]に 登[のぼ]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "夏休みに instead of は",
      },
      {
        segments: [
          {
            text: "夏休[なつやす]みは 山[やま]に 登[のぼ]ったり、海[うみ]で 泳[およ]いだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          {
            text: "夏休[なつやす]みに 山[やま]に 登[のぼ]ったり、海[うみ]で 泳[およ]いだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "夏休みに + reversed",
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]は 海[うみ]で 泳[およ]いだり、山[やま]に 登[のぼ]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "休みの日は variant",
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]に 海[うみ]で 泳[およ]いだり、山[やま]に 登[のぼ]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "休みの日に variant",
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]は 山[やま]に 登[のぼ]ったり、海[うみ]で 泳[およ]いだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "休みの日は + reversed",
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]に 山[やま]に 登[のぼ]ったり、海[うみ]で 泳[およ]いだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "休みの日に + reversed",
      },
    ],
  },
  {
    english: "At the campsite, I did things like make food and play games.",
    answers: [
      {
        segments: [
          { text: "キャンプで 料理[りょうり]したり、ゲームをしたり" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "キャンプ場[じょう]で 料理[りょうり]したり、ゲームをしたり" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "キャンプ場で instead of キャンプで",
      },
      {
        segments: [
          { text: "キャンプで ゲームをしたり、料理[りょうり]したり" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "キャンプ場[じょう]で ゲームをしたり、料理[りょうり]したり" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "キャンプ場で + reversed",
      },
    ],
  },
  {
    english:
      "At the hot spring resort, I did things like take a bath and drink milk.",
    answers: [
      {
        segments: [
          {
            text: "温泉[おんせん]で お 風呂[ふろ]に 入[はい]ったり、牛乳[ぎゅうにゅう]を 飲[の]んだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "温泉[おんせん]で 風呂[ふろ]に 入[はい]ったり、牛乳[ぎゅうにゅう]を 飲[の]んだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "No お prefix on 風呂",
      },
      {
        segments: [
          {
            text: "温泉[おんせん]で 牛乳[ぎゅうにゅう]を 飲[の]んだり、お 風呂[ふろ]に 入[はい]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english: "At the party, I did things like sing songs and play the guitar.",
    answers: [
      {
        segments: [
          {
            text: "パーティーで 歌[うた]を 歌[うた]ったり、ギターを 弾[ひ]いたり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "パーティーで ギターを 弾[ひ]いたり、歌[うた]を 歌[うた]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "パーティーで 歌[うた]を 歌[うた]ったり" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Single たり (just singing)",
      },
      {
        segments: [
          { text: "パーティーで ギターを 弾[ひ]いたり" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Single たり (just guitar)",
      },
    ],
  },
  {
    english: "On my days off, I do things like exercise and take walks.",
    answers: [
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]は 運動[うんどう]したり、散歩[さんぽ]したり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
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
            text: "休[やす]みの 日[ひ]には 運動[うんどう]したり、散歩[さんぽ]したり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "日には variant",
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]は 散歩[さんぽ]したり、運動[うんどう]したり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]には 散歩[さんぽ]したり、運動[うんどう]したり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "日には + reversed",
      },
    ],
  },
  {
    english: "At the shrine, I did things like buy charms and take photos.",
    answers: [
      {
        segments: [
          {
            text: "神社[じんじゃ]で お 土産[みやげ]を 買[か]ったり、写真[しゃしん]を 撮[と]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "神社[じんじゃ]で 写真[しゃしん]を 撮[と]ったり、お 土産[みやげ]を 買[か]ったり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "At the cram school, I do things like memorize vocabulary and write essays.",
    answers: [
      {
        segments: [
          {
            text: "塾[じゅく]で 単語[たんご]を 覚[おぼ]えたり、作文[さくぶん]を 書[か]いたり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
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
            text: "塾[じゅく]で 作文[さくぶん]を 書[か]いたり、単語[たんご]を 覚[おぼ]えたり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english: "At the café, I did things like drink coffee and read magazines.",
    answers: [
      {
        segments: [
          {
            text: "カフェで コーヒーを 飲[の]んだり、雑誌[ざっし]を 読[よ]んだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "カフェで 雑誌[ざっし]を 読[よ]んだり、コーヒーを 飲[の]んだり",
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order",
      },
    ],
  },
]

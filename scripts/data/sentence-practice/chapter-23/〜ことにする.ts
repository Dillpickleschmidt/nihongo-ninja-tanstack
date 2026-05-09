import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Because the final exam is next week, I decided not to work part-time on Saturday.",
    answers: [
      {
        segments: [
          { text: "来週[らいしゅう]、期末試験[きまつしけん]があるので、土曜日[どようび]はアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation using ので and 土曜日は as the day topic",
      },
      {
        segments: [
          { text: "来週[らいしゅう]、期末試験[きまつしけん]があるから、土曜日[どようび]はアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から instead of ので for 'because'",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が来週[らいしゅう]あるので、土曜日[どようび]はアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Word order variation: 来週 placed before ある",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が来週[らいしゅう]あるから、土曜日[どようび]はアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Word order variation with から",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は来週[らいしゅう]なので、土曜日[どようび]はアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using noun predicate 'the final exam is next week' with なので",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は来週[らいしゅう]だから、土曜日[どようび]はアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using noun predicate with だから",
      },
      {
        segments: [
          { text: "来週[らいしゅう]、期末試験[きまつしけん]があるので、土曜日[どようび]にアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using に to mark Saturday as the time of working",
      },
      {
        segments: [
          { text: "来週[らいしゅう]、期末試験[きまつしけん]があるから、土曜日[どようび]にアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using に for Saturday and から for because",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が来週[らいしゅう]あるので、土曜日[どようび]にアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Word order variation with 土曜日に",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が来週[らいしゅう]あるから、土曜日[どようび]にアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Word order variation with 土曜日に and から",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は来週[らいしゅう]なので、土曜日[どようび]にアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Noun predicate reason with 土曜日に",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は来週[らいしゅう]だから、土曜日[どようび]にアルバイトをしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Noun predicate reason with だから and 土曜日に",
      },
      {
        segments: [
          { text: "来週[らいしゅう]、期末試験[きまつしけん]があるので、アルバイトは土曜日[どようび]にしない" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topicalizing アルバイト; natural contrast of not doing the part-time job on Saturday",
      },
      {
        segments: [
          { text: "来週[らいしゅう]、期末試験[きまつしけん]があるので、土曜日[どようび]のアルバイトを休[やす]む" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 休む: decided to take Saturday off from the part-time job",
      },
      {
        segments: [
          { text: "来週[らいしゅう]、期末試験[きまつしけん]があるから、土曜日[どようび]のアルバイトを休[やす]む" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 休む with から",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が来週[らいしゅう]あるので、土曜日[どようび]のアルバイトを休[やす]む" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 休む and placing 来週 before ある",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]が来週[らいしゅう]あるから、土曜日[どようび]のアルバイトを休[やす]む" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 休む with reordered reason clause and から",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は来週[らいしゅう]なので、土曜日[どようび]のアルバイトを休[やす]む" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Noun predicate reason with 休む",
      },
      {
        segments: [
          { text: "期末試験[きまつしけん]は来週[らいしゅう]だから、土曜日[どようび]のアルバイトを休[やす]む" },
          { text: "ことに", blank: true },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Noun predicate reason with 休む and だから",
      },
    ],
  },
  {
    english: "The refrigerator broke this morning, so I decided to buy a new refrigerator.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れたので、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using ので; blank is only ことにする",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れたから、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]が今朝[けさ]壊[こわ]れたので、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Placing 今朝 after the subject",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]が今朝[けさ]壊[こわ]れたから、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered first clause with から",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]は壊[こわ]れたので、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the refrigerator as topic",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]は壊[こわ]れたから、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は with から",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れたので、新[あたら]しいのを買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 新しいの to avoid repeating 冷蔵庫",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れたから、新[あたら]しいのを買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 新しいの with から",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れてしまったので、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using てしまった to emphasize the unfortunate breakage",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れてしまったから、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using てしまった with から",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れてしまったので、新[あたら]しいのを買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using both てしまった and 新しいの",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れてしまったから、新[あたら]しいのを買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using てしまった, 新しいの, and から",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]が今朝[けさ]壊[こわ]れてしまったので、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Word order variation with てしまった",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]が今朝[けさ]壊[こわ]れてしまったから、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Word order variation with てしまった and から",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]が今朝[けさ]壊[こわ]れてしまったので、新[あたら]しいのを買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Word order variation using 新しいの",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]が今朝[けさ]壊[こわ]れてしまったから、新[あたら]しいのを買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Word order variation using 新しいの and から",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れて、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using て to connect cause and result",
      },
      {
        segments: [
          { text: "今朝[けさ]、冷蔵庫[れいぞうこ]が壊[こわ]れて、新[あたら]しいのを買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "て connection with 新しいの",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]が今朝[けさ]壊[こわ]れて、新[あたら]しい 冷蔵庫[れいぞうこ]を買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "て connection with reordered first clause",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]が今朝[けさ]壊[こわ]れて、新[あたら]しいのを買[か]う" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "て connection with reordered first clause and 新しいの",
      },
    ],
  },
  {
    english: "My throat hurts, so I decided not to go to karaoke tonight.",
    hint: "karaoke = カラオケ",
    answers: [
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いので、今夜[こんや]は カラオケに " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Standard wording with ので and 今夜は as the topic",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いから、今夜[こんや]は カラオケに " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いので、今晩[こんばん]は カラオケに " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Using 今晩 instead of 今夜",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いから、今晩[こんばん]は カラオケに " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Using から and 今晩",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いので、カラオケには 今夜[こんや] " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Topicalizing カラオケには and moving 今夜 after it",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いから、カラオケには 今夜[こんや] " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Topicalizing カラオケには with から",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いので、今夜[こんや]、カラオケに " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Using 今夜 as a fronted time adverb without は",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いから、今夜[こんや]、カラオケに " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Using から and fronted 今夜 without は",
      },
      {
        segments: [
          { text: "今夜[こんや]は 喉[のど]が 痛[いた]いので、カラオケに " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Starting with 今夜は and giving the reason before the decision",
      },
      {
        segments: [
          { text: "今夜[こんや]は 喉[のど]が 痛[いた]いから、カラオケに " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Starting with 今夜は and using から",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いので、今夜[こんや]は カラオケを " },
          { text: "しないことにした", blank: true },
        ],
        notes: "Using カラオケをする instead of カラオケに行く",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いから、今夜[こんや]は カラオケを " },
          { text: "しないことにした", blank: true },
        ],
        notes: "Using カラオケをする with から",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いので、カラオケは 今夜[こんや] " },
          { text: "しないことにした", blank: true },
        ],
        notes: "Topicalizing カラオケ with は and using する",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]いから、カラオケは 今夜[こんや] " },
          { text: "しないことにした", blank: true },
        ],
        notes: "Topicalizing カラオケ with は and using から",
      },
      {
        segments: [
          { text: "今夜[こんや]は 喉[のど]が 痛[いた]いので、カラオケを " },
          { text: "しないことにした", blank: true },
        ],
        notes: "Starting with 今夜は and using カラオケをする",
      },
      {
        segments: [
          { text: "今夜[こんや]は 喉[のど]が 痛[いた]いから、カラオケを " },
          { text: "しないことにした", blank: true },
        ],
        notes: "Starting with 今夜は, using カラオケをする and から",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]くて、今夜[こんや]は カラオケに " },
          { text: "行[い]かないことにした", blank: true },
        ],
        notes: "Using adjective te-form 痛くて to express the reason",
      },
      {
        segments: [
          { text: "喉[のど]が 痛[いた]くて、今夜[こんや]は カラオケを " },
          { text: "しないことにした", blank: true },
        ],
        notes: "Using adjective te-form reason with カラオケをする",
      },
    ],
  },
  {
    english: "I decided to walk to school every morning from now on.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は これからは 毎朝[まいあさ]、学校[がっこう]まで 歩[ある]いて 行[い]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with これからは and 学校まで歩いて行く",
      },
      {
        segments: [
          { text: "私[わたし]は これから 毎朝[まいあさ]、学校[がっこう]まで 歩[ある]いて 行[い]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using これから without は",
      },
      {
        segments: [
          { text: "私[わたし]は これからは 毎朝[まいあさ]、歩[ある]いて 学校[がっこう]に 行[い]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 学校に行く with 歩いて instead of 学校まで",
      },
      {
        segments: [
          { text: "私[わたし]は これから 毎朝[まいあさ]、歩[ある]いて 学校[がっこう]に 行[い]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 学校に行く and これから without は",
      },
      {
        segments: [
          { text: "私[わたし]は これからは 毎朝[まいあさ]、歩[ある]いて 学校[がっこう]へ 行[い]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using destination particle へ",
      },
      {
        segments: [
          { text: "私[わたし]は これから 毎朝[まいあさ]、歩[ある]いて 学校[がっこう]へ 行[い]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ with これから without は",
      },
      {
        segments: [
          { text: "私[わたし]は これからは 毎朝[まいあさ]、学校[がっこう]へ 歩[ある]いて 行[い]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 学校へ before 歩いて行く",
      },
      {
        segments: [
          { text: "私[わたし]は これから 毎朝[まいあさ]、学校[がっこう]へ 歩[ある]いて 行[い]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 学校へ歩いて行く with これから",
      },
      {
        segments: [
          { text: "私[わたし]は これからは 毎朝[まいあさ]、学校[がっこう]まで 歩[ある]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歩く directly instead of 歩いて行く",
      },
      {
        segments: [
          { text: "私[わたし]は これから 毎朝[まいあさ]、学校[がっこう]まで 歩[ある]く" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 歩く directly with これから without は",
      },
      {
        segments: [
          { text: "私[わたし]は これからは 毎朝[まいあさ]、学校[がっこう]に 歩[ある]いて 通[かよ]う" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 通う to mean commute/go regularly to school",
      },
      {
        segments: [
          { text: "私[わたし]は これから 毎朝[まいあさ]、学校[がっこう]に 歩[ある]いて 通[かよ]う" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "通う variation with これから without は",
      },
      {
        segments: [
          { text: "私[わたし]は これからは 毎朝[まいあさ]、歩[ある]いて 学校[がっこう]に 通[かよ]う" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "通う with 歩いて placed before 学校に",
      },
      {
        segments: [
          { text: "私[わたし]は これから 毎朝[まいあさ]、歩[ある]いて 学校[がっこう]に 通[かよ]う" },
          { text: "ことに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "通う with これから and reordered phrase",
      },
    ],
  },
  {
    english: "I lost my wallet yesterday, so I decided not to carry much cash from now on.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは 現金[げんきん]を たくさん " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "Basic translation with ので and 現金",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは 現金[げんきん]を たくさん " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは あまり 現金[げんきん]を " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "More natural wording with あまり～ない for 'not much'",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは あまり 現金[げんきん]を " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "あまり～ない with から",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは 現金[げんきん]は あまり " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "Topicalizing 現金 with は",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは 現金[げんきん]は あまり " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "Topicalizing 現金 with は and using から",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは お金[かね]を たくさん " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "Using お金 instead of 現金",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは お金[かね]を たくさん " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "お金 with から",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは あまり お金[かね]を " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "お金 with あまり～ない",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは あまり お金[かね]を " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "お金 with あまり～ない and から",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは お金[かね]は あまり " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "Topicalizing お金 with は",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは お金[かね]は あまり " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "Topicalizing お金 with は and using から",
      },
      {
        segments: [
          { text: "昨日[きのう] 財布[さいふ]をなくしたので、これからは 現金[げんきん]を たくさん " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "No comma after 昨日",
      },
      {
        segments: [
          { text: "財布[さいふ]を 昨日[きのう]なくしたので、これからは 現金[げんきん]を たくさん " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "Time adverb placed after object",
      },
      {
        segments: [
          { text: "昨日[きのう] 財布[さいふ]をなくしたから、これからは あまり 現金[げんきん]を " },
          { text: "持[も]たないことにする", blank: true },
        ],
        notes: "No comma and using から with あまり",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは 現金[げんきん]を たくさん " },
          { text: "持[も]ち歩[ある]かないことにする", blank: true },
        ],
        notes: "Using 持ち歩く for 'carry around'",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは 現金[げんきん]を たくさん " },
          { text: "持[も]ち歩[ある]かないことにする", blank: true },
        ],
        notes: "持ち歩く with から",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは あまり 現金[げんきん]を " },
          { text: "持[も]ち歩[ある]かないことにする", blank: true },
        ],
        notes: "持ち歩く with あまり～ない",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは あまり 現金[げんきん]を " },
          { text: "持[も]ち歩[ある]かないことにする", blank: true },
        ],
        notes: "持ち歩く with あまり～ない and から",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、現金[げんきん]を たくさん 持[も]ち歩[ある]くのは、これから " },
          { text: "やめることにする", blank: true },
        ],
        notes: "Rephrased as 'decided to stop carrying much cash'",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは 現金[げんきん]を たくさん " },
          { text: "持[も]って 行[い]かないことにする", blank: true },
        ],
        notes: "Using 持って行く for 'take/carry with me'",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは 現金[げんきん]を たくさん " },
          { text: "持[も]って 行[い]かないことにする", blank: true },
        ],
        notes: "持って行く with から",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは あまり 現金[げんきん]を " },
          { text: "持[も]って 行[い]かないことにする", blank: true },
        ],
        notes: "持って行く with あまり～ない",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたから、これからは あまり 現金[げんきん]を " },
          { text: "持[も]って 行[い]かないことにする", blank: true },
        ],
        notes: "持って行く with あまり～ない and から",
      },
      {
        segments: [
          { text: "昨日[きのう]、財布[さいふ]をなくしたので、これからは 多[おお]くの 現金[げんきん]を " },
          { text: "持[も]ち歩[ある]かないことにする", blank: true },
        ],
        notes: "Using 多くの現金 as a more formal way to say 'much cash'",
      },
    ],
  },
  {
    english: "Because the wind is strong, I decided not to ride my bicycle to the station today.",
    answers: [
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いので、今日[きょう]は 駅[えき]まで 自転車[じてんしゃ]で " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Standard phrasing: go to the station by bicycle, with ので for because",
      },
      {
        segments: [
          { text: "今日[きょう]は 風[かぜ]が 強[つよ]いので、駅[えき]まで 自転車[じてんしゃ]で " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Moves 今日は to the beginning",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いから、今日[きょう]は 駅[えき]まで 自転車[じてんしゃ]で " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Uses から instead of ので",
      },
      {
        segments: [
          { text: "今日[きょう]は 風[かぜ]が 強[つよ]いから、駅[えき]まで 自転車[じてんしゃ]で " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "今日は first, with から",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いので、今日[きょう]は 駅[えき]へ 自転車[じてんしゃ]で " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Uses 駅へ instead of 駅まで",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いので、今日[きょう]は 自転車[じてんしゃ]で 駅[えき]まで " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Reorders 自転車で before 駅まで",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いので、今日[きょう]は 自転車[じてんしゃ]に 乗[の]って 駅[えき]まで " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Uses 自転車に乗って行く to express riding the bicycle",
      },
      {
        segments: [
          { text: "今日[きょう]は 風[かぜ]が 強[つよ]いので、自転車[じてんしゃ]に 乗[の]って 駅[えき]まで " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "自転車に乗って行く pattern with 今日は first",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いから、今日[きょう]は 自転車[じてんしゃ]に 乗[の]って 駅[えき]まで " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "自転車に乗って行く with から",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いので、今日[きょう]は 駅[えき]へ 自転車[じてんしゃ]に 乗[の]って " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Uses 駅へ with 自転車に乗って行く",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いので、今日[きょう]は 駅[えき]まで 自転車[じてんしゃ]に " },
          { text: "乗[の]らないことにする", blank: true },
        ],
        notes: "Decides not to ride the bicycle as far as the station",
      },
      {
        segments: [
          { text: "今日[きょう]は 風[かぜ]が 強[つよ]いので、駅[えき]まで 自転車[じてんしゃ]に " },
          { text: "乗[の]らないことにする", blank: true },
        ],
        notes: "Not ride the bicycle to the station, with 今日は first",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いから、今日[きょう]は 駅[えき]まで 自転車[じてんしゃ]に " },
          { text: "乗[の]らないことにする", blank: true },
        ],
        notes: "Not ride the bicycle to the station, with から",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いので、今日[きょう]は 駅[えき]へ 自転車[じてんしゃ]に " },
          { text: "乗[の]らないことにする", blank: true },
        ],
        notes: "Uses 駅へ with 乗らないことにする",
      },
      {
        segments: [
          { text: "今日[きょう]は 風[かぜ]が 強[つよ]いので、自転車[じてんしゃ]で 駅[えき]まで " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Places 自転車で before destination with 今日は first",
      },
      {
        segments: [
          { text: "今日[きょう]は 風[かぜ]が 強[つよ]いから、自転車[じてんしゃ]で 駅[えき]まで " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Reordered phrase with から",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]いから、今日[きょう]は 自転車[じてんしゃ]で 駅[えき]まで " },
          { text: "行[い]かないことにする", blank: true },
        ],
        notes: "Reordered phrase, reason with から",
      },
    ],
  },
  {
    english: "Since the rent is expensive, I decided to move to a cheap apartment next month.",
    answers: [
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]いので、来月[らいげつ]、安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using ので for 'since/because' and 来月 before the destination.",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]いので、来月[らいげつ]は 安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Marks next month as the topic with は.",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]いので、安[やす]い アパートに 来月[らいげつ] 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places 来月 immediately before the verb phrase.",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]いから、来月[らいげつ]、安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から instead of ので for the reason.",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]いから、来月[らいげつ]は 安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から and topicalizes 来月 with は.",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]いから、安[やす]い アパートに 来月[らいげつ] 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から with 来月 placed before the verb.",
      },
      {
        segments: [
          { text: "アパートの 家賃[やちん]が 高[たか]いので、来月[らいげつ]、安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies 'the apartment's rent' with アパートの家賃.",
      },
      {
        segments: [
          { text: "アパートの 家賃[やちん]が 高[たか]いので、来月[らいげつ]は 安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses アパートの家賃 and topicalizes 来月.",
      },
      {
        segments: [
          { text: "アパートの 家賃[やちん]が 高[たか]いから、来月[らいげつ]、安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses アパートの家賃 with から.",
      },
      {
        segments: [
          { text: "今[いま]の アパートの 家賃[やちん]が 高[たか]いので、来月[らいげつ]、安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Clarifies that the current apartment's rent is expensive.",
      },
      {
        segments: [
          { text: "今[いま]の アパートの 家賃[やちん]が 高[たか]いから、来月[らいげつ]、安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Clarifies current apartment and uses から.",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]いので、来月[らいげつ]、もっと 安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses もっと安い to mean a cheaper apartment.",
      },
      {
        segments: [
          { text: "家賃[やちん]が 高[たか]いから、来月[らいげつ]、もっと 安[やす]い アパートに 引[ひ]っ越[こ]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses もっと安い with から.",
      },
    ],
  },
  {
    english: "I decided to ask the professor about the recommendation letter after class today.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]で、先生[せんせい]に 推薦状[すいせんじょう]について " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "Basic version using 先生に and 推薦状について聞く",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]で、先生[せんせい]に 推薦状[すいせんじょう]の ことを " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "Uses 推薦状のことを聞く instead of について聞く",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]で、推薦状[すいせんじょう]について 先生[せんせい]に " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "Reordered: topic before the person being asked",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]で、推薦状[すいせんじょう]の ことを 先生[せんせい]に " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "Reordered with 推薦状のことを before 先生に",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]、先生[せんせい]に 推薦状[すいせんじょう]について " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "Uses 授業の後 without で",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]、先生[せんせい]に 推薦状[すいせんじょう]の ことを " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "授業の後 without で, and 推薦状のことを聞く",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]の 授業[じゅぎょう]の 後[あと]で、先生[せんせい]に 推薦状[すいせんじょう]について " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "Uses 今日の授業の後で to specify today's class",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]の 授業[じゅぎょう]の 後[あと]で、先生[せんせい]に 推薦状[すいせんじょう]の ことを " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "今日の授業の後で plus 推薦状のことを聞く",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]の 授業[じゅぎょう]の 後[あと]、先生[せんせい]に 推薦状[すいせんじょう]について " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "今日の授業の後 without で",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]の 授業[じゅぎょう]の 後[あと]、先生[せんせい]に 推薦状[すいせんじょう]の ことを " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "今日の授業の後 without で, and 推薦状のことを聞く",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]で、先生[せんせい]に 推薦状[すいせんじょう]を " },
          { text: "お願[ねが]いすることにする", blank: true },
        ],
        notes: "Interprets ask as requesting a recommendation letter, using お願いする",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]、先生[せんせい]に 推薦状[すいせんじょう]を " },
          { text: "お願[ねが]いすることにする", blank: true },
        ],
        notes: "Requesting the letter, with 授業の後 without で",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]の 授業[じゅぎょう]の 後[あと]で、先生[せんせい]に 推薦状[すいせんじょう]を " },
          { text: "お願[ねが]いすることにする", blank: true },
        ],
        notes: "今日の授業の後で plus お願いする",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]で、推薦状[すいせんじょう]を 先生[せんせい]に " },
          { text: "お願[ねが]いすることにする", blank: true },
        ],
        notes: "Reordered: 推薦状を before 先生に with お願いする",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]で、先生[せんせい]に 推薦状[すいせんじょう]について " },
          { text: "質問[しつもん]することにする", blank: true },
        ],
        notes: "Uses 質問する for 'ask a question about'",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]、先生[せんせい]に 推薦状[すいせんじょう]について " },
          { text: "質問[しつもん]することにする", blank: true },
        ],
        notes: "Uses 質問する and 授業の後 without で",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]の 授業[じゅぎょう]の 後[あと]で、先生[せんせい]に 推薦状[すいせんじょう]について " },
          { text: "質問[しつもん]することにする", blank: true },
        ],
        notes: "今日の授業の後で plus 質問する",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]の 後[あと]で、推薦状[すいせんじょう]について 先生[せんせい]に " },
          { text: "質問[しつもん]することにする", blank: true },
        ],
        notes: "Reordered with 質問する",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]が 終[お]わってから、先生[せんせい]に 推薦状[すいせんじょう]について " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "Uses 授業が終わってから for 'after class'",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]が 終[お]わってから、先生[せんせい]に 推薦状[すいせんじょう]の ことを " },
          { text: "聞[き]くことにする", blank: true },
        ],
        notes: "授業が終わってから plus 推薦状のことを聞く",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]が 終[お]わってから、先生[せんせい]に 推薦状[すいせんじょう]を " },
          { text: "お願[ねが]いすることにする", blank: true },
        ],
        notes: "Requesting the recommendation letter after class ends",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、授業[じゅぎょう]が 終[お]わってから、先生[せんせい]に 推薦状[すいせんじょう]を " },
          { text: "頼[たの]むことにする", blank: true },
        ],
        notes: "Uses 頼む for asking/requesting the professor to do the letter",
      },
    ],
  },
  {
    english: "Because I want to enjoy the hot spring, I decided to stay at a Japanese inn tonight.",
    answers: [
      {
        segments: [
          { text: "温泉[おんせん]を 楽[たの]しみたいので、今夜[こんや]は 旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Standard translation using ので and topic marker は for tonight",
      },
      {
        segments: [
          { text: "温泉[おんせん]を 楽[たの]しみたいから、今夜[こんや]は 旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "温泉[おんせん]を 楽[たの]しみたいので、今晩[こんばん]は 旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Using 今晩 instead of 今夜",
      },
      {
        segments: [
          { text: "温泉[おんせん]を 楽[たの]しみたいから、今晩[こんばん]は 旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Using both から and 今晩",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 入[はい]りたいので、今夜[こんや]は 旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Using 温泉に入る as a natural way to express enjoying the hot spring",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 入[はい]りたいから、今夜[こんや]は 旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Using 温泉に入る and から",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 入[はい]りたいので、今晩[こんばん]は 旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Using 温泉に入る and 今晩",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 入[はい]りたいから、今晩[こんばん]は 旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Using 温泉に入る, から, and 今晩",
      },
      {
        segments: [
          { text: "今夜[こんや]は、温泉[おんせん]を 楽[たの]しみたいので、旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Moving 今夜 to the beginning",
      },
      {
        segments: [
          { text: "今夜[こんや]は、温泉[おんせん]を 楽[たの]しみたいから、旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Moving 今夜 to the beginning and using から",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、温泉[おんせん]を 楽[たの]しみたいので、旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Moving 今晩 to the beginning",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、温泉[おんせん]を 楽[たの]しみたいから、旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Moving 今晩 to the beginning and using から",
      },
      {
        segments: [
          { text: "今夜[こんや]は、温泉[おんせん]に 入[はい]りたいので、旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Moving 今夜 to the beginning with 温泉に入る",
      },
      {
        segments: [
          { text: "今夜[こんや]は、温泉[おんせん]に 入[はい]りたいから、旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Moving 今夜 to the beginning with 温泉に入る and から",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、温泉[おんせん]に 入[はい]りたいので、旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Moving 今晩 to the beginning with 温泉に入る",
      },
      {
        segments: [
          { text: "今晩[こんばん]は、温泉[おんせん]に 入[はい]りたいから、旅館[りょかん]に " },
          { text: "泊[と]まることにした", blank: true },
        ],
        notes: "Moving 今晩 to the beginning with 温泉に入る and から",
      },
    ],
  },
  {
    english: "The company party is noisy, so I decided to go home early.",
    answers: [
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいので、早[はや]く " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with が and ので",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいから、早[はや]く " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいので、早[はや]く " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the company party as the topic",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいから、早[はや]く " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は with から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいので、早[はや]く 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says to go home",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいから、早[はや]く 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit home destination with から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいので、早[はや]く 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は plus explicit 家に",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいから、早[はや]く 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は, から, and explicit 家に",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいので、早[はや]く うちに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using うちに帰る for going home",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいから、早[はや]く うちに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using うちに帰る with から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいので、早[はや]く うちに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は with うちに帰る",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいから、早[はや]く うちに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は with うちに帰る and から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいので、早[はや]めに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 早めに, a more idiomatic way to say early",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいから、早[はや]めに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに with から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいので、早[はや]めに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに with topic は",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいから、早[はや]めに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに with は and から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいので、早[はや]めに 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに plus explicit 家に",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいから、早[はや]めに 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに 家に帰る with から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいので、早[はや]めに 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに 家に帰る with topic は",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいから、早[はや]めに 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに 家に帰る with は and から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいので、早[はや]めに うちに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに うちに帰る",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが うるさいから、早[はや]めに うちに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに うちに帰る with から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいので、早[はや]めに うちに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに うちに帰る with topic は",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは うるさいから、早[はや]めに うちに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "早めに うちに帰る with は and から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが にぎやかすぎるので、早[はや]く " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using にぎやかすぎる to express too lively/noisy",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが にぎやかすぎるから、早[はや]く " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる with から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは にぎやかすぎるので、早[はや]く " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる with topic は",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは にぎやかすぎるから、早[はや]く " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる with は and から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが にぎやかすぎるので、早[はや]めに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる with 早めに",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが にぎやかすぎるから、早[はや]めに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる, から, and 早めに",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは にぎやかすぎるので、早[はや]めに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる and 早めに with topic は",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーは にぎやかすぎるから、早[はや]めに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる, は, から, and 早めに",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが にぎやかすぎるので、早[はや]く 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる plus explicit 家に",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが にぎやかすぎるから、早[はや]く 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる with explicit 家に and から",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが にぎやかすぎるので、早[はや]めに 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる, 早めに, explicit 家に",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーが にぎやかすぎるから、早[はや]めに 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "にぎやかすぎる, 早めに, explicit 家に with から",
      },
    ],
  },
  {
    english: "I spend too much money at the convenience store, so I decided not to buy snacks there on weekdays.",
    answers: [
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるので、平日[へいじつ]は そこで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Basic translation using ので and 平日は for contrast/topic",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるから、平日[へいじつ]は そこで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるので、平日[へいじつ]は コンビニで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Repeating コンビニで instead of using そこで",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるから、平日[へいじつ]は コンビニで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Using から and repeating コンビニで",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるので、平日[へいじつ]に そこで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Using 平日に as time marker instead of topic 平日は",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるから、平日[へいじつ]に そこで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Using から and 平日に",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるので、平日[へいじつ]に コンビニで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Using 平日に and repeating コンビニで",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるから、平日[へいじつ]に コンビニで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Using から, 平日に, and repeated コンビニで",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるので、平日[へいじつ]は お菓子[かし]を そこで " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Moving そこで after the object",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるから、平日[へいじつ]は お菓子[かし]を そこで " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Moving そこで after the object with から",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるので、平日[へいじつ]は お菓子[かし]を コンビニで " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Object before location, repeating コンビニで",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎるから、平日[へいじつ]は お菓子[かし]を コンビニで " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Object before location, repeating コンビニで with から",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎているので、平日[へいじつ]は そこで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Using 使いすぎている to describe an ongoing habit",
      },
      {
        segments: [
          { text: "コンビニで お金[かね]を 使[つか]いすぎているから、平日[へいじつ]は そこで お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Ongoing habit with から",
      },
      {
        segments: [
          { text: "コンビニでは お金[かね]を 使[つか]いすぎるので、平日[へいじつ]は お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Using コンビニでは to mark the convenience store as the context",
      },
      {
        segments: [
          { text: "コンビニでは お金[かね]を 使[つか]いすぎるから、平日[へいじつ]は お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "Using コンビニでは with から",
      },
      {
        segments: [
          { text: "コンビニでは お金[かね]を 使[つか]いすぎているので、平日[へいじつ]は お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "コンビニでは plus ongoing-habit wording",
      },
      {
        segments: [
          { text: "コンビニでは お金[かね]を 使[つか]いすぎているから、平日[へいじつ]は お菓子[かし]を " },
          { text: "買[か]わないことにする", blank: true },
        ],
        notes: "コンビニでは plus ongoing-habit wording with から",
      },
    ],
  },
  {
    english: "Because my room gets dirty right away, I decided to tidy it up every night before going to bed.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が すぐ 汚[よご]れるので、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Basic translation with が marking the room as subject",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は すぐ 汚[よご]れるので、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Using は to mark my room as the topic",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が すぐに 汚[よご]れるので、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Using すぐに instead of すぐ",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は すぐに 汚[よご]れるので、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Using は and すぐに",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が すぐ 汚[よご]れるので、寝[ね]る 前[まえ]に 毎晩[まいばん] " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Reordered time phrases: before bed, every night",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は すぐ 汚[よご]れるので、寝[ね]る 前[まえ]に 毎晩[まいばん] " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Reordered time phrases with は topic",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が すぐ 汚[よご]れるので、毎晩[まいばん] " },
          { text: "片付[かたづ]けてから " },
          { text: "寝[ね]ることにする", blank: true },
        ],
        notes: "Expresses before bed as tidying first and then sleeping",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は すぐ 汚[よご]れるので、毎晩[まいばん] " },
          { text: "片付[かたづ]けてから " },
          { text: "寝[ね]ることにする", blank: true },
        ],
        notes: "Tidying first and then sleeping, with は topic",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が すぐ 汚[きたな]くなるので、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Using 汚くなる for 'gets dirty'",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は すぐ 汚[きたな]くなるので、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Using 汚くなる with は topic",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が すぐ 汚[よご]れるから、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は すぐ 汚[よご]れるから、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Using から with は topic",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が すぐ 汚[よご]れるので、毎晩[まいばん] 寝[ね]る 前[まえ]に 部屋[へや]を " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Explicitly includes 部屋を as the object of 片付ける",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は すぐ 汚[よご]れるので、毎晩[まいばん] 寝[ね]る 前[まえ]に 部屋[へや]を " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Explicit object with は topic",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が すぐに 汚[よご]れてしまうので、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "Using 汚れてしまう to mean it ends up getting dirty quickly",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は すぐに 汚[よご]れてしまうので、毎晩[まいばん] 寝[ね]る 前[まえ]に " },
          { text: "片付[かたづ]けることにする", blank: true },
        ],
        notes: "汚れてしまう with は topic",
      },
    ],
  },
  {
    english: "Because the roads are dangerous at night, I decided to take a taxi home tonight.",
    answers: [
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using タクシーで帰る and 夜は道が危ないので",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーで うちに " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says 'home' with うちに",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーで 家[いえ]に " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says 'home' with 家に",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーに 乗[の]って " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses タクシーに乗って帰る instead of タクシーで帰る",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないから、今夜[こんや]は タクシーで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から instead of ので",
      },
      {
        segments: [
          { text: "夜[よる]の 道[みち]は 危[あぶ]ないので、今夜[こんや]は タクシーで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 夜の道 as the topic",
      },
      {
        segments: [
          { text: "夜[よる]の 道[みち]は 危[あぶ]ないから、今夜[こんや]は タクシーで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 夜の道 with から",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今晩[こんばん]は タクシーで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今晩 instead of 今夜",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーで 家[いえ]へ " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ for direction with うち",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーで 家[いえ]へ " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ for direction with 家",
      },
      {
        segments: [
          { text: "夜[よる]の 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 夜の道が as the subject",
      },
      {
        segments: [
          { text: "夜[よる]の 道[みち]が 危[あぶ]ないから、今夜[こんや]は タクシーで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 夜の道が with から",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は 家[いえ]まで タクシーで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 家まで and places destination before means",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーで 家[いえ]まで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 家[いえ]まで to emphasize going all the way home",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーで 家[いえ]まで " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 家まで after タクシーで",
      },
      {
        segments: [
          { text: "夜[よる]は 道[みち]が 危[あぶ]ないので、今夜[こんや]は タクシーを 使[つか]って " },
          { text: "帰[かえ]ることにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses タクシーを使って帰る",
      },
    ],
  },
  {
    english: "At tomorrow's meeting, I decided not to say anything.",
    answers: [
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]で、" },
          { text: "何[なに]も 言[い]わないことにする", blank: true },
        ],
        notes: "Basic translation using で for the setting of the meeting",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]では、" },
          { text: "何[なに]も 言[い]わないことにする", blank: true },
        ],
        notes: "Using では to mark the meeting as the contrastive/topic setting",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 会議[かいぎ]で、" },
          { text: "何[なに]も 言[い]わないことにする", blank: true },
        ],
        notes: "Including 私は explicitly as the subject",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]で、" },
          { text: "何[なに]も 言[い]わないことにした", blank: true },
        ],
        notes: "Past tense ことにした to match 'decided' more directly",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]では、" },
          { text: "何[なに]も 言[い]わないことにした", blank: true },
        ],
        notes: "Past tense with contrastive/topic では",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 会議[かいぎ]で、" },
          { text: "何[なに]も 言[い]わないことにした", blank: true },
        ],
        notes: "Explicit subject with past tense ことにした",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]で、" },
          { text: "何[なに]も 話[はな]さないことにする", blank: true },
        ],
        notes: "Using 話さない instead of 言わない, meaning not to speak at the meeting",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]では、" },
          { text: "何[なに]も 話[はな]さないことにする", blank: true },
        ],
        notes: "話さない with では for the meeting setting",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]で、" },
          { text: "何[なに]も 話[はな]さないことにした", blank: true },
        ],
        notes: "Past tense with 話さない",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]では、" },
          { text: "何[なに]も 話[はな]さないことにした", blank: true },
        ],
        notes: "Past tense with 話さない and では",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]で、" },
          { text: "一言[ひとこと]も 言[い]わないことにした", blank: true },
        ],
        notes: "Using 一言も言わない, 'not say a single word'",
      },
      {
        segments: [
          { text: "明日[あした]の 会議[かいぎ]では、" },
          { text: "一言[ひとこと]も 言[い]わないことにした", blank: true },
        ],
        notes: "一言も言わない with では",
      },
    ],
  },
  {
    english: "Because my smartphone battery dies quickly, I decided to turn off my smartphone during class.",
    answers: [
      {
        segments: [
          { text: "スマホの 電池[でんち]が すぐ なくなるので、授業[じゅぎょう]中[ちゅう]は スマホの 電源[でんげん]を 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Most natural wording using 電源を切る for turning off the smartphone.",
      },
      {
        segments: [
          { text: "スマホの バッテリーが すぐ なくなるので、授業[じゅぎょう]中[ちゅう]は スマホの 電源[でんげん]を 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using バッテリー instead of 電池.",
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が すぐ 切[き]れるので、授業[じゅぎょう]中[ちゅう]は スマホの 電源[でんげん]を 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 電池が切れる for the battery dying.",
      },
      {
        segments: [
          { text: "スマホの バッテリーが すぐ 切[き]れるので、授業[じゅぎょう]中[ちゅう]は スマホの 電源[でんげん]を 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using バッテリーが切れる for the battery dying.",
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が すぐ なくなるので、授業[じゅぎょう]の 間[あいだ]は スマホの 電源[でんげん]を 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 授業の間は instead of 授業中は.",
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が すぐ 切[き]れるので、授業[じゅぎょう]の 間[あいだ]は スマホの 電源[でんげん]を 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 授業の間は with 電池が切れる.",
      },
      {
        segments: [
          { text: "スマホの バッテリーが すぐ 切[き]れるので、授業[じゅぎょう]の 間[あいだ]は スマホの 電源[でんげん]を 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using バッテリー and 授業の間は.",
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が すぐ なくなるので、スマホの 電源[でんげん]を 授業[じゅぎょう]中[ちゅう]は 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered object before the time phrase.",
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が すぐ 切[き]れるので、スマホの 電源[でんげん]を 授業[じゅぎょう]中[ちゅう]は 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered object before the time phrase with 電池が切れる.",
      },
      {
        segments: [
          { text: "スマホの バッテリーが すぐ 切[き]れるので、スマホの 電源[でんげん]を 授業[じゅぎょう]中[ちゅう]は 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered word order using バッテリー.",
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が すぐ なくなるので、授業[じゅぎょう]中[ちゅう]は スマホを 消[け]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "More colloquial wording using スマホを消す.",
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が すぐ なくなってしまうので、授業[じゅぎょう]中[ちゅう]は スマホの 電源[でんげん]を 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using てしまう to emphasize the battery ends up dying quickly.",
      },
      {
        segments: [
          { text: "スマホの バッテリーが すぐ 切[き]れてしまうので、授業[じゅぎょう]中[ちゅう]は スマホの 電源[でんげん]を 切[き]る" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using バッテリーが切れてしまう.",
      },
      {
        segments: [
          { text: "スマホの 電池[でんち]が すぐ なくなってしまうので、授業[じゅぎょう]中[ちゅう]は スマホを 消[け]す" },
          { text: "ことにする", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using known vocabulary スマホを消す with てしまう.",
      },
    ],
  },
  {
    english: "I overslept this morning, so I decided to put my clock on the desk every night.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、朝寝坊[あさねぼう]したので、毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Basic translation using ので and 机の上に",
      },
      {
        segments: [
          { text: "今朝[けさ]、寝坊[ねぼう]したので、毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Using 寝坊する instead of 朝寝坊する",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝寝坊[あさねぼう]したから、毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Using から for the reason",
      },
      {
        segments: [
          { text: "今朝[けさ]、寝坊[ねぼう]したから、毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Using 寝坊する and から",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝寝坊[あさねぼう]したので、時計[とけい]を 毎晩[まいばん] 机[つくえ]の 上[うえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Moved 毎晩 after the object",
      },
      {
        segments: [
          { text: "今朝[けさ]、寝坊[ねぼう]したので、時計[とけい]を 毎晩[まいばん] 机[つくえ]の 上[うえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Word order variation with 寝坊する",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝寝坊[あさねぼう]したので、毎晩[まいばん] 机[つくえ]の 上[うえ]に 時計[とけい]を " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Location phrase before object",
      },
      {
        segments: [
          { text: "今朝[けさ]、寝坊[ねぼう]したので、毎晩[まいばん] 机[つくえ]の 上[うえ]に 時計[とけい]を " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Location phrase before object with 寝坊する",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝寝坊[あさねぼう]したので、毎晩[まいばん] 時計[とけい]を 机[つくえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Using 机に instead of 机の上に",
      },
      {
        segments: [
          { text: "今朝[けさ]、寝坊[ねぼう]したので、毎晩[まいばん] 時計[とけい]を 机[つくえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Using 机に and 寝坊する",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝寝坊[あさねぼう]したので、これから 毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Adding これから to emphasize from now on",
      },
      {
        segments: [
          { text: "今朝[けさ]、寝坊[ねぼう]したので、これから 毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Adding これから with 寝坊する",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝寝坊[あさねぼう]したので、これからは 毎晩[まいばん] 時計[とけい]を 机[つくえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Using これからは and 机に",
      },
      {
        segments: [
          { text: "今朝[けさ]、寝坊[ねぼう]したので、これからは 毎晩[まいばん] 時計[とけい]を 机[つくえ]に " },
          { text: "置[お]くことにする", blank: true },
        ],
        notes: "Using これからは, 机に, and 寝坊する",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝寝坊[あさねぼう]したので、毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いておくことにする", blank: true },
        ],
        notes: "Using 置いておく to mean put and leave there",
      },
      {
        segments: [
          { text: "今朝[けさ]、寝坊[ねぼう]したので、毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いておくことにする", blank: true },
        ],
        notes: "Using 置いておく with 寝坊する",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝寝坊[あさねぼう]したので、これからは 毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いておくことにする", blank: true },
        ],
        notes: "Adding これからは with 置いておく",
      },
      {
        segments: [
          { text: "今朝[けさ]、寝坊[ねぼう]したので、これからは 毎晩[まいばん] 時計[とけい]を 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いておくことにする", blank: true },
        ],
        notes: "Adding これからは with 置いておく and 寝坊する",
      },
    ],
  },
  {
    english: "Because the library is quiet, I decided to study there after lunch today.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、今日[きょう]、昼[ひる]ご飯[はん]の 後[あと]で そこで 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Basic translation using なので and そこで",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、今日[きょう]、昼[ひる]ご飯[はん]の 後[あと]で そこで 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Using が for the library in the reason clause",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、今日[きょう]、昼[ひる]ご飯[はん]の 後[あと]で 図書館[としょかん]で 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Repeating 図書館で instead of そこで",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、今日[きょう]、昼[ひる]ご飯[はん]の 後[あと]で 図書館[としょかん]で 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Using が and repeating 図書館で",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かだから、今日[きょう]、昼[ひる]ご飯[はん]の 後[あと]で そこで 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Using だから instead of なので",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かだから、今日[きょう]、昼[ひる]ご飯[はん]の 後[あと]で そこで 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Using だから with が",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、今日[きょう]は 昼[ひる]ご飯[はん]の 後[あと]で そこで 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Using 今日は to mark today as the topic",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、今日[きょう]は 昼[ひる]ご飯[はん]の 後[あと]で 図書館[としょかん]で 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Using 今日は and repeating 図書館で",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、昼[ひる]ご飯[はん]を 食[た]べてから、今日[きょう] そこで 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Using 食べてから for “after lunch”",
      },
      {
        segments: [
          { text: "図書館[としょかん]が 静[しず]かなので、昼[ひる]ご飯[はん]を 食[た]べてから、今日[きょう] そこで 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Using 食べてから with が in the reason clause",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、今日[きょう]、昼[ひる]ご飯[はん]を 食[た]べてから そこで 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Natural order with 今日 before 食べてから",
      },
      {
        segments: [
          { text: "図書館[としょかん]は 静[しず]かなので、今日[きょう]、昼[ひる]ご飯[はん]を 食[た]べてから 図書館[としょかん]で 勉強[べんきょう]する" },
          { text: "ことにする", blank: true },
        ],
        notes: "Using 食べてから and repeating 図書館で",
      },
    ],
  },
  {
    english: "Starting today, I’ve decided not to complain at work anymore.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]から、仕事[しごと]で もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "Basic translation with 今日から and 仕事で",
      },
      {
        segments: [
          { text: "今日[きょう]からは、仕事[しごと]で もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "Using 今日からは to emphasize starting today onward",
      },
      {
        segments: [
          { text: "今日[きょう]から、もう 仕事[しごと]で " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "Different placement of もう",
      },
      {
        segments: [
          { text: "今日[きょう]からは、もう 仕事[しごと]で " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "Combines 今日からは with もう before 仕事で",
      },
      {
        segments: [
          { text: "今日[きょう]から、会社[かいしゃ]で もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "Using 会社で for 'at work'",
      },
      {
        segments: [
          { text: "今日[きょう]からは、会社[かいしゃ]で もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "会社で with emphasized 今日からは",
      },
      {
        segments: [
          { text: "今日[きょう]から、もう 会社[かいしゃ]で " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "会社で with もう placed before the location phrase",
      },
      {
        segments: [
          { text: "今日[きょう]からは、仕事中[しごとちゅう]に もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "Using 仕事中に for 'while at work'",
      },
      {
        segments: [
          { text: "今日[きょう]から、もう 仕事中[しごとちゅう]に " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "仕事中に with もう placed earlier",
      },
      {
        segments: [
          { text: "今日[きょう]から、職場[しょくば]で もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "Using 職場で, a natural word for 'at work'",
      },
      {
        segments: [
          { text: "今日[きょう]からは、職場[しょくば]で もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "職場で with 今日からは emphasis",
      },
      {
        segments: [
          { text: "今日[きょう]から、仕事[しごと]で もう " },
          { text: "文句[もんく]は 言[い]わないことにする", blank: true },
        ],
        notes: "Using は instead of を for contrast/emphasis under negation",
      },
      {
        segments: [
          { text: "今日[きょう]からは、仕事[しごと]で もう " },
          { text: "文句[もんく]は 言[い]わないことにする", blank: true },
        ],
        notes: "は-marked 文句 with 今日からは emphasis",
      },
      {
        segments: [
          { text: "今日[きょう]から、会社[かいしゃ]で もう " },
          { text: "文句[もんく]は 言[い]わないことにする", blank: true },
        ],
        notes: "会社で plus は-marked 文句",
      },
      {
        segments: [
          { text: "今日[きょう]から、職場[しょくば]で もう " },
          { text: "文句[もんく]は 言[い]わないことにする", blank: true },
        ],
        notes: "職場で plus は-marked 文句",
      },
      {
        segments: [
          { text: "今日[きょう]から、仕事中[しごとちゅう]に もう " },
          { text: "文句[もんく]は 言[い]わないことにする", blank: true },
        ],
        notes: "仕事中に with は marking the object under negation",
      },
      {
        segments: [
          { text: "今日[きょう]から、仕事[しごと]では もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "Using 仕事では to mark the work context contrastively",
      },
      {
        segments: [
          { text: "今日[きょう]から、仕事[しごと]では もう " },
          { text: "文句[もんく]は 言[い]わないことにする", blank: true },
        ],
        notes: "仕事では plus は-marked 文句 for stronger negative emphasis",
      },
      {
        segments: [
          { text: "今日[きょう]から、会社[かいしゃ]では もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "会社では as the work context",
      },
      {
        segments: [
          { text: "今日[きょう]から、職場[しょくば]では もう " },
          { text: "文句[もんく]を 言[い]わないことにする", blank: true },
        ],
        notes: "職場では as a natural equivalent of 'at work'",
      },
    ],
  },
  {
    english: "I lost my key this morning, so I decided to put my key in my bag before going out from now on.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 出[で]かける 前[まえ]に 鍵[かぎ]を かばんに " },
          { text: "入[い]れることにする", blank: true },
        ],
        notes: "Basic translation with ので and かばん",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたから、これからは 出[で]かける 前[まえ]に 鍵[かぎ]を かばんに " },
          { text: "入[い]れることにする", blank: true },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 出[で]かける 前[まえ]に 鍵[かぎ]を かばんの 中[なか]に " },
          { text: "入[い]れることにする", blank: true },
        ],
        notes: "Specifies inside the bag with かばんの中に",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 鍵[かぎ]を かばんに 入[い]れてから " },
          { text: "出[で]かけることにする", blank: true },
        ],
        notes: "Expresses it as deciding to go out after putting the key in the bag",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 出[で]かける 前[まえ]に 鍵[かぎ]を かばんに " },
          { text: "入[い]れておくことにする", blank: true },
        ],
        notes: "Uses 入れておく for putting it in beforehand",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたから、これからは 出[で]かける 前[まえ]に 鍵[かぎ]を かばんの 中[なか]に " },
          { text: "入[い]れておくことにする", blank: true },
        ],
        notes: "Combines から, かばんの中に, and 入れておく",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 鍵[かぎ]を かばんの 中[なか]に 入[い]れてから " },
          { text: "出[で]かけることにする", blank: true },
        ],
        notes: "Uses 入れてから with かばんの中に",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしてしまったので、これからは 出[で]かける 前[まえ]に 鍵[かぎ]を かばんに " },
          { text: "入[い]れることにする", blank: true },
        ],
        notes: "Uses なくしてしまった to emphasize accidentally losing the key",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 家[いえ]を 出[で]る 前[まえ]に 鍵[かぎ]を かばんに " },
          { text: "入[い]れることにする", blank: true },
        ],
        notes: "Uses 家を出る前に instead of 出かける前に",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたから、これからは 家[いえ]を 出[で]る 前[まえ]に 鍵[かぎ]を かばんに " },
          { text: "入[い]れておくことにする", blank: true },
        ],
        notes: "Uses から, 家を出る前に, and 入れておく",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これから 鍵[かぎ]を かばんに 入[い]れてから " },
          { text: "出[で]かけることにする", blank: true },
        ],
        notes: "Uses これから without は and the 入れてから construction",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 鍵[かぎ]を かばんに 入[い]れてから 家[いえ]を " },
          { text: "出[で]ることにする", blank: true },
        ],
        notes: "Uses 家を出ることにする after 入れてから",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしてしまったので、これからは 鍵[かぎ]を かばんの 中[なか]に 入[い]れてから " },
          { text: "出[で]かけることにする", blank: true },
        ],
        notes: "Combines なくしてしまった with かばんの中に入れてから",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 出[で]かける 前[まえ]に 鍵[かぎ]は かばんに " },
          { text: "入[い]れることにする", blank: true },
        ],
        notes: "Uses 鍵は as the topic instead of 鍵を",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 出[で]かける 前[まえ]に 鍵[かぎ]は かばんの 中[なか]に " },
          { text: "入[い]れておくことにする", blank: true },
        ],
        notes: "Uses topical は with 入れておく and かばんの中",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたから、これからは 鍵[かぎ]を かばんに 入[い]れて " },
          { text: "出[で]かけることにする", blank: true },
        ],
        notes: "Uses 入れて出かける rather than 入れてから出かける",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、これからは 鍵[かぎ]を かばんの 中[なか]に 入[い]れて 家[いえ]を " },
          { text: "出[で]ることにする", blank: true },
        ],
        notes: "Uses 入れて家を出る with かばんの中",
      },
      {
        segments: [
          { text: "今朝[けさ]、鍵[かぎ]をなくしたので、今日[きょう]から 出[で]かける 前[まえ]に 鍵[かぎ]を かばんに " },
          { text: "入[い]れることにする", blank: true },
        ],
        notes: "Uses 今日から for starting from today/from now on",
      },
    ],
  },
  {
    english: "After watching a horror movie alone, I decided not to watch horror movies at night anymore.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          { text: "一人[ひとり]で ホラー映画[えいが]を 見[み]てから、夜[よる]は もう ホラー映画[えいが]を" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "Basic version using 見てから and 夜は",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラーを 見[み]てから、夜[よる]は もう ホラーを" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "Uses ホラー alone to mean horror movies, as in the hint",
      },
      {
        segments: [
          { text: "ホラー映画[えいが]を 一人[ひとり]で 見[み]てから、夜[よる]は もう ホラー映画[えいが]を" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "Moves ホラー映画を before 一人で",
      },
      {
        segments: [
          { text: "ホラーを 一人[ひとり]で 見[み]てから、夜[よる]は もう ホラーを" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "Uses ホラー alone with changed word order",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラー映画[えいが]を 見[み]た 後[あと]で、夜[よる]は もう ホラー映画[えいが]を" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "Uses 見た後で for after watching",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラーを 見[み]た 後[あと]で、夜[よる]は もう ホラーを" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "Uses ホラー alone and 見た後で",
      },
      {
        segments: [
          { text: "ホラー映画[えいが]を 一人[ひとり]で 見[み]た 後[あと]で、夜[よる]は もう ホラー映画[えいが]を" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "見た後で with object-first word order",
      },
      {
        segments: [
          { text: "ホラーを 一人[ひとり]で 見[み]た 後[あと]で、夜[よる]は もう ホラーを" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "ホラー alone with 見た後で and object-first order",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラー映画[えいが]を 見[み]てから、もう 夜[よる]に ホラー映画[えいが]を" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "Uses 夜に instead of 夜は",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラーを 見[み]てから、もう 夜[よる]に ホラーを" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "夜に with ホラー alone",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラー映画[えいが]を 見[み]た 後[あと]で、もう 夜[よる]に ホラー映画[えいが]を" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "夜に plus 見た後で",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラーを 見[み]た 後[あと]で、もう 夜[よる]に ホラーを" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "夜に, 見た後で, and ホラー alone",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラー映画[えいが]を 見[み]てから、これからは 夜[よる]に ホラー映画[えいが]を" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "Uses これからは to express from now on/anymore",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラーを 見[み]てから、これからは 夜[よる]に ホラーを" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "これからは with ホラー alone",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラー映画[えいが]を 見[み]た 後[あと]で、これからは 夜[よる]に ホラー映画[えいが]を" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "これからは with 見た後で",
      },
      {
        segments: [
          { text: "一人[ひとり]で ホラーを 見[み]た 後[あと]で、これからは 夜[よる]に ホラーを" },
          { text: "見[み]ないことにする", blank: true },
        ],
        notes: "これからは, 見た後で, and ホラー alone",
      },
    ],
  },
];

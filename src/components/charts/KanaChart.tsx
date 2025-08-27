// components/KanaChart.tsx
import { JSX } from "solid-js"

export default function KanaChart(): JSX.Element {
  const rows = [
    {
      consonant: "",
      cells: [
        ["あ", "a"],
        ["い", "i"],
        ["う", "u"],
        ["え", "e"],
        ["お", "o"],
      ],
    },
    {
      consonant: "k",
      cells: [
        ["か", "ka"],
        ["き", "ki"],
        ["く", "ku"],
        ["け", "ke"],
        ["こ", "ko"],
      ],
    },
    {
      consonant: "s",
      cells: [
        ["さ", "sa"],
        ["し", "shi*"],
        ["す", "su"],
        ["せ", "se"],
        ["そ", "so"],
      ],
    },
    {
      consonant: "t",
      cells: [
        ["た", "ta"],
        ["ち", "chi*"],
        ["つ", "tsu*"],
        ["て", "te"],
        ["と", "to"],
      ],
    },
    {
      consonant: "n",
      cells: [
        ["な", "na"],
        ["に", "ni"],
        ["ぬ", "nu"],
        ["ね", "ne"],
        ["の", "no"],
      ],
    },
    {
      consonant: "h",
      cells: [
        ["は", "ha"],
        ["ひ", "hi"],
        ["ふ", "fu*"],
        ["へ", "he"],
        ["ほ", "ho"],
      ],
    },
    {
      consonant: "m",
      cells: [
        ["ま", "ma"],
        ["み", "mi"],
        ["む", "mu"],
        ["め", "me"],
        ["も", "mo"],
      ],
    },
    {
      consonant: "y",
      cells: [
        ["や", "ya"],
        ["", ""],
        ["ゆ", "yu"],
        ["", ""],
        ["よ", "yo"],
      ],
    },
    {
      consonant: "r",
      cells: [
        ["ら", "ra"],
        ["り", "ri"],
        ["る", "ru"],
        ["れ", "re"],
        ["ろ", "ro"],
      ],
    },
    {
      consonant: "w",
      cells: [
        ["わ", "wa"],
        ["", ""],
        ["", ""],
        ["", ""],
        ["を", "wo/o*"],
      ],
    },
    {
      consonant: "n",
      cells: [
        ["ん", "n"],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
      ],
    },
  ]

  return (
    <div
      class="grid gap-2 pr-5"
      style="grid-template-columns: auto repeat(5, minmax(64px, 1fr));"
    >
      {rows.map((row) => (
        <>
          {/* consonant label */}
          <div class="text-muted-foreground flex w-5 items-center justify-end pr-2 text-center text-base">
            {row.consonant}
          </div>
          {/* kana cells */}
          {row.cells.map(([jp, romaji]) =>
            jp ? <SyllableTile jp={jp} romaji={romaji} /> : <div></div>,
          )}
        </>
      ))}
    </div>
  )
}

function SyllableTile(props: { jp: string; romaji: string }) {
  return (
    <div class="bg-card/50 text-foreground rounded-md p-3 text-center">
      <p class="font-japanese text-2xl">{props.jp}</p>
      <p class="text-muted-foreground text-xs">{props.romaji}</p>
    </div>
  )
}

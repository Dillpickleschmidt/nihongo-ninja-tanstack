import Romaji from "@/components/text/Romaji"
import Furigana from "@/components/text/Furigana"

export default function MinutesChart1() {
  const rows = [
    {
      jp: (
        <Romaji romaji="ippun">
          <Furigana furigana={<span class="text-xs">●</span>}>いっ</Furigana>
          ぷん
        </Romaji>
      ),
      en: "1 minute",
    },
    {
      jp: (
        <Romaji romaji="ni-fun">
          <Furigana furigana={<span class="text-xs">●</span>}>に</Furigana>ふん
        </Romaji>
      ),
      en: "2 minutes",
    },
    {
      jp: (
        <Romaji romaji="san-pun">
          <Furigana furigana={<span class="text-xs">●</span>}>さ</Furigana>
          んぷん
        </Romaji>
      ),
      en: "3 minutes",
    },
    {
      jp: (
        <Romaji romaji="yon-pun">
          <Furigana furigana={<span class="text-xs">●</span>}>よ</Furigana>
          んぷん
        </Romaji>
      ),
      en: "4 minutes",
    },
    {
      jp: (
        <Romaji romaji="go-fun">
          <Furigana furigana={<span class="text-xs">●</span>}>ご</Furigana>ふん
        </Romaji>
      ),
      en: "5 minutes",
    },
    {
      jp: (
        <Romaji romaji="roppun">
          <Furigana furigana={<span class="text-xs">●</span>}>ろっ</Furigana>
          ぷん
        </Romaji>
      ),
      en: "6 minutes",
    },
    {
      jp: (
        <Romaji romaji="nana-fun">
          な<Furigana furigana={<span class="text-xs">●</span>}>な</Furigana>
          ふん
        </Romaji>
      ),
      en: "7 minutes",
    },
    {
      jp: (
        <div class="flex gap-3">
          <Romaji romaji="happun">
            <Furigana furigana={<span class="text-xs">●</span>}>はっ</Furigana>
            ぷん
          </Romaji>
          <Romaji romaji="hachi-fun">
            は<Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>
            ふん
          </Romaji>
        </div>
      ),
      en: "8 minutes",
    },
    {
      jp: (
        <Romaji romaji="kyuu-fun">
          <Furigana furigana={<span class="text-xs">●</span>}>きゅう</Furigana>
          ふん
        </Romaji>
      ),
      en: "9 minutes",
    },
    {
      jp: (
        <div class="flex gap-3">
          <Romaji romaji="juppun">
            <Furigana furigana={<span class="text-xs">●</span>}>
              じゅっ
            </Furigana>
            ぷん
          </Romaji>
          <Romaji romaji="jippun">
            <Furigana furigana={<span class="text-xs">●</span>}>じっ</Furigana>
            ぷん
          </Romaji>
        </div>
      ),
      en: "10 minutes",
    },
  ]

  return (
    <div class="bg-card/80 border-border rounded-xl border shadow">
      <ul class="divide-border divide-y">
        {rows.map((row, idx) => (
          <li key={idx} class="flex items-center justify-between px-6 py-4">
            <span class="text-foreground text-2xl font-semibold">{row.jp}</span>
            <span class="text-muted-foreground text-lg">{row.en}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

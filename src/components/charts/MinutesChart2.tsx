import Romaji from "@/components/text/Romaji"
import Furigana from "@/components/text/Furigana"

export default function MinutesChart2() {
  const rows = [
    {
      jp: (
        <Romaji romaji="juu-ippun">
          じゅう
          <Furigana furigana={<span class="text-xs">●</span>}>いっ</Furigana>
          ぷん
        </Romaji>
      ),
      en: "11 minutes",
    },
    {
      jp: (
        <Romaji romaji="juu-ni-fun">
          じゅう
          <Furigana furigana={<span class="text-xs">●</span>}>に</Furigana>ふん
        </Romaji>
      ),
      en: "12 minutes",
    },
    {
      jp: (
        <Romaji romaji="juu-san-pun">
          じゅう
          <Furigana furigana={<span class="text-xs">●</span>}>さ</Furigana>
          んぷん
        </Romaji>
      ),
      en: "13 minutes",
    },
    {
      jp: (
        <Romaji romaji="juu-yon-pun">
          じゅう
          <Furigana furigana={<span class="text-xs">●</span>}>よ</Furigana>
          んぷん
        </Romaji>
      ),
      en: "14 minutes",
    },
    {
      jp: (
        <Romaji romaji="juu-go-fun">
          じゅう
          <Furigana furigana={<span class="text-xs">●</span>}>ご</Furigana>ふん
        </Romaji>
      ),
      en: "15 minutes",
    },
    {
      jp: (
        <Romaji romaji="juu-roppun">
          じゅう
          <Furigana furigana={<span class="text-xs">●</span>}>ろっ</Furigana>
          ぷん
        </Romaji>
      ),
      en: "16 minutes",
    },
    {
      jp: (
        <Romaji romaji="juu-nana-fun">
          じゅうな
          <Furigana furigana={<span class="text-xs">●</span>}>な</Furigana>ふん
        </Romaji>
      ),
      en: "17 minutes",
    },
    {
      jp: (
        <div class="flex gap-3">
          <Romaji romaji="juu-happun">
            じゅう
            <Furigana furigana={<span class="text-xs">●</span>}>はっ</Furigana>
            ぷん
          </Romaji>
          <Romaji romaji="juu-hachi-fun">
            じゅうは
            <Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>
            ふん
          </Romaji>
        </div>
      ),
      en: "18 minutes",
    },
    {
      jp: (
        <Romaji romaji="juu-kyuu-fun">
          じゅう
          <Furigana furigana={<span class="text-xs">●</span>}>きゅう</Furigana>
          ふん
        </Romaji>
      ),
      en: "19 minutes",
    },
    {
      jp: (
        <div class="flex gap-3">
          <Romaji romaji="ni-juppun">
            に
            <Furigana furigana={<span class="text-xs">●</span>}>
              じゅっ
            </Furigana>
            ぷん
          </Romaji>
          <Romaji romaji="ni-jippun">
            に
            <Furigana furigana={<span class="text-xs">●</span>}>じっ</Furigana>
            ぷん
          </Romaji>
        </div>
      ),
      en: "20 minutes",
    },
    {
      jp: (
        <div class="flex gap-3">
          <Romaji romaji="san-juppun">
            さん
            <Furigana furigana={<span class="text-xs">●</span>}>
              じゅっ
            </Furigana>
            ぷん
          </Romaji>
          <Romaji romaji="san-jippun">
            さん
            <Furigana furigana={<span class="text-xs">●</span>}>じっ</Furigana>
            ぷん
          </Romaji>
        </div>
      ),
      en: "30 minutes",
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

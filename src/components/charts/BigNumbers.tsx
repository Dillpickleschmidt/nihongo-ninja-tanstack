import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function BigNumbers() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="w-1/3">Number</TableHead>
          <TableHead class="w-1/3">Reading (Hiragana)</TableHead>
          <TableHead class="w-1/3 text-right">Japanese (Kanji)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-base">
        <TableRow>
          <TableCell class="w-1/3">
            <span class="text-sky-400">100</span>
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            <span class="text-sky-400">ひゃく</span>
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            <span class="text-sky-400">百</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">200</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">にひゃく</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            二百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">300</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            さん
            <span class="text-orange-400">び</span>
            ゃく
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            三百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">400</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">よんひゃく</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            四百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">500</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">ごひゃく</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            五百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">600</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            ろ<span class="text-orange-400">っぴ</span>ゃく
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            六百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">700</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">ななひゃく</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            七百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">800</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            は<span class="text-orange-400">っぴ</span>ゃく
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            八百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">900</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            きゅうひゃく
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            九百
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">
            <span class="text-sky-400">1,000</span>
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            <span class="text-sky-400">せん</span>
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            <span class="text-sky-400">千</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">2,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">にせん</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            二千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">3,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            さん<span class="text-orange-400">ぜ</span>ん
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            三千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">4,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">よんせん</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            四千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">5,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">ごせん</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            五千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">6,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">ろくせん</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            六千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">7,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">ななせん</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            七千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">8,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            は<span class="text-orange-400">っせ</span>ん
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            八千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">9,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">きゅうせん</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            九千
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">
            <span class="text-sky-400">10,000</span>
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            <span class="text-sky-400">いちまん</span>
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            <span class="text-sky-400">一万</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">20,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">にまん</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            二万
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3"></TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">
            <div class="text-center">...</div>
          </TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">80,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">はちまん</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            八万
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="w-1/3">90,000</TableCell>
          <TableCell class="font-japanese w-1/3 text-xl">きゅうまん</TableCell>
          <TableCell class="font-japanese w-1/3 text-right text-xl">
            九万
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

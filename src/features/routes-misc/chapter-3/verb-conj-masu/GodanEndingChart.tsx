import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function GodanEndingChart() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="text-center">Ending</TableHead>
          <TableHead class="text-center">Changes to</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-center text-xl font-medium">
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">う</span> (u)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">い</span> (i)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">く</span> (ku)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">き</span> (ki)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">ぐ</span> (gu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">ぎ</span> (gi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">す</span> (su)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">し</span> (shi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">つ</span> (tsu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">ち</span> (chi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">ぬ</span> (nu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">に</span> (ni)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">ぶ</span> (bu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">び</span> (bi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">む</span> (mu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">み</span> (mi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">る</span> (ru)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">り</span> (ri)
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

// routes/guides/comparison.tsx
import { createFileRoute } from "@tanstack/solid-router"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const Route = createFileRoute("/_home/guides/comparison")({
  loader: () => ({
    toc: [
      { id: "comparison-table", title: "Feature Comparison" },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* Intro */}
      <header class="mb-8 text-center">
        <h1 class="mb-4 text-3xl font-bold">SRS Platform Comparison</h1>
        <p class="text-muted-foreground text-lg">
          Compare the features of different spaced repetition systems for
          Japanese learning.
        </p>
      </header>

      {/* Comparison Table */}
      <section id="comparison-table" class="mx-auto max-w-4xl">
        {/* Clarification Note */}
        <div class="bg-muted/50 mb-6 rounded-lg border p-4">
          <p class="text-muted-foreground text-base">
            <strong>Note:</strong> This comparison reflects integration features
            available through Nihongo Ninja. Each platform offers additional
            features in their native applications that may not be shown here.
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[200px]">Feature</TableHead>
              <TableHead class="text-center">Nihongo Ninja</TableHead>
              <TableHead class="text-center">Anki</TableHead>
              <TableHead class="text-center">WaniKani</TableHead>
              <TableHead class="text-center">JPDB</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="font-medium">Add Vocabulary</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Add Kanji</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✗</TableCell>
              <TableCell class="text-center">✗</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Review Due Vocabulary</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Review Due Kanji</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✗</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Get Mnemonics</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✗</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Add Sentences</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✗</TableCell>
              <TableCell class="text-center">✓</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Add Images</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✗</TableCell>
              <TableCell class="text-center">✗</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Add Audio</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✓</TableCell>
              <TableCell class="text-center">✗</TableCell>
              <TableCell class="text-center">✗</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </>
  )
}

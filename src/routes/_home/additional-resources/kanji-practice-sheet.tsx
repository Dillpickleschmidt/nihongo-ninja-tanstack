import { createFileRoute } from "@tanstack/solid-router"
import { For, createSignal } from "solid-js"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "@/components/ui/text-field"
import PrintButton from "@/components/PrintButton"
import ModeToggle from "@/features/navbar/ModeToggle"

export const Route = createFileRoute(
  "/_home/additional-resources/kanji-practice-sheet",
)({
  head: () => ({
    meta: [{ title: "漢字練習シート" }],
  }),
  component: KanjiPracticeSheet,
})

const FORM_FIELDS = ["Lesson:", "Section:", "名前:"]
const MAIN_TABLE_ROWS = 13
const SECOND_TABLE_ROWS = 7

const KanjiCell = (props: { showPlaceholder?: boolean }) => (
  <td class="relative h-40 w-40 border-x border-t-2 border-b-2 border-neutral-500 print:border-black">
    {/* Grid lines overlay */}
    <div class="pointer-events-none absolute inset-0">
      {/* Horizontal line */}
      <div class="absolute top-1/2 w-full border-t-2 border-dashed border-neutral-500/35 print:border-neutral-500/25" />
      {/* Vertical line */}
      <div class="absolute left-1/2 h-full border-l-2 border-dashed border-neutral-500/35 print:border-neutral-500/25" />
    </div>
    {/* Text input */}
    <TextField class="absolute inset-0 flex items-center justify-center">
      <TextFieldInput
        placeholder={props.showPlaceholder ? "字" : undefined}
        class="font-japanese h-full w-full overflow-hidden border-none bg-transparent text-center text-8xl ring-offset-1! placeholder:opacity-25"
      />
    </TextField>
  </td>
)

const MeaningCell = () => (
  <td class="relative h-40 w-72 border-x border-t-2 border-b-2 border-neutral-500 print:border-black">
    <TextField class="absolute inset-0">
      <TextFieldTextArea
        class="h-full w-full resize-none overflow-hidden border-none bg-transparent p-2 text-xl ring-offset-1!"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      />
    </TextField>
  </td>
)

const ReadingCell = () => (
  <td class="relative h-40 w-32 border-x border-t-2 border-b-2 border-neutral-500 print:border-black">
    <div class="flex h-full flex-col">
      <div class="h-1/2 border-b-2 border-dashed border-neutral-500 print:border-black">
        <TextField class="h-full">
          <TextFieldTextArea
            class="h-full min-h-0 w-full resize-none overflow-hidden border-none bg-transparent p-1 text-lg ring-offset-1!"
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
          />
        </TextField>
      </div>
      <div class="h-1/2">
        <TextField class="h-full">
          <TextFieldTextArea
            class="h-full min-h-0 w-full resize-none overflow-hidden border-none bg-transparent p-1 text-lg ring-offset-1!"
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
          />
        </TextField>
      </div>
    </div>
  </td>
)

const WordCell = () => (
  <td class="relative h-40 border-x border-t-2 border-b-2 border-neutral-500 print:border-black">
    <div class="flex h-full flex-col">
      <div class="h-1/2 border-b-2 border-dashed border-neutral-500 print:border-black">
        <TextField class="h-full">
          <TextFieldTextArea
            class="h-full min-h-0 w-full resize-none overflow-hidden border-none bg-transparent p-1 text-lg ring-offset-1!"
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
          />
        </TextField>
      </div>
      <div class="h-1/2">
        <TextField class="h-full">
          <TextFieldTextArea
            class="h-full min-h-0 w-full resize-none overflow-hidden border-none bg-transparent p-1 text-lg ring-offset-1!"
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
          />
        </TextField>
      </div>
    </div>
  </td>
)

const SentenceCell = () => (
  <td class="relative h-40 w-1/2 border-x border-t-2 border-b-2 border-neutral-500 print:border-black">
    <div class="flex h-full flex-col">
      <div class="h-1/2 border-b-2 border-dashed border-neutral-500 print:border-black">
        <TextField class="h-full">
          <TextFieldTextArea
            class="h-full min-h-0 w-full resize-none overflow-hidden border-none bg-transparent p-1 text-lg ring-offset-1!"
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
          />
        </TextField>
      </div>
      <div class="h-1/2">
        <TextField class="h-full">
          <TextFieldTextArea
            class="h-full min-h-0 w-full resize-none overflow-hidden border-none bg-transparent p-1 text-lg ring-offset-1!"
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
          />
        </TextField>
      </div>
    </div>
  </td>
)

const PracticeRow = (props: { isFirst?: boolean }) => (
  <tr>
    <KanjiCell showPlaceholder={props.isFirst} />
    <MeaningCell />
    <ReadingCell />
    <WordCell />
    <SentenceCell />
  </tr>
)

const TableHeader = () => (
  <thead class="bg-sky-500 text-white">
    <tr>
      <th class="border border-neutral-500 p-2 text-2xl print:border-black">
        漢字
      </th>
      <th class="border border-neutral-500 p-2 text-2xl print:border-black">
        意味
      </th>
      <th class="border border-neutral-500 text-2xl print:border-black">
        <div class="flex">
          <div class="flex w-1/2 items-center justify-center border-r border-dashed border-neutral-500 print:border-black">
            <div>読み</div>
          </div>
          <div class="flex w-1/2 flex-col justify-center">
            <div class="border-b border-dashed border-neutral-500 p-1 print:border-black">
              くん
            </div>
            <div class="p-1">オン</div>
          </div>
        </div>
      </th>
      <th class="border border-neutral-500 p-2 text-2xl print:border-black">
        単語
      </th>
      <th class="border border-neutral-500 p-2 text-2xl print:border-black">
        例文
      </th>
    </tr>
  </thead>
)

const PracticeTable = (props: { rows: number; showHeader?: boolean }) => (
  <table class="w-full border-collapse border-2 border-neutral-500 print:border-black">
    {props.showHeader && <TableHeader />}
    <tbody>
      <For each={Array(props.rows).fill(0)}>
        {(_, index) => <PracticeRow isFirst={index() === 0} />}
      </For>
    </tbody>
  </table>
)

function KanjiPracticeSheet() {
  const [printContent, setPrintContent] = createSignal<HTMLDivElement>()

  const kanjiPrintCSS = `
    @media print {
      /* Font sizing - actual sizes * 0.45 */
      .text-lg {
        font-size: calc(1.125rem * 0.45) !important;
        line-height: calc(1.75rem * 0.45) !important;
      }
      .text-xl {
        font-size: calc(1.25rem * 0.45) !important;
        line-height: calc(1.75rem * 0.45) !important;
      }
      .text-2xl {
        font-size: calc(1.5rem * 0.45) !important;
        line-height: calc(2rem * 0.45) !important;
      }
      .text-3xl {
        font-size: calc(1.875rem * 0.45) !important;
        line-height: calc(2.25rem * 0.45) !important;
      }
      .text-8xl {
        font-size: calc(6rem * 0.45) !important;
        line-height: calc(1 * 0.45) !important;
      }
      .text-\\[1\\.6rem\\] {
        font-size: calc(1.6rem * 0.45) !important;
        line-height: calc(1.6rem * 0.45) !important;
      }

      /* Spacing - actual sizes * 0.45 */
      .p-1 { padding: calc(0.25rem * 0.25) !important; }
      .p-2 { padding: calc(0.45rem * 0.45) !important; }
      .p-20 { padding: calc(5rem * 0.45) !important; }
      .mt-2 { margin-top: calc(0.45rem * 0.45) !important; }
      .mt-12 { margin-top: calc(3rem * 0.45) !important; }
      .mt-15 { margin-top: calc(3.75rem * 0.45) !important; }
      .mt-16 { margin-top: calc(4rem * 0.45) !important; }

      .mb-0.5 { margin-bottom: calc(0.125rem * 0.45) !important; }
      .mb-2 { margin-bottom: calc(0.45rem * 0.45) !important; }

      .space-x-2 { gap: calc(0.5rem * 0.45) !important; }
      .space-x-4 { gap: calc(1rem * 0.45) !important; }

      /* Set table borders to thin black */
      table, th, td {
        border-color: black !important;
        border-width: 0.5px !important;
      }

      /* Set dashed borders to thin but respect directionality */
      .border-t.border-dashed,
      .border-t-2.border-dashed {
        border-top-width: 0.5px !important;
      }

      .border-b.border-dashed,
      .border-b-2.border-dashed {
        border-bottom-width: 0.5px !important;
      }

      .border-l.border-dashed,
      .border-l-2.border-dashed {
        border-left-width: 0.5px !important;
      }

      .border-r.border-dashed,
      .border-r-2.border-dashed {
        border-right-width: 0.5px !important;
      }

      .border.border-dashed,
      .border-2.border-dashed {
        border-width: 0.5px !important;
      }

      /* Width constraints - actual sizes * 0.45 */
      .w-14 { width: calc(3.5rem * 0.45) !important; }
      .w-32 { width: calc(8rem * 0.45) !important; }
      .w-40 { width: calc(10rem * 0.45) !important; }
      .w-48 { width: calc(12rem * 0.45) !important; }
      .w-72 { width: calc(18rem * 0.45) !important; }
      .w-\\[600px\\] { width: calc(600px * 0.45) !important; }

      /* Height constraints - actual sizes * 0.45 */
      .h-10 { height: calc(2.5rem * 0.45) !important; }
      .h-12 { height: calc(3rem * 0.45) !important; }
      .h-14 { height: calc(3.5rem * 0.45) !important; }
      .h-16 { height: calc(4rem * 0.45) !important; }
      .h-18 { height: calc(4.5rem * 0.45) !important; }
      .h-40 { height: calc(10rem * 0.45) !important; }

    }
  `

  return (
    <div class="px-12 pt-8 pb-28">
      <div
        ref={setPrintContent}
        class="border-card bg-background relative min-w-[1500px] border p-20 print:min-w-0 print:border-none print:bg-white"
      >
        {/* Theme Toggle */}
        <div class="absolute top-12 left-32 transform print:hidden">
          <ModeToggle iconSize={7} />
        </div>

        {/* Print Button */}
        <div class="font-inter absolute top-8 right-8 flex items-center">
          <h2 class="text-card-foreground mr-2 mb-1 font-bold italic print:hidden">
            CLICK TO PRINT {"->"}
          </h2>
          <PrintButton
            ref={printContent}
            buttonSize={12}
            customCSS={kanjiPrintCSS}
            title="漢字練習シート"
          />
        </div>

        {/* Header */}
        <div class="flex items-end justify-center">
          <TextField class="w-48">
            <TextFieldInput
              placeholder="Class Name"
              class="mb-0.5 h-12 overflow-hidden pr-0 text-right text-3xl font-bold print:border-none print:text-black"
            />
          </TextField>
          <h1 class="mb-2 text-3xl font-bold print:text-black">
            漢字練習シート
          </h1>
        </div>

        {/* Form Fields */}
        <div class="mt-16 flex w-full space-x-4 print:mt-15">
          <For each={FORM_FIELDS}>
            {(label, index) => (
              <>
                <TextField class="flex flex-row items-center">
                  <TextFieldLabel class="mb-0.25 text-[1.6rem] font-bold print:text-lg!">
                    {label}
                  </TextFieldLabel>
                  <TextFieldInput
                    class={`h-10 overflow-hidden px-1 text-[1.6rem] font-bold print:border-none print:p-0 print:text-lg! ${index() === 2 ? "w-[600px]" : "w-14"}`}
                  />
                </TextField>
              </>
            )}
          </For>
        </div>

        {/* Main Practice Table */}
        <div class="mt-2">
          <PracticeTable rows={MAIN_TABLE_ROWS} showHeader={true} />
        </div>

        {/* Second Practice Table */}
        <div class="mt-24 print:pt-4">
          <PracticeTable rows={SECOND_TABLE_ROWS} showHeader={false} />
        </div>
      </div>
    </div>
  )
}

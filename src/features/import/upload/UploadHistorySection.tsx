import { FileDropZone } from "@/features/import/shared/FileDropZone"

export function UploadHistorySection() {
  return (
    <>
      <FileDropZone
        accept=".apkg,.json"
        description="Supports Anki .apkg exports and jpdb .json files"
      />

      {/* Supported Formats Info */}
      <div class="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
        <h3 class="mb-4 text-sm font-semibold text-white">Supported Formats</h3>

        <div class="space-y-4">
          <FormatInfo
            name="Anki (.apkg)"
            description="Export your deck from Anki: File → Export → Anki Deck Package"
          />
          <FormatInfo
            name="jpdb (.json)"
            description="Export from jpdb.io settings page"
          />
        </div>
      </div>

      {/* Process Button */}
      <div class="mt-6 flex justify-end">
        <button
          type="button"
          class="rounded-xl bg-(--accent) px-6 py-3 font-medium text-white opacity-50 cursor-not-allowed"
          disabled
        >
          Process File
        </button>
      </div>
    </>
  )
}

function FormatInfo(props: { name: string; description: string }) {
  return (
    <div class="flex items-start gap-3">
      <div class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
        <svg
          class="size-4 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </div>
      <div>
        <p class="font-medium text-white">{props.name}</p>
        <p class="text-sm text-white/50">{props.description}</p>
      </div>
    </div>
  )
}

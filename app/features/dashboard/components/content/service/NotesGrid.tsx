// features/dashboard/components/content/service/NotesGrid.tsx
import { For } from "solid-js"

interface Note {
  id: string
  title: string
  content: string
}

const fakeNotes: Note[] = [
  {
    id: "2",
    title: "Meeting Notes",
    content:
      "- Discussed Q3 roadmap\n- Finalized budget for new project\n- Assigned action items",
  },
  {
    id: "3",
    title: "Japanese Phrases",
    content:
      "おはようございます (Good morning)\nこんにちは (Hello/Good afternoon)\nこんばんは (Good evening)",
  },
  {
    id: "4",
    title: "A very long note",
    content:
      "This note is intentionally long to see how the card handles it. It should wrap gracefully and not break the layout.",
  },
]

export function NotesGrid() {
  return (
    <div class="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
      <div class="border-card-foreground flex h-36 w-12 flex-shrink-0 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-transparent p-4 text-center transition-colors hover:bg-gray-100/10 sm:h-44">
        <div class="text-4xl">+</div>
      </div>
      <For each={fakeNotes}>{(note) => <NoteCard note={note} />}</For>
    </div>
  )
}

function NoteCard(props: { note: Note }) {
  return (
    <div class="border-card-foreground flex h-36 w-36 flex-shrink-0 flex-col rounded-lg border bg-gradient-to-b p-4 opacity-80 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md sm:h-44 sm:w-44">
      <h3 class="mb-2 font-bold">{props.note.title}</h3>
      <p class="text-muted-foreground overflow-hidden [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] text-sm whitespace-pre-wrap">
        {props.note.content}
      </p>
    </div>
  )
}


// features/vocab-page/VocabPage.tsx
import type { DeferredPromise } from "@tanstack/solid-router"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { DesktopVocabPage } from "./DesktopVocabPage"
import { MobileVocabPage } from "./MobileVocabPage"
import type { ImportRequest, VocabTextbook } from "./types"
import type { TextbookIDEnum } from "@/data/types"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder-operations"
import type { User } from "@supabase/supabase-js"

interface VocabPageProps {
  importRequest?: ImportRequest | null
  textbooks: [TextbookIDEnum, VocabTextbook][]
  foldersAndDecksPromise: DeferredPromise<FoldersAndDecksData>
  user: User | null
}

export function VocabPage(props: VocabPageProps) {
  return (
    <>
      <SSRMediaQuery showFrom="lg">
        <DesktopVocabPage
          importRequest={props.importRequest}
          textbooks={props.textbooks}
          foldersAndDecksPromise={props.foldersAndDecksPromise}
          user={props.user}
        />
      </SSRMediaQuery>

      <SSRMediaQuery hideFrom="lg">
        <MobileVocabPage />
      </SSRMediaQuery>
    </>
  )
}

// features/vocab-page/VocabPage.tsx
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { DesktopVocabPage } from "./DesktopVocabPage"
import { MobileVocabPage } from "./MobileVocabPage"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder"
import type { User } from "@supabase/supabase-js"

interface VocabPageProps {
  foldersAndDecksPromise: Promise<FoldersAndDecksData>
  user: User | null
}

export function VocabPage(props: VocabPageProps) {
  return (
    <>
      <SSRMediaQuery showFrom="lg">
        <DesktopVocabPage
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

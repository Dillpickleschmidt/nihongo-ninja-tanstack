import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { DesktopVocabPage } from "./DesktopVocabPage"
import { MobileVocabPage } from "./MobileVocabPage"
import type { DeckPart } from "./types"

interface VocabPageProps {
  pendingImport?: DeckPart | null
}

export function VocabPage(props: VocabPageProps) {
  return (
    <>
      <SSRMediaQuery showFrom="lg">
        <DesktopVocabPage pendingImport={props.pendingImport} />
      </SSRMediaQuery>

      <SSRMediaQuery hideFrom="lg">
        <MobileVocabPage />
      </SSRMediaQuery>
    </>
  )
}

// features/vocab-page/VocabPage.tsx
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { DesktopVocabPage } from "./DesktopVocabPage"
import { MobileVocabPage } from "./MobileVocabPage"
import type { ImportRequest, VocabTextbook } from "./types"
import type { TextbookIDEnum } from "@/data/types"

interface VocabPageProps {
  importRequest?: ImportRequest | null
  textbooks: [TextbookIDEnum, VocabTextbook][]
}

export function VocabPage(props: VocabPageProps) {
  return (
    <>
      <SSRMediaQuery showFrom="lg">
        <DesktopVocabPage
          importRequest={props.importRequest}
          textbooks={props.textbooks}
        />
      </SSRMediaQuery>

      <SSRMediaQuery hideFrom="lg">
        <MobileVocabPage />
      </SSRMediaQuery>
    </>
  )
}

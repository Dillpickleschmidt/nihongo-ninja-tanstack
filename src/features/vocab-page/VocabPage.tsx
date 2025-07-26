import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { DesktopVocabPage } from "./DesktopVocabPage"
import { MobileVocabPage } from "./MobileVocabPage"
import type { ImportRequest } from "./types"

interface VocabPageProps {
  importRequest?: ImportRequest | null
}

export function VocabPage(props: VocabPageProps) {
  return (
    <>
      <SSRMediaQuery showFrom="lg">
        <DesktopVocabPage importRequest={props.importRequest} />
      </SSRMediaQuery>

      <SSRMediaQuery hideFrom="lg">
        <MobileVocabPage />
      </SSRMediaQuery>
    </>
  )
}

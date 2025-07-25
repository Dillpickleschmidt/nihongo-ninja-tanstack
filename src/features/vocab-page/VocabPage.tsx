import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { DesktopVocabPage } from "./DesktopVocabPage"
import { MobileVocabPage } from "./MobileVocabPage"

export function VocabPage() {
  return (
    <>
      <SSRMediaQuery showFrom="lg">
        <DesktopVocabPage />
      </SSRMediaQuery>

      <SSRMediaQuery hideFrom="lg">
        <MobileVocabPage />
      </SSRMediaQuery>
    </>
  )
}


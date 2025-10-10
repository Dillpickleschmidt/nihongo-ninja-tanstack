import { useLearnPageContext } from "../../context/LearnPageContext"
import { HeroDailyProgress } from "../content/HeroDailyProgress"
import { ProgressSummary } from "../content/ProgressSummary"
import {
  LearningPathWrapper,
  LearningPathHeader,
  LearningPathContent,
} from "../content/LearningPathSection"

function CenterColumn() {
  const context = useLearnPageContext()
  const variant = () =>
    context.settingsQuery.data?.["device-type"] === "mobile"
      ? "mobile"
      : "desktop"

  return (
    <>
      <LearningPathWrapper>
        <div class="flex gap-5">
          <div class="w-[47%]">
            <ProgressSummary />
            <div class="mt-5 flex items-center justify-between">
              <h3 class="pl-2 text-xl font-semibold">Learning Path</h3>
              <LearningPathHeader variant={variant()} />
            </div>
          </div>
          <div class="w-[53%]">
            <HeroDailyProgress />
          </div>
        </div>
        <LearningPathContent variant={variant()} />
      </LearningPathWrapper>
    </>
  )
}

export default CenterColumn

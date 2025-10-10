import CenterColumn from "./CenterColumn"
import LeftColumn from "./LeftColumn"
import RightColumn from "./RightColumn"

function DesktopLayout() {
  return (
    <div class="mt-3 flex max-h-[calc(100vh-157px)] w-full justify-around overflow-y-auto">
      <div class="w-[18%]">
        <LeftColumn />
      </div>
      <div class="w-[57%] pr-4">
        <CenterColumn />
      </div>
      <div class="w-[25%]">
        <RightColumn />
      </div>
    </div>
  )
}

export default DesktopLayout

import { FeaturedContent } from "../content/FeaturedContent"
import { ModuleTypesList } from "./ModuleTypesList"

function LeftColumn() {
  return (
    <div class="space-y-6">
      <FeaturedContent />
      <div class="px-8 pt-4">
        <ModuleTypesList />
      </div>
    </div>
  )
}

export default LeftColumn

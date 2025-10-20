import {
  AvatarGroup,
  type AvatarGroupItem,
} from "@/components/ui/custom/avatar-group"
import { RESOURCE_CONFIGS } from "@/data/resources-config"

export default function ExternalResourceIcons() {
  const avatarItems: AvatarGroupItem[] = Object.values(RESOURCE_CONFIGS).map(
    (config) => ({
      src: config.profile_img,
      fallback: config.fallback,
      notes_internal: config.creator_name,
    })
  )

  return (
    <div>
      <AvatarGroup items={avatarItems} maxItems={12} />
    </div>
  )
}

import { LevelSelection } from "./components/LevelSelection"
import { BackgroundLayers } from "@/features/homepage/shared/components/BackgroundLayers"

interface JlptPageProps {
  onLevelSelect?: (level: string) => void
}

export function JlptPage(props: JlptPageProps) {
  return (
    <>
      <BackgroundLayers />
      <LevelSelection onSelect={props.onLevelSelect} />
    </>
  )
}

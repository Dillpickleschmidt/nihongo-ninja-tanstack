export interface LearningPathModule {
  moduleId: string
  module: {
    title: string
    module_type: string
    description?: string
  }
  linkTo: string
  disabled: boolean
}

export interface LearningPathChapter {
  slug: string
  title: string
  description?: string
  features?: string[]
  specialModules: LearningPathModule[]
  modules: LearningPathModule[]
}

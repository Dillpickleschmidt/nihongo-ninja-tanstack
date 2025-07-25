class RaphaelColors {
  private colors = [
    "#cc4444", // muted red
    "#cc7744", // muted orange  
    "#cccc44", // muted yellow
    "#77cc44", // muted lime
    "#44cc44", // muted green
    "#44cc77", // muted spring green
    "#44cccc", // muted cyan
    "#4477cc", // muted sky blue
    "#4444cc", // muted blue
    "#7744cc", // muted violet
    "#cc44cc", // muted magenta
    "#cc4477", // muted rose
  ]
  
  private currentIndex = 0

  getColor(): string {
    const color = this.colors[this.currentIndex]
    this.currentIndex = (this.currentIndex + 1) % this.colors.length
    return color
  }

  reset(): void {
    this.currentIndex = 0
  }
}

export const raphaelColors = new RaphaelColors()
import { describe, expect, it } from "vitest"
import { render } from "@/utils/test-utils"
import FuriganaText from "./FuriganaText"

describe("FuriganaText", () => {
  it("renders a plain-text highlight span for a single error range", () => {
    const { container } = render(() => (
      <FuriganaText
        text="私は時々朝八時ごろに音楽を聞きます"
        showFurigana={false}
        errors={[{ start: 2, end: 5 }]}
        highlightClass="highlight"
      />
    ))

    expect(container.textContent).toContain("私は時々朝八時ごろに音楽を聞きます")
    const highlight = container.querySelector("span.highlight")
    expect(highlight?.textContent).toBe("時々朝")
  })

  it("renders ruby text without highlights when there are no errors", () => {
    const { container } = render(() => (
      <FuriganaText text="私[わたし]は音楽[おんがく]を聞[き]きます" showFurigana />
    ))

    expect(container.querySelectorAll("ruby")).toHaveLength(3)
    expect(container.querySelector("span.highlight")).toBeNull()
  })

  it("renders a highlighted ruby chunk for a furigana error range", () => {
    const { container } = render(() => (
      <FuriganaText
        text="私[わたし]は音楽[おんがく]を聞[き]きます"
        showFurigana
        errors={[{ start: 2, end: 4 }]}
        highlightClass="highlight"
      />
    ))

    const highlight = container.querySelector("span.highlight")
    expect(highlight).toBeTruthy()
    expect(highlight?.textContent).toContain("音楽")
    expect(highlight?.textContent).toContain("おんがく")
    expect(highlight?.querySelectorAll("ruby")).toHaveLength(1)
  })

  it("renders multiple highlight spans in order", () => {
    const { container } = render(() => (
      <FuriganaText
        text="私は時々朝八時ごろに音楽を聞きます"
        showFurigana={false}
        errors={[
          { start: 2, end: 4 },
          { start: 7, end: 9 },
        ]}
        highlightClass="highlight"
      />
    ))

    const highlights = Array.from(container.querySelectorAll("span.highlight")).map(
      (node) => node.textContent,
    )
    expect(highlights).toEqual(["時々", "ごろ"])
  })
})

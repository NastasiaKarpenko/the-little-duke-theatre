import { render } from "@testing-library/react"
import LatestPosts from "./LatestPosts"

describe("src/components/LatestPosts", () => {
  it("Should render Component", () => {
    const { getByText } = render(<LatestPosts />)
    const element = getByText('Latest Posts')
    expect(element).toBeDefined()
  })
})

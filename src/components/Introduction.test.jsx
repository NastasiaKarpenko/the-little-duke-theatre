import { render } from "@testing-library/react"
import Introduction from "./Introduction"

describe("src/components/Introduction", () => {
  it("Should render Component", () => {
    const { getByText } = render(<Introduction />)
    const element = getByText('Brief introduction of school from owner')
    expect(element).toBeDefined()
  })
})

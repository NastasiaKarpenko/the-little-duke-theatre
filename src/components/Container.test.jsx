import { render } from "@testing-library/react"
import Container from "./Container"

describe("src/components/Container", () => {
  it("Should render component", () => {
    const { getByText } = render(<Container>{"someChildren"} </ Container >)
    const el = getByText('someChildren')
    expect(el).toBeDefined()
  })
})

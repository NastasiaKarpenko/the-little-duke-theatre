import { render } from "@testing-library/react"
import ClassItem from "./ClassItem"

describe("src/components/ClassItem", () => {
  it("Should render component", () => {
    const { getByText } = render(<ClassItem name="test" description="descr" day="Monday" hours="3" />)
    const el = getByText('test')
    expect(el).toBeDefined()
  })
})

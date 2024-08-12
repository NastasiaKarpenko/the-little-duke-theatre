import { render } from "@testing-library/react"
import Sidebar from "./Sidebar"

describe.skip("src/components/Sidebar", () => {
  it("Should render Component", () => {
    const { getByText } = render(<Sidebar />)
    const element = getByText('')
    expect(element).toBeDefined()
  })
})

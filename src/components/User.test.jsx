
import { render } from "@testing-library/react"
import User from "./User"

vi.mock("./Sidebar", () => ({
  default: vi.fn().mockImplementation(() => <span>{"Sidebar Component"}</span>),
}))

describe("src/components/User", () => {
  it("Should render Component", () => {
    const { getByText } = render(<User />)
    const element = getByText('Dashboard')

    expect(element).toBeDefined()
  })
})

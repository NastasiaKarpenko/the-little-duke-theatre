import { render } from "@testing-library/react"
import Sidebar from "./Sidebar"


vi.mock("next-auth/react", () => ({
  useSession: vi.fn().mockImplementation(() => ({ data: { user: { name: "Test User" } } })),
}))

describe("src/components/Sidebar", () => {

  it("Should render Component", () => {
    const { getByText } = render(<Sidebar />)
    const element = getByText('Test User')
    expect(element).toBeDefined()
  })
})

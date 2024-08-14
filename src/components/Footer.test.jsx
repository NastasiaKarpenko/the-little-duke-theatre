import { render } from "@testing-library/react"
import Footer from "./Footer"
import { useContext } from "react"

vi.mock("./ContextProvider", () => ({
  RoleContext: vi.fn()
}))

vi.mock("react", (importOriginal) => {
  const original = importOriginal()
  return {
    ...original,
    useContext: vi.fn().mockReturnValue('admin'),
  }
})

describe("src/components/Footer", () => {

  it("Should render Component", () => {
    const { getByTestId } = render(<Footer />)
    const element = getByTestId('footer')
    expect(element).toBeDefined()
  })
})

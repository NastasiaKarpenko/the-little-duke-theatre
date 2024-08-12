
import { render } from "@testing-library/react"
import { User } from "./User"

describe.skip("src/components/User", () => {
  it("Should render Component", () => {
    const { getByText } = render(<User />)
    const element = getByText('')
    expect(element).toBeDefined()
  })
})

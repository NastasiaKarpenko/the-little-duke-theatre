import { render } from "@testing-library/react"
import Testimonials from "./Testimonials"

describe.skip("src/components/Testimonials", () => {
  it("Should render Component", () => {
    const { getByText } = render(<Testimonials />)
    const element = getByText('')
    expect(element).toBeDefined()
  })
})

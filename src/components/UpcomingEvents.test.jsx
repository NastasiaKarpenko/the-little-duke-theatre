
import { render } from "@testing-library/react"
import UpcomingEvents from "./UpcomingEvents"

describe.skip("src/components/UpcomingEvents", () => {
  it("Should render Component", () => {
    const { getByText } = render(<UpcomingEvents />)
    const element = getByText('')
    expect(element).toBeDefined()
  })
})

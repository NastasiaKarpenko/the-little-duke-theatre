
import { render } from "@testing-library/react"
import UpcomingEvents from "./UpcomingEvents"

describe("src/components/UpcomingEvents", () => {
  it("Should render Component", () => {
    const { getByText } = render(<UpcomingEvents />)
    const element = getByText('Upcoming Events')
    expect(element).toBeDefined()
  })
})

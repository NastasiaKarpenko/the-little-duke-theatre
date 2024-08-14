import { render } from "@testing-library/react"
import Hero from "./Hero"

describe("src/components/Hero", () => {
  it("Should render Component", () => {
    const { getByText } = render(<Hero />)
    const element = getByText('Inspiring Creativity and Talent in Every Child!')
    expect(element).toBeDefined()
  })
})

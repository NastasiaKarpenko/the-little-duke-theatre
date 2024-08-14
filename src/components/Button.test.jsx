import { render } from "@testing-library/react"
import Button from "./Button"

describe("/components/Button", () => {
  it("should render Button component", () => {
    const { container, getByText } = render(
      <Button href={'/home'} buttonName={'TestButton'} />)
    expect(getByText('TestButton')).toBeDefined()
  })
})

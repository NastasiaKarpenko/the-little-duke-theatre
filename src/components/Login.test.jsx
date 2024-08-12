import { render } from "@testing-library/react"
import LatestPosts from "./LatestPosts"
import Login from "./Login"

describe("src/components/Login", () => {
  it("Should render Component", () => {
    const { getByText } = render(<Login />)
    const element = getByText('Sign in with Google')
    expect(element).toBeDefined()
  })
})

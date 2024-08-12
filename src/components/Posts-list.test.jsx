import { render } from "@testing-library/react"
import PostsList from "./Posts-list"

vi.mock("../db/FetchPosts", () => {
  return {
    FetchPosts: vi.fn().mockResolvedValue(
      [{ title: "Test Post 1", id: 1 }]
    )
  }
})

describe.skip("src/components/PostsList", () => {
  it("Should render Component", () => {
    const { getByText } = render(<PostsList />)
    const element = getByText('Test Post 1')
    expect(element).toBeDefined()
  })
})

import { render } from "@testing-library/react"
import Header from "./Header"

const mocks = vi.hoisted(() => {
  return {
    useContext: vi.fn(),
  }
})

vi.mock("./ContextProvider", () => ({
  RoleContext: vi.fn()
}))

vi.mock("react", (importOriginal) => {
  const original = importOriginal()
  return {
    ...original,
    useContext: mocks.useContext,
  }
})

vi.mock("next-auth/react", (importOriginal) => {
  const original = importOriginal()
  return {
    ...original,
    useSession: vi.fn().mockReturnValue({ data: "", status: "", user: { name: "Test User", image: "", } }),
  }
})

describe("src/components/Header", () => {

  it("Should render Component for admin", () => {
    vi.mocked(mocks.useContext).mockReturnValue('admin')

    const { getByTestId, queryByText } = render(<Header />)
    const element = getByTestId('header')
    const postLink = queryByText('Posts')
    expect(element).toBeDefined()
    expect(postLink).toBeDefined()
  })

  it("Should render Component for registered user", () => {
    vi.mocked(mocks.useContext).mockReturnValue('registered')

    const { getByTestId, queryByText } = render(<Header />)
    const element = getByTestId('header')
    const postLink = queryByText('Posts')
    expect(element).toBeDefined()
    expect(postLink).toBe(null)
  })
})

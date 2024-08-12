import { queryByText, render } from '@testing-library/react'
import ClassesList, { getElements } from './ClassesList'

const mocks = vi.hoisted(() => {
  return {
    getElements: vi.fn(),
  }
})

vi.mock("./ClassesList", async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    getElements: mocks.getElements,
  }
})

vi.mock("./ClassItem", () => ({
  default: vi.fn().mockImplementation(() => <span>{"ClassItem Component"}</span>),
}))

describe("src/components/ClassesList", () => {
  it("Should render ClassList component", async () => {
    vi.mocked(mocks.getElements).mockReturnValue({ data: [], cursor: '' })

    const { getByText, queryByText } = render(<ClassesList />)
    const el = getByText(/^Classes are loading/)
    const el1 = queryByText('ClassItem Component')
    const el2 = queryByText('More Classes')
    expect(el).toBeDefined()
    expect(el1).toBe(null)
    expect(el2).toBe(null)
  })

  it("Should render classes list with loadMore button", () => {
    vi.mocked(mocks.getElements).mockReturnValue(Promise.resolve({ data: ['data1', 'data2', 'data3'], cursor: 'cursor' }))

    const { queryByText } = render(<ClassesList />)
    const el = queryByText('More Classes')
    const el1 = queryByText('ClassItem Component')
    expect(el).toBeDefined()
    expect(el1).toBeDefined()
  })

  it("Should render classes list without loadMore button", () => {
    vi.mocked(mocks.getElements).mockReturnValue(Promise.resolve({ data: ['data1', 'data2', 'data3'], cursor: null }))

    const { queryByText } = render(<ClassesList />)
    const el = queryByText('More Classes')
    expect(el).toBe(null)
  })
})

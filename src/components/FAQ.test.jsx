import { render } from "@testing-library/react"
import FAQ from "./FAQ"


vi.mock("./ui/accordion", () => ({
  Accordion: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
  AccordionItem: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
  AccordionTrigger: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
  AccordionContent: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
}))


describe("src/components/FAQ", () => {
  it("Should render Component", () => {
    const { getByText } = render(<FAQ />)
    const element = getByText('Is it accessible?')
    expect(element).toBeDefined()
  })
})

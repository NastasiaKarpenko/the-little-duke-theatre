import { render } from "@testing-library/react"
import Testimonials from "./Testimonials"

vi.mock("../components/ui/carousel", () => ({
  Carousel: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
  CarouselContent: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
  CarouselItem: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
  CarouselNext: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
  CarouselPrevious: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
}))

describe("src/components/Testimonials", () => {
  it("Should render Component", () => {
    const { getByText } = render(<Testimonials />)
    const element = getByText('Testimonials')
    expect(element).toBeDefined()
  })
})

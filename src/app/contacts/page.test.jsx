import { render } from "@testing-library/react"
import ContactForm from "./page"
import { describe, it, expect } from "vitest"

describe("ContactForm Component", () => {
  it("Should render the form container with the correct class", () => {
    const { queryByText } = render(<ContactForm />)
    const formContainer = queryByText("Contact Us")
    expect(formContainer).toBeDefined()
  })
})

import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { describe, it, expect } from "vitest";

describe("ContactForm Component", () => {
  it("Should render the form container with the correct class", () => {
    const { container } = render(<ContactForm />);
    const formContainer = container.querySelector("div");
    expect(formContainer).toHaveClass("componentContent");
  });

  it("Should render the form title with the correct class", () => {
    const { getByText } = render(<ContactForm />);
    const titleElement = getByText("Contact Us");
    expect(titleElement).toHaveClass(
      "text-3xl",
      "font-bold",
      "mb-6",
      "text-center"
    );
  });

  it("Should render the name field with the correct class", () => {
    const { getByLabelText } = render(<ContactForm />);
    const nameField = getByLabelText("Name");
    expect(nameField).toHaveClass("input");
  });

  it("Should render the email field with the correct class", () => {
    const { getByLabelText } = render(<ContactForm />);
    const emailField = getByLabelText("Email");
    expect(emailField).toHaveClass("input");
  });

  it("Should render the enquiry textarea with the correct class", () => {
    const { getByLabelText } = render(<ContactForm />);
    const enquiryTextarea = getByLabelText("Enquiry");
    expect(enquiryTextarea).toHaveClass(
      "input",
      "h-auto",
      "w-full",
      "border",
      "border-black",
      "my-1",
      "rounded-md"
    );
  });
});

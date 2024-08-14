import { render, fireEvent, waitFor } from "@testing-library/react"
import Page from "./page"
import { describe, it, expect } from "vitest";

describe("Registration Form", () => {
  it("renders the form correctly", () => {
    const { getByText } = render(<Page />)
    expect(getByText("First Name")).toBeDefined()
    expect(getByText("Last Name")).toBeDefined()
    expect(getByText("Email")).toBeDefined()
    expect(getByText("Phone number")).toBeDefined()
    expect(getByText("Guardian Name")).toBeDefined()
    expect(getByText("Lesson")).toBeDefined();
  });

  it("shows validation errors for required fields", async () => {
    const { getByText, getAllByText } = render(<Page />)
    const button = getByText("Register")
    fireEvent.click(button);
    await waitFor(() => {
      expect(getAllByText("Required")).toHaveLength(4);
    });
  });

  it("shows validation error when lesson is not selected", async () => {
    const { getByText, queryByTestId } = render(<Page />)
    fireEvent.change(queryByTestId("firstName"), {
      target: { value: "John" },
    });
    fireEvent.change(queryByTestId("lastName"), {
      target: { value: "Doe" },
    });
    fireEvent.change(queryByTestId("email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(queryByTestId("tel"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(queryByTestId("guardianName"), {
      target: { value: "Jane Doe" },
    });

    fireEvent.click(getByText("Register"));

    await waitFor(() => {
      expect(getByText("Please select the lesson")).toBeDefined();
    });
  });
});

javascript;
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "./page";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";

// Mock the server response
const server = setupServer(
  rest.post("https://getform.io/f/bgdyngwa", (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Registration Form", () => {
  it("renders the form correctly", () => {
    render(<Page />);
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Guardian Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Lesson/i)).toBeInTheDocument();
  });

  it("shows validation errors for required fields", async () => {
    render(<Page />);
    fireEvent.click(screen.getByText(/Register/i));
    await waitFor(() => {
      expect(screen.getAllByText(/Required/i)).toHaveLength(3);
    });
  });

  it("submits the form correctly when all fields are valid", async () => {
    render(<Page />);
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/Guardian Name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Lesson/i), {
      target: { value: "Drama (6 to 8yrs)" },
    });

    fireEvent.click(screen.getByText(/Register/i));

    await waitFor(() => {
      expect(screen.queryByText(/Required/i)).not.toBeInTheDocument();
    });
  });

  it("does not submit the form when required fields are missing", async () => {
    render(<Page />);
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/Guardian Name/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/Lesson/i), {
      target: { value: "placeholder" },
    });

    fireEvent.click(screen.getByText(/Register/i));

    await waitFor(() => {
      expect(screen.getAllByText(/Required/i)).toHaveLength(3);
    });
  });

  it("shows validation error when lesson is not selected", async () => {
    render(<Page />);
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/Guardian Name/i), {
      target: { value: "Jane Doe" },
    });

    fireEvent.click(screen.getByText(/Register/i));

    await waitFor(() => {
      expect(screen.getByText(/Please select the lesson/i)).toBeInTheDocument();
    });
  });
});

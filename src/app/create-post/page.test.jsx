import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "./Page";
import { createPost } from "@/actions/actions";
import { describe, it, expect, vi } from "vitest";

vi.mock("@/actions/actions", () => ({
  createPost: vi.fn(),
}));

describe("Create Post Page", () => {
  it("renders the form correctly", () => {
    render(<Page />);
    expect(
      screen.getByPlaceholderText(/title for new post/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/content for new post/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Create Post/i)).toBeInTheDocument();
    expect(screen.getByText(/Submitt/i)).toBeInTheDocument();
  });

  it("shows validation errors for required fields", async () => {
    render(<Page />);
    fireEvent.click(screen.getByText(/Submitt/i));
    await waitFor(() => {
      expect(screen.getByPlaceholderText(/title for new post/i)).toBeInvalid();
      expect(
        screen.getByPlaceholderText(/content for new post/i)
      ).toBeInvalid();
    });
  });

  it("submits the form correctly when all fields are valid", async () => {
    render(<Page />);
    fireEvent.change(screen.getByPlaceholderText(/title for new post/i), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByPlaceholderText(/content for new post/i), {
      target: { value: "Test Content" },
    });

    fireEvent.click(screen.getByText(/Submitt/i));

    await waitFor(() => {
      expect(createPost).toHaveBeenCalled();
    });
  });

  it("does not submit the form when required fields are missing", async () => {
    render(<Page />);
    fireEvent.change(screen.getByPlaceholderText(/title for new post/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText(/content for new post/i), {
      target: { value: "" },
    });

    fireEvent.click(screen.getByText(/Submitt/i));

    await waitFor(() => {
      expect(createPost).not.toHaveBeenCalled();
    });
  });

  it("renders the submit button with correct styles", () => {
    render(<Page />);
    const submitButton = screen.getByText(/Submitt/i);
    expect(submitButton).toHaveClass(
      "h-10 my-2 bg-gradient-to-r from-sky-500 to-blue-400 hover:from-pink-500 hover:to-sky-500 text-white font-bold py-3 px-6 rounded flex align-middle justify-center text-center leading-4"
    );
  });
});

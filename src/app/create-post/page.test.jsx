import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "./page"
import { describe, it, expect, vi } from "vitest";

const mocks = vi.hoisted(() => {
  return {
    createPost: vi.fn(),
  }
})

vi.mock("../../actions/actions", () => ({
  createPost: mocks.createPost,
}));

describe("Create Post Page", () => {
  it("renders the form correctly", () => {
    render(<Page />);
    expect(
      screen.getByPlaceholderText(/title for new post/i)
    ).toBeDefined();
    expect(
      screen.getByPlaceholderText(/content for new post/i)
    ).toBeDefined()
    expect(screen.getByText(/Create Post/i)).toBeDefined()
    expect(screen.getByText(/Submit/i)).toBeDefined();
  });

  it("submits the form correctly when all fields are valid", async () => {
    const { getByPlaceholderText, getByText } = render(<Page />)
    fireEvent.change(getByPlaceholderText(/title for new post/i), {
      target: { value: "Test Title" },
    });
    fireEvent.change(getByPlaceholderText(/content for new post/i), {
      target: { value: "Test Content" },
    });

    fireEvent.click(getByText(/Submit/i));

    await waitFor(() => {
      expect(mocks.createPost).toHaveBeenCalled();
    });
  });


});

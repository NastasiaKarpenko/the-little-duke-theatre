import { render, screen } from "@testing-library/react";
import Page from "./Page";
import { vi } from "vitest";
import React from "react";

vi.mock("@/components/Posts-list", () => ({
  default: vi
    .fn()
    .mockImplementation(({ posts }) => (
      <div data-testid="posts-list">{posts ? "Posts Loaded" : "No Posts"}</div>
    )),
}));

describe("Page Component", () => {
  it("renders the main heading", () => {
    render(<Page />);
    const heading = screen.getByText(/Posts/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the PostsList component", () => {
    render(<Page />);
    const postsList = screen.getByTestId("posts-list");
    expect(postsList).toBeInTheDocument();
  });

  it("passes the correct props to PostsList component", () => {
    const mockPosts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];
    vi.mocked(PostsList).mockImplementation(({ posts }) => (
      <div data-testid="posts-list">{posts ? "Posts Loaded" : "No Posts"}</div>
    ));
    render(<Page />);
    const postsList = screen.getByTestId("posts-list");
    expect(postsList).toHaveTextContent("Posts Loaded");
  });

  it("displays loading fallback while PostsList is loading", () => {
    render(<Page />);
    const loadingFallback = screen.getByText(/Loading/i);
    expect(loadingFallback).toBeInTheDocument();
  });

  it("does not display loading fallback after PostsList is loaded", async () => {
    render(<Page />);
    const loadingFallback = screen.queryByText(/Loading/i);
    expect(loadingFallback).not.toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Admin from "./Admin";
import { useSession } from "next-auth/react";

// Mock the useSession hook
vi.mock("next-auth/react", () => ({
  useSession: vi.fn(),
}));

// Mock the Slidebar component
vi.mock("@/components/Sidebar", () => () => <div>Sidebar Component</div>);

describe("Admin Component", () => {
  beforeEach(() => {
    useSession.mockReturnValue({ data: { user: { name: "Test User" } } });
  });

  it("renders Admin Dashboard title", () => {
    render(<Admin />);
    const titleElement = screen.getByText(/Admin Dashboard/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("title has correct font size on large screens", () => {
    window.innerWidth = 1200; // Simulate large screen
    render(<Admin />);
    const titleElement = screen.getByText(/Admin Dashboard/i);
    expect(titleElement).toHaveClass("text-3xl");
  });

  it("title has correct font size on medium screens", () => {
    window.innerWidth = 768; // Simulate medium screen
    render(<Admin />);
    const titleElement = screen.getByText(/Admin Dashboard/i);
    expect(titleElement).toHaveClass("text-3xl");
  });

  it("title has correct font size on small screens", () => {
    window.innerWidth = 480; // Simulate small screen
    render(<Admin />);
    const titleElement = screen.getByText(/Admin Dashboard/i);
    expect(titleElement).toHaveClass("text-3xl");
  });

  it("title is centered", () => {
    render(<Admin />);
    const titleElement = screen.getByText(/Admin Dashboard/i);
    expect(titleElement).toHaveClass("flex justify-center");
  });
});

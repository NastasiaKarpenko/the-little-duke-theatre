
import { describe, expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import Home from "./page";

vi.mock("../components/Hero.jsx", () => ({
  default: vi.fn().mockImplementation(() => <span>{"Hero Component"}</span>),
}));
vi.mock("../components/Introduction.jsx", () => ({
  default: vi
    .fn()
    .mockImplementation(() => <span>{"Introduction Component"}</span>),
}));
vi.mock("../components/ClassesList.jsx", () => ({
  default: vi
    .fn()
    .mockImplementation(() => <span>{"ClassesList Component"}</span>),
}));
vi.mock("../components/UpcomingEvents.jsx", () => ({
  default: vi
    .fn()
    .mockImplementation(() => <span>{"UpcomingEvents Component"}</span>),
}));
vi.mock("../components/Testimonials.jsx", () => ({
  default: vi
    .fn()
    .mockImplementation(() => <span>{"Testimonials Component"}</span>),
}));
vi.mock("../components/LatestPosts.jsx", () => ({
  default: vi
    .fn()
    .mockImplementation(() => <span>{"LatestPosts Component"}</span>),
}));

describe("Home Page", () => {
  test("Basic page test", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Hero Component")).toBeDefined();
    expect(getByText("Testimonials Component")).toBeDefined();
  });
});

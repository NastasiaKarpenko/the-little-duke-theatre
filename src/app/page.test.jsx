import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

test("Basic page test", () => {
  render(<Home />);
  expect(screen.getByText("Counter Test")).toBeDefined();
});

import { render } from "@testing-library/react";
import Admin from "./Admin";
import { useSession } from "next-auth/react";

// Mock the useSession hook
vi.mock("next-auth/react", () => ({
  useSession: vi.fn(),
}));


// Mock the Sidebar component
vi.mock("./Sidebar", () => ({
  default: vi.fn().mockImplementation(() => <span>{"Sidebar Component"}</span>),
}))

describe("src/components/Admin", () => {
  beforeEach(() => {
    useSession.mockReturnValue({ data: { user: { name: "Test User" } } });
  });


  it("Should render Admin Dashboard", () => {
    const { getByText, container } = render(<Admin />)
    const titleElement = getByText('Admin Dashboard')
    expect(titleElement).toBeDefined();
  });
});

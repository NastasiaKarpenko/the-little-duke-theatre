import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import SignIn from "./page"
import { vi } from "vitest";

// Mock the dependencies
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

vi.mock("next-auth/react", () => ({
  useSession: vi.fn(),
}));

vi.mock("@/components/Login", () => ({
  default: vi.fn().mockImplementation(() => <div>Login Component</div>),
}));

describe("SignIn Component", () => {
  it("renders the Login component", () => {
    useSession.mockReturnValue({ status: "unauthenticated" });
    render(<SignIn />);
    expect(screen.getByText("Sign in with Google")).toBeDefined();
  });

  it("redirects to /dashboard if authenticated", () => {
    const push = vi.fn();
    useRouter.mockReturnValue({ push });
    useSession.mockReturnValue({ status: "authenticated" });

    render(<SignIn />);
    expect(push).toHaveBeenCalledWith("/dashboard");
  });

  it("does not redirect if not authenticated", () => {
    const push = vi.fn();
    useRouter.mockReturnValue({ push });
    useSession.mockReturnValue({ status: "unauthenticated" });

    render(<SignIn />);
    expect(push).not.toHaveBeenCalled();
  });

  it("handles status change correctly", () => {
    const push = vi.fn();
    useRouter.mockReturnValue({ push });
    const { rerender } = render(<SignIn />);

    useSession.mockReturnValue({ status: "unauthenticated" });
    rerender(<SignIn />);
    expect(push).not.toHaveBeenCalled();

    useSession.mockReturnValue({ status: "authenticated" });
    rerender(<SignIn />);
    expect(push).toHaveBeenCalledWith("/dashboard");
  });
});

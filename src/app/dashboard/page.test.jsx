import { render, screen, fireEvent } from "@testing-library/react";
import { signOut } from "next-auth/react";
import Dashboard from "./Dashboard";
import { RoleContext } from "@/components/ContextProvider";
import { vi } from "vitest";

vi.mock("next-auth/react", () => ({
  signOut: vi.fn(),
}));

describe("Dashboard Component", () => {
  const renderDashboard = (role) => {
    return render(
      <RoleContext.Provider value={role}>
        <Dashboard />
      </RoleContext.Provider>
    );
  };

  it("renders the Sign out button with correct text", () => {
    renderDashboard("admin");
    const signOutButton = screen.getByText(/Sign out/i);
    expect(signOutButton).toBeInTheDocument();
  });

  it("renders the Sign out button with correct styles", () => {
    renderDashboard("admin");
    const signOutButton = screen.getByText(/Sign out/i);
    expect(signOutButton).toHaveClass(
      "my-2 bg-blue-400 text-white hover:bg-white hover:text-blue-400 border border-blue-400 font-bold py-3 px-6 rounded flex align-middle justify-center text-center leading-4"
    );
  });

  it("calls signOut function when Sign out button is clicked", () => {
    renderDashboard("admin");
    const signOutButton = screen.getByText(/Sign out/i);
    fireEvent.click(signOutButton);
    expect(signOut).toHaveBeenCalledWith({ callbackUrl: "/" });
  });

  it("renders the Sign out button with correct layout", () => {
    renderDashboard("admin");
    const signOutButton = screen.getByText(/Sign out/i);
    expect(signOutButton).toHaveStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    });
  });

  it("renders the Sign out button with correct hover styles", () => {
    renderDashboard("admin");
    const signOutButton = screen.getByText(/Sign out/i);
    fireEvent.mouseOver(signOutButton);
    expect(signOutButton).toHaveClass("hover:bg-white hover:text-blue-400");
  });
});

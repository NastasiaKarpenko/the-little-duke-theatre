import { render, screen, fireEvent } from "@testing-library/react";
import { signOut } from "next-auth/react";
import Dashboard from "./page"
import { RoleContext } from "../../components/ContextProvider"
import { vi } from "vitest";

vi.mock("next-auth/react", () => ({
  useSession: vi.fn().mockReturnValue({ data: { user: { name: "Test User" } } }),
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
    expect(signOutButton).toBeDefined();
  });


  it("calls signOut function when Sign out button is clicked", () => {
    renderDashboard("admin");
    const signOutButton = screen.getByText(/Sign out/i);
    fireEvent.click(signOutButton);
    expect(signOut).toHaveBeenCalledWith({ callbackUrl: "/" });
  })
});

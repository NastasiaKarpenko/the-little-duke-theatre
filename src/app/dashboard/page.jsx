"use client";
import { signOut } from "next-auth/react";
import Admin from "@/components/Admin";
import User from "@/components/User";

import { useContext } from "react";
import { RoleContext } from "@/components/ContextProvider";

const getUserBoard = (role) => {
  if (role === "admin") return <Admin />;
  if (role === "registered") return <User />;
  return <div> There is no dashboard for your role </div>;
};

function Dashboard() {
  const role = useContext(RoleContext);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <div className="p-4">
      {role ? getUserBoard(role) : "Loading..."}
      <button
        type="button-styles"
        onClick={handleSignOut}
        className="my-2 bg-blue-400 text-white  hover:bg-white hover:text-blue-400 border border-blue-400 font-bold py-3 px-6 rounded flex align-middle justify-center text-center leading-4"
      >
        Sign out
      </button>
    </div>
  );
}

export default Dashboard;

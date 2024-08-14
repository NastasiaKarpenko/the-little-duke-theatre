"use client";
import { useSession } from "next-auth/react";
import Sidebar from "./Sidebar";

function Admin() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="h-full p-5 text-3xl font-bold flex justify-center">
        Admin Dashboard
      </h1>
      <Sidebar />
    </div>
  );
}
export default Admin;

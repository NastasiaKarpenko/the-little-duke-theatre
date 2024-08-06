"use client";
import { useSession } from "next-auth/react";
import Slidebar from "@/components/Sidebar";

function Admin() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="h-full p-5 text-3xl font-bold flex justify-center">
        Admin Dashboard
      </h1>
      <Slidebar />
    </div>
  );
}
export default Admin;

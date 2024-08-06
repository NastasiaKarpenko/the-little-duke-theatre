"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Slidebar from "@/components/Sidebar";

function User() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="h-full p-5 text-3xl font-bold flex justify-center">
        Dashboard
      </h1>
      <Slidebar />
    </div>
  );
}
export default User;

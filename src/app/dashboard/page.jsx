"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Admin from "@/components/Admin";
import User from "@/components/User";

function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const getUserBoard = (session) => {
    if (session?.user.role === "admin") return <Admin />;
    if (session?.user.role === "registered") return <User />;
    return router.push("/");
  };

  return (
    <div>
      {getUserBoard(session)}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          signOut({callbackUrl: "/"});
      
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default Dashboard;

"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Admin from "@/components/Admin";
import User from "@/components/User";
import { collection } from "firebase/firestore";
import  {db} from "@/db/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";


function Dashboard() {
  const [users, loading, error] = useCollectionData(collection(db, "users"))
  const { data: session, status, update } = useSession()
  const currentUserRole = users?.find(u => u.email === session?.user.email)?.role
  const router = useRouter();

  const getUserBoard = (session) => {
    if (currentUserRole === "admin") return <Admin />;
    if (currentUserRole === "registered") return <User />;
    return router.push("/");
  };

  return (
    <div>
      {getUserBoard(session)}
      <button
        className="my-2 bg-blue-400 text-white  hover:bg-white hover:text-blue-400 border border-blue-400 font-bold py-3 px-6 rounded flex align-middle justify-center text-center leading-4"
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

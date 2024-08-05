"use client";
import { useSession, signOut } from "next-auth/react";
//import { collection, query } from "firebase/firestore";
//import { useCollection } from "react-firebase-hooks/firestore";
//import { db } from "@/db/firebase";

function AdminPage() {
  const { data: session } = useSession();

  if (!session || session.user.role !== "admin") {
    return <p>Access Denied</p>;
  }
  
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome, {session.user.name}</p>
        <p>{users?.docs[0].data().email}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
export default AdminPage;

'use client'
import { useSession, signIn, signOut } from "next-auth/react";
//import { collection, query } from "firebase/firestore";
//import { useCollection } from "react-firebase-hooks/firestore";
//import { db } from "@/db/firebase";


function UserPage() {
  const { data: session } = useSession();

  if (!session || session.user.role !== 'registered') {
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => signOut()}>Sign out</button>

    </div>
  )}
  else {
    return( <p>Access Denied</p>)
  }
}
export default UserPage;
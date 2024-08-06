"use client"
import { useSession, signOut } from "next-auth/react"
//import { collection, query } from "firebase/firestore";
//import { useCollection } from "react-firebase-hooks/firestore";
//import { db } from "@/db/firebase";

function Admin() {
  const { data: session } = useSession()

  if (!session || session.user.role !== "admin") {
    return <p>Access Denied</p>
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
      {/* <p>{users?.docs[0].data().email}</p> */}
      
     
    </div>
  )
}
export default Admin

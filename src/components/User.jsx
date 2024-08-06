'use client'
import { useSession, signIn, signOut } from "next-auth/react"
//import { collection, query } from "firebase/firestore";
//import { useCollection } from "react-firebase-hooks/firestore";
//import { db } from "@/db/firebase";


function User() {
  const { data: session } = useSession()

  if (session?.user.role === 'registered') {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Welcome, {session.user.name}</p>
        
      </div>
    )
  }
  else {
    return (<div>Access Denied</div>)
  }
}
export default User

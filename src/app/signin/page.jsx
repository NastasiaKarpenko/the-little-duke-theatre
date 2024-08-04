"use client"
import { useEffect } from 'react'
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { collection, query } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import Login from "@/components/Login"
import { db } from "@/db/firebase"
import Admin from "@/components/Admin"
import User from "@/components/User"

function Signin() {
  const{data: session} = useSession()
  const [users, loading, error] = useCollection(query(collection(db, "users")))

  console.log(session, users)

  return (
    <div className='p-4'>
      {loading ? (
        <div className='flex justify-center align-middle h-full w-full font-bold'>
          Loading...
        </div>
      ) : (
        <>
          {!session && <Login />}
          {session?.user.role === "admin" && <Admin />}
          {session?.user.role === "registered" && <User />}
        </>
      )}
    </div>
  )
}

export default Signin

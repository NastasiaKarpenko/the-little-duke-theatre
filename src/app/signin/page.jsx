"use client"

import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { collection, query } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import Login from "@/components/Login"
import { db } from "@/db/firebase"


function Signin() {
  const { data: session } = useSession()
  const router = useRouter()
  const [users, loading, error] = useCollection(query(collection(db, "users")))

  return (
    <div className='p-4'>
      {loading ? (
        <div className='flex justify-center align-middle h-full w-full font-bold'>
          Loading...
        </div>
      ) : (
        <>
          {session ? router.push('/dashboard') : <Login />}
        </>
      )}
    </div>
  )
}

export default Signin;

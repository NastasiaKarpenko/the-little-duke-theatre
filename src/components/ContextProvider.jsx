'use client'
import { db } from '../db/firebase'
import { collection } from 'firebase/firestore'
import { SessionProvider } from 'next-auth/react'
import { createContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export const RoleContext = createContext()

function ContextProvider({ children, session }) {
  const [users, loading] = useCollectionData(collection(db, "users"))
  let role = !loading && users?.find(u => u.email === session?.user.email)?.role
  console.log("🎃 ~~ ContextProvider component: role:", role)

  return (
    <RoleContext.Provider value={role}>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </RoleContext.Provider>
  )
}

export default ContextProvider

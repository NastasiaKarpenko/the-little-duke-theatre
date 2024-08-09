"use client"

import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import Login from "@/components/Login"
import { useEffect } from 'react'


function SignIn() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [status])


  return (
    <div className='p-4'>
      <Login />
    </div>
  )
}

export default SignIn

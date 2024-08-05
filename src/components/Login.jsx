'use client'
import { signIn } from 'next-auth/react'
import Button from './Button'
export default function Login() {
    return (
        <div className='flex flex-col px-20 py-2'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => signIn('google')}>Sign in with Google</button>
            <Button href="/" buttonName="Cancel" className='h-10'/>
        </div>

    )
}

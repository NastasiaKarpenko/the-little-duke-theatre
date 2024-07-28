'use client'
import { signIn } from 'next-auth/react';
export default function Login(){
return(
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => signIn('google')}>Sign in with Google</button>
)
}
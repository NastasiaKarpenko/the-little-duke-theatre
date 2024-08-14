'use client'
import { signIn } from 'next-auth/react'
import Button from './Button'
export default function Login() {
    return (
        <div className='flex flex-col px-20 py-2 '>
            <button type='button-styles' onClick={() => signIn('google')}>Sign in with Google</button>
            <Button href="/" buttonName="Cancel" className='h-10' />
        </div>

    )
}

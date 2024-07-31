
'use client';
import { useSession, signIn, signOut } from "next-auth/react";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Login from "@/components/Login";
import { db } from "@/db/firebase";

function Signin() {
  const { data: session, status } = useSession();
  const [users, loading, error ] = useCollection(query(collection(db, 'users')));

  if (loading) return <p>Loading...</p>

  else if (!session) return <Login />
  else if (session) {
    if (session.user.role === 'admin') {
      window.location.href = '/admin';
    } else if (session.user.role ==='registered')  {
      window.location.href = '/user';
    }
    else return <Login />
  }

}

export default Signin;

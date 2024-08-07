
'use client';
import { useSession, signIn, signOut } from "next-auth/react";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/db/firebase";

function Signin() {
  const { data: session, status } = useSession();
  const [users, loading, error ] = useCollection(query(collection(db, 'users')));

  if (loading) return <p>Loading...</p>

  else if (!session) {
    signIn();
    return null;
  }
  
  /*else if (session || session.user.role !== 'registered') {
    return (
      <div>
        <p>Access Denied</p>;
      </div>
    );
  }*/
else {
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
      <p>{users?.docs[0].data().email}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => signOut()}>Sign out</button>
    </div>}
}

export default Signin;

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

const authOptions = {
  // should I add more authentication providers?
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    // need to ask client do they need more providers here
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  }),
  callbacks: {
    async session({session, token}) {
      session.user.role = session.user.role || 'registered';
      console.log('session', session);
      return session;
     },
    //async jwt({token, user, account, profile, isNewUser }) {
     // if (user) {
    //   token.role = user.role;
     // }
      //return token;
   // },
 },
 // secret: process.env.NEXTAUTH_SECRET,

};



export default NextAuth(authOptions);
export { authOptions }; 
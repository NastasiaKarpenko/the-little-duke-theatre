import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { app } from "@/db/firebase"

const authOptions = {
  // should I add more authentication providers?
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // need to ask client do they need more providers here
  ],
  adapter: FirestoreAdapter(app),
}
// secret: process.env.NEXTAUTH_SECRET,

export default NextAuth(authOptions)
export { authOptions }

import React from 'react';
import { Inter } from "next/font/google";
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import Container from "../components/Container";
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import SessionProvider from '../components/ContextProvider';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Little Duke Theatre",
  description: "Drogheda School of Perform Arts - Drama, Dance and Singing Classes for Children and Teenagers",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-200 text-zinc-800`}>
      <SessionProvider session={session}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
        </SessionProvider>
      </body>
    </html>
  );
}

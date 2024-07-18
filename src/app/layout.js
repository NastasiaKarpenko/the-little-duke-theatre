import React from 'react';
import { Inter } from "next/font/google";
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import Container from "../components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Little Duke Theatre",
  description: "Drogheda School of Perform Arts - Drama, Dance and Singing Classes for Children and Teenagers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-200 text-zinc-800`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
        </body>
    </html>
  );
}

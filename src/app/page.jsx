import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import ClassesList from "../components/ClassesList";
import UpcomingEvents from "../components/UpcomingEvents";
import Testimonials from "../components/Testimonials";
import LatestPosts from "../components/LatestPosts";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main className="text-center">
      {/*<h1 className="text-4xl md:text-5xl font-bold mb-5">Home</h1>*/}
      <Hero />
      <Introduction />
      <ClassesList />
      <UpcomingEvents />
      <Testimonials />
      <LatestPosts />
      <FAQ />
    </main>
  );
}

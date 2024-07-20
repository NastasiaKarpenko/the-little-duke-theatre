import React from "react";
import Hero from "../components/Hero.js";
import Introduction from "@/components/Introduction.js";
import ClassesList from "@/components/ClassesList.js";
import UpcomingEvents from "@/components/UpcomingEvents.js";
import Testimonials from "@/components/Testimonials.js";
import LatestPosts from "@/components/LatestPosts.js";
import FAQ from "@/components/FAQ.js";


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

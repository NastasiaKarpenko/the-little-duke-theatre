
import React from 'react';
import Image from 'next/image';

function UpcomingEvents() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 px-10">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image 
            src="/temporary_g.jpg" 
            alt="Event Image"
            className=" h-auto shadow-md rounded-lg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;


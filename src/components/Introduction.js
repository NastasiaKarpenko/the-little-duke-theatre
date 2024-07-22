import React from 'react';
import Button from './Button';
import Image from 'next/image';

function Introduction() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image 
          src="/lady.jpg" 
          alt="Introduction Image" 
          className="w-full h-auto" 
          width={500} 
          height={500} />
        </div>
        <div className="w-full md:w-1/2 px-10">
          <h2 className="text-3xl font-bold mb-4">Brief introduction of school from owner</h2>
          <p className="text-lg mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <Button href="./about" buttonName="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default Introduction;

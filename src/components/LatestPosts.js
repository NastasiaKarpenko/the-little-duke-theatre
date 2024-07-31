'use client'
import React from 'react';
import Image from 'next/image';
import Button from './Button';

function LatestPosts() {
  const posts = [
    {
      title: 'Sed ut perspiciatis',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
      imageUrl: '/temporary_g.jpg', 
    },
    {
      title: 'Lorem ipsum dolor',
      description: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/temporary_g.jpg', 
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg ">
              <div className="mb-4">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-auto shadow-md rounded-md"
                  width={600}
                  height={400}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <Button href="#" buttonName="Learn more" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;

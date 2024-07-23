import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <Image
            src="/path/to/logo.png" // Змініть шлях на ваш
            alt="Little Duke Theatre Logo"
            width={100}
            height={100}
          />
          <div className="ml-4 text-sm">
            <p>© The Little Duke Theatre, 2024</p>
            <p>Inspiring Creativity and Talent in Every Child!</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-6 md:mb-0">
          <div className="flex flex-col mr-10">
            <h3 className="font-bold">Community</h3>
            <Link href="/posts" className="text-gray-600 hover:underline">News</Link>
            <Link href="/schedule" className="text-gray-600 hover:underline">Schedule</Link>
            <Link href="/shows" className="text-gray-600 hover:underline">Past Performances</Link>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Theatre</h3>
            <Link href="/about" className="text-gray-600 hover:underline">About us</Link>
            <Link href="/contacts" className="text-gray-600 hover:underline">Contact us</Link>
            <Link href="/about#history" className="text-gray-600 hover:underline">History</Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
        <Button href="./registration" buttonName="Register Now" />
        <Button href="#" buttonName="Log in" />
        </div>
      </div>
      <div className="container mx-auto flex justify-center mt-8">
        <span className="text-gray-600 mr-4">Follow us:</span>
        <div className="flex space-x-4">
          <Image
            src="/path/to/social-icon1.png" // Змініть шлях на ваш
            alt="Social Icon 1"
            width={24}
            height={24}
          />
          <Image
            src="/path/to/social-icon2.png" // Змініть шлях на ваш
            alt="Social Icon 2"
            width={24}
            height={24}
          />
          <Image
            src="/path/to/social-icon3.png" // Змініть шлях на ваш
            alt="Social Icon 3"
            width={24}
            height={24}
          />
          <Image
            src="/path/to/social-icon4.png" // Змініть шлях на ваш
            alt="Social Icon 4"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

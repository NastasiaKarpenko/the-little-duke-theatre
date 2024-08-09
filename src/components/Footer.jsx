"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { RoleContext } from "./ContextProvider";

function Footer() {
  const role = useContext(RoleContext);
  console.log("🎃 ~~ Footer component: role", role);

  return (
    <footer className="py-8 bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <Image
            src="/logo_footer.png"
            alt="Little Duke Theatre Logo"
            width={180}
            height={180}
          />
          <div className="ml-4 text-sm">
            <p>© The Little Duke Theatre, 2024</p>
            <p>Inspiring Creativity and Talent in Every Child!</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-6 md:mb-0">
          <div className="flex flex-col mr-10">
            <h3 className="font-bold">Community</h3>
            {role === "admin" && (
              <Link href="/posts" className="text-gray-600 hover:underline">
                News
              </Link>
            )}
            <Link href="/schedule" className="text-gray-600 hover:underline">
              Schedule
            </Link>
            <Link href="/shows" className="text-gray-600 hover:underline">
              Past Performances
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Theatre</h3>
            <Link href="/about" className="text-gray-600 hover:underline">
              About us
            </Link>
            <Link href="/contacts" className="text-gray-600 hover:underline">
              Contact us
            </Link>
            <Link
              href="/about#history"
              className="text-gray-600 hover:underline"
            >
              History
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center mt-8">
        <span className="text-gray-600 mr-4">Follow us:</span>
        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/TheLittleDukeTheatre"
            target="_blank"
          >
            <Image
              src="/fb_icon.svg"
              alt="facebook icon"
              width={24}
              height={24}
            />
          </Link>
          <Image
            src="/whatsapp_icon.svg"
            alt="Social Icon 2"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

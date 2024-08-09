"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { RoleContext } from "./ContextProvider";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
    access: "admin",
  },
  {
    href: "/schedule",
    label: "Schedule",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contacts",
    label: "Contact Us",
  },
];
function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const role = useContext(RoleContext);
  console.log("🎃 ~~ Header component: role", role);

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="/Logo_header.png"
          alt="logo"
          className="w-[300px] h-[100px] flex items-center"
          width="300"
          height="100"
        />
      </Link>
      <nav>
        <div className="flex gap-x-5 text-[14px] justify-center items-center">
          {navLinks
            .filter((link) => (link?.access ? link?.access === role : true)) // filtering links by user's role
            .map((link) => (
              <div key={link.href}>
                <Link
                  className={`${
                    pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                  } `}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          {status === "authenticated" ? (
            <div>
              <a href="/dashboard">
                <img
                  src={session.user.image}
                  width="30px"
                  height="30px"
                  className="rounded-full"
                />
              </a>
            </div>
          ) : (
            <Button
              href="/signin"
              buttonName="Sign in"
              className="w-[90px] whitespace-nowrap"
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

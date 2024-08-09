import Button from "./Button";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="w-[200px] bg-white h-full p-5">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
          <Image
            src={session.user.image}
            alt="user image"
            className="rounded-full"
            width={96}
            height={96}
          />
        </div>
        <p>Welcome,</p>
        <h2 className="text-l font-bold mb-4">{session.user.name}</h2>
        <ul className="space-y-4">
          <li>
            <Button href="/students" buttonName="Students" />
          </li>
          <li>
            <Button href="/fees" buttonName="Fees" />
          </li>
          <li>
            <Button href="/schedule" buttonName="Classes&Schedule" />
          </li>
          <li>
            <Button href="/contacts" buttonName="Contact us" />
          </li>
          <li>
            <Button href="/settings" buttonName="Settings" />
          </li>
        </ul>
      </div>
    </div>
  );
}

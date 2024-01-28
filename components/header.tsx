import Link from "next/link";
import Image from "next/image";

import { atkins } from '../styles/fonts';

export default function Header() {
  return (
    <header className="z-100 py-4 px-12 bg-[#161632]">
      <div className="flex gap-2 items-center justify-between">
        <Image
          src="/stemlings_logo.png"
          alt="my desk"
          width={40}
          height={40}
        />
        <nav className="flex space-x-4">
          <Link className={atkins.className} href="/">
            <p className="z-[1] hover:text-[#60c8fb] hover:translate-y-[-1px] duration-200">home</p>
          </Link>
          <Link className={atkins.className} href="/onboarding">
            <p className="z-[1] hover:text-[#fa9c9c] hover:translate-y-[-1px] duration-200">login</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}

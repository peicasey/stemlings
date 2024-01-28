import Link from "next/link";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsYoutube } from "react-icons/bs";
import { SiDevpost } from "react-icons/si";

import { atkins } from '../styles/fonts';

const media = [
  {
    'icon' : <TbBrandGithubFilled />,
    'link' : "https://github.com/peicasey/stemlings"
  },
  {
    'icon' : <BsYoutube />,
    'link' : "https://github.com/peicasey/stemlings"
  },
  {
    'icon' : <SiDevpost />,
    'link' : "https://github.com/peicasey/stemlings"
  }
]

export default function Header() {
  return (
    <footer className="py-8 px-12 bg-[#161632]">
      <p className={atkins.className}>Gamifying K-12 STEM education with AI</p>
      <div className="border-b-indigo-900 border-b-2 my-4"></div>
      <div className="flex justify-between">
        <div className="flex gap-x-4 mb-4">
          {
            media.map((mediai) => (
              <a className="text-lg hover:translate-y-[-1px] duration-200" 
                href={mediai.link} target="_blank" rel="noopener noreferrer"
              >
                {mediai.icon}
              </a>
            ))
          }
        </div>

        <div className="text-right">
          <p className={atkins.className}>
            With ❤ by Casey Pei and Ryan Kabir
          </p>
          <p className={atkins.className}>
            Made in 24 hrs for TAMUHack X
          </p>
          <p className={atkins.className}>
            January 27, 2024
          </p>
        </div>

      </div>
      
    </footer>
  );
}

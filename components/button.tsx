import Link from "next/link";

import { atkins } from '../styles/fonts';

interface ButtonParams {
    text: string;
    link: string;
  }

export default function Button(params: ButtonParams) {
  return (
    <div className="group w-auto flex">
        
        <div className={"bg-black rounded-3xl w-auto"+
            "translate-y-[0] group-hover:translate-y-[2px] duration-200 " + 
            "z-0 p-4"}
        >
            <div className="text-center font-bold">
                <Link className={atkins.className} href={params.link}>
                    {params.text}
                </Link>
            </div>
        </div>
        <div className={"bg-gradient-to-r from-indigo-600 to-[#60c8fb] " + 
            "group-hover:outline-2 group-hover:translate-y-[-4px] duration-200 " +
            "group-hover:cursor-pointer rounded-3xl p-4 w-auto absolute"}
        >
            <div className="text-center font-bold">
                <Link className={atkins.className} href={params.link}>
                    {params.text}
                </Link>
            </div>
        </div>
    </div>
    
  );
}


//via-indigo-600
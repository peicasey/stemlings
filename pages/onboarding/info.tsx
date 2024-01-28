import Image from "next/image";
import styled from "styled-components";

import Button from "../../components/button";

import { atkins, poppins } from '../../styles/fonts';

import React from 'react';


interface OnboardingInfoParams {
    text: string;
    which: number;
}

const tasks = [ 1, 2, 3 ]

const circle = "w-[25px] h-[25px] border-2 border-white hover:scale-110 duration-200 "

function OnboardingInfo(params: OnboardingInfoParams) {

    return (
    <>
        <div className="flex">
            <div className="w-[5vw]">
                <div className={"translate-x-[-20px]" +
                    " text-center font-bold text-0"}
                >
                    <div className="flex flex-col justify-center items-center">
                        {tasks.map((task, index) => (
                            <div className="flex flex-col justify-center items-center">
                                <div className={(index == params.which) ? " bg-[#0e7eb6]" : " bg-[#5357d1]"}>
                                    <div className={circle}>
                                        {task}
                                    </div>
                                </div>
                                <div className="gap-2 bg-[#5357d1] w-[5px] h-[50px]"></div>
                            </div>
                        ))}
                        <div className="w-[25px] h-[25px] border-2 border-white bg-[#24266e]">
                            ✔
                        </div>
                    </div>
                    
                </div>
            </div>

            

            <div>  
                <div className="text-5xl font-bold py-2">
                    <h1 className={poppins.className}>onboarding</h1>
                </div>
                
                <div>
                    <p className={atkins.className}>{params.text}</p>
                </div>
            </div>
            
        </div>
    </>
  );
}

export default OnboardingInfo;

import Image from "next/image";
import styled from "styled-components";

import Button from "../../components/button";
import OnboardingInfo from "./info";

import { atkins, poppins } from '../../styles/fonts';

import React, { useState } from 'react';

import Spline from "@splinetool/react-spline";


function Onboarding() {

  return (
    <>
      <div className="w-[100vw] px-[10%] flex flex-col ">
        <div className="flex">
            <Spline
                className="absolute translate-y-[-10vh] translate-x-[-15%]" 
                scene="https://prod.spline.design/3nxoLS14X7pfEWJg/scene.splinecode"
            />
            <div className="bg-[#6467a0] rounded-[15%] w-[20%]"></div>

            <div className="w-[5%]"></div>

            <OnboardingInfo text={"howdy owo"} which={1} />            
            
        </div>
        

      </div>
    </>
  );
}

export default Onboarding;

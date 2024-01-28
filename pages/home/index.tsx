import Image from "next/image";
import styled from "styled-components";

import Button from "../../components/button";

import { atkins, poppins } from '../../styles/fonts';

import React, { useState } from 'react';

import Spline from "@splinetool/react-spline";

const Wrapper = styled.div`
  .spline {
    margin: 0;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
  }
`

const AWARDS = [
  '🎖️', '🥈', '🥇', '🥉', '🎖️', '🏆'
]

function HomePage() {

  const [user, setUser] = useState('Lion');

  return (
    <>
      <div className="w-[100vw] px-[10%] flex ">
        
        <div className="flex w-[20vw] flex-col flex-grow">

          <div className="text-5xl font-bold pb-14">
            <h1 className={poppins.className}>hi there {user}!</h1>
          </div>

          <div className="absolute left-0 translate-x-[-40px] translate-y-[-80px] w-[550px]">
            <Wrapper>
              <Spline
                className="spline overflow-hidden" 
                scene="https://prod.spline.design/3nxoLS14X7pfEWJg/scene.splinecode"
              />
            </Wrapper>
          </div>

          <div className="bg-[#6467a0] rounded-[15%] h-[200px] w-[200px] pb-4"></div>

          <div className="mt-4 bg-[#171735] rounded-3xl p-4">
            <h2 className="text-xl font-bold">awards</h2>
            <div className="flex gap-4">{AWARDS.map((award) => (
              <div className="flex items-center justify-center text-3xl w-[45px] h-[45px] rounded-[50%] bg-indigo-900">{award}</div>
            ))}</div>
          </div>

          <div className="mt-4 bg-[#171735] rounded-3xl p-4">
            <h2 className="text-xl font-bold">streak</h2>
            <div className="flex gap-x-2">
              <div className="text-xl">12</div>
              <div className="flex-grow-0 bg-blue-800 flex items-center rounded-3xl  px-3 text-xs">days</div>
            </div>
          </div>
          
        </div>

        <div className="w-[5vw]"></div>
        <div>
          <div className="rounded-3xl overflow-hidden hover:cursor-grab">
              <Spline
                  className="" 
                  scene="https://prod.spline.design/CnZwKrv4Kcb9P9QD/scene.splinecode"
              />
          </div>
          <div className="text-right">
            <p className={atkins.className}>{user}'s hideout</p>
          </div>
        </div>
        

        

      </div>
    </>
  );
}

export default HomePage;

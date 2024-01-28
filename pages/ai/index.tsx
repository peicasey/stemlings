import Image from "next/image";
import styled from "styled-components";

import Button from "../../components/button";

import { atkins, poppins } from '../../styles/fonts';

import React, { useState, useRef, useEffect } from 'react';

import Spline from "@splinetool/react-spline";

import TypeIt from "typeit-react";

type AIPageProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

// export default function CommentForm({
//   text,
//   setText,
//   onSubmit,
// }: CommentFormProps) {
//   const { isAuthenticated, logout, loginWithPopup } = useAuth0();

const Wrapper = styled.div`
  .spline {
    margin: 0;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
  }
`

const SPEED = 30;

function AIPage(params: AIPageProps) {

  return (
    <>
      <div className="w-[100vw] px-[10%] flex flex-col gap-y-12">

        <div className="flex justify-between">
          <div className="absolute left-0 translate-x-[-100px] translate-y-[-200px] w-[550px] y-[200px]">
            <Wrapper>
              <Spline
                className="spline overflow-hidden" 
                scene="https://prod.spline.design/3nxoLS14X7pfEWJg/scene.splinecode"
              />
            </Wrapper>
          </div>
            
          <div className="w-[200px]"></div>
          <div className="w-[80%]">
            
            <div className="mb-2 text-[#60c8fb] font-bold">
              <p className={atkins.className}>professor stemling ✨</p>
            </div>
            <div className={"p-4 min-h-[200px] bg-[#0e0f1f] "+
              "rounded-xl border-2 border-[#60c8fb]"
            }>
              <div className={atkins.className}>
                <TypeIt className=""
                    options={{
                    loop: false,
                    breakLines: false,
                    cursorChar: '|',
                    lifeLike: true,
                    loopDelay: [0, 0],
                    startDelay: 0,
                    cursorSpeed: 500,
                    speed: SPEED,
                    strings: [
                        'Hi! Welcome to STEMlings! Are you ready to learn?',
                    ],
                    waitUntilVisible: true,
                    }}
                />
              </div>
            </div>
          </div>    
        </div>
        
        <div>
          <div className="flex flex-col">
            <div className="mb-2 text-[#60c8fb] font-bold">
              <p className={atkins.className}>me 👤</p>
              </div>
              <div className={" bg-[#0e0f1f] "+
                "rounded-xl border-2 border-[#60c8fb]"
              }>
                <div className={atkins.className}>
                  
                  <form >
                    <textarea
                      className={"w-full min-h-[200px] max-h-40 p-3 rounded resize-y" + 
                      "bg-[#0e0f1f] text-white placeholder-gray-500"+
                      "!border-0 border-blue-gray-200 border-transparent bg-transparent" +
                      " px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 " +
                      " outline outline-0 transition-all placeholder:text-blue-gray-300 " + 
                      "placeholder-shown:border placeholder-shown:border-blue-gray-200 " + 
                      "placeholder-shown:border-t-blue-gray-200 focus:border-2 " +
                      " border-transparent " + 
                      " outline-0 disabled:resize-none " + 
                      " disabled:border-0 disabled:bg-blue-gray-50" }
                      rows={2}
                      placeholder={"Answer your stemling :D"}
                      // onChange={(e) => setText(e.target.value)}
                      value={params.text}
                      disabled={false}
                    />
                  </form>
                </div>
            </div>

            <div className="flex mt-4 w-[100%] justify-end">
              <Button text="submit" link="/"></Button>
            </div>
            
          </div>
        </div>

      </div>
    </>
  );
}

export default AIPage;

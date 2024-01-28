import Image from "next/image";
import styled from "styled-components";
import AIForm from "../../components/message";
import Button from "../../components/button";
import useAI from "../../hooks/useAI";
import testRun from "../../hooks/bro";

import { atkins, poppins } from '../../styles/fonts';

import React, { useState, useRef, useEffect } from 'react';

import Spline from "@splinetool/react-spline";

import TypeIt from "typeit-react";

type AIPageProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

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

const MESSAGE = [
      {
        role: "system",
        content: "You are a friendly tutor that helps kids learn STEM topics",
      },
      {
        role: "user",
        content:
          "",
      },
    ]

function AIPage(params: AIPageProps) {
  const { text, setText, onSubmit } = useAI();

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
              <div className={atkins.className} >
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
              
            <AIForm onSubmit={onSubmit} text={text} setText={setText} />
            
          </div>
        </div>

        <button onClick={ testRun }>X owo</button>

      </div>
    </>
  );
}

export default AIPage;

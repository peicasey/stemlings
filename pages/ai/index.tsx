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



const headers = {
  'Content-Type': "application/json",
  'X-Auth-Email': "peicasey@gmail.com",
  'X-Auth-Key': "5f1269cf6f67aff9b77bd0b9fee01856d1a46",
  'Access-Control-Allow-Origin' : '*',
  }
    


function AIPage(params: AIPageProps) {
  const [ text, setText ] = useState('default text');

  const MESSAGE = [
    {
      role: "system",
      content: "You are a friendly tutor that helps kids learn STEM topics",
    },
    {
      role: "user",
      content:
        "Give me a math problem to solve as an 8 year old! Please include the solution",
    },
  ]

  // const sendMessage = async function run(message) {
  //   const response = await fetch(
  //     `https://api.cloudflare.com/client/v4/accounts/a4630d62a43d4f9b5c8a7b5861b8ef0b/ai/run/@cf/meta/llama-2-7b-chat-int8`,
  //     {
  //       headers: headers,
  //       method: "POST",
  //       body: JSON.stringify(message),
  //     }
  //   );
  //   const result = await response.json();
  //   return result;
  // }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://api.cloudflare.com/client/v4/accounts/a4630d62a43d4f9b5c8a7b5861b8ef0b/ai/run/@cf/meta/llama-2-7b-chat-int8", {
        method: "POST",
        body: JSON.stringify({
          headers: headers,
          method: "POST",
          body: JSON.stringify(MESSAGE),
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setText(resJson.message);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch("https://ai.cloudflare.com/api?model=@cf/meta/llama-2-7b-chat-int8&input=Why do so many people like pizza?", {
  //       method: "GET",
  //       // body: JSON.stringify({
  //       //   headers: headers,
  //       //   method: "GET",
  //       //   // body: JSON.stringify(MESSAGE),
  //       // }),
  //     });
  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       setText(resJson.message);
  //     } else {
  //       console.log("Some error occured");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  

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
              
            {/* <AIForm onSubmit={ onMessage } text={text} setText={setText} /> */}
            
            <form className={atkins.className} onSubmit={handleSubmit}>
              <textarea
                  className={"w-full min-h-[200px] max-h-[300px] p-3 rounded resize-y" + 
                  " text-white placeholder-gray-500"+
                  "!border-0 border-blue-gray-200 border-[#60c8fb] bg-[#0e0f1f]" +
                  " px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 " +
                  " transition-all placeholder:text-blue-gray-300 " + 
                  "placeholder-shown:border placeholder-shown:border-blue-gray-200 " + 
                  "placeholder-shown:border-t-blue-gray-200 border-2 " +
                  " rounded-xl " + 
                  " disabled:resize-none " + 
                  " disabled:border-0 disabled:bg-blue-gray-50" }
                  rows={2}
                  placeholder={"Answer your stemling :D"}
                  onChange={(e) => setText(e.target.value)}
                  value={params.text}
                  disabled={false}
              />

              {/* <div className="flex mt-4 w-[100%] justify-end">
                  <Button text="submit" link="/"></Button>
              </div> */}

              <div className="mt-4 group w-auto flex">
                <div className={"bg-black rounded-3xl w-auto flex-grow"+
                    "translate-y-[10px] group-hover:translate-y-[20px] duration-200 " + 
                    "z-0 p-4"}
                >
                    <div className="text-center font-bold">
                      {params.text}
                    </div>
                </div>
                <div className={"bg-gradient-to-r from-indigo-600 to-[#60c8fb] " + 
                    "group-hover:outline-2 group-hover:translate-y-[-4px] duration-200 " +
                    "group-hover:cursor-pointer rounded-3xl p-4 w-auto absolute"}
                >
                  <input type="submit" value="Submit" />
                </div>
              </div>
              
            </form>


          </div>
        </div>
        
        {/* <div className="">
          <div>m {text} m</div>
          <button onClick={ sendMessage }>X owo</button>
        </div> */}
        

      </div>
    </>
  );
}

export default AIPage;

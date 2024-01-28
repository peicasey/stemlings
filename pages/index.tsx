import Container from "../components/container";
import Image from "next/image";
import styled from "styled-components";

import Button from "../components/button";

// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/3nxoLS14X7pfEWJg/scene.splinecode');



import { jost, atkins, poppins } from '../styles/fonts';


import React, { Suspense } from 'react';

import Spline from "@splinetool/react-spline";

const greeting = 'stemlings'
const stars1 = '⋆ ｡° ✩'
const stars2 = '⋆ ｡✩ ° .'


const Wrapper = styled.div`
  .spline {
    margin: 0;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
  }
`


function HomePage() {

  let greetingCharacters = []
  for (let i = 0; i < greeting.length; i++) {
    const char = greeting[i]
    greetingCharacters.push(char == ' ' ? '\u00A0' : char)
  }

  let star1Stars = []
  for (let i = 0; i < stars1.length; i++) {
    const char = stars1[i]
    star1Stars.push(char == ' ' ? '\u00A0' : char)
  }

  let star2Stars = []
  for (let i = 0; i < stars2.length; i++) {
    const char = stars2[i]
    star2Stars.push(char == ' ' ? '\u00A0' : char)
  }

  
  

  return (
    <>
      <div className="h-[80vh] w-[100vw] flex flex-col items-center gap-6">
        <div className="w-[100vw] text-center flex flex-col items-center justify-center gap-2">
          <span aria-hidden="true" className="wave">
            {star1Stars.map((letter, index) => (<span key={index}>{letter}</span>))}
          </span>

          <div>
            <h1 className={poppins.className}>
              <span className="wave text-7xl font-bold text-black absolute translate-x-[-50%] translate-y-3">
                {greetingCharacters.map((letter, index) => (<span key={index}>{letter}</span>))}
              </span>
            </h1>
            <h1 className={poppins.className}>
              <span className="wave text-7xl font-bold text-[#5357d1] absolute translate-x-[-50%] translate-y-2">
                {greetingCharacters.map((letter, index) => (<span key={index}>{letter}</span>))}
              </span>
            </h1>
            <h1 className={poppins.className}>
              <span className="wave text-7xl font-bold text-stroke">
                {greetingCharacters.map((letter, index) => (<span key={index}>{letter}</span>))}
              </span>
            </h1>
          </div>    
      
          <span aria-hidden="true" className="wave">
            {star2Stars.map((letter, index) => (<span key={index}>{letter}</span>))}
          </span>
        </div>

        <div className="text-xl">
          <p className={atkins.className}>
            ✏️ 🔧 📋 🔨  Grow your STEMlings™ one day at a time! 📈 ⚒️ ⚙️ 📝 
          </p>
        </div>

        <div className="flex flex-col gap-4 m-[60px] z-[1]">
          <Button text="get started" link='/onboarding'></Button>
        </div>

        <div className="absolute translate-y-[220px] z-0">
          <Wrapper>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
              <Spline
                className="spline" 
                scene="https://prod.spline.design/CiWvMkFpLyYLJOAE/scene.splinecode"
              />
            {/* </Suspense> */}
          </Wrapper>
          
        </div>

        

      </div>
    </>
    // <>
    //   <Container>
    //     <div className="space-y-6">
    //       <h1 className="text-2xl font-bold">
    //         Hey, I'm a Senior Software Engineer at Company. I enjoy working with
    //         Next.js and crafting beautiful front-end experiences.
    //       </h1>
    //       <p>
    //         This portfolio is built with Next.js and a library called next-mdx.
    //         It allows you to write Markdown and focus on the content of your
    //         portfolio.
    //       </p>

    //       <p>Deploy your own in a few minutes.</p>
    //     </div>
    //   </Container>

    //   <div className="container max-w-4xl m-auto px-4 mt-20">
    //     <Image
    //       src="/desk.jpg"
    //       alt="my desk"
    //       width={1920 / 2}
    //       height={1280 / 2}
    //     />
    //   </div>
    // </>
  );
}

export default HomePage;

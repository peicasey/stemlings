// import { headers } from "./AI_headers";

import { useState } from 'react';


// guys please ignore this i can't think anymore
const headers = {
  'Content-Type': "application/json",
  'X-Auth-Email': "peicasey@gmail.com",
  'X-Auth-Key': "5f1269cf6f67aff9b77bd0b9fee01856d1a46"
  }

const model = "@cf/meta/llama-2-7b-chat-int8"

export default function useComments() {

  const [text, setText] = useState("");

  const onSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    var MESSAGE = [
      {
        role: "system",
        content: "You are a friendly tutor that helps kids learn STEM topics",
      },
      {
        role: "user",
        content:
          "help me god",
      },
    ]

    try {
      await fetch(
        `https://api.cloudflare.com/client/v4/accounts/a4630d62a43d4f9b5c8a7b5861b8ef0b/ai/run/@cf/meta/llama-2-7b-chat-int8`,
        {
          headers: headers,
          method: "POST",
          body: JSON.stringify(MESSAGE),
        }
      )
      .then((response) => {
          console.log(JSON.stringify(response));
          setText(JSON.stringify(response));
      })
      .catch((err) => {
          console.log(err.message);
      });
      // const result = await response.json();
      // return result;
      
    } catch (err) {
      console.log(err);
    } 
  }
  
  return { text, setText, onSubmit };  

}

// run("@cf/meta/llama-2-7b-chat-int8", {
//   messages: [
//     {
//       role: "system",
//       content: "You are a friendly tutor that helps kids learn STEM topics",
//     },
//     {
//       role: "user",
//       content:
//         "Write a short story about a llama that goes on a journey to find an orange cloud",
//     },
//   ],
// }).then((response) => {
//   console.log(JSON.stringify(response));
// });


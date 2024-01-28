import type { NextApiRequest, NextApiResponse } from "next";
import type { Comment } from "../interfaces";
import redis from "./redis";
import { nanoid } from "nanoid";
import getUser from "./getUser";
import clearUrl from "./clearUrl";

export default async function messageAI(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const url = clearUrl(req.headers.referer);
  const { text } = req.body;
  const { authorization } = req.headers;

  if (!text || !authorization) {
    return res.status(400).json({ message: "Missing parameter." });
  }

  if (!redis) {
    return res
      .status(400)
      .json({ message: "Failed to connect to redis client." });
  }

  try {
    // verify user token
    const user = await getUser(authorization);
    if (!user) return res.status(400).json({ message: "Need authorization." });

    const { name, picture, sub, email } = user;

    const comment: Comment = {
      id: nanoid(),
      created_at: Date.now(),
      url,
      text,
      user: { name, picture, sub, email },
    };

    // write data
    await redis.lpush(url, JSON.stringify(comment));

    return res.status(200).json(comment);
  } catch (_) {
    return res.status(400).json({ message: "Unexpected error occurred." });
  }
}

// async function run(model, input) {
//     const response = await fetch(
//       `https://api.cloudflare.com/client/v4/accounts/a4630d62a43d4f9b5c8a7b5861b8ef0b/ai/run/${model}`,
//       {
//         headers: { Authorization: "Bearer {AI_API_TOKEN}" },
//         method: "POST",
//         body: JSON.stringify(input),
//       }
//     );
//     const result = await response.json();
//     return result;
//   }
  
  
//   run("@cf/meta/llama-2-7b-chat-int8", {
//     messages: [
//       {
//         role: "system",
//         content: "You are a friendly tutor assistant that teaches kids STEM topics",
//       },
//       {
//         role: "user",
//         content:
//           "Give a math practice problem and solution for a kid that is 8 years old",
//       },
//     ],
//   }).then((response) => {
//     console.log(JSON.stringify(response));
//   });



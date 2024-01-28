// import { headers } from "./AI_headers";

// guys please ignore this i can't think anymore
const headers = {
  'Content-Type': "application/json",
  'X-Auth-Email': "peicasey@gmail.com",
  'X-Auth-Key': "5f1269cf6f67aff9b77bd0b9fee01856d1a46"
  }

async function run(model, input) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/a4630d62a43d4f9b5c8a7b5861b8ef0b/ai/run/@cf/meta/llama-2-7b-chat-int8`,
    {
      headers: headers,
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}


run("@cf/meta/llama-2-7b-chat-int8", {
  messages: [
    {
      role: "system",
      content: "You are a friendly tutor that helps kids learn STEM topics",
    },
    {
      role: "user",
      content:
        "Write a short story about a llama that goes on a journey to find an orange cloud",
    },
  ],
}).then((response) => {
  console.log(JSON.stringify(response));
});


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
  

export default function testRun() {
    run("@cf/meta/llama-2-7b-chat-int8", {
        messages: [
          {
            role: "system",
            content: "You are a friendly tutor that helps kids learn STEM topics",
          },
          {
            role: "user",
            content:
              "Write a math problem and solution for an 8 year old boy",
          },
        ],
      }).then((response) => {
        console.log(JSON.stringify(response));
      });
}
  
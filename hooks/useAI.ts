async function run(model, input) {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/a4630d62a43d4f9b5c8a7b5861b8ef0b/ai/run/${model}`,
      {
        headers: { Authorization: "Bearer {AI_API_TOKEN}" },
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
        content: "You are a friendly tutor assistant that teaches kids STEM topics",
      },
      {
        role: "user",
        content:
          "Give a math practice problem and solution for a kid that is 8 years old",
      },
    ],
  }).then((response) => {
    console.log(JSON.stringify(response));
  });
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: "Me fale sobre a alemanha em portugues",
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

await main();
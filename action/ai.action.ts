"use server";

import OpenAI from "openai";

const openai = setupOpenAI();
function setupOpenAI() {
  if (!process.env.OPENAI_API_KEY) {
    return new Error("OpenAI API key is not set");
  }
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

export const generateGptResponse = async ({
  userInput,
}: {
  userInput: string;
}) => {
  if (openai instanceof Error) {
    throw openai;
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "you are an expert pharmacist. you will be given a some condition.Your job is to return a best suggestion based on provided content .",
      },
      {
        role: "user",
        content: userInput,
      },
    ],

    temperature: 1,
  });

  const gptArgs = completion?.choices[0]?.message?.content;

  if (!gptArgs) {
    throw new Error("Bad response from OpenAI");
  }

  return JSON.parse(JSON.stringify(gptArgs));
};

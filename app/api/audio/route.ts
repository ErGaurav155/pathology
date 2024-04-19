import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.formData();
  const theFile: File | null = data.get("file") as unknown as File;
  const value1: string | null = data.get("selectTone") as unknown as string;
  const outputlag: string | null = data.get("outputlag") as unknown as string;

  const formData = new FormData();
  formData.append("file", theFile);
  formData.append("model", "whisper-1");
  console.log("i am running in route handler");

  const response = await fetch(
    "https://api.openai.com/v1/audio/transcriptions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: formData,
    }
  );

  const body = await response.json();
  console.log(body);
  const messages = [
    { role: "system", content: "You are a translator." },
    {
      role: "user",
      content: `convert this text- ${body.text} into this language-${outputlag}`,
    },
  ];
  const formData1 = {
    model: "gpt-3.5-turbo",
    messages: messages,
  };
  const completion = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData1),
  });
  const resData = await completion.json();

  // const data = await response.json();

  // Assuming data.choices[0].message.content is a string
  console.log(resData);
  const messageContent = resData.choices[0]?.message?.content;

  console.log(messageContent);
  if (!messageContent) {
    console.log(messageContent, "hi my name ");
    return;
  }

  const formData2 = {
    model: "tts-1",
    voice: value1 as voiceType,
    input: messageContent,
  };
  const response2 = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData2),
  });
  const speechBuffer = Buffer.from(await response2.arrayBuffer());
  const outputFile = path.resolve("/assets/audio/output.mp3");
  await fs.writeFileSync(outputFile, speechBuffer);
  const gptArgs = outputFile;
  console.log(gptArgs);
  if (!gptArgs) {
    throw new Error("Bad response from OpenAI");
  }

  //   return JSON.parse(JSON.stringify(gptArgs));
  return NextResponse.json({ output: gptArgs });
}

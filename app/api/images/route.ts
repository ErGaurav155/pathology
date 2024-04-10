// pages/api/image.ts

import { Url } from "next/dist/shared/lib/router/router";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();
  const Url: string = data.get("item") as string;

  if (!Url) {
    throw new Error("url is missing");
  }
  console.log(Url);

  try {
    const res = await fetch(Url);
    if (!res.ok) {
      throw new Error("Failed to fetch image");
    }
    const buffer = await res.arrayBuffer();
    const array = new Uint8Array(buffer);

    return new NextResponse(array, {
      headers: { "Content-Type": "image/png" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    NextResponse.json({ error: "Internal server error" });
  }
}

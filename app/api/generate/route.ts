import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("🔥 HIT: /api/generate");

  try {
    const { prompt } = await req.json();
    console.log("Prompt received:", prompt);

    const response = await fetch(
      "https://router.huggingface.co/black-forest-labs/FLUX.1-schnell",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "HF-API-KEY": process.env.HF_TOKEN!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
        }),
      }
    );

    console.log("HF Status:", response.status);

    if (!response.ok) {
      const error = await response.text();
      console.error("❌ HF ERROR:", error);
      return NextResponse.json(
        { error: "HF_MODEL_ERROR", details: error },
        { status: 500 }
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    console.log("Image size:", arrayBuffer.byteLength);

    return new Response(arrayBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("❌ SERVER ERROR:", err);
    return NextResponse.json(
      { error: "SERVER_ERROR", details: `${err}` },
      { status: 500 }
    );
  }
}

"use client";

import { useState } from "react";

export default function HFAvatarGenerator({ onGenerated }: { onGenerated: (img: string) => void }) {
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);

    const prompt = `
      create a blended avatar image: combine the user's profile picture 
      (short blonde hair, light skin tone) with jesse pollak's style – 
      confident expression, tech look, subtle Base blockchain background,
      digital-art, high detail.
    `;

    const res = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/sdxl-turbo",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    onGenerated(url);
    setLoading(false);
  }

  return (
    <button
      onClick={generate}
      className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm"
    >
      {loading ? "Generating..." : "Generate Avatar"}
    </button>
  );
}

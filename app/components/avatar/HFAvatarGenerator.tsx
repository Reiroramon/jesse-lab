"use client";

import { useState } from "react";

export default function HFAvatarGenerator({
  onGenerated,
}: {
  onGenerated: (img: string) => void;
}) {
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);

    const prompt = `
      create a blended avatar image: combine the user's profile picture 
      (short blonde hair, light skin tone) with jesse pollak's style –
      confident expression, tech look, subtle Base blockchain background,
      digital-art, high detail.
    `;

    try {
      // ⬇️ CALL KE API ROUTE (bukan direct HuggingFace)
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("HF Proxy Error:", errorText);
        setLoading(false);
        return;
      }

      const blob = await res.blob();

      if (blob.size === 0) {
        console.error("Generated image is empty.");
        setLoading(false);
        return;
      }

      const url = URL.createObjectURL(blob);
      onGenerated(url);
    } catch (err) {
      console.error("Generate Error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={generate}
      className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm"
      disabled={loading}
    >
      {loading ? "Generating..." : "Generate Avatar"}
    </button>
  );
}

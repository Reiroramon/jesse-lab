"use client";

import { useState } from "react";
import HFAvatarGenerator from "./HFAvatarGenerator";
import AvatarModal from "./AvatarModal";

export default function AvatarButton() {
  const [img, setImg] = useState<string | null>(null);

  return (
    <>
      <HFAvatarGenerator onGenerated={(image) => setImg(image)} />

      {img && <AvatarModal image={img} onClose={() => setImg(null)} />}
    </>
  );
}

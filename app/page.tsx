"use client";

import { useState } from "react";
import { Wallet } from "@coinbase/onchainkit/wallet";

// Type untuk fitur premium
type PremiumFeature = {
  name: string;
  icon: string;
  price: string;
  desc: string;
};

export default function JesseLabHome() {
  const [showModal, setShowModal] = useState(false);
  const [activeFeature, setActiveFeature] =
    useState<PremiumFeature | null>(null);

  const premiumFeatures: PremiumFeature[] = [
    { name: "Mint NFT", icon: "💎", price: "5 $JESSE", desc: "Mint your creation directly on Base." },
    { name: "FX Filters", icon: "✨", price: "3 $JESSE", desc: "Unlock premium Jesse-style filters." },
    { name: "Avatar Upgrade", icon: "👑", price: "7 $JESSE", desc: "Upgrade your Jesse avatar with rare traits." },
    { name: "Remove Watermark", icon: "🧽", price: "2 $JESSE", desc: "Remove branding watermark instantly." },
    { name: "Export HD", icon: "⬇️", price: "4 $JESSE", desc: "Get high-resolution export for your content." },
  ];

  const openModal = (item: PremiumFeature) => {
    setActiveFeature(item);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0052FF] to-white">

      {/* NAVBAR */}
      <nav className="backdrop-blur-md bg-white/50 border-b border-black/5 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="font-bold text-lg">JESSE LAB</h1>

        {/* WRAPPER AGAR WALLET RAPIH */}
        <div className="flex items-center gap-3 shrink-0">
          <Wallet />
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 py-16">
        <h1 className="text-4xl font-extrabold text-black drop-shadow">
          Showcase your creation on Base
        </h1>
        <p className="mt-3 text-gray-700">
          Create, remix, and mint — powered by $jesse.
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl text-lg">
          Start Creating
        </button>

        <a href="#showcase" className="block mt-4 text-blue-700">Browse showcase →</a>
      </section>

      {/* CREATOR FEED */}
      <section id="showcase" className="px-6 mb-10">
        <h2 className="text-2xl font-bold mb-5">Creator Showcase</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-full h-[420px] bg-white rounded-2xl shadow-lg p-4 flex flex-col"
            >
              <div className="h-40 w-full bg-gray-200 rounded-xl mb-3"></div>

              <h3 className="font-bold text-xl">Creator {i}</h3>

              <p className="italic text-gray-600 text-sm line-clamp-2">
                Just making Jesse-style creations on Base ✨
              </p>

              <div className="mt-auto h-28 w-full bg-gray-100 rounded-xl"></div>

              {i % 2 === 0 && (
                <div className="mt-2 text-xs font-semibold text-yellow-600 bg-yellow-200 px-3 py-1 rounded-full text-center shadow-lg shadow-yellow-200/50">
                  ⭐ Premium Unlocked
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM FEATURES */}
      <section className="px-6 mb-20">
        <h2 className="text-2xl font-bold mb-4">Premium Features</h2>

        <div className="flex gap-4 overflow-x-auto pb-3 snap-x">
          {premiumFeatures.map((item) => (
            <button
              key={item.name}
              onClick={() => openModal(item)}
              className="snap-start min-w-[120px] bg-white rounded-xl shadow p-4 flex flex-col items-center text-center"
            >
              <div className="text-4xl">{item.icon}</div>
              <div className="font-semibold mt-2">{item.name}</div>
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto py-6 text-center text-gray-600 text-sm">
        <a href="#" className="mx-2">Docs</a>
        <a href="#" className="mx-2">Discord</a>
        <a href="#" className="mx-2">Twitter</a>
      </footer>

      {/* MODAL */}
      {showModal && activeFeature && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-80 shadow-xl">
            <h3 className="font-bold text-xl">{activeFeature.name}</h3>
            <p className="mt-2 text-gray-600">{activeFeature.desc}</p>

            <div className="mt-4 font-bold text-black">
              Price: {activeFeature.price}
            </div>

            <button
              className="mt-6 bg-blue-600 text-white w-full py-3 rounded-xl"
              onClick={() => setShowModal(false)}
            >
              Buy with $JESSE
            </button>

            <button
              className="mt-3 w-full py-2 text-gray-600"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

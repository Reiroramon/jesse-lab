"use client";

import { Wallet } from "@coinbase/onchainkit/wallet";

export function WalletBox() {
  return (
    <div className="flex items-center justify-end">
      <Wallet
        className="!bg-white/80 !backdrop-blur-md !px-4 !py-2 !rounded-xl !shadow"
      />
    </div>
  );
}

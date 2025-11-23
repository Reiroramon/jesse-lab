"use client";

import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./wagmi";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "wagmi/chains";
import { SafeArea } from "@coinbase/onchainkit/minikit";
import { RootProvider } from "./rootProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <OnchainKitProvider
        chain={base}
        analytics={false}
        miniKit={{
          enabled: true,
          autoConnect: true
        }}
      >
        <RootProvider>
          <SafeArea>
            {children}
          </SafeArea>
        </RootProvider>
      </OnchainKitProvider>
    </WagmiProvider>
  );
}

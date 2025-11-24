"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "./wagmi";

import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "wagmi/chains";
import { SafeArea } from "@coinbase/onchainkit/minikit";

import { RootProvider } from "./rootProvider";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          chain={base}
          analytics={false}
          miniKit={{
            enabled: true,
            autoConnect: true, // auto-connect di Miniapp + Base App
          }}
        >
          <RootProvider>
            <SafeArea>
              {children}
            </SafeArea>
          </RootProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

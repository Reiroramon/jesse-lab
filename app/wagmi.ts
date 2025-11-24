// app/wagmi.ts
import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { farcasterMiniApp } from "@farcaster/miniapp-wagmi-connector";
import { coinbaseWallet, injected } from "wagmi/connectors";

// DETECT FARCASTER MINIAPP ENV
const isFarcasterMiniApp =
  typeof window !== "undefined" &&
  window.parent !== window &&
  navigator.userAgent.includes("Farcaster");

export const wagmiConfig = createConfig({
  chains: [base],

  connectors: isFarcasterMiniApp
    ? [
        // FARCASTER MODE (iframe → NO popup)
        farcasterMiniApp(),
      ]
    : [
        // NORMAL MODE (Base App, web, dll)
        injected({ shimDisconnect: true }),
        coinbaseWallet({
          appName: "My Miniapp",
          chainId: base.id,
        }),
      ],

  transports: {
    [base.id]: http(),
  },
});

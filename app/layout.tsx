// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { minikitConfig } from "../minikit.config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Jesse Hub — ${minikitConfig.miniapp.name}`,
    description: minikitConfig.miniapp.description,
    other: {
      "fc:frame": JSON.stringify({
        version: minikitConfig.miniapp.version,
        imageUrl: minikitConfig.miniapp.heroImageUrl,
        button: {
          title: `Open Jesse Hub`,
          action: {
            name: `Launch ${minikitConfig.miniapp.name}`,
            type: "launch_frame",
          },
        },
      }),
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const code = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${inter.variable} ${code.variable} bg-white text-black min-h-screen flex flex-col`}
      >
        {/* Wrap all client-side providers */}
        <Providers>
          <main className="flex-1 flex flex-col">{children}</main>
        </Providers>

        <footer className="py-4 text-center text-sm text-black/40">
          Powered by Base • Jesse Hub © 2025
        </footer>
      </body>
    </html>
  );
}

const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * MiniApp configuration object for Jesse Hub.
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjM5MDQwMywidHlwZSI6ImF1dGgiLCJrZXkiOiIweDE5YzBjQmVBRTg4MTQ3NmM4MzhkYTNlMjFhREIzRmM0NzU1MjVBRTUifQ",
    payload: "eyJkb21haW4iOiJqZXNzZS1sYWItcGllZC52ZXJjZWwuYXBwIn0",
    signature: "F4LEXFNuLQ4BjBiZcqdT/FqmtWgkWpseOG71f5mBOpojYrYah4uyKKuV0R5xhiNewvKy/v1S9RRe0izv5znJQRs=",
  },

  miniapp: {
    version: "1",

    // — Branding —
    name: "Jesse Hub",
    subtitle: "AI Creator Tools",
    description: "Create, remix, and mint Jesse-style content on Base.",

    // — Assets —
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",

    // — Core links —
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,

    // — Store & search metadata —
    primaryCategory: "social",
    tags: ["creator", "nft", "remix", "ai"],

    // — Hero Section —
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "Create Jesse-style content instantly",

    // — OG preview —
    ogTitle: "Jesse Hub – Create and Remix on Base",
    ogDescription: "AI-powered creator tools to remix your content instantly.",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

import type { Metadata } from "next";
import "./globals.css";

const title = "Cost Per Lease — The New Economics of Occupancy";
const description =
  "The open framework for measuring and improving profitable occupancy. Explore the Cost Per Lease standard, book, research, benchmarks, and Occupancy Intelligence.";
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://costperlease.com"
).replace(/\/$/, "");
const publicPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "cost per lease",
    "occupancy intelligence",
    "profitable occupancy",
    "multifamily economics",
    "leasing operations",
    "property performance",
  ],
  authors: [{ name: "Cost Per Lease" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Cost Per Lease",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Cost Per Lease — Measure what occupancy costs. Optimize what it earns.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og.png`],
  },
  icons: {
    icon: [{ url: `${publicPath}/favicon.svg`, type: "image/svg+xml" }],
    shortcut: `${publicPath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Source Code | Lightweight Libraries - CompiledBox',
  description: "Our open source code simplifying development. We are excited to introduce our open-source library, designed for speed, efficiency, and seamless integration.",
  authors: [
    { name: "Chandrashekhar Fakirpure" },
    { name: "CompiledBox", url: "https://compiledbox.com/open-source" },
  ],
  alternates: {
    canonical: "https://compiledbox.com/open-source,",
  },
  category: "technology",
  openGraph: {
    title: "Open Source Code | Lightweight Libraries - CompiledBox",
    description:
      "Our open source code simplifying development. We are excited to introduce our open-source library, designed for speed, efficiency, and seamless integration.",
    url: "https://compiledbox.com/open-source",
    siteName: "CompiledBox",
    images: [
      {
        url: "https://compiledbox.com/images/open-source-compiledbox.png",
        width: 1200,
        height: 630,
        alt: "web designing partner CompiledBox",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Code | Lightweight Libraries - CompiledBox",
    description:
      "Our open source code simplifying development. We are excited to introduce our open-source library, designed for speed, efficiency, and seamless integration.",
    creator: "@compiledbox",
    images: [
      "https://compiledbox.com/images/open-source-compiledbox.png",
    ],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}
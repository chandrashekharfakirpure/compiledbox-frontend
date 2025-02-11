import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Web Design Pricing Packages - CompiledBox',
  description: "Explore our transparent pricing options for custom web design services. Our affordable packages deliver innovative, responsive websites tailored to business.",
  authors: [
    { name: "Chandrashekhar Fakirpure" },
    { name: "CompiledBox", url: "https://compiledbox.com/pricing" },
  ],
  alternates: {
    canonical: "https://compiledbox.com/pricing,",
  },
  category: "technology",
  openGraph: {
    title: "Custom Web Design Pricing Packages - CompiledBox",
    description:
      "Explore our transparent pricing options for custom web design services. Our affordable packages deliver innovative, responsive websites tailored to business.",
    url: "https://compiledbox.com/pricing",
    siteName: "CompiledBox",
    images: [
      {
        url: "https://compiledbox.com/images/contact-us-compiledbox.png",
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
    title: "Custom Web Design Pricing Packages - CompiledBox",
    description:
      "Explore our transparent pricing options for custom web design services. Our affordable packages deliver innovative, responsive websites tailored to business.",
    creator: "@compiledbox",
    images: [
      "https://compiledbox.com/images/contact-us-compiledbox.png",
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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Custom Web Design Agency - CompiledBox',
  description: "Learn about our passionate team of digital innovators—a custom web design agency committed to crafting responsive, engaging websites",
  authors: [
    { name: "Chandrashekhar Fakirpure" },
    { name: "CompiledBox", url: "https://compiledbox.com/agency" },
  ],
  alternates: {
    canonical: "https://compiledbox.com/agency,",
  },
  category: "technology",
  openGraph: {
    title: "About Us - Custom Web Design Agency - CompiledBox",
    description:
      "Learn about our passionate team of digital innovators—a custom web design agency committed to crafting responsive, engaging websites.",
    url: "https://compiledbox.com/agency",
    siteName: "CompiledBox",
    images: [
      {
        url: "https://compiledbox.com/images/about-agency.png",
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
    title: "About Us - Custom Web Design Agency - CompiledBox",
    description:
      "Learn about our passionate team of digital innovators—a custom web design agency committed to crafting responsive, engaging websites.",
    creator: "@protonservers",
    images: [
      "https://compiledbox.com/images/about-agency.png",
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
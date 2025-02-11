import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Custom Web Design Agency - CompiledBox',
  description: "Contact us and book a free consultation for your project. We'll custom design your vision in web.",
  authors: [
    { name: "Chandrashekhar Fakirpure" },
    { name: "CompiledBox", url: "https://compiledbox.com/contact" },
  ],
  alternates: {
    canonical: "https://compiledbox.com/contact,",
  },
  category: "technology",
  openGraph: {
    title: "Contact Us - Custom Web Design Agency - CompiledBox",
    description:
      "Contact us and book a free consultation for your project. We'll custom design your vision in web.",
    url: "https://compiledbox.com/contact",
    siteName: "CompiledBox",
    images: [
      {
        url: "https://compiledbox.com/images/contact.png",
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
    title: "Contact Us - Custom Web Design Agency - CompiledBox",
    description:
      "Contact us and book a free consultation for your project. We'll custom design your vision in web.",
    creator: "@compiledbox",
    images: [
      "https://compiledbox.com/images/contact.png",
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
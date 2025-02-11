import { Navbar } from "@/components/nav-bar";
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/footer";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", '400', '500', '600', '700', '800', "900"],
  variable: "--font-sora",
});
export const metadata: Metadata = {
  title: "Custom Web Design & App Development Agency - CompiledBox",
  description: "We are web design agency specializing in responsive, modern website design. Our expert team crafts tailor-made solutions that deliver exceptional user experiences.",
  keywords: [
    "Custom Web Design Agency",
    "Responsive Website Design Services",
    "Professional Website Design",
    "Modern Web Design Agency",
    "Tailor-Made Website Design",
    "Creative Web Design Solutions",
    "Mobile Friendly Website Design",
    "SEO Friendly Web Design",
    "Nextjs Web Design Services",
    "Expert Web Design Company",
  ],
  authors: [
    { name: "Chandrashekhar Fakirpure" },
    { name: "CompiledBox", url: "https://compiledbox.com" },
  ],
  alternates: {
    canonical: "https://compiledbox.com",
  },
  category: "technology",
  openGraph: {
    title: "Custom Web Design & App Development Agency - CompiledBox",
    description:
      "We are web design agency specializing in responsive, modern website design. Our expert team crafts tailor-made solutions that deliver exceptional user experiences.",
    url: "https://compiledbox.com",
    siteName: "Proton Servers",
    images: [
      {
        url: "https://compiledbox.com/assets/images/og/og-image-proton-servers.jpg",
        width: 1200,
        height: 630,
        alt: "Your IT Infrastructure Partner Proton Servers",
      },
      {
        url: "https://compiledbox.com/assets/images/og/og-image-proton-servers-alt.jpg",
        width: 600,
        height: 315,
        alt: "Your IT Infrastructure Partner Proton Servers Alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Design & App Development Agency - CompiledBox",
    description:
      "We are web design agency specializing in responsive, modern website design. Our expert team crafts tailor-made solutions that deliver exceptional user experiences.",
    creator: "@protonservers",
    images: [
      "https://compiledbox.com/assets/images/og/og-image-proton-servers.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.className} antialiased bg-[#f5f5f5]`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

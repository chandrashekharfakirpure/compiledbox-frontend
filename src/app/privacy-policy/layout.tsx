import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - CompiledBox',
  description: "Learn more about our privacy policy",
  authors: [
    { name: "Chandrashekhar Fakirpure" },
    { name: "CompiledBox", url: "https://compiledbox.com" },
  ],
  alternates: {
    canonical: "https://compiledbox.com/privacy-policy,",
  }
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
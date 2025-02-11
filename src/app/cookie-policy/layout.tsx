import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy - CompiledBox',
  description: "Learn more about our cookies policy",
  authors: [
    { name: "Chandrashekhar Fakirpure" },
    { name: "CompiledBox", url: "https://compiledbox.com" },
  ],
  alternates: {
    canonical: "https://compiledbox.com/cookie-policy,",
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
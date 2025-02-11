import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - CompiledBox',
  description: "Learn more about our terms of service",
  authors: [
    { name: "Chandrashekhar Fakirpure" },
    { name: "CompiledBox", url: "https://compiledbox.com" },
  ],
  alternates: {
    canonical: "https://compiledbox.com/terms-of-service,",
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
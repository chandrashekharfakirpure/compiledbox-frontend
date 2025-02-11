import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog is under development | Coming Soon - CompiledBox',
  description: "Blog is under development | Coming Soon",
  authors: [
    { name: "Chandrashekhar Fakirpure" },
    { name: "CompiledBox", url: "https://compiledbox.com/blog" },
  ],
  alternates: {
    canonical: "https://compiledbox.com/blog,",
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
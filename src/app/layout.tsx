import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Big Pandan | AI Voice Agent for Merchants",
  description: "Let Big Pandan handle your calls, so you can focus on what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-light text-neutral-dark font-sans">
        {children}
      </body>
    </html>
  );
}

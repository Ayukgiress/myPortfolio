import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayuk Giress | Full Stack Developer",
  description: "Portfolio of Ayuk Giress, a passionate Full Stack Developer creating amazing web experiences.",
  keywords: "Full Stack Developer, Web Developer, React, Next.js, Portfolio",
  authors: [{ name: "Ayuk Giress" }],
  creator: "Ayuk Giress",
  openGraph: {
    title: "Ayuk Giress | Full Stack Developer",
    description: "Portfolio of Ayuk Giress, a passionate Full Stack Developer creating amazing web experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

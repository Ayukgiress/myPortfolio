import type { Metadata } from "next";
import { Inter, Roboto_Mono, Roboto_Condensed } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "./components/I18nProvider";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} antialiased`}
      >
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

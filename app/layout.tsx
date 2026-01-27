import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlausibleProvider from "next-plausible";
import { ReactQueryClientProvider } from "@/lib/reactqueryclient";

// Choose a single premium font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MUJ Toppers",
  description:
    "MUJ toppers is built to make your college life easier—Access, PYQs, toppers' notes, study tips, food delivery, and cab booking all in one place, powered by a passionate mix who have been through it. We ensure you have everything you need to excel—both inside and outside the classroom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-200/50`}
      >
        <PlausibleProvider domain="mujtoppers.in">
          <Navbar />
          {children}
          <Footer />
        </PlausibleProvider>
      </body>
    </html>
    </ReactQueryClientProvider>
  );
}

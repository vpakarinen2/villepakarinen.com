import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Ville Pakarinen | AI Architect",
  description: "AI Engineering and Architecture Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-background text-foreground h-screen overflow-hidden flex flex-col`}>
        <Navbar /> 
        <main className="flex-grow flex flex-col justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

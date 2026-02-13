import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Ville Pakarinen | AI Engineer & Architect",
  description: "AI Engineering and Architecture Portfolio",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        {/* Navbar is fixed, so it stays on top */}
        <Navbar /> 
        
        {/* We add pt-16 (64px) to push content down below the fixed Navbar */}
        <main className="flex-grow flex flex-col pt-16">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}

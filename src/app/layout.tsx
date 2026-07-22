import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Karman Singh | Full Stack Developer",
  description: "Portfolio of Karman Singh, a Software Engineer specializing in MERN, Cloud, and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-accent-1/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

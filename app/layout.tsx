import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suruchi Bista — Data Analyst & AI Enthusiast",
  description:
    "Portfolio of Suruchi Bista — Data & BI Analyst, 2× Hackathon Winner, Microsoft and AWS Certified. Turning messy data into actionable insights.",
  keywords: [
    "data analyst",
    "business intelligence",
    "Power BI",
    "Python",
    "SQL",
    "machine learning",
    "Suruchi Bista",
  ],
  authors: [{ name: "Suruchi Bista" }],
  openGraph: {
    title: "Suruchi Bista — Data Analyst & AI Enthusiast",
    description:
      "Turning messy data into actionable insights and building intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} ${mono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/component/layout/footer";
import Header from "@/component/layout/header";
// import Header from "@/component/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yugen Space",
  description: "Making Earth Observation Simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Yugen Space is a space-tech startup aimed at making Earth Observation simple. Through our AI satellite analysis platform and proprietary hyperspectral satellites, we want to empower every individual on the planet with space data - starting with the use case of soil monitoring."
        />
        {/* You can add more SEO meta tags here if needed */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

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
  title: "Yugen Space: AI-powered Earth Observation",
  description:
    "Yugen Space makes Earth Observation accessible via AI & hyperspectral satellites. Transforming space data into actionable insights—beginning with soil health.",
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
          content="Yugen Space makes Earth Observation accessible via AI & hyperspectral satellites. Transforming space data into actionable insights—beginning with soil health."
        />
        <meta
          name="google-site-verification"
          content="CFb6lH1520qEWRbWXGELUn0hoNXdxnG4637a5iqwN1c"
        />
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

import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uptiza - Construction Equipment & Machinery Rental in UAE",
  description:
    "We offer hydraulic cranes, forklifts, trailers, boom loaders and excavators for hire, along with professional consultation and international trading services.",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Uptiza",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}

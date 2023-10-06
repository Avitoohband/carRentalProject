import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import {Toaster} from 'react-hot-toast'

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center"/>
        </body>
    </html>
  );
}

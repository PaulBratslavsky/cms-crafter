import 'swiper/css/bundle';
import "../../public/css/navbar.css";
import "../../public/css/boxicons.min.css";
import "./globals.css";

import type { Metadata } from "next";
import { Figtree, Outfit } from "next/font/google";
import BackToTop from '@/components/Layout/BackToTop';
import AosAnimation from '@/components/Layout/AosAnimation';
import RtlDemoSidebar from '@/components/Layout/RtlDemoSidebar';

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adla - Tailwind Nextjs Ads & PPC Agency Template",
  description: "Tailwind Nextjs Ads & PPC Agency Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${outfit.variable}`}>
      <body>
        {children}

        {/* BackToTop */}
        <BackToTop />

        {/* AosAnimation */}
        <AosAnimation />

        {/* RtlDemoSidebar */}
        <RtlDemoSidebar />
      </body>
    </html>
  );
}

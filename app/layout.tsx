import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rudhra Farm | Premium Naatu Guddu & Farm Fresh Poultry",
  description: "Pure country eggs, farm-raised chickens and fresh daily supply delivered to your doorstep. SNG Groups.",
  openGraph: {
    title: "Rudhra Farm | Premium Naatu Guddu & Farm Fresh Poultry",
    description: "Pure country eggs, farm-raised chickens and fresh daily supply delivered to your doorstep.",
    url: "https://rudhrafarm.com",
    siteName: "Rudhra Farm",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1 mt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

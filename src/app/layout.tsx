import type { Metadata } from "next";
import { Roboto, Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title:
    "Imperial Madeiz Limited | Alkebulan City Ghana Smart City & Construction Experts",
  description:
    "Official website of Imperial Madeiz Limited (Medeiz Limited), spearheading the 2,000+ acre multi-billion-dollar Alkebulan City Ghana Development Project at Agave-Dzebetato, South Tongu District, Volta Region. Led by Founder & CEO Dr. Delorn Madeiz and Executive Director Mrs. Anael Madeiz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${inter.variable} ${robotoSlab.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#7A7A7A] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


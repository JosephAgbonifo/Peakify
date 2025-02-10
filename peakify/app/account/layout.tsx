import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "../globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Peakify",
  description: "Your Surest resource platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${nunito.variable} antialiased`}>
        <Header />
        <div className="p-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

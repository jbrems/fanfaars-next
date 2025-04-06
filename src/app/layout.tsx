import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fanfare Blaasveld",
  description: "Koninklijke Fanfare De Vrienden Van 't Recht VZW Blaasveld",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <Header />
        <main className="p-8">
          {children}
        </main>
      </body>
    </html>
  );
}

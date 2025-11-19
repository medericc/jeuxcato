import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Jeux Catholiques — Juste Un, Trivia Biblique, l\'Apostat',
  description: 'Découvrez des jeux avec le christianisme.',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  keywords: ['jeux', 'foi chrétienne', 'Jeux catholiques'],
  openGraph: {
    title: 'Jeux Catholiques',
    description: 'Découvrez des jeux avec le christianisme',
    url: 'https://jeux-catholiques.vercel.app/',
    siteName: 'Jeux Catholiques',
    images: [
      {
        url: 'https://jeux-catholiques.vercel.app/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeux Catholiques',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeux Catholiques',
    description: 'Découvrez des jeux avec le christianisme',
    images: ['https://jeux-catholiques.vercel.app/og-image.jpg'],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
          <Analytics />
      </body>
    </html>
  );
}

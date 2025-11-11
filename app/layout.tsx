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
  title: 'Ressources Catholiques — Vie des Saints, Docteurs de l’Église, Défense de la Foi',
  description: 'Découvrez la vie des saints, les écrits des docteurs de l’Église et défendez la vérité catholique avec des ressources fiables et inspirantes.',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  keywords: ['saints', 'docteurs de l’église', 'théologie catholique', 'hérésies', 'foi chrétienne', 'ressources catholiques'],
  openGraph: {
    title: 'Ressources Catholiques',
    description: 'Découvrez la vie des saints, les écrits des docteurs et les ressources pour défendre la foi.',
    url: 'https://app-catholique.vercel.app/',
    siteName: 'Ressources Catholiques',
    images: [
      {
        url: 'https://app-catholique.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ressources Catholiques',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ressources Catholiques',
    description: 'Découvrez la vie des saints, les écrits des docteurs et combattez les hérésies.',
    images: ['https://app-catholique.vercel.app/og-image.jpg'],
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

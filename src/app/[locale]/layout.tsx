import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuri Almeida",
  description: "My personal website",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}
      suppressHydrationWarning>
      <body className='scroll-smooth '>
        <Toaster />
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

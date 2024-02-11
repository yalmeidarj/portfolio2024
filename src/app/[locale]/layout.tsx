import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";

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
      <body className=' bg-gray-100 dark:bg-slate-800'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

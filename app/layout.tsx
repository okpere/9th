import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import GlobalLayout from '@/components/layout';
import { Lato } from 'next/font/google';

export const metadata: Metadata = {
  title: '9th tech limited -  your number one global online marketplace',
  description:
    '9th Marketplace is set to become your go-to global online marketplace for construction materials and fixtures tailored to your unique lifestyle',
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
  adjustFontFallback: false,
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${lato.variable} overscroll-none`}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}

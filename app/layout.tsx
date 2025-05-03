import type { Metadata } from 'next';
import './globals.css';
import GlobalLayout from '@/components/layout';
import { Lato } from 'next/font/google';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '9th tech limited - your number one global online marketplace',
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
      <head>
        {/* Add any additional <meta> tags here if needed */}
        <link rel='icon' type='image/svg+xml' href='/iconNow.svg' />

        <Script
          id='tawk-to'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function () {
                var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/68161e0e2a5b77190ef24b81/1iqb6aqpg';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </head>
      <body className={`${lato.variable} overscroll-none`}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}

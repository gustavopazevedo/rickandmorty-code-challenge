import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Providers } from '@/providers/Providers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rick and Morty characters',
  description: 'This is a list of Rick and Morty characters',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen w-full">
            <header className="w-full px-4 lg:px-6">
              <div className="m-auto w-full pt-4 lg:pt-6 min-2xl:max-w-7xl">
                <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  Rick and Morty Dashboard
                </h1>
                <p>Character overview and location distribution</p>
              </div>
            </header>
            <div className="bg-background p-4 lg:p-6">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

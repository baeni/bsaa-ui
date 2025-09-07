import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/_assets/globals.css';
import SmoothScrolling from '@/app/_components/SmoothScrolling';
import Navbar from '@/app/_components/Navbar/Navbar';
import Footer from '@/app/_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'bsaa — Fullstack developer',
  description: 'Fullstack developer crafting code – with a passion for design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen container`}
      >
        <SmoothScrolling>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import localFont from 'next/font/local';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Kadu',
  icons: {
    icon: '/favicons/fahrzeug.png',
    shortcut: '/favicons/fahrzeug.png',
    apple: '/favicons/fahrzeug.png',
  },
};

const barlow = localFont({
  src: [
    {
      path: '../public/fonts/Barlow-Black.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Barlow-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Barlow-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Barlow-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Barlow-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Barlow-BoldItalic.ttf',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-barlow',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de' className='scroll-smooth flex flex-col min-h-screen'>
      <body className={`${barlow.className} flex-1 flex flex-col`}>{children}</body>
    </html>
  );
}

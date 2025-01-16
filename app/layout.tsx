import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import { nanumMyungjo, nanumPen } from './font';

import LoginModal from '@/components/LoginModal';
import SignUpModal from '@/components/SignUpModal';
import HamModal from '@/components/HamModal';

export const metadata: Metadata = {
  title: 'today`s log',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nanumMyungjo.variable} ${nanumPen.variable}`}>
      <body>
        <HamModal />
        <LoginModal />
        <SignUpModal />
        <NavBar />
        {children}
      </body>
    </html>
  );
}

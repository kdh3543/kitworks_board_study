import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import { nanumMyungjo, nanumPen } from './font';

import Modal from '@/components/Modal';

export const metadata: Metadata = {
  title: '오늘의 기록',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nanumMyungjo.variable} ${nanumPen.variable}`}>
      <body>
        <Modal />
        <NavBar />
        {children}
      </body>
    </html>
  );
}

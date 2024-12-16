import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '오늘의 기록',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import { Nanum_Pen_Script, Nanum_Myeongjo, Inter } from 'next/font/google';

export const nanumPen = Nanum_Pen_Script({
  preload: false,
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-nanumPen',
});

export const nanumMyungjo = Nanum_Myeongjo({
  preload: false,
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-nanumMyungjo',
});

export const inter = Inter({
  preload: false,
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-inter',
});

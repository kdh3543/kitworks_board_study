import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { nanumMyungjo, nanumPen } from "./font";

import LoginModal from "@/components/LoginModal";
import SignUpModal from "@/components/SignUpModal";
import HamModal from "@/components/HamModal";
import BookModal from "@/components/BookModal";
import DiaryModal from "@/components/DiaryModal";
import { ThemeProvider } from "@/components/theme-provider";
import DarkMode from "@/components/DarkMode";

export const metadata: Metadata = {
  title: "today`s log",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nanumMyungjo.variable} ${nanumPen.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HamModal />
          <LoginModal />
          <SignUpModal />
          <BookModal />
          <DiaryModal />
          <NavBar />
          {children}
          <DarkMode />
        </ThemeProvider>
      </body>
    </html>
  );
}

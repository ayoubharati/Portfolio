import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AYOUB HARATI - SOFTWARE ENGINEERING",
  description: "Passionate FullStack Web Developer from Bangalore, pushing the boundaries of web technology to create immersive digital experiences.",
};

import Header from '@/components/sections/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

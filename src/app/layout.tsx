import { Fira_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const firaMono = Fira_Mono({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaMono.className}>{children}</body>
    </html>
  );
}

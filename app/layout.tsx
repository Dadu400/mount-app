import type { Metadata } from "next";
import "./globals.css";
import Icon from "../public/favicon.ico";

export const metadata: Metadata = {
  title: "MOUNT - Your Ultimate Ski Resort Companion",
  description: "Book ski passes, find equipment, and explore mountain destinations all in one place.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={Icon.src} sizes="192x192" />
      </head>
      <body className="font-Avenir">
        {children}
      </body>
    </html>
  );
}

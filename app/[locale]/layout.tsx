import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Icon from "../../public/favicon.ico";

export const metadata: Metadata = {
  title: "MOUNT - Your Ultimate Ski Resort Companion",
  description: "Book ski passes, find equipment, and explore mountain destinations all in one place.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}

export default async function RootLayout({ children, params: paramsPromise }: RootLayoutProps) {
  const params = await paramsPromise;
  const { locale } = params;

  if (!routing.locales.includes(locale as "en" | "ka")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href={Icon.src} sizes="192x192" />
      </head>
      <body className="font-Avenir">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
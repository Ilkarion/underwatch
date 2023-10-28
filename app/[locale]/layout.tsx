import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Underwatch',
  description: 'To create a competitive overwatch scene in Europe for lower level players too'
}
const locales = ['en', 'pl', 'uk', 'ru'];
export default function RootLayout({children, params: {locale}}:{children: React.ReactNode, params: { locale: string }}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

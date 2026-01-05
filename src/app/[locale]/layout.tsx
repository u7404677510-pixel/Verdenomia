import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { locales, type Locale } from '@/i18n/config'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: {
    default: 'Verdenomia - Aislamiento 100% Gratis con CAE',
    template: '%s | Verdenomia',
  },
  description:
    'Aísla el suelo de tu buhardilla 100% gratis gracias a los Certificados de Ahorro Energético (CAE). Sin coste, sin compromiso. Ahorra hasta un 30% en tu factura energética.',
  keywords: [
    'aislamiento gratis',
    'CAE',
    'certificados ahorro energético',
    'aislamiento buhardilla',
    'eficiencia energética',
    'aislamiento 0 euros',
    'isolation gratuite',
    'free insulation',
  ],
  authors: [{ name: 'Verdenomia' }],
  creator: 'Verdenomia',
  publisher: 'Verdenomia',
  metadataBase: new URL('https://verdenomia.es'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://verdenomia.es',
    title: 'Verdenomia - Aislamiento 100% Gratis con CAE',
    description:
      'Aísla el suelo de tu buhardilla 100% gratis gracias a los CAE. Ahorra hasta un 30% en tu factura.',
    siteName: 'Verdenomia',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  
  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Get messages for the locale
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#16a34a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}


import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    'aislamiento soplado',
    'lana mineral',
    'ahorro energético',
    'España',
  ],
  authors: [{ name: 'Verdenomia' }],
  creator: 'Verdenomia',
  publisher: 'Verdenomia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://verdenomia.es'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://verdenomia.es',
    title: 'Verdenomia - Aislamiento 100% Gratis con CAE',
    description:
      'Aísla el suelo de tu buhardilla 100% gratis gracias a los CAE. Ahorra hasta un 30% en tu factura.',
    siteName: 'Verdenomia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Verdenomia - Aislamiento 100% financiado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdenomia - Aislamiento 100% Gratis',
    description: 'Aísla tu buhardilla gratis con los CAE',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#16a34a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

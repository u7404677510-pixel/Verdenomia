import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

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
    default: 'Verdenomia - Aislamiento de Buhardillas | Aislamiento por 1€',
    template: '%s | Verdenomia',
  },
  description:
    'Especialistas en aislamiento de buhardillas en España. Gracias a los programas PREE y PRTR-NextGenerationEU, aísla tu hogar por 1€. +50 artesanos, +15 años de experiencia, +2500 proyectos financiados.',
  keywords: [
    'aislamiento buhardillas',
    'aislamiento por 1 euro',
    'eficiencia energética',
    'PREE',
    'PRTR',
    'NextGenerationEU',
    'aislamiento insuflado',
    'lana mineral',
    'ahorro energético',
    'subvenciones aislamiento',
    'España',
    'Madrid',
    'Barcelona',
    'Ibiza',
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
    languages: {
      'es-ES': '/es',
      'fr-FR': '/fr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://verdenomia.es',
    title: 'Verdenomia - Aislamiento de Buhardillas por 1€',
    description:
      'Renueva tu hogar con total confianza. Aislamiento de buhardillas financiado por programas públicos PREE y NextGenerationEU.',
    siteName: 'Verdenomia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Verdenomia - Especialistas en Aislamiento',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdenomia - Aislamiento de Buhardillas',
    description: 'Aísla tu hogar por 1€ con ayudas públicas',
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
        <WhatsAppButton />
      </body>
    </html>
  )
}



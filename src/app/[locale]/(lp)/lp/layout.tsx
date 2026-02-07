import WhatsAppButton from '@/components/WhatsAppButton'
import LPHeader from './LPHeader'

export const metadata = {
  title: 'Aislamiento 100% Gratis — Verifica tu Elegibilidad | Verdenomia',
  description:
    'Aísla el suelo de tu buhardilla 100% gratis gracias a los Certificados de Ahorro Energético (CAE). Verifica tu elegibilidad en 2 minutos.',
  robots: { index: false, follow: false },
}

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <LPHeader />
      <main>{children}</main>
      <WhatsAppButton />
    </>
  )
}

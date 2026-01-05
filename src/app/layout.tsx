import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verdenomia - Aislamiento 100% Gratis con CAE',
  description: 'Aislamiento de buhardillas 100% financiado gracias a los Certificados de Ahorro Energético (CAE).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

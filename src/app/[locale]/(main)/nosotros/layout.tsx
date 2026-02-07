import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Quiénes Somos | Empresa de Aislamiento Verificada',
  description: 'Verdenomia: más de 15 años de experiencia en eficiencia energética. Empresa verificada, técnicos certificados, garantía 25 años.',
  keywords: ['verdenomia empresa', 'aislamiento empresa verificada', 'eficiencia energética España'],
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }

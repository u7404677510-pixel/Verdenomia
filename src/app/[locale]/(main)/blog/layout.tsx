import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blog de Eficiencia Energética | Aislamiento Térmico España',
  description: 'Artículos y guías sobre aislamiento térmico, eficiencia energética y el programa CAE en España. Consejos para ahorrar en tu factura.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }

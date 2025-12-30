'use client'

import Link from 'next/link'
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from 'lucide-react'

const navigation = {
  empresa: [
    { name: 'Inicio', href: '/' },
    { name: 'Quiénes somos', href: '/nosotros' },
    { name: 'Los CAEs', href: '/caes' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contacto', href: '/contacto' },
  ],
  servicios: [
    { name: 'Aislamiento particulares', href: '/#eligibilidad' },
    { name: 'Soluciones B2B', href: '/profesionales' },
  ],
  legal: [
    { name: 'Aviso legal', href: '/legal' },
    { name: 'Política de privacidad', href: '/privacidad' },
    { name: 'Política de cookies', href: '/cookies' },
  ],
}

const offices = [
  {
    city: 'Alicante',
    type: 'Sede Central',
    address: 'Calle Principal, 123',
    zip: '03001 Alicante',
    phone: '+34 919 46 95 28',
  },
  {
    city: 'Madrid',
    type: 'Oficina Comercial',
    address: 'Calle Comercio, 45',
    zip: '28001 Madrid',
    phone: '+34 919 46 95 28',
  },
]

export default function Footer() {
  return (
    <footer className="bg-verde-950 text-white">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-verde-500 to-verde-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-display font-bold">Verdenomia</span>
                <p className="text-xs text-verde-300 -mt-0.5">Aislamiento 100% financiado</p>
              </div>
            </Link>
            <p className="text-verde-200 text-sm mb-6">
              Especialistas en aislamiento de suelos de buhardilla. Gracias a los CAE, tu aislamiento es 100% gratuito.
            </p>
            
            {/* CTA */}
            <Link
              href="/#eligibilidad"
              className="inline-flex items-center gap-2 px-4 py-2 bg-verde-600 hover:bg-verde-500 rounded-lg text-sm font-medium transition-colors"
            >
              Verificar elegibilidad
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-verde-800 hover:bg-verde-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-verde-800 hover:bg-verde-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-verde-800 hover:bg-verde-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-verde-300 mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-verde-100 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-verde-300 mb-4">
              Servicios
            </h3>
            <ul className="space-y-3 mb-8">
              {navigation.servicios.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-verde-100 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-verde-300 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-verde-100 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-verde-300 mb-4">
              Nuestras oficinas
            </h3>
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.city}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-white">{office.city}</span>
                    <span className="text-xs px-2 py-0.5 bg-verde-800 text-verde-200 rounded">
                      {office.type}
                    </span>
                  </div>
                  <div className="text-sm text-verde-200 space-y-1">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {office.address}, {office.zip}
                    </p>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
              <a
                href="mailto:info@verdenomia.es"
                className="flex items-center gap-2 text-verde-200 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@verdenomia.es
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-verde-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-verde-300">
            <p>
              © {new Date().getFullYear()} Verdenomia. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-verde-500" />
              Comprometidos con la eficiencia energética
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

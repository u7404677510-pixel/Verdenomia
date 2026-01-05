'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
  Heart,
  Shield,
  Award,
} from 'lucide-react'

const footerLinks = {
  servicios: [
    { name: 'Aislamiento Insuflado', href: '/servicios#insuflado' },
    { name: 'Aislamiento en Manta', href: '/servicios#manta' },
    { name: 'Diagnóstico Energético', href: '/servicios#diagnostico' },
    { name: 'Asesoría Subvenciones', href: '/ayudas' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Nuestro Equipo', href: '/equipo' },
    { name: 'Política de Calidad', href: '/calidad' },
    { name: 'Certificaciones', href: '/calidad#certificaciones' },
  ],
  recursos: [
    { name: 'Blog', href: '/blog' },
    { name: 'Guía de Ayudas', href: '/ayudas' },
    { name: 'Preguntas Frecuentes', href: '/faq' },
    { name: 'Proyectos Realizados', href: '/proyectos' },
  ],
  legal: [
    { name: 'Aviso Legal', href: '/legal/aviso-legal' },
    { name: 'Política de Privacidad', href: '/legal/privacidad' },
    { name: 'Política de Cookies', href: '/legal/cookies' },
    { name: 'Términos y Condiciones', href: '/legal/terminos' },
  ],
}

const offices = [
  {
    city: 'Alicante (Sede Central)',
    address: 'Avenida Maisonnave 41, 3º piso, 03003 Alicante',
    phone: '+34 919 94 75 86',
    hours: 'Lun - Vie: 9:00 - 18:00',
  },
  {
    city: 'Madrid',
    address: 'Madrid, España',
    phone: '+34 919 94 75 86',
    hours: 'Lun - Vie: 9:00 - 18:00',
  },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/verdenomia' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/verdenomia' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/verdenomia' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/verdenomia' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-verde-900 to-verde-950 text-white">
      {/* Newsletter section */}
      <div className="border-b border-verde-800/50">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-display font-bold mb-2">
                Mantente Informado
              </h3>
              <p className="text-verde-200">
                Recibe consejos de ahorro energético y novedades sobre ayudas públicas
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-5 py-3 rounded-xl bg-white/10 border border-verde-700 text-white placeholder:text-verde-300 focus:bg-white/15 focus:border-verde-500 focus:outline-none transition-colors w-full sm:w-80"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-tierra-500 hover:bg-tierra-600 text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="Verdenomia"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-verde-200 mb-6 leading-relaxed">
              Especialistas en aislamiento de buhardillas con más de 15 años de
              experiencia. Hacemos tu hogar más eficiente con ayudas públicas que
              reducen el coste a 1€.
            </p>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-verde-800/50 hover:bg-verde-700 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            {/* Trust badges */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-2 bg-verde-800/30 rounded-lg">
                <Shield className="w-5 h-5 text-verde-400" />
                <span className="text-sm text-verde-200">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-verde-800/30 rounded-lg">
                <Award className="w-5 h-5 text-verde-400" />
                <span className="text-sm text-verde-200">RGE Certificado</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-verde-200 hover:text-white flex items-center gap-1 group transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-verde-200 hover:text-white flex items-center gap-1 group transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-verde-200 hover:text-white flex items-center gap-1 group transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-verde-200 hover:text-white flex items-center gap-1 group transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-12 pt-10 border-t border-verde-800/50">
          <h4 className="font-semibold text-lg mb-6">Nuestras Oficinas</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-verde-800/20 rounded-xl p-5 hover:bg-verde-800/30 transition-colors"
              >
                <h5 className="font-semibold text-lg mb-3">{office.city}</h5>
                <div className="space-y-2 text-verde-200 text-sm">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-white">
                      {office.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    {office.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-verde-800/50 bg-verde-950">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-verde-300">
            <p>
              © {new Date().getFullYear()} Verdenomia. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-400" /> para un mundo más sostenible
            </p>
            <p>
              <a href="mailto:Contacto@verdenomia.es" className="hover:text-white flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contacto@verdenomia.es
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


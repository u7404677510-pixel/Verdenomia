'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import {
  Phone,
  Mail,
  MapPin,
  Leaf,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Building2,
  Heart,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale() as Locale

  const navigation = [
    { name: t('header.nav.home'), href: `/${locale}` },
    { name: t('header.nav.about'), href: `/${locale}/nosotros` },
    { name: t('header.nav.caes'), href: `/${locale}/caes` },
    { name: t('header.nav.faq'), href: `/${locale}/faq` },
    { name: t('header.nav.contact'), href: `/${locale}/contacto` },
  ]

  const services = [
    { name: t('footer.serviceB2C'), href: `/${locale}#eligibilidad` },
    { name: t('footer.serviceB2B'), href: `/${locale}/profesionales` },
  ]

  const legal = [
    { name: t('footer.legalNotice'), href: `/${locale}/legal` },
    { name: t('footer.privacy'), href: `/${locale}/privacidad` },
    { name: t('footer.cookies'), href: `/${locale}/cookies` },
  ]

  const offices = [
    {
      city: 'Alicante',
      type: t('footer.headquarters'),
      address: 'Calle Principal, 123',
      postalCode: '03001 Alicante',
      phone: '+34 919 94 75 86',
    },
    {
      city: 'Madrid',
      type: t('footer.commercialOffice'),
      address: 'Calle Comercio, 45',
      postalCode: '28001 Madrid',
      phone: '+34 919 94 75 86',
    },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-4 group">
              <Image
                src="/logo.png"
                alt="Verdenomia"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h2 className="text-xl font-display font-bold text-white">
                  Verdenomia
                </h2>
                <p className="text-xs text-verde-400">{t('footer.tagline')}</p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>

            <Link
              href={`/${locale}#eligibilidad`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-verde-600 to-verde-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-verde-600/30 transition-all hover:-translate-y-0.5"
            >
              {t('common.checkEligibility')}
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-verde-600 flex items-center justify-center transition-all hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-verde-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-verde-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2.5 mb-6">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-verde-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-verde-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-verde-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-verde-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices + Map */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-verde-400" />
              {t('footer.offices')}
            </h3>
            
            {/* Spain Map */}
            <div className="mb-4 rounded-xl overflow-hidden border border-gray-700/50">
              <Image
                src="/mapa-espana.png"
                alt={locale === 'es' ? 'Presencia en España' : 'Presence in Spain'}
                width={300}
                height={200}
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="space-y-3">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-verde-600/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white text-sm">{office.city}</span>
                    <span className="text-xs bg-verde-600/20 text-verde-400 px-2 py-0.5 rounded-full">
                      {office.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 flex items-start gap-2 mb-1">
                    <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0 text-verde-500" />
                    {office.address}, {office.postalCode}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="text-xs text-verde-400 hover:text-verde-300 flex items-center gap-2"
                  >
                    <Phone className="w-3 h-3" />
                    {office.phone}
                  </a>
                </div>
              ))}
              <a
                href="mailto:Contacto@verdenomia.es"
                className="flex items-center gap-2 text-verde-400 hover:text-verde-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                Contacto@verdenomia.es
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Verdenomia. {t('footer.copyright')}
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <Heart className="w-4 h-4 text-verde-500" />
              {t('footer.commitment')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

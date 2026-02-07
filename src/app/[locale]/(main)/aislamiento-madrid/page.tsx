'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  Home,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Star,
  Thermometer,
  Snowflake,
  Sun,
  TrendingDown,
  Clock,
  Users,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'
import { LocalBusinessSchema } from '@/components/SchemaMarkup'

const content = {
  es: {
    badge: 'Madrid',
    title: 'Aislamiento de ático gratis en Madrid',
    description: 'El clima continental de Madrid provoca inviernos heladores y veranos tórridos. Aísla tu buhardilla gratis gracias al programa CAE y reduce tu factura energética hasta un 30%.',
    stats: [
      { value: '800+', label: 'Hogares aislados en Madrid' },
      { value: '100%', label: 'Financiado por CAE' },
      { value: '-30%', label: 'En tu factura energética' },
      { value: '24h', label: 'Tiempo de respuesta' },
    ],
    whyTitle: '¿Por qué aislar en Madrid?',
    whySubtitle: 'El clima continental de Madrid hace del aislamiento la mejor inversión energética.',
    whyCards: [
      { title: 'Inviernos extremos', desc: 'Las temperaturas en Madrid bajan de -2° a 5°C en invierno. La calefacción es imprescindible y representa una parte enorme de la factura.' },
      { title: 'Veranos tórridos', desc: 'Con más de 35°C en verano, el aire acondicionado trabaja sin parar. Un buen aislamiento reduce drásticamente su uso.' },
      { title: 'Mejor inversión', desc: 'El aislamiento del suelo de buhardilla es la intervención con mejor relación coste-beneficio para reducir las pérdidas térmicas.' },
      { title: 'Ahorro inmediato', desc: 'Desde el primer mes notarás una reducción significativa en tu factura de energía. Hasta un 30% de ahorro.' },
    ],
    teamTitle: 'Nuestro equipo en Madrid',
    teamDesc: 'Contamos con una oficina comercial en Madrid para estar cerca de ti.',
    officeType: 'Oficina Comercial',
    officeCity: 'Madrid',
    officeAddress: 'Madrid, España',
    officePhone: '+34 919 94 73 60',
    testimonialTitle: 'Lo que dicen nuestros clientes en Madrid',
    testimonialQuote: 'Increíble servicio. En solo unas horas aislaron toda mi buhardilla. Ahora noto la diferencia en la factura.',
    testimonialAuthor: 'María García',
    testimonialLocation: 'Madrid',
    ctaTitle: '¿Tu hogar en Madrid es elegible?',
    ctaDesc: 'Verifica tu elegibilidad al programa CAE y obtén un aislamiento 100% gratuito para tu buhardilla.',
    cta: 'Verificar mi elegibilidad',
  },
  en: {
    badge: 'Madrid',
    title: 'Free attic insulation in Madrid',
    description: 'Madrid\'s continental climate brings freezing winters and scorching summers. Insulate your attic for free thanks to the CAE program and reduce your energy bill by up to 30%.',
    stats: [
      { value: '800+', label: 'Homes insulated in Madrid' },
      { value: '100%', label: 'Funded by CAE' },
      { value: '-30%', label: 'On your energy bill' },
      { value: '24h', label: 'Response time' },
    ],
    whyTitle: 'Why insulate in Madrid?',
    whySubtitle: 'Madrid\'s continental climate makes insulation the best energy investment.',
    whyCards: [
      { title: 'Extreme winters', desc: 'Temperatures in Madrid drop from -2° to 5°C in winter. Heating is essential and represents a huge part of the bill.' },
      { title: 'Scorching summers', desc: 'With over 35°C in summer, air conditioning runs non-stop. Good insulation drastically reduces its use.' },
      { title: 'Best investment', desc: 'Attic floor insulation is the intervention with the best cost-benefit ratio for reducing thermal losses.' },
      { title: 'Immediate savings', desc: 'From the first month, you\'ll notice a significant reduction in your energy bill. Up to 30% savings.' },
    ],
    teamTitle: 'Our team in Madrid',
    teamDesc: 'We have a commercial office in Madrid to be close to you.',
    officeType: 'Commercial Office',
    officeCity: 'Madrid',
    officeAddress: 'Madrid, Spain',
    officePhone: '+34 919 94 73 60',
    testimonialTitle: 'What our Madrid customers say',
    testimonialQuote: 'Incredible service. In just a few hours they insulated my entire attic. I can already see the difference on my bill.',
    testimonialAuthor: 'María García',
    testimonialLocation: 'Madrid',
    ctaTitle: 'Is your Madrid home eligible?',
    ctaDesc: 'Check your eligibility for the CAE program and get 100% free insulation for your attic.',
    cta: 'Check my eligibility',
  },
}

export default function AislamientoMadridPage() {
  const locale = useLocale() as Locale
  const t = content[locale]
  const statIcons = [Home, CheckCircle2, TrendingDown, Clock]
  const whyIcons = [Snowflake, Sun, Thermometer, TrendingDown]

  return (
    <div className="overflow-hidden">
      <LocalBusinessSchema city="Madrid" address="Madrid, España" postalCode="28001" type="Oficina Comercial" />

      {/* Hero */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
              <MapPin className="w-4 h-4" />
              {t.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-verde-100 mb-8 leading-relaxed">
              {t.description}
            </p>
            <Link href={`/${locale}#eligibilidad`} className="btn-primary text-lg px-8 py-4">
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white relative -mt-12">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-2xl shadow-verde-900/10 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.stats.map((stat, index) => {
                const Icon = statIcons[index]
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 bg-verde-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-verde-600" />
                    </div>
                    <div className="text-3xl font-bold text-verde-800 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why insulate in Madrid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.whySubtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyCards.map((card, index) => {
              const Icon = whyIcons[index]
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-verde-50 rounded-2xl p-6"
                >
                  <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <h3 className="text-lg font-bold text-verde-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Madrid team */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              {t.teamTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.teamDesc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-verde-600" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-2">
                    {t.officeType}
                  </span>
                  <h3 className="text-lg font-bold text-verde-800">{t.officeCity}</h3>
                  <p className="text-gray-600 mt-2">{t.officeAddress}</p>
                  <div className="mt-3">
                    <a href="tel:+34919947360" className="flex items-center gap-2 text-verde-600 hover:text-verde-700">
                      <Phone className="w-4 h-4" />{t.officePhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              {t.testimonialTitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-verde-50 rounded-3xl p-8 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;{t.testimonialQuote}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-verde-800">{t.testimonialAuthor}</p>
                <p className="text-gray-500 flex items-center justify-center gap-1 mt-1">
                  <MapPin className="w-4 h-4" />
                  {t.testimonialLocation}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">{t.ctaTitle}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t.ctaDesc}</p>
            <Link href={`/${locale}#eligibilidad`} className="btn-primary text-lg px-8 py-4">
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

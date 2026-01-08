'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  Users,
  Award,
  Heart,
  Shield,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Home,
  Clock,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'

const content = {
  es: {
    badge: 'Conócenos',
    title: 'Quiénes somos',
    description: 'Somos especialistas en eficiencia energética con más de 15 años de experiencia. Nuestra misión: hacer accesible el aislamiento de calidad a todos los hogares españoles.',
    stats: [
      { value: '15+', label: 'Años de experiencia' },
      { value: '2,500+', label: 'Hogares aislados' },
      { value: '50+', label: 'Técnicos cualificados' },
      { value: '100%', label: 'Clientes satisfechos' },
    ],
    missionTitle: 'Nuestra misión',
    missionP1: 'En <strong>Verdenomia</strong>, creemos que todo el mundo debería poder vivir en un hogar bien aislado, confortable y económico en energía.',
    missionP2: 'Por eso, nos especializamos en el aislamiento de suelos de buhardilla, la intervención con mejor relación coste-beneficio para reducir las pérdidas térmicas de una vivienda.',
    missionP3: 'Gracias a los <strong>Certificados de Ahorro Energético (CAE)</strong>, hacemos posible que esta mejora sea 100% gratuita para el cliente.',
    missionItems: ['Aislamiento profesional sin coste', 'Técnicos formados y certificados', 'Materiales de primera calidad', 'Acompañamiento completo del proceso'],
    promiseTitle: 'Nuestra promesa',
    promise1: { title: 'Transparencia total', desc: 'Sin costes ocultos, sin compromisos. Te explicamos todo claramente.' },
    promise2: { title: 'Respuesta en 24h', desc: 'Un asesor te contacta en menos de 24 horas tras tu solicitud.' },
    promise3: { title: 'Garantía 25 años', desc: 'Nuestros materiales están garantizados durante 25 años.' },
    valuesTitle: 'Nuestros valores',
    valuesDesc: 'Los principios que guían cada una de nuestras intervenciones.',
    values: [
      { title: 'Transparencia', desc: 'Sin costes ocultos, sin sorpresas. Te explicamos todo claramente.' },
      { title: 'Compromiso', desc: 'Nos comprometemos a dar un servicio de calidad a cada cliente.' },
      { title: 'Sostenibilidad', desc: 'Contribuimos activamente a la transición ecológica y energética.' },
      { title: 'Excelencia', desc: 'Formamos continuamente a nuestros equipos para garantizar la mejor calidad.' },
    ],
    officesTitle: 'Nuestras oficinas',
    officesDesc: 'Presentes en toda España para estar cerca de ti.',
    headquarters: 'Sede Central',
    commercial: 'Oficina Comercial',
    ctaTitle: '¿Listo para trabajar con nosotros?',
    ctaDesc: 'Verifica tu elegibilidad al programa CAE y obtén un aislamiento 100% gratuito.',
    cta: 'Verificar mi elegibilidad',
    contact: 'Contáctanos',
  },
  en: {
    badge: 'About us',
    title: 'Who we are',
    description: 'We are energy efficiency specialists with over 15 years of experience. Our mission: to make quality insulation accessible to all Spanish homes.',
    stats: [
      { value: '15+', label: 'Years of experience' },
      { value: '2,500+', label: 'Homes insulated' },
      { value: '50+', label: 'Qualified technicians' },
      { value: '100%', label: 'Satisfied customers' },
    ],
    missionTitle: 'Our mission',
    missionP1: 'At <strong>Verdenomia</strong>, we believe everyone should be able to live in a well-insulated, comfortable, and energy-efficient home.',
    missionP2: 'That\'s why we specialize in attic floor insulation, the intervention with the best cost-benefit ratio for reducing a home\'s thermal losses.',
    missionP3: 'Thanks to <strong>Energy Savings Certificates (CAE)</strong>, we make it possible for this improvement to be 100% free for the customer.',
    missionItems: ['Professional insulation at no cost', 'Trained and certified technicians', 'Top-quality materials', 'Complete process support'],
    promiseTitle: 'Our promise',
    promise1: { title: 'Total transparency', desc: 'No hidden costs, no commitments. We explain everything clearly.' },
    promise2: { title: '24h response', desc: 'An advisor contacts you within 24 hours of your request.' },
    promise3: { title: '25-year warranty', desc: 'Our materials are guaranteed for 25 years.' },
    valuesTitle: 'Our values',
    valuesDesc: 'The principles that guide each of our interventions.',
    values: [
      { title: 'Transparency', desc: 'No hidden costs, no surprises. We explain everything clearly.' },
      { title: 'Commitment', desc: 'We are committed to providing quality service to every customer.' },
      { title: 'Sustainability', desc: 'We actively contribute to the ecological and energy transition.' },
      { title: 'Excellence', desc: 'We continuously train our teams to guarantee the best quality.' },
    ],
    officesTitle: 'Our offices',
    officesDesc: 'Present throughout Spain to be close to you.',
    headquarters: 'Headquarters',
    commercial: 'Commercial office',
    ctaTitle: 'Ready to work with us?',
    ctaDesc: 'Check your eligibility for the CAE program and get 100% free insulation.',
    cta: 'Check my eligibility',
    contact: 'Contact us',
  },
}

export default function NosotrosPage() {
  const locale = useLocale() as Locale
  const t = content[locale]
  const valueIcons = [Shield, Heart, Leaf, Award]
  const statIcons = [Award, Home, Users, Heart]

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
                <Users className="w-4 h-4" />
                {t.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                {t.title}
              </h1>
              <p className="text-xl text-verde-100 mb-8 leading-relaxed">
                {t.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-team.png"
                  alt={locale === 'es' ? 'Nuestro equipo' : 'Our team'}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-verde-900/40 to-transparent" />
              </div>
            </motion.div>
          </div>
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

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-6">
                {t.missionTitle}
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p dangerouslySetInnerHTML={{ __html: t.missionP1 }} />
                <p dangerouslySetInnerHTML={{ __html: t.missionP2 }} />
                <p dangerouslySetInnerHTML={{ __html: t.missionP3 }} />
              </div>
              <div className="mt-8 space-y-4">
                {t.missionItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">{t.promiseTitle}</h3>
                <div className="space-y-4">
                  {[t.promise1, t.promise2, t.promise3].map((promise, i) => {
                    const icons = [Shield, Clock, Award]
                    const Icon = icons[i]
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-verde-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{promise.title}</h4>
                          <p className="text-verde-200 text-sm">{promise.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              {t.valuesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.valuesDesc}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <h3 className="text-lg font-bold text-verde-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              {t.officesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.officesDesc}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-verde-50 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-verde-600" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-verde-100 text-verde-700 text-xs font-semibold rounded mb-2">
                    {t.headquarters}
                  </span>
                  <h3 className="text-lg font-bold text-verde-800">Alicante</h3>
                  <p className="text-gray-600 mt-2">Calle Principal, 123<br />03001 Alicante</p>
                  <div className="mt-3 space-y-1">
                    <a href="tel:+34919947360" className="flex items-center gap-2 text-verde-600 hover:text-verde-700">
                      <Phone className="w-4 h-4" />+34 919 94 73 60
                    </a>
                    <a href="mailto:Contacto@verdenomia.es" className="flex items-center gap-2 text-verde-600 hover:text-verde-700">
                      <Mail className="w-4 h-4" />Contacto@verdenomia.es
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-verde-50 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-verde-600" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-2">
                    {t.commercial}
                  </span>
                  <h3 className="text-lg font-bold text-verde-800">Madrid</h3>
                  <p className="text-gray-600 mt-2">Madrid, España</p>
                  <div className="mt-3">
                    <a href="tel:+34919947360" className="flex items-center gap-2 text-verde-600 hover:text-verde-700">
                      <Phone className="w-4 h-4" />+34 919 94 73 60
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}#eligibilidad`} className="btn-primary text-lg px-8 py-4">
                {t.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={`/${locale}/contacto`} className="btn-secondary text-lg px-8 py-4">
                {t.contact}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, ArrowRight, Tag } from 'lucide-react'
import { type Locale } from '@/i18n/config'

const content = {
  es: {
    badge: 'Blog',
    title: 'Blog',
    description: 'Artículos, guías y consejos sobre eficiencia energética, aislamiento térmico y el programa CAE en España.',
    articles: [
      {
        title: 'Guía completa: aislamiento de suelos de ático',
        excerpt: 'Descubre cómo aislar el suelo de tu ático de forma eficiente y 100% gratuita gracias a los Certificados de Ahorro Energético (CAE). Técnicas, materiales y proceso paso a paso.',
        date: '5 febrero 2026',
        category: 'Guías',
        slug: 'aislamiento-atico-guia-completa',
      },
      {
        title: '¿Qué son los Certificados de Ahorro Energético (CAE)?',
        excerpt: 'Todo lo que necesitas saber sobre el mecanismo CAE: cómo funcionan, quién puede beneficiarse y por qué permiten financiar el aislamiento al 100%.',
        date: '12 febrero 2026',
        category: 'CAE',
        slug: 'que-son-certificados-ahorro-energetico-cae',
      },
      {
        title: '7 consejos para mejorar la eficiencia energética de tu hogar',
        excerpt: 'Desde el aislamiento hasta los hábitos de consumo, te damos las claves para reducir tu huella energética y ahorrar en tu factura cada mes.',
        date: '19 febrero 2026',
        category: 'Consejos',
        slug: 'ahorro-energetico-hogar-consejos',
      },
      {
        title: 'Cómo reducir tu factura de calefacción hasta un 30%',
        excerpt: 'La calefacción representa hasta el 50% del gasto energético del hogar. Te explicamos cómo un buen aislamiento puede reducir tu factura de forma significativa.',
        date: '26 febrero 2026',
        category: 'Ahorro',
        slug: 'reducir-factura-calefaccion',
      },
    ],
    ctaTitle: '¿Quieres ahorrar en tu factura energética?',
    ctaDesc: 'Verifica tu elegibilidad al programa CAE y obtén un aislamiento de ático 100% gratuito.',
    ctaButton: 'Verificar mi elegibilidad',
    readMore: 'Leer artículo',
  },
  en: {
    badge: 'Blog',
    title: 'Blog',
    description: 'Articles, guides and tips on energy efficiency, thermal insulation and the CAE program in Spain.',
    articles: [
      {
        title: 'Complete guide: attic floor insulation',
        excerpt: 'Discover how to insulate your attic floor efficiently and 100% free thanks to the Energy Savings Certificates (CAE). Techniques, materials and step-by-step process.',
        date: '5 February 2026',
        category: 'Guides',
        slug: 'aislamiento-atico-guia-completa',
      },
      {
        title: 'What are Energy Savings Certificates (CAE)?',
        excerpt: 'Everything you need to know about the CAE mechanism: how they work, who can benefit and why they allow 100% funded insulation.',
        date: '12 February 2026',
        category: 'CAE',
        slug: 'que-son-certificados-ahorro-energetico-cae',
      },
      {
        title: '7 tips to improve your home\'s energy efficiency',
        excerpt: 'From insulation to consumption habits, we give you the keys to reduce your energy footprint and save on your bill every month.',
        date: '19 February 2026',
        category: 'Tips',
        slug: 'ahorro-energetico-hogar-consejos',
      },
      {
        title: 'How to reduce your heating bill by up to 30%',
        excerpt: 'Heating accounts for up to 50% of household energy spending. We explain how good insulation can significantly reduce your bill.',
        date: '26 February 2026',
        category: 'Savings',
        slug: 'reducir-factura-calefaccion',
      },
    ],
    ctaTitle: 'Want to save on your energy bill?',
    ctaDesc: 'Check your eligibility for the CAE program and get 100% free attic insulation.',
    ctaButton: 'Check my eligibility',
    readMore: 'Read article',
  },
}

export default function BlogPage() {
  const locale = useLocale() as Locale
  const t = content[locale]

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              {t.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-verde-100 leading-relaxed">
              {t.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {t.articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/${locale}/blog/${article.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-verde-300 transition-all duration-300 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-verde-100 text-verde-700 text-xs font-semibold rounded-full">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-verde-900 mb-3 group-hover:text-verde-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-verde-600 font-semibold group-hover:gap-3 transition-all">
                    {t.readMore}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.ctaDesc}
            </p>
            <Link
              href={`/${locale}#eligibilidad`}
              className="btn-primary text-lg px-8 py-4"
            >
              {t.ctaButton}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

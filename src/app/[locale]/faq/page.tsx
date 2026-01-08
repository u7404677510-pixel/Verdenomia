'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown, ArrowRight, Phone } from 'lucide-react'
import { type Locale } from '@/i18n/config'

const faqData = {
  es: {
    title: 'Preguntas frecuentes',
    description: 'Encuentra respuestas a las preguntas más comunes sobre el programa CAE y nuestros servicios de aislamiento.',
    categories: [
      {
        name: 'Sobre el programa CAE',
        questions: [
          { q: '¿Qué son los CAE?', a: 'Los Certificados de Ahorro Energético (CAE) son un instrumento creado por el gobierno español para impulsar la eficiencia energética. Las empresas energéticas financian obras de aislamiento a cambio de los certificados generados.' },
          { q: '¿Es realmente gratis?', a: 'Sí, 100% gratis. No hay costes ocultos, ni cuotas mensuales, ni compromisos futuros. Solo firmas la cesión de los CAE y nosotros nos encargamos del resto.' },
          { q: '¿Quién financia el programa?', a: 'Las grandes empresas energéticas tienen la obligación legal de generar ahorros de energía. Para cumplir, financian obras de rehabilitación energética como el aislamiento.' },
        ],
      },
      {
        name: 'Sobre el proceso',
        questions: [
          { q: '¿Cuánto tiempo tarda la instalación?', a: 'La instalación se realiza en pocas horas, normalmente entre 2 y 4 horas dependiendo del tamaño de la buhardilla. No hay obras mayores ni molestias.' },
          { q: '¿Qué documentos necesito?', a: 'Solo necesitas tu DNI/NIE, un justificante de domicilio reciente y firmar el contrato de cesión de los CAE.' },
          { q: '¿Cómo se planifica la visita?', a: 'Tras verificar tu elegibilidad, un asesor te contacta en 24h para programar una visita técnica gratuita a tu conveniencia.' },
        ],
      },
      {
        name: 'Sobre el aislamiento',
        questions: [
          { q: '¿Qué técnica de aislamiento utilizáis?', a: 'Utilizamos dos técnicas: aislamiento soplado (lana mineral proyectada) o aislamiento en rollos (mantas de lana mineral). El técnico te recomendará la mejor opción según tu buhardilla.' },
          { q: '¿Qué garantía tienen los materiales?', a: 'Todos nuestros materiales tienen una garantía de 25 años. Utilizamos lana mineral de alta densidad de primeras marcas.' },
          { q: '¿Cuánto puedo ahorrar en la factura?', a: 'El ahorro típico es de hasta un 30% en la factura de calefacción y aire acondicionado, ya que el 30% de las pérdidas de calor se producen por el techo.' },
        ],
      },
    ],
    cta: 'Verificar mi elegibilidad',
    callNow: 'Llamar ahora',
    moreQuestions: '¿Tienes más preguntas?',
    moreQuestionsDesc: 'Nuestro equipo está disponible para responder a todas tus dudas.',
  },
  en: {
    title: 'Frequently asked questions',
    description: 'Find answers to the most common questions about the CAE program and our insulation services.',
    categories: [
      {
        name: 'About the CAE program',
        questions: [
          { q: 'What are CAEs?', a: 'Energy Savings Certificates (CAE) are an instrument created by the Spanish government to promote energy efficiency. Energy companies fund insulation work in exchange for the certificates generated.' },
          { q: 'Is it really free?', a: 'Yes, 100% free. No hidden costs, no monthly fees, no future commitments. You simply sign the CAE transfer and we take care of the rest.' },
          { q: 'Who funds the program?', a: 'Large energy companies have a legal obligation to generate energy savings. To comply, they fund energy renovation work such as insulation.' },
        ],
      },
      {
        name: 'About the process',
        questions: [
          { q: 'How long does installation take?', a: 'Installation is completed in just a few hours, usually between 2 and 4 hours depending on the size of the attic. No major work or disruption.' },
          { q: 'What documents do I need?', a: 'You just need your ID, a recent proof of address, and to sign the CAE transfer contract.' },
          { q: 'How is the visit scheduled?', a: 'After verifying your eligibility, an advisor contacts you within 24 hours to schedule a free technical visit at your convenience.' },
        ],
      },
      {
        name: 'About insulation',
        questions: [
          { q: 'What insulation technique do you use?', a: 'We use two techniques: blown insulation (projected mineral wool) or rolled insulation (mineral wool blankets). The technician will recommend the best option for your attic.' },
          { q: 'What warranty do the materials have?', a: 'All our materials have a 25-year warranty. We use high-density mineral wool from leading brands.' },
          { q: 'How much can I save on my bill?', a: 'Typical savings are up to 30% on heating and air conditioning bills, as 30% of heat loss occurs through the roof.' },
        ],
      },
    ],
    cta: 'Check my eligibility',
    callNow: 'Call now',
    moreQuestions: 'Have more questions?',
    moreQuestionsDesc: 'Our team is available to answer all your questions.',
  },
}

export default function FAQPage() {
  const locale = useLocale() as Locale
  const t = faqData[locale]
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-verde-100 leading-relaxed">{t.description}</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {t.categories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h2 className="text-2xl font-display font-bold text-verde-900 mb-6">
                  {category.name}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => {
                    const itemId = `${catIndex}-${qIndex}`
                    const isOpen = openItems.includes(itemId)
                    return (
                      <div
                        key={itemId}
                        className="bg-verde-50 rounded-2xl overflow-hidden border border-verde-100"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="font-semibold text-verde-800 pr-4">{item.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-verde-600 flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-5 pb-5 text-gray-600">{item.a}</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-verde-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900 mb-4">
            {t.moreQuestions}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.moreQuestionsDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}#eligibilidad`} className="btn-primary text-lg">
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+34919947360" className="btn-secondary text-lg">
              <Phone className="w-5 h-5" />
              {t.callNow}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


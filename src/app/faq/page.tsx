'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Phone,
  MessageCircle,
  Euro,
  FileCheck,
  Shield,
  Clock,
} from 'lucide-react'

const faqCategories = [
  {
    name: 'Sobre los CAE',
    icon: FileCheck,
    questions: [
      {
        question: '¿Qué son los Certificados de Ahorro Energético (CAE)?',
        answer: 'Los CAE son un mecanismo establecido por el gobierno español para fomentar la eficiencia energética. Las grandes empresas energéticas tienen obligación de generar ahorros de energía, y para cumplirlo, financian obras de rehabilitación en viviendas particulares. El resultado es que tú obtienes un aislamiento profesional sin coste alguno.',
      },
      {
        question: '¿Por qué me piden firmar un contrato de cesión de CAE?',
        answer: 'Al realizar el aislamiento de tu buhardilla, se generan unos certificados de ahorro energético. Estos certificados tienen un valor que permite financiar la obra. Al firmar la cesión, autorizas a Verdenomia a reclamar estos certificados a cambio de la instalación gratuita. Es un proceso completamente legal y regulado.',
      },
      {
        question: '¿Quién financia realmente las obras?',
        answer: 'Las obras son financiadas indirectamente por las grandes empresas energéticas (eléctricas, petroleras, gasistas) que tienen obligación legal de generar ahorros energéticos. Verdenomia actúa como intermediario, realizando las obras y gestionando los certificados.',
      },
    ],
  },
  {
    name: 'Coste y financiación',
    icon: Euro,
    questions: [
      {
        question: '¿Es realmente gratis? ¿No hay costes ocultos?',
        answer: 'Sí, es completamente gratis para ti. No hay costes ocultos, ni cuotas mensuales, ni pagos diferidos. El 100% del coste está cubierto por los CAE. Solo tienes que firmar el contrato de cesión de certificados.',
      },
      {
        question: '¿Por qué algunos hablan de "1€ simbólico"?',
        answer: 'En algunos programas de ayuda se establece un pago simbólico de 1€ para formalizar el contrato. En el programa CAE de Verdenomia, no hay ningún pago, ni siquiera simbólico. El servicio es 100% gratuito.',
      },
      {
        question: '¿Tendré que pagar algo en el futuro?',
        answer: 'No. Una vez realizada la instalación y firmado el contrato de cesión, no tienes ninguna obligación financiera futura. No hay cuotas, no hay intereses, no hay compromisos.',
      },
    ],
  },
  {
    name: 'Proceso y documentos',
    icon: Shield,
    questions: [
      {
        question: '¿Qué documentos necesito para el proceso?',
        answer: 'Necesitaremos: tu DNI o NIE, un justificante de domicilio (factura de luz, agua o similar), y acceso a la buhardilla para el diagnóstico técnico. Nuestro equipo te guiará en cada paso.',
      },
      {
        question: '¿Por qué me piden el DNI?',
        answer: 'El DNI es necesario para identificarte como beneficiario del programa CAE. Es un requisito legal para la tramitación de los certificados. Tus datos están protegidos según el RGPD y solo se usan para este fin.',
      },
      {
        question: '¿Cuánto tiempo tarda el proceso completo?',
        answer: 'Desde la verificación de elegibilidad hasta la instalación, el proceso suele tardar entre 1 y 3 semanas, dependiendo de la disponibilidad y la zona geográfica. La instalación en sí se realiza en pocas horas.',
      },
    ],
  },
  {
    name: 'Instalación',
    icon: Clock,
    questions: [
      {
        question: '¿Cuánto dura la instalación?',
        answer: 'La instalación del aislamiento en el suelo de la buhardilla suele tardar entre 2 y 4 horas, dependiendo de la superficie y la técnica utilizada (soplado o en rollos).',
      },
      {
        question: '¿Hay obras o molestias?',
        answer: 'No. El aislamiento se instala en el suelo de la buhardilla, una zona generalmente no habitada. No hay polvo, no hay ruido excesivo, y no afecta a tu vida cotidiana.',
      },
      {
        question: '¿Qué técnicas de aislamiento utilizáis?',
        answer: 'Utilizamos dos técnicas principales: el aislamiento soplado (lana mineral proyectada, ideal para zonas de difícil acceso) y el aislamiento en rollos (mantas de lana mineral, para buhardillas accesibles). Nuestro técnico te recomendará la más adecuada.',
      },
      {
        question: '¿Los materiales tienen garantía?',
        answer: 'Sí. Los materiales que utilizamos (lana mineral de alta densidad) tienen una garantía de 25 años. Son productos certificados, resistentes al fuego y sin riesgo para la salud.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-verde-900 via-verde-800 to-verde-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
              <HelpCircle className="w-4 h-4" />
              Preguntas frecuentes
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              ¿Tienes dudas?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-verde-300 to-green-200">
                Te lo explicamos todo
              </span>
            </h1>

            <p className="text-xl text-verde-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transparencia y claridad son nuestros valores. Aquí encontrarás respuestas a las preguntas más comunes sobre el programa CAE y nuestros servicios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-verde-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-verde-800">{category.name}</h2>
                </div>

                {/* Questions */}
                <div className="space-y-3">
                  {category.questions.map((item, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`
                    const isOpen = openItems[key]
                    
                    return (
                      <div
                        key={questionIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-verde-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-800 pr-4">
                            {item.question}
                          </span>
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
                              className="overflow-hidden"
                            >
                              <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                                {item.answer}
                              </div>
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

      {/* Still have questions */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-verde-800 mb-4">
                    ¿No encuentras tu respuesta?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Nuestro equipo está disponible para responder a todas tus preguntas. Contáctanos por teléfono o formulario.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+34919469528" className="btn-primary">
                      <Phone className="w-4 h-4" />
                      Llamar ahora
                    </a>
                    <Link href="/contacto" className="btn-secondary">
                      <MessageCircle className="w-4 h-4" />
                      Contactar
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-48 h-48 bg-verde-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-24 h-24 text-verde-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-verde-800 to-verde-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              ¿Listo para aislar tu hogar gratis?
            </h2>
            <p className="text-xl text-verde-100 mb-8 max-w-2xl mx-auto">
              Verifica tu elegibilidad en menos de 2 minutos y benefíciate del programa CAE.
            </p>
            <Link href="/#eligibilidad" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4">
              Verificar mi elegibilidad
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


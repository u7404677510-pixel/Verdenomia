'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  ThermometerSun,
  Snowflake,
  Euro,
  Clock,
  Shield,
  Leaf,
  Zap,
  Home,
  ChevronDown,
  ChevronUp,
  Phone,
  HelpCircle,
  Layers,
  Wind,
  Volume2,
  Flame,
  Award,
} from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    id: 'insuflado',
    title: 'Aislamiento Insuflado',
    subtitle: 'Lana mineral proyectada',
    description:
      'La técnica de aislamiento por insuflado consiste en proyectar lana mineral en los espacios vacíos de la buhardilla. Ideal para espacios de difícil acceso o con geometrías complejas, garantiza una cobertura total sin puentes térmicos.',
    longDescription:
      'El aislamiento insuflado es la solución más eficiente para buhardillas con acceso limitado. Mediante un equipo especializado, proyectamos lana mineral de alta densidad que rellena todos los huecos y rincones, eliminando cualquier posibilidad de puente térmico. El proceso es rápido, limpio y no requiere obras mayores.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    features: [
      { icon: Layers, text: 'Cobertura total sin huecos' },
      { icon: Wind, text: 'Excelente barrera térmica' },
      { icon: Volume2, text: 'Aislamiento acústico' },
      { icon: Flame, text: 'Resistente al fuego (M0)' },
      { icon: Clock, text: 'Instalación en 1 día' },
      { icon: Shield, text: 'Garantía 10 años' },
    ],
    benefits: [
      'Reducción de hasta el 35% en consumo energético',
      'Mejora inmediata del confort térmico',
      'Sin necesidad de acceso amplio a la buhardilla',
      'Material ecológico y reciclable',
      'No requiere mantenimiento',
    ],
    specs: {
      conductividad: '0.035-0.040 W/m·K',
      densidad: '25-40 kg/m³',
      espesor: '200-350 mm',
      resistencia: 'R = 5-10 m²·K/W',
    },
    color: 'verde',
  },
  {
    id: 'manta',
    title: 'Aislamiento en Manta',
    subtitle: 'Rollos de lana mineral',
    description:
      'El aislamiento en manta utiliza rollos de lana mineral que se despliegan sobre el suelo de la buhardilla. La opción más económica y eficiente para espacios con buen acceso, ofrece un excelente rendimiento térmico y acústico.',
    longDescription:
      'Los rollos de lana mineral se instalan directamente sobre el suelo de la buhardilla, formando una barrera térmica continua. Esta técnica tradicional sigue siendo una de las más eficientes cuando las condiciones de acceso lo permiten. El material se adapta perfectamente a las irregularidades del suelo.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: [
      { icon: Euro, text: 'Mejor relación calidad-precio' },
      { icon: Zap, text: 'Instalación sencilla' },
      { icon: Volume2, text: 'Excelente aislamiento acústico' },
      { icon: Flame, text: 'Incombustible' },
      { icon: Clock, text: 'Resultado inmediato' },
      { icon: Shield, text: 'Durabilidad probada' },
    ],
    benefits: [
      'Económico y muy eficiente',
      'Fácil verificación visual tras instalación',
      'Material duradero (vida útil +50 años)',
      'Compatible con otros aislamientos',
      'Permite futuras ampliaciones',
    ],
    specs: {
      conductividad: '0.032-0.037 W/m·K',
      densidad: '15-25 kg/m³',
      espesor: '200-400 mm',
      resistencia: 'R = 5.5-12 m²·K/W',
    },
    color: 'tierra',
  },
]

const comparisons = [
  { feature: 'Acceso requerido', insuflado: 'Mínimo', manta: 'Amplio' },
  { feature: 'Tiempo instalación', insuflado: '2-4 horas', manta: '4-6 horas' },
  { feature: 'Coste medio', insuflado: '€€', manta: '€' },
  { feature: 'Cobertura', insuflado: 'Excelente', manta: 'Muy buena' },
  { feature: 'Puentes térmicos', insuflado: 'Eliminados', manta: 'Minimizados' },
  { feature: 'Verificación', insuflado: 'Termografía', manta: 'Visual' },
]

const faqs = [
  {
    question: '¿Cuánto tiempo dura la instalación?',
    answer:
      'La mayoría de instalaciones se completan en un solo día. El aislamiento insuflado suele requerir entre 2 y 4 horas, mientras que la instalación en manta puede llevar de 4 a 6 horas dependiendo de la superficie.',
  },
  {
    question: '¿Necesito preparar algo antes de la intervención?',
    answer:
      'Recomendamos despejar el acceso a la buhardilla y retirar objetos almacenados cerca de la zona de trabajo. Nuestro equipo se encargará del resto, incluyendo la protección de las zonas adyacentes.',
  },
  {
    question: '¿Qué materiales utilizáis?',
    answer:
      'Utilizamos exclusivamente lana mineral de primera calidad, certificada y con marcado CE. Este material es incombustible, no absorbe humedad, es resistente a plagas y tiene una vida útil superior a 50 años.',
  },
  {
    question: '¿El aislamiento afecta a la ventilación?',
    answer:
      'No. Nuestros técnicos respetan siempre las zonas de ventilación existentes y, si es necesario, instalan deflectores para garantizar una circulación de aire adecuada en la buhardilla.',
  },
  {
    question: '¿Puedo beneficiarme de las ayudas si ya tengo algo de aislamiento?',
    answer:
      'Sí, en muchos casos es posible complementar un aislamiento existente insuficiente. Evaluamos cada caso individualmente durante la visita técnica para determinar la mejor solución.',
  },
  {
    question: '¿Hay garantía sobre los trabajos?',
    answer:
      'Ofrecemos una garantía de 10 años sobre la instalación y los materiales. Además, nuestro servicio postventa está disponible para cualquier consulta o incidencia.',
  },
]

const additionalServices = [
  {
    title: 'Diagnóstico energético',
    description: 'Evaluación completa del rendimiento térmico de tu hogar con termografía.',
    icon: ThermometerSun,
  },
  {
    title: 'Aislamiento de muros',
    description: 'Complementa el aislamiento de buhardilla con los muros exteriores.',
    icon: Home,
  },
  {
    title: 'Sellado de fugas',
    description: 'Identificación y sellado de todas las infiltraciones de aire.',
    icon: Wind,
  },
]

export default function ServiciosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-verde-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-verde-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-tierra-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="badge-verde mb-4">Nuestros servicios</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Aislamiento de buhardillas{' '}
              <span className="gradient-text">profesional</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Dos técnicas adaptadas a cada situación, con materiales de primera
              calidad y la garantía de un equipo experto con más de 15 años de
              experiencia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto#presupuesto" className="btn-primary">
                Solicitar presupuesto
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#comparativa" className="btn-secondary">
                Comparar técnicas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="sticky top-32">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className={`badge ${service.color === 'verde' ? 'badge-verde' : 'badge-tierra'}`}>
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-verde-600" />
                      Especificaciones técnicas
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Conductividad</p>
                        <p className="font-semibold text-gray-900">{service.specs.conductividad}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Densidad</p>
                        <p className="font-semibold text-gray-900">{service.specs.densidad}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Espesor</p>
                        <p className="font-semibold text-gray-900">{service.specs.espesor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Resistencia</p>
                        <p className="font-semibold text-gray-900">{service.specs.resistencia}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => {
                    const Icon = feature.icon
                    return (
                      <div
                        key={feature.text}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          service.color === 'verde' ? 'bg-verde-100' : 'bg-tierra-100'
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            service.color === 'verde' ? 'text-verde-600' : 'text-tierra-600'
                          }`} />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {feature.text}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Ventajas principales</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-verde-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contacto#presupuesto"
                  className={service.color === 'verde' ? 'btn-primary' : 'btn-accent'}
                >
                  Solicitar presupuesto para {service.title.toLowerCase()}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section id="comparativa" className="section-padding bg-gradient-to-br from-verde-900 to-verde-950 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-verde-200 rounded-full text-sm font-medium mb-4">
              Comparativa
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              ¿Qué técnica es mejor para ti?
            </h2>
            <p className="text-verde-200 max-w-2xl mx-auto">
              Cada buhardilla es diferente. Compara las dos técnicas para entender
              cuál se adapta mejor a tu situación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 font-bold">
              <div>Característica</div>
              <div className="text-center">Insuflado</div>
              <div className="text-center">En manta</div>
            </div>
            {comparisons.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 p-6 ${
                  index < comparisons.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <div className="text-verde-200">{row.feature}</div>
                <div className="text-center font-medium">{row.insuflado}</div>
                <div className="text-center font-medium">{row.manta}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-verde-200 mb-6">
              ¿No estás seguro? Nuestros expertos te asesorarán gratis.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-verde-800 font-semibold rounded-xl hover:bg-verde-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Hablar con un experto
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-tierra mb-4">Más servicios</span>
            <h2 className="section-title">Servicios complementarios</h2>
            <p className="section-subtitle">
              Optimiza aún más la eficiencia energética de tu hogar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-tierra-100 to-tierra-200 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-tierra-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-cielo mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h2 className="section-title">Preguntas frecuentes</h2>
            <p className="section-subtitle">
              Respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-verde-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 bg-white rounded-b-2xl -mt-2"
                  >
                    <p className="text-gray-600 leading-relaxed pt-4 border-t border-gray-100">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-verde-600 to-verde-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Leaf className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                ¿Listo para mejorar tu confort?
              </h2>
              <p className="text-xl text-verde-100 mb-8">
                Solicita un presupuesto gratuito y descubre cuánto puedes ahorrar
                con el aislamiento de tu buhardilla.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto#presupuesto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-verde-700 font-semibold rounded-xl shadow-xl hover:bg-verde-50 transition-colors"
                >
                  Pedir presupuesto gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+34919469528"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-verde-800 text-white font-semibold rounded-xl border-2 border-verde-500 hover:bg-verde-900 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}



'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileCheck,
  Euro,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Building2,
  Home,
  Zap,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Phone,
  HelpCircle,
} from 'lucide-react'

const benefits = [
  {
    icon: Euro,
    title: '100% financiado',
    description: 'El coste de tu aislamiento está completamente cubierto por los CAE. Tú no pagas nada.',
  },
  {
    icon: Leaf,
    title: 'Transición ecológica',
    description: 'Contribuyes a reducir las emisiones de CO2 y a cumplir los objetivos europeos de eficiencia.',
  },
  {
    icon: Shield,
    title: 'Programa oficial',
    description: 'Los CAE son un dispositivo legal y regulado por el gobierno español.',
  },
  {
    icon: Clock,
    title: 'Proceso rápido',
    description: 'De la verificación a la instalación, el proceso completo toma solo unos días.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Verificación de elegibilidad',
    description: 'Respondemos a unas preguntas sencillas para confirmar que tu vivienda cumple los requisitos del programa.',
  },
  {
    number: '02',
    title: 'Diagnóstico técnico',
    description: 'Un técnico visita tu domicilio para evaluar la buhardilla y proponer la mejor solución de aislamiento.',
  },
  {
    number: '03',
    title: 'Firma del contrato CAE',
    description: 'Firmas un contrato de cesión de los certificados de ahorro energético a Verdenomia.',
  },
  {
    number: '04',
    title: 'Instalación del aislamiento',
    description: 'Nuestros técnicos realizan la instalación en pocas horas, sin obras ni molestias.',
  },
  {
    number: '05',
    title: 'Validación y certificación',
    description: 'Documentamos el trabajo realizado y generamos los certificados de ahorro energético.',
  },
]

const stats = [
  { value: '2,500+', label: 'Hogares aislados', icon: Home },
  { value: '15M+', label: 'kWh ahorrados', icon: Zap },
  { value: '3,500+', label: 'Toneladas CO2 evitadas', icon: Leaf },
  { value: '100%', label: 'Clientes satisfechos', icon: Users },
]

export default function CAEsPage() {
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
              <FileCheck className="w-4 h-4" />
              Programa oficial de eficiencia energética
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              ¿Qué son los
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-verde-300 to-green-200">
                Certificados de Ahorro Energético?
              </span>
            </h1>

            <p className="text-xl text-verde-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Los CAE son un mecanismo que permite financiar al 100% las obras de eficiencia energética en tu hogar, sin coste para ti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#eligibilidad" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4">
                Comprobar mi elegibilidad
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is CAE Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-6">
                ¿Cómo funcionan los CAE?
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Los <strong>Certificados de Ahorro Energético (CAE)</strong> son un instrumento creado por el gobierno español para impulsar la eficiencia energética en edificios.
                </p>
                <p>
                  Las grandes empresas energéticas tienen la obligación legal de generar ahorros de energía. Para cumplir, financian obras de rehabilitación energética en viviendas particulares.
                </p>
                <p>
                  <strong>¿El resultado?</strong> Tú obtienes un aislamiento de calidad profesional sin pagar nada. A cambio, cedes los certificados de ahorro generados a la empresa que financia la obra.
                </p>
              </div>

              <div className="mt-8 p-6 bg-verde-50 rounded-2xl border border-verde-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-verde-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-verde-800 mb-2">¿Es realmente gratis?</h3>
                    <p className="text-gray-600">
                      Sí, 100% gratis. No hay costes ocultos, ni cuotas mensuales, ni compromisos futuros. Solo firmas la cesión de los CAE y nosotros nos encargamos del resto.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-verde-100 to-verde-50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="bg-white rounded-2xl p-5 shadow-sm">
                      <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-verde-600" />
                      </div>
                      <h3 className="font-bold text-verde-800 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-verde-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-verde-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-verde-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              ¿Cómo funciona el proceso?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proceso simple y transparente, de principio a fin.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-verde-500 to-verde-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-verde-500/30">
                    {step.number}
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm">
                    <h3 className="text-xl font-bold text-verde-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/#eligibilidad" className="btn-primary text-lg px-8 py-4">
              Comprobar mi elegibilidad
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              ¿Quién puede beneficiarse?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los criterios de elegibilidad son sencillos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-verde-50 rounded-2xl p-8 border border-verde-100"
            >
              <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-verde-600" />
              </div>
              <h3 className="text-xl font-bold text-verde-800 mb-4">Particulares (B2C)</h3>
              <ul className="space-y-3">
                {[
                  'Propietario u ocupante de la vivienda',
                  'Vivienda con buhardilla o ático',
                  'Suelo de buhardilla no aislado o mal aislado',
                  'Vivienda construida hace más de 2 años',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-verde-50 rounded-2xl p-8 border border-verde-100"
            >
              <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-verde-600" />
              </div>
              <h3 className="text-xl font-bold text-verde-800 mb-4">Profesionales (B2B)</h3>
              <ul className="space-y-3">
                {[
                  'Empresas, hoteles, comercios, almacenes',
                  'Edificios con zonas no calefactadas',
                  'Iluminación antigua (reemplazo por LED)',
                  'Instalaciones de más de 2 años',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/profesionales" className="inline-flex items-center gap-2 mt-6 text-verde-600 font-semibold hover:text-verde-700 transition-colors">
                Ver soluciones B2B
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
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
              Profita del programa CAE ahora
            </h2>
            <p className="text-xl text-verde-100 mb-8 max-w-2xl mx-auto">
              Verifica tu elegibilidad en menos de 2 minutos y obtén un diagnóstico gratuito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#eligibilidad" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4">
                Verificar mi elegibilidad
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+34919469528" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


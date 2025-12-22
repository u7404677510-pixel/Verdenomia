'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Euro,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText,
  Home,
  Shield,
  Clock,
  Users,
  Award,
  Leaf,
  ChevronRight,
  HelpCircle,
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  Target,
  TrendingDown,
} from 'lucide-react'
import { useState } from 'react'

const programs = [
  {
    name: 'PREE',
    fullName: 'Programa de Rehabilitación Energética de Edificios',
    description:
      'Ayudas para la mejora de la eficiencia energética de edificios residenciales existentes. Cubre actuaciones en envolvente térmica, incluyendo aislamiento de cubiertas y buhardillas.',
    coverage: 'Hasta el 80%',
    requirements: [
      'Edificio construido antes de 2007',
      'Mejora mínima de una letra energética',
      'Uso residencial o terciario',
    ],
    color: 'verde',
  },
  {
    name: 'PRTR - NextGenerationEU',
    fullName: 'Plan de Recuperación, Transformación y Resiliencia',
    description:
      'Fondos europeos destinados a impulsar la transición ecológica. El componente 2 financia actuaciones de rehabilitación energética en viviendas y edificios.',
    coverage: 'Hasta el 100%',
    requirements: [
      'Reducción de al menos 30% consumo energía primaria',
      'No fósil como calefacción principal (según zona)',
      'Vivienda habitual del solicitante',
    ],
    color: 'cielo',
  },
]

const eligibilitySteps = [
  {
    step: 1,
    title: 'Verificación telefónica',
    description: 'Llámanos o rellena el formulario. En 24h verificamos tu elegibilidad inicial.',
    icon: Phone,
    duration: '24 horas',
  },
  {
    step: 2,
    title: 'Visita técnica',
    description: 'Un técnico visita tu hogar para evaluar la buhardilla y tomar medidas.',
    icon: Home,
    duration: '48-72 horas',
  },
  {
    step: 3,
    title: 'Preparación del dossier',
    description: 'Recopilamos toda la documentación y preparamos la solicitud de ayuda.',
    icon: FileText,
    duration: '5-7 días',
  },
  {
    step: 4,
    title: 'Validación',
    description: 'Presentamos el dossier a la administración competente y esperamos validación.',
    icon: Shield,
    duration: 'Variable',
  },
  {
    step: 5,
    title: 'Instalación',
    description: 'Una vez validado, realizamos la instalación en menos de 10 días.',
    icon: Users,
    duration: '<10 días',
  },
  {
    step: 6,
    title: 'Cierre y pago',
    description: 'Finalizamos la documentación. Solo pagas el resto a cargo (desde 1€).',
    icon: Award,
    duration: 'Inmediato',
  },
]

const stats = [
  { value: '97%', label: 'Dossiers aceptados', icon: FileText },
  { value: '<10', label: 'Días para instalación', icon: Clock },
  { value: '93%', label: 'Clientes satisfechos', icon: Award },
  { value: '72h', label: 'Resolución incidencias', icon: Shield },
]

const qualityObjectives = [
  {
    title: 'Tasa de aceptación de dossiers',
    value: '>97%',
    description: 'Más del 97% de los dossiers que presentamos son aceptados a la primera.',
  },
  {
    title: 'Plazo de instalación',
    value: '<10 días',
    description: 'La instalación se realiza en menos de 10 días tras la validación del dossier.',
  },
  {
    title: 'Satisfacción cliente',
    value: '>93%',
    description: 'Más del 93% de nuestros clientes nos califican con 5 estrellas.',
  },
  {
    title: 'Resolución de incidencias',
    value: '<72 horas',
    description: 'Cualquier incidencia se resuelve en un plazo máximo de 72 horas.',
  },
  {
    title: 'Control de calidad',
    value: '100%',
    description: 'Todas las instalaciones pasan por un control de calidad sistemático.',
  },
  {
    title: 'Ahorro energético',
    value: '20-35%',
    description: 'Reducción media del consumo energético de nuestros clientes.',
  },
]

const responsibilities = [
  {
    team: 'Equipo comercial',
    role: 'Recogida de información fiable y completa para preparar los dossiers.',
    icon: Phone,
  },
  {
    team: 'Planificación',
    role: 'Coordinación de visitas e instalaciones respetando los plazos comprometidos.',
    icon: Calendar,
  },
  {
    team: 'Instalación',
    role: 'Ejecución de los trabajos conforme a las normas técnicas y de seguridad.',
    icon: Users,
  },
  {
    team: 'Administración',
    role: 'Gestión rigurosa de los dossiers y seguimiento de los expedientes.',
    icon: FileText,
  },
]

export default function AyudasPage() {
  const [selectedProgram, setSelectedProgram] = useState(0)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cielo-50 via-verde-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cielo-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-verde-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="badge-cielo mb-4">
                <Sparkles className="w-4 h-4" />
                Ayudas y subvenciones
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                Aísla tu hogar por{' '}
                <span className="text-verde-600">solo 1€</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Gracias a los programas públicos PREE y NextGenerationEU, la
                mayoría de los hogares españoles pueden beneficiarse de ayudas
                que cubren casi la totalidad del coste del aislamiento.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contacto#presupuesto" className="btn-primary">
                  Verificar mi elegibilidad
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+34919469528" className="btn-secondary">
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-verde-500 to-verde-600 rounded-2xl flex items-center justify-center">
                    <Euro className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-verde-700">Hasta 100%</p>
                    <p className="text-gray-600">del coste subvencionado</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-600" />
                    <span className="text-gray-700">Sin adelanto de dinero</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-600" />
                    <span className="text-gray-700">Gestión 100% incluida</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-600" />
                    <span className="text-gray-700">Verificación en 24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-600" />
                    <span className="text-gray-700">Compatible con otras ayudas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-verde mb-4">Programas oficiales</span>
            <h2 className="section-title">Ayudas disponibles</h2>
            <p className="section-subtitle">
              Dos programas principales financian el aislamiento de buhardillas en España
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card cursor-pointer transition-all ${
                  selectedProgram === index
                    ? 'ring-2 ring-verde-500 shadow-xl'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedProgram(index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`badge mb-2 ${
                      program.color === 'verde' ? 'badge-verde' : 'badge-cielo'
                    }`}>
                      {program.name}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {program.fullName}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-verde-600">
                      {program.coverage}
                    </p>
                    <p className="text-sm text-gray-500">financiado</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div>
                  <p className="font-semibold text-gray-900 mb-3">Requisitos principales:</p>
                  <ul className="space-y-2">
                    {program.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-verde-600 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Tool Placeholder */}
      <section className="section-padding bg-gradient-to-br from-verde-900 to-verde-950 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-verde-200 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                Herramienta de elegibilidad
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                ¿Puedo beneficiarme de las ayudas?
              </h2>
              <p className="text-verde-200 mb-8 text-lg">
                La mayoría de los hogares españoles son elegibles. Verificamos tu
                situación gratuitamente en menos de 24 horas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-verde-800 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Tipo de vivienda</p>
                    <p className="text-sm text-verde-300">Casa, piso, edificio...</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-verde-800 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Año de construcción</p>
                    <p className="text-sm text-verde-300">Edificios anteriores a 2007</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-verde-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-sm text-verde-300">Toda España peninsular e islas</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Verifica tu elegibilidad</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-verde-200 mb-2">
                    Código postal
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: 28001"
                    className="w-full px-4 py-3 bg-white/10 border border-verde-700 rounded-xl text-white placeholder:text-verde-400 focus:border-verde-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-verde-200 mb-2">
                    Tipo de vivienda
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-verde-700 rounded-xl text-white focus:border-verde-500 focus:outline-none">
                    <option value="">Seleccionar...</option>
                    <option value="casa">Casa individual</option>
                    <option value="adosado">Casa adosada</option>
                    <option value="piso">Piso en edificio</option>
                    <option value="atico">Ático</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-verde-200 mb-2">
                    Año de construcción aproximado
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-verde-700 rounded-xl text-white focus:border-verde-500 focus:outline-none">
                    <option value="">Seleccionar...</option>
                    <option value="pre1980">Antes de 1980</option>
                    <option value="1980-2000">1980 - 2000</option>
                    <option value="2000-2007">2000 - 2007</option>
                    <option value="post2007">Después de 2007</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-verde-200 mb-2">
                    Teléfono de contacto
                  </label>
                  <input
                    type="tel"
                    placeholder="Ej: 612 345 678"
                    className="w-full px-4 py-3 bg-white/10 border border-verde-700 rounded-xl text-white placeholder:text-verde-400 focus:border-verde-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-tierra-500 hover:bg-tierra-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Verificar elegibilidad
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <p className="text-xs text-verde-300 mt-4 text-center">
                Te llamamos en menos de 24h para confirmar tu elegibilidad
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-tierra mb-4">Proceso paso a paso</span>
            <h2 className="section-title">¿Cómo funciona?</h2>
            <p className="section-subtitle">
              Nos encargamos de todo el proceso, desde la verificación hasta la instalación
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-verde-200 -translate-x-1/2" />

            <div className="space-y-8">
              {eligibilitySteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col lg:flex-row items-center gap-6 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className={`card ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-md`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-verde-100 rounded-lg flex items-center justify-center lg:hidden">
                            <Icon className="w-5 h-5 text-verde-600" />
                          </div>
                          <div>
                            <span className="text-sm text-verde-600 font-medium">
                              Paso {step.step}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        <span className="inline-flex items-center gap-1 text-sm text-verde-600 font-medium">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="hidden lg:flex w-16 h-16 bg-verde-600 rounded-2xl items-center justify-center shadow-lg z-10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Stats */}
      <section className="py-12 bg-verde-50 border-y border-verde-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-verde-100 rounded-2xl mb-4">
                    <Icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-verde-700 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Objectives */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-cielo mb-4">
              <Award className="w-4 h-4" />
              Política de calidad
            </span>
            <h2 className="section-title">Nuestros compromisos</h2>
            <p className="section-subtitle">
              Objetivos de calidad mesurables, revisados mensualmente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityObjectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-gray-900">{objective.title}</h3>
                  <span className="text-2xl font-bold text-verde-600">
                    {objective.value}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-tierra mb-4">Organización</span>
            <h2 className="section-title">Responsabilidades claras</h2>
            <p className="section-subtitle">
              Cada equipo tiene un rol definido para garantizar la calidad del servicio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((resp, index) => {
              const Icon = resp.icon
              return (
                <motion.div
                  key={resp.team}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <div className="w-14 h-14 bg-tierra-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-tierra-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{resp.team}</h3>
                  <p className="text-gray-600 text-sm">{resp.role}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Política de calidad alineada con los principios ISO 9001.
              Última revisión: Enero 2025.
            </p>
            <Link href="/calidad" className="text-verde-600 font-semibold hover:text-verde-700 inline-flex items-center gap-1">
              Ver política completa
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cielo-500 to-cielo-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Euro className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                No dejes pasar esta oportunidad
              </h2>
              <p className="text-xl text-cielo-100 mb-8">
                Las ayudas están disponibles por tiempo limitado.
                Verifica tu elegibilidad hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto#presupuesto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cielo-700 font-semibold rounded-xl shadow-xl hover:bg-cielo-50 transition-colors"
                >
                  Verificar mi elegibilidad
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+34919469528"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cielo-700 text-white font-semibold rounded-xl border-2 border-cielo-400 hover:bg-cielo-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +34 919 46 95 28
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}



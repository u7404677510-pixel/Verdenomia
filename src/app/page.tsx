'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Phone,
  Star,
  Shield,
  Clock,
  Euro,
  Thermometer,
  Home,
  Zap,
  Users,
  Award,
  ChevronRight,
  Sparkles,
  Wind,
  Layers,
  FileCheck,
} from 'lucide-react'

// Wizard steps configuration
const wizardSteps = [
  {
    id: 1,
    question: '¿Eres propietario u ocupante de la vivienda?',
    options: [
      { value: 'propietario', label: 'Soy propietario', icon: Home },
      { value: 'inquilino', label: 'Soy inquilino', icon: Users },
    ],
  },
  {
    id: 2,
    question: '¿Tu vivienda tiene buhardilla o ático?',
    options: [
      { value: 'si', label: 'Sí, tiene buhardilla/ático', icon: Home },
      { value: 'no', label: 'No tiene', icon: Home },
    ],
  },
  {
    id: 3,
    question: '¿El suelo de tu buhardilla está aislado actualmente?',
    options: [
      { value: 'no', label: 'No está aislado', icon: Thermometer },
      { value: 'parcial', label: 'Parcialmente aislado', icon: Thermometer },
      { value: 'no_se', label: 'No lo sé', icon: Thermometer },
    ],
  },
  {
    id: 4,
    question: '¿Cuál es el tipo de calefacción de tu vivienda?',
    options: [
      { value: 'gas', label: 'Gas natural', icon: Zap },
      { value: 'electrico', label: 'Eléctrico', icon: Zap },
      { value: 'gasoil', label: 'Gasóleo', icon: Zap },
      { value: 'otro', label: 'Otro', icon: Zap },
    ],
  },
]

const testimonials = [
  {
    name: 'María García',
    location: 'Madrid',
    rating: 5,
    text: 'Increíble servicio. El aislamiento se hizo en unas pocas horas y ya notamos la diferencia en la factura. ¡Y todo gratis gracias a los CAE!',
    date: 'Hace 2 semanas',
  },
  {
    name: 'Carlos Rodríguez',
    location: 'Alicante',
    rating: 5,
    text: 'Muy profesionales. Me explicaron todo el proceso de los certificados de ahorro energético y no pagué ni un euro.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Ana Martínez',
    location: 'Valencia',
    rating: 5,
    text: 'La casa está mucho más caliente en invierno. El equipo fue muy amable y el trabajo impecable.',
    date: 'Hace 3 semanas',
  },
]

const stats = [
  { value: '2,500+', label: 'Hogares aislados', icon: Home },
  { value: '100%', label: 'Financiado por CAE', icon: Euro },
  { value: '30%', label: 'Ahorro energético', icon: Thermometer },
  { value: '24h', label: 'Respuesta garantizada', icon: Clock },
]

const process = [
  {
    step: '01',
    title: 'Verifica tu elegibilidad',
    description: 'Responde unas preguntas sencillas para saber si cumples los requisitos del programa CAE.',
    icon: FileCheck,
  },
  {
    step: '02',
    title: 'Diagnóstico gratuito',
    description: 'Un técnico evalúa tu buhardilla y te explica el proceso sin ningún compromiso.',
    icon: Home,
  },
  {
    step: '03',
    title: 'Instalación rápida',
    description: 'Aislamos el suelo de tu buhardilla en pocas horas con técnicas de soplado o desenrollado.',
    icon: Wind,
  },
  {
    step: '04',
    title: '¡0€ para ti!',
    description: 'Gracias a los CAE, la intervención está 100% financiada. No pagas nada.',
    icon: Sparkles,
  },
]

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    codigoPostal: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value })
    if (currentStep < wizardSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowForm(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the data to your backend
    console.log({ answers, formData })
    setIsSubmitted(true)
  }

  const resetWizard = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowForm(false)
    setIsSubmitted(false)
    setFormData({ nombre: '', apellido: '', email: '', telefono: '', codigoPostal: '' })
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-verde-900 via-verde-800 to-verde-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-verde-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-verde-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Programa CAE 2024 activo
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                Aísla tu buhardilla
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-verde-300 to-green-200">
                  100% gratis
                </span>
              </h1>

              <p className="text-xl text-verde-100 mb-8 leading-relaxed">
                Gracias a los <strong>Certificados de Ahorro Energético (CAE)</strong>, 
                aislamos el suelo de tu buhardilla sin coste para ti. 
                Reduce tu factura hasta un <strong>30%</strong>.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Euro, text: '0€ — 100% financiado' },
                  { icon: Clock, text: 'Instalación en pocas horas' },
                  { icon: Thermometer, text: 'Hasta -30% en factura' },
                  { icon: Shield, text: 'Sin obras ni molestias' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-verde-300" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#eligibilidad"
                  className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4 shadow-2xl shadow-verde-900/50"
                >
                  ¿Soy elegible?
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+34919469528"
                  className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </div>
            </motion.div>

            {/* Right - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                {/* House illustration */}
                <div className="aspect-square relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      {/* Simple house SVG */}
                      <svg viewBox="0 0 200 180" className="w-full h-auto">
                        {/* Roof */}
                        <path d="M100 10 L190 80 L10 80 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                        {/* Attic floor - highlighted */}
                        <rect x="30" y="80" width="140" height="15" fill="rgba(74, 222, 128, 0.5)" stroke="rgba(74, 222, 128, 0.8)" strokeWidth="2">
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                        </rect>
                        {/* House body */}
                        <rect x="30" y="95" width="140" height="75" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                        {/* Door */}
                        <rect x="85" y="130" width="30" height="40" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                        {/* Windows */}
                        <rect x="45" y="110" width="25" height="25" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                        <rect x="130" y="110" width="25" height="25" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Labels */}
                  <div className="absolute top-1/4 right-0 transform translate-x-4">
                    <div className="bg-verde-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg">
                      Suelo buhardilla
                      <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-verde-500" />
                    </div>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center">
                      <Thermometer className="w-6 h-6 text-verde-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-verde-800">-30%</div>
                      <div className="text-sm text-gray-500">Factura energética</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Euro className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-verde-800">0€</div>
                      <div className="text-sm text-gray-500">Coste para ti</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative -mt-1">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-verde-50 to-white border border-verde-100"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-verde-100 rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-verde-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-verde-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Wizard Section */}
      <section id="eligibilidad" className="py-20 bg-gradient-to-b from-white to-verde-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-verde-100 text-verde-700 rounded-full text-sm font-semibold mb-4">
              ✨ Respuesta en 24h garantizada
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              ¿Eres elegible al programa CAE?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Responde a unas preguntas sencillas para saber si puedes beneficiarte del aislamiento 100% financiado.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl shadow-verde-900/10 overflow-hidden">
              {/* Progress bar */}
              {!isSubmitted && (
                <div className="h-2 bg-verde-100">
                  <motion.div
                    className="h-full bg-gradient-to-r from-verde-500 to-verde-600"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: showForm 
                        ? '100%' 
                        : `${((currentStep + 1) / (wizardSteps.length + 1)) * 100}%` 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}

              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 bg-verde-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-verde-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-verde-800 mb-3">
                        ¡Gracias por tu solicitud!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Un asesor te contactará en las próximas <strong>24 horas</strong> para evaluar tu elegibilidad y programar un diagnóstico gratuito.
                      </p>
                      <button
                        onClick={resetWizard}
                        className="btn-secondary"
                      >
                        Nueva consulta
                      </button>
                    </motion.div>
                  ) : showForm ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-verde-800 mb-2">
                          ¡Buenas noticias! Pareces elegible 🎉
                        </h3>
                        <p className="text-gray-600">
                          Déjanos tus datos para que un asesor te contacte.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500 transition-colors"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Apellido *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.apellido}
                            onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500 transition-colors"
                            placeholder="Tu apellido"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500 transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500 transition-colors"
                            placeholder="+34 600 000 000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Código Postal *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.codigoPostal}
                            onChange={(e) => setFormData({ ...formData, codigoPostal: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500 transition-colors"
                            placeholder="28001"
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          required
                          id="privacy"
                          className="mt-1 w-4 h-4 text-verde-600 border-gray-300 rounded focus:ring-verde-500"
                        />
                        <label htmlFor="privacy" className="text-sm text-gray-600">
                          Acepto la <Link href="/privacidad" className="text-verde-600 hover:underline">política de privacidad</Link> y el tratamiento de mis datos para ser contactado.
                        </label>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="btn-secondary flex-1"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Atrás
                        </button>
                        <button type="submit" className="btn-primary flex-1">
                          Enviar solicitud
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key={`step-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <span className="text-sm text-verde-600 font-medium">
                          Pregunta {currentStep + 1} de {wizardSteps.length}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-verde-800 mt-2">
                          {wizardSteps[currentStep].question}
                        </h3>
                      </div>

                      <div className="grid gap-3">
                        {wizardSteps[currentStep].options.map((option) => {
                          const Icon = option.icon
                          return (
                            <button
                              key={option.value}
                              onClick={() => handleAnswer(option.value)}
                              className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 group hover:border-verde-500 hover:bg-verde-50 ${
                                answers[currentStep] === option.value
                                  ? 'border-verde-500 bg-verde-50'
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                                answers[currentStep] === option.value
                                  ? 'bg-verde-500 text-white'
                                  : 'bg-gray-100 text-gray-500 group-hover:bg-verde-100 group-hover:text-verde-600'
                              }`}>
                                <Icon className="w-6 h-6" />
                              </div>
                              <span className="font-medium text-gray-800">{option.label}</span>
                              <ChevronRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-verde-500" />
                            </button>
                          )
                        })}
                      </div>

                      {currentStep > 0 && (
                        <button
                          onClick={handleBack}
                          className="flex items-center gap-2 text-gray-500 hover:text-verde-600 transition-colors mx-auto"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Pregunta anterior
                        </button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insulate Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              ¿Por qué aislar el suelo de tu buhardilla?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              El 30% de las pérdidas de calor de tu hogar se producen por el techo. Aislar tu buhardilla es la solución más eficaz y rápida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Benefits */}
            <div className="space-y-6">
              {[
                {
                  icon: Thermometer,
                  title: 'Confort térmico todo el año',
                  description: 'Mantén tu casa caliente en invierno y fresca en verano sin esfuerzo.',
                },
                {
                  icon: Euro,
                  title: 'Ahorro en tu factura',
                  description: 'Reduce tu consumo de calefacción y aire acondicionado hasta un 30%.',
                },
                {
                  icon: Clock,
                  title: 'Instalación rápida',
                  description: 'El proceso se realiza en pocas horas, sin obras ni molestias en tu hogar.',
                },
                {
                  icon: Shield,
                  title: 'Materiales de calidad',
                  description: 'Usamos lana mineral de alta densidad con garantía de 25 años.',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-verde-50 border border-verde-100"
                >
                  <div className="w-14 h-14 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-verde-800 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Techniques */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-verde-800 to-verde-900 rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Nuestras técnicas de aislamiento</h3>
              
              <div className="space-y-6">
                {/* Technique 1 - Blown */}
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Wind className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Aislamiento soplado</h4>
                      <p className="text-verde-200 text-sm">Lana mineral proyectada</p>
                    </div>
                  </div>
                  <p className="text-verde-100 text-sm mb-3">
                    Ideal para buhardillas con acceso difícil. La lana mineral se proyecta de forma homogénea sobre toda la superficie.
                  </p>
                  <div className="flex items-center gap-2 text-verde-200 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Rápido • Sin residuos • Cobertura total
                  </div>
                </div>

                {/* Technique 2 - Rolled */}
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Aislamiento en rollos</h4>
                      <p className="text-verde-200 text-sm">Manta de lana mineral</p>
                    </div>
                  </div>
                  <p className="text-verde-100 text-sm mb-3">
                    Perfecto para buhardillas accesibles. Se desenrollan mantas de lana mineral de alta densidad.
                  </p>
                  <div className="flex items-center gap-2 text-verde-200 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Espesor preciso • Alta densidad • Durabilidad
                  </div>
                </div>
              </div>

              <Link href="/caes" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 w-full justify-center mt-6">
                Descubre los CAE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
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
              Un proceso simple y transparent
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la verificación de elegibilidad a la instalación, te acompañamos en cada etapa.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg shadow-verde-900/5"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-verde-500 to-verde-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {item.step}
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <h3 className="text-lg font-bold text-verde-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-verde-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="#eligibilidad" className="btn-primary text-lg px-8 py-4">
              Comprobar mi elegibilidad
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Más de 2,500 hogares ya han confiado en nosotros.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-verde-50 rounded-2xl p-6 border border-verde-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-verde-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8"
          >
            <div className="flex items-center gap-2 text-gray-500">
              <Award className="w-8 h-8" />
              <span className="font-medium">Empresa certificada</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Shield className="w-8 h-8" />
              <span className="font-medium">Garantía 25 años</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Users className="w-8 h-8" />
              <span className="font-medium">+50 técnicos</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-verde-800 to-verde-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              ¿Listo para aislar tu hogar gratis?
            </h2>
            <p className="text-xl text-verde-100 mb-8 max-w-2xl mx-auto">
              Gracias a los Certificados de Ahorro Energético (CAE), tu aislamiento está 100% financiado. No esperes más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#eligibilidad" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4">
                Verificar mi elegibilidad
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+34919469528" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                +34 919 46 95 28
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

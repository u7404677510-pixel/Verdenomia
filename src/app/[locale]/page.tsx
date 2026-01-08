'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  Euro,
  Clock,
  Thermometer,
  Shield,
  CheckCircle2,
  Home,
  User,
  Flame,
  Wind,
  ChevronLeft,
  Star,
  Sparkles,
  Zap,
  Award,
  Users,
  Building,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'

type WizardStep = 'q1' | 'q2' | 'q3' | 'q4' | 'form' | 'success'

interface WizardAnswer {
  q1?: string
  q2?: string
  q3?: string
  q4?: string
}

export default function HomePage() {
  const t = useTranslations()
  const locale = useLocale() as Locale
  const [wizardStep, setWizardStep] = useState<WizardStep>('q1')
  const [answers, setAnswers] = useState<WizardAnswer>({})
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    codigoPostal: '',
    consent: false,
  })

  const handleAnswer = (question: keyof WizardAnswer, answer: string) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }))
    const nextStep: Record<string, WizardStep> = {
      q1: 'q2',
      q2: 'q3',
      q3: 'q4',
      q4: 'form',
    }
    setWizardStep(nextStep[question] || 'form')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setWizardStep('success')
  }

  const goBack = () => {
    const prevStep: Record<string, WizardStep> = {
      q2: 'q1',
      q3: 'q2',
      q4: 'q3',
      form: 'q4',
    }
    setWizardStep(prevStep[wizardStep] || 'q1')
  }

  const resetWizard = () => {
    setWizardStep('q1')
    setAnswers({})
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      codigoPostal: '',
      consent: false,
    })
  }

  const stepNumber = {
    q1: 1,
    q2: 2,
    q3: 3,
    q4: 4,
    form: 5,
    success: 5,
  }

  return (
    <>
      {/* Hero Section - Full Page with Background Image */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-house.png"
            alt={locale === 'es' ? 'Aislamiento de buhardilla' : 'Attic insulation'}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Subtle overlay for text readability - neutral dark */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-sm mb-8 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {t('home.hero.badge')}
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8">
                {t('home.hero.title')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                  {t('home.hero.titleHighlight')}
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl"
                dangerouslySetInnerHTML={{ __html: t.raw('home.hero.description') }}
              />

              {/* Benefits grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Euro, text: t('home.hero.benefit1') },
                  { icon: Clock, text: t('home.hero.benefit2') },
                  { icon: Thermometer, text: t('home.hero.benefit3') },
                  { icon: Shield, text: t('home.hero.benefit4') },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10"
                  >
                    <benefit.icon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="#eligibilidad"
                  className="btn-cta inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  {t('home.hero.ctaPrimary')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+34919947360"
                  className="btn-secondary-dark inline-flex items-center justify-center gap-2 px-8 py-4"
                >
                  <Phone className="w-5 h-5" />
                  {t('home.hero.ctaSecondary')}
                </a>
              </motion.div>
            </motion.div>

            {/* Right side - Floating stats cards - positioned to not overlap */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative w-full max-w-lg h-[400px]">
                {/* Card 1: 0€ - Top right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.5 },
                    scale: { duration: 0.5, delay: 0.5 },
                    y: { duration: 4, repeat: Infinity, delay: 0.5 }
                  }}
                  className="absolute top-0 right-0 bg-white rounded-2xl shadow-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                      <Euro className="w-6 h-6 text-yellow-900" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">0€</p>
                      <p className="text-xs text-gray-500">
                        {locale === 'es' ? 'Coste para ti' : 'Cost for you'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Suelo buhardilla - Middle left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.7 },
                    scale: { duration: 0.5, delay: 0.7 },
                    y: { duration: 3.5, repeat: Infinity, delay: 1 }
                  }}
                  className="absolute top-[120px] left-0 bg-yellow-400 text-yellow-900 px-5 py-3 rounded-full font-bold shadow-lg"
                >
                  {locale === 'es' ? '✓ Suelo buhardilla' : '✓ Attic floor'}
                </motion.div>

                {/* Card 3: -30% - Bottom left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.9 },
                    scale: { duration: 0.5, delay: 0.9 },
                    y: { duration: 3, repeat: Infinity, delay: 0.5 }
                  }}
                  className="absolute bottom-[80px] left-[20px] bg-white rounded-2xl shadow-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-verde-500 to-verde-600 rounded-xl flex items-center justify-center">
                      <Thermometer className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">-30%</p>
                      <p className="text-xs text-gray-500">
                        {locale === 'es' ? 'Factura energética' : 'Energy bill'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: 100% Financiado - Bottom right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 1.1 },
                    scale: { duration: 0.5, delay: 1.1 },
                    y: { duration: 4, repeat: Infinity, delay: 2 }
                  }}
                  className="absolute bottom-0 right-[40px] bg-white rounded-2xl shadow-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">100%</p>
                      <p className="text-xs text-gray-500">
                        {locale === 'es' ? 'Financiado' : 'Funded'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats band */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '2,500+', label: t('home.stats.homes'), icon: Building },
              { value: '100%', label: t('home.stats.funded'), icon: Euro },
              { value: '30%', label: t('home.stats.savings'), icon: Zap },
              { value: '24h', label: t('home.stats.response'), icon: Clock },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-verde-100 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-verde-600" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Wizard */}
      <section id="eligibilidad" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Wizard card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl shadow-verde-500/10 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gray-900 text-white p-6 md:p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-medium text-verde-100">
                    {t('home.wizard.badge')}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-2">
                  {t('home.wizard.title')}
                </h2>
                <p className="text-verde-100 text-center max-w-lg mx-auto">
                  {t('home.wizard.description')}
                </p>

                {/* Progress bar */}
                {wizardStep !== 'success' && (
                  <div className="mt-6">
                    <div className="flex justify-between text-xs text-verde-200 mb-2">
                      <span>
                        {t('home.wizard.questionOf', {
                          current: stepNumber[wizardStep],
                          total: 5,
                        })}
                      </span>
                      <span>{Math.round((stepNumber[wizardStep] / 5) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${(stepNumber[wizardStep] / 5) * 100}%`,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {/* Question 1 */}
                  {wizardStep === 'q1' && (
                    <motion.div
                      key="q1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
                        {t('home.wizard.q1')}
                      </h3>
                      <div className="grid gap-3">
                        <button
                          onClick={() => handleAnswer('q1', 'propietario')}
                          className="wizard-option"
                        >
                          <Home className="w-6 h-6 text-verde-600" />
                          <span>{t('home.wizard.q1o1')}</span>
                        </button>
                        <button
                          onClick={() => handleAnswer('q1', 'inquilino')}
                          className="wizard-option"
                        >
                          <User className="w-6 h-6 text-verde-600" />
                          <span>{t('home.wizard.q1o2')}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Question 2 */}
                  {wizardStep === 'q2' && (
                    <motion.div
                      key="q2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <button
                        onClick={goBack}
                        className="flex items-center gap-1 text-verde-600 hover:text-verde-700 text-sm mb-4"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {t('home.wizard.previousQuestion')}
                      </button>
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
                        {t('home.wizard.q2')}
                      </h3>
                      <div className="grid gap-3">
                        <button
                          onClick={() => handleAnswer('q2', 'si')}
                          className="wizard-option"
                        >
                          <CheckCircle2 className="w-6 h-6 text-verde-600" />
                          <span>{t('home.wizard.q2o1')}</span>
                        </button>
                        <button
                          onClick={() => handleAnswer('q2', 'no')}
                          className="wizard-option"
                        >
                          <Shield className="w-6 h-6 text-gray-400" />
                          <span>{t('home.wizard.q2o2')}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Question 3 */}
                  {wizardStep === 'q3' && (
                    <motion.div
                      key="q3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <button
                        onClick={goBack}
                        className="flex items-center gap-1 text-verde-600 hover:text-verde-700 text-sm mb-4"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {t('home.wizard.previousQuestion')}
                      </button>
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
                        {t('home.wizard.q3')}
                      </h3>
                      <div className="grid gap-3">
                        <button
                          onClick={() => handleAnswer('q3', 'no')}
                          className="wizard-option"
                        >
                          <span>{t('home.wizard.q3o1')}</span>
                        </button>
                        <button
                          onClick={() => handleAnswer('q3', 'parcial')}
                          className="wizard-option"
                        >
                          <span>{t('home.wizard.q3o2')}</span>
                        </button>
                        <button
                          onClick={() => handleAnswer('q3', 'nosabe')}
                          className="wizard-option"
                        >
                          <span>{t('home.wizard.q3o3')}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Question 4 */}
                  {wizardStep === 'q4' && (
                    <motion.div
                      key="q4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <button
                        onClick={goBack}
                        className="flex items-center gap-1 text-verde-600 hover:text-verde-700 text-sm mb-4"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {t('home.wizard.previousQuestion')}
                      </button>
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
                        {t('home.wizard.q4')}
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => handleAnswer('q4', 'gas')}
                          className="wizard-option"
                        >
                          <Flame className="w-6 h-6 text-orange-500" />
                          <span>{t('home.wizard.q4o1')}</span>
                        </button>
                        <button
                          onClick={() => handleAnswer('q4', 'electrico')}
                          className="wizard-option"
                        >
                          <Zap className="w-6 h-6 text-yellow-500" />
                          <span>{t('home.wizard.q4o2')}</span>
                        </button>
                        <button
                          onClick={() => handleAnswer('q4', 'gasoleo')}
                          className="wizard-option"
                        >
                          <Thermometer className="w-6 h-6 text-gray-600" />
                          <span>{t('home.wizard.q4o3')}</span>
                        </button>
                        <button
                          onClick={() => handleAnswer('q4', 'otro')}
                          className="wizard-option"
                        >
                          <Wind className="w-6 h-6 text-blue-500" />
                          <span>{t('home.wizard.q4o4')}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Form */}
                  {wizardStep === 'form' && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <button
                        onClick={goBack}
                        className="flex items-center gap-1 text-verde-600 hover:text-verde-700 text-sm mb-4"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {t('home.wizard.previousQuestion')}
                      </button>

                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-verde-100 rounded-full mb-4">
                          <CheckCircle2 className="w-8 h-8 text-verde-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {t('home.wizard.formTitle')}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {t('home.wizard.formDescription')}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {t('home.wizard.fieldName')} *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.nombre}
                              onChange={(e) =>
                                setFormData({ ...formData, nombre: e.target.value })
                              }
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {t('home.wizard.fieldLastName')} *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.apellido}
                              onChange={(e) =>
                                setFormData({ ...formData, apellido: e.target.value })
                              }
                              className="form-input"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('home.wizard.fieldEmail')} *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="form-input"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {t('home.wizard.fieldPhone')} *
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.telefono}
                              onChange={(e) =>
                                setFormData({ ...formData, telefono: e.target.value })
                              }
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {t('home.wizard.fieldPostalCode')} *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.codigoPostal}
                              onChange={(e) =>
                                setFormData({ ...formData, codigoPostal: e.target.value })
                              }
                              className="form-input"
                            />
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="consent"
                            required
                            checked={formData.consent}
                            onChange={(e) =>
                              setFormData({ ...formData, consent: e.target.checked })
                            }
                            className="mt-1"
                          />
                          <label htmlFor="consent" className="text-sm text-gray-600">
                            {t.rich('home.wizard.privacyConsent', {
                              link: (chunks) => (
                                <Link
                                  href={`/${locale}/privacidad`}
                                  className="text-verde-600 hover:underline"
                                >
                                  {chunks}
                                </Link>
                              ),
                            })}
                          </label>
                        </div>

                        <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                          {t('home.wizard.submitRequest')}
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* Success */}
                  {wizardStep === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-verde-100 rounded-full mb-6">
                        <CheckCircle2 className="w-10 h-10 text-verde-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {t('home.wizard.successTitle')}
                      </h3>
                      <p
                        className="text-gray-600 mb-8"
                        dangerouslySetInnerHTML={{ __html: t.raw('home.wizard.successMessage') }}
                      />
                      <button onClick={resetWizard} className="btn-secondary">
                        {t('home.wizard.newRequest')}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why insulate section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('home.why.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('home.why.description')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Thermometer,
                title: t('home.why.benefit1Title'),
                desc: t('home.why.benefit1Desc'),
              },
              {
                icon: Euro,
                title: t('home.why.benefit2Title'),
                desc: t('home.why.benefit2Desc'),
              },
              {
                icon: Clock,
                title: t('home.why.benefit3Title'),
                desc: t('home.why.benefit3Desc'),
              },
              {
                icon: Award,
                title: t('home.why.benefit4Title'),
                desc: t('home.why.benefit4Desc'),
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-verde-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Techniques */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-0">
                {t('home.why.techniquesTitle')}
              </h3>
              <Link href={`/${locale}/caes`} className="btn-cta">
                {t('home.why.discoverCAE')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Blown insulation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/technique-insufflation.png"
                    alt={t('home.why.blownTitle')}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center">
                      <Wind className="w-7 h-7 text-yellow-900" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{t('home.why.blownTitle')}</h4>
                      <p className="text-verde-200 text-sm">{t('home.why.blownSubtitle')}</p>
                    </div>
                  </div>
                  <p className="text-verde-100 mb-4">{t('home.why.blownDesc')}</p>
                  <p className="text-sm text-yellow-300 font-medium">{t('home.why.blownFeatures')}</p>
                </div>
              </div>

              {/* Rolled insulation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/technique-rouleau.png"
                    alt={t('home.why.rolledTitle')}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-verde-400 rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-verde-900" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{t('home.why.rolledTitle')}</h4>
                      <p className="text-verde-200 text-sm">{t('home.why.rolledSubtitle')}</p>
                    </div>
                  </div>
                  <p className="text-verde-100 mb-4">{t('home.why.rolledDesc')}</p>
                  <p className="text-sm text-verde-300 font-medium">{t('home.why.rolledFeatures')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('home.process.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('home.process.description')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, title: t('home.process.step1Title'), desc: t('home.process.step1Desc') },
              { icon: Users, title: t('home.process.step2Title'), desc: t('home.process.step2Desc') },
              { icon: Clock, title: t('home.process.step3Title'), desc: t('home.process.step3Desc') },
              { icon: Euro, title: t('home.process.step4Title'), desc: t('home.process.step4Desc') },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-verde-600 rounded-full flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    <step.icon className="w-6 h-6 text-verde-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                    <ArrowRight className="w-6 h-6 text-verde-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#eligibilidad" className="btn-primary text-lg">
              {t('common.checkEligibility')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('home.testimonials.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'María García',
                location: 'Madrid',
                text: 'Increíble servicio. En solo unas horas aislaron toda mi buhardilla. Ahora noto la diferencia en la factura.',
                rating: 5,
              },
              {
                name: 'Carlos López',
                location: 'Alicante',
                text: 'No me creía lo de gratis hasta que lo vi. Profesionales serios y trabajo impecable. 100% recomendado.',
                rating: 5,
              },
              {
                name: 'Ana Martínez',
                location: 'Valencia',
                text: 'El equipo fue muy amable y explicó todo el proceso. Mi casa ahora es mucho más cómoda.',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  {i === 0 ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/avatar-1.png"
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-verde-100 rounded-full flex items-center justify-center">
                      <span className="text-verde-600 font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Award, text: t('home.testimonials.certified') },
              { icon: Shield, text: t('home.testimonials.guarantee') },
              { icon: Users, text: t('home.testimonials.technicians') },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-600">
                <badge.icon className="w-5 h-5 text-verde-600" />
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#eligibilidad" className="btn-primary text-lg px-8 py-4">
                {t('home.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+34919947360" className="btn-secondary text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                +34 919 94 73 60
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}


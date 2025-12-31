'use client'

import { useState } from 'react'
import Link from 'next/link'
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

type WizardStep = 'q1' | 'q2' | 'form' | 'success'

interface WizardAnswer {
  q1?: string
  q2?: string
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
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAnswer = (question: keyof WizardAnswer, answer: string) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }))
    const nextStep: Record<string, WizardStep> = {
      q1: 'q2',
      q2: 'form',
    }
    setWizardStep(nextStep[question] || 'form')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'eligibility',
          data: {
            ...formData,
            answers,
          },
        }),
      })
      
      if (response.ok) {
        setWizardStep('success')
      } else {
        console.error('Error sending email')
        // Still show success to user but log error
        setWizardStep('success')
      }
    } catch (error) {
      console.error('Error:', error)
      // Still show success to user but log error
      setWizardStep('success')
    } finally {
      setIsSubmitting(false)
    }
  }

  const goBack = () => {
    const prevStep: Record<string, WizardStep> = {
      q2: 'q1',
      form: 'q2',
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
    form: 3,
    success: 3,
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-verde-800 via-verde-700 to-verde-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-custom relative py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {t('home.hero.badge')}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                {t('home.hero.title')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                  {t('home.hero.titleHighlight')}
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-lg text-verde-100 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.raw('home.hero.description') }}
              />

              {/* Benefits grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Euro, text: t('home.hero.benefit1') },
                  { icon: Clock, text: t('home.hero.benefit2') },
                  { icon: Thermometer, text: t('home.hero.benefit3') },
                  { icon: Shield, text: t('home.hero.benefit4') },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                  >
                    <benefit.icon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#eligibilidad"
                  className="btn-cta inline-flex items-center justify-center gap-2 text-lg"
                >
                  {t('home.hero.ctaPrimary')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+34919947586"
                  className="btn-secondary-dark inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {t('home.hero.ctaSecondary')}
                </a>
              </div>
            </div>

            {/* Right side - House illustration */}
            <div className="hidden lg:flex justify-center relative">
              <div className="relative">
                {/* House SVG */}
                <svg
                  viewBox="0 0 400 350"
                  className="w-full max-w-md"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* House body */}
                  <rect
                    x="80"
                    y="150"
                    width="240"
                    height="180"
                    fill="rgba(255,255,255,0.1)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                  />
                  {/* Roof */}
                  <path
                    d="M50 150 L200 50 L350 150"
                    fill="rgba(255,255,255,0.15)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="3"
                  />
                  {/* Attic floor - highlighted */}
                  <rect
                    x="80"
                    y="140"
                    width="240"
                    height="20"
                    fill="#fbbf24"
                    opacity="0.8"
                  />
                  {/* Windows */}
                  <rect
                    x="110"
                    y="200"
                    width="60"
                    height="60"
                    fill="rgba(255,255,255,0.2)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2"
                  />
                  <rect
                    x="230"
                    y="200"
                    width="60"
                    height="60"
                    fill="rgba(255,255,255,0.2)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2"
                  />
                  {/* Door */}
                  <rect
                    x="160"
                    y="250"
                    width="80"
                    height="80"
                    fill="rgba(255,255,255,0.15)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2"
                  />
                </svg>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 right-0 bg-white rounded-2xl shadow-2xl p-4"
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

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="absolute top-1/2 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                >
                  {locale === 'es' ? 'Suelo buhardilla' : 'Attic floor'}
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-2xl p-4"
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
              </div>
            </div>
          </div>
        </div>
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
              <div className="bg-gradient-to-r from-verde-600 to-verde-700 text-white p-6 md:p-8">
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
                          total: 3,
                        })}
                      </span>
                      <span>{Math.round((stepNumber[wizardStep] / 3) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-verde-800/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${(stepNumber[wizardStep] / 3) * 100}%`,
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

                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin mr-2">⏳</span>
                              {t('common.sending')}
                            </>
                          ) : (
                            <>
                              {t('home.wizard.submitRequest')}
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
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
          <div className="bg-gradient-to-br from-verde-800 to-verde-900 rounded-3xl p-8 md:p-12 text-white">
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
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

              {/* Rolled insulation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
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
                  <div className="w-10 h-10 bg-verde-100 rounded-full flex items-center justify-center">
                    <span className="text-verde-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
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
      <section className="py-20 bg-gradient-to-br from-verde-700 to-verde-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-verde-100 max-w-2xl mx-auto mb-8">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#eligibilidad" className="btn-cta text-lg">
              {t('home.cta.primary')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+34919947586" className="btn-secondary-dark text-lg">
              <Phone className="w-5 h-5" />
              +34 919 94 75 86
            </a>
          </div>
        </div>
      </section>
    </>
  )
}


'use client'

import { useState, Suspense } from 'react'
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
  Loader2,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'
import { useUTM } from '@/hooks/useUTM'
import { trackLead, trackWizardStart, trackWizardStep, trackPhoneClick } from '@/lib/tracking'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type WizardStep = 'q1' | 'q2' | 'q3' | 'q4' | 'form' | 'success'

interface WizardAnswer {
  q1?: string
  q2?: string
  q3?: string
  q4?: string
}

/* ------------------------------------------------------------------ */
/*  Content component                                                  */
/* ------------------------------------------------------------------ */

function LandingPageContent() {
  const t = useTranslations()
  const locale = useLocale() as Locale
  const utmParams = useUTM()

  /* ---- wizard state ---- */
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

  /* ---- wizard helpers ---- */
  const handleAnswer = (question: keyof WizardAnswer, answer: string) => {
    if (question === 'q1') {
      trackWizardStart()
    } else {
      const stepMap: Record<string, string> = { q2: '2', q3: '3', q4: '4' }
      if (stepMap[question]) trackWizardStep(stepMap[question])
    }
    setAnswers((prev) => ({ ...prev, [question]: answer }))
    const nextStep: Record<string, WizardStep> = {
      q1: 'q2',
      q2: 'q3',
      q3: 'q4',
      q4: 'form',
    }
    const next = nextStep[question] || 'form'
    setWizardStep(next)
    if (next === 'form') trackWizardStep('form')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = {
        source: 'landing_page' as const,
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        telefono: formData.telefono,
        codigoPostal: formData.codigoPostal,
        answers,
        locale,
        ...utmParams,
      }
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        trackLead({ source: 'landing_page' })
      }
    } catch {
      // Continue to success state even on network errors so the user isn't stuck
    } finally {
      setIsSubmitting(false)
      setWizardStep('success')
    }
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

  const stepNumber: Record<WizardStep, number> = {
    q1: 1,
    q2: 2,
    q3: 3,
    q4: 4,
    form: 5,
    success: 5,
  }

  /* ================================================================ */
  /*  Render                                                           */
  /* ================================================================ */

  return (
    <>
      {/* ============================================================ */}
      {/* 1 · HERO + FORM  (side-by-side, above the fold)              */}
      {/* ============================================================ */}
      <section
        id="formulario"
        className="relative min-h-screen flex items-center text-white overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-house.png"
            alt={locale === 'es' ? 'Aislamiento de buhardilla' : 'Attic insulation'}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ---- Left: headline + benefits ---- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-sm mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {t('home.hero.badge')}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
                {t('home.hero.title')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                  {t('home.hero.titleHighlight')}
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg"
                dangerouslySetInnerHTML={{ __html: t.raw('home.hero.description') }}
              />

              {/* Benefit icons */}
              <div className="grid grid-cols-2 gap-3">
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
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10"
                  >
                    <benefit.icon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ---- Right: wizard card ---- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Wizard header */}
                <div className="bg-gray-900 text-white p-5 md:p-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-medium text-verde-100">
                      {t('home.wizard.badge')}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-center mb-1">
                    {t('home.wizard.title')}
                  </h2>
                  <p className="text-verde-100 text-center text-sm max-w-md mx-auto">
                    {t('home.wizard.description')}
                  </p>

                  {/* Progress bar */}
                  {wizardStep !== 'success' && (
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-verde-200 mb-1.5">
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

                {/* Wizard content */}
                <div className="p-5 md:p-6">
                  <AnimatePresence mode="wait">
                    {/* Q1 – propietario / inquilino */}
                    {wizardStep === 'q1' && (
                      <motion.div
                        key="q1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
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

                    {/* Q2 – tiene buhardilla */}
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
                          className="flex items-center gap-1 text-verde-600 hover:text-verde-700 text-sm mb-2"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          {t('home.wizard.previousQuestion')}
                        </button>
                        <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
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

                    {/* Q3 – suelo aislado */}
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
                          className="flex items-center gap-1 text-verde-600 hover:text-verde-700 text-sm mb-2"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          {t('home.wizard.previousQuestion')}
                        </button>
                        <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
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

                    {/* Q4 – tipo calefacción */}
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
                          className="flex items-center gap-1 text-verde-600 hover:text-verde-700 text-sm mb-2"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          {t('home.wizard.previousQuestion')}
                        </button>
                        <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
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

                    {/* Contact form */}
                    {wizardStep === 'form' && (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <button
                          onClick={goBack}
                          className="flex items-center gap-1 text-verde-600 hover:text-verde-700 text-sm mb-3"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          {t('home.wizard.previousQuestion')}
                        </button>

                        <div className="text-center mb-5">
                          <div className="inline-flex items-center justify-center w-14 h-14 bg-verde-100 rounded-full mb-3">
                            <CheckCircle2 className="w-7 h-7 text-verde-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {t('home.wizard.formTitle')}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {t('home.wizard.formDescription')}
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
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

                          <div className="grid grid-cols-2 gap-3">
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
                              id="lp-consent"
                              required
                              checked={formData.consent}
                              onChange={(e) =>
                                setFormData({ ...formData, consent: e.target.checked })
                              }
                              className="mt-1"
                            />
                            <label htmlFor="lp-consent" className="text-sm text-gray-600">
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
                            className="btn-primary w-full justify-center text-lg py-3.5"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                {t('home.wizard.submitting')}
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
                        className="text-center py-6"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-verde-100 rounded-full mb-4">
                          <CheckCircle2 className="w-8 h-8 text-verde-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {t('home.wizard.successTitle')}
                        </h3>
                        <p
                          className="text-gray-600 mb-6"
                          dangerouslySetInnerHTML={{
                            __html: t.raw('home.wizard.successMessage'),
                          }}
                        />
                        <button onClick={resetWizard} className="btn-secondary">
                          {t('home.wizard.newRequest')}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2 · STATS BAND                                               */}
      {/* ============================================================ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '2,500+', label: t('home.stats.homes'), icon: Building },
              { value: '100%', label: t('home.stats.funded'), icon: Euro },
              { value: '30%', label: t('home.stats.savings'), icon: Zap },
              { value: '24h', label: t('home.stats.response'), icon: Clock },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-verde-100 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-verde-600" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3 · 4 BENEFITS IN ICONS                                      */}
      {/* ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('home.why.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('home.why.description')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
                icon: Thermometer,
                title: t('home.why.benefit1Title'),
                desc: t('home.why.benefit1Desc'),
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
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-verde-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4 · HOW IT WORKS (4 steps)                                   */}
      {/* ============================================================ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('home.process.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('home.process.description')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: t('home.process.step1Title'),
                desc: t('home.process.step1Desc'),
              },
              {
                icon: Users,
                title: t('home.process.step2Title'),
                desc: t('home.process.step2Desc'),
              },
              {
                icon: Clock,
                title: t('home.process.step3Title'),
                desc: t('home.process.step3Desc'),
              },
              {
                icon: Euro,
                title: t('home.process.step4Title'),
                desc: t('home.process.step4Desc'),
              },
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
                    <div className="w-10 h-10 bg-verde-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <step.icon className="w-6 h-6 text-verde-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-0">
                    <ArrowRight className="w-6 h-6 text-verde-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#formulario" className="btn-primary text-lg">
              {t('common.checkEligibility')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5 · TESTIMONIALS                                             */}
      {/* ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <p className="text-gray-700 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
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

      {/* ============================================================ */}
      {/* 6 · FINAL CTA                                                */}
      {/* ============================================================ */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <a href="#formulario" className="btn-primary text-lg px-8 py-4">
                {t('home.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+34919947360"
                onClick={() => trackPhoneClick()}
                className="btn-secondary text-lg px-8 py-4"
              >
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

/* ------------------------------------------------------------------ */
/*  Default export – wrapped in Suspense                               */
/* ------------------------------------------------------------------ */

export default function LandingPage() {
  return (
    <Suspense>
      <LandingPageContent />
    </Suspense>
  )
}

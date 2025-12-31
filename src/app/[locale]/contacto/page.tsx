'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'

export default function ContactPage() {
  const t = useTranslations()
  const locale = useLocale() as Locale
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          data: formData,
        }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error('Error sending email')
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error:', error)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-verde-900 via-verde-800 to-verde-900 overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
              <Mail className="w-4 h-4" />
              {t('contact.hero.badge')}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              {t('contact.hero.title')}
            </h1>

            <p className="text-xl text-verde-100 mb-8 leading-relaxed">
              {t('contact.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold text-verde-900 mb-6">
                  {t('contact.info.title')}
                </h2>

                <div className="space-y-4">
                  <a
                    href="tel:+34919947586"
                    className="flex items-center gap-4 p-4 bg-verde-50 rounded-xl hover:bg-verde-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-verde-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t('common.call')}</p>
                      <p className="text-lg font-semibold text-verde-800">
                        +34 919 94 75 86
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:Contacto@verdenomia.es"
                    className="flex items-center gap-4 p-4 bg-verde-50 rounded-xl hover:bg-verde-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-verde-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-lg font-semibold text-verde-800">
                        Contacto@verdenomia.es
                      </p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-verde-900 mb-4">
                  {t('contact.info.hours')}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>{t('contact.info.weekdays')}</span>
                    <span className="font-medium">{t('contact.info.weekdaysHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.info.weekend')}</span>
                    <span className="text-red-500">{t('contact.info.closed')}</span>
                  </div>
                </div>
              </motion.div>

              {/* Offices */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-verde-900 mb-4">
                  {t('footer.offices')}
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-verde-600" />
                      <span className="font-medium text-verde-800">
                        Alicante - {t('footer.headquarters')}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Calle Principal, 123
                      <br />
                      03001 Alicante
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-verde-600" />
                      <span className="font-medium text-verde-800">
                        Madrid - {t('footer.commercialOffice')}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Calle Comercio, 45
                      <br />
                      28001 Madrid
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-display font-bold text-verde-900 mb-2">
                  {t('contact.form.title')}
                </h2>
                <p className="text-gray-600 mb-8">{t('contact.form.description')}</p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 bg-verde-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-verde-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-verde-800 mb-3">
                      {t('contact.form.successTitle')}
                    </h3>
                    <p
                      className="text-gray-600 mb-6"
                      dangerouslySetInnerHTML={{
                        __html: t('contact.form.successMessage'),
                      }}
                    />
                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          nombre: '',
                          apellido: '',
                          email: '',
                          telefono: '',
                          asunto: '',
                          mensaje: '',
                        })
                      }}
                      className="btn-secondary"
                    >
                      {t('contact.form.sendAnother')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">
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

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.subject')} *
                      </label>
                      <select
                        required
                        value={formData.asunto}
                        onChange={(e) =>
                          setFormData({ ...formData, asunto: e.target.value })
                        }
                        className="form-input"
                      >
                        <option value="">{t('contact.form.subjectPlaceholder')}</option>
                        <option value="eligibilidad">
                          {t('contact.form.subjectEligibility')}
                        </option>
                        <option value="informacion">
                          {t('contact.form.subjectInfo')}
                        </option>
                        <option value="cita">{t('contact.form.subjectAppointment')}</option>
                        <option value="b2b">{t('contact.form.subjectB2B')}</option>
                        <option value="otro">{t('contact.form.subjectOther')}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.message')} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.mensaje}
                        onChange={(e) =>
                          setFormData({ ...formData, mensaje: e.target.value })
                        }
                        className="form-input"
                        placeholder={t('contact.form.messagePlaceholder')}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        id="privacy"
                        className="mt-1"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
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
                          <Send className="w-5 h-5" />
                          {t('common.sendMessage')}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-verde-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900 mb-4">
            {t('contact.cta.title')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('contact.cta.description')}
          </p>
          <Link href={`/${locale}#eligibilidad`} className="btn-primary text-lg">
            {t('common.checkEligibility')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}


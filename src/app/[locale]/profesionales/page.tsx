'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  Building2,
  Lightbulb,
  Euro,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  TrendingDown,
  Phone,
  Hotel,
  ShoppingBag,
  Factory,
  Warehouse,
  ParkingCircle,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'

const content = {
  es: {
    badge: 'Soluciones para empresas',
    title: 'Optimiza tu iluminación',
    titleHighlight: '100% financiado',
    description: 'Reemplaza tu iluminación tradicional por LED de última generación. Gracias a los CAE, la instalación puede estar <strong>completamente financiada</strong>.',
    benefits: ['Hasta 100% financiado', 'Hasta -70% consumo', 'Sin interrumpir actividad', 'Sin inversión inicial'],
    cta: 'Solicitar evaluación gratuita',
    callNow: 'Llamar ahora',
    stats: [
      { label: 'Ahorro energético', value: '-70%' },
      { label: 'Financiación CAE', value: '100%' },
      { label: 'Vida útil LED', value: '+50.000h' },
      { label: 'Mantenimiento', value: '-80%' },
    ],
    whyTitle: '¿Por qué pasar a LED con los CAE?',
    whyDesc: 'Optimiza tus costes energéticos sin inversión inicial gracias al programa de certificados de ahorro.',
    whyCards: [
      { title: 'Hasta 100% financiado', desc: 'Gracias a los CAE, el coste de la renovación puede estar completamente cubierto.' },
      { title: 'Reducción del consumo', desc: 'Ahorra hasta un 70% en consumo eléctrico con iluminación LED eficiente.' },
      { title: 'Instalación rápida', desc: 'Planificamos la instalación fuera de horario laboral para no interrumpir tu actividad.' },
      { title: 'Sin inversión inicial', desc: 'No necesitas desembolso previo. Nosotros gestionamos la financiación CAE.' },
    ],
    sectorsTitle: 'Sectores elegibles',
    sectorsDesc: 'Todas las empresas con instalaciones de iluminación de más de 2 años pueden beneficiarse.',
    sectors: [
      { name: 'Hoteles', desc: 'Pasillos, parking, zonas comunes' },
      { name: 'Oficinas', desc: 'Espacios de trabajo, salas de reunión' },
      { name: 'Comercio', desc: 'Tiendas, supermercados, centros comerciales' },
      { name: 'Industria', desc: 'Naves, almacenes, zonas de producción' },
      { name: 'Logística', desc: 'Centros de distribución, almacenes' },
      { name: 'Parking', desc: 'Garajes, parkings subterráneos' },
    ],
    processTitle: 'Un proceso simple en 4 etapas',
    processDesc: 'Del audit inicial a la certificación, te acompañamos en todo el proceso.',
    process: [
      { step: '01', title: 'Evaluación gratuita', desc: 'Analizamos tu instalación actual y calculamos el potencial de ahorro.' },
      { step: '02', title: 'Presupuesto detallado', desc: 'Te presentamos un plan con la cobertura CAE y el ahorro estimado.' },
      { step: '03', title: 'Instalación profesional', desc: 'Nuestros técnicos certificados realizan la instalación de forma rápida.' },
      { step: '04', title: 'Certificación', desc: 'Generamos los certificados de ahorro energético y gestionamos los trámites.' },
    ],
    eligTitle: 'Condiciones de elegibilidad',
    eligDesc: 'Para beneficiarse del programa CAE para la iluminación LED, tu empresa debe cumplir estos criterios simples:',
    eligItems: [
      'Instalación de iluminación existente desde hace más de 2 años',
      'Iluminación actual con tecnología tradicional (fluorescentes, halogenuros, etc.)',
      'Local comercial, industrial o terciario en España',
      'Disposición a firmar el contrato de cesión de CAE',
    ],
    formTitle: 'Solicita una evaluación gratuita',
    formDesc: 'Un experto te contactará en menos de 24 horas para analizar tu proyecto.',
    formFields: {
      company: 'Nombre de la empresa',
      contact: 'Persona de contacto',
      email: 'Email',
      phone: 'Teléfono',
      sector: 'Sector de actividad',
      message: 'Mensaje (opcional)',
      sectorOptions: ['Hotel / Hostelería', 'Oficinas', 'Comercio / Retail', 'Industria', 'Logística / Almacén', 'Parking', 'Otro'],
      selectSector: 'Selecciona un sector',
      privacy: 'Acepto la política de privacidad y el tratamiento de mis datos para ser contactado.',
      submit: 'Solicitar evaluación gratuita',
      successTitle: '¡Solicitud recibida!',
      successDesc: 'Un experto B2B te contactará en las próximas 24 horas para discutir tu proyecto.',
      newRequest: 'Nueva solicitud',
    },
  },
  en: {
    badge: 'Business solutions',
    title: 'Optimize your lighting',
    titleHighlight: '100% funded',
    description: 'Replace your traditional lighting with latest generation LEDs. Thanks to the CAE, the installation can be <strong>fully funded</strong>.',
    benefits: ['Up to 100% funded', 'Up to -70% consumption', 'No business interruption', 'No upfront investment'],
    cta: 'Request free audit',
    callNow: 'Call now',
    stats: [
      { label: 'Energy savings', value: '-70%' },
      { label: 'CAE funding', value: '100%' },
      { label: 'LED lifespan', value: '+50,000h' },
      { label: 'Maintenance', value: '-80%' },
    ],
    whyTitle: 'Why switch to LED with CAE?',
    whyDesc: 'Optimize your energy costs with no upfront investment thanks to the energy savings certificate program.',
    whyCards: [
      { title: 'Up to 100% funded', desc: 'Thanks to the CAE, the cost of renovation can be fully covered.' },
      { title: 'Reduced consumption', desc: 'Save up to 70% on electricity consumption with efficient LED lighting.' },
      { title: 'Quick installation', desc: 'We schedule installation outside business hours to not interrupt your activity.' },
      { title: 'No upfront investment', desc: 'No advance payment needed. We handle the CAE funding.' },
    ],
    sectorsTitle: 'Eligible sectors',
    sectorsDesc: 'All businesses with lighting installations over 2 years old can benefit.',
    sectors: [
      { name: 'Hotels', desc: 'Corridors, parking, common areas' },
      { name: 'Offices', desc: 'Workspaces, meeting rooms' },
      { name: 'Retail', desc: 'Stores, supermarkets, shopping centers' },
      { name: 'Industry', desc: 'Factories, warehouses, production areas' },
      { name: 'Logistics', desc: 'Distribution centers, warehouses' },
      { name: 'Parking', desc: 'Garages, underground parking' },
    ],
    processTitle: 'A simple 4-step process',
    processDesc: 'From initial audit to certification, we support you throughout the process.',
    process: [
      { step: '01', title: 'Free audit', desc: 'We analyze your current installation and calculate the savings potential.' },
      { step: '02', title: 'Detailed quote', desc: 'We present a plan with CAE coverage and estimated savings.' },
      { step: '03', title: 'Professional installation', desc: 'Our certified technicians complete the installation quickly.' },
      { step: '04', title: 'Certification', desc: 'We generate the energy savings certificates and handle the paperwork.' },
    ],
    eligTitle: 'Eligibility conditions',
    eligDesc: 'To benefit from the CAE program for LED lighting, your company must meet these simple criteria:',
    eligItems: [
      'Existing lighting installation for more than 2 years',
      'Current lighting with traditional technology (fluorescent, metal halide, etc.)',
      'Commercial, industrial or tertiary premises in Spain',
      'Willingness to sign the CAE transfer contract',
    ],
    formTitle: 'Request a free audit',
    formDesc: 'An expert will contact you within 24 hours to analyze your project.',
    formFields: {
      company: 'Company name',
      contact: 'Contact person',
      email: 'Email',
      phone: 'Phone',
      sector: 'Business sector',
      message: 'Message (optional)',
      sectorOptions: ['Hotel / Hospitality', 'Offices', 'Retail', 'Industry', 'Logistics / Warehouse', 'Parking', 'Other'],
      selectSector: 'Select a sector',
      privacy: 'I accept the privacy policy and the processing of my data to be contacted.',
      submit: 'Request free audit',
      successTitle: 'Request received!',
      successDesc: 'A B2B expert will contact you within the next 24 hours to discuss your project.',
      newRequest: 'New request',
    },
  },
}

export default function ProfesionalesPage() {
  const locale = useLocale() as Locale
  const t = content[locale]
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    empresa: '',
    nombre: '',
    email: '',
    telefono: '',
    sector: '',
    mensaje: '',
  })
  const sectorIcons = [Hotel, Building2, ShoppingBag, Factory, Warehouse, ParkingCircle]
  const benefitIcons = [Euro, TrendingDown, Clock, Shield]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'professional',
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
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-verde-900 via-verde-800 to-verde-900 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
                <Building2 className="w-4 h-4" />
                {t.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
                {t.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-verde-300 to-green-200">
                  {t.titleHighlight}
                </span>
              </h1>
              <p className="text-xl text-verde-100 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.description }} />
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {t.benefits.map((item, i) => {
                  const Icon = [Euro, Zap, Clock, Shield][i]
                  return (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-verde-300" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  )
                })}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto-pro" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4">
                  {t.cta}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="tel:+34919947586" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  {t.callNow}
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {t.stats.map((stat, i) => (
                    <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-verde-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">{t.whyTitle}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.whyDesc}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyCards.map((card, index) => {
              const Icon = benefitIcons[index]
              return (
                <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-verde-50 rounded-2xl p-6 border border-verde-100">
                  <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <h3 className="text-lg font-bold text-verde-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">{t.sectorsTitle}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.sectorsDesc}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.sectors.map((sector, index) => {
              const Icon = sectorIcons[index]
              return (
                <motion.div key={sector.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                  <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-verde-800">{sector.name}</h3>
                    <p className="text-gray-600">{sector.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">{t.processTitle}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.processDesc}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.map((item, index) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative bg-verde-50 rounded-2xl p-6">
                <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-verde-500 to-verde-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {item.step}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-verde-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-verde-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">{t.eligTitle}</h2>
              <p className="text-verde-100 text-lg mb-8">{t.eligDesc}</p>
              <div className="space-y-4">
                {t.eligItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-verde-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <Lightbulb className="w-16 h-16 mx-auto text-verde-300 mb-4" />
                <h3 className="text-2xl font-bold text-white">{locale === 'es' ? '¿Tienes dudas?' : 'Have questions?'}</h3>
                <p className="text-verde-200 mt-2">{locale === 'es' ? 'Nuestros expertos están disponibles para analizar tu situación.' : 'Our experts are available to analyze your situation.'}</p>
              </div>
              <a href="tel:+34919947586" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 w-full justify-center text-lg py-4">
                <Phone className="w-5 h-5" />
                {t.callNow}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto-pro" className="py-20 bg-verde-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">{t.formTitle}</h2>
              <p className="text-xl text-gray-600">{t.formDesc}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl shadow-xl p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-verde-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-verde-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-verde-800 mb-3">{t.formFields.successTitle}</h3>
                  <p className="text-gray-600 mb-6">{t.formFields.successDesc}</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn-secondary">{t.formFields.newRequest}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t.formFields.company} *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t.formFields.contact} *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t.formFields.email} *</label>
                      <input 
                        type="email" 
                        required 
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t.formFields.phone} *</label>
                      <input 
                        type="tel" 
                        required 
                        className="form-input"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.formFields.sector} *</label>
                    <select 
                      required 
                      className="form-input"
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    >
                      <option value="">{t.formFields.selectSector}</option>
                      {t.formFields.sectorOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.formFields.message}</label>
                    <textarea 
                      rows={4} 
                      className="form-input"
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required id="privacy-pro" className="mt-1" />
                    <label htmlFor="privacy-pro" className="text-sm text-gray-600">
                      {t.formFields.privacy.split('política de privacidad')[0]}
                      <Link href={`/${locale}/privacidad`} className="text-verde-600 hover:underline">
                        {locale === 'es' ? 'política de privacidad' : 'privacy policy'}
                      </Link>
                      {t.formFields.privacy.split('política de privacidad')[1] || t.formFields.privacy.split('politique de confidentialité')[1] || t.formFields.privacy.split('privacy policy')[1]}
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
                        {locale === 'es' ? 'Enviando...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        {t.formFields.submit}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


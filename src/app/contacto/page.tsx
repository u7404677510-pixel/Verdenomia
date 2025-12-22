'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Home,
  Ruler,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Leaf,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  FileText,
  Upload,
} from 'lucide-react'
import { useState } from 'react'

const offices = [
  {
    city: 'Alicante (Sede Central)',
    address: 'Avenida Maisonnave 41, 3º piso',
    postalCode: '03003 Alicante',
    phone: '+34 919 46 95 28',
    email: 'info@verdenomia.es',
    hours: 'Lun - Vie: 9:00 - 18:00',
    mapUrl: 'https://maps.google.com/?q=Avenida+Maisonnave+41+Alicante',
  },
  {
    city: 'Madrid',
    address: 'Oficina comercial',
    postalCode: 'Madrid',
    phone: '+34 919 46 95 28',
    email: 'info@verdenomia.es',
    hours: 'Lun - Vie: 9:00 - 18:00',
    mapUrl: 'https://maps.google.com/?q=Madrid+España',
  },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/verdenomia' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/verdenomia' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/verdenomia' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/verdenomia' },
]

const housingTypes = [
  { value: 'casa', label: 'Casa individual' },
  { value: 'adosado', label: 'Casa adosada' },
  { value: 'piso', label: 'Piso en edificio' },
  { value: 'atico', label: 'Ático' },
  { value: 'otro', label: 'Otro' },
]

const roofTypes = [
  { value: 'inclinado', label: 'Tejado inclinado' },
  { value: 'plano', label: 'Tejado plano' },
  { value: 'mansarda', label: 'Mansarda' },
  { value: 'no-se', label: 'No estoy seguro' },
]

export default function ContactoPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'quote'>('contact')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    housingType: '',
    roofType: '',
    area: '',
    yearBuilt: '',
    hasExistingInsulation: '',
    interestedInSubsidy: true,
    preferredContact: 'phone',
    additionalInfo: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log('Contact form submitted:', contactForm)
    setFormSubmitted(true)
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log('Quote form submitted:', quoteForm)
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-verde-50 to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg mx-auto px-4"
        >
          <div className="w-20 h-20 bg-verde-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-verde-600" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
            ¡Mensaje enviado!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Gracias por contactarnos. Un miembro de nuestro equipo te responderá
            en menos de 24 horas.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="btn-primary"
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      </section>
    )
  }

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
            <span className="badge-verde mb-4">
              <MessageSquare className="w-4 h-4" />
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              ¡Decir <span className="gradient-text">hola</span>!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Estamos aquí para responder a todas tus preguntas. Contáctanos
              por teléfono, email o a través del formulario y te responderemos
              lo antes posible.
            </p>

            {/* Quick contact */}
            <div className="flex flex-wrap gap-6">
              <a
                href="tel:+34919469528"
                className="flex items-center gap-3 text-gray-700 hover:text-verde-700 transition-colors"
              >
                <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-verde-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Llámanos</p>
                  <p className="font-semibold">+34 919 46 95 28</p>
                </div>
              </a>
              <a
                href="mailto:info@verdenomia.es"
                className="flex items-center gap-3 text-gray-700 hover:text-verde-700 transition-colors"
              >
                <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-verde-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Escríbenos</p>
                  <p className="font-semibold">info@verdenomia.es</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="presupuesto" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                    activeTab === 'contact'
                      ? 'bg-verde-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <MessageSquare className="w-5 h-5 inline-block mr-2" />
                  Contacto general
                </button>
                <button
                  onClick={() => setActiveTab('quote')}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                    activeTab === 'quote'
                      ? 'bg-verde-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileText className="w-5 h-5 inline-block mr-2" />
                  Pedir presupuesto
                </button>
              </div>

              {/* Contact Form */}
              {activeTab === 'contact' && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleContactSubmit}
                  className="card"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Envíanos un mensaje
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, name: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none focus:ring-2 focus:ring-verde-500/20"
                          placeholder="Tu nombre"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none focus:ring-2 focus:ring-verde-500/20"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono (opcional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, phone: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none focus:ring-2 focus:ring-verde-500/20"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none focus:ring-2 focus:ring-verde-500/20 resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Enviar mensaje
                    <Send className="w-5 h-5" />
                  </button>
                </motion.form>
              )}

              {/* Quote Form */}
              {activeTab === 'quote' && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleQuoteSubmit}
                  className="card"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Solicitar presupuesto
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Completa el formulario y te enviaremos una estimación personalizada.
                  </p>

                  {/* Personal info */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-verde-600" />
                      Datos de contacto
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={quoteForm.name}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, name: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={quoteForm.email}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, email: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          required
                          value={quoteForm.phone}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Código postal *
                        </label>
                        <input
                          type="text"
                          required
                          value={quoteForm.postalCode}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, postalCode: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none"
                          placeholder="28001"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Housing info */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Home className="w-5 h-5 text-verde-600" />
                      Información de la vivienda
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de vivienda *
                        </label>
                        <select
                          required
                          value={quoteForm.housingType}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, housingType: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none bg-white"
                        >
                          <option value="">Seleccionar...</option>
                          {housingTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de tejado *
                        </label>
                        <select
                          required
                          value={quoteForm.roofType}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, roofType: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none bg-white"
                        >
                          <option value="">Seleccionar...</option>
                          {roofTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Superficie buhardilla (m²)
                        </label>
                        <div className="relative">
                          <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            value={quoteForm.area}
                            onChange={(e) =>
                              setQuoteForm({ ...quoteForm, area: e.target.value })
                            }
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none"
                            placeholder="Ej: 80"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Año de construcción
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            value={quoteForm.yearBuilt}
                            onChange={(e) =>
                              setQuoteForm({ ...quoteForm, yearBuilt: e.target.value })
                            }
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none"
                            placeholder="Ej: 1985"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Preferencias
                    </h3>
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={quoteForm.interestedInSubsidy}
                          onChange={(e) =>
                            setQuoteForm({
                              ...quoteForm,
                              interestedInSubsidy: e.target.checked,
                            })
                          }
                          className="w-5 h-5 rounded border-gray-300 text-verde-600 focus:ring-verde-500"
                        />
                        <span className="text-gray-700">
                          Estoy interesado en las ayudas y subvenciones disponibles
                        </span>
                      </label>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ¿Cómo prefieres que te contactemos?
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="phone"
                              checked={quoteForm.preferredContact === 'phone'}
                              onChange={(e) =>
                                setQuoteForm({
                                  ...quoteForm,
                                  preferredContact: e.target.value,
                                })
                              }
                              className="w-4 h-4 text-verde-600 focus:ring-verde-500"
                            />
                            <span className="text-gray-700">Teléfono</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="email"
                              checked={quoteForm.preferredContact === 'email'}
                              onChange={(e) =>
                                setQuoteForm({
                                  ...quoteForm,
                                  preferredContact: e.target.value,
                                })
                              }
                              className="w-4 h-4 text-verde-600 focus:ring-verde-500"
                            />
                            <span className="text-gray-700">Email</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="whatsapp"
                              checked={quoteForm.preferredContact === 'whatsapp'}
                              onChange={(e) =>
                                setQuoteForm({
                                  ...quoteForm,
                                  preferredContact: e.target.value,
                                })
                              }
                              className="w-4 h-4 text-verde-600 focus:ring-verde-500"
                            />
                            <span className="text-gray-700">WhatsApp</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional info */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Información adicional
                    </label>
                    <textarea
                      rows={4}
                      value={quoteForm.additionalInfo}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, additionalInfo: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-verde-500 focus:outline-none resize-none"
                      placeholder="Cuéntanos cualquier detalle adicional sobre tu proyecto..."
                    />
                  </div>

                  {/* File upload placeholder */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adjuntar fotos (opcional)
                    </label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-verde-400 transition-colors cursor-pointer">
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600">
                        Arrastra fotos aquí o haz clic para seleccionar
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        PNG, JPG hasta 10MB
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="btn-primary flex-1">
                      Enviar solicitud
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <a href="tel:+34919469528" className="btn-secondary flex-1 justify-center">
                      <Phone className="w-5 h-5" />
                      Llamar ahora
                    </a>
                  </div>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Al enviar este formulario, aceptas nuestra{' '}
                    <a href="/legal/privacidad" className="text-verde-600 hover:underline">
                      política de privacidad
                    </a>
                    .
                  </p>
                </motion.form>
              )}
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Offices */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-verde-600" />
                    Nuestras oficinas
                  </h3>
                  <div className="space-y-6">
                    {offices.map((office) => (
                      <div
                        key={office.city}
                        className="pb-6 border-b border-gray-100 last:pb-0 last:border-0"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {office.city}
                        </h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>{office.address}</p>
                          <p>{office.postalCode}</p>
                          <p className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <a
                              href={`tel:${office.phone.replace(/\s/g, '')}`}
                              className="hover:text-verde-600"
                            >
                              {office.phone}
                            </a>
                          </p>
                          <p className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {office.hours}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">Síguenos</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 hover:bg-verde-100 rounded-lg flex items-center justify-center transition-colors group"
                          aria-label={social.name}
                        >
                          <Icon className="w-5 h-5 text-gray-600 group-hover:text-verde-600" />
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Trust badges */}
                <div className="bg-verde-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="w-8 h-8 text-verde-600" />
                    <div>
                      <p className="font-bold text-verde-800">+2500 proyectos</p>
                      <p className="text-sm text-verde-600">realizados con éxito</p>
                    </div>
                  </div>
                  <p className="text-sm text-verde-700">
                    Respuesta garantizada en menos de 24 horas laborables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-96 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-verde-600 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Mapa interactivo</p>
            <p className="text-gray-500">Alicante (Sede) • Madrid</p>
          </div>
        </div>
      </section>
    </>
  )
}


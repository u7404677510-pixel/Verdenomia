'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'

const offices = [
  {
    city: 'Alicante',
    type: 'Sede Central',
    address: 'Calle Principal, 123',
    zip: '03001 Alicante',
    phone: '+34 919 46 95 28',
    email: 'alicante@verdenomia.es',
  },
  {
    city: 'Madrid',
    type: 'Oficina Comercial',
    address: 'Calle Comercio, 45',
    zip: '28001 Madrid',
    phone: '+34 919 46 95 28',
    email: 'madrid@verdenomia.es',
  },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setIsSubmitted(true)
  }

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
              <MessageCircle className="w-4 h-4" />
              Contacto
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              ¿Hablamos?
            </h1>

            <p className="text-xl text-verde-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Estamos disponibles para responder a todas tus preguntas sobre el aislamiento y el programa CAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+34919469528"
                className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                +34 919 46 95 28
              </a>
              <a
                href="mailto:info@verdenomia.es"
                className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                <Mail className="w-5 h-5" />
                info@verdenomia.es
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-verde-800 mb-6">
                Información de contacto
              </h2>

              {/* Hours */}
              <div className="bg-verde-50 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-verde-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-verde-600" />
                  </div>
                  <h3 className="font-semibold text-verde-800">Horario de atención</h3>
                </div>
                <div className="text-gray-600 space-y-1 text-sm">
                  <p><strong>Lunes - Viernes:</strong> 9:00 - 18:00</p>
                  <p><strong>Sábado - Domingo:</strong> Cerrado</p>
                </div>
              </div>

              {/* Offices */}
              <h3 className="font-semibold text-verde-800 mb-4">Nuestras oficinas</h3>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-semibold text-verde-800">{office.city}</span>
                      <span className="text-xs px-2 py-0.5 bg-verde-100 text-verde-700 rounded">
                        {office.type}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-verde-600" />
                        {office.address}, {office.zip}
                      </p>
                      <a
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 hover:text-verde-600 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-verde-600" />
                        {office.phone}
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center gap-2 hover:text-verde-600 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-verde-600" />
                        {office.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="mt-6 p-5 bg-verde-800 rounded-xl text-white">
                <h3 className="font-semibold mb-2">¿Quieres verificar tu elegibilidad?</h3>
                <p className="text-verde-100 text-sm mb-4">
                  Responde a unas preguntas simples para saber si puedes beneficiarte del programa CAE.
                </p>
                <Link href="/#eligibilidad" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 w-full justify-center text-sm">
                  Verificar elegibilidad
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-verde-800 mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-gray-600 mb-8">
                  Rellena el formulario y te responderemos en menos de 24 horas.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 bg-verde-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-verde-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-verde-800 mb-3">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Gracias por contactarnos. Te responderemos en las próximas <strong>24 horas</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({ nombre: '', apellido: '', email: '', telefono: '', asunto: '', mensaje: '' })
                      }}
                      className="btn-secondary"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid sm:grid-cols-2 gap-4">
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <select
                        required
                        value={formData.asunto}
                        onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500 transition-colors"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="eligibilidad">Verificar elegibilidad</option>
                        <option value="informacion">Información general</option>
                        <option value="cita">Solicitar cita</option>
                        <option value="b2b">Solución profesional (B2B)</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500 transition-colors"
                        placeholder="Escribe tu mensaje aquí..."
                      />
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

                    <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                      <Send className="w-5 h-5" />
                      Enviar mensaje
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-6">
              ¿Prefieres que te llamemos?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Verifica tu elegibilidad al programa CAE y un asesor te contactará en menos de 24 horas.
            </p>
            <Link href="/#eligibilidad" className="btn-primary text-lg px-8 py-4">
              Verificar mi elegibilidad
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

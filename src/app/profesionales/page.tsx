'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  FileCheck,
  Users,
  Factory,
  ShoppingBag,
  Hotel,
  Warehouse,
  ParkingCircle,
} from 'lucide-react'

const sectors = [
  { icon: Hotel, name: 'Hoteles', description: 'Pasillos, parking, zonas comunes' },
  { icon: Building2, name: 'Oficinas', description: 'Espacios de trabajo, salas de reunión' },
  { icon: ShoppingBag, name: 'Comercio', description: 'Tiendas, supermercados, centros comerciales' },
  { icon: Factory, name: 'Industria', description: 'Naves, almacenes, zonas de producción' },
  { icon: Warehouse, name: 'Logística', description: 'Centros de distribución, almacenes' },
  { icon: ParkingCircle, name: 'Parking', description: 'Garajes, parkings subterráneos' },
]

const benefits = [
  {
    icon: Euro,
    title: 'Hasta 100% financiado',
    description: 'Gracias a los CAE, el coste de la renovación puede estar completamente cubierto.',
  },
  {
    icon: TrendingDown,
    title: 'Reducción del consumo',
    description: 'Ahorra hasta un 70% en consumo eléctrico con iluminación LED eficiente.',
  },
  {
    icon: Clock,
    title: 'Instalación rápida',
    description: 'Planificamos la instalación fuera de horario laboral para no interrumpir tu actividad.',
  },
  {
    icon: Shield,
    title: 'Sin inversión inicial',
    description: 'No necesitas desembolso previo. Nosotros gestionamos la financiación CAE.',
  },
]

const process = [
  {
    step: '01',
    title: 'Audit gratuito',
    description: 'Analizamos tu instalación actual y calculamos el potencial de ahorro.',
  },
  {
    step: '02',
    title: 'Presupuesto detallado',
    description: 'Te presentamos un plan con la cobertura CAE y el ahorro estimado.',
  },
  {
    step: '03',
    title: 'Instalación profesional',
    description: 'Nuestros técnicos certificados realizan la instalación de forma rápida.',
  },
  {
    step: '04',
    title: 'Certificación',
    description: 'Generamos los certificados de ahorro energético y gestionamos los trámites.',
  },
]

export default function ProfesionalesPage() {
  const [formData, setFormData] = useState({
    empresa: '',
    contacto: '',
    email: '',
    telefono: '',
    sector: '',
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
                <Building2 className="w-4 h-4" />
                Soluciones para empresas
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
                Optimiza tu iluminación
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-verde-300 to-green-200">
                  100% financiado
                </span>
              </h1>

              <p className="text-xl text-verde-100 mb-8 leading-relaxed">
                Reemplaza tu iluminación tradicional por LED de última generación. 
                Gracias a los CAE, la instalación puede estar <strong>completamente financiada</strong>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Euro, text: 'Hasta 100% financiado' },
                  { icon: Zap, text: 'Hasta -70% consumo' },
                  { icon: Clock, text: 'Sin interrumpir actividad' },
                  { icon: Shield, text: 'Sin inversión inicial' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-verde-300" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto-pro" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4">
                  Solicitar audit gratuito
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="tel:+34919469528" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Ahorro energético', value: '-70%' },
                      { label: 'Financiación CAE', value: '100%' },
                      { label: 'Vida útil LED', value: '+50.000h' },
                      { label: 'Mantenimiento', value: '-80%' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-verde-200 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              ¿Por qué pasar a LED con los CAE?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Optimiza tus costes energéticos sin inversión inicial gracias al programa de certificados de ahorro.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-verde-50 rounded-2xl p-6 border border-verde-100"
              >
                <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-verde-600" />
                </div>
                <h3 className="text-lg font-bold text-verde-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              Sectores elegibles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todas las empresas con instalaciones de iluminación de más de 2 años pueden beneficiarse.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <sector.icon className="w-7 h-7 text-verde-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-verde-800">{sector.name}</h3>
                  <p className="text-gray-600">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              Un proceso simple en 4 etapas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Del audit inicial a la certificación, te acompañamos en todo el proceso.
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
                className="relative bg-verde-50 rounded-2xl p-6"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-verde-500 to-verde-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {item.step}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-verde-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-verde-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Condiciones de elegibilidad
              </h2>
              <p className="text-verde-100 text-lg mb-8">
                Para beneficiarse del programa CAE para la iluminación LED, tu empresa debe cumplir estos criterios simples:
              </p>
              <div className="space-y-4">
                {[
                  'Instalación de iluminación existente desde hace más de 2 años',
                  'Iluminación actual con tecnología tradicional (fluorescentes, halogenuros, etc.)',
                  'Local comercial, industrial o terciario en España',
                  'Disposición a firmar el contrato de cesión de CAE',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-verde-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="text-center mb-6">
                <Lightbulb className="w-16 h-16 mx-auto text-verde-300 mb-4" />
                <h3 className="text-2xl font-bold text-white">¿Tienes dudas?</h3>
                <p className="text-verde-200 mt-2">
                  Nuestros expertos están disponibles para analizar tu situación.
                </p>
              </div>
              <a
                href="tel:+34919469528"
                className="btn-primary bg-white text-verde-800 hover:bg-verde-50 w-full justify-center text-lg py-4"
              >
                <Phone className="w-5 h-5" />
                Llamar para más información
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto-pro" className="py-20 bg-verde-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
                Solicita un audit gratuito
              </h2>
              <p className="text-xl text-gray-600">
                Un experto te contactará en menos de 24 horas para analizar tu proyecto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-verde-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-verde-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-verde-800 mb-3">
                    ¡Solicitud recibida!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Un experto B2B te contactará en las próximas <strong>24 horas</strong> para discutir tu proyecto.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Nueva solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de la empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500"
                        placeholder="Tu empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Persona de contacto *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contacto}
                        onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500"
                        placeholder="Tu nombre"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500"
                        placeholder="email@empresa.com"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sector de actividad *
                    </label>
                    <select
                      required
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500"
                    >
                      <option value="">Selecciona un sector</option>
                      <option value="hotel">Hotel / Hostelería</option>
                      <option value="oficina">Oficinas</option>
                      <option value="comercio">Comercio / Retail</option>
                      <option value="industria">Industria</option>
                      <option value="logistica">Logística / Almacén</option>
                      <option value="parking">Parking</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-verde-500 focus:border-verde-500"
                      placeholder="Describe brevemente tu proyecto o tus necesidades..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      id="privacy-pro"
                      className="mt-1 w-4 h-4 text-verde-600 border-gray-300 rounded focus:ring-verde-500"
                    />
                    <label htmlFor="privacy-pro" className="text-sm text-gray-600">
                      Acepto la <Link href="/privacidad" className="text-verde-600 hover:underline">política de privacidad</Link> y el tratamiento de mis datos para ser contactado.
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                    Solicitar audit gratuito
                    <ArrowRight className="w-5 h-5" />
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


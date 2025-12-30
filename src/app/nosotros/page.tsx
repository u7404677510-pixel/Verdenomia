'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Home,
  Clock,
  Zap,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Transparencia',
    description: 'Pas de coûts cachés, pas de surprises. Nous vous expliquons tout clairement.',
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Nous nous engageons à fournir un service de qualité à chaque client.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    description: 'Contribuimos activamente a la transición ecológica y energética.',
  },
  {
    icon: Target,
    title: 'Excelencia',
    description: 'Formamos continuamente a nuestros equipos para garantizar la mejor calidad.',
  },
]

const stats = [
  { value: '15+', label: 'Años de experiencia', icon: Award },
  { value: '2,500+', label: 'Hogares aislados', icon: Home },
  { value: '50+', label: 'Técnicos cualificados', icon: Users },
  { value: '100%', label: 'Clientes satisfechos', icon: Heart },
]

const team = [
  {
    name: 'Carlos Martínez',
    role: 'Director General',
    description: '+20 años en eficiencia energética',
  },
  {
    name: 'Laura Sánchez',
    role: 'Directora Técnica',
    description: 'Ingeniera especializada en aislamiento',
  },
  {
    name: 'Miguel Rodríguez',
    role: 'Responsable Comercial',
    description: 'Experto en programas CAE',
  },
  {
    name: 'Ana García',
    role: 'Atención al Cliente',
    description: 'Tu primer contacto con nosotros',
  },
]

export default function NosotrosPage() {
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
              <Users className="w-4 h-4" />
              Conócenos
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Quiénes somos
            </h1>

            <p className="text-xl text-verde-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Somos especialistas en eficiencia energética con más de 15 años de experiencia. 
              Nuestra misión: hacer accesible el aislamiento de calidad a todos los hogares españoles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative -mt-12">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-2xl shadow-verde-900/10 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-verde-100 rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <div className="text-3xl font-bold text-verde-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-6">
                Nuestra misión
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  En <strong>Verdenomia</strong>, creemos que todo el mundo debería poder vivir en un hogar bien aislado, confortable y económico en energía.
                </p>
                <p>
                  Por eso, nos especializamos en el aislamiento de suelos de buhardilla, la intervención con mejor relación coste-beneficio para reducir las pérdidas térmicas de una vivienda.
                </p>
                <p>
                  Gracias a los <strong>Certificados de Ahorro Energético (CAE)</strong>, hacemos posible que esta mejora sea 100% gratuita para el cliente.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  'Aislamiento profesional sin coste',
                  'Técnicos formados y certificados',
                  'Materiales de primera calidad',
                  'Acompañamiento completo del proceso',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-verde-800 to-verde-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Nuestra promesa</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-verde-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Transparencia total</h4>
                      <p className="text-verde-200 text-sm">Sin costes ocultos, sin compromisos. Te explicamos todo claramente.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-verde-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Respuesta en 24h</h4>
                      <p className="text-verde-200 text-sm">Un asesor te contacta en menos de 24 horas tras tu solicitud.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-verde-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Garantía 25 años</h4>
                      <p className="text-verde-200 text-sm">Nuestros materiales están garantizados durante 25 años.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              Nuestros valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras intervenciones.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-verde-600" />
                </div>
                <h3 className="text-lg font-bold text-verde-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              Nuestro equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales comprometidos con tu confort y ahorro energético.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-verde-50 rounded-2xl p-6 text-center border border-verde-100"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-verde-400 to-verde-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-verde-800">{member.name}</h3>
                <p className="text-verde-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              Nuestras oficinas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Presentes en toda España para estar cerca de ti.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-verde-600" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-verde-100 text-verde-700 text-xs font-semibold rounded mb-2">
                    Sede Central
                  </span>
                  <h3 className="text-lg font-bold text-verde-800">Alicante</h3>
                  <p className="text-gray-600 mt-2">
                    Calle Principal, 123<br />
                    03001 Alicante
                  </p>
                  <div className="mt-3 space-y-1">
                    <a href="tel:+34919469528" className="flex items-center gap-2 text-verde-600 hover:text-verde-700">
                      <Phone className="w-4 h-4" />
                      +34 919 46 95 28
                    </a>
                    <a href="mailto:info@verdenomia.es" className="flex items-center gap-2 text-verde-600 hover:text-verde-700">
                      <Mail className="w-4 h-4" />
                      info@verdenomia.es
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-verde-600" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-2">
                    Oficina Comercial
                  </span>
                  <h3 className="text-lg font-bold text-verde-800">Madrid</h3>
                  <p className="text-gray-600 mt-2">
                    Calle Comercio, 45<br />
                    28001 Madrid
                  </p>
                  <div className="mt-3 space-y-1">
                    <a href="tel:+34919469528" className="flex items-center gap-2 text-verde-600 hover:text-verde-700">
                      <Phone className="w-4 h-4" />
                      +34 919 46 95 28
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-verde-800 to-verde-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-verde-100 mb-8 max-w-2xl mx-auto">
              Verifica tu elegibilidad al programa CAE y obtén un aislamiento 100% gratuito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#eligibilidad" className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4">
                Verificar mi elegibilidad
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contacto" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Contactarnos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


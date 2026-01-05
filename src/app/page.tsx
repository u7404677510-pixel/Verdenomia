'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  Clock,
  Leaf,
  ThermometerSun,
  Snowflake,
  Euro,
  Star,
  Phone,
  ChevronRight,
  Play,
  Shield,
  TrendingDown,
  Home,
  Zap,
  MapPin,
  Quote,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

const stats = [
  { value: '50+', label: 'Artesanos expertos', icon: Users },
  { value: '15+', label: 'Años de experiencia', icon: Clock },
  { value: '2500+', label: 'Proyectos financiados', icon: Home },
  { value: '97%', label: 'Dossiers aceptados', icon: Award },
]

const benefits = [
  {
    icon: Euro,
    title: 'Aislamiento desde 1€',
    description:
      'Gracias a los programas PREE y NextGenerationEU, la mayoría de los hogares pueden aislar sus buhardillas con un coste simbólico.',
  },
  {
    icon: ThermometerSun,
    title: 'Confort todo el año',
    description:
      'Mantén tu hogar fresco en verano y cálido en invierno. Mejora inmediata del confort térmico.',
  },
  {
    icon: TrendingDown,
    title: 'Ahorro 20-35%',
    description:
      'Reduce tu factura de calefacción y aire acondicionado de forma significativa y sostenible.',
  },
  {
    icon: Zap,
    title: 'Instalación rápida',
    description:
      'Nuestros equipos profesionales completan la mayoría de los proyectos en menos de un día.',
  },
]

const techniques = [
  {
    id: 'insuflado',
    title: 'Aislamiento Insuflado',
    subtitle: 'Ideal para espacios de difícil acceso',
    description:
      'La lana mineral insuflada se proyecta en los huecos y rincones de la buhardilla, garantizando una cobertura total sin puentes térmicos. Perfecto para espacios reducidos o de geometría compleja.',
    features: [
      'Cobertura total sin huecos',
      'Sin necesidad de acceso amplio',
      'Instalación limpia y rápida',
      'Ideal para retrofit',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    color: 'verde',
  },
  {
    id: 'manta',
    title: 'Aislamiento en Manta',
    subtitle: 'Para buhardillas accesibles',
    description:
      'Los rollos de lana mineral se despliegan sobre el suelo de la buhardilla, formando una barrera térmica continua. La opción más económica para espacios con buen acceso.',
    features: [
      'Instalación sencilla',
      'Excelente relación calidad-precio',
      'Durabilidad comprobada',
      'Fácil verificación visual',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: 'tierra',
  },
]

const testimonials = [
  {
    name: 'María García',
    location: 'Madrid',
    rating: 5,
    text: 'Increíble servicio. El equipo fue muy profesional y la diferencia de temperatura en casa es notable. ¡Y todo por solo 1€!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
  {
    name: 'Carlos Martínez',
    location: 'Barcelona',
    rating: 5,
    text: 'Desde que aislaron nuestra buhardilla, la factura de gas ha bajado un 30%. El proceso de subvención fue muy fácil con su ayuda.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    name: 'Ana Rodríguez',
    location: 'Valencia',
    rating: 5,
    text: 'Muy contentos con el resultado. El equipo explicó todo el proceso y gestionaron todos los papeles de la subvención.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
  },
]

const projects = [
  {
    id: 1,
    title: 'Casa unifamiliar en Pozuelo',
    type: 'Aislamiento insuflado',
    area: '120m²',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
  },
  {
    id: 2,
    title: 'Ático en el Eixample',
    type: 'Aislamiento en manta',
    area: '85m²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 3,
    title: 'Chalet en Las Rozas',
    type: 'Aislamiento insuflado',
    area: '200m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Contacto inicial',
    description: 'Llámanos o completa el formulario. Verificamos tu elegibilidad en 24h.',
    icon: Phone,
  },
  {
    step: 2,
    title: 'Visita técnica',
    description: 'Un técnico visita tu hogar para evaluar las necesidades y tomar medidas.',
    icon: Home,
  },
  {
    step: 3,
    title: 'Gestión de ayudas',
    description: 'Nos encargamos de todos los trámites administrativos con las subvenciones.',
    icon: Shield,
  },
  {
    step: 4,
    title: 'Instalación',
    description: 'Realizamos la instalación en menos de 10 días tras la validación del dossier.',
    icon: Zap,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-pattern overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-verde-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-tierra-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cielo-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-verde-100 text-verde-800 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Programa PREE & NextGenerationEU
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight"
              >
                Renueva tu hogar con{' '}
                <span className="gradient-text">total confianza</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Aísla tu buhardilla por{' '}
                <strong className="text-verde-700">solo 1€</strong> gracias a las
                ayudas públicas. Más de 2.500 familias ya confían en nosotros.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Link href="/contacto#presupuesto" className="btn-primary text-lg px-8 py-4">
                  Calcular mi proyecto
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/servicios" className="btn-secondary text-lg px-8 py-4">
                  <Play className="w-5 h-5" />
                  Ver cómo funciona
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-verde-600" />
                  Sin coste inicial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-verde-600" />
                  Gestión 100% incluida
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-verde-600" />
                  Garantía 10 años
                </div>
              </motion.div>
            </motion.div>

            {/* Right content - Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                    alt="Casa moderna con aislamiento eficiente"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verde-900/40 to-transparent" />
                </div>

                {/* Floating cards */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -left-8 top-20 glass-effect rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center">
                      <Snowflake className="w-6 h-6 text-verde-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">-35%</p>
                      <p className="text-sm text-gray-500">Consumo energético</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-4 bottom-32 glass-effect rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-tierra-100 rounded-xl flex items-center justify-center">
                      <Euro className="w-6 h-6 text-tierra-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Solo 1€</p>
                      <p className="text-sm text-gray-500">Con ayudas públicas</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-effect rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 font-semibold text-gray-900">4.9/5</span>
                    <span className="text-gray-500 text-sm">(500+ avis)</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-verde-100 rounded-2xl mb-4">
                    <Icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-verde-700 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge-verde mb-4">Ventajas</span>
            <h2 className="section-title">
              ¿Por qué aislar tu buhardilla?
            </h2>
            <p className="section-subtitle">
              El aislamiento de buhardillas es la reforma más rentable para mejorar
              la eficiencia energética de tu hogar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-verde-100 to-verde-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-verde-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge-tierra mb-4">Nuestras técnicas</span>
            <h2 className="section-title">
              Dos técnicas, un resultado perfecto
            </h2>
            <p className="section-subtitle">
              Adaptamos la solución a las características de tu buhardilla para
              garantizar el mejor resultado posible
            </p>
          </motion.div>

          <div className="space-y-16">
            {techniques.map((technique, index) => (
              <motion.div
                key={technique.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span
                    className={`badge mb-4 ${
                      technique.color === 'verde' ? 'badge-verde' : 'badge-tierra'
                    }`}
                  >
                    {technique.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                    {technique.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {technique.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {technique.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-verde-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/servicios#${technique.id}`}
                    className="inline-flex items-center gap-2 text-verde-700 font-semibold hover:text-verde-800 group"
                  >
                    Más información
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src={technique.image}
                      alt={technique.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-verde-900 to-verde-950 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-verde-200 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Proceso sencillo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Un proceso fácil, de principio a fin
            </h2>
            <p className="text-lg text-verde-200 max-w-3xl mx-auto">
              Nos encargamos de todo: desde la verificación de elegibilidad hasta la
              instalación final. Tú solo tienes que llamar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-tierra-400 to-tierra-600 rounded-xl flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      <Icon className="w-6 h-6 text-verde-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-verde-200">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-verde-600" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-verde-800 font-semibold rounded-xl shadow-xl hover:bg-verde-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Verificar mi elegibilidad
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <span className="badge-cielo mb-4">Realizaciones</span>
              <h2 className="section-title">Proyectos recientes</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Descubre algunas de nuestras intervenciones más recientes
              </p>
            </div>
            <Link
              href="/proyectos"
              className="btn-secondary"
            >
              Ver todos los proyectos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="badge-verde mb-2">{project.type}</span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/80 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.area}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge-verde mb-4">Testimonios</span>
            <h2 className="section-title">
              Lo que dicen nuestros clientes
            </h2>
            <p className="section-subtitle">
              Más del 93% de nuestros clientes nos recomiendan. Descubre sus experiencias.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-verde-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tierra-500 to-tierra-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Leaf className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                ¿Listo para mejorar tu hogar?
              </h2>
              <p className="text-xl text-tierra-100 mb-8">
                Llámanos hoy y verifica tu elegibilidad a las ayudas públicas.
                Sin compromiso, sin sorpresas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+34919947586"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-tierra-700 font-semibold rounded-xl shadow-xl hover:bg-tierra-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +34 919 94 75 86
                </a>
                <Link
                  href="/contacto#presupuesto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tierra-700 text-white font-semibold rounded-xl border-2 border-tierra-400 hover:bg-tierra-800 transition-colors"
                >
                  Pedir presupuesto online
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Zones Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-cielo mb-4">Cobertura</span>
            <h2 className="section-title">Zonas de intervención</h2>
            <p className="section-subtitle">
              Intervenimos en toda España, con equipos locales en las principales ciudades
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center"
            >
              {/* Placeholder for Google Map */}
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-verde-600 mx-auto mb-4" />
                <p className="text-gray-600">
                  Mapa interactivo de zonas de intervención
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Alicante (Sede) • Madrid • Toda España
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Un equipo cerca de ti
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Con más de 50 artesanos repartidos por toda España, garantizamos
                una intervención rápida y un seguimiento de proximidad. Nuestra
                sede en Alicante y oficina en Madrid coordinan los proyectos en
                toda España.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-verde-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-verde-700">50+</p>
                  <p className="text-gray-600">Artesanos</p>
                </div>
                <div className="bg-tierra-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-tierra-700">2</p>
                  <p className="text-gray-600">Oficinas</p>
                </div>
                <div className="bg-cielo-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-cielo-700">&lt;10</p>
                  <p className="text-gray-600">Días instalación</p>
                </div>
                <div className="bg-verde-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-verde-700">72h</p>
                  <p className="text-gray-600">Resolución incidentes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}


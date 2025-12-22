'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Award,
  Shield,
  CheckCircle2,
  Target,
  Users,
  TrendingUp,
  FileText,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Leaf,
  RefreshCw,
  Eye,
  BookOpen,
  Settings,
  MessageSquare,
  BarChart3,
  UserCheck,
  Briefcase,
  Calendar,
  Building2,
} from 'lucide-react'

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Sistema de gestión de calidad certificado',
    icon: Shield,
  },
  {
    name: 'RGE Qualibat',
    description: 'Reconocido Garante del Medio Ambiente',
    icon: Leaf,
  },
  {
    name: 'IDAE Homologado',
    description: 'Homologación del Instituto para la Diversificación y Ahorro de la Energía',
    icon: Building2,
  },
  {
    name: 'CE Marcado',
    description: 'Materiales conformes a normativa europea',
    icon: Award,
  },
]

const qualityObjectives = [
  {
    title: 'Tasa de aceptación de dossiers',
    target: '>97%',
    current: '98.2%',
    description: 'Porcentaje de dossiers aceptados a la primera presentación.',
    trend: 'up',
  },
  {
    title: 'Plazo de instalación',
    target: '<10 días',
    current: '7.3 días',
    description: 'Días entre validación del dossier y finalización de la instalación.',
    trend: 'up',
  },
  {
    title: 'Satisfacción cliente',
    target: '>93%',
    current: '94.7%',
    description: 'Porcentaje de clientes que nos califican con 5 estrellas.',
    trend: 'up',
  },
  {
    title: 'Resolución de incidencias',
    target: '<72h',
    current: '48h',
    description: 'Tiempo medio de resolución de cualquier incidencia.',
    trend: 'up',
  },
  {
    title: 'Control de calidad',
    target: '100%',
    current: '100%',
    description: 'Instalaciones con control de calidad sistemático.',
    trend: 'stable',
  },
  {
    title: 'Ahorro energético clientes',
    target: '20-35%',
    current: '28%',
    description: 'Reducción media del consumo energético tras aislamiento.',
    trend: 'up',
  },
]

const improvementProcess = [
  {
    step: 1,
    title: 'Auditorías internas',
    description: 'Realizamos auditorías trimestrales de todos nuestros procesos para identificar áreas de mejora.',
    icon: Eye,
  },
  {
    step: 2,
    title: 'Revisión de dirección',
    description: 'La dirección revisa mensualmente los indicadores de calidad y toma decisiones correctivas.',
    icon: BarChart3,
  },
  {
    step: 3,
    title: 'Feedback de clientes',
    description: 'Encuestamos a todos los clientes tras la instalación y analizamos sus comentarios.',
    icon: MessageSquare,
  },
  {
    step: 4,
    title: 'Formación continua',
    description: 'Nuestros equipos reciben formación regular sobre nuevas técnicas y materiales.',
    icon: BookOpen,
  },
  {
    step: 5,
    title: 'Actualización de procesos',
    description: 'Los procedimientos se actualizan en base a las lecciones aprendidas.',
    icon: RefreshCw,
  },
  {
    step: 6,
    title: 'Seguimiento',
    description: 'Monitorizamos el impacto de cada mejora implementada.',
    icon: TrendingUp,
  },
]

const responsibilities = [
  {
    team: 'Dirección General',
    icon: Briefcase,
    responsibilities: [
      'Definir la política de calidad y los objetivos',
      'Asignar los recursos necesarios',
      'Revisar el sistema de gestión',
      'Tomar decisiones estratégicas',
    ],
  },
  {
    team: 'Equipo Comercial',
    icon: Phone,
    responsibilities: [
      'Recoger información completa y fiable',
      'Informar correctamente a los clientes',
      'Detectar necesidades específicas',
      'Mantener comunicación fluida',
    ],
  },
  {
    team: 'Planificación',
    icon: Calendar,
    responsibilities: [
      'Coordinar visitas técnicas',
      'Programar instalaciones',
      'Respetar plazos comprometidos',
      'Gestionar imprevistos',
    ],
  },
  {
    team: 'Equipo de Instalación',
    icon: Settings,
    responsibilities: [
      'Ejecutar trabajos según normas',
      'Respetar medidas de seguridad',
      'Mantener limpieza en obra',
      'Reportar incidencias',
    ],
  },
  {
    team: 'Administración',
    icon: FileText,
    responsibilities: [
      'Gestionar dossiers con rigor',
      'Seguimiento de expedientes',
      'Archivo documental',
      'Comunicación administrativa',
    ],
  },
  {
    team: 'Control de Calidad',
    icon: CheckCircle2,
    responsibilities: [
      'Inspeccionar todas las instalaciones',
      'Verificar conformidad técnica',
      'Documentar controles',
      'Proponer mejoras',
    ],
  },
]

const policyPoints = [
  {
    title: 'Compromiso con el cliente',
    description: 'Nos comprometemos a satisfacer las necesidades y expectativas de nuestros clientes, ofreciendo un servicio de calidad superior.',
  },
  {
    title: 'Mejora continua',
    description: 'Buscamos constantemente formas de mejorar nuestros procesos, productos y servicios.',
  },
  {
    title: 'Competencia profesional',
    description: 'Garantizamos la competencia de nuestro personal mediante formación continua y evaluaciones periódicas.',
  },
  {
    title: 'Cumplimiento normativo',
    description: 'Cumplimos con todos los requisitos legales y reglamentarios aplicables a nuestra actividad.',
  },
  {
    title: 'Sostenibilidad',
    description: 'Integramos criterios ambientales en todas nuestras decisiones y operaciones.',
  },
  {
    title: 'Transparencia',
    description: 'Mantenemos una comunicación abierta y honesta con clientes, empleados y proveedores.',
  },
]

export default function CalidadPage() {
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
              <Award className="w-4 h-4" />
              Calidad y Certificaciones
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Excelencia en cada{' '}
              <span className="gradient-text">instalación</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Nuestra política de calidad, alineada con la norma ISO 9001, garantiza
              un servicio riguroso y un resultado óptimo en cada proyecto.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="btn-primary">
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#certificaciones" className="btn-secondary">
                Ver certificaciones
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certificaciones" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-cielo mb-4">Reconocimientos</span>
            <h2 className="section-title">Certificaciones y acreditaciones</h2>
            <p className="section-subtitle">
              Garantías oficiales de nuestra competencia y profesionalidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-verde-100 to-verde-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-verde-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-verde mb-4">Política de calidad</span>
            <h2 className="section-title">Nuestros principios</h2>
            <p className="section-subtitle">
              Los pilares que guían todas nuestras acciones y decisiones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-verde-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-verde-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Objectives */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-tierra mb-4">
              <Target className="w-4 h-4" />
              Objetivos mesurables
            </span>
            <h2 className="section-title">Indicadores de rendimiento</h2>
            <p className="section-subtitle">
              Objetivos cuantitativos revisados mensualmente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityObjectives.map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-gray-900 pr-4">{obj.title}</h3>
                  <div className="flex items-center gap-1">
                    {obj.trend === 'up' && (
                      <TrendingUp className="w-4 h-4 text-verde-600" />
                    )}
                    {obj.trend === 'stable' && (
                      <CheckCircle2 className="w-4 h-4 text-verde-600" />
                    )}
                  </div>
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl font-bold text-verde-600">
                    {obj.current}
                  </span>
                  <span className="text-gray-400">
                    objetivo: {obj.target}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{obj.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Improvement Process */}
      <section className="section-padding bg-gradient-to-br from-verde-900 to-verde-950 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-verde-200 rounded-full text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" />
              Mejora continua
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Proceso de mejora continua
            </h2>
            <p className="text-verde-200 max-w-2xl mx-auto">
              Un ciclo permanente de evaluación y optimización de nuestras prácticas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {improvementProcess.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-tierra-400 to-tierra-600 rounded-xl flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <Icon className="w-6 h-6 text-verde-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-verde-200">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-cielo mb-4">
              <Users className="w-4 h-4" />
              Organización
            </span>
            <h2 className="section-title">Responsabilidades definidas</h2>
            <p className="section-subtitle">
              Cada equipo tiene un rol claro para garantizar la calidad del servicio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibilities.map((resp, index) => {
              const Icon = resp.icon
              return (
                <motion.div
                  key={resp.team}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cielo-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cielo-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">{resp.team}</h3>
                  </div>
                  <ul className="space-y-2">
                    {resp.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-verde-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Policy Footer */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-4">
              Esta política de calidad es comunicada a todo el personal de Verdenomia
              y está disponible para las partes interesadas que lo soliciten.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Última revisión: Enero 2025 | Aprobado por: Dirección General
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacto" className="btn-primary">
                Solicitar más información
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+34919469528"
                className="btn-secondary"
              >
                <Phone className="w-5 h-5" />
                Llamar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-verde-600 to-verde-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Calidad garantizada
              </h2>
              <p className="text-xl text-verde-100 mb-8">
                Confía en un equipo certificado con más de 15 años de experiencia
                y miles de proyectos completados con éxito.
              </p>
              <Link
                href="/contacto#presupuesto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-verde-700 font-semibold rounded-xl shadow-xl hover:bg-verde-50 transition-colors"
              >
                Solicitar presupuesto
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}



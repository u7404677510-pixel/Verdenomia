'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  MapPin,
  ArrowRight,
  Filter,
  Grid3X3,
  LayoutList,
  Home,
  Ruler,
  Calendar,
  ThermometerSun,
  TrendingDown,
  Award,
  Phone,
  Leaf,
  ChevronRight,
  Eye,
} from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Casa unifamiliar en Pozuelo',
    location: 'Pozuelo de Alarcón, Madrid',
    type: 'Aislamiento insuflado',
    area: '120 m²',
    date: 'Noviembre 2024',
    savings: '32%',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80',
    description: 'Aislamiento completo de buhardilla en casa unifamiliar. Técnica de insuflado para cubrir todos los rincones de difícil acceso.',
    testimonial: 'La diferencia de temperatura es increíble. Este invierno hemos reducido la calefacción a la mitad.',
    client: 'Familia García',
    category: 'insuflado',
    region: 'madrid',
  },
  {
    id: 2,
    title: 'Ático en el Eixample',
    location: 'Barcelona',
    type: 'Aislamiento en manta',
    area: '85 m²',
    date: 'Octubre 2024',
    savings: '28%',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
    description: 'Instalación de manta de lana mineral en ático con buena accesibilidad. Resultado óptimo en pocas horas.',
    testimonial: 'Muy profesionales y rápidos. Todo el proceso, incluidas las ayudas, fue muy fácil.',
    client: 'Sr. Martínez',
    category: 'manta',
    region: 'barcelona',
  },
  {
    id: 3,
    title: 'Chalet en Las Rozas',
    location: 'Las Rozas, Madrid',
    type: 'Aislamiento insuflado',
    area: '200 m²',
    date: 'Septiembre 2024',
    savings: '35%',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
    description: 'Gran superficie de buhardilla aislada con técnica de insuflado. Proyecto completado en un día.',
    testimonial: 'El ahorro en la factura de gas es espectacular. Muy contentos con el resultado.',
    client: 'Familia López',
    category: 'insuflado',
    region: 'madrid',
  },
  {
    id: 4,
    title: 'Piso en Gracia',
    location: 'Barcelona',
    type: 'Aislamiento en manta',
    area: '45 m²',
    date: 'Agosto 2024',
    savings: '25%',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&q=80',
    description: 'Aislamiento de pequeña buhardilla en edificio antiguo del barrio de Gracia.',
    testimonial: 'Ahora el piso está mucho más fresco en verano. Valió la pena.',
    client: 'Sra. Rodríguez',
    category: 'manta',
    region: 'barcelona',
  },
  {
    id: 5,
    title: 'Villa en Santa Eulalia',
    location: 'Ibiza',
    type: 'Aislamiento insuflado',
    area: '150 m²',
    date: 'Julio 2024',
    savings: '30%',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
    description: 'Aislamiento de villa mediterránea para mejorar el confort en los meses de calor intenso.',
    testimonial: 'La casa ahora mantiene una temperatura agradable sin necesidad de aire acondicionado constante.',
    client: 'Sr. Fernández',
    category: 'insuflado',
    region: 'baleares',
  },
  {
    id: 6,
    title: 'Adosado en Majadahonda',
    location: 'Majadahonda, Madrid',
    type: 'Aislamiento en manta',
    area: '95 m²',
    date: 'Junio 2024',
    savings: '27%',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&q=80',
    description: 'Casa adosada con buhardilla amplia y accesible. Solución en manta de alta densidad.',
    testimonial: 'El equipo fue muy profesional y dejó todo impecable. Muy recomendable.',
    client: 'Familia Sánchez',
    category: 'manta',
    region: 'madrid',
  },
]

const filters = {
  category: [
    { value: 'all', label: 'Todas las técnicas' },
    { value: 'insuflado', label: 'Insuflado' },
    { value: 'manta', label: 'En manta' },
  ],
  region: [
    { value: 'all', label: 'Todas las regiones' },
    { value: 'madrid', label: 'Madrid' },
    { value: 'barcelona', label: 'Barcelona' },
    { value: 'baleares', label: 'Baleares' },
  ],
}

const stats = [
  { value: '2500+', label: 'Proyectos realizados' },
  { value: '28%', label: 'Ahorro medio' },
  { value: '94%', label: 'Satisfacción' },
]

export default function ProyectosPage() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [regionFilter, setRegionFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = categoryFilter === 'all' || project.category === categoryFilter
    const regionMatch = regionFilter === 'all' || project.region === regionFilter
    return categoryMatch && regionMatch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-tierra-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-tierra-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-verde-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="badge-tierra mb-4">Nuestras realizaciones</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Proyectos que{' '}
              <span className="text-tierra-600">transforman hogares</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubre algunos de los más de 2.500 proyectos que hemos completado
              en toda España. Cada uno representa una familia con más confort y
              menos facturas.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-8 mt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-tierra-600">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Filtrar:</span>
              </div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:border-verde-500 focus:outline-none bg-white"
              >
                {filters.category.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:border-verde-500 focus:outline-none bg-white"
              >
                {filters.region.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-verde-100 text-verde-700' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-verde-100 text-verde-700' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <LayoutList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No hay proyectos que coincidan con los filtros seleccionados.
              </p>
              <button
                onClick={() => {
                  setCategoryFilter('all')
                  setRegionFilter('all')
                }}
                className="mt-4 text-verde-600 font-medium hover:text-verde-700"
              >
                Borrar filtros
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
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
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        {project.area}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-verde-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    -{project.savings}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                      <Eye className="w-5 h-5 text-verde-600" />
                      <span className="font-medium text-gray-900">Ver detalles</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="card flex flex-col md:flex-row gap-6 cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-verde-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      -{project.savings}
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="badge-tierra mb-2">{project.type}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        {project.area}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="badge-verde mb-2">{selectedProject.type}</span>
                <h2 className="text-3xl font-bold text-white">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <MapPin className="w-5 h-5 text-verde-600 mb-2" />
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-semibold text-gray-900">{selectedProject.location}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <Ruler className="w-5 h-5 text-verde-600 mb-2" />
                  <p className="text-sm text-gray-500">Superficie</p>
                  <p className="font-semibold text-gray-900">{selectedProject.area}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <Calendar className="w-5 h-5 text-verde-600 mb-2" />
                  <p className="text-sm text-gray-500">Fecha</p>
                  <p className="font-semibold text-gray-900">{selectedProject.date}</p>
                </div>
                <div className="bg-verde-50 rounded-xl p-4">
                  <TrendingDown className="w-5 h-5 text-verde-600 mb-2" />
                  <p className="text-sm text-gray-500">Ahorro</p>
                  <p className="font-semibold text-verde-700">{selectedProject.savings}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Descripción del proyecto</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Before/After placeholder */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Antes y después</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={selectedProject.beforeImage}
                      alt="Antes"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      Antes
                    </span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={selectedProject.afterImage}
                      alt="Después"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-verde-600 text-white px-3 py-1 rounded-full text-sm">
                      Después
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-verde-50 rounded-2xl p-6 mb-8">
                <p className="text-lg text-gray-700 italic mb-4">
                  &ldquo;{selectedProject.testimonial}&rdquo;
                </p>
                <p className="font-semibold text-verde-700">{selectedProject.client}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contacto#presupuesto" className="btn-primary">
                  Solicitar un proyecto similar
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tierra-500 to-tierra-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Home className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Tu proyecto podría ser el siguiente
              </h2>
              <p className="text-xl text-tierra-100 mb-8">
                Únete a las más de 2.500 familias que ya disfrutan de un hogar
                más confortable y eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto#presupuesto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-tierra-700 font-semibold rounded-xl shadow-xl hover:bg-tierra-50 transition-colors"
                >
                  Iniciar mi proyecto
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+34919469528"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tierra-700 text-white font-semibold rounded-xl border-2 border-tierra-400 hover:bg-tierra-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}



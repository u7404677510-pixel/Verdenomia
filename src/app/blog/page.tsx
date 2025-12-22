'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  BookOpen,
  TrendingUp,
  Leaf,
  ThermometerSun,
  Euro,
  Home,
  ChevronRight,
  Mail,
} from 'lucide-react'
import { useState } from 'react'

const categories = [
  { name: 'Todos', slug: 'all', count: 12 },
  { name: 'Eficiencia energética', slug: 'eficiencia', count: 5 },
  { name: 'Ayudas y subvenciones', slug: 'ayudas', count: 3 },
  { name: 'Consejos prácticos', slug: 'consejos', count: 2 },
  { name: 'Materiales', slug: 'materiales', count: 2 },
]

const featuredPost = {
  id: 1,
  title: 'Guía completa: Cómo acceder a las ayudas PREE y NextGenerationEU para aislamiento',
  excerpt:
    'Descubre paso a paso cómo solicitar las subvenciones públicas que pueden financiar hasta el 100% del coste de tu aislamiento de buhardilla.',
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  category: 'Ayudas y subvenciones',
  categorySlug: 'ayudas',
  author: 'Equipo Verdenomia',
  date: '15 Dic 2024',
  readTime: '8 min',
  slug: 'guia-ayudas-pree-nextgenerationeu',
}

const posts = [
  {
    id: 2,
    title: '5 señales de que tu buhardilla necesita mejor aislamiento',
    excerpt:
      'Aprende a identificar los síntomas de un aislamiento deficiente y cómo afecta a tu confort y facturas.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'Consejos prácticos',
    categorySlug: 'consejos',
    author: 'Carlos García',
    date: '10 Dic 2024',
    readTime: '5 min',
    slug: 'senales-buhardilla-necesita-aislamiento',
  },
  {
    id: 3,
    title: 'Lana mineral vs lana de roca: ¿Cuál elegir?',
    excerpt:
      'Comparativa detallada de los dos materiales aislantes más utilizados en buhardillas.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    category: 'Materiales',
    categorySlug: 'materiales',
    author: 'Ana Martínez',
    date: '5 Dic 2024',
    readTime: '6 min',
    slug: 'lana-mineral-vs-lana-roca',
  },
  {
    id: 4,
    title: 'Cómo calcular el ahorro energético tras aislar tu buhardilla',
    excerpt:
      'Fórmulas y herramientas para estimar cuánto reducirás tus facturas de calefacción.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    category: 'Eficiencia energética',
    categorySlug: 'eficiencia',
    author: 'Equipo Verdenomia',
    date: '28 Nov 2024',
    readTime: '7 min',
    slug: 'calcular-ahorro-energetico-aislamiento',
  },
  {
    id: 5,
    title: 'Novedades en las ayudas al aislamiento para 2025',
    excerpt:
      'Resumen de los cambios previstos en los programas de subvenciones para el próximo año.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
    category: 'Ayudas y subvenciones',
    categorySlug: 'ayudas',
    author: 'Equipo Verdenomia',
    date: '20 Nov 2024',
    readTime: '4 min',
    slug: 'novedades-ayudas-aislamiento-2025',
  },
  {
    id: 6,
    title: 'La importancia de la ventilación en buhardillas aisladas',
    excerpt:
      'Por qué una buena ventilación es esencial para evitar problemas de humedad.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80',
    category: 'Eficiencia energética',
    categorySlug: 'eficiencia',
    author: 'Carlos García',
    date: '15 Nov 2024',
    readTime: '5 min',
    slug: 'ventilacion-buhardillas-aisladas',
  },
  {
    id: 7,
    title: 'Aislamiento y valor de la vivienda: ¿Cuánto aumenta?',
    excerpt:
      'Estudio sobre el impacto de las mejoras de eficiencia energética en el precio de venta.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    category: 'Eficiencia energética',
    categorySlug: 'eficiencia',
    author: 'Ana Martínez',
    date: '8 Nov 2024',
    readTime: '6 min',
    slug: 'aislamiento-valor-vivienda',
  },
]

const popularTopics = [
  { name: 'Ayudas 1€', icon: Euro },
  { name: 'Ahorro energético', icon: TrendingUp },
  { name: 'Tipos de aislamiento', icon: Home },
  { name: 'Certificado energético', icon: Leaf },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter((post) => {
    const categoryMatch = selectedCategory === 'all' || post.categorySlug === selectedCategory
    const searchMatch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cielo-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cielo-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-verde-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="badge-cielo mb-4">
              <BookOpen className="w-4 h-4" />
              Blog & Consejos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Guías y consejos de{' '}
              <span className="text-cielo-600">eficiencia energética</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Artículos prácticos para entender el aislamiento, las ayudas
              disponibles y cómo mejorar el confort de tu hogar.
            </p>

            {/* Search bar */}
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 pl-12 border border-gray-200 rounded-2xl shadow-sm focus:border-cielo-500 focus:outline-none focus:ring-2 focus:ring-cielo-500/20"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-verde-50 to-cielo-50 rounded-3xl overflow-hidden"
            >
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:py-12">
                <span className="badge-verde mb-4">Destacado</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-verde-700 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-verde-600 font-semibold group-hover:gap-3 transition-all">
                  Leer artículo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-verde-600" />
                    Categorías
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.slug}>
                        <button
                          onClick={() => setSelectedCategory(category.slug)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === category.slug
                              ? 'bg-verde-100 text-verde-700'
                              : 'hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-sm text-gray-400">{category.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Topics */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Temas populares</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTopics.map((topic) => {
                      const Icon = topic.icon
                      return (
                        <span
                          key={topic.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-verde-100 hover:text-verde-700 cursor-pointer transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          {topic.name}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-verde-600 to-verde-700 rounded-2xl p-6 text-white">
                  <Mail className="w-10 h-10 mb-4 opacity-80" />
                  <h3 className="font-bold text-lg mb-2">Newsletter</h3>
                  <p className="text-verde-100 text-sm mb-4">
                    Recibe consejos y novedades sobre ayudas energéticas.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Tu email"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-verde-200 focus:outline-none focus:border-white/50"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-white text-verde-700 font-semibold rounded-lg hover:bg-verde-50 transition-colors"
                    >
                      Suscribirme
                    </button>
                  </form>
                </div>
              </div>
            </aside>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl">
                  <p className="text-gray-500 text-lg">
                    No hay artículos que coincidan con tu búsqueda.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all')
                      setSearchQuery('')
                    }}
                    className="mt-4 text-verde-600 font-medium hover:text-verde-700"
                  >
                    Ver todos los artículos
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                      >
                        <div className="relative h-48">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-3 left-3 badge-cielo">
                            {post.category}
                          </span>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-verde-700 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}

              {/* Load more button */}
              {filteredPosts.length > 0 && (
                <div className="text-center mt-10">
                  <button className="btn-secondary">
                    Cargar más artículos
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cielo-500 to-cielo-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ThermometerSun className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                ¿Tienes preguntas sobre tu proyecto?
              </h2>
              <p className="text-xl text-cielo-100 mb-8">
                Nuestro equipo está disponible para resolver todas tus dudas
                y ayudarte a mejorar la eficiencia de tu hogar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cielo-700 font-semibold rounded-xl shadow-xl hover:bg-cielo-50 transition-colors"
                >
                  Contactar con un experto
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}



import { MetadataRoute } from 'next'

const BASE_URL = 'https://verdenomia.es'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['es', 'en']
  const now = new Date().toISOString()

  // Main pages
  const mainPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/nosotros', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/caes', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contacto', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/transparencia', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/aislamiento-madrid', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/aislamiento-alicante', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  // Blog articles
  const blogArticles = [
    'aislamiento-atico-guia-completa',
    'que-son-certificados-ahorro-energetico-cae',
    'ahorro-energetico-hogar-consejos',
    'reducir-factura-calefaccion',
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    // Main pages
    for (const page of mainPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
    }

    // Blog articles
    for (const slug of blogArticles) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }

  return entries
}

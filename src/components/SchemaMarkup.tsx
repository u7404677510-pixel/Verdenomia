import Script from 'next/script'

interface SchemaProps {
  type: 'Organization' | 'LocalBusiness' | 'FAQPage' | 'Article' | 'BreadcrumbList'
  data: Record<string, unknown>
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return (
    <Script
      id={`schema-${type.toLowerCase()}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Pre-built schemas
export function OrganizationSchema() {
  return (
    <SchemaMarkup
      type="Organization"
      data={{
        name: 'Verdenomia',
        url: 'https://verdenomia.es',
        logo: 'https://verdenomia.es/logo.png',
        description: 'Especialistas en aislamiento de suelos de buhardilla 100% financiado por CAE en España.',
        telephone: '+34919947360',
        email: 'contacto@verdenomia.es',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calle Principal, 123',
          addressLocality: 'Alicante',
          postalCode: '03001',
          addressCountry: 'ES',
        },
        areaServed: {
          '@type': 'Country',
          name: 'España',
        },
        sameAs: [],
      }}
    />
  )
}

export function LocalBusinessSchema({ city, address, postalCode, type: officeType }: {
  city: string
  address: string
  postalCode: string
  type: string
}) {
  return (
    <SchemaMarkup
      type="LocalBusiness"
      data={{
        name: `Verdenomia ${city}`,
        description: `Aislamiento de buhardilla 100% gratis en ${city}. Financiado por los Certificados de Ahorro Energético (CAE).`,
        url: 'https://verdenomia.es',
        telephone: '+34919947360',
        email: 'contacto@verdenomia.es',
        image: 'https://verdenomia.es/logo.png',
        address: {
          '@type': 'PostalAddress',
          streetAddress: address,
          addressLocality: city,
          postalCode: postalCode,
          addressCountry: 'ES',
        },
        geo: city === 'Alicante'
          ? { '@type': 'GeoCoordinates', latitude: 38.3452, longitude: -0.4810 }
          : { '@type': 'GeoCoordinates', latitude: 40.4168, longitude: -3.7038 },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        priceRange: '0€ (100% financiado por CAE)',
        additionalType: officeType,
      }}
    />
  )
}

export function FAQPageSchema({ questions }: { questions: { question: string; answer: string }[] }) {
  return (
    <SchemaMarkup
      type="FAQPage"
      data={{
        mainEntity: questions.map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer,
          },
        })),
      }}
    />
  )
}

export function ArticleSchema({ title, description, slug, datePublished, dateModified }: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
}) {
  return (
    <SchemaMarkup
      type="Article"
      data={{
        headline: title,
        description: description,
        url: `https://verdenomia.es/es/blog/${slug}`,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
          '@type': 'Organization',
          name: 'Verdenomia',
          url: 'https://verdenomia.es',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Verdenomia',
          logo: {
            '@type': 'ImageObject',
            url: 'https://verdenomia.es/logo.png',
          },
        },
        image: 'https://verdenomia.es/og-image.png',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://verdenomia.es/es/blog/${slug}`,
        },
      }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <SchemaMarkup
      type="BreadcrumbList"
      data={{
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}

'use client'

import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { type Locale } from '@/i18n/config'

const content = {
  es: {
    title: 'Política de cookies',
    updated: 'Última actualización: Diciembre 2025',
    sections: [
      { title: '¿Qué son las cookies?', content: 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten al sitio recordar sus acciones y preferencias durante un período de tiempo.' },
      { title: 'Cookies que utilizamos', content: 'Utilizamos cookies técnicas (necesarias para el funcionamiento del sitio), cookies analíticas (para entender cómo los usuarios interactúan con el sitio) y cookies de preferencias (para recordar sus elecciones).' },
      { title: 'Cookies de terceros', content: 'Podemos utilizar servicios de terceros como Google Analytics para analizar el uso del sitio. Estos servicios pueden establecer sus propias cookies.' },
      { title: 'Control de cookies', content: 'Puede configurar su navegador para rechazar cookies o para que le avise cuando se envían. Sin embargo, algunas funciones del sitio pueden no funcionar correctamente sin cookies.' },
      { title: 'Más información', content: 'Para más información sobre cómo gestionamos sus datos, consulte nuestra Política de Privacidad. Si tiene preguntas, contacte con nosotros en Contacto@verdenomia.es.' },
    ],
  },
  en: {
    title: 'Cookie Policy',
    updated: 'Last updated: December 2025',
    sections: [
      { title: 'What are cookies?', content: 'Cookies are small text files that are stored on your device when you visit a website. They allow the site to remember your actions and preferences over a period of time.' },
      { title: 'Cookies we use', content: 'We use technical cookies (necessary for the site to function), analytical cookies (to understand how users interact with the site), and preference cookies (to remember your choices).' },
      { title: 'Third-party cookies', content: 'We may use third-party services like Google Analytics to analyze site usage. These services may set their own cookies.' },
      { title: 'Cookie control', content: 'You can configure your browser to reject cookies or to alert you when cookies are being sent. However, some site features may not work properly without cookies.' },
      { title: 'More information', content: 'For more information on how we manage your data, please see our Privacy Policy. If you have questions, contact us at Contacto@verdenomia.es.' },
    ],
  },
}

export default function CookiesPage() {
  const locale = useLocale() as Locale
  const t = content[locale]

  return (
    <div className="overflow-hidden">
      <section className="py-20 bg-gradient-to-br from-verde-900 to-verde-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
              <Cookie className="w-4 h-4" />
              Cookies
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{t.title}</h1>
            <p className="text-verde-200">{t.updated}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-verde">
            {t.sections.map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="mb-8">
                <h2 className="text-xl font-bold text-verde-800 mb-3">{section.title}</h2>
                <p className="text-gray-600">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


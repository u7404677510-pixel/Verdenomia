'use client'

import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { type Locale } from '@/i18n/config'

const content = {
  es: {
    title: 'Aviso legal',
    updated: 'Última actualización: Diciembre 2025',
    sections: [
      { title: '1. Identificación', content: 'VERDENOMIA S.L.\nCIF: B-12345678\nDomicilio: Calle Principal, 123, 03001 Alicante, España\nEmail: info@verdenomia.es\nTeléfono: +34 919 46 95 28\nInscrita en el Registro Mercantil de Alicante.' },
      { title: '2. Objeto', content: 'Este sitio web tiene como objeto proporcionar información sobre los servicios de aislamiento de Verdenomia y el programa de Certificados de Ahorro Energético (CAE).' },
      { title: '3. Condiciones de uso', content: 'El acceso a este sitio web es gratuito. El usuario se compromete a hacer un uso adecuado del sitio, sin realizar actividades ilícitas o contrarias a la buena fe.' },
      { title: '4. Propiedad intelectual', content: 'Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño) son propiedad de Verdenomia S.L. o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual.' },
      { title: '5. Limitación de responsabilidad', content: 'Verdenomia no se hace responsable de los daños que puedan derivarse del uso de la información contenida en este sitio web o de la imposibilidad de acceder al mismo.' },
      { title: '6. Enlaces externos', content: 'Este sitio puede contener enlaces a sitios web de terceros. Verdenomia no se responsabiliza del contenido de dichos sitios.' },
      { title: '7. Legislación aplicable', content: 'Las presentes condiciones se rigen por la legislación española. Para cualquier controversia serán competentes los Juzgados y Tribunales de Alicante.' },
    ],
  },
  fr: {
    title: 'Mentions légales',
    updated: 'Dernière mise à jour : Décembre 2025',
    sections: [
      { title: '1. Identification', content: 'VERDENOMIA S.L.\nCIF : B-12345678\nSiège social : Calle Principal, 123, 03001 Alicante, Espagne\nEmail : info@verdenomia.es\nTéléphone : +34 919 46 95 28\nInscrite au Registre du Commerce d\'Alicante.' },
      { title: '2. Objet', content: 'Ce site web a pour objet de fournir des informations sur les services d\'isolation de Verdenomia et le programme de Certificats d\'Économies d\'Énergie (CAE).' },
      { title: '3. Conditions d\'utilisation', content: 'L\'accès à ce site web est gratuit. L\'utilisateur s\'engage à faire un usage approprié du site, sans réaliser d\'activités illicites ou contraires à la bonne foi.' },
      { title: '4. Propriété intellectuelle', content: 'Tous les contenus de ce site web (textes, images, logos, design) sont la propriété de Verdenomia S.L. ou de tiers ayant autorisé leur utilisation, et sont protégés par les lois sur la propriété intellectuelle.' },
      { title: '5. Limitation de responsabilité', content: 'Verdenomia n\'est pas responsable des dommages pouvant résulter de l\'utilisation des informations contenues sur ce site web ou de l\'impossibilité d\'y accéder.' },
      { title: '6. Liens externes', content: 'Ce site peut contenir des liens vers des sites web tiers. Verdenomia n\'est pas responsable du contenu de ces sites.' },
      { title: '7. Loi applicable', content: 'Les présentes conditions sont régies par la législation espagnole. Pour tout litige, les tribunaux d\'Alicante seront compétents.' },
    ],
  },
  en: {
    title: 'Legal Notice',
    updated: 'Last updated: December 2025',
    sections: [
      { title: '1. Identification', content: 'VERDENOMIA S.L.\nCIF: B-12345678\nAddress: Calle Principal, 123, 03001 Alicante, Spain\nEmail: info@verdenomia.es\nPhone: +34 919 46 95 28\nRegistered at the Alicante Commercial Registry.' },
      { title: '2. Purpose', content: 'This website aims to provide information about Verdenomia\'s insulation services and the Energy Savings Certificates (CAE) program.' },
      { title: '3. Terms of Use', content: 'Access to this website is free. The user agrees to make appropriate use of the site, without carrying out illegal activities or activities contrary to good faith.' },
      { title: '4. Intellectual Property', content: 'All content on this website (texts, images, logos, design) is the property of Verdenomia S.L. or third parties who have authorized its use, and is protected by intellectual property laws.' },
      { title: '5. Limitation of Liability', content: 'Verdenomia is not responsible for damages that may arise from the use of the information contained on this website or from the inability to access it.' },
      { title: '6. External Links', content: 'This site may contain links to third-party websites. Verdenomia is not responsible for the content of such sites.' },
      { title: '7. Applicable Law', content: 'These terms are governed by Spanish law. For any dispute, the courts of Alicante will have jurisdiction.' },
    ],
  },
}

export default function LegalPage() {
  const locale = useLocale() as Locale
  const t = content[locale]

  return (
    <div className="overflow-hidden">
      <section className="py-20 bg-gradient-to-br from-verde-900 to-verde-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
              <FileText className="w-4 h-4" />
              Legal
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
                <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


'use client'

import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { type Locale } from '@/i18n/config'

const content = {
  es: {
    title: 'Política de privacidad',
    updated: 'Última actualización: Diciembre 2025',
    sections: [
      { title: '1. Responsable del tratamiento', content: 'VERDENOMIA S.L., con CIF B-12345678, domicilio en Calle Principal, 123, 03001 Alicante, España. Email: Contacto@verdenomia.es' },
      { title: '2. Finalidad del tratamiento', content: 'Sus datos personales serán tratados para: gestionar su solicitud de información, evaluar su elegibilidad al programa CAE, programar visitas técnicas, enviar comunicaciones comerciales (con su consentimiento), y cumplir obligaciones legales.' },
      { title: '3. Base legal', content: 'El tratamiento se basa en: su consentimiento, la ejecución de un contrato o medidas precontractuales, y el cumplimiento de obligaciones legales aplicables.' },
      { title: '4. Destinatarios', content: 'Sus datos podrán ser comunicados a: empresas energéticas para la gestión de los CAE, administraciones públicas cuando sea legalmente exigido, y proveedores de servicios que actúan como encargados del tratamiento.' },
      { title: '5. Conservación', content: 'Los datos se conservarán durante el tiempo necesario para cumplir la finalidad para la que fueron recogidos y, posteriormente, durante los plazos legales de prescripción.' },
      { title: '6. Derechos', content: 'Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un email a Contacto@verdenomia.es con copia de su DNI.' },
      { title: '7. Reclamaciones', content: 'Si considera que sus derechos no han sido debidamente atendidos, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).' },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: December 2025',
    sections: [
      { title: '1. Data Controller', content: 'VERDENOMIA S.L., with CIF B-12345678, located at Calle Principal, 123, 03001 Alicante, Spain. Email: Contacto@verdenomia.es' },
      { title: '2. Purpose of Processing', content: 'Your personal data will be processed to: manage your information request, assess your eligibility for the CAE program, schedule technical visits, send commercial communications (with your consent), and comply with legal obligations.' },
      { title: '3. Legal Basis', content: 'Processing is based on: your consent, the execution of a contract or pre-contractual measures, and compliance with applicable legal obligations.' },
      { title: '4. Recipients', content: 'Your data may be communicated to: energy companies for CAE management, public administrations when legally required, and service providers acting as data processors.' },
      { title: '5. Retention', content: 'Data will be kept for the time necessary to fulfill the purpose for which it was collected and, subsequently, for the legal statute of limitations periods.' },
      { title: '6. Rights', content: 'You can exercise your rights of access, rectification, deletion, opposition, limitation and portability by sending an email to Contacto@verdenomia.es with a copy of your ID.' },
      { title: '7. Complaints', content: 'If you believe your rights have not been properly addressed, you can file a complaint with the Spanish Data Protection Agency (www.aepd.es).' },
    ],
  },
}

export default function PrivacidadPage() {
  const locale = useLocale() as Locale
  const t = content[locale]

  return (
    <div className="overflow-hidden">
      <section className="py-20 bg-gradient-to-br from-verde-900 to-verde-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
              <Shield className="w-4 h-4" />
              RGPD
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


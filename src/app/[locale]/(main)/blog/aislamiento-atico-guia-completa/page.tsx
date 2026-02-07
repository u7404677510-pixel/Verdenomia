'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react'
import { type Locale } from '@/i18n/config'
import { ArticleSchema } from '@/components/SchemaMarkup'

const content = {
  es: {
    backToBlog: 'Volver al blog',
    title: 'Guía completa: aislamiento de suelos de ático con CAE',
    date: '5 febrero 2026',
    readTime: '8 min de lectura',
    sections: {
      s1Title: '¿Por qué aislar el suelo de tu ático?',
      s1P1: 'El tejado es la principal fuente de pérdidas térmicas de una vivienda. Según estudios del IDAE (Instituto para la Diversificación y Ahorro de la Energía), <strong>hasta un 30% del calor de tu hogar se escapa por la cubierta</strong> cuando el ático no está correctamente aislado.',
      s1P2: 'Un ático sin aislar actúa como un puente térmico gigante: en invierno deja escapar el calor hacia el exterior y en verano permite que el calor penetre en la vivienda. Esto se traduce en un mayor consumo de calefacción y aire acondicionado, lo que dispara tu factura energética.',
      s1P3: 'Aislar el suelo del ático es la intervención con <strong>mejor relación coste-beneficio</strong> en eficiencia energética residencial. Es más efectiva que cambiar ventanas y mucho más económica que aislar fachadas, ya que el calor asciende de forma natural y se acumula bajo la cubierta.',

      s2Title: 'Técnicas de aislamiento disponibles',
      s2P1: 'Existen dos técnicas principales para aislar el suelo de un ático no habitable:',
      s2Technique1Title: 'Aislamiento por insuflación (lana mineral soplada)',
      s2Technique1Desc: 'Consiste en proyectar lana mineral en forma de copos sobre el suelo del ático mediante una máquina de soplado. Es la técnica más rápida y eficiente, ya que se adapta a cualquier forma y rellena todos los huecos y rincones sin dejar puentes térmicos.',
      s2Technique1Pros: ['Instalación rápida (2-4 horas para un ático medio)', 'Se adapta a geometrías irregulares', 'Sin juntas ni puentes térmicos', 'Excelente relación calidad-precio'],
      s2Technique2Title: 'Aislamiento con manta (rollos)',
      s2Technique2Desc: 'Se colocan rollos de lana mineral o fibra de vidrio directamente sobre el suelo del ático. Es una técnica tradicional que requiere un suelo relativamente plano y accesible.',
      s2Technique2Pros: ['Espesor uniforme y controlado', 'Fácil de inspeccionar visualmente', 'Material fácil de encontrar', 'Adecuado para suelos planos'],
      s2P2: 'En Verdenomia, utilizamos principalmente la técnica de <strong>insuflación con lana mineral</strong>, ya que ofrece mejores resultados térmicos y una instalación más rápida y limpia. El espesor recomendado es de 30-40 cm para alcanzar una resistencia térmica R ≥ 7 m²·K/W.',

      s3Title: '¿Cuánto cuesta aislar un ático?',
      s3P1: 'El coste habitual de aislar el suelo de un ático oscila entre <strong>20 y 40 €/m²</strong>, dependiendo de la técnica utilizada, el espesor del aislante y la accesibilidad del espacio. Para un ático medio de 60-80 m², esto supone un coste de entre 1.200 € y 3.200 €.',
      s3P2: 'Sin embargo, gracias al programa de <strong>Certificados de Ahorro Energético (CAE)</strong>, esta intervención puede ser <strong>100% gratuita</strong> para el propietario. Los CAE financian íntegramente el coste de los materiales y la mano de obra, sin ningún compromiso ni coste oculto para el cliente.',
      s3Highlight: '0 € para el propietario gracias al programa CAE',

      s4Title: 'Los Certificados de Ahorro Energético (CAE)',
      s4P1: 'Los Certificados de Ahorro Energético son un mecanismo creado por el gobierno español para impulsar la eficiencia energética. Las grandes empresas energéticas (obligadas) deben demostrar ahorros energéticos, y para ello financian intervenciones como el aislamiento de áticos en hogares particulares.',
      s4P2: '¿Cómo funciona en la práctica? Es muy sencillo:',
      s4Steps: [
        'Las empresas energéticas aportan los fondos para financiar las obras.',
        'Empresas especializadas como Verdenomia realizan las intervenciones.',
        'A cambio, se generan certificados que acreditan el ahorro energético conseguido.',
        'El propietario obtiene un aislamiento profesional sin pagar nada.',
      ],
      s4P3: 'Este sistema es <strong>beneficioso para todas las partes</strong>: las empresas energéticas cumplen con sus obligaciones, los hogares mejoran su eficiencia energética, y la sociedad reduce su consumo de energía global.',

      s5Title: 'El proceso paso a paso',
      s5Steps: [
        { title: 'Verificación de elegibilidad', desc: 'Comprueba online si tu vivienda cumple los requisitos del programa CAE. Solo necesitas un ático no habitable con acceso adecuado.' },
        { title: 'Diagnóstico técnico', desc: 'Un técnico cualificado visita tu vivienda para evaluar el ático, tomar medidas y confirmar la viabilidad técnica de la intervención.' },
        { title: 'Planificación de la intervención', desc: 'Se establece una fecha para la instalación. Nuestros técnicos te informan de todo lo que necesitas saber antes del día de la obra.' },
        { title: 'Instalación profesional', desc: 'El equipo técnico realiza el aislamiento en pocas horas, de forma limpia y sin obras. El resultado es inmediato: mejor confort y menor consumo.' },
        { title: 'Coste total: 0 €', desc: 'No pagas absolutamente nada. Ni materiales, ni mano de obra, ni tasas. Todo está financiado al 100% por los CAE.' },
      ],

      s6Title: 'Beneficios concretos del aislamiento',
      s6Benefits: [
        { title: 'Ahorro energético', desc: 'Reduce tu factura de calefacción hasta un 30%. Con un buen aislamiento, necesitas menos energía para mantener tu hogar a temperatura confortable.' },
        { title: 'Confort térmico', desc: 'Temperatura más estable en todas las estaciones. Menos frío en invierno y menos calor en verano, sin corrientes de aire ni zonas frías.' },
        { title: 'Valor de tu vivienda', desc: 'Mejora la calificación energética de tu inmueble, lo que aumenta su valor en el mercado inmobiliario y lo hace más atractivo para compradores o inquilinos.' },
        { title: 'Impacto medioambiental', desc: 'Menos consumo energético significa menos emisiones de CO₂. Contribuyes activamente a la lucha contra el cambio climático desde tu propio hogar.' },
      ],

      ctaTitle: '¿Listo para aislar tu ático gratis?',
      ctaDesc: 'Verifica tu elegibilidad en menos de 2 minutos y obtén un aislamiento profesional 100% financiado por los CAE.',
      ctaButton: 'Verificar mi elegibilidad',
    },
    schemaTitle: 'Guía completa: aislamiento de suelos de ático con CAE',
    schemaDescription: 'Descubre cómo aislar el suelo de tu ático 100% gratis con los Certificados de Ahorro Energético. Técnicas, costes y proceso paso a paso.',
  },
  en: {
    backToBlog: 'Back to blog',
    title: 'Complete guide: attic floor insulation with CAE',
    date: '5 February 2026',
    readTime: '8 min read',
    sections: {
      s1Title: 'Why insulate your attic floor?',
      s1P1: 'The roof is the main source of heat loss in a home. According to studies by IDAE (Institute for Energy Diversification and Saving), <strong>up to 30% of your home\'s heat escapes through the roof</strong> when the attic is not properly insulated.',
      s1P2: 'An uninsulated attic acts as a giant thermal bridge: in winter it lets heat escape outside and in summer it allows heat to penetrate the home. This translates into higher heating and air conditioning consumption, which drives up your energy bill.',
      s1P3: 'Insulating the attic floor is the intervention with the <strong>best cost-benefit ratio</strong> in residential energy efficiency. It is more effective than changing windows and much more economical than insulating facades, as heat naturally rises and accumulates under the roof.',

      s2Title: 'Available insulation techniques',
      s2P1: 'There are two main techniques for insulating a non-habitable attic floor:',
      s2Technique1Title: 'Blown insulation (blown mineral wool)',
      s2Technique1Desc: 'It consists of blowing mineral wool in the form of flakes onto the attic floor using a blowing machine. It is the fastest and most efficient technique, as it adapts to any shape and fills all gaps and corners without leaving thermal bridges.',
      s2Technique1Pros: ['Quick installation (2-4 hours for an average attic)', 'Adapts to irregular geometries', 'No joints or thermal bridges', 'Excellent value for money'],
      s2Technique2Title: 'Blanket insulation (rolls)',
      s2Technique2Desc: 'Rolls of mineral wool or fiberglass are placed directly on the attic floor. It is a traditional technique that requires a relatively flat and accessible floor.',
      s2Technique2Pros: ['Uniform and controlled thickness', 'Easy to inspect visually', 'Material easy to find', 'Suitable for flat floors'],
      s2P2: 'At Verdenomia, we primarily use the <strong>blown mineral wool</strong> technique, as it offers better thermal results and faster, cleaner installation. The recommended thickness is 30-40 cm to achieve a thermal resistance R ≥ 7 m²·K/W.',

      s3Title: 'How much does attic insulation cost?',
      s3P1: 'The usual cost of insulating an attic floor ranges from <strong>€20 to €40/m²</strong>, depending on the technique used, the thickness of the insulation and the accessibility of the space. For an average attic of 60-80 m², this amounts to between €1,200 and €3,200.',
      s3P2: 'However, thanks to the <strong>Energy Savings Certificates (CAE)</strong> program, this intervention can be <strong>100% free</strong> for the homeowner. The CAE fully fund the cost of materials and labor, with no commitment or hidden costs for the customer.',
      s3Highlight: '€0 for the homeowner thanks to the CAE program',

      s4Title: 'Energy Savings Certificates (CAE)',
      s4P1: 'Energy Savings Certificates are a mechanism created by the Spanish government to promote energy efficiency. Large energy companies (obligated parties) must demonstrate energy savings, and to do so they fund interventions such as attic insulation in private homes.',
      s4P2: 'How does it work in practice? It\'s very simple:',
      s4Steps: [
        'Energy companies provide the funds to finance the works.',
        'Specialized companies like Verdenomia carry out the interventions.',
        'In return, certificates are generated that accredit the energy savings achieved.',
        'The homeowner gets professional insulation without paying anything.',
      ],
      s4P3: 'This system is <strong>beneficial for all parties</strong>: energy companies meet their obligations, homes improve their energy efficiency, and society reduces its overall energy consumption.',

      s5Title: 'The step-by-step process',
      s5Steps: [
        { title: 'Eligibility check', desc: 'Check online if your home meets the requirements of the CAE program. You only need a non-habitable attic with adequate access.' },
        { title: 'Technical diagnosis', desc: 'A qualified technician visits your home to assess the attic, take measurements and confirm the technical viability of the intervention.' },
        { title: 'Intervention planning', desc: 'A date is set for the installation. Our technicians inform you of everything you need to know before the day of the work.' },
        { title: 'Professional installation', desc: 'The technical team carries out the insulation in just a few hours, cleanly and without construction work. The result is immediate: better comfort and lower consumption.' },
        { title: 'Total cost: €0', desc: 'You pay absolutely nothing. No materials, no labor, no fees. Everything is 100% funded by the CAE.' },
      ],

      s6Title: 'Concrete benefits of insulation',
      s6Benefits: [
        { title: 'Energy savings', desc: 'Reduce your heating bill by up to 30%. With good insulation, you need less energy to keep your home at a comfortable temperature.' },
        { title: 'Thermal comfort', desc: 'More stable temperature in all seasons. Less cold in winter and less heat in summer, without drafts or cold spots.' },
        { title: 'Home value', desc: 'Improves your property\'s energy rating, which increases its market value and makes it more attractive to buyers or tenants.' },
        { title: 'Environmental impact', desc: 'Less energy consumption means fewer CO₂ emissions. You actively contribute to the fight against climate change from your own home.' },
      ],

      ctaTitle: 'Ready to insulate your attic for free?',
      ctaDesc: 'Check your eligibility in less than 2 minutes and get professional insulation 100% funded by the CAE.',
      ctaButton: 'Check my eligibility',
    },
    schemaTitle: 'Complete guide: attic floor insulation with CAE',
    schemaDescription: 'Discover how to insulate your attic floor 100% free with Energy Savings Certificates. Techniques, costs and step-by-step process.',
  },
}

export default function AislamientoAticoGuiaCompletaPage() {
  const locale = useLocale() as Locale
  const t = content[locale]
  const s = t.sections

  return (
    <div className="overflow-hidden">
      <ArticleSchema
        title={t.schemaTitle}
        description={t.schemaDescription}
        slug="aislamiento-atico-guia-completa"
        datePublished="2026-02-05"
      />

      {/* Hero */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-verde-300 hover:text-verde-200 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-6">
              {t.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-verde-200">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {t.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {t.readTime}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Verdenomia
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900 mb-6">
                {s.s1Title}
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: s.s1P1 }} />
                <p>{s.s1P2}</p>
                <p dangerouslySetInnerHTML={{ __html: s.s1P3 }} />
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900 mb-6">
                {s.s2Title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{s.s2P1}</p>

              {/* Technique 1 */}
              <div className="bg-verde-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-verde-800 mb-3">{s.s2Technique1Title}</h3>
                <p className="text-gray-600 mb-4">{s.s2Technique1Desc}</p>
                <ul className="space-y-2">
                  {s.s2Technique1Pros.map((pro, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-verde-500 flex-shrink-0" />
                      <span className="text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technique 2 */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{s.s2Technique2Title}</h3>
                <p className="text-gray-600 mb-4">{s.s2Technique2Desc}</p>
                <ul className="space-y-2">
                  {s.s2Technique2Pros.map((pro, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s2P2 }} />
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900 mb-6">
                {s.s3Title}
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: s.s3P1 }} />
                <p dangerouslySetInnerHTML={{ __html: s.s3P2 }} />
              </div>
              <div className="mt-6 bg-verde-600 text-white rounded-2xl p-6 text-center">
                <p className="text-2xl font-bold">{s.s3Highlight}</p>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900 mb-6">
                {s.s4Title}
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-6">
                <p>{s.s4P1}</p>
                <p>{s.s4P2}</p>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 mb-6">
                <ol className="space-y-4">
                  {s.s4Steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-verde-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-verde-100 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s4P3 }} />
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900 mb-6">
                {s.s5Title}
              </h2>
              <div className="space-y-6">
                {s.s5Steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-verde-700">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-verde-800 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900 mb-6">
                {s.s6Title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {s.s6Benefits.map((benefit, i) => (
                  <div key={i} className="bg-verde-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-verde-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              {s.ctaTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {s.ctaDesc}
            </p>
            <Link
              href={`/${locale}#eligibilidad`}
              className="btn-primary text-lg px-8 py-4"
            >
              {s.ctaButton}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-verde-600 hover:text-verde-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToBlog}
          </Link>
        </div>
      </section>
    </div>
  )
}

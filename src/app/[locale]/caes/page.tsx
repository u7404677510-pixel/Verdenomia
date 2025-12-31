'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  FileCheck,
  Euro,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Building2,
  Home,
  Zap,
  Shield,
  Clock,
  Users,
  Phone,
  HelpCircle,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'

const content = {
  es: {
    badge: 'Programa oficial de eficiencia energética',
    title: '¿Qué son los',
    titleHighlight: 'Certificados de Ahorro Energético?',
    description: 'Los CAE son un mecanismo que permite financiar al 100% las obras de eficiencia energética en tu hogar, sin coste para ti.',
    cta: 'Comprobar mi elegibilidad',
    howTitle: '¿Cómo funcionan los CAE?',
    howP1: 'Los <strong>Certificados de Ahorro Energético (CAE)</strong> son un instrumento creado por el gobierno español para impulsar la eficiencia energética en edificios.',
    howP2: 'Las grandes empresas energéticas tienen la obligación legal de generar ahorros de energía. Para cumplir, financian obras de rehabilitación energética en viviendas particulares.',
    howP3: '<strong>¿El resultado?</strong> Tú obtienes un aislamiento de calidad profesional sin pagar nada. A cambio, cedes los certificados de ahorro generados a la empresa que financia la obra.',
    faqTitle: '¿Es realmente gratis?',
    faqDesc: 'Sí, 100% gratis. No hay costes ocultos, ni cuotas mensuales, ni compromisos futuros. Solo firmas la cesión de los CAE y nosotros nos encargamos del resto.',
    benefits: [
      { title: '100% financiado', desc: 'El coste de tu aislamiento está completamente cubierto por los CAE. Tú no pagas nada.' },
      { title: 'Transición ecológica', desc: 'Contribuyes a reducir las emisiones de CO2 y a cumplir los objetivos europeos de eficiencia.' },
      { title: 'Programa oficial', desc: 'Los CAE son un dispositivo legal y regulado por el gobierno español.' },
      { title: 'Proceso rápido', desc: 'De la verificación a la instalación, el proceso completo toma solo unos días.' },
    ],
    stats: [
      { value: '2,500+', label: 'Hogares aislados' },
      { value: '15M+', label: 'kWh ahorrados' },
      { value: '3,500+', label: 'Toneladas CO2 evitadas' },
      { value: '100%', label: 'Clientes satisfechos' },
    ],
    processTitle: '¿Cómo funciona el proceso?',
    processDesc: 'Un proceso simple y transparente, de principio a fin.',
    steps: [
      { number: '01', title: 'Verificación de elegibilidad', desc: 'Respondemos a unas preguntas sencillas para confirmar que tu vivienda cumple los requisitos del programa.' },
      { number: '02', title: 'Diagnóstico técnico', desc: 'Un técnico visita tu domicilio para evaluar la buhardilla y proponer la mejor solución de aislamiento.' },
      { number: '03', title: 'Firma del contrato CAE', desc: 'Firmas un contrato de cesión de los certificados de ahorro energético a Verdenomia.' },
      { number: '04', title: 'Instalación del aislamiento', desc: 'Nuestros técnicos realizan la instalación en pocas horas, sin obras ni molestias.' },
      { number: '05', title: 'Validación y certificación', desc: 'Documentamos el trabajo realizado y generamos los certificados de ahorro energético.' },
    ],
    eligTitle: '¿Quién puede beneficiarse?',
    eligDesc: 'Los criterios de elegibilidad son sencillos.',
    b2cTitle: 'Particulares (B2C)',
    b2cItems: ['Propietario u ocupante de la vivienda', 'Vivienda con buhardilla o ático', 'Suelo de buhardilla no aislado o mal aislado', 'Vivienda construida hace más de 2 años'],
    b2bTitle: 'Profesionales (B2B)',
    b2bItems: ['Empresas, hoteles, comercios, almacenes', 'Edificios con zonas no calefactadas', 'Iluminación antigua (reemplazo por LED)', 'Instalaciones de más de 2 años'],
    b2bLink: 'Ver soluciones B2B',
    ctaTitle: 'Aprovecha el programa CAE ahora',
    ctaDesc: 'Verifica tu elegibilidad en menos de 2 minutos y obtén un diagnóstico gratuito.',
    callNow: 'Llamar ahora',
  },
  fr: {
    badge: 'Programme officiel d\'efficacité énergétique',
    title: 'Qu\'est-ce que les',
    titleHighlight: 'Certificats d\'Économies d\'Énergie ?',
    description: 'Les CAE sont un mécanisme qui permet de financer à 100% les travaux d\'efficacité énergétique dans votre logement, sans frais pour vous.',
    cta: 'Vérifier mon éligibilité',
    howTitle: 'Comment fonctionnent les CAE ?',
    howP1: 'Les <strong>Certificats d\'Économies d\'Énergie (CAE)</strong> sont un instrument créé par le gouvernement espagnol pour promouvoir l\'efficacité énergétique dans les bâtiments.',
    howP2: 'Les grandes entreprises énergétiques ont l\'obligation légale de générer des économies d\'énergie. Pour y parvenir, elles financent des travaux de rénovation énergétique dans les logements particuliers.',
    howP3: '<strong>Le résultat ?</strong> Vous obtenez une isolation de qualité professionnelle sans rien payer. En échange, vous cédez les certificats d\'économie générés à l\'entreprise qui finance les travaux.',
    faqTitle: 'C\'est vraiment gratuit ?',
    faqDesc: 'Oui, 100% gratuit. Pas de frais cachés, pas de mensualités, pas d\'engagement futur. Vous signez simplement la cession des CAE et nous nous occupons du reste.',
    benefits: [
      { title: '100% financé', desc: 'Le coût de votre isolation est entièrement couvert par les CAE. Vous ne payez rien.' },
      { title: 'Transition écologique', desc: 'Vous contribuez à réduire les émissions de CO2 et à atteindre les objectifs européens d\'efficacité.' },
      { title: 'Programme officiel', desc: 'Les CAE sont un dispositif légal et réglementé par le gouvernement espagnol.' },
      { title: 'Processus rapide', desc: 'De la vérification à l\'installation, le processus complet ne prend que quelques jours.' },
    ],
    stats: [
      { value: '2,500+', label: 'Foyers isolés' },
      { value: '15M+', label: 'kWh économisés' },
      { value: '3,500+', label: 'Tonnes de CO2 évitées' },
      { value: '100%', label: 'Clients satisfaits' },
    ],
    processTitle: 'Comment se déroule le processus ?',
    processDesc: 'Un processus simple et transparent, du début à la fin.',
    steps: [
      { number: '01', title: 'Vérification d\'éligibilité', desc: 'Répondez à quelques questions simples pour confirmer que votre logement répond aux critères du programme.' },
      { number: '02', title: 'Diagnostic technique', desc: 'Un technicien visite votre domicile pour évaluer les combles et proposer la meilleure solution d\'isolation.' },
      { number: '03', title: 'Signature du contrat CAE', desc: 'Vous signez un contrat de cession des certificats d\'économie d\'énergie à Verdenomia.' },
      { number: '04', title: 'Installation de l\'isolation', desc: 'Nos techniciens réalisent l\'installation en quelques heures, sans travaux ni nuisances.' },
      { number: '05', title: 'Validation et certification', desc: 'Nous documentons le travail effectué et générons les certificats d\'économie d\'énergie.' },
    ],
    eligTitle: 'Qui peut en bénéficier ?',
    eligDesc: 'Les critères d\'éligibilité sont simples.',
    b2cTitle: 'Particuliers (B2C)',
    b2cItems: ['Propriétaire ou occupant du logement', 'Logement avec combles ou grenier', 'Sol des combles non isolé ou mal isolé', 'Logement construit il y a plus de 2 ans'],
    b2bTitle: 'Professionnels (B2B)',
    b2bItems: ['Entreprises, hôtels, commerces, entrepôts', 'Bâtiments avec zones non chauffées', 'Éclairage ancien (remplacement par LED)', 'Installations de plus de 2 ans'],
    b2bLink: 'Voir les solutions B2B',
    ctaTitle: 'Profitez du programme CAE maintenant',
    ctaDesc: 'Vérifiez votre éligibilité en moins de 2 minutes et obtenez un diagnostic gratuit.',
    callNow: 'Appeler maintenant',
  },
  en: {
    badge: 'Official energy efficiency program',
    title: 'What are',
    titleHighlight: 'Energy Savings Certificates?',
    description: 'CAE is a mechanism that allows 100% financing of energy efficiency improvements in your home, at no cost to you.',
    cta: 'Check my eligibility',
    howTitle: 'How do CAEs work?',
    howP1: '<strong>Energy Savings Certificates (CAE)</strong> are an instrument created by the Spanish government to promote energy efficiency in buildings.',
    howP2: 'Large energy companies have a legal obligation to generate energy savings. To comply, they finance energy renovation work in private homes.',
    howP3: '<strong>The result?</strong> You get professional-quality insulation without paying anything. In exchange, you transfer the savings certificates generated to the company financing the work.',
    faqTitle: 'Is it really free?',
    faqDesc: 'Yes, 100% free. No hidden costs, no monthly fees, no future commitments. You simply sign the CAE transfer and we take care of the rest.',
    benefits: [
      { title: '100% funded', desc: 'The cost of your insulation is completely covered by the CAE. You pay nothing.' },
      { title: 'Green transition', desc: 'You contribute to reducing CO2 emissions and meeting European efficiency targets.' },
      { title: 'Official program', desc: 'CAE is a legal and regulated scheme by the Spanish government.' },
      { title: 'Fast process', desc: 'From verification to installation, the entire process takes only a few days.' },
    ],
    stats: [
      { value: '2,500+', label: 'Homes insulated' },
      { value: '15M+', label: 'kWh saved' },
      { value: '3,500+', label: 'Tonnes of CO2 avoided' },
      { value: '100%', label: 'Satisfied customers' },
    ],
    processTitle: 'How does the process work?',
    processDesc: 'A simple and transparent process, from start to finish.',
    steps: [
      { number: '01', title: 'Eligibility verification', desc: 'Answer a few simple questions to confirm your home meets the program requirements.' },
      { number: '02', title: 'Technical diagnosis', desc: 'A technician visits your home to assess the attic and propose the best insulation solution.' },
      { number: '03', title: 'CAE contract signature', desc: 'You sign a contract transferring the energy savings certificates to Verdenomia.' },
      { number: '04', title: 'Insulation installation', desc: 'Our technicians complete the installation in just a few hours, without construction or disruption.' },
      { number: '05', title: 'Validation and certification', desc: 'We document the work performed and generate the energy savings certificates.' },
    ],
    eligTitle: 'Who can benefit?',
    eligDesc: 'The eligibility criteria are simple.',
    b2cTitle: 'Individuals (B2C)',
    b2cItems: ['Owner or occupant of the property', 'Property with attic or loft', 'Attic floor uninsulated or poorly insulated', 'Property built more than 2 years ago'],
    b2bTitle: 'Professionals (B2B)',
    b2bItems: ['Companies, hotels, shops, warehouses', 'Buildings with unheated areas', 'Old lighting (LED replacement)', 'Installations over 2 years old'],
    b2bLink: 'See B2B solutions',
    ctaTitle: 'Take advantage of the CAE program now',
    ctaDesc: 'Check your eligibility in less than 2 minutes and get a free diagnosis.',
    callNow: 'Call now',
  },
}

export default function CAEsPage() {
  const locale = useLocale() as Locale
  const t = content[locale]
  const statIcons = [Home, Zap, Leaf, Users]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-verde-900 via-verde-800 to-verde-900 overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-verde-100 text-sm mb-6">
              <FileCheck className="w-4 h-4" />
              {t.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              {t.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-verde-300 to-green-200">
                {t.titleHighlight}
              </span>
            </h1>

            <p className="text-xl text-verde-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t.description}
            </p>

            <Link
              href={`/${locale}#eligibilidad`}
              className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4"
            >
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-6">
                {t.howTitle}
              </h2>

              <div className="space-y-4 text-gray-600 text-lg">
                <p dangerouslySetInnerHTML={{ __html: t.howP1 }} />
                <p dangerouslySetInnerHTML={{ __html: t.howP2 }} />
                <p dangerouslySetInnerHTML={{ __html: t.howP3 }} />
              </div>

              <div className="mt-8 p-6 bg-verde-50 rounded-2xl border border-verde-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-verde-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-verde-800 mb-2">{t.faqTitle}</h3>
                    <p className="text-gray-600">{t.faqDesc}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-verde-100 to-verde-50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {t.benefits.map((benefit, index) => {
                    const icons = [Euro, Leaf, Shield, Clock]
                    const Icon = icons[index]
                    return (
                      <div key={benefit.title} className="bg-white rounded-2xl p-5 shadow-sm">
                        <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-verde-600" />
                        </div>
                        <h3 className="font-bold text-verde-800 mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-verde-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((stat, index) => {
              const Icon = statIcons[index]
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-verde-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-verde-200">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-verde-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              {t.processTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.processDesc}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {t.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-verde-500 to-verde-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-verde-500/30">
                  {step.number}
                </div>
                <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm">
                  <h3 className="text-xl font-bold text-verde-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href={`/${locale}#eligibilidad`} className="btn-primary text-lg px-8 py-4">
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-900 mb-4">
              {t.eligTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.eligDesc}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-verde-50 rounded-2xl p-8 border border-verde-100"
            >
              <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-verde-600" />
              </div>
              <h3 className="text-xl font-bold text-verde-800 mb-4">{t.b2cTitle}</h3>
              <ul className="space-y-3">
                {t.b2cItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-verde-50 rounded-2xl p-8 border border-verde-100"
            >
              <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-verde-600" />
              </div>
              <h3 className="text-xl font-bold text-verde-800 mb-4">{t.b2bTitle}</h3>
              <ul className="space-y-3">
                {t.b2bItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-verde-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/profesionales`}
                className="inline-flex items-center gap-2 mt-6 text-verde-600 font-semibold hover:text-verde-700 transition-colors"
              >
                {t.b2bLink}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-verde-800 to-verde-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-verde-100 mb-8 max-w-2xl mx-auto">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}#eligibilidad`}
                className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4"
              >
                {t.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+34919469528"
                className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                {t.callNow}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


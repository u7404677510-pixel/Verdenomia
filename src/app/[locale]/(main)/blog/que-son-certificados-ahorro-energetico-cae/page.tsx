'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  FileCheck,
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  Scale,
  Users,
  HelpCircle,
  CheckCircle2,
  Shield,
  Zap,
  Building2,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'
import { ArticleSchema } from '@/components/SchemaMarkup'

const content = {
  es: {
    backToBlog: 'Volver al blog',
    category: 'Eficiencia energética',
    title: '¿Qué son los Certificados de Ahorro Energético (CAE)?',
    date: '8 febrero 2026',
    readTime: '6 min de lectura',
    intro: 'Los Certificados de Ahorro Energético (CAE) son uno de los mecanismos más innovadores que existen en España para financiar obras de eficiencia energética en viviendas. Gracias a este programa, miles de hogares están consiguiendo aislamiento térmico de calidad profesional sin pagar ni un euro. En este artículo te explicamos todo lo que necesitas saber sobre los CAE: su origen, funcionamiento y cómo puedes aprovecharlos.',
    sections: [
      {
        id: 'origen',
        title: 'Origen de los CAE en España',
        content: `<p>El sistema de Certificados de Ahorro Energético tiene su origen en la <strong>Directiva Europea de Eficiencia Energética (2012/27/UE)</strong>, que establece la obligación de los estados miembros de implementar mecanismos que fomenten el ahorro de energía en el sector residencial e industrial.</p>
<p>En España, este marco se trasladó a la legislación nacional mediante el <strong>Real Decreto 36/2023</strong>, que creó el Sistema Nacional de Obligaciones de Eficiencia Energética. Este sistema obliga a las grandes comercializadoras de energía a demostrar anualmente que han contribuido al ahorro energético del país.</p>
<p>La idea es sencilla pero poderosa: las empresas que venden energía deben compensar parte de su impacto ambiental financiando mejoras en la eficiencia energética de los edificios. Y ahí es donde entran los CAE como instrumento de verificación y certificación de estos ahorros.</p>
<p>Desde su implementación, el programa ha permitido la rehabilitación energética de miles de viviendas en toda España, contribuyendo significativamente a los objetivos de descarbonización del país y a la reducción del consumo energético en el sector residencial.</p>`,
      },
      {
        id: 'funcionamiento',
        title: '¿Cómo funcionan los CAE?',
        content: `<p>El funcionamiento de los CAE se basa en un mecanismo de intercambio que beneficia a todas las partes involucradas. Las grandes <strong>empresas comercializadoras de energía</strong> tienen la obligación legal de generar un volumen determinado de ahorro energético cada año.</p>
<p>Para cumplir con esta obligación, estas empresas financian obras de rehabilitación energética en viviendas particulares. En el caso del aislamiento de buhardillas y áticos, el proceso es especialmente eficiente porque estas zonas son responsables de hasta un <strong>30% de las pérdidas de calor</strong> de una vivienda.</p>
<p>Cuando se realiza una obra de aislamiento, se genera un certificado que acredita el ahorro energético conseguido. Este certificado es el CAE propiamente dicho, y tiene un valor económico que permite financiar los materiales, la mano de obra y la gestión de todo el proyecto.</p>
<p>El propietario de la vivienda cede los certificados generados por su obra a la empresa que la ha financiado. A cambio, recibe el aislamiento de forma completamente gratuita. Es un intercambio justo: tú obtienes un hogar más eficiente y confortable, y la empresa cumple con sus obligaciones legales de ahorro energético.</p>
<p>Empresas como <strong>Verdenomia</strong> actúan como intermediarias especializadas, encargándose de toda la gestión: desde la verificación de elegibilidad hasta la instalación profesional y la tramitación de los certificados.</p>`,
      },
      {
        id: 'beneficiarios',
        title: '¿Quién puede beneficiarse?',
        content: `<p>El programa CAE está diseñado para ser accesible al mayor número posible de hogares españoles. Pueden beneficiarse tanto <strong>propietarios como inquilinos</strong> (con autorización del propietario), siempre que la vivienda cumpla ciertos requisitos técnicos básicos.</p>
<p>Los principales criterios de elegibilidad son:</p>
<ul>
<li><strong>Tipo de vivienda:</strong> viviendas unifamiliares, adosados o pisos con acceso a buhardilla o ático no habitado.</li>
<li><strong>Estado del aislamiento:</strong> el suelo de la buhardilla debe estar sin aislar o con un aislamiento insuficiente (menos de 100 mm de espesor).</li>
<li><strong>Antigüedad:</strong> la vivienda debe tener más de 2 años de antigüedad.</li>
<li><strong>Superficie:</strong> se requiere una superficie mínima de buhardilla para que la obra sea viable y genere suficientes certificados.</li>
</ul>
<p>No importa si la vivienda es tu residencia habitual o una segunda residencia. Tampoco hay restricciones por nivel de ingresos: el programa CAE no es una ayuda social, sino un mecanismo de mercado que beneficia a todos los propietarios cuya vivienda cumpla las condiciones técnicas.</p>
<p>El proceso de verificación es rápido y sencillo: en menos de 2 minutos puedes comprobar si tu vivienda es elegible a través de nuestro formulario online.</p>`,
      },
      {
        id: 'gratis',
        title: '¿Es realmente gratis?',
        content: `<p><strong>Sí, es 100% gratis.</strong> Esta es probablemente la pregunta más frecuente que recibimos, y la respuesta es inequívoca: el propietario no paga absolutamente nada por el aislamiento.</p>
<p>No hay costes ocultos, no hay cuotas mensuales, no hay permanencia ni compromisos futuros de ningún tipo. El único "intercambio" que se produce es la cesión de los certificados de ahorro energético que genera la obra en tu vivienda.</p>
<p>Estos certificados no tienen ningún valor para ti como particular: son documentos técnicos que solo pueden utilizar las empresas energéticas para cumplir con sus obligaciones legales. Tú los cedes y, a cambio, recibes una mejora real y tangible en tu hogar.</p>
<p>¿Por qué funciona económicamente? Porque el valor de los CAE en el mercado es suficiente para cubrir todos los costes de la obra: materiales de primera calidad, mano de obra especializada, desplazamiento, gestión administrativa y certificación técnica. Las empresas energéticas pagan un precio justo por cada certificado porque lo necesitan para cumplir la ley.</p>
<p>Es un modelo de economía circular donde todos ganan: tú mejoras tu hogar, la empresa energética cumple sus obligaciones, y el medio ambiente se beneficia de la reducción del consumo de energía.</p>`,
      },
      {
        id: 'diferencias',
        title: 'Diferencia entre CAE y subvenciones tradicionales',
        content: `<p>Es habitual confundir los CAE con las subvenciones públicas para rehabilitación energética, pero son mecanismos completamente diferentes. Conocer estas diferencias te ayudará a entender por qué los CAE son, en muchos casos, una opción más práctica y rápida.</p>
<p>Las <strong>subvenciones tradicionales</strong> requieren solicitar una ayuda pública, esperar la resolución (que puede tardar meses), adelantar el dinero de la obra y luego recibir un reembolso parcial. Además, los fondos son limitados y no siempre hay presupuesto disponible.</p>
<p>Los <strong>CAE</strong>, en cambio, funcionan de forma completamente diferente:</p>
<ul>
<li><strong>Sin esperas:</strong> no hay que esperar la aprobación de ninguna convocatoria pública. El proceso se inicia inmediatamente tras verificar la elegibilidad.</li>
<li><strong>Sin adelantar dinero:</strong> tú no pagas nada en ningún momento del proceso. No hay reembolsos porque no hay costes.</li>
<li><strong>Sin límite de presupuesto:</strong> los CAE no dependen de fondos públicos sino de la obligación legal de las empresas energéticas, por lo que el programa es continuo.</li>
<li><strong>Compatible:</strong> los CAE son compatibles con otras ayudas y subvenciones, por lo que puedes beneficiarte de ambos mecanismos si lo deseas.</li>
</ul>
<p>En resumen, mientras las subvenciones son un proceso burocrático largo y con resultados inciertos, los CAE ofrecen una solución inmediata, completa y sin riesgo financiero para el propietario.</p>`,
      },
      {
        id: 'elegibilidad',
        title: 'Cómo verificar tu elegibilidad',
        content: `<p>Comprobar si tu vivienda puede beneficiarse del programa CAE es muy sencillo y solo te llevará un par de minutos. En Verdenomia hemos diseñado un proceso de verificación rápido y transparente.</p>
<p>Solo necesitas responder a unas preguntas básicas sobre tu vivienda: tipo de propiedad, presencia de buhardilla o ático, estado actual del aislamiento y antigüedad del inmueble. No te pedimos ningún dato bancario ni compromiso de ningún tipo.</p>
<p>Si tu vivienda cumple los requisitos, un asesor se pondrá en contacto contigo en menos de 24 horas para programar una visita técnica gratuita. Durante esta visita, un profesional evaluará las condiciones específicas de tu buhardilla y te propondrá la solución de aislamiento más adecuada.</p>
<p>Después, solo queda firmar el contrato de cesión de los CAE y esperar a que nuestro equipo de instaladores profesionales realice el trabajo, normalmente en pocas horas y sin ninguna molestia. Es así de simple.</p>`,
      },
    ],
    ctaTitle: '¿Tu vivienda es elegible para el programa CAE?',
    ctaDesc: 'Comprueba tu elegibilidad en menos de 2 minutos y consigue el aislamiento de tu buhardilla 100% gratis.',
    ctaButton: 'Verificar mi elegibilidad',
  },
  en: {
    backToBlog: 'Back to blog',
    category: 'Energy efficiency',
    title: 'What are Energy Savings Certificates (CAE)?',
    date: 'February 8, 2026',
    readTime: '6 min read',
    intro: 'Energy Savings Certificates (CAE) are one of the most innovative mechanisms in Spain for financing energy efficiency improvements in homes. Thanks to this program, thousands of households are getting professional-quality thermal insulation without paying a single euro. In this article, we explain everything you need to know about CAEs: their origin, how they work, and how you can take advantage of them.',
    sections: [
      {
        id: 'origin',
        title: 'Origin of CAEs in Spain',
        content: `<p>The Energy Savings Certificate system originates from the <strong>European Energy Efficiency Directive (2012/27/EU)</strong>, which requires member states to implement mechanisms that promote energy savings in the residential and industrial sectors.</p>
<p>In Spain, this framework was transposed into national legislation through <strong>Royal Decree 36/2023</strong>, which created the National Energy Efficiency Obligation System. This system requires large energy retailers to demonstrate annually that they have contributed to the country's energy savings.</p>
<p>The idea is simple but powerful: companies that sell energy must offset part of their environmental impact by funding improvements in building energy efficiency. And that's where CAEs come in as an instrument for verifying and certifying these savings.</p>
<p>Since its implementation, the program has enabled the energy renovation of thousands of homes across Spain, significantly contributing to the country's decarbonization goals and reducing energy consumption in the residential sector.</p>`,
      },
      {
        id: 'how-it-works',
        title: 'How do CAEs work?',
        content: `<p>CAEs work through an exchange mechanism that benefits all parties involved. Large <strong>energy retailers</strong> have a legal obligation to generate a specific volume of energy savings each year.</p>
<p>To meet this obligation, these companies fund energy renovation work in private homes. In the case of attic and loft insulation, the process is especially efficient because these areas are responsible for up to <strong>30% of a home's heat loss</strong>.</p>
<p>When insulation work is carried out, a certificate is generated that accredits the energy savings achieved. This certificate is the CAE itself, and it has an economic value that covers the materials, labour, and management of the entire project.</p>
<p>The homeowner transfers the certificates generated by their renovation to the company that funded it. In return, they receive the insulation completely free of charge. It's a fair exchange: you get a more efficient and comfortable home, and the company meets its legal energy savings obligations.</p>
<p>Companies like <strong>Verdenomia</strong> act as specialized intermediaries, handling all the management: from eligibility verification to professional installation and certificate processing.</p>`,
      },
      {
        id: 'beneficiaries',
        title: 'Who can benefit?',
        content: `<p>The CAE program is designed to be accessible to as many Spanish households as possible. Both <strong>homeowners and tenants</strong> (with the owner's authorization) can benefit, as long as the property meets certain basic technical requirements.</p>
<p>The main eligibility criteria are:</p>
<ul>
<li><strong>Property type:</strong> detached houses, semi-detached houses, or flats with access to an uninhabited attic or loft.</li>
<li><strong>Insulation status:</strong> the attic floor must be uninsulated or insufficiently insulated (less than 100mm thickness).</li>
<li><strong>Age:</strong> the property must be more than 2 years old.</li>
<li><strong>Surface area:</strong> a minimum attic surface area is required for the work to be viable and generate sufficient certificates.</li>
</ul>
<p>It doesn't matter if the property is your primary residence or a second home. There are no income restrictions either: the CAE program is not a social aid but a market mechanism that benefits all homeowners whose property meets the technical conditions.</p>
<p>The verification process is quick and simple: in less than 2 minutes you can check if your property is eligible through our online form.</p>`,
      },
      {
        id: 'free',
        title: 'Is it really free?',
        content: `<p><strong>Yes, it's 100% free.</strong> This is probably the most frequently asked question we receive, and the answer is unequivocal: the homeowner pays absolutely nothing for the insulation.</p>
<p>There are no hidden costs, no monthly fees, no lock-in period, and no future commitments of any kind. The only "exchange" that takes place is the transfer of the energy savings certificates generated by the work on your property.</p>
<p>These certificates have no value to you as an individual: they are technical documents that can only be used by energy companies to meet their legal obligations. You transfer them and, in return, receive a real and tangible improvement to your home.</p>
<p>Why does it work economically? Because the market value of CAEs is sufficient to cover all project costs: premium materials, specialized labour, travel, administrative management, and technical certification. Energy companies pay a fair price for each certificate because they need them to comply with the law.</p>
<p>It's a circular economy model where everyone wins: you improve your home, the energy company meets its obligations, and the environment benefits from reduced energy consumption.</p>`,
      },
      {
        id: 'differences',
        title: 'Difference between CAEs and traditional subsidies',
        content: `<p>It's common to confuse CAEs with public subsidies for energy renovation, but they are completely different mechanisms. Understanding these differences will help you see why CAEs are, in many cases, a more practical and faster option.</p>
<p><strong>Traditional subsidies</strong> require applying for public aid, waiting for approval (which can take months), advancing the money for the work, and then receiving a partial reimbursement. Moreover, funds are limited and budget is not always available.</p>
<p><strong>CAEs</strong>, on the other hand, work completely differently:</p>
<ul>
<li><strong>No waiting:</strong> there's no need to wait for any public call for applications to be approved. The process starts immediately after verifying eligibility.</li>
<li><strong>No upfront payment:</strong> you don't pay anything at any point in the process. There are no reimbursements because there are no costs.</li>
<li><strong>No budget limit:</strong> CAEs don't depend on public funds but on the legal obligation of energy companies, so the program is continuous.</li>
<li><strong>Compatible:</strong> CAEs are compatible with other grants and subsidies, so you can benefit from both mechanisms if you wish.</li>
</ul>
<p>In summary, while subsidies are a lengthy bureaucratic process with uncertain results, CAEs offer an immediate, complete, and financially risk-free solution for the homeowner.</p>`,
      },
      {
        id: 'eligibility',
        title: 'How to verify your eligibility',
        content: `<p>Checking whether your property can benefit from the CAE program is very simple and will only take a couple of minutes. At Verdenomia, we've designed a quick and transparent verification process.</p>
<p>You just need to answer a few basic questions about your property: type of ownership, presence of an attic or loft, current insulation status, and age of the building. We don't ask for any bank details or commitment of any kind.</p>
<p>If your property meets the requirements, an advisor will contact you within 24 hours to schedule a free technical visit. During this visit, a professional will assess the specific conditions of your attic and propose the most suitable insulation solution.</p>
<p>After that, all you need to do is sign the CAE transfer contract and wait for our team of professional installers to complete the work, usually in just a few hours with no disruption. It's that simple.</p>`,
      },
    ],
    ctaTitle: 'Is your property eligible for the CAE program?',
    ctaDesc: 'Check your eligibility in less than 2 minutes and get your attic insulation 100% free.',
    ctaButton: 'Check my eligibility',
  },
}

export default function QuesonCAEPage() {
  const locale = useLocale() as Locale
  const t = content[locale]

  const sectionIcons = [Scale, Zap, Users, HelpCircle, Shield, CheckCircle2]

  return (
    <div className="overflow-hidden">
      <ArticleSchema
        title="¿Qué son los Certificados de Ahorro Energético (CAE)?"
        description="Descubre qué son los Certificados de Ahorro Energético (CAE), cómo funcionan, quién puede beneficiarse y cómo conseguir aislamiento gratis para tu hogar."
        slug="que-son-certificados-ahorro-energetico-cae"
        datePublished="2026-02-08"
      />

      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-verde-900/50 to-gray-900" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-verde-300 hover:text-verde-200 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-verde-500/20 backdrop-blur-sm rounded-full text-verde-300 text-sm">
                <Tag className="w-3.5 h-3.5" />
                {t.category}
              </span>
              <span className="inline-flex items-center gap-2 text-verde-200/70 text-sm">
                <Calendar className="w-3.5 h-3.5" />
                {t.date}
              </span>
              <span className="inline-flex items-center gap-2 text-verde-200/70 text-sm">
                <Clock className="w-3.5 h-3.5" />
                {t.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-6">
              {t.title}
            </h1>

            <p className="text-lg text-verde-100/80 leading-relaxed max-w-3xl">
              {t.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {t.sections.map((section, index) => {
              const Icon = sectionIcons[index]
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-verde-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-verde-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900">
                      {section.title}
                    </h2>
                  </div>
                  <div
                    className="prose prose-lg prose-verde max-w-none text-gray-600 leading-relaxed [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&_strong]:text-verde-800"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-verde-900 to-verde-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileCheck className="w-8 h-8 text-verde-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-verde-100 mb-8 max-w-2xl mx-auto">
              {t.ctaDesc}
            </p>
            <Link
              href={`/${locale}#eligibilidad`}
              className="btn-primary bg-white text-verde-800 hover:bg-verde-50 text-lg px-8 py-4"
            >
              {t.ctaButton}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

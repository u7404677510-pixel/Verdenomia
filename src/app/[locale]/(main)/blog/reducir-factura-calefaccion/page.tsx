'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  TrendingDown,
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  Flame,
  Thermometer,
  Home,
  Wrench,
  Users,
  Gift,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'
import { ArticleSchema } from '@/components/SchemaMarkup'

const content = {
  es: {
    backToBlog: 'Volver al blog',
    category: 'Calefacción',
    title: 'Cómo reducir tu factura de calefacción hasta un 30%',
    date: '15 febrero 2026',
    readTime: '6 min de lectura',
    intro: 'La factura de calefacción se ha convertido en una de las mayores preocupaciones de los hogares españoles. Con la subida de los precios de la energía, muchas familias buscan desesperadamente formas de reducir este gasto sin pasar frío. La buena noticia es que existe una medida que puede recortar tu factura hasta un 30%, y además puede ser completamente gratuita. Te contamos cómo.',
    sections: [
      {
        id: 'por-que-sube',
        title: '¿Por qué sube tanto la factura de calefacción?',
        content: `<p>La factura de calefacción ha experimentado subidas drásticas en los últimos años. Los <strong>precios del gas natural se han incrementado más de un 40%</strong> desde 2020, y la electricidad no se queda atrás. Pero el precio de la energía es solo una parte del problema.</p>
<p>La otra gran causa es el <strong>estado deficiente del parque de viviendas español</strong>. Más del 80% de los edificios residenciales en España fueron construidos antes de que existieran normativas exigentes de eficiencia energética. Esto significa que la mayoría de nuestras viviendas tienen un aislamiento térmico inadecuado o directamente inexistente.</p>
<p>El resultado es un círculo vicioso: las viviendas pierden calor rápidamente, la calefacción tiene que trabajar más para mantener una temperatura confortable, y la factura sube mes a mes. En una vivienda mal aislada, <strong>encender la calefacción es como intentar llenar una bañera con el tapón quitado</strong>.</p>
<p>Según datos del IDAE (Instituto para la Diversificación y Ahorro de la Energía), un hogar español medio gasta entre <strong>900€ y 1.500€ al año en calefacción</strong>. Pero con las medidas adecuadas, este gasto puede reducirse significativamente.</p>`,
      },
      {
        id: 'impacto-aislamiento',
        title: 'El impacto del aislamiento en tu factura',
        content: `<p>El aislamiento térmico es la medida con <strong>mayor impacto directo en la factura de calefacción</strong>. Los datos técnicos son claros: una vivienda correctamente aislada puede reducir su consumo de calefacción entre un 25% y un 35%.</p>
<p>¿Por qué tiene tanto impacto? Porque el aislamiento actúa sobre la raíz del problema: las pérdidas de calor. En una vivienda tipo, las pérdidas se distribuyen aproximadamente así:</p>
<ul>
<li><strong>Techo y cubierta:</strong> 25-30% de las pérdidas de calor</li>
<li><strong>Paredes:</strong> 20-25% de las pérdidas</li>
<li><strong>Ventanas y puertas:</strong> 15-20% de las pérdidas</li>
<li><strong>Suelo:</strong> 7-10% de las pérdidas</li>
<li><strong>Ventilación y renovación de aire:</strong> 20-25% de las pérdidas</li>
</ul>
<p>Como puedes ver, el techo es la zona con <strong>mayores pérdidas térmicas</strong>. Esto se debe a un principio físico básico: el aire caliente sube. Si tu buhardilla no está aislada, el calor generado por tu calefacción asciende y se escapa directamente al exterior.</p>
<p>Un buen aislamiento crea una barrera térmica que mantiene el calor dentro de tu vivienda durante más tiempo. Tu calefacción necesita funcionar menos horas y a menor potencia para mantener la misma temperatura, lo que se traduce directamente en un <strong>ahorro de entre 250€ y 450€ anuales</strong> en una vivienda típica.</p>`,
      },
      {
        id: 'aislamiento-atico',
        title: 'Aislamiento del ático: la medida más eficaz',
        content: `<p>De todas las medidas de eficiencia energética disponibles, el <strong>aislamiento del suelo de la buhardilla</strong> es la que ofrece el mejor ratio coste-beneficio. Y con el programa CAE, el ratio es inmejorable porque el coste para ti es cero.</p>
<p>La técnica más habitual es el <strong>aislamiento soplado con lana mineral</strong>. Se proyecta una capa uniforme de lana mineral de alta densidad sobre el suelo de la buhardilla no habitada, creando un manto aislante continuo que elimina los puentes térmicos.</p>
<p>Las ventajas de esta técnica son múltiples:</p>
<ul>
<li><strong>Instalación rápida:</strong> entre 2 y 4 horas para una vivienda estándar</li>
<li><strong>Sin obras:</strong> no se necesitan reformas ni modificaciones estructurales</li>
<li><strong>Eficacia inmediata:</strong> empiezas a notar la diferencia desde el primer día</li>
<li><strong>Durabilidad:</strong> la lana mineral mantiene sus propiedades durante más de 25 años</li>
<li><strong>Seguridad:</strong> material incombustible y sin emisiones nocivas</li>
</ul>
<p>Además, el aislamiento no solo actúa en invierno. En verano, la misma barrera térmica impide que el calor exterior penetre en tu vivienda, reduciendo también la necesidad de aire acondicionado. Es una mejora para todo el año.</p>`,
      },
      {
        id: 'medidas-complementarias',
        title: 'Otras medidas complementarias',
        content: `<p>Aunque el aislamiento del ático es la medida estrella, combinarlo con otros buenos hábitos puede maximizar el ahorro en tu factura de calefacción.</p>
<p><strong>Termostato programable:</strong> ajusta la temperatura automáticamente según las horas del día. Reducir 1°C la temperatura de tu hogar puede suponer un ahorro del <strong>7% en calefacción</strong>. Programa 20°C durante el día y 16-17°C por la noche.</p>
<p><strong>Mantenimiento de la caldera:</strong> una revisión anual asegura que tu caldera funciona al máximo rendimiento. Una caldera mal mantenida puede consumir hasta un 15% más de energía.</p>
<p><strong>Purga de radiadores:</strong> al inicio de cada temporada de calefacción, purga todos los radiadores para eliminar el aire acumulado. Un radiador con aire rinde hasta un 50% menos que uno correctamente purgado.</p>
<p><strong>Hábitos de ventilación:</strong> ventila de forma intensiva (10-15 minutos con ventanas abiertas de par en par) en lugar de dejar las ventanas entreabiertas durante horas. Así renuevas el aire sin enfriar las paredes.</p>
<p><strong>Uso inteligente de persianas y cortinas:</strong> en invierno, sube las persianas durante las horas de sol para aprovechar el calor solar gratuito y bájalas al anochecer para reducir las pérdidas por las ventanas.</p>`,
      },
      {
        id: 'caso-real',
        title: 'Caso real: ahorro después del aislamiento',
        content: `<p>Para ilustrar el impacto real del aislamiento, veamos el caso de la <strong>familia Martínez</strong>, de una vivienda unifamiliar en la provincia de Alicante.</p>
<p><strong>Antes del aislamiento:</strong></p>
<ul>
<li>Vivienda unifamiliar de 120 m² con buhardilla de 85 m²</li>
<li>Buhardilla sin aislar, suelo de hormigón desnudo</li>
<li>Calefacción de gas natural con radiadores</li>
<li>Factura media de calefacción: <strong>135€/mes</strong> en invierno (noviembre a marzo)</li>
<li>Sensación de frío constante, especialmente en las habitaciones del piso superior</li>
</ul>
<p><strong>Después del aislamiento:</strong></p>
<ul>
<li>Aislamiento soplado de lana mineral (200 mm de espesor) en toda la buhardilla</li>
<li>Instalación realizada en 3 horas, sin molestias</li>
<li>Factura media de calefacción: <strong>92€/mes</strong> en invierno</li>
<li>Ahorro mensual: <strong>43€/mes</strong> (un 32% de reducción)</li>
<li>Ahorro anual estimado: <strong>215€</strong> (solo en los 5 meses de calefacción)</li>
</ul>
<p>Además del ahorro económico, la familia destaca la <strong>mejora notable en el confort</strong>: las habitaciones superiores mantienen una temperatura más estable, han eliminado las corrientes de aire frío y la calefacción se enciende con menos frecuencia. "Es como vivir en otra casa", nos comentaron.</p>
<p>Y todo esto sin haber pagado ni un céntimo, gracias al programa CAE.</p>`,
      },
      {
        id: 'aislamiento-gratis',
        title: 'Cómo conseguir el aislamiento gratis con CAE',
        content: `<p>Si estás cansado de pagar facturas de calefacción desorbitadas, el programa de <strong>Certificados de Ahorro Energético (CAE)</strong> es tu mejor aliado. Este programa permite financiar al 100% el aislamiento de tu buhardilla, sin coste alguno para ti.</p>
<p>El proceso con Verdenomia es muy sencillo:</p>
<ul>
<li><strong>Paso 1:</strong> Verifica tu elegibilidad en menos de 2 minutos a través de nuestro formulario online. Solo necesitas responder a unas preguntas básicas sobre tu vivienda.</li>
<li><strong>Paso 2:</strong> Si cumples los requisitos, un asesor te contactará en 24 horas para programar una visita técnica gratuita.</li>
<li><strong>Paso 3:</strong> Un técnico evalúa tu buhardilla y te propone la solución de aislamiento más adecuada.</li>
<li><strong>Paso 4:</strong> Firmas el contrato de cesión de los CAE (cedes los certificados de ahorro energético, que no tienen ningún valor para ti como particular).</li>
<li><strong>Paso 5:</strong> Nuestros instaladores profesionales realizan el trabajo en pocas horas. Sin obras, sin molestias, sin coste.</li>
</ul>
<p>A partir del día siguiente, empiezas a disfrutar de un hogar más cálido en invierno, más fresco en verano, y con unas facturas de calefacción significativamente más bajas. No hay letras pequeñas, no hay costes ocultos: es un programa oficial respaldado por la legislación española.</p>
<p><strong>No esperes más.</strong> Cada día sin aislamiento es energía y dinero que se escapa por tu techo. Comprueba ahora si tu vivienda es elegible.</p>`,
      },
    ],
    ctaTitle: 'Reduce tu factura de calefacción desde hoy',
    ctaDesc: 'Consigue el aislamiento de tu buhardilla 100% gratis con el programa CAE y empieza a ahorrar hasta un 30% en calefacción.',
    ctaButton: 'Verificar mi elegibilidad',
  },
  en: {
    backToBlog: 'Back to blog',
    category: 'Heating',
    title: 'How to reduce your heating bill by up to 30%',
    date: 'February 15, 2026',
    readTime: '6 min read',
    intro: 'The heating bill has become one of the biggest concerns for Spanish households. With rising energy prices, many families are desperately looking for ways to reduce this expense without going cold. The good news is that there is a measure that can cut your bill by up to 30%, and it can even be completely free. Here\'s how.',
    sections: [
      {
        id: 'why-rising',
        title: 'Why is the heating bill rising so much?',
        content: `<p>Heating bills have experienced dramatic increases in recent years. <strong>Natural gas prices have risen by more than 40%</strong> since 2020, and electricity is not far behind. But the price of energy is only part of the problem.</p>
<p>The other major cause is the <strong>poor condition of Spain's housing stock</strong>. More than 80% of residential buildings in Spain were built before stringent energy efficiency regulations existed. This means that most of our homes have inadequate or non-existent thermal insulation.</p>
<p>The result is a vicious circle: homes lose heat quickly, heating has to work harder to maintain a comfortable temperature, and the bill rises month by month. In a poorly insulated home, <strong>turning on the heating is like trying to fill a bathtub with the plug removed</strong>.</p>
<p>According to data from IDAE (Institute for Energy Diversification and Saving), an average Spanish home spends between <strong>€900 and €1,500 per year on heating</strong>. But with the right measures, this expense can be significantly reduced.</p>`,
      },
      {
        id: 'insulation-impact',
        title: 'The impact of insulation on your bill',
        content: `<p>Thermal insulation is the measure with the <strong>greatest direct impact on the heating bill</strong>. The technical data is clear: a properly insulated home can reduce its heating consumption by between 25% and 35%.</p>
<p>Why does it have such an impact? Because insulation addresses the root of the problem: heat loss. In a typical home, losses are distributed approximately as follows:</p>
<ul>
<li><strong>Roof and ceiling:</strong> 25-30% of heat loss</li>
<li><strong>Walls:</strong> 20-25% of losses</li>
<li><strong>Windows and doors:</strong> 15-20% of losses</li>
<li><strong>Floor:</strong> 7-10% of losses</li>
<li><strong>Ventilation and air renewal:</strong> 20-25% of losses</li>
</ul>
<p>As you can see, the roof is the area with the <strong>greatest thermal losses</strong>. This is due to a basic physical principle: hot air rises. If your attic is not insulated, the heat generated by your heating rises and escapes directly outside.</p>
<p>Good insulation creates a thermal barrier that keeps heat inside your home for longer. Your heating needs to run fewer hours and at lower power to maintain the same temperature, which translates directly into <strong>savings of between €250 and €450 per year</strong> in a typical home.</p>`,
      },
      {
        id: 'attic-insulation',
        title: 'Attic insulation: the most effective measure',
        content: `<p>Of all available energy efficiency measures, <strong>attic floor insulation</strong> offers the best cost-benefit ratio. And with the CAE program, the ratio is unbeatable because the cost to you is zero.</p>
<p>The most common technique is <strong>blown mineral wool insulation</strong>. A uniform layer of high-density mineral wool is projected onto the floor of the uninhabited attic, creating a continuous insulating blanket that eliminates thermal bridges.</p>
<p>The advantages of this technique are multiple:</p>
<ul>
<li><strong>Quick installation:</strong> between 2 and 4 hours for a standard home</li>
<li><strong>No construction:</strong> no renovations or structural modifications needed</li>
<li><strong>Immediate effectiveness:</strong> you notice the difference from day one</li>
<li><strong>Durability:</strong> mineral wool maintains its properties for over 25 years</li>
<li><strong>Safety:</strong> non-combustible material with no harmful emissions</li>
</ul>
<p>Furthermore, insulation doesn't only work in winter. In summer, the same thermal barrier prevents outside heat from penetrating your home, also reducing the need for air conditioning. It's a year-round improvement.</p>`,
      },
      {
        id: 'complementary',
        title: 'Other complementary measures',
        content: `<p>Although attic insulation is the star measure, combining it with other good habits can maximize savings on your heating bill.</p>
<p><strong>Programmable thermostat:</strong> automatically adjusts temperature according to the time of day. Reducing your home temperature by 1°C can save <strong>7% on heating</strong>. Program 20°C during the day and 16-17°C at night.</p>
<p><strong>Boiler maintenance:</strong> an annual service ensures your boiler operates at maximum efficiency. A poorly maintained boiler can consume up to 15% more energy.</p>
<p><strong>Radiator bleeding:</strong> at the start of each heating season, bleed all radiators to remove accumulated air. A radiator with air performs up to 50% less than one properly bled.</p>
<p><strong>Ventilation habits:</strong> ventilate intensively (10-15 minutes with windows wide open) rather than leaving windows ajar for hours. This renews the air without cooling the walls.</p>
<p><strong>Smart use of blinds and curtains:</strong> in winter, raise blinds during sunny hours to take advantage of free solar heat and lower them at dusk to reduce window losses.</p>`,
      },
      {
        id: 'real-case',
        title: 'Real case: savings after insulation',
        content: `<p>To illustrate the real impact of insulation, let's look at the case of the <strong>Martínez family</strong>, from a detached house in the province of Alicante.</p>
<p><strong>Before insulation:</strong></p>
<ul>
<li>120 m² detached house with an 85 m² attic</li>
<li>Uninsulated attic, bare concrete floor</li>
<li>Natural gas central heating with radiators</li>
<li>Average heating bill: <strong>€135/month</strong> in winter (November to March)</li>
<li>Constant feeling of cold, especially in the upper floor rooms</li>
</ul>
<p><strong>After insulation:</strong></p>
<ul>
<li>Blown mineral wool insulation (200mm thickness) across the entire attic</li>
<li>Installation completed in 3 hours with no disruption</li>
<li>Average heating bill: <strong>€92/month</strong> in winter</li>
<li>Monthly savings: <strong>€43/month</strong> (a 32% reduction)</li>
<li>Estimated annual savings: <strong>€215</strong> (for the 5 heating months only)</li>
</ul>
<p>Beyond the financial savings, the family highlights the <strong>notable improvement in comfort</strong>: upper rooms maintain a more stable temperature, cold draughts have been eliminated, and the heating turns on less frequently. "It's like living in a different house," they told us.</p>
<p>And all of this without paying a single penny, thanks to the CAE program.</p>`,
      },
      {
        id: 'free-insulation',
        title: 'How to get free insulation with CAE',
        content: `<p>If you're tired of paying exorbitant heating bills, the <strong>Energy Savings Certificates (CAE)</strong> program is your best ally. This program allows 100% financing of your attic insulation, at no cost to you.</p>
<p>The process with Verdenomia is very simple:</p>
<ul>
<li><strong>Step 1:</strong> Verify your eligibility in less than 2 minutes through our online form. You just need to answer a few basic questions about your property.</li>
<li><strong>Step 2:</strong> If you meet the requirements, an advisor will contact you within 24 hours to schedule a free technical visit.</li>
<li><strong>Step 3:</strong> A technician assesses your attic and proposes the most suitable insulation solution.</li>
<li><strong>Step 4:</strong> You sign the CAE transfer contract (you transfer the energy savings certificates, which have no value to you as an individual).</li>
<li><strong>Step 5:</strong> Our professional installers carry out the work in just a few hours. No construction, no disruption, no cost.</li>
</ul>
<p>From the next day, you start enjoying a warmer home in winter, cooler in summer, and significantly lower heating bills. There's no fine print, no hidden costs: it's an official program backed by Spanish legislation.</p>
<p><strong>Don't wait any longer.</strong> Every day without insulation is energy and money escaping through your roof. Check now if your property is eligible.</p>`,
      },
    ],
    ctaTitle: 'Reduce your heating bill from today',
    ctaDesc: 'Get your attic insulation 100% free with the CAE program and start saving up to 30% on heating.',
    ctaButton: 'Check my eligibility',
  },
}

export default function ReducirFacturaPage() {
  const locale = useLocale() as Locale
  const t = content[locale]

  const sectionIcons = [Flame, Thermometer, Home, Wrench, Users, Gift]

  return (
    <div className="overflow-hidden">
      <ArticleSchema
        title="Cómo reducir tu factura de calefacción hasta un 30%"
        description="Aprende cómo reducir tu factura de calefacción hasta un 30% con aislamiento térmico, hábitos eficientes y el programa CAE de aislamiento gratis."
        slug="reducir-factura-calefaccion"
        datePublished="2026-02-15"
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
              <TrendingDown className="w-8 h-8 text-verde-300" />
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

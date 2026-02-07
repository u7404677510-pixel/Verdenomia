'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  Home,
  Thermometer,
  Wind,
  Fan,
  Lamp,
  Refrigerator,
  Award,
} from 'lucide-react'
import { type Locale } from '@/i18n/config'
import { ArticleSchema } from '@/components/SchemaMarkup'

const content = {
  es: {
    backToBlog: 'Volver al blog',
    category: 'Ahorro energético',
    title: '7 consejos para mejorar la eficiencia energética de tu hogar',
    date: '12 febrero 2026',
    readTime: '7 min de lectura',
    intro: 'Mejorar la eficiencia energética de tu hogar no solo reduce tu factura mensual, sino que también contribuye a un planeta más sostenible. En España, los hogares son responsables de casi el 20% del consumo energético total, y gran parte de esa energía se pierde por una deficiente aislación, equipos obsoletos o malos hábitos de consumo. Aquí te presentamos 7 consejos prácticos que puedes aplicar desde hoy para transformar tu vivienda en un hogar más eficiente.',
    tips: [
      {
        id: 'aislamiento-atico',
        number: '01',
        title: 'Aísla tu buhardilla o ático',
        content: `<p>El aislamiento del ático es, sin duda, la medida más eficaz para mejorar la eficiencia energética de una vivienda. Los datos son contundentes: <strong>hasta un 30% del calor de tu hogar se escapa por el techo</strong> cuando la buhardilla no está correctamente aislada.</p>
<p>Esto significa que, en invierno, estás calentando la calle, y en verano, el calor exterior penetra directamente en tus estancias. El resultado: un sistema de calefacción y aire acondicionado que trabaja en exceso y facturas que no paran de subir.</p>
<p>El aislamiento del suelo de la buhardilla con lana mineral de alta densidad crea una barrera térmica efectiva que mantiene la temperatura estable en el interior. Además, gracias al programa de <strong>Certificados de Ahorro Energético (CAE)</strong>, esta obra puede realizarse de forma <strong>completamente gratuita</strong> en viviendas que cumplan los requisitos de elegibilidad.</p>
<p>La instalación se completa en pocas horas, sin obras mayores ni molestias. Es la inversión (gratuita) con mayor retorno en eficiencia energética que puedes hacer en tu hogar.</p>`,
      },
      {
        id: 'calefaccion',
        number: '02',
        title: 'Optimiza tu sistema de calefacción',
        content: `<p>El sistema de calefacción es el mayor consumidor de energía en la mayoría de hogares españoles, representando entre el <strong>40% y el 60% de la factura energética</strong>. Optimizarlo es fundamental para reducir el consumo sin sacrificar confort.</p>
<p>Instalar un <strong>termostato programable</strong> es el primer paso. Permite ajustar la temperatura según las horas del día: reducirla durante la noche o cuando no estás en casa puede suponer un ahorro del 10-15% en calefacción. La temperatura ideal es de 20-21°C durante el día y 15-17°C por la noche.</p>
<p>El mantenimiento regular es igualmente importante. Una caldera revisada anualmente funciona de forma más eficiente y segura. Purgar los radiadores al inicio de cada temporada de calefacción elimina las bolsas de aire que reducen su rendimiento. Y no olvides cerrar los radiadores de las habitaciones que no uses.</p>`,
      },
      {
        id: 'ventanas',
        number: '03',
        title: 'Mejora el aislamiento de ventanas',
        content: `<p>Las ventanas son uno de los puntos más vulnerables de la envolvente térmica de una vivienda. Una ventana con <strong>cristal simple</strong> pierde hasta 5 veces más calor que una pared bien aislada.</p>
<p>Si tienes ventanas antiguas con cristal simple, sustituirlas por <strong>doble acristalamiento con rotura de puente térmico</strong> puede reducir las pérdidas de calor por las ventanas hasta un 50%. Es una inversión significativa pero con un retorno claro en confort y ahorro.</p>
<p>Si no puedes cambiar las ventanas, existen medidas más económicas: colocar <strong>burletes adhesivos</strong> en los marcos para sellar las infiltraciones de aire, instalar láminas de control solar en los cristales, o utilizar cortinas térmicas gruesas durante la noche. Estas medidas sencillas pueden reducir las pérdidas un 10-20%.</p>`,
      },
      {
        id: 'ventilacion',
        number: '04',
        title: 'Controla la ventilación',
        content: `<p>Ventilar es necesario para mantener una buena calidad del aire interior, pero hacerlo incorrectamente puede suponer un <strong>derroche enorme de energía</strong>. El error más común es dejar las ventanas abiertas durante largos periodos en invierno, enfriando toda la masa térmica de la vivienda.</p>
<p>La recomendación es ventilar de forma <strong>intensiva y breve</strong>: abre todas las ventanas de par en par durante 10-15 minutos al día, preferiblemente a primera hora de la mañana. Este método renueva completamente el aire interior sin enfriar las paredes ni los muebles.</p>
<p>Evita dejar las ventanas en modo oscilante durante horas, ya que se produce una renovación de aire muy lenta pero continua que enfría progresivamente la vivienda. Y en verano, ventila por la noche cuando la temperatura exterior baja y cierra durante las horas de más calor.</p>
<p>Si tu vivienda tiene problemas de humedad o ventilación insuficiente, considera instalar un <strong>sistema de ventilación mecánica controlada (VMC)</strong> que renueva el aire de forma eficiente y recupera parte del calor.</p>`,
      },
      {
        id: 'led',
        number: '05',
        title: 'Usa iluminación LED',
        content: `<p>Sustituir toda la iluminación de tu hogar por <strong>bombillas LED</strong> es una de las medidas más sencillas y rentables que puedes tomar. Las bombillas LED consumen hasta un <strong>80% menos de energía</strong> que las incandescentes tradicionales y un 50% menos que las fluorescentes compactas.</p>
<p>Además de su eficiencia, las LED tienen una vida útil extraordinaria: duran entre <strong>15.000 y 50.000 horas</strong>, frente a las 1.000 horas de una bombilla incandescente. Esto significa que, además de ahorrar en electricidad, ahorras en la compra de bombillas de repuesto.</p>
<p>Para maximizar el ahorro, elige la potencia adecuada para cada estancia (no ilumines el baño como un quirófano), aprovecha al máximo la luz natural durante el día y considera instalar sensores de movimiento en pasillos y zonas de paso. Cada pequeño gesto cuenta.</p>`,
      },
      {
        id: 'electrodomesticos',
        number: '06',
        title: 'Electrodomésticos eficientes',
        content: `<p>Los electrodomésticos representan aproximadamente un <strong>25% del consumo eléctrico</strong> de un hogar. Cuando llegue el momento de renovarlos, elegir modelos con la mejor <strong>etiqueta energética</strong> marcará una diferencia significativa en tu factura.</p>
<p>La diferencia entre un electrodoméstico de clase A y uno de clase D o E puede suponer un <strong>ahorro del 50-60% en consumo eléctrico</strong> a lo largo de su vida útil. Los más importantes son los que funcionan continuamente (frigorífico, congelador) o los que se usan con frecuencia (lavadora, lavavajillas).</p>
<p>Mientras tanto, puedes optimizar el uso de tus electrodomésticos actuales: usa la lavadora y el lavavajillas siempre a carga completa, elige programas eco cuando sea posible, descongela el frigorífico regularmente y no precalientes el horno más tiempo del necesario. Pequeños cambios de hábitos que suman un ahorro considerable.</p>`,
      },
      {
        id: 'ayudas',
        number: '07',
        title: 'Aprovecha las ayudas disponibles',
        content: `<p>Muchos propietarios desconocen que existen <strong>programas que financian al 100%</strong> las obras de eficiencia energética en viviendas. El más destacado es el programa de <strong>Certificados de Ahorro Energético (CAE)</strong>, que permite obtener el aislamiento de tu buhardilla de forma completamente gratuita.</p>
<p>A diferencia de las subvenciones tradicionales, los CAE no requieren esperar convocatorias ni adelantar dinero. El proceso es inmediato: verificas tu elegibilidad, un técnico evalúa tu vivienda y, si cumples los requisitos, la instalación se realiza en pocos días sin coste alguno.</p>
<p>En <strong>Verdenomia</strong> somos especialistas en gestionar todo el proceso de los CAE para el aislamiento de suelos de buhardilla. Nos encargamos de la verificación, la planificación, la instalación profesional y la tramitación administrativa. Tú solo firmas y disfrutas de un hogar más eficiente y confortable.</p>
<p>No dejes pasar esta oportunidad: cada día sin aislamiento es energía (y dinero) que se escapa por tu techo.</p>`,
      },
    ],
    ctaTitle: 'Empieza por lo más importante: aísla tu ático',
    ctaDesc: 'El aislamiento de tu buhardilla es la medida con mayor impacto en tu eficiencia energética. Y con el programa CAE, es completamente gratis.',
    ctaButton: 'Verificar mi elegibilidad',
  },
  en: {
    backToBlog: 'Back to blog',
    category: 'Energy savings',
    title: '7 tips to improve your home\'s energy efficiency',
    date: 'February 12, 2026',
    readTime: '7 min read',
    intro: 'Improving your home\'s energy efficiency not only reduces your monthly bills but also contributes to a more sustainable planet. In Spain, households account for nearly 20% of total energy consumption, and a large part of that energy is lost through poor insulation, outdated equipment, or bad consumption habits. Here are 7 practical tips you can start applying today to transform your home into a more efficient one.',
    tips: [
      {
        id: 'attic-insulation',
        number: '01',
        title: 'Insulate your attic or loft',
        content: `<p>Attic insulation is undoubtedly the most effective measure for improving a home's energy efficiency. The data is compelling: <strong>up to 30% of your home's heat escapes through the roof</strong> when the attic is not properly insulated.</p>
<p>This means that in winter you're heating the street, and in summer, outside heat penetrates directly into your living spaces. The result: an overworked heating and air conditioning system and ever-rising bills.</p>
<p>Insulating the attic floor with high-density mineral wool creates an effective thermal barrier that keeps the indoor temperature stable. Furthermore, thanks to the <strong>Energy Savings Certificates (CAE)</strong> program, this work can be done <strong>completely free</strong> for homes that meet the eligibility requirements.</p>
<p>Installation is completed in just a few hours, with no major construction or disruption. It's the (free) investment with the highest return in energy efficiency you can make in your home.</p>`,
      },
      {
        id: 'heating',
        number: '02',
        title: 'Optimize your heating system',
        content: `<p>The heating system is the largest energy consumer in most Spanish homes, accounting for <strong>40% to 60% of the energy bill</strong>. Optimizing it is essential to reduce consumption without sacrificing comfort.</p>
<p>Installing a <strong>programmable thermostat</strong> is the first step. It allows you to adjust the temperature according to the time of day: reducing it at night or when you're not home can save 10-15% on heating. The ideal temperature is 20-21°C during the day and 15-17°C at night.</p>
<p>Regular maintenance is equally important. An annually serviced boiler operates more efficiently and safely. Bleeding radiators at the start of each heating season removes air pockets that reduce their performance. And don't forget to turn off radiators in rooms you're not using.</p>`,
      },
      {
        id: 'windows',
        number: '03',
        title: 'Improve window insulation',
        content: `<p>Windows are one of the most vulnerable points in a home's thermal envelope. A window with <strong>single glazing</strong> loses up to 5 times more heat than a well-insulated wall.</p>
<p>If you have old single-glazed windows, replacing them with <strong>double glazing with thermal break</strong> can reduce heat loss through windows by up to 50%. It's a significant investment but with a clear return in comfort and savings.</p>
<p>If you can't change the windows, there are more affordable measures: fitting <strong>adhesive draught strips</strong> to the frames to seal air infiltrations, installing solar control films on the glass, or using thick thermal curtains at night. These simple measures can reduce losses by 10-20%.</p>`,
      },
      {
        id: 'ventilation',
        number: '04',
        title: 'Control ventilation',
        content: `<p>Ventilation is necessary to maintain good indoor air quality, but doing it incorrectly can result in <strong>enormous energy waste</strong>. The most common mistake is leaving windows open for long periods in winter, cooling down the entire thermal mass of the home.</p>
<p>The recommendation is to ventilate <strong>intensively and briefly</strong>: open all windows wide for 10-15 minutes a day, preferably first thing in the morning. This method completely renews the indoor air without cooling the walls or furniture.</p>
<p>Avoid leaving windows in tilt mode for hours, as this produces very slow but continuous air renewal that progressively cools the home. In summer, ventilate at night when the outside temperature drops and close up during the hottest hours.</p>
<p>If your home has humidity problems or insufficient ventilation, consider installing a <strong>mechanical ventilation with heat recovery (MVHR)</strong> system that renews air efficiently while recovering some of the heat.</p>`,
      },
      {
        id: 'led',
        number: '05',
        title: 'Use LED lighting',
        content: `<p>Replacing all lighting in your home with <strong>LED bulbs</strong> is one of the simplest and most cost-effective measures you can take. LED bulbs consume up to <strong>80% less energy</strong> than traditional incandescent bulbs and 50% less than compact fluorescents.</p>
<p>In addition to their efficiency, LEDs have an extraordinary lifespan: they last between <strong>15,000 and 50,000 hours</strong>, compared to 1,000 hours for an incandescent bulb. This means that, besides saving on electricity, you save on replacement bulbs.</p>
<p>To maximize savings, choose the right wattage for each room (don't light your bathroom like an operating theatre), make the most of natural light during the day, and consider installing motion sensors in hallways and transit areas. Every small action counts.</p>`,
      },
      {
        id: 'appliances',
        number: '06',
        title: 'Efficient appliances',
        content: `<p>Appliances account for approximately <strong>25% of a household's electricity consumption</strong>. When the time comes to replace them, choosing models with the best <strong>energy label</strong> will make a significant difference to your bill.</p>
<p>The difference between a class A appliance and a class D or E can mean <strong>50-60% savings in electricity consumption</strong> over its lifetime. The most important are those that run continuously (fridge, freezer) or are used frequently (washing machine, dishwasher).</p>
<p>In the meantime, you can optimize the use of your current appliances: always run the washing machine and dishwasher at full load, choose eco programs when possible, defrost the fridge regularly, and don't preheat the oven longer than necessary. Small habit changes that add up to considerable savings.</p>`,
      },
      {
        id: 'grants',
        number: '07',
        title: 'Take advantage of available grants',
        content: `<p>Many homeowners are unaware that <strong>programs exist that 100% fund</strong> energy efficiency improvements in homes. The most notable is the <strong>Energy Savings Certificates (CAE)</strong> program, which allows you to get your attic insulated completely free of charge.</p>
<p>Unlike traditional subsidies, CAEs don't require waiting for calls for applications or advancing money. The process is immediate: you verify your eligibility, a technician assesses your home, and if you meet the requirements, installation is carried out within days at no cost.</p>
<p>At <strong>Verdenomia</strong>, we specialize in managing the entire CAE process for attic floor insulation. We handle verification, planning, professional installation, and administrative processing. You just sign and enjoy a more efficient and comfortable home.</p>
<p>Don't miss this opportunity: every day without insulation is energy (and money) escaping through your roof.</p>`,
      },
    ],
    ctaTitle: 'Start with what matters most: insulate your attic',
    ctaDesc: 'Attic insulation is the measure with the greatest impact on your energy efficiency. And with the CAE program, it\'s completely free.',
    ctaButton: 'Check my eligibility',
  },
}

export default function AhorroEnergeticoPage() {
  const locale = useLocale() as Locale
  const t = content[locale]

  const tipIcons = [Home, Thermometer, Wind, Fan, Lamp, Refrigerator, Award]

  return (
    <div className="overflow-hidden">
      <ArticleSchema
        title="7 consejos para mejorar la eficiencia energética de tu hogar"
        description="Descubre 7 consejos prácticos para mejorar el ahorro energético de tu hogar: aislamiento, calefacción, ventanas, LED y más."
        slug="ahorro-energetico-hogar-consejos"
        datePublished="2026-02-12"
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

      {/* Article Body - 7 Tips */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {t.tips.map((tip, index) => {
              const Icon = tipIcons[index]
              return (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-14"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-verde-500 to-verde-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-verde-500/20">
                      {tip.number}
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <Icon className="w-5 h-5 text-verde-600 flex-shrink-0" />
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-verde-900">
                        {tip.title}
                      </h2>
                    </div>
                  </div>
                  <div className="ml-16">
                    <div
                      className="prose prose-lg prose-verde max-w-none text-gray-600 leading-relaxed [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&_strong]:text-verde-800"
                      dangerouslySetInnerHTML={{ __html: tip.content }}
                    />
                  </div>
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
              <Lightbulb className="w-8 h-8 text-verde-300" />
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

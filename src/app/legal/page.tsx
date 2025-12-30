import Link from 'next/link'
import { FileText } from 'lucide-react'

export default function LegalPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-verde-600" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-verde-900">
                  Aviso Legal
                </h1>
                <p className="text-gray-500">Última actualización: Diciembre 2024</p>
              </div>
            </div>

            <div className="prose prose-verde max-w-none">
              <h2>1. Datos identificativos</h2>
              <p>
                En cumplimiento del deber de información recogido en el artículo 10 de la
                Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
                y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
              </p>
              <ul>
                <li><strong>Denominación social:</strong> Verdenomia S.L.</li>
                <li><strong>CIF:</strong> B-XXXXXXXX</li>
                <li><strong>Domicilio social:</strong> Calle Principal, 123, 03001 Alicante</li>
                <li><strong>Teléfono:</strong> +34 919 46 95 28</li>
                <li><strong>Email:</strong> info@verdenomia.es</li>
                <li><strong>Inscrita en:</strong> Registro Mercantil de Alicante</li>
              </ul>

              <h2>2. Objeto</h2>
              <p>
                Verdenomia S.L. es una empresa especializada en servicios de aislamiento
                térmico de edificios, aprovechando los Certificados de Ahorro Energético (CAE)
                para ofrecer soluciones de eficiencia energética a particulares y empresas.
              </p>

              <h2>3. Condiciones de uso</h2>
              <p>
                El acceso a este sitio web es gratuito y no requiere suscripción previa.
                El usuario se compromete a hacer un uso adecuado del sitio web y de sus
                contenidos, respetando la legislación vigente.
              </p>

              <h2>4. Propiedad intelectual</h2>
              <p>
                Todos los contenidos de este sitio web, incluyendo textos, fotografías,
                gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico
                y códigos fuente, constituyen una obra cuya propiedad pertenece a Verdenomia S.L.
              </p>
              <p>
                Queda prohibida la reproducción, transformación, distribución, comunicación
                pública, puesta a disposición del público y, en general, cualquier otra
                forma de explotación de todo o parte de los contenidos de esta página web
                sin autorización expresa y por escrito de Verdenomia S.L.
              </p>

              <h2>5. Exclusión de responsabilidad</h2>
              <p>
                Verdenomia S.L. no se hace responsable de los daños y perjuicios que puedan
                derivarse de:
              </p>
              <ul>
                <li>Interrupciones o fallos en el funcionamiento del sitio web</li>
                <li>Virus o programas maliciosos en los contenidos</li>
                <li>Uso inadecuado o ilícito del sitio web</li>
                <li>Falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos</li>
              </ul>

              <h2>6. Enlaces externos</h2>
              <p>
                Este sitio web puede contener enlaces a páginas web de terceros. Verdenomia S.L.
                no asume ninguna responsabilidad sobre el contenido, funcionamiento o disponibilidad
                de dichas páginas externas.
              </p>

              <h2>7. Legislación aplicable</h2>
              <p>
                Las presentes condiciones se rigen por la legislación española. Para la
                resolución de cualquier controversia, las partes se someten a los Juzgados
                y Tribunales de Alicante.
              </p>

              <h2>8. Modificaciones</h2>
              <p>
                Verdenomia S.L. se reserva el derecho a modificar el presente Aviso Legal
                para adaptarlo a novedades legislativas, criterios jurisprudenciales o
                prácticas del sector.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 flex gap-4">
              <Link href="/" className="text-verde-600 hover:text-verde-700 font-medium">
                ← Volver al inicio
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/privacidad" className="text-verde-600 hover:text-verde-700 font-medium">
                Política de Privacidad
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/cookies" className="text-verde-600 hover:text-verde-700 font-medium">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


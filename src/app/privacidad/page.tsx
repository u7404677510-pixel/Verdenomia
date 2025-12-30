import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function PrivacidadPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-verde-600" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-verde-900">
                  Política de Privacidad
                </h1>
                <p className="text-gray-500">Última actualización: Diciembre 2024</p>
              </div>
            </div>

            <div className="prose prose-verde max-w-none">
              <h2>1. Responsable del tratamiento</h2>
              <p>
                <strong>Verdenomia S.L.</strong><br />
                CIF: B-XXXXXXXX<br />
                Calle Principal, 123<br />
                03001 Alicante, España<br />
                Email: <a href="mailto:privacidad@verdenomia.es">privacidad@verdenomia.es</a>
              </p>

              <h2>2. Finalidad del tratamiento</h2>
              <p>En Verdenomia tratamos sus datos personales con las siguientes finalidades:</p>
              <ul>
                <li>Gestionar su solicitud de información o presupuesto</li>
                <li>Evaluar su elegibilidad al programa CAE</li>
                <li>Gestionar la prestación del servicio de aislamiento</li>
                <li>Enviar comunicaciones comerciales, si ha dado su consentimiento</li>
                <li>Cumplir con las obligaciones legales aplicables</li>
              </ul>

              <h2>3. Base legal del tratamiento</h2>
              <ul>
                <li><strong>Ejecución de un contrato:</strong> para gestionar la prestación del servicio</li>
                <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales</li>
                <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios</li>
                <li><strong>Obligación legal:</strong> para cumplir con la normativa aplicable</li>
              </ul>

              <h2>4. Destinatarios de los datos</h2>
              <p>Sus datos podrán ser comunicados a:</p>
              <ul>
                <li>Administraciones públicas para la gestión de los CAE</li>
                <li>Empresas del grupo para la prestación del servicio</li>
                <li>Proveedores de servicios tecnológicos (hosting, email, etc.)</li>
              </ul>

              <h2>5. Conservación de los datos</h2>
              <p>
                Conservaremos sus datos durante el tiempo necesario para cumplir con la finalidad
                para la que fueron recogidos y para determinar las posibles responsabilidades
                derivadas de dicha finalidad.
              </p>

              <h2>6. Derechos del interesado</h2>
              <p>Tiene derecho a:</p>
              <ul>
                <li>Acceder a sus datos personales</li>
                <li>Rectificar los datos inexactos</li>
                <li>Solicitar la supresión de sus datos</li>
                <li>Solicitar la limitación del tratamiento</li>
                <li>Oponerse al tratamiento</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>
              <p>
                Para ejercer estos derechos, puede contactar con nosotros en{' '}
                <a href="mailto:privacidad@verdenomia.es">privacidad@verdenomia.es</a>.
              </p>

              <h2>7. Reclamaciones</h2>
              <p>
                Si considera que el tratamiento de sus datos no se ajusta a la normativa vigente,
                puede presentar una reclamación ante la Agencia Española de Protección de Datos
                (www.aepd.es).
              </p>

              <h2>8. Modificaciones</h2>
              <p>
                Nos reservamos el derecho a modificar esta política de privacidad para adaptarla
                a novedades legislativas o jurisprudenciales.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link href="/" className="text-verde-600 hover:text-verde-700 font-medium">
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


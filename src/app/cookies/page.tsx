import Link from 'next/link'
import { Cookie } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-verde-100 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-verde-600" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-verde-900">
                  Política de Cookies
                </h1>
                <p className="text-gray-500">Última actualización: Diciembre 2024</p>
              </div>
            </div>

            <div className="prose prose-verde max-w-none">
              <h2>1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en su
                dispositivo cuando los visita. Se utilizan ampliamente para hacer que los
                sitios web funcionen de manera más eficiente, así como para proporcionar
                información a los propietarios del sitio.
              </p>

              <h2>2. Tipos de cookies que utilizamos</h2>
              
              <h3>Cookies técnicas (necesarias)</h3>
              <p>
                Son esenciales para que el sitio web funcione correctamente. No pueden ser
                desactivadas.
              </p>
              <ul>
                <li><strong>Sesión:</strong> mantienen la sesión del usuario activa</li>
                <li><strong>Preferencias:</strong> recuerdan sus preferencias de idioma</li>
              </ul>

              <h3>Cookies analíticas</h3>
              <p>
                Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web,
                recopilando información de forma anónima.
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> análisis del tráfico web</li>
              </ul>

              <h3>Cookies de marketing</h3>
              <p>
                Se utilizan para mostrar anuncios relevantes según sus intereses.
                Requieren su consentimiento previo.
              </p>

              <h2>3. Gestión de cookies</h2>
              <p>
                Puede gestionar sus preferencias de cookies en cualquier momento a través
                de la configuración de su navegador:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>

              <h2>4. Cookies de terceros</h2>
              <p>
                Algunos servicios de terceros pueden instalar cookies en su dispositivo:
              </p>
              <ul>
                <li>Google Analytics (análisis)</li>
                <li>Google Fonts (tipografías)</li>
              </ul>

              <h2>5. Actualizaciones</h2>
              <p>
                Esta política de cookies puede ser actualizada periódicamente. Le recomendamos
                revisarla con regularidad.
              </p>

              <h2>6. Más información</h2>
              <p>
                Para más información sobre cómo tratamos sus datos, consulte nuestra{' '}
                <Link href="/privacidad" className="text-verde-600 hover:underline">
                  Política de Privacidad
                </Link>.
              </p>
              <p>
                Si tiene alguna pregunta, puede contactarnos en{' '}
                <a href="mailto:privacidad@verdenomia.es">privacidad@verdenomia.es</a>.
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


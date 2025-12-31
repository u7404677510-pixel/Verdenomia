import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { type, data } = body

    let subject = ''
    let htmlContent = ''

    if (type === 'eligibility') {
      // Wizard eligibility form
      subject = `🏠 Nueva solicitud de elegibilidad - ${data.nombre} ${data.apellido}`
      htmlContent = `
        <h2>Nueva solicitud de verificación de elegibilidad</h2>
        <hr/>
        <h3>Datos del solicitante:</h3>
        <ul>
          <li><strong>Nombre:</strong> ${data.nombre} ${data.apellido}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Teléfono:</strong> ${data.telefono}</li>
          <li><strong>Código Postal:</strong> ${data.codigoPostal}</li>
        </ul>
        <h3>Respuestas del cuestionario:</h3>
        <ul>
          <li><strong>¿Propietario o inquilino?:</strong> ${data.answers?.q1 || 'No especificado'}</li>
          <li><strong>Tipo de vivienda:</strong> ${data.answers?.q2 || 'No especificado'}</li>
        </ul>
        <hr/>
        <p><em>Enviado desde el formulario de elegibilidad de verdenomia.es</em></p>
      `
    } else if (type === 'contact') {
      // General contact form
      subject = `📧 Nuevo mensaje de contacto - ${data.nombre} ${data.apellido}`
      htmlContent = `
        <h2>Nuevo mensaje de contacto</h2>
        <hr/>
        <h3>Datos del remitente:</h3>
        <ul>
          <li><strong>Nombre:</strong> ${data.nombre} ${data.apellido}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Teléfono:</strong> ${data.telefono}</li>
        </ul>
        <h3>Asunto:</h3>
        <p>${data.asunto || 'Sin asunto'}</p>
        <h3>Mensaje:</h3>
        <p>${data.mensaje}</p>
        <hr/>
        <p><em>Enviado desde el formulario de contacto de verdenomia.es</em></p>
      `
    } else if (type === 'professional') {
      // B2B professional contact form
      subject = `🏢 Nueva solicitud B2B - ${data.empresa}`
      htmlContent = `
        <h2>Nueva solicitud de profesional/empresa</h2>
        <hr/>
        <h3>Datos de la empresa:</h3>
        <ul>
          <li><strong>Empresa:</strong> ${data.empresa}</li>
          <li><strong>Sector:</strong> ${data.sector}</li>
          <li><strong>Contacto:</strong> ${data.nombre}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Teléfono:</strong> ${data.telefono}</li>
        </ul>
        <h3>Mensaje:</h3>
        <p>${data.mensaje || 'Sin mensaje adicional'}</p>
        <hr/>
        <p><em>Enviado desde el formulario B2B de verdenomia.es</em></p>
      `
    } else {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: 'Verdenomia <noreply@verdenomia.es>',
      to: ['contacto@verdenomia.es'],
      subject: subject,
      html: htmlContent,
      replyTo: data.email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Error sending email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


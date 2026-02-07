import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'contacto@verdenomia.es'
const WEBHOOK_URL = process.env.WEBHOOK_URL

function getResend() {
  if (!process.env.RESEND_API_KEY) return null
  return new Resend(process.env.RESEND_API_KEY)
}

interface LeadData {
  source: 'homepage' | 'contact' | 'landing_page'
  nombre: string
  apellido: string
  email: string
  telefono: string
  codigoPostal?: string
  asunto?: string
  mensaje?: string
  answers?: {
    q1?: string
    q2?: string
    q3?: string
    q4?: string
  }
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  locale?: string
}

function validateLead(data: unknown): data is LeadData {
  if (!data || typeof data !== 'object') return false
  const d = data as Record<string, unknown>
  return (
    typeof d.nombre === 'string' &&
    d.nombre.length > 0 &&
    typeof d.email === 'string' &&
    d.email.includes('@') &&
    typeof d.telefono === 'string' &&
    d.telefono.length > 0
  )
}

function sourceLabel(source: string): string {
  switch (source) {
    case 'homepage': return 'Homepage - Wizard eligibilidad'
    case 'landing_page': return 'Landing Page Meta Ads'
    case 'contact': return 'Pagina de contacto'
    default: return source
  }
}

function buildEmailHtml(data: LeadData): string {
  const utmInfo = [
    data.utm_source && `Source: ${data.utm_source}`,
    data.utm_medium && `Medium: ${data.utm_medium}`,
    data.utm_campaign && `Campaign: ${data.utm_campaign}`,
    data.utm_content && `Content: ${data.utm_content}`,
    data.utm_term && `Term: ${data.utm_term}`,
  ].filter(Boolean).join(' | ')

  const answersHtml = data.answers
    ? `
      <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Propietario/Inquilino</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.answers.q1 || '-'}</td></tr>
      <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Tiene buhardilla</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.answers.q2 || '-'}</td></tr>
      <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Aislamiento actual</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.answers.q3 || '-'}</td></tr>
      <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Calefaccion</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.answers.q4 || '-'}</td></tr>
    `
    : ''

  return `
    <!DOCTYPE html>
    <html>
    <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background-color:#f9fafb;margin:0;padding:20px;">
      <div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <div style="background:#065f46;padding:24px 32px;">
          <h1 style="color:white;margin:0;font-size:20px;">Nuevo lead - Verdenomia</h1>
          <p style="color:#a7f3d0;margin:8px 0 0;font-size:14px;">${sourceLabel(data.source)}</p>
        </div>
        <div style="padding:24px 32px;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Nombre</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.nombre} ${data.apellido || ''}</td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Telefono</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;"><a href="tel:${data.telefono}">${data.telefono}</a></td></tr>
            ${data.codigoPostal ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Codigo Postal</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.codigoPostal}</td></tr>` : ''}
            ${data.asunto ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Asunto</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.asunto}</td></tr>` : ''}
            ${answersHtml}
          </table>
          ${data.mensaje ? `<div style="background:#f3f4f6;padding:16px;border-radius:8px;margin-bottom:20px;"><p style="margin:0 0 4px;color:#6b7280;font-size:12px;text-transform:uppercase;">Mensaje</p><p style="margin:0;color:#1f2937;">${data.mensaje}</p></div>` : ''}
          ${utmInfo ? `<div style="background:#eff6ff;padding:12px 16px;border-radius:8px;font-size:12px;color:#1e40af;"><strong>UTM:</strong> ${utmInfo}</div>` : ''}
          <p style="color:#9ca3af;font-size:12px;margin-top:16px;">Locale: ${data.locale || 'es'} | ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    if (!validateLead(data)) {
      return NextResponse.json(
        { error: 'Datos del formulario invalidos' },
        { status: 400 }
      )
    }

    const leadData = data as LeadData

    // 1. Send notification email via Resend
    const resend = getResend()
    if (resend) {
      try {
        await resend.emails.send({
          from: 'Verdenomia Leads <leads@verdenomia.es>',
          to: [NOTIFICATION_EMAIL],
          subject: `Nuevo lead: ${leadData.nombre} ${leadData.apellido || ''} — ${sourceLabel(leadData.source)}`,
          html: buildEmailHtml(leadData),
        })
      } catch (emailError) {
        console.error('Error sending email via Resend:', emailError)
        // Don't fail the request if email fails
      }
    }

    // 2. Send to external webhook if configured
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...leadData,
            timestamp: new Date().toISOString(),
            sourceLabel: sourceLabel(leadData.source),
          }),
        })
      } catch (webhookError) {
        console.error('Error sending to webhook:', webhookError)
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

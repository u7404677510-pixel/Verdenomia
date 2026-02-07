// Tracking utility functions for Meta Pixel and Google Ads

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

// --- Meta Pixel Events ---

export function trackMetaPageView() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

export function trackMetaLead(data?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', data)
  }
}

export function trackMetaContact(data?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', data)
  }
}

export function trackMetaInitiateCheckout() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout')
  }
}

// --- Google Ads Events ---

export function trackGoogleConversion(label?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    const gadsId = process.env.NEXT_PUBLIC_GADS_ID
    const convLabel = label || process.env.NEXT_PUBLIC_GADS_LABEL
    if (gadsId && convLabel) {
      window.gtag('event', 'conversion', {
        send_to: `${gadsId}/${convLabel}`,
      })
    }
  }
}

export function trackGoogleEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

// --- Combined tracking functions ---

/** Track form submission (wizard or contact form) */
export function trackLead(data?: Record<string, string>) {
  trackMetaLead(data)
  trackWizardComplete(data?.source)
  trackGoogleEvent('generate_lead', {
    event_category: 'form',
    event_label: data?.source || 'unknown',
  })
}

/** Track beginning of the eligibility wizard (Q1 answered) */
export function trackWizardStart() {
  trackMetaInitiateCheckout()
  trackGoogleEvent('wizard_start', {
    event_category: 'wizard',
    event_label: 'step_1',
  })
}

/** Track each intermediate wizard step (Q2, Q3, Q4, form) for funnel analysis */
export function trackWizardStep(step: string) {
  trackGoogleEvent(`wizard_step_${step}`, {
    event_category: 'wizard',
    event_label: step,
  })
}

/** Track wizard form completion -- this is the main Google Ads conversion */
export function trackWizardComplete(source?: string) {
  // Fire the Google Ads conversion with the specific label
  trackGoogleConversion()
  // Also fire a custom event for GA4 reporting
  trackGoogleEvent('wizard_complete', {
    event_category: 'wizard',
    event_label: source || 'unknown',
  })
}

/** Track phone click */
export function trackPhoneClick() {
  trackMetaContact({ contact_type: 'phone' })
  trackGoogleEvent('conversion', {
    send_to: process.env.NEXT_PUBLIC_GADS_ID
      ? `${process.env.NEXT_PUBLIC_GADS_ID}/${process.env.NEXT_PUBLIC_GADS_LABEL_PHONE || process.env.NEXT_PUBLIC_GADS_LABEL}`
      : undefined,
    event_category: 'contact',
    event_label: 'phone_click',
  })
}

/** Track WhatsApp click */
export function trackWhatsApp() {
  trackMetaContact({ contact_type: 'whatsapp' })
  trackGoogleEvent('conversion', {
    send_to: process.env.NEXT_PUBLIC_GADS_ID
      ? `${process.env.NEXT_PUBLIC_GADS_ID}/${process.env.NEXT_PUBLIC_GADS_LABEL_WA || process.env.NEXT_PUBLIC_GADS_LABEL}`
      : undefined,
    event_category: 'contact',
    event_label: 'whatsapp_click',
  })
}

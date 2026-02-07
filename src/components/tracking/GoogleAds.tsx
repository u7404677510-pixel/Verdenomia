'use client'

import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID

export default function GoogleAds() {
  // Use GA_ID or GADS_ID as the primary tag
  const primaryId = GA_ID || GADS_ID
  if (!primaryId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${GA_ID ? `gtag('config', '${GA_ID}');` : ''}
            ${GADS_ID ? `gtag('config', '${GADS_ID}');` : ''}
          `,
        }}
      />
    </>
  )
}

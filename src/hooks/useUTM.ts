'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

const UTM_KEYS: (keyof UTMParams)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
]

const STORAGE_KEY = 'verdenomia_utm'

function getStoredUTM(): UTMParams {
  if (typeof window === 'undefined') return {}
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

function storeUTM(params: UTMParams): void {
  if (typeof window === 'undefined') return
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params))
  } catch {
    // sessionStorage not available
  }
}

export function useUTM(): UTMParams {
  const searchParams = useSearchParams()
  const [utmParams, setUtmParams] = useState<UTMParams>(getStoredUTM)

  useEffect(() => {
    const urlUTM: UTMParams = {}
    let hasNew = false

    for (const key of UTM_KEYS) {
      const value = searchParams.get(key)
      if (value) {
        urlUTM[key] = value
        hasNew = true
      }
    }

    if (hasNew) {
      // URL params override stored ones
      const merged = { ...getStoredUTM(), ...urlUTM }
      storeUTM(merged)
      setUtmParams(merged)
    } else {
      // Use stored params if no new ones in URL
      const stored = getStoredUTM()
      if (Object.keys(stored).length > 0) {
        setUtmParams(stored)
      }
    }
  }, [searchParams])

  return utmParams
}

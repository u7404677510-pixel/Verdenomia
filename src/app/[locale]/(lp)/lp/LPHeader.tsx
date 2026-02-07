'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { trackPhoneClick } from '@/lib/tracking'

export default function LPHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Verdenomia"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-display font-bold text-verde-800 hidden sm:block">
              Verdenomia
            </span>
          </Link>
          <a
            href="tel:+34919947360"
            onClick={() => trackPhoneClick()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-verde-600 text-white rounded-full font-medium text-sm hover:bg-verde-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+34 919 94 73 60</span>
            <span className="sm:hidden">Llamar</span>
          </a>
        </div>
      </div>
    </header>
  )
}

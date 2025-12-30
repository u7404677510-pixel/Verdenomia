'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Phone,
  Leaf,
  ChevronDown,
  Globe,
  Home,
  Info,
  FileCheck,
  Building2,
  HelpCircle,
  Mail,
} from 'lucide-react'

const navigation = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Quiénes somos', href: '/nosotros', icon: Info },
  { name: 'Los CAEs', href: '/caes', icon: FileCheck },
  { name: 'Profesionales', href: '/profesionales', icon: Building2 },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
  { name: 'Contacto', href: '/contacto', icon: Mail },
]

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(languages[0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top bar - Bandeau promotionnel */}
      <div className="bg-gradient-to-r from-verde-700 via-verde-600 to-verde-700 text-white py-2.5 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="container-custom flex justify-center items-center relative">
          <div className="flex items-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wide">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              CAE 2024
            </span>
            <span className="font-medium">
              🏠 <strong>Aislamiento de suelos de buhardilla 100% financiado</strong> — ¡0€ para ti!
            </span>
            <a
              href="tel:+34919469528"
              className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              Llámanos
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-verde-500 to-verde-700 rounded-xl flex items-center justify-center shadow-lg shadow-verde-500/30 group-hover:shadow-verde-500/50 transition-shadow">
                  <Leaf className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-yellow-900 text-[10px] font-black">0€</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-display font-bold text-verde-800">
                  Verdenomia
                </h1>
                <p className="text-xs text-verde-600 -mt-0.5 font-medium">
                  Aislamiento 100% subvencionado
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-verde-50 hover:text-verde-700 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-verde-600 rounded-full transition-all group-hover:w-1/2" />
                </Link>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{currentLang.flag}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100 py-1 min-w-32 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLang(lang)
                            setIsLangOpen(false)
                          }}
                          className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-verde-50 transition-colors ${
                            currentLang.code === lang.code
                              ? 'text-verde-700 bg-verde-50'
                              : 'text-gray-700'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a href="tel:+34919469528" className="btn-secondary text-sm py-2.5">
                <Phone className="w-4 h-4" />
                Llamar
              </a>
              <Link href="/#eligibilidad" className="btn-primary text-sm py-2.5 animate-pulse-slow">
                ¡Verificar elegibilidad!
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-verde-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-verde-500 to-verde-700 rounded-xl flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-display font-bold text-verde-800">
                      Verdenomia
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Promo banner mobile */}
                <div className="mx-4 mt-4 p-3 bg-gradient-to-r from-verde-500 to-verde-600 rounded-xl text-white text-center">
                  <p className="text-sm font-semibold">🎉 Aislamiento 100% financiado</p>
                  <p className="text-xs opacity-90">Gracias a los CAE - 0€ para ti</p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {navigation.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-6 py-3.5 text-gray-700 hover:bg-verde-50 hover:text-verde-700 transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 space-y-3">
                  <Link
                    href="/#eligibilidad"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    ¡Verificar mi elegibilidad!
                  </Link>
                  <a
                    href="tel:+34919469528"
                    className="btn-secondary w-full justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

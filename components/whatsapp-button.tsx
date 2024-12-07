'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function WhatsAppButton() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 5000) // Mostrar notificación después de 5 segundos

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <Button
          size="lg"
          className="rounded-full h-14 w-14 bg-white hover:bg-gray-100 shadow-lg p-0"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-8 w-8"
          />
          <span className="sr-only">WhatsApp</span>
        </Button>
        {showNotification && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 text-sm animate-bounce">
            ¿Necesitas ayuda? ¡Contáctanos!
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        )}
      </a>
    </div>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const messages = [
  "¡Bienvenidos a la consulta de la Dra. Josefina Pernas!",
  "Agenda tu cita online hoy mismo",
  "Ofrecemos consultas presenciales y virtuales",
  "Tu bienestar mental es nuestra prioridad"
]

export function TopBanner() {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm font-medium">{messages[currentMessage]}</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <Facebook size={18} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <Instagram size={18} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <Twitter size={18} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <Linkedin size={18} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}


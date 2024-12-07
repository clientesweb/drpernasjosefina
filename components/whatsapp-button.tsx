'use client'

import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">WhatsApp</span>
      </Button>
    </a>
  )
}


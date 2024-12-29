'use client'

import { Button } from "@/components/ui/button"

export function ConsultationButton() {
  const handleClick = () => {
    window.open('https://wa.me/5491141966665', '_blank')
  }

  return (
    <Button size="lg" onClick={handleClick}>
      Agendar una Consulta
    </Button>
  )
}


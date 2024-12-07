'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/slide-1.jpg",
    title: "Salud Mental Integral",
    description: "Cuidando tu bienestar emocional"
  },
  {
    image: "/slide-2.jpg",
    title: "Terapia Personalizada",
    description: "Enfoque adaptado a tus necesidades"
  },
  {
    image: "/slide-3.jpg",
    title: "Consultas Online",
    description: "Atención profesional desde cualquier lugar"
  }
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  function next() {
    setCurrent((current + 1) % slides.length)
  }

  function previous() {
    setCurrent((current - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={previous}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={next}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}


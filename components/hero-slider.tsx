'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop",
    title: "Salud Mental Integral",
    description: "Cuidando tu bienestar emocional"
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
    title: "Terapia Personalizada",
    description: "Enfoque adaptado a tus necesidades"
  },
  {
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=2070&auto=format&fit=crop",
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

  // function next() {
  //   setCurrent((current + 1) % slides.length)
  // }

  // function previous() {
  //   setCurrent((current - 1 + slides.length) % slides.length)
  // }

  return (
    <div className="relative h-[1080px] w-full overflow-hidden">
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
          <div className="absolute inset-0 flex items-center">
            <div className="container px-4">
              <div className="max-w-xl text-white space-y-6">
                <h2 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold leading-tight animate-fade-in-up">
                  {slide.title}
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl animate-fade-in-up animation-delay-300">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
                  <Button size="lg" asChild>
                    <Link href="/contact">Agendar Consulta</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">Nuestros Servicios</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <Button
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
      </Button> */}
    </div>
  )
}


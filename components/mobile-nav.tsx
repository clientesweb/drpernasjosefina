'use client'

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center space-x-2"
          >
            <Image
              src="/brain-logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-8"
            />
            <span className="font-playfair text-xl font-bold text-primary">Dra. Josefina Pernas</span>
          </Link>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={cn(
                "text-primary hover:text-primary/80 transition-colors",
                "text-lg font-semibold"
              )}
            >
              Sobre mí
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className={cn(
                "text-primary hover:text-primary/80 transition-colors",
                "text-lg font-semibold"
              )}
            >
              Servicios
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className={cn(
                "text-primary hover:text-primary/80 transition-colors",
                "text-lg font-semibold"
              )}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(
                "text-primary hover:text-primary/80 transition-colors",
                "text-lg font-semibold"
              )}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}


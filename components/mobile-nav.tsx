'use client'

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

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
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
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
            <span className="font-playfair text-lg">Dra. Josefina Pernas</span>
          </Link>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre mí
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}


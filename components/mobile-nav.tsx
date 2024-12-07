'use client'

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Link from "next/link"
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
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
        <nav className="flex flex-col space-y-4 mt-8">
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
          <Button asChild className="mt-4">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Agendar Consulta
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}


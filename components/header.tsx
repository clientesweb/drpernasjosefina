import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between px-4">
        <MobileNav />
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-muted-foreground hover:text-primary">
            Sobre mí
          </Link>
          <Link href="/services" className="text-muted-foreground hover:text-primary">
            Servicios
          </Link>
        </div>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2">
          <Image
            src="/brain-logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-playfair text-xl font-bold hidden sm:inline-block">
            Dra. Josefina Pernas
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/blog" className="text-muted-foreground hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary">
            Contacto
          </Link>
          <Button>Agendar Consulta</Button>
        </div>
        <div className="md:hidden">
          <Button size="sm">Agendar</Button>
        </div>
      </div>
    </header>
  )
}


import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MobileNav />
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/brain-logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="h-8 w-8"
          />
          <span className="font-playfair text-xl font-bold hidden sm:inline-block">
            Dra. Josefina Pernas
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/about" className="transition-colors hover:text-primary">
            Sobre mí
          </Link>
          <Link href="/services" className="transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="/blog" className="transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="/contact">Agendar Consulta</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


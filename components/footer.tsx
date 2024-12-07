import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/brain-logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-playfair text-lg font-bold">Dra. Josefina Pernas</span>
            </Link>
            <p className="text-muted-foreground">
              Psiquiatra especializada en salud mental. Consultas presenciales y virtuales.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Navegación</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-primary">
                Sobre mí
              </Link>
              <Link href="/services" className="block text-muted-foreground hover:text-primary">
                Servicios
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-primary">
                Blog
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary">
                Contacto
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <div className="space-y-2">
              <a href="tel:+123456789" className="flex items-center text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4 mr-2" />
                +123 456 789
              </a>
              <a href="mailto:contacto@example.com" className="flex items-center text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4 mr-2" />
                contacto@example.com
              </a>
              <a href="https://instagram.com/drapernasjosefina" className="flex items-center text-muted-foreground hover:text-primary">
                <Instagram className="h-4 w-4 mr-2" />
                @drapernasjosefina
              </a>
              <a href="https://maps.google.com" className="flex items-center text-muted-foreground hover:text-primary">
                <MapPin className="h-4 w-4 mr-2" />
                Consulta Presencial
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Horarios</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Lunes a Viernes</p>
              <p>9:00 - 18:00</p>
              <p>Sábados</p>
              <p>9:00 - 13:00</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dra. Josefina Pernas. Todos los derechos reservados.</p>
          <p className="mt-2">Powered by <a href="https://dualitydomain.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Duality Domain</a></p>
        </div>
      </div>
    </footer>
  )
}


import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-playfair text-lg font-bold">Dra. Josefina Pernas</span>
            </Link>
            <p className="text-muted-foreground">
              Médica especialista en Psiquiatría 
Consultas presenciales y virtuales.
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
              <a href="tel:+54 9 11 4196-6665" className="flex items-center text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-2" />
                +54 9 11 4196-6665
              </a>
              <a href="mailto:jpgrenno@gmail.com" className="flex items-center text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-2" />
                jpgrenno@gmail.com
              </a>
              <a href="https://instagram.com/drapernasjosefina" className="flex items-center text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4 mr-2" />
                @drapernasjosefina
              </a>
              <a href="https://maps.google.com" className="flex items-center text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-2" />
                Consulta Presencial
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dra. Josefina Pernas. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Powered by Duality Domain</p>
        </div>
      </div>
    </footer>
  )
}


import Image from "next/image"
import { ConsultationButton } from "@/components/ConsultationButton"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl">
            Dra. Josefina Pernas
          </h1>
          <p className="text-muted-foreground text-lg">
            Médica Especialista en Psiquiatría - MN 140.051
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <Image
            src="/about.jpg"
            alt="Dra. Josefina Pernas"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full"
          />
          <div className="space-y-6">
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-3">Trayectoria y Formación</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Médica graduada en la Universidad Abierta Interamericana</li>
                <li>Residencia en Psiquiatría en Hospital Dr. Cesar Milstein</li>
                <li>Especialista en Psiquiatría Universidad de Buenos Aires (UBA)</li>
                <li>Médica de planta en el servicio de Salud Mental del Hospital General de Agudos J M Penna</li>
                <li>Psiquiatra en el ámbito de urgencias en el sistema público y privado</li>
                <li>Docente en la Universidad de Buenos Aires y la Universidad Católica Argentina</li>
              </ul>
            </div>
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-3">Servicios</h2>
              <p className="text-muted-foreground">
                Realizo atención presencial y virtual en mi consultorio con iguales posibilidades de atención y efectividad.
              </p>
            </div>
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-3">Contacto</h2>
              <p className="text-muted-foreground">Teléfono: +54 9 11 4196-6665</p>
              <p className="text-muted-foreground">Email: jpgrenno@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <ConsultationButton />
        </div>
      </div>
    </div>
  )
}


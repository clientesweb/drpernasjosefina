import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl">
            Dra. Josefina Pernas
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Médica Especialista en Psiquiatría - MN 140.051
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <Image
            src="/about.jpg"
            alt="Dra. Josefina Pernas"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="space-y-4">
            <h2 className="font-playfair text-2xl font-semibold">Mi Trayectoria</h2>
            <p className="text-muted-foreground">
              Desarrollo actualmente mi actividad profesional en el ámbito clínico como médica de planta en el servicio de Salud Mental del Hospital General de Agudos J M Penna.
            </p>
            <p className="text-muted-foreground">
              Trabajo también como psiquiatra en el ámbito de urgencias en el sistema público y en el ámbito privado.
            </p>
            <p className="text-muted-foreground">
              Soy docente de la Universidad de Buenos Aires y de la Universidad Católica Argentina, en el área de Salud Mental.
            </p>
            <p className="text-muted-foreground">
              Realizo atención presencial y virtual en mi consultorio con iguales posibilidades de atención y efectividad.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-playfair text-2xl font-semibold">Formación Académica</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Médica graduada en la Universidad Abierta Interamericana</li>
            <li>Residencia en Psiquiatría en Hospital Dr. Cesar Milstein</li>
            <li>Especialista en Psiquiatría Universidad de Buenos Aires (UBA)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-playfair text-2xl font-semibold">Contacto</h2>
          <p className="text-muted-foreground">
            Teléfono: +54 9 11 4196-6665
          </p>
          <p className="text-muted-foreground">
            Email: jpgrenno@gmail.com
          </p>
        </div>

        <div className="flex justify-center">
          <Button size="lg" onClick={() => window.open('https://wa.me/5491141966665', '_blank')}>
            Agendar una Consulta
          </Button>
        </div>
      </div>
    </div>
  )
}
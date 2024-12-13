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
              Con más de 15 años de experiencia en el campo de la Salud Mental, me he dedicado a acompañar a mis pacientes a superar desafíos emocionales y problemáticas que se presentaban a lo largo de su vida.
            </p>
            <p className="text-muted-foreground">
              Me gradué en la Universidad Abierta Interamericana y realicé mi residencia en Salud Mental en el Hospital Dr. César Milstein. Además, hice la carrera de Especialista en Psiquiatría en la UBA.
            </p>
            <p className="text-muted-foreground">
              Desde entonces he continuado mi formación con cursos, posgrados y capacitaciones para ofrecer una atención de calidad.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-playfair text-2xl font-semibold">Formación Académica</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Graduada de la Universidad Abierta Interamericana</li>
            <li>Residencia en Salud Mental en el Hospital Dr. César Milstein</li>
            <li>Especialista en Psiquiatría - Universidad de Buenos Aires (UBA)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-playfair text-2xl font-semibold">Contacto</h2>
          <p className="text-muted-foreground">
            Teléfono: +54 9 11 4196-6665
          </p>
        </div>

        <div className="flex justify-center">
          <Button size="lg">Agendar una Consulta</Button>
        </div>
      </div>
    </div>
  )
}


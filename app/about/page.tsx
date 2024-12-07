import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl">
            Sobre Dra. Josefina Pernas
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Psiquiatra especializada en salud mental, dedicada a mejorar la calidad de vida de mis pacientes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <Image
            src="/dra-josefina-pernas.jpg"
            alt="Dra. Josefina Pernas"
            width={400}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <h2 className="font-playfair text-2xl font-semibold">Mi Trayectoria</h2>
            <p className="text-muted-foreground">
              Con más de 15 años de experiencia en el campo de la psiquiatría, me he dedicado a ayudar a mis pacientes a superar desafíos emocionales y mentales. Mi enfoque se centra en un tratamiento integral que combina la terapia tradicional con técnicas innovadoras.
            </p>
            <p className="text-muted-foreground">
              Me gradué de la Universidad de Buenos Aires y realicé mi especialización en el Hospital de Clínicas. Desde entonces, he continuado mi formación con cursos y certificaciones internacionales para ofrecer el mejor cuidado posible.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-playfair text-2xl font-semibold">Mi Filosofía</h2>
          <p className="text-muted-foreground">
            Creo firmemente en el poder de la empatía y la comprensión en el proceso terapéutico. Cada paciente es único, y mi objetivo es proporcionar un espacio seguro y de confianza donde puedan explorar sus emociones y trabajar hacia una mejor salud mental.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-playfair text-2xl font-semibold">Áreas de Especialización</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Trastornos de ansiedad y depresión</li>
            <li>Terapia de pareja y familiar</li>
            <li>Manejo del estrés y burnout</li>
            <li>Trastornos del sueño</li>
            <li>Adicciones y comportamientos compulsivos</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Button size="lg">Agendar una Consulta</Button>
        </div>
      </div>
    </div>
  )
}


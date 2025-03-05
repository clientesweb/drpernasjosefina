import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SleepHabitsBlogPost() {
  return (
    <article className="container py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/blog" className="flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al blog
        </Link>

        <div className="space-y-4">
          <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl">
            Sueño: Hábitos para lograr un buen descanso y mejorar tu calidad de vida
          </h1>
          <p className="text-muted-foreground">
            Publicado el{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-R3iq48kZb7aTDqaUDmdEnx-qhtYu1UZLdrsMXb8sfSCXHejFomMGo.webp"
          alt="Habitación acogedora con iluminación cálida, ideal para un buen descanso"
          width={800}
          height={500}
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>
            La mayoría de los adultos en general, necesitan dormir entre 7 y 8 horas al día. La calidad del sueño
            depende también de la actividad diurna, de los hábitos y del estilo de vida que tenemos.
          </p>

          <p>
            Durante el sueño ocurren muchos procesos fisiológicos necesarios para que el organismo este en modo
            "recuperación".
          </p>

          <p>
            En el sueño se activan diferentes procesos como el control de los ejes hormonales, la regeneración celular y
            la regulación de la temperatura corporal, necesarios para mantener el equilibrio u homeostasis del ser
            humano.
          </p>

          <h2>Pautas de higiene del sueño:</h2>

          <ul>
            <li>
              Cenar dos horas antes de la hora de dormir y evitar alcohol, bebidas energizantes y aquellas que contengan
              cafeína.
            </li>
            <li>No fumar</li>
            <li>Reducir la ingesta de líquidos en la hora previa a acostarse</li>
            <li>Mantener una rutina de sueño (acostarse y levantarse en horarios similares)</li>
            <li>
              Mantener una rutina de sueño sin pantallas una hora antes de dormir, apagar luces de techo y utilizar
              veladores de luz cálida
            </li>
            <li>Utilizar tapones para los oídos, ya que ayudan a aislar el ruido y a concentrarse en la respiración</li>
            <li>No utilizar pantallas ni leer en la cama. La cama es para dormir.</li>
            <li>Utilizar filtros de luz en el celular y computadora a partir de 20 horas</li>
            <li>La meditación diaria puede ser útil</li>
            <li>Ir a la cama solo cuando tenemos sueño</li>
            <li>Evitar las siestas, o que sean reducidas.</li>
          </ul>

          <p>
            Implementar pautas de higiene del sueño y cambiar tus hábitos te va a permitir tener un mejor rendimiento
            diurno, un sueño de calidad y mejorar tu estilo de vida.
          </p>
        </div>
      </div>
    </article>
  )
}


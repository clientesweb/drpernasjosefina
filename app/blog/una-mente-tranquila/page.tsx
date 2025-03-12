import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CalmMindBlogPost() {
  return (
    <article className="container py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/blog" className="flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al blog
        </Link>

        <div className="space-y-4">
          <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl">Una Mente Tranquila</h1>
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
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-1EE5UxJekiqdgAtQABX4ZJ-iZjn4RGaFos3HcyqMYjvSLw3jpYqpU.webp"
          alt="Persona meditando al atardecer en la montaña"
          width={800}
          height={800}
          className="rounded-lg shadow-lg"
        />

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>
            Alguna vez te paso, ¿que no podes para de pensar? o… que estás haciendo una actividad y no te podés
            concentrar?
          </p>

          <p>Estás teniendo una conversación y al rato, te das cuenta…que no sabes de que te están hablando…</p>

          <p>Lees un libro, y tenes que leer más de una vez para poder concentrarte…</p>

          <p>
            Vas a un lugar hermoso, estas en medio de la montaña, la playa o un lugar paradisiaco, pero…estas
            intranquilo y no sabes por qué.
          </p>

          <p>
            Si tenes alguno de estos síntomas o viviste a repetición alguna de estas situaciones, quiere decir que tu
            mente necesita descansar. Esto es algo que se puede aprender, y entrenar, llevar la mente a un lugar de
            reposo.
          </p>

          <p>
            Si notas que perdes la capacidad de concentrarte, de prestar atención o que estas irritable, no siempre
            tiene que estar vinculado a un problema cognitivo. Muchas veces nos sentimos impacientes, y esto hace que
            perdamos el control de las emociones con facilidad.
          </p>

          <p>
            Estamos acostumbrados a que la vida ¨normal¨ es una vida agitada. Si no hacemos muchas actividades, no somos
            exitosos. Y a veces, menos es mas. Actividad física extrema, redes sociales, producción para mostrarnos en
            redes, idiomas, cursos, autos, salidas, recitales, muchos trabajos, etc. El lema parece ser llenarnos de
            actividades sino fracasas. Una buena forma de entretener al cerebro que solo nos aportará malos resultados.
          </p>

          <p>
            ¿Y qué pensas que hay detrás de tantas actividades?...hay dolor, sufrimiento, ansiedad, falta de reflexión,
            negación, frustración, falta de compromiso, preocupación, estrés y dificultad para enfrentarnos a nuestros
            problemas y dificultades. La vida es, con todo lo que nos toca, lo bueno y lo malo, lo fácil y lo difícil,
            lo que va rápido y lo que va lento. La vida transcurre más allá de nuestra forma de vivirla.
          </p>

          <p>Y claramente estar ¨entretenidos o anestesiados¨, super ocupados no es una solución.</p>

          <p>
            Existen muchas formas de abordar estas situaciones y una de ellas es recurriendo a las consultas con Salud
            mental, además de aprender a gestionar herramientas e implementar hábitos que mejoren nuestra calidad de
            vida.
          </p>

          <p>
            Aprender a frenar, detectar cuales son nuestras dificultades, encontrar la calma, conectar nuestra mente con
            nuestro cuerpo y poder tomas decisiones acertadas es una forma de mejorar nuestro estilo de vida y alcanzar
            el bienestar físico y emocional.
          </p>
        </div>
      </div>
    </article>
  )
}


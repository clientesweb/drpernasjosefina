import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  // In a real application, this would fetch data from an API or database
  const posts = Array.from({ length: 6 }, (_, i) => ({
    slug: `${i + 1}`,
  }));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // En una implementación real, aquí se obtendría el contenido del artículo basado en el slug
  const article = {
    title: "Cómo manejar la ansiedad en tiempos de incertidumbre",
    date: "6 de diciembre, 2023",
    content: `
      <p>La ansiedad es una respuesta natural ante situaciones de estrés o incertidumbre, pero cuando se vuelve constante o abrumadora, puede afectar significativamente nuestra calidad de vida. En tiempos de cambio e incertidumbre global, es crucial desarrollar estrategias efectivas para manejar la ansiedad.</p>

      <h2>1. Practica la atención plena</h2>
      <p>La meditación y los ejercicios de atención plena pueden ayudarte a centrarte en el presente, reduciendo la preocupación por el futuro. Dedica unos minutos cada día a practicar la respiración consciente o la exploración corporal.</p>

      <h2>2. Mantén una rutina saludable</h2>
      <p>Establecer y mantener una rutina diaria puede proporcionar una sensación de normalidad y control. Asegúrate de incluir tiempo para el ejercicio, una alimentación equilibrada y un sueño adecuado.</p>

      <h2>3. Limita el consumo de noticias</h2>
      <p>Aunque es importante mantenerse informado, el consumo excesivo de noticias puede aumentar la ansiedad. Establece límites en el tiempo que dedicas a las noticias y elige fuentes confiables.</p>

      <h2>4. Conecta con otros</h2>
      <p>Mantén el contacto con amigos y familiares. Compartir tus preocupaciones y sentimientos puede aliviar la carga emocional y proporcionar perspectivas diferentes.</p>

      <h2>5. Practica la autocompasión</h2>
      <p>Sé amable contigo mismo. Reconoce que es normal sentir ansiedad en tiempos difíciles y que no siempre puedes controlar las circunstancias externas.</p>

      <p>Recuerda, si sientes que la ansiedad está afectando significativamente tu vida diaria, no dudes en buscar ayuda profesional. Un terapeuta puede proporcionarte herramientas adicionales y apoyo personalizado para manejar la ansiedad de manera efectiva.</p>
    `,
  }

  return (
    <article className="container py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/blog" className="flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al blog
        </Link>
        
        <div className="space-y-4">
          <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl">
            {article.title}
          </h1>
          <p className="text-muted-foreground">
            Publicado el {article.date}
          </p>
        </div>

        <Image
          src={`/blog-${params.slug}.jpg`}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />

        <div 
          className="prose prose-gray max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  )
}


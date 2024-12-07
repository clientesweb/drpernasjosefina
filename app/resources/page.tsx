import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, FileText, Headphones, Download } from 'lucide-react'
import Link from 'next/link'

const resources = [
  {
    title: "Manejo del Estrés en la Vida Diaria",
    type: "video",
    icon: Play,
    description: "Aprende técnicas prácticas para manejar el estrés cotidiano y mejorar tu calidad de vida.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Guía de Meditación para Principiantes",
    type: "pdf",
    icon: FileText,
    description: "Descarga nuestra guía completa para comenzar tu práctica de meditación y mindfulness.",
    link: "/resources/meditation-guide.pdf"
  },
  {
    title: "Podcast: Conversaciones sobre Salud Mental",
    type: "audio",
    icon: Headphones,
    description: "Escucha nuestro podcast semanal donde discutimos diversos temas de salud mental con expertos.",
    link: "https://podcasts.example.com/salud-mental"
  },
  {
    title: "Ejercicios de Respiración para la Ansiedad",
    type: "video",
    icon: Play,
    description: "Video guiado con ejercicios de respiración para ayudarte a manejar los síntomas de ansiedad.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Ebook: Construyendo Relaciones Saludables",
    type: "ebook",
    icon: Download,
    description: "Descarga nuestro ebook gratuito sobre cómo cultivar y mantener relaciones interpersonales saludables.",
    link: "/resources/relaciones-saludables.epub"
  },
  {
    title: "Taller en Línea: Autoestima y Amor Propio",
    type: "video",
    icon: Play,
    description: "Participa en nuestro taller grabado sobre cómo mejorar tu autoestima y practicar el amor propio.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Infografía: Señales de Depresión",
    type: "pdf",
    icon: FileText,
    description: "Descarga nuestra infografía informativa sobre las señales comunes de la depresión y cuándo buscar ayuda.",
    link: "/resources/senales-depresion.pdf"
  },
  {
    title: "Serie de Podcasts: Historias de Recuperación",
    type: "audio",
    icon: Headphones,
    description: "Escucha testimonios inspiradores de personas que han superado desafíos de salud mental.",
    link: "https://podcasts.example.com/historias-recuperacion"
  },
  {
    title: "Video: Técnicas de Comunicación Asertiva",
    type: "video",
    icon: Play,
    description: "Aprende a comunicarte de manera asertiva en tus relaciones personales y profesionales.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
]

export default function ResourcesPage() {
  return (
    <div className="container py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl">
            Recursos y Materiales Educativos
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora nuestra colección de recursos gratuitos diseñados para ayudarte en tu viaje hacia el bienestar mental y emocional.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <resource.icon className="h-5 w-5 text-primary" />
                  <span className="line-clamp-1">{resource.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between gap-4">
                <p className="text-muted-foreground text-sm">{resource.description}</p>
                <Button asChild className="w-full mt-auto">
                  <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.type === 'video' && 'Ver video'}
                    {resource.type === 'pdf' && 'Descargar PDF'}
                    {resource.type === 'audio' && 'Escuchar podcast'}
                    {resource.type === 'ebook' && 'Descargar ebook'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas ayuda personalizada? No dudes en contactarnos para programar una consulta.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contactar ahora</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


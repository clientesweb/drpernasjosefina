import { Button } from "@/components/ui/button"
import Link from "next/link"

export function VideoSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recursos y Charlas
          </h2>
          <p className="text-muted-foreground text-lg">
            Aprende más sobre salud mental a través de nuestros videos educativos
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TjqrualxgkI"
              title="La neurociencia de las emociones"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BXSuiBTBI6c"
              title="Versión Completa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-rD7COiH67I"
              title="Salud Mental"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/resources">Ver más recursos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


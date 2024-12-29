import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Recursos y Charlas
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TjqrualxgkI"
                title="Salud Mental y Bienestar Emocional"
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
                title="Cómo Cuidar tu Salud Mental"
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
                title="Salud Mental: Cómo Cuidarla"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0noAwrWY78U"
                title="Salud Mental: Cómo Cuidarla"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/resources">Ver más recursos</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}


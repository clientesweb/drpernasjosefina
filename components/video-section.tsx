export function VideoSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recursos y Charlas
          </h2>
          <p className="text-muted-foreground text-lg">
            Aprende más sobre salud mental a través de nuestros videos educativos
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="Video sobre salud mental"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id-2"
              title="Charla sobre bienestar emocional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


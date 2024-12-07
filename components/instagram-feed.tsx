'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function InstagramFeed() {
  useEffect(() => {
    // Rerender Instagram embed after component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Sígueme en Instagram
          </h2>
          <p className="text-muted-foreground text-lg">
            Contenido diario sobre salud mental y bienestar
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/your-post-id/"
            data-instgrm-version="14"
          />
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/your-post-id-2/"
            data-instgrm-version="14"
          />
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/your-post-id-3/"
            data-instgrm-version="14"
          />
        </div>
      </div>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  )
}


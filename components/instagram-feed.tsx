'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export function InstagramFeed() {
  const instagramPosts = [
    'https://www.instagram.com/p/C_l75FrMfXf/',
    'https://www.instagram.com/p/CnXtp7lpm5D/',
    'https://www.instagram.com/p/Ck6yeM8s1Q-/',
    'https://www.instagram.com/p/CSIBJOWISua/'
  ]

  useEffect(() => {
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
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {instagramPosts.map((post, index) => (
            <blockquote
              key={index}
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={post}
              data-instgrm-version="14"
            />
          ))}
        </div>
      </div>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  )
}


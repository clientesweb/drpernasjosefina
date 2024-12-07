import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="container py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Artículos sobre salud mental, bienestar emocional y más
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Link href={`/blog/${i + 1}`}>
                <div className="aspect-video relative">
                  <Image
                    src={`https://images.unsplash.com/photo-${[
                      "1544027993-37dbfe43562a",
                      "1573497019940-1c28c88b4f3e",
                      "1590650153855-d9e808231d41",
                      "1573497019418-b400bb3ab074",
                      "1516585427167-9f4af9627e6c",
                      "1609220136736-443140cffec6"
                    ][i]}?q=80&w=2070&auto=format&fit=crop`}
                    alt="Blog post thumbnail"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 hover:text-primary">
                    Título del artículo sobre salud mental #{i + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {new Date().toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="line-clamp-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


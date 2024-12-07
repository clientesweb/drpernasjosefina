import { HeroSlider } from "@/components/hero-slider"
import { VideoSection } from "@/components/video-section"
import { InstagramFeed } from "@/components/instagram-feed"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, Video, Star, Award, BookOpen } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  const services = [
    { title: 'Terapia Individual', icon: <Brain />, description: 'Sesiones personalizadas para abordar tus necesidades específicas y promover tu crecimiento personal.' },
    { title: 'Terapia de Pareja', icon: <Users />, description: 'Mejora tu relación y fortalece los lazos con tu pareja a través de sesiones guiadas.' },
    { title: 'Consultas Online', icon: <Video />, description: 'Accede a terapia de calidad desde la comodidad de tu hogar con nuestras sesiones virtuales.' },
    { title: 'Otro Servicio', icon: <BookOpen />, description: 'Descripción del cuarto servicio' },
    // Add more services here...
  ];

  return (
    <>
      <HeroSlider />
      
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Servicios Especializados
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios para cuidar tu salud mental y bienestar emocional
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.slice(0, 4).map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                ¿Por qué elegir a la Dra. Josefina Pernas?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <p>Más de 15 años de experiencia en psiquiatría</p>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <p>Enfoque integral y personalizado para cada paciente</p>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <p>Formación continua en las últimas técnicas terapéuticas</p>
                </li>
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/about">Conoce más sobre mí</Link>
              </Button>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/dra-josefina-pernas.jpg"
                alt="Dra. Josefina Pernas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 md:py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Testimonios de Pacientes
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a otros a mejorar su calidad de vida
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <FAQSection />
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {[...Array(4)].map((_, index) => (
              <blockquote
                key={index}
                className="instagram-media"
                data-instgrm-permalink={`https://www.instagram.com/p/your-post-id-${index + 1}/`}
                data-instgrm-version="14"
              />
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  )
}


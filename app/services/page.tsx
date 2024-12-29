import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Video, Sparkles, Zap, HeartPulse, Stethoscope } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Brain,
    title: "Terapia Individual",
    description: "Sesiones personalizadas para abordar tus necesidades específicas y promover tu crecimiento personal.",
    image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Video,
    title: "Consultas Online y Presenciales",
    description: "Flexibilidad para elegir entre sesiones virtuales desde la comodidad de tu hogar o consultas presenciales en el consultorio.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Stethoscope,
    title: "Psiquiatría Clínica",
    description: "Tratamientos psicoterapéuticos y farmacológicos adaptados a tus necesidades específicas.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: HeartPulse,
    title: "Manejo del Estrés",
    description: "Desarrolla estrategias efectivas para manejar el estrés y la ansiedad en tu vida diaria.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Zap,
    title: "ACT: Terapia de Aceptación y Compromiso",
    description: "Un modelo de psicoterapia centrado en la aceptación, el compromiso y el cambio de comportamiento para crear una vida significativa.",
    image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=2070&auto=format&fit=crop"
  }
]

export default function ServicesPage() {
  return (
    <div className="container py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl">
            Nuestros Servicios
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios terapéuticos diseñados para ayudarte a alcanzar tu bienestar emocional y mental.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="font-playfair text-3xl font-semibold mb-4">Terapia de Aceptación y Compromiso (ACT)</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            La terapia de aceptación y compromiso (ACT) es un modelo de psicoterapia que se centra en la aceptación, el compromiso y el cambio de comportamiento. Su objetivo es ayudar a los pacientes a crear una vida significativa y a reorientarla.
          </p>
        </div>
      </div>
    </div>
  )
}


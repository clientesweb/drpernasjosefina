import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, Video, Sparkles, Zap, HeartPulse } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: "Terapia Individual",
    description: "Sesiones personalizadas para abordar tus necesidades específicas y promover tu crecimiento personal."
  },
  {
    icon: Users,
    title: "Terapia de Pareja",
    description: "Mejora tu relación y fortalece los lazos con tu pareja a través de sesiones guiadas."
  },
  {
    icon: Video,
    title: "Consultas Online",
    description: "Accede a terapia de calidad desde la comodidad de tu hogar con nuestras sesiones virtuales."
  },
  {
    icon: Sparkles,
    title: "Mindfulness y Meditación",
    description: "Aprende técnicas de atención plena para reducir el estrés y mejorar tu bienestar general."
  },
  {
    icon: Zap,
    title: "Terapia Cognitivo-Conductual",
    description: "Trabaja en cambiar patrones de pensamiento y comportamiento negativos para mejorar tu salud mental."
  },
  {
    icon: HeartPulse,
    title: "Manejo del Estrés",
    description: "Desarrolla estrategias efectivas para manejar el estrés y la ansiedad en tu vida diaria."
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
              <CardHeader><CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


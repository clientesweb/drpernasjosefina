import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué es la terapia cognitivo-conductual?",
    answer: "La terapia cognitivo-conductual (TCC) es un tipo de tratamiento psicoterapéutico que ayuda a las personas a identificar y cambiar patrones de pensamiento y comportamiento negativos. Se centra en el presente y es orientada a objetivos, ayudando a los pacientes a desarrollar estrategias para manejar sus problemas actuales."
  },
  {
    question: "¿Cuánto tiempo dura una sesión de terapia?",
    answer: "Generalmente, una sesión de terapia dura entre 45 y 60 minutos. Sin embargo, la duración puede variar dependiendo de las necesidades individuales del paciente y el tipo de terapia que se esté realizando."
  },
  {
    question: "¿Con qué frecuencia debo asistir a terapia?",
    answer: "La frecuencia de las sesiones de terapia puede variar según las necesidades individuales. Típicamente, se comienza con sesiones semanales y luego se ajusta la frecuencia según el progreso y las necesidades del paciente. Algunos pueden beneficiarse de sesiones más frecuentes, mientras que otros pueden pasar a sesiones quincenales o mensuales con el tiempo."
  },
  {
    question: "¿Ofrecen terapia online?",
    answer: "Sí, ofrecemos sesiones de terapia online a través de plataformas seguras de videollamada. Esto permite a los pacientes recibir tratamiento desde la comodidad de su hogar o cualquier lugar que les resulte conveniente."
  },
  {
    question: "¿Cómo sé si necesito terapia?",
    answer: "Considerar la terapia puede ser beneficioso si estás experimentando dificultades emocionales persistentes, cambios en tu comportamiento o pensamientos que afectan tu vida diaria, relaciones o trabajo. También puede ser útil si estás pasando por una transición de vida difícil o simplemente buscas crecimiento personal y autoconocimiento."
  }
]

export function FAQSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}


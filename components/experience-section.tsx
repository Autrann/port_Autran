"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: "Analizador de sistemas y gestión de productos",
      company: "Abastecedora Industrial Viesa",
      period: "Mayo 2023 - Mayo 2024",
      description:
        "Encargado de la gestión de datos y sistemas informáticos para el desarrollo y administración de una base de datos, instalación y actualización regular de programas y mantenimiento preventivo y correctivo del equipo informático",
    },
    {
      title: "Analista y Desarrollador de Sistemas",
      company: "Departamento de Desarrollo Informático y Estadística, UASLP",
      period: "Agosto 2024 - Agosto 2025",
      description:
        "Responsable de la administración y mantenimiento de servidores, sistemas y páginas institucionales, asegurando su correcto funcionamiento y alta disponibilidad así como desarrollo de software personalizado para generación de reportes o documentos institucionales",
    },
  ]

  return (
    <section id="experiencia" className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Experiencia</h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              } md:w-1/2 p-6`}
              initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />

              <div className="bg-background rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                <h4 className="text-lg font-medium mt-1">{exp.company}</h4>
                <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                <p className="mt-4 text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


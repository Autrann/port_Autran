"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="sobre-mi" className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <User className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Sobre mí</h2>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Ingeniero de Software</h3>
              <p className="text-muted-foreground">
                Soy un desarrollador de software apasionado por crear soluciones tecnológicas innovadoras y eficientes.
                Me especializo en el desarrollo de aplicaciones web/desktop y sistemas de gestión.
              </p>
              <p className="text-muted-foreground">
                Con experiencia en el análisis, diseño e implementación de sistemas, me enfoco en crear productos que
                satisfagan las necesidades de los usuarios y aporten valor a las organizaciones.
              </p>
              <p className="text-muted-foreground">
                Disfruto aprendiendo nuevas tecnologías y metodologías para mejorar constantemente mis habilidades y
                mantenerme actualizado en un campo tan dinámico como la informática.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-2">Educación</h4>
                <div className="space-y-2">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h5 className="font-medium">Ingeniería en Sistemas Computacionales</h5>
                    <p className="text-sm text-muted-foreground">Universidad Autónoma de San Luis Potosí</p>
                    <p className="text-sm text-muted-foreground">2020 - 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/pic2.png" alt="Luis" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Server, Layers, Palette, Cpu } from "lucide-react"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend",
      items: ["HTML/CSS", "JavaScript", "React", "Flutter", "Tailwind CSS"],
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend",
      items: ["Node.js", "PHP", "Java"],
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Bases de Datos",
      items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase"],
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Frameworks",
      items: ["Next.js", "Vue.js", "Laravel"],
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Diseño",
      items: ["Figma", "Photoshop"],
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Otros y lenguajes",
      items: ["Git", "Docker", "OpenGL", "C++", "C#"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Mis Habilidades
          </motion.h2>
          <motion.p
            className="text-muted-foreground mt-2 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tecnologías y herramientas que utilizo
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


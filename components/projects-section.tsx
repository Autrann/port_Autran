"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Code, ExternalLink, Github, Smartphone, Box } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      title: "PennyPal",
      description:
        "Aplicación Android desarrollada con Flutter y Tailwind, diseñada para ayudar a niños y adolescentes a administrar su dinero de manera divertida y educativa.",
      longDescription:
        "PennyPal es una aplicación móvil innovadora que enseña a los niños y adolescentes conceptos financieros básicos a través de una interfaz interactiva y atractiva. La aplicación incluye funciones como seguimiento de gastos, metas de ahorro, recompensas virtuales y lecciones financieras adaptadas a diferentes edades. Desarrollada con Flutter para garantizar un rendimiento óptimo en dispositivos Android y utilizando Tailwind CSS para un diseño moderno y responsivo.",
      tags: ["Flutter", "Dart", "Firebase", "Android"],
      category: "mobile",
      image: "/projects/VistasPennyPal.png",
      github: "https://github.com/Autrann/_PennyPal",
      demo: "https://www.figma.com/proto/yiUZuEBQ16H5hMqLWgCjdx/PennyPal?node-id=0-1&t=I99KydMoaX4if3Ex-1",
      icon: <Smartphone className="h-5 w-5" />,
    },
    {
      title: "OBJ File Viewer",
      description:
        "Visor de modelos 3D desarrollado en C++ con OpenGL. Esta aplicación permite cargar y explorar modelos 3D en formato OBJ dentro de un entorno 3D.",
      longDescription:
        "Este visor de archivos OBJ es una aplicación de escritorio desarrollada en C++ utilizando OpenGL para renderizar modelos 3D. Permite a los usuarios cargar, visualizar y manipular modelos 3D en formato OBJ. Características principales: iluminación ambiental ajustable, controles interactivos para rotar, hacer zoom y mover el modelo, soporte para texturas, wireframe y modo sólido, y capacidad para exportar capturas de pantalla. El proyecto demuestra conocimientos avanzados en gráficos por computadora, matemáticas 3D y programación en C++.",
      tags: ["C++", "OpenGL", "3D Graphics", "Computer Graphics", "OBJ Format"],
      category: "desktop",
      image: "/projects/visualizer.png",
      github: "https://github.com/Autrann/obj-viewer-cpp-glut",
      demo: "#",
      icon: <Box className="h-5 w-5" />,
    },
    {
      title: "Ensamblador y Cargador-Ligador SIC/XE",
      description:
        "Aplicación gráfica en C# que permite ensamblar y cargar programas SIC/XE, con soporte para bloques, secciones y símbolos externos.",
      longDescription:
        "Este proyecto implementa un ensamblador en dos pasos para la arquitectura SIC/XE con soporte para bloques, secciones externas (CSECT), símbolos externos (EXTDEF y EXTREF), evaluación de expresiones y generación de código objeto. Además, incluye un cargador-ligador que aplica el algoritmo de dos pasos para cargar múltiples módulos en memoria, generando un mapa de memoria visual con colores, dirección de ejecución y registros de modificación. Todo está integrado en una interfaz gráfica desarrollada con Windows Forms en C#, con visualizadores personalizados para archivos intermedios, símbolos y registros.",
      tags: ["C#", "SIC/XE", "Windows Forms"],
      category: "desktop",
      image: "/projects/Sicxe.png",
      github: "https://github.com/Autrann/Ensamblador-SICXE",
      demo: "#",
      icon: <Box className="h-5 w-5" />,
    },
    {
      title: "Sistema de Economia Circular",
      description:
        "Sistema para que los alumnos puedan intercambiar productos y servicios de manera sostenible, fomentando la economía circular. (A espera de Hosting)",
      longDescription:
        "Proyecto solicitado por Agenda Ambiental. Es una plataforma tipo marketplace donde los alumnos pueden publicar objectos y recibir ofertas de otros usuarios para intercambiar productos y servicios. El sistema está diseñado para fomentar la economía circular, permitiendo a los estudiantes reutilizar y reciclar productos en lugar de desecharlos. Desarrollado con Laravel y Vue.js, el sistema incluye funcionalidades como registro de usuarios, publicación de anuncios, gestión de ofertas y un sistema de mensajería interna.",
      tags: ["Laravel", "MySQL", "JavaScript", "Vue.js", "Tailwind"],
      category: "web",
      image: "/projects/Circular.png",
      github: "#",
      demo: "#",
      icon: <Box className="h-5 w-5" />,
    },
    {
      title: "Diseñador de Planes de Estudio",
      description:
        "Herramienta visual para crear y exportar planes de estudio académicos. (A espera de Hosting)",
      longDescription:
        "Aplicación web interactiva que permite diseñar, organizar y visualizar planes de estudio académicos de forma gráfica. Los usuarios pueden colocar materias sobre un lienzo, definir serializaciones mostrando claves de materias precedentes, agrupar materias por secciones usando colores de fondo, y exportar el resultado a un PDF. Incluye además un editor de texto enriquecido para describir el plan de estudio. El sistema está diseñado para ser intuitivo y claro, y su estado puede guardarse y cargarse fácilmente. Proyecto desarrollado con front end en React y backend en Laravel, utilizando PDFMake para la generación de PDFs.",
      tags: ["React", "Laravel", "Javascript", "HTML5", "CSS3", "PDFMake"],
      category: "web",
      image: "/projects/StudyPlan.png",
      github: "https://github.com/Autrann/PlanesEstudio",
      demo: "#",
      icon: <Box className="h-5 w-5" />,
    },
    
    {
      title: "Sistema de Gestión de Constancias UASLP",
      description:
        "Sistema para que los alumnos de la UASLP puedan hacer solicitudes de constancias de estudios y hacer el proceso completo en línea.",
      longDescription:
        "El proyecto está pensado para agilizar el procedimiento de solicitud de constancias de estudios en la UASLP. Los alumnos pueden hacer solicitudes en línea, adjuntar documentos necesarios y recibir notificaciones sobre el estado de su solicitud. El sistema incluye un panel administrativo para gestionar las solicitudes, verificar documentos y generar fichas de pago para el trámite. Desarrollado con PHP puro sin Framework y con Bootstrap por petición de la universidad.",
      tags: ["PHP", "Bootstrap"],
      category: "web",
      image: "/projects/Constancias.png",
      github: "#",
      demo: "https://servicios.ing.uaslp.mx/gtm/projects/constancias/views/login.php",
      icon: <Box className="h-5 w-5" />,
    },
    {
      title: "Sistema de Control Escolar",
      description:
        "Sistema para la gestión de instituciones educativas. Permite administrar alumnos, maestros, materias y calificaciones de manera eficiente.",
      longDescription:
        "Este sistema de control escolar es una aplicación web desarrollada con una base de datos MySQL, desarrollado con Laravel. La aplicación diseñada para facilitar la gestión de instituciones educativas. Permite a los administradores gestionar alumnos, maestros, materias y calificaciones de manera eficiente. Incluye funcionalidades como registro de alumnos, asignación de materias, gestión de calificaciones y generación de reportes. La interfaz es intuitiva y responsiva, adaptándose a diferentes dispositivos.",
      tags: ["Laravel", "PHP", "Tailwind"],
      category: "web",
      image: "/projects/Educative.png",
      github: "https://github.com/Autrann/Control-Escolar",
      demo: "#",
      icon: <Box className="h-5 w-5" />,
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="proyectos" className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Proyectos</h2>
          </motion.div>
          <motion.p
            className="text-muted-foreground mt-2 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Algunos de mis trabajos más destacados
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="mx-auto">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="mobile">Móvil</TabsTrigger>
                <TabsTrigger value="desktop">Escritorio</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary">Ver detalles</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            {project.icon}
                            {project.title}
                          </DialogTitle>
                          <DialogDescription>{project.longDescription}</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <div className="relative h-64 w-full mb-4 rounded-md overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            {project.github && project.github !== "#" && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" />
                                Código
                              </a>
                            </Button>
                            )}
                            {project.demo && project.demo !== "#" && (
                              <Button size="sm" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Demo
                              </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {project.icon}
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.github && project.github !== "#" && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Código
                    </a>
                  </Button>
                  )}
                    {project.demo && project.demo !== "#" && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                      </a>
                    </Button>
                    )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


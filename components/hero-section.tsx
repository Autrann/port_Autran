"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <Image src="/image.png" alt="Luis" fill className="object-cover" priority />
              </div>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                <Github className="h-3.5 w-3.5" />
                <a href="https://github.com/autrann" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </Badge>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hola, soy Luis</h1>
              <div className="h-12 md:h-16">
                <div className="text-xl md:text-2xl font-medium text-primary">Ingeniero de Software</div>
              </div>
              <p className="text-muted-foreground md:text-xl">
                de San Luis Potosí, México.
                <br />
                Especializado en el desarrollo de aplicaciones únicas.
              </p>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="gap-1">
                <a href="#contacto">
                  <Mail className="h-4 w-4 mr-1" />
                  Contáctame
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#proyectos">Ver proyectos</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-3xl opacity-50" />
              <div className="relative bg-background border rounded-lg shadow-lg p-6 h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                    <div className="h-4 bg-primary/30 rounded w-1/4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full h-12 w-12 bg-primary/10 hover:bg-primary/20"
          >
            <a href="#skills" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


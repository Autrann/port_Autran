"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, Phone, Copy, Check, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)

    toast({
      title: "Copiado al portapapeles",
      description: `${text} ha sido copiado al portapapeles.`,
    })

    setTimeout(() => {
      setCopiedField(null)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "luis.autran@hotmail.com",
      action: () => handleCopy("luis.autran@hotmail.com", "email"),
      secondaryAction: () => (window.location.href = "mailto:luis.autran@hotmail.com"),
      actionIcon: (isCopied: boolean) => (isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />),
      secondaryActionIcon: <ExternalLink className="h-4 w-4" />,
      actionText: (isCopied: boolean) => (isCopied ? "Copiado" : "Copiar"),
      secondaryActionText: "Enviar email",
      id: "email",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Whatsapp",
      details: "Contáctame",
      action: () => handleCopy("https://wa.me/524445787744", "phone"),
      secondaryAction: () => (window.location.href = "https://wa.me/524445787744"),
      actionIcon: (isCopied: boolean) => (isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />),
      secondaryActionIcon: <Phone className="h-4 w-4" />,
      actionText: (isCopied: boolean) => (isCopied ? "Copiado" : "Copiar"),
      secondaryActionText: "Enviar Whatsapp",
      id: "phone",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Ubicación",
      details: "San Luis Potosí, México",
      action: () => window.open("https://maps.google.com/?q=San+Luis+Potosi+Mexico", "_blank"),
      actionIcon: () => <ExternalLink className="h-4 w-4" />,
      actionText: () => "Ver en mapa",
      id: "location",
    },
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: "Telegram",
      details: "Contáctame",
      action: () => window.open("https://t.me/Autran6od", "_blank"),
      actionIcon: () => <ExternalLink className="h-4 w-4" />,
      actionText: () => "Mandar mensaje",
      id: "calendar",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/autrann",
      color: "bg-gray-900 text-white hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/luisautran/",
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:luis.autran@hotmail.com",
      color: "bg-red-500 text-white hover:bg-red-600",
    },
  ]

  return (
    <section id="contacto" className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contacto</h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-6 text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">¡Hablemos!</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o propuesta? No dudes en contactarme. Estoy interesado en nuevos proyectos y
              oportunidades de colaboración. Elige el método que prefieras para comunicarte conmigo.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start p-6">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">{info.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </div>
                  <div className="flex border-t">
                    <div
                      className="flex-1 bg-muted/50 p-3 flex justify-center items-center cursor-pointer hover:bg-muted transition-colors"
                      onClick={info.action}
                    >
                      <span className="flex items-center gap-2 text-sm font-medium">
                        {typeof info.actionIcon === "function"
                          ? info.actionIcon(copiedField === info.id)
                          : info.actionIcon}
                        {typeof info.actionText === "function"
                          ? info.actionText(copiedField === info.id)
                          : info.actionText}
                      </span>
                    </div>
                    {info.secondaryAction && (
                      <>
                        <div className="w-px bg-border"></div>
                        <div
                          className="flex-1 bg-muted/50 p-3 flex justify-center items-center cursor-pointer hover:bg-muted transition-colors"
                          onClick={info.secondaryAction}
                        >
                          <span className="flex items-center gap-2 text-sm font-medium">
                            {info.secondaryActionIcon}
                            {info.secondaryActionText}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Conéctate conmigo en redes sociales</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className={cn("rounded-full h-auto py-3 px-6 transition-all duration-300", link.color)}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="flex items-center gap-3"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


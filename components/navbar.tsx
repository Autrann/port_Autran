"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const navRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [mobileMenuOpen])

  // Handle scroll events for active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for the indicator
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Find which section is currently in view
      const sections = ["hero", "skills", "proyectos", "experiencia", "sobre-mi", "contacto"]

      // Get all section elements and their positions
      const sectionPositions = sections.map((id) => {
        const element = document.getElementById(id)
        if (!element) return { id, top: 0, bottom: 0 }

        const rect = element.getBoundingClientRect()
        return {
          id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        }
      })

      // Determine which section is currently in view
      const currentPosition = window.scrollY + window.innerHeight / 3

      for (let i = 0; i < sectionPositions.length; i++) {
        const { id, top } = sectionPositions[i]
        const nextSection = sectionPositions[i + 1]

        if (currentPosition >= top && (nextSection ? currentPosition < nextSection.top : true)) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ]

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm backdrop-saturate-150 transition-all duration-300"
      initial={{ backdropFilter: "blur(0px)", backgroundColor: "hsla(var(--background) / 0.95)" }}
      animate={{
        backdropFilter: scrollY.get() > 50 ? "blur(8px)" : "blur(0px)",
        backgroundColor: `hsla(var(--background) / ${scrollY.get() > 50 ? "1" : "0.95"})`,
        boxShadow: scrollY.get() > 50 ? "0 4px 20px rgba(0,0,0,0.1)" : "0 0 0 rgba(0,0,0,0)",
        paddingTop: scrollY.get() > 50 ? "12px" : "16px",
        paddingBottom: scrollY.get() > 50 ? "12px" : "16px",
      }}
    >
      {/* Progress indicator */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary/80 via-primary to-primary/80 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container flex items-center justify-between px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <Link href="/" className="font-bold text-xl flex items-center">
            <span className="text-primary">Luis</span>
            <span className="text-foreground">.Autran</span>
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {navItems.map((item, index) => (
            <NavItem
              key={item.name}
              item={item}
              isActive={activeSection === item.href.substring(1)}
              index={index}
              onClick={() => {}}
            />
          ))}
          <ModeToggle />
        </motion.nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground min-h-[44px] min-w-[44px] rounded-md hover:bg-accent/50 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-background/95 backdrop-blur-sm dark:bg-background/90 flex flex-col items-center justify-center"
          >
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-6 w-full px-4"
            >
              {navItems.map((item, index) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={activeSection === item.href.substring(1)}
                  index={index}
                  isMobile={true}
                  onClick={closeMenu}
                />
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Extracted NavItem component for better organization
function NavItem({
  item,
  isActive,
  index,
  isMobile = false,
  onClick,
}: {
  item: { name: string; href: string }
  isActive: boolean
  index: number
  isMobile?: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className={cn(isMobile && "w-full")}
    >
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          "relative group transition-all duration-300 py-2 px-3 rounded-md flex items-center justify-center",
          isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground",
          isMobile && "text-xl w-full py-3",
        )}
        aria-current={isActive ? "page" : undefined}
      >
        <span className="relative z-10">{item.name}</span>

        {/* Background highlight for active state */}
        <AnimatePresence>
          {isActive && (
            <motion.span
              className="absolute inset-0 bg-primary/10 rounded-md -z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>

        {/* Underline effect */}
        {!isMobile && (
          <motion.span
            className="absolute -bottom-0.5 left-0 h-0.5 bg-primary rounded-full"
            initial={{ width: isActive ? "100%" : "0%" }}
            animate={{ width: isActive ? "100%" : "0%" }}
            exit={{ width: "0%" }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Hover underline effect (only shows when not active) */}
        {!isActive && !isMobile && (
          <span className="absolute -bottom-0.5 left-0 h-0.5 bg-primary rounded-full w-0 group-hover:w-full transition-all duration-300" />
        )}
      </Link>
    </motion.div>
  )
}


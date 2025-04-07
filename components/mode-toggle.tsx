"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative rounded-full w-10 h-10 bg-primary/10 hover:bg-primary/20 transition-colors"
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 45 : 0,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="absolute"
        >
          <Sun className="h-5 w-5 text-amber-500" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : -45,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="absolute"
        >
          <Moon className="h-5 w-5 text-blue-300" />
        </motion.div>
      </div>
    </Button>
  )
}


"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Prism from "prismjs"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-css"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"

interface SyntaxHighlighterProps {
  code: string
  language: string
}

export function SyntaxHighlighter({ code, language }: SyntaxHighlighterProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    Prism.highlightAll()
  }, [code, theme])

  if (!mounted) return null

  return (
    <pre className={`language-${language} overflow-auto text-[11px] sm:text-sm m-0 p-0 bg-transparent`}>
      <code className={`language-${language} bg-transparent`}>{code}</code>
    </pre>
  )
}


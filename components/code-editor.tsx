"use client"

import { useState, useEffect } from "react"
import { Copy, RefreshCw, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { toast } from "@/hooks/use-toast"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"

interface CodeEditorProps {
  initialCode: string
  className?: string
}

export function CodeEditor({ initialCode, className }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setIsMounted(true)
    renderOutput(code)
  }, [])

  // Update output when code changes
  useEffect(() => {
    if (isMounted) {
      renderOutput(code)
    }
  }, [code, isMounted])

  // Function to render the HTML output
  const renderOutput = (htmlCode: string) => {
    setOutput(htmlCode)
  }

  // Reset code to initial state
  const handleReset = () => {
    setCode(initialCode)
    toast({
      title: "Código restablecido",
      description: "El código ha sido restablecido a su estado inicial.",
    })
  }

  // Copy code to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Código copiado",
      description: "El código ha sido copiado al portapapeles.",
    })
  }

  // Run the code
  const handleRun = () => {
    renderOutput(code)
    toast({
      title: "Código ejecutado",
      description: "El código ha sido ejecutado correctamente.",
    })
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className={cn("rounded-lg overflow-hidden border shadow-lg", className)}>
      {/* Editor Header */}
      <div className="bg-muted p-2 sm:p-3 flex items-center justify-between border-b">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-[10px] sm:text-xs font-mono text-muted-foreground">index.html</span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            title="Restablecer código"
            className="h-7 w-7 sm:h-8 sm:w-8 hover:bg-accent/50 transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            title="Copiar código"
            className="h-7 w-7 sm:h-8 sm:w-8 hover:bg-accent/50 transition-colors"
          >
            <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRun}
            title="Ejecutar código"
            className="h-7 w-7 sm:h-8 sm:w-8 hover:bg-accent/50 transition-colors"
          >
            <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Code Editor */}
        <div className="border-r bg-background">
          <div className="relative font-mono text-xs sm:text-sm h-[200px] sm:h-[250px] md:h-[300px] overflow-auto">
            {isEditing ? (
              <div className="relative h-full">
                <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col items-end pr-1 sm:pr-2 text-muted-foreground bg-muted/50 select-none">
                  {code.split("\n").map((_, i) => (
                    <div key={i} className="leading-5 sm:leading-6 py-1 text-[10px] sm:text-xs">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full p-1 pl-7 sm:pl-10 bg-background text-foreground leading-5 sm:leading-6 resize-none focus:outline-none focus:ring-0 border-0 font-mono text-[11px] sm:text-sm"
                  spellCheck="false"
                  aria-label="Editor de código HTML"
                  onBlur={() => setIsEditing(false)}
                  autoFocus
                />
              </div>
            ) : (
              <div className="relative h-full cursor-text p-1 pl-7 sm:pl-10" onClick={() => setIsEditing(true)}>
                <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col items-end pr-1 sm:pr-2 text-muted-foreground bg-muted/50 select-none">
                  {code.split("\n").map((_, i) => (
                    <div key={i} className="leading-5 sm:leading-6 py-1 text-[10px] sm:text-xs">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <SyntaxHighlighter code={code} language="html" />
              </div>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white dark:bg-gray-900 p-2 sm:p-4 h-[200px] sm:h-[250px] md:h-[300px] overflow-auto">
          <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: output }} />
        </div>
      </div>
    </div>
  )
}


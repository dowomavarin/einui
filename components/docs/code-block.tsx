"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = "tsx", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative group", className)}>
      <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-sm opacity-50" />
      <div className="relative rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
          <span className="text-xs font-medium text-white/40 uppercase">{language}</span>
          <button
            onClick={copyToClipboard}
            className="rounded-lg p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        {/* Code */}
        <pre className="overflow-x-auto p-4">
          <code className="text-sm text-white/80 font-mono whitespace-pre">{code}</code>
        </pre>
      </div>
    </div>
  )
}

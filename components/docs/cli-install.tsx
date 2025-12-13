"use client"

import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"

interface CLIInstallProps {
  componentName: string
}

export function CLIInstall({ componentName }: CLIInstallProps) {
  const [copied, setCopied] = useState(false)
  const command = `npx shadcn@latest add https://ein-ui.vercel.app/r/${componentName}.json`

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Terminal className="h-4 w-4 text-cyan-400" />
        <span className="text-sm font-medium text-white/80">Installation</span>
      </div>
      <div className="relative group">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm px-4 py-3 font-mono text-sm text-white/70 overflow-x-auto">
          <span className="text-cyan-400 select-none">$</span>
          <code className="flex-1">{command}</code>
          <button
            onClick={copyToClipboard}
            className="shrink-0 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
            aria-label="Copy to clipboard"
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}

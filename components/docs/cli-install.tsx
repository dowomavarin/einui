"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"

const CLI_INSTALL_COMMAND = "npx shadcn@latest add"
const COPY_FEEDBACK_DURATION = 2000

interface CLIInstallProps {
  componentName: string
}

function getInstallCommand(componentName: string) {
  return `${CLI_INSTALL_COMMAND} @einui/${componentName}`
}

export function CLIInstall({ componentName }: CLIInstallProps) {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const command = useMemo(
    () => getInstallCommand(componentName),
    [componentName]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const copyToClipboard = useCallback(async () => {
    try {
      setCopyError(false)
      await navigator.clipboard.writeText(command)
      setCopied(true)
      timeoutRef.current = window.setTimeout(
        () => setCopied(false),
        COPY_FEEDBACK_DURATION
      )
    } catch {
      setCopyError(true)
      window.setTimeout(() => setCopyError(false), COPY_FEEDBACK_DURATION)
    }
  }, [command])

  return (
    <section className="mb-8 w-full rounded-2xl border border-white/10 bg-[#101923]/80 p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-medium text-white">Add this component</span>
        </div>
          <span className="text-xs text-white/40">shadcn CLI</span>
      </div>
      <div className="relative group">
        <div className="flex items-center gap-3 overflow-x-auto rounded-xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-sm text-white/70">
          <span className="text-cyan-400 select-none">$</span>
          <code className="flex-1">{command}</code>
          <button
            type="button"
            onClick={copyToClipboard}
            className="shrink-0 rounded-lg bg-white/5 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            aria-label={copied ? "Install command copied" : copyError ? "Copy failed" : "Copy install command"}
            aria-pressed={copied}
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Install command copied" : copyError ? "Copy failed" : ""}
          </span>
        </div>
      </div>
    </section>
  )
}

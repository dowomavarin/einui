"use client"

import { CopyButton } from "./copy-button"
import { StyledCode } from "./styled-code"
import { cn } from "@/lib/utils"

interface CodeBlockWithCopyProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  className?: string
  highlightLines?: number[]
}

export function CodeBlockWithCopy({
  code,
  language = "bash",
  filename,
  showLineNumbers = false,
  className,
  highlightLines = [],
}: CodeBlockWithCopyProps) {
  return (
    <div className={cn("group relative w-full overflow-hidden rounded-xl border border-white/10 bg-linear-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-xl shadow-xl transition-colors duration-300 hover:border-white/20", className)}>
      {filename && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-linear-to-r from-white/5 to-white/2 backdrop-blur">
          <span className="text-xs text-white/70 font-mono font-medium">
            {filename}
          </span>
          <span className="text-xs text-cyan-400 font-mono font-semibold px-2 py-1 bg-cyan-500/10 rounded border border-cyan-500/30">
            {language}
          </span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 pr-14 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent sm:p-5 sm:pr-16">
          <StyledCode
            code={code}
            language={language}
            showLineNumbers={showLineNumbers}
            highlightLines={highlightLines}
          />
        </pre>
        {!filename && (
          <div className="absolute right-3 top-3">
            <CopyButton text={code} language={language} />
          </div>
        )}
        {filename && (
          <div className="absolute top-2 right-2 opacity-100">
            <CopyButton text={code} language={language} />
          </div>
        )}
      </div>
    </div>
  )
}